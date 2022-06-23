const Kf=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}};Kf();var b={exports:{}},W={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fr=Symbol.for("react.element"),Xf=Symbol.for("react.portal"),Zf=Symbol.for("react.fragment"),Jf=Symbol.for("react.strict_mode"),qf=Symbol.for("react.profiler"),ep=Symbol.for("react.provider"),tp=Symbol.for("react.context"),np=Symbol.for("react.forward_ref"),rp=Symbol.for("react.suspense"),op=Symbol.for("react.memo"),ip=Symbol.for("react.lazy"),ws=Symbol.iterator;function lp(e){return e===null||typeof e!="object"?null:(e=ws&&e[ws]||e["@@iterator"],typeof e=="function"?e:null)}var Gu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ku=Object.assign,Xu={};function Gn(e,t,n){this.props=e,this.context=t,this.refs=Xu,this.updater=n||Gu}Gn.prototype.isReactComponent={};Gn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Gn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Zu(){}Zu.prototype=Gn.prototype;function ca(e,t,n){this.props=e,this.context=t,this.refs=Xu,this.updater=n||Gu}var da=ca.prototype=new Zu;da.constructor=ca;Ku(da,Gn.prototype);da.isPureReactComponent=!0;var ks=Array.isArray,Ju=Object.prototype.hasOwnProperty,fa={current:null},qu={key:!0,ref:!0,__self:!0,__source:!0};function ec(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)Ju.call(t,r)&&!qu.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var s=Array(a),c=0;c<a;c++)s[c]=arguments[c+2];o.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:Fr,type:e,key:i,ref:l,props:o,_owner:fa.current}}function ap(e,t){return{$$typeof:Fr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function pa(e){return typeof e=="object"&&e!==null&&e.$$typeof===Fr}function sp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var xs=/\/+/g;function Ai(e,t){return typeof e=="object"&&e!==null&&e.key!=null?sp(""+e.key):t.toString(36)}function go(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Fr:case Xf:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+Ai(l,0):r,ks(o)?(n="",e!=null&&(n=e.replace(xs,"$&/")+"/"),go(o,t,n,"",function(c){return c})):o!=null&&(pa(o)&&(o=ap(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(xs,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",ks(e))for(var a=0;a<e.length;a++){i=e[a];var s=r+Ai(i,a);l+=go(i,t,n,s,o)}else if(s=lp(e),typeof s=="function")for(e=s.call(e),a=0;!(i=e.next()).done;)i=i.value,s=r+Ai(i,a++),l+=go(i,t,n,s,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Kr(e,t,n){if(e==null)return e;var r=[],o=0;return go(e,r,"","",function(i){return t.call(n,i,o++)}),r}function up(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ie={current:null},vo={transition:null},cp={ReactCurrentDispatcher:Ie,ReactCurrentBatchConfig:vo,ReactCurrentOwner:fa};W.Children={map:Kr,forEach:function(e,t,n){Kr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Kr(e,function(){t++}),t},toArray:function(e){return Kr(e,function(t){return t})||[]},only:function(e){if(!pa(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};W.Component=Gn;W.Fragment=Zf;W.Profiler=qf;W.PureComponent=ca;W.StrictMode=Jf;W.Suspense=rp;W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cp;W.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ku({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=fa.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)Ju.call(t,s)&&!qu.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var c=0;c<s;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Fr,type:e.type,key:o,ref:i,props:r,_owner:l}};W.createContext=function(e){return e={$$typeof:tp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ep,_context:e},e.Consumer=e};W.createElement=ec;W.createFactory=function(e){var t=ec.bind(null,e);return t.type=e,t};W.createRef=function(){return{current:null}};W.forwardRef=function(e){return{$$typeof:np,render:e}};W.isValidElement=pa;W.lazy=function(e){return{$$typeof:ip,_payload:{_status:-1,_result:e},_init:up}};W.memo=function(e,t){return{$$typeof:op,type:e,compare:t===void 0?null:t}};W.startTransition=function(e){var t=vo.transition;vo.transition={};try{e()}finally{vo.transition=t}};W.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};W.useCallback=function(e,t){return Ie.current.useCallback(e,t)};W.useContext=function(e){return Ie.current.useContext(e)};W.useDebugValue=function(){};W.useDeferredValue=function(e){return Ie.current.useDeferredValue(e)};W.useEffect=function(e,t){return Ie.current.useEffect(e,t)};W.useId=function(){return Ie.current.useId()};W.useImperativeHandle=function(e,t,n){return Ie.current.useImperativeHandle(e,t,n)};W.useInsertionEffect=function(e,t){return Ie.current.useInsertionEffect(e,t)};W.useLayoutEffect=function(e,t){return Ie.current.useLayoutEffect(e,t)};W.useMemo=function(e,t){return Ie.current.useMemo(e,t)};W.useReducer=function(e,t,n){return Ie.current.useReducer(e,t,n)};W.useRef=function(e){return Ie.current.useRef(e)};W.useState=function(e){return Ie.current.useState(e)};W.useSyncExternalStore=function(e,t,n){return Ie.current.useSyncExternalStore(e,t,n)};W.useTransition=function(){return Ie.current.useTransition()};W.version="18.2.0";b.exports=W;var $e=b.exports,cl={},tc={exports:{}},Ge={},nc={exports:{}},rc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,S){var z=T.length;T.push(S);e:for(;0<z;){var H=z-1>>>1,O=T[H];if(0<o(O,S))T[H]=S,T[z]=O,z=H;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var S=T[0],z=T.pop();if(z!==S){T[0]=z;e:for(var H=0,O=T.length,A=O>>>1;H<A;){var I=2*(H+1)-1,F=T[I],v=I+1,V=T[v];if(0>o(F,z))v<O&&0>o(V,F)?(T[H]=V,T[v]=z,H=v):(T[H]=F,T[I]=z,H=I);else if(v<O&&0>o(V,z))T[H]=V,T[v]=z,H=v;else break e}}return S}function o(T,S){var z=T.sortIndex-S.sortIndex;return z!==0?z:T.id-S.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],c=[],p=1,h=null,m=3,k=!1,x=!1,y=!1,N=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(T){for(var S=n(c);S!==null;){if(S.callback===null)r(c);else if(S.startTime<=T)r(c),S.sortIndex=S.expirationTime,t(s,S);else break;S=n(c)}}function w(T){if(y=!1,f(T),!x)if(n(s)!==null)x=!0,Je(E);else{var S=n(c);S!==null&&ye(w,S.startTime-T)}}function E(T,S){x=!1,y&&(y=!1,d(P),P=-1),k=!0;var z=m;try{for(f(S),h=n(s);h!==null&&(!(h.expirationTime>S)||T&&!Y());){var H=h.callback;if(typeof H=="function"){h.callback=null,m=h.priorityLevel;var O=H(h.expirationTime<=S);S=e.unstable_now(),typeof O=="function"?h.callback=O:h===n(s)&&r(s),f(S)}else r(s);h=n(s)}if(h!==null)var A=!0;else{var I=n(c);I!==null&&ye(w,I.startTime-S),A=!1}return A}finally{h=null,m=z,k=!1}}var $=!1,C=null,P=-1,D=5,M=-1;function Y(){return!(e.unstable_now()-M<D)}function ee(){if(C!==null){var T=e.unstable_now();M=T;var S=!0;try{S=C(!0,T)}finally{S?oe():($=!1,C=null)}}else $=!1}var oe;if(typeof u=="function")oe=function(){u(ee)};else if(typeof MessageChannel!="undefined"){var pe=new MessageChannel,he=pe.port2;pe.port1.onmessage=ee,oe=function(){he.postMessage(null)}}else oe=function(){N(ee,0)};function Je(T){C=T,$||($=!0,oe())}function ye(T,S){P=N(function(){T(e.unstable_now())},S)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){x||k||(x=!0,Je(E))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(T){switch(m){case 1:case 2:case 3:var S=3;break;default:S=m}var z=m;m=S;try{return T()}finally{m=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,S){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var z=m;m=T;try{return S()}finally{m=z}},e.unstable_scheduleCallback=function(T,S,z){var H=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?H+z:H):z=H,T){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=z+O,T={id:p++,callback:S,priorityLevel:T,startTime:z,expirationTime:O,sortIndex:-1},z>H?(T.sortIndex=z,t(c,T),n(s)===null&&T===n(c)&&(y?(d(P),P=-1):y=!0,ye(w,z-H))):(T.sortIndex=O,t(s,T),x||k||(x=!0,Je(E))),T},e.unstable_shouldYield=Y,e.unstable_wrapCallback=function(T){var S=m;return function(){var z=m;m=S;try{return T.apply(this,arguments)}finally{m=z}}}})(rc);nc.exports=rc;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oc=b.exports,Ye=nc.exports;function _(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ic=new Set,Sr={};function mn(e,t){Fn(e,t),Fn(e+"Capture",t)}function Fn(e,t){for(Sr[e]=t,e=0;e<t.length;e++)ic.add(t[e])}var Pt=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),dl=Object.prototype.hasOwnProperty,dp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ss={},Cs={};function fp(e){return dl.call(Cs,e)?!0:dl.call(Ss,e)?!1:dp.test(e)?Cs[e]=!0:(Ss[e]=!0,!1)}function pp(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function hp(e,t,n,r){if(t===null||typeof t=="undefined"||pp(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function je(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var Ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ne[e]=new je(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ne[t]=new je(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ne[e]=new je(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ne[e]=new je(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ne[e]=new je(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ne[e]=new je(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ne[e]=new je(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ne[e]=new je(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ne[e]=new je(e,5,!1,e.toLowerCase(),null,!1,!1)});var ha=/[\-:]([a-z])/g;function ma(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ha,ma);Ne[t]=new je(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ha,ma);Ne[t]=new je(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ha,ma);Ne[t]=new je(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ne[e]=new je(e,1,!1,e.toLowerCase(),null,!1,!1)});Ne.xlinkHref=new je("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ne[e]=new je(e,1,!1,e.toLowerCase(),null,!0,!0)});function ga(e,t,n,r){var o=Ne.hasOwnProperty(t)?Ne[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(hp(t,n,o,r)&&(n=null),r||o===null?fp(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Lt=oc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Xr=Symbol.for("react.element"),xn=Symbol.for("react.portal"),Sn=Symbol.for("react.fragment"),va=Symbol.for("react.strict_mode"),fl=Symbol.for("react.profiler"),lc=Symbol.for("react.provider"),ac=Symbol.for("react.context"),ya=Symbol.for("react.forward_ref"),pl=Symbol.for("react.suspense"),hl=Symbol.for("react.suspense_list"),wa=Symbol.for("react.memo"),Rt=Symbol.for("react.lazy"),sc=Symbol.for("react.offscreen"),Es=Symbol.iterator;function er(e){return e===null||typeof e!="object"?null:(e=Es&&e[Es]||e["@@iterator"],typeof e=="function"?e:null)}var se=Object.assign,Ii;function sr(e){if(Ii===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ii=t&&t[1]||""}return`
`+Ii+e}var ji=!1;function Mi(e,t){if(!e||ji)return"";ji=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,a=i.length-1;1<=l&&0<=a&&o[l]!==i[a];)a--;for(;1<=l&&0<=a;l--,a--)if(o[l]!==i[a]){if(l!==1||a!==1)do if(l--,a--,0>a||o[l]!==i[a]){var s=`
`+o[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{ji=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?sr(e):""}function mp(e){switch(e.tag){case 5:return sr(e.type);case 16:return sr("Lazy");case 13:return sr("Suspense");case 19:return sr("SuspenseList");case 0:case 2:case 15:return e=Mi(e.type,!1),e;case 11:return e=Mi(e.type.render,!1),e;case 1:return e=Mi(e.type,!0),e;default:return""}}function ml(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Sn:return"Fragment";case xn:return"Portal";case fl:return"Profiler";case va:return"StrictMode";case pl:return"Suspense";case hl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ac:return(e.displayName||"Context")+".Consumer";case lc:return(e._context.displayName||"Context")+".Provider";case ya:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case wa:return t=e.displayName||null,t!==null?t:ml(e.type)||"Memo";case Rt:t=e._payload,e=e._init;try{return ml(e(t))}catch{}}return null}function gp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ml(t);case 8:return t===va?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Kt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function uc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function vp(e){var t=uc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Zr(e){e._valueTracker||(e._valueTracker=vp(e))}function cc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=uc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Lo(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch{return e.body}}function gl(e,t){var n=t.checked;return se({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function Ps(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Kt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function dc(e,t){t=t.checked,t!=null&&ga(e,"checked",t,!1)}function vl(e,t){dc(e,t);var n=Kt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?yl(e,t.type,n):t.hasOwnProperty("defaultValue")&&yl(e,t.type,Kt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function _s(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function yl(e,t,n){(t!=="number"||Lo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ur=Array.isArray;function $n(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Kt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function wl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(_(91));return se({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ns(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(_(92));if(ur(n)){if(1<n.length)throw Error(_(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Kt(n)}}function fc(e,t){var n=Kt(t.value),r=Kt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function zs(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function pc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function kl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?pc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Jr,hc=function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Jr=Jr||document.createElement("div"),Jr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Jr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Cr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var fr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},yp=["Webkit","ms","Moz","O"];Object.keys(fr).forEach(function(e){yp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),fr[t]=fr[e]})});function mc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||fr.hasOwnProperty(e)&&fr[e]?(""+t).trim():t+"px"}function gc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=mc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var wp=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xl(e,t){if(t){if(wp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(_(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(_(61))}if(t.style!=null&&typeof t.style!="object")throw Error(_(62))}}function Sl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Cl=null;function ka(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var El=null,An=null,In=null;function Ls(e){if(e=Hr(e)){if(typeof El!="function")throw Error(_(280));var t=e.stateNode;t&&(t=si(t),El(e.stateNode,e.type,t))}}function vc(e){An?In?In.push(e):In=[e]:An=e}function yc(){if(An){var e=An,t=In;if(In=An=null,Ls(e),t)for(e=0;e<t.length;e++)Ls(t[e])}}function wc(e,t){return e(t)}function kc(){}var Di=!1;function xc(e,t,n){if(Di)return e(t,n);Di=!0;try{return wc(e,t,n)}finally{Di=!1,(An!==null||In!==null)&&(kc(),yc())}}function Er(e,t){var n=e.stateNode;if(n===null)return null;var r=si(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(_(231,t,typeof n));return n}var Pl=!1;if(Pt)try{var tr={};Object.defineProperty(tr,"passive",{get:function(){Pl=!0}}),window.addEventListener("test",tr,tr),window.removeEventListener("test",tr,tr)}catch{Pl=!1}function kp(e,t,n,r,o,i,l,a,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(p){this.onError(p)}}var pr=!1,To=null,Oo=!1,_l=null,xp={onError:function(e){pr=!0,To=e}};function Sp(e,t,n,r,o,i,l,a,s){pr=!1,To=null,kp.apply(xp,arguments)}function Cp(e,t,n,r,o,i,l,a,s){if(Sp.apply(this,arguments),pr){if(pr){var c=To;pr=!1,To=null}else throw Error(_(198));Oo||(Oo=!0,_l=c)}}function gn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Sc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ts(e){if(gn(e)!==e)throw Error(_(188))}function Ep(e){var t=e.alternate;if(!t){if(t=gn(e),t===null)throw Error(_(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Ts(o),e;if(i===r)return Ts(o),t;i=i.sibling}throw Error(_(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l){for(a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l)throw Error(_(189))}}if(n.alternate!==r)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?e:t}function Cc(e){return e=Ep(e),e!==null?Ec(e):null}function Ec(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ec(e);if(t!==null)return t;e=e.sibling}return null}var Pc=Ye.unstable_scheduleCallback,Os=Ye.unstable_cancelCallback,Pp=Ye.unstable_shouldYield,_p=Ye.unstable_requestPaint,fe=Ye.unstable_now,Np=Ye.unstable_getCurrentPriorityLevel,xa=Ye.unstable_ImmediatePriority,_c=Ye.unstable_UserBlockingPriority,Ro=Ye.unstable_NormalPriority,zp=Ye.unstable_LowPriority,Nc=Ye.unstable_IdlePriority,oi=null,vt=null;function Lp(e){if(vt&&typeof vt.onCommitFiberRoot=="function")try{vt.onCommitFiberRoot(oi,e,void 0,(e.current.flags&128)===128)}catch{}}var ct=Math.clz32?Math.clz32:Rp,Tp=Math.log,Op=Math.LN2;function Rp(e){return e>>>=0,e===0?32:31-(Tp(e)/Op|0)|0}var qr=64,eo=4194304;function cr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function bo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~o;a!==0?r=cr(a):(i&=l,i!==0&&(r=cr(i)))}else l=n&~o,l!==0?r=cr(l):i!==0&&(r=cr(i));if(r===0)return 0;if(t!==0&&t!==r&&(t&o)===0&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ct(t),o=1<<n,r|=e[n],t&=~o;return r}function bp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $p(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-ct(i),a=1<<l,s=o[l];s===-1?((a&n)===0||(a&r)!==0)&&(o[l]=bp(a,t)):s<=t&&(e.expiredLanes|=a),i&=~a}}function Nl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function zc(){var e=qr;return qr<<=1,(qr&4194240)===0&&(qr=64),e}function Fi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Br(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ct(t),e[t]=n}function Ap(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-ct(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Sa(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ct(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var J=0;function Lc(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Tc,Ca,Oc,Rc,bc,zl=!1,to=[],Mt=null,Dt=null,Ft=null,Pr=new Map,_r=new Map,$t=[],Ip="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Rs(e,t){switch(e){case"focusin":case"focusout":Mt=null;break;case"dragenter":case"dragleave":Dt=null;break;case"mouseover":case"mouseout":Ft=null;break;case"pointerover":case"pointerout":Pr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":_r.delete(t.pointerId)}}function nr(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Hr(t),t!==null&&Ca(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function jp(e,t,n,r,o){switch(t){case"focusin":return Mt=nr(Mt,e,t,n,r,o),!0;case"dragenter":return Dt=nr(Dt,e,t,n,r,o),!0;case"mouseover":return Ft=nr(Ft,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Pr.set(i,nr(Pr.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,_r.set(i,nr(_r.get(i)||null,e,t,n,r,o)),!0}return!1}function $c(e){var t=nn(e.target);if(t!==null){var n=gn(t);if(n!==null){if(t=n.tag,t===13){if(t=Sc(n),t!==null){e.blockedOn=t,bc(e.priority,function(){Oc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function yo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ll(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Cl=r,n.target.dispatchEvent(r),Cl=null}else return t=Hr(n),t!==null&&Ca(t),e.blockedOn=n,!1;t.shift()}return!0}function bs(e,t,n){yo(e)&&n.delete(t)}function Mp(){zl=!1,Mt!==null&&yo(Mt)&&(Mt=null),Dt!==null&&yo(Dt)&&(Dt=null),Ft!==null&&yo(Ft)&&(Ft=null),Pr.forEach(bs),_r.forEach(bs)}function rr(e,t){e.blockedOn===t&&(e.blockedOn=null,zl||(zl=!0,Ye.unstable_scheduleCallback(Ye.unstable_NormalPriority,Mp)))}function Nr(e){function t(o){return rr(o,e)}if(0<to.length){rr(to[0],e);for(var n=1;n<to.length;n++){var r=to[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Mt!==null&&rr(Mt,e),Dt!==null&&rr(Dt,e),Ft!==null&&rr(Ft,e),Pr.forEach(t),_r.forEach(t),n=0;n<$t.length;n++)r=$t[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<$t.length&&(n=$t[0],n.blockedOn===null);)$c(n),n.blockedOn===null&&$t.shift()}var jn=Lt.ReactCurrentBatchConfig,$o=!0;function Dp(e,t,n,r){var o=J,i=jn.transition;jn.transition=null;try{J=1,Ea(e,t,n,r)}finally{J=o,jn.transition=i}}function Fp(e,t,n,r){var o=J,i=jn.transition;jn.transition=null;try{J=4,Ea(e,t,n,r)}finally{J=o,jn.transition=i}}function Ea(e,t,n,r){if($o){var o=Ll(e,t,n,r);if(o===null)Xi(e,t,r,Ao,n),Rs(e,r);else if(jp(o,e,t,n,r))r.stopPropagation();else if(Rs(e,r),t&4&&-1<Ip.indexOf(e)){for(;o!==null;){var i=Hr(o);if(i!==null&&Tc(i),i=Ll(e,t,n,r),i===null&&Xi(e,t,r,Ao,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Xi(e,t,r,null,n)}}var Ao=null;function Ll(e,t,n,r){if(Ao=null,e=ka(r),e=nn(e),e!==null)if(t=gn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Sc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ao=e,null}function Ac(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Np()){case xa:return 1;case _c:return 4;case Ro:case zp:return 16;case Nc:return 536870912;default:return 16}default:return 16}}var It=null,Pa=null,wo=null;function Ic(){if(wo)return wo;var e,t=Pa,n=t.length,r,o="value"in It?It.value:It.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return wo=o.slice(e,1<r?1-r:void 0)}function ko(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function no(){return!0}function $s(){return!1}function Ke(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?no:$s,this.isPropagationStopped=$s,this}return se(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=no)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=no)},persist:function(){},isPersistent:no}),t}var Kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_a=Ke(Kn),Ur=se({},Kn,{view:0,detail:0}),Bp=Ke(Ur),Bi,Ui,or,ii=se({},Ur,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Na,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==or&&(or&&e.type==="mousemove"?(Bi=e.screenX-or.screenX,Ui=e.screenY-or.screenY):Ui=Bi=0,or=e),Bi)},movementY:function(e){return"movementY"in e?e.movementY:Ui}}),As=Ke(ii),Up=se({},ii,{dataTransfer:0}),Hp=Ke(Up),Wp=se({},Ur,{relatedTarget:0}),Hi=Ke(Wp),Vp=se({},Kn,{animationName:0,elapsedTime:0,pseudoElement:0}),Qp=Ke(Vp),Yp=se({},Kn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Gp=Ke(Yp),Kp=se({},Kn,{data:0}),Is=Ke(Kp),Xp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Zp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Jp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Jp[e])?!!t[e]:!1}function Na(){return qp}var eh=se({},Ur,{key:function(e){if(e.key){var t=Xp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ko(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Zp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Na,charCode:function(e){return e.type==="keypress"?ko(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ko(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),th=Ke(eh),nh=se({},ii,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),js=Ke(nh),rh=se({},Ur,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Na}),oh=Ke(rh),ih=se({},Kn,{propertyName:0,elapsedTime:0,pseudoElement:0}),lh=Ke(ih),ah=se({},ii,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),sh=Ke(ah),uh=[9,13,27,32],za=Pt&&"CompositionEvent"in window,hr=null;Pt&&"documentMode"in document&&(hr=document.documentMode);var ch=Pt&&"TextEvent"in window&&!hr,jc=Pt&&(!za||hr&&8<hr&&11>=hr),Ms=String.fromCharCode(32),Ds=!1;function Mc(e,t){switch(e){case"keyup":return uh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Dc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Cn=!1;function dh(e,t){switch(e){case"compositionend":return Dc(t);case"keypress":return t.which!==32?null:(Ds=!0,Ms);case"textInput":return e=t.data,e===Ms&&Ds?null:e;default:return null}}function fh(e,t){if(Cn)return e==="compositionend"||!za&&Mc(e,t)?(e=Ic(),wo=Pa=It=null,Cn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return jc&&t.locale!=="ko"?null:t.data;default:return null}}var ph={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ph[e.type]:t==="textarea"}function Fc(e,t,n,r){vc(r),t=Io(t,"onChange"),0<t.length&&(n=new _a("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var mr=null,zr=null;function hh(e){Zc(e,0)}function li(e){var t=_n(e);if(cc(t))return e}function mh(e,t){if(e==="change")return t}var Bc=!1;if(Pt){var Wi;if(Pt){var Vi="oninput"in document;if(!Vi){var Bs=document.createElement("div");Bs.setAttribute("oninput","return;"),Vi=typeof Bs.oninput=="function"}Wi=Vi}else Wi=!1;Bc=Wi&&(!document.documentMode||9<document.documentMode)}function Us(){mr&&(mr.detachEvent("onpropertychange",Uc),zr=mr=null)}function Uc(e){if(e.propertyName==="value"&&li(zr)){var t=[];Fc(t,zr,e,ka(e)),xc(hh,t)}}function gh(e,t,n){e==="focusin"?(Us(),mr=t,zr=n,mr.attachEvent("onpropertychange",Uc)):e==="focusout"&&Us()}function vh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return li(zr)}function yh(e,t){if(e==="click")return li(t)}function wh(e,t){if(e==="input"||e==="change")return li(t)}function kh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ft=typeof Object.is=="function"?Object.is:kh;function Lr(e,t){if(ft(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!dl.call(t,o)||!ft(e[o],t[o]))return!1}return!0}function Hs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ws(e,t){var n=Hs(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Hs(n)}}function Hc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Hc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Wc(){for(var e=window,t=Lo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Lo(e.document)}return t}function La(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function xh(e){var t=Wc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Hc(n.ownerDocument.documentElement,n)){if(r!==null&&La(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Ws(n,i);var l=Ws(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Sh=Pt&&"documentMode"in document&&11>=document.documentMode,En=null,Tl=null,gr=null,Ol=!1;function Vs(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ol||En==null||En!==Lo(r)||(r=En,"selectionStart"in r&&La(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),gr&&Lr(gr,r)||(gr=r,r=Io(Tl,"onSelect"),0<r.length&&(t=new _a("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=En)))}function ro(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Pn={animationend:ro("Animation","AnimationEnd"),animationiteration:ro("Animation","AnimationIteration"),animationstart:ro("Animation","AnimationStart"),transitionend:ro("Transition","TransitionEnd")},Qi={},Vc={};Pt&&(Vc=document.createElement("div").style,"AnimationEvent"in window||(delete Pn.animationend.animation,delete Pn.animationiteration.animation,delete Pn.animationstart.animation),"TransitionEvent"in window||delete Pn.transitionend.transition);function ai(e){if(Qi[e])return Qi[e];if(!Pn[e])return e;var t=Pn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Vc)return Qi[e]=t[n];return e}var Qc=ai("animationend"),Yc=ai("animationiteration"),Gc=ai("animationstart"),Kc=ai("transitionend"),Xc=new Map,Qs="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Zt(e,t){Xc.set(e,t),mn(t,[e])}for(var Yi=0;Yi<Qs.length;Yi++){var Gi=Qs[Yi],Ch=Gi.toLowerCase(),Eh=Gi[0].toUpperCase()+Gi.slice(1);Zt(Ch,"on"+Eh)}Zt(Qc,"onAnimationEnd");Zt(Yc,"onAnimationIteration");Zt(Gc,"onAnimationStart");Zt("dblclick","onDoubleClick");Zt("focusin","onFocus");Zt("focusout","onBlur");Zt(Kc,"onTransitionEnd");Fn("onMouseEnter",["mouseout","mouseover"]);Fn("onMouseLeave",["mouseout","mouseover"]);Fn("onPointerEnter",["pointerout","pointerover"]);Fn("onPointerLeave",["pointerout","pointerover"]);mn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));mn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));mn("onBeforeInput",["compositionend","keypress","textInput","paste"]);mn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));mn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));mn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var dr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ph=new Set("cancel close invalid load scroll toggle".split(" ").concat(dr));function Ys(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Cp(r,t,void 0,e),e.currentTarget=null}function Zc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,c=a.currentTarget;if(a=a.listener,s!==i&&o.isPropagationStopped())break e;Ys(o,a,c),i=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,c=a.currentTarget,a=a.listener,s!==i&&o.isPropagationStopped())break e;Ys(o,a,c),i=s}}}if(Oo)throw e=_l,Oo=!1,_l=null,e}function ne(e,t){var n=t[Il];n===void 0&&(n=t[Il]=new Set);var r=e+"__bubble";n.has(r)||(Jc(t,e,2,!1),n.add(r))}function Ki(e,t,n){var r=0;t&&(r|=4),Jc(n,e,r,t)}var oo="_reactListening"+Math.random().toString(36).slice(2);function Tr(e){if(!e[oo]){e[oo]=!0,ic.forEach(function(n){n!=="selectionchange"&&(Ph.has(n)||Ki(n,!1,e),Ki(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[oo]||(t[oo]=!0,Ki("selectionchange",!1,t))}}function Jc(e,t,n,r){switch(Ac(t)){case 1:var o=Dp;break;case 4:o=Fp;break;default:o=Ea}n=o.bind(null,t,n,e),o=void 0,!Pl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Xi(e,t,n,r,o){var i=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;l=l.return}for(;a!==null;){if(l=nn(a),l===null)return;if(s=l.tag,s===5||s===6){r=i=l;continue e}a=a.parentNode}}r=r.return}xc(function(){var c=i,p=ka(n),h=[];e:{var m=Xc.get(e);if(m!==void 0){var k=_a,x=e;switch(e){case"keypress":if(ko(n)===0)break e;case"keydown":case"keyup":k=th;break;case"focusin":x="focus",k=Hi;break;case"focusout":x="blur",k=Hi;break;case"beforeblur":case"afterblur":k=Hi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=As;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=Hp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=oh;break;case Qc:case Yc:case Gc:k=Qp;break;case Kc:k=lh;break;case"scroll":k=Bp;break;case"wheel":k=sh;break;case"copy":case"cut":case"paste":k=Gp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=js}var y=(t&4)!==0,N=!y&&e==="scroll",d=y?m!==null?m+"Capture":null:m;y=[];for(var u=c,f;u!==null;){f=u;var w=f.stateNode;if(f.tag===5&&w!==null&&(f=w,d!==null&&(w=Er(u,d),w!=null&&y.push(Or(u,w,f)))),N)break;u=u.return}0<y.length&&(m=new k(m,x,null,n,p),h.push({event:m,listeners:y}))}}if((t&7)===0){e:{if(m=e==="mouseover"||e==="pointerover",k=e==="mouseout"||e==="pointerout",m&&n!==Cl&&(x=n.relatedTarget||n.fromElement)&&(nn(x)||x[_t]))break e;if((k||m)&&(m=p.window===p?p:(m=p.ownerDocument)?m.defaultView||m.parentWindow:window,k?(x=n.relatedTarget||n.toElement,k=c,x=x?nn(x):null,x!==null&&(N=gn(x),x!==N||x.tag!==5&&x.tag!==6)&&(x=null)):(k=null,x=c),k!==x)){if(y=As,w="onMouseLeave",d="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(y=js,w="onPointerLeave",d="onPointerEnter",u="pointer"),N=k==null?m:_n(k),f=x==null?m:_n(x),m=new y(w,u+"leave",k,n,p),m.target=N,m.relatedTarget=f,w=null,nn(p)===c&&(y=new y(d,u+"enter",x,n,p),y.target=f,y.relatedTarget=N,w=y),N=w,k&&x)t:{for(y=k,d=x,u=0,f=y;f;f=yn(f))u++;for(f=0,w=d;w;w=yn(w))f++;for(;0<u-f;)y=yn(y),u--;for(;0<f-u;)d=yn(d),f--;for(;u--;){if(y===d||d!==null&&y===d.alternate)break t;y=yn(y),d=yn(d)}y=null}else y=null;k!==null&&Gs(h,m,k,y,!1),x!==null&&N!==null&&Gs(h,N,x,y,!0)}}e:{if(m=c?_n(c):window,k=m.nodeName&&m.nodeName.toLowerCase(),k==="select"||k==="input"&&m.type==="file")var E=mh;else if(Fs(m))if(Bc)E=wh;else{E=vh;var $=gh}else(k=m.nodeName)&&k.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(E=yh);if(E&&(E=E(e,c))){Fc(h,E,n,p);break e}$&&$(e,m,c),e==="focusout"&&($=m._wrapperState)&&$.controlled&&m.type==="number"&&yl(m,"number",m.value)}switch($=c?_n(c):window,e){case"focusin":(Fs($)||$.contentEditable==="true")&&(En=$,Tl=c,gr=null);break;case"focusout":gr=Tl=En=null;break;case"mousedown":Ol=!0;break;case"contextmenu":case"mouseup":case"dragend":Ol=!1,Vs(h,n,p);break;case"selectionchange":if(Sh)break;case"keydown":case"keyup":Vs(h,n,p)}var C;if(za)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Cn?Mc(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(jc&&n.locale!=="ko"&&(Cn||P!=="onCompositionStart"?P==="onCompositionEnd"&&Cn&&(C=Ic()):(It=p,Pa="value"in It?It.value:It.textContent,Cn=!0)),$=Io(c,P),0<$.length&&(P=new Is(P,e,null,n,p),h.push({event:P,listeners:$}),C?P.data=C:(C=Dc(n),C!==null&&(P.data=C)))),(C=ch?dh(e,n):fh(e,n))&&(c=Io(c,"onBeforeInput"),0<c.length&&(p=new Is("onBeforeInput","beforeinput",null,n,p),h.push({event:p,listeners:c}),p.data=C))}Zc(h,t)})}function Or(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Io(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Er(e,n),i!=null&&r.unshift(Or(e,i,o)),i=Er(e,t),i!=null&&r.push(Or(e,i,o))),e=e.return}return r}function yn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Gs(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var a=n,s=a.alternate,c=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&c!==null&&(a=c,o?(s=Er(n,i),s!=null&&l.unshift(Or(n,s,a))):o||(s=Er(n,i),s!=null&&l.push(Or(n,s,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var _h=/\r\n?/g,Nh=/\u0000|\uFFFD/g;function Ks(e){return(typeof e=="string"?e:""+e).replace(_h,`
`).replace(Nh,"")}function io(e,t,n){if(t=Ks(t),Ks(e)!==t&&n)throw Error(_(425))}function jo(){}var Rl=null,bl=null;function $l(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Al=typeof setTimeout=="function"?setTimeout:void 0,zh=typeof clearTimeout=="function"?clearTimeout:void 0,Xs=typeof Promise=="function"?Promise:void 0,Lh=typeof queueMicrotask=="function"?queueMicrotask:typeof Xs!="undefined"?function(e){return Xs.resolve(null).then(e).catch(Th)}:Al;function Th(e){setTimeout(function(){throw e})}function Zi(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Nr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Nr(t)}function Bt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Zs(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Xn=Math.random().toString(36).slice(2),mt="__reactFiber$"+Xn,Rr="__reactProps$"+Xn,_t="__reactContainer$"+Xn,Il="__reactEvents$"+Xn,Oh="__reactListeners$"+Xn,Rh="__reactHandles$"+Xn;function nn(e){var t=e[mt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[_t]||n[mt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Zs(e);e!==null;){if(n=e[mt])return n;e=Zs(e)}return t}e=n,n=e.parentNode}return null}function Hr(e){return e=e[mt]||e[_t],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function _n(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function si(e){return e[Rr]||null}var jl=[],Nn=-1;function Jt(e){return{current:e}}function re(e){0>Nn||(e.current=jl[Nn],jl[Nn]=null,Nn--)}function te(e,t){Nn++,jl[Nn]=e.current,e.current=t}var Xt={},Re=Jt(Xt),Be=Jt(!1),un=Xt;function Bn(e,t){var n=e.type.contextTypes;if(!n)return Xt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ue(e){return e=e.childContextTypes,e!=null}function Mo(){re(Be),re(Re)}function Js(e,t,n){if(Re.current!==Xt)throw Error(_(168));te(Re,t),te(Be,n)}function qc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(_(108,gp(e)||"Unknown",o));return se({},n,r)}function Do(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Xt,un=Re.current,te(Re,e),te(Be,Be.current),!0}function qs(e,t,n){var r=e.stateNode;if(!r)throw Error(_(169));n?(e=qc(e,t,un),r.__reactInternalMemoizedMergedChildContext=e,re(Be),re(Re),te(Re,e)):re(Be),te(Be,n)}var xt=null,ui=!1,Ji=!1;function ed(e){xt===null?xt=[e]:xt.push(e)}function bh(e){ui=!0,ed(e)}function qt(){if(!Ji&&xt!==null){Ji=!0;var e=0,t=J;try{var n=xt;for(J=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}xt=null,ui=!1}catch(o){throw xt!==null&&(xt=xt.slice(e+1)),Pc(xa,qt),o}finally{J=t,Ji=!1}}return null}var zn=[],Ln=0,Fo=null,Bo=0,qe=[],et=0,cn=null,St=1,Ct="";function en(e,t){zn[Ln++]=Bo,zn[Ln++]=Fo,Fo=e,Bo=t}function td(e,t,n){qe[et++]=St,qe[et++]=Ct,qe[et++]=cn,cn=e;var r=St;e=Ct;var o=32-ct(r)-1;r&=~(1<<o),n+=1;var i=32-ct(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,St=1<<32-ct(t)+o|n<<o|r,Ct=i+e}else St=1<<i|n<<o|r,Ct=e}function Ta(e){e.return!==null&&(en(e,1),td(e,1,0))}function Oa(e){for(;e===Fo;)Fo=zn[--Ln],zn[Ln]=null,Bo=zn[--Ln],zn[Ln]=null;for(;e===cn;)cn=qe[--et],qe[et]=null,Ct=qe[--et],qe[et]=null,St=qe[--et],qe[et]=null}var Qe=null,Ve=null,ie=!1,ut=null;function nd(e,t){var n=tt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function eu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Qe=e,Ve=Bt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Qe=e,Ve=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=cn!==null?{id:St,overflow:Ct}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=tt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Qe=e,Ve=null,!0):!1;default:return!1}}function Ml(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Dl(e){if(ie){var t=Ve;if(t){var n=t;if(!eu(e,t)){if(Ml(e))throw Error(_(418));t=Bt(n.nextSibling);var r=Qe;t&&eu(e,t)?nd(r,n):(e.flags=e.flags&-4097|2,ie=!1,Qe=e)}}else{if(Ml(e))throw Error(_(418));e.flags=e.flags&-4097|2,ie=!1,Qe=e}}}function tu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Qe=e}function lo(e){if(e!==Qe)return!1;if(!ie)return tu(e),ie=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!$l(e.type,e.memoizedProps)),t&&(t=Ve)){if(Ml(e))throw rd(),Error(_(418));for(;t;)nd(e,t),t=Bt(t.nextSibling)}if(tu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ve=Bt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ve=null}}else Ve=Qe?Bt(e.stateNode.nextSibling):null;return!0}function rd(){for(var e=Ve;e;)e=Bt(e.nextSibling)}function Un(){Ve=Qe=null,ie=!1}function Ra(e){ut===null?ut=[e]:ut.push(e)}var $h=Lt.ReactCurrentBatchConfig;function at(e,t){if(e&&e.defaultProps){t=se({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Uo=Jt(null),Ho=null,Tn=null,ba=null;function $a(){ba=Tn=Ho=null}function Aa(e){var t=Uo.current;re(Uo),e._currentValue=t}function Fl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Mn(e,t){Ho=e,ba=Tn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Fe=!0),e.firstContext=null)}function rt(e){var t=e._currentValue;if(ba!==e)if(e={context:e,memoizedValue:t,next:null},Tn===null){if(Ho===null)throw Error(_(308));Tn=e,Ho.dependencies={lanes:0,firstContext:e}}else Tn=Tn.next=e;return t}var rn=null;function Ia(e){rn===null?rn=[e]:rn.push(e)}function od(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Ia(t)):(n.next=o.next,o.next=n),t.interleaved=n,Nt(e,r)}function Nt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var bt=!1;function ja(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function id(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Et(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ut(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Q&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Nt(e,n)}return o=r.interleaved,o===null?(t.next=t,Ia(r)):(t.next=o.next,o.next=t),r.interleaved=t,Nt(e,n)}function xo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Sa(e,n)}}function nu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Wo(e,t,n,r){var o=e.updateQueue;bt=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var s=a,c=s.next;s.next=null,l===null?i=c:l.next=c,l=s;var p=e.alternate;p!==null&&(p=p.updateQueue,a=p.lastBaseUpdate,a!==l&&(a===null?p.firstBaseUpdate=c:a.next=c,p.lastBaseUpdate=s))}if(i!==null){var h=o.baseState;l=0,p=c=s=null,a=i;do{var m=a.lane,k=a.eventTime;if((r&m)===m){p!==null&&(p=p.next={eventTime:k,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=e,y=a;switch(m=t,k=n,y.tag){case 1:if(x=y.payload,typeof x=="function"){h=x.call(k,h,m);break e}h=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=y.payload,m=typeof x=="function"?x.call(k,h,m):x,m==null)break e;h=se({},h,m);break e;case 2:bt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[a]:m.push(a))}else k={eventTime:k,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},p===null?(c=p=k,s=h):p=p.next=k,l|=m;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;m=a,a=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(1);if(p===null&&(s=h),o.baseState=s,o.firstBaseUpdate=c,o.lastBaseUpdate=p,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);fn|=l,e.lanes=l,e.memoizedState=h}}function ru(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(_(191,o));o.call(r)}}}var ld=new oc.Component().refs;function Bl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:se({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ci={isMounted:function(e){return(e=e._reactInternals)?gn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ae(),o=Wt(e),i=Et(r,o);i.payload=t,n!=null&&(i.callback=n),t=Ut(e,i,o),t!==null&&(dt(t,e,o,r),xo(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ae(),o=Wt(e),i=Et(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ut(e,i,o),t!==null&&(dt(t,e,o,r),xo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ae(),r=Wt(e),o=Et(n,r);o.tag=2,t!=null&&(o.callback=t),t=Ut(e,o,r),t!==null&&(dt(t,e,r,n),xo(t,e,r))}};function ou(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!Lr(n,r)||!Lr(o,i):!0}function ad(e,t,n){var r=!1,o=Xt,i=t.contextType;return typeof i=="object"&&i!==null?i=rt(i):(o=Ue(t)?un:Re.current,r=t.contextTypes,i=(r=r!=null)?Bn(e,o):Xt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ci,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function iu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ci.enqueueReplaceState(t,t.state,null)}function Ul(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=ld,ja(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=rt(i):(i=Ue(t)?un:Re.current,o.context=Bn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Bl(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&ci.enqueueReplaceState(o,o.state,null),Wo(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function ir(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var r=n.stateNode}if(!r)throw Error(_(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var a=o.refs;a===ld&&(a=o.refs={}),l===null?delete a[i]:a[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,e))}return e}function ao(e,t){throw e=Object.prototype.toString.call(t),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function lu(e){var t=e._init;return t(e._payload)}function sd(e){function t(d,u){if(e){var f=d.deletions;f===null?(d.deletions=[u],d.flags|=16):f.push(u)}}function n(d,u){if(!e)return null;for(;u!==null;)t(d,u),u=u.sibling;return null}function r(d,u){for(d=new Map;u!==null;)u.key!==null?d.set(u.key,u):d.set(u.index,u),u=u.sibling;return d}function o(d,u){return d=Vt(d,u),d.index=0,d.sibling=null,d}function i(d,u,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<u?(d.flags|=2,u):f):(d.flags|=2,u)):(d.flags|=1048576,u)}function l(d){return e&&d.alternate===null&&(d.flags|=2),d}function a(d,u,f,w){return u===null||u.tag!==6?(u=il(f,d.mode,w),u.return=d,u):(u=o(u,f),u.return=d,u)}function s(d,u,f,w){var E=f.type;return E===Sn?p(d,u,f.props.children,w,f.key):u!==null&&(u.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Rt&&lu(E)===u.type)?(w=o(u,f.props),w.ref=ir(d,u,f),w.return=d,w):(w=No(f.type,f.key,f.props,null,d.mode,w),w.ref=ir(d,u,f),w.return=d,w)}function c(d,u,f,w){return u===null||u.tag!==4||u.stateNode.containerInfo!==f.containerInfo||u.stateNode.implementation!==f.implementation?(u=ll(f,d.mode,w),u.return=d,u):(u=o(u,f.children||[]),u.return=d,u)}function p(d,u,f,w,E){return u===null||u.tag!==7?(u=sn(f,d.mode,w,E),u.return=d,u):(u=o(u,f),u.return=d,u)}function h(d,u,f){if(typeof u=="string"&&u!==""||typeof u=="number")return u=il(""+u,d.mode,f),u.return=d,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Xr:return f=No(u.type,u.key,u.props,null,d.mode,f),f.ref=ir(d,null,u),f.return=d,f;case xn:return u=ll(u,d.mode,f),u.return=d,u;case Rt:var w=u._init;return h(d,w(u._payload),f)}if(ur(u)||er(u))return u=sn(u,d.mode,f,null),u.return=d,u;ao(d,u)}return null}function m(d,u,f,w){var E=u!==null?u.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return E!==null?null:a(d,u,""+f,w);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Xr:return f.key===E?s(d,u,f,w):null;case xn:return f.key===E?c(d,u,f,w):null;case Rt:return E=f._init,m(d,u,E(f._payload),w)}if(ur(f)||er(f))return E!==null?null:p(d,u,f,w,null);ao(d,f)}return null}function k(d,u,f,w,E){if(typeof w=="string"&&w!==""||typeof w=="number")return d=d.get(f)||null,a(u,d,""+w,E);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Xr:return d=d.get(w.key===null?f:w.key)||null,s(u,d,w,E);case xn:return d=d.get(w.key===null?f:w.key)||null,c(u,d,w,E);case Rt:var $=w._init;return k(d,u,f,$(w._payload),E)}if(ur(w)||er(w))return d=d.get(f)||null,p(u,d,w,E,null);ao(u,w)}return null}function x(d,u,f,w){for(var E=null,$=null,C=u,P=u=0,D=null;C!==null&&P<f.length;P++){C.index>P?(D=C,C=null):D=C.sibling;var M=m(d,C,f[P],w);if(M===null){C===null&&(C=D);break}e&&C&&M.alternate===null&&t(d,C),u=i(M,u,P),$===null?E=M:$.sibling=M,$=M,C=D}if(P===f.length)return n(d,C),ie&&en(d,P),E;if(C===null){for(;P<f.length;P++)C=h(d,f[P],w),C!==null&&(u=i(C,u,P),$===null?E=C:$.sibling=C,$=C);return ie&&en(d,P),E}for(C=r(d,C);P<f.length;P++)D=k(C,d,P,f[P],w),D!==null&&(e&&D.alternate!==null&&C.delete(D.key===null?P:D.key),u=i(D,u,P),$===null?E=D:$.sibling=D,$=D);return e&&C.forEach(function(Y){return t(d,Y)}),ie&&en(d,P),E}function y(d,u,f,w){var E=er(f);if(typeof E!="function")throw Error(_(150));if(f=E.call(f),f==null)throw Error(_(151));for(var $=E=null,C=u,P=u=0,D=null,M=f.next();C!==null&&!M.done;P++,M=f.next()){C.index>P?(D=C,C=null):D=C.sibling;var Y=m(d,C,M.value,w);if(Y===null){C===null&&(C=D);break}e&&C&&Y.alternate===null&&t(d,C),u=i(Y,u,P),$===null?E=Y:$.sibling=Y,$=Y,C=D}if(M.done)return n(d,C),ie&&en(d,P),E;if(C===null){for(;!M.done;P++,M=f.next())M=h(d,M.value,w),M!==null&&(u=i(M,u,P),$===null?E=M:$.sibling=M,$=M);return ie&&en(d,P),E}for(C=r(d,C);!M.done;P++,M=f.next())M=k(C,d,P,M.value,w),M!==null&&(e&&M.alternate!==null&&C.delete(M.key===null?P:M.key),u=i(M,u,P),$===null?E=M:$.sibling=M,$=M);return e&&C.forEach(function(ee){return t(d,ee)}),ie&&en(d,P),E}function N(d,u,f,w){if(typeof f=="object"&&f!==null&&f.type===Sn&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case Xr:e:{for(var E=f.key,$=u;$!==null;){if($.key===E){if(E=f.type,E===Sn){if($.tag===7){n(d,$.sibling),u=o($,f.props.children),u.return=d,d=u;break e}}else if($.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Rt&&lu(E)===$.type){n(d,$.sibling),u=o($,f.props),u.ref=ir(d,$,f),u.return=d,d=u;break e}n(d,$);break}else t(d,$);$=$.sibling}f.type===Sn?(u=sn(f.props.children,d.mode,w,f.key),u.return=d,d=u):(w=No(f.type,f.key,f.props,null,d.mode,w),w.ref=ir(d,u,f),w.return=d,d=w)}return l(d);case xn:e:{for($=f.key;u!==null;){if(u.key===$)if(u.tag===4&&u.stateNode.containerInfo===f.containerInfo&&u.stateNode.implementation===f.implementation){n(d,u.sibling),u=o(u,f.children||[]),u.return=d,d=u;break e}else{n(d,u);break}else t(d,u);u=u.sibling}u=ll(f,d.mode,w),u.return=d,d=u}return l(d);case Rt:return $=f._init,N(d,u,$(f._payload),w)}if(ur(f))return x(d,u,f,w);if(er(f))return y(d,u,f,w);ao(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,u!==null&&u.tag===6?(n(d,u.sibling),u=o(u,f),u.return=d,d=u):(n(d,u),u=il(f,d.mode,w),u.return=d,d=u),l(d)):n(d,u)}return N}var Hn=sd(!0),ud=sd(!1),Wr={},yt=Jt(Wr),br=Jt(Wr),$r=Jt(Wr);function on(e){if(e===Wr)throw Error(_(174));return e}function Ma(e,t){switch(te($r,t),te(br,e),te(yt,Wr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:kl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=kl(t,e)}re(yt),te(yt,t)}function Wn(){re(yt),re(br),re($r)}function cd(e){on($r.current);var t=on(yt.current),n=kl(t,e.type);t!==n&&(te(br,e),te(yt,n))}function Da(e){br.current===e&&(re(yt),re(br))}var le=Jt(0);function Vo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var qi=[];function Fa(){for(var e=0;e<qi.length;e++)qi[e]._workInProgressVersionPrimary=null;qi.length=0}var So=Lt.ReactCurrentDispatcher,el=Lt.ReactCurrentBatchConfig,dn=0,ae=null,ge=null,we=null,Qo=!1,vr=!1,Ar=0,Ah=0;function Le(){throw Error(_(321))}function Ba(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ft(e[n],t[n]))return!1;return!0}function Ua(e,t,n,r,o,i){if(dn=i,ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,So.current=e===null||e.memoizedState===null?Dh:Fh,e=n(r,o),vr){i=0;do{if(vr=!1,Ar=0,25<=i)throw Error(_(301));i+=1,we=ge=null,t.updateQueue=null,So.current=Bh,e=n(r,o)}while(vr)}if(So.current=Yo,t=ge!==null&&ge.next!==null,dn=0,we=ge=ae=null,Qo=!1,t)throw Error(_(300));return e}function Ha(){var e=Ar!==0;return Ar=0,e}function ht(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return we===null?ae.memoizedState=we=e:we=we.next=e,we}function ot(){if(ge===null){var e=ae.alternate;e=e!==null?e.memoizedState:null}else e=ge.next;var t=we===null?ae.memoizedState:we.next;if(t!==null)we=t,ge=e;else{if(e===null)throw Error(_(310));ge=e,e={memoizedState:ge.memoizedState,baseState:ge.baseState,baseQueue:ge.baseQueue,queue:ge.queue,next:null},we===null?ae.memoizedState=we=e:we=we.next=e}return we}function Ir(e,t){return typeof t=="function"?t(e):t}function tl(e){var t=ot(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=ge,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=l=null,s=null,c=i;do{var p=c.lane;if((dn&p)===p)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var h={lane:p,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(a=s=h,l=r):s=s.next=h,ae.lanes|=p,fn|=p}c=c.next}while(c!==null&&c!==i);s===null?l=r:s.next=a,ft(r,t.memoizedState)||(Fe=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,ae.lanes|=i,fn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function nl(e){var t=ot(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);ft(i,t.memoizedState)||(Fe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function dd(){}function fd(e,t){var n=ae,r=ot(),o=t(),i=!ft(r.memoizedState,o);if(i&&(r.memoizedState=o,Fe=!0),r=r.queue,Wa(md.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||we!==null&&we.memoizedState.tag&1){if(n.flags|=2048,jr(9,hd.bind(null,n,r,o,t),void 0,null),ke===null)throw Error(_(349));(dn&30)!==0||pd(n,t,o)}return o}function pd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ae.updateQueue,t===null?(t={lastEffect:null,stores:null},ae.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function hd(e,t,n,r){t.value=n,t.getSnapshot=r,gd(t)&&vd(e)}function md(e,t,n){return n(function(){gd(t)&&vd(e)})}function gd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ft(e,n)}catch{return!0}}function vd(e){var t=Nt(e,1);t!==null&&dt(t,e,1,-1)}function au(e){var t=ht();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ir,lastRenderedState:e},t.queue=e,e=e.dispatch=Mh.bind(null,ae,e),[t.memoizedState,e]}function jr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ae.updateQueue,t===null?(t={lastEffect:null,stores:null},ae.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function yd(){return ot().memoizedState}function Co(e,t,n,r){var o=ht();ae.flags|=e,o.memoizedState=jr(1|t,n,void 0,r===void 0?null:r)}function di(e,t,n,r){var o=ot();r=r===void 0?null:r;var i=void 0;if(ge!==null){var l=ge.memoizedState;if(i=l.destroy,r!==null&&Ba(r,l.deps)){o.memoizedState=jr(t,n,i,r);return}}ae.flags|=e,o.memoizedState=jr(1|t,n,i,r)}function su(e,t){return Co(8390656,8,e,t)}function Wa(e,t){return di(2048,8,e,t)}function wd(e,t){return di(4,2,e,t)}function kd(e,t){return di(4,4,e,t)}function xd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Sd(e,t,n){return n=n!=null?n.concat([e]):null,di(4,4,xd.bind(null,t,e),n)}function Va(){}function Cd(e,t){var n=ot();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ba(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ed(e,t){var n=ot();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ba(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Pd(e,t,n){return(dn&21)===0?(e.baseState&&(e.baseState=!1,Fe=!0),e.memoizedState=n):(ft(n,t)||(n=zc(),ae.lanes|=n,fn|=n,e.baseState=!0),t)}function Ih(e,t){var n=J;J=n!==0&&4>n?n:4,e(!0);var r=el.transition;el.transition={};try{e(!1),t()}finally{J=n,el.transition=r}}function _d(){return ot().memoizedState}function jh(e,t,n){var r=Wt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Nd(e))zd(t,n);else if(n=od(e,t,n,r),n!==null){var o=Ae();dt(n,e,r,o),Ld(n,t,r)}}function Mh(e,t,n){var r=Wt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Nd(e))zd(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,a=i(l,n);if(o.hasEagerState=!0,o.eagerState=a,ft(a,l)){var s=t.interleaved;s===null?(o.next=o,Ia(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=od(e,t,o,r),n!==null&&(o=Ae(),dt(n,e,r,o),Ld(n,t,r))}}function Nd(e){var t=e.alternate;return e===ae||t!==null&&t===ae}function zd(e,t){vr=Qo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ld(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Sa(e,n)}}var Yo={readContext:rt,useCallback:Le,useContext:Le,useEffect:Le,useImperativeHandle:Le,useInsertionEffect:Le,useLayoutEffect:Le,useMemo:Le,useReducer:Le,useRef:Le,useState:Le,useDebugValue:Le,useDeferredValue:Le,useTransition:Le,useMutableSource:Le,useSyncExternalStore:Le,useId:Le,unstable_isNewReconciler:!1},Dh={readContext:rt,useCallback:function(e,t){return ht().memoizedState=[e,t===void 0?null:t],e},useContext:rt,useEffect:su,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Co(4194308,4,xd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Co(4194308,4,e,t)},useInsertionEffect:function(e,t){return Co(4,2,e,t)},useMemo:function(e,t){var n=ht();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ht();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=jh.bind(null,ae,e),[r.memoizedState,e]},useRef:function(e){var t=ht();return e={current:e},t.memoizedState=e},useState:au,useDebugValue:Va,useDeferredValue:function(e){return ht().memoizedState=e},useTransition:function(){var e=au(!1),t=e[0];return e=Ih.bind(null,e[1]),ht().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ae,o=ht();if(ie){if(n===void 0)throw Error(_(407));n=n()}else{if(n=t(),ke===null)throw Error(_(349));(dn&30)!==0||pd(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,su(md.bind(null,r,i,e),[e]),r.flags|=2048,jr(9,hd.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=ht(),t=ke.identifierPrefix;if(ie){var n=Ct,r=St;n=(r&~(1<<32-ct(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ar++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Ah++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Fh={readContext:rt,useCallback:Cd,useContext:rt,useEffect:Wa,useImperativeHandle:Sd,useInsertionEffect:wd,useLayoutEffect:kd,useMemo:Ed,useReducer:tl,useRef:yd,useState:function(){return tl(Ir)},useDebugValue:Va,useDeferredValue:function(e){var t=ot();return Pd(t,ge.memoizedState,e)},useTransition:function(){var e=tl(Ir)[0],t=ot().memoizedState;return[e,t]},useMutableSource:dd,useSyncExternalStore:fd,useId:_d,unstable_isNewReconciler:!1},Bh={readContext:rt,useCallback:Cd,useContext:rt,useEffect:Wa,useImperativeHandle:Sd,useInsertionEffect:wd,useLayoutEffect:kd,useMemo:Ed,useReducer:nl,useRef:yd,useState:function(){return nl(Ir)},useDebugValue:Va,useDeferredValue:function(e){var t=ot();return ge===null?t.memoizedState=e:Pd(t,ge.memoizedState,e)},useTransition:function(){var e=nl(Ir)[0],t=ot().memoizedState;return[e,t]},useMutableSource:dd,useSyncExternalStore:fd,useId:_d,unstable_isNewReconciler:!1};function Vn(e,t){try{var n="",r=t;do n+=mp(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function rl(e,t,n){return{value:e,source:null,stack:n!=null?n:null,digest:t!=null?t:null}}function Hl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Uh=typeof WeakMap=="function"?WeakMap:Map;function Td(e,t,n){n=Et(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ko||(Ko=!0,ql=r),Hl(e,t)},n}function Od(e,t,n){n=Et(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Hl(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Hl(e,t),typeof r!="function"&&(Ht===null?Ht=new Set([this]):Ht.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function uu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Uh;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=n0.bind(null,e,t,n),t.then(e,e))}function cu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function du(e,t,n,r,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Et(-1,1),t.tag=2,Ut(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var Hh=Lt.ReactCurrentOwner,Fe=!1;function be(e,t,n,r){t.child=e===null?ud(t,null,n,r):Hn(t,e.child,n,r)}function fu(e,t,n,r,o){n=n.render;var i=t.ref;return Mn(t,o),r=Ua(e,t,n,r,i,o),n=Ha(),e!==null&&!Fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,zt(e,t,o)):(ie&&n&&Ta(t),t.flags|=1,be(e,t,r,o),t.child)}function pu(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!qa(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Rd(e,t,i,r,o)):(e=No(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,(e.lanes&o)===0){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:Lr,n(l,r)&&e.ref===t.ref)return zt(e,t,o)}return t.flags|=1,e=Vt(i,r),e.ref=t.ref,e.return=t,t.child=e}function Rd(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Lr(i,r)&&e.ref===t.ref)if(Fe=!1,t.pendingProps=r=i,(e.lanes&o)!==0)(e.flags&131072)!==0&&(Fe=!0);else return t.lanes=e.lanes,zt(e,t,o)}return Wl(e,t,n,r,o)}function bd(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},te(Rn,We),We|=n;else{if((n&1073741824)===0)return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,te(Rn,We),We|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,te(Rn,We),We|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,te(Rn,We),We|=r;return be(e,t,o,n),t.child}function $d(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Wl(e,t,n,r,o){var i=Ue(n)?un:Re.current;return i=Bn(t,i),Mn(t,o),n=Ua(e,t,n,r,i,o),r=Ha(),e!==null&&!Fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,zt(e,t,o)):(ie&&r&&Ta(t),t.flags|=1,be(e,t,n,o),t.child)}function hu(e,t,n,r,o){if(Ue(n)){var i=!0;Do(t)}else i=!1;if(Mn(t,o),t.stateNode===null)Eo(e,t),ad(t,n,r),Ul(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var s=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=rt(c):(c=Ue(n)?un:Re.current,c=Bn(t,c));var p=n.getDerivedStateFromProps,h=typeof p=="function"||typeof l.getSnapshotBeforeUpdate=="function";h||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==c)&&iu(t,l,r,c),bt=!1;var m=t.memoizedState;l.state=m,Wo(t,r,l,o),s=t.memoizedState,a!==r||m!==s||Be.current||bt?(typeof p=="function"&&(Bl(t,n,p,r),s=t.memoizedState),(a=bt||ou(t,n,a,r,m,s,c))?(h||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=c,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,id(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:at(t.type,a),l.props=c,h=t.pendingProps,m=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=rt(s):(s=Ue(n)?un:Re.current,s=Bn(t,s));var k=n.getDerivedStateFromProps;(p=typeof k=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==h||m!==s)&&iu(t,l,r,s),bt=!1,m=t.memoizedState,l.state=m,Wo(t,r,l,o);var x=t.memoizedState;a!==h||m!==x||Be.current||bt?(typeof k=="function"&&(Bl(t,n,k,r),x=t.memoizedState),(c=bt||ou(t,n,c,r,m,x,s)||!1)?(p||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,x,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,x,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),l.props=r,l.state=x,l.context=s,r=c):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Vl(e,t,n,r,i,o)}function Vl(e,t,n,r,o,i){$d(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&qs(t,n,!1),zt(e,t,i);r=t.stateNode,Hh.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Hn(t,e.child,null,i),t.child=Hn(t,null,a,i)):be(e,t,a,i),t.memoizedState=r.state,o&&qs(t,n,!0),t.child}function Ad(e){var t=e.stateNode;t.pendingContext?Js(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Js(e,t.context,!1),Ma(e,t.containerInfo)}function mu(e,t,n,r,o){return Un(),Ra(o),t.flags|=256,be(e,t,n,r),t.child}var Ql={dehydrated:null,treeContext:null,retryLane:0};function Yl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Id(e,t,n){var r=t.pendingProps,o=le.current,i=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),te(le,o&1),e===null)return Dl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},(r&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=l):i=hi(l,r,0,null),e=sn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Yl(n),t.memoizedState=Ql,e):Qa(t,l));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return Wh(e,t,l,r,a,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,a=o.sibling;var s={mode:"hidden",children:r.children};return(l&1)===0&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Vt(o,s),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=Vt(a,i):(i=sn(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?Yl(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=Ql,r}return i=e.child,e=i.sibling,r=Vt(i,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Qa(e,t){return t=hi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function so(e,t,n,r){return r!==null&&Ra(r),Hn(t,e.child,null,n),e=Qa(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Wh(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=rl(Error(_(422))),so(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=hi({mode:"visible",children:r.children},o,0,null),i=sn(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,(t.mode&1)!==0&&Hn(t,e.child,null,l),t.child.memoizedState=Yl(l),t.memoizedState=Ql,i);if((t.mode&1)===0)return so(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(_(419)),r=rl(i,r,void 0),so(e,t,l,r)}if(a=(l&e.childLanes)!==0,Fe||a){if(r=ke,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|l))!==0?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Nt(e,o),dt(r,e,o,-1))}return Ja(),r=rl(Error(_(421))),so(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=r0.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Ve=Bt(o.nextSibling),Qe=t,ie=!0,ut=null,e!==null&&(qe[et++]=St,qe[et++]=Ct,qe[et++]=cn,St=e.id,Ct=e.overflow,cn=t),t=Qa(t,r.children),t.flags|=4096,t)}function gu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Fl(e.return,t,n)}function ol(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function jd(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(be(e,t,r.children,n),r=le.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&gu(e,n,t);else if(e.tag===19)gu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(te(le,r),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Vo(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),ol(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Vo(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}ol(t,!0,n,null,i);break;case"together":ol(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Eo(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function zt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),fn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(_(153));if(t.child!==null){for(e=t.child,n=Vt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Vt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Vh(e,t,n){switch(t.tag){case 3:Ad(t),Un();break;case 5:cd(t);break;case 1:Ue(t.type)&&Do(t);break;case 4:Ma(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;te(Uo,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(te(le,le.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Id(e,t,n):(te(le,le.current&1),e=zt(e,t,n),e!==null?e.sibling:null);te(le,le.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return jd(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),te(le,le.current),r)break;return null;case 22:case 23:return t.lanes=0,bd(e,t,n)}return zt(e,t,n)}var Md,Gl,Dd,Fd;Md=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Gl=function(){};Dd=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,on(yt.current);var i=null;switch(n){case"input":o=gl(e,o),r=gl(e,r),i=[];break;case"select":o=se({},o,{value:void 0}),r=se({},r,{value:void 0}),i=[];break;case"textarea":o=wl(e,o),r=wl(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=jo)}xl(n,r);var l;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var a=o[c];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Sr.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var s=r[c];if(a=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&s!==a&&(s!=null||a!=null))if(c==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(i||(i=[]),i.push(c,n)),n=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(i=i||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Sr.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&ne("scroll",e),i||a===s||(i=[])):(i=i||[]).push(c,s))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};Fd=function(e,t,n,r){n!==r&&(t.flags|=4)};function lr(e,t){if(!ie)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Te(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Qh(e,t,n){var r=t.pendingProps;switch(Oa(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Te(t),null;case 1:return Ue(t.type)&&Mo(),Te(t),null;case 3:return r=t.stateNode,Wn(),re(Be),re(Re),Fa(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(lo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,ut!==null&&(na(ut),ut=null))),Gl(e,t),Te(t),null;case 5:Da(t);var o=on($r.current);if(n=t.type,e!==null&&t.stateNode!=null)Dd(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(_(166));return Te(t),null}if(e=on(yt.current),lo(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[mt]=t,r[Rr]=i,e=(t.mode&1)!==0,n){case"dialog":ne("cancel",r),ne("close",r);break;case"iframe":case"object":case"embed":ne("load",r);break;case"video":case"audio":for(o=0;o<dr.length;o++)ne(dr[o],r);break;case"source":ne("error",r);break;case"img":case"image":case"link":ne("error",r),ne("load",r);break;case"details":ne("toggle",r);break;case"input":Ps(r,i),ne("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},ne("invalid",r);break;case"textarea":Ns(r,i),ne("invalid",r)}xl(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&io(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&io(r.textContent,a,e),o=["children",""+a]):Sr.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&ne("scroll",r)}switch(n){case"input":Zr(r),_s(r,i,!0);break;case"textarea":Zr(r),zs(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=jo)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=pc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[mt]=t,e[Rr]=r,Md(e,t,!1,!1),t.stateNode=e;e:{switch(l=Sl(n,r),n){case"dialog":ne("cancel",e),ne("close",e),o=r;break;case"iframe":case"object":case"embed":ne("load",e),o=r;break;case"video":case"audio":for(o=0;o<dr.length;o++)ne(dr[o],e);o=r;break;case"source":ne("error",e),o=r;break;case"img":case"image":case"link":ne("error",e),ne("load",e),o=r;break;case"details":ne("toggle",e),o=r;break;case"input":Ps(e,r),o=gl(e,r),ne("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=se({},r,{value:void 0}),ne("invalid",e);break;case"textarea":Ns(e,r),o=wl(e,r),ne("invalid",e);break;default:o=r}xl(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var s=a[i];i==="style"?gc(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&hc(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Cr(e,s):typeof s=="number"&&Cr(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Sr.hasOwnProperty(i)?s!=null&&i==="onScroll"&&ne("scroll",e):s!=null&&ga(e,i,s,l))}switch(n){case"input":Zr(e),_s(e,r,!1);break;case"textarea":Zr(e),zs(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Kt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?$n(e,!!r.multiple,i,!1):r.defaultValue!=null&&$n(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=jo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Te(t),null;case 6:if(e&&t.stateNode!=null)Fd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(_(166));if(n=on($r.current),on(yt.current),lo(t)){if(r=t.stateNode,n=t.memoizedProps,r[mt]=t,(i=r.nodeValue!==n)&&(e=Qe,e!==null))switch(e.tag){case 3:io(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&io(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[mt]=t,t.stateNode=r}return Te(t),null;case 13:if(re(le),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ie&&Ve!==null&&(t.mode&1)!==0&&(t.flags&128)===0)rd(),Un(),t.flags|=98560,i=!1;else if(i=lo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(_(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(_(317));i[mt]=t}else Un(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Te(t),i=!1}else ut!==null&&(na(ut),ut=null),i=!0;if(!i)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(le.current&1)!==0?ve===0&&(ve=3):Ja())),t.updateQueue!==null&&(t.flags|=4),Te(t),null);case 4:return Wn(),Gl(e,t),e===null&&Tr(t.stateNode.containerInfo),Te(t),null;case 10:return Aa(t.type._context),Te(t),null;case 17:return Ue(t.type)&&Mo(),Te(t),null;case 19:if(re(le),i=t.memoizedState,i===null)return Te(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)lr(i,!1);else{if(ve!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(l=Vo(e),l!==null){for(t.flags|=128,lr(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return te(le,le.current&1|2),t.child}e=e.sibling}i.tail!==null&&fe()>Qn&&(t.flags|=128,r=!0,lr(i,!1),t.lanes=4194304)}else{if(!r)if(e=Vo(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),lr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!ie)return Te(t),null}else 2*fe()-i.renderingStartTime>Qn&&n!==1073741824&&(t.flags|=128,r=!0,lr(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=fe(),t.sibling=null,n=le.current,te(le,r?n&1|2:n&1),t):(Te(t),null);case 22:case 23:return Za(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(We&1073741824)!==0&&(Te(t),t.subtreeFlags&6&&(t.flags|=8192)):Te(t),null;case 24:return null;case 25:return null}throw Error(_(156,t.tag))}function Yh(e,t){switch(Oa(t),t.tag){case 1:return Ue(t.type)&&Mo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Wn(),re(Be),re(Re),Fa(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Da(t),null;case 13:if(re(le),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(_(340));Un()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return re(le),null;case 4:return Wn(),null;case 10:return Aa(t.type._context),null;case 22:case 23:return Za(),null;case 24:return null;default:return null}}var uo=!1,Oe=!1,Gh=typeof WeakSet=="function"?WeakSet:Set,j=null;function On(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ce(e,t,r)}else n.current=null}function Kl(e,t,n){try{n()}catch(r){ce(e,t,r)}}var vu=!1;function Kh(e,t){if(Rl=$o,e=Wc(),La(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,a=-1,s=-1,c=0,p=0,h=e,m=null;t:for(;;){for(var k;h!==n||o!==0&&h.nodeType!==3||(a=l+o),h!==i||r!==0&&h.nodeType!==3||(s=l+r),h.nodeType===3&&(l+=h.nodeValue.length),(k=h.firstChild)!==null;)m=h,h=k;for(;;){if(h===e)break t;if(m===n&&++c===o&&(a=l),m===i&&++p===r&&(s=l),(k=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=k}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(bl={focusedElem:e,selectionRange:n},$o=!1,j=t;j!==null;)if(t=j,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,j=e;else for(;j!==null;){t=j;try{var x=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var y=x.memoizedProps,N=x.memoizedState,d=t.stateNode,u=d.getSnapshotBeforeUpdate(t.elementType===t.type?y:at(t.type,y),N);d.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(w){ce(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,j=e;break}j=t.return}return x=vu,vu=!1,x}function yr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Kl(t,n,i)}o=o.next}while(o!==r)}}function fi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Xl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Bd(e){var t=e.alternate;t!==null&&(e.alternate=null,Bd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[mt],delete t[Rr],delete t[Il],delete t[Oh],delete t[Rh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ud(e){return e.tag===5||e.tag===3||e.tag===4}function yu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ud(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Zl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=jo));else if(r!==4&&(e=e.child,e!==null))for(Zl(e,t,n),e=e.sibling;e!==null;)Zl(e,t,n),e=e.sibling}function Jl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Jl(e,t,n),e=e.sibling;e!==null;)Jl(e,t,n),e=e.sibling}var Pe=null,st=!1;function Ot(e,t,n){for(n=n.child;n!==null;)Hd(e,t,n),n=n.sibling}function Hd(e,t,n){if(vt&&typeof vt.onCommitFiberUnmount=="function")try{vt.onCommitFiberUnmount(oi,n)}catch{}switch(n.tag){case 5:Oe||On(n,t);case 6:var r=Pe,o=st;Pe=null,Ot(e,t,n),Pe=r,st=o,Pe!==null&&(st?(e=Pe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Pe.removeChild(n.stateNode));break;case 18:Pe!==null&&(st?(e=Pe,n=n.stateNode,e.nodeType===8?Zi(e.parentNode,n):e.nodeType===1&&Zi(e,n),Nr(e)):Zi(Pe,n.stateNode));break;case 4:r=Pe,o=st,Pe=n.stateNode.containerInfo,st=!0,Ot(e,t,n),Pe=r,st=o;break;case 0:case 11:case 14:case 15:if(!Oe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&((i&2)!==0||(i&4)!==0)&&Kl(n,t,l),o=o.next}while(o!==r)}Ot(e,t,n);break;case 1:if(!Oe&&(On(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ce(n,t,a)}Ot(e,t,n);break;case 21:Ot(e,t,n);break;case 22:n.mode&1?(Oe=(r=Oe)||n.memoizedState!==null,Ot(e,t,n),Oe=r):Ot(e,t,n);break;default:Ot(e,t,n)}}function wu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Gh),t.forEach(function(r){var o=o0.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function lt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:Pe=a.stateNode,st=!1;break e;case 3:Pe=a.stateNode.containerInfo,st=!0;break e;case 4:Pe=a.stateNode.containerInfo,st=!0;break e}a=a.return}if(Pe===null)throw Error(_(160));Hd(i,l,o),Pe=null,st=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(c){ce(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Wd(t,e),t=t.sibling}function Wd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(lt(t,e),pt(e),r&4){try{yr(3,e,e.return),fi(3,e)}catch(y){ce(e,e.return,y)}try{yr(5,e,e.return)}catch(y){ce(e,e.return,y)}}break;case 1:lt(t,e),pt(e),r&512&&n!==null&&On(n,n.return);break;case 5:if(lt(t,e),pt(e),r&512&&n!==null&&On(n,n.return),e.flags&32){var o=e.stateNode;try{Cr(o,"")}catch(y){ce(e,e.return,y)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&dc(o,i),Sl(a,l);var c=Sl(a,i);for(l=0;l<s.length;l+=2){var p=s[l],h=s[l+1];p==="style"?gc(o,h):p==="dangerouslySetInnerHTML"?hc(o,h):p==="children"?Cr(o,h):ga(o,p,h,c)}switch(a){case"input":vl(o,i);break;case"textarea":fc(o,i);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var k=i.value;k!=null?$n(o,!!i.multiple,k,!1):m!==!!i.multiple&&(i.defaultValue!=null?$n(o,!!i.multiple,i.defaultValue,!0):$n(o,!!i.multiple,i.multiple?[]:"",!1))}o[Rr]=i}catch(y){ce(e,e.return,y)}}break;case 6:if(lt(t,e),pt(e),r&4){if(e.stateNode===null)throw Error(_(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(y){ce(e,e.return,y)}}break;case 3:if(lt(t,e),pt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Nr(t.containerInfo)}catch(y){ce(e,e.return,y)}break;case 4:lt(t,e),pt(e);break;case 13:lt(t,e),pt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Ka=fe())),r&4&&wu(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(Oe=(c=Oe)||p,lt(t,e),Oe=c):lt(t,e),pt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!p&&(e.mode&1)!==0)for(j=e,p=e.child;p!==null;){for(h=j=p;j!==null;){switch(m=j,k=m.child,m.tag){case 0:case 11:case 14:case 15:yr(4,m,m.return);break;case 1:On(m,m.return);var x=m.stateNode;if(typeof x.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(y){ce(r,n,y)}}break;case 5:On(m,m.return);break;case 22:if(m.memoizedState!==null){xu(h);continue}}k!==null?(k.return=m,j=k):xu(h)}p=p.sibling}e:for(p=null,h=e;;){if(h.tag===5){if(p===null){p=h;try{o=h.stateNode,c?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=h.stateNode,s=h.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=mc("display",l))}catch(y){ce(e,e.return,y)}}}else if(h.tag===6){if(p===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(y){ce(e,e.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;p===h&&(p=null),h=h.return}p===h&&(p=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:lt(t,e),pt(e),r&4&&wu(e);break;case 21:break;default:lt(t,e),pt(e)}}function pt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Ud(n)){var r=n;break e}n=n.return}throw Error(_(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Cr(o,""),r.flags&=-33);var i=yu(e);Jl(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,a=yu(e);Zl(e,a,l);break;default:throw Error(_(161))}}catch(s){ce(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Xh(e,t,n){j=e,Vd(e)}function Vd(e,t,n){for(var r=(e.mode&1)!==0;j!==null;){var o=j,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||uo;if(!l){var a=o.alternate,s=a!==null&&a.memoizedState!==null||Oe;a=uo;var c=Oe;if(uo=l,(Oe=s)&&!c)for(j=o;j!==null;)l=j,s=l.child,l.tag===22&&l.memoizedState!==null?Su(o):s!==null?(s.return=l,j=s):Su(o);for(;i!==null;)j=i,Vd(i),i=i.sibling;j=o,uo=a,Oe=c}ku(e)}else(o.subtreeFlags&8772)!==0&&i!==null?(i.return=o,j=i):ku(e)}}function ku(e){for(;j!==null;){var t=j;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Oe||fi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Oe)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:at(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&ru(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ru(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var p=c.memoizedState;if(p!==null){var h=p.dehydrated;h!==null&&Nr(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}Oe||t.flags&512&&Xl(t)}catch(m){ce(t,t.return,m)}}if(t===e){j=null;break}if(n=t.sibling,n!==null){n.return=t.return,j=n;break}j=t.return}}function xu(e){for(;j!==null;){var t=j;if(t===e){j=null;break}var n=t.sibling;if(n!==null){n.return=t.return,j=n;break}j=t.return}}function Su(e){for(;j!==null;){var t=j;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{fi(4,t)}catch(s){ce(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){ce(t,o,s)}}var i=t.return;try{Xl(t)}catch(s){ce(t,i,s)}break;case 5:var l=t.return;try{Xl(t)}catch(s){ce(t,l,s)}}}catch(s){ce(t,t.return,s)}if(t===e){j=null;break}var a=t.sibling;if(a!==null){a.return=t.return,j=a;break}j=t.return}}var Zh=Math.ceil,Go=Lt.ReactCurrentDispatcher,Ya=Lt.ReactCurrentOwner,nt=Lt.ReactCurrentBatchConfig,Q=0,ke=null,me=null,_e=0,We=0,Rn=Jt(0),ve=0,Mr=null,fn=0,pi=0,Ga=0,wr=null,De=null,Ka=0,Qn=1/0,kt=null,Ko=!1,ql=null,Ht=null,co=!1,jt=null,Xo=0,kr=0,ea=null,Po=-1,_o=0;function Ae(){return(Q&6)!==0?fe():Po!==-1?Po:Po=fe()}function Wt(e){return(e.mode&1)===0?1:(Q&2)!==0&&_e!==0?_e&-_e:$h.transition!==null?(_o===0&&(_o=zc()),_o):(e=J,e!==0||(e=window.event,e=e===void 0?16:Ac(e.type)),e)}function dt(e,t,n,r){if(50<kr)throw kr=0,ea=null,Error(_(185));Br(e,n,r),((Q&2)===0||e!==ke)&&(e===ke&&((Q&2)===0&&(pi|=n),ve===4&&At(e,_e)),He(e,r),n===1&&Q===0&&(t.mode&1)===0&&(Qn=fe()+500,ui&&qt()))}function He(e,t){var n=e.callbackNode;$p(e,t);var r=bo(e,e===ke?_e:0);if(r===0)n!==null&&Os(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Os(n),t===1)e.tag===0?bh(Cu.bind(null,e)):ed(Cu.bind(null,e)),Lh(function(){(Q&6)===0&&qt()}),n=null;else{switch(Lc(r)){case 1:n=xa;break;case 4:n=_c;break;case 16:n=Ro;break;case 536870912:n=Nc;break;default:n=Ro}n=qd(n,Qd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Qd(e,t){if(Po=-1,_o=0,(Q&6)!==0)throw Error(_(327));var n=e.callbackNode;if(Dn()&&e.callbackNode!==n)return null;var r=bo(e,e===ke?_e:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Zo(e,r);else{t=r;var o=Q;Q|=2;var i=Gd();(ke!==e||_e!==t)&&(kt=null,Qn=fe()+500,an(e,t));do try{e0();break}catch(a){Yd(e,a)}while(1);$a(),Go.current=i,Q=o,me!==null?t=0:(ke=null,_e=0,t=ve)}if(t!==0){if(t===2&&(o=Nl(e),o!==0&&(r=o,t=ta(e,o))),t===1)throw n=Mr,an(e,0),At(e,r),He(e,fe()),n;if(t===6)At(e,r);else{if(o=e.current.alternate,(r&30)===0&&!Jh(o)&&(t=Zo(e,r),t===2&&(i=Nl(e),i!==0&&(r=i,t=ta(e,i))),t===1))throw n=Mr,an(e,0),At(e,r),He(e,fe()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(_(345));case 2:tn(e,De,kt);break;case 3:if(At(e,r),(r&130023424)===r&&(t=Ka+500-fe(),10<t)){if(bo(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Ae(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Al(tn.bind(null,e,De,kt),t);break}tn(e,De,kt);break;case 4:if(At(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-ct(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=fe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Zh(r/1960))-r,10<r){e.timeoutHandle=Al(tn.bind(null,e,De,kt),r);break}tn(e,De,kt);break;case 5:tn(e,De,kt);break;default:throw Error(_(329))}}}return He(e,fe()),e.callbackNode===n?Qd.bind(null,e):null}function ta(e,t){var n=wr;return e.current.memoizedState.isDehydrated&&(an(e,t).flags|=256),e=Zo(e,t),e!==2&&(t=De,De=n,t!==null&&na(t)),e}function na(e){De===null?De=e:De.push.apply(De,e)}function Jh(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!ft(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function At(e,t){for(t&=~Ga,t&=~pi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ct(t),r=1<<n;e[n]=-1,t&=~r}}function Cu(e){if((Q&6)!==0)throw Error(_(327));Dn();var t=bo(e,0);if((t&1)===0)return He(e,fe()),null;var n=Zo(e,t);if(e.tag!==0&&n===2){var r=Nl(e);r!==0&&(t=r,n=ta(e,r))}if(n===1)throw n=Mr,an(e,0),At(e,t),He(e,fe()),n;if(n===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,tn(e,De,kt),He(e,fe()),null}function Xa(e,t){var n=Q;Q|=1;try{return e(t)}finally{Q=n,Q===0&&(Qn=fe()+500,ui&&qt())}}function pn(e){jt!==null&&jt.tag===0&&(Q&6)===0&&Dn();var t=Q;Q|=1;var n=nt.transition,r=J;try{if(nt.transition=null,J=1,e)return e()}finally{J=r,nt.transition=n,Q=t,(Q&6)===0&&qt()}}function Za(){We=Rn.current,re(Rn)}function an(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,zh(n)),me!==null)for(n=me.return;n!==null;){var r=n;switch(Oa(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Mo();break;case 3:Wn(),re(Be),re(Re),Fa();break;case 5:Da(r);break;case 4:Wn();break;case 13:re(le);break;case 19:re(le);break;case 10:Aa(r.type._context);break;case 22:case 23:Za()}n=n.return}if(ke=e,me=e=Vt(e.current,null),_e=We=t,ve=0,Mr=null,Ga=pi=fn=0,De=wr=null,rn!==null){for(t=0;t<rn.length;t++)if(n=rn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}rn=null}return e}function Yd(e,t){do{var n=me;try{if($a(),So.current=Yo,Qo){for(var r=ae.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Qo=!1}if(dn=0,we=ge=ae=null,vr=!1,Ar=0,Ya.current=null,n===null||n.return===null){ve=1,Mr=t,me=null;break}e:{var i=e,l=n.return,a=n,s=t;if(t=_e,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,p=a,h=p.tag;if((p.mode&1)===0&&(h===0||h===11||h===15)){var m=p.alternate;m?(p.updateQueue=m.updateQueue,p.memoizedState=m.memoizedState,p.lanes=m.lanes):(p.updateQueue=null,p.memoizedState=null)}var k=cu(l);if(k!==null){k.flags&=-257,du(k,l,a,i,t),k.mode&1&&uu(i,c,t),t=k,s=c;var x=t.updateQueue;if(x===null){var y=new Set;y.add(s),t.updateQueue=y}else x.add(s);break e}else{if((t&1)===0){uu(i,c,t),Ja();break e}s=Error(_(426))}}else if(ie&&a.mode&1){var N=cu(l);if(N!==null){(N.flags&65536)===0&&(N.flags|=256),du(N,l,a,i,t),Ra(Vn(s,a));break e}}i=s=Vn(s,a),ve!==4&&(ve=2),wr===null?wr=[i]:wr.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var d=Td(i,s,t);nu(i,d);break e;case 1:a=s;var u=i.type,f=i.stateNode;if((i.flags&128)===0&&(typeof u.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ht===null||!Ht.has(f)))){i.flags|=65536,t&=-t,i.lanes|=t;var w=Od(i,a,t);nu(i,w);break e}}i=i.return}while(i!==null)}Xd(n)}catch(E){t=E,me===n&&n!==null&&(me=n=n.return);continue}break}while(1)}function Gd(){var e=Go.current;return Go.current=Yo,e===null?Yo:e}function Ja(){(ve===0||ve===3||ve===2)&&(ve=4),ke===null||(fn&268435455)===0&&(pi&268435455)===0||At(ke,_e)}function Zo(e,t){var n=Q;Q|=2;var r=Gd();(ke!==e||_e!==t)&&(kt=null,an(e,t));do try{qh();break}catch(o){Yd(e,o)}while(1);if($a(),Q=n,Go.current=r,me!==null)throw Error(_(261));return ke=null,_e=0,ve}function qh(){for(;me!==null;)Kd(me)}function e0(){for(;me!==null&&!Pp();)Kd(me)}function Kd(e){var t=Jd(e.alternate,e,We);e.memoizedProps=e.pendingProps,t===null?Xd(e):me=t,Ya.current=null}function Xd(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=Qh(n,t,We),n!==null){me=n;return}}else{if(n=Yh(n,t),n!==null){n.flags&=32767,me=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ve=6,me=null;return}}if(t=t.sibling,t!==null){me=t;return}me=t=e}while(t!==null);ve===0&&(ve=5)}function tn(e,t,n){var r=J,o=nt.transition;try{nt.transition=null,J=1,t0(e,t,n,r)}finally{nt.transition=o,J=r}return null}function t0(e,t,n,r){do Dn();while(jt!==null);if((Q&6)!==0)throw Error(_(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Ap(e,i),e===ke&&(me=ke=null,_e=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||co||(co=!0,qd(Ro,function(){return Dn(),null})),i=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||i){i=nt.transition,nt.transition=null;var l=J;J=1;var a=Q;Q|=4,Ya.current=null,Kh(e,n),Wd(n,e),xh(bl),$o=!!Rl,bl=Rl=null,e.current=n,Xh(n),_p(),Q=a,J=l,nt.transition=i}else e.current=n;if(co&&(co=!1,jt=e,Xo=o),i=e.pendingLanes,i===0&&(Ht=null),Lp(n.stateNode),He(e,fe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Ko)throw Ko=!1,e=ql,ql=null,e;return(Xo&1)!==0&&e.tag!==0&&Dn(),i=e.pendingLanes,(i&1)!==0?e===ea?kr++:(kr=0,ea=e):kr=0,qt(),null}function Dn(){if(jt!==null){var e=Lc(Xo),t=nt.transition,n=J;try{if(nt.transition=null,J=16>e?16:e,jt===null)var r=!1;else{if(e=jt,jt=null,Xo=0,(Q&6)!==0)throw Error(_(331));var o=Q;for(Q|=4,j=e.current;j!==null;){var i=j,l=i.child;if((j.flags&16)!==0){var a=i.deletions;if(a!==null){for(var s=0;s<a.length;s++){var c=a[s];for(j=c;j!==null;){var p=j;switch(p.tag){case 0:case 11:case 15:yr(8,p,i)}var h=p.child;if(h!==null)h.return=p,j=h;else for(;j!==null;){p=j;var m=p.sibling,k=p.return;if(Bd(p),p===c){j=null;break}if(m!==null){m.return=k,j=m;break}j=k}}}var x=i.alternate;if(x!==null){var y=x.child;if(y!==null){x.child=null;do{var N=y.sibling;y.sibling=null,y=N}while(y!==null)}}j=i}}if((i.subtreeFlags&2064)!==0&&l!==null)l.return=i,j=l;else e:for(;j!==null;){if(i=j,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:yr(9,i,i.return)}var d=i.sibling;if(d!==null){d.return=i.return,j=d;break e}j=i.return}}var u=e.current;for(j=u;j!==null;){l=j;var f=l.child;if((l.subtreeFlags&2064)!==0&&f!==null)f.return=l,j=f;else e:for(l=u;j!==null;){if(a=j,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:fi(9,a)}}catch(E){ce(a,a.return,E)}if(a===l){j=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,j=w;break e}j=a.return}}if(Q=o,qt(),vt&&typeof vt.onPostCommitFiberRoot=="function")try{vt.onPostCommitFiberRoot(oi,e)}catch{}r=!0}return r}finally{J=n,nt.transition=t}}return!1}function Eu(e,t,n){t=Vn(n,t),t=Td(e,t,1),e=Ut(e,t,1),t=Ae(),e!==null&&(Br(e,1,t),He(e,t))}function ce(e,t,n){if(e.tag===3)Eu(e,e,n);else for(;t!==null;){if(t.tag===3){Eu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ht===null||!Ht.has(r))){e=Vn(n,e),e=Od(t,e,1),t=Ut(t,e,1),e=Ae(),t!==null&&(Br(t,1,e),He(t,e));break}}t=t.return}}function n0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ae(),e.pingedLanes|=e.suspendedLanes&n,ke===e&&(_e&n)===n&&(ve===4||ve===3&&(_e&130023424)===_e&&500>fe()-Ka?an(e,0):Ga|=n),He(e,t)}function Zd(e,t){t===0&&((e.mode&1)===0?t=1:(t=eo,eo<<=1,(eo&130023424)===0&&(eo=4194304)));var n=Ae();e=Nt(e,t),e!==null&&(Br(e,t,n),He(e,n))}function r0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Zd(e,n)}function o0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(t),Zd(e,n)}var Jd;Jd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Be.current)Fe=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Fe=!1,Vh(e,t,n);Fe=(e.flags&131072)!==0}else Fe=!1,ie&&(t.flags&1048576)!==0&&td(t,Bo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Eo(e,t),e=t.pendingProps;var o=Bn(t,Re.current);Mn(t,n),o=Ua(null,t,r,e,o,n);var i=Ha();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ue(r)?(i=!0,Do(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,ja(t),o.updater=ci,t.stateNode=o,o._reactInternals=t,Ul(t,r,e,n),t=Vl(null,t,r,!0,i,n)):(t.tag=0,ie&&i&&Ta(t),be(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Eo(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=l0(r),e=at(r,e),o){case 0:t=Wl(null,t,r,e,n);break e;case 1:t=hu(null,t,r,e,n);break e;case 11:t=fu(null,t,r,e,n);break e;case 14:t=pu(null,t,r,at(r.type,e),n);break e}throw Error(_(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:at(r,o),Wl(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:at(r,o),hu(e,t,r,o,n);case 3:e:{if(Ad(t),e===null)throw Error(_(387));r=t.pendingProps,i=t.memoizedState,o=i.element,id(e,t),Wo(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Vn(Error(_(423)),t),t=mu(e,t,r,n,o);break e}else if(r!==o){o=Vn(Error(_(424)),t),t=mu(e,t,r,n,o);break e}else for(Ve=Bt(t.stateNode.containerInfo.firstChild),Qe=t,ie=!0,ut=null,n=ud(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Un(),r===o){t=zt(e,t,n);break e}be(e,t,r,n)}t=t.child}return t;case 5:return cd(t),e===null&&Dl(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,$l(r,o)?l=null:i!==null&&$l(r,i)&&(t.flags|=32),$d(e,t),be(e,t,l,n),t.child;case 6:return e===null&&Dl(t),null;case 13:return Id(e,t,n);case 4:return Ma(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Hn(t,null,r,n):be(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:at(r,o),fu(e,t,r,o,n);case 7:return be(e,t,t.pendingProps,n),t.child;case 8:return be(e,t,t.pendingProps.children,n),t.child;case 12:return be(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,te(Uo,r._currentValue),r._currentValue=l,i!==null)if(ft(i.value,l)){if(i.children===o.children&&!Be.current){t=zt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){l=i.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=Et(-1,n&-n),s.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var p=c.pending;p===null?s.next=s:(s.next=p.next,p.next=s),c.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Fl(i.return,n,t),a.lanes|=n;break}s=s.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(_(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Fl(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}be(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Mn(t,n),o=rt(o),r=r(o),t.flags|=1,be(e,t,r,n),t.child;case 14:return r=t.type,o=at(r,t.pendingProps),o=at(r.type,o),pu(e,t,r,o,n);case 15:return Rd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:at(r,o),Eo(e,t),t.tag=1,Ue(r)?(e=!0,Do(t)):e=!1,Mn(t,n),ad(t,r,o),Ul(t,r,o,n),Vl(null,t,r,!0,e,n);case 19:return jd(e,t,n);case 22:return bd(e,t,n)}throw Error(_(156,t.tag))};function qd(e,t){return Pc(e,t)}function i0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function tt(e,t,n,r){return new i0(e,t,n,r)}function qa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function l0(e){if(typeof e=="function")return qa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ya)return 11;if(e===wa)return 14}return 2}function Vt(e,t){var n=e.alternate;return n===null?(n=tt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function No(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")qa(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Sn:return sn(n.children,o,i,t);case va:l=8,o|=8;break;case fl:return e=tt(12,n,t,o|2),e.elementType=fl,e.lanes=i,e;case pl:return e=tt(13,n,t,o),e.elementType=pl,e.lanes=i,e;case hl:return e=tt(19,n,t,o),e.elementType=hl,e.lanes=i,e;case sc:return hi(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case lc:l=10;break e;case ac:l=9;break e;case ya:l=11;break e;case wa:l=14;break e;case Rt:l=16,r=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return t=tt(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function sn(e,t,n,r){return e=tt(7,e,r,t),e.lanes=n,e}function hi(e,t,n,r){return e=tt(22,e,r,t),e.elementType=sc,e.lanes=n,e.stateNode={isHidden:!1},e}function il(e,t,n){return e=tt(6,e,null,t),e.lanes=n,e}function ll(e,t,n){return t=tt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function a0(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fi(0),this.expirationTimes=Fi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fi(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function es(e,t,n,r,o,i,l,a,s){return e=new a0(e,t,n,a,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=tt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ja(i),e}function s0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function ef(e){if(!e)return Xt;e=e._reactInternals;e:{if(gn(e)!==e||e.tag!==1)throw Error(_(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ue(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(_(171))}if(e.tag===1){var n=e.type;if(Ue(n))return qc(e,n,t)}return t}function tf(e,t,n,r,o,i,l,a,s){return e=es(n,r,!0,e,o,i,l,a,s),e.context=ef(null),n=e.current,r=Ae(),o=Wt(n),i=Et(r,o),i.callback=t!=null?t:null,Ut(n,i,o),e.current.lanes=o,Br(e,o,r),He(e,r),e}function mi(e,t,n,r){var o=t.current,i=Ae(),l=Wt(o);return n=ef(n),t.context===null?t.context=n:t.pendingContext=n,t=Et(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ut(o,t,l),e!==null&&(dt(e,o,l,i),xo(e,o,l)),l}function Jo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Pu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ts(e,t){Pu(e,t),(e=e.alternate)&&Pu(e,t)}function u0(){return null}var nf=typeof reportError=="function"?reportError:function(e){console.error(e)};function ns(e){this._internalRoot=e}gi.prototype.render=ns.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(_(409));mi(e,t,null,null)};gi.prototype.unmount=ns.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;pn(function(){mi(null,e,null,null)}),t[_t]=null}};function gi(e){this._internalRoot=e}gi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Rc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<$t.length&&t!==0&&t<$t[n].priority;n++);$t.splice(n,0,e),n===0&&$c(e)}};function rs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function vi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function _u(){}function c0(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var c=Jo(l);i.call(c)}}var l=tf(t,r,e,0,null,!1,!1,"",_u);return e._reactRootContainer=l,e[_t]=l.current,Tr(e.nodeType===8?e.parentNode:e),pn(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var c=Jo(s);a.call(c)}}var s=es(e,0,!1,null,null,!1,!1,"",_u);return e._reactRootContainer=s,e[_t]=s.current,Tr(e.nodeType===8?e.parentNode:e),pn(function(){mi(t,s,n,r)}),s}function yi(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var a=o;o=function(){var s=Jo(l);a.call(s)}}mi(t,l,e,o)}else l=c0(n,t,e,o,r);return Jo(l)}Tc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=cr(t.pendingLanes);n!==0&&(Sa(t,n|1),He(t,fe()),(Q&6)===0&&(Qn=fe()+500,qt()))}break;case 13:pn(function(){var r=Nt(e,1);if(r!==null){var o=Ae();dt(r,e,1,o)}}),ts(e,1)}};Ca=function(e){if(e.tag===13){var t=Nt(e,134217728);if(t!==null){var n=Ae();dt(t,e,134217728,n)}ts(e,134217728)}};Oc=function(e){if(e.tag===13){var t=Wt(e),n=Nt(e,t);if(n!==null){var r=Ae();dt(n,e,t,r)}ts(e,t)}};Rc=function(){return J};bc=function(e,t){var n=J;try{return J=e,t()}finally{J=n}};El=function(e,t,n){switch(t){case"input":if(vl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=si(r);if(!o)throw Error(_(90));cc(r),vl(r,o)}}}break;case"textarea":fc(e,n);break;case"select":t=n.value,t!=null&&$n(e,!!n.multiple,t,!1)}};wc=Xa;kc=pn;var d0={usingClientEntryPoint:!1,Events:[Hr,_n,si,vc,yc,Xa]},ar={findFiberByHostInstance:nn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},f0={bundleType:ar.bundleType,version:ar.version,rendererPackageName:ar.rendererPackageName,rendererConfig:ar.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Lt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Cc(e),e===null?null:e.stateNode},findFiberByHostInstance:ar.findFiberByHostInstance||u0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var fo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fo.isDisabled&&fo.supportsFiber)try{oi=fo.inject(f0),vt=fo}catch{}}Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=d0;Ge.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!rs(t))throw Error(_(200));return s0(e,t,null,n)};Ge.createRoot=function(e,t){if(!rs(e))throw Error(_(299));var n=!1,r="",o=nf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=es(e,1,!1,null,null,n,!1,r,o),e[_t]=t.current,Tr(e.nodeType===8?e.parentNode:e),new ns(t)};Ge.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=Cc(t),e=e===null?null:e.stateNode,e};Ge.flushSync=function(e){return pn(e)};Ge.hydrate=function(e,t,n){if(!vi(t))throw Error(_(200));return yi(null,e,t,!0,n)};Ge.hydrateRoot=function(e,t,n){if(!rs(e))throw Error(_(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=nf;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=tf(t,null,e,1,n!=null?n:null,o,!1,i,l),e[_t]=t.current,Tr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new gi(t)};Ge.render=function(e,t,n){if(!vi(t))throw Error(_(200));return yi(null,e,t,!1,n)};Ge.unmountComponentAtNode=function(e){if(!vi(e))throw Error(_(40));return e._reactRootContainer?(pn(function(){yi(null,null,e,!1,function(){e._reactRootContainer=null,e[_t]=null})}),!0):!1};Ge.unstable_batchedUpdates=Xa;Ge.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!vi(n))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return yi(e,t,n,!1,r)};Ge.version="18.2.0-next-9e3b772b8-20220608";function rf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rf)}catch(e){console.error(e)}}rf(),tc.exports=Ge;var Nu=tc.exports;cl.createRoot=Nu.createRoot,cl.hydrateRoot=Nu.hydrateRoot;function qo(){return qo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},qo.apply(this,arguments)}var ln;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(ln||(ln={}));var zu=function(e){return e},Lu="beforeunload",p0="popstate";function h0(e){e===void 0&&(e={});var t=e,n=t.window,r=n===void 0?document.defaultView:n,o=r.history;function i(){var C=r.location,P=C.pathname,D=C.search,M=C.hash,Y=o.state||{};return[Y.idx,zu({pathname:P,search:D,hash:M,state:Y.usr||null,key:Y.key||"default"})]}var l=null;function a(){if(l)k.call(l),l=null;else{var C=ln.Pop,P=i(),D=P[0],M=P[1];if(k.length){if(D!=null){var Y=p-D;Y&&(l={action:C,location:M,retry:function(){E(Y*-1)}},E(Y))}}else u(C)}}r.addEventListener(p0,a);var s=ln.Pop,c=i(),p=c[0],h=c[1],m=Ou(),k=Ou();p==null&&(p=0,o.replaceState(qo({},o.state,{idx:p}),""));function x(C){return typeof C=="string"?C:ra(C)}function y(C,P){return P===void 0&&(P=null),zu(qo({pathname:h.pathname,hash:"",search:""},typeof C=="string"?vn(C):C,{state:P,key:m0()}))}function N(C,P){return[{usr:C.state,key:C.key,idx:P},x(C)]}function d(C,P,D){return!k.length||(k.call({action:C,location:P,retry:D}),!1)}function u(C){s=C;var P=i();p=P[0],h=P[1],m.call({action:s,location:h})}function f(C,P){var D=ln.Push,M=y(C,P);function Y(){f(C,P)}if(d(D,M,Y)){var ee=N(M,p+1),oe=ee[0],pe=ee[1];try{o.pushState(oe,"",pe)}catch{r.location.assign(pe)}u(D)}}function w(C,P){var D=ln.Replace,M=y(C,P);function Y(){w(C,P)}if(d(D,M,Y)){var ee=N(M,p),oe=ee[0],pe=ee[1];o.replaceState(oe,"",pe),u(D)}}function E(C){o.go(C)}var $={get action(){return s},get location(){return h},createHref:x,push:f,replace:w,go:E,back:function(){E(-1)},forward:function(){E(1)},listen:function(P){return m.push(P)},block:function(P){var D=k.push(P);return k.length===1&&r.addEventListener(Lu,Tu),function(){D(),k.length||r.removeEventListener(Lu,Tu)}}};return $}function Tu(e){e.preventDefault(),e.returnValue=""}function Ou(){var e=[];return{get length(){return e.length},push:function(n){return e.push(n),function(){e=e.filter(function(r){return r!==n})}},call:function(n){e.forEach(function(r){return r&&r(n)})}}}function m0(){return Math.random().toString(36).substr(2,8)}function ra(e){var t=e.pathname,n=t===void 0?"/":t,r=e.search,o=r===void 0?"":r,i=e.hash,l=i===void 0?"":i;return o&&o!=="?"&&(n+=o.charAt(0)==="?"?o:"?"+o),l&&l!=="#"&&(n+=l.charAt(0)==="#"?l:"#"+l),n}function vn(e){var t={};if(e){var n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));var r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}/**
 * React Router v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const os=b.exports.createContext(null),is=b.exports.createContext(null),Zn=b.exports.createContext({outlet:null,matches:[]});function wt(e,t){if(!e)throw new Error(t)}function g0(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?vn(t):t,o=af(r.pathname||"/",n);if(o==null)return null;let i=of(e);v0(i);let l=null;for(let a=0;l==null&&a<i.length;++a)l=_0(i[a],o);return l}function of(e,t,n,r){return t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r=""),e.forEach((o,i)=>{let l={relativePath:o.path||"",caseSensitive:o.caseSensitive===!0,childrenIndex:i,route:o};l.relativePath.startsWith("/")&&(l.relativePath.startsWith(r)||wt(!1),l.relativePath=l.relativePath.slice(r.length));let a=Qt([r,l.relativePath]),s=n.concat(l);o.children&&o.children.length>0&&(o.index===!0&&wt(!1),of(o.children,t,s,a)),!(o.path==null&&!o.index)&&t.push({path:a,score:E0(a,o.index),routesMeta:s})}),t}function v0(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:P0(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const y0=/^:\w+$/,w0=3,k0=2,x0=1,S0=10,C0=-2,Ru=e=>e==="*";function E0(e,t){let n=e.split("/"),r=n.length;return n.some(Ru)&&(r+=C0),t&&(r+=k0),n.filter(o=>!Ru(o)).reduce((o,i)=>o+(y0.test(i)?w0:i===""?x0:S0),r)}function P0(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function _0(e,t){let{routesMeta:n}=e,r={},o="/",i=[];for(let l=0;l<n.length;++l){let a=n[l],s=l===n.length-1,c=o==="/"?t:t.slice(o.length)||"/",p=N0({path:a.relativePath,caseSensitive:a.caseSensitive,end:s},c);if(!p)return null;Object.assign(r,p.params);let h=a.route;i.push({params:r,pathname:Qt([o,p.pathname]),pathnameBase:sf(Qt([o,p.pathnameBase])),route:h}),p.pathnameBase!=="/"&&(o=Qt([o,p.pathnameBase]))}return i}function N0(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=z0(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],l=i.replace(/(.)\/+$/,"$1"),a=o.slice(1);return{params:r.reduce((c,p,h)=>{if(p==="*"){let m=a[h]||"";l=i.slice(0,i.length-m.length).replace(/(.)\/+$/,"$1")}return c[p]=L0(a[h]||""),c},{}),pathname:i,pathnameBase:l,pattern:e}}function z0(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0);let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(l,a)=>(r.push(a),"([^\\/]+)"));return e.endsWith("*")?(r.push("*"),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o+=n?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(o,t?void 0:"i"),r]}function L0(e,t){try{return decodeURIComponent(e)}catch{return e}}function T0(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?vn(e):e;return{pathname:n?n.startsWith("/")?n:O0(n,t):t,search:b0(r),hash:$0(o)}}function O0(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function lf(e,t,n){let r=typeof e=="string"?vn(e):e,o=e===""||r.pathname===""?"/":r.pathname,i;if(o==null)i=n;else{let a=t.length-1;if(o.startsWith("..")){let s=o.split("/");for(;s[0]==="..";)s.shift(),a-=1;r.pathname=s.join("/")}i=a>=0?t[a]:"/"}let l=T0(r,i);return o&&o!=="/"&&o.endsWith("/")&&!l.pathname.endsWith("/")&&(l.pathname+="/"),l}function R0(e){return e===""||e.pathname===""?"/":typeof e=="string"?vn(e).pathname:e.pathname}function af(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=e.charAt(t.length);return n&&n!=="/"?null:e.slice(t.length)||"/"}const Qt=e=>e.join("/").replace(/\/\/+/g,"/"),sf=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),b0=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,$0=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function A0(e){Vr()||wt(!1);let{basename:t,navigator:n}=b.exports.useContext(os),{hash:r,pathname:o,search:i}=as(e),l=o;if(t!=="/"){let a=R0(e),s=a!=null&&a.endsWith("/");l=o==="/"?t+(s?"/":""):Qt([t,o])}return n.createHref({pathname:l,search:i,hash:r})}function Vr(){return b.exports.useContext(is)!=null}function Qr(){return Vr()||wt(!1),b.exports.useContext(is).location}function ls(){Vr()||wt(!1);let{basename:e,navigator:t}=b.exports.useContext(os),{matches:n}=b.exports.useContext(Zn),{pathname:r}=Qr(),o=JSON.stringify(n.map(a=>a.pathnameBase)),i=b.exports.useRef(!1);return b.exports.useEffect(()=>{i.current=!0}),b.exports.useCallback(function(a,s){if(s===void 0&&(s={}),!i.current)return;if(typeof a=="number"){t.go(a);return}let c=lf(a,JSON.parse(o),r);e!=="/"&&(c.pathname=Qt([e,c.pathname])),(s.replace?t.replace:t.push)(c,s.state)},[e,t,o,r])}const I0=b.exports.createContext(null);function j0(e){let t=b.exports.useContext(Zn).outlet;return t&&b.exports.createElement(I0.Provider,{value:e},t)}function M0(){let{matches:e}=b.exports.useContext(Zn),t=e[e.length-1];return t?t.params:{}}function as(e){let{matches:t}=b.exports.useContext(Zn),{pathname:n}=Qr(),r=JSON.stringify(t.map(o=>o.pathnameBase));return b.exports.useMemo(()=>lf(e,JSON.parse(r),n),[e,r,n])}function D0(e,t){Vr()||wt(!1);let{matches:n}=b.exports.useContext(Zn),r=n[n.length-1],o=r?r.params:{};r&&r.pathname;let i=r?r.pathnameBase:"/";r&&r.route;let l=Qr(),a;if(t){var s;let m=typeof t=="string"?vn(t):t;i==="/"||((s=m.pathname)==null?void 0:s.startsWith(i))||wt(!1),a=m}else a=l;let c=a.pathname||"/",p=i==="/"?c:c.slice(i.length)||"/",h=g0(e,{pathname:p});return F0(h&&h.map(m=>Object.assign({},m,{params:Object.assign({},o,m.params),pathname:Qt([i,m.pathname]),pathnameBase:m.pathnameBase==="/"?i:Qt([i,m.pathnameBase])})),n)}function F0(e,t){return t===void 0&&(t=[]),e==null?null:e.reduceRight((n,r,o)=>b.exports.createElement(Zn.Provider,{children:r.route.element!==void 0?r.route.element:n,value:{outlet:n,matches:t.concat(e.slice(0,o+1))}}),null)}function B0(e){return j0(e.context)}function wn(e){wt(!1)}function U0(e){let{basename:t="/",children:n=null,location:r,navigationType:o=ln.Pop,navigator:i,static:l=!1}=e;Vr()&&wt(!1);let a=sf(t),s=b.exports.useMemo(()=>({basename:a,navigator:i,static:l}),[a,i,l]);typeof r=="string"&&(r=vn(r));let{pathname:c="/",search:p="",hash:h="",state:m=null,key:k="default"}=r,x=b.exports.useMemo(()=>{let y=af(c,a);return y==null?null:{pathname:y,search:p,hash:h,state:m,key:k}},[a,c,p,h,m,k]);return x==null?null:b.exports.createElement(os.Provider,{value:s},b.exports.createElement(is.Provider,{children:n,value:{location:x,navigationType:o}}))}function H0(e){let{children:t,location:n}=e;return D0(oa(t),n)}function oa(e){let t=[];return b.exports.Children.forEach(e,n=>{if(!b.exports.isValidElement(n))return;if(n.type===b.exports.Fragment){t.push.apply(t,oa(n.props.children));return}n.type!==wn&&wt(!1);let r={caseSensitive:n.props.caseSensitive,element:n.props.element,index:n.props.index,path:n.props.path};n.props.children&&(r.children=oa(n.props.children)),t.push(r)}),t}/**
 * React Router DOM v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ei(){return ei=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ei.apply(this,arguments)}function uf(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}const W0=["onClick","reloadDocument","replace","state","target","to"],V0=["aria-current","caseSensitive","className","end","style","to","children"];function Q0(e){let{basename:t,children:n,window:r}=e,o=b.exports.useRef();o.current==null&&(o.current=h0({window:r}));let i=o.current,[l,a]=b.exports.useState({action:i.action,location:i.location});return b.exports.useLayoutEffect(()=>i.listen(a),[i]),b.exports.createElement(U0,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:i})}function Y0(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}const ss=b.exports.forwardRef(function(t,n){let{onClick:r,reloadDocument:o,replace:i=!1,state:l,target:a,to:s}=t,c=uf(t,W0),p=A0(s),h=G0(s,{replace:i,state:l,target:a});function m(k){r&&r(k),!k.defaultPrevented&&!o&&h(k)}return b.exports.createElement("a",ei({},c,{href:p,onClick:m,ref:n,target:a}))}),al=b.exports.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:o=!1,className:i="",end:l=!1,style:a,to:s,children:c}=t,p=uf(t,V0),h=Qr(),m=as(s),k=h.pathname,x=m.pathname;o||(k=k.toLowerCase(),x=x.toLowerCase());let y=k===x||!l&&k.startsWith(x)&&k.charAt(x.length)==="/",N=y?r:void 0,d;typeof i=="function"?d=i({isActive:y}):d=[i,y?"active":null].filter(Boolean).join(" ");let u=typeof a=="function"?a({isActive:y}):a;return b.exports.createElement(ss,ei({},p,{"aria-current":N,className:d,ref:n,style:u,to:s}),typeof c=="function"?c({isActive:y}):c)});function G0(e,t){let{target:n,replace:r,state:o}=t===void 0?{}:t,i=ls(),l=Qr(),a=as(e);return b.exports.useCallback(s=>{if(s.button===0&&(!n||n==="_self")&&!Y0(s)){s.preventDefault();let c=!!r||ra(l)===ra(a);i(e,{replace:c,state:o})}},[l,i,a,r,o,n,e])}var K0="/Pokedex/assets/teamRocket.dd2443f2.svg",wi={exports:{}},q={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xe=typeof Symbol=="function"&&Symbol.for,us=xe?Symbol.for("react.element"):60103,cs=xe?Symbol.for("react.portal"):60106,ki=xe?Symbol.for("react.fragment"):60107,xi=xe?Symbol.for("react.strict_mode"):60108,Si=xe?Symbol.for("react.profiler"):60114,Ci=xe?Symbol.for("react.provider"):60109,Ei=xe?Symbol.for("react.context"):60110,ds=xe?Symbol.for("react.async_mode"):60111,Pi=xe?Symbol.for("react.concurrent_mode"):60111,_i=xe?Symbol.for("react.forward_ref"):60112,Ni=xe?Symbol.for("react.suspense"):60113,X0=xe?Symbol.for("react.suspense_list"):60120,zi=xe?Symbol.for("react.memo"):60115,Li=xe?Symbol.for("react.lazy"):60116,Z0=xe?Symbol.for("react.block"):60121,J0=xe?Symbol.for("react.fundamental"):60117,q0=xe?Symbol.for("react.responder"):60118,em=xe?Symbol.for("react.scope"):60119;function Xe(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case us:switch(e=e.type,e){case ds:case Pi:case ki:case Si:case xi:case Ni:return e;default:switch(e=e&&e.$$typeof,e){case Ei:case _i:case Li:case zi:case Ci:return e;default:return t}}case cs:return t}}}function cf(e){return Xe(e)===Pi}q.AsyncMode=ds;q.ConcurrentMode=Pi;q.ContextConsumer=Ei;q.ContextProvider=Ci;q.Element=us;q.ForwardRef=_i;q.Fragment=ki;q.Lazy=Li;q.Memo=zi;q.Portal=cs;q.Profiler=Si;q.StrictMode=xi;q.Suspense=Ni;q.isAsyncMode=function(e){return cf(e)||Xe(e)===ds};q.isConcurrentMode=cf;q.isContextConsumer=function(e){return Xe(e)===Ei};q.isContextProvider=function(e){return Xe(e)===Ci};q.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===us};q.isForwardRef=function(e){return Xe(e)===_i};q.isFragment=function(e){return Xe(e)===ki};q.isLazy=function(e){return Xe(e)===Li};q.isMemo=function(e){return Xe(e)===zi};q.isPortal=function(e){return Xe(e)===cs};q.isProfiler=function(e){return Xe(e)===Si};q.isStrictMode=function(e){return Xe(e)===xi};q.isSuspense=function(e){return Xe(e)===Ni};q.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ki||e===Pi||e===Si||e===xi||e===Ni||e===X0||typeof e=="object"&&e!==null&&(e.$$typeof===Li||e.$$typeof===zi||e.$$typeof===Ci||e.$$typeof===Ei||e.$$typeof===_i||e.$$typeof===J0||e.$$typeof===q0||e.$$typeof===em||e.$$typeof===Z0)};q.typeOf=Xe;wi.exports=q;function tm(e){function t(O,A,I,F,v){for(var V=0,R=0,ue=0,K=0,Z,U,Se=0,Me=0,G,ze=G=Z=0,X=0,Ce=0,Jn=0,Ee=0,Gr=I.length,qn=Gr-1,it,B="",de="",bi="",$i="",Tt;X<Gr;){if(U=I.charCodeAt(X),X===qn&&R+K+ue+V!==0&&(R!==0&&(U=R===47?10:47),K=ue=V=0,Gr++,qn++),R+K+ue+V===0){if(X===qn&&(0<Ce&&(B=B.replace(m,"")),0<B.trim().length)){switch(U){case 32:case 9:case 59:case 13:case 10:break;default:B+=I.charAt(X)}U=59}switch(U){case 123:for(B=B.trim(),Z=B.charCodeAt(0),G=1,Ee=++X;X<Gr;){switch(U=I.charCodeAt(X)){case 123:G++;break;case 125:G--;break;case 47:switch(U=I.charCodeAt(X+1)){case 42:case 47:e:{for(ze=X+1;ze<qn;++ze)switch(I.charCodeAt(ze)){case 47:if(U===42&&I.charCodeAt(ze-1)===42&&X+2!==ze){X=ze+1;break e}break;case 10:if(U===47){X=ze+1;break e}}X=ze}}break;case 91:U++;case 40:U++;case 34:case 39:for(;X++<qn&&I.charCodeAt(X)!==U;);}if(G===0)break;X++}switch(G=I.substring(Ee,X),Z===0&&(Z=(B=B.replace(h,"").trim()).charCodeAt(0)),Z){case 64:switch(0<Ce&&(B=B.replace(m,"")),U=B.charCodeAt(1),U){case 100:case 109:case 115:case 45:Ce=A;break;default:Ce=Je}if(G=t(A,Ce,G,U,v+1),Ee=G.length,0<T&&(Ce=n(Je,B,Jn),Tt=a(3,G,Ce,A,oe,ee,Ee,U,v,F),B=Ce.join(""),Tt!==void 0&&(Ee=(G=Tt.trim()).length)===0&&(U=0,G="")),0<Ee)switch(U){case 115:B=B.replace($,l);case 100:case 109:case 45:G=B+"{"+G+"}";break;case 107:B=B.replace(u,"$1 $2"),G=B+"{"+G+"}",G=he===1||he===2&&i("@"+G,3)?"@-webkit-"+G+"@"+G:"@"+G;break;default:G=B+G,F===112&&(G=(de+=G,""))}else G="";break;default:G=t(A,n(A,B,Jn),G,F,v+1)}bi+=G,G=Jn=Ce=ze=Z=0,B="",U=I.charCodeAt(++X);break;case 125:case 59:if(B=(0<Ce?B.replace(m,""):B).trim(),1<(Ee=B.length))switch(ze===0&&(Z=B.charCodeAt(0),Z===45||96<Z&&123>Z)&&(Ee=(B=B.replace(" ",":")).length),0<T&&(Tt=a(1,B,A,O,oe,ee,de.length,F,v,F))!==void 0&&(Ee=(B=Tt.trim()).length)===0&&(B="\0\0"),Z=B.charCodeAt(0),U=B.charCodeAt(1),Z){case 0:break;case 64:if(U===105||U===99){$i+=B+I.charAt(X);break}default:B.charCodeAt(Ee-1)!==58&&(de+=o(B,Z,U,B.charCodeAt(2)))}Jn=Ce=ze=Z=0,B="",U=I.charCodeAt(++X)}}switch(U){case 13:case 10:R===47?R=0:1+Z===0&&F!==107&&0<B.length&&(Ce=1,B+="\0"),0<T*z&&a(0,B,A,O,oe,ee,de.length,F,v,F),ee=1,oe++;break;case 59:case 125:if(R+K+ue+V===0){ee++;break}default:switch(ee++,it=I.charAt(X),U){case 9:case 32:if(K+V+R===0)switch(Se){case 44:case 58:case 9:case 32:it="";break;default:U!==32&&(it=" ")}break;case 0:it="\\0";break;case 12:it="\\f";break;case 11:it="\\v";break;case 38:K+R+V===0&&(Ce=Jn=1,it="\f"+it);break;case 108:if(K+R+V+pe===0&&0<ze)switch(X-ze){case 2:Se===112&&I.charCodeAt(X-3)===58&&(pe=Se);case 8:Me===111&&(pe=Me)}break;case 58:K+R+V===0&&(ze=X);break;case 44:R+ue+K+V===0&&(Ce=1,it+="\r");break;case 34:case 39:R===0&&(K=K===U?0:K===0?U:K);break;case 91:K+R+ue===0&&V++;break;case 93:K+R+ue===0&&V--;break;case 41:K+R+V===0&&ue--;break;case 40:if(K+R+V===0){if(Z===0)switch(2*Se+3*Me){case 533:break;default:Z=1}ue++}break;case 64:R+ue+K+V+ze+G===0&&(G=1);break;case 42:case 47:if(!(0<K+V+ue))switch(R){case 0:switch(2*U+3*I.charCodeAt(X+1)){case 235:R=47;break;case 220:Ee=X,R=42}break;case 42:U===47&&Se===42&&Ee+2!==X&&(I.charCodeAt(Ee+2)===33&&(de+=I.substring(Ee,X+1)),it="",R=0)}}R===0&&(B+=it)}Me=Se,Se=U,X++}if(Ee=de.length,0<Ee){if(Ce=A,0<T&&(Tt=a(2,de,Ce,O,oe,ee,Ee,F,v,F),Tt!==void 0&&(de=Tt).length===0))return $i+de+bi;if(de=Ce.join(",")+"{"+de+"}",he*pe!==0){switch(he!==2||i(de,2)||(pe=0),pe){case 111:de=de.replace(w,":-moz-$1")+de;break;case 112:de=de.replace(f,"::-webkit-input-$1")+de.replace(f,"::-moz-$1")+de.replace(f,":-ms-input-$1")+de}pe=0}}return $i+de+bi}function n(O,A,I){var F=A.trim().split(N);A=F;var v=F.length,V=O.length;switch(V){case 0:case 1:var R=0;for(O=V===0?"":O[0]+" ";R<v;++R)A[R]=r(O,A[R],I).trim();break;default:var ue=R=0;for(A=[];R<v;++R)for(var K=0;K<V;++K)A[ue++]=r(O[K]+" ",F[R],I).trim()}return A}function r(O,A,I){var F=A.charCodeAt(0);switch(33>F&&(F=(A=A.trim()).charCodeAt(0)),F){case 38:return A.replace(d,"$1"+O.trim());case 58:return O.trim()+A.replace(d,"$1"+O.trim());default:if(0<1*I&&0<A.indexOf("\f"))return A.replace(d,(O.charCodeAt(0)===58?"":"$1")+O.trim())}return O+A}function o(O,A,I,F){var v=O+";",V=2*A+3*I+4*F;if(V===944){O=v.indexOf(":",9)+1;var R=v.substring(O,v.length-1).trim();return R=v.substring(0,O).trim()+R+";",he===1||he===2&&i(R,1)?"-webkit-"+R+R:R}if(he===0||he===2&&!i(v,1))return v;switch(V){case 1015:return v.charCodeAt(10)===97?"-webkit-"+v+v:v;case 951:return v.charCodeAt(3)===116?"-webkit-"+v+v:v;case 963:return v.charCodeAt(5)===110?"-webkit-"+v+v:v;case 1009:if(v.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+v+v;case 978:return"-webkit-"+v+"-moz-"+v+v;case 1019:case 983:return"-webkit-"+v+"-moz-"+v+"-ms-"+v+v;case 883:if(v.charCodeAt(8)===45)return"-webkit-"+v+v;if(0<v.indexOf("image-set(",11))return v.replace(Y,"$1-webkit-$2")+v;break;case 932:if(v.charCodeAt(4)===45)switch(v.charCodeAt(5)){case 103:return"-webkit-box-"+v.replace("-grow","")+"-webkit-"+v+"-ms-"+v.replace("grow","positive")+v;case 115:return"-webkit-"+v+"-ms-"+v.replace("shrink","negative")+v;case 98:return"-webkit-"+v+"-ms-"+v.replace("basis","preferred-size")+v}return"-webkit-"+v+"-ms-"+v+v;case 964:return"-webkit-"+v+"-ms-flex-"+v+v;case 1023:if(v.charCodeAt(8)!==99)break;return R=v.substring(v.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+R+"-webkit-"+v+"-ms-flex-pack"+R+v;case 1005:return x.test(v)?v.replace(k,":-webkit-")+v.replace(k,":-moz-")+v:v;case 1e3:switch(R=v.substring(13).trim(),A=R.indexOf("-")+1,R.charCodeAt(0)+R.charCodeAt(A)){case 226:R=v.replace(E,"tb");break;case 232:R=v.replace(E,"tb-rl");break;case 220:R=v.replace(E,"lr");break;default:return v}return"-webkit-"+v+"-ms-"+R+v;case 1017:if(v.indexOf("sticky",9)===-1)break;case 975:switch(A=(v=O).length-10,R=(v.charCodeAt(A)===33?v.substring(0,A):v).substring(O.indexOf(":",7)+1).trim(),V=R.charCodeAt(0)+(R.charCodeAt(7)|0)){case 203:if(111>R.charCodeAt(8))break;case 115:v=v.replace(R,"-webkit-"+R)+";"+v;break;case 207:case 102:v=v.replace(R,"-webkit-"+(102<V?"inline-":"")+"box")+";"+v.replace(R,"-webkit-"+R)+";"+v.replace(R,"-ms-"+R+"box")+";"+v}return v+";";case 938:if(v.charCodeAt(5)===45)switch(v.charCodeAt(6)){case 105:return R=v.replace("-items",""),"-webkit-"+v+"-webkit-box-"+R+"-ms-flex-"+R+v;case 115:return"-webkit-"+v+"-ms-flex-item-"+v.replace(P,"")+v;default:return"-webkit-"+v+"-ms-flex-line-pack"+v.replace("align-content","").replace(P,"")+v}break;case 973:case 989:if(v.charCodeAt(3)!==45||v.charCodeAt(4)===122)break;case 931:case 953:if(M.test(O)===!0)return(R=O.substring(O.indexOf(":")+1)).charCodeAt(0)===115?o(O.replace("stretch","fill-available"),A,I,F).replace(":fill-available",":stretch"):v.replace(R,"-webkit-"+R)+v.replace(R,"-moz-"+R.replace("fill-",""))+v;break;case 962:if(v="-webkit-"+v+(v.charCodeAt(5)===102?"-ms-"+v:"")+v,I+F===211&&v.charCodeAt(13)===105&&0<v.indexOf("transform",10))return v.substring(0,v.indexOf(";",27)+1).replace(y,"$1-webkit-$2")+v}return v}function i(O,A){var I=O.indexOf(A===1?":":"{"),F=O.substring(0,A!==3?I:10);return I=O.substring(I+1,O.length-1),S(A!==2?F:F.replace(D,"$1"),I,A)}function l(O,A){var I=o(A,A.charCodeAt(0),A.charCodeAt(1),A.charCodeAt(2));return I!==A+";"?I.replace(C," or ($1)").substring(4):"("+A+")"}function a(O,A,I,F,v,V,R,ue,K,Z){for(var U=0,Se=A,Me;U<T;++U)switch(Me=ye[U].call(p,O,Se,I,F,v,V,R,ue,K,Z)){case void 0:case!1:case!0:case null:break;default:Se=Me}if(Se!==A)return Se}function s(O){switch(O){case void 0:case null:T=ye.length=0;break;default:if(typeof O=="function")ye[T++]=O;else if(typeof O=="object")for(var A=0,I=O.length;A<I;++A)s(O[A]);else z=!!O|0}return s}function c(O){return O=O.prefix,O!==void 0&&(S=null,O?typeof O!="function"?he=1:(he=2,S=O):he=0),c}function p(O,A){var I=O;if(33>I.charCodeAt(0)&&(I=I.trim()),H=I,I=[H],0<T){var F=a(-1,A,I,I,oe,ee,0,0,0,0);F!==void 0&&typeof F=="string"&&(A=F)}var v=t(Je,I,A,0,0);return 0<T&&(F=a(-2,v,I,I,oe,ee,v.length,0,0,0),F!==void 0&&(v=F)),H="",pe=0,ee=oe=1,v}var h=/^\0+/g,m=/[\0\r\f]/g,k=/: */g,x=/zoo|gra/,y=/([,: ])(transform)/g,N=/,\r+?/g,d=/([\t\r\n ])*\f?&/g,u=/@(k\w+)\s*(\S*)\s*/,f=/::(place)/g,w=/:(read-only)/g,E=/[svh]\w+-[tblr]{2}/,$=/\(\s*(.*)\s*\)/g,C=/([\s\S]*?);/g,P=/-self|flex-/g,D=/[^]*?(:[rp][el]a[\w-]+)[^]*/,M=/stretch|:\s*\w+\-(?:conte|avail)/,Y=/([^-])(image-set\()/,ee=1,oe=1,pe=0,he=1,Je=[],ye=[],T=0,S=null,z=0,H="";return p.use=s,p.set=c,e!==void 0&&c(e),p}var nm={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function rm(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var om=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,bu=rm(function(e){return om.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),fs=wi.exports,im={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},lm={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},am={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},df={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ps={};ps[fs.ForwardRef]=am;ps[fs.Memo]=df;function $u(e){return fs.isMemo(e)?df:ps[e.$$typeof]||im}var sm=Object.defineProperty,um=Object.getOwnPropertyNames,Au=Object.getOwnPropertySymbols,cm=Object.getOwnPropertyDescriptor,dm=Object.getPrototypeOf,Iu=Object.prototype;function ff(e,t,n){if(typeof t!="string"){if(Iu){var r=dm(t);r&&r!==Iu&&ff(e,r,n)}var o=um(t);Au&&(o=o.concat(Au(t)));for(var i=$u(e),l=$u(t),a=0;a<o.length;++a){var s=o[a];if(!lm[s]&&!(n&&n[s])&&!(l&&l[s])&&!(i&&i[s])){var c=cm(t,s);try{sm(e,s,c)}catch{}}}}return e}var fm=ff;function gt(){return(gt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var ju=function(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n},ia=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!wi.exports.typeOf(e)},ti=Object.freeze([]),Yt=Object.freeze({});function Dr(e){return typeof e=="function"}function Mu(e){return e.displayName||e.name||"Component"}function hs(e){return e&&typeof e.styledComponentId=="string"}var Yn=typeof process!="undefined"&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",ms=typeof window!="undefined"&&"HTMLElement"in window,pm=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process!="undefined"&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process!="undefined"&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""?{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY:!1),hm={};function Yr(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var mm=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,o=0;o<n;o++)r+=this.groupSizes[o];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var o=this.groupSizes,i=o.length,l=i;n>=l;)(l<<=1)<0&&Yr(16,""+n);this.groupSizes=new Uint32Array(l),this.groupSizes.set(o),this.length=l;for(var a=i;a<l;a++)this.groupSizes[a]=0}for(var s=this.indexOfGroup(n+1),c=0,p=r.length;c<p;c++)this.tag.insertRule(s,r[c])&&(this.groupSizes[n]++,s++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],o=this.indexOfGroup(n),i=o+r;this.groupSizes[n]=0;for(var l=o;l<i;l++)this.tag.deleteRule(o)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var o=this.groupSizes[n],i=this.indexOfGroup(n),l=i+o,a=i;a<l;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},e}(),zo=new Map,ni=new Map,xr=1,po=function(e){if(zo.has(e))return zo.get(e);for(;ni.has(xr);)xr++;var t=xr++;return zo.set(e,t),ni.set(t,e),t},gm=function(e){return ni.get(e)},vm=function(e,t){t>=xr&&(xr=t+1),zo.set(e,t),ni.set(t,e)},ym="style["+Yn+'][data-styled-version="5.3.5"]',wm=new RegExp("^"+Yn+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),km=function(e,t,n){for(var r,o=n.split(","),i=0,l=o.length;i<l;i++)(r=o[i])&&e.registerName(t,r)},xm=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],o=0,i=n.length;o<i;o++){var l=n[o].trim();if(l){var a=l.match(wm);if(a){var s=0|parseInt(a[1],10),c=a[2];s!==0&&(vm(c,s),km(e,c,a[3]),e.getTag().insertRules(s,r)),r.length=0}else r.push(l)}}},Sm=function(){return typeof window!="undefined"&&window.__webpack_nonce__!==void 0?window.__webpack_nonce__:null},pf=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(a){for(var s=a.childNodes,c=s.length;c>=0;c--){var p=s[c];if(p&&p.nodeType===1&&p.hasAttribute(Yn))return p}}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(Yn,"active"),r.setAttribute("data-styled-version","5.3.5");var l=Sm();return l&&r.setAttribute("nonce",l),n.insertBefore(r,i),r},Cm=function(){function e(n){var r=this.element=pf(n);r.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var i=document.styleSheets,l=0,a=i.length;l<a;l++){var s=i[l];if(s.ownerNode===o)return s}Yr(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),Em=function(){function e(n){var r=this.element=pf(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var o=document.createTextNode(r),i=this.nodes[n];return this.element.insertBefore(o,i||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),Pm=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),Du=ms,_m={isServer:!ms,useCSSOMInjection:!pm},ri=function(){function e(n,r,o){n===void 0&&(n=Yt),r===void 0&&(r={}),this.options=gt({},_m,{},n),this.gs=r,this.names=new Map(o),this.server=!!n.isServer,!this.server&&ms&&Du&&(Du=!1,function(i){for(var l=document.querySelectorAll(ym),a=0,s=l.length;a<s;a++){var c=l[a];c&&c.getAttribute(Yn)!=="active"&&(xm(i,c),c.parentNode&&c.parentNode.removeChild(c))}}(this))}e.registerId=function(n){return po(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(gt({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(o=(r=this.options).isServer,i=r.useCSSOMInjection,l=r.target,n=o?new Pm(l):i?new Cm(l):new Em(l),new mm(n)));var n,r,o,i,l},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(po(n),this.names.has(n))this.names.get(n).add(r);else{var o=new Set;o.add(r),this.names.set(n,o)}},t.insertRules=function(n,r,o){this.registerName(n,r),this.getTag().insertRules(po(n),o)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(po(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),o=r.length,i="",l=0;l<o;l++){var a=gm(l);if(a!==void 0){var s=n.names.get(a),c=r.getGroup(l);if(s&&c&&s.size){var p=Yn+".g"+l+'[id="'+a+'"]',h="";s!==void 0&&s.forEach(function(m){m.length>0&&(h+=m+",")}),i+=""+c+p+'{content:"'+h+`"}/*!sc*/
`}}}return i}(this)},e}(),Nm=/(a)(d)/gi,Fu=function(e){return String.fromCharCode(e+(e>25?39:97))};function la(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Fu(t%52)+n;return(Fu(t%52)+n).replace(Nm,"$1-$2")}var bn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},hf=function(e){return bn(5381,e)};function mf(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Dr(n)&&!hs(n))return!1}return!0}var zm=hf("5.3.5"),Lm=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&mf(t),this.componentId=n,this.baseHash=bn(zm,n),this.baseStyle=r,ri.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.componentId,i=[];if(this.baseStyle&&i.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(o,this.staticRulesId))i.push(this.staticRulesId);else{var l=hn(this.rules,t,n,r).join(""),a=la(bn(this.baseHash,l)>>>0);if(!n.hasNameForId(o,a)){var s=r(l,"."+a,void 0,o);n.insertRules(o,a,s)}i.push(a),this.staticRulesId=a}else{for(var c=this.rules.length,p=bn(this.baseHash,r.hash),h="",m=0;m<c;m++){var k=this.rules[m];if(typeof k=="string")h+=k;else if(k){var x=hn(k,t,n,r),y=Array.isArray(x)?x.join(""):x;p=bn(p,y+m),h+=y}}if(h){var N=la(p>>>0);if(!n.hasNameForId(o,N)){var d=r(h,"."+N,void 0,o);n.insertRules(o,N,d)}i.push(N)}}return i.join(" ")},e}(),Tm=/^\s*\/\/.*$/gm,Om=[":","[",".","#"];function Rm(e){var t,n,r,o,i=e===void 0?Yt:e,l=i.options,a=l===void 0?Yt:l,s=i.plugins,c=s===void 0?ti:s,p=new tm(a),h=[],m=function(y){function N(d){if(d)try{y(d+"}")}catch{}}return function(d,u,f,w,E,$,C,P,D,M){switch(d){case 1:if(D===0&&u.charCodeAt(0)===64)return y(u+";"),"";break;case 2:if(P===0)return u+"/*|*/";break;case 3:switch(P){case 102:case 112:return y(f[0]+u),"";default:return u+(M===0?"/*|*/":"")}case-2:u.split("/*|*/}").forEach(N)}}}(function(y){h.push(y)}),k=function(y,N,d){return N===0&&Om.indexOf(d[n.length])!==-1||d.match(o)?y:"."+t};function x(y,N,d,u){u===void 0&&(u="&");var f=y.replace(Tm,""),w=N&&d?d+" "+N+" { "+f+" }":f;return t=u,n=N,r=new RegExp("\\"+n+"\\b","g"),o=new RegExp("(\\"+n+"\\b){2,}"),p(d||!N?"":N,w)}return p.use([].concat(c,[function(y,N,d){y===2&&d.length&&d[0].lastIndexOf(n)>0&&(d[0]=d[0].replace(r,k))},m,function(y){if(y===-2){var N=h;return h=[],N}}])),x.hash=c.length?c.reduce(function(y,N){return N.name||Yr(15),bn(y,N.name)},5381).toString():"",x}var gf=$e.createContext();gf.Consumer;var vf=$e.createContext(),bm=(vf.Consumer,new ri),aa=Rm();function yf(){return b.exports.useContext(gf)||bm}function wf(){return b.exports.useContext(vf)||aa}var $m=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=aa);var l=r.name+i.hash;o.hasNameForId(r.id,l)||o.insertRules(r.id,l,i(r.rules,l,"@keyframes"))},this.toString=function(){return Yr(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=aa),this.name+t.hash},e}(),Am=/([A-Z])/,Im=/([A-Z])/g,jm=/^ms-/,Mm=function(e){return"-"+e.toLowerCase()};function Bu(e){return Am.test(e)?e.replace(Im,Mm).replace(jm,"-ms-"):e}var Uu=function(e){return e==null||e===!1||e===""};function hn(e,t,n,r){if(Array.isArray(e)){for(var o,i=[],l=0,a=e.length;l<a;l+=1)(o=hn(e[l],t,n,r))!==""&&(Array.isArray(o)?i.push.apply(i,o):i.push(o));return i}if(Uu(e))return"";if(hs(e))return"."+e.styledComponentId;if(Dr(e)){if(typeof(c=e)!="function"||c.prototype&&c.prototype.isReactComponent||!t)return e;var s=e(t);return hn(s,t,n,r)}var c;return e instanceof $m?n?(e.inject(n,r),e.getName(r)):e:ia(e)?function p(h,m){var k,x,y=[];for(var N in h)h.hasOwnProperty(N)&&!Uu(h[N])&&(Array.isArray(h[N])&&h[N].isCss||Dr(h[N])?y.push(Bu(N)+":",h[N],";"):ia(h[N])?y.push.apply(y,p(h[N],N)):y.push(Bu(N)+": "+(k=N,(x=h[N])==null||typeof x=="boolean"||x===""?"":typeof x!="number"||x===0||k in nm?String(x).trim():x+"px")+";"));return m?[m+" {"].concat(y,["}"]):y}(e):e.toString()}var Hu=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function kf(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Dr(e)||ia(e)?Hu(hn(ju(ti,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:Hu(hn(ju(e,n)))}var xf=function(e,t,n){return n===void 0&&(n=Yt),e.theme!==n.theme&&e.theme||t||n.theme},Dm=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Fm=/(^-|-$)/g;function sl(e){return e.replace(Dm,"-").replace(Fm,"")}var Sf=function(e){return la(hf(e)>>>0)};function ho(e){return typeof e=="string"&&!0}var sa=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},Bm=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function Um(e,t,n){var r=e[n];sa(t)&&sa(r)?Cf(r,t):e[n]=t}function Cf(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var o=0,i=n;o<i.length;o++){var l=i[o];if(sa(l))for(var a in l)Bm(a)&&Um(e,l[a],a)}return e}var gs=$e.createContext();gs.Consumer;var ul={};function Ef(e,t,n){var r=hs(e),o=!ho(e),i=t.attrs,l=i===void 0?ti:i,a=t.componentId,s=a===void 0?function(u,f){var w=typeof u!="string"?"sc":sl(u);ul[w]=(ul[w]||0)+1;var E=w+"-"+Sf("5.3.5"+w+ul[w]);return f?f+"-"+E:E}(t.displayName,t.parentComponentId):a,c=t.displayName,p=c===void 0?function(u){return ho(u)?"styled."+u:"Styled("+Mu(u)+")"}(e):c,h=t.displayName&&t.componentId?sl(t.displayName)+"-"+t.componentId:t.componentId||s,m=r&&e.attrs?Array.prototype.concat(e.attrs,l).filter(Boolean):l,k=t.shouldForwardProp;r&&e.shouldForwardProp&&(k=t.shouldForwardProp?function(u,f,w){return e.shouldForwardProp(u,f,w)&&t.shouldForwardProp(u,f,w)}:e.shouldForwardProp);var x,y=new Lm(n,h,r?e.componentStyle:void 0),N=y.isStatic&&l.length===0,d=function(u,f){return function(w,E,$,C){var P=w.attrs,D=w.componentStyle,M=w.defaultProps,Y=w.foldedComponentIds,ee=w.shouldForwardProp,oe=w.styledComponentId,pe=w.target,he=function(F,v,V){F===void 0&&(F=Yt);var R=gt({},v,{theme:F}),ue={};return V.forEach(function(K){var Z,U,Se,Me=K;for(Z in Dr(Me)&&(Me=Me(R)),Me)R[Z]=ue[Z]=Z==="className"?(U=ue[Z],Se=Me[Z],U&&Se?U+" "+Se:U||Se):Me[Z]}),[R,ue]}(xf(E,b.exports.useContext(gs),M)||Yt,E,P),Je=he[0],ye=he[1],T=function(F,v,V,R){var ue=yf(),K=wf(),Z=v?F.generateAndInjectStyles(Yt,ue,K):F.generateAndInjectStyles(V,ue,K);return Z}(D,C,Je),S=$,z=ye.$as||E.$as||ye.as||E.as||pe,H=ho(z),O=ye!==E?gt({},E,{},ye):E,A={};for(var I in O)I[0]!=="$"&&I!=="as"&&(I==="forwardedAs"?A.as=O[I]:(ee?ee(I,bu,z):!H||bu(I))&&(A[I]=O[I]));return E.style&&ye.style!==E.style&&(A.style=gt({},E.style,{},ye.style)),A.className=Array.prototype.concat(Y,oe,T!==oe?T:null,E.className,ye.className).filter(Boolean).join(" "),A.ref=S,b.exports.createElement(z,A)}(x,u,f,N)};return d.displayName=p,(x=$e.forwardRef(d)).attrs=m,x.componentStyle=y,x.displayName=p,x.shouldForwardProp=k,x.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):ti,x.styledComponentId=h,x.target=r?e.target:e,x.withComponent=function(u){var f=t.componentId,w=function($,C){if($==null)return{};var P,D,M={},Y=Object.keys($);for(D=0;D<Y.length;D++)P=Y[D],C.indexOf(P)>=0||(M[P]=$[P]);return M}(t,["componentId"]),E=f&&f+"-"+(ho(u)?u:sl(Mu(u)));return Ef(u,gt({},w,{attrs:m,componentId:E}),n)},Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(u){this._foldedDefaultProps=r?Cf({},e.defaultProps,u):u}}),x.toString=function(){return"."+x.styledComponentId},o&&fm(x,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),x}var ua=function(e){return function t(n,r,o){if(o===void 0&&(o=Yt),!wi.exports.isValidElementType(r))return Yr(1,String(r));var i=function(){return n(r,o,kf.apply(void 0,arguments))};return i.withConfig=function(l){return t(n,r,gt({},o,{},l))},i.attrs=function(l){return t(n,r,gt({},o,{attrs:Array.prototype.concat(o.attrs,l).filter(Boolean)}))},i}(Ef,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){ua[e]=ua(e)});var Hm=function(){function e(n,r){this.rules=n,this.componentId=r,this.isStatic=mf(n),ri.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(n,r,o,i){var l=i(hn(this.rules,r,o,i).join(""),""),a=this.componentId+n;o.insertRules(a,a,l)},t.removeStyles=function(n,r){r.clearRules(this.componentId+n)},t.renderStyles=function(n,r,o,i){n>2&&ri.registerId(this.componentId+n),this.removeStyles(n,o),this.createStyles(n,r,o,i)},e}();function Wm(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=kf.apply(void 0,[e].concat(n)),i="sc-global-"+Sf(JSON.stringify(o)),l=new Hm(o,i);function a(c){var p=yf(),h=wf(),m=b.exports.useContext(gs),k=b.exports.useRef(p.allocateGSInstance(i)).current;return p.server&&s(k,c,p,m,h),b.exports.useLayoutEffect(function(){if(!p.server)return s(k,c,p,m,h),function(){return l.removeStyles(k,p)}},[k,c,p,m,h]),null}function s(c,p,h,m,k){if(l.isStatic)l.renderStyles(c,hm,h,k);else{var x=gt({},p,{theme:xf(p,m,a.defaultProps)});l.renderStyles(c,x,h,k)}}return $e.memo(a)}var Ze=ua;const Vm=Ze.div`
  background-color: var(--red);
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  div {
    text-align: center;

    figure {
      position: relative;
      height: calc(100vh / 1.5);

      img {
        height: 100%;
        position: relative;
        image-rendering: pixelated;
        z-index: 2;
      }
      figcaption {
        position: absolute;
        top: -15%;
        left: -30%;

        font-size: 30rem;
        margin: -25px 0 0 -25px;
        font-weight: 700;
      }
    }

    h1 {
      font-size: 2rem;
      color: var(--white);
      margin-top: 3rem;

      span {
        color: black;
      }
    }

    button {
      width: 10rem;
      height: 3rem;
      border-radius: 11px;
      background-color: var(--yellow);
      box-shadow: inset 0px -4px 0px rgba(0, 0, 0, 0.18);
      border: 0;

      display: flex;
      align-items: center;
      justify-content: center;

      font-size: 1.3rem;
      font-weight: 700;

      margin: 3rem auto 0;

      transition: all 0.3s;

      &:hover {
        box-shadow: inset 3px 3px 0px rgba(0, 0, 0, 0.18);
        background-color: var(--yellow-dark);
      }
    }
  }

  @media (max-width: 768px) {
    div {
      figure {
        height: calc(100vh / 2);

        figcaption {
          top: -25%;
        }
      }
      h1 {
        font-size: min(2rem, 6vw);
      }
    }
  }

  @media (max-width: 700px) {
    div {
      figure {
        margin-bottom: 5rem;
        figcaption {
          position: initial;
          font-size: 3rem;
          margin: 0;
          text-align: center;
          display: flex;
          justify-content: center;
          gap: 0.5rem;

          &:before {
            content: "Error";
          }
        }
      }
    }
  }
`;var Ti={exports:{}},Oi={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qm=b.exports,Ym=Symbol.for("react.element"),Gm=Symbol.for("react.fragment"),Km=Object.prototype.hasOwnProperty,Xm=Qm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Zm={key:!0,ref:!0,__self:!0,__source:!0};function Pf(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Km.call(t,r)&&!Zm.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Ym,type:e,key:i,ref:l,props:o,_owner:Xm.current}}Oi.Fragment=Gm;Oi.jsx=Pf;Oi.jsxs=Pf;Ti.exports=Oi;const g=Ti.exports.jsx,L=Ti.exports.jsxs,kn=Ti.exports.Fragment;function Jm(){const e=ls();return g(Vm,{children:L("div",{children:[L("figure",{children:[g("img",{src:K0,alt:""}),g("figcaption",{children:"404"})]}),L("h1",{children:["A equipe rocket ",g("span",{children:"ganhou desta vez."})]}),g("button",{type:"button",onClick:()=>e(-1),children:"Retornar"})]})})}var _f={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Wu=$e.createContext&&$e.createContext(_f),Gt=globalThis&&globalThis.__assign||function(){return Gt=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Gt.apply(this,arguments)},qm=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};function Nf(e){return e&&e.map(function(t,n){return $e.createElement(t.tag,Gt({key:n},t.attr),Nf(t.child))})}function Ri(e){return function(t){return $e.createElement(eg,Gt({attr:Gt({},e.attr)},t),Nf(e.child))}}function eg(e){var t=function(n){var r=e.attr,o=e.size,i=e.title,l=qm(e,["attr","size","title"]),a=o||n.size||"1em",s;return n.className&&(s=n.className),e.className&&(s=(s?s+" ":"")+e.className),$e.createElement("svg",Gt({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,l,{className:s,style:Gt(Gt({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),i&&$e.createElement("title",null,i),e.children)};return Wu!==void 0?$e.createElement(Wu.Consumer,null,function(n){return t(n)}):t(_f)}function tg(e){return Ri({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"}}]})(e)}function ng(e){return Ri({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"}}]})(e)}function rg(e){return Ri({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"}}]})(e)}async function Vu(){return await(await(await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0
  `)).json()).results}async function Qu(e){return await(await(await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${e}
  `)).json()).results}async function og(){return(await(await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0
  `)).json()).results}async function ig(e){try{return await(await fetch(e)).json()}catch(t){return console.log(t)}}async function zf(e){return await(await fetch(`https://pokeapi.co/api/v2/pokemon/${e}`)).json()}async function lg(e){return await(await(await fetch(`https://pokeapi.co/api/v2/type/${e}`)).json()).pokemon}async function ag(e){return await(await(await fetch(`https://pokeapi.co/api/v2/type/${e}`)).json()).damage_relations.double_damage_from}async function sg(){return await(await(await fetch("https://pokeapi.co/api/v2/type")).json()).results}function vs({src:e,alt:t,type:n}){return g("div",{className:`contentImg ${n}`,children:g("img",{src:e,alt:t})})}var Lf="/Pokedex/assets/bug.40b5adc1.svg",Tf="/Pokedex/assets/dark.316c8ca7.svg",Of="/Pokedex/assets/dragon.1c1a988e.svg",Rf="/Pokedex/assets/electric.77dc54ff.svg",bf="/Pokedex/assets/fairy.8abe5252.svg",$f="/Pokedex/assets/fighting.ea3da097.svg",Af="/Pokedex/assets/fire.13d5e62a.svg",If="/Pokedex/assets/flying.cc51a246.svg",jf="/Pokedex/assets/ghost.dc53e74e.svg",Mf="/Pokedex/assets/grass.05ed966b.svg",Df="/Pokedex/assets/ground.c732b7e8.svg",Ff="/Pokedex/assets/ice.59a52f01.svg",Bf="/Pokedex/assets/normal.ce650108.svg",Uf="/Pokedex/assets/poison.d750103e.svg",Hf="/Pokedex/assets/psychic.28b12614.svg",Wf="/Pokedex/assets/rock.1135085f.svg",Vf="/Pokedex/assets/steel.79390821.svg",Qf="/Pokedex/assets/water.dc2090f6.svg";const ug=Ze.div`
  .contentInfo {
    display: flex;
    justify-content: space-between;
    position: relative;
    padding-right: 5px;

    .contentImg {
      width: 20vw;
      img {
        width: 100%;
        height: 100%;
      }
    }

    ul {
      height: 12rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      list-style: none;
      width: 100%;
      margin: auto;
      background: #f2f2f2;
      border-radius: 8px;
      box-shadow: 4px 4px 8px rgba(1, 28, 64, 0.2);
      padding: 1%;

      li {
        display: flex;
        align-items: center;
        /* justify-content: space-between; */

        .weaks {
          display: flex;
          justify-content: space-between;
          gap: 1vw;

          img {
            width: 0.8em;
            height: 0.8em;
            border-radius: 50px;
            padding: 0.2rem;
            box-sizing: content-box;
          }
        }

        details {
          summary {
            cursor: pointer;
            text-transform: capitalize;
            background: #e0e0e0;
            box-shadow: inset 2px -3px 0px rgba(1, 28, 64, 0.2);
            border-radius: 8px;
            padding-inline: 0.5rem;
            white-space: nowrap;
          }
          ul {
            height: initial;
            display: initial;
            flex-direction: initial;
            gap: initial;
            list-style: none;
            margin: 0;
            width: initial;
            border-radius: initial;
            box-shadow: initial;
            position: absolute;
            margin-top: 0.2rem;
            background: #e0e0e0;
            box-shadow: inset 3px -3px 0px rgba(1, 28, 64, 0.2);
            border-radius: 8px;
            padding: 1%;

            li {
              padding-left: initial;
              display: flex;
              align-items: center;
              text-transform: capitalize;
            }
          }
        }

        h5 {
          width: 8rem;
        }

        p {
          font-weight: 500;
        }
      }
    }
  }

  @media (min-width: 1405px) {
    .contentInfo {
      padding-right: 0;

      .contentImg {
        display: none;
      }

      ul {
        width: 98%;
        margin: auto;
      }
    }
  }

  @media (max-width: 1024px) {
    .contentInfo {
      padding-inline: 5px;

      .contentImg {
        display: none;
      }
    }
  }

  @media (max-width: 670px) {
    .contentInfo {
      .contentImg {
        width: 30vw;

        display: block;
      }
    }
  }

  @media (max-width: 350px) {
    .contentInfo {
      .contentImg {
        display: none;
      }
    }
  }
`;function Yf({abilities:e,base_experience:t,height:n,weight:r,types:o,colorBackground:i,name:l,sprite:a}){const[s,c]=b.exports.useState([]),[p,h]=b.exports.useState([]),m=n/10,k=r/10,x=s[0],y={bug:Lf,dark:Tf,dragon:Of,electric:Rf,fairy:bf,fighting:$f,fire:Af,flying:If,ghost:jf,grass:Mf,ground:Df,ice:Ff,normal:Bf,poison:Uf,psychic:Hf,rock:Wf,steel:Vf,water:Qf};function N(){const u=[];e.forEach(f=>{u.push(f.ability.name)}),c(u)}function d(){ag(o[0]).then(u=>{const f=[];u.forEach(w=>{f.push(w.name)}),h(f)})}return b.exports.useEffect(()=>{N(),d()},[]),g(ug,{children:L("div",{className:"contentInfo",children:[g(vs,{src:a,alt:l},l),L("ul",{children:[L("li",{children:[g("h5",{children:"Height"}),L("p",{className:`textColorType ${i}`,children:[m," m"]})]}),L("li",{children:[g("h5",{children:"Weight"}),L("p",{className:`textColorType ${i}`,children:[k," kg"]})]}),L("li",{children:[g("h5",{children:"Ability"}),L("details",{children:[g("summary",{children:x}),g("ul",{children:s.map(u=>g("li",{children:u},u))})]})]}),L("li",{children:[g("h5",{children:"Exp base"}),L("p",{className:`textColorType ${i}`,children:[t," exp"]})]}),L("li",{children:[g("h5",{children:"Weaknes"}),g("div",{className:"weaks",children:p.map(u=>g("img",{src:y[u],alt:u,title:u,className:u}))})]})]})]})})}const cg=Ze.div`
  height: 12rem;
  background: #f2f2f2;
  margin: auto;
  padding: 0;

  width: 98%;
  border-radius: 8px;
  box-shadow: 4px 4px 8px rgba(1, 28, 64, 0.2);
  padding: 1%;

  .baseStats {
    display: flex;
    gap: 2.5rem;

    .statsTitles {
      ul {
        display: flex;
        flex-direction: column;
        list-style: none;
        gap: 0.48rem;

        li {
          h5 {
            text-transform: uppercase;
          }
        }
      }
    }

    .stats {
      display: flex;
      gap: 0.8rem;
      width: 100%;

      ul {
        list-style: none;
        margin-top: -0.26rem;
        display: flex;
        flex-direction: column;
        gap: 0.181rem;

        @media (max-width: 768px) {
          gap: 0.06rem;
        }
      }

      .statsBars {
        display: flex;
        flex-direction: column;
        gap: 1.1rem;
        margin-top: 0.2rem;
        width: 100%;

        .groupStatsBars {
          display: flex;

          .statsBar {
            height: 0.9rem;
            border-top-left-radius: 1rem;
            border-bottom-left-radius: 1rem;
            border-radius: 1rem;

            box-shadow: inset 0px -0.3rem 0px rgba(0, 0, 0, 0.2);

            position: relative;
            z-index: 10;
          }
          .fillBar {
            width: 100%;
            border-top-right-radius: 1rem;
            border-bottom-right-radius: 1rem;
            filter: brightness(45%);
            margin-left: -1rem;
          }
        }
      }
    }
  }
`;function Gf({stats:e,colorBackground:t}){const[n,r]=b.exports.useState(e);function o(){r(e)}return b.exports.useEffect(()=>{o()},[]),g(cg,{children:L("div",{className:"baseStats",children:[g("div",{className:"statsTitles",children:g("ul",{children:n.map(i=>g("li",{children:i.stat.name==="special-defense"?g("h5",{children:"spdef"}):i.stat.name==="special-attack"?g("h5",{children:"spatk"}):g("h5",{children:i.stat.name})},i.stat.name))})}),L("div",{className:"stats",children:[g("ul",{children:n.map(i=>g("li",{className:`textColorType ${t}`,children:i.base_stat},i.base_stat))}),g("div",{className:"statsBars",children:n.map((i,l)=>L("div",{className:"groupStatsBars",children:[g("div",{className:`${t} statsBar`,style:{width:`calc(${i.base_stat}px * 2)`}},`${i.stat.name}${l}bars`),g("div",{className:`${t} fillBar`})]}))})]})]})})}const dg=Ze.div`
  height: 100vh;
  position: relative;

  .wrapper {
    padding: 1%;
    height: 100%;

    .contImgPokemonMobile {
      .contInfoPokemon {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .buttonBack {
          background-color: transparent;
          border: 0;
          width: fit-content;
          svg {
            color: white;
          }
        }

        p,
        h1 {
          color: white;
          text-transform: capitalize;
        }

        h1 {
          margin: 0;
        }

        p {
          font-size: 1.6rem;
          font-weight: 700;
        }
      }

      .contentImg {
        text-align: center;
        width: 20rem;
        margin-inline: auto;
        img {
          width: 100%;
        }
      }
    }

    .contentInfoMobile {
      height: calc(100% - 275px);
      background-color: white;
      border-radius: 10px;
      margin-top: -4.5rem;

      .statsPokemonMobile {
        .navLinks {
          ul {
            display: flex;
            list-style: none;
            justify-content: space-around;

            li {
              button {
                border: 0;
                background-color: transparent;
                color: white;
                font-size: 1.6rem;

                &:active {
                  border-bottom: 1px solid black;
                }
              }
            }
          }
        }
      }

      .divContent {
        padding-inline: 3%;
        .divTypes {
          display: flex;
          justify-content: center;
          gap: 1rem;

          p {
            width: 8rem;
            padding: 0.2rem 1rem;
            border-radius: 50px;
            text-align: center;
            border: 1px solid white;
            font-weight: 500;
            color: white;
            text-transform: capitalize;
          }
        }

        div {
          .contentInfo {
            ul {
              height: auto;
              color: white;
              box-shadow: none;
              li {
                p {
                  color: white;
                }
              }
            }
          }
        }
      }
    }
  }
`;function fg(){const e=M0(),t=ls(),[n,r]=b.exports.useState({sprites:"a",name:"a",abilities:"a",base_experience:"a",height:"a",weight:"a",stats:"a",types:[],id:"a"}),[o,i]=b.exports.useState("Sobre"),[l,a]=b.exports.useState(!0),[s,c]=b.exports.useState([]),p=e.detalheName,h=String(s[0]);function m(y){const N=[];y.forEach(d=>{N.push(d.type.name)}),c(N)}function k(y){const d=y.parentNode.parentNode.children;for(let f=0;f<d.length;f+=1)d[f].children[0].style.borderBottom="0";y.style.borderBottom="2px solid white";const u=y.textContent;i(u)}function x(){switch(o){case"Sobre":return g(Yf,{abilities:n.abilities,base_experience:n.base_experience,height:n.height,weight:n.weight,types:s,colorBackground:h,name:n.name,sprite:n.sprites.other.home.front_default||n.sprites.other["official-artwork"].front_default||n.sprites.front_default||n.sprites.front_shiny},n.name);case"Stats":return g(Gf,{stats:n.stats,colorBackground:h},n.name)}}return b.exports.useEffect(()=>{zf(p).then(y=>{r(y),m(y.types),a(!1)})},[]),g(dg,{className:h,children:L("div",{className:"wrapper",children:[L("div",{className:"contImgPokemonMobile",children:[L("div",{className:"contInfoPokemon",children:[g("button",{type:"button",className:"buttonBack",onClick:()=>t(-1),children:g(tg,{size:40})}),g("h1",{children:p}),g("div",{children:L("p",{children:["#",n.id]})})]}),l===!1&&g(vs,{src:n.sprites.other.home.front_default||n.sprites.other["official-artwork"].front_default||n.sprites.front_default||n.sprites.front_shiny,alt:n.name},n.name)]}),L("div",{className:"contentInfoMobile",children:[g("div",{className:"statsPokemonMobile",children:g("nav",{className:"navLinks",children:L("ul",{children:[g("li",{children:g("button",{type:"button",onClick:y=>k(y.target),children:"Sobre"})}),g("li",{children:g("button",{type:"button",onClick:y=>k(y.target),children:"Stats"})})]})})}),L("div",{className:"divContent",children:[g("div",{className:"divTypes",children:s.map(y=>L("p",{className:y,children:[y," "]}))}),l===!1&&o&&x()]})]})]})})}var pg="/Pokedex/assets/homeDesktop.4d17474a.svg",hg="/Pokedex/assets/homeMobile.f4cb3b2d.svg";const mg=Ze.div`
  padding-left: 5rem;
  background: var(--yellow-gradient);
  overflow: hidden;
  display: flex;
  align-items: center;
  height: 100vh;

  .containerText {
    flex-basis: 50%;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    h1 {
      font-size: clamp(2rem, 4vw, 5rem);
      font-weight: 400;
      span {
        font-weight: 700;
      }
    }

    p {
      font-size: clamp(1rem, 2.5vw, 3rem);
      font-weight: 400;
    }

    a {
      width: fit-content;
      padding: 1rem;
      padding-top: 0.5rem;
      font-size: clamp(1rem, 2vw, 3rem);

      color: black;
      text-decoration: none;
      background: var(--green);
      border-radius: 11px;
      box-shadow: inset 0px -9px 0px rgba(0, 0, 0, 0.18);
      transition: all 0.2s ease-in-out;

      &:hover {
        box-shadow: inset 3px 3px 0px rgba(0, 0, 0, 0.18);
        background-color: var(--green-dark);
      }
    }
  }

  .containerImg {
    flex: 1;
    img {
      width: 100%;
      object-position: bottom;
    }
  }

  @media (max-width: 768px) {
    padding-left: 0;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    text-align: center;

    .containerText {
      order: 2;
      h1 {
        font-size: clamp(1.1rem, 4.5vw, 4rem);
      }
      a {
        margin: 0 auto;
      }
    }

    .containerImg {
      order: 1;
      width: 100%;
      img {
        width: clamp(23rem, 70vw, 100rem);
        height: 100%;
      }
    }
  }
`;function gg(){const[e,t]=$e.useState(!1);function n(){window.innerWidth<=768&&t(!e)}return b.exports.useEffect(()=>{n()},[]),L(mg,{className:"homeMain",children:[L("div",{className:"containerText",children:[L("h1",{children:[g("span",{children:"Encontre"})," todos os seus ",g("span",{children:"Pok\xE9mons"})," favoritos"]}),g("p",{children:"Voc\xEA pode conhecer os tipos dos Pok\xE9mons, suas desvantagens e seus stats."}),g(ss,{to:"/pokedex",children:"Mostrar todos os pokemons"})]}),g("div",{className:"containerImg",children:g("img",{src:e?hg:pg,alt:""})})]})}var vg="/Pokedex/assets/logo.98fbf178.svg";const yg=Ze.header`
  background-color: var(--yellow);
  padding-inline: 5%;
  padding-block: 0.7rem;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  position: relative;
  width: 100%;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    ul {
      display: flex;
      align-items: center;
      justify-content: space-between;
      list-style: none;
      gap: 2rem;

      li {
        a {
          color: black;
          text-decoration: none;
          font-size: 1.6rem;
          font-weight: bold;
          transition: all 0.2s ease-in-out;
          font-size: 1.4rem;
        }
      }
    }

    .open-menu,
    .close-menu {
      display: none;
      background: transparent;
      border: 0;
    }
  }

  @media (max-width: 700px) {
    z-index: 40;
    nav {
      .menu {
        display: none;
      }

      .open-menu,
      .close-menu {
        display: block;
      }
    }
  }
`;function ys(){const[e,t]=$e.useState(!1);function n(){const r=!e;t(r),document.body.classList.toggle("menu-expanded"),document.querySelectorAll("ul li a").forEach(i=>{i.addEventListener("click",()=>{t(r),document.body.classList.toggle("menu-expanded")})})}return g(yg,{children:L("nav",{className:"navigation",children:[g(ss,{to:"/",children:g("img",{src:vg,alt:"Logo do Pokemon"})}),g("div",{className:"menu",children:L("ul",{children:[g("li",{children:g(al,{style:({isActive:r})=>({display:"block",margin:"1rem 0",color:r?"red":""}),to:"/",children:"Home"})}),g("li",{children:g(al,{style:({isActive:r})=>({display:"block",margin:"1rem 0",color:r?"red":""}),to:"/pokedex",children:"Pok\xE9dex"})}),g("li",{children:g(al,{style:({isActive:r})=>({display:"block",margin:"1rem 0",color:r?"red":""}),to:"/creditos",children:"Cr\xE9ditos"})})]})}),e?g("button",{type:"button","aria-expanded":"true","aria-label":"Fechar menu",onClick:n,className:"close-menu",children:g("svg",{width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:g("path",{d:"M30 10L10 30M10 10L30 30",stroke:"black",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}):g("button",{"aria-expanded":"false","aria-label":"Abrir menu",onClick:n,className:"open-menu",type:"button",children:L("svg",{width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[g("path",{d:"M10 20H30",stroke:"black",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round"}),g("path",{d:"M10 12H30",stroke:"black",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round"}),g("path",{d:"M18 28L30 28",stroke:"black",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round"})]})})]})})}const wg=Ze.div`
  header {
    position: absolute;
  }

  .homeMain {
    padding-top: 8rem;
  }
  background-color: var(--yellow-gradient);
`;function kg(){return L(wg,{children:[g(ys,{}),g(gg,{})]})}function mo(e){return Ri({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M15.5 5H11l5 7-5 7h4.5l5-7z"}},{tag:"path",attr:{d:"M8.5 5H4l5 7-5 7h4.5l5-7z"}}]})(e)}var xg="/Pokedex/assets/pikachuX.32bd0172.svg";const Sg=Ze.article`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 19rem;
  background: #f6f7f9;
  box-shadow: 0 0.5rem 0.3rem rgba(0, 0, 0, 0.2);
  border-radius: 11px;

  &.closeDetails {
    animation: rotateCard 2s;
    @keyframes rotateCard {
      0% {
        transform: rotateY(0deg);
      }
      100% {
        transform: rotateY(360deg);
      }
    }
  }

  header {
    display: flex;
    align-items: center;
    padding-inline: 0.5rem;
    justify-content: space-between;

    div:first-child {
      display: flex;
      align-items: center;
      gap: 1rem;

      p {
        color: white;
        text-decoration: underline;
        border-radius: 50px;

        @media (max-width: 768px) {
          font-size: 1.2rem;
        }
      }

      h3 {
        text-transform: capitalize;
        font-size: 1.6rem;
      }
    }

    div:last-child {
      button {
        background-color: transparent;
        border: 0;
        font-weight: 700;
        font-size: 1.6rem;
        color: white;
      }
    }
  }

  .navLinks {
    margin-top: 1rem;
    ul {
      display: flex;
      justify-content: center;
      list-style: none;
      width: 100%;
      margin-left: auto;

      li {
        & + li {
          margin-left: 1.5rem;
        }
        button {
          background-color: white;
          border: 0;
          font-size: 1.3rem;
          border-radius: 10px;
          padding: 0.2rem 1rem;
          box-shadow: inset 0 -0.3rem 0.1rem rgba(0, 0, 0, 0.2);
          transition: all 0.1s ease-in-out;
          font-weight: 700;

          &.active {
            color: blue;
          }

          &:hover {
            box-shadow: inset 0 0.3rem 0.1rem rgba(0, 0, 0, 0.2);
            filter: brightness(99%);
            cursor: pointer;
          }
        }
      }
    }
  }
  @media (max-width: 350px) {
    width: 97vw;
  }
`;function Cg({detailsOnOff:e,id:t,name:n,colorBackground:r,abilities:o,base_experience:i,height:l,weight:a,stats:s,types:c,sprite:p}){const[h,m]=b.exports.useState("Sobre");function k(N){var u,f,w;const d=(w=(f=(u=N.parentNode)==null?void 0:u.parentNode)==null?void 0:f.parentNode)==null?void 0:w.parentNode;d.classList.add("closeDetails"),setTimeout(()=>{e(!1),d.classList.remove("closeDetails")},1300)}function x(N){const u=N.parentNode.parentNode.children;for(let w=0;w<u.length;w+=1)u[w].children[0].classList.remove("textColorType",`${r}`);N.classList.add("textColorType",`${r}`);const f=N.textContent;m(f)}function y(){switch(h){case"Sobre":return g(Yf,{abilities:o,base_experience:i,height:l,weight:a,types:c,colorBackground:r,name:n,sprite:p},n);case"Stats":return g(Gf,{stats:s,colorBackground:r},n)}}return L(Sg,{className:r,children:[L("div",{children:[L("header",{children:[L("div",{children:[L("p",{children:["#",t]}),g("h3",{children:n})]}),g("div",{children:g("button",{type:"button",onClick:N=>k(N.target),children:"X"})})]}),g("nav",{className:"navLinks",children:L("ul",{children:[g("li",{children:g("button",{type:"button",className:`buttonNav textColorType ${r}`,onClick:N=>x(N.target),children:"Sobre"})}),g("li",{children:g("button",{type:"button",onClick:N=>x(N.target),children:"Stats"})})]})})]}),g("div",{children:h&&y()})]})}const Eg=Ze.article`
  display: grid;
  grid-template-columns: 14.2rem 1fr;
  box-shadow: 0 0.5rem 0.3rem rgba(0, 0, 0, 0.2);
  border-radius: 11px;

  &.moreDetails {
    animation: rotateCard 2s;
    @keyframes rotateCard {
      0% {
        transform: rotateY(0deg);
      }
      100% {
        transform: rotateY(360deg);
      }
    }
  }

  .contentInfos {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    gap: 1.2rem;
    background: #f6f7f9;
    padding-block: 3%;
    border-top-left-radius: 11px;
    border-bottom-left-radius: 11px;
    text-align: center;

    .name {
      text-transform: capitalize;
      font-weight: 700;
    }

    .moreDetails {
      a,
      button {
        font-size: 1.2rem;
        color: black;
        background-color: #00aaff;
        text-decoration: none;
        font-weight: 700;
        border-radius: 10px;
        padding: 0.3rem;
        border: 0;
        box-shadow: inset 0 -0.4rem 0.1rem rgba(0, 0, 0, 0.2);
        transition: all 0.1s ease-in-out;

        &:hover {
          box-shadow: inset 0 0.4rem 0.1rem rgba(0, 0, 0, 0.2);
          filter: brightness(105%);
        }
      }
    }
  }

  .contentImg {
    height: 19rem;
    border-top-right-radius: 11px;
    border-bottom-right-radius: 11px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .types,
  .stats {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .types {
    font-size: 1.1rem;
    gap: 0.5rem;
    margin-inline: 2px;
    p {
      display: flex;
      align-items: center;
      gap: 0.3rem;
      text-align: center;
      box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.2);
      border-radius: 11px;
      padding: 0.2rem 0.7rem;
      text-transform: capitalize;
    }
  }

  .stats {
    text-align: center;
    display: flex;
    justify-content: space-around;
    width: 100%;

    p {
      display: flex;
      flex-direction: column;
    }

    p:first-of-type {
      width: 3rem;
      height: 3rem;

      margin: 0 auto;

      display: flex;
      justify-content: center;
      align-items: center;

      border: 3px solid black;
      border-radius: 50%;
    }

    p:nth-of-type(2) {
      font-size: 1.2rem;
    }
  }

  .carregando {
    background-color: var(--yellow);
  }

  @media (max-width: 350px) {
    width: 97vw;
    display: flex;
    flex-direction: column-reverse;
    border-radius: 11px;

    .contentInfos {
      border-top-left-radius: 0;
      border-bottom-right-radius: 11px;
      border-bottom-left-radius: 11px;
    }

    .contentImg {
      border-top-left-radius: 11px;
      border-top-right-radius: 11px;
      border-bottom-right-radius: 0;
    }
  }
`;function Yu({url:e}){const[t,n]=b.exports.useState({}),[r,o]=b.exports.useState(!0),[i,l]=b.exports.useState([]),[a,s]=b.exports.useState([]),[c,p]=b.exports.useState(!1),h={bug:Lf,dark:Tf,dragon:Of,electric:Rf,fairy:bf,fighting:$f,fire:Af,flying:If,ghost:jf,grass:Mf,ground:Df,ice:Ff,normal:Bf,poison:Uf,psychic:Hf,rock:Wf,steel:Vf,water:Qf};function m(){return i[1].base_stat>i[3].base_stat?L(kn,{children:[g("p",{children:i[1].base_stat}),L("p",{children:["Physical ",g("span",{children:"Attack"})," "]})]}):L(kn,{children:[g("p",{children:i[3].base_stat})," ",L("p",{children:["Special ",g("span",{children:"Attack"})," "]})]})}function k(){return i[2].base_stat>i[4].base_stat?L(kn,{children:[g("p",{children:i[2].base_stat}),L("p",{children:["Physical ",g("span",{children:"Defense"})]})]}):L(kn,{children:[g("p",{children:i[4].base_stat})," ",L("p",{children:["Special ",g("span",{}),"Defense",g("span",{})]})]})}function x(d){const u=[];d.forEach(f=>{u.push(f.type.name)}),s(u)}function y(d){var f,w;const u=(w=(f=d.parentNode)==null?void 0:f.parentNode)==null?void 0:w.parentNode;u.classList.add("moreDetails"),setTimeout(()=>{p(!c),u.classList.remove("moreDetails")},1300)}const N=a[0];return b.exports.useEffect(()=>{ig(e).then(d=>{n(d),l(d.stats),x(d.types),o(!1)})},[]),g(kn,{children:c?g(Cg,{detailsOnOff:p,name:t.name,id:t.id,abilities:t.abilities,base_experience:t.base_experience,height:t.height,weight:t.weight,stats:i,types:a,colorBackground:N.toString(),sprite:t.sprites.other.home.front_default||t.sprites.other["official-artwork"].front_default||t.sprites.front_default||t.sprites.front_shiny},t.name):L(Eg,{children:[L("div",{className:"contentInfos",children:[g("p",{className:"name",children:t.name}),L("div",{className:"stats",children:[g("div",{children:r?null:m()}),g("div",{children:r?null:k()})]}),g("div",{className:"moreDetails",children:g("button",{type:"button",className:r?"":N.toString(),onClick:d=>y(d.target),children:"Mais Detalhes"})}),g("div",{className:"types",children:r?null:a.map(d=>L("p",{className:d,children:[g("img",{src:h[d],alt:d}),d]},d))})]}),r?g("div",{className:"contentImg carregando",children:g("img",{src:"https://c.tenor.com/CpRW4WUGa3IAAAAi/pok%C3%A9ball-pok%C3%A9mon.gif",alt:"Pokebola"})}):g(vs,{src:t.sprites.other.home.front_default||t.sprites.other["official-artwork"].front_default||t.sprites.front_default||t.sprites.front_shiny,alt:t.name,type:a[0]},t.name),g(B0,{})]})})}const Pg=Ze.div`
  padding-inline: 5%;
  padding-bottom: 5%;

  .pokemons {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(23rem, 1fr));
    row-gap: 2rem;
    column-gap: 5rem;

    .returnPokedex {
      background-color: var(--red);
      border: 0;
      border-radius: 8px;
      box-shadow: inset 0px -8px 0px rgba(0, 0, 0, 0.2);
      height: 5rem;
      font-weight: 700;
      margin: auto;
      width: 100%;
      font-size: 1.6rem;

      transition: all 0.2s ease-in-out;
      &:hover {
        box-shadow: inset 2px 4px 0px rgba(0, 0, 0, 0.2);
        filter: brightness(105%);
        color: white;
      }

      @media (max-width: 330px) {
        width: 97%;
        margin: 0;
      }
    }
  }
  h1 {
    text-align: center;
    margin-block: 2rem;
    font-weight: 400;
    span {
      font-weight: 700;
    }
  }

  #procurarPokemon {
    width: 100%;

    background: #f2f2f2;
    border: 0;

    padding-block: 0.8rem;
    padding-left: 1.5rem;

    box-shadow: 2px 2px 2px rgba(33, 33, 33, 0.1);
    border-radius: 40px;

    font-size: 1.2rem;
    margin-bottom: 3rem;
  }

  .filtros {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    details {
      background: #f2f2f2;
      /* blur8 */

      box-shadow: 4px 4px 8px rgba(1, 28, 64, 0.2);
      border-radius: 8px;
      width: fit-content;
      margin-bottom: 3rem;
      padding: 1%;

      summary {
        cursor: pointer;
      }

      .divButton {
        position: absolute;
        background: #f2f2f2;
        box-shadow: 4px 4px 8px rgba(1, 28, 64, 0.2);
        width: 12.5rem;
        margin-top: 1rem;
        border-radius: 10px;
        text-align: center;
        padding-block: 0.5rem;
        z-index: 2;

        &.showButton {
          button {
            display: block;
            font-weight: 700;
          }
        }

        button {
          display: none;
          margin-inline: auto;
          margin-block: 1rem;
          width: 90%;
          height: 2rem;
          background-color: var(--red);
          border: 0;
          border-radius: 8px;
          box-shadow: inset 0px -4px 0px rgba(0, 0, 0, 0.2);

          transition: all 0.1s ease-in-out;
          &:hover {
            box-shadow: inset 0px 4px 0px rgba(0, 0, 0, 0.2);
            filter: brightness(105%);
          }
        }
      }

      .radiosButtons {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        margin-left: 1rem;

        .inputsRadio:checked & {
          background: red;
        }

        label {
          display: flex;
          align-items: center;
          gap: 1rem;
          text-transform: capitalize;
          width: calc(100% - 2rem);
          border-radius: 10px;
          padding: 2%;

          &:hover {
            cursor: pointer;
            box-shadow: inset -4px -4px 0px rgba(0, 0, 0, 0.2);
          }
        }
        .inputsRadio {
          appearance: none;

          border-radius: 50%;
          width: 16px;
          height: 16px;

          border: 2px solid #999;
          transition: 0.1s all linear;

          &:hover {
            opacity: 0.5;
          }

          &:hover:not(:checked) {
            opacity: 0.5;
          }

          /* &:checked {
            background: radial-gradient(
              circle,
              var(--color-stats) 30%,
              rgba(255, 255, 255, 1) 100%
            );
            border: 0;
          } */
        }
      }
    }

    .footerTop {
      &.hidden {
        display: none;
      }
      .divFooterTop {
        display: flex;
        gap: 1rem;
        justify-content: center;
        height: 2.9rem;
        align-items: flex-end;
        margin-bottom: 0.5rem;

        p {
          width: calc(2rem + 4rem);
          white-space: nowrap;
          text-align: center;
          padding: 1%;
          color: var(--white);
          border-radius: 100px;
          background-color: var(--red);
          box-shadow: inset 2px -0.2rem 0.3rem rgba(0, 0, 0, 0.2);
        }

        button:first-of-type {
          svg {
            transform: rotate(180deg);
          }
        }

        button {
          width: 3rem;
          border: 0;
          gap: 0.2rem;
          background-color: transparent;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 1.2rem;
          border-radius: 100px;

          background-color: var(--white);
          box-shadow: inset 2px -0.2rem 0.3rem rgba(0, 0, 0, 0.2);
          padding: 1%;
        }
      }
      .buttonReturn {
        width: calc(10rem + 4rem);
        font-size: 1rem;
        font-weight: 700;
        white-space: nowrap;
        padding-block: 1.5%;
        margin-bottom: 1rem;

        border: 0;
        gap: 0.2rem;
        background-color: transparent;
        display: flex;
        justify-content: center;
        align-items: center;

        border-radius: 100px;

        background-color: var(--white);
        box-shadow: inset 2px -0.2rem 0.3rem rgba(0, 0, 0, 0.2);
        padding: 1%;
      }
    }
  }

  footer {
    div {
      display: flex;
      gap: 1rem;
      justify-content: center;
      align-items: center;
      margin-top: 3rem;

      &.hidden {
        display: none;
      }
    }

    p {
      width: fit-content;
      padding: 1%;
      color: var(--white);
      border-radius: 100px;
      background-color: var(--red);
      box-shadow: inset 2px -0.2rem 0.3rem rgba(0, 0, 0, 0.2);
    }

    button:first-of-type {
      svg {
        transform: rotate(180deg);
      }
    }

    button {
      border: 0;
      gap: 0.2rem;
      background-color: transparent;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.2rem;
      border-radius: 100px;

      background-color: var(--white);
      box-shadow: inset 2px -0.2rem 0.3rem rgba(0, 0, 0, 0.2);
      padding: 1%;
    }

    .emptyFilter {
      margin-top: 3rem;
      margin-inline: auto;
      background-color: var(--red);
      font-weight: bold;

      &:hover {
        box-shadow: inset 0px 4px 0px rgba(0, 0, 0, 0.2);
        filter: brightness(105%);
      }
      &.hidden {
        display: none;
      }
    }
  }

  .errorDiv {
    text-align: center;
    margin-top: -2rem;
    img {
      width: 5rem;
    }
  }

  @media (max-width: 906px) {
    padding-inline: 1%;

    .filtros {
      flex-direction: column;
      align-items: center;
      gap: 2rem;

      details {
        margin-bottom: 0;
      }
      .footerTop {
        .divFooterTop {
          margin-bottom: 1.5rem;
        }
      }
    }
    .pokemons {
      grid-template-columns: repeat(auto-fit, minmax(23rem, 1fr));
      row-gap: 2rem;
      column-gap: 1rem;
    }
  }

  @media (max-width: 671px) {
    padding-inline: 2.5%;
  }

  @media (max-width: 350px) {
    padding-inline: 1.5%;
  }
`;function _g(){const[e,t]=b.exports.useState([]),[n,r]=b.exports.useState(""),[o,i]=b.exports.useState(!0),[l,a]=b.exports.useState(0),[s,c]=b.exports.useState([]),[p,h]=b.exports.useState(1),[m,k]=b.exports.useState([]),[x,y]=b.exports.useState(!1),[N,d]=b.exports.useState(0),u=Math.round(s.length/20+1),f={footerDiv:document.querySelector(".footerBottom .divShowHidden"),footerTop:document.querySelector(".footerTop"),inputs:document.querySelectorAll(".inputsRadio"),divButton:document.querySelector(".divButton"),details:document.querySelector("details"),input:document.getElementById("procurarPokemon"),labelsRadios:document.querySelectorAll(".labelRadio"),buttonEmptyFilter:document.querySelector(".emptyFilter")},w=window.screen.width;async function E(){Vu().then(async S=>{t(S),i(!0),c(await og())}),h(1),a(0)}function $(){sg().then(S=>{k(S)})}async function C(S){zf(S).then(z=>{const H=`https://pokeapi.co/api/v2/pokemon/${z.name}`;r(H),i(!1),f.input.addEventListener("keyup",O=>{O.key==="Backspace"&&(E(),y(!1))})})}function P(S){return S===""?i(!0):C(S.toLowerCase())}function D(){let S=l+20;S>s.length?S-=20:p<u&&h(p+1),a(S),Qu(S).then(z=>{t(z)})}function M(){let S=l-20;S<0?S=0:p>0&&h(p-1),a(S),Qu(S).then(z=>{t(z)})}function Y(){h(1),a(0),Vu().then(S=>{t(S)})}function ee(S){f.inputs.forEach(z=>{z.classList.contains(`${z.value}`)&&z.classList.remove(z.value),z.value===S.value&&S.classList.add(z.value)})}function oe(S){f.labelsRadios.forEach(z=>{const H=z.getAttribute("for");z.classList.contains(`${H}`)&&z.classList.remove(H),H===S.htmlFor&&S.classList.add(H)})}function pe(S){f.labelsRadios.forEach(z=>{z.classList.contains(`clickedOn-${z.getAttribute("for")}`)&&z.classList.remove(`clickedOn-${z.getAttribute("for")}`),z.children[0].classList.contains(`${S.target.value}`)?z.classList.add(`clickedOn-${S.target.value}`):z.classList.remove(`clickedOn-${S.target.value}`)})}function he(S){lg(S.target.value).then(z=>{const H=[];z.forEach(O=>{H.push(O.pokemon)}),t(H),f.divButton.classList.add("showButton"),d(H.length),y(!0)}),f.footerDiv.classList.add("hidden"),f.footerTop.classList.add("hidden"),f.buttonEmptyFilter.classList.remove("hidden"),window.scrollTo(0,230),ee(S.target),pe(S)}function Je(){y(!1),f.details.toggleAttribute("open"),f.divButton.classList.remove("showButton"),f.inputs.forEach(S=>{S.classList.contains(`${S.value}`)&&S.classList.remove(S.value)}),f.footerDiv.classList.remove("hidden"),f.footerTop.classList.remove("hidden"),f.buttonEmptyFilter.classList.add("hidden"),f.labelsRadios.forEach(S=>{S.classList.contains(`clickedOn-${S.getAttribute("for")}`)&&S.classList.remove(`clickedOn-${S.getAttribute("for")}`)}),E().then(()=>{window.scrollTo(0,230)})}function ye(S){S.classList.contains(S.htmlFor)&&S.classList.remove(S.htmlFor)}function T(){const S=document.getElementById("procurarPokemon");S.value="",E()}return b.exports.useEffect(()=>{E(),$()},[]),L(Pg,{children:[L("h1",{children:["Mais de 500 ",g("span",{children:"Pok\xE9mons"})," para voc\xEA escolher o seu favorito"]}),g("input",{type:"text",placeholder:"Procurar Pokemon",id:"procurarPokemon",onChange:S=>P(S.target.value)}),o===!0&&L("div",{className:"filtros",children:[L("details",{children:[g("summary",{children:"Filtro: Tipagem"}),L("div",{className:"divButton",children:[g("button",{type:"button",onClick:Je,children:"Limpar Filtro"}),w>650?g("div",{className:"radiosButtons",children:m.map(S=>L("label",{className:"labelRadio",htmlFor:S.name,onMouseOver:z=>oe(z.target),onMouseLeave:z=>ye(z.target),children:[g("input",{type:"radio",value:S.name,id:S.name,onClick:z=>he(z),name:"filtro",className:"inputsRadio"}),S.name]},S.name))}):g("div",{className:"radiosButtons expanded",children:m.map(S=>L("label",{className:"labelRadio",htmlFor:S.name,onMouseOver:z=>oe(z.target),onMouseLeave:z=>ye(z.target),children:[g("input",{type:"radio",value:S.name,id:S.name,onClick:z=>he(z),name:"filtro",className:"inputsRadio"}),S.name]},S.name))})]})]}),x===!0&&g("div",{children:L("p",{children:[g("span",{children:N})," Pok\xE9mons encontrados"]})}),L("div",{className:"footerTop",children:[L("div",{className:"divFooterTop",children:[g("button",{type:"button",onClick:M,children:g(mo,{size:24})}),g("p",{children:`${p} - ${u}`}),g("button",{type:"button",onClick:D,children:g(mo,{size:24})})]}),p>1&&g("button",{className:"buttonReturn",type:"button",onClick:Y,children:"Return Page 1"})]})]}),g("div",{className:"pokemons",children:o?e.length>0?e.map(S=>g(Yu,{url:S.url},S.name)):L("div",{className:"errorDiv",children:[g("img",{src:xg,alt:"Pikachu Error"}),g("p",{children:"Not Found"}),g("h2",{children:"N\xE3o existe nenhum pokemon com este tipo no momento."})]}):L(kn,{children:[g(Yu,{url:n},n.name),g("button",{type:"button",onClick:T,className:"returnPokedex",children:"Return Pok\xE9dex"})]})}),o===!0&&L("footer",{className:"footerBottom",children:[L("div",{className:"divShowHidden",children:[g("button",{type:"button",onClick:M,children:g(mo,{size:24})}),g("p",{children:`${p} - ${u}`}),g("button",{type:"button",onClick:D,children:g(mo,{size:24})})]}),g("button",{type:"button",className:"emptyFilter hidden",onClick:Je,children:"Limpar Filtro"})]})]})}const Ng=Ze.div`
  .menu-expanded {
    header {
      margin-top: -2rem;
    }
  }
`;function zg(){return L(Ng,{className:"pokedex",children:[g(ys,{}),g(_g,{})]})}const Lg=Ze.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding-bottom: 1.2rem;

  p {
    span {
      font-weight: bold;
    }
  }

  ul {
    list-style: none;
    display: flex;
    gap: 1rem;

    li {
      a {
        color: black;
        display: flex;
        align-items: center;
        text-decoration: none;
        gap: 0.5rem;
        transition: all 0.5s;

        &:hover {
          transform: scale(1.1);
        }
      }
    }

    li:first-of-type {
      a {
        svg {
          color: #0a66c2;
        }
      }
    }
  }
`;function Tg(){return L(Lg,{children:[L("p",{children:["Criado por ",g("span",{children:"Gabriel Costa Luiz"})," "]}),L("ul",{children:[L("li",{children:[L("a",{href:"https://www.linkedin.com/in/gabrielcostaluiz/",target:"_blank",rel:"noreferrer",children:[g(rg,{})," Linkedin"]})," "]}),g("li",{children:"|"}),L("li",{children:[L("a",{href:"https://github.com/GabrielCostaLuiz",target:"_blank",rel:"noreferrer",children:[g(ng,{})," GitHub"]})," "]})]})]})}const Og=Ze.div`
  height: 100vh;
  width: 100%;

  .menu-expanded {
    header {
      margin-top: -2rem;
    }
  }

  .Creditos {
    h1 {
      text-align: center;
      margin-block: 2rem;
    }
    ul {
      margin-left: 2rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;

      li {
        a {
          word-wrap: break-word;
        }
      }
    }
  }

  footer {
    margin-top: 2rem;
  }
`;function Rg(){return L(Og,{className:"creditosPage",children:[g(ys,{}),L("main",{className:"Creditos",children:[g("h1",{children:"Cr\xE9ditos"}),L("ul",{children:[L("li",{children:[g("p",{children:"API Pokemon:"}),g("a",{href:"https://pokeapi.co/",target:"_blank",rel:"noreferrer",children:"https://pokeapi.co/"})]}),L("li",{children:[g("p",{children:"Layout Pokedex:"}),g("a",{href:"https://www.figma.com/file/s3gzY9S8cCCecSRFhbezTz/Pokedex-(Community)?node-id=147%3A53049",target:"_blank",rel:"noreferrer",children:"https://www.figma.com/community/file/893705420616737018"})," "]}),L("li",{children:[g("p",{children:" Icon Types:"}),g("a",{href:"https://www.figma.com/community/file/1118161968571947193",target:"_blank",rel:"noreferrer",children:"https://www.figma.com/community/file/1118161968571947193"})," "]})]})]}),g(Tg,{})]})}function bg(){return L(H0,{children:[g(wn,{path:"/",element:g(kg,{})}),g(wn,{path:"/pokedex",element:g(zg,{})}),g(wn,{path:"/detalhes/:detalheName",element:g(fg,{})}),g(wn,{path:"/creditos",element:g(Rg,{})}),g(wn,{path:"*",element:g(Jm,{})})]})}function $g(){return g(Q0,{children:g(bg,{})})}const Ag=Wm`
/* RESET PADRÃO */
  :root{
    --orange-primary: #F2B807;
    --orange-second: #F28F16;
    --yellow: #F5DB13;
    --yellow-dark: #dec714;
    --red:#D93E30;
    --green: #73D677;
    --green-dark: #82c984;

    --white:#F6F7F9;

    --color-stats: grey;
    --color-stats-label: grey;
    --color-stats-label-clicked: grey;

    --yellow-gradient: linear-gradient(180deg, #F5DB13 0%, #F2B807 100%);
  }
  
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
  width: 100%;
  height: 100%;
  }

  html{
    scroll-behavior: smooth;
    @media (max-width: 768px) {
    font-size:87.5%;
  }
  }

  body{
    -webkit-font-smoothing: antialiased;
    font-size: 1.6rem;
    position: relative;
  }

  body, input, textarea, button{
    font-family: 'Karla', sans-serif;
    font-weight:  400;
  }

  button{
    cursor: pointer;
  }

  [disabled]{
    opacity: 0.6;
    cursor: not-allowed;
  }

body.menu-expanded {
  overflow: hidden;
  .pokedex{
    header{
      margin-top: -2rem;
    }
  }

  .creditosPage{
    header{
      margin-top: -2rem;
    }
  }

  header{
    box-shadow: 0px 25rem 0px rgba(1, 17, 38, 0.2);
    border-radius: 0px 0px 16px 16px;
    position: absolute;
    top: 0;
    animation: open 1s;

    @keyframes open {
      from{
        transform: translateY(-30rem);
        box-shadow: none;
      }
      to{
        transform: translateY(0px);
        box-shadow: none;
      }
    }

    .navigation{
    flex-direction: column;
    gap: 2rem;
    

      .menu{
      display: block;
      top: 0;
      left: 0;
      width: 100vw;

        ul{
            flex-direction: column;
            align-items: center;
          }
  }
  }
  }
}

.labelRadio{
  &.clickedOn-normal {
    background: linear-gradient(270deg, #bdbdb7 0.15%, #aaaa99 100%);
    box-shadow: inset -4px -4px 0px rgba(0, 0, 0, 0.2);
  }

  &.clickedOn-fire {
    background: linear-gradient(270deg, #b33327 0.15%, #d93e30 100%);
    box-shadow: inset -4px -4px 0px rgba(0, 0, 0, 0.2);
  }

  &.clickedOn-water {
    background: linear-gradient(270deg, #5bc7fa 0.15%, #35baff 100%);
    box-shadow: inset -4px -4px 0px rgba(0, 0, 0, 0.2);
  }

  &.clickedOn-electric {
    background: linear-gradient(270deg, #fbd76a 0.15%, #ffcc33 100%);
    box-shadow: inset -4px -4px 0px rgba(0, 0, 0, 0.2);
  }

  &.clickedOn-grass {
    background: linear-gradient(270deg, #99d482 0.15%, #77cc55 100%);
    box-shadow: inset -4px -4px 0px rgba(0, 0, 0, 0.2);
  }

  &.clickedOn-ice {
    background: linear-gradient(270deg, #66ccff 0.15%, #00aaff 100%);
    box-shadow: inset -4px -4px 0px rgba(0, 0, 0, 0.2);
  }

  &.clickedOn-fighting {
    background: linear-gradient(270deg, #bb5544 0.15%, #bc6a5c 100%);
    box-shadow: inset -4px -4px 0px rgba(0, 0, 0, 0.2);
  }

  &.clickedOn-poison {
    background: linear-gradient(270deg, #bf73b0 0.15%, #aa5599 100%);
    box-shadow: inset -4px -4px 0px rgba(0, 0, 0, 0.2);
  }

  &.clickedOn-ground {
    background: linear-gradient(270deg, #e2ca83 0.15%, #ddbb55 100%);
    box-shadow: inset -4px -4px 0px rgba(0, 0, 0, 0.2);
  }

  &.clickedOn-flying {
    background: linear-gradient(270deg, #8899ff 0.15%, #5b73fb 100%);
    box-shadow: inset -4px -4px 0px rgba(0, 0, 0, 0.2);
  }

  &.clickedOn-psychic {
    background: linear-gradient(270deg, #fc8d8d 0.15%, #ff5959 100%);
    box-shadow: inset -4px -4px 0px rgba(0, 0, 0, 0.2);
  }

  &.clickedOn-bug {
    background: linear-gradient(270deg, #c2d43a 0.15%, #aabb22 100%);
    box-shadow: inset -4px -4px 0px rgba(0, 0, 0, 0.2);
  }

  &.clickedOn-rock {
    background: linear-gradient(270deg, #c7bc8f 0.15%, #bbaa66 100%);
    box-shadow: inset -4px -4px 0px rgba(0, 0, 0, 0.2);
  }

  &.clickedOn-ghost {
    background: linear-gradient(270deg, #8f8fc7 0.15%, #6666bb 100%);
    box-shadow: inset -4px -4px 0px rgba(0, 0, 0, 0.2);
  }

  &.clickedOn-dragon {
    background: linear-gradient(270deg, #a498f0 0.15%, #7766ee 100%);
    box-shadow: inset -4px -4px 0px rgba(0, 0, 0, 0.2);
  }

  &.clickedOn-dark {
    background: linear-gradient(270deg, #926f5d 0.15%, #775544 100%);
    box-shadow: inset -4px -4px 0px rgba(0, 0, 0, 0.2);
  }

  &.clickedOn-steel {
    background: linear-gradient(270deg, #c9c9cf 0.15%, #aaaabb 100%);
    box-shadow: inset -4px -4px 0px rgba(0, 0, 0, 0.2);
  }

  &.clickedOn-fairy {
    background: linear-gradient(270deg, #f4c8f4 0.15%, #ee99ee 100%);
    box-shadow: inset -4px -4px 0px rgba(0, 0, 0, 0.2);
  }

}

.inputsRadio{
  &.normal {
    background: radial-gradient(circle,#aaaa99 30%, rgba(255, 255, 255, 1) 100%);
    border: 0!important;
  }

  &.fire {
    background: radial-gradient(circle,#d93e30 30%, rgba(255, 255, 255, 1) 100%);
    border: 0!important;
  }

  &.water {
    background: radial-gradient(circle,#35baff 30%, rgba(255, 255, 255, 1) 100%);
    border: 0!important;
  }

  &.electric {
    background: radial-gradient(circle,#ffcc33 30%, rgba(255, 255, 255, 1) 100%);
    border: 0!important;
  }

  &.grass {
    background: radial-gradient(circle,#77cc55 30%, rgba(255, 255, 255, 1) 100%);
    border: 0!important;
  }

  &.ice {
    background: radial-gradient(circle,#00aaff 30%, rgba(255, 255, 255, 1) 100%);
    border: 0!important;
  }

  &.fighting {
    background: radial-gradient(circle,#bc6a5c 30%, rgba(255, 255, 255, 1) 100%);
    border: 0!important;
  }

  &.poison {
    background: radial-gradient(circle,#aa5599 30%, rgba(255, 255, 255, 1) 100%);
    border: 0!important;
  }

  &.ground {
    background: radial-gradient(circle,#ddbb55 30%, rgba(255, 255, 255, 1) 100%);
    border: 0!important;
  }

  &.flying {
    background: radial-gradient(circle,#5b73fb 30%, rgba(255, 255, 255, 1) 100%);
    border: 0!important;
  }

  &.psychic {
    background: radial-gradient(circle,#ff5959 30%, rgba(255, 255, 255, 1) 100%);
    border: 0!important;
  }

  &.bug {
    background: radial-gradient(circle,#aabb22 30%, rgba(255, 255, 255, 1) 100%);
    border: 0!important;
  }

  &.rock {
    background: radial-gradient(circle,#bbaa66 30%, rgba(255, 255, 255, 1) 100%);
    border: 0!important;
  }

  &.ghost {
    background: radial-gradient(circle,#6666bb 30%, rgba(255, 255, 255, 1) 100%);
    border: 0!important;
  }

  &.dragon {
    background: radial-gradient(circle,#7766ee 30%, rgba(255, 255, 255, 1) 100%);
    border: 0!important;
  }

  &.dark {
    background: radial-gradient(circle,#775544 30%, rgba(255, 255, 255, 1) 100%);
    border: 0!important;
  }

  &.steel {
    background: radial-gradient(circle,#aaaabb 30%, rgba(255, 255, 255, 1) 100%);
    border: 0!important;
  }

  &.fairy {
    background: radial-gradient(circle,#ee99ee 30%, rgba(255, 255, 255, 1) 100%);
    border: 0!important;
  }
}

.textColorType{
  &.normal {
    color:#aaaa99;
    background: none;
  }

  &.fire {
    background: none;
    color:#d93e30;
  }

  &.water {
    background: none;
    color:#35baff;
  }

  &.electric {
    background: none;
    color:#ffcc33;
  }

  &.grass {
    background: none;
    color:#77cc55;
  background: none;

  }

  &.ice {
    background: none;
    color:#00aaff;
  }

  &.fighting {
    background: none;
    color:#bc6a5c;
  }

  &.poison {
    background: none;
    color:#aa5599;
  }

  &.ground {
    background: none;
    color:#ddbb55;
  }

  &.flying {
    background: none;
    color:#5b73fb;
  }

  &.psychic {
    background: none;
    color:#ff5959;
  }

  &.bug {
    background: none;
    color:#aabb22;
  }

  &.rock {
    background: none;
    color:#bbaa66;
  }

  &.ghost {
    background: none;
    color:#6666bb;
  }

  &.dragon {
    background: none;
    color:#7766ee;
  }

  &.dark {
    background: none;
    color:#775544;
  }

  &.steel {
    background: none;
    color:#aaaabb;
  }

  &.fairy {
    background: none;
    color:#ee99ee;
  }
}

.normal {
    background: linear-gradient(270deg, #bdbdb7 0.15%, #aaaa99 100%);
  }

  .fire {
    background: linear-gradient(270deg, #b33327 0.15%, #d93e30 100%);
  }

  .water {
    background: linear-gradient(270deg, #5bc7fa 0.15%, #35baff 100%);
  }

  .electric {
    background: linear-gradient(270deg, #fbd76a 0.15%, #ffcc33 100%);
  }

  .grass {
    background: linear-gradient(270deg, #99d482 0.15%, #77cc55 100%);
  }

  .ice {
    background: linear-gradient(270deg, #66ccff 0.15%, #00aaff 100%);
  }

  .fighting {
    background: linear-gradient(270deg, #bb5544 0.15%, #bc6a5c 100%);
  }

  .poison {
    background: linear-gradient(270deg, #bf73b0 0.15%, #aa5599 100%);
  }

  .ground {
    background: linear-gradient(270deg, #e2ca83 0.15%, #ddbb55 100%);
  }

  .flying {
    background: linear-gradient(270deg, #8899ff 0.15%, #5b73fb 100%);
  }

  .psychic {
    background: linear-gradient(270deg, #fc8d8d 0.15%, #ff5959 100%);
  }

  .bug {
    background: linear-gradient(270deg, #c2d43a 0.15%, #aabb22 100%);
  }

  .rock {
    background: linear-gradient(270deg, #c7bc8f 0.15%, #bbaa66 100%);
  }

  .ghost {
    background: linear-gradient(270deg, #8f8fc7 0.15%, #6666bb 100%);
  }

  .dragon {
    background: linear-gradient(270deg, #a498f0 0.15%, #7766ee 100%);
  }

  .dark {
    background: linear-gradient(270deg, #926f5d 0.15%, #775544 100%);
  }

  .steel {
    background: linear-gradient(270deg, #c9c9cf 0.15%, #aaaabb 100%);
  }

  .fairy {
    background: linear-gradient(270deg, #f4c8f4 0.15%, #ee99ee 100%);
  }

/* RESET PADRÃO */
`;cl.createRoot(document.getElementById("root")).render(L($e.StrictMode,{children:[g($g,{}),g(Ag,{})]}));
