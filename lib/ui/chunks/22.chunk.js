(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{1720:function(t,e,o){var r=o(27),n=o(1721);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[t.i,n,""]]);var i={insert:function(t){const e=document.getElementsByTagName("apryse-webviewer");if(e.length>0){const o=[];for(let r=0;r<e.length;r++){const n=e[r];if(0===r)n.shadowRoot.appendChild(t),t.onload=function(){o.length>0&&o.forEach(e=>{e.innerHTML=t.innerHTML})};else{const e=t.cloneNode(!0);n.shadowRoot.appendChild(e),o.push(e)}}}else document.head.appendChild(t)},singleton:!1};r(n,i);t.exports=n.locals||{}},1721:function(t,e,o){(t.exports=o(28)(!1)).push([t.i,".portfolio-items{height:100%;max-height:446px;overflow-y:auto;margin:16px;padding:16px;background-color:var(--faded-component-background);display:flex;flex-wrap:wrap;grid-gap:16px;gap:16px}.portfolio-items .portfolio-item{width:130px;height:182px;padding:12px 24px;background-color:#f8f9fa;border:1px solid var(--tools-overlay-button-hover);display:flex;flex-direction:column;align-items:center;border-radius:6px}.portfolio-items .portfolio-item .portfolio-item-preview{width:100%;height:104px;border:1px solid #e7ebee}.portfolio-items .portfolio-item .portfolio-item-preview .preview-container{width:100%;height:100%;display:flex;align-items:center;justify-content:center}.portfolio-items .portfolio-item .portfolio-item-preview .preview-container .Icon{color:#adb5bd}.portfolio-items .portfolio-item .portfolio-item-name{margin:8px 0;height:12px;font-size:10px;max-width:90px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;color:#485056}.portfolio-items .portfolio-item .Button{width:24px;height:24px}.portfolio-items .portfolio-item .Button .Icon{width:16px;height:16px}",""])},1722:function(t,e,o){var r=o(27),n=o(1723);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[t.i,n,""]]);var i={insert:function(t){const e=document.getElementsByTagName("apryse-webviewer");if(e.length>0){const o=[];for(let r=0;r<e.length;r++){const n=e[r];if(0===r)n.shadowRoot.appendChild(t),t.onload=function(){o.length>0&&o.forEach(e=>{e.innerHTML=t.innerHTML})};else{const e=t.cloneNode(!0);n.shadowRoot.appendChild(e),o.push(e)}}}else document.head.appendChild(t)},singleton:!1};r(n,i);t.exports=n.locals||{}},1723:function(t,e,o){(e=t.exports=o(28)(!1)).push([t.i,".open.CreatePortfolioModal{visibility:visible}.closed.CreatePortfolioModal{visibility:hidden}:host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.CreatePortfolioModal{position:fixed;left:0;bottom:0;z-index:100;width:100%;height:100%;display:flex;justify-content:center;align-items:center;background:var(--modal-negative-space)}.CreatePortfolioModal .modal-container .wrapper .modal-content{padding:10px}.CreatePortfolioModal .footer{display:flex;flex-direction:row;justify-content:flex-end;width:100%;margin-top:13px}.CreatePortfolioModal .footer.modal-footer{padding:16px;margin:0;border-top:1px solid var(--divider)}.CreatePortfolioModal .footer .modal-button{display:flex;justify-content:center;align-items:center;padding:6px 18px;margin:8px 0 0;width:auto;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;border-radius:4px;height:30px;cursor:pointer}.CreatePortfolioModal .footer .modal-button.cancel{color:var(--secondary-button-text);border:1px solid var(--secondary-button-text)}.CreatePortfolioModal .footer .modal-button.cancel:hover{background-color:var(--document-background-color);color:var(--secondary-button-hover);border:1px solid var(--secondary-button-hover)}.CreatePortfolioModal .footer .modal-button.confirm{margin-left:4px;color:var(--primary-button-text);font-weight:600;background:var(--primary-button)}.CreatePortfolioModal .footer .modal-button.confirm:hover{background:var(--primary-button-hover)}.CreatePortfolioModal .footer .modal-button.confirm.disabled{background:var(--primary-button)!important;opacity:.5}.CreatePortfolioModal .footer .modal-button.secondary-btn-custom{border-radius:4px;border:1px solid var(--primary-button);color:var(--primary-button);padding:2px 20px 4px;cursor:pointer;background-color:#fff}.CreatePortfolioModal .footer .modal-button.secondary-btn-custom:hover{color:var(--secondary-button-hover)}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .CreatePortfolioModal .footer .modal-button{padding:23px 8px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .CreatePortfolioModal .footer .modal-button{padding:23px 8px}}.CreatePortfolioModal .swipe-indicator{background:var(--divider);border-radius:2px;height:4px;width:38px;position:absolute;top:12px;margin-left:auto;margin-right:auto;left:0;right:0}@media(min-width:641px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .CreatePortfolioModal .swipe-indicator{display:none}}@container (min-width: 641px){.App.is-web-component:not(.is-in-desktop-only-mode) .CreatePortfolioModal .swipe-indicator{display:none}}.CreatePortfolioModal .container{box-shadow:0 0 3px 0 var(--document-box-shadow);overflow-y:auto;max-height:100%}@media(max-height:500px){.App:not(.is-web-component) .CreatePortfolioModal .container,.CreatePortfolioModal .App:not(.is-web-component) .container{overflow:auto;max-height:100%}}@container (max-height: 500px){.App.is-web-component .CreatePortfolioModal .container,.CreatePortfolioModal .App.is-web-component .container{overflow:auto;max-height:100%}}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .CreatePortfolioModal .container,.CreatePortfolioModal .App:not(.is-in-desktop-only-mode):not(.is-web-component) .container{width:100%;position:fixed;left:0;bottom:0;padding-top:4px;min-width:100px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .CreatePortfolioModal .container,.CreatePortfolioModal .App.is-web-component:not(.is-in-desktop-only-mode) .container{width:100%;position:fixed;left:0;bottom:0;padding-top:4px;min-width:100px}}.CreatePortfolioModal .container .tab-list{width:100%;height:28px;display:flex;border-radius:4px;border:1px solid var(--border);color:var(--text-color)}.CreatePortfolioModal .container .tab-list .tab-options-button{text-align:center;vertical-align:middle;line-height:24px;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;flex:1;border-radius:0;cursor:pointer}.CreatePortfolioModal .container .tab-list .tab-options-button:first-child{border-bottom-left-radius:4px;border-top-left-radius:4px}.CreatePortfolioModal .container .tab-list .tab-options-button:last-child{border-bottom-right-radius:4px;border-top-right-radius:4px}.CreatePortfolioModal .container .tab-list .tab-options-button:hover{background:var(--popup-button-hover)}.CreatePortfolioModal .container .tab-list .tab-options-button.selected{background:var(--popup-button-active);cursor:default}.CreatePortfolioModal .container .tab-list .tab-options-divider{width:1px;background:var(--divider)}.CreatePortfolioModal .container .tab-panel{width:100%;display:flex;flex-direction:column;align-items:center}.CreatePortfolioModal .container{display:flex;flex-direction:column;justify-content:space-between;width:737px;height:584px;padding:0;border-radius:4px;box-shadow:0 0 3px var(--document-box-shadow);background:var(--component-background)}.CreatePortfolioModal .container .header{display:flex;justify-content:space-between;margin:16px 16px 10px;font-size:16px;font-weight:700;align-items:center;height:24px}.CreatePortfolioModal .container .header .Button{height:24px}.CreatePortfolioModal .container .divider{height:1px;width:100%;background:var(--divider)}.CreatePortfolioModal .container .tab-list{font-size:13px;margin:0 16px 16px;width:calc(100% - 32px)}.CreatePortfolioModal .container .tab-list .tab-options-button{padding:0;border:none;background-color:transparent}:host(:not([data-tabbing=true])) .CreatePortfolioModal .container .tab-list .tab-options-button,html:not([data-tabbing=true]) .CreatePortfolioModal .container .tab-list .tab-options-button{outline:none}.CreatePortfolioModal .container .tab-panels{height:100%;padding:16px}.CreatePortfolioModal .container .tab-panels .tab-panel{height:100%}.CreatePortfolioModal .container .tab-panels .tab-panel .file-picker-body .modal-btn-file{height:36px;display:flex;align-items:center}.CreatePortfolioModal .container .footer{display:flex;padding:16px;align-items:center;justify-content:space-between;width:100%;margin:0}.CreatePortfolioModal .container .footer .Button{border:none;background-color:transparent;background:var(--primary-button);border-radius:4px;padding:0 8px;height:32px;min-width:72px;display:flex;align-items:center;justify-content:center;position:relative;color:var(--primary-button-text);cursor:pointer}:host(:not([data-tabbing=true])) .CreatePortfolioModal .container .footer .Button,html:not([data-tabbing=true]) .CreatePortfolioModal .container .footer .Button{outline:none}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .CreatePortfolioModal .container .footer .Button{font-size:13px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .CreatePortfolioModal .container .footer .Button{font-size:13px}}.CreatePortfolioModal .container .footer .Button:enabled:hover{background:var(--primary-button-hover)}.CreatePortfolioModal .container .footer .Button:disabled{opacity:.5;cursor:not-allowed}.CreatePortfolioModal .container .footer .create-portfolio{border:none;background-color:transparent;background:var(--primary-button);border-radius:4px;padding:0 8px;height:32px;min-width:70px;display:flex;align-items:center;justify-content:center;position:relative;color:var(--primary-button-text);cursor:pointer}:host(:not([data-tabbing=true])) .CreatePortfolioModal .container .footer .create-portfolio,html:not([data-tabbing=true]) .CreatePortfolioModal .container .footer .create-portfolio{outline:none}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .CreatePortfolioModal .container .footer .create-portfolio{font-size:13px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .CreatePortfolioModal .container .footer .create-portfolio{font-size:13px}}.CreatePortfolioModal .container .footer .create-portfolio:enabled:hover{background:var(--primary-button-hover)}.CreatePortfolioModal .container .footer .create-portfolio:disabled{opacity:.5;cursor:not-allowed}.CreatePortfolioModal .container .footer .add-item-option{visibility:hidden;display:flex;align-items:center;margin-left:16px;color:var(--secondary-button-text);position:relative;cursor:pointer}.CreatePortfolioModal .container .footer .add-item-option.show-popup,.CreatePortfolioModal .container .footer .add-item-option.show-popup .add-item-icon,.CreatePortfolioModal .container .footer .add-item-option.show-popup .Button .Icon{color:var(--secondary-button-hover)}.CreatePortfolioModal .container .footer .add-item-option .add-item-icon{color:var(--secondary-button-text)}.CreatePortfolioModal .container .footer .add-item-option .add-item-option-text{margin-left:4px}.CreatePortfolioModal .container .footer .add-item-option .Button{background-color:transparent;padding-left:0;min-width:0;width:50px}.CreatePortfolioModal .container .footer .add-item-option .Button.active,.CreatePortfolioModal .container .footer .add-item-option .Button:hover{background-color:transparent}.CreatePortfolioModal .container .footer .add-item-option .Button .Icon{width:12px;height:12px;color:var(--secondary-button-text)}.CreatePortfolioModal .container .footer .add-item-option .add-item-trigger{width:1px;height:1px;visibility:hidden;position:absolute;left:100px;top:30px}.CreatePortfolioModal.is-editing .container{height:604px;width:786px}.CreatePortfolioModal.is-editing .container .header{margin-bottom:20px}.CreatePortfolioModal.is-editing .container .footer .add-item-option{visibility:visible}",""]),e.locals={LEFT_HEADER_WIDTH:"41px",RIGHT_HEADER_WIDTH:"41px"}},1783:function(t,e,o){"use strict";o.r(e);o(20),o(9),o(95),o(7),o(15),o(34),o(126),o(19),o(11),o(13),o(12),o(8),o(10),o(16),o(18),o(55),o(22),o(70),o(71),o(72),o(73),o(42),o(44),o(25),o(26),o(46),o(68);var r=o(0),n=o.n(r),i=o(6),a=o(376),l=o(3),c=o(2),d=o(17),p=o.n(d),u=o(5),s=o(24),f=o(146),h=o(545),m=o(35),v=(o(41),o(1));function y(t){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function b(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */b=function(){return t};var t={},e=Object.prototype,o=e.hasOwnProperty,r=Object.defineProperty||function(t,e,o){t[e]=o.value},n="function"==typeof Symbol?Symbol:{},i=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",l=n.toStringTag||"@@toStringTag";function c(t,e,o){return Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,o){return t[e]=o}}function d(t,e,o,n){var i=e&&e.prototype instanceof s?e:s,a=Object.create(i.prototype),l=new O(n||[]);return r(a,"_invoke",{value:P(t,o,l)}),a}function p(t,e,o){try{return{type:"normal",arg:t.call(e,o)}}catch(t){return{type:"throw",arg:t}}}t.wrap=d;var u={};function s(){}function f(){}function h(){}var m={};c(m,i,(function(){return this}));var v=Object.getPrototypeOf,g=v&&v(v(L([])));g&&g!==e&&o.call(g,i)&&(m=g);var x=h.prototype=s.prototype=Object.create(m);function w(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){var n;r(this,"_invoke",{value:function(r,i){function a(){return new e((function(n,a){!function r(n,i,a,l){var c=p(t[n],t,i);if("throw"!==c.type){var d=c.arg,u=d.value;return u&&"object"==y(u)&&o.call(u,"__await")?e.resolve(u.__await).then((function(t){r("next",t,a,l)}),(function(t){r("throw",t,a,l)})):e.resolve(u).then((function(t){d.value=t,a(d)}),(function(t){return r("throw",t,a,l)}))}l(c.arg)}(r,i,n,a)}))}return n=n?n.then(a,a):a()}})}function P(t,e,o){var r="suspendedStart";return function(n,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===n)throw i;return A()}for(o.method=n,o.arg=i;;){var a=o.delegate;if(a){var l=C(a,o);if(l){if(l===u)continue;return l}}if("next"===o.method)o.sent=o._sent=o.arg;else if("throw"===o.method){if("suspendedStart"===r)throw r="completed",o.arg;o.dispatchException(o.arg)}else"return"===o.method&&o.abrupt("return",o.arg);r="executing";var c=p(t,e,o);if("normal"===c.type){if(r=o.done?"completed":"suspendedYield",c.arg===u)continue;return{value:c.arg,done:o.done}}"throw"===c.type&&(r="completed",o.method="throw",o.arg=c.arg)}}}function C(t,e){var o=e.method,r=t.iterator[o];if(void 0===r)return e.delegate=null,"throw"===o&&t.iterator.return&&(e.method="return",e.arg=void 0,C(t,e),"throw"===e.method)||"return"!==o&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+o+"' method")),u;var n=p(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,u;var i=n.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,u):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,u)}function M(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(M,this),this.reset(!0)}function L(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:A}}function A(){return{value:void 0,done:!0}}return f.prototype=h,r(x,"constructor",{value:h,configurable:!0}),r(h,"constructor",{value:f,configurable:!0}),f.displayName=c(h,l,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,c(t,l,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},w(E.prototype),c(E.prototype,a,(function(){return this})),t.AsyncIterator=E,t.async=function(e,o,r,n,i){void 0===i&&(i=Promise);var a=new E(d(e,o,r,n),i);return t.isGeneratorFunction(o)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(x),c(x,l,"Generator"),c(x,i,(function(){return this})),c(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),o=[];for(var r in e)o.push(r);return o.reverse(),function t(){for(;o.length;){var r=o.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=L,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(o,r){return a.type="throw",a.arg=t,e.next=o,r&&(e.method="next",e.arg=void 0),!!r}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var l=o.call(i,"catchLoc"),c=o.call(i,"finallyLoc");if(l&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,u):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),u},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.finallyLoc===t)return this.complete(o.completion,o.afterLoc),k(o),u}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc===t){var r=o.completion;if("throw"===r.type){var n=r.arg;k(o)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,o){return this.delegate={iterator:L(t),resultName:e,nextLoc:o},"next"===this.method&&(this.arg=void 0),u}},t}function g(t,e,o,r,n,i,a){try{var l=t[i](a),c=l.value}catch(t){return void o(t)}l.done?e(c):Promise.resolve(c).then(r,n)}function x(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var o=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=o){var r,n,i,a,l=[],c=!0,d=!1;try{if(i=(o=o.call(t)).next,0===e){if(Object(o)!==o)return;c=!1}else for(;!(c=(r=i.call(o)).done)&&(l.push(r.value),l.length!==e);c=!0);}catch(t){d=!0,n=t}finally{try{if(!c&&null!=o.return&&(a=o.return(),Object(a)!==a))return}finally{if(d)throw n}}return l}}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return w(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);"Object"===o&&t.constructor&&(o=t.constructor.name);if("Map"===o||"Set"===o)return Array.from(t);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return w(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(t,e){(null==e||e>t.length)&&(e=t.length);for(var o=0,r=new Array(e);o<e;o++)r[o]=t[o];return r}var E={loadAsPDF:!0},P=function(t){var e=t.item,o=Object(r.useRef)(),i=x(Object(r.useState)(!1),2),a=i[0],l=i[1];return Object(r.useEffect)((function(){var t,r;return function(){var n=function(t){return function(){var e=this,o=arguments;return new Promise((function(r,n){var i=t.apply(e,o);function a(t){g(i,r,n,a,l,"next",t)}function l(t){g(i,r,n,a,l,"throw",t)}a(void 0)}))}}(b().mark((function n(){return b().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,v.a.createDocument(e,E);case 3:if(t=n.sent,!(t.getPageCount()<1)){n.next=8;break}return l(!0),n.abrupt("return");case 8:return n.next=10,t.loadThumbnail(1,(function(t){var e,r=o.current.clientWidth,n=o.current.clientHeight,i=t.width,a=t.height;if(r<i||n<a){var l=Math.min(r/i,n/a);t.style.width="".concat(i*l,"px"),t.style.height="".concat(a*l,"px")}null===(e=o.current)||void 0===e||e.appendChild(t)}));case 10:r=n.sent,n.next=16;break;case 13:n.prev=13,n.t0=n.catch(0),l(!0);case 16:case"end":return n.stop()}}),n,null,[[0,13]])})));return function(){return n.apply(this,arguments)}}()(),function(){r&&t.cancelLoadThumbnail(r)}}),[]),n.a.createElement("div",{className:"preview-container",ref:o},a&&n.a.createElement(m.a,{glyph:"icon-portfolio-file"}))},C=Object(r.memo)(P),M=(o(1720),function(t){var e=t.items,o=t.onDeleteItem,r=t.onDropItems;return n.a.createElement("div",{className:"portfolio-items",onDragEnter:function(t){t.preventDefault(),t.stopPropagation()},onDragOver:function(t){t.preventDefault(),t.stopPropagation()},onDrop:r},e.map((function(t,e){return n.a.createElement("div",{className:"portfolio-item",key:t.name},n.a.createElement("div",{className:"portfolio-item-preview"},n.a.createElement(C,{item:t})),n.a.createElement("div",{className:"portfolio-item-name",title:t.name},t.name),n.a.createElement(s.a,{img:"ic-delete",onClick:function(){return o(e)},title:"action.delete"}))})))}),k=o(131),O=o(109);o(1722);function L(t){return(L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function A(t){return function(t){if(Array.isArray(t))return I(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||S(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */j=function(){return t};var t={},e=Object.prototype,o=e.hasOwnProperty,r=Object.defineProperty||function(t,e,o){t[e]=o.value},n="function"==typeof Symbol?Symbol:{},i=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",l=n.toStringTag||"@@toStringTag";function c(t,e,o){return Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,o){return t[e]=o}}function d(t,e,o,n){var i=e&&e.prototype instanceof s?e:s,a=Object.create(i.prototype),l=new M(n||[]);return r(a,"_invoke",{value:w(t,o,l)}),a}function p(t,e,o){try{return{type:"normal",arg:t.call(e,o)}}catch(t){return{type:"throw",arg:t}}}t.wrap=d;var u={};function s(){}function f(){}function h(){}var m={};c(m,i,(function(){return this}));var v=Object.getPrototypeOf,y=v&&v(v(k([])));y&&y!==e&&o.call(y,i)&&(m=y);var b=h.prototype=s.prototype=Object.create(m);function g(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){var n;r(this,"_invoke",{value:function(r,i){function a(){return new e((function(n,a){!function r(n,i,a,l){var c=p(t[n],t,i);if("throw"!==c.type){var d=c.arg,u=d.value;return u&&"object"==L(u)&&o.call(u,"__await")?e.resolve(u.__await).then((function(t){r("next",t,a,l)}),(function(t){r("throw",t,a,l)})):e.resolve(u).then((function(t){d.value=t,a(d)}),(function(t){return r("throw",t,a,l)}))}l(c.arg)}(r,i,n,a)}))}return n=n?n.then(a,a):a()}})}function w(t,e,o){var r="suspendedStart";return function(n,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===n)throw i;return O()}for(o.method=n,o.arg=i;;){var a=o.delegate;if(a){var l=E(a,o);if(l){if(l===u)continue;return l}}if("next"===o.method)o.sent=o._sent=o.arg;else if("throw"===o.method){if("suspendedStart"===r)throw r="completed",o.arg;o.dispatchException(o.arg)}else"return"===o.method&&o.abrupt("return",o.arg);r="executing";var c=p(t,e,o);if("normal"===c.type){if(r=o.done?"completed":"suspendedYield",c.arg===u)continue;return{value:c.arg,done:o.done}}"throw"===c.type&&(r="completed",o.method="throw",o.arg=c.arg)}}}function E(t,e){var o=e.method,r=t.iterator[o];if(void 0===r)return e.delegate=null,"throw"===o&&t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method)||"return"!==o&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+o+"' method")),u;var n=p(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,u;var i=n.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,u):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,u)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function M(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function k(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:O}}function O(){return{value:void 0,done:!0}}return f.prototype=h,r(b,"constructor",{value:h,configurable:!0}),r(h,"constructor",{value:f,configurable:!0}),f.displayName=c(h,l,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,c(t,l,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},g(x.prototype),c(x.prototype,a,(function(){return this})),t.AsyncIterator=x,t.async=function(e,o,r,n,i){void 0===i&&(i=Promise);var a=new x(d(e,o,r,n),i);return t.isGeneratorFunction(o)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},g(b),c(b,l,"Generator"),c(b,i,(function(){return this})),c(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),o=[];for(var r in e)o.push(r);return o.reverse(),function t(){for(;o.length;){var r=o.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=k,M.prototype={constructor:M,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(C),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(o,r){return a.type="throw",a.arg=t,e.next=o,r&&(e.method="next",e.arg=void 0),!!r}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var l=o.call(i,"catchLoc"),c=o.call(i,"finallyLoc");if(l&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,u):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),u},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.finallyLoc===t)return this.complete(o.completion,o.afterLoc),C(o),u}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc===t){var r=o.completion;if("throw"===r.type){var n=r.arg;C(o)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,o){return this.delegate={iterator:k(t),resultName:e,nextLoc:o},"next"===this.method&&(this.arg=void 0),u}},t}function _(t,e,o,r,n,i,a){try{var l=t[i](a),c=l.value}catch(t){return void o(t)}l.done?e(c):Promise.resolve(c).then(r,n)}function T(t){return function(){var e=this,o=arguments;return new Promise((function(r,n){var i=t.apply(e,o);function a(t){_(i,r,n,a,l,"next",t)}function l(t){_(i,r,n,a,l,"throw",t)}a(void 0)}))}}function N(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var o=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=o){var r,n,i,a,l=[],c=!0,d=!1;try{if(i=(o=o.call(t)).next,0===e){if(Object(o)!==o)return;c=!1}else for(;!(c=(r=i.call(o)).done)&&(l.push(r.value),l.length!==e);c=!0);}catch(t){d=!0,n=t}finally{try{if(!c&&null!=o.return&&(a=o.return(),Object(a)!==a))return}finally{if(d)throw n}}return l}}(t,e)||S(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(t,e){if(t){if("string"==typeof t)return I(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?I(t,e):void 0}}function I(t,e){(null==e||e>t.length)&&(e=t.length);for(var o=0,r=new Array(e);o<e;o++)r[o]=t[o];return r}var D=function(){var t=N(Object(a.a)(),1)[0],e=Object(i.d)(),o=N(Object(i.e)((function(t){return[l.a.isElementDisabled(t,u.a.CREATE_PORTFOLIO_MODAL),l.a.isElementOpen(t,u.a.CREATE_PORTFOLIO_MODAL),l.a.getIsMultiTab(t),l.a.getTabManager(t)]}),i.c),4),d=o[0],v=o[1],y=o[2],b=o[3],g=N(Object(r.useState)([]),2),x=g[0],w=g[1],E=Object(r.useRef)(null),P=function(){e(c.a.closeElement(u.a.CREATE_PORTFOLIO_MODAL))},C=function(t){w(t)},L=Object(r.useCallback)(T(j().mark((function t(){var o,r;return j().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(k.c)(x);case 2:if(o=t.sent,!y){t.next=15;break}return t.t0=Blob,t.next=7,o.saveMemoryBuffer(0);case 7:return t.t1=t.sent,t.t2=[t.t1],t.t3={type:"application/pdf"},r=new t.t0(t.t2,t.t3),t.next=13,b.addTab(r,{setActive:!0,extension:"pdf"});case 13:t.next=16;break;case 15:Object(O.a)(e,o);case 16:P();case 17:case"end":return t.stop()}}),t)}))),[x,y,b]),_=function(o){if(o.length>0){o=Array.from(o);var r=x.find((function(t){return o.find((function(e){return e.name===t.name}))}));if(r){var n={message:t("portfolio.fileAlreadyExistsMessage",{fileName:r.name}),title:t("portfolio.fileAlreadyExists"),confirmBtnText:t("portfolio.reselect"),onConfirm:function(){return S()}};e(c.a.showWarningMessage(n))}else w(x.concat(o))}},S=function(){var t;null==E||null===(t=E.current)||void 0===t||t.click()},I=p()({CreatePortfolioModal:!0,"is-editing":x.length>0}),D=p()({"add-item-option":!0});return d||!v?null:n.a.createElement("div",{className:I,"data-element":u.a.CREATE_PORTFOLIO_MODAL,onClick:P},n.a.createElement("div",{className:"container",onClick:function(t){return t.stopPropagation()}},n.a.createElement("div",{className:"header"},n.a.createElement("div",null,t("portfolio.createPDFPortfolio")),n.a.createElement(s.a,{img:"icon-close",onClick:P,title:"action.close"})),0===x.length&&n.a.createElement(f.d,{id:u.a.CREATE_PORTFOLIO_MODAL},n.a.createElement("div",{className:"tab-list"},n.a.createElement(f.a,{dataElement:u.a.PORTFOLIO_UPLOAD_FILES_TAB},n.a.createElement("button",{className:"tab-options-button"},t("portfolio.uploadFiles"))),n.a.createElement("div",{className:"tab-options-divider"})),n.a.createElement("div",{className:"divider"}),n.a.createElement("div",{className:"tab-panels"},n.a.createElement(f.c,{dataElement:"portfolioUploadFiles"},n.a.createElement(h.a,{onChange:C,onDrop:C,allowMultiple:!0})),n.a.createElement(f.c,{dataElement:"portfolioUploadFolder"},n.a.createElement(n.a.Fragment,null)))),x.length>0&&n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"divider"}),n.a.createElement(M,{items:x,onDeleteItem:function(t){x.splice(t,1),w(A(x))},onDropItems:function(t){t.preventDefault(),_(t.dataTransfer.files)}})),n.a.createElement("div",{className:"divider"}),n.a.createElement("div",{className:"footer"},n.a.createElement("div",{className:D,onClick:S},n.a.createElement(m.a,{glyph:"icon-portfolio-file",className:"add-item-icon"}),n.a.createElement("div",{className:"add-item-option-text"},"".concat(t("portfolio.addFiles"),"...")),n.a.createElement("div",{className:"add-item-trigger","data-element":u.a.PORTFOLIO_MODAL_ADD_ITEM_TRIGGER})),n.a.createElement("button",{className:"create-portfolio",disabled:0===x.length,onClick:L},t("action.create"))),n.a.createElement("input",{ref:E,multiple:!0,style:{display:"none"},type:"file",onChange:function(t){_(t.target.files),t.target.value=null}})))};e.default=D}}]);
//# sourceMappingURL=22.chunk.js.map