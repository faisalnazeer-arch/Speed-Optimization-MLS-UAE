/* ============================================================
   Area → Outlet → Inventory  |  area-outlet-inventory.js
   ============================================================ */

class AreaOutletInventory {
  constructor(el) {
    this.root        = el;
    this.shopDomain  = el.dataset.shopDomain;
    this.token       = el.dataset.storefrontToken;
    this.apiVersion  = el.dataset.apiVersion || '2024-01';
    this.endpoint    = `https://${this.shopDomain}/api/${this.apiVersion}/graphql.json`;

    // Runtime state
    this.areas       = [];   // [{ name, outletName }]
    this.locationMap = {};   // { 'Outlet Name': 'gid://shopify/Location/123' }

    // DOM refs (elements are prefixed with the section's unique id)
    const id = el.id;
    this.areaSelect   = el.querySelector(`#${id}-area`);
    this.outletEl     = el.querySelector(`#${id}-outlet`);
    this.outletNameEl = el.querySelector(`#${id}-outlet-name`);
    this.gridEl       = el.querySelector(`#${id}-grid`);
    this.skeletonsEl  = el.querySelector(`#${id}-skeletons`);
    this.errorEl      = el.querySelector(`#${id}-error`);
    this.errorMsgEl   = el.querySelector(`#${id}-error-msg`);
    this.retryBtn     = el.querySelector(`#${id}-retry`);

    this._init();
  }

  /* ── Bootstrap ─────────────────────────────────────────────────────────── */

  async _init() {
    try {
      await Promise.all([this._loadAreas(), this._loadLocations()]);
      this._buildSelect();
      this._bindEvents();
    } catch (err) {
      this._showError(err.message, () => this._init());
    }
  }

  /* ── GraphQL helper ─────────────────────────────────────────────────────── */

  async _gql(query, variables) {
    const res = await fetch(this.endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': this.token,
      },
      body: JSON.stringify({ query, variables: variables || {} }),
    });

    if (!res.ok) throw new Error(`API error ${res.status}: ${res.statusText}`);

    const json = await res.json();
    if (json.errors && json.errors.length) {
      throw new Error(json.errors[0].message);
    }
    return json.data;
  }

  /* ── Data loaders ───────────────────────────────────────────────────────── */

  async _loadAreas() {
    const data = await this._gql(`
      {
        metaobjects(type: "delivery_area", first: 250) {
          nodes {
            fields { key value }
          }
        }
      }
    `);

    const seen = new Set();
    this.areas = data.metaobjects.nodes.reduce((acc, node) => {
      const f = Object.fromEntries(node.fields.map(({ key, value }) => [key, value]));
      const areaName   = f.name;
      const outletName = f.outlet_name;
      if (areaName && !seen.has(areaName)) {
        seen.add(areaName);
        acc.push({ name: areaName, outletName });
      }
      return acc;
    }, []);
  }

  async _loadLocations() {
    const data = await this._gql(`
      {
        locations(first: 100) {
          nodes { id name }
        }
      }
    `);

    this.locationMap = {};
    data.locations.nodes.forEach(({ id, name }) => {
      this.locationMap[name] = id;
    });
  }

  async _loadProducts(locationId) {
    const data = await this._gql(
      `query Products($locationId: ID!) {
        products(first: 250) {
          nodes {
            id
            title
            handle
            featuredImage { url altText }
            priceRange {
              minVariantPrice { amount currencyCode }
            }
            variants(first: 1) {
              nodes {
                id
                storeAvailability(locationId: $locationId, first: 1) {
                  nodes { available quantityAvailable }
                }
              }
            }
          }
        }
      }`,
      { locationId }
    );
    return data.products.nodes;
  }

  /* ── Select builder ─────────────────────────────────────────────────────── */

  _buildSelect() {
    this.areaSelect.innerHTML = '<option value="">Choose an area…</option>';
    this.areas.forEach(({ name }) => {
      const opt = document.createElement('option');
      opt.value       = name;
      opt.textContent = name;
      this.areaSelect.appendChild(opt);
    });
    this.areaSelect.disabled = false;
  }

  /* ── Area change handler ────────────────────────────────────────────────── */

  async _onAreaChange(areaName) {
    this._hideError();
    this.outletEl.hidden   = true;
    this.gridEl.hidden     = true;
    this.skeletonsEl.hidden = true;
    this.gridEl.innerHTML  = '';

    if (!areaName) return;

    const area = this.areas.find(a => a.name === areaName);
    if (!area) return;

    const locationId = this.locationMap[area.outletName];
    if (!locationId) {
      this._showError(
        `No Shopify Location found for outlet “${area.outletName}”. Verify the outlet_name matches a Location name exactly.`,
        () => this._onAreaChange(areaName)
      );
      return;
    }

    // Show outlet name
    this.outletNameEl.textContent = area.outletName;
    this.outletEl.hidden          = false;

    // Show skeleton loader
    this.skeletonsEl.hidden = false;

    try {
      const products = await this._loadProducts(locationId);
      this._renderGrid(products);
    } catch (err) {
      this._showError(err.message, () => this._onAreaChange(areaName));
    } finally {
      this.skeletonsEl.hidden = true;
    }
  }

  /* ── Grid renderer ──────────────────────────────────────────────────────── */

  _renderGrid(products) {
    const lang     = document.documentElement.lang || 'en';
    const fragment = document.createDocumentFragment();

    products.forEach(product => {
      const variant  = product.variants.nodes[0];
      const avail    = variant?.storeAvailability?.nodes?.[0];
      // quantityAvailable is null when inventory tracking is off (treat as in stock).
      // When tracking is on, use actual quantity > 0.
      const inStock  = avail
        ? (avail.quantityAvailable != null ? avail.quantityAvailable > 0 : avail.available)
        : false;
      const { amount, currencyCode } = product.priceRange.minVariantPrice;

      const formatted = new Intl.NumberFormat(lang, {
        style:    'currency',
        currency: currencyCode,
      }).format(amount);

      const card = document.createElement('div');
      card.className = `aoi-card${inStock ? '' : ' aoi-card--oos'}`;

      const imgHTML = product.featuredImage
        ? `<img
            src="${product.featuredImage.url}&width=400"
            alt="${this._esc(product.featuredImage.altText || product.title)}"
            loading="lazy"
            width="400"
            height="400"
           >`
        : `<div class="aoi-card__img-placeholder"></div>`;

      card.innerHTML = `
        <div class="aoi-card__img-wrap">
          ${imgHTML}
          ${inStock ? '' : '<span class="aoi-badge">Out of Stock</span>'}
        </div>
        <div class="aoi-card__body">
          <h3 class="aoi-card__title">
            <a href="/products/${product.handle}">${this._esc(product.title)}</a>
          </h3>
          <p class="aoi-card__price">${formatted}</p>
          <button
            class="aoi-card__btn button button--primary"
            data-variant-id="${variant?.id || ''}"
            ${inStock ? '' : 'disabled title="Not available at this outlet"'}
          >${inStock ? 'Add to Cart' : 'Out of Stock'}</button>
        </div>
      `;

      fragment.appendChild(card);
    });

    this.gridEl.innerHTML = '';
    this.gridEl.appendChild(fragment);
    this.gridEl.hidden = false;

    this._bindAddToCart();
  }

  /* ── Add to cart ────────────────────────────────────────────────────────── */

  _bindAddToCart() {
    this.gridEl.querySelectorAll('.aoi-card__btn:not([disabled])').forEach(btn => {
      btn.addEventListener('click', async () => {
        const gid = btn.dataset.variantId;
        if (!gid) return;

        // Storefront API returns GIDs like gid://shopify/ProductVariant/12345
        const numericId = gid.split('/').pop();

        const label = btn.textContent;
        btn.disabled    = true;
        btn.textContent = 'Adding…';

        try {
          const res = await fetch('/cart/add.js', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: numericId, quantity: 1 }),
          });
          if (!res.ok) throw new Error('Add to cart failed');

          btn.textContent = 'Added ✓';

          // Notify theme cart drawer / mini-cart listeners
          document.dispatchEvent(new CustomEvent('cart:refresh', { bubbles: true }));

          setTimeout(() => {
            btn.textContent = label;
            btn.disabled    = false;
          }, 1800);
        } catch {
          btn.textContent = 'Error – Retry';
          btn.disabled    = false;
        }
      });
    });
  }

  /* ── Events ─────────────────────────────────────────────────────────────── */

  _bindEvents() {
    this.areaSelect.addEventListener('change', e => this._onAreaChange(e.target.value));
  }

  /* ── Error handling ─────────────────────────────────────────────────────── */

  _showError(msg, retryFn) {
    this.errorMsgEl.textContent = msg;
    this.errorEl.hidden         = false;
    this.retryBtn.onclick = () => {
      this._hideError();
      retryFn();
    };
  }

  _hideError() {
    this.errorEl.hidden = true;
  }

  /* ── Utility ────────────────────────────────────────────────────────────── */

  _esc(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }
}

/* ============================================================
   Header Delivery Area Selector
   ============================================================ */

const AOI_STORAGE_KEY = 'aoi_selected_area';

class HeaderAreaSelector {
  constructor(el) {
    this.root       = el;
    this.shopDomain = el.dataset.shopDomain;
    this.token      = el.dataset.storefrontToken;
    this.apiVersion = '2024-01';
    this.endpoint   = `https://${this.shopDomain}/api/${this.apiVersion}/graphql.json`;

    this.areas       = [];
    this.locationMap = {};

    // Scope all queries to root element to avoid ID collisions
    this.btn        = el.querySelector('.hdr-area__btn');
    this.panel      = el.querySelector('.hdr-area__panel');
    this.label      = el.querySelector('.hdr-area__label');
    this.select     = el.querySelector('.hdr-area__select');
    this.outletEl   = el.querySelector('.hdr-area__outlet');
    this.outletName = el.querySelector('.hdr-area__outlet strong');
    this.errorEl    = el.querySelector('.hdr-area__error');
    this.errorMsg   = el.querySelector('#hdr-area-error-msg');
    this.retryBtn   = el.querySelector('#hdr-area-retry');

    this._bindEvents(); // bind UI immediately so the panel always opens
    this._init();
  }

  async _init() {
    this._hideError();
    this.select.innerHTML = '<option value="">Loading…</option>';
    this.select.disabled = true;
    try {
      await Promise.all([this._loadAreas(), this._loadLocations()]);
      this._buildSelect();
      this._restoreFromStorage();
    } catch (err) {
      console.error('[HeaderAreaSelector] init failed:', err);
      this._showError(err.message);
    }
  }

  async _gql(query, variables) {
    const res = await fetch(this.endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': this.token,
      },
      body: JSON.stringify({ query, variables: variables || {} }),
    });
    if (!res.ok) throw new Error(`API error ${res.status}`);
    const json = await res.json();
    if (json.errors && json.errors.length) throw new Error(json.errors[0].message);
    return json.data;
  }

  async _loadAreas() {
    const data = await this._gql(`{
      metaobjects(type: "delivery_area", first: 250) {
        nodes {
          fields { key value }
        }
      }
    }`);

    if (!data.metaobjects || !data.metaobjects.nodes.length) {
      throw new Error(
        'No delivery_area metaobjects found. ' +
        'Make sure the metaobject type is "delivery_area" and Storefront API access is enabled ' +
        '(Admin → Content → Metaobjects → Delivery Area → Manage definition → Storefront API access).'
      );
    }

    const seen = new Set();
    this.areas = data.metaobjects.nodes.reduce((acc, node) => {
      const f = Object.fromEntries(node.fields.map(({ key, value }) => [key, value]));
      const areaName = f.name;
      const outletName = f.outlet_name;
      if (areaName && !seen.has(areaName)) {
        seen.add(areaName);
        acc.push({ name: areaName, outletName });
      }
      return acc;
    }, []);

    if (!this.areas.length) {
      throw new Error('Metaobjects loaded but no valid entries found. Check that each entry has "name" and "outlet_name" fields.');
    }
  }

  async _loadLocations() {
    const data = await this._gql(`{ locations(first: 100) { nodes { id name } } }`);
    this.locationMap = {};
    data.locations.nodes.forEach(({ id, name }) => { this.locationMap[name] = id; });
  }

  _buildSelect() {
    this.select.innerHTML = '<option value="">Choose an area…</option>';
    this.areas.forEach(({ name }) => {
      const opt = document.createElement('option');
      opt.value = name;
      opt.textContent = name;
      this.select.appendChild(opt);
    });
    this.select.disabled = false;
  }

  _restoreFromStorage() {
    const saved = localStorage.getItem(AOI_STORAGE_KEY);
    if (saved) {
      this.select.value = saved;
      this._applySelection(saved, false);
    }
  }

  _applySelection(areaName, saveToStorage) {
    if (!areaName) {
      this.label.textContent = this.root.dataset.defaultLabel || 'Select Area';
      this.outletEl.hidden   = true;
      return;
    }
    const area = this.areas.find(a => a.name === areaName);
    if (!area) return;

    // Update header button label
    this.label.textContent = area.name;

    // Show outlet in panel
    this.outletName.textContent = area.outletName;
    this.outletEl.hidden        = false;

    if (saveToStorage) {
      localStorage.setItem(AOI_STORAGE_KEY, areaName);
    }

    // Notify any AOI page sections to reload
    const locationId = this.locationMap[area.outletName];
    document.dispatchEvent(new CustomEvent('aoi:area-changed', {
      detail: { areaName, outletName: area.outletName, locationId },
      bubbles: true,
    }));
  }

  _bindEvents() {
    if (this._eventsBound) return;
    this._eventsBound = true;

    // Toggle panel open/close
    this.btn.addEventListener('click', () => {
      const isOpen = this.panel.hidden === false;
      this.panel.hidden = isOpen;
      this.btn.setAttribute('aria-expanded', String(!isOpen));
    });

    // Close when clicking outside
    document.addEventListener('click', e => {
      if (!this.root.contains(e.target)) {
        this.panel.hidden = true;
        this.btn.setAttribute('aria-expanded', 'false');
      }
    });

    // Area change
    this.select.addEventListener('change', e => {
      this._applySelection(e.target.value, true);
    });

    // Retry always re-runs _init()
    if (this.retryBtn) {
      this.retryBtn.addEventListener('click', () => {
        this._hideError();
        this._init();
      });
    }
  }

  _showError(msg) {
    this.errorMsg.textContent = msg;
    this.errorEl.hidden       = false;
  }

  _hideError() { this.errorEl.hidden = true; }
}

/* ============================================================
   Product Page – Outlet Availability Checker
   ============================================================ */

class ProductOutletChecker {
  constructor(hdrEl) {
    this.token      = hdrEl.dataset.storefrontToken;
    this.shopDomain = hdrEl.dataset.shopDomain;
    this.apiVersion = '2024-01';
    this.endpoint   = `https://${this.shopDomain}/api/${this.apiVersion}/graphql.json`;

    this.addBtn       = document.querySelector('button[name="add"]');
    this.variantInput = document.querySelector('input[name="id"]');
    this._lastLocationId = null;

    if (!this.addBtn || !this.variantInput) return; // not a product page

    this._originalText = this.addBtn.textContent.trim();
    this._bindEvents();
  }

  _getVariantGid() {
    const id = this.variantInput.value;
    return id ? `gid://shopify/ProductVariant/${id}` : null;
  }

  _bindEvents() {
    // Area changed via header dropdown
    document.addEventListener('aoi:area-changed', async e => {
      const { locationId } = e.detail;
      if (locationId) await this._check(locationId);
    });

    // Re-check when variant changes (size/colour selection)
    document.addEventListener('change', async e => {
      if (e.target.name === 'id' && this._lastLocationId) {
        await this._check(this._lastLocationId);
      }
    });

    // Dawn / Prestige themes dispatch this on variant switch
    document.addEventListener('variant:change', async () => {
      if (this._lastLocationId) await this._check(this._lastLocationId);
    });
  }

  async _check(locationId) {
    this._lastLocationId = locationId;
    const variantGid = this._getVariantGid();
    if (!variantGid) return;

    try {
      const data = await this._gql(`
        query($id: ID!, $locationId: ID!) {
          node(id: $id) {
            ... on ProductVariant {
              storeAvailability(locationId: $locationId, first: 1) {
                nodes { available quantityAvailable }
              }
            }
          }
        }
      `, { id: variantGid, locationId });

      const avail   = data?.node?.storeAvailability?.nodes?.[0];
      const inStock = avail
        ? (avail.quantityAvailable != null ? avail.quantityAvailable > 0 : avail.available)
        : false;

      this._updateButton(inStock);
    } catch (err) {
      console.error('[ProductOutletChecker]', err);
    }
  }

  async _gql(query, variables) {
    const res = await fetch(this.endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': this.token,
      },
      body: JSON.stringify({ query, variables }),
    });
    if (!res.ok) throw new Error(`API error ${res.status}`);
    const json = await res.json();
    if (json.errors?.length) throw new Error(json.errors[0].message);
    return json.data;
  }

  _updateButton(inStock) {
    if (!this.addBtn) return;
    if (inStock) {
      this.addBtn.disabled = false;
      // Restore original button text (handle span wrappers in themed buttons)
      const textEl = this.addBtn.querySelector('[data-add-to-cart-text], .btn-text, span');
      if (textEl) textEl.textContent = this._originalText;
      else this.addBtn.textContent = this._originalText;
    } else {
      this.addBtn.disabled = true;
      const textEl = this.addBtn.querySelector('[data-add-to-cart-text], .btn-text, span');
      if (textEl) textEl.textContent = 'Out of Stock at this outlet';
      else this.addBtn.textContent = 'Out of Stock at this outlet';
    }
  }
}

/* ============================================================
   Bootstrap
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  // Header selector
  const hdrEl = document.getElementById('hdr-area');
  if (hdrEl && hdrEl.dataset.storefrontToken) {
    new HeaderAreaSelector(hdrEl);
    new ProductOutletChecker(hdrEl); // product page outlet check
  }

  // Page section grid(s)
  document.querySelectorAll('.aoi-wrapper[data-storefront-token]').forEach(el => {
    if (el.dataset.storefrontToken) {
      const instance = new AreaOutletInventory(el);

      // If header selector fires an area-changed event, reload the grid
      document.addEventListener('aoi:area-changed', e => {
        const { locationId } = e.detail;
        if (locationId) instance._onAreaChange(e.detail.areaName);
      });
    }
  });
});
