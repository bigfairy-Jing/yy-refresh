!function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=21)}([function(t,e,n){"use strict";function i(t,e,n,i,o,r,a,s,u,c){var l,f="function"==typeof t?t.options:t;if(u&&(f.components=Object.assign(u,f.components||{})),c&&((c.beforeCreate||(c.beforeCreate=[])).unshift(function(){this[c.__module]=this}),(f.mixins||(f.mixins=[])).push(c)),e&&(f.render=e,f.staticRenderFns=n,f._compiled=!0),i&&(f.functional=!0),r&&(f._scopeId="data-v-"+r),a?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},f._ssrRegister=l):o&&(l=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),l)if(f.functional){f._injectStyles=l;var p=f.render;f.render=function(t,e){return l.call(e),p(t,e)}}else{var d=f.beforeCreate;f.beforeCreate=d?[].concat(d,l):[l]}return{exports:t,options:f}}n.d(e,"a",function(){return i})},function(t,e,n){"use strict";var i;Object.defineProperty(e,"__esModule",{value:!0}),e.weexPlus=e.default=void 0,i="function"==typeof getUni?getUni:function(){var t=function(t){return"function"==typeof t},e=/^\$|^on|^create|Sync$|Manager$|^pause/,n=["os","getCurrentSubNVue","getSubNVueById","stopRecord","stopVoice","stopBackgroundAudio","stopPullDownRefresh","hideKeyboard","hideToast","hideLoading","showNavigationBarLoading","hideNavigationBarLoading","canIUse","navigateBack","closeSocket","pageScrollTo","drawCanvas"],i=function(t){return!(e.test(t)&&"createBLEConnection"!==t||~n.indexOf(t))},r=function(e){return function(){for(var n=arguments.length,i=Array(n>1?n-1:0),o=1;o<n;o++)i[o-1]=arguments[o];var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t(r.success)||t(r.fail)||t(r.complete)?e.apply(void 0,[r].concat(i)):new Promise(function(t,n){e.apply(void 0,[Object.assign({},r,{success:t,fail:n})].concat(i)),Promise.prototype.finally=function(t){var e=this.constructor;return this.then(function(n){return e.resolve(t()).then(function(){return n})},function(n){return e.resolve(t()).then(function(){throw n})})}}).then(function(t){return[null,t]}).catch(function(t){return[t]})}},a=[],s=void 0;function u(t){a.forEach(function(e){return e({origin:s,data:t})})}var c=o.webview.currentWebview().id,l=new BroadcastChannel("UNI-APP-SUBNVUE");function f(t){t.$processed=!0;var e=o.webview.currentWebview().id===t.id,n="uniNView"===t.__uniapp_origin_type&&t.__uniapp_origin_id,i=t.id;if(t.postMessage=function(t){n?l.postMessage({data:t,to:e?n:i}):S({type:"UniAppSubNVue",data:t})},t.onMessage=function(t){a.push(t)},t.__uniapp_mask_id){s=t.__uniapp_host;var r=t.__uniapp_mask,u=o.webview.getWebviewById(t.__uniapp_mask_id);u=u.parent()||u;var c=t.show,f=t.hide,p=t.close,d=function(){u.setStyle({mask:"none"})};t.show=function(){u.setStyle({mask:r});for(var e=arguments.length,n=Array(e),i=0;i<e;i++)n[i]=arguments[i];return c.apply(t,n)},t.hide=function(){d();for(var e=arguments.length,n=Array(e),i=0;i<e;i++)n[i]=arguments[i];return f.apply(t,n)},t.close=function(){d();for(var e=arguments.length,n=Array(e),i=0;i<e;i++)n[i]=arguments[i];return p.apply(t,n)}}}function p(t){var e=o.webview.getWebviewById(t);return e&&!e.$processed&&f(e),e}l.onmessage=function(t){t.data.to===c&&u(t.data.data)};var d=weex.requireModule("plus"),h=weex.requireModule("globalEvent"),g=0,y={},v="__uniapp__service";h.addEventListener("plusMessage",function(t){"UniAppJsApi"===t.data.type?_(t.data.id,t.data.data):"UniAppSubNVue"===t.data.type?u(t.data.data,t.data.options):"onNavigationBarButtonTap"===t.data.type?"function"==typeof w&&w(t.data.data):"onNavigationBarSearchInputChanged"===t.data.type?"function"==typeof T&&T(t.data.data):"onNavigationBarSearchInputConfirmed"===t.data.type?"function"==typeof D&&D(t.data.data):"onNavigationBarSearchInputClicked"===t.data.type&&"function"==typeof k&&k(t.data.data)});var _=function(t,e){var n=y[t];n?(n(e),n.keepAlive||delete y[t]):console.error("callback["+t+"] is undefined")},m=function(e){var n,i,o=e.id,r=e.type,a=e.params;y[o]=(i=function(e){t(n)?n(e):n&&(~e.errMsg.indexOf(":ok")?t(n.success)&&n.success(e):~e.errMsg.indexOf(":fail")&&t(n.fail)&&n.fail(e),t(n.complete)&&n.complete(e))},(t(n=a)||n&&t(n.callback))&&(i.keepAlive=!0),i),d.postMessage({id:o,type:r,params:a},v)};function S(t){d.postMessage(t,v)}var b=function(t){return function(e){m({id:g++,type:t,params:e})}},w=void 0,T=void 0,D=void 0,k=void 0;function I(t){w=t}function x(t){T=t}function N(t){D=t}function O(t){k=t}function M(t){return weex.requireModule(t)}var C=weex.requireModule("dom"),j=weex.requireModule("globalEvent"),$=[];function R(t){"function"==typeof t&&(this.isUniAppReady?t():$.push(t))}j.addEventListener("plusMessage",function(t){"UniAppReady"===t.data.type&&(R.isUniAppReady=!0,$.length&&($.forEach(function(t){return t()}),$=[]))});var q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},P=weex.requireModule("stream"),V="GET",A=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:V,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"application/x-www-form-urlencoded";return"object"===(void 0===t?"undefined":q(t))?"POST"===e.toUpperCase()&&"application/json"===n.toLowerCase()?JSON.stringify(t):Object.keys(t).map(function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])}).join("&"):t},E=weex.requireModule("plusstorage"),B="__TYPE",L=weex.requireModule("clipboard"),U=function(){if("function"==typeof getUniEmitter)return getUniEmitter;var t={$on:function(){console.warn("uni.$on failed")},$off:function(){console.warn("uni.$off failed")},$once:function(){console.warn("uni.$once failed")},$emit:function(){console.warn("uni.$emit failed")}};return function(){return t}}();function H(t,e,n){return t[e].apply(t,n)}var W=Object.freeze({loadFontFace:function(e){var n=e.family,i=e.source,o=(e.desc,e.success),r=(e.fail,e.complete);C.addRule("fontFace",{fontFamily:n,src:i.replace(/"/g,"'")});var a={errMsg:"loadFontFace:ok",status:"loaded"};t(o)&&o(a),t(r)&&r(a)},ready:R,request:function(e){var n=e.url,i=e.data,o=e.header,r=e.method,a=void 0===r?"GET":r,s=e.dataType,u=void 0===s?"json":s,c=(e.responseType,e.success),l=e.fail,f=e.complete,p=!1,d=!1,h={};if(o)for(var g in o)d||"content-type"!==g.toLowerCase()?h[g]=o[g]:(d=!0,h["Content-Type"]=o[g]);return a===V&&i&&(n=n+(~n.indexOf("?")?"&"===n.substr(-1)||"?"===n.substr(-1)?"":"&":"?")+A(i)),P.fetch({url:n,method:a,headers:h,type:"json"===u?"json":"text",body:a!==V?A(i,a,h["Content-Type"]):""},function(e){var n=e.status,i=(e.ok,e.statusText,e.data),o=e.headers,r={};!n||-1===n||p?(r.errMsg="request:fail",t(l)&&l(r)):(r.data=i,r.statusCode=n,r.header=o,t(c)&&c(r)),t(f)&&f(r)}),{abort:function(){p=!0}}},getStorage:function(e){var n=e.key,i=(e.data,e.success),o=e.fail,r=e.complete;E.getItem(n+B,function(e){if("success"===e.result){var a=e.data;E.getItem(n,function(e){if("success"===e.result){var n=e.data;a&&n?("String"!==a&&(n=JSON.parse(n)),t(i)&&i({errMsg:"getStorage:ok",data:n})):(e.errMsg="setStorage:fail",t(o)&&o(e))}else e.errMsg="setStorage:fail",t(o)&&o(e);t(r)&&r(e)})}else e.errMsg="setStorage:fail",t(o)&&o(e),t(r)&&r(e)})},setStorage:function(e){var n=e.key,i=e.data,o=e.success,r=e.fail,a=e.complete,s="String";"object"===(void 0===i?"undefined":q(i))&&(s="Object",i=JSON.stringify(i)),E.setItem(n,i,function(e){"success"===e.result?E.setItem(n+B,s,function(e){"success"===e.result?t(o)&&o({errMsg:"setStorage:ok"}):(e.errMsg="setStorage:fail",t(r)&&r(e))}):(e.errMsg="setStorage:fail",t(r)&&r(e)),t(a)&&a(e)})},removeStorage:function(e){var n=e.key,i=(e.data,e.success),o=e.fail,r=e.complete;E.removeItem(n,function(e){"success"===e.result?t(i)&&i({errMsg:"removeStorage:ok"}):(e.errMsg="removeStorage:fail",t(o)&&o(e)),t(r)&&r(e)}),E.removeItem(n+B)},clearStorage:function(t){t.key,t.data,t.success,t.fail,t.complete},getClipboardData:function(e){var n=e.success,i=(e.fail,e.complete);L.getString(function(e){var o={errMsg:"getClipboardData:ok",data:e.data};t(n)&&n(o),t(i)&&i(o)})},setClipboardData:function(e){var n=e.data,i=e.success,o=(e.fail,e.complete),r={errMsg:"setClipboardData:ok"};L.setString(n),t(i)&&i(r),t(o)&&o(r)},onSubNVueMessage:u,getSubNVueById:p,getCurrentSubNVue:function(){return p(o.webview.currentWebview().id)},$on:function(){return H(U(),"$on",[].concat(Array.prototype.slice.call(arguments)))},$off:function(){return H(U(),"$off",[].concat(Array.prototype.slice.call(arguments)))},$once:function(){return H(U(),"$once",[].concat(Array.prototype.slice.call(arguments)))},$emit:function(){return H(U(),"$emit",[].concat(Array.prototype.slice.call(arguments)))}}),J={os:{nvue:!0}},F={};return"undefined"!=typeof Proxy?F=new Proxy({},{get:function(t,e){if("os"===e)return{nvue:!0};if("postMessage"===e)return S;if("requireNativePlugin"===e)return M;if("onNavigationBarButtonTap"===e)return I;if("onNavigationBarSearchInputChanged"===e)return x;if("onNavigationBarSearchInputConfirmed"===e)return N;if("onNavigationBarSearchInputClicked"===e)return O;var n=W[e];return n||(n=b(e)),i(e)?r(n):n}}):(Object.keys(J).forEach(function(t){F[t]=J[t]}),F.postMessage=S,F.requireNativePlugin=M,F.onNavigationBarButtonTap=I,F.onNavigationBarSearchInputChanged=x,F.onNavigationBarSearchInputConfirmed=N,F.onNavigationBarSearchInputClicked=O,Object.keys({uploadFile:!0,downloadFile:!0,chooseImage:!0,previewImage:!0,getImageInfo:!0,saveImageToPhotosAlbum:!0,chooseVideo:!0,saveVideoToPhotosAlbum:!0,saveFile:!0,getSavedFileList:!0,getSavedFileInfo:!0,removeSavedFile:!0,openDocument:!0,setStorage:!0,getStorage:!0,getStorageInfo:!0,removeStorage:!0,clearStorage:!0,getLocation:!0,chooseLocation:!0,openLocation:!0,getSystemInfo:!0,getNetworkType:!0,makePhoneCall:!0,scanCode:!0,setScreenBrightness:!0,getScreenBrightness:!0,setKeepScreenOn:!0,vibrateLong:!0,vibrateShort:!0,addPhoneContact:!0,showToast:!0,showLoading:!0,hideToast:!0,hideLoading:!0,showModal:!0,showActionSheet:!0,setNavigationBarTitle:!0,setNavigationBarColor:!0,navigateTo:!0,redirectTo:!0,reLaunch:!0,switchTab:!0,navigateBack:!0,getProvider:!0,login:!0,getUserInfo:!0,share:!0,requestPayment:!0,subscribePush:!0,unsubscribePush:!0,onPush:!0,offPush:!0}).forEach(function(t){var e=W[t];e||(e=b(t)),i(t)?F[t]=r(e):F[t]=e})),F};var o=new WeexPlus(weex);e.weexPlus=o;var r=i(weex,o,BroadcastChannel);e.default=r},function(t,e,n){"use strict";var i=n(13),o=n(7),r=n(0);var a=Object(r.a)(o.default,i.b,i.c,!1,null,null,"6df66ba2",!1,i.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(n(20).default,this.options.style):Object.assign(this.options.style,n(20).default)}).call(a),e.default=a.exports},function(t,e){t.exports={}},function(t,e,n){"use strict";n.r(e);var i=n(5),o=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);e.default=o.a},function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{refreshText:{type:Array,default:["下拉刷新","释放更新","刷新中...","刷新成功"]}},data:function(){return{refreshStatus:0,refreshing:!1,screenWidth:750,loadingIcon:["/static/yy-refresh/arrow-down.png","/static/yy-refresh/arrow-up.png","/static/yy-refresh/loading.gif","/static/yy-refresh/refresh-ok.png"]}},created:function(){this.screenWidth=t.getSystemInfoSync().windowWidth},watch:{refreshStatus:function(t){this.refreshing=2==t}},methods:{onPullingDown:function(t){var e=t.viewHeight,n=t.pullingDistance;this.refreshStatus=e<n?1:0},onRefresh:function(){this.refreshStatus=2,this.$emit("refresh")},finish:function(){this.refreshStatus=3}}};e.default=n}).call(this,n(1).default)},function(t,e){t.exports={"refresh-div":{height:"60",flexDirection:"row",justifyContent:"center",alignItems:"center"},"loading-icon":{width:"16",height:"16"},"refresh-div-text":{fontSize:"14",color:"#999999",lineHeight:"60",textAlign:"center",marginLeft:"5"}}},function(t,e,n){"use strict";var i=n(8),o=n.n(i);e.default=o.a},function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(n(17)),o=r(n(28));function r(t){return t&&t.__esModule?t:{default:t}}var a={components:{yyRefresh:i.default,yyLoadMore:o.default},data:function(){return{screenHeight:1080,screenWidth:750,refreshText:["下拉刷新","释放更新","刷新中...","刷新成功"],loadMoreText:["","加载中...","没有更多啦"],testData:20}},onLoad:function(){this.screenWidth=t.getSystemInfoSync().windowWidth,this.screenHeight=t.getSystemInfoSync().windowHeight},methods:{onRefresh:function(){var t=this;setTimeout(function(){t.testData=20,t.$refs.yyRefresh.finish()},1e3)},onLoadMore:function(){var t=this;setTimeout(function(){t.testData>20?t.$refs.yyLoadMore.finish(!1):(t.testData+=10,t.$refs.yyLoadMore.finish(!0))},1e3)}}};e.default=a}).call(this,n(1).default)},function(t,e,n){"use strict";n.r(e);var i=n(10),o=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);e.default=o.a},function(t,e,n){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{loadingText:{type:Array,default:["","加载中...","没有更多啦"]}},data:function(){return{loadMoreStatus:0,loading:!1,screenWidth:750,loadingIcon:["","/static/yy-refresh/loading.gif",""]}},watch:{loading:function(e){t("log",e," at components/yy-refresh/yy-load-more.nvue:31")}},created:function(){this.screenWidth=n.getSystemInfoSync().windowWidth},methods:{onLoading:function(){this.loadMoreStatus=1,this.loading=!0,this.$emit("loadMore")},finish:function(t){var e=this;this.loadMoreStatus=t?1:2,setTimeout(function(){e.loadMoreStatus=0,e.loading=!1},500)}}};e.default=i}).call(this,n(29).default,n(1).default)},function(t,e){t.exports={"load-more-div":{height:"60",flexDirection:"row",justifyContent:"center",alignItems:"center"},"loading-icon":{width:"16",height:"16"},"load-more-div-text":{fontSize:"14",color:"#999999",lineHeight:"60",textAlign:"center",marginLeft:"5"}}},function(t,e){t.exports={content:{flexDirection:"column",alignItems:"center",justifyContent:"center"},list:{flexDirection:"column"},"list-item":{alignItems:"center",justifyContent:"center"}}},function(t,e,n){"use strict";var i={"yy-refresh":n(17).default},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("scroll-view",{staticStyle:{flexDirection:"column"},attrs:{scrollY:!0,enableBackToTop:!0,bubble:"true"}},[n("div",{staticClass:["content"]},[n("list",{staticClass:["list"],style:{height:t.screenHeight,width:t.screenWidth}},[n("yy-refresh",{ref:"yyRefresh",attrs:{refreshText:t.refreshText},on:{refresh:t.onRefresh}}),t._l(t.testData,function(e,i){return n("cell",{key:i,staticClass:["list-item"],appendAsTree:!0,attrs:{append:"tree"}},[n("u-text",{staticStyle:{lineHeight:"30px"}},[t._v(t._s(e))])])}),n("yy-load-more",{ref:"yyLoadMore",attrs:{loadingText:t.loadMoreText},on:{loadMore:t.onLoadMore}})],2)])])},r=[];n.d(e,"b",function(){return o}),n.d(e,"c",function(){return r}),n.d(e,"a",function(){return i})},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("refresh",{staticClass:["refresh-div"],style:{width:t.screenWidth},attrs:{id:"refresh",display:t.refreshing?"show":"hide"},on:{refresh:t.onRefresh,pullingdown:t.onPullingDown}},[n("u-image",{staticClass:["loading-icon"],attrs:{src:t.loadingIcon[t.refreshStatus]}}),n("u-text",{staticClass:["refresh-div-text"]},[t._v(t._s(t.refreshText[t.refreshStatus]))])],1)},o=[];n.d(e,"b",function(){return i}),n.d(e,"c",function(){return o}),n.d(e,"a",function(){})},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("loading",{staticClass:["load-more-div"],staticStyle:{height:"50px"},style:{width:t.screenWidth},attrs:{id:"loading",display:t.loading?"show":"hide"},on:{loading:t.onLoading}},[n("u-image",{staticClass:["loading-icon"],attrs:{src:t.loadingIcon[t.loadMoreStatus]}}),n("u-text",{staticClass:["load-more-div-text"]},[t._v(t._s(t.loadingText[t.loadMoreStatus]))])],1)},o=[];n.d(e,"b",function(){return i}),n.d(e,"c",function(){return o}),n.d(e,"a",function(){})},function(t,e,n){"use strict";n.r(e),e.default={appid:"__UNI__8C0EE8A"}},function(t,e,n){"use strict";n.r(e);var i=n(14),o=n(4);for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);var a=n(0);var s=Object(a.a)(o.default,i.b,i.c,!1,null,null,"74265cfa",!1,i.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(n(18).default,this.options.style):Object.assign(this.options.style,n(18).default)}).call(s),e.default=s.exports},function(t,e,n){"use strict";n.r(e);var i=n(6),o=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);e.default=o.a},function(t,e,n){"use strict";n.r(e);var i=n(11),o=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);e.default=o.a},function(t,e,n){"use strict";n.r(e);var i=n(12),o=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);e.default=o.a},function(t,e,n){"use strict";n.r(e);n(22),n(26);var i=n(2);i.default.mpType="page",i.default.route="pages/index/index",i.default.el="#root",new Vue(i.default)},function(t,e,n){"use strict";(function(t,e){function i(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function o(t){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function u(t,e,n){return e&&s(t.prototype,e),n&&s(t,n),t}var c=n(23).version,l="__DC_STAT_UUID",f="__DC_UUID_VALUE";function p(){var n="";if("n"===g()){try{n=t.runtime.getDCloudId()}catch(t){n=""}return n}try{n=e.getStorageSync(l)}catch(t){n=f}if(!n){n=Date.now()+""+Math.floor(1e7*Math.random());try{e.setStorageSync(l,n)}catch(t){e.setStorageSync(l,f)}}return n}var d,h=function(){return parseInt((new Date).getTime()/1e3)},g=function(){return"n"},y=function(){var t="";return"wx"!==g()&&"qq"!==g()||e.canIUse("getAccountInfoSync")&&(t=e.getAccountInfoSync().miniProgram.appId||""),t},v=function(){return"n"===g()?t.runtime.version:""},_=function(){var e="";return"n"===g()&&(e=t.runtime.channel),e},m=0,S=0,b=function(){return m=h(),"n"===g()&&e.setStorageSync("__page__residence__time",h()),m},w=0,T=0,D=function(){var t=(new Date).getTime();return w=t,T=0,t},k=function(){var t=(new Date).getTime();return T=t,t},I=function(t){var e=0;return 0!==w&&(e=T-w),e=(e=parseInt(e/1e3))<1?1:e,"app"===t?{residenceTime:e,overtime:e>300}:"page"===t?{residenceTime:e,overtime:e>1800}:{residenceTime:e}},x=function(t){var e=getCurrentPages(),n=e[e.length-1].$vm,i=t._query,o=i&&"{}"!==JSON.stringify(i)?"?"+JSON.stringify(i):"";return t._query="","bd"===g()?n.$mp&&n.$mp.page.is+o:n.$scope&&n.$scope.route+o||n.$mp&&n.$mp.page.route+o},N=function(t){return!!("page"===t.mpType||t.$mp&&"page"===t.$mp.mpType||"page"===t.$options.mpType)},O=n(24).default,M=n(16).default||n(16),C=e.getSystemInfoSync(),j=function(){function n(){a(this,n),this.self="",this._retry=0,this._platform="",this._query={},this._navigationBarTitle={config:"",page:"",report:"",lt:""},this._operatingTime=0,this._reportingRequestData={1:[],11:[]},this.__prevent_triggering=!1,this.__licationHide=!1,this.__licationShow=!1,this._lastPageRoute="",this.statData={uuid:p(),ut:g(),mpn:y(),ak:M.appid,usv:c,v:v(),ch:_(),cn:"",pn:"",ct:"",t:h(),tt:"",p:"android"===C.platform?"a":"i",brand:C.brand||"",md:C.model,sv:C.system.replace(/(Android|iOS)\s/,""),mpsdk:C.SDKVersion||"",mpv:C.version||"",lang:C.language,pr:C.pixelRatio,ww:C.windowWidth,wh:C.windowHeight,sw:C.screenWidth,sh:C.screenHeight}}return u(n,[{key:"_applicationShow",value:function(){if(this.__licationHide){if(k(),I("app").overtime){var t={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(t)}this.__licationHide=!1}}},{key:"_applicationHide",value:function(t,e){this.__licationHide=!0,k();var n=I();D();var i=x(this);this._sendHideRequest({urlref:i,urlref_ts:n.residenceTime},e)}},{key:"_pageShow",value:function(){var t,e,n=x(this),i=(t=getCurrentPages(),e=t[t.length-1].$vm,"bd"===g()?e.$mp&&e.$mp.page.is:e.$scope&&e.$scope.route||e.$mp&&e.$mp.page.route);if(this._navigationBarTitle.config=O&&O.pages[i]&&O.pages[i].titleNView&&O.pages[i].titleNView.titleText||O&&O.pages[i]&&O.pages[i].navigationBarTitleText||"",this.__licationShow)return D(),this.__licationShow=!1,void(this._lastPageRoute=n);if(k(),this._lastPageRoute=n,I("page").overtime){var o={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(o)}D()}},{key:"_pageHide",value:function(){if(!this.__licationHide){k();var t=I("page");return this._sendPageRequest({url:this._lastPageRoute,urlref:this._lastPageRoute,urlref_ts:t.residenceTime}),void(this._navigationBarTitle={config:"",page:"",report:"",lt:""})}}},{key:"_login",value:function(){this._sendEventRequest({key:"login"},0)}},{key:"_share",value:function(){this._sendEventRequest({key:"share"},0)}},{key:"_payment",value:function(t){this._sendEventRequest({key:t},0)}},{key:"_sendReportRequest",value:function(t){this._navigationBarTitle.lt="1";var n,i,o=t.query&&"{}"!==JSON.stringify(t.query)?"?"+JSON.stringify(t.query):"";this.statData.lt="1",this.statData.url=t.path+o||"",this.statData.t=h(),this.statData.sc=function(t){var n=g(),i="";return t||("wx"===n&&(i=e.getLaunchOptionsSync().scene),i)}(t.scene),this.statData.fvts=(n=e.getStorageSync("First__Visit__Time"),i=0,n?i=n:(i=h(),e.setStorageSync("First__Visit__Time",i),e.removeStorageSync("Last__Visit__Time")),i),this.statData.lvts=function(){var t=e.getStorageSync("Last__Visit__Time"),n=0;return n=t||"",e.setStorageSync("Last__Visit__Time",h()),n}(),this.statData.tvc=function(){var t=e.getStorageSync("Total__Visit__Count"),n=1;return t&&(n=t,n++),e.setStorageSync("Total__Visit__Count",n),n}(),"n"===g()?this.getProperty():this.getNetworkInfo()}},{key:"_sendPageRequest",value:function(t){var e=t.url,n=t.urlref,i=t.urlref_ts;this._navigationBarTitle.lt="11";var o={ak:this.statData.ak,uuid:this.statData.uuid,lt:"11",ut:this.statData.ut,url:e,tt:this.statData.tt,urlref:n,urlref_ts:i,ch:this.statData.ch,usv:this.statData.usv,t:h(),p:this.statData.p};this.request(o)}},{key:"_sendHideRequest",value:function(t,e){var n=t.urlref,i=t.urlref_ts,o={ak:this.statData.ak,uuid:this.statData.uuid,lt:"3",ut:this.statData.ut,urlref:n,urlref_ts:i,ch:this.statData.ch,usv:this.statData.usv,t:h(),p:this.statData.p};this.request(o,e)}},{key:"_sendEventRequest",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.key,n=void 0===e?"":e,i=t.value,o=void 0===i?"":i,r=this._lastPageRoute,a={ak:this.statData.ak,uuid:this.statData.uuid,lt:"21",ut:this.statData.ut,url:r,ch:this.statData.ch,e_n:n,e_v:"object"==typeof o?JSON.stringify(o):o.toString(),usv:this.statData.usv,t:h(),p:this.statData.p};this.request(a)}},{key:"getNetworkInfo",value:function(){var t=this;e.getNetworkType({success:function(e){t.statData.net=e.networkType,t.getLocation()}})}},{key:"getProperty",value:function(){var e=this;t.runtime.getProperty(t.runtime.appid,function(t){e.statData.v=t.version||"",e.getNetworkInfo()})}},{key:"getLocation",value:function(){var t=this;M.getLocation?e.getLocation({type:"wgs84",geocode:!0,success:function(e){e.address&&(t.statData.cn=e.address.country,t.statData.pn=e.address.province,t.statData.ct=e.address.city),t.statData.lat=e.latitude,t.statData.lng=e.longitude,t.request(t.statData)}}):(this.statData.lat=0,this.statData.lng=0,this.request(this.statData))}},{key:"request",value:function(t,n){var i=this,o=h(),r=this._navigationBarTitle;t.ttn=r.page,t.ttpj=r.config,t.ttc=r.report;var a=this._reportingRequestData;if("n"===g()&&(a=e.getStorageSync("__UNI__STAT__DATA")||{}),a[t.lt]||(a[t.lt]=[]),a[t.lt].push(t),"n"===g()&&e.setStorageSync("__UNI__STAT__DATA",a),S=h(),"n"===g()&&(m=e.getStorageSync("__page__residence__time")),!(S-m<10)||n){var s=this._reportingRequestData;"n"===g()&&(s=e.getStorageSync("__UNI__STAT__DATA")),b();var u=[],l=[],f=[],p=function(t){s[t].forEach(function(e){var n=function(t){var e="";for(var n in t)e+=n+"="+t[n]+"&";return e.substr(0,e.length-1)}(e);0===t?u.push(n):3===t?f.push(n):l.push(n)})};for(var d in s)p(d);u.push.apply(u,l.concat(f));var y={usv:c,t:o,requests:JSON.stringify(u)};this._reportingRequestData={},"n"===g()&&e.removeStorageSync("__UNI__STAT__DATA"),"h5"!==t.ut?"n"!==g()||"a"!==this.statData.p?this._sendRequest(y):setTimeout(function(){i._sendRequest(y)},200):this.imageRequest(y)}}},{key:"_sendRequest",value:function(t){var n=this;e.request({url:"https://tongji.dcloud.io/uni/stat",method:"POST",data:t,success:function(){},fail:function(e){++n._retry<3&&setTimeout(function(){n._sendRequest(t)},1e3)}})}},{key:"imageRequest",value:function(t){var e=new Image,n=function(t){var e=Object.keys(t).sort(),n={},i="";for(var o in e)n[e[o]]=t[e[o]],i+=e[o]+"="+t[e[o]]+"&";return{sign:"",options:i.substr(0,i.length-1)}}(function(t){var e={};for(var n in t)e[n]=encodeURIComponent(t[n]);return e}(t)).options;e.src="https://tongji.dcloud.io/uni/stat.gif?"+n}},{key:"sendEvent",value:function(t,e){var n,i;(i=e,(n=t)?"string"!=typeof n?(console.error("uni.report [eventName] 参数类型错误,只能为 String 类型"),1):n.length>255?(console.error("uni.report [eventName] 参数长度不能大于 255"),1):"string"!=typeof i&&"object"!=typeof i?(console.error("uni.report [options] 参数类型错误,只能为 String 或 Object 类型"),1):"string"==typeof i&&i.length>255?(console.error("uni.report [options] 参数长度不能大于 255"),1):"title"===n&&"string"!=typeof i?(console.error("uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型"),1):void 0:(console.error("uni.report 缺少 [eventName] 参数"),1))||("title"!==t?this._sendEventRequest({key:t,value:"object"==typeof e?JSON.stringify(e):e},1):this._navigationBarTitle.report=e)}}]),n}(),$=function(t){function n(){var t;return a(this,n),(t=i(this,o(n).call(this))).instance=null,"function"==typeof e.addInterceptor&&(t.addInterceptorInit(),t.interceptLogin(),t.interceptShare(!0),t.interceptRequestPayment()),t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}(n,j),u(n,null,[{key:"getInstance",value:function(){return this.instance||(this.instance=new n),this.instance}}]),u(n,[{key:"addInterceptorInit",value:function(){var t=this;e.addInterceptor("setNavigationBarTitle",{invoke:function(e){t._navigationBarTitle.page=e.title}})}},{key:"interceptLogin",value:function(){var t=this;e.addInterceptor("login",{complete:function(){t._login()}})}},{key:"interceptShare",value:function(t){var n=this;t?e.addInterceptor("share",{success:function(){n._share()},fail:function(){n._share()}}):n._share()}},{key:"interceptRequestPayment",value:function(){var t=this;e.addInterceptor("requestPayment",{success:function(){t._payment("pay_success")},fail:function(){t._payment("pay_fail")}})}},{key:"report",value:function(t,e){this.self=e,b(),this.__licationShow=!0,this._sendReportRequest(t,!0)}},{key:"load",value:function(t,e){if(!e.$scope&&!e.$mp){var n=getCurrentPages();e.$scope=n[n.length-1]}this.self=e,this._query=t}},{key:"show",value:function(t){this.self=t,N(t)?this._pageShow(t):this._applicationShow(t)}},{key:"ready",value:function(t){}},{key:"hide",value:function(t){this.self=t,N(t)?this._pageHide(t):this._applicationHide(t,!0)}},{key:"error",value:function(t){this._platform;var e="";e=t.message?t.stack:JSON.stringify(t);var n={ak:this.statData.ak,uuid:this.statData.uuid,lt:"31",ut:this.statData.ut,ch:this.statData.ch,mpsdk:this.statData.mpsdk,mpv:this.statData.mpv,v:this.statData.v,em:e,usv:this.statData.usv,t:h(),p:this.statData.p};this.request(n)}}]),n}().getInstance(),R=!1,q={onLaunch:function(t){$.report(t,this)},onReady:function(){$.ready(this)},onLoad:function(t){if($.load(t,this),this.$scope&&this.$scope.onShareAppMessage){var e=this.$scope.onShareAppMessage;this.$scope.onShareAppMessage=function(t){return $.interceptShare(!1),e.call(this,t)}}},onShow:function(){R=!1,$.show(this)},onHide:function(){R=!0,$.hide(this)},onUnload:function(){R?R=!1:$.hide(this)},onError:function(t){$.error(t)}};((d=n(25)).default||d).mixin(q),e.report=function(t,e){$.sendEvent(t,e)}}).call(this,n(1).weexPlus,n(1).default)},function(t){t.exports={_from:"@dcloudio/uni-stat@alpha",_id:"@dcloudio/uni-stat@2.0.0-alpha-25520200110003",_inBundle:!1,_integrity:"sha512-H572nd6SV3d1x8/EkOrx2qtHHt0cSIbXV7IMXGHJ+s9LVfiwhAynhah3SG85G0+ZcGjJ0qz0YqNwQVOcKzR1dg==",_location:"/@dcloudio/uni-stat",_phantomChildren:{},_requested:{type:"tag",registry:!0,raw:"@dcloudio/uni-stat@alpha",name:"@dcloudio/uni-stat",escapedName:"@dcloudio%2funi-stat",scope:"@dcloudio",rawSpec:"alpha",saveSpec:null,fetchSpec:"alpha"},_requiredBy:["#USER","/","/@dcloudio/vue-cli-plugin-uni"],_resolved:"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-alpha-25520200110003.tgz",_shasum:"d1d89722fc12114df7e708da291916279ef385ee",_spec:"@dcloudio/uni-stat@alpha",_where:"/Users/guoshengqiang/Documents/dcloud-plugins/alpha/uniapp-cli",author:"",bugs:{url:"https://github.com/dcloudio/uni-app/issues"},bundleDependencies:!1,deprecated:!1,description:"",devDependencies:{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5",eslint:"^6.1.0",rollup:"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},files:["dist","package.json","LICENSE"],gitHead:"288bd2e3c9245b30eee144062341d1052a9300e6",homepage:"https://github.com/dcloudio/uni-app#readme",license:"Apache-2.0",main:"dist/index.js",name:"@dcloudio/uni-stat",repository:{type:"git",url:"git+https://github.com/dcloudio/uni-app.git",directory:"packages/uni-stat"},scripts:{build:"NODE_ENV=production rollup -c rollup.config.js",dev:"NODE_ENV=development rollup -w -c rollup.config.js"},version:"2.0.0-alpha-25520200110003"}},function(t,e,n){"use strict";n.r(e),e.default={pages:{},globalStyle:{}}},function(t,e){t.exports=Vue},function(t,e,n){Vue.prototype.__$appStyle__={},Vue.prototype.__merge_style&&Vue.prototype.__merge_style(n(27).default,Vue.prototype.__$appStyle__)},function(t,e,n){"use strict";n.r(e);var i=n(3),o=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);e.default=o.a},function(t,e,n){"use strict";n.r(e);var i=n(15),o=n(9);for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);var a=n(0);var s=Object(a.a)(o.default,i.b,i.c,!1,null,null,"b377de4e",!1,i.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(n(19).default,this.options.style):Object.assign(this.options.style,n(19).default)}).call(s),e.default=s.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var i=e.shift();if("string"==typeof __channelId__&&__channelId__)return e.push(e.pop().replace("at ","uni-app:///")),console[i].apply(console,e);var o=e.map(function(t){var e=Object.prototype.toString.call(t);if("[object object]"===e.toLowerCase())try{t="---BEGIN:JSON---"+JSON.stringify(t)+"---END:JSON---"}catch(e){t="[object object]"}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var n=function(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}(t).toUpperCase();t="NUMBER"===n||"BOOLEAN"===n?"---BEGIN:"+n+"---"+t+"---END:"+n+"---":String(t)}return t}),r="";if(o.length>1){var a=o.pop();r=o.join("---COMMA---"),0===a.indexOf(" at ")?r+=a:r+="---COMMA---"+a}else r=o[0];console[i](r)}}]);