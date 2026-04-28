(() => { if (window.BEAEPAGEJS === undefined) {
            window.BEAEPAGEJS = [];
          }

          if(window.beaePageSetting == undefined) {
            window.beaePageSetting = {};
          }
          
          window.beaePageSetting.pageId = "68a22debb60231867d0860c3";
              window.beaePageSetting.pageTitle = "custom-section"; 
              window.beaePageSetting.pageType = "section";

          let js_UD3NQGP1 = () => { let BeaeUseHooks = {};
      try {
        let argid = 'beae-ioewi56csection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-ioewi56c',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-ioewi56c');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-ioewi56c: ', ex)
      };
    

      try {
        let argid = 'beae-7c9jziszblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-7c9jzisz',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-7c9jzisz');
        args.el = args.els[0];
        ((P) => { P.el.querySelectorAll(".beae-x-text a").forEach(I=>{let z=I==null?void 0:I.getAttribute("href");I&&P.mode.value!=="builder"&&(z!=null&&z.includes("#"))&&I.addEventListener("click",O=>{let A=document.querySelector(z+","+(z==null?void 0:z.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),O.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-7c9jzisz: ', ex)
      };
    

      try {
        let argid = 'beae-7uu14rntblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-7uu14rnt',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-7uu14rnt');
        args.el = args.els[0];
        ((P) => { P.el.querySelectorAll(".beae-x-text a").forEach(I=>{let z=I==null?void 0:I.getAttribute("href");I&&P.mode.value!=="builder"&&(z!=null&&z.includes("#"))&&I.addEventListener("click",O=>{let A=document.querySelector(z+","+(z==null?void 0:z.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),O.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-7uu14rnt: ', ex)
      };
    

      try {
        let argid = 'beae-vtvm506iblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-vtvm506i',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-vtvm506i');
        args.el = args.els[0];
        ((P) => { P.el.querySelectorAll(".beae-x-text a").forEach(I=>{let z=I==null?void 0:I.getAttribute("href");I&&P.mode.value!=="builder"&&(z!=null&&z.includes("#"))&&I.addEventListener("click",O=>{let A=document.querySelector(z+","+(z==null?void 0:z.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),O.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-vtvm506i: ', ex)
      };
    

      try {
        let argid = 'beae-7qhf42jcblock-tabs',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-7qhf42jc',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-7qhf42jc');
        args.el = args.els[0];
        ((data) => { let tabs=data.el.querySelectorAll(".beae-tab-item"),contents=data.el.querySelectorAll(".beae-tab-content"),rightside=data.el.querySelectorAll(".beae-rightside"),accordions=data.el.querySelectorAll(".beae-accordion-title--mobile"),activeTab=data.activeTab,toggleImg=data.toggleImg,layout=data.layout,accordionMode=data.accordionMode;function resetActive(){tabs.forEach(b=>b.classList.remove("active")),contents.forEach(b=>b.classList.remove("active")),accordions.forEach(b=>b.classList.remove("active")),toggleImg&&rightside.forEach(b=>b.classList.remove("active")),contents.forEach(b=>{const h=b.querySelector(".beae-accordion-body").style;layout=="accordions"?h.maxHeight="0px":(h.transform="scaleY(0)",h.opacity="0")})}function setActive(b){tabs[b].classList.add("active"),contents[b].classList.add("active"),accordions[b].classList.add("active"),toggleImg&&rightside[b].classList.add("active");const h=contents[b].querySelector(".beae-accordion-body");if(h){const p=h.style;layout=="accordions"?p.maxHeight=data.mode.value=="builder"?"":h.scrollHeight+"px":(p.transform="scaleY(1)",p.transformOrigin="top center",p.opacity="1")}}function removeActive(b){tabs[b].classList.remove("active"),contents[b].classList.remove("active"),accordions[b].classList.remove("active"),toggleImg&&rightside[b].classList.remove("active");const h=contents[b].querySelector(".beae-accordion-body").style;layout=="accordions"?h.maxHeight="0px":(h.transform="scaleY(0)",h.opacity="0")}resetActive(),activeTab!=="none"&&accordionMode!="popup"&&setActive(activeTab),tabs.forEach((b,h)=>{b.addEventListener("click",()=>{resetActive(),setActive(h)})});const section=data.el.closest("section.beae-section");let sectionId="";section&&(sectionId=section.getAttribute("data-sectionid"));let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(b){extOptions={},console.error(b)}if(accordions.forEach((b,h)=>{b.addEventListener("click",()=>{if(accordionMode=="popup"&&data.mode.value!="builder"){const p=b.closest(".beae-tab-content");if(p){let f=document.createElement("div");f.innerHTML=`
                            <h3 class="beae-popup__content-title">${b.querySelector("span").innerHTML}</h3>
                            <div class="beae-popup__content-body ${data.id}">${p.querySelector(".beae-accordion-body").innerHTML}</div>
                            `,window.BeaePopupLibrary.createPopup(f,{layout:extOptions.layout?extOptions.layout:"right",width:extOptions.width?extOptions.width:"400px",layoutMobile:extOptions.layoutMobile?extOptions.layoutMobile:"bottom",sectionId})}}else accordionMode=="single"?(resetActive(),setActive(h)):b.classList.contains("active")?removeActive(h):setActive(h)})}),layout=="tabs"){const b=data.el.querySelector(".beae-tab-contents"),h=b.querySelectorAll(".beae-tab-content-wrp");let p=0,f=-1;h.forEach((k,g)=>{const v=k.offsetHeight;v>p&&(f=g,p=v)}),new ResizeObserver(()=>{b.style.setProperty("--beae-tabs-max-height",`${h[f].offsetHeight}px`)}).observe(h[f])} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-7qhf42jc: ', ex)
      };
    

      try {
        let argid = 'beae-g691nkrxblock-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-g691nkrx',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-g691nkrx');
        args.el = args.els[0];
        ((P) => { if(P.el){if(P.shape){const G=P.el.closest(".beae-slider-items");G&&!G.hasAttribute("data-svg")&&(G==null||G.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${P.id}" clipPathUnits="objectBoundingBox">
                                ${P.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),G.setAttribute("data-svg","true"))}let q=P.el.querySelector(".beae-image-content-position"),Z,W=window.innerWidth>=768&&P.autoHover;var H=q.querySelector(".beae-img-ratio-control"),I=q.querySelector(".beae-img-comp-container"),z=q.querySelector(".beae-img-comp-container--second");if(H&&z){let G=function(R){let D=0,j;F(),W?q.onmouseover=function(ee){U(ee)}:R.onmousedown=function(ee){U(ee)},q.onmouseup=function(){X()},R.ontouchstart=function(ee){U(ee)},q.ontouchend=function(){X()};function F(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{Z=z.offsetWidth})}).observe(z),R.style.left&&parseInt(R.style.left)}function U(ee){check=!1,ee.preventDefault(),ee.clientX?ee.clientX:ee.touches[0].clientX,parseInt(R.style.left),D=1,q.onmousemove=function(Q){Y(Q)},q.ontouchmove=function(Q){Y(Q)}}function X(){D=0,check=!0}function Y(ee){if(D==0)return!1;j=ae(ee),j<0&&(j=0),j>100&&(j=100),oe(j)}function ae(ee){const Q=q.getBoundingClientRect(),de=(ee.changedTouches?ee.changedTouches[0].clientX:ee.clientX)-Q.left;return Math.max(0,Math.min(100,Math.round(de*100/Z)))}function oe(ee){R.style.left=ee+"%",z.style.clipPath=`polygon(${ee}% 0%, ${ee}% 100%, 100% 100%, 100% 0)`,I.style.clipPath=`polygon(0% 100%, 0% 0%, ${ee}% 0%, ${ee}% 100%)`}};H&&z&&G(H),window.addEventListener("resize",function(){H&&z&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{Z=z.offsetWidth})}).observe(z),G(H))})}}let O=P.el.querySelector("a.beae-x-image"),A=O==null?void 0:O.getAttribute("href");O&&P.mode.value!=="builder"&&(A!=null&&A.includes("#"))&&O.addEventListener("click",q=>{let Z=document.querySelector(A+","+(A==null?void 0:A.replace("#",".")));if(Z)return Z.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),q.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-g691nkrx: ', ex)
      };
    

      try {
        let argid = 'beae-p0ttrcs5block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-p0ttrcs5',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-p0ttrcs5');
        args.el = args.els[0];
        ((P) => { P.el.querySelectorAll(".beae-x-text a").forEach(I=>{let z=I==null?void 0:I.getAttribute("href");I&&P.mode.value!=="builder"&&(z!=null&&z.includes("#"))&&I.addEventListener("click",O=>{let A=document.querySelector(z+","+(z==null?void 0:z.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),O.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-p0ttrcs5: ', ex)
      };
    

      try {
        let argid = 'beae-5nh8rkd1block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-5nh8rkd1',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-5nh8rkd1');
        args.el = args.els[0];
        ((P) => { P.el.querySelectorAll(".beae-x-text a").forEach(I=>{let z=I==null?void 0:I.getAttribute("href");I&&P.mode.value!=="builder"&&(z!=null&&z.includes("#"))&&I.addEventListener("click",O=>{let A=document.querySelector(z+","+(z==null?void 0:z.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),O.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-5nh8rkd1: ', ex)
      };
    

      try {
        let argid = 'beae-nrueysbeblock-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-nrueysbe',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-nrueysbe');
        args.el = args.els[0];
        ((P) => { if(P.el){if(P.shape){const G=P.el.closest(".beae-slider-items");G&&!G.hasAttribute("data-svg")&&(G==null||G.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${P.id}" clipPathUnits="objectBoundingBox">
                                ${P.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),G.setAttribute("data-svg","true"))}let q=P.el.querySelector(".beae-image-content-position"),Z,W=window.innerWidth>=768&&P.autoHover;var H=q.querySelector(".beae-img-ratio-control"),I=q.querySelector(".beae-img-comp-container"),z=q.querySelector(".beae-img-comp-container--second");if(H&&z){let G=function(R){let D=0,j;F(),W?q.onmouseover=function(ee){U(ee)}:R.onmousedown=function(ee){U(ee)},q.onmouseup=function(){X()},R.ontouchstart=function(ee){U(ee)},q.ontouchend=function(){X()};function F(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{Z=z.offsetWidth})}).observe(z),R.style.left&&parseInt(R.style.left)}function U(ee){check=!1,ee.preventDefault(),ee.clientX?ee.clientX:ee.touches[0].clientX,parseInt(R.style.left),D=1,q.onmousemove=function(Q){Y(Q)},q.ontouchmove=function(Q){Y(Q)}}function X(){D=0,check=!0}function Y(ee){if(D==0)return!1;j=ae(ee),j<0&&(j=0),j>100&&(j=100),oe(j)}function ae(ee){const Q=q.getBoundingClientRect(),de=(ee.changedTouches?ee.changedTouches[0].clientX:ee.clientX)-Q.left;return Math.max(0,Math.min(100,Math.round(de*100/Z)))}function oe(ee){R.style.left=ee+"%",z.style.clipPath=`polygon(${ee}% 0%, ${ee}% 100%, 100% 100%, 100% 0)`,I.style.clipPath=`polygon(0% 100%, 0% 0%, ${ee}% 0%, ${ee}% 100%)`}};H&&z&&G(H),window.addEventListener("resize",function(){H&&z&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{Z=z.offsetWidth})}).observe(z),G(H))})}}let O=P.el.querySelector("a.beae-x-image"),A=O==null?void 0:O.getAttribute("href");O&&P.mode.value!=="builder"&&(A!=null&&A.includes("#"))&&O.addEventListener("click",q=>{let Z=document.querySelector(A+","+(A==null?void 0:A.replace("#",".")));if(Z)return Z.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),q.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-nrueysbe: ', ex)
      };
    

      try {
        let argid = 'beae-hhd8qlfwblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-hhd8qlfw',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-hhd8qlfw');
        args.el = args.els[0];
        ((P) => { P.el.querySelectorAll(".beae-x-text a").forEach(I=>{let z=I==null?void 0:I.getAttribute("href");I&&P.mode.value!=="builder"&&(z!=null&&z.includes("#"))&&I.addEventListener("click",O=>{let A=document.querySelector(z+","+(z==null?void 0:z.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),O.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-hhd8qlfw: ', ex)
      };
    

      try {
        let argid = 'beae-hgtrzepzblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-hgtrzepz',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-hgtrzepz');
        args.el = args.els[0];
        ((P) => { P.el.querySelectorAll(".beae-x-text a").forEach(I=>{let z=I==null?void 0:I.getAttribute("href");I&&P.mode.value!=="builder"&&(z!=null&&z.includes("#"))&&I.addEventListener("click",O=>{let A=document.querySelector(z+","+(z==null?void 0:z.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),O.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-hgtrzepz: ', ex)
      };
    

      try {
        let argid = 'beae-xr8aqw1eblock-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-xr8aqw1e',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-xr8aqw1e');
        args.el = args.els[0];
        ((P) => { if(P.el){if(P.shape){const G=P.el.closest(".beae-slider-items");G&&!G.hasAttribute("data-svg")&&(G==null||G.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${P.id}" clipPathUnits="objectBoundingBox">
                                ${P.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),G.setAttribute("data-svg","true"))}let q=P.el.querySelector(".beae-image-content-position"),Z,W=window.innerWidth>=768&&P.autoHover;var H=q.querySelector(".beae-img-ratio-control"),I=q.querySelector(".beae-img-comp-container"),z=q.querySelector(".beae-img-comp-container--second");if(H&&z){let G=function(R){let D=0,j;F(),W?q.onmouseover=function(ee){U(ee)}:R.onmousedown=function(ee){U(ee)},q.onmouseup=function(){X()},R.ontouchstart=function(ee){U(ee)},q.ontouchend=function(){X()};function F(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{Z=z.offsetWidth})}).observe(z),R.style.left&&parseInt(R.style.left)}function U(ee){check=!1,ee.preventDefault(),ee.clientX?ee.clientX:ee.touches[0].clientX,parseInt(R.style.left),D=1,q.onmousemove=function(Q){Y(Q)},q.ontouchmove=function(Q){Y(Q)}}function X(){D=0,check=!0}function Y(ee){if(D==0)return!1;j=ae(ee),j<0&&(j=0),j>100&&(j=100),oe(j)}function ae(ee){const Q=q.getBoundingClientRect(),de=(ee.changedTouches?ee.changedTouches[0].clientX:ee.clientX)-Q.left;return Math.max(0,Math.min(100,Math.round(de*100/Z)))}function oe(ee){R.style.left=ee+"%",z.style.clipPath=`polygon(${ee}% 0%, ${ee}% 100%, 100% 100%, 100% 0)`,I.style.clipPath=`polygon(0% 100%, 0% 0%, ${ee}% 0%, ${ee}% 100%)`}};H&&z&&G(H),window.addEventListener("resize",function(){H&&z&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{Z=z.offsetWidth})}).observe(z),G(H))})}}let O=P.el.querySelector("a.beae-x-image"),A=O==null?void 0:O.getAttribute("href");O&&P.mode.value!=="builder"&&(A!=null&&A.includes("#"))&&O.addEventListener("click",q=>{let Z=document.querySelector(A+","+(A==null?void 0:A.replace("#",".")));if(Z)return Z.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),q.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-xr8aqw1e: ', ex)
      };
    

      try {
        let argid = 'beae-kuu5dk7gblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-kuu5dk7g',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-kuu5dk7g');
        args.el = args.els[0];
        ((P) => { P.el.querySelectorAll(".beae-x-text a").forEach(I=>{let z=I==null?void 0:I.getAttribute("href");I&&P.mode.value!=="builder"&&(z!=null&&z.includes("#"))&&I.addEventListener("click",O=>{let A=document.querySelector(z+","+(z==null?void 0:z.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),O.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-kuu5dk7g: ', ex)
      };
    

      try {
        let argid = 'beae-tggpl9kyblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-tggpl9ky',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-tggpl9ky');
        args.el = args.els[0];
        ((P) => { P.el.querySelectorAll(".beae-x-text a").forEach(I=>{let z=I==null?void 0:I.getAttribute("href");I&&P.mode.value!=="builder"&&(z!=null&&z.includes("#"))&&I.addEventListener("click",O=>{let A=document.querySelector(z+","+(z==null?void 0:z.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),O.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-tggpl9ky: ', ex)
      };
    

      try {
        let argid = 'beae-ureq5vwvblock-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-ureq5vwv',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-ureq5vwv');
        args.el = args.els[0];
        ((P) => { if(P.el){if(P.shape){const G=P.el.closest(".beae-slider-items");G&&!G.hasAttribute("data-svg")&&(G==null||G.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${P.id}" clipPathUnits="objectBoundingBox">
                                ${P.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),G.setAttribute("data-svg","true"))}let q=P.el.querySelector(".beae-image-content-position"),Z,W=window.innerWidth>=768&&P.autoHover;var H=q.querySelector(".beae-img-ratio-control"),I=q.querySelector(".beae-img-comp-container"),z=q.querySelector(".beae-img-comp-container--second");if(H&&z){let G=function(R){let D=0,j;F(),W?q.onmouseover=function(ee){U(ee)}:R.onmousedown=function(ee){U(ee)},q.onmouseup=function(){X()},R.ontouchstart=function(ee){U(ee)},q.ontouchend=function(){X()};function F(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{Z=z.offsetWidth})}).observe(z),R.style.left&&parseInt(R.style.left)}function U(ee){check=!1,ee.preventDefault(),ee.clientX?ee.clientX:ee.touches[0].clientX,parseInt(R.style.left),D=1,q.onmousemove=function(Q){Y(Q)},q.ontouchmove=function(Q){Y(Q)}}function X(){D=0,check=!0}function Y(ee){if(D==0)return!1;j=ae(ee),j<0&&(j=0),j>100&&(j=100),oe(j)}function ae(ee){const Q=q.getBoundingClientRect(),de=(ee.changedTouches?ee.changedTouches[0].clientX:ee.clientX)-Q.left;return Math.max(0,Math.min(100,Math.round(de*100/Z)))}function oe(ee){R.style.left=ee+"%",z.style.clipPath=`polygon(${ee}% 0%, ${ee}% 100%, 100% 100%, 100% 0)`,I.style.clipPath=`polygon(0% 100%, 0% 0%, ${ee}% 0%, ${ee}% 100%)`}};H&&z&&G(H),window.addEventListener("resize",function(){H&&z&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{Z=z.offsetWidth})}).observe(z),G(H))})}}let O=P.el.querySelector("a.beae-x-image"),A=O==null?void 0:O.getAttribute("href");O&&P.mode.value!=="builder"&&(A!=null&&A.includes("#"))&&O.addEventListener("click",q=>{let Z=document.querySelector(A+","+(A==null?void 0:A.replace("#",".")));if(Z)return Z.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),q.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-ureq5vwv: ', ex)
      };
    

      try {
        let argid = 'beae-2kwgxp1sblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-2kwgxp1s',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-2kwgxp1s');
        args.el = args.els[0];
        ((P) => { P.el.querySelectorAll(".beae-x-text a").forEach(I=>{let z=I==null?void 0:I.getAttribute("href");I&&P.mode.value!=="builder"&&(z!=null&&z.includes("#"))&&I.addEventListener("click",O=>{let A=document.querySelector(z+","+(z==null?void 0:z.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),O.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-2kwgxp1s: ', ex)
      };
    

      try {
        let argid = 'beae-l0eluwsdblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-l0eluwsd',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-l0eluwsd');
        args.el = args.els[0];
        ((P) => { P.el.querySelectorAll(".beae-x-text a").forEach(I=>{let z=I==null?void 0:I.getAttribute("href");I&&P.mode.value!=="builder"&&(z!=null&&z.includes("#"))&&I.addEventListener("click",O=>{let A=document.querySelector(z+","+(z==null?void 0:z.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),O.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-l0eluwsd: ', ex)
      };
    

      try {
        let argid = 'beae-dzzfa6ebblock-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-dzzfa6eb',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-dzzfa6eb');
        args.el = args.els[0];
        ((P) => { if(P.el){if(P.shape){const G=P.el.closest(".beae-slider-items");G&&!G.hasAttribute("data-svg")&&(G==null||G.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${P.id}" clipPathUnits="objectBoundingBox">
                                ${P.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),G.setAttribute("data-svg","true"))}let q=P.el.querySelector(".beae-image-content-position"),Z,W=window.innerWidth>=768&&P.autoHover;var H=q.querySelector(".beae-img-ratio-control"),I=q.querySelector(".beae-img-comp-container"),z=q.querySelector(".beae-img-comp-container--second");if(H&&z){let G=function(R){let D=0,j;F(),W?q.onmouseover=function(ee){U(ee)}:R.onmousedown=function(ee){U(ee)},q.onmouseup=function(){X()},R.ontouchstart=function(ee){U(ee)},q.ontouchend=function(){X()};function F(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{Z=z.offsetWidth})}).observe(z),R.style.left&&parseInt(R.style.left)}function U(ee){check=!1,ee.preventDefault(),ee.clientX?ee.clientX:ee.touches[0].clientX,parseInt(R.style.left),D=1,q.onmousemove=function(Q){Y(Q)},q.ontouchmove=function(Q){Y(Q)}}function X(){D=0,check=!0}function Y(ee){if(D==0)return!1;j=ae(ee),j<0&&(j=0),j>100&&(j=100),oe(j)}function ae(ee){const Q=q.getBoundingClientRect(),de=(ee.changedTouches?ee.changedTouches[0].clientX:ee.clientX)-Q.left;return Math.max(0,Math.min(100,Math.round(de*100/Z)))}function oe(ee){R.style.left=ee+"%",z.style.clipPath=`polygon(${ee}% 0%, ${ee}% 100%, 100% 100%, 100% 0)`,I.style.clipPath=`polygon(0% 100%, 0% 0%, ${ee}% 0%, ${ee}% 100%)`}};H&&z&&G(H),window.addEventListener("resize",function(){H&&z&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{Z=z.offsetWidth})}).observe(z),G(H))})}}let O=P.el.querySelector("a.beae-x-image"),A=O==null?void 0:O.getAttribute("href");O&&P.mode.value!=="builder"&&(A!=null&&A.includes("#"))&&O.addEventListener("click",q=>{let Z=document.querySelector(A+","+(A==null?void 0:A.replace("#",".")));if(Z)return Z.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),q.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-dzzfa6eb: ', ex)
      };
    

      try {
        let argid = 'beae-udca6o01block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-udca6o01',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-udca6o01');
        args.el = args.els[0];
        ((P) => { P.el.querySelectorAll(".beae-x-text a").forEach(I=>{let z=I==null?void 0:I.getAttribute("href");I&&P.mode.value!=="builder"&&(z!=null&&z.includes("#"))&&I.addEventListener("click",O=>{let A=document.querySelector(z+","+(z==null?void 0:z.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),O.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-udca6o01: ', ex)
      };
    

      try {
        let argid = 'beae-a51y9asqblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-a51y9asq',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-a51y9asq');
        args.el = args.els[0];
        ((P) => { P.el.querySelectorAll(".beae-x-text a").forEach(I=>{let z=I==null?void 0:I.getAttribute("href");I&&P.mode.value!=="builder"&&(z!=null&&z.includes("#"))&&I.addEventListener("click",O=>{let A=document.querySelector(z+","+(z==null?void 0:z.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),O.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-a51y9asq: ', ex)
      };
    

      try {
        let argid = 'beae-450u3vvcblock-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-450u3vvc',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-450u3vvc');
        args.el = args.els[0];
        ((P) => { if(P.el){if(P.shape){const G=P.el.closest(".beae-slider-items");G&&!G.hasAttribute("data-svg")&&(G==null||G.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${P.id}" clipPathUnits="objectBoundingBox">
                                ${P.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),G.setAttribute("data-svg","true"))}let q=P.el.querySelector(".beae-image-content-position"),Z,W=window.innerWidth>=768&&P.autoHover;var H=q.querySelector(".beae-img-ratio-control"),I=q.querySelector(".beae-img-comp-container"),z=q.querySelector(".beae-img-comp-container--second");if(H&&z){let G=function(R){let D=0,j;F(),W?q.onmouseover=function(ee){U(ee)}:R.onmousedown=function(ee){U(ee)},q.onmouseup=function(){X()},R.ontouchstart=function(ee){U(ee)},q.ontouchend=function(){X()};function F(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{Z=z.offsetWidth})}).observe(z),R.style.left&&parseInt(R.style.left)}function U(ee){check=!1,ee.preventDefault(),ee.clientX?ee.clientX:ee.touches[0].clientX,parseInt(R.style.left),D=1,q.onmousemove=function(Q){Y(Q)},q.ontouchmove=function(Q){Y(Q)}}function X(){D=0,check=!0}function Y(ee){if(D==0)return!1;j=ae(ee),j<0&&(j=0),j>100&&(j=100),oe(j)}function ae(ee){const Q=q.getBoundingClientRect(),de=(ee.changedTouches?ee.changedTouches[0].clientX:ee.clientX)-Q.left;return Math.max(0,Math.min(100,Math.round(de*100/Z)))}function oe(ee){R.style.left=ee+"%",z.style.clipPath=`polygon(${ee}% 0%, ${ee}% 100%, 100% 100%, 100% 0)`,I.style.clipPath=`polygon(0% 100%, 0% 0%, ${ee}% 0%, ${ee}% 100%)`}};H&&z&&G(H),window.addEventListener("resize",function(){H&&z&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{Z=z.offsetWidth})}).observe(z),G(H))})}}let O=P.el.querySelector("a.beae-x-image"),A=O==null?void 0:O.getAttribute("href");O&&P.mode.value!=="builder"&&(A!=null&&A.includes("#"))&&O.addEventListener("click",q=>{let Z=document.querySelector(A+","+(A==null?void 0:A.replace("#",".")));if(Z)return Z.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),q.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-450u3vvc: ', ex)
      };
    

      try {
        let argid = 'beae-2ohhep3sblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-2ohhep3s',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-2ohhep3s');
        args.el = args.els[0];
        ((P) => { P.el.querySelectorAll(".beae-x-text a").forEach(I=>{let z=I==null?void 0:I.getAttribute("href");I&&P.mode.value!=="builder"&&(z!=null&&z.includes("#"))&&I.addEventListener("click",O=>{let A=document.querySelector(z+","+(z==null?void 0:z.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),O.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-2ohhep3s: ', ex)
      };
    

      try {
        let argid = 'beae-ekpv4j6kblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-ekpv4j6k',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-ekpv4j6k');
        args.el = args.els[0];
        ((P) => { P.el.querySelectorAll(".beae-x-text a").forEach(I=>{let z=I==null?void 0:I.getAttribute("href");I&&P.mode.value!=="builder"&&(z!=null&&z.includes("#"))&&I.addEventListener("click",O=>{let A=document.querySelector(z+","+(z==null?void 0:z.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),O.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-ekpv4j6k: ', ex)
      };
    

      try {
        let argid = 'beae-mu10e4eiblock-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-mu10e4ei',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-mu10e4ei');
        args.el = args.els[0];
        ((P) => { if(P.el){if(P.shape){const G=P.el.closest(".beae-slider-items");G&&!G.hasAttribute("data-svg")&&(G==null||G.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${P.id}" clipPathUnits="objectBoundingBox">
                                ${P.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),G.setAttribute("data-svg","true"))}let q=P.el.querySelector(".beae-image-content-position"),Z,W=window.innerWidth>=768&&P.autoHover;var H=q.querySelector(".beae-img-ratio-control"),I=q.querySelector(".beae-img-comp-container"),z=q.querySelector(".beae-img-comp-container--second");if(H&&z){let G=function(R){let D=0,j;F(),W?q.onmouseover=function(ee){U(ee)}:R.onmousedown=function(ee){U(ee)},q.onmouseup=function(){X()},R.ontouchstart=function(ee){U(ee)},q.ontouchend=function(){X()};function F(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{Z=z.offsetWidth})}).observe(z),R.style.left&&parseInt(R.style.left)}function U(ee){check=!1,ee.preventDefault(),ee.clientX?ee.clientX:ee.touches[0].clientX,parseInt(R.style.left),D=1,q.onmousemove=function(Q){Y(Q)},q.ontouchmove=function(Q){Y(Q)}}function X(){D=0,check=!0}function Y(ee){if(D==0)return!1;j=ae(ee),j<0&&(j=0),j>100&&(j=100),oe(j)}function ae(ee){const Q=q.getBoundingClientRect(),de=(ee.changedTouches?ee.changedTouches[0].clientX:ee.clientX)-Q.left;return Math.max(0,Math.min(100,Math.round(de*100/Z)))}function oe(ee){R.style.left=ee+"%",z.style.clipPath=`polygon(${ee}% 0%, ${ee}% 100%, 100% 100%, 100% 0)`,I.style.clipPath=`polygon(0% 100%, 0% 0%, ${ee}% 0%, ${ee}% 100%)`}};H&&z&&G(H),window.addEventListener("resize",function(){H&&z&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{Z=z.offsetWidth})}).observe(z),G(H))})}}let O=P.el.querySelector("a.beae-x-image"),A=O==null?void 0:O.getAttribute("href");O&&P.mode.value!=="builder"&&(A!=null&&A.includes("#"))&&O.addEventListener("click",q=>{let Z=document.querySelector(A+","+(A==null?void 0:A.replace("#",".")));if(Z)return Z.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),q.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-mu10e4ei: ', ex)
      };
    

      try {
        let argid = 'beae-biwwu4jiblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-biwwu4ji',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-biwwu4ji');
        args.el = args.els[0];
        ((P) => { P.el.querySelectorAll(".beae-x-text a").forEach(I=>{let z=I==null?void 0:I.getAttribute("href");I&&P.mode.value!=="builder"&&(z!=null&&z.includes("#"))&&I.addEventListener("click",O=>{let A=document.querySelector(z+","+(z==null?void 0:z.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),O.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-biwwu4ji: ', ex)
      };
    

      try {
        let argid = 'beae-xz9rh1cbblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-xz9rh1cb',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-xz9rh1cb');
        args.el = args.els[0];
        ((P) => { P.el.querySelectorAll(".beae-x-text a").forEach(I=>{let z=I==null?void 0:I.getAttribute("href");I&&P.mode.value!=="builder"&&(z!=null&&z.includes("#"))&&I.addEventListener("click",O=>{let A=document.querySelector(z+","+(z==null?void 0:z.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),O.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-xz9rh1cb: ', ex)
      };
    

      try {
        let argid = 'beae-hf9zq4mjblock-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-hf9zq4mj',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-hf9zq4mj');
        args.el = args.els[0];
        ((P) => { if(P.el){if(P.shape){const G=P.el.closest(".beae-slider-items");G&&!G.hasAttribute("data-svg")&&(G==null||G.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${P.id}" clipPathUnits="objectBoundingBox">
                                ${P.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),G.setAttribute("data-svg","true"))}let q=P.el.querySelector(".beae-image-content-position"),Z,W=window.innerWidth>=768&&P.autoHover;var H=q.querySelector(".beae-img-ratio-control"),I=q.querySelector(".beae-img-comp-container"),z=q.querySelector(".beae-img-comp-container--second");if(H&&z){let G=function(R){let D=0,j;F(),W?q.onmouseover=function(ee){U(ee)}:R.onmousedown=function(ee){U(ee)},q.onmouseup=function(){X()},R.ontouchstart=function(ee){U(ee)},q.ontouchend=function(){X()};function F(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{Z=z.offsetWidth})}).observe(z),R.style.left&&parseInt(R.style.left)}function U(ee){check=!1,ee.preventDefault(),ee.clientX?ee.clientX:ee.touches[0].clientX,parseInt(R.style.left),D=1,q.onmousemove=function(Q){Y(Q)},q.ontouchmove=function(Q){Y(Q)}}function X(){D=0,check=!0}function Y(ee){if(D==0)return!1;j=ae(ee),j<0&&(j=0),j>100&&(j=100),oe(j)}function ae(ee){const Q=q.getBoundingClientRect(),de=(ee.changedTouches?ee.changedTouches[0].clientX:ee.clientX)-Q.left;return Math.max(0,Math.min(100,Math.round(de*100/Z)))}function oe(ee){R.style.left=ee+"%",z.style.clipPath=`polygon(${ee}% 0%, ${ee}% 100%, 100% 100%, 100% 0)`,I.style.clipPath=`polygon(0% 100%, 0% 0%, ${ee}% 0%, ${ee}% 100%)`}};H&&z&&G(H),window.addEventListener("resize",function(){H&&z&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{Z=z.offsetWidth})}).observe(z),G(H))})}}let O=P.el.querySelector("a.beae-x-image"),A=O==null?void 0:O.getAttribute("href");O&&P.mode.value!=="builder"&&(A!=null&&A.includes("#"))&&O.addEventListener("click",q=>{let Z=document.querySelector(A+","+(A==null?void 0:A.replace("#",".")));if(Z)return Z.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),q.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-hf9zq4mj: ', ex)
      };
    

      try {
        let argid = 'beae-ajhw1sv7block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-ajhw1sv7',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-ajhw1sv7');
        args.el = args.els[0];
        ((P) => { P.el.querySelectorAll(".beae-x-text a").forEach(I=>{let z=I==null?void 0:I.getAttribute("href");I&&P.mode.value!=="builder"&&(z!=null&&z.includes("#"))&&I.addEventListener("click",O=>{let A=document.querySelector(z+","+(z==null?void 0:z.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),O.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-ajhw1sv7: ', ex)
      };
    

      try {
        let argid = 'beae-y2va55ulblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-y2va55ul',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-y2va55ul');
        args.el = args.els[0];
        ((P) => { P.el.querySelectorAll(".beae-x-text a").forEach(I=>{let z=I==null?void 0:I.getAttribute("href");I&&P.mode.value!=="builder"&&(z!=null&&z.includes("#"))&&I.addEventListener("click",O=>{let A=document.querySelector(z+","+(z==null?void 0:z.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),O.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-y2va55ul: ', ex)
      };
    

      try {
        let argid = 'beae-tk7kyy0gblock-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-tk7kyy0g',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-tk7kyy0g');
        args.el = args.els[0];
        ((P) => { if(P.el){if(P.shape){const G=P.el.closest(".beae-slider-items");G&&!G.hasAttribute("data-svg")&&(G==null||G.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${P.id}" clipPathUnits="objectBoundingBox">
                                ${P.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),G.setAttribute("data-svg","true"))}let q=P.el.querySelector(".beae-image-content-position"),Z,W=window.innerWidth>=768&&P.autoHover;var H=q.querySelector(".beae-img-ratio-control"),I=q.querySelector(".beae-img-comp-container"),z=q.querySelector(".beae-img-comp-container--second");if(H&&z){let G=function(R){let D=0,j;F(),W?q.onmouseover=function(ee){U(ee)}:R.onmousedown=function(ee){U(ee)},q.onmouseup=function(){X()},R.ontouchstart=function(ee){U(ee)},q.ontouchend=function(){X()};function F(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{Z=z.offsetWidth})}).observe(z),R.style.left&&parseInt(R.style.left)}function U(ee){check=!1,ee.preventDefault(),ee.clientX?ee.clientX:ee.touches[0].clientX,parseInt(R.style.left),D=1,q.onmousemove=function(Q){Y(Q)},q.ontouchmove=function(Q){Y(Q)}}function X(){D=0,check=!0}function Y(ee){if(D==0)return!1;j=ae(ee),j<0&&(j=0),j>100&&(j=100),oe(j)}function ae(ee){const Q=q.getBoundingClientRect(),de=(ee.changedTouches?ee.changedTouches[0].clientX:ee.clientX)-Q.left;return Math.max(0,Math.min(100,Math.round(de*100/Z)))}function oe(ee){R.style.left=ee+"%",z.style.clipPath=`polygon(${ee}% 0%, ${ee}% 100%, 100% 100%, 100% 0)`,I.style.clipPath=`polygon(0% 100%, 0% 0%, ${ee}% 0%, ${ee}% 100%)`}};H&&z&&G(H),window.addEventListener("resize",function(){H&&z&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{Z=z.offsetWidth})}).observe(z),G(H))})}}let O=P.el.querySelector("a.beae-x-image"),A=O==null?void 0:O.getAttribute("href");O&&P.mode.value!=="builder"&&(A!=null&&A.includes("#"))&&O.addEventListener("click",q=>{let Z=document.querySelector(A+","+(A==null?void 0:A.replace("#",".")));if(Z)return Z.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),q.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-tk7kyy0g: ', ex)
      };
    

      try {
        let argid = 'beae-vc6rt3t9block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-vc6rt3t9',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-vc6rt3t9');
        args.el = args.els[0];
        ((P) => { P.el.querySelectorAll(".beae-x-text a").forEach(I=>{let z=I==null?void 0:I.getAttribute("href");I&&P.mode.value!=="builder"&&(z!=null&&z.includes("#"))&&I.addEventListener("click",O=>{let A=document.querySelector(z+","+(z==null?void 0:z.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),O.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-vc6rt3t9: ', ex)
      };
    

      try {
        let argid = 'beae-orwhhzavblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-orwhhzav',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-orwhhzav');
        args.el = args.els[0];
        ((P) => { P.el.querySelectorAll(".beae-x-text a").forEach(I=>{let z=I==null?void 0:I.getAttribute("href");I&&P.mode.value!=="builder"&&(z!=null&&z.includes("#"))&&I.addEventListener("click",O=>{let A=document.querySelector(z+","+(z==null?void 0:z.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),O.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-orwhhzav: ', ex)
      };
    

      try {
        let argid = 'beae-tw212thjblock-tabs',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-tw212thj',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-tw212thj');
        args.el = args.els[0];
        ((data) => { let tabs=data.el.querySelectorAll(".beae-tab-item"),contents=data.el.querySelectorAll(".beae-tab-content"),rightside=data.el.querySelectorAll(".beae-rightside"),accordions=data.el.querySelectorAll(".beae-accordion-title--mobile"),activeTab=data.activeTab,toggleImg=data.toggleImg,layout=data.layout,accordionMode=data.accordionMode;function resetActive(){tabs.forEach(b=>b.classList.remove("active")),contents.forEach(b=>b.classList.remove("active")),accordions.forEach(b=>b.classList.remove("active")),toggleImg&&rightside.forEach(b=>b.classList.remove("active")),contents.forEach(b=>{const h=b.querySelector(".beae-accordion-body").style;layout=="accordions"?h.maxHeight="0px":(h.transform="scaleY(0)",h.opacity="0")})}function setActive(b){tabs[b].classList.add("active"),contents[b].classList.add("active"),accordions[b].classList.add("active"),toggleImg&&rightside[b].classList.add("active");const h=contents[b].querySelector(".beae-accordion-body");if(h){const p=h.style;layout=="accordions"?p.maxHeight=data.mode.value=="builder"?"":h.scrollHeight+"px":(p.transform="scaleY(1)",p.transformOrigin="top center",p.opacity="1")}}function removeActive(b){tabs[b].classList.remove("active"),contents[b].classList.remove("active"),accordions[b].classList.remove("active"),toggleImg&&rightside[b].classList.remove("active");const h=contents[b].querySelector(".beae-accordion-body").style;layout=="accordions"?h.maxHeight="0px":(h.transform="scaleY(0)",h.opacity="0")}resetActive(),activeTab!=="none"&&accordionMode!="popup"&&setActive(activeTab),tabs.forEach((b,h)=>{b.addEventListener("click",()=>{resetActive(),setActive(h)})});const section=data.el.closest("section.beae-section");let sectionId="";section&&(sectionId=section.getAttribute("data-sectionid"));let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(b){extOptions={},console.error(b)}if(accordions.forEach((b,h)=>{b.addEventListener("click",()=>{if(accordionMode=="popup"&&data.mode.value!="builder"){const p=b.closest(".beae-tab-content");if(p){let f=document.createElement("div");f.innerHTML=`
                            <h3 class="beae-popup__content-title">${b.querySelector("span").innerHTML}</h3>
                            <div class="beae-popup__content-body ${data.id}">${p.querySelector(".beae-accordion-body").innerHTML}</div>
                            `,window.BeaePopupLibrary.createPopup(f,{layout:extOptions.layout?extOptions.layout:"right",width:extOptions.width?extOptions.width:"400px",layoutMobile:extOptions.layoutMobile?extOptions.layoutMobile:"bottom",sectionId})}}else accordionMode=="single"?(resetActive(),setActive(h)):b.classList.contains("active")?removeActive(h):setActive(h)})}),layout=="tabs"){const b=data.el.querySelector(".beae-tab-contents"),h=b.querySelectorAll(".beae-tab-content-wrp");let p=0,f=-1;h.forEach((k,g)=>{const v=k.offsetHeight;v>p&&(f=g,p=v)}),new ResizeObserver(()=>{b.style.setProperty("--beae-tabs-max-height",`${h[f].offsetHeight}px`)}).observe(h[f])} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-tw212thj: ', ex)
      };
    

      try {
        let argid = 'beae-onehotwmblock-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-onehotwm',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-onehotwm');
        args.el = args.els[0];
        ((P) => { if(P.el){if(P.shape){const G=P.el.closest(".beae-slider-items");G&&!G.hasAttribute("data-svg")&&(G==null||G.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${P.id}" clipPathUnits="objectBoundingBox">
                                ${P.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),G.setAttribute("data-svg","true"))}let q=P.el.querySelector(".beae-image-content-position"),Z,W=window.innerWidth>=768&&P.autoHover;var H=q.querySelector(".beae-img-ratio-control"),I=q.querySelector(".beae-img-comp-container"),z=q.querySelector(".beae-img-comp-container--second");if(H&&z){let G=function(R){let D=0,j;F(),W?q.onmouseover=function(ee){U(ee)}:R.onmousedown=function(ee){U(ee)},q.onmouseup=function(){X()},R.ontouchstart=function(ee){U(ee)},q.ontouchend=function(){X()};function F(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{Z=z.offsetWidth})}).observe(z),R.style.left&&parseInt(R.style.left)}function U(ee){check=!1,ee.preventDefault(),ee.clientX?ee.clientX:ee.touches[0].clientX,parseInt(R.style.left),D=1,q.onmousemove=function(Q){Y(Q)},q.ontouchmove=function(Q){Y(Q)}}function X(){D=0,check=!0}function Y(ee){if(D==0)return!1;j=ae(ee),j<0&&(j=0),j>100&&(j=100),oe(j)}function ae(ee){const Q=q.getBoundingClientRect(),de=(ee.changedTouches?ee.changedTouches[0].clientX:ee.clientX)-Q.left;return Math.max(0,Math.min(100,Math.round(de*100/Z)))}function oe(ee){R.style.left=ee+"%",z.style.clipPath=`polygon(${ee}% 0%, ${ee}% 100%, 100% 100%, 100% 0)`,I.style.clipPath=`polygon(0% 100%, 0% 0%, ${ee}% 0%, ${ee}% 100%)`}};H&&z&&G(H),window.addEventListener("resize",function(){H&&z&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{Z=z.offsetWidth})}).observe(z),G(H))})}}let O=P.el.querySelector("a.beae-x-image"),A=O==null?void 0:O.getAttribute("href");O&&P.mode.value!=="builder"&&(A!=null&&A.includes("#"))&&O.addEventListener("click",q=>{let Z=document.querySelector(A+","+(A==null?void 0:A.replace("#",".")));if(Z)return Z.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),q.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-onehotwm: ', ex)
      };
    

      try {
        let argid = 'beae-8n88h797block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-8n88h797',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-8n88h797');
        args.el = args.els[0];
        ((P) => { P.el.querySelectorAll(".beae-x-text a").forEach(I=>{let z=I==null?void 0:I.getAttribute("href");I&&P.mode.value!=="builder"&&(z!=null&&z.includes("#"))&&I.addEventListener("click",O=>{let A=document.querySelector(z+","+(z==null?void 0:z.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),O.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-8n88h797: ', ex)
      };
    

      try {
        let argid = 'beae-7cgxt6bdblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-7cgxt6bd',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-7cgxt6bd');
        args.el = args.els[0];
        ((P) => { P.el.querySelectorAll(".beae-x-text a").forEach(I=>{let z=I==null?void 0:I.getAttribute("href");I&&P.mode.value!=="builder"&&(z!=null&&z.includes("#"))&&I.addEventListener("click",O=>{let A=document.querySelector(z+","+(z==null?void 0:z.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),O.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-7cgxt6bd: ', ex)
      };
    

      try {
        let argid = 'beae-15adqtmbblock-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-15adqtmb',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-15adqtmb');
        args.el = args.els[0];
        ((P) => { if(P.el){if(P.shape){const G=P.el.closest(".beae-slider-items");G&&!G.hasAttribute("data-svg")&&(G==null||G.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${P.id}" clipPathUnits="objectBoundingBox">
                                ${P.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),G.setAttribute("data-svg","true"))}let q=P.el.querySelector(".beae-image-content-position"),Z,W=window.innerWidth>=768&&P.autoHover;var H=q.querySelector(".beae-img-ratio-control"),I=q.querySelector(".beae-img-comp-container"),z=q.querySelector(".beae-img-comp-container--second");if(H&&z){let G=function(R){let D=0,j;F(),W?q.onmouseover=function(ee){U(ee)}:R.onmousedown=function(ee){U(ee)},q.onmouseup=function(){X()},R.ontouchstart=function(ee){U(ee)},q.ontouchend=function(){X()};function F(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{Z=z.offsetWidth})}).observe(z),R.style.left&&parseInt(R.style.left)}function U(ee){check=!1,ee.preventDefault(),ee.clientX?ee.clientX:ee.touches[0].clientX,parseInt(R.style.left),D=1,q.onmousemove=function(Q){Y(Q)},q.ontouchmove=function(Q){Y(Q)}}function X(){D=0,check=!0}function Y(ee){if(D==0)return!1;j=ae(ee),j<0&&(j=0),j>100&&(j=100),oe(j)}function ae(ee){const Q=q.getBoundingClientRect(),de=(ee.changedTouches?ee.changedTouches[0].clientX:ee.clientX)-Q.left;return Math.max(0,Math.min(100,Math.round(de*100/Z)))}function oe(ee){R.style.left=ee+"%",z.style.clipPath=`polygon(${ee}% 0%, ${ee}% 100%, 100% 100%, 100% 0)`,I.style.clipPath=`polygon(0% 100%, 0% 0%, ${ee}% 0%, ${ee}% 100%)`}};H&&z&&G(H),window.addEventListener("resize",function(){H&&z&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{Z=z.offsetWidth})}).observe(z),G(H))})}}let O=P.el.querySelector("a.beae-x-image"),A=O==null?void 0:O.getAttribute("href");O&&P.mode.value!=="builder"&&(A!=null&&A.includes("#"))&&O.addEventListener("click",q=>{let Z=document.querySelector(A+","+(A==null?void 0:A.replace("#",".")));if(Z)return Z.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),q.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-15adqtmb: ', ex)
      };
    

      try {
        let argid = 'beae-uc05qzo5block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-uc05qzo5',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-uc05qzo5');
        args.el = args.els[0];
        ((P) => { P.el.querySelectorAll(".beae-x-text a").forEach(I=>{let z=I==null?void 0:I.getAttribute("href");I&&P.mode.value!=="builder"&&(z!=null&&z.includes("#"))&&I.addEventListener("click",O=>{let A=document.querySelector(z+","+(z==null?void 0:z.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),O.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-uc05qzo5: ', ex)
      };
    

      try {
        let argid = 'beae-0diga63mblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-0diga63m',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-0diga63m');
        args.el = args.els[0];
        ((P) => { P.el.querySelectorAll(".beae-x-text a").forEach(I=>{let z=I==null?void 0:I.getAttribute("href");I&&P.mode.value!=="builder"&&(z!=null&&z.includes("#"))&&I.addEventListener("click",O=>{let A=document.querySelector(z+","+(z==null?void 0:z.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),O.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-0diga63m: ', ex)
      };
    

      try {
        let argid = 'beae-cxxc7tvcblock-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-cxxc7tvc',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-cxxc7tvc');
        args.el = args.els[0];
        ((P) => { if(P.el){if(P.shape){const G=P.el.closest(".beae-slider-items");G&&!G.hasAttribute("data-svg")&&(G==null||G.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${P.id}" clipPathUnits="objectBoundingBox">
                                ${P.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),G.setAttribute("data-svg","true"))}let q=P.el.querySelector(".beae-image-content-position"),Z,W=window.innerWidth>=768&&P.autoHover;var H=q.querySelector(".beae-img-ratio-control"),I=q.querySelector(".beae-img-comp-container"),z=q.querySelector(".beae-img-comp-container--second");if(H&&z){let G=function(R){let D=0,j;F(),W?q.onmouseover=function(ee){U(ee)}:R.onmousedown=function(ee){U(ee)},q.onmouseup=function(){X()},R.ontouchstart=function(ee){U(ee)},q.ontouchend=function(){X()};function F(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{Z=z.offsetWidth})}).observe(z),R.style.left&&parseInt(R.style.left)}function U(ee){check=!1,ee.preventDefault(),ee.clientX?ee.clientX:ee.touches[0].clientX,parseInt(R.style.left),D=1,q.onmousemove=function(Q){Y(Q)},q.ontouchmove=function(Q){Y(Q)}}function X(){D=0,check=!0}function Y(ee){if(D==0)return!1;j=ae(ee),j<0&&(j=0),j>100&&(j=100),oe(j)}function ae(ee){const Q=q.getBoundingClientRect(),de=(ee.changedTouches?ee.changedTouches[0].clientX:ee.clientX)-Q.left;return Math.max(0,Math.min(100,Math.round(de*100/Z)))}function oe(ee){R.style.left=ee+"%",z.style.clipPath=`polygon(${ee}% 0%, ${ee}% 100%, 100% 100%, 100% 0)`,I.style.clipPath=`polygon(0% 100%, 0% 0%, ${ee}% 0%, ${ee}% 100%)`}};H&&z&&G(H),window.addEventListener("resize",function(){H&&z&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{Z=z.offsetWidth})}).observe(z),G(H))})}}let O=P.el.querySelector("a.beae-x-image"),A=O==null?void 0:O.getAttribute("href");O&&P.mode.value!=="builder"&&(A!=null&&A.includes("#"))&&O.addEventListener("click",q=>{let Z=document.querySelector(A+","+(A==null?void 0:A.replace("#",".")));if(Z)return Z.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),q.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-cxxc7tvc: ', ex)
      };
    

      try {
        let argid = 'beae-zrtvtjtrblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-zrtvtjtr',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-zrtvtjtr');
        args.el = args.els[0];
        ((P) => { P.el.querySelectorAll(".beae-x-text a").forEach(I=>{let z=I==null?void 0:I.getAttribute("href");I&&P.mode.value!=="builder"&&(z!=null&&z.includes("#"))&&I.addEventListener("click",O=>{let A=document.querySelector(z+","+(z==null?void 0:z.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),O.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-zrtvtjtr: ', ex)
      };
    

      try {
        let argid = 'beae-fwyjb4i0block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-fwyjb4i0',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-fwyjb4i0');
        args.el = args.els[0];
        ((P) => { P.el.querySelectorAll(".beae-x-text a").forEach(I=>{let z=I==null?void 0:I.getAttribute("href");I&&P.mode.value!=="builder"&&(z!=null&&z.includes("#"))&&I.addEventListener("click",O=>{let A=document.querySelector(z+","+(z==null?void 0:z.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),O.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-fwyjb4i0: ', ex)
      };
    }; if (window.BEAEBASE) {js_UD3NQGP1()} else {window.BEAEPAGEJS.push(js_UD3NQGP1)} })(); 