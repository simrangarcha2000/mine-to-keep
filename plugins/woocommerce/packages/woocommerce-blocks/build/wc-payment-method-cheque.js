<<<<<<< HEAD
!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=23)}({1:function(e,t){!function(){e.exports=this.wp.i18n}()},23:function(e,t,n){"use strict";n.r(t);var r=n(7),o=n(1),c=n(4),i=n(6),u=Object(c.getSetting)("cheque_data",{}),a=Object(o.__)("Check payment",'woocommerce'),l=Object(i.decodeEntities)(u.title)||a,f=function(){return React.createElement("div",null,Object(i.decodeEntities)(u.description||""))},s=function(e){var t=e.components.PaymentMethodLabel;return React.createElement(t,{text:l})},d={name:"cheque",label:React.createElement(s,null),content:React.createElement(f,null),edit:React.createElement(f,null),canMakePayment:function(){return!0},ariaLabel:l};Object(r.registerPaymentMethod)(d)},4:function(e,t){!function(){e.exports=this.wc.wcSettings}()},6:function(e,t){!function(){e.exports=this.wp.htmlEntities}()},7:function(e,t){!function(){e.exports=this.wc.wcBlocksRegistry}()}});
=======
!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=23)}({1:function(e,t){!function(){e.exports=this.wp.i18n}()},23:function(e,t,n){"use strict";n.r(t);var r,o=n(7),c=n(1),u=n(4),i=n(6),l=Object(u.getSetting)("cheque_data",{}),a=Object(c.__)("Check payment",'woocommerce'),f=Object(i.decodeEntities)(l.title)||a,s=function(){return React.createElement("div",null,Object(i.decodeEntities)(l.description||""))},p=function(e){var t=e.components.PaymentMethodLabel;return React.createElement(t,{text:f})},d={name:"cheque",label:React.createElement(p,null),content:React.createElement(s,null),edit:React.createElement(s,null),canMakePayment:function(){return!0},ariaLabel:f,supports:{features:null!==(r=null==l?void 0:l.supports)&&void 0!==r?r:[]}};Object(o.registerPaymentMethod)(d)},4:function(e,t){!function(){e.exports=this.wc.wcSettings}()},6:function(e,t){!function(){e.exports=this.wp.htmlEntities}()},7:function(e,t){!function(){e.exports=this.wc.wcBlocksRegistry}()}});
>>>>>>> staging
