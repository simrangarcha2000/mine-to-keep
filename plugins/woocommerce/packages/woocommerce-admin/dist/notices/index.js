<<<<<<< HEAD
this.wc=this.wc||{},this.wc.notices=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=477)}({15:function(t,e){!function(){t.exports=this.wp.data}()},19:function(t,e,n){var r=n(57),o=n(58),i=n(39),c=n(59);t.exports=function(t){return r(t)||o(t)||i(t)||c()}},3:function(t,e){!function(){t.exports=this.lodash}()},37:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}},39:function(t,e,n){var r=n(37);t.exports=function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}},477:function(t,e,n){"use strict";n.r(e);var r={};n.r(r),n.d(r,"createNotice",(function(){return b})),n.d(r,"createSuccessNotice",(function(){return v})),n.d(r,"createInfoNotice",(function(){return y})),n.d(r,"createErrorNotice",(function(){return O})),n.d(r,"createWarningNotice",(function(){return g})),n.d(r,"removeNotice",(function(){return j}));var o={};n.r(o),n.d(o,"getNotices",(function(){return h}));var i=n(15),c=n(19),u=n.n(c),s=n(3),a=n(5),f=n.n(a);function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){f()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var p=function(t){return function(e){return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0,o=r[t];if(void 0===o)return n;var i=e(n[o],r);return i===n[o]?n:d(d({},n),{},f()({},o,i))}}}("context")((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CREATE_NOTICE":return[].concat(u()(Object(s.reject)(t,{id:e.notice.id})),[e.notice]);case"REMOVE_NOTICE":return Object(s.reject)(t,{id:e.id})}return t}));function b(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"info",e=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.speak,o=void 0===r||r,i=n.isDismissible,c=void 0===i||i,u=n.context,a=void 0===u?"global":u,f=n.id,l=void 0===f?Object(s.uniqueId)(a):f,d=n.actions,p=void 0===d?[]:d,b=n.type,v=void 0===b?"default":b,y=n.__unstableHTML,O=n.icon,g=void 0===O?null:O,j=n.explicitDismiss,m=void 0!==j&&j,h=n.onDismiss,x=void 0===h?null:h;return{type:"CREATE_NOTICE",context:a,notice:{id:l,status:t,content:e=String(e),spokenMessage:o?e:null,__unstableHTML:y,isDismissible:c,actions:p,type:v,icon:g,explicitDismiss:m,onDismiss:x}}}function v(t,e){return b("success",t,e)}function y(t,e){return b("info",t,e)}function O(t,e){return b("error",t,e)}function g(t,e){return b("warning",t,e)}function j(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"global";return{type:"REMOVE_NOTICE",id:t,context:e}}var m=[];function h(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"global";return t[e]||m}Object(i.registerStore)("core/notices2",{reducer:p,actions:r,selectors:o})},5:function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},57:function(t,e,n){var r=n(37);t.exports=function(t){if(Array.isArray(t))return r(t)}},58:function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},59:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}}});
=======
this.wc=this.wc||{},this.wc.notices=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=470)}({15:function(t,e){!function(){t.exports=this.wp.data}()},20:function(t,e,n){var r=n(57),o=n(58),i=n(39),c=n(59);t.exports=function(t){return r(t)||o(t)||i(t)||c()}},3:function(t,e){!function(){t.exports=this.lodash}()},37:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}},39:function(t,e,n){var r=n(37);t.exports=function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}},470:function(t,e,n){"use strict";n.r(e);var r={};n.r(r),n.d(r,"createNotice",(function(){return b})),n.d(r,"createSuccessNotice",(function(){return v})),n.d(r,"createInfoNotice",(function(){return y})),n.d(r,"createErrorNotice",(function(){return O})),n.d(r,"createWarningNotice",(function(){return g})),n.d(r,"removeNotice",(function(){return j}));var o={};n.r(o),n.d(o,"getNotices",(function(){return h}));var i=n(15),c=n(20),u=n.n(c),s=n(3),a=n(5),f=n.n(a);function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){f()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var p=function(t){return function(e){return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0,o=r[t];if(void 0===o)return n;var i=e(n[o],r);return i===n[o]?n:d(d({},n),{},f()({},o,i))}}}("context")((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CREATE_NOTICE":return[].concat(u()(Object(s.reject)(t,{id:e.notice.id})),[e.notice]);case"REMOVE_NOTICE":return Object(s.reject)(t,{id:e.id})}return t}));function b(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"info",e=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.speak,o=void 0===r||r,i=n.isDismissible,c=void 0===i||i,u=n.context,a=void 0===u?"global":u,f=n.id,l=void 0===f?Object(s.uniqueId)(a):f,d=n.actions,p=void 0===d?[]:d,b=n.type,v=void 0===b?"default":b,y=n.__unstableHTML,O=n.icon,g=void 0===O?null:O,j=n.explicitDismiss,m=void 0!==j&&j,h=n.onDismiss,x=void 0===h?null:h;return{type:"CREATE_NOTICE",context:a,notice:{id:l,status:t,content:e=String(e),spokenMessage:o?e:null,__unstableHTML:y,isDismissible:c,actions:p,type:v,icon:g,explicitDismiss:m,onDismiss:x}}}function v(t,e){return b("success",t,e)}function y(t,e){return b("info",t,e)}function O(t,e){return b("error",t,e)}function g(t,e){return b("warning",t,e)}function j(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"global";return{type:"REMOVE_NOTICE",id:t,context:e}}var m=[];function h(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"global";return t[e]||m}Object(i.registerStore)("core/notices2",{reducer:p,actions:r,selectors:o})},5:function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},57:function(t,e,n){var r=n(37);t.exports=function(t){if(Array.isArray(t))return r(t)}},58:function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},59:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}}});
>>>>>>> staging
