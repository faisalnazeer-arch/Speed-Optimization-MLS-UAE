(() => { if (window.BEAEPAGEJS === undefined) {
            window.BEAEPAGEJS = [];
          }

          if(window.beaePageSetting == undefined) {
            window.beaePageSetting = {};
          }
          
          window.beaePageSetting.pageId = "68c5973dc46a543ba80572c4";
              window.beaePageSetting.pageTitle = "dry aged new"; 
              window.beaePageSetting.pageType = "page";

          let js_7AQH3K00 = () => { let BeaeUseHooks = {};
      try {
        let argid = 'beae-7kj8e7fdsection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-7kj8e7fd',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-7kj8e7fd');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-7kj8e7fd: ', ex)
      };
    

      try {
        let argid = 'beae-7kj8e7fdsection-slide-show',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-7kj8e7fd',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-7kj8e7fd');
        args.el = args.els[0];
        ((h) => { window.BeaeSlider&&!h.noRunJs&&window.BeaeSlider(h) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-7kj8e7fd: ', ex)
      };
    

      try {
        let argid = 'beae-4cyb851iblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-4cyb851i',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-4cyb851i');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-4cyb851i: ', ex)
      };
    

      try {
        let argid = 'beae-jma2twipblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-jma2twip',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-jma2twip');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-jma2twip: ', ex)
      };
    

      try {
        let argid = 'beae-biycdfhobutton-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-biycdfho',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-biycdfho');
        args.el = args.els[0];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{var n,t;let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(o){extOptions={},console.error(o)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let o=document.querySelector(selector+","+selector.replace("#","."));if(o)return o.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let s=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(s,{id:data.id,...extOptions}),e.preventDefault();return}const o=window.createLoading(e.currentTarget);let r=(t=(n=window.BEAE_HELPER)==null?void 0:n.routes)==null?void 0:t.root_url;return window.BeaePopupLibrary.lightbox({id:data.id,url:(r!=="/"?r:"")+((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(s=>{s.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(s),o.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let o=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(o=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(o,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-biycdfho: ', ex)
      };
    

      try {
        let argid = 'beae-r4urz8plsection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-r4urz8pl',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-r4urz8pl');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-r4urz8pl: ', ex)
      };
    

      try {
        let argid = 'beae-2faafsu5section-slide-show',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-2faafsu5',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-2faafsu5');
        args.el = args.els[0];
        ((h) => { window.BeaeSlider&&!h.noRunJs&&window.BeaeSlider(h) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-2faafsu5: ', ex)
      };
    

      try {
        let argid = 'beae-i58f50u7block-imageloop-0',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-i58f50u7',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-i58f50u7');
        args.el = args.els[0];
        ((M) => { var P;if(M.el){if(M.shape){const O=M.el.closest(".beae-slider-items");O&&!O.hasAttribute("data-svg")&&(O==null||O.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${M.id}" clipPathUnits="objectBoundingBox">
                                ${M.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),O.setAttribute("data-svg","true"))}let H=M.el.querySelector(".beae-image-content-position"),z,R=window.innerWidth>=768&&M.autoHover;var V=H.querySelector(".beae-img-ratio-control"),L=H.querySelector(".beae-img-comp-container"),T=H.querySelector(".beae-img-comp-container--second");if(V&&T){let O=function(I){let A=0,D;j(),R?H.onmouseover=function(W){q(W)}:I.onmousedown=function(W){q(W)},H.onmouseup=function(){Z()},I.ontouchstart=function(W){q(W)},H.ontouchend=function(){Z()};function j(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{z=T.offsetWidth})}).observe(T),I.style.left&&parseInt(I.style.left)}function q(W){check=!1,W.preventDefault(),W.clientX?W.clientX:W.touches[0].clientX,parseInt(I.style.left),A=1,H.onmousemove=function(Y){F(Y)},H.ontouchmove=function(Y){F(Y)}}function Z(){A=0,check=!0}function F(W){if(A==0)return!1;D=U(W),D<0&&(D=0),D>100&&(D=100),G(D)}function U(W){const Y=H.getBoundingClientRect(),oe=(W.changedTouches?W.changedTouches[0].clientX:W.clientX)-Y.left;return Math.max(0,Math.min(100,Math.round(oe*100/z)))}function G(W){I.style.left=W+"%",T.style.clipPath=`polygon(${W}% 0%, ${W}% 100%, 100% 100%, 100% 0)`,L.style.clipPath=`polygon(0% 100%, 0% 0%, ${W}% 0%, ${W}% 100%)`}};V&&T&&O(V),window.addEventListener("resize",function(){V&&T&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{z=T.offsetWidth})}).observe(T),O(V))})}}let N=(P=M.el)==null?void 0:P.querySelector("a.beae-x-image"),E=N==null?void 0:N.getAttribute("href");N&&M.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&N.addEventListener("click",H=>{let z=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(z)return z.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),H.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-i58f50u7: ', ex)
      };
    

      try {
        let argid = 'beae-bzinuw0jblock-textloop-0',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-bzinuw0j',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-bzinuw0j');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-bzinuw0j: ', ex)
      };
    

      try {
        let argid = 'beae-07h94mdpblock-textloop-0',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-07h94mdp',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-07h94mdp');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-07h94mdp: ', ex)
      };
    

      try {
        let argid = 'beae-i58f50u7block-imageloop-1',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-i58f50u7',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-i58f50u7');
        args.el = args.els[1];
        ((M) => { var P;if(M.el){if(M.shape){const O=M.el.closest(".beae-slider-items");O&&!O.hasAttribute("data-svg")&&(O==null||O.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${M.id}" clipPathUnits="objectBoundingBox">
                                ${M.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),O.setAttribute("data-svg","true"))}let H=M.el.querySelector(".beae-image-content-position"),z,R=window.innerWidth>=768&&M.autoHover;var V=H.querySelector(".beae-img-ratio-control"),L=H.querySelector(".beae-img-comp-container"),T=H.querySelector(".beae-img-comp-container--second");if(V&&T){let O=function(I){let A=0,D;j(),R?H.onmouseover=function(W){q(W)}:I.onmousedown=function(W){q(W)},H.onmouseup=function(){Z()},I.ontouchstart=function(W){q(W)},H.ontouchend=function(){Z()};function j(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{z=T.offsetWidth})}).observe(T),I.style.left&&parseInt(I.style.left)}function q(W){check=!1,W.preventDefault(),W.clientX?W.clientX:W.touches[0].clientX,parseInt(I.style.left),A=1,H.onmousemove=function(Y){F(Y)},H.ontouchmove=function(Y){F(Y)}}function Z(){A=0,check=!0}function F(W){if(A==0)return!1;D=U(W),D<0&&(D=0),D>100&&(D=100),G(D)}function U(W){const Y=H.getBoundingClientRect(),oe=(W.changedTouches?W.changedTouches[0].clientX:W.clientX)-Y.left;return Math.max(0,Math.min(100,Math.round(oe*100/z)))}function G(W){I.style.left=W+"%",T.style.clipPath=`polygon(${W}% 0%, ${W}% 100%, 100% 100%, 100% 0)`,L.style.clipPath=`polygon(0% 100%, 0% 0%, ${W}% 0%, ${W}% 100%)`}};V&&T&&O(V),window.addEventListener("resize",function(){V&&T&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{z=T.offsetWidth})}).observe(T),O(V))})}}let N=(P=M.el)==null?void 0:P.querySelector("a.beae-x-image"),E=N==null?void 0:N.getAttribute("href");N&&M.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&N.addEventListener("click",H=>{let z=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(z)return z.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),H.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-i58f50u7: ', ex)
      };
    

      try {
        let argid = 'beae-bzinuw0jblock-textloop-1',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-bzinuw0j',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-bzinuw0j');
        args.el = args.els[1];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-bzinuw0j: ', ex)
      };
    

      try {
        let argid = 'beae-07h94mdpblock-textloop-1',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-07h94mdp',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-07h94mdp');
        args.el = args.els[1];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-07h94mdp: ', ex)
      };
    

      try {
        let argid = 'beae-i58f50u7block-imageloop-2',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-i58f50u7',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-i58f50u7');
        args.el = args.els[2];
        ((M) => { var P;if(M.el){if(M.shape){const O=M.el.closest(".beae-slider-items");O&&!O.hasAttribute("data-svg")&&(O==null||O.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${M.id}" clipPathUnits="objectBoundingBox">
                                ${M.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),O.setAttribute("data-svg","true"))}let H=M.el.querySelector(".beae-image-content-position"),z,R=window.innerWidth>=768&&M.autoHover;var V=H.querySelector(".beae-img-ratio-control"),L=H.querySelector(".beae-img-comp-container"),T=H.querySelector(".beae-img-comp-container--second");if(V&&T){let O=function(I){let A=0,D;j(),R?H.onmouseover=function(W){q(W)}:I.onmousedown=function(W){q(W)},H.onmouseup=function(){Z()},I.ontouchstart=function(W){q(W)},H.ontouchend=function(){Z()};function j(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{z=T.offsetWidth})}).observe(T),I.style.left&&parseInt(I.style.left)}function q(W){check=!1,W.preventDefault(),W.clientX?W.clientX:W.touches[0].clientX,parseInt(I.style.left),A=1,H.onmousemove=function(Y){F(Y)},H.ontouchmove=function(Y){F(Y)}}function Z(){A=0,check=!0}function F(W){if(A==0)return!1;D=U(W),D<0&&(D=0),D>100&&(D=100),G(D)}function U(W){const Y=H.getBoundingClientRect(),oe=(W.changedTouches?W.changedTouches[0].clientX:W.clientX)-Y.left;return Math.max(0,Math.min(100,Math.round(oe*100/z)))}function G(W){I.style.left=W+"%",T.style.clipPath=`polygon(${W}% 0%, ${W}% 100%, 100% 100%, 100% 0)`,L.style.clipPath=`polygon(0% 100%, 0% 0%, ${W}% 0%, ${W}% 100%)`}};V&&T&&O(V),window.addEventListener("resize",function(){V&&T&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{z=T.offsetWidth})}).observe(T),O(V))})}}let N=(P=M.el)==null?void 0:P.querySelector("a.beae-x-image"),E=N==null?void 0:N.getAttribute("href");N&&M.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&N.addEventListener("click",H=>{let z=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(z)return z.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),H.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-i58f50u7: ', ex)
      };
    

      try {
        let argid = 'beae-bzinuw0jblock-textloop-2',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-bzinuw0j',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-bzinuw0j');
        args.el = args.els[2];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-bzinuw0j: ', ex)
      };
    

      try {
        let argid = 'beae-07h94mdpblock-textloop-2',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-07h94mdp',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-07h94mdp');
        args.el = args.els[2];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-07h94mdp: ', ex)
      };
    

      try {
        let argid = 'beae-6ou52f9osection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-6ou52f9o',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-6ou52f9o');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-6ou52f9o: ', ex)
      };
    

      try {
        let argid = 'beae-8naud0u8block-video',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-8naud0u8',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-8naud0u8');
        args.el = args.els[0];
        ((data) => { if(data.mode.value==="builder")return;if(data.source=="self hosted"&&data.el.querySelector(".beae_video")&&data.mute){const f=data.el.querySelector(".beae_video");f.muted=!0,f.play().catch(b=>{console.warn("Autoplay bị chặn:",b)})}const playButton=data.el.querySelector(".beae-video_overlay-icon"),playIcon=playButton&&playButton.querySelector(".beae-video-icon-play"),closePlayingButton=data.el.querySelector(".beae-close-video"),closeVideoFn=()=>{let f=playButton.closest(".beae-grid-block"),b=data.el.querySelector(".beae-x-video--wrapper");b&&b.classList.remove("playing"),f&&(f.style.zIndex=""),data.lightbox&&(document.querySelector("div.beae-builder")&&(document.querySelector("div.beae-builder").style.zIndex=""),f&&f.setAttribute("style",""),document.body.style.overflow="",document.documentElement.style.overflow="");let C=data.el.querySelector(".beae_video");C&&(C.autoplay=!1,C.pause());let m=data.el.querySelector(".beae_iframe");m&&m.getAttribute("src").indexOf("&autoplay=1")>-1&&m.setAttribute("src",m.getAttribute("src").replace("&autoplay=1",""))};if(playButton&&(playIcon&&playIcon.addEventListener("click",e=>{if(data.source=="self hosted"){let f=data.el.querySelector(".beae_video");f.autoplay=!0,f.load(),playButton.classList.remove("beae-overlay"),data.play_icon&&(data.el.querySelector(".beae-video-icon-play").style.display="none")}else{let f=data.el.querySelector(".beae_iframe"),b=f.getAttribute("src")+"&autoplay=1";f.setAttribute("src",b),playButton.classList.remove("beae-overlay"),data.play_icon&&(data.el.querySelector(".beae-video-icon-play").style.display="none")}let gridBlock=playButton.closest(".beae-grid-block"),wrapper=data.el.querySelector(".beae-x-video--wrapper");if(wrapper&&wrapper.classList.add("playing"),gridBlock&&(gridBlock.style.zIndex=1e8),data.lightbox){let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(f){extOptions={},console.error(f)}window.BeaePopupLibrary.createPopup(data.el.querySelector(".beae-block_video-player"),{width:"1070px",sectionId:data.id,...extOptions}),closeVideoFn()}}),closePlayingButton&&closePlayingButton.addEventListener("click",closeVideoFn)),["youtube","vimeo"].includes(data.source)&&(data.autoplay||data.loop)){let f=data.el.querySelector(".beae_iframe"),b={isloop:data.loop,autoplay:data.autoplay,idBlock:data.uniqueId||data.id,controls:data.player_controls?1:0,muted:data.mute};if(data.source=="youtube"){const C=/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;let m=data.srcYoutube.match(C),_=m&&m[2].length===11?m[2]:null;const S=/[?&]t=(\d+)s/,B=data.srcYoutube.match(S),k=B?B[1]:0;b.start=k,b.id=_,b.src=location.protocol+"//www.youtube.com/embed/"+_}switch(data.source){case"youtube":setTimeout(()=>{window.BEAEVIDEO.handleLoopYoutube&&window.BEAEVIDEO.handleLoopYoutube(b,data.uniqueId||data.id)});break;case"vimeo":setTimeout(()=>{window.BEAEVIDEO.handleLoopVimeo&&window.BEAEVIDEO.handleLoopVimeo(b,f)});break}} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-8naud0u8: ', ex)
      };
    

      try {
        let argid = 'beae-53wlqdk4block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-53wlqdk4',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-53wlqdk4');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-53wlqdk4: ', ex)
      };
    

      try {
        let argid = 'beae-xgt6ml92block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-xgt6ml92',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-xgt6ml92');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-xgt6ml92: ', ex)
      };
    

      try {
        let argid = 'beae-a599iogwsection-slide-show',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-a599iogw',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-a599iogw');
        args.el = args.els[0];
        ((h) => { window.BeaeSlider&&!h.noRunJs&&window.BeaeSlider(h) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-a599iogw: ', ex)
      };
    

      try {
        let argid = 'beae-lffb6ifcblock-imageloop-0',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-lffb6ifc',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-lffb6ifc');
        args.el = args.els[0];
        ((M) => { var P;if(M.el){if(M.shape){const O=M.el.closest(".beae-slider-items");O&&!O.hasAttribute("data-svg")&&(O==null||O.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${M.id}" clipPathUnits="objectBoundingBox">
                                ${M.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),O.setAttribute("data-svg","true"))}let H=M.el.querySelector(".beae-image-content-position"),z,R=window.innerWidth>=768&&M.autoHover;var V=H.querySelector(".beae-img-ratio-control"),L=H.querySelector(".beae-img-comp-container"),T=H.querySelector(".beae-img-comp-container--second");if(V&&T){let O=function(I){let A=0,D;j(),R?H.onmouseover=function(W){q(W)}:I.onmousedown=function(W){q(W)},H.onmouseup=function(){Z()},I.ontouchstart=function(W){q(W)},H.ontouchend=function(){Z()};function j(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{z=T.offsetWidth})}).observe(T),I.style.left&&parseInt(I.style.left)}function q(W){check=!1,W.preventDefault(),W.clientX?W.clientX:W.touches[0].clientX,parseInt(I.style.left),A=1,H.onmousemove=function(Y){F(Y)},H.ontouchmove=function(Y){F(Y)}}function Z(){A=0,check=!0}function F(W){if(A==0)return!1;D=U(W),D<0&&(D=0),D>100&&(D=100),G(D)}function U(W){const Y=H.getBoundingClientRect(),oe=(W.changedTouches?W.changedTouches[0].clientX:W.clientX)-Y.left;return Math.max(0,Math.min(100,Math.round(oe*100/z)))}function G(W){I.style.left=W+"%",T.style.clipPath=`polygon(${W}% 0%, ${W}% 100%, 100% 100%, 100% 0)`,L.style.clipPath=`polygon(0% 100%, 0% 0%, ${W}% 0%, ${W}% 100%)`}};V&&T&&O(V),window.addEventListener("resize",function(){V&&T&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{z=T.offsetWidth})}).observe(T),O(V))})}}let N=(P=M.el)==null?void 0:P.querySelector("a.beae-x-image"),E=N==null?void 0:N.getAttribute("href");N&&M.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&N.addEventListener("click",H=>{let z=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(z)return z.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),H.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-lffb6ifc: ', ex)
      };
    

      try {
        let argid = 'beae-3pao3sx3block-imageloop-0',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-3pao3sx3',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-3pao3sx3');
        args.el = args.els[0];
        ((M) => { var P;if(M.el){if(M.shape){const O=M.el.closest(".beae-slider-items");O&&!O.hasAttribute("data-svg")&&(O==null||O.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${M.id}" clipPathUnits="objectBoundingBox">
                                ${M.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),O.setAttribute("data-svg","true"))}let H=M.el.querySelector(".beae-image-content-position"),z,R=window.innerWidth>=768&&M.autoHover;var V=H.querySelector(".beae-img-ratio-control"),L=H.querySelector(".beae-img-comp-container"),T=H.querySelector(".beae-img-comp-container--second");if(V&&T){let O=function(I){let A=0,D;j(),R?H.onmouseover=function(W){q(W)}:I.onmousedown=function(W){q(W)},H.onmouseup=function(){Z()},I.ontouchstart=function(W){q(W)},H.ontouchend=function(){Z()};function j(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{z=T.offsetWidth})}).observe(T),I.style.left&&parseInt(I.style.left)}function q(W){check=!1,W.preventDefault(),W.clientX?W.clientX:W.touches[0].clientX,parseInt(I.style.left),A=1,H.onmousemove=function(Y){F(Y)},H.ontouchmove=function(Y){F(Y)}}function Z(){A=0,check=!0}function F(W){if(A==0)return!1;D=U(W),D<0&&(D=0),D>100&&(D=100),G(D)}function U(W){const Y=H.getBoundingClientRect(),oe=(W.changedTouches?W.changedTouches[0].clientX:W.clientX)-Y.left;return Math.max(0,Math.min(100,Math.round(oe*100/z)))}function G(W){I.style.left=W+"%",T.style.clipPath=`polygon(${W}% 0%, ${W}% 100%, 100% 100%, 100% 0)`,L.style.clipPath=`polygon(0% 100%, 0% 0%, ${W}% 0%, ${W}% 100%)`}};V&&T&&O(V),window.addEventListener("resize",function(){V&&T&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{z=T.offsetWidth})}).observe(T),O(V))})}}let N=(P=M.el)==null?void 0:P.querySelector("a.beae-x-image"),E=N==null?void 0:N.getAttribute("href");N&&M.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&N.addEventListener("click",H=>{let z=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(z)return z.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),H.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-3pao3sx3: ', ex)
      };
    

      try {
        let argid = 'beae-f8lllx80block-textloop-0',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-f8lllx80',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-f8lllx80');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-f8lllx80: ', ex)
      };
    

      try {
        let argid = 'beae-9rg1cv62block-textloop-0',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-9rg1cv62',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-9rg1cv62');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-9rg1cv62: ', ex)
      };
    

      try {
        let argid = 'beae-lffb6ifcblock-imageloop-1',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-lffb6ifc',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-lffb6ifc');
        args.el = args.els[1];
        ((M) => { var P;if(M.el){if(M.shape){const O=M.el.closest(".beae-slider-items");O&&!O.hasAttribute("data-svg")&&(O==null||O.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${M.id}" clipPathUnits="objectBoundingBox">
                                ${M.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),O.setAttribute("data-svg","true"))}let H=M.el.querySelector(".beae-image-content-position"),z,R=window.innerWidth>=768&&M.autoHover;var V=H.querySelector(".beae-img-ratio-control"),L=H.querySelector(".beae-img-comp-container"),T=H.querySelector(".beae-img-comp-container--second");if(V&&T){let O=function(I){let A=0,D;j(),R?H.onmouseover=function(W){q(W)}:I.onmousedown=function(W){q(W)},H.onmouseup=function(){Z()},I.ontouchstart=function(W){q(W)},H.ontouchend=function(){Z()};function j(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{z=T.offsetWidth})}).observe(T),I.style.left&&parseInt(I.style.left)}function q(W){check=!1,W.preventDefault(),W.clientX?W.clientX:W.touches[0].clientX,parseInt(I.style.left),A=1,H.onmousemove=function(Y){F(Y)},H.ontouchmove=function(Y){F(Y)}}function Z(){A=0,check=!0}function F(W){if(A==0)return!1;D=U(W),D<0&&(D=0),D>100&&(D=100),G(D)}function U(W){const Y=H.getBoundingClientRect(),oe=(W.changedTouches?W.changedTouches[0].clientX:W.clientX)-Y.left;return Math.max(0,Math.min(100,Math.round(oe*100/z)))}function G(W){I.style.left=W+"%",T.style.clipPath=`polygon(${W}% 0%, ${W}% 100%, 100% 100%, 100% 0)`,L.style.clipPath=`polygon(0% 100%, 0% 0%, ${W}% 0%, ${W}% 100%)`}};V&&T&&O(V),window.addEventListener("resize",function(){V&&T&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{z=T.offsetWidth})}).observe(T),O(V))})}}let N=(P=M.el)==null?void 0:P.querySelector("a.beae-x-image"),E=N==null?void 0:N.getAttribute("href");N&&M.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&N.addEventListener("click",H=>{let z=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(z)return z.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),H.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-lffb6ifc: ', ex)
      };
    

      try {
        let argid = 'beae-3pao3sx3block-imageloop-1',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-3pao3sx3',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-3pao3sx3');
        args.el = args.els[1];
        ((M) => { var P;if(M.el){if(M.shape){const O=M.el.closest(".beae-slider-items");O&&!O.hasAttribute("data-svg")&&(O==null||O.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${M.id}" clipPathUnits="objectBoundingBox">
                                ${M.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),O.setAttribute("data-svg","true"))}let H=M.el.querySelector(".beae-image-content-position"),z,R=window.innerWidth>=768&&M.autoHover;var V=H.querySelector(".beae-img-ratio-control"),L=H.querySelector(".beae-img-comp-container"),T=H.querySelector(".beae-img-comp-container--second");if(V&&T){let O=function(I){let A=0,D;j(),R?H.onmouseover=function(W){q(W)}:I.onmousedown=function(W){q(W)},H.onmouseup=function(){Z()},I.ontouchstart=function(W){q(W)},H.ontouchend=function(){Z()};function j(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{z=T.offsetWidth})}).observe(T),I.style.left&&parseInt(I.style.left)}function q(W){check=!1,W.preventDefault(),W.clientX?W.clientX:W.touches[0].clientX,parseInt(I.style.left),A=1,H.onmousemove=function(Y){F(Y)},H.ontouchmove=function(Y){F(Y)}}function Z(){A=0,check=!0}function F(W){if(A==0)return!1;D=U(W),D<0&&(D=0),D>100&&(D=100),G(D)}function U(W){const Y=H.getBoundingClientRect(),oe=(W.changedTouches?W.changedTouches[0].clientX:W.clientX)-Y.left;return Math.max(0,Math.min(100,Math.round(oe*100/z)))}function G(W){I.style.left=W+"%",T.style.clipPath=`polygon(${W}% 0%, ${W}% 100%, 100% 100%, 100% 0)`,L.style.clipPath=`polygon(0% 100%, 0% 0%, ${W}% 0%, ${W}% 100%)`}};V&&T&&O(V),window.addEventListener("resize",function(){V&&T&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{z=T.offsetWidth})}).observe(T),O(V))})}}let N=(P=M.el)==null?void 0:P.querySelector("a.beae-x-image"),E=N==null?void 0:N.getAttribute("href");N&&M.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&N.addEventListener("click",H=>{let z=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(z)return z.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),H.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-3pao3sx3: ', ex)
      };
    

      try {
        let argid = 'beae-f8lllx80block-textloop-1',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-f8lllx80',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-f8lllx80');
        args.el = args.els[1];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-f8lllx80: ', ex)
      };
    

      try {
        let argid = 'beae-9rg1cv62block-textloop-1',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-9rg1cv62',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-9rg1cv62');
        args.el = args.els[1];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-9rg1cv62: ', ex)
      };
    

      try {
        let argid = 'beae-lffb6ifcblock-imageloop-2',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-lffb6ifc',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-lffb6ifc');
        args.el = args.els[2];
        ((M) => { var P;if(M.el){if(M.shape){const O=M.el.closest(".beae-slider-items");O&&!O.hasAttribute("data-svg")&&(O==null||O.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${M.id}" clipPathUnits="objectBoundingBox">
                                ${M.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),O.setAttribute("data-svg","true"))}let H=M.el.querySelector(".beae-image-content-position"),z,R=window.innerWidth>=768&&M.autoHover;var V=H.querySelector(".beae-img-ratio-control"),L=H.querySelector(".beae-img-comp-container"),T=H.querySelector(".beae-img-comp-container--second");if(V&&T){let O=function(I){let A=0,D;j(),R?H.onmouseover=function(W){q(W)}:I.onmousedown=function(W){q(W)},H.onmouseup=function(){Z()},I.ontouchstart=function(W){q(W)},H.ontouchend=function(){Z()};function j(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{z=T.offsetWidth})}).observe(T),I.style.left&&parseInt(I.style.left)}function q(W){check=!1,W.preventDefault(),W.clientX?W.clientX:W.touches[0].clientX,parseInt(I.style.left),A=1,H.onmousemove=function(Y){F(Y)},H.ontouchmove=function(Y){F(Y)}}function Z(){A=0,check=!0}function F(W){if(A==0)return!1;D=U(W),D<0&&(D=0),D>100&&(D=100),G(D)}function U(W){const Y=H.getBoundingClientRect(),oe=(W.changedTouches?W.changedTouches[0].clientX:W.clientX)-Y.left;return Math.max(0,Math.min(100,Math.round(oe*100/z)))}function G(W){I.style.left=W+"%",T.style.clipPath=`polygon(${W}% 0%, ${W}% 100%, 100% 100%, 100% 0)`,L.style.clipPath=`polygon(0% 100%, 0% 0%, ${W}% 0%, ${W}% 100%)`}};V&&T&&O(V),window.addEventListener("resize",function(){V&&T&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{z=T.offsetWidth})}).observe(T),O(V))})}}let N=(P=M.el)==null?void 0:P.querySelector("a.beae-x-image"),E=N==null?void 0:N.getAttribute("href");N&&M.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&N.addEventListener("click",H=>{let z=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(z)return z.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),H.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-lffb6ifc: ', ex)
      };
    

      try {
        let argid = 'beae-3pao3sx3block-imageloop-2',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-3pao3sx3',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-3pao3sx3');
        args.el = args.els[2];
        ((M) => { var P;if(M.el){if(M.shape){const O=M.el.closest(".beae-slider-items");O&&!O.hasAttribute("data-svg")&&(O==null||O.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${M.id}" clipPathUnits="objectBoundingBox">
                                ${M.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),O.setAttribute("data-svg","true"))}let H=M.el.querySelector(".beae-image-content-position"),z,R=window.innerWidth>=768&&M.autoHover;var V=H.querySelector(".beae-img-ratio-control"),L=H.querySelector(".beae-img-comp-container"),T=H.querySelector(".beae-img-comp-container--second");if(V&&T){let O=function(I){let A=0,D;j(),R?H.onmouseover=function(W){q(W)}:I.onmousedown=function(W){q(W)},H.onmouseup=function(){Z()},I.ontouchstart=function(W){q(W)},H.ontouchend=function(){Z()};function j(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{z=T.offsetWidth})}).observe(T),I.style.left&&parseInt(I.style.left)}function q(W){check=!1,W.preventDefault(),W.clientX?W.clientX:W.touches[0].clientX,parseInt(I.style.left),A=1,H.onmousemove=function(Y){F(Y)},H.ontouchmove=function(Y){F(Y)}}function Z(){A=0,check=!0}function F(W){if(A==0)return!1;D=U(W),D<0&&(D=0),D>100&&(D=100),G(D)}function U(W){const Y=H.getBoundingClientRect(),oe=(W.changedTouches?W.changedTouches[0].clientX:W.clientX)-Y.left;return Math.max(0,Math.min(100,Math.round(oe*100/z)))}function G(W){I.style.left=W+"%",T.style.clipPath=`polygon(${W}% 0%, ${W}% 100%, 100% 100%, 100% 0)`,L.style.clipPath=`polygon(0% 100%, 0% 0%, ${W}% 0%, ${W}% 100%)`}};V&&T&&O(V),window.addEventListener("resize",function(){V&&T&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{z=T.offsetWidth})}).observe(T),O(V))})}}let N=(P=M.el)==null?void 0:P.querySelector("a.beae-x-image"),E=N==null?void 0:N.getAttribute("href");N&&M.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&N.addEventListener("click",H=>{let z=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(z)return z.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),H.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-3pao3sx3: ', ex)
      };
    

      try {
        let argid = 'beae-f8lllx80block-textloop-2',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-f8lllx80',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-f8lllx80');
        args.el = args.els[2];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-f8lllx80: ', ex)
      };
    

      try {
        let argid = 'beae-9rg1cv62block-textloop-2',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-9rg1cv62',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-9rg1cv62');
        args.el = args.els[2];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-9rg1cv62: ', ex)
      };
    

      try {
        let argid = 'beae-lffb6ifcblock-imageloop-3',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-lffb6ifc',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-lffb6ifc');
        args.el = args.els[3];
        ((M) => { var P;if(M.el){if(M.shape){const O=M.el.closest(".beae-slider-items");O&&!O.hasAttribute("data-svg")&&(O==null||O.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${M.id}" clipPathUnits="objectBoundingBox">
                                ${M.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),O.setAttribute("data-svg","true"))}let H=M.el.querySelector(".beae-image-content-position"),z,R=window.innerWidth>=768&&M.autoHover;var V=H.querySelector(".beae-img-ratio-control"),L=H.querySelector(".beae-img-comp-container"),T=H.querySelector(".beae-img-comp-container--second");if(V&&T){let O=function(I){let A=0,D;j(),R?H.onmouseover=function(W){q(W)}:I.onmousedown=function(W){q(W)},H.onmouseup=function(){Z()},I.ontouchstart=function(W){q(W)},H.ontouchend=function(){Z()};function j(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{z=T.offsetWidth})}).observe(T),I.style.left&&parseInt(I.style.left)}function q(W){check=!1,W.preventDefault(),W.clientX?W.clientX:W.touches[0].clientX,parseInt(I.style.left),A=1,H.onmousemove=function(Y){F(Y)},H.ontouchmove=function(Y){F(Y)}}function Z(){A=0,check=!0}function F(W){if(A==0)return!1;D=U(W),D<0&&(D=0),D>100&&(D=100),G(D)}function U(W){const Y=H.getBoundingClientRect(),oe=(W.changedTouches?W.changedTouches[0].clientX:W.clientX)-Y.left;return Math.max(0,Math.min(100,Math.round(oe*100/z)))}function G(W){I.style.left=W+"%",T.style.clipPath=`polygon(${W}% 0%, ${W}% 100%, 100% 100%, 100% 0)`,L.style.clipPath=`polygon(0% 100%, 0% 0%, ${W}% 0%, ${W}% 100%)`}};V&&T&&O(V),window.addEventListener("resize",function(){V&&T&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{z=T.offsetWidth})}).observe(T),O(V))})}}let N=(P=M.el)==null?void 0:P.querySelector("a.beae-x-image"),E=N==null?void 0:N.getAttribute("href");N&&M.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&N.addEventListener("click",H=>{let z=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(z)return z.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),H.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-lffb6ifc: ', ex)
      };
    

      try {
        let argid = 'beae-3pao3sx3block-imageloop-3',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-3pao3sx3',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-3pao3sx3');
        args.el = args.els[3];
        ((M) => { var P;if(M.el){if(M.shape){const O=M.el.closest(".beae-slider-items");O&&!O.hasAttribute("data-svg")&&(O==null||O.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${M.id}" clipPathUnits="objectBoundingBox">
                                ${M.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),O.setAttribute("data-svg","true"))}let H=M.el.querySelector(".beae-image-content-position"),z,R=window.innerWidth>=768&&M.autoHover;var V=H.querySelector(".beae-img-ratio-control"),L=H.querySelector(".beae-img-comp-container"),T=H.querySelector(".beae-img-comp-container--second");if(V&&T){let O=function(I){let A=0,D;j(),R?H.onmouseover=function(W){q(W)}:I.onmousedown=function(W){q(W)},H.onmouseup=function(){Z()},I.ontouchstart=function(W){q(W)},H.ontouchend=function(){Z()};function j(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{z=T.offsetWidth})}).observe(T),I.style.left&&parseInt(I.style.left)}function q(W){check=!1,W.preventDefault(),W.clientX?W.clientX:W.touches[0].clientX,parseInt(I.style.left),A=1,H.onmousemove=function(Y){F(Y)},H.ontouchmove=function(Y){F(Y)}}function Z(){A=0,check=!0}function F(W){if(A==0)return!1;D=U(W),D<0&&(D=0),D>100&&(D=100),G(D)}function U(W){const Y=H.getBoundingClientRect(),oe=(W.changedTouches?W.changedTouches[0].clientX:W.clientX)-Y.left;return Math.max(0,Math.min(100,Math.round(oe*100/z)))}function G(W){I.style.left=W+"%",T.style.clipPath=`polygon(${W}% 0%, ${W}% 100%, 100% 100%, 100% 0)`,L.style.clipPath=`polygon(0% 100%, 0% 0%, ${W}% 0%, ${W}% 100%)`}};V&&T&&O(V),window.addEventListener("resize",function(){V&&T&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{z=T.offsetWidth})}).observe(T),O(V))})}}let N=(P=M.el)==null?void 0:P.querySelector("a.beae-x-image"),E=N==null?void 0:N.getAttribute("href");N&&M.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&N.addEventListener("click",H=>{let z=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(z)return z.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),H.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-3pao3sx3: ', ex)
      };
    

      try {
        let argid = 'beae-f8lllx80block-textloop-3',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-f8lllx80',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-f8lllx80');
        args.el = args.els[3];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-f8lllx80: ', ex)
      };
    

      try {
        let argid = 'beae-9rg1cv62block-textloop-3',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-9rg1cv62',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-9rg1cv62');
        args.el = args.els[3];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-9rg1cv62: ', ex)
      };
    

      try {
        let argid = 'beae-h99onex3section-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-h99onex3',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-h99onex3');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-h99onex3: ', ex)
      };
    

      try {
        let argid = 'beae-2m89d2a6block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-2m89d2a6',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-2m89d2a6');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-2m89d2a6: ', ex)
      };
    

      try {
        let argid = 'beae-7z87s0c6block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-7z87s0c6',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-7z87s0c6');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-7z87s0c6: ', ex)
      };
    

      try {
        let argid = 'beae-bu9p5ftfsection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-bu9p5ftf',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-bu9p5ftf');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-bu9p5ftf: ', ex)
      };
    

      try {
        let argid = 'beae-tm1ceefpsection-featured-collection',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-tm1ceefp',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-tm1ceefp');
        args.el = args.els[0];
        ((a) => { var c;window.BeaeMoneyFormat||(window.BeaeMoneyFormat=(c=a.el.querySelector(".beae-money-format"))==null?void 0:c.innerHTML);let n=a.el.querySelectorAll(".beae-featuted-collection-nav");const t=a.el.querySelectorAll(".beae-feature-collection-tab-content"),o=a.el.querySelector(".beae-featuted-collection-nav.nav-active"),r=a.el.closest(".beae-body--preview");n.forEach((d,l)=>{a.mode.value=="live"&&!o&&(l===0?(d.classList.add("nav-active"),t[l]&&(t[l].style.display="block",t[l].setAttribute("data-active","true"))):(d.classList.remove("nav-active"),t[l]&&(t[l].style.display="none",t[l].setAttribute("data-active","false"))));let v=!1;d.addEventListener("click",()=>{if(v)return;v=!0,n.forEach(f=>{f.classList.remove("nav-active")}),d.classList.add("nav-active");const y=d.getAttribute("data-handle"),g=a.el.querySelectorAll(".viewall-link");g&&g.forEach(f=>{f.setAttribute("href",`/collections/${y}`)});const h=a.el.querySelector(`.beae-feature-collection-tab-content[data-handle="${y}"]`),u=a.el.querySelector('.beae-feature-collection-tab-content[data-active="true"]');if(a.el.querySelector(".beae-feature-collection-tab-content.content-active")!==null&&a.el.querySelector(".beae-feature-collection-tab-content.content-active").classList.remove("content-active"),u){u.setAttribute("data-active","false");const f=s(u);setTimeout(()=>{u.style.display="none",h&&(h.style.display="block"),setTimeout(()=>{h&&h.setAttribute("data-active","true"),v=!1},50)},f)}else h&&(h.style.display="block"),setTimeout(()=>{h&&h.setAttribute("data-active","true"),v=!1},50)})});function s(d){const v=window.getComputedStyle(d).getPropertyValue("transition-duration");let y=parseFloat(v)*1e3;return v.includes("s")?y=parseFloat(v)*1e3:y=parseFloat(v),y||0}setTimeout(()=>{typeof window.handleSwatchForCardForm=="function"&&window.handleSwatchForCardForm(a),typeof(a==null?void 0:a.promotionPosition)=="number"&&p(a==null?void 0:a.promotionPosition)},100),(["builder"].includes(a.mode.value)||r)&&setTimeout(()=>{typeof window.handleEventFormProductCard=="function"&&window.handleEventFormProductCard()},100);function p(d){if(a.mode.value!="live")return;const l=a.el.querySelectorAll(".beae-slider-items");if(l&&l.length){l.forEach(y=>{const g=a.el.querySelector(".beae-promotion > *");if(!g)return;const h=g.cloneNode(!0),u=y.children;d>=u.length?y.appendChild(h):y.insertBefore(h,u[d])});const v=a.el.querySelector(".beae-promotion");v&&v.remove()}} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-tm1ceefp: ', ex)
      };
    

      try {
        let argid = 'beae-tm1ceefpsection-slide-show',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-tm1ceefp',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-tm1ceefp');
        args.el = args.els[0];
        ((h) => { window.BeaeSlider&&!h.noRunJs&&window.BeaeSlider(h) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-tm1ceefp: ', ex)
      };
    

      try {
        let argid = 'beae-pqlbw1biblock-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-pqlbw1bi',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-pqlbw1bi');
        args.el = args.els[0];
        ((M) => { var P;if(M.el){if(M.shape){const O=M.el.closest(".beae-slider-items");O&&!O.hasAttribute("data-svg")&&(O==null||O.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${M.id}" clipPathUnits="objectBoundingBox">
                                ${M.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),O.setAttribute("data-svg","true"))}let H=M.el.querySelector(".beae-image-content-position"),z,R=window.innerWidth>=768&&M.autoHover;var V=H.querySelector(".beae-img-ratio-control"),L=H.querySelector(".beae-img-comp-container"),T=H.querySelector(".beae-img-comp-container--second");if(V&&T){let O=function(I){let A=0,D;j(),R?H.onmouseover=function(W){q(W)}:I.onmousedown=function(W){q(W)},H.onmouseup=function(){Z()},I.ontouchstart=function(W){q(W)},H.ontouchend=function(){Z()};function j(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{z=T.offsetWidth})}).observe(T),I.style.left&&parseInt(I.style.left)}function q(W){check=!1,W.preventDefault(),W.clientX?W.clientX:W.touches[0].clientX,parseInt(I.style.left),A=1,H.onmousemove=function(Y){F(Y)},H.ontouchmove=function(Y){F(Y)}}function Z(){A=0,check=!0}function F(W){if(A==0)return!1;D=U(W),D<0&&(D=0),D>100&&(D=100),G(D)}function U(W){const Y=H.getBoundingClientRect(),oe=(W.changedTouches?W.changedTouches[0].clientX:W.clientX)-Y.left;return Math.max(0,Math.min(100,Math.round(oe*100/z)))}function G(W){I.style.left=W+"%",T.style.clipPath=`polygon(${W}% 0%, ${W}% 100%, 100% 100%, 100% 0)`,L.style.clipPath=`polygon(0% 100%, 0% 0%, ${W}% 0%, ${W}% 100%)`}};V&&T&&O(V),window.addEventListener("resize",function(){V&&T&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{z=T.offsetWidth})}).observe(T),O(V))})}}let N=(P=M.el)==null?void 0:P.querySelector("a.beae-x-image"),E=N==null?void 0:N.getAttribute("href");N&&M.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&N.addEventListener("click",H=>{let z=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(z)return z.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),H.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-pqlbw1bi: ', ex)
      };
    

      try {
        let argid = 'beae-xwubc1pvblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-xwubc1pv',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-xwubc1pv');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-xwubc1pv: ', ex)
      };
    

      try {
        let argid = 'beae-utule5m8block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-utule5m8',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-utule5m8');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-utule5m8: ', ex)
      };
    

      try {
        let argid = 'beae-uc9cy8tssection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-uc9cy8ts',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-uc9cy8ts');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-uc9cy8ts: ', ex)
      };
    

      try {
        let argid = 'beae-pj1qatieblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-pj1qatie',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-pj1qatie');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-pj1qatie: ', ex)
      };
    

      try {
        let argid = 'beae-7xjayeg7section-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-7xjayeg7',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-7xjayeg7');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-7xjayeg7: ', ex)
      };
    

      try {
        let argid = 'beae-7xjayeg7section-slide-show',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-7xjayeg7',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-7xjayeg7');
        args.el = args.els[0];
        ((h) => { window.BeaeSlider&&!h.noRunJs&&window.BeaeSlider(h) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-7xjayeg7: ', ex)
      };
    

      try {
        let argid = 'beae-47nvm1j4block-video',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-47nvm1j4',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-47nvm1j4');
        args.el = args.els[0];
        ((data) => { if(data.mode.value==="builder")return;if(data.source=="self hosted"&&data.el.querySelector(".beae_video")&&data.mute){const f=data.el.querySelector(".beae_video");f.muted=!0,f.play().catch(b=>{console.warn("Autoplay bị chặn:",b)})}const playButton=data.el.querySelector(".beae-video_overlay-icon"),playIcon=playButton&&playButton.querySelector(".beae-video-icon-play"),closePlayingButton=data.el.querySelector(".beae-close-video"),closeVideoFn=()=>{let f=playButton.closest(".beae-grid-block"),b=data.el.querySelector(".beae-x-video--wrapper");b&&b.classList.remove("playing"),f&&(f.style.zIndex=""),data.lightbox&&(document.querySelector("div.beae-builder")&&(document.querySelector("div.beae-builder").style.zIndex=""),f&&f.setAttribute("style",""),document.body.style.overflow="",document.documentElement.style.overflow="");let C=data.el.querySelector(".beae_video");C&&(C.autoplay=!1,C.pause());let m=data.el.querySelector(".beae_iframe");m&&m.getAttribute("src").indexOf("&autoplay=1")>-1&&m.setAttribute("src",m.getAttribute("src").replace("&autoplay=1",""))};if(playButton&&(playIcon&&playIcon.addEventListener("click",e=>{if(data.source=="self hosted"){let f=data.el.querySelector(".beae_video");f.autoplay=!0,f.load(),playButton.classList.remove("beae-overlay"),data.play_icon&&(data.el.querySelector(".beae-video-icon-play").style.display="none")}else{let f=data.el.querySelector(".beae_iframe"),b=f.getAttribute("src")+"&autoplay=1";f.setAttribute("src",b),playButton.classList.remove("beae-overlay"),data.play_icon&&(data.el.querySelector(".beae-video-icon-play").style.display="none")}let gridBlock=playButton.closest(".beae-grid-block"),wrapper=data.el.querySelector(".beae-x-video--wrapper");if(wrapper&&wrapper.classList.add("playing"),gridBlock&&(gridBlock.style.zIndex=1e8),data.lightbox){let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(f){extOptions={},console.error(f)}window.BeaePopupLibrary.createPopup(data.el.querySelector(".beae-block_video-player"),{width:"1070px",sectionId:data.id,...extOptions}),closeVideoFn()}}),closePlayingButton&&closePlayingButton.addEventListener("click",closeVideoFn)),["youtube","vimeo"].includes(data.source)&&(data.autoplay||data.loop)){let f=data.el.querySelector(".beae_iframe"),b={isloop:data.loop,autoplay:data.autoplay,idBlock:data.uniqueId||data.id,controls:data.player_controls?1:0,muted:data.mute};if(data.source=="youtube"){const C=/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;let m=data.srcYoutube.match(C),_=m&&m[2].length===11?m[2]:null;const S=/[?&]t=(\d+)s/,B=data.srcYoutube.match(S),k=B?B[1]:0;b.start=k,b.id=_,b.src=location.protocol+"//www.youtube.com/embed/"+_}switch(data.source){case"youtube":setTimeout(()=>{window.BEAEVIDEO.handleLoopYoutube&&window.BEAEVIDEO.handleLoopYoutube(b,data.uniqueId||data.id)});break;case"vimeo":setTimeout(()=>{window.BEAEVIDEO.handleLoopVimeo&&window.BEAEVIDEO.handleLoopVimeo(b,f)});break}} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-47nvm1j4: ', ex)
      };
    

      try {
        let argid = 'beae-ytl4c2x6block-video',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-ytl4c2x6',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-ytl4c2x6');
        args.el = args.els[0];
        ((data) => { if(data.mode.value==="builder")return;if(data.source=="self hosted"&&data.el.querySelector(".beae_video")&&data.mute){const f=data.el.querySelector(".beae_video");f.muted=!0,f.play().catch(b=>{console.warn("Autoplay bị chặn:",b)})}const playButton=data.el.querySelector(".beae-video_overlay-icon"),playIcon=playButton&&playButton.querySelector(".beae-video-icon-play"),closePlayingButton=data.el.querySelector(".beae-close-video"),closeVideoFn=()=>{let f=playButton.closest(".beae-grid-block"),b=data.el.querySelector(".beae-x-video--wrapper");b&&b.classList.remove("playing"),f&&(f.style.zIndex=""),data.lightbox&&(document.querySelector("div.beae-builder")&&(document.querySelector("div.beae-builder").style.zIndex=""),f&&f.setAttribute("style",""),document.body.style.overflow="",document.documentElement.style.overflow="");let C=data.el.querySelector(".beae_video");C&&(C.autoplay=!1,C.pause());let m=data.el.querySelector(".beae_iframe");m&&m.getAttribute("src").indexOf("&autoplay=1")>-1&&m.setAttribute("src",m.getAttribute("src").replace("&autoplay=1",""))};if(playButton&&(playIcon&&playIcon.addEventListener("click",e=>{if(data.source=="self hosted"){let f=data.el.querySelector(".beae_video");f.autoplay=!0,f.load(),playButton.classList.remove("beae-overlay"),data.play_icon&&(data.el.querySelector(".beae-video-icon-play").style.display="none")}else{let f=data.el.querySelector(".beae_iframe"),b=f.getAttribute("src")+"&autoplay=1";f.setAttribute("src",b),playButton.classList.remove("beae-overlay"),data.play_icon&&(data.el.querySelector(".beae-video-icon-play").style.display="none")}let gridBlock=playButton.closest(".beae-grid-block"),wrapper=data.el.querySelector(".beae-x-video--wrapper");if(wrapper&&wrapper.classList.add("playing"),gridBlock&&(gridBlock.style.zIndex=1e8),data.lightbox){let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(f){extOptions={},console.error(f)}window.BeaePopupLibrary.createPopup(data.el.querySelector(".beae-block_video-player"),{width:"1070px",sectionId:data.id,...extOptions}),closeVideoFn()}}),closePlayingButton&&closePlayingButton.addEventListener("click",closeVideoFn)),["youtube","vimeo"].includes(data.source)&&(data.autoplay||data.loop)){let f=data.el.querySelector(".beae_iframe"),b={isloop:data.loop,autoplay:data.autoplay,idBlock:data.uniqueId||data.id,controls:data.player_controls?1:0,muted:data.mute};if(data.source=="youtube"){const C=/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;let m=data.srcYoutube.match(C),_=m&&m[2].length===11?m[2]:null;const S=/[?&]t=(\d+)s/,B=data.srcYoutube.match(S),k=B?B[1]:0;b.start=k,b.id=_,b.src=location.protocol+"//www.youtube.com/embed/"+_}switch(data.source){case"youtube":setTimeout(()=>{window.BEAEVIDEO.handleLoopYoutube&&window.BEAEVIDEO.handleLoopYoutube(b,data.uniqueId||data.id)});break;case"vimeo":setTimeout(()=>{window.BEAEVIDEO.handleLoopVimeo&&window.BEAEVIDEO.handleLoopVimeo(b,f)});break}} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-ytl4c2x6: ', ex)
      };
    

      try {
        let argid = 'beae-8uqbu6msblock-video',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-8uqbu6ms',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-8uqbu6ms');
        args.el = args.els[0];
        ((data) => { if(data.mode.value==="builder")return;if(data.source=="self hosted"&&data.el.querySelector(".beae_video")&&data.mute){const f=data.el.querySelector(".beae_video");f.muted=!0,f.play().catch(b=>{console.warn("Autoplay bị chặn:",b)})}const playButton=data.el.querySelector(".beae-video_overlay-icon"),playIcon=playButton&&playButton.querySelector(".beae-video-icon-play"),closePlayingButton=data.el.querySelector(".beae-close-video"),closeVideoFn=()=>{let f=playButton.closest(".beae-grid-block"),b=data.el.querySelector(".beae-x-video--wrapper");b&&b.classList.remove("playing"),f&&(f.style.zIndex=""),data.lightbox&&(document.querySelector("div.beae-builder")&&(document.querySelector("div.beae-builder").style.zIndex=""),f&&f.setAttribute("style",""),document.body.style.overflow="",document.documentElement.style.overflow="");let C=data.el.querySelector(".beae_video");C&&(C.autoplay=!1,C.pause());let m=data.el.querySelector(".beae_iframe");m&&m.getAttribute("src").indexOf("&autoplay=1")>-1&&m.setAttribute("src",m.getAttribute("src").replace("&autoplay=1",""))};if(playButton&&(playIcon&&playIcon.addEventListener("click",e=>{if(data.source=="self hosted"){let f=data.el.querySelector(".beae_video");f.autoplay=!0,f.load(),playButton.classList.remove("beae-overlay"),data.play_icon&&(data.el.querySelector(".beae-video-icon-play").style.display="none")}else{let f=data.el.querySelector(".beae_iframe"),b=f.getAttribute("src")+"&autoplay=1";f.setAttribute("src",b),playButton.classList.remove("beae-overlay"),data.play_icon&&(data.el.querySelector(".beae-video-icon-play").style.display="none")}let gridBlock=playButton.closest(".beae-grid-block"),wrapper=data.el.querySelector(".beae-x-video--wrapper");if(wrapper&&wrapper.classList.add("playing"),gridBlock&&(gridBlock.style.zIndex=1e8),data.lightbox){let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(f){extOptions={},console.error(f)}window.BeaePopupLibrary.createPopup(data.el.querySelector(".beae-block_video-player"),{width:"1070px",sectionId:data.id,...extOptions}),closeVideoFn()}}),closePlayingButton&&closePlayingButton.addEventListener("click",closeVideoFn)),["youtube","vimeo"].includes(data.source)&&(data.autoplay||data.loop)){let f=data.el.querySelector(".beae_iframe"),b={isloop:data.loop,autoplay:data.autoplay,idBlock:data.uniqueId||data.id,controls:data.player_controls?1:0,muted:data.mute};if(data.source=="youtube"){const C=/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;let m=data.srcYoutube.match(C),_=m&&m[2].length===11?m[2]:null;const S=/[?&]t=(\d+)s/,B=data.srcYoutube.match(S),k=B?B[1]:0;b.start=k,b.id=_,b.src=location.protocol+"//www.youtube.com/embed/"+_}switch(data.source){case"youtube":setTimeout(()=>{window.BEAEVIDEO.handleLoopYoutube&&window.BEAEVIDEO.handleLoopYoutube(b,data.uniqueId||data.id)});break;case"vimeo":setTimeout(()=>{window.BEAEVIDEO.handleLoopVimeo&&window.BEAEVIDEO.handleLoopVimeo(b,f)});break}} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-8uqbu6ms: ', ex)
      };
    

      try {
        let argid = 'beae-e8rtz3p2section-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-e8rtz3p2',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-e8rtz3p2');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-e8rtz3p2: ', ex)
      };
    

      try {
        let argid = 'beae-iks4ris8block-video',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-iks4ris8',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-iks4ris8');
        args.el = args.els[0];
        ((data) => { if(data.mode.value==="builder")return;if(data.source=="self hosted"&&data.el.querySelector(".beae_video")&&data.mute){const f=data.el.querySelector(".beae_video");f.muted=!0,f.play().catch(b=>{console.warn("Autoplay bị chặn:",b)})}const playButton=data.el.querySelector(".beae-video_overlay-icon"),playIcon=playButton&&playButton.querySelector(".beae-video-icon-play"),closePlayingButton=data.el.querySelector(".beae-close-video"),closeVideoFn=()=>{let f=playButton.closest(".beae-grid-block"),b=data.el.querySelector(".beae-x-video--wrapper");b&&b.classList.remove("playing"),f&&(f.style.zIndex=""),data.lightbox&&(document.querySelector("div.beae-builder")&&(document.querySelector("div.beae-builder").style.zIndex=""),f&&f.setAttribute("style",""),document.body.style.overflow="",document.documentElement.style.overflow="");let C=data.el.querySelector(".beae_video");C&&(C.autoplay=!1,C.pause());let m=data.el.querySelector(".beae_iframe");m&&m.getAttribute("src").indexOf("&autoplay=1")>-1&&m.setAttribute("src",m.getAttribute("src").replace("&autoplay=1",""))};if(playButton&&(playIcon&&playIcon.addEventListener("click",e=>{if(data.source=="self hosted"){let f=data.el.querySelector(".beae_video");f.autoplay=!0,f.load(),playButton.classList.remove("beae-overlay"),data.play_icon&&(data.el.querySelector(".beae-video-icon-play").style.display="none")}else{let f=data.el.querySelector(".beae_iframe"),b=f.getAttribute("src")+"&autoplay=1";f.setAttribute("src",b),playButton.classList.remove("beae-overlay"),data.play_icon&&(data.el.querySelector(".beae-video-icon-play").style.display="none")}let gridBlock=playButton.closest(".beae-grid-block"),wrapper=data.el.querySelector(".beae-x-video--wrapper");if(wrapper&&wrapper.classList.add("playing"),gridBlock&&(gridBlock.style.zIndex=1e8),data.lightbox){let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(f){extOptions={},console.error(f)}window.BeaePopupLibrary.createPopup(data.el.querySelector(".beae-block_video-player"),{width:"1070px",sectionId:data.id,...extOptions}),closeVideoFn()}}),closePlayingButton&&closePlayingButton.addEventListener("click",closeVideoFn)),["youtube","vimeo"].includes(data.source)&&(data.autoplay||data.loop)){let f=data.el.querySelector(".beae_iframe"),b={isloop:data.loop,autoplay:data.autoplay,idBlock:data.uniqueId||data.id,controls:data.player_controls?1:0,muted:data.mute};if(data.source=="youtube"){const C=/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;let m=data.srcYoutube.match(C),_=m&&m[2].length===11?m[2]:null;const S=/[?&]t=(\d+)s/,B=data.srcYoutube.match(S),k=B?B[1]:0;b.start=k,b.id=_,b.src=location.protocol+"//www.youtube.com/embed/"+_}switch(data.source){case"youtube":setTimeout(()=>{window.BEAEVIDEO.handleLoopYoutube&&window.BEAEVIDEO.handleLoopYoutube(b,data.uniqueId||data.id)});break;case"vimeo":setTimeout(()=>{window.BEAEVIDEO.handleLoopVimeo&&window.BEAEVIDEO.handleLoopVimeo(b,f)});break}} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-iks4ris8: ', ex)
      };
    

      try {
        let argid = 'beae-ys33xor4block-video',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-ys33xor4',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-ys33xor4');
        args.el = args.els[0];
        ((data) => { if(data.mode.value==="builder")return;if(data.source=="self hosted"&&data.el.querySelector(".beae_video")&&data.mute){const f=data.el.querySelector(".beae_video");f.muted=!0,f.play().catch(b=>{console.warn("Autoplay bị chặn:",b)})}const playButton=data.el.querySelector(".beae-video_overlay-icon"),playIcon=playButton&&playButton.querySelector(".beae-video-icon-play"),closePlayingButton=data.el.querySelector(".beae-close-video"),closeVideoFn=()=>{let f=playButton.closest(".beae-grid-block"),b=data.el.querySelector(".beae-x-video--wrapper");b&&b.classList.remove("playing"),f&&(f.style.zIndex=""),data.lightbox&&(document.querySelector("div.beae-builder")&&(document.querySelector("div.beae-builder").style.zIndex=""),f&&f.setAttribute("style",""),document.body.style.overflow="",document.documentElement.style.overflow="");let C=data.el.querySelector(".beae_video");C&&(C.autoplay=!1,C.pause());let m=data.el.querySelector(".beae_iframe");m&&m.getAttribute("src").indexOf("&autoplay=1")>-1&&m.setAttribute("src",m.getAttribute("src").replace("&autoplay=1",""))};if(playButton&&(playIcon&&playIcon.addEventListener("click",e=>{if(data.source=="self hosted"){let f=data.el.querySelector(".beae_video");f.autoplay=!0,f.load(),playButton.classList.remove("beae-overlay"),data.play_icon&&(data.el.querySelector(".beae-video-icon-play").style.display="none")}else{let f=data.el.querySelector(".beae_iframe"),b=f.getAttribute("src")+"&autoplay=1";f.setAttribute("src",b),playButton.classList.remove("beae-overlay"),data.play_icon&&(data.el.querySelector(".beae-video-icon-play").style.display="none")}let gridBlock=playButton.closest(".beae-grid-block"),wrapper=data.el.querySelector(".beae-x-video--wrapper");if(wrapper&&wrapper.classList.add("playing"),gridBlock&&(gridBlock.style.zIndex=1e8),data.lightbox){let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(f){extOptions={},console.error(f)}window.BeaePopupLibrary.createPopup(data.el.querySelector(".beae-block_video-player"),{width:"1070px",sectionId:data.id,...extOptions}),closeVideoFn()}}),closePlayingButton&&closePlayingButton.addEventListener("click",closeVideoFn)),["youtube","vimeo"].includes(data.source)&&(data.autoplay||data.loop)){let f=data.el.querySelector(".beae_iframe"),b={isloop:data.loop,autoplay:data.autoplay,idBlock:data.uniqueId||data.id,controls:data.player_controls?1:0,muted:data.mute};if(data.source=="youtube"){const C=/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;let m=data.srcYoutube.match(C),_=m&&m[2].length===11?m[2]:null;const S=/[?&]t=(\d+)s/,B=data.srcYoutube.match(S),k=B?B[1]:0;b.start=k,b.id=_,b.src=location.protocol+"//www.youtube.com/embed/"+_}switch(data.source){case"youtube":setTimeout(()=>{window.BEAEVIDEO.handleLoopYoutube&&window.BEAEVIDEO.handleLoopYoutube(b,data.uniqueId||data.id)});break;case"vimeo":setTimeout(()=>{window.BEAEVIDEO.handleLoopVimeo&&window.BEAEVIDEO.handleLoopVimeo(b,f)});break}} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-ys33xor4: ', ex)
      };
    

      try {
        let argid = 'beae-8yuysiohblock-video',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-8yuysioh',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-8yuysioh');
        args.el = args.els[0];
        ((data) => { if(data.mode.value==="builder")return;if(data.source=="self hosted"&&data.el.querySelector(".beae_video")&&data.mute){const f=data.el.querySelector(".beae_video");f.muted=!0,f.play().catch(b=>{console.warn("Autoplay bị chặn:",b)})}const playButton=data.el.querySelector(".beae-video_overlay-icon"),playIcon=playButton&&playButton.querySelector(".beae-video-icon-play"),closePlayingButton=data.el.querySelector(".beae-close-video"),closeVideoFn=()=>{let f=playButton.closest(".beae-grid-block"),b=data.el.querySelector(".beae-x-video--wrapper");b&&b.classList.remove("playing"),f&&(f.style.zIndex=""),data.lightbox&&(document.querySelector("div.beae-builder")&&(document.querySelector("div.beae-builder").style.zIndex=""),f&&f.setAttribute("style",""),document.body.style.overflow="",document.documentElement.style.overflow="");let C=data.el.querySelector(".beae_video");C&&(C.autoplay=!1,C.pause());let m=data.el.querySelector(".beae_iframe");m&&m.getAttribute("src").indexOf("&autoplay=1")>-1&&m.setAttribute("src",m.getAttribute("src").replace("&autoplay=1",""))};if(playButton&&(playIcon&&playIcon.addEventListener("click",e=>{if(data.source=="self hosted"){let f=data.el.querySelector(".beae_video");f.autoplay=!0,f.load(),playButton.classList.remove("beae-overlay"),data.play_icon&&(data.el.querySelector(".beae-video-icon-play").style.display="none")}else{let f=data.el.querySelector(".beae_iframe"),b=f.getAttribute("src")+"&autoplay=1";f.setAttribute("src",b),playButton.classList.remove("beae-overlay"),data.play_icon&&(data.el.querySelector(".beae-video-icon-play").style.display="none")}let gridBlock=playButton.closest(".beae-grid-block"),wrapper=data.el.querySelector(".beae-x-video--wrapper");if(wrapper&&wrapper.classList.add("playing"),gridBlock&&(gridBlock.style.zIndex=1e8),data.lightbox){let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(f){extOptions={},console.error(f)}window.BeaePopupLibrary.createPopup(data.el.querySelector(".beae-block_video-player"),{width:"1070px",sectionId:data.id,...extOptions}),closeVideoFn()}}),closePlayingButton&&closePlayingButton.addEventListener("click",closeVideoFn)),["youtube","vimeo"].includes(data.source)&&(data.autoplay||data.loop)){let f=data.el.querySelector(".beae_iframe"),b={isloop:data.loop,autoplay:data.autoplay,idBlock:data.uniqueId||data.id,controls:data.player_controls?1:0,muted:data.mute};if(data.source=="youtube"){const C=/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;let m=data.srcYoutube.match(C),_=m&&m[2].length===11?m[2]:null;const S=/[?&]t=(\d+)s/,B=data.srcYoutube.match(S),k=B?B[1]:0;b.start=k,b.id=_,b.src=location.protocol+"//www.youtube.com/embed/"+_}switch(data.source){case"youtube":setTimeout(()=>{window.BEAEVIDEO.handleLoopYoutube&&window.BEAEVIDEO.handleLoopYoutube(b,data.uniqueId||data.id)});break;case"vimeo":setTimeout(()=>{window.BEAEVIDEO.handleLoopVimeo&&window.BEAEVIDEO.handleLoopVimeo(b,f)});break}} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-8yuysioh: ', ex)
      };
    }; if (window.BEAEBASE) {js_7AQH3K00()} else {window.BEAEPAGEJS.push(js_7AQH3K00)} })(); 