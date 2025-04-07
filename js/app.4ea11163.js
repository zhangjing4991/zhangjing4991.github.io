(function(){"use strict";var e={6809:function(e,t,n){var r=n(3751),o=n(7352),i=(n(6422),n(6518),n(6806),n(641));function u(e,t,n,r,u,a){const c=o.ct,f=o.lj,l=(0,i.g2)("router-view");return(0,i.uX)(),(0,i.CE)("div",null,[(0,i.bF)(f,{router:"","default-active":a.activeIndex,mode:"horizontal",onSelect:a.handleSelect,"background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"},{default:(0,i.k6)((()=>[(0,i.bF)(c,{index:"/home"},{default:(0,i.k6)((()=>t[0]||(t[0]=[(0,i.eW)("Home")]))),_:1}),(0,i.bF)(c,{index:"/score"},{default:(0,i.k6)((()=>t[1]||(t[1]=[(0,i.eW)("Score")]))),_:1}),(0,i.bF)(c,{index:"/question"},{default:(0,i.k6)((()=>t[2]||(t[2]=[(0,i.eW)("Question")]))),_:1})])),_:1},8,["default-active","onSelect"]),(0,i.bF)(l)])}var a={data(){return{}},computed:{activeIndex(){return this.$route.path}},methods:{handleSelect(e,t){console.log(e,t)}}},c=n(6262);const f=(0,c.A)(a,[["render",u]]);var l=f,d=n(5220);const s=[{path:"",redirect:"/home"},{path:"/home",name:"Home",component:()=>n.e(821).then(n.bind(n,4821))},{path:"/score",name:"Score",component:()=>Promise.all([n.e(171),n.e(227)]).then(n.bind(n,3227))},{path:"/question",name:"Question",component:()=>Promise.all([n.e(171),n.e(515)]).then(n.bind(n,7515))}],h=(0,d.aE)({history:(0,d.Bt)(),routes:s});var p=h;n(1077);const v=(0,r.Ef)(l);v.use(p),v.mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,i){if(!r){var u=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],i=e[l][2];for(var a=!0,c=0;c<r.length;c++)(!1&i||u>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(a=!1,i<u&&(u=i));if(a){e.splice(l--,1);var f=o();void 0!==f&&(t=f)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[r,o,i]}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{171:"e2d0f609",227:"44b0faa4",515:"a5480fb3",821:"b22063bb"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{171:"6f43ca19",227:"d1306f1e",515:"3df988ea"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="audio-vue3:";n.l=function(r,o,i,u){if(e[r])e[r].push(o);else{var a,c;if(void 0!==i)for(var f=document.getElementsByTagName("script"),l=0;l<f.length;l++){var d=f[l];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+i){a=d;break}}a||(c=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",t+i),a.src=r),e[r]=[o];var s=function(t,n){a.onerror=a.onload=null,clearTimeout(h);var o=e[r];if(delete e[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(n)})),t)return t(n)},h=setTimeout(s.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=s.bind(null,a.onerror),a.onload=s.bind(null,a.onload),c&&document.head.appendChild(a)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,r,o,i){var u=document.createElement("link");u.rel="stylesheet",u.type="text/css",n.nc&&(u.nonce=n.nc);var a=function(n){if(u.onerror=u.onload=null,"load"===n.type)o();else{var r=n&&n.type,a=n&&n.target&&n.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+": "+a+")");c.name="ChunkLoadError",c.code="CSS_CHUNK_LOAD_FAILED",c.type=r,c.request=a,u.parentNode&&u.parentNode.removeChild(u),i(c)}};return u.onerror=u.onload=a,u.href=t,r?r.parentNode.insertBefore(u,r.nextSibling):document.head.appendChild(u),u},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===t))return o}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){o=u[r],i=o.getAttribute("data-href");if(i===e||i===t)return o}},r=function(r){return new Promise((function(o,i){var u=n.miniCssF(r),a=n.p+u;if(t(u,a))return o();e(r,a,null,o,i)}))},o={524:0};n.f.miniCss=function(e,t){var n={171:1,227:1,515:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}}(),function(){var e={524:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=i);var u=n.p+n.u(t),a=new Error,c=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;a.message="Loading chunk "+t+" failed.\n("+i+": "+u+")",a.name="ChunkLoadError",a.type=i,a.request=u,o[1](a)}};n.l(u,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,u=r[0],a=r[1],c=r[2],f=0;if(u.some((function(t){return 0!==e[t]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(c)var l=c(n)}for(t&&t(r);f<u.length;f++)i=u[f],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(l)},r=self["webpackChunkaudio_vue3"]=self["webpackChunkaudio_vue3"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[504],(function(){return n(6809)}));r=n.O(r)})();
//# sourceMappingURL=app.4ea11163.js.map