if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,a)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let f={};const o=e=>i(e,r),c={module:{uri:r},exports:f,require:o};s[r]=Promise.all(n.map((e=>c[e]||o(e)))).then((e=>(a(...e),f)))}}define(["./workbox-7d6a3f4d"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/Framework7Icons-Regular.a42aa071.woff2",revision:"4a39aba9fb8a2f831fa437780e1a058a"},{url:"assets/Framework7Icons-Regular.eba1e821.woff",revision:"d03b787b6492fa2b0141c43fb7e56689"},{url:"assets/index.20708c10.js",revision:"84318b1b16fb865876f4978a92aafde6"},{url:"assets/index.b096406c.css",revision:"a44e6fdc9b87c42e065d472910c69c88"},{url:"assets/material-icons.812f3b69.woff",revision:"54dfa9d2d4cb77b80750249adc5b2d1e"},{url:"assets/material-icons.f082f7fa.woff2",revision:"9f5d66557035535842ac29f97e57fe62"},{url:"icons/128x128.png",revision:"4e35a6dad5f1ab5b385f86dfe97579b8"},{url:"icons/144x144.png",revision:"47efa07843a29aff095e50015e084e85"},{url:"icons/152x152.png",revision:"ab189ff1c3604cbecd2ccc180b6f7c25"},{url:"icons/192x192.png",revision:"9ad7d46019f56396237834ced5038973"},{url:"icons/256x256.png",revision:"28969ffd71e59d0bb2ca642ac8bb0134"},{url:"icons/512x512.png",revision:"aa0c2f038e42624eb7ee396b272ee852"},{url:"icons/apple-touch-icon.png",revision:"4e94b1d1edaea36f052ec015c03ff26b"},{url:"icons/favicon.png",revision:"4e35a6dad5f1ab5b385f86dfe97579b8"},{url:"index.html",revision:"e268fdb7c3f18d11949aa46a5de4754c"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=service-worker.js.map
