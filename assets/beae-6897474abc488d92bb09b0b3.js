(() => { if (window.BEAEPAGEJS === undefined) {
            window.BEAEPAGEJS = [];
          }

          if(window.beaePageSetting == undefined) {
            window.beaePageSetting = {};
          }
          
          window.beaePageSetting.pageId = "6897474abc488d92bb09b0b3";
              window.beaePageSetting.pageTitle = "MLS icons with text"; 
              window.beaePageSetting.pageType = "section";

          let js_G6IE6S3D = () => { let BeaeUseHooks = {};
      try {
        let argid = 'beae-qdre9qxasection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-qdre9qxa',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-qdre9qxa');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-qdre9qxa: ', ex)
      };
    

      try {
        let argid = 'beae-i0f8kb0fsection-slide-show',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-i0f8kb0f',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-i0f8kb0f');
        args.el = args.els[0];
        ((h) => { window.BeaeSlider&&!h.noRunJs&&window.BeaeSlider(h) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-i0f8kb0f: ', ex)
      };
    

      try {
        let argid = 'beae-4ld7gcmhblock-imageloop-0',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-4ld7gcmh',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-4ld7gcmh');
        args.el = args.els[0];
        ((P) => { if(P.el){if(P.shape){const G=P.el.closest(".beae-slider-items");G&&!G.hasAttribute("data-svg")&&(G==null||G.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${P.id}" clipPathUnits="objectBoundingBox">
                                ${P.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),G.setAttribute("data-svg","true"))}let q=P.el.querySelector(".beae-image-content-position"),Z,W=window.innerWidth>=768&&P.autoHover;var H=q.querySelector(".beae-img-ratio-control"),I=q.querySelector(".beae-img-comp-container"),z=q.querySelector(".beae-img-comp-container--second");if(H&&z){let G=function(R){let D=0,j;F(),W?q.onmouseover=function(oe){U(oe)}:R.onmousedown=function(oe){U(oe)},q.onmouseup=function(){Y()},R.ontouchstart=function(oe){U(oe)},q.ontouchend=function(){Y()};function F(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{Z=z.offsetWidth})}).observe(z),R.style.left&&parseInt(R.style.left)}function U(oe){check=!1,oe.preventDefault(),oe.clientX?oe.clientX:oe.touches[0].clientX,parseInt(R.style.left),D=1,q.onmousemove=function(ee){X(ee)},q.ontouchmove=function(ee){X(ee)}}function Y(){D=0,check=!0}function X(oe){if(D==0)return!1;j=ae(oe),j<0&&(j=0),j>100&&(j=100),Q(j)}function ae(oe){const ee=q.getBoundingClientRect(),de=(oe.changedTouches?oe.changedTouches[0].clientX:oe.clientX)-ee.left;return Math.max(0,Math.min(100,Math.round(de*100/Z)))}function Q(oe){R.style.left=oe+"%",z.style.clipPath=`polygon(${oe}% 0%, ${oe}% 100%, 100% 100%, 100% 0)`,I.style.clipPath=`polygon(0% 100%, 0% 0%, ${oe}% 0%, ${oe}% 100%)`}};H&&z&&G(H),window.addEventListener("resize",function(){H&&z&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{Z=z.offsetWidth})}).observe(z),G(H))})}}let O=P.el.querySelector("a.beae-x-image"),A=O==null?void 0:O.getAttribute("href");O&&P.mode.value!=="builder"&&(A!=null&&A.includes("#"))&&O.addEventListener("click",q=>{let Z=document.querySelector(A+","+(A==null?void 0:A.replace("#",".")));if(Z)return Z.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),q.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-4ld7gcmh: ', ex)
      };
    

      try {
        let argid = 'beae-xadqnhg2block-textloop-0',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-xadqnhg2',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-xadqnhg2');
        args.el = args.els[0];
        ((P) => { P.el.querySelectorAll(".beae-x-text a").forEach(I=>{let z=I==null?void 0:I.getAttribute("href");I&&P.mode.value!=="builder"&&(z!=null&&z.includes("#"))&&I.addEventListener("click",O=>{let A=document.querySelector(z+","+(z==null?void 0:z.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),O.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-xadqnhg2: ', ex)
      };
    

      try {
        let argid = 'beae-4ld7gcmhblock-imageloop-1',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-4ld7gcmh',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-4ld7gcmh');
        args.el = args.els[1];
        ((P) => { if(P.el){if(P.shape){const G=P.el.closest(".beae-slider-items");G&&!G.hasAttribute("data-svg")&&(G==null||G.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${P.id}" clipPathUnits="objectBoundingBox">
                                ${P.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),G.setAttribute("data-svg","true"))}let q=P.el.querySelector(".beae-image-content-position"),Z,W=window.innerWidth>=768&&P.autoHover;var H=q.querySelector(".beae-img-ratio-control"),I=q.querySelector(".beae-img-comp-container"),z=q.querySelector(".beae-img-comp-container--second");if(H&&z){let G=function(R){let D=0,j;F(),W?q.onmouseover=function(oe){U(oe)}:R.onmousedown=function(oe){U(oe)},q.onmouseup=function(){Y()},R.ontouchstart=function(oe){U(oe)},q.ontouchend=function(){Y()};function F(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{Z=z.offsetWidth})}).observe(z),R.style.left&&parseInt(R.style.left)}function U(oe){check=!1,oe.preventDefault(),oe.clientX?oe.clientX:oe.touches[0].clientX,parseInt(R.style.left),D=1,q.onmousemove=function(ee){X(ee)},q.ontouchmove=function(ee){X(ee)}}function Y(){D=0,check=!0}function X(oe){if(D==0)return!1;j=ae(oe),j<0&&(j=0),j>100&&(j=100),Q(j)}function ae(oe){const ee=q.getBoundingClientRect(),de=(oe.changedTouches?oe.changedTouches[0].clientX:oe.clientX)-ee.left;return Math.max(0,Math.min(100,Math.round(de*100/Z)))}function Q(oe){R.style.left=oe+"%",z.style.clipPath=`polygon(${oe}% 0%, ${oe}% 100%, 100% 100%, 100% 0)`,I.style.clipPath=`polygon(0% 100%, 0% 0%, ${oe}% 0%, ${oe}% 100%)`}};H&&z&&G(H),window.addEventListener("resize",function(){H&&z&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{Z=z.offsetWidth})}).observe(z),G(H))})}}let O=P.el.querySelector("a.beae-x-image"),A=O==null?void 0:O.getAttribute("href");O&&P.mode.value!=="builder"&&(A!=null&&A.includes("#"))&&O.addEventListener("click",q=>{let Z=document.querySelector(A+","+(A==null?void 0:A.replace("#",".")));if(Z)return Z.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),q.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-4ld7gcmh: ', ex)
      };
    

      try {
        let argid = 'beae-xadqnhg2block-textloop-1',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-xadqnhg2',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-xadqnhg2');
        args.el = args.els[1];
        ((P) => { P.el.querySelectorAll(".beae-x-text a").forEach(I=>{let z=I==null?void 0:I.getAttribute("href");I&&P.mode.value!=="builder"&&(z!=null&&z.includes("#"))&&I.addEventListener("click",O=>{let A=document.querySelector(z+","+(z==null?void 0:z.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),O.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-xadqnhg2: ', ex)
      };
    

      try {
        let argid = 'beae-4ld7gcmhblock-imageloop-2',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-4ld7gcmh',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-4ld7gcmh');
        args.el = args.els[2];
        ((P) => { if(P.el){if(P.shape){const G=P.el.closest(".beae-slider-items");G&&!G.hasAttribute("data-svg")&&(G==null||G.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${P.id}" clipPathUnits="objectBoundingBox">
                                ${P.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),G.setAttribute("data-svg","true"))}let q=P.el.querySelector(".beae-image-content-position"),Z,W=window.innerWidth>=768&&P.autoHover;var H=q.querySelector(".beae-img-ratio-control"),I=q.querySelector(".beae-img-comp-container"),z=q.querySelector(".beae-img-comp-container--second");if(H&&z){let G=function(R){let D=0,j;F(),W?q.onmouseover=function(oe){U(oe)}:R.onmousedown=function(oe){U(oe)},q.onmouseup=function(){Y()},R.ontouchstart=function(oe){U(oe)},q.ontouchend=function(){Y()};function F(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{Z=z.offsetWidth})}).observe(z),R.style.left&&parseInt(R.style.left)}function U(oe){check=!1,oe.preventDefault(),oe.clientX?oe.clientX:oe.touches[0].clientX,parseInt(R.style.left),D=1,q.onmousemove=function(ee){X(ee)},q.ontouchmove=function(ee){X(ee)}}function Y(){D=0,check=!0}function X(oe){if(D==0)return!1;j=ae(oe),j<0&&(j=0),j>100&&(j=100),Q(j)}function ae(oe){const ee=q.getBoundingClientRect(),de=(oe.changedTouches?oe.changedTouches[0].clientX:oe.clientX)-ee.left;return Math.max(0,Math.min(100,Math.round(de*100/Z)))}function Q(oe){R.style.left=oe+"%",z.style.clipPath=`polygon(${oe}% 0%, ${oe}% 100%, 100% 100%, 100% 0)`,I.style.clipPath=`polygon(0% 100%, 0% 0%, ${oe}% 0%, ${oe}% 100%)`}};H&&z&&G(H),window.addEventListener("resize",function(){H&&z&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{Z=z.offsetWidth})}).observe(z),G(H))})}}let O=P.el.querySelector("a.beae-x-image"),A=O==null?void 0:O.getAttribute("href");O&&P.mode.value!=="builder"&&(A!=null&&A.includes("#"))&&O.addEventListener("click",q=>{let Z=document.querySelector(A+","+(A==null?void 0:A.replace("#",".")));if(Z)return Z.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),q.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-4ld7gcmh: ', ex)
      };
    

      try {
        let argid = 'beae-xadqnhg2block-textloop-2',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-xadqnhg2',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-xadqnhg2');
        args.el = args.els[2];
        ((P) => { P.el.querySelectorAll(".beae-x-text a").forEach(I=>{let z=I==null?void 0:I.getAttribute("href");I&&P.mode.value!=="builder"&&(z!=null&&z.includes("#"))&&I.addEventListener("click",O=>{let A=document.querySelector(z+","+(z==null?void 0:z.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),O.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-xadqnhg2: ', ex)
      };
    

      try {
        let argid = 'beae-4ld7gcmhblock-imageloop-3',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-4ld7gcmh',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-4ld7gcmh');
        args.el = args.els[3];
        ((P) => { if(P.el){if(P.shape){const G=P.el.closest(".beae-slider-items");G&&!G.hasAttribute("data-svg")&&(G==null||G.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${P.id}" clipPathUnits="objectBoundingBox">
                                ${P.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),G.setAttribute("data-svg","true"))}let q=P.el.querySelector(".beae-image-content-position"),Z,W=window.innerWidth>=768&&P.autoHover;var H=q.querySelector(".beae-img-ratio-control"),I=q.querySelector(".beae-img-comp-container"),z=q.querySelector(".beae-img-comp-container--second");if(H&&z){let G=function(R){let D=0,j;F(),W?q.onmouseover=function(oe){U(oe)}:R.onmousedown=function(oe){U(oe)},q.onmouseup=function(){Y()},R.ontouchstart=function(oe){U(oe)},q.ontouchend=function(){Y()};function F(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{Z=z.offsetWidth})}).observe(z),R.style.left&&parseInt(R.style.left)}function U(oe){check=!1,oe.preventDefault(),oe.clientX?oe.clientX:oe.touches[0].clientX,parseInt(R.style.left),D=1,q.onmousemove=function(ee){X(ee)},q.ontouchmove=function(ee){X(ee)}}function Y(){D=0,check=!0}function X(oe){if(D==0)return!1;j=ae(oe),j<0&&(j=0),j>100&&(j=100),Q(j)}function ae(oe){const ee=q.getBoundingClientRect(),de=(oe.changedTouches?oe.changedTouches[0].clientX:oe.clientX)-ee.left;return Math.max(0,Math.min(100,Math.round(de*100/Z)))}function Q(oe){R.style.left=oe+"%",z.style.clipPath=`polygon(${oe}% 0%, ${oe}% 100%, 100% 100%, 100% 0)`,I.style.clipPath=`polygon(0% 100%, 0% 0%, ${oe}% 0%, ${oe}% 100%)`}};H&&z&&G(H),window.addEventListener("resize",function(){H&&z&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{Z=z.offsetWidth})}).observe(z),G(H))})}}let O=P.el.querySelector("a.beae-x-image"),A=O==null?void 0:O.getAttribute("href");O&&P.mode.value!=="builder"&&(A!=null&&A.includes("#"))&&O.addEventListener("click",q=>{let Z=document.querySelector(A+","+(A==null?void 0:A.replace("#",".")));if(Z)return Z.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),q.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-4ld7gcmh: ', ex)
      };
    

      try {
        let argid = 'beae-xadqnhg2block-textloop-3',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-xadqnhg2',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-xadqnhg2');
        args.el = args.els[3];
        ((P) => { P.el.querySelectorAll(".beae-x-text a").forEach(I=>{let z=I==null?void 0:I.getAttribute("href");I&&P.mode.value!=="builder"&&(z!=null&&z.includes("#"))&&I.addEventListener("click",O=>{let A=document.querySelector(z+","+(z==null?void 0:z.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),O.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-xadqnhg2: ', ex)
      };
    }; if (window.BEAEBASE) {js_G6IE6S3D()} else {window.BEAEPAGEJS.push(js_G6IE6S3D)} })(); 