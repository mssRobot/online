!function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="/",t(t.s=90)}({90:function(n,e,t){n.exports=t(91)},91:function(n,e){document.addEventListener("DOMContentLoaded",function(n){"use strict";var e,t,r,o;window.OPFunnelStats&&window.OPFunnelStats.fid&&window.OPFunnelStats.pid&&window.OPFunnelStats.pid&&(e=window.OPFunnelStats.fid,t=window.OPFunnelStats.pid,r=window.OPFunnelStats.vid,o={fid:e,pid:t,vid:r,referer:document.referrer,currentUrl:window.location.href,_wpnonce:window.OPFunnelStats.nonce},fetch(window.OPFunnelStats.rest_url,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)}).then(function(n){if(n.ok)return n}).then(function(n){return n.json()}).then(function(n){window.OPFunnelStats.queried_object_id=n.data.queried_object_id,window.OPFunnelStats.pageview_record_id=n.data.pageview_record_id}).catch(function(n){console.error(n)}))})}});
//# sourceMappingURL=tracking.js.map