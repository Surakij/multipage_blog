!function(){"use strict";var r,n,e,t,o,a,i,c,s,u,d,p,l,f,A={26:function(r,n,e){e.d(n,{Z:function(){return c}});var t=e(537),o=e.n(t),a=e(645),i=e.n(a)()(o());i.push([r.id,"body{color:#000;margin:0;padding:0}.wrapper{max-width:768px;margin:0 auto;border:1px solid red}.header{border:1px solid red;height:50px}.header_main{display:grid;grid-template-columns:1fr 2fr;justify-items:stretch}h1{display:inline;border:1px solid red;margin:0;padding:0;text-align:center}a{border:1px solid red}","",{version:3,sources:["webpack://./src/sass/style.scss"],names:[],mappings:"AAIA,KACE,UALW,CAMX,QAAA,CACA,SAAA,CAGF,SACE,eAViB,CAWjB,aAAA,CACA,oBAXO,CAcT,QACE,oBAfO,CAgBP,WAAA,CAGF,aACE,YAAA,CACA,6BAAA,CACA,qBAAA,CAIF,GACE,cAAA,CACA,oBA5BO,CA6BP,QAAA,CACA,SAAA,CACA,iBAAA,CAGF,EACE,oBAnCO",sourcesContent:["$body-color: black;\r\n$wrapper-max-size: 768px;\r\n$border: 1px solid red;\r\n\r\nbody {\r\n  color: $body-color;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.wrapper {\r\n  max-width: $wrapper-max-size;\r\n  margin: 0 auto;\r\n  border: $border;\r\n}\r\n\r\n.header {\r\n  border: $border;\r\n  height: 50px;\r\n}\r\n\r\n.header_main {\r\n  display: grid;\r\n  grid-template-columns: 1fr 2fr;\r\n  justify-items:stretch;\r\n\r\n\r\n}\r\nh1 {\r\n  display: inline;\r\n  border: $border;\r\n  margin: 0;\r\n  padding: 0;\r\n  text-align: center;\r\n\r\n}\r\na {\r\n  border: $border;\r\n}"],sourceRoot:""}]);const c=i},645:function(r){r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var e="",t=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),t&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=r(n),t&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(r,e,t,o,a){"string"==typeof r&&(r=[[null,r,void 0]]);var i={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var u=0;u<r.length;u++){var d=[].concat(r[u]);t&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},537:function(r){r.exports=function(r){var n=r[1],e=r[3];if(!e)return n;if("function"==typeof btoa){var t=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),a="/*# ".concat(o," */");return[n].concat([a]).join("\n")}return[n].join("\n")}},379:function(r){var n=[];function e(r){for(var e=-1,t=0;t<n.length;t++)if(n[t].identifier===r){e=t;break}return e}function t(r,t){for(var a={},i=[],c=0;c<r.length;c++){var s=r[c],u=t.base?s[0]+t.base:s[0],d=a[u]||0,p="".concat(u," ").concat(d);a[u]=d+1;var l=e(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==l)n[l].references++,n[l].updater(f);else{var A=o(f,t);t.byIndex=c,n.splice(c,0,{identifier:p,updater:A,references:1})}i.push(p)}return i}function o(r,n){var e=n.domAPI(n);return e.update(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap&&n.supports===r.supports&&n.layer===r.layer)return;e.update(r=n)}else e.remove()}}r.exports=function(r,o){var a=t(r=r||[],o=o||{});return function(r){r=r||[];for(var i=0;i<a.length;i++){var c=e(a[i]);n[c].references--}for(var s=t(r,o),u=0;u<a.length;u++){var d=e(a[u]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=s}}},569:function(r){var n={};r.exports=function(r,e){var t=function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(r){e=null}n[r]=e}return n[r]}(r);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:function(r){r.exports=function(r){var n=document.createElement("style");return r.setAttributes(n,r.attributes),r.insert(n,r.options),n}},565:function(r,n,e){r.exports=function(r){var n=e.nc;n&&r.setAttribute("nonce",n)}},795:function(r){r.exports=function(r){var n=r.insertStyleElement(r);return{update:function(e){!function(r,n,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(t,r,n.options)}(n,r,e)},remove:function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(n)}}}},589:function(r){r.exports=function(r,n){if(n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}}},m={};function v(r){var n=m[r];if(void 0!==n)return n.exports;var e=m[r]={id:r,exports:{}};return A[r](e,e.exports,v),e.exports}v.n=function(r){var n=r&&r.__esModule?function(){return r.default}:function(){return r};return v.d(n,{a:n}),n},v.d=function(r,n){for(var e in n)v.o(n,e)&&!v.o(r,e)&&Object.defineProperty(r,e,{enumerable:!0,get:n[e]})},v.o=function(r,n){return Object.prototype.hasOwnProperty.call(r,n)},v.nc=void 0,r=v(379),n=v.n(r),e=v(795),t=v.n(e),o=v(569),a=v.n(o),i=v(565),c=v.n(i),s=v(216),u=v.n(s),d=v(589),p=v.n(d),l=v(26),(f={}).styleTagTransform=p(),f.setAttributes=c(),f.insert=a().bind(null,"head"),f.domAPI=t(),f.insertStyleElement=u(),n()(l.Z,f),l.Z&&l.Z.locals&&l.Z.locals}();
//# sourceMappingURL=bundle.js.map