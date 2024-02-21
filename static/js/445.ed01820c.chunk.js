/*! For license information please see 445.ed01820c.chunk.js.LICENSE.txt */
(self.webpackChunkbattery_fly_frontend=self.webpackChunkbattery_fly_frontend||[]).push([[445],{805:function(e,t,r){var n;n=function(e){return function(){var t={"./node_modules/css-mediaquery/index.js":function(e,t){"use strict";t.match=function(e,t){return u(e).some((function(e){var r=e.inverse,n="all"===e.type||t.type===e.type;if(n&&r||!n&&!r)return!1;var o=e.expressions.every((function(e){var r=e.feature,n=e.modifier,o=e.value,a=t[r];if(!a)return!1;switch(r){case"orientation":case"scan":return a.toLowerCase()===o.toLowerCase();case"width":case"height":case"device-width":case"device-height":o=f(o),a=f(a);break;case"resolution":o=s(o),a=s(a);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":o=c(o),a=c(a);break;case"grid":case"color":case"color-index":case"monochrome":o=parseInt(o,10)||1,a=parseInt(a,10)||0}switch(n){case"min":return a>=o;case"max":return a<=o;default:return a===o}}));return o&&!r||!o&&r}))},t.parse=u;var r=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,n=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,o=/^(?:(min|max)-)?(.+)/,a=/(em|rem|px|cm|mm|in|pt|pc)?$/,i=/(dpi|dpcm|dppx)?$/;function u(e){return e.split(",").map((function(e){var t=(e=e.trim()).match(r),a=t[1],i=t[2],u=t[3]||"",c={};return c.inverse=!!a&&"not"===a.toLowerCase(),c.type=i?i.toLowerCase():"all",u=u.match(/\([^\)]+\)/g)||[],c.expressions=u.map((function(e){var t=e.match(n),r=t[1].toLowerCase().match(o);return{modifier:r[1],feature:r[2],value:t[2]}})),c}))}function c(e){var t,r=Number(e);return r||(r=(t=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/t[2]),r}function s(e){var t=parseFloat(e);switch(String(e).match(i)[1]){case"dpcm":return t/2.54;case"dppx":return 96*t;default:return t}}function f(e){var t=parseFloat(e);switch(String(e).match(a)[1]){case"em":case"rem":return 16*t;case"cm":return 96*t/2.54;case"mm":return 96*t/2.54/10;case"in":return 96*t;case"pt":return 72*t;case"pc":return 72*t/12;default:return t}}},"./node_modules/hyphenate-style-name/index.js":function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return u}});var n=/[A-Z]/g,o=/^ms-/,a={};function i(e){return"-"+e.toLowerCase()}var u=function(e){if(a.hasOwnProperty(e))return a[e];var t=e.replace(n,i);return a[e]=o.test(t)?"-"+t:t}},"./node_modules/matchmediaquery/index.js":function(e,t,r){"use strict";var n=r("./node_modules/css-mediaquery/index.js").match,o="undefined"!==typeof window?window.matchMedia:null;function a(e,t,r){var a=this;if(o&&!r){var i=o.call(window,e);this.matches=i.matches,this.media=i.media,i.addListener(u)}else this.matches=n(e,t),this.media=e;function u(e){a.matches=e.matches,a.media=e.media}this.addListener=function(e){i&&i.addListener(e)},this.removeListener=function(e){i&&i.removeListener(e)},this.dispose=function(){i&&i.removeListener(u)}}e.exports=function(e,t,r){return new a(e,t,r)}},"./node_modules/object-assign/index.js":function(e){"use strict";var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,a){for(var i,u,c=o(e),s=1;s<arguments.length;s++){for(var f in i=Object(arguments[s]))r.call(i,f)&&(c[f]=i[f]);if(t){u=t(i);for(var l=0;l<u.length;l++)n.call(i,u[l])&&(c[u[l]]=i[u[l]])}}return c}},"./node_modules/prop-types/checkPropTypes.js":function(e,t,r){"use strict";var n=function(){},o=r("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),a={},i=r("./node_modules/prop-types/lib/has.js");function u(e,t,r,u,c){for(var s in e)if(i(e,s)){var f;try{if("function"!==typeof e[s]){var l=Error((u||"React class")+": "+r+" type `"+s+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[s]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw l.name="Invariant Violation",l}f=e[s](t,s,u,r,null,o)}catch(p){f=p}if(!f||f instanceof Error||n((u||"React class")+": type specification of "+r+" `"+s+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof f+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),f instanceof Error&&!(f.message in a)){a[f.message]=!0;var d=c?c():"";n("Failed "+r+" type: "+f.message+(null!=d?d:""))}}}n=function(e){var t="Warning: "+e;"undefined"!==typeof console&&console.error(t);try{throw new Error(t)}catch(r){}},u.resetWarningCache=function(){a={}},e.exports=u},"./node_modules/prop-types/factoryWithTypeCheckers.js":function(e,t,r){"use strict";var n=r("./node_modules/react-is/index.js"),o=r("./node_modules/object-assign/index.js"),a=r("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),i=r("./node_modules/prop-types/lib/has.js"),u=r("./node_modules/prop-types/checkPropTypes.js"),c=function(){};function s(){return null}c=function(e){var t="Warning: "+e;"undefined"!==typeof console&&console.error(t);try{throw new Error(t)}catch(r){}},e.exports=function(e,t){var r="function"===typeof Symbol&&Symbol.iterator,f="<<anonymous>>",l={array:m("array"),bigint:m("bigint"),bool:m("boolean"),func:m("function"),number:m("number"),object:m("object"),string:m("string"),symbol:m("symbol"),any:y(s),arrayOf:function(e){return y((function(t,r,n,o,i){if("function"!==typeof e)return new p("Property `"+i+"` of component `"+n+"` has invalid PropType notation inside arrayOf.");var u=t[r];if(!Array.isArray(u))return new p("Invalid "+o+" `"+i+"` of type `"+b(u)+"` supplied to `"+n+"`, expected an array.");for(var c=0;c<u.length;c++){var s=e(u,c,n,o,i+"["+c+"]",a);if(s instanceof Error)return s}return null}))},element:y((function(t,r,n,o,a){var i=t[r];return e(i)?null:new p("Invalid "+o+" `"+a+"` of type `"+b(i)+"` supplied to `"+n+"`, expected a single ReactElement.")})),elementType:y((function(e,t,r,o,a){var i=e[t];return n.isValidElementType(i)?null:new p("Invalid "+o+" `"+a+"` of type `"+b(i)+"` supplied to `"+r+"`, expected a single ReactElement type.")})),instanceOf:function(e){return y((function(t,r,n,o,a){if(!(t[r]instanceof e)){var i=e.name||f;return new p("Invalid "+o+" `"+a+"` of type `"+((u=t[r]).constructor&&u.constructor.name?u.constructor.name:f)+"` supplied to `"+n+"`, expected instance of `"+i+"`.")}var u;return null}))},node:y((function(e,t,r,n,o){return h(e[t])?null:new p("Invalid "+n+" `"+o+"` supplied to `"+r+"`, expected a ReactNode.")})),objectOf:function(e){return y((function(t,r,n,o,u){if("function"!==typeof e)return new p("Property `"+u+"` of component `"+n+"` has invalid PropType notation inside objectOf.");var c=t[r],s=b(c);if("object"!==s)return new p("Invalid "+o+" `"+u+"` of type `"+s+"` supplied to `"+n+"`, expected an object.");for(var f in c)if(i(c,f)){var l=e(c,f,n,o,u+"."+f,a);if(l instanceof Error)return l}return null}))},oneOf:function(e){if(!Array.isArray(e))return c(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),s;function t(t,r,n,o,a){for(var i=t[r],u=0;u<e.length;u++)if(d(i,e[u]))return null;var c=JSON.stringify(e,(function(e,t){return"symbol"===g(t)?String(t):t}));return new p("Invalid "+o+" `"+a+"` of value `"+String(i)+"` supplied to `"+n+"`, expected one of "+c+".")}return y(t)},oneOfType:function(e){if(!Array.isArray(e))return c("Invalid argument supplied to oneOfType, expected an instance of array."),s;for(var t=0;t<e.length;t++){var r=e[t];if("function"!==typeof r)return c("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+j(r)+" at index "+t+"."),s}return y((function(t,r,n,o,u){for(var c=[],s=0;s<e.length;s++){var f=(0,e[s])(t,r,n,o,u,a);if(null==f)return null;f.data&&i(f.data,"expectedType")&&c.push(f.data.expectedType)}return new p("Invalid "+o+" `"+u+"` supplied to `"+n+"`"+(c.length>0?", expected one of type ["+c.join(", ")+"]":"")+".")}))},shape:function(e){return y((function(t,r,n,o,i){var u=t[r],c=b(u);if("object"!==c)return new p("Invalid "+o+" `"+i+"` of type `"+c+"` supplied to `"+n+"`, expected `object`.");for(var s in e){var f=e[s];if("function"!==typeof f)return v(n,o,i,s,g(f));var l=f(u,s,n,o,i+"."+s,a);if(l)return l}return null}))},exact:function(e){return y((function(t,r,n,u,c){var s=t[r],f=b(s);if("object"!==f)return new p("Invalid "+u+" `"+c+"` of type `"+f+"` supplied to `"+n+"`, expected `object`.");var l=o({},t[r],e);for(var d in l){var y=e[d];if(i(e,d)&&"function"!==typeof y)return v(n,u,c,d,g(y));if(!y)return new p("Invalid "+u+" `"+c+"` key `"+d+"` supplied to `"+n+"`.\nBad object: "+JSON.stringify(t[r],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var m=y(s,d,n,u,c+"."+d,a);if(m)return m}return null}))}};function d(e,t){return e===t?0!==e||1/e===1/t:e!==e&&t!==t}function p(e,t){this.message=e,this.data=t&&"object"===typeof t?t:{},this.stack=""}function y(e){var r={},n=0;function o(o,i,u,s,l,d,y){if(s=s||f,d=d||u,y!==a){if(t){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}if("undefined"!==typeof console){var v=s+":"+u;!r[v]&&n<3&&(c("You are manually calling a React.PropTypes validation function for the `"+d+"` prop on `"+s+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),r[v]=!0,n++)}}return null==i[u]?o?null===i[u]?new p("The "+l+" `"+d+"` is marked as required in `"+s+"`, but its value is `null`."):new p("The "+l+" `"+d+"` is marked as required in `"+s+"`, but its value is `undefined`."):null:e(i,u,s,l,d)}var i=o.bind(null,!1);return i.isRequired=o.bind(null,!0),i}function m(e){return y((function(t,r,n,o,a,i){var u=t[r];return b(u)!==e?new p("Invalid "+o+" `"+a+"` of type `"+g(u)+"` supplied to `"+n+"`, expected `"+e+"`.",{expectedType:e}):null}))}function v(e,t,r,n,o){return new p((e||"React class")+": "+t+" type `"+r+"."+n+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+o+"`.")}function h(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(h);if(null===t||e(t))return!0;var n=function(e){var t=e&&(r&&e[r]||e["@@iterator"]);if("function"===typeof t)return t}(t);if(!n)return!1;var o,a=n.call(t);if(n!==t.entries){for(;!(o=a.next()).done;)if(!h(o.value))return!1}else for(;!(o=a.next()).done;){var i=o.value;if(i&&!h(i[1]))return!1}return!0;default:return!1}}function b(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"===typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function g(e){if("undefined"===typeof e||null===e)return""+e;var t=b(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function j(e){var t=g(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return p.prototype=Error.prototype,l.checkPropTypes=u,l.resetWarningCache=u.resetWarningCache,l.PropTypes=l,l}},"./node_modules/prop-types/index.js":function(e,t,r){var n=r("./node_modules/react-is/index.js");e.exports=r("./node_modules/prop-types/factoryWithTypeCheckers.js")(n.isElement,!0)},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"./node_modules/prop-types/lib/has.js":function(e){e.exports=Function.call.bind(Object.prototype.hasOwnProperty)},"./node_modules/react-is/cjs/react-is.development.js":function(e,t){"use strict";!function(){var e="function"===typeof Symbol&&Symbol.for,r=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,o=e?Symbol.for("react.fragment"):60107,a=e?Symbol.for("react.strict_mode"):60108,i=e?Symbol.for("react.profiler"):60114,u=e?Symbol.for("react.provider"):60109,c=e?Symbol.for("react.context"):60110,s=e?Symbol.for("react.async_mode"):60111,f=e?Symbol.for("react.concurrent_mode"):60111,l=e?Symbol.for("react.forward_ref"):60112,d=e?Symbol.for("react.suspense"):60113,p=e?Symbol.for("react.suspense_list"):60120,y=e?Symbol.for("react.memo"):60115,m=e?Symbol.for("react.lazy"):60116,v=e?Symbol.for("react.block"):60121,h=e?Symbol.for("react.fundamental"):60117,b=e?Symbol.for("react.responder"):60118,g=e?Symbol.for("react.scope"):60119;function j(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:var p=e.type;switch(p){case s:case f:case o:case i:case a:case d:return p;default:var v=p&&p.$$typeof;switch(v){case c:case l:case m:case y:case u:return v;default:return t}}case n:return t}}}var O=s,x=f,w=c,_=u,S=r,P=l,E=o,C=m,k=y,T=n,M=i,I=a,R=d,$=!1;function A(e){return j(e)===f}t.AsyncMode=O,t.ConcurrentMode=x,t.ContextConsumer=w,t.ContextProvider=_,t.Element=S,t.ForwardRef=P,t.Fragment=E,t.Lazy=C,t.Memo=k,t.Portal=T,t.Profiler=M,t.StrictMode=I,t.Suspense=R,t.isAsyncMode=function(e){return $||($=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),A(e)||j(e)===s},t.isConcurrentMode=A,t.isContextConsumer=function(e){return j(e)===c},t.isContextProvider=function(e){return j(e)===u},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return j(e)===l},t.isFragment=function(e){return j(e)===o},t.isLazy=function(e){return j(e)===m},t.isMemo=function(e){return j(e)===y},t.isPortal=function(e){return j(e)===n},t.isProfiler=function(e){return j(e)===i},t.isStrictMode=function(e){return j(e)===a},t.isSuspense=function(e){return j(e)===d},t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===o||e===f||e===i||e===a||e===d||e===p||"object"===typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===y||e.$$typeof===u||e.$$typeof===c||e.$$typeof===l||e.$$typeof===h||e.$$typeof===b||e.$$typeof===g||e.$$typeof===v)},t.typeOf=j}()},"./node_modules/react-is/index.js":function(e,t,r){"use strict";e.exports=r("./node_modules/react-is/cjs/react-is.development.js")},"./node_modules/shallow-equal/dist/index.esm.js":function(e,t,r){"use strict";function n(e,t){if(e===t)return!0;if(!e||!t)return!1;var r=Object.keys(e),n=Object.keys(t),o=r.length;if(n.length!==o)return!1;for(var a=0;a<o;a++){var i=r[a];if(e[i]!==t[i]||!Object.prototype.hasOwnProperty.call(t,i))return!1}return!0}function o(e,t){if(e===t)return!0;if(!e||!t)return!1;var r=e.length;if(t.length!==r)return!1;for(var n=0;n<r;n++)if(e[n]!==t[n])return!1;return!0}r.r(t),r.d(t,{shallowEqualArrays:function(){return o},shallowEqualObjects:function(){return n}})},"./src/Component.ts":function(e,t,r){"use strict";var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=o(r("./src/useMediaQuery.ts"));t.default=function(e){var t=e.children,r=e.device,o=e.onChange,i=n(e,["children","device","onChange"]),u=(0,a.default)(i,r,o);return"function"===typeof t?t(u):u?t:null}},"./src/Context.ts":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=(0,r("react").createContext)(void 0);t.default=n},"./src/index.ts":function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Context=t.toQuery=t.useMediaQuery=t.default=void 0;var o=n(r("./src/useMediaQuery.ts"));t.useMediaQuery=o.default;var a=n(r("./src/Component.ts"));t.default=a.default;var i=n(r("./src/toQuery.ts"));t.toQuery=i.default;var u=n(r("./src/Context.ts"));t.Context=u.default},"./src/mediaQuery.ts":function(e,t,r){"use strict";var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},n.apply(this,arguments)},o=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=a(r("./node_modules/prop-types/index.js")),u=i.default.oneOfType([i.default.string,i.default.number]),c={all:i.default.bool,grid:i.default.bool,aural:i.default.bool,braille:i.default.bool,handheld:i.default.bool,print:i.default.bool,projection:i.default.bool,screen:i.default.bool,tty:i.default.bool,tv:i.default.bool,embossed:i.default.bool},s={orientation:i.default.oneOf(["portrait","landscape"]),scan:i.default.oneOf(["progressive","interlace"]),aspectRatio:i.default.string,deviceAspectRatio:i.default.string,height:u,deviceHeight:u,width:u,deviceWidth:u,color:i.default.bool,colorIndex:i.default.bool,monochrome:i.default.bool,resolution:u,type:Object.keys(c)},f=o(s,["type"]),l=n({minAspectRatio:i.default.string,maxAspectRatio:i.default.string,minDeviceAspectRatio:i.default.string,maxDeviceAspectRatio:i.default.string,minHeight:u,maxHeight:u,minDeviceHeight:u,maxDeviceHeight:u,minWidth:u,maxWidth:u,minDeviceWidth:u,maxDeviceWidth:u,minColor:i.default.number,maxColor:i.default.number,minColorIndex:i.default.number,maxColorIndex:i.default.number,minMonochrome:i.default.number,maxMonochrome:i.default.number,minResolution:u,maxResolution:u},f),d=n(n({},c),l);t.default={all:d,types:c,matchers:s,features:l}},"./src/toQuery.ts":function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(r("./node_modules/hyphenate-style-name/index.js")),a=n(r("./src/mediaQuery.ts"));t.default=function(e){var t=[];return Object.keys(a.default.all).forEach((function(r){var n=e[r];null!=n&&t.push(function(e,t){var r=(0,o.default)(e);return"number"===typeof t&&(t="".concat(t,"px")),!0===t?r:!1===t?"not ".concat(r):"(".concat(r,": ").concat(t,")")}(r,n))})),t.join(" and ")}},"./src/useMediaQuery.ts":function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r("react"),a=n(r("./node_modules/matchmediaquery/index.js")),i=n(r("./node_modules/hyphenate-style-name/index.js")),u=r("./node_modules/shallow-equal/dist/index.esm.js"),c=n(r("./src/toQuery.ts")),s=n(r("./src/Context.ts")),f=function(e){if(e)return Object.keys(e).reduce((function(t,r){return t[(0,i.default)(r)]=e[r],t}),{})},l=function(){var e=(0,o.useRef)(!1);return(0,o.useEffect)((function(){e.current=!0}),[]),e.current},d=function(e){var t=function(){return function(e){return e.query||(0,c.default)(e)}(e)},r=(0,o.useState)(t),n=r[0],a=r[1];return(0,o.useEffect)((function(){var e=t();n!==e&&a(e)}),[e]),n};t.default=function(e,t,r){var n=function(e){var t=(0,o.useContext)(s.default),r=function(){return f(e)||f(t)},n=(0,o.useState)(r),a=n[0],i=n[1];return(0,o.useEffect)((function(){var e=r();(0,u.shallowEqualObjects)(a,e)||i(e)}),[e,t]),a}(t),i=d(e);if(!i)throw new Error("Invalid or missing MediaQuery!");var c=function(e,t){var r=function(){return(0,a.default)(e,t||{},!!t)},n=(0,o.useState)(r),i=n[0],u=n[1],c=l();return(0,o.useEffect)((function(){if(c){var e=r();return u(e),function(){e&&e.dispose()}}}),[e,t]),i}(i,n),p=function(e){var t=(0,o.useState)(e.matches),r=t[0],n=t[1];return(0,o.useEffect)((function(){var t=function(e){n(e.matches)};return e.addListener(t),n(e.matches),function(){e.removeListener(t)}}),[e]),r}(c),y=l();return(0,o.useEffect)((function(){y&&r&&r(p)}),[p]),(0,o.useEffect)((function(){return function(){c&&c.dispose()}}),[]),p}},react:function(t){"use strict";t.exports=e}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var a=r[e]={exports:{}};return t[e].call(a.exports,a,a.exports,n),a.exports}return n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n("./src/index.ts")}()},e.exports=n(r(791))},71:function(e,t,r){"use strict";r.d(t,{Zf_:function(){return m},AGi:function(){return v},MJj:function(){return h}});var n=r(791),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=n.createContext&&n.createContext(o),i=["attr","size","title"];function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c.apply(this,arguments)}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e){return e&&e.map((function(e,t){return n.createElement(e.tag,f({key:t},e.attr),d(e.child))}))}function p(e){return function(t){return n.createElement(y,c({attr:f({},e.attr)},t),d(e.child))}}function y(e){var t=function(t){var r,o=e.attr,a=e.size,s=e.title,l=u(e,i),d=a||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,l,{className:r,style:f(f({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),s&&n.createElement("title",null,s),e.children)};return void 0!==a?n.createElement(a.Consumer,null,(function(e){return t(e)})):t(o)}function m(e){return p({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(e)}function v(e){return p({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"},child:[]}]})(e)}function h(e){return p({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M444 49.9C431.3 38.2 379.9.9 265.3.4c0 0-135.1-8.1-200.9 52.3C27.8 89.3 14.9 143 13.5 209.5c-1.4 66.5-3.1 191.1 117 224.9h.1l-.1 51.6s-.8 20.9 13 25.1c16.6 5.2 26.4-10.7 42.3-27.8 8.7-9.4 20.7-23.2 29.8-33.7 82.2 6.9 145.3-8.9 152.5-11.2 16.6-5.4 110.5-17.4 125.7-142 15.8-128.6-7.6-209.8-49.8-246.5zM457.9 287c-12.9 104-89 110.6-103 115.1-6 1.9-61.5 15.7-131.2 11.2 0 0-52 62.7-68.2 79-5.3 5.3-11.1 4.8-11-5.7 0-6.9.4-85.7.4-85.7-.1 0-.1 0 0 0-101.8-28.2-95.8-134.3-94.7-189.8 1.1-55.5 11.6-101 42.6-131.6 55.7-50.5 170.4-43 170.4-43 96.9.4 143.3 29.6 154.1 39.4 35.7 30.6 53.9 103.8 40.6 211.1zm-139-80.8c.4 8.6-12.5 9.2-12.9.6-1.1-22-11.4-32.7-32.6-33.9-8.6-.5-7.8-13.4.7-12.9 27.9 1.5 43.4 17.5 44.8 46.2zm20.3 11.3c1-42.4-25.5-75.6-75.8-79.3-8.5-.6-7.6-13.5.9-12.9 58 4.2 88.9 44.1 87.8 92.5-.1 8.6-13.1 8.2-12.9-.3zm47 13.4c.1 8.6-12.9 8.7-12.9.1-.6-81.5-54.9-125.9-120.8-126.4-8.5-.1-8.5-12.9 0-12.9 73.7.5 133 51.4 133.7 139.2zM374.9 329v.2c-10.8 19-31 40-51.8 33.3l-.2-.3c-21.1-5.9-70.8-31.5-102.2-56.5-16.2-12.8-31-27.9-42.4-42.4-10.3-12.9-20.7-28.2-30.8-46.6-21.3-38.5-26-55.7-26-55.7-6.7-20.8 14.2-41 33.3-51.8h.2c9.2-4.8 18-3.2 23.9 3.9 0 0 12.4 14.8 17.7 22.1 5 6.8 11.7 17.7 15.2 23.8 6.1 10.9 2.3 22-3.7 26.6l-12 9.6c-6.1 4.9-5.3 14-5.3 14s17.8 67.3 84.3 84.3c0 0 9.1.8 14-5.3l9.6-12c4.6-6 15.7-9.8 26.6-3.7 14.7 8.3 33.4 21.2 45.8 32.9 7 5.7 8.6 14.4 3.8 23.6z"},child:[]}]})(e)}}}]);
//# sourceMappingURL=445.ed01820c.chunk.js.map