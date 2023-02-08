(()=>{"use strict";var e={341:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(81),o=n.n(a),c=n(645),i=n.n(c),r=n(667),s=n.n(r),d=new URL(n(627),n.b),l=i()(o()),m=s()(d);l.push([e.id,"body {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    background-image: url("+m+");\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-attachment: fixed;\n    background-position: center;\n}\n\n.content {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    height: 100vh;\n}\n\nheader * {\n    display: inline;\n}\n\nheader {\n    font-size: 1.5rem;\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    background-color: rgba(27, 27, 27, 0.7);\n    top: 0;\n    left: 0;\n    right: 0;\n    z-index: 1;\n    height: 80px;\n    box-shadow: 0 0 25px 0 black;\n}\n\n.restaurant-logo {\n    font-family: cursive;\n    margin-left: 20px;\n    display: block;\n    color: #85916b;\n    cursor: pointer;\n}\n\nheader li {\n    margin: 30px;\n}\n\nheader li a {\n    font-family: serif;\n    color: white;\n    text-decoration: none;\n}\n\nmain {\n    font-size: large;\n    align-items: center;\n    width: 65%;\n    margin: 0 auto;\n    text-align: center;\n    padding: auto;\n    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.8);\n    border-radius: 8px;\n    background-color: #302f2fb3;\n    font-family: serif;\n    color: white;\n}\n\n.menu-list  {\n    padding-left: 0;\n    display: inline-grid;\n    grid-template-columns: auto auto;\n    gap: 2.5rem;\n}\n\n.menu-item {\n    list-style: none;\n    padding-left: 30px;\n    padding-right: 30px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n}\n\n\n.footer {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 1rem;\n    padding: 0.2rem;\n    font-family: serif;\n    color: white;\n    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.8);\n    background-color: #302f2fb3;\n  }\n\n@media (max-width: 600px) {\n    html {\n        font-size: 50%;\n    }\n}\n\n@media (max-width: 1024px) {\n    html {\n        font-size: 75%;\n    }\n}\n\n@media (max-width: 450px) {  \n    .restaurant-logo {\n        display: none;\n    }\n}",""]);const u=l},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",a=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),a&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),a&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,a,o,c){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(a)for(var r=0;r<this.length;r++){var s=this[r][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);a&&i[l[0]]||(void 0!==c&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=c),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,a=0;a<t.length;a++)if(t[a].identifier===e){n=a;break}return n}function a(e,a){for(var c={},i=[],r=0;r<e.length;r++){var s=e[r],d=a.base?s[0]+a.base:s[0],l=c[d]||0,m="".concat(d," ").concat(l);c[d]=l+1;var u=n(m),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)t[u].references++,t[u].updater(p);else{var h=o(p,a);a.byIndex=r,t.splice(r,0,{identifier:m,updater:h,references:1})}i.push(m)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var c=a(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<c.length;i++){var r=n(c[i]);t[r].references--}for(var s=a(e,o),d=0;d<c.length;d++){var l=n(c[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}c=s}}},569:e=>{var t={};e.exports=function(e,n){var a=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,o&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var c=n.sourceMap;c&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},627:(e,t,n)=>{e.exports=n.p+"da380434e0dd12afcd9d.jpg"}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var c=t[a]={id:a,exports:{}};return e[a](c,c.exports,n),c.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{const e=()=>{const e=document.createElement("div");e.classList.add("welcome-container");const t=document.createElement("h1");t.textContent="Welcome to Melina Restaurant",e.appendChild(t);const n=document.createElement("p");return n.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Nullam gravida, lorem vel molestie placerat, ipsum lacus commodo sapien, eget dignissim tellus nulla a lorem.",e.appendChild(n),e};var t=n(379),a=n.n(t),o=n(795),c=n.n(o),i=n(569),r=n.n(i),s=n(565),d=n.n(s),l=n(216),m=n.n(l),u=n(589),p=n.n(u),h=n(341),f={};function C(){const t=document.querySelector("main");t.innerHTML="",t.appendChild(e())}function g(){const e=document.querySelector("main");e.innerHTML="",e.appendChild((()=>{const e=document.createElement("div");e.classList.add("menu-container");const t=document.createElement("h2");t.classList.add("menu-header"),t.textContent="Our Menu",e.appendChild(t);const n=document.createElement("ul");n.classList.add("menu-list"),e.appendChild(n);const a=document.createElement("li");a.classList.add("menu-item"),n.appendChild(a);const o=document.createElement("h3");o.classList.add("menu-item-name"),o.textContent="Spaghetti Carbonara",a.appendChild(o);const c=document.createElement("p");c.classList.add("menu-item-info"),c.textContent="Spaghetti with bacon, eggs, and parmesan cheese",a.appendChild(c);const i=document.createElement("p");i.classList.add("menu-item-price"),i.textContent="$12.99",a.appendChild(i);const r=document.createElement("li");r.classList.add("menu-item"),n.appendChild(r);const s=document.createElement("h3");s.classList.add("menu-item-name"),s.textContent="Pizza Margherita",r.appendChild(s);const d=document.createElement("p");d.classList.add("menu-item-info"),d.textContent="Tomato sauce, mozzarella cheese, and basil",r.appendChild(d);const l=document.createElement("p");l.classList.add("menu-item-price"),l.textContent="$14.99",r.appendChild(l);const m=document.createElement("li");m.classList.add("menu-item"),n.appendChild(m);const u=document.createElement("h3");u.classList.add("menu-item-name"),u.textContent="Pizza Margherita",m.appendChild(u);const p=document.createElement("p");p.classList.add("menu-item-info"),p.textContent="Tomato sauce, mozzarella cheese, and basil",m.appendChild(p);const h=document.createElement("p");h.classList.add("menu-item-price"),h.textContent="$14.99",m.appendChild(h);const f=document.createElement("li");f.classList.add("menu-item"),n.appendChild(f);const C=document.createElement("h3");C.classList.add("menu-item-name"),C.textContent="Pizza Margherita",f.appendChild(C);const g=document.createElement("p");g.classList.add("menu-item-info"),g.textContent="Tomato sauce, mozzarella cheese, and basil",f.appendChild(g);const v=document.createElement("p");v.classList.add("menu-item-price"),v.textContent="$14.99",f.appendChild(v);const x=document.createElement("li");x.classList.add("menu-item"),n.appendChild(x);const b=document.createElement("h3");b.classList.add("menu-item-name"),b.textContent="Pizza Margherita",x.appendChild(b);const E=document.createElement("p");E.classList.add("menu-item-info"),E.textContent="Tomato sauce, mozzarella cheese, and basil",x.appendChild(E);const L=document.createElement("p");L.classList.add("menu-item-price"),L.textContent="$14.99",x.appendChild(L);const y=document.createElement("li");y.classList.add("menu-item"),n.appendChild(y);const w=document.createElement("h3");w.classList.add("menu-item-name"),w.textContent="Pizza Margherita",y.appendChild(w);const z=document.createElement("p");z.classList.add("menu-item-info"),z.textContent="Tomato sauce, mozzarella cheese, and basil",y.appendChild(z);const M=document.createElement("p");return M.classList.add("menu-item-price"),M.textContent="$14.99",y.appendChild(M),e})())}function v(){const e=document.querySelector("main");e.innerHTML="",e.appendChild((()=>{const e=document.createElement("section");e.classList.add("about");const t=document.createElement("h2");t.classList.add("about-header"),t.textContent="About Our Restaurant",e.appendChild(t);const n=document.createElement("p");return n.classList.add("about-description"),n.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam posuere, ante in dictum congue, erat ex laoreet nibh, id tempor magna ipsum sit amet enim. Donec tempor justo et nisi condimentum laoreet.",e.appendChild(n),e})())}function x(){const e=document.querySelector("main");e.innerHTML="",e.appendChild((()=>{const e=document.createElement("div");e.classList.add("contact");const t=document.createElement("h2");t.classList.add("contact-title"),t.textContent="We would love to hear from you";const n=document.createElement("p");n.classList.add("contact-subtitle"),n.textContent="Feel free to reach out to us at any time";const a=document.createElement("div");return a.classList.add("contact-info"),a.innerHTML='<p class="contact-info-item">\n                              <i class="fas fa-phone"></i>\n                              <a href="tel:1234567890">(123) 456-7890</a>\n                            </p>\n                            <p class="contact-info-item">\n                              <i class="fas fa-envelope"></i>\n                              <a href="mailto:contact@restaurant.com">contact@restaurant.com</a>\n                            </p>',e.appendChild(t),e.appendChild(n),e.appendChild(a),e})())}f.styleTagTransform=p(),f.setAttributes=d(),f.insert=r().bind(null,"head"),f.domAPI=c(),f.insertStyleElement=m(),a()(h.Z,f),h.Z&&h.Z.locals&&h.Z.locals,function(){const t=document.getElementById("content");var n;t.appendChild(function(){const e=document.createElement("header");e.classList.add("header");const t=document.createElement("h1");t.classList.add("restaurant-logo"),t.textContent="Melina",e.appendChild(t),t.addEventListener("click",C);const n=document.createElement("nav");n.classList.add("nav"),e.appendChild(n);const a=document.createElement("ul");a.classList.add("nav-list"),n.appendChild(a);const o=document.createElement("li");o.classList.add("nav-item"),a.appendChild(o);const c=document.createElement("a");c.classList.add("nav-link"),c.textContent="Menu",c.href="#menu",c.addEventListener("click",g),o.appendChild(c);const i=document.createElement("li");i.classList.add("nav-item"),a.appendChild(i);const r=document.createElement("a");r.classList.add("nav-link"),r.textContent="About",r.href="#about",r.addEventListener("click",v),i.appendChild(r);const s=document.createElement("li");s.classList.add("nav-item"),a.appendChild(s);const d=document.createElement("a");return d.classList.add("nav-link"),d.textContent="Contact",d.href="#contact",d.addEventListener("click",x),s.appendChild(d),e}()),t.appendChild(function(){const t=document.createElement("main");return t.classList.add("main"),t.appendChild(e()),t}()),t.appendChild(function(){const e=document.createElement("footer");e.classList.add("footer");const t=document.createElement("p");return t.textContent=`Copyright © ${(new Date).getFullYear()} Melina Restaurant `,e.appendChild(t),e}()),n=document.querySelector(".button-nav"),document.querySelectorAll(".button-nav").forEach((e=>{e===n?e.classList.add("active"):e.classList.remove("active")})),C()}()})()})();