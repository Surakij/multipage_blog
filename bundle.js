!function(){"use strict";var n,e,t,r,o,a,c,i,s,u,f,p,l,d,v={26:function(n,e,t){t.d(e,{Z:function(){return i}});var r=t(537),o=t.n(r),a=t(645),c=t.n(a)()(o());c.push([n.id,"body{color:blue}","",{version:3,sources:["webpack://./src/sass/style.scss"],names:[],mappings:"AAEA,KACE,UAHW",sourcesContent:["$body-color: blue;\n\nbody {\n  color: $body-color;\n}"],sourceRoot:""}]);const i=c},645:function(n){n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var u=0;u<n.length;u++){var f=[].concat(n[u]);r&&c[f[0]]||(void 0!==a&&(void 0===f[5]||(f[1]="@layer".concat(f[5].length>0?" ".concat(f[5]):""," {").concat(f[1],"}")),f[5]=a),t&&(f[2]?(f[1]="@media ".concat(f[2]," {").concat(f[1],"}"),f[2]=t):f[2]=t),o&&(f[4]?(f[1]="@supports (".concat(f[4],") {").concat(f[1],"}"),f[4]=o):f[4]="".concat(o)),e.push(f))}},e}},537:function(n){n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),a="/*# ".concat(o," */");return[e].concat([a]).join("\n")}return[e].join("\n")}},379:function(n){var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},c=[],i=0;i<n.length;i++){var s=n[i],u=r.base?s[0]+r.base:s[0],f=a[u]||0,p="".concat(u," ").concat(f);a[u]=f+1;var l=t(p),d={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==l)e[l].references++,e[l].updater(d);else{var v=o(d,r);r.byIndex=i,e.splice(i,0,{identifier:p,updater:v,references:1})}c.push(p)}return c}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var c=0;c<a.length;c++){var i=t(a[c]);e[i].references--}for(var s=r(n,o),u=0;u<a.length;u++){var f=t(a[u]);0===e[f].references&&(e[f].updater(),e.splice(f,1))}a=s}}},569:function(n){var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:function(n){n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:function(n,e,t){n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:function(n){n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:function(n){n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},m={};function y(n){var e=m[n];if(void 0!==e)return e.exports;var t=m[n]={id:n,exports:{}};return v[n](t,t.exports,y),t.exports}y.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return y.d(e,{a:e}),e},y.d=function(n,e){for(var t in e)y.o(e,t)&&!y.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},y.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},y.nc=void 0,n=y(379),e=y.n(n),t=y(795),r=y.n(t),o=y(569),a=y.n(o),c=y(565),i=y.n(c),s=y(216),u=y.n(s),f=y(589),p=y.n(f),l=y(26),(d={}).styleTagTransform=p(),d.setAttributes=i(),d.insert=a().bind(null,"head"),d.domAPI=r(),d.insertStyleElement=u(),e()(l.Z,d),l.Z&&l.Z.locals&&l.Z.locals}();
//# sourceMappingURL=bundle.js.map