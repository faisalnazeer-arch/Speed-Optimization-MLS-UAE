(() => { if (window.BEAEPAGEJS === undefined) {
            window.BEAEPAGEJS = [];
          }

          if(window.beaePageSetting == undefined) {
            window.beaePageSetting = {};
          }
          
          window.beaePageSetting.pageId = "6981e928a3db6c6afc0749d5";
              window.beaePageSetting.pageTitle = "Ramadan Sale 2026"; 
              window.beaePageSetting.pageType = "page";

          let js_6A0O96VH = () => { let BeaeUseHooks = {};
      try {
        let argid = 'beae-bpikkbt4section-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-bpikkbt4',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-bpikkbt4');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-bpikkbt4: ', ex)
      };
    

      try {
        let argid = 'beae-754czclqblock-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-754czclq',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-754czclq');
        args.el = args.els[0];
        ((M) => { var O;if(M.el){if(M.shape){const E=M.el.closest(".beae-slider-items");E&&!E.hasAttribute("data-svg")&&(E==null||E.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${M.id}" clipPathUnits="objectBoundingBox">
                                ${M.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),E.setAttribute("data-svg","true"))}let H=M.el.querySelector(".beae-image-content-position"),z,I=window.innerWidth>=768&&M.autoHover;var V=H.querySelector(".beae-img-ratio-control"),L=H.querySelector(".beae-img-comp-container"),T=H.querySelector(".beae-img-comp-container--second");if(V&&T){let E=function(A){let D=0,q;j(),I?H.onmouseover=function(G){F(G)}:A.onmousedown=function(G){F(G)},H.onmouseup=function(){R()},A.ontouchstart=function(G){F(G)},H.ontouchend=function(){R()};function j(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{z=T.offsetWidth})}).observe(T),A.style.left&&parseInt(A.style.left)}function F(G){check=!1,G.preventDefault(),G.clientX?G.clientX:G.touches[0].clientX,parseInt(A.style.left),D=1,H.onmousemove=function(Y){W(Y)},H.ontouchmove=function(Y){W(Y)}}function R(){D=0,check=!0}function W(G){if(D==0)return!1;q=U(G),q<0&&(q=0),q>100&&(q=100),Z(q)}function U(G){const Y=H.getBoundingClientRect(),ie=(G.changedTouches?G.changedTouches[0].clientX:G.clientX)-Y.left;return Math.max(0,Math.min(100,Math.round(ie*100/z)))}function Z(G){A.style.left=G+"%",T.style.clipPath=`polygon(${G}% 0%, ${G}% 100%, 100% 100%, 100% 0)`,L.style.clipPath=`polygon(0% 100%, 0% 0%, ${G}% 0%, ${G}% 100%)`}};V&&T&&E(V),window.addEventListener("resize",function(){V&&T&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{z=T.offsetWidth})}).observe(T),E(V))})}}let N=(O=M.el)==null?void 0:O.querySelector("a.beae-x-image"),P=N==null?void 0:N.getAttribute("href");N&&M.mode.value!=="builder"&&(P!=null&&P.includes("#"))&&N.addEventListener("click",H=>{let z=document.querySelector(P+","+(P==null?void 0:P.replace("#",".")));if(z)return z.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),H.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-754czclq: ', ex)
      };
    

      try {
        let argid = 'beae-6z7msncnsection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-6z7msncn',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-6z7msncn');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-6z7msncn: ', ex)
      };
    

      try {
        let argid = 'beae-0fjc67vu',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-0fjc67vu',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-0fjc67vu');
        args.el = args.els[0];
        ((v) => { var w;if(((w=v==null?void 0:v.mode)==null?void 0:w.value)=="builder"&&!(v!=null&&v.disabled))return;let S=v.el.querySelector(".beae-marquee-content"),B=S.parentNode,k=x=>{v.el.querySelectorAll(".beae-marquee-content-clone").forEach(L=>L.parentNode.removeChild(L));let M=0,V=Math.ceil((B.offsetWidth>=v.el.offsetWidth?B.offsetWidth:v.el.offsetWidth)*2/x.offsetWidth);V=V<=10?V:10;for(let L=0;L<V;L++){let T=x.cloneNode(!0);T.classList.add("beae-marquee-content-clone");const N=T.querySelectorAll("img");N.length>0&&N.forEach(P=>{P.setAttribute("loading","lazy"),P.setAttribute("load","true")}),B.appendChild(T),M<v.el.offsetWidth&&(M+=x.offsetWidth)}B.style.setProperty("--marquee-animation-duration",M/10*.01*((v==null?void 0:v.speed)??10)+"s"),B.style.setProperty("--marquee-animation-offset",-M+"px"),window.dispatchEvent(new CustomEvent("marqueeClone",{detail:{id:v==null?void 0:v.id}}))};window.addEventListener("resize",()=>{k(S)}),k(S);let $=new IntersectionObserver(x=>{x.forEach(M=>{M.intersectionRatio>0&&(k(S),M.target.querySelectorAll('[loading="lazy"]').forEach(V=>{V.removeAttribute("loading")}),$.unobserve(M.target))})},{});$.observe(B) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-0fjc67vu: ', ex)
      };
    

      try {
        let argid = 'beae-wv2gnhjablock-textloop-0',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-wv2gnhja',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-wv2gnhja');
        args.el = args.els[0];
        ((O) => { var z;let H=(z=O.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(I=>{let E=I==null?void 0:I.getAttribute("href");I&&O.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&I.addEventListener("click",A=>{let D=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-wv2gnhja: ', ex)
      };
    

      try {
        let argid = 'beae-wv2gnhjablock-textloop-1',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-wv2gnhja',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-wv2gnhja');
        args.el = args.els[1];
        ((O) => { var z;let H=(z=O.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(I=>{let E=I==null?void 0:I.getAttribute("href");I&&O.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&I.addEventListener("click",A=>{let D=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-wv2gnhja: ', ex)
      };
    

      try {
        let argid = 'beae-wv2gnhjablock-textloop-2',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-wv2gnhja',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-wv2gnhja');
        args.el = args.els[2];
        ((O) => { var z;let H=(z=O.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(I=>{let E=I==null?void 0:I.getAttribute("href");I&&O.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&I.addEventListener("click",A=>{let D=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-wv2gnhja: ', ex)
      };
    

      try {
        let argid = 'beae-emq2m35wsection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-emq2m35w',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-emq2m35w');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-emq2m35w: ', ex)
      };
    

      try {
        let argid = 'beae-udyec7feblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-udyec7fe',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-udyec7fe');
        args.el = args.els[0];
        ((O) => { var z;let H=(z=O.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(I=>{let E=I==null?void 0:I.getAttribute("href");I&&O.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&I.addEventListener("click",A=>{let D=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-udyec7fe: ', ex)
      };
    

      try {
        let argid = 'beae-pk0qb8hvsection-featured-collection',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-pk0qb8hv',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-pk0qb8hv');
        args.el = args.els[0];
        ((a) => { var c;window.BeaeMoneyFormat||(window.BeaeMoneyFormat=(c=a.el.querySelector(".beae-money-format"))==null?void 0:c.innerHTML);let n=a.el.querySelectorAll(".beae-featuted-collection-nav");const t=a.el.querySelectorAll(".beae-feature-collection-tab-content"),o=a.el.querySelector(".beae-featuted-collection-nav.nav-active"),r=a.el.closest(".beae-body--preview");n.forEach((d,l)=>{a.mode.value=="live"&&!o&&(l===0?(d.classList.add("nav-active"),t[l]&&(t[l].style.display="block",t[l].setAttribute("data-active","true"))):(d.classList.remove("nav-active"),t[l]&&(t[l].style.display="none",t[l].setAttribute("data-active","false"))));let _=!1;d.addEventListener("click",()=>{if(_)return;_=!0,n.forEach(f=>{f.classList.remove("nav-active")}),d.classList.add("nav-active");const y=d.getAttribute("data-handle"),m=a.el.querySelectorAll(".viewall-link");m&&m.forEach(f=>{f.setAttribute("href",`/collections/${y}`)});const h=a.el.querySelector(`.beae-feature-collection-tab-content[data-handle="${y}"]`),u=a.el.querySelector('.beae-feature-collection-tab-content[data-active="true"]');if(a.el.querySelector(".beae-feature-collection-tab-content.content-active")!==null&&a.el.querySelector(".beae-feature-collection-tab-content.content-active").classList.remove("content-active"),u){u.setAttribute("data-active","false");const f=s(u);setTimeout(()=>{u.style.display="none",h&&(h.style.display="block"),setTimeout(()=>{h&&h.setAttribute("data-active","true"),_=!1},50)},f)}else h&&(h.style.display="block"),setTimeout(()=>{h&&h.setAttribute("data-active","true"),_=!1},50)})});function s(d){const _=window.getComputedStyle(d).getPropertyValue("transition-duration");let y=parseFloat(_)*1e3;return _.includes("s")?y=parseFloat(_)*1e3:y=parseFloat(_),y||0}setTimeout(()=>{typeof window.handleSwatchForCardForm=="function"&&window.handleSwatchForCardForm(a),typeof(a==null?void 0:a.promotionPosition)=="number"&&p(a==null?void 0:a.promotionPosition)},100),(["builder"].includes(a.mode.value)||r)&&setTimeout(()=>{typeof window.handleEventFormProductCard=="function"&&window.handleEventFormProductCard()},100);function p(d){if(a.mode.value!="live")return;const l=a.el.querySelectorAll(".beae-slider-items");if(l&&l.length){l.forEach(y=>{const m=a.el.querySelector(".beae-promotion > *");if(!m)return;const h=m.cloneNode(!0),u=y.children;d>=u.length?y.appendChild(h):y.insertBefore(h,u[d])});const _=a.el.querySelector(".beae-promotion");_&&_.remove()}} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-pk0qb8hv: ', ex)
      };
    

      try {
        let argid = 'beae-pk0qb8hvsection-slide-show',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-pk0qb8hv',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-pk0qb8hv');
        args.el = args.els[0];
        ((h) => { window.BeaeSlider&&!h.noRunJs&&window.BeaeSlider(h) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-pk0qb8hv: ', ex)
      };
    

      try {
        let argid = 'beae-rv47o15pblock-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-rv47o15p',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-rv47o15p');
        args.el = args.els[0];
        ((M) => { var O;if(M.el){if(M.shape){const E=M.el.closest(".beae-slider-items");E&&!E.hasAttribute("data-svg")&&(E==null||E.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${M.id}" clipPathUnits="objectBoundingBox">
                                ${M.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),E.setAttribute("data-svg","true"))}let H=M.el.querySelector(".beae-image-content-position"),z,I=window.innerWidth>=768&&M.autoHover;var V=H.querySelector(".beae-img-ratio-control"),L=H.querySelector(".beae-img-comp-container"),T=H.querySelector(".beae-img-comp-container--second");if(V&&T){let E=function(A){let D=0,q;j(),I?H.onmouseover=function(G){F(G)}:A.onmousedown=function(G){F(G)},H.onmouseup=function(){R()},A.ontouchstart=function(G){F(G)},H.ontouchend=function(){R()};function j(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{z=T.offsetWidth})}).observe(T),A.style.left&&parseInt(A.style.left)}function F(G){check=!1,G.preventDefault(),G.clientX?G.clientX:G.touches[0].clientX,parseInt(A.style.left),D=1,H.onmousemove=function(Y){W(Y)},H.ontouchmove=function(Y){W(Y)}}function R(){D=0,check=!0}function W(G){if(D==0)return!1;q=U(G),q<0&&(q=0),q>100&&(q=100),Z(q)}function U(G){const Y=H.getBoundingClientRect(),ie=(G.changedTouches?G.changedTouches[0].clientX:G.clientX)-Y.left;return Math.max(0,Math.min(100,Math.round(ie*100/z)))}function Z(G){A.style.left=G+"%",T.style.clipPath=`polygon(${G}% 0%, ${G}% 100%, 100% 100%, 100% 0)`,L.style.clipPath=`polygon(0% 100%, 0% 0%, ${G}% 0%, ${G}% 100%)`}};V&&T&&E(V),window.addEventListener("resize",function(){V&&T&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{z=T.offsetWidth})}).observe(T),E(V))})}}let N=(O=M.el)==null?void 0:O.querySelector("a.beae-x-image"),P=N==null?void 0:N.getAttribute("href");N&&M.mode.value!=="builder"&&(P!=null&&P.includes("#"))&&N.addEventListener("click",H=>{let z=document.querySelector(P+","+(P==null?void 0:P.replace("#",".")));if(z)return z.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),H.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-rv47o15p: ', ex)
      };
    

      try {
        let argid = 'beae-zc5l8d6yblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-zc5l8d6y',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-zc5l8d6y');
        args.el = args.els[0];
        ((O) => { var z;let H=(z=O.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(I=>{let E=I==null?void 0:I.getAttribute("href");I&&O.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&I.addEventListener("click",A=>{let D=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-zc5l8d6y: ', ex)
      };
    

      try {
        let argid = 'beae-rnpzmugpsection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-rnpzmugp',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-rnpzmugp');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-rnpzmugp: ', ex)
      };
    

      try {
        let argid = 'beae-rnpzmugpsection-slide-show',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-rnpzmugp',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-rnpzmugp');
        args.el = args.els[0];
        ((h) => { window.BeaeSlider&&!h.noRunJs&&window.BeaeSlider(h) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-rnpzmugp: ', ex)
      };
    

      try {
        let argid = 'beae-vtia8rbrblock-video',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-vtia8rbr',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-vtia8rbr');
        args.el = args.els[0];
        ((data) => { if(data.mode.value==="builder")return;if(data.source=="self hosted"&&data.el.querySelector(".beae_video")&&data.mute){const f=data.el.querySelector(".beae_video");f.muted=!0,f.play().catch(b=>{console.warn("Autoplay bị chặn:",b)})}const playButton=data.el.querySelector(".beae-video_overlay-icon"),playIcon=playButton&&playButton.querySelector(".beae-video-icon-play"),closePlayingButton=data.el.querySelector(".beae-close-video"),closeVideoFn=()=>{let f=playButton.closest(".beae-grid-block"),b=data.el.querySelector(".beae-x-video--wrapper");b&&b.classList.remove("playing"),f&&(f.style.zIndex=""),data.lightbox&&(document.querySelector("div.beae-builder")&&(document.querySelector("div.beae-builder").style.zIndex=""),f&&f.setAttribute("style",""),document.body.style.overflow="",document.documentElement.style.overflow="");let C=data.el.querySelector(".beae_video");C&&(C.autoplay=!1,C.pause());let g=data.el.querySelector(".beae_iframe");g&&g.getAttribute("src").indexOf("&autoplay=1")>-1&&g.setAttribute("src",g.getAttribute("src").replace("&autoplay=1",""))};if(playButton&&(playIcon&&playIcon.addEventListener("click",e=>{if(data.source=="self hosted"){let f=data.el.querySelector(".beae_video");f.autoplay=!0,f.load(),playButton.classList.remove("beae-overlay"),data.play_icon&&(data.el.querySelector(".beae-video-icon-play").style.display="none")}else{let f=data.el.querySelector(".beae_iframe"),b=f.getAttribute("src")+"&autoplay=1";f.setAttribute("src",b),playButton.classList.remove("beae-overlay"),data.play_icon&&(data.el.querySelector(".beae-video-icon-play").style.display="none")}let gridBlock=playButton.closest(".beae-grid-block"),wrapper=data.el.querySelector(".beae-x-video--wrapper");if(wrapper&&wrapper.classList.add("playing"),gridBlock&&(gridBlock.style.zIndex=1e8),data.lightbox){let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(f){extOptions={},console.error(f)}window.BeaePopupLibrary.createPopup(data.el.querySelector(".beae-block_video-player"),{width:"1070px",sectionId:data.id,...extOptions}),closeVideoFn()}}),closePlayingButton&&closePlayingButton.addEventListener("click",closeVideoFn)),["youtube","vimeo"].includes(data.source)&&(data.autoplay||data.loop)){let f=data.el.querySelector(".beae_iframe"),b={isloop:data.loop,autoplay:data.autoplay,idBlock:data.uniqueId||data.id,controls:data.player_controls?1:0,muted:data.mute};if(data.source=="youtube"){const C=/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;let g=data.srcYoutube.match(C),v=g&&g[2].length===11?g[2]:null;const S=/[?&]t=(\d+)s/,B=data.srcYoutube.match(S),k=B?B[1]:0;b.start=k,b.id=v,b.src=location.protocol+"//www.youtube.com/embed/"+v}switch(data.source){case"youtube":setTimeout(()=>{window.BEAEVIDEO.handleLoopYoutube&&window.BEAEVIDEO.handleLoopYoutube(b,data.uniqueId||data.id)});break;case"vimeo":setTimeout(()=>{window.BEAEVIDEO.handleLoopVimeo&&window.BEAEVIDEO.handleLoopVimeo(b,f)});break}} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-vtia8rbr: ', ex)
      };
    

      try {
        let argid = 'beae-nl39cbfzsection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-nl39cbfz',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-nl39cbfz');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-nl39cbfz: ', ex)
      };
    

      try {
        let argid = 'beae-ono0qwo4block-video',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-ono0qwo4',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-ono0qwo4');
        args.el = args.els[0];
        ((data) => { if(data.mode.value==="builder")return;if(data.source=="self hosted"&&data.el.querySelector(".beae_video")&&data.mute){const f=data.el.querySelector(".beae_video");f.muted=!0,f.play().catch(b=>{console.warn("Autoplay bị chặn:",b)})}const playButton=data.el.querySelector(".beae-video_overlay-icon"),playIcon=playButton&&playButton.querySelector(".beae-video-icon-play"),closePlayingButton=data.el.querySelector(".beae-close-video"),closeVideoFn=()=>{let f=playButton.closest(".beae-grid-block"),b=data.el.querySelector(".beae-x-video--wrapper");b&&b.classList.remove("playing"),f&&(f.style.zIndex=""),data.lightbox&&(document.querySelector("div.beae-builder")&&(document.querySelector("div.beae-builder").style.zIndex=""),f&&f.setAttribute("style",""),document.body.style.overflow="",document.documentElement.style.overflow="");let C=data.el.querySelector(".beae_video");C&&(C.autoplay=!1,C.pause());let g=data.el.querySelector(".beae_iframe");g&&g.getAttribute("src").indexOf("&autoplay=1")>-1&&g.setAttribute("src",g.getAttribute("src").replace("&autoplay=1",""))};if(playButton&&(playIcon&&playIcon.addEventListener("click",e=>{if(data.source=="self hosted"){let f=data.el.querySelector(".beae_video");f.autoplay=!0,f.load(),playButton.classList.remove("beae-overlay"),data.play_icon&&(data.el.querySelector(".beae-video-icon-play").style.display="none")}else{let f=data.el.querySelector(".beae_iframe"),b=f.getAttribute("src")+"&autoplay=1";f.setAttribute("src",b),playButton.classList.remove("beae-overlay"),data.play_icon&&(data.el.querySelector(".beae-video-icon-play").style.display="none")}let gridBlock=playButton.closest(".beae-grid-block"),wrapper=data.el.querySelector(".beae-x-video--wrapper");if(wrapper&&wrapper.classList.add("playing"),gridBlock&&(gridBlock.style.zIndex=1e8),data.lightbox){let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(f){extOptions={},console.error(f)}window.BeaePopupLibrary.createPopup(data.el.querySelector(".beae-block_video-player"),{width:"1070px",sectionId:data.id,...extOptions}),closeVideoFn()}}),closePlayingButton&&closePlayingButton.addEventListener("click",closeVideoFn)),["youtube","vimeo"].includes(data.source)&&(data.autoplay||data.loop)){let f=data.el.querySelector(".beae_iframe"),b={isloop:data.loop,autoplay:data.autoplay,idBlock:data.uniqueId||data.id,controls:data.player_controls?1:0,muted:data.mute};if(data.source=="youtube"){const C=/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;let g=data.srcYoutube.match(C),v=g&&g[2].length===11?g[2]:null;const S=/[?&]t=(\d+)s/,B=data.srcYoutube.match(S),k=B?B[1]:0;b.start=k,b.id=v,b.src=location.protocol+"//www.youtube.com/embed/"+v}switch(data.source){case"youtube":setTimeout(()=>{window.BEAEVIDEO.handleLoopYoutube&&window.BEAEVIDEO.handleLoopYoutube(b,data.uniqueId||data.id)});break;case"vimeo":setTimeout(()=>{window.BEAEVIDEO.handleLoopVimeo&&window.BEAEVIDEO.handleLoopVimeo(b,f)});break}} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-ono0qwo4: ', ex)
      };
    

      try {
        let argid = 'beae-oti2i7arsection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-oti2i7ar',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-oti2i7ar');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-oti2i7ar: ', ex)
      };
    

      try {
        let argid = 'beae-6s5jfjg5button-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-6s5jfjg5',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-6s5jfjg5');
        args.el = args.els[0];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{var n,t;let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(o){extOptions={},console.error(o)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let o=document.querySelector(selector+","+selector.replace("#","."));if(o)return o.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let s=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(s,{id:data.id,...extOptions}),e.preventDefault();return}const o=window.createLoading(e.currentTarget);let r=(t=(n=window.BEAE_HELPER)==null?void 0:n.routes)==null?void 0:t.root_url;return window.BeaePopupLibrary.lightbox({id:data.id,url:(r!=="/"?r:"")+((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(s=>{s.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(s),o.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let o=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(o=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(o,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-6s5jfjg5: ', ex)
      };
    

      try {
        let argid = 'beae-0j5d263esection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-0j5d263e',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-0j5d263e');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-0j5d263e: ', ex)
      };
    

      try {
        let argid = 'beae-wrb416t9block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-wrb416t9',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-wrb416t9');
        args.el = args.els[0];
        ((O) => { var z;let H=(z=O.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(I=>{let E=I==null?void 0:I.getAttribute("href");I&&O.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&I.addEventListener("click",A=>{let D=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-wrb416t9: ', ex)
      };
    

      try {
        let argid = 'beae-a1lg9pm9block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-a1lg9pm9',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-a1lg9pm9');
        args.el = args.els[0];
        ((O) => { var z;let H=(z=O.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(I=>{let E=I==null?void 0:I.getAttribute("href");I&&O.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&I.addEventListener("click",A=>{let D=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-a1lg9pm9: ', ex)
      };
    

      try {
        let argid = 'beae-3nqoe2qmsection-slide-show',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-3nqoe2qm',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-3nqoe2qm');
        args.el = args.els[0];
        ((h) => { window.BeaeSlider&&!h.noRunJs&&window.BeaeSlider(h) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-3nqoe2qm: ', ex)
      };
    

      try {
        let argid = 'beae-4ac22gi5block-textloop-0',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-4ac22gi5',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-4ac22gi5');
        args.el = args.els[0];
        ((O) => { var z;let H=(z=O.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(I=>{let E=I==null?void 0:I.getAttribute("href");I&&O.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&I.addEventListener("click",A=>{let D=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-4ac22gi5: ', ex)
      };
    

      try {
        let argid = 'beae-o1yw9l21block-textloop-0',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-o1yw9l21',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-o1yw9l21');
        args.el = args.els[0];
        ((O) => { var z;let H=(z=O.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(I=>{let E=I==null?void 0:I.getAttribute("href");I&&O.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&I.addEventListener("click",A=>{let D=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-o1yw9l21: ', ex)
      };
    

      try {
        let argid = 'beae-jgvyuvunblock-textloop-0',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-jgvyuvun',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-jgvyuvun');
        args.el = args.els[0];
        ((O) => { var z;let H=(z=O.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(I=>{let E=I==null?void 0:I.getAttribute("href");I&&O.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&I.addEventListener("click",A=>{let D=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-jgvyuvun: ', ex)
      };
    

      try {
        let argid = 'beae-x9opsagfblock-textloop-0',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-x9opsagf',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-x9opsagf');
        args.el = args.els[0];
        ((O) => { var z;let H=(z=O.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(I=>{let E=I==null?void 0:I.getAttribute("href");I&&O.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&I.addEventListener("click",A=>{let D=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-x9opsagf: ', ex)
      };
    

      try {
        let argid = 'beae-cjfrym27block-textloop-0',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-cjfrym27',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-cjfrym27');
        args.el = args.els[0];
        ((O) => { var z;let H=(z=O.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(I=>{let E=I==null?void 0:I.getAttribute("href");I&&O.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&I.addEventListener("click",A=>{let D=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-cjfrym27: ', ex)
      };
    

      try {
        let argid = 'beae-sheexls4block-textloop-0',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-sheexls4',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-sheexls4');
        args.el = args.els[0];
        ((O) => { var z;let H=(z=O.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(I=>{let E=I==null?void 0:I.getAttribute("href");I&&O.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&I.addEventListener("click",A=>{let D=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-sheexls4: ', ex)
      };
    

      try {
        let argid = 'beae-b1p43zv9block-textloop-0',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-b1p43zv9',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-b1p43zv9');
        args.el = args.els[0];
        ((O) => { var z;let H=(z=O.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(I=>{let E=I==null?void 0:I.getAttribute("href");I&&O.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&I.addEventListener("click",A=>{let D=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-b1p43zv9: ', ex)
      };
    

      try {
        let argid = 'beae-4ac22gi5block-textloop-1',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-4ac22gi5',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-4ac22gi5');
        args.el = args.els[1];
        ((O) => { var z;let H=(z=O.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(I=>{let E=I==null?void 0:I.getAttribute("href");I&&O.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&I.addEventListener("click",A=>{let D=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-4ac22gi5: ', ex)
      };
    

      try {
        let argid = 'beae-o1yw9l21block-textloop-1',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-o1yw9l21',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-o1yw9l21');
        args.el = args.els[1];
        ((O) => { var z;let H=(z=O.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(I=>{let E=I==null?void 0:I.getAttribute("href");I&&O.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&I.addEventListener("click",A=>{let D=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-o1yw9l21: ', ex)
      };
    

      try {
        let argid = 'beae-jgvyuvunblock-textloop-1',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-jgvyuvun',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-jgvyuvun');
        args.el = args.els[1];
        ((O) => { var z;let H=(z=O.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(I=>{let E=I==null?void 0:I.getAttribute("href");I&&O.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&I.addEventListener("click",A=>{let D=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-jgvyuvun: ', ex)
      };
    

      try {
        let argid = 'beae-x9opsagfblock-textloop-1',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-x9opsagf',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-x9opsagf');
        args.el = args.els[1];
        ((O) => { var z;let H=(z=O.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(I=>{let E=I==null?void 0:I.getAttribute("href");I&&O.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&I.addEventListener("click",A=>{let D=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-x9opsagf: ', ex)
      };
    

      try {
        let argid = 'beae-cjfrym27block-textloop-1',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-cjfrym27',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-cjfrym27');
        args.el = args.els[1];
        ((O) => { var z;let H=(z=O.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(I=>{let E=I==null?void 0:I.getAttribute("href");I&&O.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&I.addEventListener("click",A=>{let D=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-cjfrym27: ', ex)
      };
    

      try {
        let argid = 'beae-sheexls4block-textloop-1',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-sheexls4',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-sheexls4');
        args.el = args.els[1];
        ((O) => { var z;let H=(z=O.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(I=>{let E=I==null?void 0:I.getAttribute("href");I&&O.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&I.addEventListener("click",A=>{let D=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-sheexls4: ', ex)
      };
    

      try {
        let argid = 'beae-b1p43zv9block-textloop-1',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-b1p43zv9',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-b1p43zv9');
        args.el = args.els[1];
        ((O) => { var z;let H=(z=O.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(I=>{let E=I==null?void 0:I.getAttribute("href");I&&O.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&I.addEventListener("click",A=>{let D=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-b1p43zv9: ', ex)
      };
    

      try {
        let argid = 'beae-4ac22gi5block-textloop-2',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-4ac22gi5',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-4ac22gi5');
        args.el = args.els[2];
        ((O) => { var z;let H=(z=O.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(I=>{let E=I==null?void 0:I.getAttribute("href");I&&O.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&I.addEventListener("click",A=>{let D=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-4ac22gi5: ', ex)
      };
    

      try {
        let argid = 'beae-o1yw9l21block-textloop-2',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-o1yw9l21',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-o1yw9l21');
        args.el = args.els[2];
        ((O) => { var z;let H=(z=O.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(I=>{let E=I==null?void 0:I.getAttribute("href");I&&O.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&I.addEventListener("click",A=>{let D=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-o1yw9l21: ', ex)
      };
    

      try {
        let argid = 'beae-jgvyuvunblock-textloop-2',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-jgvyuvun',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-jgvyuvun');
        args.el = args.els[2];
        ((O) => { var z;let H=(z=O.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(I=>{let E=I==null?void 0:I.getAttribute("href");I&&O.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&I.addEventListener("click",A=>{let D=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-jgvyuvun: ', ex)
      };
    

      try {
        let argid = 'beae-x9opsagfblock-textloop-2',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-x9opsagf',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-x9opsagf');
        args.el = args.els[2];
        ((O) => { var z;let H=(z=O.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(I=>{let E=I==null?void 0:I.getAttribute("href");I&&O.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&I.addEventListener("click",A=>{let D=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-x9opsagf: ', ex)
      };
    

      try {
        let argid = 'beae-cjfrym27block-textloop-2',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-cjfrym27',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-cjfrym27');
        args.el = args.els[2];
        ((O) => { var z;let H=(z=O.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(I=>{let E=I==null?void 0:I.getAttribute("href");I&&O.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&I.addEventListener("click",A=>{let D=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-cjfrym27: ', ex)
      };
    

      try {
        let argid = 'beae-sheexls4block-textloop-2',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-sheexls4',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-sheexls4');
        args.el = args.els[2];
        ((O) => { var z;let H=(z=O.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(I=>{let E=I==null?void 0:I.getAttribute("href");I&&O.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&I.addEventListener("click",A=>{let D=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-sheexls4: ', ex)
      };
    

      try {
        let argid = 'beae-b1p43zv9block-textloop-2',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-b1p43zv9',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-b1p43zv9');
        args.el = args.els[2];
        ((O) => { var z;let H=(z=O.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(I=>{let E=I==null?void 0:I.getAttribute("href");I&&O.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&I.addEventListener("click",A=>{let D=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-b1p43zv9: ', ex)
      };
    

      try {
        let argid = 'beae-y3a2t1mrsection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-y3a2t1mr',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-y3a2t1mr');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-y3a2t1mr: ', ex)
      };
    

      try {
        let argid = 'beae-xjuo40v4block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-xjuo40v4',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-xjuo40v4');
        args.el = args.els[0];
        ((O) => { var z;let H=(z=O.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(I=>{let E=I==null?void 0:I.getAttribute("href");I&&O.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&I.addEventListener("click",A=>{let D=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-xjuo40v4: ', ex)
      };
    

      try {
        let argid = 'beae-xt0if25ssection-featured-collection',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-xt0if25s',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-xt0if25s');
        args.el = args.els[0];
        ((a) => { window.BeaeSlideshow&&window.BeaeSlideshow.init(a) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-xt0if25s: ', ex)
      };
    

      try {
        let argid = 'beae-xt0if25ssection-slide-show',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-xt0if25s',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-xt0if25s');
        args.el = args.els[0];
        ((h) => { window.BeaeSlider&&!h.noRunJs&&window.BeaeSlider(h) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-xt0if25s: ', ex)
      };
    

      try {
        let argid = 'beae-aly1eu8lblock-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-aly1eu8l',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-aly1eu8l');
        args.el = args.els[0];
        ((M) => { var O;if(M.el){if(M.shape){const E=M.el.closest(".beae-slider-items");E&&!E.hasAttribute("data-svg")&&(E==null||E.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${M.id}" clipPathUnits="objectBoundingBox">
                                ${M.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),E.setAttribute("data-svg","true"))}let H=M.el.querySelector(".beae-image-content-position"),z,I=window.innerWidth>=768&&M.autoHover;var V=H.querySelector(".beae-img-ratio-control"),L=H.querySelector(".beae-img-comp-container"),T=H.querySelector(".beae-img-comp-container--second");if(V&&T){let E=function(A){let D=0,q;j(),I?H.onmouseover=function(G){F(G)}:A.onmousedown=function(G){F(G)},H.onmouseup=function(){R()},A.ontouchstart=function(G){F(G)},H.ontouchend=function(){R()};function j(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{z=T.offsetWidth})}).observe(T),A.style.left&&parseInt(A.style.left)}function F(G){check=!1,G.preventDefault(),G.clientX?G.clientX:G.touches[0].clientX,parseInt(A.style.left),D=1,H.onmousemove=function(Y){W(Y)},H.ontouchmove=function(Y){W(Y)}}function R(){D=0,check=!0}function W(G){if(D==0)return!1;q=U(G),q<0&&(q=0),q>100&&(q=100),Z(q)}function U(G){const Y=H.getBoundingClientRect(),ie=(G.changedTouches?G.changedTouches[0].clientX:G.clientX)-Y.left;return Math.max(0,Math.min(100,Math.round(ie*100/z)))}function Z(G){A.style.left=G+"%",T.style.clipPath=`polygon(${G}% 0%, ${G}% 100%, 100% 100%, 100% 0)`,L.style.clipPath=`polygon(0% 100%, 0% 0%, ${G}% 0%, ${G}% 100%)`}};V&&T&&E(V),window.addEventListener("resize",function(){V&&T&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{z=T.offsetWidth})}).observe(T),E(V))})}}let N=(O=M.el)==null?void 0:O.querySelector("a.beae-x-image"),P=N==null?void 0:N.getAttribute("href");N&&M.mode.value!=="builder"&&(P!=null&&P.includes("#"))&&N.addEventListener("click",H=>{let z=document.querySelector(P+","+(P==null?void 0:P.replace("#",".")));if(z)return z.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),H.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-aly1eu8l: ', ex)
      };
    

      try {
        let argid = 'beae-1yok5kvzblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-1yok5kvz',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-1yok5kvz');
        args.el = args.els[0];
        ((O) => { var z;let H=(z=O.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(I=>{let E=I==null?void 0:I.getAttribute("href");I&&O.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&I.addEventListener("click",A=>{let D=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-1yok5kvz: ', ex)
      };
    

      try {
        let argid = 'beae-sw2hjxbiblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-sw2hjxbi',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-sw2hjxbi');
        args.el = args.els[0];
        ((O) => { var z;let H=(z=O.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(I=>{let E=I==null?void 0:I.getAttribute("href");I&&O.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&I.addEventListener("click",A=>{let D=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-sw2hjxbi: ', ex)
      };
    

      try {
        let argid = 'beae-btb2250hsection-featured-collection',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-btb2250h',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-btb2250h');
        args.el = args.els[0];
        ((a) => { window.BeaeSlideshow&&window.BeaeSlideshow.init(a) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-btb2250h: ', ex)
      };
    

      try {
        let argid = 'beae-btb2250hsection-slide-show',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-btb2250h',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-btb2250h');
        args.el = args.els[0];
        ((h) => { window.BeaeSlider&&!h.noRunJs&&window.BeaeSlider(h) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-btb2250h: ', ex)
      };
    

      try {
        let argid = 'beae-nffaamb0block-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-nffaamb0',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-nffaamb0');
        args.el = args.els[0];
        ((M) => { var O;if(M.el){if(M.shape){const E=M.el.closest(".beae-slider-items");E&&!E.hasAttribute("data-svg")&&(E==null||E.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${M.id}" clipPathUnits="objectBoundingBox">
                                ${M.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),E.setAttribute("data-svg","true"))}let H=M.el.querySelector(".beae-image-content-position"),z,I=window.innerWidth>=768&&M.autoHover;var V=H.querySelector(".beae-img-ratio-control"),L=H.querySelector(".beae-img-comp-container"),T=H.querySelector(".beae-img-comp-container--second");if(V&&T){let E=function(A){let D=0,q;j(),I?H.onmouseover=function(G){F(G)}:A.onmousedown=function(G){F(G)},H.onmouseup=function(){R()},A.ontouchstart=function(G){F(G)},H.ontouchend=function(){R()};function j(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{z=T.offsetWidth})}).observe(T),A.style.left&&parseInt(A.style.left)}function F(G){check=!1,G.preventDefault(),G.clientX?G.clientX:G.touches[0].clientX,parseInt(A.style.left),D=1,H.onmousemove=function(Y){W(Y)},H.ontouchmove=function(Y){W(Y)}}function R(){D=0,check=!0}function W(G){if(D==0)return!1;q=U(G),q<0&&(q=0),q>100&&(q=100),Z(q)}function U(G){const Y=H.getBoundingClientRect(),ie=(G.changedTouches?G.changedTouches[0].clientX:G.clientX)-Y.left;return Math.max(0,Math.min(100,Math.round(ie*100/z)))}function Z(G){A.style.left=G+"%",T.style.clipPath=`polygon(${G}% 0%, ${G}% 100%, 100% 100%, 100% 0)`,L.style.clipPath=`polygon(0% 100%, 0% 0%, ${G}% 0%, ${G}% 100%)`}};V&&T&&E(V),window.addEventListener("resize",function(){V&&T&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{z=T.offsetWidth})}).observe(T),E(V))})}}let N=(O=M.el)==null?void 0:O.querySelector("a.beae-x-image"),P=N==null?void 0:N.getAttribute("href");N&&M.mode.value!=="builder"&&(P!=null&&P.includes("#"))&&N.addEventListener("click",H=>{let z=document.querySelector(P+","+(P==null?void 0:P.replace("#",".")));if(z)return z.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),H.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-nffaamb0: ', ex)
      };
    

      try {
        let argid = 'beae-9h45k74nblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-9h45k74n',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-9h45k74n');
        args.el = args.els[0];
        ((O) => { var z;let H=(z=O.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(I=>{let E=I==null?void 0:I.getAttribute("href");I&&O.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&I.addEventListener("click",A=>{let D=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(D)return D.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),A.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-9h45k74n: ', ex)
      };
    }; if (window.BEAEBASE) {js_6A0O96VH()} else {window.BEAEPAGEJS.push(js_6A0O96VH)} })(); 