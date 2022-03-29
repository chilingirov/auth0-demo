(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{3525:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.withPageAuthRequired=t.useUser=t.UserContext=t.UserProvider=t.useConfig=t.ConfigProvider=void 0;var o=r(1865);Object.defineProperty(t,"ConfigProvider",{enumerable:!0,get:function(){return n(o).default}}),Object.defineProperty(t,"useConfig",{enumerable:!0,get:function(){return o.useConfig}});var i=r(638);Object.defineProperty(t,"UserProvider",{enumerable:!0,get:function(){return n(i).default}}),Object.defineProperty(t,"UserContext",{enumerable:!0,get:function(){return i.UserContext}}),Object.defineProperty(t,"useUser",{enumerable:!0,get:function(){return i.useUser}});var u=r(8896);Object.defineProperty(t,"withPageAuthRequired",{enumerable:!0,get:function(){return n(u).default}})},1865:function(e,t,r){"use strict";var n=r(3454);Object.defineProperty(t,"__esModule",{value:!0}),t.useConfig=void 0;var o=r(8428).__importStar(r(7294)),i=o.createContext({});t.useConfig=function(){return o.useContext(i)},t.default=function(e){var t=e.children,r=e.loginUrl,u=void 0===r?n.env.NEXT_PUBLIC_AUTH0_LOGIN||"/api/auth/login":r;return o.default.createElement(i.Provider,{value:{loginUrl:u}},t)}},638:function(e,t,r){"use strict";var n=r(3454);Object.defineProperty(t,"__esModule",{value:!0}),t.useUser=t.UserContext=void 0;var o=r(8428),i=o.__importStar(r(7294)),u=o.__importDefault(r(1865)),a="You forgot to wrap your app in <UserProvider>";t.UserContext=i.createContext({get user(){throw new Error(a)},get error(){throw new Error(a)},get isLoading(){throw new Error(a)},checkSession:function(){throw new Error(a)}});t.useUser=function(){return i.useContext(t.UserContext)};var c=function(e){return o.__awaiter(void 0,void 0,void 0,(function(){var t;return o.__generator(this,(function(r){switch(r.label){case 0:return[4,fetch(e)];case 1:return[2,(t=r.sent()).ok?t.json():void 0]}}))}))};t.default=function(e){var r=e.children,a=e.user,f=e.profileUrl,l=void 0===f?n.env.NEXT_PUBLIC_AUTH0_PROFILE||"/api/auth/me":f,s=e.loginUrl,d=e.fetcher,p=void 0===d?c:d,h=o.__read(i.useState({user:a,isLoading:!a}),2),v=h[0],y=h[1],_=i.useCallback((function(){return o.__awaiter(void 0,void 0,void 0,(function(){var e,t;return o.__generator(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,p(l)];case 1:return e=r.sent(),y((function(t){return o.__assign(o.__assign({},t),{user:e,error:void 0})})),[3,3];case 2:return r.sent(),t=new Error("The request to "+l+" failed"),y((function(e){return o.__assign(o.__assign({},e),{user:void 0,error:t})})),[3,3];case 3:return[2]}}))}))}),[l]);i.useEffect((function(){v.user||o.__awaiter(void 0,void 0,void 0,(function(){return o.__generator(this,(function(e){switch(e.label){case 0:return[4,_()];case 1:return e.sent(),y((function(e){return o.__assign(o.__assign({},e),{isLoading:!1})})),[2]}}))}))}),[v.user]);var w=v.user,b=v.error,g=v.isLoading;return i.default.createElement(u.default,{loginUrl:s},i.default.createElement(t.UserContext.Provider,{value:{user:w,error:b,isLoading:g,checkSession:_}},r))}},8896:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(8428),o=n.__importStar(r(7294)),i=r(1865),u=r(638),a=function(){return o.default.createElement(o.default.Fragment,null)},c=function(){return o.default.createElement(o.default.Fragment,null)};t.default=function(e,t){return void 0===t&&(t={}),function(r){var f=t.returnTo,l=t.onRedirecting,s=void 0===l?a:l,d=t.onError,p=void 0===d?c:d,h=i.useConfig().loginUrl,v=u.useUser(),y=v.user,_=v.error,w=v.isLoading;return o.useEffect((function(){if(!(y&&!_||w)){var e;if(f)e=f;else{var t=window.location.toString();e=t.replace(new URL(t).origin,"")||"/"}window.location.assign(h+"?returnTo="+encodeURIComponent(e))}}),[y,_,w]),_?p(_):y?o.default.createElement(e,n.__assign({user:y},r)):s()}}},4713:function(e,t,r){"use strict";t.aF=t.dr=void 0;var n=r(8428),o=r(3525);Object.defineProperty(t,"dr",{enumerable:!0,get:function(){return o.UserProvider}}),Object.defineProperty(t,"aF",{enumerable:!0,get:function(){return o.useUser}});var i=function(e){return"The "+e+" method can only be used from the server side"},u={getSession:function(){throw new Error(i("getSession"))},getAccessToken:function(){throw new Error(i("getAccessToken"))},withApiAuthRequired:function(){throw new Error(i("withApiAuthRequired"))},handleLogin:function(){throw new Error(i("handleLogin"))},handleLogout:function(){throw new Error(i("handleLogout"))},handleCallback:function(){throw new Error(i("handleCallback"))},handleProfile:function(){throw new Error(i("handleProfile"))},handleAuth:function(){throw new Error(i("handleAuth"))},withPageAuthRequired:function(){throw new Error(i("withPageAuthRequired"))}}},8428:function(e,t,r){"use strict";r.r(t),r.d(t,{__extends:function(){return o},__assign:function(){return i},__rest:function(){return u},__decorate:function(){return a},__param:function(){return c},__metadata:function(){return f},__awaiter:function(){return l},__generator:function(){return s},__createBinding:function(){return d},__exportStar:function(){return p},__values:function(){return h},__read:function(){return v},__spread:function(){return y},__spreadArrays:function(){return _},__spreadArray:function(){return w},__await:function(){return b},__asyncGenerator:function(){return g},__asyncDelegator:function(){return m},__asyncValues:function(){return P},__makeTemplateObject:function(){return O},__importStar:function(){return j},__importDefault:function(){return T},__classPrivateFieldGet:function(){return x},__classPrivateFieldSet:function(){return S}});var n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},n(e,t)};function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var i=function(){return i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},i.apply(this,arguments)};function u(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}function a(e,t,r,n){var o,i=arguments.length,u=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)u=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(u=(i<3?o(u):i>3?o(t,r,u):o(t,r))||u);return i>3&&u&&Object.defineProperty(t,r,u),u}function c(e,t){return function(r,n){t(r,n,e)}}function f(e,t){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(e,t)}function l(e,t,r,n){return new(r||(r=Promise))((function(o,i){function u(e){try{c(n.next(e))}catch(t){i(t)}}function a(e){try{c(n.throw(e))}catch(t){i(t)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(u,a)}c((n=n.apply(e,t||[])).next())}))}function s(e,t){var r,n,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;u;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,n=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(e,u)}catch(a){i=[6,a],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}}var d=Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]};function p(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||d(t,e,r)}function h(e){var t="function"===typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"===typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function v(e,t){var r="function"===typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,i=r.call(e),u=[];try{for(;(void 0===t||t-- >0)&&!(n=i.next()).done;)u.push(n.value)}catch(a){o={error:a}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return u}function y(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(v(arguments[t]));return e}function _(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),o=0;for(t=0;t<r;t++)for(var i=arguments[t],u=0,a=i.length;u<a;u++,o++)n[o]=i[u];return n}function w(e,t,r){if(r||2===arguments.length)for(var n,o=0,i=t.length;o<i;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))}function b(e){return this instanceof b?(this.v=e,this):new b(e)}function g(e,t,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,o=r.apply(e,t||[]),i=[];return n={},u("next"),u("throw"),u("return"),n[Symbol.asyncIterator]=function(){return this},n;function u(e){o[e]&&(n[e]=function(t){return new Promise((function(r,n){i.push([e,t,r,n])>1||a(e,t)}))})}function a(e,t){try{(r=o[e](t)).value instanceof b?Promise.resolve(r.value.v).then(c,f):l(i[0][2],r)}catch(n){l(i[0][3],n)}var r}function c(e){a("next",e)}function f(e){a("throw",e)}function l(e,t){e(t),i.shift(),i.length&&a(i[0][0],i[0][1])}}function m(e){var t,r;return t={},n("next"),n("throw",(function(e){throw e})),n("return"),t[Symbol.iterator]=function(){return this},t;function n(n,o){t[n]=e[n]?function(t){return(r=!r)?{value:b(e[n](t)),done:"return"===n}:o?o(t):t}:o}}function P(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,r=e[Symbol.asyncIterator];return r?r.call(e):(e=h(e),t={},n("next"),n("throw"),n("return"),t[Symbol.asyncIterator]=function(){return this},t);function n(r){t[r]=e[r]&&function(t){return new Promise((function(n,o){(function(e,t,r,n){Promise.resolve(n).then((function(t){e({value:t,done:r})}),t)})(n,o,(t=e[r](t)).done,t.value)}))}}}function O(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var E=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};function j(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&d(t,e,r);return E(t,e),t}function T(e){return e&&e.__esModule?e:{default:e}}function x(e,t,r,n){if("a"===r&&!n)throw new TypeError("Private accessor was defined without a getter");if("function"===typeof t?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?n:"a"===r?n.call(e):n?n.value:t.get(e)}function S(e,t,r,n,o){if("m"===n)throw new TypeError("Private method is not writable");if("a"===n&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"===typeof t?e!==t||!o:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===n?o.call(e,r):o?o.value=r:t.set(e,r),r}},3454:function(e,t,r){"use strict";var n,o;e.exports=(null===(n=r.g.process)||void 0===n?void 0:n.env)&&"object"===typeof(null===(o=r.g.process)||void 0===o?void 0:o.env)?r.g.process:r(7663)},1780:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(8484)}])},8484:function(e,t,r){"use strict";r.r(t);var n=r(5893),o=r(4713);r(6774);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){i(e,t,r[t])}))}return e}t.default=function(e){var t=e.Component,r=e.pageProps;return(0,n.jsx)(o.dr,{children:(0,n.jsx)(t,u({},r))})}},6774:function(){},7663:function(e){!function(){var t={162:function(e){var t,r,n=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function u(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:o}catch(e){t=o}try{r="function"===typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var a,c=[],f=!1,l=-1;function s(){f&&a&&(f=!1,a.length?c=a.concat(c):l=-1,c.length&&d())}function d(){if(!f){var e=u(s);f=!0;for(var t=c.length;t;){for(a=c,c=[];++l<t;)a&&a[l].run();l=-1,t=c.length}a=null,f=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function h(){}n.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];c.push(new p(e,t)),1!==c.length||f||u(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=h,n.addListener=h,n.once=h,n.off=h,n.removeListener=h,n.removeAllListeners=h,n.emit=h,n.prependListener=h,n.prependOnceListener=h,n.listeners=function(e){return[]},n.binding=function(e){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(e){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}},u=!0;try{t[e](i,i.exports,n),u=!1}finally{u&&delete r[e]}return i.exports}n.ab="//";var o=n(162);e.exports=o}()}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(1780),t(880)}));var r=e.O();_N_E=r}]);