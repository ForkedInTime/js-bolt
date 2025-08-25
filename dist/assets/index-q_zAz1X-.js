(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=n(l);fetch(l.href,o)}})();var Js={exports:{}},nl={},Gs={exports:{}},_={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xn=Symbol.for("react.element"),sc=Symbol.for("react.portal"),ac=Symbol.for("react.fragment"),uc=Symbol.for("react.strict_mode"),cc=Symbol.for("react.profiler"),dc=Symbol.for("react.provider"),fc=Symbol.for("react.context"),pc=Symbol.for("react.forward_ref"),mc=Symbol.for("react.suspense"),hc=Symbol.for("react.memo"),gc=Symbol.for("react.lazy"),Ri=Symbol.iterator;function vc(e){return e===null||typeof e!="object"?null:(e=Ri&&e[Ri]||e["@@iterator"],typeof e=="function"?e:null)}var Ks={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Xs=Object.assign,Zs={};function sn(e,t,n){this.props=e,this.context=t,this.refs=Zs,this.updater=n||Ks}sn.prototype.isReactComponent={};sn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};sn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function qs(){}qs.prototype=sn.prototype;function Ho(e,t,n){this.props=e,this.context=t,this.refs=Zs,this.updater=n||Ks}var Bo=Ho.prototype=new qs;Bo.constructor=Ho;Xs(Bo,sn.prototype);Bo.isPureReactComponent=!0;var Ai=Array.isArray,bs=Object.prototype.hasOwnProperty,Uo={current:null},ea={key:!0,ref:!0,__self:!0,__source:!0};function ta(e,t,n){var r,l={},o=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(o=""+t.key),t)bs.call(t,r)&&!ea.hasOwnProperty(r)&&(l[r]=t[r]);var s=arguments.length-2;if(s===1)l.children=n;else if(1<s){for(var a=Array(s),c=0;c<s;c++)a[c]=arguments[c+2];l.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)l[r]===void 0&&(l[r]=s[r]);return{$$typeof:Xn,type:e,key:o,ref:i,props:l,_owner:Uo.current}}function yc(e,t){return{$$typeof:Xn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Wo(e){return typeof e=="object"&&e!==null&&e.$$typeof===Xn}function wc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Oi=/\/+/g;function xl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?wc(""+e.key):t.toString(36)}function kr(e,t,n,r,l){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Xn:case sc:i=!0}}if(i)return i=e,l=l(i),e=r===""?"."+xl(i,0):r,Ai(l)?(n="",e!=null&&(n=e.replace(Oi,"$&/")+"/"),kr(l,t,n,"",function(c){return c})):l!=null&&(Wo(l)&&(l=yc(l,n+(!l.key||i&&i.key===l.key?"":(""+l.key).replace(Oi,"$&/")+"/")+e)),t.push(l)),1;if(i=0,r=r===""?".":r+":",Ai(e))for(var s=0;s<e.length;s++){o=e[s];var a=r+xl(o,s);i+=kr(o,t,n,a,l)}else if(a=vc(e),typeof a=="function")for(e=a.call(e),s=0;!(o=e.next()).done;)o=o.value,a=r+xl(o,s++),i+=kr(o,t,n,a,l);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function rr(e,t,n){if(e==null)return e;var r=[],l=0;return kr(e,r,"","",function(o){return t.call(n,o,l++)}),r}function kc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var se={current:null},xr={transition:null},xc={ReactCurrentDispatcher:se,ReactCurrentBatchConfig:xr,ReactCurrentOwner:Uo};function na(){throw Error("act(...) is not supported in production builds of React.")}_.Children={map:rr,forEach:function(e,t,n){rr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return rr(e,function(){t++}),t},toArray:function(e){return rr(e,function(t){return t})||[]},only:function(e){if(!Wo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};_.Component=sn;_.Fragment=ac;_.Profiler=cc;_.PureComponent=Ho;_.StrictMode=uc;_.Suspense=mc;_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xc;_.act=na;_.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Xs({},e.props),l=e.key,o=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,i=Uo.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)bs.call(t,a)&&!ea.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var c=0;c<a;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:Xn,type:e.type,key:l,ref:o,props:r,_owner:i}};_.createContext=function(e){return e={$$typeof:fc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:dc,_context:e},e.Consumer=e};_.createElement=ta;_.createFactory=function(e){var t=ta.bind(null,e);return t.type=e,t};_.createRef=function(){return{current:null}};_.forwardRef=function(e){return{$$typeof:pc,render:e}};_.isValidElement=Wo;_.lazy=function(e){return{$$typeof:gc,_payload:{_status:-1,_result:e},_init:kc}};_.memo=function(e,t){return{$$typeof:hc,type:e,compare:t===void 0?null:t}};_.startTransition=function(e){var t=xr.transition;xr.transition={};try{e()}finally{xr.transition=t}};_.unstable_act=na;_.useCallback=function(e,t){return se.current.useCallback(e,t)};_.useContext=function(e){return se.current.useContext(e)};_.useDebugValue=function(){};_.useDeferredValue=function(e){return se.current.useDeferredValue(e)};_.useEffect=function(e,t){return se.current.useEffect(e,t)};_.useId=function(){return se.current.useId()};_.useImperativeHandle=function(e,t,n){return se.current.useImperativeHandle(e,t,n)};_.useInsertionEffect=function(e,t){return se.current.useInsertionEffect(e,t)};_.useLayoutEffect=function(e,t){return se.current.useLayoutEffect(e,t)};_.useMemo=function(e,t){return se.current.useMemo(e,t)};_.useReducer=function(e,t,n){return se.current.useReducer(e,t,n)};_.useRef=function(e){return se.current.useRef(e)};_.useState=function(e){return se.current.useState(e)};_.useSyncExternalStore=function(e,t,n){return se.current.useSyncExternalStore(e,t,n)};_.useTransition=function(){return se.current.useTransition()};_.version="18.3.1";Gs.exports=_;var Fe=Gs.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sc=Fe,Ec=Symbol.for("react.element"),Cc=Symbol.for("react.fragment"),Nc=Object.prototype.hasOwnProperty,Tc=Sc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Lc={key:!0,ref:!0,__self:!0,__source:!0};function ra(e,t,n){var r,l={},o=null,i=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)Nc.call(t,r)&&!Lc.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:Ec,type:e,key:o,ref:i,props:l,_owner:Tc.current}}nl.Fragment=Cc;nl.jsx=ra;nl.jsxs=ra;Js.exports=nl;var g=Js.exports,la={exports:{}},ye={},oa={exports:{}},ia={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(C,P){var M=C.length;C.push(P);e:for(;0<M;){var V=M-1>>>1,K=C[V];if(0<l(K,P))C[V]=P,C[M]=K,M=V;else break e}}function n(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var P=C[0],M=C.pop();if(M!==P){C[0]=M;e:for(var V=0,K=C.length,tr=K>>>1;V<tr;){var yt=2*(V+1)-1,kl=C[yt],wt=yt+1,nr=C[wt];if(0>l(kl,M))wt<K&&0>l(nr,kl)?(C[V]=nr,C[wt]=M,V=wt):(C[V]=kl,C[yt]=M,V=yt);else if(wt<K&&0>l(nr,M))C[V]=nr,C[wt]=M,V=wt;else break e}}return P}function l(C,P){var M=C.sortIndex-P.sortIndex;return M!==0?M:C.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var i=Date,s=i.now();e.unstable_now=function(){return i.now()-s}}var a=[],c=[],h=1,m=null,p=3,w=!1,k=!1,x=!1,O=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(C){for(var P=n(c);P!==null;){if(P.callback===null)r(c);else if(P.startTime<=C)r(c),P.sortIndex=P.expirationTime,t(a,P);else break;P=n(c)}}function v(C){if(x=!1,f(C),!k)if(n(a)!==null)k=!0,yl(E);else{var P=n(c);P!==null&&wl(v,P.startTime-C)}}function E(C,P){k=!1,x&&(x=!1,d(L),L=-1),w=!0;var M=p;try{for(f(P),m=n(a);m!==null&&(!(m.expirationTime>P)||C&&!Te());){var V=m.callback;if(typeof V=="function"){m.callback=null,p=m.priorityLevel;var K=V(m.expirationTime<=P);P=e.unstable_now(),typeof K=="function"?m.callback=K:m===n(a)&&r(a),f(P)}else r(a);m=n(a)}if(m!==null)var tr=!0;else{var yt=n(c);yt!==null&&wl(v,yt.startTime-P),tr=!1}return tr}finally{m=null,p=M,w=!1}}var N=!1,T=null,L=-1,W=5,j=-1;function Te(){return!(e.unstable_now()-j<W)}function cn(){if(T!==null){var C=e.unstable_now();j=C;var P=!0;try{P=T(!0,C)}finally{P?dn():(N=!1,T=null)}}else N=!1}var dn;if(typeof u=="function")dn=function(){u(cn)};else if(typeof MessageChannel<"u"){var Di=new MessageChannel,ic=Di.port2;Di.port1.onmessage=cn,dn=function(){ic.postMessage(null)}}else dn=function(){O(cn,0)};function yl(C){T=C,N||(N=!0,dn())}function wl(C,P){L=O(function(){C(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){k||w||(k=!0,yl(E))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(C){switch(p){case 1:case 2:case 3:var P=3;break;default:P=p}var M=p;p=P;try{return C()}finally{p=M}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,P){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var M=p;p=C;try{return P()}finally{p=M}},e.unstable_scheduleCallback=function(C,P,M){var V=e.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?V+M:V):M=V,C){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=M+K,C={id:h++,callback:P,priorityLevel:C,startTime:M,expirationTime:K,sortIndex:-1},M>V?(C.sortIndex=M,t(c,C),n(a)===null&&C===n(c)&&(x?(d(L),L=-1):x=!0,wl(v,M-V))):(C.sortIndex=K,t(a,C),k||w||(k=!0,yl(E))),C},e.unstable_shouldYield=Te,e.unstable_wrapCallback=function(C){var P=p;return function(){var M=p;p=P;try{return C.apply(this,arguments)}finally{p=M}}}})(ia);oa.exports=ia;var Pc=oa.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mc=Fe,ve=Pc;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var sa=new Set,In={};function zt(e,t){bt(e,t),bt(e+"Capture",t)}function bt(e,t){for(In[e]=t,e=0;e<t.length;e++)sa.add(t[e])}var Ye=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Jl=Object.prototype.hasOwnProperty,_c=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Fi={},$i={};function jc(e){return Jl.call($i,e)?!0:Jl.call(Fi,e)?!1:_c.test(e)?$i[e]=!0:(Fi[e]=!0,!1)}function zc(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ic(e,t,n,r){if(t===null||typeof t>"u"||zc(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ae(e,t,n,r,l,o,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var ee={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ee[e]=new ae(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ee[t]=new ae(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ee[e]=new ae(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ee[e]=new ae(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ee[e]=new ae(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ee[e]=new ae(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ee[e]=new ae(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ee[e]=new ae(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ee[e]=new ae(e,5,!1,e.toLowerCase(),null,!1,!1)});var Vo=/[\-:]([a-z])/g;function Qo(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Vo,Qo);ee[t]=new ae(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Vo,Qo);ee[t]=new ae(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Vo,Qo);ee[t]=new ae(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ee[e]=new ae(e,1,!1,e.toLowerCase(),null,!1,!1)});ee.xlinkHref=new ae("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ee[e]=new ae(e,1,!1,e.toLowerCase(),null,!0,!0)});function Yo(e,t,n,r){var l=ee.hasOwnProperty(t)?ee[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Ic(t,n,l,r)&&(n=null),r||l===null?jc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Xe=Mc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,lr=Symbol.for("react.element"),Rt=Symbol.for("react.portal"),At=Symbol.for("react.fragment"),Jo=Symbol.for("react.strict_mode"),Gl=Symbol.for("react.profiler"),aa=Symbol.for("react.provider"),ua=Symbol.for("react.context"),Go=Symbol.for("react.forward_ref"),Kl=Symbol.for("react.suspense"),Xl=Symbol.for("react.suspense_list"),Ko=Symbol.for("react.memo"),qe=Symbol.for("react.lazy"),ca=Symbol.for("react.offscreen"),Hi=Symbol.iterator;function fn(e){return e===null||typeof e!="object"?null:(e=Hi&&e[Hi]||e["@@iterator"],typeof e=="function"?e:null)}var B=Object.assign,Sl;function kn(e){if(Sl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Sl=t&&t[1]||""}return`
`+Sl+e}var El=!1;function Cl(e,t){if(!e||El)return"";El=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var l=c.stack.split(`
`),o=r.stack.split(`
`),i=l.length-1,s=o.length-1;1<=i&&0<=s&&l[i]!==o[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==o[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==o[s]){var a=`
`+l[i].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=i&&0<=s);break}}}finally{El=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?kn(e):""}function Dc(e){switch(e.tag){case 5:return kn(e.type);case 16:return kn("Lazy");case 13:return kn("Suspense");case 19:return kn("SuspenseList");case 0:case 2:case 15:return e=Cl(e.type,!1),e;case 11:return e=Cl(e.type.render,!1),e;case 1:return e=Cl(e.type,!0),e;default:return""}}function Zl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case At:return"Fragment";case Rt:return"Portal";case Gl:return"Profiler";case Jo:return"StrictMode";case Kl:return"Suspense";case Xl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ua:return(e.displayName||"Context")+".Consumer";case aa:return(e._context.displayName||"Context")+".Provider";case Go:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ko:return t=e.displayName||null,t!==null?t:Zl(e.type)||"Memo";case qe:t=e._payload,e=e._init;try{return Zl(e(t))}catch{}}return null}function Rc(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Zl(t);case 8:return t===Jo?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ft(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function da(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ac(e){var t=da(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(i){r=""+i,o.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function or(e){e._valueTracker||(e._valueTracker=Ac(e))}function fa(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=da(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function zr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ql(e,t){var n=t.checked;return B({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Bi(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ft(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function pa(e,t){t=t.checked,t!=null&&Yo(e,"checked",t,!1)}function bl(e,t){pa(e,t);var n=ft(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?eo(e,t.type,n):t.hasOwnProperty("defaultValue")&&eo(e,t.type,ft(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ui(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function eo(e,t,n){(t!=="number"||zr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var xn=Array.isArray;function Jt(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ft(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function to(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(y(91));return B({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Wi(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(y(92));if(xn(n)){if(1<n.length)throw Error(y(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ft(n)}}function ma(e,t){var n=ft(t.value),r=ft(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Vi(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ha(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function no(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ha(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ir,ga=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ir=ir||document.createElement("div"),ir.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ir.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Dn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Cn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Oc=["Webkit","ms","Moz","O"];Object.keys(Cn).forEach(function(e){Oc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Cn[t]=Cn[e]})});function va(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Cn.hasOwnProperty(e)&&Cn[e]?(""+t).trim():t+"px"}function ya(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=va(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Fc=B({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ro(e,t){if(t){if(Fc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(y(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(y(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(y(61))}if(t.style!=null&&typeof t.style!="object")throw Error(y(62))}}function lo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var oo=null;function Xo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var io=null,Gt=null,Kt=null;function Qi(e){if(e=bn(e)){if(typeof io!="function")throw Error(y(280));var t=e.stateNode;t&&(t=sl(t),io(e.stateNode,e.type,t))}}function wa(e){Gt?Kt?Kt.push(e):Kt=[e]:Gt=e}function ka(){if(Gt){var e=Gt,t=Kt;if(Kt=Gt=null,Qi(e),t)for(e=0;e<t.length;e++)Qi(t[e])}}function xa(e,t){return e(t)}function Sa(){}var Nl=!1;function Ea(e,t,n){if(Nl)return e(t,n);Nl=!0;try{return xa(e,t,n)}finally{Nl=!1,(Gt!==null||Kt!==null)&&(Sa(),ka())}}function Rn(e,t){var n=e.stateNode;if(n===null)return null;var r=sl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(y(231,t,typeof n));return n}var so=!1;if(Ye)try{var pn={};Object.defineProperty(pn,"passive",{get:function(){so=!0}}),window.addEventListener("test",pn,pn),window.removeEventListener("test",pn,pn)}catch{so=!1}function $c(e,t,n,r,l,o,i,s,a){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(h){this.onError(h)}}var Nn=!1,Ir=null,Dr=!1,ao=null,Hc={onError:function(e){Nn=!0,Ir=e}};function Bc(e,t,n,r,l,o,i,s,a){Nn=!1,Ir=null,$c.apply(Hc,arguments)}function Uc(e,t,n,r,l,o,i,s,a){if(Bc.apply(this,arguments),Nn){if(Nn){var c=Ir;Nn=!1,Ir=null}else throw Error(y(198));Dr||(Dr=!0,ao=c)}}function It(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ca(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Yi(e){if(It(e)!==e)throw Error(y(188))}function Wc(e){var t=e.alternate;if(!t){if(t=It(e),t===null)throw Error(y(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===n)return Yi(l),e;if(o===r)return Yi(l),t;o=o.sibling}throw Error(y(188))}if(n.return!==r.return)n=l,r=o;else{for(var i=!1,s=l.child;s;){if(s===n){i=!0,n=l,r=o;break}if(s===r){i=!0,r=l,n=o;break}s=s.sibling}if(!i){for(s=o.child;s;){if(s===n){i=!0,n=o,r=l;break}if(s===r){i=!0,r=o,n=l;break}s=s.sibling}if(!i)throw Error(y(189))}}if(n.alternate!==r)throw Error(y(190))}if(n.tag!==3)throw Error(y(188));return n.stateNode.current===n?e:t}function Na(e){return e=Wc(e),e!==null?Ta(e):null}function Ta(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ta(e);if(t!==null)return t;e=e.sibling}return null}var La=ve.unstable_scheduleCallback,Ji=ve.unstable_cancelCallback,Vc=ve.unstable_shouldYield,Qc=ve.unstable_requestPaint,Q=ve.unstable_now,Yc=ve.unstable_getCurrentPriorityLevel,Zo=ve.unstable_ImmediatePriority,Pa=ve.unstable_UserBlockingPriority,Rr=ve.unstable_NormalPriority,Jc=ve.unstable_LowPriority,Ma=ve.unstable_IdlePriority,rl=null,$e=null;function Gc(e){if($e&&typeof $e.onCommitFiberRoot=="function")try{$e.onCommitFiberRoot(rl,e,void 0,(e.current.flags&128)===128)}catch{}}var ze=Math.clz32?Math.clz32:Zc,Kc=Math.log,Xc=Math.LN2;function Zc(e){return e>>>=0,e===0?32:31-(Kc(e)/Xc|0)|0}var sr=64,ar=4194304;function Sn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ar(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,o=e.pingedLanes,i=n&268435455;if(i!==0){var s=i&~l;s!==0?r=Sn(s):(o&=i,o!==0&&(r=Sn(o)))}else i=n&~l,i!==0?r=Sn(i):o!==0&&(r=Sn(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,o=t&-t,l>=o||l===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ze(t),l=1<<n,r|=e[n],t&=~l;return r}function qc(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bc(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-ze(o),s=1<<i,a=l[i];a===-1?(!(s&n)||s&r)&&(l[i]=qc(s,t)):a<=t&&(e.expiredLanes|=s),o&=~s}}function uo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function _a(){var e=sr;return sr<<=1,!(sr&4194240)&&(sr=64),e}function Tl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Zn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ze(t),e[t]=n}function ed(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-ze(n),o=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~o}}function qo(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ze(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var I=0;function ja(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var za,bo,Ia,Da,Ra,co=!1,ur=[],lt=null,ot=null,it=null,An=new Map,On=new Map,et=[],td="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gi(e,t){switch(e){case"focusin":case"focusout":lt=null;break;case"dragenter":case"dragleave":ot=null;break;case"mouseover":case"mouseout":it=null;break;case"pointerover":case"pointerout":An.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":On.delete(t.pointerId)}}function mn(e,t,n,r,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]},t!==null&&(t=bn(t),t!==null&&bo(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function nd(e,t,n,r,l){switch(t){case"focusin":return lt=mn(lt,e,t,n,r,l),!0;case"dragenter":return ot=mn(ot,e,t,n,r,l),!0;case"mouseover":return it=mn(it,e,t,n,r,l),!0;case"pointerover":var o=l.pointerId;return An.set(o,mn(An.get(o)||null,e,t,n,r,l)),!0;case"gotpointercapture":return o=l.pointerId,On.set(o,mn(On.get(o)||null,e,t,n,r,l)),!0}return!1}function Aa(e){var t=St(e.target);if(t!==null){var n=It(t);if(n!==null){if(t=n.tag,t===13){if(t=Ca(n),t!==null){e.blockedOn=t,Ra(e.priority,function(){Ia(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Sr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=fo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);oo=r,n.target.dispatchEvent(r),oo=null}else return t=bn(n),t!==null&&bo(t),e.blockedOn=n,!1;t.shift()}return!0}function Ki(e,t,n){Sr(e)&&n.delete(t)}function rd(){co=!1,lt!==null&&Sr(lt)&&(lt=null),ot!==null&&Sr(ot)&&(ot=null),it!==null&&Sr(it)&&(it=null),An.forEach(Ki),On.forEach(Ki)}function hn(e,t){e.blockedOn===t&&(e.blockedOn=null,co||(co=!0,ve.unstable_scheduleCallback(ve.unstable_NormalPriority,rd)))}function Fn(e){function t(l){return hn(l,e)}if(0<ur.length){hn(ur[0],e);for(var n=1;n<ur.length;n++){var r=ur[n];r.blockedOn===e&&(r.blockedOn=null)}}for(lt!==null&&hn(lt,e),ot!==null&&hn(ot,e),it!==null&&hn(it,e),An.forEach(t),On.forEach(t),n=0;n<et.length;n++)r=et[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<et.length&&(n=et[0],n.blockedOn===null);)Aa(n),n.blockedOn===null&&et.shift()}var Xt=Xe.ReactCurrentBatchConfig,Or=!0;function ld(e,t,n,r){var l=I,o=Xt.transition;Xt.transition=null;try{I=1,ei(e,t,n,r)}finally{I=l,Xt.transition=o}}function od(e,t,n,r){var l=I,o=Xt.transition;Xt.transition=null;try{I=4,ei(e,t,n,r)}finally{I=l,Xt.transition=o}}function ei(e,t,n,r){if(Or){var l=fo(e,t,n,r);if(l===null)Al(e,t,r,Fr,n),Gi(e,r);else if(nd(l,e,t,n,r))r.stopPropagation();else if(Gi(e,r),t&4&&-1<td.indexOf(e)){for(;l!==null;){var o=bn(l);if(o!==null&&za(o),o=fo(e,t,n,r),o===null&&Al(e,t,r,Fr,n),o===l)break;l=o}l!==null&&r.stopPropagation()}else Al(e,t,r,null,n)}}var Fr=null;function fo(e,t,n,r){if(Fr=null,e=Xo(r),e=St(e),e!==null)if(t=It(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ca(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Fr=e,null}function Oa(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Yc()){case Zo:return 1;case Pa:return 4;case Rr:case Jc:return 16;case Ma:return 536870912;default:return 16}default:return 16}}var nt=null,ti=null,Er=null;function Fa(){if(Er)return Er;var e,t=ti,n=t.length,r,l="value"in nt?nt.value:nt.textContent,o=l.length;for(e=0;e<n&&t[e]===l[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===l[o-r];r++);return Er=l.slice(e,1<r?1-r:void 0)}function Cr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function cr(){return!0}function Xi(){return!1}function we(e){function t(n,r,l,o,i){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?cr:Xi,this.isPropagationStopped=Xi,this}return B(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=cr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=cr)},persist:function(){},isPersistent:cr}),t}var an={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ni=we(an),qn=B({},an,{view:0,detail:0}),id=we(qn),Ll,Pl,gn,ll=B({},qn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ri,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==gn&&(gn&&e.type==="mousemove"?(Ll=e.screenX-gn.screenX,Pl=e.screenY-gn.screenY):Pl=Ll=0,gn=e),Ll)},movementY:function(e){return"movementY"in e?e.movementY:Pl}}),Zi=we(ll),sd=B({},ll,{dataTransfer:0}),ad=we(sd),ud=B({},qn,{relatedTarget:0}),Ml=we(ud),cd=B({},an,{animationName:0,elapsedTime:0,pseudoElement:0}),dd=we(cd),fd=B({},an,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),pd=we(fd),md=B({},an,{data:0}),qi=we(md),hd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=vd[e])?!!t[e]:!1}function ri(){return yd}var wd=B({},qn,{key:function(e){if(e.key){var t=hd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Cr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?gd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ri,charCode:function(e){return e.type==="keypress"?Cr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Cr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),kd=we(wd),xd=B({},ll,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bi=we(xd),Sd=B({},qn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ri}),Ed=we(Sd),Cd=B({},an,{propertyName:0,elapsedTime:0,pseudoElement:0}),Nd=we(Cd),Td=B({},ll,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ld=we(Td),Pd=[9,13,27,32],li=Ye&&"CompositionEvent"in window,Tn=null;Ye&&"documentMode"in document&&(Tn=document.documentMode);var Md=Ye&&"TextEvent"in window&&!Tn,$a=Ye&&(!li||Tn&&8<Tn&&11>=Tn),es=" ",ts=!1;function Ha(e,t){switch(e){case"keyup":return Pd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ba(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ot=!1;function _d(e,t){switch(e){case"compositionend":return Ba(t);case"keypress":return t.which!==32?null:(ts=!0,es);case"textInput":return e=t.data,e===es&&ts?null:e;default:return null}}function jd(e,t){if(Ot)return e==="compositionend"||!li&&Ha(e,t)?(e=Fa(),Er=ti=nt=null,Ot=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return $a&&t.locale!=="ko"?null:t.data;default:return null}}var zd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ns(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!zd[e.type]:t==="textarea"}function Ua(e,t,n,r){wa(r),t=$r(t,"onChange"),0<t.length&&(n=new ni("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ln=null,$n=null;function Id(e){ba(e,0)}function ol(e){var t=Ht(e);if(fa(t))return e}function Dd(e,t){if(e==="change")return t}var Wa=!1;if(Ye){var _l;if(Ye){var jl="oninput"in document;if(!jl){var rs=document.createElement("div");rs.setAttribute("oninput","return;"),jl=typeof rs.oninput=="function"}_l=jl}else _l=!1;Wa=_l&&(!document.documentMode||9<document.documentMode)}function ls(){Ln&&(Ln.detachEvent("onpropertychange",Va),$n=Ln=null)}function Va(e){if(e.propertyName==="value"&&ol($n)){var t=[];Ua(t,$n,e,Xo(e)),Ea(Id,t)}}function Rd(e,t,n){e==="focusin"?(ls(),Ln=t,$n=n,Ln.attachEvent("onpropertychange",Va)):e==="focusout"&&ls()}function Ad(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ol($n)}function Od(e,t){if(e==="click")return ol(t)}function Fd(e,t){if(e==="input"||e==="change")return ol(t)}function $d(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var De=typeof Object.is=="function"?Object.is:$d;function Hn(e,t){if(De(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!Jl.call(t,l)||!De(e[l],t[l]))return!1}return!0}function os(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function is(e,t){var n=os(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=os(n)}}function Qa(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Qa(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ya(){for(var e=window,t=zr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=zr(e.document)}return t}function oi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Hd(e){var t=Ya(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Qa(n.ownerDocument.documentElement,n)){if(r!==null&&oi(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,o=Math.min(r.start,l);r=r.end===void 0?o:Math.min(r.end,l),!e.extend&&o>r&&(l=r,r=o,o=l),l=is(n,o);var i=is(n,r);l&&i&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Bd=Ye&&"documentMode"in document&&11>=document.documentMode,Ft=null,po=null,Pn=null,mo=!1;function ss(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;mo||Ft==null||Ft!==zr(r)||(r=Ft,"selectionStart"in r&&oi(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Pn&&Hn(Pn,r)||(Pn=r,r=$r(po,"onSelect"),0<r.length&&(t=new ni("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Ft)))}function dr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var $t={animationend:dr("Animation","AnimationEnd"),animationiteration:dr("Animation","AnimationIteration"),animationstart:dr("Animation","AnimationStart"),transitionend:dr("Transition","TransitionEnd")},zl={},Ja={};Ye&&(Ja=document.createElement("div").style,"AnimationEvent"in window||(delete $t.animationend.animation,delete $t.animationiteration.animation,delete $t.animationstart.animation),"TransitionEvent"in window||delete $t.transitionend.transition);function il(e){if(zl[e])return zl[e];if(!$t[e])return e;var t=$t[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ja)return zl[e]=t[n];return e}var Ga=il("animationend"),Ka=il("animationiteration"),Xa=il("animationstart"),Za=il("transitionend"),qa=new Map,as="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mt(e,t){qa.set(e,t),zt(t,[e])}for(var Il=0;Il<as.length;Il++){var Dl=as[Il],Ud=Dl.toLowerCase(),Wd=Dl[0].toUpperCase()+Dl.slice(1);mt(Ud,"on"+Wd)}mt(Ga,"onAnimationEnd");mt(Ka,"onAnimationIteration");mt(Xa,"onAnimationStart");mt("dblclick","onDoubleClick");mt("focusin","onFocus");mt("focusout","onBlur");mt(Za,"onTransitionEnd");bt("onMouseEnter",["mouseout","mouseover"]);bt("onMouseLeave",["mouseout","mouseover"]);bt("onPointerEnter",["pointerout","pointerover"]);bt("onPointerLeave",["pointerout","pointerover"]);zt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));zt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));zt("onBeforeInput",["compositionend","keypress","textInput","paste"]);zt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));zt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));zt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var En="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vd=new Set("cancel close invalid load scroll toggle".split(" ").concat(En));function us(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Uc(r,t,void 0,e),e.currentTarget=null}function ba(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var i=r.length-1;0<=i;i--){var s=r[i],a=s.instance,c=s.currentTarget;if(s=s.listener,a!==o&&l.isPropagationStopped())break e;us(l,s,c),o=a}else for(i=0;i<r.length;i++){if(s=r[i],a=s.instance,c=s.currentTarget,s=s.listener,a!==o&&l.isPropagationStopped())break e;us(l,s,c),o=a}}}if(Dr)throw e=ao,Dr=!1,ao=null,e}function R(e,t){var n=t[wo];n===void 0&&(n=t[wo]=new Set);var r=e+"__bubble";n.has(r)||(eu(t,e,2,!1),n.add(r))}function Rl(e,t,n){var r=0;t&&(r|=4),eu(n,e,r,t)}var fr="_reactListening"+Math.random().toString(36).slice(2);function Bn(e){if(!e[fr]){e[fr]=!0,sa.forEach(function(n){n!=="selectionchange"&&(Vd.has(n)||Rl(n,!1,e),Rl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[fr]||(t[fr]=!0,Rl("selectionchange",!1,t))}}function eu(e,t,n,r){switch(Oa(t)){case 1:var l=ld;break;case 4:l=od;break;default:l=ei}n=l.bind(null,t,n,e),l=void 0,!so||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Al(e,t,n,r,l){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var s=r.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(i===4)for(i=r.return;i!==null;){var a=i.tag;if((a===3||a===4)&&(a=i.stateNode.containerInfo,a===l||a.nodeType===8&&a.parentNode===l))return;i=i.return}for(;s!==null;){if(i=St(s),i===null)return;if(a=i.tag,a===5||a===6){r=o=i;continue e}s=s.parentNode}}r=r.return}Ea(function(){var c=o,h=Xo(n),m=[];e:{var p=qa.get(e);if(p!==void 0){var w=ni,k=e;switch(e){case"keypress":if(Cr(n)===0)break e;case"keydown":case"keyup":w=kd;break;case"focusin":k="focus",w=Ml;break;case"focusout":k="blur",w=Ml;break;case"beforeblur":case"afterblur":w=Ml;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Zi;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=ad;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Ed;break;case Ga:case Ka:case Xa:w=dd;break;case Za:w=Nd;break;case"scroll":w=id;break;case"wheel":w=Ld;break;case"copy":case"cut":case"paste":w=pd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=bi}var x=(t&4)!==0,O=!x&&e==="scroll",d=x?p!==null?p+"Capture":null:p;x=[];for(var u=c,f;u!==null;){f=u;var v=f.stateNode;if(f.tag===5&&v!==null&&(f=v,d!==null&&(v=Rn(u,d),v!=null&&x.push(Un(u,v,f)))),O)break;u=u.return}0<x.length&&(p=new w(p,k,null,n,h),m.push({event:p,listeners:x}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",p&&n!==oo&&(k=n.relatedTarget||n.fromElement)&&(St(k)||k[Je]))break e;if((w||p)&&(p=h.window===h?h:(p=h.ownerDocument)?p.defaultView||p.parentWindow:window,w?(k=n.relatedTarget||n.toElement,w=c,k=k?St(k):null,k!==null&&(O=It(k),k!==O||k.tag!==5&&k.tag!==6)&&(k=null)):(w=null,k=c),w!==k)){if(x=Zi,v="onMouseLeave",d="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(x=bi,v="onPointerLeave",d="onPointerEnter",u="pointer"),O=w==null?p:Ht(w),f=k==null?p:Ht(k),p=new x(v,u+"leave",w,n,h),p.target=O,p.relatedTarget=f,v=null,St(h)===c&&(x=new x(d,u+"enter",k,n,h),x.target=f,x.relatedTarget=O,v=x),O=v,w&&k)t:{for(x=w,d=k,u=0,f=x;f;f=Dt(f))u++;for(f=0,v=d;v;v=Dt(v))f++;for(;0<u-f;)x=Dt(x),u--;for(;0<f-u;)d=Dt(d),f--;for(;u--;){if(x===d||d!==null&&x===d.alternate)break t;x=Dt(x),d=Dt(d)}x=null}else x=null;w!==null&&cs(m,p,w,x,!1),k!==null&&O!==null&&cs(m,O,k,x,!0)}}e:{if(p=c?Ht(c):window,w=p.nodeName&&p.nodeName.toLowerCase(),w==="select"||w==="input"&&p.type==="file")var E=Dd;else if(ns(p))if(Wa)E=Fd;else{E=Ad;var N=Rd}else(w=p.nodeName)&&w.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(E=Od);if(E&&(E=E(e,c))){Ua(m,E,n,h);break e}N&&N(e,p,c),e==="focusout"&&(N=p._wrapperState)&&N.controlled&&p.type==="number"&&eo(p,"number",p.value)}switch(N=c?Ht(c):window,e){case"focusin":(ns(N)||N.contentEditable==="true")&&(Ft=N,po=c,Pn=null);break;case"focusout":Pn=po=Ft=null;break;case"mousedown":mo=!0;break;case"contextmenu":case"mouseup":case"dragend":mo=!1,ss(m,n,h);break;case"selectionchange":if(Bd)break;case"keydown":case"keyup":ss(m,n,h)}var T;if(li)e:{switch(e){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else Ot?Ha(e,n)&&(L="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&($a&&n.locale!=="ko"&&(Ot||L!=="onCompositionStart"?L==="onCompositionEnd"&&Ot&&(T=Fa()):(nt=h,ti="value"in nt?nt.value:nt.textContent,Ot=!0)),N=$r(c,L),0<N.length&&(L=new qi(L,e,null,n,h),m.push({event:L,listeners:N}),T?L.data=T:(T=Ba(n),T!==null&&(L.data=T)))),(T=Md?_d(e,n):jd(e,n))&&(c=$r(c,"onBeforeInput"),0<c.length&&(h=new qi("onBeforeInput","beforeinput",null,n,h),m.push({event:h,listeners:c}),h.data=T))}ba(m,t)})}function Un(e,t,n){return{instance:e,listener:t,currentTarget:n}}function $r(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=Rn(e,n),o!=null&&r.unshift(Un(e,o,l)),o=Rn(e,t),o!=null&&r.push(Un(e,o,l))),e=e.return}return r}function Dt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function cs(e,t,n,r,l){for(var o=t._reactName,i=[];n!==null&&n!==r;){var s=n,a=s.alternate,c=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&c!==null&&(s=c,l?(a=Rn(n,o),a!=null&&i.unshift(Un(n,a,s))):l||(a=Rn(n,o),a!=null&&i.push(Un(n,a,s)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var Qd=/\r\n?/g,Yd=/\u0000|\uFFFD/g;function ds(e){return(typeof e=="string"?e:""+e).replace(Qd,`
`).replace(Yd,"")}function pr(e,t,n){if(t=ds(t),ds(e)!==t&&n)throw Error(y(425))}function Hr(){}var ho=null,go=null;function vo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var yo=typeof setTimeout=="function"?setTimeout:void 0,Jd=typeof clearTimeout=="function"?clearTimeout:void 0,fs=typeof Promise=="function"?Promise:void 0,Gd=typeof queueMicrotask=="function"?queueMicrotask:typeof fs<"u"?function(e){return fs.resolve(null).then(e).catch(Kd)}:yo;function Kd(e){setTimeout(function(){throw e})}function Ol(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Fn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Fn(t)}function st(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ps(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var un=Math.random().toString(36).slice(2),Oe="__reactFiber$"+un,Wn="__reactProps$"+un,Je="__reactContainer$"+un,wo="__reactEvents$"+un,Xd="__reactListeners$"+un,Zd="__reactHandles$"+un;function St(e){var t=e[Oe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Je]||n[Oe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ps(e);e!==null;){if(n=e[Oe])return n;e=ps(e)}return t}e=n,n=e.parentNode}return null}function bn(e){return e=e[Oe]||e[Je],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ht(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(y(33))}function sl(e){return e[Wn]||null}var ko=[],Bt=-1;function ht(e){return{current:e}}function A(e){0>Bt||(e.current=ko[Bt],ko[Bt]=null,Bt--)}function D(e,t){Bt++,ko[Bt]=e.current,e.current=t}var pt={},le=ht(pt),de=ht(!1),Lt=pt;function en(e,t){var n=e.type.contextTypes;if(!n)return pt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in n)l[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function fe(e){return e=e.childContextTypes,e!=null}function Br(){A(de),A(le)}function ms(e,t,n){if(le.current!==pt)throw Error(y(168));D(le,t),D(de,n)}function tu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(y(108,Rc(e)||"Unknown",l));return B({},n,r)}function Ur(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||pt,Lt=le.current,D(le,e),D(de,de.current),!0}function hs(e,t,n){var r=e.stateNode;if(!r)throw Error(y(169));n?(e=tu(e,t,Lt),r.__reactInternalMemoizedMergedChildContext=e,A(de),A(le),D(le,e)):A(de),D(de,n)}var Ue=null,al=!1,Fl=!1;function nu(e){Ue===null?Ue=[e]:Ue.push(e)}function qd(e){al=!0,nu(e)}function gt(){if(!Fl&&Ue!==null){Fl=!0;var e=0,t=I;try{var n=Ue;for(I=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ue=null,al=!1}catch(l){throw Ue!==null&&(Ue=Ue.slice(e+1)),La(Zo,gt),l}finally{I=t,Fl=!1}}return null}var Ut=[],Wt=0,Wr=null,Vr=0,ke=[],xe=0,Pt=null,We=1,Ve="";function kt(e,t){Ut[Wt++]=Vr,Ut[Wt++]=Wr,Wr=e,Vr=t}function ru(e,t,n){ke[xe++]=We,ke[xe++]=Ve,ke[xe++]=Pt,Pt=e;var r=We;e=Ve;var l=32-ze(r)-1;r&=~(1<<l),n+=1;var o=32-ze(t)+l;if(30<o){var i=l-l%5;o=(r&(1<<i)-1).toString(32),r>>=i,l-=i,We=1<<32-ze(t)+l|n<<l|r,Ve=o+e}else We=1<<o|n<<l|r,Ve=e}function ii(e){e.return!==null&&(kt(e,1),ru(e,1,0))}function si(e){for(;e===Wr;)Wr=Ut[--Wt],Ut[Wt]=null,Vr=Ut[--Wt],Ut[Wt]=null;for(;e===Pt;)Pt=ke[--xe],ke[xe]=null,Ve=ke[--xe],ke[xe]=null,We=ke[--xe],ke[xe]=null}var ge=null,he=null,F=!1,je=null;function lu(e,t){var n=Se(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function gs(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ge=e,he=st(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ge=e,he=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Pt!==null?{id:We,overflow:Ve}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Se(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ge=e,he=null,!0):!1;default:return!1}}function xo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function So(e){if(F){var t=he;if(t){var n=t;if(!gs(e,t)){if(xo(e))throw Error(y(418));t=st(n.nextSibling);var r=ge;t&&gs(e,t)?lu(r,n):(e.flags=e.flags&-4097|2,F=!1,ge=e)}}else{if(xo(e))throw Error(y(418));e.flags=e.flags&-4097|2,F=!1,ge=e}}}function vs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ge=e}function mr(e){if(e!==ge)return!1;if(!F)return vs(e),F=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!vo(e.type,e.memoizedProps)),t&&(t=he)){if(xo(e))throw ou(),Error(y(418));for(;t;)lu(e,t),t=st(t.nextSibling)}if(vs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(y(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){he=st(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}he=null}}else he=ge?st(e.stateNode.nextSibling):null;return!0}function ou(){for(var e=he;e;)e=st(e.nextSibling)}function tn(){he=ge=null,F=!1}function ai(e){je===null?je=[e]:je.push(e)}var bd=Xe.ReactCurrentBatchConfig;function vn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(y(309));var r=n.stateNode}if(!r)throw Error(y(147,e));var l=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(i){var s=l.refs;i===null?delete s[o]:s[o]=i},t._stringRef=o,t)}if(typeof e!="string")throw Error(y(284));if(!n._owner)throw Error(y(290,e))}return e}function hr(e,t){throw e=Object.prototype.toString.call(t),Error(y(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ys(e){var t=e._init;return t(e._payload)}function iu(e){function t(d,u){if(e){var f=d.deletions;f===null?(d.deletions=[u],d.flags|=16):f.push(u)}}function n(d,u){if(!e)return null;for(;u!==null;)t(d,u),u=u.sibling;return null}function r(d,u){for(d=new Map;u!==null;)u.key!==null?d.set(u.key,u):d.set(u.index,u),u=u.sibling;return d}function l(d,u){return d=dt(d,u),d.index=0,d.sibling=null,d}function o(d,u,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<u?(d.flags|=2,u):f):(d.flags|=2,u)):(d.flags|=1048576,u)}function i(d){return e&&d.alternate===null&&(d.flags|=2),d}function s(d,u,f,v){return u===null||u.tag!==6?(u=Ql(f,d.mode,v),u.return=d,u):(u=l(u,f),u.return=d,u)}function a(d,u,f,v){var E=f.type;return E===At?h(d,u,f.props.children,v,f.key):u!==null&&(u.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===qe&&ys(E)===u.type)?(v=l(u,f.props),v.ref=vn(d,u,f),v.return=d,v):(v=jr(f.type,f.key,f.props,null,d.mode,v),v.ref=vn(d,u,f),v.return=d,v)}function c(d,u,f,v){return u===null||u.tag!==4||u.stateNode.containerInfo!==f.containerInfo||u.stateNode.implementation!==f.implementation?(u=Yl(f,d.mode,v),u.return=d,u):(u=l(u,f.children||[]),u.return=d,u)}function h(d,u,f,v,E){return u===null||u.tag!==7?(u=Tt(f,d.mode,v,E),u.return=d,u):(u=l(u,f),u.return=d,u)}function m(d,u,f){if(typeof u=="string"&&u!==""||typeof u=="number")return u=Ql(""+u,d.mode,f),u.return=d,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case lr:return f=jr(u.type,u.key,u.props,null,d.mode,f),f.ref=vn(d,null,u),f.return=d,f;case Rt:return u=Yl(u,d.mode,f),u.return=d,u;case qe:var v=u._init;return m(d,v(u._payload),f)}if(xn(u)||fn(u))return u=Tt(u,d.mode,f,null),u.return=d,u;hr(d,u)}return null}function p(d,u,f,v){var E=u!==null?u.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return E!==null?null:s(d,u,""+f,v);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case lr:return f.key===E?a(d,u,f,v):null;case Rt:return f.key===E?c(d,u,f,v):null;case qe:return E=f._init,p(d,u,E(f._payload),v)}if(xn(f)||fn(f))return E!==null?null:h(d,u,f,v,null);hr(d,f)}return null}function w(d,u,f,v,E){if(typeof v=="string"&&v!==""||typeof v=="number")return d=d.get(f)||null,s(u,d,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case lr:return d=d.get(v.key===null?f:v.key)||null,a(u,d,v,E);case Rt:return d=d.get(v.key===null?f:v.key)||null,c(u,d,v,E);case qe:var N=v._init;return w(d,u,f,N(v._payload),E)}if(xn(v)||fn(v))return d=d.get(f)||null,h(u,d,v,E,null);hr(u,v)}return null}function k(d,u,f,v){for(var E=null,N=null,T=u,L=u=0,W=null;T!==null&&L<f.length;L++){T.index>L?(W=T,T=null):W=T.sibling;var j=p(d,T,f[L],v);if(j===null){T===null&&(T=W);break}e&&T&&j.alternate===null&&t(d,T),u=o(j,u,L),N===null?E=j:N.sibling=j,N=j,T=W}if(L===f.length)return n(d,T),F&&kt(d,L),E;if(T===null){for(;L<f.length;L++)T=m(d,f[L],v),T!==null&&(u=o(T,u,L),N===null?E=T:N.sibling=T,N=T);return F&&kt(d,L),E}for(T=r(d,T);L<f.length;L++)W=w(T,d,L,f[L],v),W!==null&&(e&&W.alternate!==null&&T.delete(W.key===null?L:W.key),u=o(W,u,L),N===null?E=W:N.sibling=W,N=W);return e&&T.forEach(function(Te){return t(d,Te)}),F&&kt(d,L),E}function x(d,u,f,v){var E=fn(f);if(typeof E!="function")throw Error(y(150));if(f=E.call(f),f==null)throw Error(y(151));for(var N=E=null,T=u,L=u=0,W=null,j=f.next();T!==null&&!j.done;L++,j=f.next()){T.index>L?(W=T,T=null):W=T.sibling;var Te=p(d,T,j.value,v);if(Te===null){T===null&&(T=W);break}e&&T&&Te.alternate===null&&t(d,T),u=o(Te,u,L),N===null?E=Te:N.sibling=Te,N=Te,T=W}if(j.done)return n(d,T),F&&kt(d,L),E;if(T===null){for(;!j.done;L++,j=f.next())j=m(d,j.value,v),j!==null&&(u=o(j,u,L),N===null?E=j:N.sibling=j,N=j);return F&&kt(d,L),E}for(T=r(d,T);!j.done;L++,j=f.next())j=w(T,d,L,j.value,v),j!==null&&(e&&j.alternate!==null&&T.delete(j.key===null?L:j.key),u=o(j,u,L),N===null?E=j:N.sibling=j,N=j);return e&&T.forEach(function(cn){return t(d,cn)}),F&&kt(d,L),E}function O(d,u,f,v){if(typeof f=="object"&&f!==null&&f.type===At&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case lr:e:{for(var E=f.key,N=u;N!==null;){if(N.key===E){if(E=f.type,E===At){if(N.tag===7){n(d,N.sibling),u=l(N,f.props.children),u.return=d,d=u;break e}}else if(N.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===qe&&ys(E)===N.type){n(d,N.sibling),u=l(N,f.props),u.ref=vn(d,N,f),u.return=d,d=u;break e}n(d,N);break}else t(d,N);N=N.sibling}f.type===At?(u=Tt(f.props.children,d.mode,v,f.key),u.return=d,d=u):(v=jr(f.type,f.key,f.props,null,d.mode,v),v.ref=vn(d,u,f),v.return=d,d=v)}return i(d);case Rt:e:{for(N=f.key;u!==null;){if(u.key===N)if(u.tag===4&&u.stateNode.containerInfo===f.containerInfo&&u.stateNode.implementation===f.implementation){n(d,u.sibling),u=l(u,f.children||[]),u.return=d,d=u;break e}else{n(d,u);break}else t(d,u);u=u.sibling}u=Yl(f,d.mode,v),u.return=d,d=u}return i(d);case qe:return N=f._init,O(d,u,N(f._payload),v)}if(xn(f))return k(d,u,f,v);if(fn(f))return x(d,u,f,v);hr(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,u!==null&&u.tag===6?(n(d,u.sibling),u=l(u,f),u.return=d,d=u):(n(d,u),u=Ql(f,d.mode,v),u.return=d,d=u),i(d)):n(d,u)}return O}var nn=iu(!0),su=iu(!1),Qr=ht(null),Yr=null,Vt=null,ui=null;function ci(){ui=Vt=Yr=null}function di(e){var t=Qr.current;A(Qr),e._currentValue=t}function Eo(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Zt(e,t){Yr=e,ui=Vt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ce=!0),e.firstContext=null)}function Ce(e){var t=e._currentValue;if(ui!==e)if(e={context:e,memoizedValue:t,next:null},Vt===null){if(Yr===null)throw Error(y(308));Vt=e,Yr.dependencies={lanes:0,firstContext:e}}else Vt=Vt.next=e;return t}var Et=null;function fi(e){Et===null?Et=[e]:Et.push(e)}function au(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,fi(t)):(n.next=l.next,l.next=n),t.interleaved=n,Ge(e,r)}function Ge(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var be=!1;function pi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function uu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Qe(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function at(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,z&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Ge(e,n)}return l=r.interleaved,l===null?(t.next=t,fi(r)):(t.next=l.next,l.next=t),r.interleaved=t,Ge(e,n)}function Nr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,qo(e,n)}}function ws(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?l=o=i:o=o.next=i,n=n.next}while(n!==null);o===null?l=o=t:o=o.next=t}else l=o=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Jr(e,t,n,r){var l=e.updateQueue;be=!1;var o=l.firstBaseUpdate,i=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var a=s,c=a.next;a.next=null,i===null?o=c:i.next=c,i=a;var h=e.alternate;h!==null&&(h=h.updateQueue,s=h.lastBaseUpdate,s!==i&&(s===null?h.firstBaseUpdate=c:s.next=c,h.lastBaseUpdate=a))}if(o!==null){var m=l.baseState;i=0,h=c=a=null,s=o;do{var p=s.lane,w=s.eventTime;if((r&p)===p){h!==null&&(h=h.next={eventTime:w,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var k=e,x=s;switch(p=t,w=n,x.tag){case 1:if(k=x.payload,typeof k=="function"){m=k.call(w,m,p);break e}m=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=x.payload,p=typeof k=="function"?k.call(w,m,p):k,p==null)break e;m=B({},m,p);break e;case 2:be=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,p=l.effects,p===null?l.effects=[s]:p.push(s))}else w={eventTime:w,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},h===null?(c=h=w,a=m):h=h.next=w,i|=p;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;p=s,s=p.next,p.next=null,l.lastBaseUpdate=p,l.shared.pending=null}}while(!0);if(h===null&&(a=m),l.baseState=a,l.firstBaseUpdate=c,l.lastBaseUpdate=h,t=l.shared.interleaved,t!==null){l=t;do i|=l.lane,l=l.next;while(l!==t)}else o===null&&(l.shared.lanes=0);_t|=i,e.lanes=i,e.memoizedState=m}}function ks(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(y(191,l));l.call(r)}}}var er={},He=ht(er),Vn=ht(er),Qn=ht(er);function Ct(e){if(e===er)throw Error(y(174));return e}function mi(e,t){switch(D(Qn,t),D(Vn,e),D(He,er),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:no(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=no(t,e)}A(He),D(He,t)}function rn(){A(He),A(Vn),A(Qn)}function cu(e){Ct(Qn.current);var t=Ct(He.current),n=no(t,e.type);t!==n&&(D(Vn,e),D(He,n))}function hi(e){Vn.current===e&&(A(He),A(Vn))}var $=ht(0);function Gr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var $l=[];function gi(){for(var e=0;e<$l.length;e++)$l[e]._workInProgressVersionPrimary=null;$l.length=0}var Tr=Xe.ReactCurrentDispatcher,Hl=Xe.ReactCurrentBatchConfig,Mt=0,H=null,J=null,X=null,Kr=!1,Mn=!1,Yn=0,ef=0;function te(){throw Error(y(321))}function vi(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!De(e[n],t[n]))return!1;return!0}function yi(e,t,n,r,l,o){if(Mt=o,H=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Tr.current=e===null||e.memoizedState===null?lf:of,e=n(r,l),Mn){o=0;do{if(Mn=!1,Yn=0,25<=o)throw Error(y(301));o+=1,X=J=null,t.updateQueue=null,Tr.current=sf,e=n(r,l)}while(Mn)}if(Tr.current=Xr,t=J!==null&&J.next!==null,Mt=0,X=J=H=null,Kr=!1,t)throw Error(y(300));return e}function wi(){var e=Yn!==0;return Yn=0,e}function Ae(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return X===null?H.memoizedState=X=e:X=X.next=e,X}function Ne(){if(J===null){var e=H.alternate;e=e!==null?e.memoizedState:null}else e=J.next;var t=X===null?H.memoizedState:X.next;if(t!==null)X=t,J=e;else{if(e===null)throw Error(y(310));J=e,e={memoizedState:J.memoizedState,baseState:J.baseState,baseQueue:J.baseQueue,queue:J.queue,next:null},X===null?H.memoizedState=X=e:X=X.next=e}return X}function Jn(e,t){return typeof t=="function"?t(e):t}function Bl(e){var t=Ne(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=J,l=r.baseQueue,o=n.pending;if(o!==null){if(l!==null){var i=l.next;l.next=o.next,o.next=i}r.baseQueue=l=o,n.pending=null}if(l!==null){o=l.next,r=r.baseState;var s=i=null,a=null,c=o;do{var h=c.lane;if((Mt&h)===h)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var m={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(s=a=m,i=r):a=a.next=m,H.lanes|=h,_t|=h}c=c.next}while(c!==null&&c!==o);a===null?i=r:a.next=s,De(r,t.memoizedState)||(ce=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do o=l.lane,H.lanes|=o,_t|=o,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ul(e){var t=Ne(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,o=t.memoizedState;if(l!==null){n.pending=null;var i=l=l.next;do o=e(o,i.action),i=i.next;while(i!==l);De(o,t.memoizedState)||(ce=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function du(){}function fu(e,t){var n=H,r=Ne(),l=t(),o=!De(r.memoizedState,l);if(o&&(r.memoizedState=l,ce=!0),r=r.queue,ki(hu.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||X!==null&&X.memoizedState.tag&1){if(n.flags|=2048,Gn(9,mu.bind(null,n,r,l,t),void 0,null),Z===null)throw Error(y(349));Mt&30||pu(n,t,l)}return l}function pu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function mu(e,t,n,r){t.value=n,t.getSnapshot=r,gu(t)&&vu(e)}function hu(e,t,n){return n(function(){gu(t)&&vu(e)})}function gu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!De(e,n)}catch{return!0}}function vu(e){var t=Ge(e,1);t!==null&&Ie(t,e,1,-1)}function xs(e){var t=Ae();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Jn,lastRenderedState:e},t.queue=e,e=e.dispatch=rf.bind(null,H,e),[t.memoizedState,e]}function Gn(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function yu(){return Ne().memoizedState}function Lr(e,t,n,r){var l=Ae();H.flags|=e,l.memoizedState=Gn(1|t,n,void 0,r===void 0?null:r)}function ul(e,t,n,r){var l=Ne();r=r===void 0?null:r;var o=void 0;if(J!==null){var i=J.memoizedState;if(o=i.destroy,r!==null&&vi(r,i.deps)){l.memoizedState=Gn(t,n,o,r);return}}H.flags|=e,l.memoizedState=Gn(1|t,n,o,r)}function Ss(e,t){return Lr(8390656,8,e,t)}function ki(e,t){return ul(2048,8,e,t)}function wu(e,t){return ul(4,2,e,t)}function ku(e,t){return ul(4,4,e,t)}function xu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Su(e,t,n){return n=n!=null?n.concat([e]):null,ul(4,4,xu.bind(null,t,e),n)}function xi(){}function Eu(e,t){var n=Ne();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&vi(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Cu(e,t){var n=Ne();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&vi(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Nu(e,t,n){return Mt&21?(De(n,t)||(n=_a(),H.lanes|=n,_t|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ce=!0),e.memoizedState=n)}function tf(e,t){var n=I;I=n!==0&&4>n?n:4,e(!0);var r=Hl.transition;Hl.transition={};try{e(!1),t()}finally{I=n,Hl.transition=r}}function Tu(){return Ne().memoizedState}function nf(e,t,n){var r=ct(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Lu(e))Pu(t,n);else if(n=au(e,t,n,r),n!==null){var l=ie();Ie(n,e,r,l),Mu(n,t,r)}}function rf(e,t,n){var r=ct(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Lu(e))Pu(t,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var i=t.lastRenderedState,s=o(i,n);if(l.hasEagerState=!0,l.eagerState=s,De(s,i)){var a=t.interleaved;a===null?(l.next=l,fi(t)):(l.next=a.next,a.next=l),t.interleaved=l;return}}catch{}finally{}n=au(e,t,l,r),n!==null&&(l=ie(),Ie(n,e,r,l),Mu(n,t,r))}}function Lu(e){var t=e.alternate;return e===H||t!==null&&t===H}function Pu(e,t){Mn=Kr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Mu(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,qo(e,n)}}var Xr={readContext:Ce,useCallback:te,useContext:te,useEffect:te,useImperativeHandle:te,useInsertionEffect:te,useLayoutEffect:te,useMemo:te,useReducer:te,useRef:te,useState:te,useDebugValue:te,useDeferredValue:te,useTransition:te,useMutableSource:te,useSyncExternalStore:te,useId:te,unstable_isNewReconciler:!1},lf={readContext:Ce,useCallback:function(e,t){return Ae().memoizedState=[e,t===void 0?null:t],e},useContext:Ce,useEffect:Ss,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Lr(4194308,4,xu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Lr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Lr(4,2,e,t)},useMemo:function(e,t){var n=Ae();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ae();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=nf.bind(null,H,e),[r.memoizedState,e]},useRef:function(e){var t=Ae();return e={current:e},t.memoizedState=e},useState:xs,useDebugValue:xi,useDeferredValue:function(e){return Ae().memoizedState=e},useTransition:function(){var e=xs(!1),t=e[0];return e=tf.bind(null,e[1]),Ae().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=H,l=Ae();if(F){if(n===void 0)throw Error(y(407));n=n()}else{if(n=t(),Z===null)throw Error(y(349));Mt&30||pu(r,t,n)}l.memoizedState=n;var o={value:n,getSnapshot:t};return l.queue=o,Ss(hu.bind(null,r,o,e),[e]),r.flags|=2048,Gn(9,mu.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Ae(),t=Z.identifierPrefix;if(F){var n=Ve,r=We;n=(r&~(1<<32-ze(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Yn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=ef++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},of={readContext:Ce,useCallback:Eu,useContext:Ce,useEffect:ki,useImperativeHandle:Su,useInsertionEffect:wu,useLayoutEffect:ku,useMemo:Cu,useReducer:Bl,useRef:yu,useState:function(){return Bl(Jn)},useDebugValue:xi,useDeferredValue:function(e){var t=Ne();return Nu(t,J.memoizedState,e)},useTransition:function(){var e=Bl(Jn)[0],t=Ne().memoizedState;return[e,t]},useMutableSource:du,useSyncExternalStore:fu,useId:Tu,unstable_isNewReconciler:!1},sf={readContext:Ce,useCallback:Eu,useContext:Ce,useEffect:ki,useImperativeHandle:Su,useInsertionEffect:wu,useLayoutEffect:ku,useMemo:Cu,useReducer:Ul,useRef:yu,useState:function(){return Ul(Jn)},useDebugValue:xi,useDeferredValue:function(e){var t=Ne();return J===null?t.memoizedState=e:Nu(t,J.memoizedState,e)},useTransition:function(){var e=Ul(Jn)[0],t=Ne().memoizedState;return[e,t]},useMutableSource:du,useSyncExternalStore:fu,useId:Tu,unstable_isNewReconciler:!1};function Me(e,t){if(e&&e.defaultProps){t=B({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Co(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:B({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var cl={isMounted:function(e){return(e=e._reactInternals)?It(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ie(),l=ct(e),o=Qe(r,l);o.payload=t,n!=null&&(o.callback=n),t=at(e,o,l),t!==null&&(Ie(t,e,l,r),Nr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ie(),l=ct(e),o=Qe(r,l);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=at(e,o,l),t!==null&&(Ie(t,e,l,r),Nr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ie(),r=ct(e),l=Qe(n,r);l.tag=2,t!=null&&(l.callback=t),t=at(e,l,r),t!==null&&(Ie(t,e,r,n),Nr(t,e,r))}};function Es(e,t,n,r,l,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,i):t.prototype&&t.prototype.isPureReactComponent?!Hn(n,r)||!Hn(l,o):!0}function _u(e,t,n){var r=!1,l=pt,o=t.contextType;return typeof o=="object"&&o!==null?o=Ce(o):(l=fe(t)?Lt:le.current,r=t.contextTypes,o=(r=r!=null)?en(e,l):pt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=cl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),t}function Cs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&cl.enqueueReplaceState(t,t.state,null)}function No(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},pi(e);var o=t.contextType;typeof o=="object"&&o!==null?l.context=Ce(o):(o=fe(t)?Lt:le.current,l.context=en(e,o)),l.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Co(e,t,o,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&cl.enqueueReplaceState(l,l.state,null),Jr(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function ln(e,t){try{var n="",r=t;do n+=Dc(r),r=r.return;while(r);var l=n}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:l,digest:null}}function Wl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function To(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var af=typeof WeakMap=="function"?WeakMap:Map;function ju(e,t,n){n=Qe(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){qr||(qr=!0,Ao=r),To(e,t)},n}function zu(e,t,n){n=Qe(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){To(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){To(e,t),typeof r!="function"&&(ut===null?ut=new Set([this]):ut.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function Ns(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new af;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Sf.bind(null,e,t,n),t.then(e,e))}function Ts(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ls(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Qe(-1,1),t.tag=2,at(n,t,1))),n.lanes|=1),e)}var uf=Xe.ReactCurrentOwner,ce=!1;function oe(e,t,n,r){t.child=e===null?su(t,null,n,r):nn(t,e.child,n,r)}function Ps(e,t,n,r,l){n=n.render;var o=t.ref;return Zt(t,l),r=yi(e,t,n,r,o,l),n=wi(),e!==null&&!ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ke(e,t,l)):(F&&n&&ii(t),t.flags|=1,oe(e,t,r,l),t.child)}function Ms(e,t,n,r,l){if(e===null){var o=n.type;return typeof o=="function"&&!Mi(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Iu(e,t,o,r,l)):(e=jr(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&l)){var i=o.memoizedProps;if(n=n.compare,n=n!==null?n:Hn,n(i,r)&&e.ref===t.ref)return Ke(e,t,l)}return t.flags|=1,e=dt(o,r),e.ref=t.ref,e.return=t,t.child=e}function Iu(e,t,n,r,l){if(e!==null){var o=e.memoizedProps;if(Hn(o,r)&&e.ref===t.ref)if(ce=!1,t.pendingProps=r=o,(e.lanes&l)!==0)e.flags&131072&&(ce=!0);else return t.lanes=e.lanes,Ke(e,t,l)}return Lo(e,t,n,r,l)}function Du(e,t,n){var r=t.pendingProps,l=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},D(Yt,me),me|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,D(Yt,me),me|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,D(Yt,me),me|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,D(Yt,me),me|=r;return oe(e,t,l,n),t.child}function Ru(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Lo(e,t,n,r,l){var o=fe(n)?Lt:le.current;return o=en(t,o),Zt(t,l),n=yi(e,t,n,r,o,l),r=wi(),e!==null&&!ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ke(e,t,l)):(F&&r&&ii(t),t.flags|=1,oe(e,t,n,l),t.child)}function _s(e,t,n,r,l){if(fe(n)){var o=!0;Ur(t)}else o=!1;if(Zt(t,l),t.stateNode===null)Pr(e,t),_u(t,n,r),No(t,n,r,l),r=!0;else if(e===null){var i=t.stateNode,s=t.memoizedProps;i.props=s;var a=i.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ce(c):(c=fe(n)?Lt:le.current,c=en(t,c));var h=n.getDerivedStateFromProps,m=typeof h=="function"||typeof i.getSnapshotBeforeUpdate=="function";m||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==r||a!==c)&&Cs(t,i,r,c),be=!1;var p=t.memoizedState;i.state=p,Jr(t,r,i,l),a=t.memoizedState,s!==r||p!==a||de.current||be?(typeof h=="function"&&(Co(t,n,h,r),a=t.memoizedState),(s=be||Es(t,n,s,r,p,a,c))?(m||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),i.props=r,i.state=a,i.context=c,r=s):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,uu(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:Me(t.type,s),i.props=c,m=t.pendingProps,p=i.context,a=n.contextType,typeof a=="object"&&a!==null?a=Ce(a):(a=fe(n)?Lt:le.current,a=en(t,a));var w=n.getDerivedStateFromProps;(h=typeof w=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==m||p!==a)&&Cs(t,i,r,a),be=!1,p=t.memoizedState,i.state=p,Jr(t,r,i,l);var k=t.memoizedState;s!==m||p!==k||de.current||be?(typeof w=="function"&&(Co(t,n,w,r),k=t.memoizedState),(c=be||Es(t,n,c,r,p,k,a)||!1)?(h||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,k,a),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,k,a)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=k),i.props=r,i.state=k,i.context=a,r=c):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Po(e,t,n,r,o,l)}function Po(e,t,n,r,l,o){Ru(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return l&&hs(t,n,!1),Ke(e,t,o);r=t.stateNode,uf.current=t;var s=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=nn(t,e.child,null,o),t.child=nn(t,null,s,o)):oe(e,t,s,o),t.memoizedState=r.state,l&&hs(t,n,!0),t.child}function Au(e){var t=e.stateNode;t.pendingContext?ms(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ms(e,t.context,!1),mi(e,t.containerInfo)}function js(e,t,n,r,l){return tn(),ai(l),t.flags|=256,oe(e,t,n,r),t.child}var Mo={dehydrated:null,treeContext:null,retryLane:0};function _o(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ou(e,t,n){var r=t.pendingProps,l=$.current,o=!1,i=(t.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(l&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),D($,l&1),e===null)return So(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,o?(r=t.mode,o=t.child,i={mode:"hidden",children:i},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=i):o=pl(i,r,0,null),e=Tt(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=_o(n),t.memoizedState=Mo,e):Si(t,i));if(l=e.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return cf(e,t,i,r,s,l,n);if(o){o=r.fallback,i=t.mode,l=e.child,s=l.sibling;var a={mode:"hidden",children:r.children};return!(i&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=dt(l,a),r.subtreeFlags=l.subtreeFlags&14680064),s!==null?o=dt(s,o):(o=Tt(o,i,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,i=e.child.memoizedState,i=i===null?_o(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~n,t.memoizedState=Mo,r}return o=e.child,e=o.sibling,r=dt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Si(e,t){return t=pl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function gr(e,t,n,r){return r!==null&&ai(r),nn(t,e.child,null,n),e=Si(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function cf(e,t,n,r,l,o,i){if(n)return t.flags&256?(t.flags&=-257,r=Wl(Error(y(422))),gr(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,l=t.mode,r=pl({mode:"visible",children:r.children},l,0,null),o=Tt(o,l,i,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&nn(t,e.child,null,i),t.child.memoizedState=_o(i),t.memoizedState=Mo,o);if(!(t.mode&1))return gr(e,t,i,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(y(419)),r=Wl(o,r,void 0),gr(e,t,i,r)}if(s=(i&e.childLanes)!==0,ce||s){if(r=Z,r!==null){switch(i&-i){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|i)?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,Ge(e,l),Ie(r,e,l,-1))}return Pi(),r=Wl(Error(y(421))),gr(e,t,i,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Ef.bind(null,e),l._reactRetry=t,null):(e=o.treeContext,he=st(l.nextSibling),ge=t,F=!0,je=null,e!==null&&(ke[xe++]=We,ke[xe++]=Ve,ke[xe++]=Pt,We=e.id,Ve=e.overflow,Pt=t),t=Si(t,r.children),t.flags|=4096,t)}function zs(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Eo(e.return,t,n)}function Vl(e,t,n,r,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=l)}function Fu(e,t,n){var r=t.pendingProps,l=r.revealOrder,o=r.tail;if(oe(e,t,r.children,n),r=$.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&zs(e,n,t);else if(e.tag===19)zs(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(D($,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Gr(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Vl(t,!1,l,n,o);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Gr(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Vl(t,!0,n,null,o);break;case"together":Vl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Pr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ke(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),_t|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(y(153));if(t.child!==null){for(e=t.child,n=dt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=dt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function df(e,t,n){switch(t.tag){case 3:Au(t),tn();break;case 5:cu(t);break;case 1:fe(t.type)&&Ur(t);break;case 4:mi(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;D(Qr,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(D($,$.current&1),t.flags|=128,null):n&t.child.childLanes?Ou(e,t,n):(D($,$.current&1),e=Ke(e,t,n),e!==null?e.sibling:null);D($,$.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Fu(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),D($,$.current),r)break;return null;case 22:case 23:return t.lanes=0,Du(e,t,n)}return Ke(e,t,n)}var $u,jo,Hu,Bu;$u=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};jo=function(){};Hu=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,Ct(He.current);var o=null;switch(n){case"input":l=ql(e,l),r=ql(e,r),o=[];break;case"select":l=B({},l,{value:void 0}),r=B({},r,{value:void 0}),o=[];break;case"textarea":l=to(e,l),r=to(e,r),o=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Hr)}ro(n,r);var i;n=null;for(c in l)if(!r.hasOwnProperty(c)&&l.hasOwnProperty(c)&&l[c]!=null)if(c==="style"){var s=l[c];for(i in s)s.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(In.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var a=r[c];if(s=l!=null?l[c]:void 0,r.hasOwnProperty(c)&&a!==s&&(a!=null||s!=null))if(c==="style")if(s){for(i in s)!s.hasOwnProperty(i)||a&&a.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in a)a.hasOwnProperty(i)&&s[i]!==a[i]&&(n||(n={}),n[i]=a[i])}else n||(o||(o=[]),o.push(c,n)),n=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(o=o||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(o=o||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(In.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&R("scroll",e),o||s===a||(o=[])):(o=o||[]).push(c,a))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};Bu=function(e,t,n,r){n!==r&&(t.flags|=4)};function yn(e,t){if(!F)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ne(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function ff(e,t,n){var r=t.pendingProps;switch(si(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ne(t),null;case 1:return fe(t.type)&&Br(),ne(t),null;case 3:return r=t.stateNode,rn(),A(de),A(le),gi(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(mr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,je!==null&&($o(je),je=null))),jo(e,t),ne(t),null;case 5:hi(t);var l=Ct(Qn.current);if(n=t.type,e!==null&&t.stateNode!=null)Hu(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(y(166));return ne(t),null}if(e=Ct(He.current),mr(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Oe]=t,r[Wn]=o,e=(t.mode&1)!==0,n){case"dialog":R("cancel",r),R("close",r);break;case"iframe":case"object":case"embed":R("load",r);break;case"video":case"audio":for(l=0;l<En.length;l++)R(En[l],r);break;case"source":R("error",r);break;case"img":case"image":case"link":R("error",r),R("load",r);break;case"details":R("toggle",r);break;case"input":Bi(r,o),R("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},R("invalid",r);break;case"textarea":Wi(r,o),R("invalid",r)}ro(n,o),l=null;for(var i in o)if(o.hasOwnProperty(i)){var s=o[i];i==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&pr(r.textContent,s,e),l=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&pr(r.textContent,s,e),l=["children",""+s]):In.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&R("scroll",r)}switch(n){case"input":or(r),Ui(r,o,!0);break;case"textarea":or(r),Vi(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Hr)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ha(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[Oe]=t,e[Wn]=r,$u(e,t,!1,!1),t.stateNode=e;e:{switch(i=lo(n,r),n){case"dialog":R("cancel",e),R("close",e),l=r;break;case"iframe":case"object":case"embed":R("load",e),l=r;break;case"video":case"audio":for(l=0;l<En.length;l++)R(En[l],e);l=r;break;case"source":R("error",e),l=r;break;case"img":case"image":case"link":R("error",e),R("load",e),l=r;break;case"details":R("toggle",e),l=r;break;case"input":Bi(e,r),l=ql(e,r),R("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=B({},r,{value:void 0}),R("invalid",e);break;case"textarea":Wi(e,r),l=to(e,r),R("invalid",e);break;default:l=r}ro(n,l),s=l;for(o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="style"?ya(e,a):o==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&ga(e,a)):o==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Dn(e,a):typeof a=="number"&&Dn(e,""+a):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(In.hasOwnProperty(o)?a!=null&&o==="onScroll"&&R("scroll",e):a!=null&&Yo(e,o,a,i))}switch(n){case"input":or(e),Ui(e,r,!1);break;case"textarea":or(e),Vi(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ft(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Jt(e,!!r.multiple,o,!1):r.defaultValue!=null&&Jt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Hr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ne(t),null;case 6:if(e&&t.stateNode!=null)Bu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(y(166));if(n=Ct(Qn.current),Ct(He.current),mr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Oe]=t,(o=r.nodeValue!==n)&&(e=ge,e!==null))switch(e.tag){case 3:pr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&pr(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Oe]=t,t.stateNode=r}return ne(t),null;case 13:if(A($),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(F&&he!==null&&t.mode&1&&!(t.flags&128))ou(),tn(),t.flags|=98560,o=!1;else if(o=mr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(y(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(y(317));o[Oe]=t}else tn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ne(t),o=!1}else je!==null&&($o(je),je=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||$.current&1?G===0&&(G=3):Pi())),t.updateQueue!==null&&(t.flags|=4),ne(t),null);case 4:return rn(),jo(e,t),e===null&&Bn(t.stateNode.containerInfo),ne(t),null;case 10:return di(t.type._context),ne(t),null;case 17:return fe(t.type)&&Br(),ne(t),null;case 19:if(A($),o=t.memoizedState,o===null)return ne(t),null;if(r=(t.flags&128)!==0,i=o.rendering,i===null)if(r)yn(o,!1);else{if(G!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=Gr(e),i!==null){for(t.flags|=128,yn(o,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return D($,$.current&1|2),t.child}e=e.sibling}o.tail!==null&&Q()>on&&(t.flags|=128,r=!0,yn(o,!1),t.lanes=4194304)}else{if(!r)if(e=Gr(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),yn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!F)return ne(t),null}else 2*Q()-o.renderingStartTime>on&&n!==1073741824&&(t.flags|=128,r=!0,yn(o,!1),t.lanes=4194304);o.isBackwards?(i.sibling=t.child,t.child=i):(n=o.last,n!==null?n.sibling=i:t.child=i,o.last=i)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Q(),t.sibling=null,n=$.current,D($,r?n&1|2:n&1),t):(ne(t),null);case 22:case 23:return Li(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?me&1073741824&&(ne(t),t.subtreeFlags&6&&(t.flags|=8192)):ne(t),null;case 24:return null;case 25:return null}throw Error(y(156,t.tag))}function pf(e,t){switch(si(t),t.tag){case 1:return fe(t.type)&&Br(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return rn(),A(de),A(le),gi(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return hi(t),null;case 13:if(A($),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(y(340));tn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return A($),null;case 4:return rn(),null;case 10:return di(t.type._context),null;case 22:case 23:return Li(),null;case 24:return null;default:return null}}var vr=!1,re=!1,mf=typeof WeakSet=="function"?WeakSet:Set,S=null;function Qt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){U(e,t,r)}else n.current=null}function zo(e,t,n){try{n()}catch(r){U(e,t,r)}}var Is=!1;function hf(e,t){if(ho=Or,e=Ya(),oi(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var i=0,s=-1,a=-1,c=0,h=0,m=e,p=null;t:for(;;){for(var w;m!==n||l!==0&&m.nodeType!==3||(s=i+l),m!==o||r!==0&&m.nodeType!==3||(a=i+r),m.nodeType===3&&(i+=m.nodeValue.length),(w=m.firstChild)!==null;)p=m,m=w;for(;;){if(m===e)break t;if(p===n&&++c===l&&(s=i),p===o&&++h===r&&(a=i),(w=m.nextSibling)!==null)break;m=p,p=m.parentNode}m=w}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(go={focusedElem:e,selectionRange:n},Or=!1,S=t;S!==null;)if(t=S,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,S=e;else for(;S!==null;){t=S;try{var k=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var x=k.memoizedProps,O=k.memoizedState,d=t.stateNode,u=d.getSnapshotBeforeUpdate(t.elementType===t.type?x:Me(t.type,x),O);d.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(y(163))}}catch(v){U(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,S=e;break}S=t.return}return k=Is,Is=!1,k}function _n(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var o=l.destroy;l.destroy=void 0,o!==void 0&&zo(t,n,o)}l=l.next}while(l!==r)}}function dl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Io(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Uu(e){var t=e.alternate;t!==null&&(e.alternate=null,Uu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Oe],delete t[Wn],delete t[wo],delete t[Xd],delete t[Zd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Wu(e){return e.tag===5||e.tag===3||e.tag===4}function Ds(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Wu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Do(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Hr));else if(r!==4&&(e=e.child,e!==null))for(Do(e,t,n),e=e.sibling;e!==null;)Do(e,t,n),e=e.sibling}function Ro(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ro(e,t,n),e=e.sibling;e!==null;)Ro(e,t,n),e=e.sibling}var q=null,_e=!1;function Ze(e,t,n){for(n=n.child;n!==null;)Vu(e,t,n),n=n.sibling}function Vu(e,t,n){if($e&&typeof $e.onCommitFiberUnmount=="function")try{$e.onCommitFiberUnmount(rl,n)}catch{}switch(n.tag){case 5:re||Qt(n,t);case 6:var r=q,l=_e;q=null,Ze(e,t,n),q=r,_e=l,q!==null&&(_e?(e=q,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):q.removeChild(n.stateNode));break;case 18:q!==null&&(_e?(e=q,n=n.stateNode,e.nodeType===8?Ol(e.parentNode,n):e.nodeType===1&&Ol(e,n),Fn(e)):Ol(q,n.stateNode));break;case 4:r=q,l=_e,q=n.stateNode.containerInfo,_e=!0,Ze(e,t,n),q=r,_e=l;break;case 0:case 11:case 14:case 15:if(!re&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var o=l,i=o.destroy;o=o.tag,i!==void 0&&(o&2||o&4)&&zo(n,t,i),l=l.next}while(l!==r)}Ze(e,t,n);break;case 1:if(!re&&(Qt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){U(n,t,s)}Ze(e,t,n);break;case 21:Ze(e,t,n);break;case 22:n.mode&1?(re=(r=re)||n.memoizedState!==null,Ze(e,t,n),re=r):Ze(e,t,n);break;default:Ze(e,t,n)}}function Rs(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new mf),t.forEach(function(r){var l=Cf.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Le(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var o=e,i=t,s=i;e:for(;s!==null;){switch(s.tag){case 5:q=s.stateNode,_e=!1;break e;case 3:q=s.stateNode.containerInfo,_e=!0;break e;case 4:q=s.stateNode.containerInfo,_e=!0;break e}s=s.return}if(q===null)throw Error(y(160));Vu(o,i,l),q=null,_e=!1;var a=l.alternate;a!==null&&(a.return=null),l.return=null}catch(c){U(l,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Qu(t,e),t=t.sibling}function Qu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Le(t,e),Re(e),r&4){try{_n(3,e,e.return),dl(3,e)}catch(x){U(e,e.return,x)}try{_n(5,e,e.return)}catch(x){U(e,e.return,x)}}break;case 1:Le(t,e),Re(e),r&512&&n!==null&&Qt(n,n.return);break;case 5:if(Le(t,e),Re(e),r&512&&n!==null&&Qt(n,n.return),e.flags&32){var l=e.stateNode;try{Dn(l,"")}catch(x){U(e,e.return,x)}}if(r&4&&(l=e.stateNode,l!=null)){var o=e.memoizedProps,i=n!==null?n.memoizedProps:o,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&pa(l,o),lo(s,i);var c=lo(s,o);for(i=0;i<a.length;i+=2){var h=a[i],m=a[i+1];h==="style"?ya(l,m):h==="dangerouslySetInnerHTML"?ga(l,m):h==="children"?Dn(l,m):Yo(l,h,m,c)}switch(s){case"input":bl(l,o);break;case"textarea":ma(l,o);break;case"select":var p=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var w=o.value;w!=null?Jt(l,!!o.multiple,w,!1):p!==!!o.multiple&&(o.defaultValue!=null?Jt(l,!!o.multiple,o.defaultValue,!0):Jt(l,!!o.multiple,o.multiple?[]:"",!1))}l[Wn]=o}catch(x){U(e,e.return,x)}}break;case 6:if(Le(t,e),Re(e),r&4){if(e.stateNode===null)throw Error(y(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(x){U(e,e.return,x)}}break;case 3:if(Le(t,e),Re(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Fn(t.containerInfo)}catch(x){U(e,e.return,x)}break;case 4:Le(t,e),Re(e);break;case 13:Le(t,e),Re(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(Ni=Q())),r&4&&Rs(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(re=(c=re)||h,Le(t,e),re=c):Le(t,e),Re(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!h&&e.mode&1)for(S=e,h=e.child;h!==null;){for(m=S=h;S!==null;){switch(p=S,w=p.child,p.tag){case 0:case 11:case 14:case 15:_n(4,p,p.return);break;case 1:Qt(p,p.return);var k=p.stateNode;if(typeof k.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount()}catch(x){U(r,n,x)}}break;case 5:Qt(p,p.return);break;case 22:if(p.memoizedState!==null){Os(m);continue}}w!==null?(w.return=p,S=w):Os(m)}h=h.sibling}e:for(h=null,m=e;;){if(m.tag===5){if(h===null){h=m;try{l=m.stateNode,c?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=m.stateNode,a=m.memoizedProps.style,i=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=va("display",i))}catch(x){U(e,e.return,x)}}}else if(m.tag===6){if(h===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(x){U(e,e.return,x)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;h===m&&(h=null),m=m.return}h===m&&(h=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Le(t,e),Re(e),r&4&&Rs(e);break;case 21:break;default:Le(t,e),Re(e)}}function Re(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Wu(n)){var r=n;break e}n=n.return}throw Error(y(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Dn(l,""),r.flags&=-33);var o=Ds(e);Ro(e,o,l);break;case 3:case 4:var i=r.stateNode.containerInfo,s=Ds(e);Do(e,s,i);break;default:throw Error(y(161))}}catch(a){U(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function gf(e,t,n){S=e,Yu(e)}function Yu(e,t,n){for(var r=(e.mode&1)!==0;S!==null;){var l=S,o=l.child;if(l.tag===22&&r){var i=l.memoizedState!==null||vr;if(!i){var s=l.alternate,a=s!==null&&s.memoizedState!==null||re;s=vr;var c=re;if(vr=i,(re=a)&&!c)for(S=l;S!==null;)i=S,a=i.child,i.tag===22&&i.memoizedState!==null?Fs(l):a!==null?(a.return=i,S=a):Fs(l);for(;o!==null;)S=o,Yu(o),o=o.sibling;S=l,vr=s,re=c}As(e)}else l.subtreeFlags&8772&&o!==null?(o.return=l,S=o):As(e)}}function As(e){for(;S!==null;){var t=S;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:re||dl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!re)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Me(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&ks(t,o,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ks(t,i,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var m=h.dehydrated;m!==null&&Fn(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(y(163))}re||t.flags&512&&Io(t)}catch(p){U(t,t.return,p)}}if(t===e){S=null;break}if(n=t.sibling,n!==null){n.return=t.return,S=n;break}S=t.return}}function Os(e){for(;S!==null;){var t=S;if(t===e){S=null;break}var n=t.sibling;if(n!==null){n.return=t.return,S=n;break}S=t.return}}function Fs(e){for(;S!==null;){var t=S;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{dl(4,t)}catch(a){U(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(a){U(t,l,a)}}var o=t.return;try{Io(t)}catch(a){U(t,o,a)}break;case 5:var i=t.return;try{Io(t)}catch(a){U(t,i,a)}}}catch(a){U(t,t.return,a)}if(t===e){S=null;break}var s=t.sibling;if(s!==null){s.return=t.return,S=s;break}S=t.return}}var vf=Math.ceil,Zr=Xe.ReactCurrentDispatcher,Ei=Xe.ReactCurrentOwner,Ee=Xe.ReactCurrentBatchConfig,z=0,Z=null,Y=null,b=0,me=0,Yt=ht(0),G=0,Kn=null,_t=0,fl=0,Ci=0,jn=null,ue=null,Ni=0,on=1/0,Be=null,qr=!1,Ao=null,ut=null,yr=!1,rt=null,br=0,zn=0,Oo=null,Mr=-1,_r=0;function ie(){return z&6?Q():Mr!==-1?Mr:Mr=Q()}function ct(e){return e.mode&1?z&2&&b!==0?b&-b:bd.transition!==null?(_r===0&&(_r=_a()),_r):(e=I,e!==0||(e=window.event,e=e===void 0?16:Oa(e.type)),e):1}function Ie(e,t,n,r){if(50<zn)throw zn=0,Oo=null,Error(y(185));Zn(e,n,r),(!(z&2)||e!==Z)&&(e===Z&&(!(z&2)&&(fl|=n),G===4&&tt(e,b)),pe(e,r),n===1&&z===0&&!(t.mode&1)&&(on=Q()+500,al&&gt()))}function pe(e,t){var n=e.callbackNode;bc(e,t);var r=Ar(e,e===Z?b:0);if(r===0)n!==null&&Ji(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ji(n),t===1)e.tag===0?qd($s.bind(null,e)):nu($s.bind(null,e)),Gd(function(){!(z&6)&&gt()}),n=null;else{switch(ja(r)){case 1:n=Zo;break;case 4:n=Pa;break;case 16:n=Rr;break;case 536870912:n=Ma;break;default:n=Rr}n=ec(n,Ju.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ju(e,t){if(Mr=-1,_r=0,z&6)throw Error(y(327));var n=e.callbackNode;if(qt()&&e.callbackNode!==n)return null;var r=Ar(e,e===Z?b:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=el(e,r);else{t=r;var l=z;z|=2;var o=Ku();(Z!==e||b!==t)&&(Be=null,on=Q()+500,Nt(e,t));do try{kf();break}catch(s){Gu(e,s)}while(!0);ci(),Zr.current=o,z=l,Y!==null?t=0:(Z=null,b=0,t=G)}if(t!==0){if(t===2&&(l=uo(e),l!==0&&(r=l,t=Fo(e,l))),t===1)throw n=Kn,Nt(e,0),tt(e,r),pe(e,Q()),n;if(t===6)tt(e,r);else{if(l=e.current.alternate,!(r&30)&&!yf(l)&&(t=el(e,r),t===2&&(o=uo(e),o!==0&&(r=o,t=Fo(e,o))),t===1))throw n=Kn,Nt(e,0),tt(e,r),pe(e,Q()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(y(345));case 2:xt(e,ue,Be);break;case 3:if(tt(e,r),(r&130023424)===r&&(t=Ni+500-Q(),10<t)){if(Ar(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){ie(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=yo(xt.bind(null,e,ue,Be),t);break}xt(e,ue,Be);break;case 4:if(tt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var i=31-ze(r);o=1<<i,i=t[i],i>l&&(l=i),r&=~o}if(r=l,r=Q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*vf(r/1960))-r,10<r){e.timeoutHandle=yo(xt.bind(null,e,ue,Be),r);break}xt(e,ue,Be);break;case 5:xt(e,ue,Be);break;default:throw Error(y(329))}}}return pe(e,Q()),e.callbackNode===n?Ju.bind(null,e):null}function Fo(e,t){var n=jn;return e.current.memoizedState.isDehydrated&&(Nt(e,t).flags|=256),e=el(e,t),e!==2&&(t=ue,ue=n,t!==null&&$o(t)),e}function $o(e){ue===null?ue=e:ue.push.apply(ue,e)}function yf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],o=l.getSnapshot;l=l.value;try{if(!De(o(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function tt(e,t){for(t&=~Ci,t&=~fl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ze(t),r=1<<n;e[n]=-1,t&=~r}}function $s(e){if(z&6)throw Error(y(327));qt();var t=Ar(e,0);if(!(t&1))return pe(e,Q()),null;var n=el(e,t);if(e.tag!==0&&n===2){var r=uo(e);r!==0&&(t=r,n=Fo(e,r))}if(n===1)throw n=Kn,Nt(e,0),tt(e,t),pe(e,Q()),n;if(n===6)throw Error(y(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,xt(e,ue,Be),pe(e,Q()),null}function Ti(e,t){var n=z;z|=1;try{return e(t)}finally{z=n,z===0&&(on=Q()+500,al&&gt())}}function jt(e){rt!==null&&rt.tag===0&&!(z&6)&&qt();var t=z;z|=1;var n=Ee.transition,r=I;try{if(Ee.transition=null,I=1,e)return e()}finally{I=r,Ee.transition=n,z=t,!(z&6)&&gt()}}function Li(){me=Yt.current,A(Yt)}function Nt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Jd(n)),Y!==null)for(n=Y.return;n!==null;){var r=n;switch(si(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Br();break;case 3:rn(),A(de),A(le),gi();break;case 5:hi(r);break;case 4:rn();break;case 13:A($);break;case 19:A($);break;case 10:di(r.type._context);break;case 22:case 23:Li()}n=n.return}if(Z=e,Y=e=dt(e.current,null),b=me=t,G=0,Kn=null,Ci=fl=_t=0,ue=jn=null,Et!==null){for(t=0;t<Et.length;t++)if(n=Et[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,o=n.pending;if(o!==null){var i=o.next;o.next=l,r.next=i}n.pending=r}Et=null}return e}function Gu(e,t){do{var n=Y;try{if(ci(),Tr.current=Xr,Kr){for(var r=H.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Kr=!1}if(Mt=0,X=J=H=null,Mn=!1,Yn=0,Ei.current=null,n===null||n.return===null){G=1,Kn=t,Y=null;break}e:{var o=e,i=n.return,s=n,a=t;if(t=b,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,h=s,m=h.tag;if(!(h.mode&1)&&(m===0||m===11||m===15)){var p=h.alternate;p?(h.updateQueue=p.updateQueue,h.memoizedState=p.memoizedState,h.lanes=p.lanes):(h.updateQueue=null,h.memoizedState=null)}var w=Ts(i);if(w!==null){w.flags&=-257,Ls(w,i,s,o,t),w.mode&1&&Ns(o,c,t),t=w,a=c;var k=t.updateQueue;if(k===null){var x=new Set;x.add(a),t.updateQueue=x}else k.add(a);break e}else{if(!(t&1)){Ns(o,c,t),Pi();break e}a=Error(y(426))}}else if(F&&s.mode&1){var O=Ts(i);if(O!==null){!(O.flags&65536)&&(O.flags|=256),Ls(O,i,s,o,t),ai(ln(a,s));break e}}o=a=ln(a,s),G!==4&&(G=2),jn===null?jn=[o]:jn.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var d=ju(o,a,t);ws(o,d);break e;case 1:s=a;var u=o.type,f=o.stateNode;if(!(o.flags&128)&&(typeof u.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ut===null||!ut.has(f)))){o.flags|=65536,t&=-t,o.lanes|=t;var v=zu(o,s,t);ws(o,v);break e}}o=o.return}while(o!==null)}Zu(n)}catch(E){t=E,Y===n&&n!==null&&(Y=n=n.return);continue}break}while(!0)}function Ku(){var e=Zr.current;return Zr.current=Xr,e===null?Xr:e}function Pi(){(G===0||G===3||G===2)&&(G=4),Z===null||!(_t&268435455)&&!(fl&268435455)||tt(Z,b)}function el(e,t){var n=z;z|=2;var r=Ku();(Z!==e||b!==t)&&(Be=null,Nt(e,t));do try{wf();break}catch(l){Gu(e,l)}while(!0);if(ci(),z=n,Zr.current=r,Y!==null)throw Error(y(261));return Z=null,b=0,G}function wf(){for(;Y!==null;)Xu(Y)}function kf(){for(;Y!==null&&!Vc();)Xu(Y)}function Xu(e){var t=bu(e.alternate,e,me);e.memoizedProps=e.pendingProps,t===null?Zu(e):Y=t,Ei.current=null}function Zu(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=pf(n,t),n!==null){n.flags&=32767,Y=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{G=6,Y=null;return}}else if(n=ff(n,t,me),n!==null){Y=n;return}if(t=t.sibling,t!==null){Y=t;return}Y=t=e}while(t!==null);G===0&&(G=5)}function xt(e,t,n){var r=I,l=Ee.transition;try{Ee.transition=null,I=1,xf(e,t,n,r)}finally{Ee.transition=l,I=r}return null}function xf(e,t,n,r){do qt();while(rt!==null);if(z&6)throw Error(y(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(y(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(ed(e,o),e===Z&&(Y=Z=null,b=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||yr||(yr=!0,ec(Rr,function(){return qt(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ee.transition,Ee.transition=null;var i=I;I=1;var s=z;z|=4,Ei.current=null,hf(e,n),Qu(n,e),Hd(go),Or=!!ho,go=ho=null,e.current=n,gf(n),Qc(),z=s,I=i,Ee.transition=o}else e.current=n;if(yr&&(yr=!1,rt=e,br=l),o=e.pendingLanes,o===0&&(ut=null),Gc(n.stateNode),pe(e,Q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(qr)throw qr=!1,e=Ao,Ao=null,e;return br&1&&e.tag!==0&&qt(),o=e.pendingLanes,o&1?e===Oo?zn++:(zn=0,Oo=e):zn=0,gt(),null}function qt(){if(rt!==null){var e=ja(br),t=Ee.transition,n=I;try{if(Ee.transition=null,I=16>e?16:e,rt===null)var r=!1;else{if(e=rt,rt=null,br=0,z&6)throw Error(y(331));var l=z;for(z|=4,S=e.current;S!==null;){var o=S,i=o.child;if(S.flags&16){var s=o.deletions;if(s!==null){for(var a=0;a<s.length;a++){var c=s[a];for(S=c;S!==null;){var h=S;switch(h.tag){case 0:case 11:case 15:_n(8,h,o)}var m=h.child;if(m!==null)m.return=h,S=m;else for(;S!==null;){h=S;var p=h.sibling,w=h.return;if(Uu(h),h===c){S=null;break}if(p!==null){p.return=w,S=p;break}S=w}}}var k=o.alternate;if(k!==null){var x=k.child;if(x!==null){k.child=null;do{var O=x.sibling;x.sibling=null,x=O}while(x!==null)}}S=o}}if(o.subtreeFlags&2064&&i!==null)i.return=o,S=i;else e:for(;S!==null;){if(o=S,o.flags&2048)switch(o.tag){case 0:case 11:case 15:_n(9,o,o.return)}var d=o.sibling;if(d!==null){d.return=o.return,S=d;break e}S=o.return}}var u=e.current;for(S=u;S!==null;){i=S;var f=i.child;if(i.subtreeFlags&2064&&f!==null)f.return=i,S=f;else e:for(i=u;S!==null;){if(s=S,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:dl(9,s)}}catch(E){U(s,s.return,E)}if(s===i){S=null;break e}var v=s.sibling;if(v!==null){v.return=s.return,S=v;break e}S=s.return}}if(z=l,gt(),$e&&typeof $e.onPostCommitFiberRoot=="function")try{$e.onPostCommitFiberRoot(rl,e)}catch{}r=!0}return r}finally{I=n,Ee.transition=t}}return!1}function Hs(e,t,n){t=ln(n,t),t=ju(e,t,1),e=at(e,t,1),t=ie(),e!==null&&(Zn(e,1,t),pe(e,t))}function U(e,t,n){if(e.tag===3)Hs(e,e,n);else for(;t!==null;){if(t.tag===3){Hs(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ut===null||!ut.has(r))){e=ln(n,e),e=zu(t,e,1),t=at(t,e,1),e=ie(),t!==null&&(Zn(t,1,e),pe(t,e));break}}t=t.return}}function Sf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ie(),e.pingedLanes|=e.suspendedLanes&n,Z===e&&(b&n)===n&&(G===4||G===3&&(b&130023424)===b&&500>Q()-Ni?Nt(e,0):Ci|=n),pe(e,t)}function qu(e,t){t===0&&(e.mode&1?(t=ar,ar<<=1,!(ar&130023424)&&(ar=4194304)):t=1);var n=ie();e=Ge(e,t),e!==null&&(Zn(e,t,n),pe(e,n))}function Ef(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Cf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(y(314))}r!==null&&r.delete(t),qu(e,n)}var bu;bu=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||de.current)ce=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ce=!1,df(e,t,n);ce=!!(e.flags&131072)}else ce=!1,F&&t.flags&1048576&&ru(t,Vr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Pr(e,t),e=t.pendingProps;var l=en(t,le.current);Zt(t,n),l=yi(null,t,r,e,l,n);var o=wi();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,fe(r)?(o=!0,Ur(t)):o=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,pi(t),l.updater=cl,t.stateNode=l,l._reactInternals=t,No(t,r,e,n),t=Po(null,t,r,!0,o,n)):(t.tag=0,F&&o&&ii(t),oe(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Pr(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Tf(r),e=Me(r,e),l){case 0:t=Lo(null,t,r,e,n);break e;case 1:t=_s(null,t,r,e,n);break e;case 11:t=Ps(null,t,r,e,n);break e;case 14:t=Ms(null,t,r,Me(r.type,e),n);break e}throw Error(y(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Me(r,l),Lo(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Me(r,l),_s(e,t,r,l,n);case 3:e:{if(Au(t),e===null)throw Error(y(387));r=t.pendingProps,o=t.memoizedState,l=o.element,uu(e,t),Jr(t,r,null,n);var i=t.memoizedState;if(r=i.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){l=ln(Error(y(423)),t),t=js(e,t,r,n,l);break e}else if(r!==l){l=ln(Error(y(424)),t),t=js(e,t,r,n,l);break e}else for(he=st(t.stateNode.containerInfo.firstChild),ge=t,F=!0,je=null,n=su(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(tn(),r===l){t=Ke(e,t,n);break e}oe(e,t,r,n)}t=t.child}return t;case 5:return cu(t),e===null&&So(t),r=t.type,l=t.pendingProps,o=e!==null?e.memoizedProps:null,i=l.children,vo(r,l)?i=null:o!==null&&vo(r,o)&&(t.flags|=32),Ru(e,t),oe(e,t,i,n),t.child;case 6:return e===null&&So(t),null;case 13:return Ou(e,t,n);case 4:return mi(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=nn(t,null,r,n):oe(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Me(r,l),Ps(e,t,r,l,n);case 7:return oe(e,t,t.pendingProps,n),t.child;case 8:return oe(e,t,t.pendingProps.children,n),t.child;case 12:return oe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,o=t.memoizedProps,i=l.value,D(Qr,r._currentValue),r._currentValue=i,o!==null)if(De(o.value,i)){if(o.children===l.children&&!de.current){t=Ke(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){i=o.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(o.tag===1){a=Qe(-1,n&-n),a.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?a.next=a:(a.next=h.next,h.next=a),c.pending=a}}o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Eo(o.return,n,t),s.lanes|=n;break}a=a.next}}else if(o.tag===10)i=o.type===t.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(y(341));i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Eo(i,n,t),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===t){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}oe(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,Zt(t,n),l=Ce(l),r=r(l),t.flags|=1,oe(e,t,r,n),t.child;case 14:return r=t.type,l=Me(r,t.pendingProps),l=Me(r.type,l),Ms(e,t,r,l,n);case 15:return Iu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Me(r,l),Pr(e,t),t.tag=1,fe(r)?(e=!0,Ur(t)):e=!1,Zt(t,n),_u(t,r,l),No(t,r,l,n),Po(null,t,r,!0,e,n);case 19:return Fu(e,t,n);case 22:return Du(e,t,n)}throw Error(y(156,t.tag))};function ec(e,t){return La(e,t)}function Nf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Se(e,t,n,r){return new Nf(e,t,n,r)}function Mi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Tf(e){if(typeof e=="function")return Mi(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Go)return 11;if(e===Ko)return 14}return 2}function dt(e,t){var n=e.alternate;return n===null?(n=Se(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function jr(e,t,n,r,l,o){var i=2;if(r=e,typeof e=="function")Mi(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case At:return Tt(n.children,l,o,t);case Jo:i=8,l|=8;break;case Gl:return e=Se(12,n,t,l|2),e.elementType=Gl,e.lanes=o,e;case Kl:return e=Se(13,n,t,l),e.elementType=Kl,e.lanes=o,e;case Xl:return e=Se(19,n,t,l),e.elementType=Xl,e.lanes=o,e;case ca:return pl(n,l,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case aa:i=10;break e;case ua:i=9;break e;case Go:i=11;break e;case Ko:i=14;break e;case qe:i=16,r=null;break e}throw Error(y(130,e==null?e:typeof e,""))}return t=Se(i,n,t,l),t.elementType=e,t.type=r,t.lanes=o,t}function Tt(e,t,n,r){return e=Se(7,e,r,t),e.lanes=n,e}function pl(e,t,n,r){return e=Se(22,e,r,t),e.elementType=ca,e.lanes=n,e.stateNode={isHidden:!1},e}function Ql(e,t,n){return e=Se(6,e,null,t),e.lanes=n,e}function Yl(e,t,n){return t=Se(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Lf(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Tl(0),this.expirationTimes=Tl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tl(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function _i(e,t,n,r,l,o,i,s,a){return e=new Lf(e,t,n,s,a),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Se(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},pi(o),e}function Pf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Rt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function tc(e){if(!e)return pt;e=e._reactInternals;e:{if(It(e)!==e||e.tag!==1)throw Error(y(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(fe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(y(171))}if(e.tag===1){var n=e.type;if(fe(n))return tu(e,n,t)}return t}function nc(e,t,n,r,l,o,i,s,a){return e=_i(n,r,!0,e,l,o,i,s,a),e.context=tc(null),n=e.current,r=ie(),l=ct(n),o=Qe(r,l),o.callback=t??null,at(n,o,l),e.current.lanes=l,Zn(e,l,r),pe(e,r),e}function ml(e,t,n,r){var l=t.current,o=ie(),i=ct(l);return n=tc(n),t.context===null?t.context=n:t.pendingContext=n,t=Qe(o,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=at(l,t,i),e!==null&&(Ie(e,l,i,o),Nr(e,l,i)),i}function tl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Bs(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ji(e,t){Bs(e,t),(e=e.alternate)&&Bs(e,t)}function Mf(){return null}var rc=typeof reportError=="function"?reportError:function(e){console.error(e)};function zi(e){this._internalRoot=e}hl.prototype.render=zi.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(y(409));ml(e,t,null,null)};hl.prototype.unmount=zi.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;jt(function(){ml(null,e,null,null)}),t[Je]=null}};function hl(e){this._internalRoot=e}hl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Da();e={blockedOn:null,target:e,priority:t};for(var n=0;n<et.length&&t!==0&&t<et[n].priority;n++);et.splice(n,0,e),n===0&&Aa(e)}};function Ii(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function gl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Us(){}function _f(e,t,n,r,l){if(l){if(typeof r=="function"){var o=r;r=function(){var c=tl(i);o.call(c)}}var i=nc(t,r,e,0,null,!1,!1,"",Us);return e._reactRootContainer=i,e[Je]=i.current,Bn(e.nodeType===8?e.parentNode:e),jt(),i}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var s=r;r=function(){var c=tl(a);s.call(c)}}var a=_i(e,0,!1,null,null,!1,!1,"",Us);return e._reactRootContainer=a,e[Je]=a.current,Bn(e.nodeType===8?e.parentNode:e),jt(function(){ml(t,a,n,r)}),a}function vl(e,t,n,r,l){var o=n._reactRootContainer;if(o){var i=o;if(typeof l=="function"){var s=l;l=function(){var a=tl(i);s.call(a)}}ml(t,i,e,l)}else i=_f(n,t,e,l,r);return tl(i)}za=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Sn(t.pendingLanes);n!==0&&(qo(t,n|1),pe(t,Q()),!(z&6)&&(on=Q()+500,gt()))}break;case 13:jt(function(){var r=Ge(e,1);if(r!==null){var l=ie();Ie(r,e,1,l)}}),ji(e,1)}};bo=function(e){if(e.tag===13){var t=Ge(e,134217728);if(t!==null){var n=ie();Ie(t,e,134217728,n)}ji(e,134217728)}};Ia=function(e){if(e.tag===13){var t=ct(e),n=Ge(e,t);if(n!==null){var r=ie();Ie(n,e,t,r)}ji(e,t)}};Da=function(){return I};Ra=function(e,t){var n=I;try{return I=e,t()}finally{I=n}};io=function(e,t,n){switch(t){case"input":if(bl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=sl(r);if(!l)throw Error(y(90));fa(r),bl(r,l)}}}break;case"textarea":ma(e,n);break;case"select":t=n.value,t!=null&&Jt(e,!!n.multiple,t,!1)}};xa=Ti;Sa=jt;var jf={usingClientEntryPoint:!1,Events:[bn,Ht,sl,wa,ka,Ti]},wn={findFiberByHostInstance:St,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},zf={bundleType:wn.bundleType,version:wn.version,rendererPackageName:wn.rendererPackageName,rendererConfig:wn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xe.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Na(e),e===null?null:e.stateNode},findFiberByHostInstance:wn.findFiberByHostInstance||Mf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wr.isDisabled&&wr.supportsFiber)try{rl=wr.inject(zf),$e=wr}catch{}}ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jf;ye.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ii(t))throw Error(y(200));return Pf(e,t,null,n)};ye.createRoot=function(e,t){if(!Ii(e))throw Error(y(299));var n=!1,r="",l=rc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=_i(e,1,!1,null,null,n,!1,r,l),e[Je]=t.current,Bn(e.nodeType===8?e.parentNode:e),new zi(t)};ye.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(y(188)):(e=Object.keys(e).join(","),Error(y(268,e)));return e=Na(t),e=e===null?null:e.stateNode,e};ye.flushSync=function(e){return jt(e)};ye.hydrate=function(e,t,n){if(!gl(t))throw Error(y(200));return vl(null,e,t,!0,n)};ye.hydrateRoot=function(e,t,n){if(!Ii(e))throw Error(y(405));var r=n!=null&&n.hydratedSources||null,l=!1,o="",i=rc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=nc(t,null,e,1,n??null,l,!1,o,i),e[Je]=t.current,Bn(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new hl(t)};ye.render=function(e,t,n){if(!gl(t))throw Error(y(200));return vl(null,e,t,!1,n)};ye.unmountComponentAtNode=function(e){if(!gl(e))throw Error(y(40));return e._reactRootContainer?(jt(function(){vl(null,null,e,!1,function(){e._reactRootContainer=null,e[Je]=null})}),!0):!1};ye.unstable_batchedUpdates=Ti;ye.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!gl(n))throw Error(y(200));if(e==null||e._reactInternals===void 0)throw Error(y(38));return vl(e,t,n,!1,r)};ye.version="18.3.1-next-f1338f8080-20240426";function lc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(lc)}catch(e){console.error(e)}}lc(),la.exports=ye;var If=la.exports,oc,Ws=If;oc=Ws.createRoot,Ws.hydrateRoot;/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Df={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rf=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),vt=(e,t)=>{const n=Fe.forwardRef(({color:r="currentColor",size:l=24,strokeWidth:o=2,absoluteStrokeWidth:i,className:s="",children:a,...c},h)=>Fe.createElement("svg",{ref:h,...Df,width:l,height:l,stroke:r,strokeWidth:i?Number(o)*24/Number(l):o,className:["lucide",`lucide-${Rf(e)}`,s].join(" "),...c},[...t.map(([m,p])=>Fe.createElement(m,p)),...Array.isArray(a)?a:[a]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Af=vt("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vs=vt("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qs=vt("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ys=vt("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Of=vt("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ff=vt("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $f=vt("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hf=vt("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),Pe=[{id:1,title:"Hello World - Your First JavaScript",description:"Let's start with the most basic JavaScript - displaying text on a webpage",level:"beginner",htmlCode:`<!DOCTYPE html>
<html>
<head>
    <title>My First JavaScript</title>
</head>
<body>
    <h1>Welcome to JavaScript!</h1>
    <p id="demo">This will change...</p>
    
    <script>
        document.getElementById("demo").innerHTML = "Hello World!";
    <\/script>
</body>
</html>`,jsCode:'document.getElementById("demo").innerHTML = "Hello World!";',explanation:"This is your first JavaScript code! We're selecting an HTML element with the ID 'demo' and changing its content to 'Hello World!'.",keyPoints:["document.getElementById() finds an HTML element","innerHTML changes the content inside an element","JavaScript runs when the page loads"],nextConcept:"Now let's learn about variables to store data"},{id:2,title:"Variables - Storing Information",description:"Learn how to store and use data with variables",level:"beginner",htmlCode:`<!DOCTYPE html>
<html>
<body>
    <h1>Working with Variables</h1>
    <p id="output"></p>
    <button onclick="showInfo()">Click to see my info</button>
    
    <script>
        let name = "Alex";
        let age = 25;
        let isStudent = true;
        
        function showInfo() {
            document.getElementById("output").innerHTML = 
                "Name: " + name + "<br>" +
                "Age: " + age + "<br>" +
                "Is Student: " + isStudent;
        }
    <\/script>
</body>
</html>`,jsCode:`let name = "Alex";
let age = 25;
let isStudent = true;

function showInfo() {
    document.getElementById("output").innerHTML = 
        "Name: " + name + "<br>" +
        "Age: " + age + "<br>" +
        "Is Student: " + isStudent;
}`,explanation:"Variables are containers that store data. We use 'let' to create variables that can change, and we can store text (strings), numbers, and true/false values (booleans).",keyPoints:["let creates a variable that can change",`Strings use quotes: "text" or 'text'`,"Numbers don't need quotes: 25","Booleans are true or false","Functions group code together"],nextConcept:"Let's make our code interactive with user input"},{id:3,title:"User Input - Making It Interactive",description:"Get input from users and respond to their actions",level:"beginner",htmlCode:`<!DOCTYPE html>
<html>
<body>
    <h1>Interactive JavaScript</h1>
    <input type="text" id="userName" placeholder="Enter your name">
    <button onclick="greetUser()">Greet Me!</button>
    <p id="greeting"></p>
    
    <script>
        function greetUser() {
            let name = document.getElementById("userName").value;
            let currentTime = new Date().getHours();
            let timeGreeting;
            
            if (currentTime < 12) {
                timeGreeting = "Good morning";
            } else if (currentTime < 18) {
                timeGreeting = "Good afternoon";
            } else {
                timeGreeting = "Good evening";
            }
            
            document.getElementById("greeting").innerHTML = 
                timeGreeting + ", " + name + "! Welcome to JavaScript!";
        }
    <\/script>
</body>
</html>`,jsCode:`function greetUser() {
    let name = document.getElementById("userName").value;
    let currentTime = new Date().getHours();
    let timeGreeting;
    
    if (currentTime < 12) {
        timeGreeting = "Good morning";
    } else if (currentTime < 18) {
        timeGreeting = "Good afternoon";
    } else {
        timeGreeting = "Good evening";
    }
    
    document.getElementById("greeting").innerHTML = 
        timeGreeting + ", " + name + "! Welcome to JavaScript!";
}`,explanation:"Now we're getting input from users and making decisions! We use .value to get text from input fields, and if/else statements to make choices based on conditions.",keyPoints:[".value gets text from input fields","if/else statements make decisions","new Date() gets current date and time","We can chain conditions with else if","Functions can be called when buttons are clicked"],nextConcept:"Let's work with lists of data using arrays"},{id:4,title:"Arrays - Working with Lists",description:"Store and manipulate multiple pieces of data",level:"beginner",htmlCode:`<!DOCTYPE html>
<html>
<body>
    <h1>My Favorite Movies</h1>
    <button onclick="addMovie()">Add Random Movie</button>
    <button onclick="showMovies()">Show All Movies</button>
    <button onclick="removeMovie()">Remove Last Movie</button>
    <ul id="movieList"></ul>
    <p id="movieCount"></p>
    
    <script>
        let movies = ["The Matrix", "Inception", "Interstellar"];
        let possibleMovies = ["Avatar", "Titanic", "Star Wars", "Jurassic Park", "The Avengers"];
        
        function showMovies() {
            let listHTML = "";
            for (let i = 0; i < movies.length; i++) {
                listHTML += "<li>" + movies[i] + "</li>";
            }
            document.getElementById("movieList").innerHTML = listHTML;
            document.getElementById("movieCount").innerHTML = 
                "Total movies: " + movies.length;
        }
        
        function addMovie() {
            let randomIndex = Math.floor(Math.random() * possibleMovies.length);
            let newMovie = possibleMovies[randomIndex];
            movies.push(newMovie);
            showMovies();
        }
        
        function removeMovie() {
            if (movies.length > 0) {
                movies.pop();
                showMovies();
            }
        }
        
        // Show initial movies
        showMovies();
    <\/script>
</body>
</html>`,jsCode:`let movies = ["The Matrix", "Inception", "Interstellar"];
let possibleMovies = ["Avatar", "Titanic", "Star Wars", "Jurassic Park", "The Avengers"];

function showMovies() {
    let listHTML = "";
    for (let i = 0; i < movies.length; i++) {
        listHTML += "<li>" + movies[i] + "</li>";
    }
    document.getElementById("movieList").innerHTML = listHTML;
    document.getElementById("movieCount").innerHTML = 
        "Total movies: " + movies.length;
}

function addMovie() {
    let randomIndex = Math.floor(Math.random() * possibleMovies.length);
    let newMovie = possibleMovies[randomIndex];
    movies.push(newMovie);
    showMovies();
}

function removeMovie() {
    if (movies.length > 0) {
        movies.pop();
        showMovies();
    }
}`,explanation:"Arrays let us store multiple items in one variable. We can add items with push(), remove with pop(), and loop through them with for loops.",keyPoints:["Arrays store multiple values: [item1, item2, item3]","for loops repeat code for each item","push() adds items to the end","pop() removes the last item","Math.random() generates random numbers",".length tells us how many items are in an array"],nextConcept:"Let's organize our code better with objects"},{id:5,title:"Objects - Organizing Related Data",description:"Group related information together using objects",level:"intermediate",htmlCode:`<!DOCTYPE html>
<html>
<body>
    <h1>Student Management System</h1>
    <div id="studentInfo"></div>
    <button onclick="updateGrade()">Add Random Grade</button>
    <button onclick="showStudent()">Refresh Display</button>
    
    <script>
        let student = {
            name: "Sarah Johnson",
            age: 20,
            major: "Computer Science",
            grades: [85, 92, 78, 96],
            isEnrolled: true,
            
            calculateAverage: function() {
                let sum = 0;
                for (let i = 0; i < this.grades.length; i++) {
                    sum += this.grades[i];
                }
                return Math.round(sum / this.grades.length);
            },
            
            getStatus: function() {
                let avg = this.calculateAverage();
                if (avg >= 90) return "Excellent";
                if (avg >= 80) return "Good";
                if (avg >= 70) return "Satisfactory";
                return "Needs Improvement";
            }
        };
        
        function showStudent() {
            document.getElementById("studentInfo").innerHTML = 
                "<h2>" + student.name + "</h2>" +
                "<p><strong>Age:</strong> " + student.age + "</p>" +
                "<p><strong>Major:</strong> " + student.major + "</p>" +
                "<p><strong>Grades:</strong> " + student.grades.join(", ") + "</p>" +
                "<p><strong>Average:</strong> " + student.calculateAverage() + "%</p>" +
                "<p><strong>Status:</strong> " + student.getStatus() + "</p>" +
                "<p><strong>Enrolled:</strong> " + (student.isEnrolled ? "Yes" : "No") + "</p>";
        }
        
        function updateGrade() {
            let newGrade = Math.floor(Math.random() * 31) + 70; // 70-100
            student.grades.push(newGrade);
            showStudent();
        }
        
        // Show initial student info
        showStudent();
    <\/script>
</body>
</html>`,jsCode:`let student = {
    name: "Sarah Johnson",
    age: 20,
    major: "Computer Science",
    grades: [85, 92, 78, 96],
    isEnrolled: true,
    
    calculateAverage: function() {
        let sum = 0;
        for (let i = 0; i < this.grades.length; i++) {
            sum += this.grades[i];
        }
        return Math.round(sum / this.grades.length);
    },
    
    getStatus: function() {
        let avg = this.calculateAverage();
        if (avg >= 90) return "Excellent";
        if (avg >= 80) return "Good";
        if (avg >= 70) return "Satisfactory";
        return "Needs Improvement";
    }
};`,explanation:"Objects group related data and functions together. We use properties to store data and methods (functions inside objects) to perform actions. The 'this' keyword refers to the current object.",keyPoints:["Objects group related data: {property: value}","Methods are functions inside objects","'this' refers to the current object","Dot notation accesses properties: object.property","Objects can contain arrays, functions, and other objects","join() converts arrays to strings"],nextConcept:"Let's handle errors and make our code more robust"},{id:6,title:"Error Handling - Making Code Bulletproof",description:"Handle errors gracefully and provide better user experience",level:"intermediate",htmlCode:`<!DOCTYPE html>
<html>
<body>
    <h1>Calculator with Error Handling</h1>
    <input type="number" id="num1" placeholder="First number">
    <select id="operation">
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">×</option>
        <option value="/">/</option>
    </select>
    <input type="number" id="num2" placeholder="Second number">
    <button onclick="calculate()">Calculate</button>
    <div id="result"></div>
    <div id="history"></div>
    
    <script>
        let calculationHistory = [];
        
        function calculate() {
            try {
                let num1 = parseFloat(document.getElementById("num1").value);
                let num2 = parseFloat(document.getElementById("num2").value);
                let operation = document.getElementById("operation").value;
                
                // Validate inputs
                if (isNaN(num1) || isNaN(num2)) {
                    throw new Error("Please enter valid numbers");
                }
                
                let result;
                switch (operation) {
                    case "+":
                        result = num1 + num2;
                        break;
                    case "-":
                        result = num1 - num2;
                        break;
                    case "*":
                        result = num1 * num2;
                        break;
                    case "/":
                        if (num2 === 0) {
                            throw new Error("Cannot divide by zero!");
                        }
                        result = num1 / num2;
                        break;
                    default:
                        throw new Error("Invalid operation");
                }
                
                // Success - show result
                document.getElementById("result").innerHTML = 
                    "<div style='color: green; font-size: 1.2em; margin: 10px 0;'>" +
                    num1 + " " + operation + " " + num2 + " = " + result.toFixed(2) +
                    "</div>";
                
                // Add to history
                calculationHistory.push({
                    calculation: num1 + " " + operation + " " + num2,
                    result: result.toFixed(2),
                    timestamp: new Date().toLocaleTimeString()
                });
                
                updateHistory();
                
            } catch (error) {
                // Handle errors gracefully
                document.getElementById("result").innerHTML = 
                    "<div style='color: red; font-weight: bold; margin: 10px 0;'>" +
                    "Error: " + error.message +
                    "</div>";
            }
        }
        
        function updateHistory() {
            let historyHTML = "<h3>Calculation History:</h3>";
            for (let i = calculationHistory.length - 1; i >= 0 && i >= calculationHistory.length - 5; i--) {
                let calc = calculationHistory[i];
                historyHTML += "<div style='margin: 5px 0; padding: 5px; background: #f0f0f0;'>" +
                    calc.calculation + " = " + calc.result + " <small>(" + calc.timestamp + ")</small>" +
                    "</div>";
            }
            document.getElementById("history").innerHTML = historyHTML;
        }
    <\/script>
</body>
</html>`,jsCode:`function calculate() {
    try {
        let num1 = parseFloat(document.getElementById("num1").value);
        let num2 = parseFloat(document.getElementById("num2").value);
        let operation = document.getElementById("operation").value;
        
        // Validate inputs
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error("Please enter valid numbers");
        }
        
        let result;
        switch (operation) {
            case "+":
                result = num1 + num2;
                break;
            case "/":
                if (num2 === 0) {
                    throw new Error("Cannot divide by zero!");
                }
                result = num1 / num2;
                break;
            // ... other cases
        }
        
        // Success handling...
        
    } catch (error) {
        // Handle errors gracefully
        document.getElementById("result").innerHTML = 
            "<div style='color: red;'>Error: " + error.message + "</div>";
    }
}`,explanation:"Error handling prevents your app from crashing. try/catch blocks let you handle errors gracefully, and you can throw custom errors when something goes wrong.",keyPoints:["try/catch blocks handle errors gracefully","throw new Error() creates custom error messages","parseFloat() converts strings to numbers","isNaN() checks if something is 'Not a Number'","switch statements handle multiple conditions","Always validate user input"],nextConcept:"Let's work with modern JavaScript features"},{id:7,title:"Modern JavaScript - ES6+ Features",description:"Use modern JavaScript syntax for cleaner, more powerful code",level:"advanced",htmlCode:`<!DOCTYPE html>
<html>
<body>
    <h1>Modern JavaScript Todo App</h1>
    <input type="text" id="todoInput" placeholder="Enter a new task">
    <button onclick="addTodo()">Add Task</button>
    <div id="todoStats"></div>
    <div id="todoList"></div>
    
    <script>
        class TodoApp {
            constructor() {
                this.todos = [
                    { id: 1, text: "Learn JavaScript basics", completed: true, priority: "high" },
                    { id: 2, text: "Build a web app", completed: false, priority: "medium" },
                    { id: 3, text: "Master ES6+ features", completed: false, priority: "high" }
                ];
                this.nextId = 4;
            }
            
            addTodo(text, priority = "medium") {
                if (!text.trim()) return false;
                
                const newTodo = {
                    id: this.nextId++,
                    text: text.trim(),
                    completed: false,
                    priority,
                    createdAt: new Date()
                };
                
                this.todos.push(newTodo);
                return true;
            }
            
            toggleTodo(id) {
                const todo = this.todos.find(t => t.id === id);
                if (todo) {
                    todo.completed = !todo.completed;
                }
            }
            
            deleteTodo(id) {
                this.todos = this.todos.filter(t => t.id !== id);
            }
            
            getStats() {
                const total = this.todos.length;
                const completed = this.todos.filter(t => t.completed).length;
                const highPriority = this.todos.filter(t => t.priority === "high" && !t.completed).length;
                
                return { total, completed, remaining: total - completed, highPriority };
            }
            
            renderTodos() {
                const todosByPriority = {
                    high: this.todos.filter(t => t.priority === "high"),
                    medium: this.todos.filter(t => t.priority === "medium"),
                    low: this.todos.filter(t => t.priority === "low")
                };
                
                let html = "";
                
                ["high", "medium", "low"].forEach(priority => {
                    if (todosByPriority[priority].length > 0) {
                        html += \`<h3 style="color: \${priority === 'high' ? 'red' : priority === 'medium' ? 'orange' : 'green'}">
                            \${priority.toUpperCase()} Priority
                        </h3>\`;
                        
                        todosByPriority[priority].forEach(todo => {
                            const { id, text, completed } = todo; // Destructuring
                            html += \`
                                <div style="margin: 10px 0; padding: 10px; border: 1px solid #ddd; 
                                           background: \${completed ? '#e8f5e8' : '#fff'}">
                                    <input type="checkbox" \${completed ? 'checked' : ''} 
                                           onchange="todoApp.toggleTodo(\${id}); todoApp.render()">
                                    <span style="text-decoration: \${completed ? 'line-through' : 'none'}; margin: 0 10px;">
                                        \${text}
                                    </span>
                                    <button onclick="todoApp.deleteTodo(\${id}); todoApp.render()" 
                                            style="background: red; color: white; border: none; padding: 5px 10px;">
                                        Delete
                                    </button>
                                </div>
                            \`;
                        });
                    }
                });
                
                return html;
            }
            
            render() {
                const stats = this.getStats();
                
                document.getElementById("todoStats").innerHTML = \`
                    <div style="background: #f0f0f0; padding: 15px; margin: 10px 0; border-radius: 5px;">
                        <strong>Stats:</strong> 
                        \${stats.total} total, 
                        \${stats.completed} completed, 
                        \${stats.remaining} remaining
                        \${stats.highPriority > 0 ? \`, \${stats.highPriority} high priority pending\` : ''}
                    </div>
                \`;
                
                document.getElementById("todoList").innerHTML = this.renderTodos();
            }
        }
        
        // Create app instance
        const todoApp = new TodoApp();
        
        function addTodo() {
            const input = document.getElementById("todoInput");
            const text = input.value;
            
            if (todoApp.addTodo(text)) {
                input.value = "";
                todoApp.render();
            } else {
                alert("Please enter a valid task!");
            }
        }
        
        // Initial render
        todoApp.render();
        
        // Add enter key support
        document.getElementById("todoInput").addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                addTodo();
            }
        });
    <\/script>
</body>
</html>`,jsCode:`class TodoApp {
    constructor() {
        this.todos = [];
        this.nextId = 1;
    }
    
    addTodo(text, priority = "medium") {
        if (!text.trim()) return false;
        
        const newTodo = {
            id: this.nextId++,
            text: text.trim(),
            completed: false,
            priority,
            createdAt: new Date()
        };
        
        this.todos.push(newTodo);
        return true;
    }
    
    getStats() {
        const total = this.todos.length;
        const completed = this.todos.filter(t => t.completed).length;
        return { total, completed, remaining: total - completed };
    }
}

// Template literals with \${} for dynamic content
const html = \`<div>Total: \${stats.total}</div>\`;

// Arrow functions
const completed = this.todos.filter(t => t.completed);

// Destructuring
const { id, text, completed } = todo;`,explanation:"Modern JavaScript (ES6+) gives us powerful features like classes, template literals, arrow functions, and destructuring that make code cleaner and more maintainable.",keyPoints:["Classes organize code with constructor and methods","Template literals use backticks and ${} for dynamic content","Arrow functions: (param) => result","Destructuring extracts values: const {name, age} = person","Default parameters: function(param = defaultValue)","find() and filter() are powerful array methods"],nextConcept:"Let's work with APIs and asynchronous code"},{id:8,title:"Async JavaScript - Working with APIs",description:"Fetch data from APIs and handle asynchronous operations",level:"advanced",htmlCode:`<!DOCTYPE html>
<html>
<body>
    <h1>Weather App with API</h1>
    <div style="margin: 20px 0;">
        <input type="text" id="cityInput" placeholder="Enter city name" value="London">
        <button onclick="getWeather()">Get Weather</button>
        <button onclick="getRandomQuote()">Get Inspirational Quote</button>
    </div>
    
    <div id="loading" style="display: none; color: blue;">Loading...</div>
    <div id="weatherResult"></div>
    <div id="quoteResult"></div>
    <div id="errorMessage"></div>
    
    <script>
        // Simulate weather API (since we can't use real API keys in this demo)
        const mockWeatherData = {
            "london": { temp: 15, description: "Cloudy", humidity: 65, windSpeed: 12 },
            "paris": { temp: 18, description: "Sunny", humidity: 45, windSpeed: 8 },
            "tokyo": { temp: 22, description: "Rainy", humidity: 80, windSpeed: 15 },
            "newyork": { temp: 12, description: "Snowy", humidity: 70, windSpeed: 20 },
            "sydney": { temp: 25, description: "Sunny", humidity: 55, windSpeed: 10 }
        };
        
        const inspirationalQuotes = [
            { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
            { text: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
            { text: "Life is what happens to you while you're busy making other plans.", author: "John Lennon" },
            { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
            { text: "It is during our darkest moments that we must focus to see the light.", author: "Aristotle" }
        ];
        
        // Simulate API delay
        function delay(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
        
        // Simulate weather API call
        async function fetchWeatherData(city) {
            await delay(1000); // Simulate network delay
            
            const cityKey = city.toLowerCase().replace(/s+/g, '');
            const weatherData = mockWeatherData[cityKey];
            
            if (!weatherData) {
                throw new Error(\`Weather data not found for \${city}. Try: London, Paris, Tokyo, New York, or Sydney\`);
            }
            
            return {
                city: city,
                temperature: weatherData.temp,
                description: weatherData.description,
                humidity: weatherData.humidity,
                windSpeed: weatherData.windSpeed,
                timestamp: new Date().toLocaleString()
            };
        }
        
        // Simulate quote API call
        async function fetchRandomQuote() {
            await delay(800);
            const randomIndex = Math.floor(Math.random() * inspirationalQuotes.length);
            return inspirationalQuotes[randomIndex];
        }
        
        async function getWeather() {
            const city = document.getElementById("cityInput").value.trim();
            
            if (!city) {
                showError("Please enter a city name");
                return;
            }
            
            try {
                showLoading(true);
                clearMessages();
                
                const weatherData = await fetchWeatherData(city);
                
                displayWeather(weatherData);
                
            } catch (error) {
                showError(error.message);
            } finally {
                showLoading(false);
            }
        }
        
        async function getRandomQuote() {
            try {
                showLoading(true);
                clearMessages();
                
                const quote = await fetchRandomQuote();
                
                document.getElementById("quoteResult").innerHTML = \`
                    <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
                                color: white; padding: 20px; border-radius: 10px; margin: 15px 0;">
                        <h3>💡 Daily Inspiration</h3>
                        <p style="font-style: italic; font-size: 1.1em; margin: 10px 0;">
                            "\${quote.text}"
                        </p>
                        <p style="text-align: right; font-weight: bold;">
                            - \${quote.author}
                        </p>
                    </div>
                \`;
                
            } catch (error) {
                showError("Failed to fetch quote: " + error.message);
            } finally {
                showLoading(false);
            }
        }
        
        function displayWeather(data) {
            const tempColor = data.temperature > 20 ? '#ff6b6b' : data.temperature > 10 ? '#feca57' : '#48dbfb';
            
            document.getElementById("weatherResult").innerHTML = \`
                <div style="background: linear-gradient(135deg, #74b9ff 0%, #0984e3 100%); 
                            color: white; padding: 20px; border-radius: 10px; margin: 15px 0;">
                    <h3>🌤️ Weather in \${data.city}</h3>
                    <div style="display: flex; justify-content: space-between; flex-wrap: wrap;">
                        <div>
                            <p style="font-size: 2em; margin: 10px 0;">
                                <span style="color: \${tempColor};">\${data.temperature}°C</span>
                            </p>
                            <p style="font-size: 1.2em;">\${data.description}</p>
                        </div>
                        <div style="text-align: right;">
                            <p>💧 Humidity: \${data.humidity}%</p>
                            <p>💨 Wind: \${data.windSpeed} km/h</p>
                            <p style="font-size: 0.9em; opacity: 0.8;">
                                Updated: \${data.timestamp}
                            </p>
                        </div>
                    </div>
                </div>
            \`;
        }
        
        function showLoading(show) {
            document.getElementById("loading").style.display = show ? "block" : "none";
        }
        
        function showError(message) {
            document.getElementById("errorMessage").innerHTML = \`
                <div style="background: #ff7675; color: white; padding: 15px; 
                            border-radius: 5px; margin: 10px 0;">
                    ❌ \${message}
                </div>
            \`;
        }
        
        function clearMessages() {
            document.getElementById("errorMessage").innerHTML = "";
            document.getElementById("weatherResult").innerHTML = "";
            document.getElementById("quoteResult").innerHTML = "";
        }
        
        // Add enter key support
        document.getElementById("cityInput").addEventListener("keypress", async (e) => {
            if (e.key === "Enter") {
                await getWeather();
            }
        });
        
        // Load initial weather
        window.addEventListener("load", () => {
            getWeather();
        });
    <\/script>
</body>
</html>`,jsCode:`// Async function with try/catch
async function getWeather() {
    try {
        showLoading(true);
        
        // await pauses execution until Promise resolves
        const weatherData = await fetchWeatherData(city);
        
        displayWeather(weatherData);
        
    } catch (error) {
        showError(error.message);
    } finally {
        // finally always runs
        showLoading(false);
    }
}

// Promise-based function
function fetchWeatherData(city) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (city === "error") {
                reject(new Error("City not found"));
            } else {
                resolve({ temp: 20, description: "Sunny" });
            }
        }, 1000);
    });
}

// Alternative: using .then() and .catch()
fetchWeatherData("London")
    .then(data => displayWeather(data))
    .catch(error => showError(error.message));`,explanation:"Asynchronous JavaScript lets us handle operations that take time (like API calls) without blocking the user interface. async/await makes asynchronous code look like synchronous code.",keyPoints:["async functions can use await to pause execution","await only works inside async functions","try/catch handles errors in async code","finally block always runs after try/catch","Promises represent future values","setTimeout simulates network delays"],nextConcept:"Let's build advanced interactive features"},{id:9,title:"Advanced DOM Manipulation",description:"Create dynamic, interactive user interfaces with advanced DOM techniques",level:"expert",htmlCode:`<!DOCTYPE html>
<html>
<head>
    <style>
        .draggable {
            cursor: move;
            user-select: none;
            transition: transform 0.2s ease;
        }
        .dragging {
            transform: rotate(5deg) scale(1.05);
            opacity: 0.8;
            z-index: 1000;
        }
        .drop-zone {
            min-height: 100px;
            border: 2px dashed #ccc;
            border-radius: 8px;
            padding: 20px;
            margin: 10px 0;
            transition: all 0.3s ease;
        }
        .drop-zone.drag-over {
            border-color: #007bff;
            background-color: #f0f8ff;
        }
        .task-item {
            background: white;
            border: 1px solid #ddd;
            border-radius: 8px;
            padding: 15px;
            margin: 10px 0;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .priority-high { border-left: 5px solid #ff4757; }
        .priority-medium { border-left: 5px solid #ffa502; }
        .priority-low { border-left: 5px solid #2ed573; }
    </style>
</head>
<body>
    <h1>🚀 Advanced Task Management System</h1>
    
    <div style="margin: 20px 0;">
        <input type="text" id="taskInput" placeholder="Enter new task" style="padding: 10px; width: 300px;">
        <select id="prioritySelect" style="padding: 10px;">
            <option value="high">High Priority</option>
            <option value="medium" selected>Medium Priority</option>
            <option value="low">Low Priority</option>
        </select>
        <button onclick="addTask()" style="padding: 10px 20px;">Add Task</button>
    </div>
    
    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px;">
        <div>
            <h3>📋 To Do</h3>
            <div id="todo-zone" class="drop-zone" data-status="todo">
                <p style="color: #666; text-align: center;">Drop tasks here</p>
            </div>
        </div>
        
        <div>
            <h3>⚡ In Progress</h3>
            <div id="progress-zone" class="drop-zone" data-status="progress">
                <p style="color: #666; text-align: center;">Drop tasks here</p>
            </div>
        </div>
        
        <div>
            <h3>✅ Completed</h3>
            <div id="completed-zone" class="drop-zone" data-status="completed">
                <p style="color: #666; text-align: center;">Drop tasks here</p>
            </div>
        </div>
    </div>
    
    <div id="taskStats" style="margin: 20px 0; padding: 15px; background: #f8f9fa; border-radius: 8px;"></div>
    
    <script>
        class AdvancedTaskManager {
            constructor() {
                this.tasks = [
                    { id: 1, text: "Learn JavaScript fundamentals", priority: "high", status: "completed", createdAt: new Date(Date.now() - 86400000) },
                    { id: 2, text: "Build interactive web app", priority: "high", status: "progress", createdAt: new Date(Date.now() - 3600000) },
                    { id: 3, text: "Master async programming", priority: "medium", status: "todo", createdAt: new Date() }
                ];
                this.nextId = 4;
                this.draggedElement = null;
                this.setupEventListeners();
                this.render();
            }
            
            setupEventListeners() {
                // Global drag and drop event listeners
                document.addEventListener('dragstart', (e) => this.handleDragStart(e));
                document.addEventListener('dragend', (e) => this.handleDragEnd(e));
                document.addEventListener('dragover', (e) => this.handleDragOver(e));
                document.addEventListener('drop', (e) => this.handleDrop(e));
                document.addEventListener('dragenter', (e) => this.handleDragEnter(e));
                document.addEventListener('dragleave', (e) => this.handleDragLeave(e));
                
                // Keyboard shortcuts
                document.addEventListener('keydown', (e) => {
                    if (e.ctrlKey && e.key === 'Enter') {
                        addTask();
                    }
                });
                
                // Auto-save to localStorage
                window.addEventListener('beforeunload', () => {
                    localStorage.setItem('tasks', JSON.stringify(this.tasks));
                });
                
                // Load from localStorage
                const savedTasks = localStorage.getItem('tasks');
                if (savedTasks) {
                    try {
                        this.tasks = JSON.parse(savedTasks);
                        this.nextId = Math.max(...this.tasks.map(t => t.id)) + 1;
                    } catch (e) {
                        console.error('Failed to load saved tasks:', e);
                    }
                }
            }
            
            addTask(text, priority = 'medium') {
                if (!text || !text.trim()) return false;
                
                const newTask = {
                    id: this.nextId++,
                    text: text.trim(),
                    priority,
                    status: 'todo',
                    createdAt: new Date()
                };
                
                this.tasks.push(newTask);
                this.render();
                return true;
            }
            
            updateTaskStatus(taskId, newStatus) {
                const task = this.tasks.find(t => t.id === taskId);
                if (task) {
                    task.status = newStatus;
                    if (newStatus === 'completed') {
                        task.completedAt = new Date();
                    }
                    this.render();
                }
            }
            
            deleteTask(taskId) {
                this.tasks = this.tasks.filter(t => t.id !== taskId);
                this.render();
            }
            
            handleDragStart(e) {
                if (e.target.classList.contains('draggable')) {
                    this.draggedElement = e.target;
                    e.target.classList.add('dragging');
                    e.dataTransfer.effectAllowed = 'move';
                    e.dataTransfer.setData('text/html', e.target.outerHTML);
                }
            }
            
            handleDragEnd(e) {
                if (e.target.classList.contains('draggable')) {
                    e.target.classList.remove('dragging');
                    this.draggedElement = null;
                }
            }
            
            handleDragOver(e) {
                e.preventDefault();
                e.dataTransfer.dropEffect = 'move';
            }
            
            handleDragEnter(e) {
                if (e.target.classList.contains('drop-zone')) {
                    e.target.classList.add('drag-over');
                }
            }
            
            handleDragLeave(e) {
                if (e.target.classList.contains('drop-zone')) {
                    e.target.classList.remove('drag-over');
                }
            }
            
            handleDrop(e) {
                e.preventDefault();
                
                const dropZone = e.target.closest('.drop-zone');
                if (dropZone && this.draggedElement) {
                    dropZone.classList.remove('drag-over');
                    
                    const taskId = parseInt(this.draggedElement.dataset.taskId);
                    const newStatus = dropZone.dataset.status;
                    
                    this.updateTaskStatus(taskId, newStatus);
                }
            }
            
            getTasksByStatus(status) {
                return this.tasks.filter(t => t.status === status);
            }
            
            getStats() {
                const total = this.tasks.length;
                const completed = this.tasks.filter(t => t.status === 'completed').length;
                const inProgress = this.tasks.filter(t => t.status === 'progress').length;
                const todo = this.tasks.filter(t => t.status === 'todo').length;
                const highPriority = this.tasks.filter(t => t.priority === 'high' && t.status !== 'completed').length;
                
                return { total, completed, inProgress, todo, highPriority };
            }
            
            renderTask(task) {
                const timeAgo = this.getTimeAgo(task.createdAt);
                
                return \`
                    <div class="task-item draggable priority-\${task.priority}" 
                         draggable="true" 
                         data-task-id="\${task.id}">
                        <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                            <div style="flex: 1;">
                                <p style="margin: 0 0 8px 0; font-weight: 500;">\${task.text}</p>
                                <div style="display: flex; gap: 10px; font-size: 0.85em; color: #666;">
                                    <span class="priority-badge priority-\${task.priority}">
                                        \${task.priority.toUpperCase()}
                                    </span>
                                    <span>📅 \${timeAgo}</span>
                                    \${task.completedAt ? \`<span>✅ \${this.getTimeAgo(task.completedAt)}</span>\` : ''}
                                </div>
                            </div>
                            <button onclick="taskManager.deleteTask(\${task.id})" 
                                    style="background: #ff4757; color: white; border: none; 
                                           border-radius: 4px; padding: 5px 8px; cursor: pointer;">
                                🗑️
                            </button>
                        </div>
                    </div>
                \`;
            }
            
            getTimeAgo(date) {
                const now = new Date();
                const diffMs = now - new Date(date);
                const diffMins = Math.floor(diffMs / 60000);
                const diffHours = Math.floor(diffMs / 3600000);
                const diffDays = Math.floor(diffMs / 86400000);
                
                if (diffMins < 1) return 'Just now';
                if (diffMins < 60) return \`\${diffMins}m ago\`;
                if (diffHours < 24) return \`\${diffHours}h ago\`;
                return \`\${diffDays}d ago\`;
            }
            
            render() {
                // Render tasks in each zone
                ['todo', 'progress', 'completed'].forEach(status => {
                    const zone = document.getElementById(\`\${status}-zone\`);
                    const tasks = this.getTasksByStatus(status);
                    
                    if (tasks.length === 0) {
                        zone.innerHTML = \`<p style="color: #666; text-align: center;">Drop tasks here</p>\`;
                    } else {
                        zone.innerHTML = tasks.map(task => this.renderTask(task)).join('');
                    }
                });
                
                // Render stats
                const stats = this.getStats();
                document.getElementById('taskStats').innerHTML = \`
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px;">
                        <div style="text-align: center;">
                            <div style="font-size: 2em; font-weight: bold; color: #007bff;">\${stats.total}</div>
                            <div>Total Tasks</div>
                        </div>
                        <div style="text-align: center;">
                            <div style="font-size: 2em; font-weight: bold; color: #28a745;">\${stats.completed}</div>
                            <div>Completed</div>
                        </div>
                        <div style="text-align: center;">
                            <div style="font-size: 2em; font-weight: bold; color: #ffc107;">\${stats.inProgress}</div>
                            <div>In Progress</div>
                        </div>
                        <div style="text-align: center;">
                            <div style="font-size: 2em; font-weight: bold; color: #6c757d;">\${stats.todo}</div>
                            <div>To Do</div>
                        </div>
                        \${stats.highPriority > 0 ? \`
                        <div style="text-align: center;">
                            <div style="font-size: 2em; font-weight: bold; color: #dc3545;">\${stats.highPriority}</div>
                            <div>High Priority</div>
                        </div>
                        \` : ''}
                    </div>
                \`;
            }
        }
        
        // Initialize the task manager
        const taskManager = new AdvancedTaskManager();
        
        function addTask() {
            const input = document.getElementById('taskInput');
            const priority = document.getElementById('prioritySelect').value;
            const text = input.value.trim();
            
            if (taskManager.addTask(text, priority)) {
                input.value = '';
                input.focus();
            } else {
                alert('Please enter a valid task!');
            }
        }
        
        // Add enter key support
        document.getElementById('taskInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                addTask();
            }
        });
    <\/script>
</body>
</html>`,jsCode:`class AdvancedTaskManager {
    constructor() {
        this.tasks = [];
        this.draggedElement = null;
        this.setupEventListeners();
    }
    
    setupEventListeners() {
        // Drag and drop
        document.addEventListener('dragstart', (e) => this.handleDragStart(e));
        document.addEventListener('drop', (e) => this.handleDrop(e));
        
        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.key === 'Enter') {
                addTask();
            }
        });
        
        // Auto-save
        window.addEventListener('beforeunload', () => {
            localStorage.setItem('tasks', JSON.stringify(this.tasks));
        });
    }
    
    handleDragStart(e) {
        if (e.target.classList.contains('draggable')) {
            this.draggedElement = e.target;
            e.dataTransfer.effectAllowed = 'move';
        }
    }
    
    handleDrop(e) {
        e.preventDefault();
        const dropZone = e.target.closest('.drop-zone');
        if (dropZone && this.draggedElement) {
            const taskId = parseInt(this.draggedElement.dataset.taskId);
            const newStatus = dropZone.dataset.status;
            this.updateTaskStatus(taskId, newStatus);
        }
    }
}`,explanation:"Advanced DOM manipulation combines multiple concepts: drag & drop, event delegation, local storage, keyboard shortcuts, and complex state management to create rich, interactive experiences.",keyPoints:["Event delegation handles events on dynamically created elements","Drag & drop API provides native drag/drop functionality","localStorage persists data between sessions","Event listeners can be added globally for efficiency","CSS classes can be toggled for visual feedback","Data attributes store custom data on elements"],nextConcept:"Congratulations! You've mastered JavaScript fundamentals!"},{id:10,title:"🎉 Congratulations - You're a JavaScript Expert!",description:"You've completed the journey from beginner to expert. Here's what you've learned and what's next.",level:"expert",htmlCode:`<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            margin: 0;
            padding: 20px;
            min-height: 100vh;
        }
        .achievement-card {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border-radius: 15px;
            padding: 20px;
            margin: 15px 0;
            border: 1px solid rgba(255, 255, 255, 0.2);
            transition: transform 0.3s ease;
        }
        .achievement-card:hover {
            transform: translateY(-5px);
        }
        .skill-progress {
            background: rgba(255, 255, 255, 0.2);
            border-radius: 10px;
            height: 20px;
            margin: 10px 0;
            overflow: hidden;
        }
        .skill-fill {
            height: 100%;
            background: linear-gradient(90deg, #00d2ff 0%, #3a7bd5 100%);
            border-radius: 10px;
            transition: width 2s ease;
        }
        .celebration {
            text-align: center;
            animation: bounce 2s infinite;
        }
        @keyframes bounce {
            0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
            40% { transform: translateY(-30px); }
            60% { transform: translateY(-15px); }
        }
        .next-steps {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
            margin: 30px 0;
        }
    </style>
</head>
<body>
    <div class="celebration">
        <h1 style="font-size: 3em; margin: 20px 0;">🎉 Congratulations! 🎉</h1>
        <h2>You've Mastered JavaScript!</h2>
    </div>
    
    <div class="achievement-card">
        <h3>🏆 Your Learning Journey</h3>
        <p>You've successfully completed all 9 progressive lessons, building your skills from absolute beginner to JavaScript expert!</p>
    </div>
    
    <div class="achievement-card">
        <h3>📊 Skills Mastered</h3>
        <div id="skillsContainer"></div>
    </div>
    
    <div class="achievement-card">
        <h3>🚀 What You Can Build Now</h3>
        <div class="next-steps">
            <div>
                <h4>🌐 Web Applications</h4>
                <ul>
                    <li>Interactive dashboards</li>
                    <li>Real-time chat apps</li>
                    <li>E-commerce sites</li>
                    <li>Social media platforms</li>
                </ul>
            </div>
            <div>
                <h4>📱 Mobile Apps</h4>
                <ul>
                    <li>React Native apps</li>
                    <li>Progressive Web Apps</li>
                    <li>Hybrid mobile apps</li>
                    <li>Cross-platform solutions</li>
                </ul>
            </div>
            <div>
                <h4>🖥️ Desktop Applications</h4>
                <ul>
                    <li>Electron apps</li>
                    <li>Node.js tools</li>
                    <li>Development utilities</li>
                    <li>System automation</li>
                </ul>
            </div>
        </div>
    </div>
    
    <div class="achievement-card">
        <h3>📚 Recommended Next Steps</h3>
        <div class="next-steps">
            <div>
                <h4>🔧 Frameworks & Libraries</h4>
                <ul>
                    <li><strong>React</strong> - Build user interfaces</li>
                    <li><strong>Vue.js</strong> - Progressive framework</li>
                    <li><strong>Node.js</strong> - Server-side JavaScript</li>
                    <li><strong>Express.js</strong> - Web application framework</li>
                </ul>
            </div>
            <div>
                <h4>🗄️ Databases & APIs</h4>
                <ul>
                    <li><strong>MongoDB</strong> - NoSQL database</li>
                    <li><strong>REST APIs</strong> - Web services</li>
                    <li><strong>GraphQL</strong> - Query language</li>
                    <li><strong>Firebase</strong> - Backend as a service</li>
                </ul>
            </div>
            <div>
                <h4>🛠️ Development Tools</h4>
                <ul>
                    <li><strong>Git</strong> - Version control</li>
                    <li><strong>Webpack</strong> - Module bundler</li>
                    <li><strong>Jest</strong> - Testing framework</li>
                    <li><strong>TypeScript</strong> - Typed JavaScript</li>
                </ul>
            </div>
        </div>
    </div>
    
    <div class="achievement-card">
        <h3>💡 Keep Learning Tips</h3>
        <ul>
            <li><strong>Build Projects:</strong> Apply what you've learned by building real applications</li>
            <li><strong>Read Code:</strong> Study open-source projects on GitHub</li>
            <li><strong>Join Communities:</strong> Participate in developer forums and Discord servers</li>
            <li><strong>Stay Updated:</strong> Follow JavaScript news and new features</li>
            <li><strong>Practice Daily:</strong> Code a little bit every day to maintain your skills</li>
            <li><strong>Teach Others:</strong> Explaining concepts helps solidify your understanding</li>
        </ul>
    </div>
    
    <div class="achievement-card" style="text-align: center;">
        <h3>🌟 You're Ready to Change the World with Code!</h3>
        <p style="font-size: 1.2em;">The skills you've learned are the foundation for creating amazing digital experiences. Go build something incredible!</p>
        <button onclick="restartJourney()" style="background: linear-gradient(45deg, #ff6b6b, #ee5a24); 
                color: white; border: none; padding: 15px 30px; border-radius: 25px; 
                font-size: 1.1em; cursor: pointer; margin: 20px;">
            🔄 Restart Learning Journey
        </button>
    </div>
    
    <script>
        const skills = [
            { name: "JavaScript Basics", level: 100 },
            { name: "Variables & Data Types", level: 100 },
            { name: "Functions & Control Flow", level: 100 },
            { name: "Arrays & Objects", level: 100 },
            { name: "Error Handling", level: 100 },
            { name: "Modern ES6+ Features", level: 100 },
            { name: "Async Programming", level: 100 },
            { name: "DOM Manipulation", level: 100 },
            { name: "Event Handling", level: 100 },
            { name: "API Integration", level: 100 }
        ];
        
        function renderSkills() {
            const container = document.getElementById('skillsContainer');
            
            skills.forEach((skill, index) => {
                setTimeout(() => {
                    const skillElement = document.createElement('div');
                    skillElement.innerHTML = \`
                        <div style="margin: 15px 0;">
                            <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                                <span>\${skill.name}</span>
                                <span>\${skill.level}%</span>
                            </div>
                            <div class="skill-progress">
                                <div class="skill-fill" style="width: \${skill.level}%"></div>
                            </div>
                        </div>
                    \`;
                    container.appendChild(skillElement);
                }, index * 200);
            });
        }
        
        function restartJourney() {
            if (confirm("Are you sure you want to restart your learning journey? This will take you back to lesson 1.")) {
                // In a real app, this would reset the progress
                alert("🚀 Great! Starting over is a fantastic way to reinforce your learning. In a real app, this would reset your progress.");
            }
        }
        
        // Animate skills on load
        window.addEventListener('load', () => {
            setTimeout(renderSkills, 1000);
        });
        
        // Add some celebration effects
        function createConfetti() {
            const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3'];
            
            for (let i = 0; i < 50; i++) {
                setTimeout(() => {
                    const confetti = document.createElement('div');
                    confetti.style.cssText = \`
                        position: fixed;
                        top: -10px;
                        left: \${Math.random() * 100}%;
                        width: 10px;
                        height: 10px;
                        background: \${colors[Math.floor(Math.random() * colors.length)]};
                        pointer-events: none;
                        animation: fall \${Math.random() * 3 + 2}s linear forwards;
                        z-index: 1000;
                    \`;
                    
                    document.body.appendChild(confetti);
                    
                    setTimeout(() => confetti.remove(), 5000);
                }, i * 100);
            }
        }
        
        // Add CSS for confetti animation
        const style = document.createElement('style');
        style.textContent = \`
            @keyframes fall {
                to {
                    transform: translateY(100vh) rotate(360deg);
                }
            }
        \`;
        document.head.appendChild(style);
        
        // Start confetti after page loads
        setTimeout(createConfetti, 2000);
        
        // Add periodic confetti
        setInterval(createConfetti, 10000);
    <\/script>
</body>
</html>`,jsCode:`// 🎉 Congratulations! Here's a summary of what you've mastered:

// 1. JavaScript Fundamentals
console.log("Hello, World!");
let message = "You did it!";

// 2. Variables and Data Types
const name = "JavaScript Expert";
let score = 100;
let isComplete = true;

// 3. Functions and Control Flow
function celebrate(achievement) {
    if (achievement === "JavaScript Master") {
        return "🎉 Congratulations! 🎉";
    }
    return "Keep learning!";
}

// 4. Arrays and Objects
const skills = ["Variables", "Functions", "Objects", "Async", "DOM"];
const developer = {
    name: "You",
    level: "Expert",
    skills: skills,
    canBuild: ["Web Apps", "Mobile Apps", "APIs", "Games"]
};

// 5. Modern JavaScript (ES6+)
const buildApp = (type) => \`Building \${type} app...\`;
const { name: devName, level } = developer;
const allSkills = [...skills, "React", "Node.js"];

// 6. Async Programming
async function fetchData() {
    try {
        const response = await fetch('/api/data');
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
    }
}

// 7. Advanced DOM Manipulation
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.interactive');
    elements.forEach(el => {
        el.addEventListener('click', handleClick);
    });
});

// 🚀 You're now ready to build amazing things!`,explanation:"🎉 Congratulations! You've completed your JavaScript journey from beginner to expert. You now have all the fundamental skills needed to build modern web applications, mobile apps, and more!",keyPoints:["You've mastered all core JavaScript concepts","You can build interactive web applications","You understand modern JavaScript (ES6+) features","You can work with APIs and async programming","You have the foundation for learning frameworks like React","You're ready to start building real projects!"]}];function Bf(){const[e,t]=Fe.useState(0),[n,r]=Fe.useState(!1),[l,o]=Fe.useState([]),i=Pe[e],s=()=>{e<Pe.length-1&&(o(m=>[...m,e]),t(m=>m+1),r(!1))},a=()=>{e>0&&(t(m=>m-1),r(!1))},c=m=>{switch(m){case"beginner":return"bg-green-500";case"intermediate":return"bg-yellow-500";case"advanced":return"bg-orange-500";case"expert":return"bg-red-500";default:return"bg-gray-500"}},h=m=>{switch(m){case"beginner":return g.jsx(Af,{className:"w-5 h-5"});case"intermediate":return g.jsx(Ys,{className:"w-5 h-5"});case"advanced":return g.jsx(Hf,{className:"w-5 h-5"});case"expert":return g.jsx($f,{className:"w-5 h-5"});default:return g.jsx(Ff,{className:"w-5 h-5"})}};return Fe.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[e]),g.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50",children:[g.jsx("div",{className:"bg-white shadow-lg border-b-4 border-indigo-500",children:g.jsxs("div",{className:"max-w-6xl mx-auto px-6 py-4",children:[g.jsxs("div",{className:"flex items-center justify-between",children:[g.jsxs("div",{className:"flex items-center space-x-4",children:[g.jsx("div",{className:"bg-indigo-600 p-3 rounded-xl",children:g.jsx(Ys,{className:"w-8 h-8 text-white"})}),g.jsxs("div",{children:[g.jsx("h1",{className:"text-2xl font-bold text-gray-800",children:"JavaScript Journey"}),g.jsx("p",{className:"text-gray-600",children:"From Beginner to Expert"})]})]}),g.jsxs("div",{className:"flex items-center space-x-4",children:[g.jsxs("div",{className:`px-4 py-2 rounded-full text-white text-sm font-medium flex items-center space-x-2 ${c(i.level)}`,children:[h(i.level),g.jsx("span",{className:"capitalize",children:i.level})]}),g.jsxs("div",{className:"text-sm text-gray-600",children:["Lesson ",e+1," of ",Pe.length]})]})]}),g.jsxs("div",{className:"mt-4",children:[g.jsxs("div",{className:"flex justify-between text-sm text-gray-600 mb-2",children:[g.jsx("span",{children:"Progress"}),g.jsxs("span",{children:[Math.round((e+1)/Pe.length*100),"%"]})]}),g.jsx("div",{className:"w-full bg-gray-200 rounded-full h-3",children:g.jsx("div",{className:"bg-gradient-to-r from-indigo-500 to-purple-600 h-3 rounded-full transition-all duration-500 ease-out",style:{width:`${(e+1)/Pe.length*100}%`}})})]})]})}),g.jsx("div",{className:"max-w-6xl mx-auto px-6 py-8",children:g.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-8",children:[g.jsx("div",{className:"lg:col-span-2",children:g.jsxs("div",{className:"bg-white rounded-2xl shadow-xl overflow-hidden",children:[g.jsxs("div",{className:"bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-white",children:[g.jsx("h2",{className:"text-3xl font-bold mb-2",children:i.title}),g.jsx("p",{className:"text-indigo-100 text-lg",children:i.description})]}),g.jsxs("div",{className:"p-6",children:[g.jsx("div",{className:"prose max-w-none mb-6",children:g.jsx("p",{className:"text-gray-700 text-lg leading-relaxed",children:i.explanation})}),g.jsxs("div",{className:"bg-blue-50 rounded-xl p-6 mb-6",children:[g.jsxs("h3",{className:"text-xl font-semibold text-blue-900 mb-4 flex items-center",children:[g.jsx(Vs,{className:"w-6 h-6 mr-2"}),"Key Learning Points"]}),g.jsx("ul",{className:"space-y-2",children:i.keyPoints.map((m,p)=>g.jsxs("li",{className:"flex items-start text-blue-800",children:[g.jsx("div",{className:"w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"}),g.jsx("span",{children:m})]},p))})]}),g.jsx("div",{className:"flex space-x-4 mb-6",children:g.jsxs("button",{onClick:()=>r(!n),className:"flex items-center space-x-2 bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors",children:[g.jsx(Of,{className:"w-5 h-5"}),g.jsx("span",{children:n?"Hide Code":"Show Code"})]})}),n&&g.jsxs("div",{className:"space-y-6",children:[g.jsxs("div",{children:[g.jsx("h4",{className:"text-lg font-semibold text-gray-800 mb-3",children:"Complete HTML Example:"}),g.jsxs("div",{className:"bg-gray-900 rounded-lg overflow-hidden",children:[g.jsx("div",{className:"bg-gray-800 px-4 py-2 text-gray-300 text-sm font-medium",children:"HTML + JavaScript"}),g.jsx("pre",{className:"p-4 text-sm text-gray-300 overflow-x-auto",children:g.jsx("code",{children:i.htmlCode})})]})]}),g.jsxs("div",{children:[g.jsx("h4",{className:"text-lg font-semibold text-gray-800 mb-3",children:"JavaScript Focus:"}),g.jsxs("div",{className:"bg-gray-900 rounded-lg overflow-hidden",children:[g.jsx("div",{className:"bg-gray-800 px-4 py-2 text-gray-300 text-sm font-medium",children:"JavaScript"}),g.jsx("pre",{className:"p-4 text-sm text-gray-300 overflow-x-auto",children:g.jsx("code",{children:i.jsCode})})]})]})]}),i.nextConcept&&g.jsxs("div",{className:"bg-green-50 rounded-xl p-6 mt-6",children:[g.jsx("h3",{className:"text-lg font-semibold text-green-900 mb-2",children:"Coming Up Next:"}),g.jsx("p",{className:"text-green-800",children:i.nextConcept})]})]})]})}),g.jsxs("div",{className:"space-y-6",children:[g.jsxs("div",{className:"bg-white rounded-2xl shadow-xl p-6",children:[g.jsx("h3",{className:"text-xl font-semibold text-gray-800 mb-4",children:"Navigation"}),g.jsxs("div",{className:"space-y-3",children:[g.jsxs("button",{onClick:a,disabled:e===0,className:"w-full flex items-center justify-center space-x-2 bg-gray-100 text-gray-700 px-4 py-3 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",children:[g.jsx(Qs,{className:"w-5 h-5 rotate-180"}),g.jsx("span",{children:"Previous Lesson"})]}),g.jsxs("button",{onClick:s,disabled:e===Pe.length-1,className:"w-full flex items-center justify-center space-x-2 bg-indigo-600 text-white px-4 py-3 rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",children:[g.jsx("span",{children:e===Pe.length-1?"Journey Complete!":"Next Lesson"}),e!==Pe.length-1&&g.jsx(Qs,{className:"w-5 h-5"})]})]})]}),g.jsxs("div",{className:"bg-white rounded-2xl shadow-xl p-6",children:[g.jsx("h3",{className:"text-xl font-semibold text-gray-800 mb-4",children:"All Lessons"}),g.jsx("div",{className:"space-y-2 max-h-96 overflow-y-auto",children:Pe.map((m,p)=>g.jsx("div",{className:`p-3 rounded-lg cursor-pointer transition-colors ${p===e?"bg-indigo-100 border-2 border-indigo-500":l.includes(p)?"bg-green-50 border border-green-200":"bg-gray-50 border border-gray-200 hover:bg-gray-100"}`,onClick:()=>{t(p),r(!1)},children:g.jsxs("div",{className:"flex items-center space-x-3",children:[g.jsx("div",{className:`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${p===e?"bg-indigo-500 text-white":l.includes(p)?"bg-green-500 text-white":"bg-gray-300 text-gray-600"}`,children:l.includes(p)?g.jsx(Vs,{className:"w-5 h-5"}):p+1}),g.jsxs("div",{className:"flex-1 min-w-0",children:[g.jsx("p",{className:`text-sm font-medium truncate ${p===e?"text-indigo-900":"text-gray-900"}`,children:m.title}),g.jsx("p",{className:`text-xs truncate ${p===e?"text-indigo-600":"text-gray-500"}`,children:m.level})]})]})},m.id))})]}),g.jsxs("div",{className:"bg-white rounded-2xl shadow-xl p-6",children:[g.jsx("h3",{className:"text-xl font-semibold text-gray-800 mb-4",children:"Your Progress"}),g.jsxs("div",{className:"space-y-4",children:[g.jsxs("div",{className:"flex justify-between items-center",children:[g.jsx("span",{className:"text-gray-600",children:"Completed"}),g.jsxs("span",{className:"font-semibold text-green-600",children:[l.length,"/",Pe.length]})]}),g.jsxs("div",{className:"flex justify-between items-center",children:[g.jsx("span",{className:"text-gray-600",children:"Current Level"}),g.jsx("span",{className:`px-3 py-1 rounded-full text-xs font-medium text-white ${c(i.level)}`,children:i.level})]}),g.jsxs("div",{className:"flex justify-between items-center",children:[g.jsx("span",{className:"text-gray-600",children:"Mastery"}),g.jsxs("span",{className:"font-semibold text-indigo-600",children:[Math.round((l.length+1)/Pe.length*100),"%"]})]})]})]})]})]})})]})}oc(document.getElementById("root")).render(g.jsx(Fe.StrictMode,{children:g.jsx(Bf,{})}));
