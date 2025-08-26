function uS(n,e){for(var t=0;t<e.length;t++){const i=e[t];if(typeof i!="string"&&!Array.isArray(i)){for(const l in i)if(l!=="default"&&!(l in n)){const r=Object.getOwnPropertyDescriptor(i,l);r&&Object.defineProperty(n,l,r.get?r:{enumerable:!0,get:()=>i[l]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))i(l);new MutationObserver(l=>{for(const r of l)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(l){const r={};return l.integrity&&(r.integrity=l.integrity),l.referrerPolicy&&(r.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?r.credentials="include":l.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(l){if(l.ep)return;l.ep=!0;const r=t(l);fetch(l.href,r)}})();var bu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function df(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Vm={exports:{}},rs={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sS=Symbol.for("react.transitional.element"),oS=Symbol.for("react.fragment");function Km(n,e,t){var i=null;if(t!==void 0&&(i=""+t),e.key!==void 0&&(i=""+e.key),"key"in e){t={};for(var l in e)l!=="key"&&(t[l]=e[l])}else t=e;return e=t.ref,{$$typeof:sS,type:n,key:i,ref:e!==void 0?e:null,props:t}}rs.Fragment=oS;rs.jsx=Km;rs.jsxs=Km;Vm.exports=rs;var R=Vm.exports,Gm={exports:{}},G={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pf=Symbol.for("react.transitional.element"),cS=Symbol.for("react.portal"),fS=Symbol.for("react.fragment"),hS=Symbol.for("react.strict_mode"),dS=Symbol.for("react.profiler"),pS=Symbol.for("react.consumer"),mS=Symbol.for("react.context"),gS=Symbol.for("react.forward_ref"),yS=Symbol.for("react.suspense"),bS=Symbol.for("react.memo"),$m=Symbol.for("react.lazy"),ed=Symbol.iterator;function SS(n){return n===null||typeof n!="object"?null:(n=ed&&n[ed]||n["@@iterator"],typeof n=="function"?n:null)}var Qm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Xm=Object.assign,Fm={};function jl(n,e,t){this.props=n,this.context=e,this.refs=Fm,this.updater=t||Qm}jl.prototype.isReactComponent={};jl.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};jl.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function Zm(){}Zm.prototype=jl.prototype;function mf(n,e,t){this.props=n,this.context=e,this.refs=Fm,this.updater=t||Qm}var gf=mf.prototype=new Zm;gf.constructor=mf;Xm(gf,jl.prototype);gf.isPureReactComponent=!0;var td=Array.isArray,bn={H:null,A:null,T:null,S:null,V:null},Pm=Object.prototype.hasOwnProperty;function yf(n,e,t,i,l,r){return t=r.ref,{$$typeof:pf,type:n,key:e,ref:t!==void 0?t:null,props:r}}function vS(n,e){return yf(n.type,e,void 0,void 0,void 0,n.props)}function bf(n){return typeof n=="object"&&n!==null&&n.$$typeof===pf}function wS(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var id=/\/+/g;function Ks(n,e){return typeof n=="object"&&n!==null&&n.key!=null?wS(""+n.key):e.toString(36)}function ld(){}function kS(n){switch(n.status){case"fulfilled":return n.value;case"rejected":throw n.reason;default:switch(typeof n.status=="string"?n.then(ld,ld):(n.status="pending",n.then(function(e){n.status==="pending"&&(n.status="fulfilled",n.value=e)},function(e){n.status==="pending"&&(n.status="rejected",n.reason=e)})),n.status){case"fulfilled":return n.value;case"rejected":throw n.reason}}throw n}function Gi(n,e,t,i,l){var r=typeof n;(r==="undefined"||r==="boolean")&&(n=null);var a=!1;if(n===null)a=!0;else switch(r){case"bigint":case"string":case"number":a=!0;break;case"object":switch(n.$$typeof){case pf:case cS:a=!0;break;case $m:return a=n._init,Gi(a(n._payload),e,t,i,l)}}if(a)return l=l(n),a=i===""?"."+Ks(n,0):i,td(l)?(t="",a!=null&&(t=a.replace(id,"$&/")+"/"),Gi(l,e,t,"",function(o){return o})):l!=null&&(bf(l)&&(l=vS(l,t+(l.key==null||n&&n.key===l.key?"":(""+l.key).replace(id,"$&/")+"/")+a)),e.push(l)),1;a=0;var u=i===""?".":i+":";if(td(n))for(var s=0;s<n.length;s++)i=n[s],r=u+Ks(i,s),a+=Gi(i,e,t,r,l);else if(s=SS(n),typeof s=="function")for(n=s.call(n),s=0;!(i=n.next()).done;)i=i.value,r=u+Ks(i,s++),a+=Gi(i,e,t,r,l);else if(r==="object"){if(typeof n.then=="function")return Gi(kS(n),e,t,i,l);throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.")}return a}function _a(n,e,t){if(n==null)return n;var i=[],l=0;return Gi(n,i,"","",function(r){return e.call(t,r,l++)}),i}function xS(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var rd=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function ES(){}G.Children={map:_a,forEach:function(n,e,t){_a(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return _a(n,function(){e++}),e},toArray:function(n){return _a(n,function(e){return e})||[]},only:function(n){if(!bf(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};G.Component=jl;G.Fragment=fS;G.Profiler=dS;G.PureComponent=mf;G.StrictMode=hS;G.Suspense=yS;G.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=bn;G.__COMPILER_RUNTIME={__proto__:null,c:function(n){return bn.H.useMemoCache(n)}};G.cache=function(n){return function(){return n.apply(null,arguments)}};G.cloneElement=function(n,e,t){if(n==null)throw Error("The argument must be a React element, but you passed "+n+".");var i=Xm({},n.props),l=n.key,r=void 0;if(e!=null)for(a in e.ref!==void 0&&(r=void 0),e.key!==void 0&&(l=""+e.key),e)!Pm.call(e,a)||a==="key"||a==="__self"||a==="__source"||a==="ref"&&e.ref===void 0||(i[a]=e[a]);var a=arguments.length-2;if(a===1)i.children=t;else if(1<a){for(var u=Array(a),s=0;s<a;s++)u[s]=arguments[s+2];i.children=u}return yf(n.type,l,void 0,void 0,r,i)};G.createContext=function(n){return n={$$typeof:mS,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null},n.Provider=n,n.Consumer={$$typeof:pS,_context:n},n};G.createElement=function(n,e,t){var i,l={},r=null;if(e!=null)for(i in e.key!==void 0&&(r=""+e.key),e)Pm.call(e,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(l[i]=e[i]);var a=arguments.length-2;if(a===1)l.children=t;else if(1<a){for(var u=Array(a),s=0;s<a;s++)u[s]=arguments[s+2];l.children=u}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)l[i]===void 0&&(l[i]=a[i]);return yf(n,r,void 0,void 0,null,l)};G.createRef=function(){return{current:null}};G.forwardRef=function(n){return{$$typeof:gS,render:n}};G.isValidElement=bf;G.lazy=function(n){return{$$typeof:$m,_payload:{_status:-1,_result:n},_init:xS}};G.memo=function(n,e){return{$$typeof:bS,type:n,compare:e===void 0?null:e}};G.startTransition=function(n){var e=bn.T,t={};bn.T=t;try{var i=n(),l=bn.S;l!==null&&l(t,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(ES,rd)}catch(r){rd(r)}finally{bn.T=e}};G.unstable_useCacheRefresh=function(){return bn.H.useCacheRefresh()};G.use=function(n){return bn.H.use(n)};G.useActionState=function(n,e,t){return bn.H.useActionState(n,e,t)};G.useCallback=function(n,e){return bn.H.useCallback(n,e)};G.useContext=function(n){return bn.H.useContext(n)};G.useDebugValue=function(){};G.useDeferredValue=function(n,e){return bn.H.useDeferredValue(n,e)};G.useEffect=function(n,e,t){var i=bn.H;if(typeof t=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return i.useEffect(n,e)};G.useId=function(){return bn.H.useId()};G.useImperativeHandle=function(n,e,t){return bn.H.useImperativeHandle(n,e,t)};G.useInsertionEffect=function(n,e){return bn.H.useInsertionEffect(n,e)};G.useLayoutEffect=function(n,e){return bn.H.useLayoutEffect(n,e)};G.useMemo=function(n,e){return bn.H.useMemo(n,e)};G.useOptimistic=function(n,e){return bn.H.useOptimistic(n,e)};G.useReducer=function(n,e,t){return bn.H.useReducer(n,e,t)};G.useRef=function(n){return bn.H.useRef(n)};G.useState=function(n){return bn.H.useState(n)};G.useSyncExternalStore=function(n,e,t){return bn.H.useSyncExternalStore(n,e,t)};G.useTransition=function(){return bn.H.useTransition()};G.version="19.1.1";Gm.exports=G;var L=Gm.exports;const TS=df(L),AS=uS({__proto__:null,default:TS},[L]);var Jm={exports:{}},as={},Wm={exports:{}},ng={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(z,U){var H=z.length;z.push(U);n:for(;0<H;){var en=H-1>>>1,w=z[en];if(0<l(w,U))z[en]=U,z[H]=w,H=en;else break n}}function t(z){return z.length===0?null:z[0]}function i(z){if(z.length===0)return null;var U=z[0],H=z.pop();if(H!==U){z[0]=H;n:for(var en=0,w=z.length,Kn=w>>>1;en<Kn;){var ee=2*(en+1)-1,k=z[ee],zn=ee+1,xe=z[zn];if(0>l(k,H))zn<w&&0>l(xe,k)?(z[en]=xe,z[zn]=H,en=zn):(z[en]=k,z[ee]=H,en=ee);else if(zn<w&&0>l(xe,H))z[en]=xe,z[zn]=H,en=zn;else break n}}return U}function l(z,U){var H=z.sortIndex-U.sortIndex;return H!==0?H:z.id-U.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var r=performance;n.unstable_now=function(){return r.now()}}else{var a=Date,u=a.now();n.unstable_now=function(){return a.now()-u}}var s=[],o=[],f=1,c=null,d=3,h=!1,y=!1,g=!1,S=!1,p=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;function v(z){for(var U=t(o);U!==null;){if(U.callback===null)i(o);else if(U.startTime<=z)i(o),U.sortIndex=U.expirationTime,e(s,U);else break;U=t(o)}}function T(z){if(g=!1,v(z),!y)if(t(s)!==null)y=!0,x||(x=!0,D());else{var U=t(o);U!==null&&Q(T,U.startTime-z)}}var x=!1,O=-1,A=5,j=-1;function E(){return S?!0:!(n.unstable_now()-j<A)}function B(){if(S=!1,x){var z=n.unstable_now();j=z;var U=!0;try{n:{y=!1,g&&(g=!1,m(O),O=-1),h=!0;var H=d;try{e:{for(v(z),c=t(s);c!==null&&!(c.expirationTime>z&&E());){var en=c.callback;if(typeof en=="function"){c.callback=null,d=c.priorityLevel;var w=en(c.expirationTime<=z);if(z=n.unstable_now(),typeof w=="function"){c.callback=w,v(z),U=!0;break e}c===t(s)&&i(s),v(z)}else i(s);c=t(s)}if(c!==null)U=!0;else{var Kn=t(o);Kn!==null&&Q(T,Kn.startTime-z),U=!1}}break n}finally{c=null,d=H,h=!1}U=void 0}}finally{U?D():x=!1}}}var D;if(typeof b=="function")D=function(){b(B)};else if(typeof MessageChannel<"u"){var nn=new MessageChannel,mn=nn.port2;nn.port1.onmessage=B,D=function(){mn.postMessage(null)}}else D=function(){p(B,0)};function Q(z,U){O=p(function(){z(n.unstable_now())},U)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(z){z.callback=null},n.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<z?Math.floor(1e3/z):5},n.unstable_getCurrentPriorityLevel=function(){return d},n.unstable_next=function(z){switch(d){case 1:case 2:case 3:var U=3;break;default:U=d}var H=d;d=U;try{return z()}finally{d=H}},n.unstable_requestPaint=function(){S=!0},n.unstable_runWithPriority=function(z,U){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var H=d;d=z;try{return U()}finally{d=H}},n.unstable_scheduleCallback=function(z,U,H){var en=n.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?en+H:en):H=en,z){case 1:var w=-1;break;case 2:w=250;break;case 5:w=1073741823;break;case 4:w=1e4;break;default:w=5e3}return w=H+w,z={id:f++,callback:U,priorityLevel:z,startTime:H,expirationTime:w,sortIndex:-1},H>en?(z.sortIndex=H,e(o,z),t(s)===null&&z===t(o)&&(g?(m(O),O=-1):g=!0,Q(T,H-en))):(z.sortIndex=w,e(s,z),y||h||(y=!0,x||(x=!0,D()))),z},n.unstable_shouldYield=E,n.unstable_wrapCallback=function(z){var U=d;return function(){var H=d;d=U;try{return z.apply(this,arguments)}finally{d=H}}}})(ng);Wm.exports=ng;var OS=Wm.exports,eg={exports:{}},ne={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var CS=L;function tg(n){var e="https://react.dev/errors/"+n;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function xt(){}var Wn={d:{f:xt,r:function(){throw Error(tg(522))},D:xt,C:xt,L:xt,m:xt,X:xt,S:xt,M:xt},p:0,findDOMNode:null},_S=Symbol.for("react.portal");function NS(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_S,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}var Sr=CS.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function us(n,e){if(n==="font")return"";if(typeof e=="string")return e==="use-credentials"?e:""}ne.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Wn;ne.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)throw Error(tg(299));return NS(n,e,null,t)};ne.flushSync=function(n){var e=Sr.T,t=Wn.p;try{if(Sr.T=null,Wn.p=2,n)return n()}finally{Sr.T=e,Wn.p=t,Wn.d.f()}};ne.preconnect=function(n,e){typeof n=="string"&&(e?(e=e.crossOrigin,e=typeof e=="string"?e==="use-credentials"?e:"":void 0):e=null,Wn.d.C(n,e))};ne.prefetchDNS=function(n){typeof n=="string"&&Wn.d.D(n)};ne.preinit=function(n,e){if(typeof n=="string"&&e&&typeof e.as=="string"){var t=e.as,i=us(t,e.crossOrigin),l=typeof e.integrity=="string"?e.integrity:void 0,r=typeof e.fetchPriority=="string"?e.fetchPriority:void 0;t==="style"?Wn.d.S(n,typeof e.precedence=="string"?e.precedence:void 0,{crossOrigin:i,integrity:l,fetchPriority:r}):t==="script"&&Wn.d.X(n,{crossOrigin:i,integrity:l,fetchPriority:r,nonce:typeof e.nonce=="string"?e.nonce:void 0})}};ne.preinitModule=function(n,e){if(typeof n=="string")if(typeof e=="object"&&e!==null){if(e.as==null||e.as==="script"){var t=us(e.as,e.crossOrigin);Wn.d.M(n,{crossOrigin:t,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0})}}else e==null&&Wn.d.M(n)};ne.preload=function(n,e){if(typeof n=="string"&&typeof e=="object"&&e!==null&&typeof e.as=="string"){var t=e.as,i=us(t,e.crossOrigin);Wn.d.L(n,t,{crossOrigin:i,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,type:typeof e.type=="string"?e.type:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0,referrerPolicy:typeof e.referrerPolicy=="string"?e.referrerPolicy:void 0,imageSrcSet:typeof e.imageSrcSet=="string"?e.imageSrcSet:void 0,imageSizes:typeof e.imageSizes=="string"?e.imageSizes:void 0,media:typeof e.media=="string"?e.media:void 0})}};ne.preloadModule=function(n,e){if(typeof n=="string")if(e){var t=us(e.as,e.crossOrigin);Wn.d.m(n,{as:typeof e.as=="string"&&e.as!=="script"?e.as:void 0,crossOrigin:t,integrity:typeof e.integrity=="string"?e.integrity:void 0})}else Wn.d.m(n)};ne.requestFormReset=function(n){Wn.d.r(n)};ne.unstable_batchedUpdates=function(n,e){return n(e)};ne.useFormState=function(n,e,t){return Sr.H.useFormState(n,e,t)};ne.useFormStatus=function(){return Sr.H.useHostTransitionStatus()};ne.version="19.1.1";function ig(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ig)}catch(n){console.error(n)}}ig(),eg.exports=ne;var DS=eg.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rn=OS,lg=L,zS=DS;function _(n){var e="https://react.dev/errors/"+n;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function rg(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function ra(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function ag(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function ad(n){if(ra(n)!==n)throw Error(_(188))}function MS(n){var e=n.alternate;if(!e){if(e=ra(n),e===null)throw Error(_(188));return e!==n?null:n}for(var t=n,i=e;;){var l=t.return;if(l===null)break;var r=l.alternate;if(r===null){if(i=l.return,i!==null){t=i;continue}break}if(l.child===r.child){for(r=l.child;r;){if(r===t)return ad(l),n;if(r===i)return ad(l),e;r=r.sibling}throw Error(_(188))}if(t.return!==i.return)t=l,i=r;else{for(var a=!1,u=l.child;u;){if(u===t){a=!0,t=l,i=r;break}if(u===i){a=!0,i=l,t=r;break}u=u.sibling}if(!a){for(u=r.child;u;){if(u===t){a=!0,t=r,i=l;break}if(u===i){a=!0,i=r,t=l;break}u=u.sibling}if(!a)throw Error(_(189))}}if(t.alternate!==i)throw Error(_(190))}if(t.tag!==3)throw Error(_(188));return t.stateNode.current===t?n:e}function ug(n){var e=n.tag;if(e===5||e===26||e===27||e===6)return n;for(n=n.child;n!==null;){if(e=ug(n),e!==null)return e;n=n.sibling}return null}var gn=Object.assign,LS=Symbol.for("react.element"),Na=Symbol.for("react.transitional.element"),pr=Symbol.for("react.portal"),Zi=Symbol.for("react.fragment"),sg=Symbol.for("react.strict_mode"),Fo=Symbol.for("react.profiler"),RS=Symbol.for("react.provider"),og=Symbol.for("react.consumer"),ut=Symbol.for("react.context"),Sf=Symbol.for("react.forward_ref"),Zo=Symbol.for("react.suspense"),Po=Symbol.for("react.suspense_list"),vf=Symbol.for("react.memo"),Ot=Symbol.for("react.lazy"),Jo=Symbol.for("react.activity"),BS=Symbol.for("react.memo_cache_sentinel"),ud=Symbol.iterator;function tr(n){return n===null||typeof n!="object"?null:(n=ud&&n[ud]||n["@@iterator"],typeof n=="function"?n:null)}var jS=Symbol.for("react.client.reference");function Wo(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===jS?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Zi:return"Fragment";case Fo:return"Profiler";case sg:return"StrictMode";case Zo:return"Suspense";case Po:return"SuspenseList";case Jo:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case pr:return"Portal";case ut:return(n.displayName||"Context")+".Provider";case og:return(n._context.displayName||"Context")+".Consumer";case Sf:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case vf:return e=n.displayName||null,e!==null?e:Wo(n.type)||"Memo";case Ot:e=n._payload,n=n._init;try{return Wo(n(e))}catch{}}return null}var mr=Array.isArray,I=lg.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ln=zS.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,gi={pending:!1,data:null,method:null,action:null},nc=[],Pi=-1;function Je(n){return{current:n}}function qn(n){0>Pi||(n.current=nc[Pi],nc[Pi]=null,Pi--)}function Sn(n,e){Pi++,nc[Pi]=n.current,n.current=e}var Qe=Je(null),Ur=Je(null),Ht=Je(null),Su=Je(null);function vu(n,e){switch(Sn(Ht,e),Sn(Ur,n),Sn(Qe,null),e.nodeType){case 9:case 11:n=(n=e.documentElement)&&(n=n.namespaceURI)?hp(n):0;break;default:if(n=e.tagName,e=e.namespaceURI)e=hp(e),n=A1(e,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}qn(Qe),Sn(Qe,n)}function xl(){qn(Qe),qn(Ur),qn(Ht)}function ec(n){n.memoizedState!==null&&Sn(Su,n);var e=Qe.current,t=A1(e,n.type);e!==t&&(Sn(Ur,n),Sn(Qe,t))}function wu(n){Ur.current===n&&(qn(Qe),qn(Ur)),Su.current===n&&(qn(Su),Xr._currentValue=gi)}var tc=Object.prototype.hasOwnProperty,wf=Rn.unstable_scheduleCallback,Gs=Rn.unstable_cancelCallback,US=Rn.unstable_shouldYield,qS=Rn.unstable_requestPaint,Xe=Rn.unstable_now,HS=Rn.unstable_getCurrentPriorityLevel,cg=Rn.unstable_ImmediatePriority,fg=Rn.unstable_UserBlockingPriority,ku=Rn.unstable_NormalPriority,IS=Rn.unstable_LowPriority,hg=Rn.unstable_IdlePriority,YS=Rn.log,VS=Rn.unstable_setDisableYieldValue,aa=null,ye=null;function Rt(n){if(typeof YS=="function"&&VS(n),ye&&typeof ye.setStrictMode=="function")try{ye.setStrictMode(aa,n)}catch{}}var be=Math.clz32?Math.clz32:$S,KS=Math.log,GS=Math.LN2;function $S(n){return n>>>=0,n===0?32:31-(KS(n)/GS|0)|0}var Da=256,za=4194304;function oi(n){var e=n&42;if(e!==0)return e;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function ss(n,e,t){var i=n.pendingLanes;if(i===0)return 0;var l=0,r=n.suspendedLanes,a=n.pingedLanes;n=n.warmLanes;var u=i&134217727;return u!==0?(i=u&~r,i!==0?l=oi(i):(a&=u,a!==0?l=oi(a):t||(t=u&~n,t!==0&&(l=oi(t))))):(u=i&~r,u!==0?l=oi(u):a!==0?l=oi(a):t||(t=i&~n,t!==0&&(l=oi(t)))),l===0?0:e!==0&&e!==l&&!(e&r)&&(r=l&-l,t=e&-e,r>=t||r===32&&(t&4194048)!==0)?e:l}function ua(n,e){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&e)===0}function QS(n,e){switch(n){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function dg(){var n=Da;return Da<<=1,!(Da&4194048)&&(Da=256),n}function pg(){var n=za;return za<<=1,!(za&62914560)&&(za=4194304),n}function $s(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function sa(n,e){n.pendingLanes|=e,e!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function XS(n,e,t,i,l,r){var a=n.pendingLanes;n.pendingLanes=t,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=t,n.entangledLanes&=t,n.errorRecoveryDisabledLanes&=t,n.shellSuspendCounter=0;var u=n.entanglements,s=n.expirationTimes,o=n.hiddenUpdates;for(t=a&~t;0<t;){var f=31-be(t),c=1<<f;u[f]=0,s[f]=-1;var d=o[f];if(d!==null)for(o[f]=null,f=0;f<d.length;f++){var h=d[f];h!==null&&(h.lane&=-536870913)}t&=~c}i!==0&&mg(n,i,0),r!==0&&l===0&&n.tag!==0&&(n.suspendedLanes|=r&~(a&~e))}function mg(n,e,t){n.pendingLanes|=e,n.suspendedLanes&=~e;var i=31-be(e);n.entangledLanes|=e,n.entanglements[i]=n.entanglements[i]|1073741824|t&4194090}function gg(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-be(t),l=1<<i;l&e|n[i]&e&&(n[i]|=e),t&=~l}}function kf(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function xf(n){return n&=-n,2<n?8<n?n&134217727?32:268435456:8:2}function yg(){var n=ln.p;return n!==0?n:(n=window.event,n===void 0?32:B1(n.type))}function FS(n,e){var t=ln.p;try{return ln.p=n,e()}finally{ln.p=t}}var ni=Math.random().toString(36).slice(2),Gn="__reactFiber$"+ni,ue="__reactProps$"+ni,Ul="__reactContainer$"+ni,ic="__reactEvents$"+ni,ZS="__reactListeners$"+ni,PS="__reactHandles$"+ni,sd="__reactResources$"+ni,oa="__reactMarker$"+ni;function Ef(n){delete n[Gn],delete n[ue],delete n[ic],delete n[ZS],delete n[PS]}function Ji(n){var e=n[Gn];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Ul]||t[Gn]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=mp(n);n!==null;){if(t=n[Gn])return t;n=mp(n)}return e}n=t,t=n.parentNode}return null}function ql(n){if(n=n[Gn]||n[Ul]){var e=n.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return n}return null}function gr(n){var e=n.tag;if(e===5||e===26||e===27||e===6)return n.stateNode;throw Error(_(33))}function hl(n){var e=n[sd];return e||(e=n[sd]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function jn(n){n[oa]=!0}var bg=new Set,Sg={};function _i(n,e){El(n,e),El(n+"Capture",e)}function El(n,e){for(Sg[n]=e,n=0;n<e.length;n++)bg.add(e[n])}var JS=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),od={},cd={};function WS(n){return tc.call(cd,n)?!0:tc.call(od,n)?!1:JS.test(n)?cd[n]=!0:(od[n]=!0,!1)}function Wa(n,e,t){if(WS(e))if(t===null)n.removeAttribute(e);else{switch(typeof t){case"undefined":case"function":case"symbol":n.removeAttribute(e);return;case"boolean":var i=e.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){n.removeAttribute(e);return}}n.setAttribute(e,""+t)}}function Ma(n,e,t){if(t===null)n.removeAttribute(e);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(e);return}n.setAttribute(e,""+t)}}function it(n,e,t,i){if(i===null)n.removeAttribute(t);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(t);return}n.setAttributeNS(e,t,""+i)}}var Qs,fd;function $i(n){if(Qs===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Qs=e&&e[1]||"",fd=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Qs+n+fd}var Xs=!1;function Fs(n,e){if(!n||Xs)return"";Xs=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(e){var c=function(){throw Error()};if(Object.defineProperty(c.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(c,[])}catch(h){var d=h}Reflect.construct(n,[],c)}else{try{c.call()}catch(h){d=h}n.call(c.prototype)}}else{try{throw Error()}catch(h){d=h}(c=n())&&typeof c.catch=="function"&&c.catch(function(){})}}catch(h){if(h&&d&&typeof h.stack=="string")return[h.stack,d.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=i.DetermineComponentFrameRoot(),a=r[0],u=r[1];if(a&&u){var s=a.split(`
`),o=u.split(`
`);for(l=i=0;i<s.length&&!s[i].includes("DetermineComponentFrameRoot");)i++;for(;l<o.length&&!o[l].includes("DetermineComponentFrameRoot");)l++;if(i===s.length||l===o.length)for(i=s.length-1,l=o.length-1;1<=i&&0<=l&&s[i]!==o[l];)l--;for(;1<=i&&0<=l;i--,l--)if(s[i]!==o[l]){if(i!==1||l!==1)do if(i--,l--,0>l||s[i]!==o[l]){var f=`
`+s[i].replace(" at new "," at ");return n.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",n.displayName)),f}while(1<=i&&0<=l);break}}}finally{Xs=!1,Error.prepareStackTrace=t}return(t=n?n.displayName||n.name:"")?$i(t):""}function nv(n){switch(n.tag){case 26:case 27:case 5:return $i(n.type);case 16:return $i("Lazy");case 13:return $i("Suspense");case 19:return $i("SuspenseList");case 0:case 15:return Fs(n.type,!1);case 11:return Fs(n.type.render,!1);case 1:return Fs(n.type,!0);case 31:return $i("Activity");default:return""}}function hd(n){try{var e="";do e+=nv(n),n=n.return;while(n);return e}catch(t){return`
Error generating stack: `+t.message+`
`+t.stack}}function Te(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function vg(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ev(n){var e=vg(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var l=t.get,r=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return l.call(this)},set:function(a){i=""+a,r.call(this,a)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function xu(n){n._valueTracker||(n._valueTracker=ev(n))}function wg(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=vg(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function Eu(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var tv=/[\n"\\]/g;function _e(n){return n.replace(tv,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function lc(n,e,t,i,l,r,a,u){n.name="",a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"?n.type=a:n.removeAttribute("type"),e!=null?a==="number"?(e===0&&n.value===""||n.value!=e)&&(n.value=""+Te(e)):n.value!==""+Te(e)&&(n.value=""+Te(e)):a!=="submit"&&a!=="reset"||n.removeAttribute("value"),e!=null?rc(n,a,Te(e)):t!=null?rc(n,a,Te(t)):i!=null&&n.removeAttribute("value"),l==null&&r!=null&&(n.defaultChecked=!!r),l!=null&&(n.checked=l&&typeof l!="function"&&typeof l!="symbol"),u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?n.name=""+Te(u):n.removeAttribute("name")}function kg(n,e,t,i,l,r,a,u){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(n.type=r),e!=null||t!=null){if(!(r!=="submit"&&r!=="reset"||e!=null))return;t=t!=null?""+Te(t):"",e=e!=null?""+Te(e):t,u||e===n.value||(n.value=e),n.defaultValue=e}i=i??l,i=typeof i!="function"&&typeof i!="symbol"&&!!i,n.checked=u?n.checked:!!i,n.defaultChecked=!!i,a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(n.name=a)}function rc(n,e,t){e==="number"&&Eu(n.ownerDocument)===n||n.defaultValue===""+t||(n.defaultValue=""+t)}function dl(n,e,t,i){if(n=n.options,e){e={};for(var l=0;l<t.length;l++)e["$"+t[l]]=!0;for(t=0;t<n.length;t++)l=e.hasOwnProperty("$"+n[t].value),n[t].selected!==l&&(n[t].selected=l),l&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Te(t),e=null,l=0;l<n.length;l++){if(n[l].value===t){n[l].selected=!0,i&&(n[l].defaultSelected=!0);return}e!==null||n[l].disabled||(e=n[l])}e!==null&&(e.selected=!0)}}function xg(n,e,t){if(e!=null&&(e=""+Te(e),e!==n.value&&(n.value=e),t==null)){n.defaultValue!==e&&(n.defaultValue=e);return}n.defaultValue=t!=null?""+Te(t):""}function Eg(n,e,t,i){if(e==null){if(i!=null){if(t!=null)throw Error(_(92));if(mr(i)){if(1<i.length)throw Error(_(93));i=i[0]}t=i}t==null&&(t=""),e=t}t=Te(e),n.defaultValue=t,i=n.textContent,i===t&&i!==""&&i!==null&&(n.value=i)}function Tl(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var iv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function dd(n,e,t){var i=e.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?i?n.setProperty(e,""):e==="float"?n.cssFloat="":n[e]="":i?n.setProperty(e,t):typeof t!="number"||t===0||iv.has(e)?e==="float"?n.cssFloat=t:n[e]=(""+t).trim():n[e]=t+"px"}function Tg(n,e,t){if(e!=null&&typeof e!="object")throw Error(_(62));if(n=n.style,t!=null){for(var i in t)!t.hasOwnProperty(i)||e!=null&&e.hasOwnProperty(i)||(i.indexOf("--")===0?n.setProperty(i,""):i==="float"?n.cssFloat="":n[i]="");for(var l in e)i=e[l],e.hasOwnProperty(l)&&t[l]!==i&&dd(n,l,i)}else for(var r in e)e.hasOwnProperty(r)&&dd(n,r,e[r])}function Tf(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),rv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function nu(n){return rv.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var ac=null;function Af(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Wi=null,pl=null;function pd(n){var e=ql(n);if(e&&(n=e.stateNode)){var t=n[ue]||null;n:switch(n=e.stateNode,e.type){case"input":if(lc(n,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+_e(""+e)+'"][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var l=i[ue]||null;if(!l)throw Error(_(90));lc(i,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(e=0;e<t.length;e++)i=t[e],i.form===n.form&&wg(i)}break n;case"textarea":xg(n,t.value,t.defaultValue);break n;case"select":e=t.value,e!=null&&dl(n,!!t.multiple,e,!1)}}}var Zs=!1;function Ag(n,e,t){if(Zs)return n(e,t);Zs=!0;try{var i=n(e);return i}finally{if(Zs=!1,(Wi!==null||pl!==null)&&(bs(),Wi&&(e=Wi,n=pl,pl=Wi=null,pd(e),n)))for(e=0;e<n.length;e++)pd(n[e])}}function qr(n,e){var t=n.stateNode;if(t===null)return null;var i=t[ue]||null;if(i===null)return null;t=i[e];n:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break n;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(_(231,e,typeof t));return t}var gt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),uc=!1;if(gt)try{var ir={};Object.defineProperty(ir,"passive",{get:function(){uc=!0}}),window.addEventListener("test",ir,ir),window.removeEventListener("test",ir,ir)}catch{uc=!1}var Bt=null,Of=null,eu=null;function Og(){if(eu)return eu;var n,e=Of,t=e.length,i,l="value"in Bt?Bt.value:Bt.textContent,r=l.length;for(n=0;n<t&&e[n]===l[n];n++);var a=t-n;for(i=1;i<=a&&e[t-i]===l[r-i];i++);return eu=l.slice(n,1<i?1-i:void 0)}function tu(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function La(){return!0}function md(){return!1}function se(n){function e(t,i,l,r,a){this._reactName=t,this._targetInst=l,this.type=i,this.nativeEvent=r,this.target=a,this.currentTarget=null;for(var u in n)n.hasOwnProperty(u)&&(t=n[u],this[u]=t?t(r):r[u]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?La:md,this.isPropagationStopped=md,this}return gn(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=La)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=La)},persist:function(){},isPersistent:La}),e}var Ni={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},os=se(Ni),ca=gn({},Ni,{view:0,detail:0}),av=se(ca),Ps,Js,lr,cs=gn({},ca,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cf,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==lr&&(lr&&n.type==="mousemove"?(Ps=n.screenX-lr.screenX,Js=n.screenY-lr.screenY):Js=Ps=0,lr=n),Ps)},movementY:function(n){return"movementY"in n?n.movementY:Js}}),gd=se(cs),uv=gn({},cs,{dataTransfer:0}),sv=se(uv),ov=gn({},ca,{relatedTarget:0}),Ws=se(ov),cv=gn({},Ni,{animationName:0,elapsedTime:0,pseudoElement:0}),fv=se(cv),hv=gn({},Ni,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),dv=se(hv),pv=gn({},Ni,{data:0}),yd=se(pv),mv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bv(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=yv[n])?!!e[n]:!1}function Cf(){return bv}var Sv=gn({},ca,{key:function(n){if(n.key){var e=mv[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=tu(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?gv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cf,charCode:function(n){return n.type==="keypress"?tu(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?tu(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),vv=se(Sv),wv=gn({},cs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bd=se(wv),kv=gn({},ca,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cf}),xv=se(kv),Ev=gn({},Ni,{propertyName:0,elapsedTime:0,pseudoElement:0}),Tv=se(Ev),Av=gn({},cs,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Ov=se(Av),Cv=gn({},Ni,{newState:0,oldState:0}),_v=se(Cv),Nv=[9,13,27,32],_f=gt&&"CompositionEvent"in window,vr=null;gt&&"documentMode"in document&&(vr=document.documentMode);var Dv=gt&&"TextEvent"in window&&!vr,Cg=gt&&(!_f||vr&&8<vr&&11>=vr),Sd=" ",vd=!1;function _g(n,e){switch(n){case"keyup":return Nv.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ng(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var nl=!1;function zv(n,e){switch(n){case"compositionend":return Ng(e);case"keypress":return e.which!==32?null:(vd=!0,Sd);case"textInput":return n=e.data,n===Sd&&vd?null:n;default:return null}}function Mv(n,e){if(nl)return n==="compositionend"||!_f&&_g(n,e)?(n=Og(),eu=Of=Bt=null,nl=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Cg&&e.locale!=="ko"?null:e.data;default:return null}}var Lv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wd(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!Lv[n.type]:e==="textarea"}function Dg(n,e,t,i){Wi?pl?pl.push(i):pl=[i]:Wi=i,e=Yu(e,"onChange"),0<e.length&&(t=new os("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var wr=null,Hr=null;function Rv(n){x1(n,0)}function fs(n){var e=gr(n);if(wg(e))return n}function kd(n,e){if(n==="change")return e}var zg=!1;if(gt){var no;if(gt){var eo="oninput"in document;if(!eo){var xd=document.createElement("div");xd.setAttribute("oninput","return;"),eo=typeof xd.oninput=="function"}no=eo}else no=!1;zg=no&&(!document.documentMode||9<document.documentMode)}function Ed(){wr&&(wr.detachEvent("onpropertychange",Mg),Hr=wr=null)}function Mg(n){if(n.propertyName==="value"&&fs(Hr)){var e=[];Dg(e,Hr,n,Af(n)),Ag(Rv,e)}}function Bv(n,e,t){n==="focusin"?(Ed(),wr=e,Hr=t,wr.attachEvent("onpropertychange",Mg)):n==="focusout"&&Ed()}function jv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return fs(Hr)}function Uv(n,e){if(n==="click")return fs(e)}function qv(n,e){if(n==="input"||n==="change")return fs(e)}function Hv(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var ke=typeof Object.is=="function"?Object.is:Hv;function Ir(n,e){if(ke(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var l=t[i];if(!tc.call(e,l)||!ke(n[l],e[l]))return!1}return!0}function Td(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Ad(n,e){var t=Td(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}n:{for(;t;){if(t.nextSibling){t=t.nextSibling;break n}t=t.parentNode}t=void 0}t=Td(t)}}function Lg(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?Lg(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function Rg(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var e=Eu(n.document);e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Eu(n.document)}return e}function Nf(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}var Iv=gt&&"documentMode"in document&&11>=document.documentMode,el=null,sc=null,kr=null,oc=!1;function Od(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;oc||el==null||el!==Eu(i)||(i=el,"selectionStart"in i&&Nf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),kr&&Ir(kr,i)||(kr=i,i=Yu(sc,"onSelect"),0<i.length&&(e=new os("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=el)))}function ai(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var tl={animationend:ai("Animation","AnimationEnd"),animationiteration:ai("Animation","AnimationIteration"),animationstart:ai("Animation","AnimationStart"),transitionrun:ai("Transition","TransitionRun"),transitionstart:ai("Transition","TransitionStart"),transitioncancel:ai("Transition","TransitionCancel"),transitionend:ai("Transition","TransitionEnd")},to={},Bg={};gt&&(Bg=document.createElement("div").style,"AnimationEvent"in window||(delete tl.animationend.animation,delete tl.animationiteration.animation,delete tl.animationstart.animation),"TransitionEvent"in window||delete tl.transitionend.transition);function Di(n){if(to[n])return to[n];if(!tl[n])return n;var e=tl[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in Bg)return to[n]=e[t];return n}var jg=Di("animationend"),Ug=Di("animationiteration"),qg=Di("animationstart"),Yv=Di("transitionrun"),Vv=Di("transitionstart"),Kv=Di("transitioncancel"),Hg=Di("transitionend"),Ig=new Map,cc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");cc.push("scrollEnd");function Ie(n,e){Ig.set(n,e),_i(e,[n])}var Cd=new WeakMap;function Ne(n,e){if(typeof n=="object"&&n!==null){var t=Cd.get(n);return t!==void 0?t:(e={value:n,source:e,stack:hd(e)},Cd.set(n,e),e)}return{value:n,source:e,stack:hd(e)}}var Ee=[],il=0,Df=0;function hs(){for(var n=il,e=Df=il=0;e<n;){var t=Ee[e];Ee[e++]=null;var i=Ee[e];Ee[e++]=null;var l=Ee[e];Ee[e++]=null;var r=Ee[e];if(Ee[e++]=null,i!==null&&l!==null){var a=i.pending;a===null?l.next=l:(l.next=a.next,a.next=l),i.pending=l}r!==0&&Yg(t,l,r)}}function ds(n,e,t,i){Ee[il++]=n,Ee[il++]=e,Ee[il++]=t,Ee[il++]=i,Df|=i,n.lanes|=i,n=n.alternate,n!==null&&(n.lanes|=i)}function zf(n,e,t,i){return ds(n,e,t,i),Tu(n)}function Hl(n,e){return ds(n,null,null,e),Tu(n)}function Yg(n,e,t){n.lanes|=t;var i=n.alternate;i!==null&&(i.lanes|=t);for(var l=!1,r=n.return;r!==null;)r.childLanes|=t,i=r.alternate,i!==null&&(i.childLanes|=t),r.tag===22&&(n=r.stateNode,n===null||n._visibility&1||(l=!0)),n=r,r=r.return;return n.tag===3?(r=n.stateNode,l&&e!==null&&(l=31-be(t),n=r.hiddenUpdates,i=n[l],i===null?n[l]=[e]:i.push(e),e.lane=t|536870912),r):null}function Tu(n){if(50<zr)throw zr=0,Dc=null,Error(_(185));for(var e=n.return;e!==null;)n=e,e=n.return;return n.tag===3?n.stateNode:null}var ll={};function Gv(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function me(n,e,t,i){return new Gv(n,e,t,i)}function Mf(n){return n=n.prototype,!(!n||!n.isReactComponent)}function dt(n,e){var t=n.alternate;return t===null?(t=me(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&65011712,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t.refCleanup=n.refCleanup,t}function Vg(n,e){n.flags&=65011714;var t=n.alternate;return t===null?(n.childLanes=0,n.lanes=e,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,n.type=t.type,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n}function iu(n,e,t,i,l,r){var a=0;if(i=n,typeof n=="function")Mf(n)&&(a=1);else if(typeof n=="string")a=Qw(n,t,Qe.current)?26:n==="html"||n==="head"||n==="body"?27:5;else n:switch(n){case Jo:return n=me(31,t,e,l),n.elementType=Jo,n.lanes=r,n;case Zi:return yi(t.children,l,r,e);case sg:a=8,l|=24;break;case Fo:return n=me(12,t,e,l|2),n.elementType=Fo,n.lanes=r,n;case Zo:return n=me(13,t,e,l),n.elementType=Zo,n.lanes=r,n;case Po:return n=me(19,t,e,l),n.elementType=Po,n.lanes=r,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case RS:case ut:a=10;break n;case og:a=9;break n;case Sf:a=11;break n;case vf:a=14;break n;case Ot:a=16,i=null;break n}a=29,t=Error(_(130,n===null?"null":typeof n,"")),i=null}return e=me(a,t,e,l),e.elementType=n,e.type=i,e.lanes=r,e}function yi(n,e,t,i){return n=me(7,n,i,e),n.lanes=t,n}function io(n,e,t){return n=me(6,n,null,e),n.lanes=t,n}function lo(n,e,t){return e=me(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}var rl=[],al=0,Au=null,Ou=0,Ae=[],Oe=0,bi=null,st=1,ot="";function ci(n,e){rl[al++]=Ou,rl[al++]=Au,Au=n,Ou=e}function Kg(n,e,t){Ae[Oe++]=st,Ae[Oe++]=ot,Ae[Oe++]=bi,bi=n;var i=st;n=ot;var l=32-be(i)-1;i&=~(1<<l),t+=1;var r=32-be(e)+l;if(30<r){var a=l-l%5;r=(i&(1<<a)-1).toString(32),i>>=a,l-=a,st=1<<32-be(e)+l|t<<l|i,ot=r+n}else st=1<<r|t<<l|i,ot=n}function Lf(n){n.return!==null&&(ci(n,1),Kg(n,1,0))}function Rf(n){for(;n===Au;)Au=rl[--al],rl[al]=null,Ou=rl[--al],rl[al]=null;for(;n===bi;)bi=Ae[--Oe],Ae[Oe]=null,ot=Ae[--Oe],Ae[Oe]=null,st=Ae[--Oe],Ae[Oe]=null}var Pn=null,En=null,tn=!1,Si=null,Ge=!1,fc=Error(_(519));function xi(n){var e=Error(_(418,""));throw Yr(Ne(e,n)),fc}function _d(n){var e=n.stateNode,t=n.type,i=n.memoizedProps;switch(e[Gn]=n,e[ue]=i,t){case"dialog":X("cancel",e),X("close",e);break;case"iframe":case"object":case"embed":X("load",e);break;case"video":case"audio":for(t=0;t<Gr.length;t++)X(Gr[t],e);break;case"source":X("error",e);break;case"img":case"image":case"link":X("error",e),X("load",e);break;case"details":X("toggle",e);break;case"input":X("invalid",e),kg(e,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0),xu(e);break;case"select":X("invalid",e);break;case"textarea":X("invalid",e),Eg(e,i.value,i.defaultValue,i.children),xu(e)}t=i.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||e.textContent===""+t||i.suppressHydrationWarning===!0||T1(e.textContent,t)?(i.popover!=null&&(X("beforetoggle",e),X("toggle",e)),i.onScroll!=null&&X("scroll",e),i.onScrollEnd!=null&&X("scrollend",e),i.onClick!=null&&(e.onclick=ws),e=!0):e=!1,e||xi(n)}function Nd(n){for(Pn=n.return;Pn;)switch(Pn.tag){case 5:case 13:Ge=!1;return;case 27:case 3:Ge=!0;return;default:Pn=Pn.return}}function rr(n){if(n!==Pn)return!1;if(!tn)return Nd(n),tn=!0,!1;var e=n.tag,t;if((t=e!==3&&e!==27)&&((t=e===5)&&(t=n.type,t=!(t!=="form"&&t!=="button")||jc(n.type,n.memoizedProps)),t=!t),t&&En&&xi(n),Nd(n),e===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(_(317));n:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8)if(t=n.data,t==="/$"){if(e===0){En=qe(n.nextSibling);break n}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++;n=n.nextSibling}En=null}}else e===27?(e=En,ei(n.type)?(n=Hc,Hc=null,En=n):En=e):En=Pn?qe(n.stateNode.nextSibling):null;return!0}function fa(){En=Pn=null,tn=!1}function Dd(){var n=Si;return n!==null&&(re===null?re=n:re.push.apply(re,n),Si=null),n}function Yr(n){Si===null?Si=[n]:Si.push(n)}var hc=Je(null),zi=null,ct=null;function Dt(n,e,t){Sn(hc,e._currentValue),e._currentValue=t}function pt(n){n._currentValue=hc.current,qn(hc)}function dc(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function pc(n,e,t,i){var l=n.child;for(l!==null&&(l.return=n);l!==null;){var r=l.dependencies;if(r!==null){var a=l.child;r=r.firstContext;n:for(;r!==null;){var u=r;r=l;for(var s=0;s<e.length;s++)if(u.context===e[s]){r.lanes|=t,u=r.alternate,u!==null&&(u.lanes|=t),dc(r.return,t,n),i||(a=null);break n}r=u.next}}else if(l.tag===18){if(a=l.return,a===null)throw Error(_(341));a.lanes|=t,r=a.alternate,r!==null&&(r.lanes|=t),dc(a,t,n),a=null}else a=l.child;if(a!==null)a.return=l;else for(a=l;a!==null;){if(a===n){a=null;break}if(l=a.sibling,l!==null){l.return=a.return,a=l;break}a=a.return}l=a}}function ha(n,e,t,i){n=null;for(var l=e,r=!1;l!==null;){if(!r){if(l.flags&524288)r=!0;else if(l.flags&262144)break}if(l.tag===10){var a=l.alternate;if(a===null)throw Error(_(387));if(a=a.memoizedProps,a!==null){var u=l.type;ke(l.pendingProps.value,a.value)||(n!==null?n.push(u):n=[u])}}else if(l===Su.current){if(a=l.alternate,a===null)throw Error(_(387));a.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(n!==null?n.push(Xr):n=[Xr])}l=l.return}n!==null&&pc(e,n,t,i),e.flags|=262144}function Cu(n){for(n=n.firstContext;n!==null;){if(!ke(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function Ei(n){zi=n,ct=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function $n(n){return Gg(zi,n)}function Ra(n,e){return zi===null&&Ei(n),Gg(n,e)}function Gg(n,e){var t=e._currentValue;if(e={context:e,memoizedValue:t,next:null},ct===null){if(n===null)throw Error(_(308));ct=e,n.dependencies={lanes:0,firstContext:e},n.flags|=524288}else ct=ct.next=e;return t}var $v=typeof AbortController<"u"?AbortController:function(){var n=[],e=this.signal={aborted:!1,addEventListener:function(t,i){n.push(i)}};this.abort=function(){e.aborted=!0,n.forEach(function(t){return t()})}},Qv=Rn.unstable_scheduleCallback,Xv=Rn.unstable_NormalPriority,Mn={$$typeof:ut,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Bf(){return{controller:new $v,data:new Map,refCount:0}}function da(n){n.refCount--,n.refCount===0&&Qv(Xv,function(){n.controller.abort()})}var xr=null,mc=0,Al=0,ml=null;function Fv(n,e){if(xr===null){var t=xr=[];mc=0,Al=rh(),ml={status:"pending",value:void 0,then:function(i){t.push(i)}}}return mc++,e.then(zd,zd),e}function zd(){if(--mc===0&&xr!==null){ml!==null&&(ml.status="fulfilled");var n=xr;xr=null,Al=0,ml=null;for(var e=0;e<n.length;e++)(0,n[e])()}}function Zv(n,e){var t=[],i={status:"pending",value:null,reason:null,then:function(l){t.push(l)}};return n.then(function(){i.status="fulfilled",i.value=e;for(var l=0;l<t.length;l++)(0,t[l])(e)},function(l){for(i.status="rejected",i.reason=l,l=0;l<t.length;l++)(0,t[l])(void 0)}),i}var Md=I.S;I.S=function(n,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&Fv(n,e),Md!==null&&Md(n,e)};var vi=Je(null);function jf(){var n=vi.current;return n!==null?n:pn.pooledCache}function lu(n,e){e===null?Sn(vi,vi.current):Sn(vi,e.pool)}function $g(){var n=jf();return n===null?null:{parent:Mn._currentValue,pool:n}}var pa=Error(_(460)),Qg=Error(_(474)),ps=Error(_(542)),gc={then:function(){}};function Ld(n){return n=n.status,n==="fulfilled"||n==="rejected"}function Ba(){}function Xg(n,e,t){switch(t=n[t],t===void 0?n.push(e):t!==e&&(e.then(Ba,Ba),e=t),e.status){case"fulfilled":return e.value;case"rejected":throw n=e.reason,Bd(n),n;default:if(typeof e.status=="string")e.then(Ba,Ba);else{if(n=pn,n!==null&&100<n.shellSuspendCounter)throw Error(_(482));n=e,n.status="pending",n.then(function(i){if(e.status==="pending"){var l=e;l.status="fulfilled",l.value=i}},function(i){if(e.status==="pending"){var l=e;l.status="rejected",l.reason=i}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw n=e.reason,Bd(n),n}throw Er=e,pa}}var Er=null;function Rd(){if(Er===null)throw Error(_(459));var n=Er;return Er=null,n}function Bd(n){if(n===pa||n===ps)throw Error(_(483))}var Ct=!1;function Uf(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function yc(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function It(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function Yt(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,an&2){var l=i.pending;return l===null?e.next=e:(e.next=l.next,l.next=e),i.pending=e,e=Tu(n),Yg(n,null,t),e}return ds(n,i,e,t),Tu(n)}function Tr(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194048)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,gg(n,t)}}function ro(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var l=null,r=null;if(t=t.firstBaseUpdate,t!==null){do{var a={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};r===null?l=r=a:r=r.next=a,t=t.next}while(t!==null);r===null?l=r=e:r=r.next=e}else l=r=e;t={baseState:i.baseState,firstBaseUpdate:l,lastBaseUpdate:r,shared:i.shared,callbacks:i.callbacks},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}var bc=!1;function Ar(){if(bc){var n=ml;if(n!==null)throw n}}function Or(n,e,t,i){bc=!1;var l=n.updateQueue;Ct=!1;var r=l.firstBaseUpdate,a=l.lastBaseUpdate,u=l.shared.pending;if(u!==null){l.shared.pending=null;var s=u,o=s.next;s.next=null,a===null?r=o:a.next=o,a=s;var f=n.alternate;f!==null&&(f=f.updateQueue,u=f.lastBaseUpdate,u!==a&&(u===null?f.firstBaseUpdate=o:u.next=o,f.lastBaseUpdate=s))}if(r!==null){var c=l.baseState;a=0,f=o=s=null,u=r;do{var d=u.lane&-536870913,h=d!==u.lane;if(h?(J&d)===d:(i&d)===d){d!==0&&d===Al&&(bc=!0),f!==null&&(f=f.next={lane:0,tag:u.tag,payload:u.payload,callback:null,next:null});n:{var y=n,g=u;d=e;var S=t;switch(g.tag){case 1:if(y=g.payload,typeof y=="function"){c=y.call(S,c,d);break n}c=y;break n;case 3:y.flags=y.flags&-65537|128;case 0:if(y=g.payload,d=typeof y=="function"?y.call(S,c,d):y,d==null)break n;c=gn({},c,d);break n;case 2:Ct=!0}}d=u.callback,d!==null&&(n.flags|=64,h&&(n.flags|=8192),h=l.callbacks,h===null?l.callbacks=[d]:h.push(d))}else h={lane:d,tag:u.tag,payload:u.payload,callback:u.callback,next:null},f===null?(o=f=h,s=c):f=f.next=h,a|=d;if(u=u.next,u===null){if(u=l.shared.pending,u===null)break;h=u,u=h.next,h.next=null,l.lastBaseUpdate=h,l.shared.pending=null}}while(!0);f===null&&(s=c),l.baseState=s,l.firstBaseUpdate=o,l.lastBaseUpdate=f,r===null&&(l.shared.lanes=0),Jt|=a,n.lanes=a,n.memoizedState=c}}function Fg(n,e){if(typeof n!="function")throw Error(_(191,n));n.call(e)}function Zg(n,e){var t=n.callbacks;if(t!==null)for(n.callbacks=null,n=0;n<t.length;n++)Fg(t[n],e)}var Ol=Je(null),_u=Je(0);function jd(n,e){n=St,Sn(_u,n),Sn(Ol,e),St=n|e.baseLanes}function Sc(){Sn(_u,St),Sn(Ol,Ol.current)}function qf(){St=_u.current,qn(Ol),qn(_u)}var Zt=0,$=null,sn=null,_n=null,Nu=!1,gl=!1,Ti=!1,Du=0,Vr=0,yl=null,Pv=0;function An(){throw Error(_(321))}function Hf(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!ke(n[t],e[t]))return!1;return!0}function If(n,e,t,i,l,r){return Zt=r,$=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,I.H=n===null||n.memoizedState===null?Oy:Cy,Ti=!1,r=t(i,l),Ti=!1,gl&&(r=Jg(e,t,i,l)),Pg(n),r}function Pg(n){I.H=zu;var e=sn!==null&&sn.next!==null;if(Zt=0,_n=sn=$=null,Nu=!1,Vr=0,yl=null,e)throw Error(_(300));n===null||Un||(n=n.dependencies,n!==null&&Cu(n)&&(Un=!0))}function Jg(n,e,t,i){$=n;var l=0;do{if(gl&&(yl=null),Vr=0,gl=!1,25<=l)throw Error(_(301));if(l+=1,_n=sn=null,n.updateQueue!=null){var r=n.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}I.H=lw,r=e(t,i)}while(gl);return r}function Jv(){var n=I.H,e=n.useState()[0];return e=typeof e.then=="function"?ma(e):e,n=n.useState()[0],(sn!==null?sn.memoizedState:null)!==n&&($.flags|=1024),e}function Yf(){var n=Du!==0;return Du=0,n}function Vf(n,e,t){e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~t}function Kf(n){if(Nu){for(n=n.memoizedState;n!==null;){var e=n.queue;e!==null&&(e.pending=null),n=n.next}Nu=!1}Zt=0,_n=sn=$=null,gl=!1,Vr=Du=0,yl=null}function ie(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _n===null?$.memoizedState=_n=n:_n=_n.next=n,_n}function Nn(){if(sn===null){var n=$.alternate;n=n!==null?n.memoizedState:null}else n=sn.next;var e=_n===null?$.memoizedState:_n.next;if(e!==null)_n=e,sn=n;else{if(n===null)throw $.alternate===null?Error(_(467)):Error(_(310));sn=n,n={memoizedState:sn.memoizedState,baseState:sn.baseState,baseQueue:sn.baseQueue,queue:sn.queue,next:null},_n===null?$.memoizedState=_n=n:_n=_n.next=n}return _n}function Gf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ma(n){var e=Vr;return Vr+=1,yl===null&&(yl=[]),n=Xg(yl,n,e),e=$,(_n===null?e.memoizedState:_n.next)===null&&(e=e.alternate,I.H=e===null||e.memoizedState===null?Oy:Cy),n}function ms(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return ma(n);if(n.$$typeof===ut)return $n(n)}throw Error(_(438,String(n)))}function $f(n){var e=null,t=$.updateQueue;if(t!==null&&(e=t.memoCache),e==null){var i=$.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(e={data:i.data.map(function(l){return l.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),t===null&&(t=Gf(),$.updateQueue=t),t.memoCache=e,t=e.data[e.index],t===void 0)for(t=e.data[e.index]=Array(n),i=0;i<n;i++)t[i]=BS;return e.index++,t}function yt(n,e){return typeof e=="function"?e(n):e}function ru(n){var e=Nn();return Qf(e,sn,n)}function Qf(n,e,t){var i=n.queue;if(i===null)throw Error(_(311));i.lastRenderedReducer=t;var l=n.baseQueue,r=i.pending;if(r!==null){if(l!==null){var a=l.next;l.next=r.next,r.next=a}e.baseQueue=l=r,i.pending=null}if(r=n.baseState,l===null)n.memoizedState=r;else{e=l.next;var u=a=null,s=null,o=e,f=!1;do{var c=o.lane&-536870913;if(c!==o.lane?(J&c)===c:(Zt&c)===c){var d=o.revertLane;if(d===0)s!==null&&(s=s.next={lane:0,revertLane:0,action:o.action,hasEagerState:o.hasEagerState,eagerState:o.eagerState,next:null}),c===Al&&(f=!0);else if((Zt&d)===d){o=o.next,d===Al&&(f=!0);continue}else c={lane:0,revertLane:o.revertLane,action:o.action,hasEagerState:o.hasEagerState,eagerState:o.eagerState,next:null},s===null?(u=s=c,a=r):s=s.next=c,$.lanes|=d,Jt|=d;c=o.action,Ti&&t(r,c),r=o.hasEagerState?o.eagerState:t(r,c)}else d={lane:c,revertLane:o.revertLane,action:o.action,hasEagerState:o.hasEagerState,eagerState:o.eagerState,next:null},s===null?(u=s=d,a=r):s=s.next=d,$.lanes|=c,Jt|=c;o=o.next}while(o!==null&&o!==e);if(s===null?a=r:s.next=u,!ke(r,n.memoizedState)&&(Un=!0,f&&(t=ml,t!==null)))throw t;n.memoizedState=r,n.baseState=a,n.baseQueue=s,i.lastRenderedState=r}return l===null&&(i.lanes=0),[n.memoizedState,i.dispatch]}function ao(n){var e=Nn(),t=e.queue;if(t===null)throw Error(_(311));t.lastRenderedReducer=n;var i=t.dispatch,l=t.pending,r=e.memoizedState;if(l!==null){t.pending=null;var a=l=l.next;do r=n(r,a.action),a=a.next;while(a!==l);ke(r,e.memoizedState)||(Un=!0),e.memoizedState=r,e.baseQueue===null&&(e.baseState=r),t.lastRenderedState=r}return[r,i]}function Wg(n,e,t){var i=$,l=Nn(),r=tn;if(r){if(t===void 0)throw Error(_(407));t=t()}else t=e();var a=!ke((sn||l).memoizedState,t);a&&(l.memoizedState=t,Un=!0),l=l.queue;var u=ty.bind(null,i,l,n);if(ga(2048,8,u,[n]),l.getSnapshot!==e||a||_n!==null&&_n.memoizedState.tag&1){if(i.flags|=2048,Cl(9,gs(),ey.bind(null,i,l,t,e),null),pn===null)throw Error(_(349));r||Zt&124||ny(i,e,t)}return t}function ny(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=$.updateQueue,e===null?(e=Gf(),$.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function ey(n,e,t,i){e.value=t,e.getSnapshot=i,iy(e)&&ly(n)}function ty(n,e,t){return t(function(){iy(e)&&ly(n)})}function iy(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!ke(n,t)}catch{return!0}}function ly(n){var e=Hl(n,2);e!==null&&ve(e,n,2)}function vc(n){var e=ie();if(typeof n=="function"){var t=n;if(n=t(),Ti){Rt(!0);try{t()}finally{Rt(!1)}}}return e.memoizedState=e.baseState=n,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:yt,lastRenderedState:n},e}function ry(n,e,t,i){return n.baseState=t,Qf(n,sn,typeof i=="function"?i:yt)}function Wv(n,e,t,i,l){if(ys(n))throw Error(_(485));if(n=e.action,n!==null){var r={payload:l,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(a){r.listeners.push(a)}};I.T!==null?t(!0):r.isTransition=!1,i(r),t=e.pending,t===null?(r.next=e.pending=r,ay(e,r)):(r.next=t.next,e.pending=t.next=r)}}function ay(n,e){var t=e.action,i=e.payload,l=n.state;if(e.isTransition){var r=I.T,a={};I.T=a;try{var u=t(l,i),s=I.S;s!==null&&s(a,u),Ud(n,e,u)}catch(o){wc(n,e,o)}finally{I.T=r}}else try{r=t(l,i),Ud(n,e,r)}catch(o){wc(n,e,o)}}function Ud(n,e,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(i){qd(n,e,i)},function(i){return wc(n,e,i)}):qd(n,e,t)}function qd(n,e,t){e.status="fulfilled",e.value=t,uy(e),n.state=t,e=n.pending,e!==null&&(t=e.next,t===e?n.pending=null:(t=t.next,e.next=t,ay(n,t)))}function wc(n,e,t){var i=n.pending;if(n.pending=null,i!==null){i=i.next;do e.status="rejected",e.reason=t,uy(e),e=e.next;while(e!==i)}n.action=null}function uy(n){n=n.listeners;for(var e=0;e<n.length;e++)(0,n[e])()}function sy(n,e){return e}function Hd(n,e){if(tn){var t=pn.formState;if(t!==null){n:{var i=$;if(tn){if(En){e:{for(var l=En,r=Ge;l.nodeType!==8;){if(!r){l=null;break e}if(l=qe(l.nextSibling),l===null){l=null;break e}}r=l.data,l=r==="F!"||r==="F"?l:null}if(l){En=qe(l.nextSibling),i=l.data==="F!";break n}}xi(i)}i=!1}i&&(e=t[0])}}return t=ie(),t.memoizedState=t.baseState=e,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:sy,lastRenderedState:e},t.queue=i,t=Ey.bind(null,$,i),i.dispatch=t,i=vc(!1),r=Pf.bind(null,$,!1,i.queue),i=ie(),l={state:e,dispatch:null,action:n,pending:null},i.queue=l,t=Wv.bind(null,$,l,r,t),l.dispatch=t,i.memoizedState=n,[e,t,!1]}function Id(n){var e=Nn();return oy(e,sn,n)}function oy(n,e,t){if(e=Qf(n,e,sy)[0],n=ru(yt)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var i=ma(e)}catch(a){throw a===pa?ps:a}else i=e;e=Nn();var l=e.queue,r=l.dispatch;return t!==e.memoizedState&&($.flags|=2048,Cl(9,gs(),nw.bind(null,l,t),null)),[i,r,n]}function nw(n,e){n.action=e}function Yd(n){var e=Nn(),t=sn;if(t!==null)return oy(e,t,n);Nn(),e=e.memoizedState,t=Nn();var i=t.queue.dispatch;return t.memoizedState=n,[e,i,!1]}function Cl(n,e,t,i){return n={tag:n,create:t,deps:i,inst:e,next:null},e=$.updateQueue,e===null&&(e=Gf(),$.updateQueue=e),t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n),n}function gs(){return{destroy:void 0,resource:void 0}}function cy(){return Nn().memoizedState}function au(n,e,t,i){var l=ie();i=i===void 0?null:i,$.flags|=n,l.memoizedState=Cl(1|e,gs(),t,i)}function ga(n,e,t,i){var l=Nn();i=i===void 0?null:i;var r=l.memoizedState.inst;sn!==null&&i!==null&&Hf(i,sn.memoizedState.deps)?l.memoizedState=Cl(e,r,t,i):($.flags|=n,l.memoizedState=Cl(1|e,r,t,i))}function Vd(n,e){au(8390656,8,n,e)}function fy(n,e){ga(2048,8,n,e)}function hy(n,e){return ga(4,2,n,e)}function dy(n,e){return ga(4,4,n,e)}function py(n,e){if(typeof e=="function"){n=n();var t=e(n);return function(){typeof t=="function"?t():e(null)}}if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function my(n,e,t){t=t!=null?t.concat([n]):null,ga(4,4,py.bind(null,e,n),t)}function Xf(){}function gy(n,e){var t=Nn();e=e===void 0?null:e;var i=t.memoizedState;return e!==null&&Hf(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function yy(n,e){var t=Nn();e=e===void 0?null:e;var i=t.memoizedState;if(e!==null&&Hf(e,i[1]))return i[0];if(i=n(),Ti){Rt(!0);try{n()}finally{Rt(!1)}}return t.memoizedState=[i,e],i}function Ff(n,e,t){return t===void 0||Zt&1073741824?n.memoizedState=e:(n.memoizedState=t,n=u1(),$.lanes|=n,Jt|=n,t)}function by(n,e,t,i){return ke(t,e)?t:Ol.current!==null?(n=Ff(n,t,i),ke(n,e)||(Un=!0),n):Zt&42?(n=u1(),$.lanes|=n,Jt|=n,e):(Un=!0,n.memoizedState=t)}function Sy(n,e,t,i,l){var r=ln.p;ln.p=r!==0&&8>r?r:8;var a=I.T,u={};I.T=u,Pf(n,!1,e,t);try{var s=l(),o=I.S;if(o!==null&&o(u,s),s!==null&&typeof s=="object"&&typeof s.then=="function"){var f=Zv(s,i);Cr(n,e,f,Se(n))}else Cr(n,e,i,Se(n))}catch(c){Cr(n,e,{then:function(){},status:"rejected",reason:c},Se())}finally{ln.p=r,I.T=a}}function ew(){}function kc(n,e,t,i){if(n.tag!==5)throw Error(_(476));var l=vy(n).queue;Sy(n,l,e,gi,t===null?ew:function(){return wy(n),t(i)})}function vy(n){var e=n.memoizedState;if(e!==null)return e;e={memoizedState:gi,baseState:gi,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:yt,lastRenderedState:gi},next:null};var t={};return e.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:yt,lastRenderedState:t},next:null},n.memoizedState=e,n=n.alternate,n!==null&&(n.memoizedState=e),e}function wy(n){var e=vy(n).next.queue;Cr(n,e,{},Se())}function Zf(){return $n(Xr)}function ky(){return Nn().memoizedState}function xy(){return Nn().memoizedState}function tw(n){for(var e=n.return;e!==null;){switch(e.tag){case 24:case 3:var t=Se();n=It(t);var i=Yt(e,n,t);i!==null&&(ve(i,e,t),Tr(i,e,t)),e={cache:Bf()},n.payload=e;return}e=e.return}}function iw(n,e,t){var i=Se();t={lane:i,revertLane:0,action:t,hasEagerState:!1,eagerState:null,next:null},ys(n)?Ty(e,t):(t=zf(n,e,t,i),t!==null&&(ve(t,n,i),Ay(t,e,i)))}function Ey(n,e,t){var i=Se();Cr(n,e,t,i)}function Cr(n,e,t,i){var l={lane:i,revertLane:0,action:t,hasEagerState:!1,eagerState:null,next:null};if(ys(n))Ty(e,l);else{var r=n.alternate;if(n.lanes===0&&(r===null||r.lanes===0)&&(r=e.lastRenderedReducer,r!==null))try{var a=e.lastRenderedState,u=r(a,t);if(l.hasEagerState=!0,l.eagerState=u,ke(u,a))return ds(n,e,l,0),pn===null&&hs(),!1}catch{}finally{}if(t=zf(n,e,l,i),t!==null)return ve(t,n,i),Ay(t,e,i),!0}return!1}function Pf(n,e,t,i){if(i={lane:2,revertLane:rh(),action:i,hasEagerState:!1,eagerState:null,next:null},ys(n)){if(e)throw Error(_(479))}else e=zf(n,t,i,2),e!==null&&ve(e,n,2)}function ys(n){var e=n.alternate;return n===$||e!==null&&e===$}function Ty(n,e){gl=Nu=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function Ay(n,e,t){if(t&4194048){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,gg(n,t)}}var zu={readContext:$n,use:ms,useCallback:An,useContext:An,useEffect:An,useImperativeHandle:An,useLayoutEffect:An,useInsertionEffect:An,useMemo:An,useReducer:An,useRef:An,useState:An,useDebugValue:An,useDeferredValue:An,useTransition:An,useSyncExternalStore:An,useId:An,useHostTransitionStatus:An,useFormState:An,useActionState:An,useOptimistic:An,useMemoCache:An,useCacheRefresh:An},Oy={readContext:$n,use:ms,useCallback:function(n,e){return ie().memoizedState=[n,e===void 0?null:e],n},useContext:$n,useEffect:Vd,useImperativeHandle:function(n,e,t){t=t!=null?t.concat([n]):null,au(4194308,4,py.bind(null,e,n),t)},useLayoutEffect:function(n,e){return au(4194308,4,n,e)},useInsertionEffect:function(n,e){au(4,2,n,e)},useMemo:function(n,e){var t=ie();e=e===void 0?null:e;var i=n();if(Ti){Rt(!0);try{n()}finally{Rt(!1)}}return t.memoizedState=[i,e],i},useReducer:function(n,e,t){var i=ie();if(t!==void 0){var l=t(e);if(Ti){Rt(!0);try{t(e)}finally{Rt(!1)}}}else l=e;return i.memoizedState=i.baseState=l,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:l},i.queue=n,n=n.dispatch=iw.bind(null,$,n),[i.memoizedState,n]},useRef:function(n){var e=ie();return n={current:n},e.memoizedState=n},useState:function(n){n=vc(n);var e=n.queue,t=Ey.bind(null,$,e);return e.dispatch=t,[n.memoizedState,t]},useDebugValue:Xf,useDeferredValue:function(n,e){var t=ie();return Ff(t,n,e)},useTransition:function(){var n=vc(!1);return n=Sy.bind(null,$,n.queue,!0,!1),ie().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,e,t){var i=$,l=ie();if(tn){if(t===void 0)throw Error(_(407));t=t()}else{if(t=e(),pn===null)throw Error(_(349));J&124||ny(i,e,t)}l.memoizedState=t;var r={value:t,getSnapshot:e};return l.queue=r,Vd(ty.bind(null,i,r,n),[n]),i.flags|=2048,Cl(9,gs(),ey.bind(null,i,r,t,e),null),t},useId:function(){var n=ie(),e=pn.identifierPrefix;if(tn){var t=ot,i=st;t=(i&~(1<<32-be(i)-1)).toString(32)+t,e="«"+e+"R"+t,t=Du++,0<t&&(e+="H"+t.toString(32)),e+="»"}else t=Pv++,e="«"+e+"r"+t.toString(32)+"»";return n.memoizedState=e},useHostTransitionStatus:Zf,useFormState:Hd,useActionState:Hd,useOptimistic:function(n){var e=ie();e.memoizedState=e.baseState=n;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=t,e=Pf.bind(null,$,!0,t),t.dispatch=e,[n,e]},useMemoCache:$f,useCacheRefresh:function(){return ie().memoizedState=tw.bind(null,$)}},Cy={readContext:$n,use:ms,useCallback:gy,useContext:$n,useEffect:fy,useImperativeHandle:my,useInsertionEffect:hy,useLayoutEffect:dy,useMemo:yy,useReducer:ru,useRef:cy,useState:function(){return ru(yt)},useDebugValue:Xf,useDeferredValue:function(n,e){var t=Nn();return by(t,sn.memoizedState,n,e)},useTransition:function(){var n=ru(yt)[0],e=Nn().memoizedState;return[typeof n=="boolean"?n:ma(n),e]},useSyncExternalStore:Wg,useId:ky,useHostTransitionStatus:Zf,useFormState:Id,useActionState:Id,useOptimistic:function(n,e){var t=Nn();return ry(t,sn,n,e)},useMemoCache:$f,useCacheRefresh:xy},lw={readContext:$n,use:ms,useCallback:gy,useContext:$n,useEffect:fy,useImperativeHandle:my,useInsertionEffect:hy,useLayoutEffect:dy,useMemo:yy,useReducer:ao,useRef:cy,useState:function(){return ao(yt)},useDebugValue:Xf,useDeferredValue:function(n,e){var t=Nn();return sn===null?Ff(t,n,e):by(t,sn.memoizedState,n,e)},useTransition:function(){var n=ao(yt)[0],e=Nn().memoizedState;return[typeof n=="boolean"?n:ma(n),e]},useSyncExternalStore:Wg,useId:ky,useHostTransitionStatus:Zf,useFormState:Yd,useActionState:Yd,useOptimistic:function(n,e){var t=Nn();return sn!==null?ry(t,sn,n,e):(t.baseState=n,[n,t.queue.dispatch])},useMemoCache:$f,useCacheRefresh:xy},bl=null,Kr=0;function ja(n){var e=Kr;return Kr+=1,bl===null&&(bl=[]),Xg(bl,n,e)}function ar(n,e){e=e.props.ref,n.ref=e!==void 0?e:null}function Ua(n,e){throw e.$$typeof===LS?Error(_(525)):(n=Object.prototype.toString.call(e),Error(_(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)))}function Kd(n){var e=n._init;return e(n._payload)}function _y(n){function e(p,m){if(n){var b=p.deletions;b===null?(p.deletions=[m],p.flags|=16):b.push(m)}}function t(p,m){if(!n)return null;for(;m!==null;)e(p,m),m=m.sibling;return null}function i(p){for(var m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function l(p,m){return p=dt(p,m),p.index=0,p.sibling=null,p}function r(p,m,b){return p.index=b,n?(b=p.alternate,b!==null?(b=b.index,b<m?(p.flags|=67108866,m):b):(p.flags|=67108866,m)):(p.flags|=1048576,m)}function a(p){return n&&p.alternate===null&&(p.flags|=67108866),p}function u(p,m,b,v){return m===null||m.tag!==6?(m=io(b,p.mode,v),m.return=p,m):(m=l(m,b),m.return=p,m)}function s(p,m,b,v){var T=b.type;return T===Zi?f(p,m,b.props.children,v,b.key):m!==null&&(m.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Ot&&Kd(T)===m.type)?(m=l(m,b.props),ar(m,b),m.return=p,m):(m=iu(b.type,b.key,b.props,null,p.mode,v),ar(m,b),m.return=p,m)}function o(p,m,b,v){return m===null||m.tag!==4||m.stateNode.containerInfo!==b.containerInfo||m.stateNode.implementation!==b.implementation?(m=lo(b,p.mode,v),m.return=p,m):(m=l(m,b.children||[]),m.return=p,m)}function f(p,m,b,v,T){return m===null||m.tag!==7?(m=yi(b,p.mode,v,T),m.return=p,m):(m=l(m,b),m.return=p,m)}function c(p,m,b){if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return m=io(""+m,p.mode,b),m.return=p,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Na:return b=iu(m.type,m.key,m.props,null,p.mode,b),ar(b,m),b.return=p,b;case pr:return m=lo(m,p.mode,b),m.return=p,m;case Ot:var v=m._init;return m=v(m._payload),c(p,m,b)}if(mr(m)||tr(m))return m=yi(m,p.mode,b,null),m.return=p,m;if(typeof m.then=="function")return c(p,ja(m),b);if(m.$$typeof===ut)return c(p,Ra(p,m),b);Ua(p,m)}return null}function d(p,m,b,v){var T=m!==null?m.key:null;if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return T!==null?null:u(p,m,""+b,v);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Na:return b.key===T?s(p,m,b,v):null;case pr:return b.key===T?o(p,m,b,v):null;case Ot:return T=b._init,b=T(b._payload),d(p,m,b,v)}if(mr(b)||tr(b))return T!==null?null:f(p,m,b,v,null);if(typeof b.then=="function")return d(p,m,ja(b),v);if(b.$$typeof===ut)return d(p,m,Ra(p,b),v);Ua(p,b)}return null}function h(p,m,b,v,T){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return p=p.get(b)||null,u(m,p,""+v,T);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Na:return p=p.get(v.key===null?b:v.key)||null,s(m,p,v,T);case pr:return p=p.get(v.key===null?b:v.key)||null,o(m,p,v,T);case Ot:var x=v._init;return v=x(v._payload),h(p,m,b,v,T)}if(mr(v)||tr(v))return p=p.get(b)||null,f(m,p,v,T,null);if(typeof v.then=="function")return h(p,m,b,ja(v),T);if(v.$$typeof===ut)return h(p,m,b,Ra(m,v),T);Ua(m,v)}return null}function y(p,m,b,v){for(var T=null,x=null,O=m,A=m=0,j=null;O!==null&&A<b.length;A++){O.index>A?(j=O,O=null):j=O.sibling;var E=d(p,O,b[A],v);if(E===null){O===null&&(O=j);break}n&&O&&E.alternate===null&&e(p,O),m=r(E,m,A),x===null?T=E:x.sibling=E,x=E,O=j}if(A===b.length)return t(p,O),tn&&ci(p,A),T;if(O===null){for(;A<b.length;A++)O=c(p,b[A],v),O!==null&&(m=r(O,m,A),x===null?T=O:x.sibling=O,x=O);return tn&&ci(p,A),T}for(O=i(O);A<b.length;A++)j=h(O,p,A,b[A],v),j!==null&&(n&&j.alternate!==null&&O.delete(j.key===null?A:j.key),m=r(j,m,A),x===null?T=j:x.sibling=j,x=j);return n&&O.forEach(function(B){return e(p,B)}),tn&&ci(p,A),T}function g(p,m,b,v){if(b==null)throw Error(_(151));for(var T=null,x=null,O=m,A=m=0,j=null,E=b.next();O!==null&&!E.done;A++,E=b.next()){O.index>A?(j=O,O=null):j=O.sibling;var B=d(p,O,E.value,v);if(B===null){O===null&&(O=j);break}n&&O&&B.alternate===null&&e(p,O),m=r(B,m,A),x===null?T=B:x.sibling=B,x=B,O=j}if(E.done)return t(p,O),tn&&ci(p,A),T;if(O===null){for(;!E.done;A++,E=b.next())E=c(p,E.value,v),E!==null&&(m=r(E,m,A),x===null?T=E:x.sibling=E,x=E);return tn&&ci(p,A),T}for(O=i(O);!E.done;A++,E=b.next())E=h(O,p,A,E.value,v),E!==null&&(n&&E.alternate!==null&&O.delete(E.key===null?A:E.key),m=r(E,m,A),x===null?T=E:x.sibling=E,x=E);return n&&O.forEach(function(D){return e(p,D)}),tn&&ci(p,A),T}function S(p,m,b,v){if(typeof b=="object"&&b!==null&&b.type===Zi&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case Na:n:{for(var T=b.key;m!==null;){if(m.key===T){if(T=b.type,T===Zi){if(m.tag===7){t(p,m.sibling),v=l(m,b.props.children),v.return=p,p=v;break n}}else if(m.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Ot&&Kd(T)===m.type){t(p,m.sibling),v=l(m,b.props),ar(v,b),v.return=p,p=v;break n}t(p,m);break}else e(p,m);m=m.sibling}b.type===Zi?(v=yi(b.props.children,p.mode,v,b.key),v.return=p,p=v):(v=iu(b.type,b.key,b.props,null,p.mode,v),ar(v,b),v.return=p,p=v)}return a(p);case pr:n:{for(T=b.key;m!==null;){if(m.key===T)if(m.tag===4&&m.stateNode.containerInfo===b.containerInfo&&m.stateNode.implementation===b.implementation){t(p,m.sibling),v=l(m,b.children||[]),v.return=p,p=v;break n}else{t(p,m);break}else e(p,m);m=m.sibling}v=lo(b,p.mode,v),v.return=p,p=v}return a(p);case Ot:return T=b._init,b=T(b._payload),S(p,m,b,v)}if(mr(b))return y(p,m,b,v);if(tr(b)){if(T=tr(b),typeof T!="function")throw Error(_(150));return b=T.call(b),g(p,m,b,v)}if(typeof b.then=="function")return S(p,m,ja(b),v);if(b.$$typeof===ut)return S(p,m,Ra(p,b),v);Ua(p,b)}return typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint"?(b=""+b,m!==null&&m.tag===6?(t(p,m.sibling),v=l(m,b),v.return=p,p=v):(t(p,m),v=io(b,p.mode,v),v.return=p,p=v),a(p)):t(p,m)}return function(p,m,b,v){try{Kr=0;var T=S(p,m,b,v);return bl=null,T}catch(O){if(O===pa||O===ps)throw O;var x=me(29,O,null,p.mode);return x.lanes=v,x.return=p,x}finally{}}}var _l=_y(!0),Ny=_y(!1),Me=Je(null),Fe=null;function zt(n){var e=n.alternate;Sn(Ln,Ln.current&1),Sn(Me,n),Fe===null&&(e===null||Ol.current!==null||e.memoizedState!==null)&&(Fe=n)}function Dy(n){if(n.tag===22){if(Sn(Ln,Ln.current),Sn(Me,n),Fe===null){var e=n.alternate;e!==null&&e.memoizedState!==null&&(Fe=n)}}else Mt()}function Mt(){Sn(Ln,Ln.current),Sn(Me,Me.current)}function ft(n){qn(Me),Fe===n&&(Fe=null),qn(Ln)}var Ln=Je(0);function Mu(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||qc(t)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}function uo(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:gn({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var xc={enqueueSetState:function(n,e,t){n=n._reactInternals;var i=Se(),l=It(i);l.payload=e,t!=null&&(l.callback=t),e=Yt(n,l,i),e!==null&&(ve(e,n,i),Tr(e,n,i))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=Se(),l=It(i);l.tag=1,l.payload=e,t!=null&&(l.callback=t),e=Yt(n,l,i),e!==null&&(ve(e,n,i),Tr(e,n,i))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=Se(),i=It(t);i.tag=2,e!=null&&(i.callback=e),e=Yt(n,i,t),e!==null&&(ve(e,n,t),Tr(e,n,t))}};function Gd(n,e,t,i,l,r,a){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,r,a):e.prototype&&e.prototype.isPureReactComponent?!Ir(t,i)||!Ir(l,r):!0}function $d(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&xc.enqueueReplaceState(e,e.state,null)}function Ai(n,e){var t=e;if("ref"in e){t={};for(var i in e)i!=="ref"&&(t[i]=e[i])}if(n=n.defaultProps){t===e&&(t=gn({},t));for(var l in n)t[l]===void 0&&(t[l]=n[l])}return t}var Lu=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function zy(n){Lu(n)}function My(n){console.error(n)}function Ly(n){Lu(n)}function Ru(n,e){try{var t=n.onUncaughtError;t(e.value,{componentStack:e.stack})}catch(i){setTimeout(function(){throw i})}}function Qd(n,e,t){try{var i=n.onCaughtError;i(t.value,{componentStack:t.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Ec(n,e,t){return t=It(t),t.tag=3,t.payload={element:null},t.callback=function(){Ru(n,e)},t}function Ry(n){return n=It(n),n.tag=3,n}function By(n,e,t,i){var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var r=i.value;n.payload=function(){return l(r)},n.callback=function(){Qd(e,t,i)}}var a=t.stateNode;a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){Qd(e,t,i),typeof l!="function"&&(Vt===null?Vt=new Set([this]):Vt.add(this));var u=i.stack;this.componentDidCatch(i.value,{componentStack:u!==null?u:""})})}function rw(n,e,t,i,l){if(t.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(e=t.alternate,e!==null&&ha(e,t,l,!0),t=Me.current,t!==null){switch(t.tag){case 13:return Fe===null?zc():t.alternate===null&&Tn===0&&(Tn=3),t.flags&=-257,t.flags|=65536,t.lanes=l,i===gc?t.flags|=16384:(e=t.updateQueue,e===null?t.updateQueue=new Set([i]):e.add(i),So(n,i,l)),!1;case 22:return t.flags|=65536,i===gc?t.flags|=16384:(e=t.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([i])},t.updateQueue=e):(t=e.retryQueue,t===null?e.retryQueue=new Set([i]):t.add(i)),So(n,i,l)),!1}throw Error(_(435,t.tag))}return So(n,i,l),zc(),!1}if(tn)return e=Me.current,e!==null?(!(e.flags&65536)&&(e.flags|=256),e.flags|=65536,e.lanes=l,i!==fc&&(n=Error(_(422),{cause:i}),Yr(Ne(n,t)))):(i!==fc&&(e=Error(_(423),{cause:i}),Yr(Ne(e,t))),n=n.current.alternate,n.flags|=65536,l&=-l,n.lanes|=l,i=Ne(i,t),l=Ec(n.stateNode,i,l),ro(n,l),Tn!==4&&(Tn=2)),!1;var r=Error(_(520),{cause:i});if(r=Ne(r,t),Dr===null?Dr=[r]:Dr.push(r),Tn!==4&&(Tn=2),e===null)return!0;i=Ne(i,t),t=e;do{switch(t.tag){case 3:return t.flags|=65536,n=l&-l,t.lanes|=n,n=Ec(t.stateNode,i,n),ro(t,n),!1;case 1:if(e=t.type,r=t.stateNode,(t.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(Vt===null||!Vt.has(r))))return t.flags|=65536,l&=-l,t.lanes|=l,l=Ry(l),By(l,n,t,i),ro(t,l),!1}t=t.return}while(t!==null);return!1}var jy=Error(_(461)),Un=!1;function In(n,e,t,i){e.child=n===null?Ny(e,null,t,i):_l(e,n.child,t,i)}function Xd(n,e,t,i,l){t=t.render;var r=e.ref;if("ref"in i){var a={};for(var u in i)u!=="ref"&&(a[u]=i[u])}else a=i;return Ei(e),i=If(n,e,t,a,r,l),u=Yf(),n!==null&&!Un?(Vf(n,e,l),bt(n,e,l)):(tn&&u&&Lf(e),e.flags|=1,In(n,e,i,l),e.child)}function Fd(n,e,t,i,l){if(n===null){var r=t.type;return typeof r=="function"&&!Mf(r)&&r.defaultProps===void 0&&t.compare===null?(e.tag=15,e.type=r,Uy(n,e,r,i,l)):(n=iu(t.type,null,i,e,e.mode,l),n.ref=e.ref,n.return=e,e.child=n)}if(r=n.child,!Jf(n,l)){var a=r.memoizedProps;if(t=t.compare,t=t!==null?t:Ir,t(a,i)&&n.ref===e.ref)return bt(n,e,l)}return e.flags|=1,n=dt(r,i),n.ref=e.ref,n.return=e,e.child=n}function Uy(n,e,t,i,l){if(n!==null){var r=n.memoizedProps;if(Ir(r,i)&&n.ref===e.ref)if(Un=!1,e.pendingProps=i=r,Jf(n,l))n.flags&131072&&(Un=!0);else return e.lanes=n.lanes,bt(n,e,l)}return Tc(n,e,t,i,l)}function qy(n,e,t){var i=e.pendingProps,l=i.children,r=n!==null?n.memoizedState:null;if(i.mode==="hidden"){if(e.flags&128){if(i=r!==null?r.baseLanes|t:t,n!==null){for(l=e.child=n.child,r=0;l!==null;)r=r|l.lanes|l.childLanes,l=l.sibling;e.childLanes=r&~i}else e.childLanes=0,e.child=null;return Zd(n,e,i,t)}if(t&536870912)e.memoizedState={baseLanes:0,cachePool:null},n!==null&&lu(e,r!==null?r.cachePool:null),r!==null?jd(e,r):Sc(),Dy(e);else return e.lanes=e.childLanes=536870912,Zd(n,e,r!==null?r.baseLanes|t:t,t)}else r!==null?(lu(e,r.cachePool),jd(e,r),Mt(),e.memoizedState=null):(n!==null&&lu(e,null),Sc(),Mt());return In(n,e,l,t),e.child}function Zd(n,e,t,i){var l=jf();return l=l===null?null:{parent:Mn._currentValue,pool:l},e.memoizedState={baseLanes:t,cachePool:l},n!==null&&lu(e,null),Sc(),Dy(e),n!==null&&ha(n,e,i,!0),null}function uu(n,e){var t=e.ref;if(t===null)n!==null&&n.ref!==null&&(e.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(_(284));(n===null||n.ref!==t)&&(e.flags|=4194816)}}function Tc(n,e,t,i,l){return Ei(e),t=If(n,e,t,i,void 0,l),i=Yf(),n!==null&&!Un?(Vf(n,e,l),bt(n,e,l)):(tn&&i&&Lf(e),e.flags|=1,In(n,e,t,l),e.child)}function Pd(n,e,t,i,l,r){return Ei(e),e.updateQueue=null,t=Jg(e,i,t,l),Pg(n),i=Yf(),n!==null&&!Un?(Vf(n,e,r),bt(n,e,r)):(tn&&i&&Lf(e),e.flags|=1,In(n,e,t,r),e.child)}function Jd(n,e,t,i,l){if(Ei(e),e.stateNode===null){var r=ll,a=t.contextType;typeof a=="object"&&a!==null&&(r=$n(a)),r=new t(i,r),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=xc,e.stateNode=r,r._reactInternals=e,r=e.stateNode,r.props=i,r.state=e.memoizedState,r.refs={},Uf(e),a=t.contextType,r.context=typeof a=="object"&&a!==null?$n(a):ll,r.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(uo(e,t,a,i),r.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(a=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),a!==r.state&&xc.enqueueReplaceState(r,r.state,null),Or(e,i,r,l),Ar(),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308),i=!0}else if(n===null){r=e.stateNode;var u=e.memoizedProps,s=Ai(t,u);r.props=s;var o=r.context,f=t.contextType;a=ll,typeof f=="object"&&f!==null&&(a=$n(f));var c=t.getDerivedStateFromProps;f=typeof c=="function"||typeof r.getSnapshotBeforeUpdate=="function",u=e.pendingProps!==u,f||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(u||o!==a)&&$d(e,r,i,a),Ct=!1;var d=e.memoizedState;r.state=d,Or(e,i,r,l),Ar(),o=e.memoizedState,u||d!==o||Ct?(typeof c=="function"&&(uo(e,t,c,i),o=e.memoizedState),(s=Ct||Gd(e,t,s,i,d,o,a))?(f||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(e.flags|=4194308)):(typeof r.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=o),r.props=i,r.state=o,r.context=a,i=s):(typeof r.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{r=e.stateNode,yc(n,e),a=e.memoizedProps,f=Ai(t,a),r.props=f,c=e.pendingProps,d=r.context,o=t.contextType,s=ll,typeof o=="object"&&o!==null&&(s=$n(o)),u=t.getDerivedStateFromProps,(o=typeof u=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(a!==c||d!==s)&&$d(e,r,i,s),Ct=!1,d=e.memoizedState,r.state=d,Or(e,i,r,l),Ar();var h=e.memoizedState;a!==c||d!==h||Ct||n!==null&&n.dependencies!==null&&Cu(n.dependencies)?(typeof u=="function"&&(uo(e,t,u,i),h=e.memoizedState),(f=Ct||Gd(e,t,f,i,d,h,s)||n!==null&&n.dependencies!==null&&Cu(n.dependencies))?(o||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(i,h,s),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(i,h,s)),typeof r.componentDidUpdate=="function"&&(e.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof r.componentDidUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=h),r.props=i,r.state=h,r.context=s,i=f):(typeof r.componentDidUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=1024),i=!1)}return r=i,uu(n,e),i=(e.flags&128)!==0,r||i?(r=e.stateNode,t=i&&typeof t.getDerivedStateFromError!="function"?null:r.render(),e.flags|=1,n!==null&&i?(e.child=_l(e,n.child,null,l),e.child=_l(e,null,t,l)):In(n,e,t,l),e.memoizedState=r.state,n=e.child):n=bt(n,e,l),n}function Wd(n,e,t,i){return fa(),e.flags|=256,In(n,e,t,i),e.child}var so={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function oo(n){return{baseLanes:n,cachePool:$g()}}function co(n,e,t){return n=n!==null?n.childLanes&~t:0,e&&(n|=De),n}function Hy(n,e,t){var i=e.pendingProps,l=!1,r=(e.flags&128)!==0,a;if((a=r)||(a=n!==null&&n.memoizedState===null?!1:(Ln.current&2)!==0),a&&(l=!0,e.flags&=-129),a=(e.flags&32)!==0,e.flags&=-33,n===null){if(tn){if(l?zt(e):Mt(),tn){var u=En,s;if(s=u){n:{for(s=u,u=Ge;s.nodeType!==8;){if(!u){u=null;break n}if(s=qe(s.nextSibling),s===null){u=null;break n}}u=s}u!==null?(e.memoizedState={dehydrated:u,treeContext:bi!==null?{id:st,overflow:ot}:null,retryLane:536870912,hydrationErrors:null},s=me(18,null,null,0),s.stateNode=u,s.return=e,e.child=s,Pn=e,En=null,s=!0):s=!1}s||xi(e)}if(u=e.memoizedState,u!==null&&(u=u.dehydrated,u!==null))return qc(u)?e.lanes=32:e.lanes=536870912,null;ft(e)}return u=i.children,i=i.fallback,l?(Mt(),l=e.mode,u=Bu({mode:"hidden",children:u},l),i=yi(i,l,t,null),u.return=e,i.return=e,u.sibling=i,e.child=u,l=e.child,l.memoizedState=oo(t),l.childLanes=co(n,a,t),e.memoizedState=so,i):(zt(e),Ac(e,u))}if(s=n.memoizedState,s!==null&&(u=s.dehydrated,u!==null)){if(r)e.flags&256?(zt(e),e.flags&=-257,e=fo(n,e,t)):e.memoizedState!==null?(Mt(),e.child=n.child,e.flags|=128,e=null):(Mt(),l=i.fallback,u=e.mode,i=Bu({mode:"visible",children:i.children},u),l=yi(l,u,t,null),l.flags|=2,i.return=e,l.return=e,i.sibling=l,e.child=i,_l(e,n.child,null,t),i=e.child,i.memoizedState=oo(t),i.childLanes=co(n,a,t),e.memoizedState=so,e=l);else if(zt(e),qc(u)){if(a=u.nextSibling&&u.nextSibling.dataset,a)var o=a.dgst;a=o,i=Error(_(419)),i.stack="",i.digest=a,Yr({value:i,source:null,stack:null}),e=fo(n,e,t)}else if(Un||ha(n,e,t,!1),a=(t&n.childLanes)!==0,Un||a){if(a=pn,a!==null&&(i=t&-t,i=i&42?1:kf(i),i=i&(a.suspendedLanes|t)?0:i,i!==0&&i!==s.retryLane))throw s.retryLane=i,Hl(n,i),ve(a,n,i),jy;u.data==="$?"||zc(),e=fo(n,e,t)}else u.data==="$?"?(e.flags|=192,e.child=n.child,e=null):(n=s.treeContext,En=qe(u.nextSibling),Pn=e,tn=!0,Si=null,Ge=!1,n!==null&&(Ae[Oe++]=st,Ae[Oe++]=ot,Ae[Oe++]=bi,st=n.id,ot=n.overflow,bi=e),e=Ac(e,i.children),e.flags|=4096);return e}return l?(Mt(),l=i.fallback,u=e.mode,s=n.child,o=s.sibling,i=dt(s,{mode:"hidden",children:i.children}),i.subtreeFlags=s.subtreeFlags&65011712,o!==null?l=dt(o,l):(l=yi(l,u,t,null),l.flags|=2),l.return=e,i.return=e,i.sibling=l,e.child=i,i=l,l=e.child,u=n.child.memoizedState,u===null?u=oo(t):(s=u.cachePool,s!==null?(o=Mn._currentValue,s=s.parent!==o?{parent:o,pool:o}:s):s=$g(),u={baseLanes:u.baseLanes|t,cachePool:s}),l.memoizedState=u,l.childLanes=co(n,a,t),e.memoizedState=so,i):(zt(e),t=n.child,n=t.sibling,t=dt(t,{mode:"visible",children:i.children}),t.return=e,t.sibling=null,n!==null&&(a=e.deletions,a===null?(e.deletions=[n],e.flags|=16):a.push(n)),e.child=t,e.memoizedState=null,t)}function Ac(n,e){return e=Bu({mode:"visible",children:e},n.mode),e.return=n,n.child=e}function Bu(n,e){return n=me(22,n,null,e),n.lanes=0,n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},n}function fo(n,e,t){return _l(e,n.child,null,t),n=Ac(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function np(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),dc(n.return,e,t)}function ho(n,e,t,i,l){var r=n.memoizedState;r===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:l}:(r.isBackwards=e,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=t,r.tailMode=l)}function Iy(n,e,t){var i=e.pendingProps,l=i.revealOrder,r=i.tail;if(In(n,e,i.children,t),i=Ln.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)n:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&np(n,t,e);else if(n.tag===19)np(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break n;for(;n.sibling===null;){if(n.return===null||n.return===e)break n;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}switch(Sn(Ln,i),l){case"forwards":for(t=e.child,l=null;t!==null;)n=t.alternate,n!==null&&Mu(n)===null&&(l=t),t=t.sibling;t=l,t===null?(l=e.child,e.child=null):(l=t.sibling,t.sibling=null),ho(e,!1,l,t,r);break;case"backwards":for(t=null,l=e.child,e.child=null;l!==null;){if(n=l.alternate,n!==null&&Mu(n)===null){e.child=l;break}n=l.sibling,l.sibling=t,t=l,l=n}ho(e,!0,t,null,r);break;case"together":ho(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function bt(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Jt|=e.lanes,!(t&e.childLanes))if(n!==null){if(ha(n,e,t,!1),(t&e.childLanes)===0)return null}else return null;if(n!==null&&e.child!==n.child)throw Error(_(153));if(e.child!==null){for(n=e.child,t=dt(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=dt(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function Jf(n,e){return n.lanes&e?!0:(n=n.dependencies,!!(n!==null&&Cu(n)))}function aw(n,e,t){switch(e.tag){case 3:vu(e,e.stateNode.containerInfo),Dt(e,Mn,n.memoizedState.cache),fa();break;case 27:case 5:ec(e);break;case 4:vu(e,e.stateNode.containerInfo);break;case 10:Dt(e,e.type,e.memoizedProps.value);break;case 13:var i=e.memoizedState;if(i!==null)return i.dehydrated!==null?(zt(e),e.flags|=128,null):t&e.child.childLanes?Hy(n,e,t):(zt(e),n=bt(n,e,t),n!==null?n.sibling:null);zt(e);break;case 19:var l=(n.flags&128)!==0;if(i=(t&e.childLanes)!==0,i||(ha(n,e,t,!1),i=(t&e.childLanes)!==0),l){if(i)return Iy(n,e,t);e.flags|=128}if(l=e.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Sn(Ln,Ln.current),i)break;return null;case 22:case 23:return e.lanes=0,qy(n,e,t);case 24:Dt(e,Mn,n.memoizedState.cache)}return bt(n,e,t)}function Yy(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps)Un=!0;else{if(!Jf(n,t)&&!(e.flags&128))return Un=!1,aw(n,e,t);Un=!!(n.flags&131072)}else Un=!1,tn&&e.flags&1048576&&Kg(e,Ou,e.index);switch(e.lanes=0,e.tag){case 16:n:{n=e.pendingProps;var i=e.elementType,l=i._init;if(i=l(i._payload),e.type=i,typeof i=="function")Mf(i)?(n=Ai(i,n),e.tag=1,e=Jd(null,e,i,n,t)):(e.tag=0,e=Tc(null,e,i,n,t));else{if(i!=null){if(l=i.$$typeof,l===Sf){e.tag=11,e=Xd(null,e,i,n,t);break n}else if(l===vf){e.tag=14,e=Fd(null,e,i,n,t);break n}}throw e=Wo(i)||i,Error(_(306,e,""))}}return e;case 0:return Tc(n,e,e.type,e.pendingProps,t);case 1:return i=e.type,l=Ai(i,e.pendingProps),Jd(n,e,i,l,t);case 3:n:{if(vu(e,e.stateNode.containerInfo),n===null)throw Error(_(387));i=e.pendingProps;var r=e.memoizedState;l=r.element,yc(n,e),Or(e,i,null,t);var a=e.memoizedState;if(i=a.cache,Dt(e,Mn,i),i!==r.cache&&pc(e,[Mn],t,!0),Ar(),i=a.element,r.isDehydrated)if(r={element:i,isDehydrated:!1,cache:a.cache},e.updateQueue.baseState=r,e.memoizedState=r,e.flags&256){e=Wd(n,e,i,t);break n}else if(i!==l){l=Ne(Error(_(424)),e),Yr(l),e=Wd(n,e,i,t);break n}else{switch(n=e.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(En=qe(n.firstChild),Pn=e,tn=!0,Si=null,Ge=!0,t=Ny(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling}else{if(fa(),i===l){e=bt(n,e,t);break n}In(n,e,i,t)}e=e.child}return e;case 26:return uu(n,e),n===null?(t=yp(e.type,null,e.pendingProps,null))?e.memoizedState=t:tn||(t=e.type,n=e.pendingProps,i=Vu(Ht.current).createElement(t),i[Gn]=e,i[ue]=n,Vn(i,t,n),jn(i),e.stateNode=i):e.memoizedState=yp(e.type,n.memoizedProps,e.pendingProps,n.memoizedState),null;case 27:return ec(e),n===null&&tn&&(i=e.stateNode=C1(e.type,e.pendingProps,Ht.current),Pn=e,Ge=!0,l=En,ei(e.type)?(Hc=l,En=qe(i.firstChild)):En=l),In(n,e,e.pendingProps.children,t),uu(n,e),n===null&&(e.flags|=4194304),e.child;case 5:return n===null&&tn&&((l=i=En)&&(i=Lw(i,e.type,e.pendingProps,Ge),i!==null?(e.stateNode=i,Pn=e,En=qe(i.firstChild),Ge=!1,l=!0):l=!1),l||xi(e)),ec(e),l=e.type,r=e.pendingProps,a=n!==null?n.memoizedProps:null,i=r.children,jc(l,r)?i=null:a!==null&&jc(l,a)&&(e.flags|=32),e.memoizedState!==null&&(l=If(n,e,Jv,null,null,t),Xr._currentValue=l),uu(n,e),In(n,e,i,t),e.child;case 6:return n===null&&tn&&((n=t=En)&&(t=Rw(t,e.pendingProps,Ge),t!==null?(e.stateNode=t,Pn=e,En=null,n=!0):n=!1),n||xi(e)),null;case 13:return Hy(n,e,t);case 4:return vu(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=_l(e,null,i,t):In(n,e,i,t),e.child;case 11:return Xd(n,e,e.type,e.pendingProps,t);case 7:return In(n,e,e.pendingProps,t),e.child;case 8:return In(n,e,e.pendingProps.children,t),e.child;case 12:return In(n,e,e.pendingProps.children,t),e.child;case 10:return i=e.pendingProps,Dt(e,e.type,i.value),In(n,e,i.children,t),e.child;case 9:return l=e.type._context,i=e.pendingProps.children,Ei(e),l=$n(l),i=i(l),e.flags|=1,In(n,e,i,t),e.child;case 14:return Fd(n,e,e.type,e.pendingProps,t);case 15:return Uy(n,e,e.type,e.pendingProps,t);case 19:return Iy(n,e,t);case 31:return i=e.pendingProps,t=e.mode,i={mode:i.mode,children:i.children},n===null?(t=Bu(i,t),t.ref=e.ref,e.child=t,t.return=e,e=t):(t=dt(n.child,i),t.ref=e.ref,e.child=t,t.return=e,e=t),e;case 22:return qy(n,e,t);case 24:return Ei(e),i=$n(Mn),n===null?(l=jf(),l===null&&(l=pn,r=Bf(),l.pooledCache=r,r.refCount++,r!==null&&(l.pooledCacheLanes|=t),l=r),e.memoizedState={parent:i,cache:l},Uf(e),Dt(e,Mn,l)):(n.lanes&t&&(yc(n,e),Or(e,null,null,t),Ar()),l=n.memoizedState,r=e.memoizedState,l.parent!==i?(l={parent:i,cache:i},e.memoizedState=l,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=l),Dt(e,Mn,i)):(i=r.cache,Dt(e,Mn,i),i!==l.cache&&pc(e,[Mn],t,!0))),In(n,e,e.pendingProps.children,t),e.child;case 29:throw e.pendingProps}throw Error(_(156,e.tag))}function lt(n){n.flags|=4}function ep(n,e){if(e.type!=="stylesheet"||e.state.loading&4)n.flags&=-16777217;else if(n.flags|=16777216,!D1(e)){if(e=Me.current,e!==null&&((J&4194048)===J?Fe!==null:(J&62914560)!==J&&!(J&536870912)||e!==Fe))throw Er=gc,Qg;n.flags|=8192}}function qa(n,e){e!==null&&(n.flags|=4),n.flags&16384&&(e=n.tag!==22?pg():536870912,n.lanes|=e,Nl|=e)}function ur(n,e){if(!tn)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function wn(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var l=n.child;l!==null;)t|=l.lanes|l.childLanes,i|=l.subtreeFlags&65011712,i|=l.flags&65011712,l.return=n,l=l.sibling;else for(l=n.child;l!==null;)t|=l.lanes|l.childLanes,i|=l.subtreeFlags,i|=l.flags,l.return=n,l=l.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function uw(n,e,t){var i=e.pendingProps;switch(Rf(e),e.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return wn(e),null;case 1:return wn(e),null;case 3:return t=e.stateNode,i=null,n!==null&&(i=n.memoizedState.cache),e.memoizedState.cache!==i&&(e.flags|=2048),pt(Mn),xl(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(n===null||n.child===null)&&(rr(e)?lt(e):n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Dd())),wn(e),null;case 26:return t=e.memoizedState,n===null?(lt(e),t!==null?(wn(e),ep(e,t)):(wn(e),e.flags&=-16777217)):t?t!==n.memoizedState?(lt(e),wn(e),ep(e,t)):(wn(e),e.flags&=-16777217):(n.memoizedProps!==i&&lt(e),wn(e),e.flags&=-16777217),null;case 27:wu(e),t=Ht.current;var l=e.type;if(n!==null&&e.stateNode!=null)n.memoizedProps!==i&&lt(e);else{if(!i){if(e.stateNode===null)throw Error(_(166));return wn(e),null}n=Qe.current,rr(e)?_d(e):(n=C1(l,i,t),e.stateNode=n,lt(e))}return wn(e),null;case 5:if(wu(e),t=e.type,n!==null&&e.stateNode!=null)n.memoizedProps!==i&&lt(e);else{if(!i){if(e.stateNode===null)throw Error(_(166));return wn(e),null}if(n=Qe.current,rr(e))_d(e);else{switch(l=Vu(Ht.current),n){case 1:n=l.createElementNS("http://www.w3.org/2000/svg",t);break;case 2:n=l.createElementNS("http://www.w3.org/1998/Math/MathML",t);break;default:switch(t){case"svg":n=l.createElementNS("http://www.w3.org/2000/svg",t);break;case"math":n=l.createElementNS("http://www.w3.org/1998/Math/MathML",t);break;case"script":n=l.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof i.is=="string"?l.createElement("select",{is:i.is}):l.createElement("select"),i.multiple?n.multiple=!0:i.size&&(n.size=i.size);break;default:n=typeof i.is=="string"?l.createElement(t,{is:i.is}):l.createElement(t)}}n[Gn]=e,n[ue]=i;n:for(l=e.child;l!==null;){if(l.tag===5||l.tag===6)n.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===e)break n;for(;l.sibling===null;){if(l.return===null||l.return===e)break n;l=l.return}l.sibling.return=l.return,l=l.sibling}e.stateNode=n;n:switch(Vn(n,t,i),t){case"button":case"input":case"select":case"textarea":n=!!i.autoFocus;break n;case"img":n=!0;break n;default:n=!1}n&&lt(e)}}return wn(e),e.flags&=-16777217,null;case 6:if(n&&e.stateNode!=null)n.memoizedProps!==i&&lt(e);else{if(typeof i!="string"&&e.stateNode===null)throw Error(_(166));if(n=Ht.current,rr(e)){if(n=e.stateNode,t=e.memoizedProps,i=null,l=Pn,l!==null)switch(l.tag){case 27:case 5:i=l.memoizedProps}n[Gn]=e,n=!!(n.nodeValue===t||i!==null&&i.suppressHydrationWarning===!0||T1(n.nodeValue,t)),n||xi(e)}else n=Vu(n).createTextNode(i),n[Gn]=e,e.stateNode=n}return wn(e),null;case 13:if(i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(l=rr(e),i!==null&&i.dehydrated!==null){if(n===null){if(!l)throw Error(_(318));if(l=e.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(_(317));l[Gn]=e}else fa(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;wn(e),l=!1}else l=Dd(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=l),l=!0;if(!l)return e.flags&256?(ft(e),e):(ft(e),null)}if(ft(e),e.flags&128)return e.lanes=t,e;if(t=i!==null,n=n!==null&&n.memoizedState!==null,t){i=e.child,l=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(l=i.alternate.memoizedState.cachePool.pool);var r=null;i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(r=i.memoizedState.cachePool.pool),r!==l&&(i.flags|=2048)}return t!==n&&t&&(e.child.flags|=8192),qa(e,e.updateQueue),wn(e),null;case 4:return xl(),n===null&&ah(e.stateNode.containerInfo),wn(e),null;case 10:return pt(e.type),wn(e),null;case 19:if(qn(Ln),l=e.memoizedState,l===null)return wn(e),null;if(i=(e.flags&128)!==0,r=l.rendering,r===null)if(i)ur(l,!1);else{if(Tn!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(r=Mu(n),r!==null){for(e.flags|=128,ur(l,!1),n=r.updateQueue,e.updateQueue=n,qa(e,n),e.subtreeFlags=0,n=t,t=e.child;t!==null;)Vg(t,n),t=t.sibling;return Sn(Ln,Ln.current&1|2),e.child}n=n.sibling}l.tail!==null&&Xe()>Uu&&(e.flags|=128,i=!0,ur(l,!1),e.lanes=4194304)}else{if(!i)if(n=Mu(r),n!==null){if(e.flags|=128,i=!0,n=n.updateQueue,e.updateQueue=n,qa(e,n),ur(l,!0),l.tail===null&&l.tailMode==="hidden"&&!r.alternate&&!tn)return wn(e),null}else 2*Xe()-l.renderingStartTime>Uu&&t!==536870912&&(e.flags|=128,i=!0,ur(l,!1),e.lanes=4194304);l.isBackwards?(r.sibling=e.child,e.child=r):(n=l.last,n!==null?n.sibling=r:e.child=r,l.last=r)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=Xe(),e.sibling=null,n=Ln.current,Sn(Ln,i?n&1|2:n&1),e):(wn(e),null);case 22:case 23:return ft(e),qf(),i=e.memoizedState!==null,n!==null?n.memoizedState!==null!==i&&(e.flags|=8192):i&&(e.flags|=8192),i?t&536870912&&!(e.flags&128)&&(wn(e),e.subtreeFlags&6&&(e.flags|=8192)):wn(e),t=e.updateQueue,t!==null&&qa(e,t.retryQueue),t=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),i=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),i!==t&&(e.flags|=2048),n!==null&&qn(vi),null;case 24:return t=null,n!==null&&(t=n.memoizedState.cache),e.memoizedState.cache!==t&&(e.flags|=2048),pt(Mn),wn(e),null;case 25:return null;case 30:return null}throw Error(_(156,e.tag))}function sw(n,e){switch(Rf(e),e.tag){case 1:return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return pt(Mn),xl(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 26:case 27:case 5:return wu(e),null;case 13:if(ft(e),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(_(340));fa()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return qn(Ln),null;case 4:return xl(),null;case 10:return pt(e.type),null;case 22:case 23:return ft(e),qf(),n!==null&&qn(vi),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 24:return pt(Mn),null;case 25:return null;default:return null}}function Vy(n,e){switch(Rf(e),e.tag){case 3:pt(Mn),xl();break;case 26:case 27:case 5:wu(e);break;case 4:xl();break;case 13:ft(e);break;case 19:qn(Ln);break;case 10:pt(e.type);break;case 22:case 23:ft(e),qf(),n!==null&&qn(vi);break;case 24:pt(Mn)}}function ya(n,e){try{var t=e.updateQueue,i=t!==null?t.lastEffect:null;if(i!==null){var l=i.next;t=l;do{if((t.tag&n)===n){i=void 0;var r=t.create,a=t.inst;i=r(),a.destroy=i}t=t.next}while(t!==l)}}catch(u){cn(e,e.return,u)}}function Pt(n,e,t){try{var i=e.updateQueue,l=i!==null?i.lastEffect:null;if(l!==null){var r=l.next;i=r;do{if((i.tag&n)===n){var a=i.inst,u=a.destroy;if(u!==void 0){a.destroy=void 0,l=e;var s=t,o=u;try{o()}catch(f){cn(l,s,f)}}}i=i.next}while(i!==r)}}catch(f){cn(e,e.return,f)}}function Ky(n){var e=n.updateQueue;if(e!==null){var t=n.stateNode;try{Zg(e,t)}catch(i){cn(n,n.return,i)}}}function Gy(n,e,t){t.props=Ai(n.type,n.memoizedProps),t.state=n.memoizedState;try{t.componentWillUnmount()}catch(i){cn(n,e,i)}}function _r(n,e){try{var t=n.ref;if(t!==null){switch(n.tag){case 26:case 27:case 5:var i=n.stateNode;break;case 30:i=n.stateNode;break;default:i=n.stateNode}typeof t=="function"?n.refCleanup=t(i):t.current=i}}catch(l){cn(n,e,l)}}function $e(n,e){var t=n.ref,i=n.refCleanup;if(t!==null)if(typeof i=="function")try{i()}catch(l){cn(n,e,l)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(l){cn(n,e,l)}else t.current=null}function $y(n){var e=n.type,t=n.memoizedProps,i=n.stateNode;try{n:switch(e){case"button":case"input":case"select":case"textarea":t.autoFocus&&i.focus();break n;case"img":t.src?i.src=t.src:t.srcSet&&(i.srcset=t.srcSet)}}catch(l){cn(n,n.return,l)}}function po(n,e,t){try{var i=n.stateNode;_w(i,n.type,t,e),i[ue]=e}catch(l){cn(n,n.return,l)}}function Qy(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&ei(n.type)||n.tag===4}function mo(n){n:for(;;){for(;n.sibling===null;){if(n.return===null||Qy(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&ei(n.type)||n.flags&2||n.child===null||n.tag===4)continue n;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Oc(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(n,e):(e=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,e.appendChild(n),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=ws));else if(i!==4&&(i===27&&ei(n.type)&&(t=n.stateNode,e=null),n=n.child,n!==null))for(Oc(n,e,t),n=n.sibling;n!==null;)Oc(n,e,t),n=n.sibling}function ju(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(i===27&&ei(n.type)&&(t=n.stateNode),n=n.child,n!==null))for(ju(n,e,t),n=n.sibling;n!==null;)ju(n,e,t),n=n.sibling}function Xy(n){var e=n.stateNode,t=n.memoizedProps;try{for(var i=n.type,l=e.attributes;l.length;)e.removeAttributeNode(l[0]);Vn(e,i,t),e[Gn]=n,e[ue]=t}catch(r){cn(n,n.return,r)}}var at=!1,On=!1,go=!1,tp=typeof WeakSet=="function"?WeakSet:Set,Bn=null;function ow(n,e){if(n=n.containerInfo,Rc=Qu,n=Rg(n),Nf(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else n:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var l=i.anchorOffset,r=i.focusNode;i=i.focusOffset;try{t.nodeType,r.nodeType}catch{t=null;break n}var a=0,u=-1,s=-1,o=0,f=0,c=n,d=null;e:for(;;){for(var h;c!==t||l!==0&&c.nodeType!==3||(u=a+l),c!==r||i!==0&&c.nodeType!==3||(s=a+i),c.nodeType===3&&(a+=c.nodeValue.length),(h=c.firstChild)!==null;)d=c,c=h;for(;;){if(c===n)break e;if(d===t&&++o===l&&(u=a),d===r&&++f===i&&(s=a),(h=c.nextSibling)!==null)break;c=d,d=c.parentNode}c=h}t=u===-1||s===-1?null:{start:u,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(Bc={focusedElem:n,selectionRange:t},Qu=!1,Bn=e;Bn!==null;)if(e=Bn,n=e.child,(e.subtreeFlags&1024)!==0&&n!==null)n.return=e,Bn=n;else for(;Bn!==null;){switch(e=Bn,r=e.alternate,n=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if(n&1024&&r!==null){n=void 0,t=e,l=r.memoizedProps,r=r.memoizedState,i=t.stateNode;try{var y=Ai(t.type,l,t.elementType===t.type);n=i.getSnapshotBeforeUpdate(y,r),i.__reactInternalSnapshotBeforeUpdate=n}catch(g){cn(t,t.return,g)}}break;case 3:if(n&1024){if(n=e.stateNode.containerInfo,t=n.nodeType,t===9)Uc(n);else if(t===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":Uc(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(n&1024)throw Error(_(163))}if(n=e.sibling,n!==null){n.return=e.return,Bn=n;break}Bn=e.return}}function Fy(n,e,t){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Et(n,t),i&4&&ya(5,t);break;case 1:if(Et(n,t),i&4)if(n=t.stateNode,e===null)try{n.componentDidMount()}catch(a){cn(t,t.return,a)}else{var l=Ai(t.type,e.memoizedProps);e=e.memoizedState;try{n.componentDidUpdate(l,e,n.__reactInternalSnapshotBeforeUpdate)}catch(a){cn(t,t.return,a)}}i&64&&Ky(t),i&512&&_r(t,t.return);break;case 3:if(Et(n,t),i&64&&(n=t.updateQueue,n!==null)){if(e=null,t.child!==null)switch(t.child.tag){case 27:case 5:e=t.child.stateNode;break;case 1:e=t.child.stateNode}try{Zg(n,e)}catch(a){cn(t,t.return,a)}}break;case 27:e===null&&i&4&&Xy(t);case 26:case 5:Et(n,t),e===null&&i&4&&$y(t),i&512&&_r(t,t.return);break;case 12:Et(n,t);break;case 13:Et(n,t),i&4&&Jy(n,t),i&64&&(n=t.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(t=bw.bind(null,t),Bw(n,t))));break;case 22:if(i=t.memoizedState!==null||at,!i){e=e!==null&&e.memoizedState!==null||On,l=at;var r=On;at=i,(On=e)&&!r?At(n,t,(t.subtreeFlags&8772)!==0):Et(n,t),at=l,On=r}break;case 30:break;default:Et(n,t)}}function Zy(n){var e=n.alternate;e!==null&&(n.alternate=null,Zy(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&Ef(e)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var yn=null,le=!1;function rt(n,e,t){for(t=t.child;t!==null;)Py(n,e,t),t=t.sibling}function Py(n,e,t){if(ye&&typeof ye.onCommitFiberUnmount=="function")try{ye.onCommitFiberUnmount(aa,t)}catch{}switch(t.tag){case 26:On||$e(t,e),rt(n,e,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:On||$e(t,e);var i=yn,l=le;ei(t.type)&&(yn=t.stateNode,le=!1),rt(n,e,t),Mr(t.stateNode),yn=i,le=l;break;case 5:On||$e(t,e);case 6:if(i=yn,l=le,yn=null,rt(n,e,t),yn=i,le=l,yn!==null)if(le)try{(yn.nodeType===9?yn.body:yn.nodeName==="HTML"?yn.ownerDocument.body:yn).removeChild(t.stateNode)}catch(r){cn(t,e,r)}else try{yn.removeChild(t.stateNode)}catch(r){cn(t,e,r)}break;case 18:yn!==null&&(le?(n=yn,pp(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.stateNode),Pr(n)):pp(yn,t.stateNode));break;case 4:i=yn,l=le,yn=t.stateNode.containerInfo,le=!0,rt(n,e,t),yn=i,le=l;break;case 0:case 11:case 14:case 15:On||Pt(2,t,e),On||Pt(4,t,e),rt(n,e,t);break;case 1:On||($e(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"&&Gy(t,e,i)),rt(n,e,t);break;case 21:rt(n,e,t);break;case 22:On=(i=On)||t.memoizedState!==null,rt(n,e,t),On=i;break;default:rt(n,e,t)}}function Jy(n,e){if(e.memoizedState===null&&(n=e.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{Pr(n)}catch(t){cn(e,e.return,t)}}function cw(n){switch(n.tag){case 13:case 19:var e=n.stateNode;return e===null&&(e=n.stateNode=new tp),e;case 22:return n=n.stateNode,e=n._retryCache,e===null&&(e=n._retryCache=new tp),e;default:throw Error(_(435,n.tag))}}function yo(n,e){var t=cw(n);e.forEach(function(i){var l=Sw.bind(null,n,i);t.has(i)||(t.add(i),i.then(l,l))})}function fe(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var l=t[i],r=n,a=e,u=a;n:for(;u!==null;){switch(u.tag){case 27:if(ei(u.type)){yn=u.stateNode,le=!1;break n}break;case 5:yn=u.stateNode,le=!1;break n;case 3:case 4:yn=u.stateNode.containerInfo,le=!0;break n}u=u.return}if(yn===null)throw Error(_(160));Py(r,a,l),yn=null,le=!1,r=l.alternate,r!==null&&(r.return=null),l.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)Wy(e,n),e=e.sibling}var Ue=null;function Wy(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:fe(e,n),he(n),i&4&&(Pt(3,n,n.return),ya(3,n),Pt(5,n,n.return));break;case 1:fe(e,n),he(n),i&512&&(On||t===null||$e(t,t.return)),i&64&&at&&(n=n.updateQueue,n!==null&&(i=n.callbacks,i!==null&&(t=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=t===null?i:t.concat(i))));break;case 26:var l=Ue;if(fe(e,n),he(n),i&512&&(On||t===null||$e(t,t.return)),i&4){var r=t!==null?t.memoizedState:null;if(i=n.memoizedState,t===null)if(i===null)if(n.stateNode===null){n:{i=n.type,t=n.memoizedProps,l=l.ownerDocument||l;e:switch(i){case"title":r=l.getElementsByTagName("title")[0],(!r||r[oa]||r[Gn]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=l.createElement(i),l.head.insertBefore(r,l.querySelector("head > title"))),Vn(r,i,t),r[Gn]=n,jn(r),i=r;break n;case"link":var a=Sp("link","href",l).get(i+(t.href||""));if(a){for(var u=0;u<a.length;u++)if(r=a[u],r.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&r.getAttribute("rel")===(t.rel==null?null:t.rel)&&r.getAttribute("title")===(t.title==null?null:t.title)&&r.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){a.splice(u,1);break e}}r=l.createElement(i),Vn(r,i,t),l.head.appendChild(r);break;case"meta":if(a=Sp("meta","content",l).get(i+(t.content||""))){for(u=0;u<a.length;u++)if(r=a[u],r.getAttribute("content")===(t.content==null?null:""+t.content)&&r.getAttribute("name")===(t.name==null?null:t.name)&&r.getAttribute("property")===(t.property==null?null:t.property)&&r.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&r.getAttribute("charset")===(t.charSet==null?null:t.charSet)){a.splice(u,1);break e}}r=l.createElement(i),Vn(r,i,t),l.head.appendChild(r);break;default:throw Error(_(468,i))}r[Gn]=n,jn(r),i=r}n.stateNode=i}else vp(l,n.type,n.stateNode);else n.stateNode=bp(l,i,n.memoizedProps);else r!==i?(r===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):r.count--,i===null?vp(l,n.type,n.stateNode):bp(l,i,n.memoizedProps)):i===null&&n.stateNode!==null&&po(n,n.memoizedProps,t.memoizedProps)}break;case 27:fe(e,n),he(n),i&512&&(On||t===null||$e(t,t.return)),t!==null&&i&4&&po(n,n.memoizedProps,t.memoizedProps);break;case 5:if(fe(e,n),he(n),i&512&&(On||t===null||$e(t,t.return)),n.flags&32){l=n.stateNode;try{Tl(l,"")}catch(h){cn(n,n.return,h)}}i&4&&n.stateNode!=null&&(l=n.memoizedProps,po(n,l,t!==null?t.memoizedProps:l)),i&1024&&(go=!0);break;case 6:if(fe(e,n),he(n),i&4){if(n.stateNode===null)throw Error(_(162));i=n.memoizedProps,t=n.stateNode;try{t.nodeValue=i}catch(h){cn(n,n.return,h)}}break;case 3:if(cu=null,l=Ue,Ue=Ku(e.containerInfo),fe(e,n),Ue=l,he(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{Pr(e.containerInfo)}catch(h){cn(n,n.return,h)}go&&(go=!1,n1(n));break;case 4:i=Ue,Ue=Ku(n.stateNode.containerInfo),fe(e,n),he(n),Ue=i;break;case 12:fe(e,n),he(n);break;case 13:fe(e,n),he(n),n.child.flags&8192&&n.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(ih=Xe()),i&4&&(i=n.updateQueue,i!==null&&(n.updateQueue=null,yo(n,i)));break;case 22:l=n.memoizedState!==null;var s=t!==null&&t.memoizedState!==null,o=at,f=On;if(at=o||l,On=f||s,fe(e,n),On=f,at=o,he(n),i&8192)n:for(e=n.stateNode,e._visibility=l?e._visibility&-2:e._visibility|1,l&&(t===null||s||at||On||fi(n)),t=null,e=n;;){if(e.tag===5||e.tag===26){if(t===null){s=t=e;try{if(r=s.stateNode,l)a=r.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none";else{u=s.stateNode;var c=s.memoizedProps.style,d=c!=null&&c.hasOwnProperty("display")?c.display:null;u.style.display=d==null||typeof d=="boolean"?"":(""+d).trim()}}catch(h){cn(s,s.return,h)}}}else if(e.tag===6){if(t===null){s=e;try{s.stateNode.nodeValue=l?"":s.memoizedProps}catch(h){cn(s,s.return,h)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===n)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break n;for(;e.sibling===null;){if(e.return===null||e.return===n)break n;t===e&&(t=null),e=e.return}t===e&&(t=null),e.sibling.return=e.return,e=e.sibling}i&4&&(i=n.updateQueue,i!==null&&(t=i.retryQueue,t!==null&&(i.retryQueue=null,yo(n,t))));break;case 19:fe(e,n),he(n),i&4&&(i=n.updateQueue,i!==null&&(n.updateQueue=null,yo(n,i)));break;case 30:break;case 21:break;default:fe(e,n),he(n)}}function he(n){var e=n.flags;if(e&2){try{for(var t,i=n.return;i!==null;){if(Qy(i)){t=i;break}i=i.return}if(t==null)throw Error(_(160));switch(t.tag){case 27:var l=t.stateNode,r=mo(n);ju(n,r,l);break;case 5:var a=t.stateNode;t.flags&32&&(Tl(a,""),t.flags&=-33);var u=mo(n);ju(n,u,a);break;case 3:case 4:var s=t.stateNode.containerInfo,o=mo(n);Oc(n,o,s);break;default:throw Error(_(161))}}catch(f){cn(n,n.return,f)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function n1(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var e=n;n1(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),n=n.sibling}}function Et(n,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Fy(n,e.alternate,e),e=e.sibling}function fi(n){for(n=n.child;n!==null;){var e=n;switch(e.tag){case 0:case 11:case 14:case 15:Pt(4,e,e.return),fi(e);break;case 1:$e(e,e.return);var t=e.stateNode;typeof t.componentWillUnmount=="function"&&Gy(e,e.return,t),fi(e);break;case 27:Mr(e.stateNode);case 26:case 5:$e(e,e.return),fi(e);break;case 22:e.memoizedState===null&&fi(e);break;case 30:fi(e);break;default:fi(e)}n=n.sibling}}function At(n,e,t){for(t=t&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var i=e.alternate,l=n,r=e,a=r.flags;switch(r.tag){case 0:case 11:case 15:At(l,r,t),ya(4,r);break;case 1:if(At(l,r,t),i=r,l=i.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(o){cn(i,i.return,o)}if(i=r,l=i.updateQueue,l!==null){var u=i.stateNode;try{var s=l.shared.hiddenCallbacks;if(s!==null)for(l.shared.hiddenCallbacks=null,l=0;l<s.length;l++)Fg(s[l],u)}catch(o){cn(i,i.return,o)}}t&&a&64&&Ky(r),_r(r,r.return);break;case 27:Xy(r);case 26:case 5:At(l,r,t),t&&i===null&&a&4&&$y(r),_r(r,r.return);break;case 12:At(l,r,t);break;case 13:At(l,r,t),t&&a&4&&Jy(l,r);break;case 22:r.memoizedState===null&&At(l,r,t),_r(r,r.return);break;case 30:break;default:At(l,r,t)}e=e.sibling}}function Wf(n,e){var t=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),n=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),n!==t&&(n!=null&&n.refCount++,t!=null&&da(t))}function nh(n,e){n=null,e.alternate!==null&&(n=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==n&&(e.refCount++,n!=null&&da(n))}function Ve(n,e,t,i){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)e1(n,e,t,i),e=e.sibling}function e1(n,e,t,i){var l=e.flags;switch(e.tag){case 0:case 11:case 15:Ve(n,e,t,i),l&2048&&ya(9,e);break;case 1:Ve(n,e,t,i);break;case 3:Ve(n,e,t,i),l&2048&&(n=null,e.alternate!==null&&(n=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==n&&(e.refCount++,n!=null&&da(n)));break;case 12:if(l&2048){Ve(n,e,t,i),n=e.stateNode;try{var r=e.memoizedProps,a=r.id,u=r.onPostCommit;typeof u=="function"&&u(a,e.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(s){cn(e,e.return,s)}}else Ve(n,e,t,i);break;case 13:Ve(n,e,t,i);break;case 23:break;case 22:r=e.stateNode,a=e.alternate,e.memoizedState!==null?r._visibility&2?Ve(n,e,t,i):Nr(n,e):r._visibility&2?Ve(n,e,t,i):(r._visibility|=2,Qi(n,e,t,i,(e.subtreeFlags&10256)!==0)),l&2048&&Wf(a,e);break;case 24:Ve(n,e,t,i),l&2048&&nh(e.alternate,e);break;default:Ve(n,e,t,i)}}function Qi(n,e,t,i,l){for(l=l&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var r=n,a=e,u=t,s=i,o=a.flags;switch(a.tag){case 0:case 11:case 15:Qi(r,a,u,s,l),ya(8,a);break;case 23:break;case 22:var f=a.stateNode;a.memoizedState!==null?f._visibility&2?Qi(r,a,u,s,l):Nr(r,a):(f._visibility|=2,Qi(r,a,u,s,l)),l&&o&2048&&Wf(a.alternate,a);break;case 24:Qi(r,a,u,s,l),l&&o&2048&&nh(a.alternate,a);break;default:Qi(r,a,u,s,l)}e=e.sibling}}function Nr(n,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var t=n,i=e,l=i.flags;switch(i.tag){case 22:Nr(t,i),l&2048&&Wf(i.alternate,i);break;case 24:Nr(t,i),l&2048&&nh(i.alternate,i);break;default:Nr(t,i)}e=e.sibling}}var yr=8192;function Hi(n){if(n.subtreeFlags&yr)for(n=n.child;n!==null;)t1(n),n=n.sibling}function t1(n){switch(n.tag){case 26:Hi(n),n.flags&yr&&n.memoizedState!==null&&Fw(Ue,n.memoizedState,n.memoizedProps);break;case 5:Hi(n);break;case 3:case 4:var e=Ue;Ue=Ku(n.stateNode.containerInfo),Hi(n),Ue=e;break;case 22:n.memoizedState===null&&(e=n.alternate,e!==null&&e.memoizedState!==null?(e=yr,yr=16777216,Hi(n),yr=e):Hi(n));break;default:Hi(n)}}function i1(n){var e=n.alternate;if(e!==null&&(n=e.child,n!==null)){e.child=null;do e=n.sibling,n.sibling=null,n=e;while(n!==null)}}function sr(n){var e=n.deletions;if(n.flags&16){if(e!==null)for(var t=0;t<e.length;t++){var i=e[t];Bn=i,r1(i,n)}i1(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)l1(n),n=n.sibling}function l1(n){switch(n.tag){case 0:case 11:case 15:sr(n),n.flags&2048&&Pt(9,n,n.return);break;case 3:sr(n);break;case 12:sr(n);break;case 22:var e=n.stateNode;n.memoizedState!==null&&e._visibility&2&&(n.return===null||n.return.tag!==13)?(e._visibility&=-3,su(n)):sr(n);break;default:sr(n)}}function su(n){var e=n.deletions;if(n.flags&16){if(e!==null)for(var t=0;t<e.length;t++){var i=e[t];Bn=i,r1(i,n)}i1(n)}for(n=n.child;n!==null;){switch(e=n,e.tag){case 0:case 11:case 15:Pt(8,e,e.return),su(e);break;case 22:t=e.stateNode,t._visibility&2&&(t._visibility&=-3,su(e));break;default:su(e)}n=n.sibling}}function r1(n,e){for(;Bn!==null;){var t=Bn;switch(t.tag){case 0:case 11:case 15:Pt(8,t,e);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var i=t.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:da(t.memoizedState.cache)}if(i=t.child,i!==null)i.return=t,Bn=i;else n:for(t=n;Bn!==null;){i=Bn;var l=i.sibling,r=i.return;if(Zy(i),i===t){Bn=null;break n}if(l!==null){l.return=r,Bn=l;break n}Bn=r}}}var fw={getCacheForType:function(n){var e=$n(Mn),t=e.data.get(n);return t===void 0&&(t=n(),e.data.set(n,t)),t}},hw=typeof WeakMap=="function"?WeakMap:Map,an=0,pn=null,F=null,J=0,rn=0,pe=null,jt=!1,Il=!1,eh=!1,St=0,Tn=0,Jt=0,wi=0,th=0,De=0,Nl=0,Dr=null,re=null,Cc=!1,ih=0,Uu=1/0,qu=null,Vt=null,Yn=0,Kt=null,Dl=null,Sl=0,_c=0,Nc=null,a1=null,zr=0,Dc=null;function Se(){if(an&2&&J!==0)return J&-J;if(I.T!==null){var n=Al;return n!==0?n:rh()}return yg()}function u1(){De===0&&(De=!(J&536870912)||tn?dg():536870912);var n=Me.current;return n!==null&&(n.flags|=32),De}function ve(n,e,t){(n===pn&&(rn===2||rn===9)||n.cancelPendingCommit!==null)&&(zl(n,0),Ut(n,J,De,!1)),sa(n,t),(!(an&2)||n!==pn)&&(n===pn&&(!(an&2)&&(wi|=t),Tn===4&&Ut(n,J,De,!1)),We(n))}function s1(n,e,t){if(an&6)throw Error(_(327));var i=!t&&(e&124)===0&&(e&n.expiredLanes)===0||ua(n,e),l=i?mw(n,e):bo(n,e,!0),r=i;do{if(l===0){Il&&!i&&Ut(n,e,0,!1);break}else{if(t=n.current.alternate,r&&!dw(t)){l=bo(n,e,!1),r=!1;continue}if(l===2){if(r=e,n.errorRecoveryDisabledLanes&r)var a=0;else a=n.pendingLanes&-536870913,a=a!==0?a:a&536870912?536870912:0;if(a!==0){e=a;n:{var u=n;l=Dr;var s=u.current.memoizedState.isDehydrated;if(s&&(zl(u,a).flags|=256),a=bo(u,a,!1),a!==2){if(eh&&!s){u.errorRecoveryDisabledLanes|=r,wi|=r,l=4;break n}r=re,re=l,r!==null&&(re===null?re=r:re.push.apply(re,r))}l=a}if(r=!1,l!==2)continue}}if(l===1){zl(n,0),Ut(n,e,0,!0);break}n:{switch(i=n,r=l,r){case 0:case 1:throw Error(_(345));case 4:if((e&4194048)!==e)break;case 6:Ut(i,e,De,!jt);break n;case 2:re=null;break;case 3:case 5:break;default:throw Error(_(329))}if((e&62914560)===e&&(l=ih+300-Xe(),10<l)){if(Ut(i,e,De,!jt),ss(i,0,!0)!==0)break n;i.timeoutHandle=O1(ip.bind(null,i,t,re,qu,Cc,e,De,wi,Nl,jt,r,2,-0,0),l);break n}ip(i,t,re,qu,Cc,e,De,wi,Nl,jt,r,0,-0,0)}}break}while(!0);We(n)}function ip(n,e,t,i,l,r,a,u,s,o,f,c,d,h){if(n.timeoutHandle=-1,c=e.subtreeFlags,(c&8192||(c&16785408)===16785408)&&(Qr={stylesheets:null,count:0,unsuspend:Xw},t1(e),c=Zw(),c!==null)){n.cancelPendingCommit=c(rp.bind(null,n,e,r,t,i,l,a,u,s,f,1,d,h)),Ut(n,r,a,!o);return}rp(n,e,r,t,i,l,a,u,s)}function dw(n){for(var e=n;;){var t=e.tag;if((t===0||t===11||t===15)&&e.flags&16384&&(t=e.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var i=0;i<t.length;i++){var l=t[i],r=l.getSnapshot;l=l.value;try{if(!ke(r(),l))return!1}catch{return!1}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ut(n,e,t,i){e&=~th,e&=~wi,n.suspendedLanes|=e,n.pingedLanes&=~e,i&&(n.warmLanes|=e),i=n.expirationTimes;for(var l=e;0<l;){var r=31-be(l),a=1<<r;i[r]=-1,l&=~a}t!==0&&mg(n,t,e)}function bs(){return an&6?!0:(ba(0),!1)}function lh(){if(F!==null){if(rn===0)var n=F.return;else n=F,ct=zi=null,Kf(n),bl=null,Kr=0,n=F;for(;n!==null;)Vy(n.alternate,n),n=n.return;F=null}}function zl(n,e){var t=n.timeoutHandle;t!==-1&&(n.timeoutHandle=-1,Dw(t)),t=n.cancelPendingCommit,t!==null&&(n.cancelPendingCommit=null,t()),lh(),pn=n,F=t=dt(n.current,null),J=e,rn=0,pe=null,jt=!1,Il=ua(n,e),eh=!1,Nl=De=th=wi=Jt=Tn=0,re=Dr=null,Cc=!1,e&8&&(e|=e&32);var i=n.entangledLanes;if(i!==0)for(n=n.entanglements,i&=e;0<i;){var l=31-be(i),r=1<<l;e|=n[l],i&=~r}return St=e,hs(),t}function o1(n,e){$=null,I.H=zu,e===pa||e===ps?(e=Rd(),rn=3):e===Qg?(e=Rd(),rn=4):rn=e===jy?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,pe=e,F===null&&(Tn=1,Ru(n,Ne(e,n.current)))}function c1(){var n=I.H;return I.H=zu,n===null?zu:n}function f1(){var n=I.A;return I.A=fw,n}function zc(){Tn=4,jt||(J&4194048)!==J&&Me.current!==null||(Il=!0),!(Jt&134217727)&&!(wi&134217727)||pn===null||Ut(pn,J,De,!1)}function bo(n,e,t){var i=an;an|=2;var l=c1(),r=f1();(pn!==n||J!==e)&&(qu=null,zl(n,e)),e=!1;var a=Tn;n:do try{if(rn!==0&&F!==null){var u=F,s=pe;switch(rn){case 8:lh(),a=6;break n;case 3:case 2:case 9:case 6:Me.current===null&&(e=!0);var o=rn;if(rn=0,pe=null,ul(n,u,s,o),t&&Il){a=0;break n}break;default:o=rn,rn=0,pe=null,ul(n,u,s,o)}}pw(),a=Tn;break}catch(f){o1(n,f)}while(!0);return e&&n.shellSuspendCounter++,ct=zi=null,an=i,I.H=l,I.A=r,F===null&&(pn=null,J=0,hs()),a}function pw(){for(;F!==null;)h1(F)}function mw(n,e){var t=an;an|=2;var i=c1(),l=f1();pn!==n||J!==e?(qu=null,Uu=Xe()+500,zl(n,e)):Il=ua(n,e);n:do try{if(rn!==0&&F!==null){e=F;var r=pe;e:switch(rn){case 1:rn=0,pe=null,ul(n,e,r,1);break;case 2:case 9:if(Ld(r)){rn=0,pe=null,lp(e);break}e=function(){rn!==2&&rn!==9||pn!==n||(rn=7),We(n)},r.then(e,e);break n;case 3:rn=7;break n;case 4:rn=5;break n;case 7:Ld(r)?(rn=0,pe=null,lp(e)):(rn=0,pe=null,ul(n,e,r,7));break;case 5:var a=null;switch(F.tag){case 26:a=F.memoizedState;case 5:case 27:var u=F;if(!a||D1(a)){rn=0,pe=null;var s=u.sibling;if(s!==null)F=s;else{var o=u.return;o!==null?(F=o,Ss(o)):F=null}break e}}rn=0,pe=null,ul(n,e,r,5);break;case 6:rn=0,pe=null,ul(n,e,r,6);break;case 8:lh(),Tn=6;break n;default:throw Error(_(462))}}gw();break}catch(f){o1(n,f)}while(!0);return ct=zi=null,I.H=i,I.A=l,an=t,F!==null?0:(pn=null,J=0,hs(),Tn)}function gw(){for(;F!==null&&!US();)h1(F)}function h1(n){var e=Yy(n.alternate,n,St);n.memoizedProps=n.pendingProps,e===null?Ss(n):F=e}function lp(n){var e=n,t=e.alternate;switch(e.tag){case 15:case 0:e=Pd(t,e,e.pendingProps,e.type,void 0,J);break;case 11:e=Pd(t,e,e.pendingProps,e.type.render,e.ref,J);break;case 5:Kf(e);default:Vy(t,e),e=F=Vg(e,St),e=Yy(t,e,St)}n.memoizedProps=n.pendingProps,e===null?Ss(n):F=e}function ul(n,e,t,i){ct=zi=null,Kf(e),bl=null,Kr=0;var l=e.return;try{if(rw(n,l,e,t,J)){Tn=1,Ru(n,Ne(t,n.current)),F=null;return}}catch(r){if(l!==null)throw F=l,r;Tn=1,Ru(n,Ne(t,n.current)),F=null;return}e.flags&32768?(tn||i===1?n=!0:Il||J&536870912?n=!1:(jt=n=!0,(i===2||i===9||i===3||i===6)&&(i=Me.current,i!==null&&i.tag===13&&(i.flags|=16384))),d1(e,n)):Ss(e)}function Ss(n){var e=n;do{if(e.flags&32768){d1(e,jt);return}n=e.return;var t=uw(e.alternate,e,St);if(t!==null){F=t;return}if(e=e.sibling,e!==null){F=e;return}F=e=n}while(e!==null);Tn===0&&(Tn=5)}function d1(n,e){do{var t=sw(n.alternate,n);if(t!==null){t.flags&=32767,F=t;return}if(t=n.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!e&&(n=n.sibling,n!==null)){F=n;return}F=n=t}while(n!==null);Tn=6,F=null}function rp(n,e,t,i,l,r,a,u,s){n.cancelPendingCommit=null;do vs();while(Yn!==0);if(an&6)throw Error(_(327));if(e!==null){if(e===n.current)throw Error(_(177));if(r=e.lanes|e.childLanes,r|=Df,XS(n,t,r,a,u,s),n===pn&&(F=pn=null,J=0),Dl=e,Kt=n,Sl=t,_c=r,Nc=l,a1=i,e.subtreeFlags&10256||e.flags&10256?(n.callbackNode=null,n.callbackPriority=0,vw(ku,function(){return b1(),null})):(n.callbackNode=null,n.callbackPriority=0),i=(e.flags&13878)!==0,e.subtreeFlags&13878||i){i=I.T,I.T=null,l=ln.p,ln.p=2,a=an,an|=4;try{ow(n,e,t)}finally{an=a,ln.p=l,I.T=i}}Yn=1,p1(),m1(),g1()}}function p1(){if(Yn===1){Yn=0;var n=Kt,e=Dl,t=(e.flags&13878)!==0;if(e.subtreeFlags&13878||t){t=I.T,I.T=null;var i=ln.p;ln.p=2;var l=an;an|=4;try{Wy(e,n);var r=Bc,a=Rg(n.containerInfo),u=r.focusedElem,s=r.selectionRange;if(a!==u&&u&&u.ownerDocument&&Lg(u.ownerDocument.documentElement,u)){if(s!==null&&Nf(u)){var o=s.start,f=s.end;if(f===void 0&&(f=o),"selectionStart"in u)u.selectionStart=o,u.selectionEnd=Math.min(f,u.value.length);else{var c=u.ownerDocument||document,d=c&&c.defaultView||window;if(d.getSelection){var h=d.getSelection(),y=u.textContent.length,g=Math.min(s.start,y),S=s.end===void 0?g:Math.min(s.end,y);!h.extend&&g>S&&(a=S,S=g,g=a);var p=Ad(u,g),m=Ad(u,S);if(p&&m&&(h.rangeCount!==1||h.anchorNode!==p.node||h.anchorOffset!==p.offset||h.focusNode!==m.node||h.focusOffset!==m.offset)){var b=c.createRange();b.setStart(p.node,p.offset),h.removeAllRanges(),g>S?(h.addRange(b),h.extend(m.node,m.offset)):(b.setEnd(m.node,m.offset),h.addRange(b))}}}}for(c=[],h=u;h=h.parentNode;)h.nodeType===1&&c.push({element:h,left:h.scrollLeft,top:h.scrollTop});for(typeof u.focus=="function"&&u.focus(),u=0;u<c.length;u++){var v=c[u];v.element.scrollLeft=v.left,v.element.scrollTop=v.top}}Qu=!!Rc,Bc=Rc=null}finally{an=l,ln.p=i,I.T=t}}n.current=e,Yn=2}}function m1(){if(Yn===2){Yn=0;var n=Kt,e=Dl,t=(e.flags&8772)!==0;if(e.subtreeFlags&8772||t){t=I.T,I.T=null;var i=ln.p;ln.p=2;var l=an;an|=4;try{Fy(n,e.alternate,e)}finally{an=l,ln.p=i,I.T=t}}Yn=3}}function g1(){if(Yn===4||Yn===3){Yn=0,qS();var n=Kt,e=Dl,t=Sl,i=a1;e.subtreeFlags&10256||e.flags&10256?Yn=5:(Yn=0,Dl=Kt=null,y1(n,n.pendingLanes));var l=n.pendingLanes;if(l===0&&(Vt=null),xf(t),e=e.stateNode,ye&&typeof ye.onCommitFiberRoot=="function")try{ye.onCommitFiberRoot(aa,e,void 0,(e.current.flags&128)===128)}catch{}if(i!==null){e=I.T,l=ln.p,ln.p=2,I.T=null;try{for(var r=n.onRecoverableError,a=0;a<i.length;a++){var u=i[a];r(u.value,{componentStack:u.stack})}}finally{I.T=e,ln.p=l}}Sl&3&&vs(),We(n),l=n.pendingLanes,t&4194090&&l&42?n===Dc?zr++:(zr=0,Dc=n):zr=0,ba(0)}}function y1(n,e){(n.pooledCacheLanes&=e)===0&&(e=n.pooledCache,e!=null&&(n.pooledCache=null,da(e)))}function vs(n){return p1(),m1(),g1(),b1()}function b1(){if(Yn!==5)return!1;var n=Kt,e=_c;_c=0;var t=xf(Sl),i=I.T,l=ln.p;try{ln.p=32>t?32:t,I.T=null,t=Nc,Nc=null;var r=Kt,a=Sl;if(Yn=0,Dl=Kt=null,Sl=0,an&6)throw Error(_(331));var u=an;if(an|=4,l1(r.current),e1(r,r.current,a,t),an=u,ba(0,!1),ye&&typeof ye.onPostCommitFiberRoot=="function")try{ye.onPostCommitFiberRoot(aa,r)}catch{}return!0}finally{ln.p=l,I.T=i,y1(n,e)}}function ap(n,e,t){e=Ne(t,e),e=Ec(n.stateNode,e,2),n=Yt(n,e,2),n!==null&&(sa(n,2),We(n))}function cn(n,e,t){if(n.tag===3)ap(n,n,t);else for(;e!==null;){if(e.tag===3){ap(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Vt===null||!Vt.has(i))){n=Ne(t,n),t=Ry(2),i=Yt(e,t,2),i!==null&&(By(t,i,e,n),sa(i,2),We(i));break}}e=e.return}}function So(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new hw;var l=new Set;i.set(e,l)}else l=i.get(e),l===void 0&&(l=new Set,i.set(e,l));l.has(t)||(eh=!0,l.add(t),n=yw.bind(null,n,e,t),e.then(n,n))}function yw(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),n.pingedLanes|=n.suspendedLanes&t,n.warmLanes&=~t,pn===n&&(J&t)===t&&(Tn===4||Tn===3&&(J&62914560)===J&&300>Xe()-ih?!(an&2)&&zl(n,0):th|=t,Nl===J&&(Nl=0)),We(n)}function S1(n,e){e===0&&(e=pg()),n=Hl(n,e),n!==null&&(sa(n,e),We(n))}function bw(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),S1(n,t)}function Sw(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,l=n.memoizedState;l!==null&&(t=l.retryLane);break;case 19:i=n.stateNode;break;case 22:i=n.stateNode._retryCache;break;default:throw Error(_(314))}i!==null&&i.delete(e),S1(n,t)}function vw(n,e){return wf(n,e)}var Hu=null,Xi=null,Mc=!1,Iu=!1,vo=!1,ki=0;function We(n){n!==Xi&&n.next===null&&(Xi===null?Hu=Xi=n:Xi=Xi.next=n),Iu=!0,Mc||(Mc=!0,kw())}function ba(n,e){if(!vo&&Iu){vo=!0;do for(var t=!1,i=Hu;i!==null;){if(n!==0){var l=i.pendingLanes;if(l===0)var r=0;else{var a=i.suspendedLanes,u=i.pingedLanes;r=(1<<31-be(42|n)+1)-1,r&=l&~(a&~u),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(t=!0,up(i,r))}else r=J,r=ss(i,i===pn?r:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),!(r&3)||ua(i,r)||(t=!0,up(i,r));i=i.next}while(t);vo=!1}}function ww(){v1()}function v1(){Iu=Mc=!1;var n=0;ki!==0&&(Nw()&&(n=ki),ki=0);for(var e=Xe(),t=null,i=Hu;i!==null;){var l=i.next,r=w1(i,e);r===0?(i.next=null,t===null?Hu=l:t.next=l,l===null&&(Xi=t)):(t=i,(n!==0||r&3)&&(Iu=!0)),i=l}ba(n)}function w1(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,l=n.expirationTimes,r=n.pendingLanes&-62914561;0<r;){var a=31-be(r),u=1<<a,s=l[a];s===-1?(!(u&t)||u&i)&&(l[a]=QS(u,e)):s<=e&&(n.expiredLanes|=u),r&=~u}if(e=pn,t=J,t=ss(n,n===e?t:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),i=n.callbackNode,t===0||n===e&&(rn===2||rn===9)||n.cancelPendingCommit!==null)return i!==null&&i!==null&&Gs(i),n.callbackNode=null,n.callbackPriority=0;if(!(t&3)||ua(n,t)){if(e=t&-t,e===n.callbackPriority)return e;switch(i!==null&&Gs(i),xf(t)){case 2:case 8:t=fg;break;case 32:t=ku;break;case 268435456:t=hg;break;default:t=ku}return i=k1.bind(null,n),t=wf(t,i),n.callbackPriority=e,n.callbackNode=t,e}return i!==null&&i!==null&&Gs(i),n.callbackPriority=2,n.callbackNode=null,2}function k1(n,e){if(Yn!==0&&Yn!==5)return n.callbackNode=null,n.callbackPriority=0,null;var t=n.callbackNode;if(vs()&&n.callbackNode!==t)return null;var i=J;return i=ss(n,n===pn?i:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),i===0?null:(s1(n,i,e),w1(n,Xe()),n.callbackNode!=null&&n.callbackNode===t?k1.bind(null,n):null)}function up(n,e){if(vs())return null;s1(n,e,!0)}function kw(){zw(function(){an&6?wf(cg,ww):v1()})}function rh(){return ki===0&&(ki=dg()),ki}function sp(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:nu(""+n)}function op(n,e){var t=e.ownerDocument.createElement("input");return t.name=e.name,t.value=e.value,n.id&&t.setAttribute("form",n.id),e.parentNode.insertBefore(t,e),n=new FormData(n),t.parentNode.removeChild(t),n}function xw(n,e,t,i,l){if(e==="submit"&&t&&t.stateNode===l){var r=sp((l[ue]||null).action),a=i.submitter;a&&(e=(e=a[ue]||null)?sp(e.formAction):a.getAttribute("formAction"),e!==null&&(r=e,a=null));var u=new os("action","action",null,i,l);n.push({event:u,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(ki!==0){var s=a?op(l,a):new FormData(l);kc(t,{pending:!0,data:s,method:l.method,action:r},null,s)}}else typeof r=="function"&&(u.preventDefault(),s=a?op(l,a):new FormData(l),kc(t,{pending:!0,data:s,method:l.method,action:r},r,s))},currentTarget:l}]})}}for(var wo=0;wo<cc.length;wo++){var ko=cc[wo],Ew=ko.toLowerCase(),Tw=ko[0].toUpperCase()+ko.slice(1);Ie(Ew,"on"+Tw)}Ie(jg,"onAnimationEnd");Ie(Ug,"onAnimationIteration");Ie(qg,"onAnimationStart");Ie("dblclick","onDoubleClick");Ie("focusin","onFocus");Ie("focusout","onBlur");Ie(Yv,"onTransitionRun");Ie(Vv,"onTransitionStart");Ie(Kv,"onTransitionCancel");Ie(Hg,"onTransitionEnd");El("onMouseEnter",["mouseout","mouseover"]);El("onMouseLeave",["mouseout","mouseover"]);El("onPointerEnter",["pointerout","pointerover"]);El("onPointerLeave",["pointerout","pointerover"]);_i("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));_i("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));_i("onBeforeInput",["compositionend","keypress","textInput","paste"]);_i("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));_i("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));_i("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Gr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Aw=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Gr));function x1(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],l=i.event;i=i.listeners;n:{var r=void 0;if(e)for(var a=i.length-1;0<=a;a--){var u=i[a],s=u.instance,o=u.currentTarget;if(u=u.listener,s!==r&&l.isPropagationStopped())break n;r=u,l.currentTarget=o;try{r(l)}catch(f){Lu(f)}l.currentTarget=null,r=s}else for(a=0;a<i.length;a++){if(u=i[a],s=u.instance,o=u.currentTarget,u=u.listener,s!==r&&l.isPropagationStopped())break n;r=u,l.currentTarget=o;try{r(l)}catch(f){Lu(f)}l.currentTarget=null,r=s}}}}function X(n,e){var t=e[ic];t===void 0&&(t=e[ic]=new Set);var i=n+"__bubble";t.has(i)||(E1(e,n,2,!1),t.add(i))}function xo(n,e,t){var i=0;e&&(i|=4),E1(t,n,i,e)}var Ha="_reactListening"+Math.random().toString(36).slice(2);function ah(n){if(!n[Ha]){n[Ha]=!0,bg.forEach(function(t){t!=="selectionchange"&&(Aw.has(t)||xo(t,!1,n),xo(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Ha]||(e[Ha]=!0,xo("selectionchange",!1,e))}}function E1(n,e,t,i){switch(B1(e)){case 2:var l=Ww;break;case 8:l=nk;break;default:l=ch}t=l.bind(null,e,t,n),l=void 0,!uc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(l=!0),i?l!==void 0?n.addEventListener(e,t,{capture:!0,passive:l}):n.addEventListener(e,t,!0):l!==void 0?n.addEventListener(e,t,{passive:l}):n.addEventListener(e,t,!1)}function Eo(n,e,t,i,l){var r=i;if(!(e&1)&&!(e&2)&&i!==null)n:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var u=i.stateNode.containerInfo;if(u===l)break;if(a===4)for(a=i.return;a!==null;){var s=a.tag;if((s===3||s===4)&&a.stateNode.containerInfo===l)return;a=a.return}for(;u!==null;){if(a=Ji(u),a===null)return;if(s=a.tag,s===5||s===6||s===26||s===27){i=r=a;continue n}u=u.parentNode}}i=i.return}Ag(function(){var o=r,f=Af(t),c=[];n:{var d=Ig.get(n);if(d!==void 0){var h=os,y=n;switch(n){case"keypress":if(tu(t)===0)break n;case"keydown":case"keyup":h=vv;break;case"focusin":y="focus",h=Ws;break;case"focusout":y="blur",h=Ws;break;case"beforeblur":case"afterblur":h=Ws;break;case"click":if(t.button===2)break n;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=gd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=sv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=xv;break;case jg:case Ug:case qg:h=fv;break;case Hg:h=Tv;break;case"scroll":case"scrollend":h=av;break;case"wheel":h=Ov;break;case"copy":case"cut":case"paste":h=dv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=bd;break;case"toggle":case"beforetoggle":h=_v}var g=(e&4)!==0,S=!g&&(n==="scroll"||n==="scrollend"),p=g?d!==null?d+"Capture":null:d;g=[];for(var m=o,b;m!==null;){var v=m;if(b=v.stateNode,v=v.tag,v!==5&&v!==26&&v!==27||b===null||p===null||(v=qr(m,p),v!=null&&g.push($r(m,v,b))),S)break;m=m.return}0<g.length&&(d=new h(d,y,null,t,f),c.push({event:d,listeners:g}))}}if(!(e&7)){n:{if(d=n==="mouseover"||n==="pointerover",h=n==="mouseout"||n==="pointerout",d&&t!==ac&&(y=t.relatedTarget||t.fromElement)&&(Ji(y)||y[Ul]))break n;if((h||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,h?(y=t.relatedTarget||t.toElement,h=o,y=y?Ji(y):null,y!==null&&(S=ra(y),g=y.tag,y!==S||g!==5&&g!==27&&g!==6)&&(y=null)):(h=null,y=o),h!==y)){if(g=gd,v="onMouseLeave",p="onMouseEnter",m="mouse",(n==="pointerout"||n==="pointerover")&&(g=bd,v="onPointerLeave",p="onPointerEnter",m="pointer"),S=h==null?d:gr(h),b=y==null?d:gr(y),d=new g(v,m+"leave",h,t,f),d.target=S,d.relatedTarget=b,v=null,Ji(f)===o&&(g=new g(p,m+"enter",y,t,f),g.target=b,g.relatedTarget=S,v=g),S=v,h&&y)e:{for(g=h,p=y,m=0,b=g;b;b=Ii(b))m++;for(b=0,v=p;v;v=Ii(v))b++;for(;0<m-b;)g=Ii(g),m--;for(;0<b-m;)p=Ii(p),b--;for(;m--;){if(g===p||p!==null&&g===p.alternate)break e;g=Ii(g),p=Ii(p)}g=null}else g=null;h!==null&&cp(c,d,h,g,!1),y!==null&&S!==null&&cp(c,S,y,g,!0)}}n:{if(d=o?gr(o):window,h=d.nodeName&&d.nodeName.toLowerCase(),h==="select"||h==="input"&&d.type==="file")var T=kd;else if(wd(d))if(zg)T=qv;else{T=jv;var x=Bv}else h=d.nodeName,!h||h.toLowerCase()!=="input"||d.type!=="checkbox"&&d.type!=="radio"?o&&Tf(o.elementType)&&(T=kd):T=Uv;if(T&&(T=T(n,o))){Dg(c,T,t,f);break n}x&&x(n,d,o),n==="focusout"&&o&&d.type==="number"&&o.memoizedProps.value!=null&&rc(d,"number",d.value)}switch(x=o?gr(o):window,n){case"focusin":(wd(x)||x.contentEditable==="true")&&(el=x,sc=o,kr=null);break;case"focusout":kr=sc=el=null;break;case"mousedown":oc=!0;break;case"contextmenu":case"mouseup":case"dragend":oc=!1,Od(c,t,f);break;case"selectionchange":if(Iv)break;case"keydown":case"keyup":Od(c,t,f)}var O;if(_f)n:{switch(n){case"compositionstart":var A="onCompositionStart";break n;case"compositionend":A="onCompositionEnd";break n;case"compositionupdate":A="onCompositionUpdate";break n}A=void 0}else nl?_g(n,t)&&(A="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(A="onCompositionStart");A&&(Cg&&t.locale!=="ko"&&(nl||A!=="onCompositionStart"?A==="onCompositionEnd"&&nl&&(O=Og()):(Bt=f,Of="value"in Bt?Bt.value:Bt.textContent,nl=!0)),x=Yu(o,A),0<x.length&&(A=new yd(A,n,null,t,f),c.push({event:A,listeners:x}),O?A.data=O:(O=Ng(t),O!==null&&(A.data=O)))),(O=Dv?zv(n,t):Mv(n,t))&&(A=Yu(o,"onBeforeInput"),0<A.length&&(x=new yd("onBeforeInput","beforeinput",null,t,f),c.push({event:x,listeners:A}),x.data=O)),xw(c,n,o,t,f)}x1(c,e)})}function $r(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Yu(n,e){for(var t=e+"Capture",i=[];n!==null;){var l=n,r=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||r===null||(l=qr(n,t),l!=null&&i.unshift($r(n,l,r)),l=qr(n,e),l!=null&&i.push($r(n,l,r))),n.tag===3)return i;n=n.return}return[]}function Ii(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function cp(n,e,t,i,l){for(var r=e._reactName,a=[];t!==null&&t!==i;){var u=t,s=u.alternate,o=u.stateNode;if(u=u.tag,s!==null&&s===i)break;u!==5&&u!==26&&u!==27||o===null||(s=o,l?(o=qr(t,r),o!=null&&a.unshift($r(t,o,s))):l||(o=qr(t,r),o!=null&&a.push($r(t,o,s)))),t=t.return}a.length!==0&&n.push({event:e,listeners:a})}var Ow=/\r\n?/g,Cw=/\u0000|\uFFFD/g;function fp(n){return(typeof n=="string"?n:""+n).replace(Ow,`
`).replace(Cw,"")}function T1(n,e){return e=fp(e),fp(n)===e}function ws(){}function un(n,e,t,i,l,r){switch(t){case"children":typeof i=="string"?e==="body"||e==="textarea"&&i===""||Tl(n,i):(typeof i=="number"||typeof i=="bigint")&&e!=="body"&&Tl(n,""+i);break;case"className":Ma(n,"class",i);break;case"tabIndex":Ma(n,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Ma(n,t,i);break;case"style":Tg(n,i,r);break;case"data":if(e!=="object"){Ma(n,"data",i);break}case"src":case"href":if(i===""&&(e!=="a"||t!=="href")){n.removeAttribute(t);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){n.removeAttribute(t);break}i=nu(""+i),n.setAttribute(t,i);break;case"action":case"formAction":if(typeof i=="function"){n.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(t==="formAction"?(e!=="input"&&un(n,e,"name",l.name,l,null),un(n,e,"formEncType",l.formEncType,l,null),un(n,e,"formMethod",l.formMethod,l,null),un(n,e,"formTarget",l.formTarget,l,null)):(un(n,e,"encType",l.encType,l,null),un(n,e,"method",l.method,l,null),un(n,e,"target",l.target,l,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){n.removeAttribute(t);break}i=nu(""+i),n.setAttribute(t,i);break;case"onClick":i!=null&&(n.onclick=ws);break;case"onScroll":i!=null&&X("scroll",n);break;case"onScrollEnd":i!=null&&X("scrollend",n);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(_(61));if(t=i.__html,t!=null){if(l.children!=null)throw Error(_(60));n.innerHTML=t}}break;case"multiple":n.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":n.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){n.removeAttribute("xlink:href");break}t=nu(""+i),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?n.setAttribute(t,""+i):n.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?n.setAttribute(t,""):n.removeAttribute(t);break;case"capture":case"download":i===!0?n.setAttribute(t,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?n.setAttribute(t,i):n.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?n.setAttribute(t,i):n.removeAttribute(t);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?n.removeAttribute(t):n.setAttribute(t,i);break;case"popover":X("beforetoggle",n),X("toggle",n),Wa(n,"popover",i);break;case"xlinkActuate":it(n,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":it(n,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":it(n,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":it(n,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":it(n,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":it(n,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":it(n,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":it(n,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":it(n,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Wa(n,"is",i);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=lv.get(t)||t,Wa(n,t,i))}}function Lc(n,e,t,i,l,r){switch(t){case"style":Tg(n,i,r);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(_(61));if(t=i.__html,t!=null){if(l.children!=null)throw Error(_(60));n.innerHTML=t}}break;case"children":typeof i=="string"?Tl(n,i):(typeof i=="number"||typeof i=="bigint")&&Tl(n,""+i);break;case"onScroll":i!=null&&X("scroll",n);break;case"onScrollEnd":i!=null&&X("scrollend",n);break;case"onClick":i!=null&&(n.onclick=ws);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Sg.hasOwnProperty(t))n:{if(t[0]==="o"&&t[1]==="n"&&(l=t.endsWith("Capture"),e=t.slice(2,l?t.length-7:void 0),r=n[ue]||null,r=r!=null?r[t]:null,typeof r=="function"&&n.removeEventListener(e,r,l),typeof i=="function")){typeof r!="function"&&r!==null&&(t in n?n[t]=null:n.hasAttribute(t)&&n.removeAttribute(t)),n.addEventListener(e,i,l);break n}t in n?n[t]=i:i===!0?n.setAttribute(t,""):Wa(n,t,i)}}}function Vn(n,e,t){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":X("error",n),X("load",n);var i=!1,l=!1,r;for(r in t)if(t.hasOwnProperty(r)){var a=t[r];if(a!=null)switch(r){case"src":i=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(_(137,e));default:un(n,e,r,a,t,null)}}l&&un(n,e,"srcSet",t.srcSet,t,null),i&&un(n,e,"src",t.src,t,null);return;case"input":X("invalid",n);var u=r=a=l=null,s=null,o=null;for(i in t)if(t.hasOwnProperty(i)){var f=t[i];if(f!=null)switch(i){case"name":l=f;break;case"type":a=f;break;case"checked":s=f;break;case"defaultChecked":o=f;break;case"value":r=f;break;case"defaultValue":u=f;break;case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(_(137,e));break;default:un(n,e,i,f,t,null)}}kg(n,r,u,s,o,a,l,!1),xu(n);return;case"select":X("invalid",n),i=a=r=null;for(l in t)if(t.hasOwnProperty(l)&&(u=t[l],u!=null))switch(l){case"value":r=u;break;case"defaultValue":a=u;break;case"multiple":i=u;default:un(n,e,l,u,t,null)}e=r,t=a,n.multiple=!!i,e!=null?dl(n,!!i,e,!1):t!=null&&dl(n,!!i,t,!0);return;case"textarea":X("invalid",n),r=l=i=null;for(a in t)if(t.hasOwnProperty(a)&&(u=t[a],u!=null))switch(a){case"value":i=u;break;case"defaultValue":l=u;break;case"children":r=u;break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(_(91));break;default:un(n,e,a,u,t,null)}Eg(n,i,l,r),xu(n);return;case"option":for(s in t)if(t.hasOwnProperty(s)&&(i=t[s],i!=null))switch(s){case"selected":n.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:un(n,e,s,i,t,null)}return;case"dialog":X("beforetoggle",n),X("toggle",n),X("cancel",n),X("close",n);break;case"iframe":case"object":X("load",n);break;case"video":case"audio":for(i=0;i<Gr.length;i++)X(Gr[i],n);break;case"image":X("error",n),X("load",n);break;case"details":X("toggle",n);break;case"embed":case"source":case"link":X("error",n),X("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(o in t)if(t.hasOwnProperty(o)&&(i=t[o],i!=null))switch(o){case"children":case"dangerouslySetInnerHTML":throw Error(_(137,e));default:un(n,e,o,i,t,null)}return;default:if(Tf(e)){for(f in t)t.hasOwnProperty(f)&&(i=t[f],i!==void 0&&Lc(n,e,f,i,t,void 0));return}}for(u in t)t.hasOwnProperty(u)&&(i=t[u],i!=null&&un(n,e,u,i,t,null))}function _w(n,e,t,i){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,r=null,a=null,u=null,s=null,o=null,f=null;for(h in t){var c=t[h];if(t.hasOwnProperty(h)&&c!=null)switch(h){case"checked":break;case"value":break;case"defaultValue":s=c;default:i.hasOwnProperty(h)||un(n,e,h,null,i,c)}}for(var d in i){var h=i[d];if(c=t[d],i.hasOwnProperty(d)&&(h!=null||c!=null))switch(d){case"type":r=h;break;case"name":l=h;break;case"checked":o=h;break;case"defaultChecked":f=h;break;case"value":a=h;break;case"defaultValue":u=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(_(137,e));break;default:h!==c&&un(n,e,d,h,i,c)}}lc(n,a,u,s,o,f,r,l);return;case"select":h=a=u=d=null;for(r in t)if(s=t[r],t.hasOwnProperty(r)&&s!=null)switch(r){case"value":break;case"multiple":h=s;default:i.hasOwnProperty(r)||un(n,e,r,null,i,s)}for(l in i)if(r=i[l],s=t[l],i.hasOwnProperty(l)&&(r!=null||s!=null))switch(l){case"value":d=r;break;case"defaultValue":u=r;break;case"multiple":a=r;default:r!==s&&un(n,e,l,r,i,s)}e=u,t=a,i=h,d!=null?dl(n,!!t,d,!1):!!i!=!!t&&(e!=null?dl(n,!!t,e,!0):dl(n,!!t,t?[]:"",!1));return;case"textarea":h=d=null;for(u in t)if(l=t[u],t.hasOwnProperty(u)&&l!=null&&!i.hasOwnProperty(u))switch(u){case"value":break;case"children":break;default:un(n,e,u,null,i,l)}for(a in i)if(l=i[a],r=t[a],i.hasOwnProperty(a)&&(l!=null||r!=null))switch(a){case"value":d=l;break;case"defaultValue":h=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(_(91));break;default:l!==r&&un(n,e,a,l,i,r)}xg(n,d,h);return;case"option":for(var y in t)if(d=t[y],t.hasOwnProperty(y)&&d!=null&&!i.hasOwnProperty(y))switch(y){case"selected":n.selected=!1;break;default:un(n,e,y,null,i,d)}for(s in i)if(d=i[s],h=t[s],i.hasOwnProperty(s)&&d!==h&&(d!=null||h!=null))switch(s){case"selected":n.selected=d&&typeof d!="function"&&typeof d!="symbol";break;default:un(n,e,s,d,i,h)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var g in t)d=t[g],t.hasOwnProperty(g)&&d!=null&&!i.hasOwnProperty(g)&&un(n,e,g,null,i,d);for(o in i)if(d=i[o],h=t[o],i.hasOwnProperty(o)&&d!==h&&(d!=null||h!=null))switch(o){case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(_(137,e));break;default:un(n,e,o,d,i,h)}return;default:if(Tf(e)){for(var S in t)d=t[S],t.hasOwnProperty(S)&&d!==void 0&&!i.hasOwnProperty(S)&&Lc(n,e,S,void 0,i,d);for(f in i)d=i[f],h=t[f],!i.hasOwnProperty(f)||d===h||d===void 0&&h===void 0||Lc(n,e,f,d,i,h);return}}for(var p in t)d=t[p],t.hasOwnProperty(p)&&d!=null&&!i.hasOwnProperty(p)&&un(n,e,p,null,i,d);for(c in i)d=i[c],h=t[c],!i.hasOwnProperty(c)||d===h||d==null&&h==null||un(n,e,c,d,i,h)}var Rc=null,Bc=null;function Vu(n){return n.nodeType===9?n:n.ownerDocument}function hp(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function A1(n,e){if(n===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&e==="foreignObject"?0:n}function jc(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var To=null;function Nw(){var n=window.event;return n&&n.type==="popstate"?n===To?!1:(To=n,!0):(To=null,!1)}var O1=typeof setTimeout=="function"?setTimeout:void 0,Dw=typeof clearTimeout=="function"?clearTimeout:void 0,dp=typeof Promise=="function"?Promise:void 0,zw=typeof queueMicrotask=="function"?queueMicrotask:typeof dp<"u"?function(n){return dp.resolve(null).then(n).catch(Mw)}:O1;function Mw(n){setTimeout(function(){throw n})}function ei(n){return n==="head"}function pp(n,e){var t=e,i=0,l=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(0<i&&8>i){t=i;var a=n.ownerDocument;if(t&1&&Mr(a.documentElement),t&2&&Mr(a.body),t&4)for(t=a.head,Mr(t),a=t.firstChild;a;){var u=a.nextSibling,s=a.nodeName;a[oa]||s==="SCRIPT"||s==="STYLE"||s==="LINK"&&a.rel.toLowerCase()==="stylesheet"||t.removeChild(a),a=u}}if(l===0){n.removeChild(r),Pr(e);return}l--}else t==="$"||t==="$?"||t==="$!"?l++:i=t.charCodeAt(0)-48;else i=0;t=r}while(t);Pr(e)}function Uc(n){var e=n.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var t=e;switch(e=e.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":Uc(t),Ef(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}n.removeChild(t)}}function Lw(n,e,t,i){for(;n.nodeType===1;){var l=t;if(n.nodeName.toLowerCase()!==e.toLowerCase()){if(!i&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(i){if(!n[oa])switch(e){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(r=n.getAttribute("rel"),r==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(r!==l.rel||n.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||n.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||n.getAttribute("title")!==(l.title==null?null:l.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(r=n.getAttribute("src"),(r!==(l.src==null?null:l.src)||n.getAttribute("type")!==(l.type==null?null:l.type)||n.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&r&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(e==="input"&&n.type==="hidden"){var r=l.name==null?null:""+l.name;if(l.type==="hidden"&&n.getAttribute("name")===r)return n}else return n;if(n=qe(n.nextSibling),n===null)break}return null}function Rw(n,e,t){if(e==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!t||(n=qe(n.nextSibling),n===null))return null;return n}function qc(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState==="complete"}function Bw(n,e){var t=n.ownerDocument;if(n.data!=="$?"||t.readyState==="complete")e();else{var i=function(){e(),t.removeEventListener("DOMContentLoaded",i)};t.addEventListener("DOMContentLoaded",i),n._reactRetry=i}}function qe(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return n}var Hc=null;function mp(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}function C1(n,e,t){switch(e=Vu(t),n){case"html":if(n=e.documentElement,!n)throw Error(_(452));return n;case"head":if(n=e.head,!n)throw Error(_(453));return n;case"body":if(n=e.body,!n)throw Error(_(454));return n;default:throw Error(_(451))}}function Mr(n){for(var e=n.attributes;e.length;)n.removeAttributeNode(e[0]);Ef(n)}var Le=new Map,gp=new Set;function Ku(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var vt=ln.d;ln.d={f:jw,r:Uw,D:qw,C:Hw,L:Iw,m:Yw,X:Kw,S:Vw,M:Gw};function jw(){var n=vt.f(),e=bs();return n||e}function Uw(n){var e=ql(n);e!==null&&e.tag===5&&e.type==="form"?wy(e):vt.r(n)}var Yl=typeof document>"u"?null:document;function _1(n,e,t){var i=Yl;if(i&&typeof e=="string"&&e){var l=_e(e);l='link[rel="'+n+'"][href="'+l+'"]',typeof t=="string"&&(l+='[crossorigin="'+t+'"]'),gp.has(l)||(gp.add(l),n={rel:n,crossOrigin:t,href:e},i.querySelector(l)===null&&(e=i.createElement("link"),Vn(e,"link",n),jn(e),i.head.appendChild(e)))}}function qw(n){vt.D(n),_1("dns-prefetch",n,null)}function Hw(n,e){vt.C(n,e),_1("preconnect",n,e)}function Iw(n,e,t){vt.L(n,e,t);var i=Yl;if(i&&n&&e){var l='link[rel="preload"][as="'+_e(e)+'"]';e==="image"&&t&&t.imageSrcSet?(l+='[imagesrcset="'+_e(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(l+='[imagesizes="'+_e(t.imageSizes)+'"]')):l+='[href="'+_e(n)+'"]';var r=l;switch(e){case"style":r=Ml(n);break;case"script":r=Vl(n)}Le.has(r)||(n=gn({rel:"preload",href:e==="image"&&t&&t.imageSrcSet?void 0:n,as:e},t),Le.set(r,n),i.querySelector(l)!==null||e==="style"&&i.querySelector(Sa(r))||e==="script"&&i.querySelector(va(r))||(e=i.createElement("link"),Vn(e,"link",n),jn(e),i.head.appendChild(e)))}}function Yw(n,e){vt.m(n,e);var t=Yl;if(t&&n){var i=e&&typeof e.as=="string"?e.as:"script",l='link[rel="modulepreload"][as="'+_e(i)+'"][href="'+_e(n)+'"]',r=l;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=Vl(n)}if(!Le.has(r)&&(n=gn({rel:"modulepreload",href:n},e),Le.set(r,n),t.querySelector(l)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(va(r)))return}i=t.createElement("link"),Vn(i,"link",n),jn(i),t.head.appendChild(i)}}}function Vw(n,e,t){vt.S(n,e,t);var i=Yl;if(i&&n){var l=hl(i).hoistableStyles,r=Ml(n);e=e||"default";var a=l.get(r);if(!a){var u={loading:0,preload:null};if(a=i.querySelector(Sa(r)))u.loading=5;else{n=gn({rel:"stylesheet",href:n,"data-precedence":e},t),(t=Le.get(r))&&uh(n,t);var s=a=i.createElement("link");jn(s),Vn(s,"link",n),s._p=new Promise(function(o,f){s.onload=o,s.onerror=f}),s.addEventListener("load",function(){u.loading|=1}),s.addEventListener("error",function(){u.loading|=2}),u.loading|=4,ou(a,e,i)}a={type:"stylesheet",instance:a,count:1,state:u},l.set(r,a)}}}function Kw(n,e){vt.X(n,e);var t=Yl;if(t&&n){var i=hl(t).hoistableScripts,l=Vl(n),r=i.get(l);r||(r=t.querySelector(va(l)),r||(n=gn({src:n,async:!0},e),(e=Le.get(l))&&sh(n,e),r=t.createElement("script"),jn(r),Vn(r,"link",n),t.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(l,r))}}function Gw(n,e){vt.M(n,e);var t=Yl;if(t&&n){var i=hl(t).hoistableScripts,l=Vl(n),r=i.get(l);r||(r=t.querySelector(va(l)),r||(n=gn({src:n,async:!0,type:"module"},e),(e=Le.get(l))&&sh(n,e),r=t.createElement("script"),jn(r),Vn(r,"link",n),t.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(l,r))}}function yp(n,e,t,i){var l=(l=Ht.current)?Ku(l):null;if(!l)throw Error(_(446));switch(n){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(e=Ml(t.href),t=hl(l).hoistableStyles,i=t.get(e),i||(i={type:"style",instance:null,count:0,state:null},t.set(e,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){n=Ml(t.href);var r=hl(l).hoistableStyles,a=r.get(n);if(a||(l=l.ownerDocument||l,a={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(n,a),(r=l.querySelector(Sa(n)))&&!r._p&&(a.instance=r,a.state.loading=5),Le.has(n)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},Le.set(n,t),r||$w(l,n,t,a.state))),e&&i===null)throw Error(_(528,""));return a}if(e&&i!==null)throw Error(_(529,""));return null;case"script":return e=t.async,t=t.src,typeof t=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Vl(t),t=hl(l).hoistableScripts,i=t.get(e),i||(i={type:"script",instance:null,count:0,state:null},t.set(e,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(_(444,n))}}function Ml(n){return'href="'+_e(n)+'"'}function Sa(n){return'link[rel="stylesheet"]['+n+"]"}function N1(n){return gn({},n,{"data-precedence":n.precedence,precedence:null})}function $w(n,e,t,i){n.querySelector('link[rel="preload"][as="style"]['+e+"]")?i.loading=1:(e=n.createElement("link"),i.preload=e,e.addEventListener("load",function(){return i.loading|=1}),e.addEventListener("error",function(){return i.loading|=2}),Vn(e,"link",t),jn(e),n.head.appendChild(e))}function Vl(n){return'[src="'+_e(n)+'"]'}function va(n){return"script[async]"+n}function bp(n,e,t){if(e.count++,e.instance===null)switch(e.type){case"style":var i=n.querySelector('style[data-href~="'+_e(t.href)+'"]');if(i)return e.instance=i,jn(i),i;var l=gn({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return i=(n.ownerDocument||n).createElement("style"),jn(i),Vn(i,"style",l),ou(i,t.precedence,n),e.instance=i;case"stylesheet":l=Ml(t.href);var r=n.querySelector(Sa(l));if(r)return e.state.loading|=4,e.instance=r,jn(r),r;i=N1(t),(l=Le.get(l))&&uh(i,l),r=(n.ownerDocument||n).createElement("link"),jn(r);var a=r;return a._p=new Promise(function(u,s){a.onload=u,a.onerror=s}),Vn(r,"link",i),e.state.loading|=4,ou(r,t.precedence,n),e.instance=r;case"script":return r=Vl(t.src),(l=n.querySelector(va(r)))?(e.instance=l,jn(l),l):(i=t,(l=Le.get(r))&&(i=gn({},t),sh(i,l)),n=n.ownerDocument||n,l=n.createElement("script"),jn(l),Vn(l,"link",i),n.head.appendChild(l),e.instance=l);case"void":return null;default:throw Error(_(443,e.type))}else e.type==="stylesheet"&&!(e.state.loading&4)&&(i=e.instance,e.state.loading|=4,ou(i,t.precedence,n));return e.instance}function ou(n,e,t){for(var i=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=i.length?i[i.length-1]:null,r=l,a=0;a<i.length;a++){var u=i[a];if(u.dataset.precedence===e)r=u;else if(r!==l)break}r?r.parentNode.insertBefore(n,r.nextSibling):(e=t.nodeType===9?t.head:t,e.insertBefore(n,e.firstChild))}function uh(n,e){n.crossOrigin==null&&(n.crossOrigin=e.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=e.referrerPolicy),n.title==null&&(n.title=e.title)}function sh(n,e){n.crossOrigin==null&&(n.crossOrigin=e.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=e.referrerPolicy),n.integrity==null&&(n.integrity=e.integrity)}var cu=null;function Sp(n,e,t){if(cu===null){var i=new Map,l=cu=new Map;l.set(t,i)}else l=cu,i=l.get(t),i||(i=new Map,l.set(t,i));if(i.has(n))return i;for(i.set(n,null),t=t.getElementsByTagName(n),l=0;l<t.length;l++){var r=t[l];if(!(r[oa]||r[Gn]||n==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var a=r.getAttribute(e)||"";a=n+a;var u=i.get(a);u?u.push(r):i.set(a,[r])}}return i}function vp(n,e,t){n=n.ownerDocument||n,n.head.insertBefore(t,e==="title"?n.querySelector("head > title"):null)}function Qw(n,e,t){if(t===1||e.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return n=e.disabled,typeof e.precedence=="string"&&n==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function D1(n){return!(n.type==="stylesheet"&&!(n.state.loading&3))}var Qr=null;function Xw(){}function Fw(n,e,t){if(Qr===null)throw Error(_(475));var i=Qr;if(e.type==="stylesheet"&&(typeof t.media!="string"||matchMedia(t.media).matches!==!1)&&!(e.state.loading&4)){if(e.instance===null){var l=Ml(t.href),r=n.querySelector(Sa(l));if(r){n=r._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(i.count++,i=Gu.bind(i),n.then(i,i)),e.state.loading|=4,e.instance=r,jn(r);return}r=n.ownerDocument||n,t=N1(t),(l=Le.get(l))&&uh(t,l),r=r.createElement("link"),jn(r);var a=r;a._p=new Promise(function(u,s){a.onload=u,a.onerror=s}),Vn(r,"link",t),e.instance=r}i.stylesheets===null&&(i.stylesheets=new Map),i.stylesheets.set(e,n),(n=e.state.preload)&&!(e.state.loading&3)&&(i.count++,e=Gu.bind(i),n.addEventListener("load",e),n.addEventListener("error",e))}}function Zw(){if(Qr===null)throw Error(_(475));var n=Qr;return n.stylesheets&&n.count===0&&Ic(n,n.stylesheets),0<n.count?function(e){var t=setTimeout(function(){if(n.stylesheets&&Ic(n,n.stylesheets),n.unsuspend){var i=n.unsuspend;n.unsuspend=null,i()}},6e4);return n.unsuspend=e,function(){n.unsuspend=null,clearTimeout(t)}}:null}function Gu(){if(this.count--,this.count===0){if(this.stylesheets)Ic(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var $u=null;function Ic(n,e){n.stylesheets=null,n.unsuspend!==null&&(n.count++,$u=new Map,e.forEach(Pw,n),$u=null,Gu.call(n))}function Pw(n,e){if(!(e.state.loading&4)){var t=$u.get(n);if(t)var i=t.get(null);else{t=new Map,$u.set(n,t);for(var l=n.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<l.length;r++){var a=l[r];(a.nodeName==="LINK"||a.getAttribute("media")!=="not all")&&(t.set(a.dataset.precedence,a),i=a)}i&&t.set(null,i)}l=e.instance,a=l.getAttribute("data-precedence"),r=t.get(a)||i,r===i&&t.set(null,l),t.set(a,l),this.count++,i=Gu.bind(this),l.addEventListener("load",i),l.addEventListener("error",i),r?r.parentNode.insertBefore(l,r.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(l,n.firstChild)),e.state.loading|=4}}var Xr={$$typeof:ut,Provider:null,Consumer:null,_currentValue:gi,_currentValue2:gi,_threadCount:0};function Jw(n,e,t,i,l,r,a,u){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=$s(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$s(0),this.hiddenUpdates=$s(null),this.identifierPrefix=i,this.onUncaughtError=l,this.onCaughtError=r,this.onRecoverableError=a,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=u,this.incompleteTransitions=new Map}function z1(n,e,t,i,l,r,a,u,s,o,f,c){return n=new Jw(n,e,t,a,u,s,o,c),e=1,r===!0&&(e|=24),r=me(3,null,null,e),n.current=r,r.stateNode=n,e=Bf(),e.refCount++,n.pooledCache=e,e.refCount++,r.memoizedState={element:i,isDehydrated:t,cache:e},Uf(r),n}function M1(n){return n?(n=ll,n):ll}function L1(n,e,t,i,l,r){l=M1(l),i.context===null?i.context=l:i.pendingContext=l,i=It(e),i.payload={element:t},r=r===void 0?null:r,r!==null&&(i.callback=r),t=Yt(n,i,e),t!==null&&(ve(t,n,e),Tr(t,n,e))}function wp(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function oh(n,e){wp(n,e),(n=n.alternate)&&wp(n,e)}function R1(n){if(n.tag===13){var e=Hl(n,67108864);e!==null&&ve(e,n,67108864),oh(n,67108864)}}var Qu=!0;function Ww(n,e,t,i){var l=I.T;I.T=null;var r=ln.p;try{ln.p=2,ch(n,e,t,i)}finally{ln.p=r,I.T=l}}function nk(n,e,t,i){var l=I.T;I.T=null;var r=ln.p;try{ln.p=8,ch(n,e,t,i)}finally{ln.p=r,I.T=l}}function ch(n,e,t,i){if(Qu){var l=Yc(i);if(l===null)Eo(n,e,i,Xu,t),kp(n,i);else if(tk(l,n,e,t,i))i.stopPropagation();else if(kp(n,i),e&4&&-1<ek.indexOf(n)){for(;l!==null;){var r=ql(l);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var a=oi(r.pendingLanes);if(a!==0){var u=r;for(u.pendingLanes|=2,u.entangledLanes|=2;a;){var s=1<<31-be(a);u.entanglements[1]|=s,a&=~s}We(r),!(an&6)&&(Uu=Xe()+500,ba(0))}}break;case 13:u=Hl(r,2),u!==null&&ve(u,r,2),bs(),oh(r,2)}if(r=Yc(i),r===null&&Eo(n,e,i,Xu,t),r===l)break;l=r}l!==null&&i.stopPropagation()}else Eo(n,e,i,null,t)}}function Yc(n){return n=Af(n),fh(n)}var Xu=null;function fh(n){if(Xu=null,n=Ji(n),n!==null){var e=ra(n);if(e===null)n=null;else{var t=e.tag;if(t===13){if(n=ag(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null)}}return Xu=n,null}function B1(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(HS()){case cg:return 2;case fg:return 8;case ku:case IS:return 32;case hg:return 268435456;default:return 32}default:return 32}}var Vc=!1,Gt=null,$t=null,Qt=null,Fr=new Map,Zr=new Map,Lt=[],ek="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function kp(n,e){switch(n){case"focusin":case"focusout":Gt=null;break;case"dragenter":case"dragleave":$t=null;break;case"mouseover":case"mouseout":Qt=null;break;case"pointerover":case"pointerout":Fr.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zr.delete(e.pointerId)}}function or(n,e,t,i,l,r){return n===null||n.nativeEvent!==r?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:r,targetContainers:[l]},e!==null&&(e=ql(e),e!==null&&R1(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,l!==null&&e.indexOf(l)===-1&&e.push(l),n)}function tk(n,e,t,i,l){switch(e){case"focusin":return Gt=or(Gt,n,e,t,i,l),!0;case"dragenter":return $t=or($t,n,e,t,i,l),!0;case"mouseover":return Qt=or(Qt,n,e,t,i,l),!0;case"pointerover":var r=l.pointerId;return Fr.set(r,or(Fr.get(r)||null,n,e,t,i,l)),!0;case"gotpointercapture":return r=l.pointerId,Zr.set(r,or(Zr.get(r)||null,n,e,t,i,l)),!0}return!1}function j1(n){var e=Ji(n.target);if(e!==null){var t=ra(e);if(t!==null){if(e=t.tag,e===13){if(e=ag(t),e!==null){n.blockedOn=e,FS(n.priority,function(){if(t.tag===13){var i=Se();i=kf(i);var l=Hl(t,i);l!==null&&ve(l,t,i),oh(t,i)}});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function fu(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Yc(n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);ac=i,t.target.dispatchEvent(i),ac=null}else return e=ql(t),e!==null&&R1(e),n.blockedOn=t,!1;e.shift()}return!0}function xp(n,e,t){fu(n)&&t.delete(e)}function ik(){Vc=!1,Gt!==null&&fu(Gt)&&(Gt=null),$t!==null&&fu($t)&&($t=null),Qt!==null&&fu(Qt)&&(Qt=null),Fr.forEach(xp),Zr.forEach(xp)}function Ia(n,e){n.blockedOn===e&&(n.blockedOn=null,Vc||(Vc=!0,Rn.unstable_scheduleCallback(Rn.unstable_NormalPriority,ik)))}var Ya=null;function Ep(n){Ya!==n&&(Ya=n,Rn.unstable_scheduleCallback(Rn.unstable_NormalPriority,function(){Ya===n&&(Ya=null);for(var e=0;e<n.length;e+=3){var t=n[e],i=n[e+1],l=n[e+2];if(typeof i!="function"){if(fh(i||t)===null)continue;break}var r=ql(t);r!==null&&(n.splice(e,3),e-=3,kc(r,{pending:!0,data:l,method:t.method,action:i},i,l))}}))}function Pr(n){function e(s){return Ia(s,n)}Gt!==null&&Ia(Gt,n),$t!==null&&Ia($t,n),Qt!==null&&Ia(Qt,n),Fr.forEach(e),Zr.forEach(e);for(var t=0;t<Lt.length;t++){var i=Lt[t];i.blockedOn===n&&(i.blockedOn=null)}for(;0<Lt.length&&(t=Lt[0],t.blockedOn===null);)j1(t),t.blockedOn===null&&Lt.shift();if(t=(n.ownerDocument||n).$$reactFormReplay,t!=null)for(i=0;i<t.length;i+=3){var l=t[i],r=t[i+1],a=l[ue]||null;if(typeof r=="function")a||Ep(t);else if(a){var u=null;if(r&&r.hasAttribute("formAction")){if(l=r,a=r[ue]||null)u=a.formAction;else if(fh(l)!==null)continue}else u=a.action;typeof u=="function"?t[i+1]=u:(t.splice(i,3),i-=3),Ep(t)}}}function hh(n){this._internalRoot=n}ks.prototype.render=hh.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(_(409));var t=e.current,i=Se();L1(t,i,n,e,null,null)};ks.prototype.unmount=hh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;L1(n.current,2,null,n,null,null),bs(),e[Ul]=null}};function ks(n){this._internalRoot=n}ks.prototype.unstable_scheduleHydration=function(n){if(n){var e=yg();n={blockedOn:null,target:n,priority:e};for(var t=0;t<Lt.length&&e!==0&&e<Lt[t].priority;t++);Lt.splice(t,0,n),t===0&&j1(n)}};var Tp=lg.version;if(Tp!=="19.1.1")throw Error(_(527,Tp,"19.1.1"));ln.findDOMNode=function(n){var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(_(188)):(n=Object.keys(n).join(","),Error(_(268,n)));return n=MS(e),n=n!==null?ug(n):null,n=n===null?null:n.stateNode,n};var lk={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Va=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Va.isDisabled&&Va.supportsFiber)try{aa=Va.inject(lk),ye=Va}catch{}}as.createRoot=function(n,e){if(!rg(n))throw Error(_(299));var t=!1,i="",l=zy,r=My,a=Ly,u=null;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onUncaughtError!==void 0&&(l=e.onUncaughtError),e.onCaughtError!==void 0&&(r=e.onCaughtError),e.onRecoverableError!==void 0&&(a=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(u=e.unstable_transitionCallbacks)),e=z1(n,1,!1,null,null,t,i,l,r,a,u,null),n[Ul]=e.current,ah(n),new hh(e)};as.hydrateRoot=function(n,e,t){if(!rg(n))throw Error(_(299));var i=!1,l="",r=zy,a=My,u=Ly,s=null,o=null;return t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(r=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(u=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(s=t.unstable_transitionCallbacks),t.formState!==void 0&&(o=t.formState)),e=z1(n,1,!0,e,t??null,i,l,r,a,u,s,o),e.context=M1(null),t=e.current,i=Se(),i=kf(i),l=It(i),l.callback=null,Yt(t,l,i),t=i,e.current.lanes=t,sa(e,t),We(e),n[Ul]=e.current,ah(n),new ks(e)};as.version="19.1.1";function U1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(U1)}catch(n){console.error(n)}}U1(),Jm.exports=as;var rk=Jm.exports;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Jr(){return Jr=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},Jr.apply(this,arguments)}var qt;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(qt||(qt={}));const Ap="popstate";function ak(n){n===void 0&&(n={});function e(i,l){let{pathname:r,search:a,hash:u}=i.location;return Kc("",{pathname:r,search:a,hash:u},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function t(i,l){return typeof l=="string"?l:Fu(l)}return sk(e,t,null,n)}function Dn(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function q1(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function uk(){return Math.random().toString(36).substr(2,8)}function Op(n,e){return{usr:n.state,key:n.key,idx:e}}function Kc(n,e,t,i){return t===void 0&&(t=null),Jr({pathname:typeof n=="string"?n:n.pathname,search:"",hash:""},typeof e=="string"?Kl(e):e,{state:t,key:e&&e.key||i||uk()})}function Fu(n){let{pathname:e="/",search:t="",hash:i=""}=n;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function Kl(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substr(t),n=n.substr(0,t));let i=n.indexOf("?");i>=0&&(e.search=n.substr(i),n=n.substr(0,i)),n&&(e.pathname=n)}return e}function sk(n,e,t,i){i===void 0&&(i={});let{window:l=document.defaultView,v5Compat:r=!1}=i,a=l.history,u=qt.Pop,s=null,o=f();o==null&&(o=0,a.replaceState(Jr({},a.state,{idx:o}),""));function f(){return(a.state||{idx:null}).idx}function c(){u=qt.Pop;let S=f(),p=S==null?null:S-o;o=S,s&&s({action:u,location:g.location,delta:p})}function d(S,p){u=qt.Push;let m=Kc(g.location,S,p);o=f()+1;let b=Op(m,o),v=g.createHref(m);try{a.pushState(b,"",v)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;l.location.assign(v)}r&&s&&s({action:u,location:g.location,delta:1})}function h(S,p){u=qt.Replace;let m=Kc(g.location,S,p);o=f();let b=Op(m,o),v=g.createHref(m);a.replaceState(b,"",v),r&&s&&s({action:u,location:g.location,delta:0})}function y(S){let p=l.location.origin!=="null"?l.location.origin:l.location.href,m=typeof S=="string"?S:Fu(S);return m=m.replace(/ $/,"%20"),Dn(p,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,p)}let g={get action(){return u},get location(){return n(l,a)},listen(S){if(s)throw new Error("A history only accepts one active listener");return l.addEventListener(Ap,c),s=S,()=>{l.removeEventListener(Ap,c),s=null}},createHref(S){return e(l,S)},createURL:y,encodeLocation(S){let p=y(S);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:d,replace:h,go(S){return a.go(S)}};return g}var Cp;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})(Cp||(Cp={}));function ok(n,e,t){return t===void 0&&(t="/"),ck(n,e,t)}function ck(n,e,t,i){let l=typeof e=="string"?Kl(e):e,r=dh(l.pathname||"/",t);if(r==null)return null;let a=H1(n);fk(a);let u=null;for(let s=0;u==null&&s<a.length;++s){let o=xk(r);u=vk(a[s],o)}return u}function H1(n,e,t,i){e===void 0&&(e=[]),t===void 0&&(t=[]),i===void 0&&(i="");let l=(r,a,u)=>{let s={relativePath:u===void 0?r.path||"":u,caseSensitive:r.caseSensitive===!0,childrenIndex:a,route:r};s.relativePath.startsWith("/")&&(Dn(s.relativePath.startsWith(i),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(i.length));let o=Xt([i,s.relativePath]),f=t.concat(s);r.children&&r.children.length>0&&(Dn(r.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+o+'".')),H1(r.children,e,f,o)),!(r.path==null&&!r.index)&&e.push({path:o,score:bk(o,r.index),routesMeta:f})};return n.forEach((r,a)=>{var u;if(r.path===""||!((u=r.path)!=null&&u.includes("?")))l(r,a);else for(let s of I1(r.path))l(r,a,s)}),e}function I1(n){let e=n.split("/");if(e.length===0)return[];let[t,...i]=e,l=t.endsWith("?"),r=t.replace(/\?$/,"");if(i.length===0)return l?[r,""]:[r];let a=I1(i.join("/")),u=[];return u.push(...a.map(s=>s===""?r:[r,s].join("/"))),l&&u.push(...a),u.map(s=>n.startsWith("/")&&s===""?"/":s)}function fk(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:Sk(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}const hk=/^:[\w-]+$/,dk=3,pk=2,mk=1,gk=10,yk=-2,_p=n=>n==="*";function bk(n,e){let t=n.split("/"),i=t.length;return t.some(_p)&&(i+=yk),e&&(i+=pk),t.filter(l=>!_p(l)).reduce((l,r)=>l+(hk.test(r)?dk:r===""?mk:gk),i)}function Sk(n,e){return n.length===e.length&&n.slice(0,-1).every((i,l)=>i===e[l])?n[n.length-1]-e[e.length-1]:0}function vk(n,e,t){let{routesMeta:i}=n,l={},r="/",a=[];for(let u=0;u<i.length;++u){let s=i[u],o=u===i.length-1,f=r==="/"?e:e.slice(r.length)||"/",c=wk({path:s.relativePath,caseSensitive:s.caseSensitive,end:o},f),d=s.route;if(!c)return null;Object.assign(l,c.params),a.push({params:l,pathname:Xt([r,c.pathname]),pathnameBase:Ok(Xt([r,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(r=Xt([r,c.pathnameBase]))}return a}function wk(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,i]=kk(n.path,n.caseSensitive,n.end),l=e.match(t);if(!l)return null;let r=l[0],a=r.replace(/(.)\/+$/,"$1"),u=l.slice(1);return{params:i.reduce((o,f,c)=>{let{paramName:d,isOptional:h}=f;if(d==="*"){let g=u[c]||"";a=r.slice(0,r.length-g.length).replace(/(.)\/+$/,"$1")}const y=u[c];return h&&!y?o[d]=void 0:o[d]=(y||"").replace(/%2F/g,"/"),o},{}),pathname:r,pathnameBase:a,pattern:n}}function kk(n,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),q1(n==="*"||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".'));let i=[],l="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,u,s)=>(i.push({paramName:u,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(i.push({paramName:"*"}),l+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?l+="\\/*$":n!==""&&n!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),i]}function xk(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return q1(!1,'The URL path "'+n+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),n}}function dh(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=n.charAt(t);return i&&i!=="/"?null:n.slice(t)||"/"}function Ek(n,e){e===void 0&&(e="/");let{pathname:t,search:i="",hash:l=""}=typeof n=="string"?Kl(n):n;return{pathname:t?t.startsWith("/")?t:Tk(t,e):e,search:Ck(i),hash:_k(l)}}function Tk(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(l=>{l===".."?t.length>1&&t.pop():l!=="."&&t.push(l)}),t.length>1?t.join("/"):"/"}function Ao(n,e,t,i){return"Cannot include a '"+n+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Ak(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Y1(n,e){let t=Ak(n);return e?t.map((i,l)=>l===t.length-1?i.pathname:i.pathnameBase):t.map(i=>i.pathnameBase)}function V1(n,e,t,i){i===void 0&&(i=!1);let l;typeof n=="string"?l=Kl(n):(l=Jr({},n),Dn(!l.pathname||!l.pathname.includes("?"),Ao("?","pathname","search",l)),Dn(!l.pathname||!l.pathname.includes("#"),Ao("#","pathname","hash",l)),Dn(!l.search||!l.search.includes("#"),Ao("#","search","hash",l)));let r=n===""||l.pathname==="",a=r?"/":l.pathname,u;if(a==null)u=t;else{let c=e.length-1;if(!i&&a.startsWith("..")){let d=a.split("/");for(;d[0]==="..";)d.shift(),c-=1;l.pathname=d.join("/")}u=c>=0?e[c]:"/"}let s=Ek(l,u),o=a&&a!=="/"&&a.endsWith("/"),f=(r||a===".")&&t.endsWith("/");return!s.pathname.endsWith("/")&&(o||f)&&(s.pathname+="/"),s}const Xt=n=>n.join("/").replace(/\/\/+/g,"/"),Ok=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),Ck=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,_k=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function Nk(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}const K1=["post","put","patch","delete"];new Set(K1);const Dk=["get",...K1];new Set(Dk);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Wr(){return Wr=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},Wr.apply(this,arguments)}const ph=L.createContext(null),zk=L.createContext(null),Mi=L.createContext(null),xs=L.createContext(null),ti=L.createContext({outlet:null,matches:[],isDataRoute:!1}),G1=L.createContext(null);function Mk(n,e){let{relative:t}=e===void 0?{}:e;wa()||Dn(!1);let{basename:i,navigator:l}=L.useContext(Mi),{hash:r,pathname:a,search:u}=Q1(n,{relative:t}),s=a;return i!=="/"&&(s=a==="/"?i:Xt([i,a])),l.createHref({pathname:s,search:u,hash:r})}function wa(){return L.useContext(xs)!=null}function Es(){return wa()||Dn(!1),L.useContext(xs).location}function $1(n){L.useContext(Mi).static||L.useLayoutEffect(n)}function Lk(){let{isDataRoute:n}=L.useContext(ti);return n?Xk():Rk()}function Rk(){wa()||Dn(!1);let n=L.useContext(ph),{basename:e,future:t,navigator:i}=L.useContext(Mi),{matches:l}=L.useContext(ti),{pathname:r}=Es(),a=JSON.stringify(Y1(l,t.v7_relativeSplatPath)),u=L.useRef(!1);return $1(()=>{u.current=!0}),L.useCallback(function(o,f){if(f===void 0&&(f={}),!u.current)return;if(typeof o=="number"){i.go(o);return}let c=V1(o,JSON.parse(a),r,f.relative==="path");n==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:Xt([e,c.pathname])),(f.replace?i.replace:i.push)(c,f.state,f)},[e,i,a,r,n])}function Bk(){let{matches:n}=L.useContext(ti),e=n[n.length-1];return e?e.params:{}}function Q1(n,e){let{relative:t}=e===void 0?{}:e,{future:i}=L.useContext(Mi),{matches:l}=L.useContext(ti),{pathname:r}=Es(),a=JSON.stringify(Y1(l,i.v7_relativeSplatPath));return L.useMemo(()=>V1(n,JSON.parse(a),r,t==="path"),[n,a,r,t])}function jk(n,e){return Uk(n,e)}function Uk(n,e,t,i){wa()||Dn(!1);let{navigator:l}=L.useContext(Mi),{matches:r}=L.useContext(ti),a=r[r.length-1],u=a?a.params:{};a&&a.pathname;let s=a?a.pathnameBase:"/";a&&a.route;let o=Es(),f;if(e){var c;let S=typeof e=="string"?Kl(e):e;s==="/"||(c=S.pathname)!=null&&c.startsWith(s)||Dn(!1),f=S}else f=o;let d=f.pathname||"/",h=d;if(s!=="/"){let S=s.replace(/^\//,"").split("/");h="/"+d.replace(/^\//,"").split("/").slice(S.length).join("/")}let y=ok(n,{pathname:h}),g=Vk(y&&y.map(S=>Object.assign({},S,{params:Object.assign({},u,S.params),pathname:Xt([s,l.encodeLocation?l.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?s:Xt([s,l.encodeLocation?l.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),r,t,i);return e&&g?L.createElement(xs.Provider,{value:{location:Wr({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:qt.Pop}},g):g}function qk(){let n=Qk(),e=Nk(n)?n.status+" "+n.statusText:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return L.createElement(L.Fragment,null,L.createElement("h2",null,"Unexpected Application Error!"),L.createElement("h3",{style:{fontStyle:"italic"}},e),t?L.createElement("pre",{style:l},t):null,null)}const Hk=L.createElement(qk,null);class Ik extends L.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?L.createElement(ti.Provider,{value:this.props.routeContext},L.createElement(G1.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Yk(n){let{routeContext:e,match:t,children:i}=n,l=L.useContext(ph);return l&&l.static&&l.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=t.route.id),L.createElement(ti.Provider,{value:e},i)}function Vk(n,e,t,i){var l;if(e===void 0&&(e=[]),t===void 0&&(t=null),i===void 0&&(i=null),n==null){var r;if(!t)return null;if(t.errors)n=t.matches;else if((r=i)!=null&&r.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let a=n,u=(l=t)==null?void 0:l.errors;if(u!=null){let f=a.findIndex(c=>c.route.id&&(u==null?void 0:u[c.route.id])!==void 0);f>=0||Dn(!1),a=a.slice(0,Math.min(a.length,f+1))}let s=!1,o=-1;if(t&&i&&i.v7_partialHydration)for(let f=0;f<a.length;f++){let c=a[f];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(o=f),c.route.id){let{loaderData:d,errors:h}=t,y=c.route.loader&&d[c.route.id]===void 0&&(!h||h[c.route.id]===void 0);if(c.route.lazy||y){s=!0,o>=0?a=a.slice(0,o+1):a=[a[0]];break}}}return a.reduceRight((f,c,d)=>{let h,y=!1,g=null,S=null;t&&(h=u&&c.route.id?u[c.route.id]:void 0,g=c.route.errorElement||Hk,s&&(o<0&&d===0?(Fk("route-fallback"),y=!0,S=null):o===d&&(y=!0,S=c.route.hydrateFallbackElement||null)));let p=e.concat(a.slice(0,d+1)),m=()=>{let b;return h?b=g:y?b=S:c.route.Component?b=L.createElement(c.route.Component,null):c.route.element?b=c.route.element:b=f,L.createElement(Yk,{match:c,routeContext:{outlet:f,matches:p,isDataRoute:t!=null},children:b})};return t&&(c.route.ErrorBoundary||c.route.errorElement||d===0)?L.createElement(Ik,{location:t.location,revalidation:t.revalidation,component:g,error:h,children:m(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):m()},null)}var X1=function(n){return n.UseBlocker="useBlocker",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n}(X1||{}),F1=function(n){return n.UseBlocker="useBlocker",n.UseLoaderData="useLoaderData",n.UseActionData="useActionData",n.UseRouteError="useRouteError",n.UseNavigation="useNavigation",n.UseRouteLoaderData="useRouteLoaderData",n.UseMatches="useMatches",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n.UseRouteId="useRouteId",n}(F1||{});function Kk(n){let e=L.useContext(ph);return e||Dn(!1),e}function Gk(n){let e=L.useContext(zk);return e||Dn(!1),e}function $k(n){let e=L.useContext(ti);return e||Dn(!1),e}function Z1(n){let e=$k(),t=e.matches[e.matches.length-1];return t.route.id||Dn(!1),t.route.id}function Qk(){var n;let e=L.useContext(G1),t=Gk(),i=Z1();return e!==void 0?e:(n=t.errors)==null?void 0:n[i]}function Xk(){let{router:n}=Kk(X1.UseNavigateStable),e=Z1(F1.UseNavigateStable),t=L.useRef(!1);return $1(()=>{t.current=!0}),L.useCallback(function(l,r){r===void 0&&(r={}),t.current&&(typeof l=="number"?n.navigate(l):n.navigate(l,Wr({fromRouteId:e},r)))},[n,e])}const Np={};function Fk(n,e,t){Np[n]||(Np[n]=!0)}function Zk(n,e){n==null||n.v7_startTransition,n==null||n.v7_relativeSplatPath}function Gc(n){Dn(!1)}function Pk(n){let{basename:e="/",children:t=null,location:i,navigationType:l=qt.Pop,navigator:r,static:a=!1,future:u}=n;wa()&&Dn(!1);let s=e.replace(/^\/*/,"/"),o=L.useMemo(()=>({basename:s,navigator:r,static:a,future:Wr({v7_relativeSplatPath:!1},u)}),[s,u,r,a]);typeof i=="string"&&(i=Kl(i));let{pathname:f="/",search:c="",hash:d="",state:h=null,key:y="default"}=i,g=L.useMemo(()=>{let S=dh(f,s);return S==null?null:{location:{pathname:S,search:c,hash:d,state:h,key:y},navigationType:l}},[s,f,c,d,h,y,l]);return g==null?null:L.createElement(Mi.Provider,{value:o},L.createElement(xs.Provider,{children:t,value:g}))}function Jk(n){let{children:e,location:t}=n;return jk($c(e),t)}new Promise(()=>{});function $c(n,e){e===void 0&&(e=[]);let t=[];return L.Children.forEach(n,(i,l)=>{if(!L.isValidElement(i))return;let r=[...e,l];if(i.type===L.Fragment){t.push.apply(t,$c(i.props.children,r));return}i.type!==Gc&&Dn(!1),!i.props.index||!i.props.children||Dn(!1);let a={id:i.props.id||r.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(a.children=$c(i.props.children,r)),t.push(a)}),t}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Qc(){return Qc=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},Qc.apply(this,arguments)}function Wk(n,e){if(n==null)return{};var t={},i=Object.keys(n),l,r;for(r=0;r<i.length;r++)l=i[r],!(e.indexOf(l)>=0)&&(t[l]=n[l]);return t}function nx(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function ex(n,e){return n.button===0&&(!e||e==="_self")&&!nx(n)}const tx=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],ix="6";try{window.__reactRouterVersion=ix}catch{}const lx="startTransition",Dp=AS[lx];function rx(n){let{basename:e,children:t,future:i,window:l}=n,r=L.useRef();r.current==null&&(r.current=ak({window:l,v5Compat:!0}));let a=r.current,[u,s]=L.useState({action:a.action,location:a.location}),{v7_startTransition:o}=i||{},f=L.useCallback(c=>{o&&Dp?Dp(()=>s(c)):s(c)},[s,o]);return L.useLayoutEffect(()=>a.listen(f),[a,f]),L.useEffect(()=>Zk(i),[i]),L.createElement(Pk,{basename:e,children:t,location:u.location,navigationType:u.action,navigator:a,future:i})}const ax=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ux=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Zu=L.forwardRef(function(e,t){let{onClick:i,relative:l,reloadDocument:r,replace:a,state:u,target:s,to:o,preventScrollReset:f,viewTransition:c}=e,d=Wk(e,tx),{basename:h}=L.useContext(Mi),y,g=!1;if(typeof o=="string"&&ux.test(o)&&(y=o,ax))try{let b=new URL(window.location.href),v=o.startsWith("//")?new URL(b.protocol+o):new URL(o),T=dh(v.pathname,h);v.origin===b.origin&&T!=null?o=T+v.search+v.hash:g=!0}catch{}let S=Mk(o,{relative:l}),p=sx(o,{replace:a,state:u,target:s,preventScrollReset:f,relative:l,viewTransition:c});function m(b){i&&i(b),b.defaultPrevented||p(b)}return L.createElement("a",Qc({},d,{href:y||S,onClick:g||r?i:m,ref:t,target:s}))});var zp;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher",n.useViewTransitionState="useViewTransitionState"})(zp||(zp={}));var Mp;(function(n){n.UseFetcher="useFetcher",n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})(Mp||(Mp={}));function sx(n,e){let{target:t,replace:i,state:l,preventScrollReset:r,relative:a,viewTransition:u}=e===void 0?{}:e,s=Lk(),o=Es(),f=Q1(n,{relative:a});return L.useCallback(c=>{if(ex(c,t)){c.preventDefault();let d=i!==void 0?i:Fu(o)===Fu(f);s(n,{replace:d,state:l,preventScrollReset:r,relative:a,viewTransition:u})}},[o,s,f,i,l,t,n,r,a,u])}const ox=`---
title: 常用字字源（更新中）
date: 2025-08-26
description: 整理常用汉字的字源
---

# 一部

## 一

原始计数符号。春秋战国后，可写作“弌”或“\\[一+戈]”，表示每天第一次持戈巡逻，弍、弎同，后世废弃。

## 元

元、兀原为一字，表示人头。人头形状的圆点变为一横，即是兀字，后上面再加一横画饰笔，变成元。兀继承人头引申的高耸义，元继承人头引申的首脑、首要、第一等义。

其货币单位义的源起有两种说法：

1.  源于元宝，而元宝一词始于讹误，唐代“开元通宝”铜钱识读顺序为上下右左，民间按逆时针误读作“开通元宝”，自宋太宗“淳化元宝”始，后世沿用元宝一次作为货币名称，后一枚元宝称为一元，元逐渐成为货币单位。
2.  源于银圆，近代中国流通的圆形货币称作银圆，而后圆俗写作元，而成为货币单位。

## 丕

丕、不原为一字，表示树根，上面一横是地面，下面部分是草木根部。后分化出丕字，在早期典籍中释义为大。

## 吏

吏、史、使、事原为一字，一只手持一个“中”形物品，所持之物有田猎的网、简册、盛筭器具、笔、用来钻龟甲的弓钻等几种不同说法，但可以确定的是与国家官职事务相关。后根据强调的侧重不同分化为不同的字，吏强调做事之人，引申为官员。

***

# 上部

## 上

指事字，上短横下长横，长横为基准线，表示短横在其上。春秋时或加一竖，与今天的字形相近，战国时或沿袭此形，或去掉短横作丄。

## 帝

构形含义主要有两种解释：

1.  花蒂之形，是蒂的本字，是古人对生命诞生的崇拜
2.  架木焚烧祭天之形，是禘的初文，引申为天帝，后成为商王的符号

## 旁

甲骨文从凡方声，西周时凡下部和方上部合并，且在凡上加一横作饰笔，春秋时进一步讹变，说文小篆承袭自其中一种变体，变成“㫄”，汉隶承袭自另一种变体，后演变为楷书“旁”。造字本义不明，可能因“方”而含有周围之义。

## 下

与上类似，略。

***

# 示部

## 示

示、主原为一字。甲骨文字形为神主，即供奉祖先神灵的石头祭台，后下面的祭台腿省略作一竖，后金文又在两侧增加两点，可能是支架也可能是涂抹在神主上的血。后引申为天神显现的征象，进一步引申出展示、示范等义。

## 祜

从示古声，福。

## 禮（礼）

甲骨文和早期金文中作豊，从珏、从壴（鼓的初文），后加示旁分化出禮字。本义是用玉敬神，即举行礼仪、祭神求福。

## 禧

从示喜声，福。

## 禛

从示从真、真亦声。本义是指以真诚感神而获得福佑。

## 禄

从示录声，福。金文中多假录为禄。

## 禎（祯）

从示貞声，吉祥。

## 祥

从示羊声，最早写作羊，后加示旁分化出祥，本义指福、吉祥，古人因羊肉鲜美认为是吉祥的祭品。引申又泛指征兆，可吉可凶。

## 祉

从示止声，福。

## 福

从示畐声。左侧是神主，右侧是酒坛，表示将酒供奉给神，祈求幸福。甲骨文中或增加两只手，即捧着酒坛。金文中或增加宀，可能表示在家里敬神，或在左右增加两个背向的人，即“北”，作为追加的声符。小篆继承自原始字形，右侧变成畐。

## 祐

从示右声，本义指神灵帮助、保佑。甲骨文中有、祐、侑、右、又均写作又，后分化为以上诸字。西周金文右侧或作友，即“礻友”，乃声符互换。

## 祺

从示其声，吉祥。《说文》古文或作禥，从基声，乃声符互换。

## 祗

从示氐声，本义指敬、祈祷。后世又通“衹”，表只、仅。

## 禔

从示是声，本义指安，引申又有福、喜之义。

## 神

从示申声，由申字分化而来。申为闪电之形，古人无法理解闪电现象，联想为有天神操纵。后因申被借用为地支第九位，故又加示单独分化出神。

## 祇

从示氏声，本义指地神，后泛指一切神。后世又通“衹”，表只、仅。

## 祕

从示必声，本义指神，引申指神秘，此义后写作秘。

## 齋（斋）

从示，齊省声。本义是古人祭祀前整洁身心的活动，引申有庄重、恭敬之义。春秋时本是从示齐声，即左示右齐，后演变为上下结构，上部是古齐字（形如厽），齐字后演变为在下方加两横变为亝，齋字则将亝的下面两横和示的上面两横合并，即借笔。汉代时又有异体作䄢。

## 禋

从示垔声，本义是一种升烟祭天的仪式，泛指虔诚的祭祀。西周时或从宀从示煙声，春秋时省去宀和火，变为禋，后世沿用。

## 祭

从示从右从肉，本义指祭祀。早期甲骨文从又从肉加小点，为手持肉祭祀，小点是血滴。晚期甲骨文追加示旁，后沿用。

## 祀

从示巳声，本义指永久祭祀，泛指祭祀。可能是巳之分化字。

## 祔

从示付声，一种祭名，新死之人附祭于先祖。

## 祖

从示且声，本字为且。且字造字之义有两种说法：

1.  男性生殖器
2.  神主

春秋时期分化出从示的祖字来表示祖先，且字用为虚词。

## 祠

从示司声，本义指春祭，泛指祭祀。

## 祝

会意字，甲骨文像人跪在神主前祷告之形，本义是祝祷，引申指主持祭礼的人。西周晚期金文右侧部分写法变得与兄相同，后沿袭。

同时“祝”也是“咒”的本字。“祝”因义项繁多，分化出从口的“呪”字专表祝祷义，既可以表祈福也可以表诅咒，是同一件事的两面。后“呪”字产生俗体字作“咒”，字义逐渐偏向恶意的诅咒义，又引申指宗教、巫术中的口诀密语。《说文》中还有从言从州的“詶”字，与詛互训，有两个义项，既通“酬”，也通“咒”，表第二个义项时可认为是“咒”的另一个异体字。

## 祈

从示斤声，本义指求福。西周金文中常借旂为祈。

## 禱（祷）

从示壽声，本义指向神祝告求福

## 禳

从示襄声，本义指消除灾邪的祭祀。襄表声的同时，附带去除之义。

## 禪（禅）

从示單声，指祭天。

## 禦（御）

从示御声，本义指御除灾殃的一种祭祀，引申为禁止防止，进一步引申为抵抗抵挡，抵御的同时也是保卫，又引申出护卫义。商代字形本是从卩从午，后增加示旁，秦小篆开始变为以御字为声符，而“御”字本是驾驭车马的意思。这二字本义不同，御字意义多与驾驭、统治、控制、帝王专属词有关，禦字则多与禁止、抵挡有关。

## 社

从示从土，本义指土地之神。甲骨文以土为社，后金文加示旁分化出社字。土地神“社”与谷神“稷”合称社稷，是古代帝王祭祀对象，后演变成国家象征。社由土地神引申出祭祀土地神场所的意思，如社庙、社坛。祭祀需要聚集人群，由引申指集体性组织，如诗社、社团。社也是古代基层行政单位，加之其集体含义，又演变出社区、社会等含义。

## 禍（祸）

从示咼声，本义指灾害。

## 祟

从甲骨文到西周，都是从示从木，指鬼神制造的灾祸。上面的木从战国时开始讹变，后逐渐变为出。

## 禁

从示林声，本义是忌讳。

## 祧

从示兆声，本义指帝王远祖之庙，引申指把隔了几代的祖宗的神主迁入远祖的庙，如：不祧之祖。

## 祚

从示乍声，本义指福，又指帝位。或通“阼”，践阼也写作践祚。

***

# 三部

## 三

指事字。弎、\\[三+戈]字形与一情况类似，略。

***

# 王部

## 王

象形字，甲骨文像斧钺之形，象征王权，本义指古代最高统治者。引申又指统治，读wàng。小篆时王与玉字形接近，王字中间一横略靠上，玉字三横均分。

## 閏（闰）

会意字，王在门中，本义是历法术语。天子每月举行告朔之礼时，分别居于不同的宗庙位置，但逢闰月，则居于路寝门，所以用王在门中表示闰。

## 皇

象形字，构形解释不一：

1.  像火炬光焰上腾之形，是“煌”字初文。
2.  像王著冠冕形，礼记等文献表明皇是一种有羽毛装饰的冠。
3.  由日+土组成，皇，大也。日出土则光大，日为君象，故三皇称皇。

古时有大之义，又可指君主。甲骨文有的字形在原始字形基础上加声符王，西周金文将王字竖笔与上半部竖笔重合，即借笔，春秋时又将王独立出来。至秦小篆上部讹变为“自”，相传是秦始皇所改，“自”本义是鼻，引申为开始之义，自+王即是后世王的鼻祖，始皇帝之义。汉代上部又讹变为白，一直沿袭至今。

***

# 玉部

## 玉

象形字，甲骨文像一串玉之形，本义指玉石。西周金文与后来的王字形类似，但中间一横在正中间，王字中间一横偏上。战国时为了与王相区别，或增加一二斜笔。秦小篆沿袭未加区分符号的字形，汉代有的字形沿袭加区分符号，后演变为现在的玉字形。

## 瓘

从玉雚声，玉名。

## 瑾

从玉堇声，一种美玉，金文借堇为瑾，瑾是后起分化字。

## 瑜

从玉俞声，一种美玉。

## 瓊（琼）

从玉敻声，本义指赤色玉，泛指美玉。

## 璐

从玉路声，一种美玉。

## 瓒（瓒）

从玉贊声，质地不纯的玉。

## 瑛

从玉英声，玉的光彩，又指似玉的美石。

## 璿

从玉睿声，美玉。异写作璇、琁。

## 球

从玉求声，本义指美玉。始见于秦代文字，或体作“璆”，乃声符互换，璆字沿用至今表示美玉的本意，而球字从近代开始作为“毬”字的异体字变为专指圆形立体物品。

## 琳

从玉林声，美玉。

## 璧

从玉辟声，一种玉质礼器，平圆形，正中有孔，边宽为内直径两倍（边大孔小）。六器之一，礼天。

## 瑗

从玉爰声，孔大边小的璧。

## 環（环）

从玉睘声，睘是環的初文。指边与孔一样宽的璧。引申泛指圆圈形物体。

## 璜

从玉黄声，一种玉质礼器，像璧的一半。六器之一，礼北方。

## 琮

从玉宗声，一种玉质礼器，方形长筒，中有圆孔（略似内圆外方的笔筒形）。六器之一，礼地。

## 琥

从玉虎声，本义指发兵的虎符，又指一种礼器。六器之一，礼西方。

## 琬

从玉宛声，上端浑圆无棱角的圭。

## 璋

从玉章声，瑞玉名，形如半圭（前端斜刃）。六器之一，礼南方。

## 琰

从玉炎声，美玉。

## 瑁

从玉冒声，天子所执之玉，下部刻成凹形，与诸侯所持的圭尖端吻合。册封诸侯时天子将圭赐给诸侯，诸侯来朝见时天子将瑁覆盖在圭上，凹凸吻合证明无误，与兵符的功能类似，属于信物。因为要覆盖在圭上，所以称为“瑁”。

## 珩

从玉行声，玉佩上端的横玉，形状与璜、磬接近。

## 玦

从玉夬声，环形有缺口的佩玉，与人断绝关系的象征性物品。君主将臣子驱逐贬谪后，如果赐環则可以返还，如果赐玦则不准返还。又指射箭时戴在大拇指上用来钩弦的器具。

## 瑞

从玉耑声，本义指玉制信物，除了作为君臣宾主间的信物（如圭、瑁），也作为各种祭神玉器的总称（璧、璋、琮等等），祭神是祈求福佑，祈求应验，如符节信物相合，由此引申出祥瑞之义。

## 珥

从玉耳声，本义指即瑱，后变为指耳珰。引申指日月两旁的光晕，也指玉制剑鼻（即镡，剑柄和剑身之间左右突出的部分），以上事物都是分列左右两侧的形状，像人耳在两旁一样，所以称珥。

## 瑱

从玉真声，冠冕（或发簪）上垂于两耳侧的玉饰，用来塞耳，故又名“充耳”。原始功能是耳塞，后变成象征性饰品，提醒佩戴者要慎听、不妄听谗言。

## 玼

从玉此声，本义指玉色鲜明（读cǐ）。又指玉上斑点（读cī)，与“疵”通。

## 瑩（莹）

从玉熒省声，本义指玉色光洁，又指似玉美石。

## 瑕

从玉叚声，本义指带红色的玉，又指玉上斑点，引申指人的缺点过错。

## 琢

从玉豖声，本义指加工玉石。治骨曰切，象曰磋，玉曰琢，石曰磨。

## 琱

从玉周声，本义指治玉、雕刻，后作“雕”。

## 理

从玉里声，本义指治玉，引申为治理、料理，又引申有条理、纹理、道理等义。

## 珍

从玉㐱声，本义指珠玉之类的宝物，引申有宝贵、精美之义，又引申有重视之义。异写作珎。

## 玩

从玉元声，本义指玩弄、戏弄，引申指供赏玩之物。

## 玲

从玉令声，象声词，玉碰撞声。

## 瑲（玱）

从玉倉声，象声词，玉碰撞声，引申指乐声。

## 琤

从玉争声，象声词，玉碰撞声，引申指琴声或水流声。

## 瑣（琐）

从玉，𧴪声，象声词，玉碰撞发出的细碎声（其声旁本义是小贝壳碰撞声，引申指细碎）。又指连环、锁链，此义后作锁。

## 琚

从玉居声，玉名，又专指佩玉。

## 玖

从玉久声，本义指似玉的黑色美石，武则天时改为数字九的大写。

## 碧

从玉从石白声，本义指青绿色美石，引申指青绿色。

## 琨

从玉昆声，美石美玉。

## 珉

从玉民声，似玉美石。

## 瑶

从玉䍃声，美玉。

## 珠

从玉朱声，本义指蚌壳体内所生的珍珠，又可指似珠的宝石，又引申指珠装物品。

## 瓅

从玉樂声，常见于“玓瓅”，指明珠的光泽。

## 珧

从玉兆声，一种海蚌，壳中肉柱称为江珧柱，壳可以做饰物，常用来装饰刀、弓，所以又引申指弓名。

## 玫

从玉文声（右侧是文不是攴），“玫瑰”本义指美玉名，又指植物名。

## 瑰

从玉鬼声，见“玫”字。引申又指珍奇，又指美好。

## 璣（玑）

从玉幾声，本义指不圆的珠或小珠，又指观天仪器，又指北斗第三星。

## 琅

从玉良声，“琅玕”指像珠的美玉或美石，传说中的仙树，其果实似珠。“仓琅”指门环，因为门环是铜制，呈青色，所以称仓琅。“琳琅”指美玉或玉石相击声。

## 珊

从玉册声，多指珊瑚。“珊珊”指玉声。

## 瑚

从玉胡声，见“珊”字。瑚又可指宗庙盛黍稷的礼器。

## 琀

从玉含声，本义指死者口中含的珠玉等物。

## 𤫊（灵）

从玉霝声，靈的异体。本义指古时楚人跳舞降神的巫。其声旁霝是零的本字，义为降雨，此处作声旁，也兼有降临义。春秋时下部从示，表示与事神有关。战国时改从玉，《说文》解释是因为巫以玉事神。至秦小篆，出现了从玉和从巫两种写法，分别演化成𤫊和靈。

又引申指神灵，又引申指福、善，又引申指聪明、灵活等。

## 琖（盏）

从玉戔声，本义指浅而小的玉杯，同“盞”。其声旁戔有浅小之意。

## 琛

从玉深省声，本义指珍宝，引申指珍贵。

## 璫（珰）

从玉當声，本义指玉质瓦当。又指汉代武职宦官冠品。又指耳坠。又指物体碰撞清亮之声（珰琅）。

## 珂

从玉可声，玉名，又指贝名，又指马勒上的装饰。

## 玘

从玉己声，玉名，又指佩玉。

## 璀

从玉崔声，玉名。“璀璨”指玉的光泽，泛指光亮貌。

## 璨

从玉粲声，指玉的光泽，也指美玉，引申指灿烂明亮。

***

# 珏部

## 珏

会意字，二玉相合为一珏。古代用玉或贝壳作货币，两串贝壳称为一朋，两串玉称为一珏。秦代时出现异体作瑴，二字相通。

## 班

会意字，以刀分玉，本义指分瑞玉，瑞玉即玉质信物，分开后各执其一以为信。引申指分别。又引申指分给、赏赐。又引申指次第、次序。

“班师”一词本义是整肃军队秩序，见“班师振旅”，其中班字本是由秩序义引申出的动词含义，即整肃秩序。而“班师”又经常用于“班师还朝”一词，即战争胜利后整肃军队秩序并返还朝廷，后“班师”逐渐成为一个固定词汇，专指战后返回朝廷，丢失了班字本义。以至于常有人误以为班师中的班字是返回的意思，大谬。

***

# 气部

## 气

象形字，指云气。甲骨文中作三横，中间一横较短，与“三”字相区分。春秋时将上面一横弯曲，战国时又将下面一横弯曲，后演变为今天的字形。

而“氣”字是后起字，最早见于东汉《说文解字》，氣字本义是赠送人粮食，又引申指食物，读音为xì。而后约从汉代起，常借氣代气，气字渐废不用，使得氣专指云气，又单造从食的“餼”（简化字为饩）字表示原氣字食物或送食的本意。氣、气二字属于借字和被借字的关系。

## 氛

从气分声，本义指预示吉凶的云气，有时也单指凶气，所谓祥吉氛凶。也指寒气、霜雾貌，或从雨作“雰”。

***

# 士部

## 士

象形字，与王字构形类似，也是斧钺之形，本义指负责刑狱的官职。后又指未婚青年男子、古代贵族最低一级、士兵、知识分子等。

## 壻

从士胥声，本义指妇女对丈夫的称呼，也引申指对女儿、妹妹或其他晚辈的丈夫的称谓。秦代文字中或从女作“婿”，今简化字采用婿字形。

## 壯（壮）

从士爿声，本义指人体高大，引申指各种物体的大，又引申指壮年

***

# 丨部

## 中

象形字，像带旒旗帜之形。至秦代将旗旒部分省略，演变为后来的“中”字形。本指竖立的用来测风向的旗子，后引申出中央、中间的含义，而这个引申义的来源说法不一：

1.  因字形中旗子在上下旗旒正中间，所以有中间的含义。
2.  树立旗帜一般用于征召族人从事集体活动，旗树于中央，所以有中央的含义。

## 屮

象形字，像草木初生之形。屮、艸乃一字之分化。

## 屯

甲骨文字形像一棵嫩芽艰难冲破土壤长出地面，金文将表示种子的小圈变为一点，秦篆又将一点变为一横，变为屮（草）穿出地面的样子。本义即是艰难，此义读zhūn。因为像草木初生的卷曲之形，又有卷曲、包裹、聚集的意思，此义读tún。屯是春的本字。

## 每

象形字，像女子头戴笄饰。甲骨文从女或母，小篆上部变为屮，汉代时将上部简化并单独割裂，下面固定从母，后演化成今天字形。

其“各个”、“全体中任何一个”的义项演化来源说法不一：

1.  《说文》认为每字从屮母声，将上下拆分解释，认为每字是指草叶茂盛的样子，从而引申出密集、频繁、常常之义。根据小篆以前的字形可以知道上部并不是屮，所以此说应有误。
2.  头饰繁复引申为丰盛、密集，从而引申出频繁、周遍之义。
3.  字形是戴笄的女子，女子及笄之后就要婚嫁，婚嫁后就会生下一个又一个孩子，因而引申出反复、周遍之义。
4.  与女性月经有关，从而有每次、周期的意思。此说无切实依据。

## 毒

从屮从毐（或说毐为声符，见《说文解字系传》：從屮毐聲），本义指毒草。此字在先秦字例较少，暂以《说文》为准。下面“母”的部分应是是“毋”。

## 芬

从屮分声，本义指香气。《说文》收录两种字形：从屮或艸。汉代沿袭从艸的写法，沿用至今。引申指美名、美德。

## 熏

会意字，会火从窗上出之意。西周金文下部是火，上部是窗户形状。战国时下部变成黑字，会熏黑之意。至汉代将上面屮形拉直。楷书在上面又加一撇。本义指火烟冒出，引申指熏炙、烧灼。

***

# 艸部

## 艸

象形字，像草形，本义即是草。“草”字是在艸下追加声符早而成的分化字。

## 莊（庄）

从艸壯声，本义指草盛貌，又引申指盛大、庄重，因为有大的意思，又把大店铺成为庄，如钱庄、茶庄等。

## 芝

从艸之声，本义指灵芝，一种菌类。又指香草，同“芷”。

## 莆

从艸甫声，一种水草，即蒲草。

## 萁

从艸其声，本义指豆秆。

## 𧆑（藿）

从艸靃声，本义指豆叶。因“靃”或体作“霍”，所以此字也可作“藿”。又指一种香草。

## 莠

从艸秀声，本义指狗尾草，是田间常见杂草，引申有坏、恶之义。

## 蘇（苏）

从艸穌声，穌是蘇的本字。金文本是魚+木，一种猜想是表示用树枝穿鳃提鱼，这样鱼离开水不会立刻死，短时间内放回水里可以“复活”，所以穌有复活、苏醒的意思。金文后又加艸头作“蘇”，有两种解释，一是表示用稻草穿鳃提鱼，二是指一种能解毒使人“复活”的草——紫苏。至小篆将木改为禾。

## 荏

从艸任声，草名，即白苏。荏、蘇是同一类植物。又有柔弱、怯弱之义。由于白苏生长周期短，迅速生长、茂盛又迅速凋零，“荏苒”一词又引申指光阴流逝。

## 葵

从艸癸声，本义指葵菜。而向日葵原产美洲，此义最早见于明朝，称西番葵。

## 莧（苋）

从艸見声，指苋菜。

## 芋

从艸于声，植物名，即芋头。《说文》：大叶实根，骇人，故谓之芋也。是说人首次见到这种植物的形状发出“吁”的惊叹，所以称为芋。

## 菊

从艸匊声，本义指大菊、蘧麦。又指菊花。

## 葷（荤）

从艸軍声，本义指葱、蒜等有特殊气味的菜，代表肉食的本是“腥”字。佛教禁的五荤指葱、蒜、韭、薤、兴渠，本不禁肉食。南梁时梁武帝萧衍下令禁肉食，后荤腥不分，荤字逐渐变成肉食的代称。

## 菁

从艸青声，本义指韭菜的花，引申泛指盛开的花。又指“芜菁”，一种类似萝卜的植物。

## 菔

从艸服声，本义指芦菔，即萝卜。

## 苹

从艸平声，本义指浮萍，同蓱（萍）。又指艾蒿。注意苹果一词中的苹是“蘋”的简化字。

## 藍（蓝）

从艸監声，本义指蓼蓝，叶可制蓝色染料，即靛青。引申指青蓝色。

## 藼（萱）

从艸憲声，本义指萱草，即忘忧草。或从煖作蕿，或从宣作萱，或从諼作蘐，或从爰作萲，均是声符替换现象。最早见于诗经，作“諼草”，諼即忘记，因为服用萱草可以使人心神安定，似乎忘却烦恼。

## 蘭（兰）

从艸闌声，本义指兰草，又指兰花。

## 薰

从艸熏声，本义是一种香草名，引申指香气。

## 薊（蓟）

从艸魝声，本义是草名，又指州名。

## 薛

从艸辥声，本义是草名，又指古国名。

## 苦

从艸古声，本义指苦菜，即茶。引申指苦味，又引申指痛苦。

## 茅

从艸矛声，指茅草。

## 菅

从艸官声，本义是草名，菅茅。“草菅人命”指视人命如微贱的茅草。

## 莞

从艸完声，本义指蒲草，可以编席，读guān。又指微笑的样子，如莞尔、莞纳，读wǎn。

## 藺（蔺）

从艸閵声，本义指灯心草，可以编席。

## 蒲

从艸浦声，本义指蒲草，可以编席。又指蒲柳，即水杨。

## 蔗

从艸庶声，指甘蔗。

## 茜

从艸西声，本指茜草，其根可作红色染料，又引申指红色。

## 苞

从艸包声，本义是草名，可编席和鞋。

## 艾

从艸乂声，本义指艾蒿。又指漂亮的人。又有年老义，特指五十岁，引申指老人。又有终止、断绝义，此义应是通“乂”而来，引申为悔恨。

## 芹

从艸斤声，本义指水芹，也指芹菜。后作谦辞，表示微薄的情意，此义出自《列子·杨朱》，有人向豪绅吹嘘水芹好吃，豪绅吃后觉得非常难吃，于是献芹、芹意即有赠送一些粗鄙礼物的谦义。

## 芸

从艸云声，本义指芸香。又指众多貌。

## 芰

从艸支声，指菱角。

## 芡

从艸欠声，本义是一种水生植物，即“芡实”。“勾芡”一词来源有两种说法：

1.  做菜时用粉牵合，以粉护持，类似拉船用纤，“纤”转写为“芡”。
2.  最早勾芡淀粉原料是用芡实磨成的粉，所以叫勾芡。

## 蒹

从艸兼声，指没出穗的芦苇。

## 蓮（莲）

从艸連声，本义指荷的种子，即莲子。

## 荷

从艸何声，植物名，又名扶渠、芙蕖、芙蓉，此义读hé。原本表示扛、担之义的“何”字，因为被借用作疑问代词，故又借用“荷”字表此扛、担之义，表此义时读hè。

## 蕅（藕）

从艸从水禺声，此为正字，或作藕。指莲的根状茎。

## 蓍

从艸耆声，草名，其茎用于占卜。

## 蘿（萝）

从艸羅声，能爬蔓的植物，如松萝、莪蒿等。而萝卜（蘿蔔）一词是音译，与蘿字本义无关，古代各地音译叫法不同，如莱菔、芦菔、芦萉、蘿蔔等。

## 蕭（萧）

从艸肅声，本义指艾蒿。又指冷落、凋零。也作姓氏。“萧墙”指照壁，此处萧通肃，指君臣相见之礼，在照壁前要肃敬，故称“萧墙”。

## 芍

从艸勺声，本义指凫茈，即荸荠。又指芍药。

## 葛

从艸曷声，植物名，茎皮纤维可作纸和葛布。引申指葛织成的布。

## 蔓

从艸曼声，本义指蔓生植物的枝茎，木本曰藤，草本曰蔓。引申指蔓延、滋长。

## 蔣（蒋）

从艸將声，本义指茭笋。

## 菌

从艸囷声，本义指蘑菇类真菌。

## 蕈

从艸覃声，义同菌。

## 葚

从艸甚声，桑树果实。

## 荆

西周金文为带刺的枝条形状（一说是人被刺扎），后追加声符井，后又省略枝条上的刺，先变作“刃”，又减省为“刀”，至此字形成为“㓝”，也即“刑”的初文。本义是一种带刺灌木名，又称楚。古时用来制作刑杖，故引申为刑具、刑罚等义。战国时又追加艸旁造专字表带刺灌木的本义，小篆将“井”讹为“幵”，后进一步讹作“开”，“㓝”、“𠛬”、“刑”本为一字之分化，属于讹变异体。后世楷书写作“荆”。

由荆木也可以制作钗，古代妇女买不起金银钗只能戴荆钗，引申出“拙荆”一词作自己妻子的谦称。

## 芽

从艸牙声，本义指植物刚长出来的可以发育成茎、叶或花的部分。引申指草木发芽，又引申指事物开始、发生。

## 萌

从艸明声，本义指芽，引申指开始发生的事物或征兆，又可以指开始。

## 茁

从艸出声，本义指草木生出地的样子，引申指生出。

## 莖（茎）

从艸巠声，本义指草木主干部分，引申指器物的柄。

## 葉（叶）

从艸枼声，本字是“枼”，枼的甲骨文像树上有叶之形，金文将树叶简化，春秋时将上半部与树干分离变为世，以致许慎误认为枼从木世声。后又加艸旁变为葉。

本义指植物的叶子，引申指像叶子的东西。因竹简、纸张呈薄片似树叶，所以简、书中的一张称为一葉，此义后来借本表示人头的“頁”来表示，属于近音假借。

从口从十的“叶”字是“协”的异体字，读xié，与葉本无关系。后由于吴方言中叶、葉读音相近，吴方言地区民间将葉俗写作叶，简化字采用了这一替代方案。

葉公好龙中的葉古音读shè，今已从俗读yè。

## 葩

从艸皅声，本义指草木的花，引申指华美。

## 英

从艸央声，本义指花，引申指美好，又引申指才能出众，又引申指杰出人物。

## 萋

从艸妻声，指草木茂盛。

## 莢（荚）

从艸夾声，本义指豆角。夾兼表意：两旁相夹豆在其中。

## 芒

从艸亡声，本义指草木头上的细刺，引申指刀尖锋芒，又引申指光芒。

## 蔕（蒂）

从艸帶声，本义指花、瓜果与枝茎相连的部分，后作“蒂”。

## 茂

从艸戊声（注：戊字本是莫候切，与茂同音，后梁太祖朱温父亲名诚，因“戊”类“成”字，为避讳改戊为武，后人由此多误读，逐渐演变为wù音）。本义指草木繁盛，引申指盛、美，又指优秀。

## 蔭（荫）

从艸陰声，本义指草木之荫，读yīn。引申指遮盖，又引申指庇护，读yìn。

## 蓁

从艸秦声，本义指草叶茂盛，引申指众多，又引申指积聚之貌。

## 芮

从艸内声，本义指草初生柔细的样子，引申指柔软。

## 茬

从艸在声，本义指草盛貌，读chí。又指庄稼收割后留在地里的根茎，也可指同一块地上作物生长的次数，读chá。

## 薈（荟）

从艸會声，本义指草盛貌，引申指会聚，如荟萃。

## 蒼（苍）

从艸倉声，本义指草色，引申指青黑色、浅青色、灰白色。

## 萃

从艸卒声，本义指草盛貌。引申指聚集，如荟萃。又引申指群、类，如出类拔萃。

## 苗

会艸生于田之意，本义指初生的植物，引申指某些初生的动物，又引申指事物初生的迹象。

## 苛

从艸可声，本义指小草，又指细草丛生之貌，引申指细碎、烦琐，又引申指苛刻、狠虐。

## 蕪（芜）

从艸無声，本义指田地荒废，因荒地会杂草丛生，又引申指繁杂、杂乱。

## 薉

从艸歳声，本义指荒芜，引申指杂草。

## 荒

从艸巟声，本义指田地荒芜，引申指收成不好、凶年，也引申指荒废。

## 落

从艸洛声，本义指树叶脱落，艸曰零、木曰落。引申指掉落，又引申指衰亡。

## 蔽

从艸敝声，本义指小草貌，又指遮挡、隐藏、欺瞒、概括。

## 蔫

从艸焉声，本义指植物失水枯萎、不新鲜，引申指精神不振。

## 蔡

甲骨文、金文构形不明，应与祭祀活动有关。至战国时又出现从艸祭声的写法，小篆承袭。《说文》认为本义指野草。实际多用于姓氏、国名。

## 菜

从艸采声，本义指蔬菜，引申指肴馔总称。

## 薄

从艸溥声，本义指草木密集丛生之处。丛生的草木挨得近，故引申指逼近、迫近，如日薄西山。又引申指物体厚度小，又引申指轻微。

## 苑

从艸夗声，本义指养动植物的地方，引申指帝王游猎的场所，又泛指园林、花园。

## 芳

从艸方声，本义指花草的香气，引申又指香草，也指花卉，又引申指贤德之人。

## 藥（药）

从艸樂声，樂兼表义，有使人快乐的含义。本义指能治疾病的植物，泛指可治病之物，引申又指用药治病。简化字“药”源于“葯”，本义是白芷，属于同音假借。

## 荐

从艸存声，本义指草席，又指席子下的垫草。通“薦”。

## 藉

从艸耤声，本义指古代祭祀或朝聘时陈列礼品的垫物，有席垫义，与枕连用作“枕籍”一词，本义指枕头与垫席，引申为沉溺、多而杂乱。耤中的昔又有交错义，“藉”也引申有杂乱义，如“狼藉”。又通“耤”，表示天子象征性的耕田仪式。又引申出假托、利用义，此时可通“借”。

## 茨

从艸次声，本义指用茅草盖屋，引申又指茅草改的屋顶。

## 葺

从艸咠声，本义指用茅草盖屋，引申指修整。

## 葢（蓋、盖）

从艸盇声，从春秋指楷书字形始终变化不大，自汉代又分化出俗体“盖”。本义指盖屋的茅苫，引申指能用于遮盖的东西，又引申为覆盖、遮盖、胜过、压倒等。

## 藩

从艸潘声，本义指篱笆，引申指屏障。

## 荃

从艸全声，本义是香草名，古用以比喻君王。

## 若

象形字，像人跽坐以双手顺发之形。西周金文加“口”坐饰笔，战国时上部头发讹变为屮，又进一步讹变为艸，中间的两只手省讹为“又”（或认为是头发和一只手合并讹作“艸”，另一只手写作“又”），至小篆时定形为后来的“若”字形。

本义是顺。从顺从引申出如同义，又假借为第二人称代词。

## 茵

从艸因声，本义指车上的垫褥。

## 芻（刍）

会意字，甲骨文从又从艸，会以手拔草之意。战国时“又”或变为“彐”形，小篆进一步讹变。

本义是拔草，引申指割草，又引申指牲口吃的草，故有“反刍”。又指吃草的牲口。

## 茹

从艸如声，本义指喂牛马。引申指吃、吞咽，如：茹毛饮血。又引申指受，如：含辛茹苦。

## 萎

从艸委声，本义指草木枯死。

## 薪

从艸新声，新是薪的本字。本义指作燃料的木材，即柴。“薪水”一词指柴和水，代指生活必需品，引申指日常生活费用、工资。

## 蒸

从艸烝声，本义指麻杆，也指细小的木柴。又假借为“烝”，指火气上行。

## 蕉

从艸焦声，本义指生麻，又指蕉麻，又泛指芭蕉科植物。

## 折

会意字，甲骨文从斤从断木，会以斧断木之意。西周金文将断木变为艸形，春秋金文又在断草中间加两横饰笔，小篆将左部整体讹变为“手”，沿用至今。

本义指折断，引申指弯曲、损坏、减少。“奏折”、“存折”等词表折叠义的本是“摺”字，简化字并入折。

## 芔（卉）

会意字，以三屮会百草之意，本义指百草总称，泛指草木，又指众多。

## 蒜

从艸祘声，荤菜名。

## 芥

从艸介声，本义指芥菜，也指小草。

## 蔥（葱）

从艸悤声，本义是菜名，引申指青绿色。

## 苟

从艸句声，本义是草名，又指菜名，假借为虚词。

## 蕨

从艸厥声，一种野生植物。

## 莎

从艸沙声，本义指莎草。

## 蓱（萍）

从艸从水并声，同“萍”。

## 菲

从艸非声，本义是菜名。因菲菜粗贱，引申出薄、少义，此义读fěi。又指花朵芳香、美丽，此义读fēi。

## 葦（苇）

从艸韋声，指芦苇。

## 葭

从艸叚声，指初生的芦苇。

## 萊（莱）

从艸來声，本义是野菜名，引申指生满杂草，又指除草。

## 荔

从艸劦声，本义指草名，即马荔。又指荔枝。

## 蒙

从艸冡声，本义指草名，即菟丝（女萝）。假借为“冡”，表示覆盖，又指隐瞒、欺骗，又指承受。

## 范

从艸氾声，本义指草，也指姓氏。与“规範”的範是不同的字，简化字二者合并。

## 薔（蔷）

从艸嗇声，本义是草名，读sè。又作“蘠”字俗体，指蔷薇，读qiáng。

## 荼

从艸余声，本义指苦菜，即茶。引申指苦、痛。

## 蒿

从艸高声，草名。

## 蓬

从艸逢声，本义指蓬草，引申指散乱、蓬松。

## 藜

从艸黎声，本义指藜科植物，茎可以作手杖。

## 葆

从艸保声，本义指草盛貌，又指车盖。又通“保”，有保持、保护义，如“葆真”、“永葆青春”。

## 蕃

从艸番声，本义指草盛貌，引申指滋生、繁殖，又引申指多，此义读fán。又通“番”，指对西方边境少数民族通称，此义读fān。“吐蕃”一词中读bō。

## 茸

从艸聪省声，本义指草初生纤细柔软的样子，引申指柔软的细毛。

## 草

从艸早声，本指栎树的果实，汉代以后，借以表示“艸”，再造了一个“皁”字表示栎树，“皁”字又变写作“皂”。由草义引申出生长草的野地之义，引申为粗劣，再进一步引申出潦草、初拟等义。

## 蓄

从艸畜声，本义指积聚、储藏，引申又指蓄养。

## 春

甲骨文从多个木（一至四个木不等）、从日、屯声，也有少数仅从日、屯声，后一种写法一直延续到战国时代。春秋时从木的部分变为从艸，直至小篆皆沿用，即“萅”。隶变后，古隶上半部的艸和屯讹变为三个“屮”+“人”，汉隶则进一步讹变为“𡗗”，后定形为“春”。本义指春季。

## 芙

从艸夫声，本义指荷花。

## 蓉

从艸容声，本义指荷花。

## 荀

从艸旬声，草名。

## 蔬

从艸疏声，可食用的草菜通名。

## 芊

从艸千声，本义指草木茂盛，又指青翠色。

## 茗

从艸名声，本义指茶芽，又指晚采的茶，又可作为茶的通称。

## 藏

从艸臧声，本义指收存、储藏。初以“臧”表“藏”，后加“艸”旁成为专字表此义，而从“艸”的原因有两种说法：

1.  本为草名，即藏莨。
2.  表示用草覆盖以隐藏。

由本义引申指存储东西的地方，也引申指隐匿，又引申指怀、蓄。又指内脏，因古人认为五脏为藏纳气血的地方，故称“藏”，后造从肉的专字“臟”表此义，现代简化字作“脏”。

## 蘸

从艸、未详，以物没水。

***

# 蓐部

## 蓐

从艸辱声，本义指陈草复生，引申指厚、繁密。又指草席、草垫，此义后分化俗写作“褥”。

## 薅

从蓐好省声，本义指拔去杂草，泛指拔、揪。

***

# 茻部

## 茻

会意字，从四屮，会草多之意。本义指草丛。

## 莫

会意字，从日从茻，会日落草丛中之意，为“暮”的本字。汉代时下面两个屮隶变为大，楷书沿用。

本义指日暮，引申指晚、将尽。后被借用作表否定的副词，于是又加“日”造“暮”字表本义。

## 莽

从犬从茻、茻亦声。通“茻”，指丛生的草，引申出茂盛、广大、粗疏等义。

## 葬

会意字，从茻从死，会弃死者于草莽之意。本义指掩埋尸体。

***

# 小部

## 小

象形字，像尘沙小物状，是沙的初文。引申指微小，又引申出低微、轻视等义，也指年幼、身体小。

## 少

少、小本一字，甲骨文字形有的是三点有的是四点。至春秋时分化，末笔与小相区分，用于年幼、不足等义。

***

# 八部

## 八

指事字，像分别向背之形，本义为分，早在甲骨文时即借为数目字，于是加“刀”作“分”字表示本义。

## 分

会意兼形声字，从八从刀，古无轻唇音，八、分发音相近。分是八的后起分化字，本义是分开，引申指分配、分担、分解等义。

## 尔

尔是爾取上半部分而来的简化字，最早出现于战国金文，义同“爾”。

## 曾

象形字，像古代蒸食物的炊具，甲骨文下面是类似“田”的箅子，上面的“八”形像散发的蒸汽，是“甑”的初文。西周金文开始加“口”，或口中再加一短横，表示放置甑的物件。小篆中间的“田”略形变，后沿袭。

因甑蒸食物需要用箅间隔叠放，由此引申出层次、重叠义，又引申出增加义，由层叠引申出隔两代的亲属关系义。“曾”字多借用为虚词，于是又造“甑”字表本义。

## 尚

从八向声，初义不明，未见于殷商甲骨，金文多假“尚”为“常”，读cháng。又用于增加、崇尚、仍等义，读shàng。

## 詹

从言从八从厃，本义指话多，引申指足够，又用于姓氏。

## 介

象形字，构形不明。

1.  或说像人穿铠甲之形，本义指铠甲。
2.  或说人两侧的点是指事符号，表示界线。

两种说法均有依据。“介”与“甲”古代同义，如甲壳类水生动物称为介虫。由铠甲引申出坚硬、不屈义，如“耿介”。人夹于两点之间，又有居中之义，如“介于”、“介入”、“媒介”等义，由居中媒介义又引申出“介绍”义。而界线、间隔义后多作“界”。

## 公

构形不明，但《说文》认为从八从厶，应是将厶与尖口混淆而讹误。从甲骨文起，下部均是口形，或方口，或尖口，或加饰笔，与表私义的厶无关。

甲骨文中用于对祖先的尊称，西周金文主要用于爵位，春秋时成为诸侯的通称，后又有公共义。

## 必

必是柲的本字，甲骨文像戈、矛的柄，金文增加声符八，后逐渐变形为独体字必。《说文》认为从八从弋、弋亦声，应属讹误。后引申作副词表必定。

## 余

象形字，甲骨文像以木柱支撑屋顶的房舍，与“舍”同义，古音近，应是“舍”的初文，春秋金文在下面加两点，后沿袭。甲骨文、金文中即借为第一人称代词。

***

# 釆部

## 釆

象形字，像兽爪之形，本义是辨别。其辨别义的来源，一说是假借，一说是根据爪印分辨鸟兽。

## 番

从釆，下面的田一说是兽掌，一说是义符表示踩在田地中的蹄印。本义是兽足，引申为脚掌，后作蹯，此义读fán。后借此字表示轮番（一说是兽足交替前行引申出轮番义），又用以指称西方少数民族及外国，此义读fān。用于姓氏地名读pān。又借为“播”，传扬义，此义读bō。

## 審（审）

会意字，构形不明，早期金文由宀+米+口组成，后在口内或加饰点，小篆又进一步将下部讹变为田，中间的米讹变为釆。《说文》认为審从番，宷从宀从釆，皆误。

本义是详究、考察，引申指核对、知悉、周密、清楚等。

## 悉

会意字，从心从釆，心里对事情辨别清楚，本义为详尽。引申指熟悉。

## 釋（释）

从釆睪声，本义为解说，引申出消溶、解除、释放、放弃等义。

***

# 半部

## 半

会意字，从牛从八，会分割牛体之意。本义为二分之一，引申指中间、不完全等义。

## 胖

从半从肉、半亦声。本义指祭祀用的半体牲，又指大块肉（一说是因祭祀用牲相对较大，衍生出此义），此义读pàn。包含有大义，引申出安舒、宽适义，此义读pán。而肥胖义也由本义引申出，大概产生于宋元时，此义读pàng。

## 叛

《说文》：“半也，从半反声”当有误。依《说文通训定声》：“反也，从反半声”，应是正说。本义是反叛、叛离。

***

# 牛部

## 牛

象形字，像牛头形，本义就是牛。

## 牡

本是会意字，甲骨文左边是牛，右边是表示雄性的符号“丄”（古文字中牛、羊、马、鹿都可加丄符表示对应的雄性动物），金文右边形变成声符土，成为从牛土声的形声字。

本义是公牛，引申成为雄性动物通称，代替了其他雄性动物的专用字。

## 特

从牛寺声，寺有官署的含义，官署养的牛一般比较壮大，本义即指体形庞大的公牛，引申为雄性兽类通称。又由大义引申出独特、特殊义，又进一步引申出杰出、单独等义。

## 牝

从牛匕声，甲骨文用“匕”作为雌性动物符号，牛、羊、豕、虎均可加匕符表示对应的雌性动物。牝本义指母牛，引申成为雌性动物通称，代替了其他雌性动物的专用字。

## 犢（犊）

从牛瀆省声，本义是小牛。篆书犢的右侧本是𧶠，贝上方的声符是睦的古文，𧶠与買賣的賣不是同一个字，隶变后二者写法变为一致。

## 牟

指事字，下面是牛，上面像出气的样子，后上半部形变成厶。本义指牛叫声。后被假借为牟取之义，本义则另造从口的哞字表示。

## 牲

从牛生声，本义指祭祀用的全牛，引申泛指祭祀和食用的家畜。

## 牽（牵）

最早见于小篆，《说文》认为是由牛、冂、玄三个部分组成，其中冂像牵牛的绳，玄表音。后又有人认为表声的部分不是玄，而是叀（zhuān），叀是古专字，可指收丝用的纺专，形制与穿牛鼻用的桊类似，故叀在牽字中兼表音义。

本义是拉、挽，引申出牵连、牵制义。又指用于拉船的绳索，读qiàn，后作縴，简化字作纤。

## 牢

会意字，甲骨文外部像栏圈之形，内部有多种写法，可以是牛或羊或其他牲畜，本义都是养牲畜的栏圈，后定形为牛的写法。到秦隶时，中间多一横画，可能是表示栅栏门，使得许慎《说文》误认为牢从冬省，非是。至隶书时，又去掉栅栏门，上面的栏圈改成宀，即后来牢的写法。

由牲畜的栏圈引申指圈中的牛羊马，古代祭祀对圈养（特殊饲养）的牲畜和非圈养的牲畜区分严格，祭祀用“牢”比用“牛”更隆重。殷商时圈养的牛中大者称为大牢，小者称为小牢。而秦汉以来，太牢（大牢）专指牛羊猪各一，少牢（小牢）专指羊猪各一。

又从关养牲畜的栏圈引申出牢狱义，栏圈为防止牲畜逃跑要修得坚固，故又引申出牢固义。

## 牴

从牛氐声，本义指用角互相碰撞，与抵、觝同。觝是更换义符牛为角，属于同字异体。而抵本指推挤，引申为抵触，与牴为同义字，汉字简化后并入抵字。

## 犀

从牛尾声，本义指犀牛，由犀牛角的特征引申出犀利义，犀利本指刀兵锐利，后引申指文辞、目光等锐利。古时传说犀牛角有白纹如线贯通首尾，感应灵敏，后用灵犀代指两人心意相通。

## 物

从牛勿声，本义指杂色的牛，由杂色引申出众多的意思，引申指万事万物，又引申指具体的物品。

## 犧（牺）

从牛羲声，羲是从兮義声，汉印也有从牛義声的写法。本义指祭祀用的纯色牲。引申泛指用于祭祀的牲畜。今“牺牲”一词已不再指祭祀，而指献身。简化字的牺是新造字。

***

# 犛部

## 犛（牦）

从牛𠩺声，本义是牦牛。后根据牦牛长毛的特征另造“牦”字，毛兼表音义，以代替结构复杂的犛字。

## 氂（牦）

从犛省从毛、毛亦声。本义指牦牛尾，引申也指牦牛。

***

# 告部

## 告

会意字，上面是牛，下面一说是盛放牛头的器皿，一说是口，表诉说。本义是告祭，引申出报告、禀告义，又引申出告状、告诉、告诫义。

***

# 口部

## 口

象形字，像人口之形，本义即是口。

## 喙

从口彖声，本义指兽虫之口，引申也指人的口。

## 吻

从口勿声，本义指嘴唇，现代汉语引申出动词用法，指用嘴唇接触。

## 喉

从口侯声，本义指喉咙。

## 噲（哙）

从口會声，本义为吞咽，文献中或通“快”，快意义。

## 吞

从口天声，人吞食物时常常口朝天，吞本义即为咽下。引申指吞并、消灭。

## 咽

从口因声，本义指口鼻后方、喉上方的部位，咽是气息流通扼要之处，故引申指险要之地，此义读yān。后引申为动词指吞咽，破读成yàn。由吞咽引申出声塞义，指声音呜咽，多形容悲哀之声，此义读yè。

## 呱

从口瓜声，本义指小孩哭声，此义读gū。今用作象声词，读guā。

## 喑

从口音声，本义指小儿哭泣不止，引申为因悲痛哽咽哭不出声来，进一步引申为喑哑义。

## 咳

从口亥声，本义指婴儿笑，此义有异体字从子作“孩”，读hái。又指咳嗽，读ké，此义本字为“欬”。

## 咀

从口且声，本义指细细品尝，引申为咬嚼。读zuǐ时指猫头鹰头上的毛角。

## 吮

从口允声，本义指含吸。

## 噬

从口筮声，本义为咬、吃，引申为侵吞。

## 含

从口今声，本义指把东西放在嘴里不咽，引申出包含、容纳义，又引申出包容、忍受义。

## 哺

从口甫声，本义指咀嚼，引申泛指吃，又引申指喂食，又引申指哺育。

## 味

从口未声，本义指滋味，即舌头的感觉。引申指品尝，又引申出体会、体味义，又引申指意味、旨趣。由本义又引申指菜肴。由舌头的感觉又引申指鼻子的嗅觉，如香味等。

## 噫

从口意声，本义指打嗝，后更换声符作“嗳”，引申又指呼、吹，此义读ài。又作叹词，读yī。

## 唾

从口垂声，本义指唾液，引申作动词指吐唾沫，多用来表示鄙弃，引申出唾弃义。

## 喘

从口耑声，本义为急促呼吸，引申指呼吸。或体作“歂”。

## 呼

乎是呼的本字，指吐气，与吸相对，引申指呼唤。乎借作语气词后，另加口旁造呼字表呼气义，又加言旁造𧦝字表呼唤义，后𧦝又并入呼字。

## 吸

从口及声，本义指吸气，引申指吸水等液体，又引申有吸取、吸收、吸引等义。

## 嘘

从口虚声，本义指慢慢呼气（出气急曰吹，缓曰嘘），引申指叹气、唏嘘。吹嘘一词本义指呼气，引申为吹捧、夸口义。字或作“歔”。

## 吹

会意字，从口从欠，像吹气之形。本义指急促吐气。引申指吹奏。夸口义产生较晚。

## 喟

从口胃声，本义指长叹声。

## 噤

从口禁声，本义为闭口不作声，引申指关闭。

## 名

构形有三种说法：

1.  从口从夕，会意字，夜晚人们彼此看不见所以呼自己名字，本义即是名字。
2.  口是窗户，旁边的月牙形不是夕，而是月，义为月亮照进窗口，认为“名”即“明”字的早期形体。
3.  上半部既不是夕也不是月，而是某一物体的形象，以口对物称名，本义是命名。

由名称义引申出名号、名分、名声等义。

## 吾

从口五声，西周金文中多用来表“御”，即抵御义，或用于人名，至春秋以后，作第一人称代词的用法才多起来。

## 哲

从口折声，通“悊”，西周及战国文字均从心不从口。本义是明智、智慧，引申指贤明的人。

## 君

从口从尹、尹亦声，尹像手执权杖形（一说是笔），口表发号施令，本义指为王主持办理事务的臣。

早期君、尹二字经常同用，至西周金文已经基本分化。周代金文中，周王之外的诸侯国首领、朝廷官员可称君，金文中君也可指周王的后妃、职官名、丈夫等，至战国时出现君臣对称，此时君又称为主。后世由此演变成帝王之称，即最高统治者。

## 命

从口从令、令亦声。令、命本一字，甲骨文只有令字，西周分化出命，但与令字互通。“令”字上面是朝下的口，下面是跪着的人，即是命令之义。“命”是在“令”的基础上叠加义符口而成，本义即是命令，引申出差遣、指示义。后产生天命的含义，即上天的命令，由此又引申出命运义，又引申出生命、寿命义。

## 咨

从口次声，本义指商议、询问。

## 召

从口刀声，本义是召唤，引申指号召、招致等。

## 問（问）

从口門声，本义是询问，引申出过问、审问、责问、访问等义。

## 唯

从口隹声，本义是应答声，象声词，用于对尊长表恭敬。后多用于虚词。

## 唱

从口昌声，昌是唱的本字，昌甲骨文从日从口，指日出时呼唤他人起身干事的叫声，后来口变为曰，写作昌。昌又引申出明亮、美好义，于是另叠加口符造“唱”字表本义。唱又由本义引申出领唱义，进而引申出歌唱和倡导两个意思，其中表倡导义时多作“倡”，后二字分化，唱专表歌唱、呼喊、领奏等。

## 和

从口禾声，结构或左口右禾，或左禾右口，秦汉以后基本固定为左禾右口。本义指声音和谐地跟着唱或伴奏，引申出附和、响应、允许义，此义读hè。又有和谐、调和、汇合、平和等义，读hé。表掺混义时读huò。表示粉状物加水搅拌揉弄时读huó。麻将赢牌术语读hú。

和常与龢通用，二字本义本不同，和指声音相应和，龢指音乐和谐，后二字逐渐交叉混用。

## 啞（哑）

从口亞声，本义指笑声，旧读è，今读yǎ。又指失去语言功能，引申指发不出声或声音干涩。

## 噱

从口豦声，本义指大笑，读jué。“噱头”一词指引人发笑的话或举动，此义读xué。

## 唏

从口希声，本义指笑声。又指哀叹。或体作“欷”。常用于联绵词歔欷/嘘唏/欷歔/唏嘘。

## 听

从口斤声，本义指笑貌，读yǐn。自元代始，民间因“聽”字笔画复杂，且“听”的本义已极不常用，于是常用“听”作为“聽”的俗体字，此本无关系的两个字，于是成为异代同形字。

## 咄

从口出声，本义指引人惊诧或注意的叹词，引申指呵斥，也表嗟叹。

## 唉

从口矣声，本义是应答之声，引申表叹息。

## 哉

从口𢦏声，本义是语气助词，西周之前借本义是伤害的“𢦏”字作助词此义，后又另加口造哉字单表此义。

## 呷

从口甲声，本义指小口饮，又指众声纷杂。

## 嗔

从口真声，本义指气势盛大，读tián，此义罕用，后多借为“謓”字，表怒义。引申为责怪。

## 嘯（啸）

从口肅声，本义指撮口出声、吹口哨，引申指呼啸，泛指高而悠长的叫声。或体作“歗”；

## 台

从口㠯声，本义是喜悦，读yí，后作“怡”。tái的读音最早用于星名“三台”，又用三台喻指三公，引申出台斗、台司、台臣等义，用来指称宰辅重臣。另用于地名时读tāi。现代台成为臺的简化字。

## 启

甲骨文中启、\\[户+又]、啓、晵四字通用，本字是从户从又，像以手开窗户之形，本义即是开启。至战国时，所从的“又”讹为“攴”，而原甲骨文、金文中从户从攴的字并非开启的启，而是“肇”字。《说文》将“啟”归入攴部、训为教，将“晵”归入日部、训为雨晴，皆是误说。“教”、“雨后放晴”均是从“开启”本义引申出的含义。此几字均是同一字的分化字，且源头都从又，不从攴。自战国时讹为从攴后，即成为后世主流写法，定形为啟。

\\[户+又]本义是开启。引申指雨后天放晴，或加日作专表此义。又引申指启禀、禀告，或加口专表此义。而从户从口的“启”是从甲骨文时就存在的简化字，省略了\\[户+又+口]字中的“又”，新中国简化字采用此写法。

## 咸

从口从戌，戌像斧钺之形，口指代不明，本义或是杀伐。后用作表全部、普遍义。现代作为“鹹”的简化字。

## 呈

本为象形字，但构形不明，战国时下方“土”形部件变为“壬”，成为从口壬声的形声字。指呈现，引申指呈递、上呈。

## 右

甲骨文作“又”，像右手之形，与像左手之形的“𠂇”对称。西周金文始加口，作区分符号。至战国时，区分部件作用越来越大，不再根据方向区分此二字，加口的表示右，加工的表示左。

本义是右手，引申为方位的右，或用为福祐的祐，或用为佑助的佑，祐、佑皆是加义符而成的分化字。

## 啻

从口帝声，本义不明，文献中常用于疑问或否定字后，如“不啻”、“匪啻”、“何啻”等，含有但、只、仅义。“啻”和“啇”本是同一个字的不同隶定形体，后世分化为二字。

## 吉

甲骨文构形有以下几种说法：

1.  上半部是兵器形，下半部是安置兵器的器具，有保护、不动兵的含义，故本义是吉善，然后引申出坚实的意思。
2.  上半部是兵器形，下半部是表示坚固特性的符号，本义即是坚实，“吉”是“硈”的本字，而吉善义是引申或假借而来。“吉金”一词应是用的“坚实”本义，而非“善”义。
3.  上半部是礼器圭，下半部是放置圭的器具，义为祛邪求福。

金文上半部替换为了表示斧钺的“士”，后皆沿袭。

## 周

初始构形不明，一说像方格纵横、刻画文采之形，为“彫”的初文，一说像农田，小点像禾稼之形。根据文献用法，本义或是周密义，甲骨文中用作方国名。

至西周时下面增加“口”，可能是用来专表姬周的区别性符号，后又省略上部方格内的小点，至春秋战国时上半部讹变为“用”。故《说文》说周“从用、口”，应有误。

由周密的本义引申为严密、亲密、全面、巩固、救济等。

另有从勹舟声的“𠣘”字，本义为匝遍，即周匝、周遍的本字。西周时假借“舟”表此义，战国时始造“𠣘”字。后又假“周”为“𠣘”，“𠣘”字渐废，其全部含义均并入“周”。由匝遍义引申为遍及、环绕、循环、完成、终、周围，又作量词相当于匝、回。魏晋南北朝时又出现累加辵旁的“週”，承担由匝遍义引申出的一系列含义。现代简化字一并作“周”。

## 唐

甲骨文上半部是“庚”，下半部是“口”，构形含义有以下几种说法：

1.  形声兼会意字，“庚”有变更义，结合“口”，指说空话。
2.  形声兼会意字，“庚”指一种似铃的乐器，结合“口”，指说话声响大，也指说大而无边际的话。
3.  形声兼会意字，“庚”指加工粮食的风柜，出风口大，结合“口”，指说言过其实的大话。
4.  形声字，“庚”仅为声旁，不表义。

不论哪种说法，都认为唐字本义是说大话。一直至小篆字形变化皆不大，隶变后庚字变形明显，口未变，楷书沿袭。《说文》载唐字古文作“啺”，见于战国古玺文字。甲骨文中唐字用于殷先王大乙之专名，作“唐”、“成”、“成唐”，即后世文献中的“成汤”，或与《说文》中载的唐字古文写法“啺”有关。

由大话义引申出广大、虚空义，又引申出池塘义，此义后作“塘”。

## 噎

从口壹声，本义指食物堵塞喉咙，引申指内心郁闷，引申又指一般的堵塞。

## 吐

从口土声，本义指使东西从嘴里出来，引申指唾弃、抛弃，也引申指发音、说出，进一步引申指花开放。以上义读tǔ。读tù时义同呕。

## 吃

从口气声，气兼表义，表示呼吸不畅阻碍说话，吃字本义即是口吃。也作“㰟”。引申指行动迟缓艰难。越从晚唐五代起，出于简化目的，民间开始用此字替代了喫饭的“喫”，二字同音。

## 嗜

从口耆声，本义指口欲，后泛指口语以外的爱好，引申又指贪求。

## 啖

从口炎声，本义是吃，引申为给吃，又引申为利诱，又通“淡”。

## 哽

从口更声，本义指语塞，又专指因哀痛而语塞。由语塞引申指噎住，又引申指阻塞。

## 啁

从口周声。读zhōu时形容鸟叫，如啁啾。读zhāo时指自大或声音杂乱。读tiào时指调笑。通調、謿、嘲。

## 哇

从口圭声，本义指取悦人的靡靡之音，又用来表呕吐、哭喊，现代用语象声词和语气助词。

## 嗑

从口盍声，本义指话多，引申指说话、闲聊，读kē。又指用门牙咬硬物，读kè。又表闭嘴，由“盍”的闭合本义而来，读hé。又指笑声，读xiá。

## 叱

从口七声，本义指大声呵斥，引申指呼喊、大喝，又引申指声势威力极大，如叱咤风云。

## 噴（喷）

从口賁声，本义指发怒，引申指嘘气、喷气，又引申指喷射、喷发，以上义读pēn。又指开花结果的次数，读pèn，口语多加儿化音。

## 吒

从口乇声，同“咤”，指愤怒，读zhà。用于人名时读zhā，如哪吒。

## 啐

从口卒声，早期文献多用于尝、饮义。又指用力吐出。

## 唇

从口辰声，本义指震惊、惊声，读zhēn。表嘴唇义的本是“脣”，后假借“唇”作“脣”，二者成为异体字，但本义其实不同，后“脣”字渐废。

## 吁

形声兼会意字，从口从于（或从亏，于、亏本是异体字），于兼表声。本义是惊叹的声音，引申指叹息。又作为“籲”的简化字。

## 嘖（啧）

从口責声，本义是大呼，又指争辩，又指赞叹声。

## 嗷

从口敖声，本义指哀鸣声、哀号声，字或作“嗸”。引申指呼叫声、愁怨声、喧闹声等。

## 呻

从口申声，本义是吟诵，常呻吟连用。又指病痛时的哼声。

## 吟

从口今声，本义是吟诵。后借指病痛声、叹息义。或通“噤”。

## 叫

从口丩声，或说丩兼表义，“丩”是“纠”的本字，表示勒索，故“叫”有口头强令、威胁的含义，引申指呼喊、招呼，由此引申指叫作、当作。又引申指使、令。由呼喊又引申指动物叫。

## 嘆（叹）

从口，歎省声。本义是叹息。嘆、歎为一字之异体，或云“歎近于喜，嘆近于哀”，此是一时用字习惯所致，造字之初本无区别，包含喜怒哀乐各种情绪的叹息。由叹息义引申出赞叹、叹服义。现代简体字“叹”是用简单符号代替复杂构件。

## 喝

从口曷声，《说文》训为“㵣”，即口渴义，引申出饮的意思，后被“渴”字取代，而“渴”字本义是尽，后被“竭”取代。或认为本义是声音嘶哑，《说文》所说“㵣也”应是脱落了一个“音”字，本应是“㵣音也”，即口渴时的声音，即嘶哑、干哑，此义读yè。又借表大声呵呼义，进而引申为恐吓，或认为此义本字为“𠿒”。

## 哨

从口肖声，肖有小义，哨字本义指口小不能容的（器物），一说口歪不正的。引申指细小义，而能吹响的器物一般都口小，故又用来称这类能吹响的器物，如哨子、口哨，又引申出侦查、巡逻义，再引申出岗哨、哨卡义。

## 吝

从口文声，本义指遗憾、恨惜，引申指吝惜、舍不得，进一步引申指吝啬、贪吝。

## 各

会意字，上部是夊（即倒“止”，脚趾向下的脚，有行走的意思），下部口表示居穴，合起来表示走向居所，会来至之意。“客”字所会之意即与各的本义相关，“客”指从外面来到室内的人，其所从的“各”即是“来至”之本义。后假借作代词，表示群体中每一个，

## 否

从口、从不、不亦声。是“不”的分化字，金文中“否”可通“不”。用作否定副词；或用于应答，相当于“不”；或用在疑问句末。以上义读fǒu。又表示恶，引申为困穷，又引申指阻塞，以上义读pǐ。

## 唁

从口言声，本义指对遭遇非常变故者的慰问。吊死为吊，吊生为唁，即祭奠死者称“吊”，慰问经历变故的未死亡的事主称“唁”，比如《诗经》：“载驰载驱，归唁卫侯”，即是指卫国被敌占领后去慰问卫侯。后则多指对死者家属的慰问。

## 哀

从口衣声，战国文字或从心从衣。本义是怜悯，引申指悲伤，又从怜悯义引申为爱义。

## 嗁（啼）

从口虒声，本义是啼笑，引申指动物鸣叫。俗作“啼”，从口帝声，此字形始见于东汉。

## 吠

会意字，从口从犬，本意即是狗叫，泛指一般动物鸣叫。

## 嗥

从口皋声，本义指动物吼叫。或通“號”，指大声哭叫。

## 咆

从口包声，本义指猛兽吼叫。

## 哮

从口孝声，本义指猪的惊叫声，引申指野兽吼叫。又引申指呼喊，又引申出哮喘义。

## 喔

从口屋声，本义是鸡叫声，读wō。又用作叹词，表示了解、领会或醒悟，读ō。

## 嚶（嘤）

从口嬰声，本义指鸟叫声，引申指哭泣声。

## 啄

从口豖声，本义指鸟用嘴取食，引申指叩门声。

## 唬

从口从虎，部分含义里虎亦声。本义指虎怒声，同“虓”，读xiāo。又用来指虚张声势威吓，读hǔ。或通“嚇”，恐吓义，读xià。

## 呦

从口幼声，本义指鹿鸣声，又用为句末语气词，又用为叹词表惊异。古文或从欠，属义近形旁换用。

## 局

从尸从句、句亦声。至小篆形体已讹变，致《说文》误认为从口在尺下，训为“促”，是许慎未见过秦简而作出的误判。本义应是弯曲，而局促狭小义是其引申义。假借用作棋盘、局面、局部、机关单位等义。

## 哦

从口我声，本义指吟咏，读é。又用作叹词，表领会、醒悟，读ò。

## 售

从口雔省声，本义指卖出手，引申为实现、实行。今含义已变为“卖”的动作，不强调卖出去的结果。

## 唳

从口戾声，本义指鹤鸣。

## 喫（吃）

从口契声，本义就是吃、食，引申出喫酒、喫墨、喫力等义。后民间俗写以表口吃的“吃”代“喫”。

## 喚（唤）

从口奐声，本义是呼叫，引申指召唤，也引申指叫作、称作义。

## 嘲

从口朝声，本义指讥笑，又表吟咏，读cháo。又指鸟鸣、勾引，读zhāo。

## 呀

从口牙声，本义指张口貌，引申指空旷貌，以上义读xiā。又作叹词、语气词，读yā。

***

# 凵部

## 凵

象形字，像坎穴之形，是“坎”的初文。多用于偏旁，表祭坑、居穴等义。

***

# 吅部

## 吅

会意字，从二口，会喧闹之意。字同“喧”，亦作“諠”，本义是惊呼。或用作争讼义。

## 嚴（严）

甲骨文从喦（niè，讘和蹑的初文）敢声，“喦”字下面是人形、上面是三个口，“厂”是人形讹变而成，金文中上部有省为二口的，至战国晚期，从三口的字形被废弃，定形为两个口。《说文》认为嚴从吅、𠪚声，误。

本义指荒诞，是“譀”的初文。借作敬重、庄严、严厉义。

## 咢

咢、噩同字，均由“丧”字分化而来。甲骨文“丧”字从数口、桑声，有两个含义：地名和丧亡。至金文分化为二字：表地名的沿用旧形，表示丧亡的增加“亡”符。后者演变为“喪”，前者进一步分化：一种保留四个口，形变为“噩”；一种保留两个口，原中间部分先讹为“干”形，又讹为“屰”形，变为“咢”。

金文中用作诸侯国名，此义后作“鄂”。或借表惊愕义，此义后作“愕”。或指剑锷（刃），此义后作“锷”。

## 單（单）

象形字，像古代狩猎用的工具形（或说是用于击打的武器，或说是用于张网的拍子），本义即是一种狩猎工具，獸、戰等字皆从之。

或因这种器具较简单，或只能捕捉单个猎物，引申出单独、单一义（一说此义是假借义）。由此引申出单薄义，又进一步引申指记事的纸片，如账单、名单等。以上义均读dān。

用于纪年的单阏、异族首领单于时，读chán。用作姓氏、地名读shàn。

***

# 哭部

## 哭

构形有三种说法：

1.  甲骨文有一字中间是披散头发的人，两侧是两个口，有人认为这是最早的“哭”字，像一个激动大哭的人，表示因感情激动而流泪哭喊的意思。小篆将人形讹变为犬。
2.  《说文》认为从吅、狱省声，后有人从狱出发，或认为表示哭声像诉讼声，或认为哭声像囚犯哀声，以上解释都过于勉强。
3.  哭是从吅从犬的会意字，本义是狗嗥声，后移指人哭。类似“狂”、“狠”、“猛”等，都是借狗的特性转指人。

由哭泣义引申指吊唁、哭诉等。

## 喪（丧）

甲骨文中有很多异体，中间是表桑树的“桑”，周围有一至五个“口”，形状不一。这些“口”一说是采桑的器具，一说是为与“桑”字做区分而加的区别符号，一说是表意构件表示众口哭于桑树下。至金文，下加“亡”，一说是补增的声符，一说是义符表亡失。金文还有一个从“走”的字形，指逃亡，此字形后淘汰。至小篆，上半部带口的桑树讹变为“哭”，以致《说文》认为丧字从哭从亡、亡亦声。

此字本义解释分歧较大:

1.  本义指采桑，假借为丧亡义。
2.  本义指死亡。
3.  本义指失去。

甲骨文卜辞中一般有两个用法：一为地名，一为逃亡、失去义。表地名的后分化为“咢”、“噩”。由亡失义引申出灾难、丧事、灭亡等义。

***

# 走部

## 走

象形字，甲骨文像人摆臂跑动之形，本义是跑。金文又在下面加止旁，表行走义。或再叠加彳旁，此形后废。小篆将上部变为“夭”，隶变后成为“土”形。

由“跑”的本义引申指驱驰，是本义的使动用法。又由跑义引申指逃跑、离去，又引申指背离、误差，又引申指走失、走漏等义。今“走”字义已发生转移，表示步行，相当于古时的“步”字。

## 趨（趋）

从走芻声，本义是小步快走。引申指疾走、跑，又引申为奔赴、追逐、投向、归附，以上义读qū。又引申为催促义，读cù。

## 赴

从走卜声，本义指趋走、前往。由此引申出两个意思：一个是急速义，引申指疾走报丧，后造“讣”字专表此义；一个是往义，引申指奔赴、投身、依附义。

## 趣

从走取声，本义指疾速、疾走。引申出趋向、奔赴等义，而内心所趋向之事即是人的志趣所在，进一步引申出兴趣、意趣、趣味等义，读qù。又引申指催促，读cù。

## 超

从走召声，本义是跃上，引申指跳过，又进一步引申指超出、胜过。

## 赳

从走丩声，本义指强健勇武的样子。

## 趯

从走翟声，本义指跳跃，同“躍”，读yuè，旧读yào。又指跳跃的样子，引申指惊惧的样子，读tì。

## 越

从走戉声，本义是度过、越过。引申为经过、超过、轻捷等义。古代多借为国名，即越国，古文字中作国名的越不从走，作“戉”或“𫑛”，从走的“越”是后起字，汉代以之代𫑛。

## 趁

从走㐱声，本义指难行不进貌，义同“𧾍”。又指追逐，由追逐义引申指追求、跟随，由跟随义引申指乘趁、利用（机会等）。由跟随义引申适合、顺遂、满足，如“趁手”即比喻某物像能跟随手一样，此义用同“称”。

## 起

从走巳声，本义指由趟而坐或由坐而立，引申指竖起、升起，进一步引申指兴起、动身、开始，又引申指启发、开启、张开。

## 趙（赵）

从走肖声，本义是快步走，引申指轻捷。本义不常用，多用于国名、姓氏。

## 趄

从走且声，本义指行不进，读jū。又指倾斜、歪斜，如趔趄，读qiè。

## 赶

从走干声，本义指兽类翘着尾巴奔跑，引申指马奔跑的样子，读qián。后用作“趕”的简化异体字，表追逐、追赶，读gǎn。

***

# 止部

## 止

象形字，像人足之形，是“趾”的初文。本义是足，引申指脚趾。脚在人体最下面，又引申指地基、山脚，此义后作“阯”、“址”。又从脚引申出至、临义，又引申出停止、静止、使停住等义，进一步引申为逗留义。又指人的仪态、风度，如容止、举止。

## 歬（前）

会意字，从止从舟，像人足在舟上，会前行之意。但甲骨文中不从舟而从凡（盘的古文），后讹变为舟，但从凡的释义暂不明。不论是否从舟，从文献用法来看本义确实是前行。后又借从刂的“前”为“歬”，而“前”字本为齐断义，是“剪”的初文，由于“前”被借去表“歬”，又再叠加一个刀造“剪”字表齐断义。

由前行的本义引申指时间上的以前和方位上的前方。

## 歷（历）

从止厤声，金文或省去止作“厤”。本义是经过、经历，引申为行走、越过、屡次、逐一等义。后于战国时分化出从日的“曆”表历象、历法。此二字本同源，后分化，新中国简化字又再次合并，作“历”。

## 歸（归）

甲骨文从帚𠂤声，西周金文或加辵旁，乃示动符号。小篆省略“辵”上部的“彳”，只保留“止”，整体定形为“歸”。

本义是女子出嫁（此义的来源大致如下：古代已婚女子主要负责打扫家务，故妇女的“婦”字从女从帚，同从帚的“歸”字也与女子婚嫁有关）。或因出嫁后要回娘家省亲，引申出归来、返回义，又引申出归还。从本义又引申出投靠、归附义。以上义读guī。又通“馈”，表赠予，读kuì。

## 歰

甲骨文从二止或三止，此字形沿用至汉代，即“歮”。小篆从四止，上下相对，上面两个倒的“止”后隶变楷化为“刃”形，即整体变成“歰”。会多只脚相抵之意，本义即是滞涩、不润滑。引申指不通畅、口吃、粗涩、味涩等义。歰、澀、歮、澁同。后世多作“澀”。现代简化作“涩”。又通“濇”，音、义皆同。

***

# 癶部

## 癶

象形字，像两足分张相背之形，本义指行走不顺，读bō。

## 登

甲骨文像两只手捧一个食器之形，有的字形又在上面加两个止（脚）。整体字形会高高捧起食器进献之意。部分字形或省去下面的两个手。小篆依从省去手的字形，即从癶从豆。

本义是进献。因要进献新收的谷物，所以引申出成熟、收成义。举行进献仪式要一步步走上台阶，故有升高义，引申指攀登、登上，又引申指刊载、登记。金文中或用为国名、姓氏，后作“鄧（邓）”。

***

# 步部

## 步

甲骨文为一个止和一个反写的止前后排列，像左右二足前后相承之形，本义就是行走。又特指慢慢走。又引申指跟随、追随。又引申为长度单位，单足迈一步为“跬”，两脚各迈一步为“步”，即“跬”为半“步”。表徒步行走的“踄”是“步”叠加义旁足而来的分化字，强调用脚走。

## 嵗（岁）

甲骨文最早借斧钺之形的“戉”作此字，后又加“步”分化为“嵗”专表用于纪年的岁星（即木星）。木星运行一周天约十二年，将周天等分为十二分，称十二次，木星每经行一次称为一岁。之所以最初用“戉”表示岁星，是出于对岁星的敬畏，戉是专用于处刑的器具，象征帝王权威，岁星在古时被认为是处罚罪人的预示。而分化的“嵗”字在“戉”中加“步”的原因应与木星逐次运行类比逐步前进有关。

另一种说法认为嵗是会意字，会大斧砍断人两只脚之形，本义是砍断，是“刿”的本字。

由纪年的岁次义，引申为岁月、时光、年龄义。

***

# 此部

## 此

会意字，从止从人，会以足踏人之意，是“跐”的初文。又用于代词，表近指。

## 些

从二此声，构意不明。古文献或通“此”。又用于表少许、不定的多数。

***

# 正部

## 正

会意字，甲骨文从止从囗，囗像城邑之形，整个字会征伐城邑之意，是“征”的初文，本义即是征伐。所从的囗或写作一个实心点，又在西周金文中或简化为一横，后演变为今日字形。

殷商习俗于新岁首月举行巡狩之礼，故新岁首月又称“正月”，金文中即有“征月”的用法。由此引申为历法的代称，如夏正指夏历。以上义读zhēng。（网络流传“正月”一词本作“政月”，避秦始皇讳改为“正月”，此说无根据）

因征伐的目的是平定，故引申出平定、匡正义，又引申出正义、中正、不偏斜等义，进一步引申出准则、官长、正副之正等义，由平定义又引申出决定、勘定等义。

## 乏

《说文》载：“反正为乏”，但金文中反写的“正”字仍用作“正”字义，并不是乏。真正的“乏”字始见于战国时期，本义为废，引申指耽误、疲倦、缺少等义。正、乏二字形体上的区别在于上面一笔，“正”是横画和“乏”是斜笔。

***

# 是部

## 是

构意不明。最早见于西周早期，上部为日晷之类的事物，下部为止。后演变为三大类字形：一是中间横画左侧带叉形；二是上部的横画与下部的止合并为“正”；三是在第二种字形的基础上又将上部的竖画并入正，变成从日从正。第一类字形从战国后废弃，第二类字形沿用至汉代，第三类字形成为后世主流。

构字意一说是“匙”的本字，一说是箭靶，一说是虫类，《说文》则基于讹变后的字形认为从日正，训作“直”。

文献中有一系列围绕正、直引申的含义。金文多用作指示代词，相当于此、这。用于判断词则不晚于西汉。

## 韙（韪）

从是韋声，《说文》训为“是”，即正确之义，引申为美、善。

***

# 辵部

## 辵

甲骨文或从彳从止，或从行从止，“行”表道路，“彳”是“行”的一半，此处义同，“止”为人足，会行走之意。秦简中已见连写笔意，至汉代，多为连写，楷书多写作辶。

本义是疾走。

## 迹

从辵朿声，至秦简将“朿”讹写为“亦”，以致《说文》小篆误以为从亦声。后世字形沿用以“亦”为声符的写法。又或从足責声，即“蹟”，足、辵属义近形符，可互通，責本身即是从贝朿声，故責、朿古音同。

本义为脚印，引申为行迹、踪迹、痕迹，又引申指事迹等。

## 邁（迈）

从辵蠆（chài）省声，一说是萬声。本义是出行、远行。引申指跨、向前举步、超越、消逝等。

## 巡

从辵川声，声符川像水流之形。秦刻石见异体字“䡅”，車、辵为义近形符。

本义为巡视，引申指抚慰，又引申作量词表示遍。

## 徒

从辵土声，辵下半部的止在汉代以前位置不固定，或在彳下或在土下，汉代以后固定为在土下，没有和彳连写为辶，楷化后右半部形似走，但与“走”本字无关。

本义是步行，引申指步兵、跟从的人、弟子、服劳役的人，又泛指众人，也引申指拘禁并服劳役的刑罚，即徒刑。因本义是徒步行走，无其他依靠，故引申出空、白白的含义。

## 征

“正”为“征”的初文，本义即是征伐。甲骨文中已有从彳的“征”字，金文或增加止变为从辵，《说文》小篆即是从辵正声的写法，汉代以后从彳的写法成为主流。

由征伐的本义引申指远行、夺取、强制收取等义。

## 隨（随）

从辵隋声，辵本在阝的左边，汉代时常将阝置于左边，楷书从之。汉代又有异体省去“工”，变成“随”，今简化字即从此形。

本义为跟从，引申指顺从、听任、追求、随即等义。也是古国名。

## 逝

从辵折声，“折”字从斤从断木，会以斧断木之意，“逝”字本义为往、去，引申指经过，又引申指远去、死亡。

## 述

从辵术声，《说文》籀文以“秫”为声符，作“䢤”。“术”是“秫”的本字，二字相通，指有黏性的谷子。“述”字本义是顺着、遵循，引申为申述、记叙、阐述前人之说，也泛指著述的作品，又指一种古代文体。

## 遵

从辵尊声，本义为沿着、顺着，引申指遵照、依照。

## 適（适）

从辵啇声，“啇”是“啻”作为偏旁时的单独隶定形体，西周金文假“啻”为“適”，作“往、至”义。战国时增加形符辵，或从止，声符或省去下面的口，仅从帝声，或不从口而从曰，古文字口、曰常互通。小篆定为从辵啻声。汉代声符“啻”隶定为“啇”，又或讹变为形近的“商”，楷书又回归从辵啇声。现代简化字以音近的“舌”作为声符，作“适”，而“适”字本有此字，读kuò，表疾速。

本义是往、至，引申指归从、向、女子出嫁、符合、恰当、美好、快乐等义。又作副词，表恰好、刚刚等义。

## 過（过）

从辵咼声，金文或从止，辵、止形符互通，声符本是冎（骨的初文），战国时又加口变成从咼声。

本义是经过，引申指渡过、过去、拜访、超过等义，由超过义又引申出过错、责备等义。

## 進（进）

甲骨文从隹从止，隹为鸟、止为足，鸟走路不能后退只能前进，会前进之义。金文以后多从辵。

本义指前进，引申指行、进步、促进、进献、靠近、进入等义。

## 造

西周金文从宀从舟告声，春秋战国时期或省宀，作“艁”。西周金文另有从宀从彳告声、从宀从辵告声等形，战国时还有从金、从戈、从攴等形，皆为形符更换字，强调不同的重点。秦汉以后，固定为从辵告声。

本义为制造，引申指建立、开始、伪造。而从辵的字形与行动有关，有去、至义，如“造访”。

## 逾

从辵俞声，战国时或从止。本义为越过，引申指经历、超过、更加等。

## 遄

从辵耑声，本义为来往疾速。

## 速

从辵束声，甲骨文从彳，彳、辵形符互通，战国至秦汉或有从欶声的“遬”，束、欶古音同。汉以后固定为从辵束声。

本义为迅速，引申出招致义，进一步引申出招请、邀请义。

## 迅

从辵从卂、卂亦声，“卂”像鸟疾飞而不见羽，义为疾速，后追加形符辵，成为“迅”。

## 适

读kuò。从辵𠯑声，𠯑（guā）隶变作“舌”，与舌头的“舌”同形。适、括、刮皆类推。

适本义是疾速。与“適”的现代简化字同形。

## 逆

“屰”是“逆”的初文，像倒着的人形，表示反、与“顺”相对。甲骨文、金文或加止、或加彳、或加辵，止、彳、辵是义近形符可互通，示动，表迎接义（对面人朝自己走来，即是相迎）。

由反、不顺的本义引申指退后、不顺从、叛乱，由迎接义引申出逆旅、承受等义。

## 迎

从辵卬声，本义为迎接，引申指迎合、正对着等义。

## 遇

金文从辵寓声，后省去宀，变为从辵禺声，战国时或从彳，彳、辵形符互通。

本义为相逢、不期而会。引申指遭受、机会、对待等义。

## 遭

从辵曹声，本义指遇到，引申指遭受，多指不好的事。又有巡行、环绕义，引申作量词，表周、圈、次、回等。

## 逢

从辵夆声，甲骨文和金文或从彳，彳、辵形符互通。本义为遇上，引申指迎接、迎合、预测等义。

## 迪

从辵由声，本义为道、道理，引申为引导、开导、遵循、继承义。

## 遞（递）

从辵虒声，战国竹简已有从辵弟声的异体字，今简化字从之。

本义为更替，引申指依次、传递、押送等义。

## 通

从辵甬声，或从彳，或从止，止、彳、辵形符互通。声符或作“用”。小篆以后固定为从辵甬声。

本义为到达，引申指贯通、不绝、流通、顺畅、交流、传达等义。

## 徙

甲骨文从彳从步，“彳”为“行”的一半，指道路，“步”像左右脚一前一后，指行走，合起来表示双足行于道上，会迁移之意。战国时从彳变为从辵，并省略“步”中的一个“止”，整个字变为从辵从止。汉代以后多将辵下半部的止置于右侧止的下方，与辵上半部的彳分开，并不连写成辶，楷化后写作“徙”。

本义为迁移，引申指转移、变化、调职、谪戍等义。

## 遷（迁）

本字为“𢍱”，从舁囟声，或额外从邑，战国文字邑或又移至下方，邑进一步省作卩，成为“䙴”，又增加辵旁，隶定后作“遷”。现代简化字将声符替换为“千”。

本义为向上移，引申指迁移居所，又引申指移动、变更、调动、流放等。

## 運（运）

从辵軍声，现代简化字将声符替换为“云”。本义为移动、运行，引申指运转、挥动、搬运，由运转义又引申出命运、气数等义。

## 遁

从辵盾声，本义为迁移、离去，引申指逃跑、隐匿、回避、欺骗。

## 遜（逊）

从辵孫声，本义为逃遁，引申指退让、恭顺、谦逊、比不上。

## 返

从辵从反、反亦声。金文或从彳，或从止，止、彳、辵形符互通。古时以“反”兼表返回义，后加辵分化出“返”字，专表返回、回归义。

引申指归还、折回、更换等义。

## 還（还）

从辵睘声，“睘”是“環”的初文，用作声符同时有圆转之义。金文還或从彳，彳、辵形符互通。“还”的简化写法最早见于汉代，现代简化字从之。

本义为返回，引申指恢复、归还、回头、回报、还债、后退等义，读huán。今多作副词，表持续、转折、重复等义，读hái。

## 選（选）

从辵从巽、巽亦声，现代简化字改为从先声，作“选”。

本义是遣送、放逐，又用于选择义。

## 送

从辵灷声，“灷”字构形不明，上部是火，下部是两只手，后合并为“大”形，并与变形的火进一步合并为“关”形，但与“关”本字无关。

本义为遣，引申指陪送、送行、传送、馈赠等。由馈赠义又引申指断送、了结、排遣。

## 遣

构形表义不明，甲骨文和早期金文是左右两只手中间是𠂤，下面或加口形，金文中或增加“辵”或“走”作义符，小篆继承从辵的字形，而𠂤与下面的口连写，隶变后又省去，变为今天的“遣”形。

本义为释放，引申指遣送、派遣、打发、放逐、抒发等义。

## 逮

从辵隶（dài）声，“隶”是“逮”的初文，手执牛尾形，会赶上之意。后增加义符辵，分化为“逮”字。

本义为及、赶上，引申指抓捕。

## 遲（迟）

甲骨文从彳屖声，是“屖”的分化字。“屖”义同“栖”、“棲”，表休息停留，或说屖棲（栖）是古今字关系，但“栖”的本字应是“西”，与“屖”音义同源，但形不同源。后加彳旁强调行走属性，表示缓慢行走。入周以后改从辵旁，彳、辵形符互通。此形即《说文》籀文字形。隶变后，“屖”下部的“辛”讹作“羊”，整字作“遅”。而小篆则将声旁换做“犀”，即从辵犀声，作“遲”，成为后世正体。又有或体将声旁换作“尼”，甲骨文从彳尼声，战国文字作从辵尼声，小篆将“尼”下部的“匕”省作“二”，整字作“𨒈”，隶变后作“迡”。遟、遅、遲、𨒈、迡互为异体，后世以“遲”为正体。现代简化字将声符替换为“尺”，作“迟”。

本义为缓慢行走，引申指晚、迟钝、犹豫不决等义。

## 逗

从辵豆声，战国时或从走，走、辵形符互通。本义为止、停留，引申指句中停顿，此义也写作“读”、“投”。引申指到、趁、招惹等义。

## 逶

从辵委声，本义指弯曲连绵的样子，引申指曲折行进。

## 迆

从辵也声，本义为曲折延伸，同“迤”。

## 避

从辵辟声，本义为回避、躲避，引申指离开、避免、违背等。

## 違（违）

从辵韋声，“韋”字本有违背义，多认为是假借义，后为区分，加辵旁分化出“違”字转标此义。

本义为背离，引申指相距、逃亡、过失等义。

## 遴

从辵粦声，本义指行路艰难，泛指艰难，引申为审慎，又引申指谨慎挑选。

## 逡

从辵夋声，本义为往复、往来，引申指徘徊、退却。

## 達（达）

从辵羍声，“羍”本义为小羊羔，上半部本不是“大”，构件表义不明，至小篆上半部变为“大”，隶变后作“土”。下部的羊或省去一横，变成“幸”，但与“幸”本字无关。甲骨文又或从辵大声，即“达”，与《说文》或体同，今简化字即采用此写法。

本义为通达无阻，引申指到达、通晓、明白、豁达、显贵、表达等义。

## 迭

从辵失声，本义指交替。引申为连续多次。又引申指赶得及，如“不迭”。也作量词。

## 迷

从辵米声，本义为迷惑，引申为迷路、失误、遮住、昏迷、入迷、使人入迷等义。

## 連（连）

会意字，从辵从車，本义指人力拉的车，同“辇”。引申为联合（引申逻辑可能是从人拉车而产生牵连义），又引申为连接、连续、连累、连同等义。或作副词与“也”、“都”相应，表强调。

## 遺（遗）

从辵貴声，本义为丢失，引申指遗漏、遗弃、遗留等义，读yí。也表赠送、给予，读wèi。

## 遂

从辵㒸声，金文或以㒸为遂，后增辵符。

本义为逃亡，引申指往、行进，又引申指通达、成就、完成、顺从、如意等。又作副词，相当于就、于是。

## 逃

从辵兆声，金文或从彳，彳、辵形符互通。本义是逃亡，引申为躲避、离开。

## 追

从辵𠂤声，甲骨文或从止，金文或从彳，止、彳、辵形符互通。本义为追赶，引申为追随、追求、回溯、补救、催逼，又引申指送别、追念、削夺、召回等义。

## 逐

会意字，从辵从豕，会猪跑而追赶之意。甲骨文或从止，止、辵形符互通。甲骨文又有不从豕而从犬、兔、鹿者，构形义同，后从豕的写法成为主流。

本义为追赶野兽，至金文中已可用于追赶人。引申指驱逐、竞争、追求、跟随、依次等义，

## 逎（遒）

从辵酉声的“逎”和从辵酋声的“遒”互为异体字。“酉”像酒器之形，本义即是酒器，引申指酒。而“酋”本指久酿之酒，在“酉”上加两点会酒香四溢之意，是“酉”的分化字。

本义是迫近，引申为终尽。由迫近本义又引申指强劲有力，又引申指坚固、聚敛、美好等义。

## 近

从辵斤声，《说文》古文从止，止、辵形符互通。本义为不远、附近。引申指接近、近似、亲近，或时间上临近。又引申指浅显、平庸等。

## 邋

从辵巤声，构形义不明。出土文献中用法或通“躐”，指践踏；或通“獵”，指狩猎。《说文》训为“搚”，摧折义。

本义读liè。用于“邋遢”一词时读lā。

## 迫

从辵白声，本义为靠近，引申为压迫、狭窄、强迫、催促、紧急等义。

## 邇（迩）

从辵爾声，或从尔声，“尔”是始于战国时期的“爾”的简化字，“邇”和“迩”在战国时期也均有使用。

本义为近，引申为接近、浅近。

## 遏

从辵曷声，本义为阻止，引申指遮拦、断绝、相及等。

## 遮

从辵庶声，战国时或从彳，彳、辵形符互通。本义为阻挡、遏止，引申为遮挡、掩盖。

## 逞

从辵呈声，本义为通达，引申指快意、满足、施展、放纵、仗恃等义。

## 遼（辽）

从辵尞声，本义为远，引申为开阔、宽、时间久远等义。现代简化字将声符替换为“了”。

## 遠（远）

从辵袁声，或从彳，彳、辵形符互通。本义为遥远、距离长，引申为时间久远，又引申指深远、疏远、高远、差距大等。现代简化字将声符替换为“元”。

## 迥

从辵从冋、冋亦声。“冋”古文作“冂”，“冂”指远郊（邑外谓之郊，郊外谓之野，野外谓之林，林外谓之冂，象远界也）。

本义为远，引申指僻远的住所、单独等义，也引申指差异大，如迥异。

## 迂

从辵于声，或从止，或从走，止、辵、走形符互通。本义为迂回，引申指远、广大、迂腐、虚夸等义。

## 道

甲骨文字形为一个“人”在“行”中间，“行”是道路的象形，组合起来表示人在路上行走。金文将中间的“人”替换成表示人头的“首”，有的字形又在下面另加“止”，强调走的动作，已包含引导的含义，后省略右边的“亍”，变为从辵从首，成为后世主流写法。金文中还有一种字形下面不是“止”而是一只手，更强调牵引、导向的含义，这种字形后来演变为《说文》古文从首从寸的形，同时也可能是“導”字分化的源头之一。

本义是道路，后演变出引导、导向义，此义后由分化出的从寸的“導”字承担。由道路的本义引申出，引申指经过、方法、规律、技艺、道义等义。

## 遽

从辵豦声，金文或从彳，彳、辵形符互通。本义为驿车、驿马，引申指疾速，又引申指仓促、窘迫、恐惧义。又作虚词，相当于遂、就。

## 邊（边）

从辵臱声，声符“臱”构形不明，从自（鼻子）丙声，后在下面加“方”，小篆下半部形状乃“方”之讹。

本义为边际，引申为水畔、边沿、边远、尽头、旁边、靠近等义。

## 邂

从辵解声，多用于“邂逅”一词，指不期而会。

## 逅

从辵后声，多用于“邂逅”一词，指不期而会。

## 遑

从辵皇声，同时有“闲暇”和“慌忙”两个相反的意思，哪个是本义尚有争议，惊慌义有可能是从“惶”通假而来。引申出“来得及”义，常用于否定前缀连用，如“未遑”、“不遑”，构成“来不及”义。“遑论”乃是“不遑多论”的缩语，类似缩略用法时间长了逐渐使“遑”本身带有了“怎能”的反问义。

## 逼

从辵畐声，本义为迫近，引申指逼迫、紧迫、驱逐、狭窄等义。

## 遐

从辵叚声，本义为远，引申为疏远、远去、时间久远等义。

## 迄

从辵气声，“乞”为“气”的分化字，汉以前“迄”均从气，汉代或以“乞”为声符，后世承之。

本义是至，引申为终结，又作副词表竟、终于。

## 迸

从辵并声，本义为逃散，引申指涌出、喷出、爆开、断裂、弹跳等义。

## 透

从辵秀声，本义为跳，引申为逃跑、逃出，又引申出穿过、显露、充分、彻底、清楚等义。

## 邏（逻）

从辵羅声，本义为巡查，引申指巡逻人员。引申指遮拦、山色环绕。

## 迢

从辵召声，本义为远，引申指高峻。

## 逍

从辵肖声，多用于“逍遥”一词，古时作“消摇”，本义指缓步行走的样子，引申指安闲自得的样子。

## 遙（遥）

从辵䍃声，本义指远，引申为长久、飘荡等义。又用于“逍遥”，见“逍”。

***

# 彳部

## 彳

象形字，为“行”的左半边，“行”像道路之形，“彳”多作偏旁，表示与道路或行走有关，作形符时通常与止、辵、走、行互通。

单用时义为小步走，另又用于“彳亍”一词，形容走走停停的样子。

## 德

甲骨文从彳直声，“彳”表道路、行走，“直”是目上一条直线（至金文时在直线中间又加一点，后变为横）表目光正、直，合起来表示行得直。金文又在下方加“心”，表示心中的想法正直。小篆将“目”横置，“目”下又增加一横，后世字形沿用。此加横写法应是由“直”字演变类推而来：“直”字约在金文时即在左下增加一曲画，为无义的增繁。“德”在金文中又写作“惪”，从直从心，乃是“德”的后起异体字，表义无别。

从构形来看，本义应是遵行正道，《说文》则训为“升”。品德义是古今常用义。引申指道德贤明的人，又引申指恩惠、德政、客观规律等。古时又通“得”，表得到。

## 徑（径）

从彳巠声，本义指小路，引申泛指道路，又引申指方法、疾速、直接、经过等义。

## 復（复）

初文作“复”，甲骨文上面部分表居住地，下面是“夊”，即倒“止”（脚），表示返回居住地。金文或在下方额外加“口”，少见。上半部后讹变为\\[亠+吕]形，隶变后写作“复”。约在西周时期，分化出增加形旁彳或辵的字形，强调行动，后定形为从彳，即“復”，专表返回义。现代简化字采用最古老的“复”。

本义为返回、往来，引申指恢复、报复、报答、答复、补偿、履行等义。又引申作虚词，表又、再。

## 往

甲骨文上半部是形符“止”（脚），下半部是声符“王”，整个字表示去往。金文将止底部一横和王顶部一横合并，并增加彳旁或辵旁，强调动作。后从彳变为主流字形。小篆将上部的止变成“㞢”形，隶书则将这一构件整体变成一个点。

本义为去、到，与来相对。引申为交际、过去、以后、送、亡去等义。

## 彼

从彳皮声，金文或不从彳，以皮为彼。用作指示代词，相当于“那”。又作第三人称代词，指他、对方、别人。

## 徼

从彳敫声，本义为巡察，引申指边境、边界，又引申指小路、终极之义。

## 循

从彳盾声，本义为顺着、沿着，引申为遵循、按次序、步行等义。

## 微

初文为“𢼸”，甲骨文左侧像人生有长发（一说是“長”字，“髪”的初文），右侧为攴（手持棍状物），合起来表示整理头发。金文增加彳符，小篆将上部的头发形规整化成为斜笔的“山”，至楷书则变成正写的“山”。

“𢼸”造字本义说法不一：

1.  《说文》认为本义是“妙”，或取长发美妙之义。
2.  高鸿缙《散盘集释》：“髪既细小矣，攴之则断，而更微也”，认为本义是细小。

从彳（强调行动）的“微”字本义是隐匿，引申有秘密地、侦查、精妙、昏暗、细小、少、衰落、无等义，也作副词相当于“稍微”，或表否定相当于“非”。

## 徐

从彳余声，本义为缓、慢，引申形容安闲的样子，又引申指散开、舒展。又作为古国名，此义金文不从彳而从⻏（邑）。

## 徬

从彳旁声，与从彳方声的彷乃一字之分化，互通。本义为人在辕旁驱使牲畜行进。“徬徨”或写作“彷徨”，义为徘徊犹豫。或通“傍”，表临近、接近。

## 待

从彳寺声，本义为等候，引申为防御、供给、对待、依靠、需要、容忍、打算、将要等义。又表停留、逗留义，今读dāi。

## 徧（遍）

从彳扁声，或从辵，彳、辵形符互通。徧、遍二字后世皆有使用，互为异体字。

本义为周遍、普遍，又作量词表示完整一次。

## 退

甲骨文从彳从夊（倒止）从日，战国时期多从辵，彳、辵形符互通。《说文》小篆承袭从彳的写法，一直演变为楷书，变形不大，但后世少用。《说文》古文承袭从辵的写法，此形成为后世主流，汉代时将“日”下的“夊”讹写为“匕”形，与“日”合成“艮”，实与“艮”字本义无关。甲骨文又有从止从内的写法，战国时变为从辵从内，后演变为《说文》或体的写法。

本义为后退，引申为离去、谦让、返回、退还、脱去、衰减、畏缩、改悔等义。或用同“褪”，如“退色”。

## 後（后）

会意字，甲骨文从幺从夊，或再增加“彳”符，“幺”为束丝，“夊”为倒止（足），足有所系，会迟后之意。从彳强调与行动相关，战国时或不从彳而从辵，彳、辵形符互通。

本义为行走迟后，引申指方位的后，又引申指时间较晚的、将来、后代等。现代简化字并入表君王的“后”字。

## 很

从彳艮声，本义指违逆、不听从，引申为凶狠，后作“狠”。后常用作程度副词，相当于非常，此义演化逻辑可能如下：由凶狠恶劣义产生如“热得狠”之类用法，后逐渐固定为程度副词。

## 得

“㝵”是“得”的初文。甲骨文和金文或从貝从又（手之象形），手持贝，表示获得义。后或增彳，战国时又或从辵，彳、辵形符互通。《说文》小篆和古文的声符均从“見”，乃“貝”之讹，隶变后又变成“旦”形。声符下方的“又”在金文中或作“寸”、“攴”，又、寸、攴形符互通，后世固定为从寸。整个字形成为“得”。

本义是获得，引申为贪得、相遇、投合、适当、控制、晓悟、完成、满足、能够等义，又作副词表反问，相当于岂、难道。又表必须、应该，此义今读děi，旧读dé。又作助词，读de。

## 律

从彳聿声，本义指古代用来校正乐音标准的管状仪器，引申指乐律、音律，又引申指法律、规律、依法治理、约束、衡量等义。

## 御

甲骨文有多种字形，核心部分是一个跪坐的人形左侧一个形似马策的物体，外侧或再增加“行”或“彳”。构形有争议：

1.  左侧是马策，右侧是人形，行/彳为道路，会人持策于道中之意，表示驾驭。
2.  左侧是“午”的初文，为声符，右侧是人跪迎的样子，行/彳为道路，会人迎迓于道中之意。

典籍中多用来表示驾驭车马，第一种说法更为可信。

金文承袭从彳的写法，或在下方加“止”，使整体从辵，古文字彳、辵形符互通，马策部分逐渐变成“午”形。但小篆规整化后并未将“止”置于“彳”下形成“辵”，而是置于“午”下，隶变后“止”与“午”合写，右侧人形变为卩。整个字于是定形为“御”。

本义暂依“驾驭车马”之说，由此引申指驾驭车马的人。又由驭马引申指驭人，指统治、管理，由此进一步引申为帝王专用事物的特称。文献中又可通“禦”，表抵禦义。而“馭”字为“御”之异体，在驾驭这一义项上可互通。

现代简化字将“御”、“禦”合并，统一作“御”，表驾驭时则固定用“驭”。

***

# 廴部

## 廴

会意字，彳最后一笔拉长，会长行之意，本义是长行，有引、延长之义。汉代廴又与辶（辵）多混用。

## 廷

始见于西周金文，从“L”形、𡈼（tĭng，注意不是壬）声，声符变异较多，或从㐱声，或作𡈼、㐱结合之形。“𡈼”字甲骨文像人挺立于土上，疑为“挺”的本字。至小篆，形符“L”演变为廴，也有人认为廴是声符㐱的部分笔画与“L”合并讹变而成。汉以后承小篆字形作“廷”，偶有从辵的写法，乃形近所致。

早期金文多用来表示君王上朝布政的地方，后世典籍引申作官署，也引申指庭院，此义后作“庭”。

## 建

甲骨文和早期金文像持物树立于“L”形处，春秋战国时持物的构件形变，下部成为土，可能是表树物于土上。战国时右侧部分成为聿，部分字形将“L”形变为辵，一直沿袭到汉代。而小篆将“L”形变为廴，成为后世主流字形。

本义为树立，引申指建立、设置，又引申特指立法，又引申指封赐、建议、提出、建筑等义。

***

# 㢟部

## 㢟

甲骨文从彳从止，彳为行省，表道路，止为人足，整个字会在道路上行走之意。至金文时将彳末笔拉长，成为廴，后世承之。

本义是长行、安步貌，是“延”的初文。

## 延

本字为“㢟”，甲骨文、金文中㢟已有用作绵长义，至小篆时，上部增加一撇以示分化，专表由“长行”本义引申而来的“绵长、长久”义。引申指拖延、伸长、迎候、邀请、接待、连及等义。

***

# 行部

## 行

象形字，像十字交叉的道路之形。作偏旁时通常省右半部作彳，或省左半部作亍。

本义是道路，引申出行列、排行、行业等义，以上义读háng。从道路义又引申出动词行走义，进而引申出通行、流行、施行、行为等义，读xíng。由行为义又引申作名词表行迹，读xìng。

## 術

从行术声，本义指城邑中的道路，又泛指道路，引申指沟渠。由道路义引申出方法、技术、策略、学说、学习等义。

## 街

从行圭声，本义指城中的大道，也泛指道路。因街道上常有集市，所以又引申指集市。

## 衢

从行瞿声，本义指四面通达或有分叉的道路，也泛指道路。由道路分叉也引申指树枝分叉、旁出。

## 衝（冲）

从行重声，小篆以“童”为声符，亦见于秦简、汉隶，重、童上古音同，传世文献多从重声。

本义为通途、大道，多为交通要道，又引申有重要的意思。由本义又引申出朝一个方向直行义，分别引申出“朝着、向着”和“突击、碰撞”义，又进一步引申出猛烈、劲足义。用于朝着和猛烈这两个义项时，读chòng。

现代简化字并入“冲”。

## 衙

从行吾声，本义是行进的样子，本字音yú。而后世读yá表官署义属于讹变，表官署的“衙门”一词本作“牙门”，源于军旅营门的别称，汉末时转为指代官府，后“牙”误讹作“衙”，到唐代时，“衙门”的用法已广为流传，宋以后“牙门”的正确写法反倒少有人知了。

## 衛（卫）

甲骨文像四足环绕城邑之形，有守卫义，或省去左右两边的足而从“行”，或将表城邑的“囗”改为“方”。金文从方的字形将“方”变为“帀”形，部分字形或在下方额外增加“止”。《说文》小篆字形是同时结合“囗”、“帀”，将“帀”变形置于下方，作“䘙”。另一主流写法则承袭自更原始的字形，隶变后作“衛”。衛、䘙后世并行。今简化作“卫”，“卫”是现代群众新创的简化字，其构造或说是从衛中上部构件的变形而来，或说是源于日本片假名，或说是源于protect的首字母P。

本义为守卫，引申指守卫者，也引申指边缘的地方，又为古国名。

***

# 齒部

## 齒（齿）

甲骨文像张口露齿之形，至战国时或在上方增加止作为声符，《说文》小篆从之，隶变为“齒”。现代简化字作“齿”。

本义为牙齿，又特指象牙，又引申指齿状物。因幼小的牛马每年长一齿，所以又用齿数指牛马的年岁，引申指人的年龄。又引申指次列、并列、说等义。

## 齧（啮）

从齒㓞声，本义为咬、嚼，引申指缺口、侵蚀。现代简化字作“啮”。

## 齢（龄）

从齒令声，本义为年龄，引申指年数。现代简化字作“龄”。

***

# 牙部

## 牙

象形字，像上下牙相错，隶变后变得略像“耳”形，作“牙”。战国时又或增加齿作义符，演变为《说文》古文的写法，隶定作“𤘈”。

本义为臼齿、槽牙，又泛指牙齿，也特指象牙，又引申指齿状物。古代将军之旗称为牙旗，军旅营门称为牙门，拟猛兽爪牙之形以示军威，后牙门又借指官署，并讹写作“衙门”。

## 齲

或从牙从禹、禹亦声，或从齒从禹、禹亦声，前者为《说文》小篆之形，后者为《说文》或体之形。“禹”为虫之象形，齿中有虫即为龋，本义即蛀牙。后世文献多用从齒的“齲”。简单现代简化字为“龋”。

***

# 足部

## 足

甲骨文像连腿带脚的整个下肢，部分字形又简化作从口从止之形。足、疋本为一字，战国时期开始分化，至《说文》小篆将上面的“口”封口的作“足”，不封口的作“疋”。甲骨文和金文中“足”和“正”形近多混，后来“正”字上部逐渐变为一横，才明确区分。

本义或说指脚，或说指整个下肢，或说指膝盖以下的部分。不过后逐渐专指脚踝以下的部分，今称脚。又泛指动物的蹄、爪以及植物的根茎，或器物下方起支撑作用的部分、基部等。由基部的稳定属性引申出富足义。进一步引申出使富足、充分、多、能够等义。

## 蹏（蹄）

从足虒声，俗作从帝声的“蹄”，后世“蹄”更多见。本义指有蹄类哺乳动物足趾前部的典型角质覆盖物，或笼统指这些动物的脚。

## 跟

从足艮声，《说文》或体从止，止、足形符互通。艮或兼表义，“艮”是“見”的反文，前视为見，后视为艮，故从足的“跟”字本义为脚后跟。引申指物体底部或后部，进而引申指跟随、追随等义，现代汉语又引申作连词、介词。

## 踝

从足果声，本义为踝骨，即小腿和脚交接处凸起的部分，“果”或兼表义，足上凸起像树上果实之形。

## 跖

从足石声，战国时或从止，止、足形符互通。本义为脚掌，引申作动词指踩踏或跳跃。

## 跪

从足危声，战国时或从止厃声，止、足形符互通，厃、危亦通。本义指双膝或单膝着地，又指足，又特指蟹足。

## 跽

从足忌声，甲骨文有从止从己的字形，与跽应为同一字。本义为双膝着地，上身挺直。

## 踽

从足禹声，金文或从辵，辵、足形符互通。本义指孤独单行貌，“踽踽”常叠用。

## 蹌

从足倉声，本义指行走舒缓，有节奏、合乎礼仪的样子。也用于形容起舞的样子。引申出蹦跳貌的隐含义，用于“踉蹌”一词，表示走路不稳。现代简化字作“跄”。

## 踊

从足甬声，本义为向上跳跃，引申为登上、上涨、踊跃、涌现等义。

## 蹴

从足就声，本义为踩、踏，引申指踢、追逐、催促、不安等义。

## 躡（蹑）

从足聶声，本义为踩、踏，引申指攀登、至、跟随、穿鞋等义。其踮起脚轻声走路之义应是与“攝”通假而来。现代简化字作“蹑”。

## 跨

从足夸声。夸或兼表义，有大、过度的含义。跨本义指越过，引申指时间上的跨越，或跨越地理、行业界限等。由本义又引申指超过、占据、兼有、骑。

## 蹋

“踏”的异体字，二字声符古音相近。本义为踩、践踏。又引申指踢、迈步、勘测、追随等义。

## 蹈

从足舀声，本义为踩、踏。引申指踏跳，“舞蹈”一词即用此义。由本义又引申指遵行、登上、行等义。

## 踐（践）

从足戔声，战国时或从辵，或从彳，或从行，彳、辵、行、足形符互通。本义为踩、踏，引申为到、登临、履行、遵循、承袭、毁坏等义。现代简化字为“践”。

## 踵

从足重声，本义为脚后跟，引申指鞋后跟、物体底部，又引申指追逐、追随、继承、踩、到等义。

## 蹩

从足敝声，本义为跛、扭伤脚，也可指踢。

## 躅

从足蜀声，“踯躅”常连用，或作“蹢躅”，表徘徊不前貌。躅单用有踩、顿足的意思。

## 蹶

从足厥声，《说文》或体从闕声。本义指跌倒，如一蹶不振，引申指颠覆、失败。也有踏、踢义，如尥蹶子。

## 跳

从足兆声，本义为跳起、跳跃。引申指火光或思想的闪动，或事物突然出现。

## 跋

从足犮声，本义为扑倒，引申指踩踏、踏草而行或翻山越岭。“颠沛”一词本是“蹎跋”的通假，蹎与跋都是跌倒的意思，连用引申指困顿挫折或颠簸摇荡。

## 跌

从足失声，本义是摔倒，引申指下降、顿足、犯错等义，也引申指行文起伏或音调顿挫，如跌宕。

## 蹲

从足尊声，本义为坐，也指臀不着物的虚坐。引申表呆着。

## 踞

“居”是“踞”的本字，从尸古声，本义是坐。而表住所、居住义的本是“凥”字，后来“居”被用作表“凥”义，另造一个从足的“踞”字表坐的本义，而“凥”字则逐渐废弃。

本义是坐、蹲，蹲本义也是坐。引申有依靠、占据的意思，如盘踞。

## 跛

从足皮声，指腿瘸行不正。

## 蹇

从足寒省声，本义为跛脚，引申指劣马或跛驴，又引申出口吃、文字生涩、困难、阻塞、停留、坚固、傲慢等义。

## 跣

从足先声，指赤脚。

## 距

从足巨声，本义为禽类腿后突出像脚趾的部分，引申指弯曲似鸡距的物体，如兵器或鱼钩上的倒刺。又有至、到的意思。由“到”义产生距今、距此之类的用法，进一步引申出距离的意思。

## 路

从足各声，战国时或从辵，辵、足形符互通。本义为道路，引申有方法、道理、规律之义。

## 蹭

从足曾声，《说文》只载“蹭蹬”一词，指困顿难行貌。今单用表摩擦义。

## 蹬

从足登声，《说文》只载“蹭蹬”一词，指困顿难行貌。又有踩或用力踹的意思，引申指穿鞋、裤。

## 蹉

从足差声，本义为跌倒，引申指失误、差错、踩踏、赶路等义。“蹉跎”常连用，义为失足，引申指失时、失意、经历坎坷。

## 跎

从足它声，常用于“蹉跎”一词。

## 蹙

从足戚声，本义为急迫，引申指逼近、皱缩、狭小、窘困等义。

***

# 疋部

## 疋（shū）

“疋”与“足”本一字，后分化。本是人下肢的象形，详见“足”字。战国时疋、足开始分化，小篆以上方的“口”是否封口作明确区分。早期或用作“胥”，或用作“疏”，秦汉以后很少单独使用。

## 疋（yǎ）

通“雅”，这一音义的来源于“疋”本字完全无关，是源自“夏”字省体讹混。“夏”字约在战国时期产生形似“疋”的省体，与本表足义的“疋”混同，此字开始有“夏”的读音，而“夏”常与“雅”通假，故“疋”读此音时表“雅”之义。

***

# 品部

## 品

从三口，上一下二和上二下一的写法均有，秦汉后定形为上一下二。三表众多，而“口”所指代的含义有两种说法：

1.  口表示人，品字本义即是人的多数，相当于现代汉语的“人口”。
2.  口表示物，形状像祭祀器皿，品字本义是种类繁多。

不论是本义还是引申义，品字很早就有“众多”的含义。又泛指万物、种类，引申指等级、衡量、评论、格调、等义。

## 喦

甲骨文以一人上连三口表示絮聒多言，金文中作“嚴”的形旁。与讘、囁音义并同，互为异体字。

## 嵒

本义是山岩，嵒、喦为一字之分化，隶楷中又混为同形字。“嵒”与“巖”可通。

## 喿

从三口汇集木上，会群鸟聒噪之意，后多做声符而不单用，再增“口”旁作“噪”表本义。

***

# 龠部

## 龠

象形字，像可吹奏的排管乐器，下面是编连在一起的排管，上面是管口，或在上方再加一倒口表示人在吹奏。是“籥”的本字。《说文》释为“从品侖。侖，理也。”有误。

## 龢

从龠禾声，本义为音调和谐，后与“和”通。

## 龤

从龠皆声，本义为音乐和谐，后多作“諧”。“龢龤”即今“和諧”，由乐声和谐引申为普遍事物的和谐。

***

# 册部

## 册

象形字，字形解释有两种说法：

1.  像编连在一起的竹简，本义即是竹简编成的书。此说为主流。
2.  像栅栏之形，是“栅”的本字，因栅栏形似竹书而转指竹书，后再加木旁表本义。

后世改用纸张作书写材料后仍用“册”表示装订好的书本，又引申作书本的量词。

## 嗣

商代从口册、从子、司声，口与册表示宣读册命，子表示承国的后嗣，本义即是诸侯继承国位。后演变为两个体系：一是省去“子”，为小篆字形的根源，即今天的“嗣”字；一是省去“口”和“册”，成为“孠”，即《说文》古文字形。

引申出继承、过继、后嗣等义。

## 扁

从户册，会门上题字之意，是“匾”的本字。因匾额通常是扁平状，引申出了扁平、扁薄之义。

***

# 㗊部

## 㗊

从四口，甲骨文用法不详，《说文》训为“众口”。多用作形旁。

## 囂（嚣）

从頁从㗊，“頁”突出人首形表示人，四口表示喧哗，会一人处于喧哗中之意。四口或分置于上下，或分置于左右。本义是喧嚣、吵闹。引申出放肆、夸耀等义。

## 器

会意字，四口表示众器物，以犬守护以防丢失。本义即是器具、用具。引申指才能、胸怀、重视等。

***

# 舌部

## 舌

象形字，像舌自口出，战国时有从肉的异体字形。本义是舌头。隶变后的字形多与𠯑（guā）同形，但音义均不同，如“括”、“刮”、“話”等的声符均是𠯑而不是舌头的“舌”。

## 舓（舐）

从舌易声，或从也声，此二字形皆少见，古书多作“舐”，此三字互为异体。本义是用舌头舔。

***

# 干部

## 干

象形字，像带有羽饰（一说是叉子）的盾形，至金文将盾先简化为一肥笔，后省为一横，隶变后上方的分叉也拉直为一横。《说文》认为“从反入从一”，有误。

本义是一种抵御戈的类似盾牌的武器。“干戈”常用来作为兵器的统称，代指武力、战事。引申指冒犯、强行参与、求取、有关联等义。

现与表乾燥的“乾”、树榦的“榦/幹”（幹是榦的俗体字）相通。

“天干地支”一词中，历代多写作“干”，但究其本意，应是“榦/幹”。《广雅》：“甲乙爲幹。幹者，日之神也。寅卯爲枝，枝者，月之靈也。”《白虎通》：“甲乙者幹也，子丑者枝也。”幹与支相对，以树幹、树枝作比。但至晚从宋代时起，干戈之“干”就被借用于“天干”一词，读音也随之转为平声（一说干戈的“干”字古时本就是去声，后才变为平声）。

## 屰

“逆”的本字，头上脚下的倒人形，会不顺之意。《说文》认为“从干下屮”，有误。后用从辵的“逆”表示屰，屰本字遂废。

***

# 只部

## 只

从口，象气下引之形，为句末语气词，古文字中多用作声旁。现代则兼作为“隻”和“衹”的简化字。

***

# 㕯部

## 㕯

从口从内、内亦声，会意在内而不出口之意，即说话迟钝。或作“呐”，或从言作“訥”，口、言形旁互通。

## 矞

《说文》：“以锥有所穿也，从矛从㕯。”战国楚文字上从矛，下从\\[内口]，古文字中“内”、“入”为一字之分化，口则常作为羡符，如“丙”作\\[丙口]，此字疑是以“矛入”会以锥穿入之意，比《说文》“从矛从㕯”之说更合理。矞、内古音通，故“内”兼表音。此字不常用，多作声旁。

## 商

构形不明，甲骨文中用作地名和人名。几种说法如下：

1.  《说文》释为“从外知内也，从㕯、章省声”，此说无根据，且与甲骨文、金文形义不合。
2.  像玄鸟（燕子）之形，殷商始祖契是简狄吞玄鸟蛋所生，《诗经》：“天命玄鸟，降而生商”。所以商人以玄鸟之形构成的字作为族称。但文献中商从未用作燕子义。
3.  是殷人族称，上部与凤字上部相同，是凤的冠羽，下部像穴居之形，象征殷人居住地。
4.  本义是商星，即辰星、大火星，是商人崇拜的星神。甲骨文像一个底座上插着火把之形，以此象征大火星。有的商字还额外增加两个或四个星星符号。商人以崇拜的商星名其族。
5.  本义是商星，但构形逻辑如下：上部是䇂（古“愆”字，与“辛”同源），是古代刑具，表惩罚义。下部表示居住地。源于参商之说，即阏伯和实沈兄弟相残，被高辛氏惩罚分别迁于两地，分别主祭商、参二星。商因伤而得名，故谓之商。

殷亡以后，商人失去田地，多转为商贾，商由此衍生出经商义。而贸易时需要评估物品价值，又引申出估量、商量义。西周金文中又用作赏赐义，此义后分化出“𧶜”，最终被本义为偿还的“賞”字所替代。

***

# 句部

## 句

“勾”的本字。从丩口声（从口丩声的是“叫”字），“丩”像屈曲缠绕形，作为形符。

本义是曲折，引申指形态钩曲的物体，又引申指勾连。语言文字划分的单元往往含有停顿、相勾连的属性，所以“句”又引申指语言单元，即“章句”之“句”。约在晋代，产生将口写作△的写法，后分化出“勾”字，专表弯曲义，而“句”本字则专表章句义。

## 拘

从句从手、句亦声。本义指拘拿逮捕，引申为束缚、执持义。

## 鉤（钩）

从金从句、句亦声。“句”的分化字，专表弯曲或弯曲状物体。

***

# 丩部

## 丩

像二物相缠绕之形，一说像带钩之形。本义即是纠结缠绕。秦汉以后多用作偏旁，另造从糸的“糾”字表本义。

## 糾

本字为“丩”，表纠结缠绕，后追加意符“糸”作“糾”。由本义又引申指纠集、纠结、矫正、督察、检举等义。

***

# 古部

## 古

甲骨文上面是似“中”或“申”之形，下面是“口”。西周时将上部先简化为竖加一肥笔，又简化为“十”，后世变化不大。几种构形解释如下：

1.  《说文》认为“从十口，识前言者也”，这是基于简化后的字形，并非本义。
2.  上半部是盾牌，下面的口是区别符号，本义是坚固，是“固”的本字。
3.  上面是酒提，下面是盛酒容器，本义是打酒、卖酒，是“沽”的本字。

文献实际使用义多为时间久远。并由此引申指古代事物等。

***

# 十部

## 十

指事字，最初只是一竖笔，金文将中部加肥作纺锤形，后中部变成一圆点，圆点又变成横。《说文》所谓“一为东西、丨为南北”是基于后世字形反推，不确。一说是上古结绳记事，遇十打一结，此说只能解释金文以后的字形，存疑。更合理的解释是最初一竖表示竖放的算筹，古人以算筹竖放表示十。

## 丈

上“十”下“又”，会手持量具量十之义，十尺为丈，丈字本义就是度量单位。战国时写法与“支”字接近，隶变后连笔简化作“丈”，与“支”相区别。

## 千

“人”字下部加一短横，战国时或将短横写作圆点。其中“人”被认为是借来表音的。本义是十个一百。《说文》认为“从十从人”，有误，因甲骨文中的“十”未见有写作十字形的。

## 博

构形有两种说法：

1.  《说文》：“从十从尃”。十表示数字完备，有齐全义，尃有分布义。故“博”字表示分布广泛，即广博之义。
2.  左侧是“盾”的象形初文，作义符，“博”是“搏”的初文，本义是搏击。“广大”是假借义。

不论起源为何，实际使用中基本义确实是广、大。引申出丰富、通晓等义。又指局戏（又称六博，一种棋类游戏，常用于对赌），以为吃子搏杀为形式，可能从“搏”字通假而来，有一个从竹的专用分化字“簙”表此义，但典籍中多以“博”代“簙”，“博”遂有赌博含义，进一步引申出博取义。

## 廿

两个“十”的并列合文，当金文中“十”的中部从圆点演变为短横后，“廿”字即将左右短横相连。本义即是二十。下部多有合文符号，故早期读音本应是分作“二十”，即看作两个字的合文，而非一个独立字。作为一个独立字的读音或是从汉代创造的，人汁切（自反），读“入”，后读音流变，变为与“念”同音，甚至可直接写作“念”。

***

# 卅部

## 卅

三个“十”的并列合文，形成过程与“廿”类似。

## 世

象形字，像枝上的叶子，与“枼”本为一字，音义皆通。而“枼”即“葉”的本字。此三字的关系或如下：先有“世”字表树叶义，后引申出世代义（一说此义为假借义），为作区别于是又造从木的“枼”字表本义，但“枼”也逐渐用于世代义，于是再造从艸的“葉”字表本义。不过“葉”字在后世使用中仍有作世代义的用法，如“中葉”、“上半葉”等。

《说文》认为“三十年为一世。从卅而曳长之。亦取其声也。”是根据小篆字形而得，不确。

***

# 言部

## 言

构形说法如下：

1.  “舌”上加一横（区别符号）而成的指事字，战国时在上方再加一横作饰笔，成为后来小篆字形。
2.  《说文》认为“从口䇂声”，上半部仅作声符。
3.  上半部的“䇂”形是象征美好事物的符号，与“龙”、“凤”、“章”的上部相同。

本义是说话。引申指告诉、话语、言辞、著作等。

## 語（语）

从言吾声，金文有异体从言五声（通常作两个五），秦汉以后固定以“吾”作声符。

本义指谈论。“直言曰言，论难曰语”。引申指话语、语言、文句等。

## 談（谈）

从言炎声，本义是谈论，与“语”同义互训。

## 謂（谓）

从言胃声，本义是告诉。春秋战国时多借“胃”表此义，战国末年睡虎地秦简始见从言的“謂”字，是在假借字上加表意形旁而成的后起字。

从本义引申指说、称作。

## 諒（谅）

从言京声，本义是诚信，引申指宽恕、推想。

## 請（请）

从言青声，本义是拜谒，拜谒常常有所求，故引申出请求义，进一步一身出询问、邀请等义，又用作敬辞。

## 謁（谒）

从言曷声，本义是拜访时自我介绍的名帖，类似于现代的名片，引申为拜见、请求、禀告义。

## 許（许）

从言午声，本义为听从、允许。一说午兼表义，是“杵”的象形，“許”即是人舂米时发出的呼声，音“hǔ”。

由听从义引申出赞许、期望、大概、约略等义。作国名时本作“鄦”，許是假借用法。

## 諾（诺）

从言若声，若或兼表义，“若”本义是顺，故“諾”本义为答应、顺从。

## 諸（诸）

从言者声，本义是问辩，本字是“者”，约从秦代分化出从言的“諸”字专表此义。后又有“众、各”义。又用作兼词，相当于“之于”。又有语气助词等其他虚词用法。

## 詩（诗）

从言寺声，本义是把心中的思想表达出来的语言，在心为志，发言为诗。古今含义变化不大。早期古籍中特指《诗经》。

## 讖（谶）

从言韱声，本义是预言征验，引申为谈论预言的书籍。

## 諷（讽）

从言風声，本义是背诵、朗读，引申指谏议。

## 誦（诵）

从言甬声，本义为朗诵，带有腔调地高声朗读。

## 讀（读）

从言𧶠（yù）声。“𧶠”与買賣的“賣”本是两个字，上方是“睦”的古文，此二字形近、义近但音不同，隶变后合并，统一写作“賣”，原“𧶠”字的读音和含义被“鬻”继承。

本义是阅读。“讀”侧重于理解，“諷”侧重于背诵，“誦”侧重于腔调。

## 訓（训）

从言川声，本义为教导，引申指解说、斥责等。

## 誨（诲）

从言每声，“誨”、“謀”古本一字，母、每、某古音同，作声旁经常互通。“誨”字既表教诲义也表谋略义，后二字分化，“誨”专门承担教诲义，“謀”承担谋划义。

## 譬

从言辟声，本义是打比方，早期假借“辟”字表此义，后加义符“言”造专用字“譬”。

## 諭（谕）

从言俞声，本义指告诉他人使人明白。而使人明白的常用方法是打比方，故又引申指比喻，“喻”是“諭”的异体字，后“喻”行而“諭”废。

## 諄（谆）

从言𦎫（chún）声，此字未见于隶书，声旁𦎫至汉代草书已与享受的“享”混同，楷书应是从草书楷化而来，右侧变为“享”。

本义是诲人不倦的意思，典籍中常叠用，作“諄諄”。

## 謀（谋）

从言某声。或体作\\[母+心]，从母心声。早期金文也写作“誨”，声符每、某互通，“謀”后与“誨”音义分化。

本义是谋划。引申指商议、设法寻求、计策等。

## 謨（谟）

从言莫声，暂未见于小篆之前的文字。与“謀”通，本义即是谋略。西周墙盘“宇誨”读作“訏謀”，即典籍中的“訏謨”，誨、謀、謨三字的关系可能如下：先有“誨”字，表意繁多，后造“謀”字专表谋略义，而从莫声的“謨”可能是更晚的后起字，表谋略义时与“謀”互通，但“謀”在后世又引申出一些“謨”不具备的额外含义，如谋求、商议等。

## 訪（访）

从言方声，本义是广泛征求意见。因广泛咨询常要前往被访者处，引申出专程前往问候、拜访、探访义。

## 諏（诹）

从言取声，指咨询。

## 論（论）

从言侖声，是从“侖”分化出的形声字，“侖”有条理、层次义，引申为言语上条理分析义，后加言旁作“論”专表此义。

本义即是议论、评判。与“議”义近，但“論”更侧重于逻辑分析。

## 議（议）

从言義声，是从“義”分化出的形声字，由礼仪、适宜之义引申指讨论事情是否合宜，后加言旁作“議”专表此义。

本义是议论，更侧重于是非评价。

## 訂（订）

从言丁声，本义指经多方协商评议后确定结论，引申指改正、达成协议、预先约定等。

## 詳（详）

从言羊声，本义是全面细致地述说，本作动词，后衍生出形容词义，表全面详尽。

## 諦（谛）

从言帝声，与“审”义相通，本义是细察、详审。引申指了解、详细、事物的意义道理等。

## 識（识）

从言戠声，是从“戠”分化出的形声字，“戠”本义为标志、识记，后加言旁作“識”，可表标记本义，又引申出认识、知道、辨别、知识等义。

## 訊（讯）

早期甲骨文是一个被反绑的人形旁边一个口，表示在向此人审问，晚期甲骨文将反缚的人形变成一个人加糸（绳索），表义相同。金文承袭此形，下方增加脚趾形。而小篆则将表形的部分替换为读音相近的“卂”（一说是形近讹变），将“口”变成声旁“言”，整个字于是变成从言卂声的形声字，隶、楷从之。

本义是审问俘虏，而审问的目的是为了得知情报，于是引申出询问、打听义，又引申作名词表音信、消息。

## 謹（谨）

从言堇声，本义为谨慎，古今形义变化不大。又引申指恭敬地、严格地等义。

## 諶（谌）

从言甚声，本义为真诚，引申为相信。与“忱”、“訦”音义皆同，可互通。

## 信

先秦时使用频率很高，字形地域差别很大。楚国文字从言千声；三晋和燕国从言身声；齐国本作从心千声，后变为从口千声，“千”又讹为“人”，逐渐演变为《说文》古文的写法，即“㐰”。秦文字则从人从言或从仁从言，人（仁）亦声，小篆及后世文字以此为本，作“信”。

本义为言语真实，引申指诚实、信用、准确可靠、相信、听任、消息、书信等义。

## 誠（诚）

从言成声，本义是言语真实，引申指诚实、真诚，又作副词表确实，又作连词表假设。

## 誡（诫）

从言戒声，戒兼表义，“戒”本义是警戒，从言即是以言语使人有所警戒，“誡”本义即是警告，引申指规劝，又指用于告诫的文字。

## 諱（讳）

从言韋声，本义指对不便明说之事的避忌。引申指隐蔽，又作死的婉辞。古时出于对尊者、长者、贤者的尊重，要避免直呼其名，这些人的名即称作“諱”，分国諱、家諱等，“諱”又引申专指逝去的尊长的名，生曰名、死曰讳，合称“名諱”。避尊长贤者名是出于尊敬，避逝者名是为了避凶。

## 誥（诰）

先秦多写作\\[言+廾]，从言廾声，约战国以后被从言告声的“誥”取代。

本义是告诉，引申特指上对下的告知，如誥命、誥敕等。

## 詔（诏）

从言召声，本义是告知、告诫，自秦规定“命为制，令为詔”，詔才特指皇帝下达的命令。

## 誓

从言折声，本义指约束将士的号令，引申指约束立誓人的言语，即誓言。

## 詁（诂）

从言古声，用今天的语言解释古代的文字、词句，也可直接指古言本身。

## 藹（蔼）

有两种解释：

1.  从言葛声，表盛多。
2.  从艸謁声，表草木繁茂，引申指盛多。

基本义即是盛多，引申指温和。

## 証（证）

从言从正、正亦声，用言语使上位的人归于正道，即劝谏。与證明的“證”本是不同的两个字，但由于音近，自古就常混用，新中国简化字则合并为“证”。

## 諫（谏）

从言柬声，自战国时“柬”多省写作“東”形，汉隶也有此种写法。与“証”同义，都是用言语使上位的人归于正道，劝其改正过错。

## 課（课）

从言果声，本义是言语考核测试，泛指检测、检验。引申指督促完成规定的工作。由考查的本义又引申指推敲研讨，进一步引申为学习，又引申指按规定的内容分段学习或教学，即教学单元。由考核义也引申指按规定数额征收赋税。

## 試（试）

从言式声，本义为使用，引申指通过使用来检验测试，泛指测验、考核，又引申指尝试。

## 䚻（谣）

小篆从言肉声（或说肉），后产生“謠”、“謡”等或体，本字废弃。现简化为“谣”。

本义指没有音乐伴奏的清唱，与之相对有伴奏的唱是“歌”。引申指民间流传的歌曲，又引申指虚假的流言、传闻。

## 詮（诠）

从言全声，全兼表义。本义是详尽地解释。

## 訢

从言斤声，与“欣”互为异体字，本义是高兴。

## 説（说）

从言从兑、兑亦声，“兑”本有喜悦之义，从言的“説”字兼表此义，读yuè。同时有向他人陈述、解说之义，又泛指谈说，也指观点、学说等，读shuō。又引申指劝说、说服，读shuì。“説”又分化出从心的“悦”字，继承“説”的喜悦义。

## 計（计）

从言从十，“十”表数字，会计算、合计意。引申指考虑衡量，进一步引申指考察、审核，作名词表计策、方针等。

## 諧（谐）

从言皆声，本义指声音协调，引申指语言协调，即诙谐滑稽，又引申指人际、社会等事物的协调。

## 調（调）

从言周声，本义是协调、调和，引申指调整、调解、挑逗等。以上义读tiáo。引申指使事物重新分配协调、调整部署，即调动、调取义。由协调义引申出声音的调式、腔调等，进一步引申指人或事物的气质，即格调义。以上义读diào。

## 話（话）

从言𠯑声，本作“䛡”，隶变后凡从𠯑声的字都讹变为从“舌”，于是写作“話”。籀文从會，作“譮”。本义是和善之言，泛指言语，又作动词表谈话。

## 諉（诿）

从言委声，是从“委”分化出的形声字。“委”有推卸、推托义（由托付义引申而来），后造从言的“諉”字专表此义，即推诿。

## 警

从言从敬、敬亦声。以言语使人有所重视、戒备，即警戒，表此义时通“儆”。引申为对危险的戒备，引申指危急情况。

## 謐（谧）

从言𥁑声，又有从言必声异体字“䛑”。本义是安静。

## 謙（谦）

从言兼声，从兼声的字多有旁侧、微薄之义。本义为谦虚、谦逊，引申指损失、亏空。

## 誼（谊）

从言从宜、宜亦声，会合宜的道理、行为之义，表此义项时与“義”同。古时（周及周以前）“誼”表仁義，“義”表礼仪（儀），后“義”转指古“誼”字含义，用“儀”指古“義”字含义。至近代，誼与義的语义开始分化，“誼”侧重感情色彩，专指交情、情谊。

## 詡（诩）

从言羽声，羽兼表义，言语像羽毛一样轻飘，本义为夸耀、说大话。又引申为发扬、遍及义。

## 設（设）

从言从殳，“殳”本指一种兵器，有击打义，引申出执行、实施义，加言旁会以语言布置安排之意。本义即是布置、陈列。引申为制定、建立、筹划、假使等义。

## 護（护）

从言蒦声，基础义有救助照看和监视监督两个义项，孰为本义孰为引申义尚有争论。由监督义引申出统领义。救助照看义引申出保卫、包庇等义。

明代即出现简化字“护”，从手户声，现代简化字即采用此字形。

## 託（托）

从言乇声，本义为寄托，与人部“侂”字音义皆同。引申指托付、委托。现代简化字将“託”与从手的“托”合并，这本是两个不同的字，从手的“托”是宋代以后的后起字，表示以手托举。

## 記（记）

从言己声，本义为记录，即将口头所说、心中所想写下来。引申为把印象留存在头脑里，即记忆。又引申指标记、记号等。由下笔记录引申指写下来的文章，又成为一种特定文体。

## 譽（誉）

从言與声，现代简化字“誉”是草书楷化而来。本义是称颂、赞美，引申指声誉、美名。

## 謝（谢）

从言射声，“射”有异体字“䠶”，《说文》以后者为正体，“謝”字声符也作“䠶”。

本义为辞去、辞别，引申出推辞、拒绝义。由辞去义又引申出凋谢义。又由本义引申出道歉、认错义，也引申出感谢义。

## 謳（讴）

从言區声，《说文》：“齐歌也”，或说是齐声歌唱之义，或说是齐地之歌。泛指歌唱，引申指赞颂。

## 詠（咏）

从言永声，永兼表义，“永”有水势长流义，“詠”即指曼声长吟、长声歌唱。或体从口，作“咏”，口、言形符互通。

## 諍（诤）

从言争声，本义为直言规劝，程度比“谏”重。

## 訖（讫）

从言气声，本义是停止，引申为终结、完毕，又引申作介词表到、至。后分化出从辵的“迄”字，强调动作，专表到、至义。

## 諺（谚）

从言彦声，指前代流传的古语。

## 訝（讶）

从言牙声，本义是迎接、相迎，此义又异体字从辵作“迓”，或说“迓”是后起分化字，为强调动作属性而将形符替换为辵。“訝”又有惊奇、诧异义，或许是与人相迎遇时经常感到惊讶而引申得来。现代简体字“讶”单表惊讶义，迎接义专由“迓”承载。

## 詣（诣）

从言旨声，本义为前往尊长、上级处。引申为去某地、造访。又指意到达的境地，如“造诣”。

## 講（讲）

从言冓声，冓兼表义。“冓”为二鱼碰头之形，有面对面、相会之义。講从言冓会当面沟通之义，本义是和解。引申指论说、评述义，又引申出练习、演习义。

## 謄（誊）

从言朕声，义为抄写、转录。现代简化字省去声符朕的舟（月）旁，相当于从灷声。

## 訥（讷）

从言从内、内亦声，是"㕯"的分化字，见“㕯”字。

## 諛（谀）

从言臾声，本义为谄媚，也作名词指谄媚的话。

## 讇（谄）

从言閻声，异体字省去声旁中的門，作从言臽声的“諂”。本义是奉承、献媚，与“諛”互训。

## 諼（谖）

从言爰声，本义为欺诈，又有忘记的意思。被称为忘忧草的“萱草”最早即写作“諼草”，取忘记之义。

## 謾（谩）

从言曼声，本义为欺骗，表此义时是欺瞒之“瞒”的本字。引申指诋毁。

## 誑（诳）

从言狂声，本义为欺骗、谎话。后起字“誆”或说通“誑”。

## 訕（讪）

从言山声，本义为尖酸挖苦，引申指羞惭、难为情。负面感情淡化又引申出用诙谐口吻与人开始攀谈之义，即搭讪。

## 譏（讥）

从言幾声，本义为程度较轻的谴责，引申为讽刺挖苦，又引申指进谏、规劝、盘查。

## 誣（诬）

从言巫声，本义为说话虚妄不实、夸大其词，既可用于负面诋毁也可用于正面赞誉，主要强调内容不真实、无中生有。后负面用法较多，逐渐变成专指诋毁、诬陷。

## 誹（诽）

从言非声，非兼表义，本义指背后非难、指摘他人，本没有恶意中伤的含义，后引申为凭空诋毁义。

## 謗（谤）

从言旁声，本义为公开指责他人，本没有恶意中伤的含义，后引申为凭空诋毁义。

## 詛（诅）

从言且声，本义为诅咒、求神加祸于人。又引申指盟誓。

## 誖（悖）

甲骨文、金文、籀文均从二“或”，两个“或”字上下相反，“或”是“國”的古字，两国相违，会违背义。隶定作“𢨋”。小篆从言孛声，作“誖”。或体从心，作“悖”。现代简体字采用“悖”；

本义即是违背。引申指糊涂、荒谬、叛乱、掩蔽等。

## 誤（误）

从言吳声，本义为错误，又引申指耽误、妨害，或作副词表无意地。

## 訾

从言此声，异体作“訿”，本义为不想使上级满意，此义不常用。多用作诋毁义，引申指厌恶、指责、缺点等。

## 䛬（啕）

从言匋声，或从口作“啕”，或从包声作“䛌”。本义很多且均不常用，今主要用于“嚎啕”一词，指大声哭叫。

## 諞（谝）

从言扁声，本义为花言巧语，引申为欺骗，现代方言多用于夸耀、显摆义。

## 誇（夸）

从言夸声，是从“夸”分化出的形声字，专表“夸”本身含有的夸耀、夸大义，本是贬义词，后引申出赞美、褒奖义。

## 誕（诞）

从言延声，是从“延”分化出的形声字，专表“延”本身含有的说大话义，引申指虚妄、欺诈，又从说大话引申指大。另又借用表生育、出生义。

## 謔（谑）

从言虐声，虐兼表义，本义为开玩笑、戏弄，又引申指喜乐。

## 訌（讧）

从言工声，本义为溃乱。引申指争扰。

## 譌（讹）

从言爲声，异体作“訛”，“訛”是后起字或俗字。本义为谣言，引申指错误、敲诈等义。

## 謬（谬）

从言翏声，本义为荒谬、错误。古代典籍中常通“繆”，但此二字含义不同，仅因形近通假。

## 譎（谲）

从言矞声，本义为权诈，引申指诡诈、欺骗。

## 詐（诈）

从言乍声，本义为欺骗，引申指作假、假装。

## 訟（讼）

从言公声，本义为争论、争辩。引申指诉讼、打官司，又指为人辩冤。

## 訶（诃）

从言可声，春秋时用作“歌”义。《说文》本义为大声斥责。又写作“呵”，“呵”是后起字，但除斥责义外还兼表其他含义。

## 訴（诉）

从言斥声，或从言朔声，或从心朔声作“愬”。本义为告诉、诉说，引申指控诉、告状，又引申指毁谤。

## 譖（谮）

从言朁声，指说坏话、诬陷。

## 讒（谗）

从言毚声，异体字从二免作“䜛”，应是讹变。本义为说坏话，引申指说坏话的人或说的坏话言语。

## 謫（谪）

从言啻声，本义为罚罪、处罚，又特指官吏降职流放。引申指责备，表此义时可写作“讁”。

## 讓（让）

从言襄声，本义为责备。由责备别人引申出克制自己，即谦让、退让义。引申指把好处给别人、躲开、听任、指使等。现代简化字将声符替换为笔画少的“上”，作“让”。

## 譙（谯）

从言焦声，本义为责备，此义通“誚”。又通“瞧”表瞭望，用于“谯楼”等词。

## 詰（诘）

从言吉声，本义为询问、追问，引申指审讯。

## 詭（诡）

从言危声，本义是要求、责求，引申出欺诈、怪异、违反、隐蔽等义。

## 證（证）

从言登声，本义为告发，因告发需要证据，故又引申出验证、证明义。与从言正声的“証”本是两个不同的字，后者表示劝谏。但“證”自古常简写作“証”，现代简化字统一归入“证”。

## 詆（诋）

从言氐声，本义为呵斥、责骂，引申指毁谤、诬蔑。

## 誰（谁）

从言隹声，疑问代词，主要用以指人。

## 診（诊）

从言㐱声，本义为查考、查验，引申指看病、诊断。

## 誅（诛）

从言朱声。战国时以“戈”为形符，会诛杀意，小篆及后世字形以“言”为形符，会责备、声讨意。此字二义兼有。

## 討（讨）

从言寸，寸表法度，会以言语整治之意。本义是治理、整治，引申指讨伐。又引申出讨论、研究、索取、招惹义。

## 諳（谙）

从言音声，本义是熟悉、知晓，引申为背诵、熟记。

## 謚（谥）

从言益声，《说文》训为“形之迹也”。主要用于古代帝王、贵族、大臣死后，依其事迹给予的含褒贬意义的称号。

## 詬（诟）

从言后声，或从句声，作“訽”。本义为耻辱，引申指辱骂。

## 諜（谍）

从言枼声，本义即是间谍、细作。

## 該（该）

从言亥声，本义指军中戒约。引申指完备、详尽，此义同“賅”。又引申指容括、应当（此义宋元时才产生），由应当义又引申出欠义。

## 譯（译）

从言睪声，本义是翻译，引申为阐释。

## 詢（询）

从言旬声，本义指广泛征求意见，与“访”义近，但“访”更强调前往。

## 譜（谱）

从言普声，本义指分类记录事物系统的书，引申指记录音乐、棋局等符号。

## 謎（谜）

从言从迷、迷亦声，本义为谜语、隐语，引申指难以理解的事。

## 誌（志）

从言志声，是“志”的分化字。“志”由意念、心志的本义引申出记录、标记义，后分化出从言的“誌”字专表此义。此义与“識”音近义近，常互通，但非同字。现代简化字将“誌”并入“志”。

## 訣（诀）

从言夬声，一说从決省声。本义为永别，后词义弱化，泛指告别。又有法则、关键义，指诀窍、秘诀（此义的来源可能与決有关，诀窍即是对事物起决定作用的言语，按此说则应是从言、決省声）。

***

# 誩部

## 譱（善）

从誩从羊，造字本义几种说法如下：

1.  羊在古代既是一种美好、吉祥的动物（此说法可见于“祥”字，“祥”的本字即是“羊”，就是源于羊在古人心中的美好属性），又是一种能判断是非曲直的动物，“誩”表示两人各执一词互相争论，由羊来判断良善的一方，故“譱”字有美好、吉祥的含义。
2.  所从的不是“羊”，而是“美”的省形，与“誩”合起来会彼此美言相善之意。
3.  是“膳”的本字，是烹调食物之义，而羊肉被认为最鲜美，故引申出美好、吉祥义。

约在战国时出现省去一个“言”的写法，后演变为后世的“善”字。

基本义项即是美好吉祥。引申指品德美好（善良）；关系好（友善）；事情做好（善后）；具备做好的能力，即擅长（善战）；易于（善忘）等义。

## 競（竞）

甲骨文像前后相随、上戴头饰的两个人，会相逐意。西周时又在人形和头饰之间加口，至小篆形变为从誩从二人的样子，隶变后作“競”。汉代时又有在口中加横的写法，作“竸”。金文又有别体，将两人上部头饰写作“丰”形，此写法后简化为“兢”。后“兢”与“競”音义均逐渐分化。“競”现今简化为“竞”。

本义是互相争胜。《说文》释为“彊（强）语也”不合早期文字构形，不确。引申指争辩、强劲。

***

# 音部

## 音

“言”字的口中加一点作指事符号，表示说话所发出的声音。后泛指一切声音，变得与“聲”同义。

## 響（响）

从音鄉声，本义为回声，引申为发出声音。回声本义引申出响应义。现代简化字作“响”。

## 章

构形不明，有几种说法：

1.  以刀具治圆形玉器的象形，是“璋”的初文。
2.  以刀刻画记号、花纹，会彰著之意，是“彰”的初文。
3.  上半部是辛，表示刑刀，中间圆形表示约束，此字本义是法。

至小篆形体已有讹变。《说文》认为“从音从十”，并解释为“乐竟为一章”，与甲骨文和金文字形不符，有误。

因构形不明，以下含义演变逻辑为推测：

基本义项疑与花纹有关，引申出标记物（徽章）、印章、条理、彰显、区分等义，又由条理义引申出规章、乐曲或诗歌的段落等义。

## 竟

构形说法如下：

1.  是“競”的省形，“競”有异体作“竸”，省形作“竟”。先被假借作“疆”义（类似“競”被假借作“彊”义），表示边境，后由边境引申出终了义。
2.  甲骨文像人以口吹乐器之形，表示演奏乐器结束了，含有“终止”之义。但为什么口吹乐器就是结束，这点缺少解释。
3.  上面是“辛”表示刑刀，下面是人，会以刀在奴隶头上刻记号之义，含有“完成”义。同样解释不清“头上刻记号”和“完成”之间的关系。

从典籍的实际使用来看，不论是否为借用，“竟”确实被用作边境义无疑。“终了”义是从“边境”义引申而来的可能性很大。由终了义又引申出穷究、整个、最终、出乎意料等义。

## 韻（韵）

从音員声，异体作“韵”。本义是和谐的声音。引申指神韵、气质、风雅等义。

***

# 䇂部

## 䇂

与“辛”的区别在于“䇂”下部弯曲，“辛”下部是一直笔。应是一种刀形器具，多作偏旁。

## 童

甲骨文像一个人被刑具刺目之形。西周金文下部加“東”表声，后又在“東”下加“土”，与“重”形近。小篆则省去目，并将下部类似“重”的构件的上半部省略，变成所谓“从䇂、重省声”。

主流说法本义是有罪的奴仆，另一种说法是上半部不是刑具而是头饰，类似“龙”、“凤”初文的上半部，如此则本义就不是指有罪之人，存疑。

古代奴隶会受髡刑，即将头发剃光，故“童”的突出特征是没有头发。引申指头秃、山地秃、草木秃，因小孩不蓄发，头发剃秃，童又引申出孩童、幼小、愚昧等义。“童”字含义扩大后，分化出从人的“僮”字表奴仆的本义，也兼指未成年人，

## 妾

下半部是女，下半部一说是表刑具的“䇂”，一说是头饰。按刑具说，“妾”字本义是有罪的女子，即女奴，后演变为男子在妻子以外另娶的地位低下的女子。按头饰说，则本无贵贱之分，女奴和小妻是后起的义项。

***

# 丵部

## 丵

未见于出土文物和典籍，疑是《说文》误将若干不同源的字割裂偏旁而成的臆造字。

## 業

早期金文为\\[業+業]，战国时省去一半。整体是悬挂钟鼓的锯齿状架子（称为大版）的象形。《说文》拆解为从丵从巾，不妥。现代简化字是删减笔画只取上半部而来。

除乐器架子外，书本的架板（书版）也称为“業”。由此引申指读书学习，进一步引申指事业、行业、财产等义。

## 叢（丛）

学界认为此字本应是从艸龍声的“蘢”，后艸旁与龍字顶冠混讹成所谓的“丵”旁，“龍”的下半部讹为“取”，以致《说文》误释为“从丵取声”。后又产生“樷”的或体写法，南北朝时又产生会意俗体字“藂”。《说文》中另有从艸的“䕺”字，应是累加形旁产生的后起字。

民国时部分书店将“叢书”写作“从书”，即以“从”代“叢”，而“从”是“從”的本字，现行简化字已将“從”恢复为“从”，如此会产生混淆，于是在用来代替“叢”的字下加一横以示区分，变为“丛”。

“叢”本义应是草木丛生，引申为聚集在一起的人或事物，也表繁杂。

另外现代茶叶行业“单枞”一词属于错别字，此处本字是“欉”，而“欉”是“叢”的异体字，简化后就应该作“丛”。而“枞”字是“樅”的简化字，是一种树名和地名，与“欉”完全无关。故这个词现代应写作“单丛”。

## 對（对）

甲骨文和金文异体很多，但主体均是像以手把持某物之形，但所持物体是什么尚无定论。

本义是回答、应答，引申指朝着、向着，又引申出相互比较、适合相当等义。

***

# 菐部

## 菐

省形或讹形，未见有单字用例。

## 僕（仆）

“僕”甲骨文像一个头戴头饰（一说是辛或䇂，用于奴隶的刑具，一说是扫帚形）、后戴尾饰（可能是俘虏的标志）的人手捧装满垃圾的簸箕之形，指的是家内负责洒扫服侍的低等奴役。西周金文将簸箕形置于头饰上，人形则与头饰分离单独置于左侧，双手与人分离置于下部。后又进一步简化，省去簸箕形，头饰的部分演变为“丵”形（或认为这就是扫帚形），隶变后下面的两只手（廾）变为类似“大”形，成为从人菐声的形态。另外金文还出现一个增加“臣”旁的字形，或许是因为金文字形已讹变得不象形了，所以追加义符“臣”强调臣仆义，此形后省略“人”，成为《说文》古文“䑑”。

“僕”本义即是一种负责劳作的奴隶，泛指役使的佣工，引申出依附、跟从、谦辞义，又指驾车或驾车的人，又演变为官名。

现代简化字并入“仆”字，而“仆”本是从人卜声的形声字，本义是向前扑倒，与“僕”音义皆不同。

***

# 廾部

## 廾

两手相向之形，会拱手有所奉承意，金文以后多只用作表意偏旁。

## 奉

从西周到战国均是从廾、丰声，表示捧承义，“丰”形也可认为是所捧之物。秦文字又在下方累加手旁，后隶变成为“奉”。

本义是双手捧承，有恭敬意味，引申出进献、敬受义，后虚化为不表动作的抽象敬辞，如奉陪、奉劝等。

“奉”字引申义较多，后又再累加“手”旁造“捧”字表本义。

## 丞

甲骨文像一人落入深坎中，上有双手拯救之形。是“拯”的初文。战国文字将双手置于两侧，人形腿部与凵相连，相连的部分至小篆变得类似“山”形，以致《说文》认为“丞”从山，有误。隶变后底部的凵拉直为一横，整体字形变为“丞”。

由拯救义引申出帮助、辅佐义，多用作官名。后又造从手的“拯”字表本义。

## 奐（奂）

金文上部是人立在穴上，下部是两只手，一说是廾，一说是𠬜（pān,反廾）。至小篆将下部定为廾，隶变后字形变为“奐”。此字形、义尚无定论，主要用作声符。

## 弄

会双手捧玉摩挲玩弄之意，本义就是用手把玩，与“玩”互训。含义又从玩弄物品扩大到玩弄各种人、事，且多包含轻视的情感色彩。

## 戒

会双手持戈警戒之意，本义即是警戒、戒备，引申出戒律、惩戒、戒除等义。

## 兵

会双手持斤（砍伐器具）之意，春秋战国时产生一种或体，在斤下加两横或一横，为《说文》籀文的源头。小篆继承从斤、廾的原始字形，隶变后成为“兵”。

本义是兵器，引申指士兵，进一步引申指军队、军事、战争等义。

## 弈

从廾亦声，指围棋或下围棋。

## 具

甲骨文是以双手捧鼎之形，造字本义是备办酒食。而“鼎”和“貝”在构字中很早就开始讹混，西周金文已将“鼎”讹为“貝”，从春秋文字开始，将鼎的脚省去，成为“目”形，隶变后字形变为“具”。《说文》依照讹变后的字形认为“从廾、从貝省”，有误，应是从“鼎”省。

本义是置办筹备酒食，引申指酒食，也引申指餐具，由餐具进一步引申泛指器物，由器物引申指人才或才能。由本义又引申泛指筹备，由此又引申出含有、完备义，进一步引申作副词表全、都，此义后多作“俱”。

***

# 𠬜（pān，反廾）部

## 攀

从反廾，两手向外之形，会攀登义。后加“棥”构成“樊”字：或说“樊”本是𠬜的异体字，“棥”在其中作声符，后假借为篱笆义；或说“樊”是“棥”的分化字，“棥”表义，“樊”本义就是篱笆。总之“樊”确实作篱笆义，后又在樊字下再加义符“手”，以“樊”为声符，构成“攀”，表𠬜的攀登本义。或体将手、樊分布为左右结构，即《说文》或体写法。因𠬜书写不变，作为构件多简化作廾形。

本义是攀登，引申出依附、追随、拉关系义，由本义又引申出牵引拉扯义，进一步引申出牵涉义。

## 樊

详见“攀”字。“棥”是“樊”的本字，像两木间拉起绳网以作阻隔之形，指的即是篱笆。引申指关鸟兽的笼子，又引申指范围、边际、拘系等义。

***

# 共部

## 共

从甲骨文到金文有两个系列的字形，其一是两手捧一“口”状物体，另一种是两只手上方两个“十”，也即“廿”。对于第一种字形，部分学者认为就是“共”字，“口”代表玉或釜或泛指器具，是“供”的本字，表供奉，后上部讹变为“廿”。另一种看法认为第一种字形并不是“共”字，字形、辞例均不合，“共”的本字就是上方为“廿”，“廿”有众多、共同义，“共”的造字本义即是众手齐举。

战国时期个别字体将上部的两个“十”讹为手形，使整体变为类似四手之形，演变为《说文》古文的写法。小篆承袭从廿廾的写法，隶变后成为“共”。

因初文构形存在争议，本义尚不确定，但可以确定基本义项包括：共同、双手捧举。从共同义引申出公共、一起、总计、连词相当于“和”等义。从双手捧举义引申出拱手、环簇义（后作“拱”），以及供给、供奉义（后作“供”）。

## 龔（龚）

双声字，龍和共都是声符，而“共”又从“廾”声，“龔”和“龏”应是一字之异体，而不应如《说文》分成二字看待。“龏”字产生较早，而“龔”始见于秦文字，应是由“龏”替换声符而来的后起字。

有恭敬和供给两个义项，前者后由“恭”承担，后者后由“供”承担。

***

# 異部

## 異（异）

甲骨文像手持一物往头上戴之形，是“戴”的初文，后来分化成形、音、义皆不同的两个字。甲骨文字形一直到汉代一脉相承，而《说文》小篆讹变甚剧，变为“从廾从畀”，由此产生的解释皆误。

本义是戴，后引申出奇怪、区别、不同等义。

“异”是从廾㠯声的形声字，本义是举、任用，文献中不常用，现代简化字即将“異”简化为“异”。

## 戴

“異”是“戴”的初文，像双手举物于头之形，后“異”产生其他含义，于是加“弋”旁（表音，与異同音）表本义。后“弋”又讹变作“戈”，即是《说文》籀文的字形，后“戈”又变为“𢦏”，成为“戴”字，读音也变为从𢦏声了。

本义是将物体顶在头上，引申指将东西放在身体某个部位上。也引申出抽象的顶着义，如戴罪。又引申指捧举、拥护等义。

***

# 舁部

## 舁

上下各两只手，会共同抬起之意。本义即是共同抬东西。

## 䙲

“遷”的本字。从舁囟声，隶定作“𢍱/䙲”，本义是升高、抬。或额外从邑，“邑”作义符，表示抬着东西搬家，也即迁移义，“邑”后省作“卩”形，成为“䙴”形。后又追加表意偏旁辵，成为“遷”。后世以“遷”为正，“𢍱/䙲”、“䙴”皆废。现代简化作“迁”。

## 與（与）

春秋文字为从舁、牙声，至战国时，或将舁简化为廾，或将声符“牙”简化成“与”形，演变成从舁从与、从廾从与、单写作“与”这三种形态。后世以从舁从与的“與”为正体。新中国简化字采用最简省的“与”字形。

本义是赐予、给予，引申为交往、帮助、伴随、参与等义。进一步引申作名词表朋党义（《说文》以此义作为“與”的本义，与省形的“与”相别，不妥）。又作介词、连词，相当于和。

## 興（兴）

甲骨文字形为四手共同抬起一个器物（早期认为此物是凡，即大盘，但“凡”与此形有明显区别，详见“同”字），会共同用力抬起之意。金文在盘下加口形，或是辅助符号，或是表示抬物时呼喊口号。现代简化字“兴”是草书楷化而来。

本义是一起用力举起，引申为起来、发动、开始、创立、旺盛等义，转作名词表示使人心志兴起旺盛之事，即兴致、兴趣等义。

***

# 𦥑部

## 𦥑

左右两手相向，一说会叉手之意；一说会两手捧物之意，是“匊”的异体。实际用例只作为偏旁，并不单独使用。

## 要

构形不明，金文字形是左右两手中间一类似“目”形的物体，下部是女，演变为《说文》古文的写法，中间构件变为“囟”。汉隶即以此为源，简化上部为“西”后写作“要”。而《说文》小篆从交省的字形来源不明。

本义或说是以两手叉腰之形表示腰，是“腰”的本字。因腰在身体的中部，引申指重要部位、关键、重要、等义。通“邀”有拦截、邀请义，进一步引申出讨要、即将之义。

## 䢅（晨）

甲骨文从𦥑从辰，“辰”是“蜃”的初文，蛤类，用于制作耨类除草农具。以双手持辰会开始劳作之意，古人朝作暮息，用此字表示早晨，同时“辰”兼表音。西周金文或从夕，战国楚简或从日，都是用日、月强调时间属性，均为“䢅”的异体，但所从的“夕”、“日”都置于“辰”之下。而《说文》日部有“曟”字省形作“晨”，此处义为星名。后世的“晨”主要源于“䢅”的后起分化字，逐渐替代了“䢅”，表早晨义。

## 農（农）

甲骨文以手持辰（农具）除草或林木会开荒垦田之意，上部或作艸或作林。西周金文省去下面的手形，上部的艸或林中间增加义符“田”。其中较为原始的从林辰的字形，演变为《说文》古文“辳”（一说“辳”是“䢅”的异体，有争议）；而从林田辰的字形，将“田”讹为“囟”演变为《说文》籀文。而上部从艸的字形后将两个屮讹为手形，变成“𦥑”，“田”讹为“囟”，整个字形成为“䢉”，隶变后上部简化为“曲”，整体写作“農”。现代简化字“农”是部分笔画草书楷化而来。

***

# 爨部

## 爨

完整字形是：上部“𦥑”（两只手）中间类似“同”形（甑类炊器），中间是“冂”（灶门），其下是“林”（两根薪柴），再下是“廾”（两只手捧着的姿势），最下是“火”。整个字描述的是上面手捧炊器、灶台下手添柴烧火的场景，本义即是烧火做饭。后有诸多省体，其中省去“冂”以上的部分即是《说文》籀文之形。后世主流字形则以“爨”和“㸑”为主。

## 釁（衅）

从爨省、从酉、从分，分亦声。本义是用牲血涂在器物裂缝的祭祀形式。有异体字作“衅”，现代简化字采用此字形。

引申指缝隙、间隙（如衅会），由此引申出祸乱、过失、争端等义。

***

# 革部

## 革

最初字形像一张悬挂着的首、身、尾俱全的兽皮，本义是为兽皮去毛的过程，或指去毛后得到的皮。西周、小篆、隶楷字形一脉相承，而《说文》古文的字形是由西周另一种将兽身部的皮繁化的字形讹变而来。

由去毛加工义引申出变革、革除义，由皮革义引申指皮质物品，又特指甲胄，进一步指兵卒。

## 鞣

从革从柔、柔亦声，是“柔”的分化字，“柔”可用作指代使物柔软的工艺，如使木柔软的工艺后分化出“楺”字，使皮革柔软的工艺则作“鞣”。也指柔软的皮革。

## 靼

从革旦声，《说文》古文从革亶声。与“鞣”同义。

## 鞏（巩）

从革巩声，巩兼表义，本义是用皮绳捆扎，使物坚固。其中声符“巩”是从丮工声，本义是抱，或说是“拱抱”之“拱”的本字。

由本义引申出使坚固义，即巩固。现代简化字以“巩”代“鞏”。

## 鞵（鞋）

从革奚声，“鞋”是“鞵”的晚出俗字。指用皮革制成的鞋。

## 鞠

从革匊声，古代一种游戏用的皮球，玩法以脚踢为主，用毛填充皮囊制成。战国时期即有“蹋鞠”，后世称“蹴鞠”。

## 靶

从革巴声，本义是革制的马缰绳。语源是“把”，凡以手把持的皮革制物品多称“靶”，马缰绳即是驾车人手把握之物，登车人手把着借力的皮绳也称“靶”，弓身正中、手握持的地方也称“靶”，又泛指器物的把柄（可认为是通“把”）。后用于指代射箭目标物（古称射侯），其引申逻辑或许是将箭靶比喻成控制箭方向的“缰绳”，仅猜测。

## 靳

从革斤声，古代车上夹辕的两匹马当胸的皮革，后称“当膺”、“当胸”，也代指辕马（又称服马，其外侧两匹马称骖），“如骖之靳”即比喻一方追随另一方。因当胸的功能属性，“靳”又引申出坚固、吝惜义。

## 鞌（鞍）

从革从安、安亦声，异构作“鞍”，本义即是马鞍。

## 勒

从革力声，本义指带嚼口的马笼头，与辔（缰绳）相连，御者通过牵拉辔、控制勒以驾驭马。勒由本义引申出统御、约束、强制、用力拉、雕刻等义。

## 鞭

甲骨文有“从又持策，像手持鞭形”的字，后变为从攴、丙声，隶定作“㪅”，隶变后作“更”，有人认为“更”即是“鞭”的初文。后演变出诸多异体，如[卞+又]、𠓥等，其中“𠓥”是由从攴免声讹变而来，又有或体增“人”旁，隶变作“便”，像以鞭抽人之背。后“便”字用来表安之义，于是又造从革的“鞭”字表本义。

## 鞅

从革央声，一种驾具，套在牛、马颈上的皮带。

## 鞘

从革肖声，即剑套，此字产生较晚，不早于汉代。

## 鞾（靴）

从革華声，异体作“靴”，带靿的鞋。

***

# 鬲部

## 鬲

一种炊具的象形，三足、口圆中空，或增加义符“瓦”作“䰛”，或将“䰛”声符替换为“厤”作“㽁”。

## 𩰫（锅）

炊具“锅”的古字，最初是陶制，后铁制，改作“锅”。

## 鬴（釜）

炊具，有从鬲甫声、从金父声、从缶父声三种字形，其中甫、父为同音声符，鬲、金、缶是不同材质同表炊具义。其中从金父声的写法成为后世主流，省略金顶部的笔画后作“釜”。

## 融

《说文》籀文从鬲蟲声，小篆从鬲蟲省声。本义是炊气上升，引申指暖和、和美、融化、融合、流通等义。

***

# 䰜部

## 䰜

像鬲（炊具）上热气冒出之形，两条表示热气的曲线后隶变为“弓”形，与“鬲”本是一字。

## 鬻

是“粥”的本字。初文为“𩱱”，从䰜毓声。后将声符“毓”替换为义符“米”，变为从䰜从米，作“鬻”，会米在鬲中热气腾腾之意，本义为稀饭。汉代时出现省形异体字“粥”。而“鬻”被借用作“𧶠”字，表卖义。鬻与粥逐渐分化音、义皆不同的两个字。

## 𩱧（羹）

从䰜从羔，本义指用肉类或蔬菜等制成的带浓汁的食物。䰜、鬲本是一字，故可写作从鬲从羔，后下部的“鬲”省形讹变作“美”（可参考庚儿鼎中䰞/煮字），写作“羹”。《说文》或体、小篆释为“从美”，有误。

## 𩱓（饵）

从䰜耳声，或体从食耳声，现代简化字“饵”是后者类推简化而来。本义是米捣碎成粉做成的糕饼。又指钓鱼用的鱼食，进一步引申指诱饵。

## 䰞（煮）

从䰜者声，䰜与鬲同，或作从鬲者声。或体从火者声，隶变后“火”写作“灬”，整体写作“煮”。基本义古今一致，都是把东西放入有水的炊具中加热。

***

# 爪部

## 爪

像向下翻覆的手爪形，本义指鸟兽的脚指，也指鸟兽或人的指甲，与“㕚”字互通。作义符时通常写作“爫”。

## 孚

从爪子，会抓获小孩之意，是“俘”的本字，本义即是俘获。《说文》释为“卵孚”，即认为是孵化之义，徐锴进一步解释说“鳥之孚卵皆如其期，不失信也。鳥袌恆以爪反覆其卵也。”但与甲骨文、金文的写法用法皆不合。“孵化”义和“信”义都是后起的义项。

俘获的本义暗含获得的意味，后引申特指获得信任，引申出使信服、信任等义。

## 爲（为）

从爪象，甲骨文像一只手牵着一头象，会劳作意。远古时中原地区气候温暖，象是常见的被驯服用于劳作的畜类。战国时各地文字变形繁多，小篆承袭春秋、战国秦文字的主流写法，还略能看出大象的形状，隶变后彻底失去象形功能。《说文》训为“母猴”，大谬。《说文》古文的写法应是战国时省略象身的写法的进一步讹变结果。现代简体字是草书楷化而来。

此字十分古老，使用频率极高，引申义众多。本义是作、做。引申出诸多动词含义，如治理、使用、变成、充当、是等。又作名词表作为、才干等。又作介词表示被、为了、向等。又作连词表示和、就、如果、或等。又作助词表疑问等。

***

# 丮部

## 丮

甲骨文、金文都像一个跪着的人抱拱双手、有所捧持之形，春秋以后多作为偏旁，字形逐渐简化，作为偏旁时隶定后多作“丸”或“凡”。

## 埶（艺）

商代甲骨文、金文像跪着的人双手捧持禾苗或树苗之形，本义是栽种。西周金文在“木”下加“土”，上木下土的部分后讹变为“坴”。至小篆已是从坴、丮之形，隶变后作“埶”，后又在下方追加声符“云”表声，作“㙯”。因讹变得看不出种植含义，于是又再追加义符艸作“藝”。后被简化为从艸乙声的“艺”。另外西周金文和战国楚简中有部分字形在丮下别有“女”旁，应是“止”（脚趾）形上移讹变而成，后世不从。

本义是种植，引申指技艺、本领，进一步引申指标准、艺术等。

## 孰

从亯从丮，“亯”、“亨”、“享”本是一字，指祭祀祖先的宗庙，多指进献食物，常用作“烹”，“烹”是“亨”加义符火而成的后起分化字。从亯从丮的字即是熟饪之义，是“熟”的本字。小篆作𦏧，应是晚出的字形，《说文》认为从𦎫（chún）声，有误。汉隶承袭战国秦文字，从享从丮，“丮”隶定为“丸”，整个字形变为“孰”。“孰”字后多用于引申义，于是再造从火的“熟”字表本义。

## 巩

从丮工声，本义是抱。“丮”疑是“巩”的初文，不确定。或体“㧬”是累加形旁“手”而来。或说“巩”与“拱”本一字，但其意义略有差异，“丮”强调合抱捧持，“廾”只是双臂抬起，但作表意偏旁时“丮”、“廾”可互通。现代将“巩”作为“鞏”的简化字，表鞏固义，其“抱”的本义已经消失。

***

# 鬥部

## 鬥（斗）

甲骨文像两个披头散发的人互相搏斗之形，本义即是搏斗。小篆讹为两个“丮”左右相对，《说文》：“兩士相對，兵杖在後”，对字形解释有误。因与“門”形近易混，“鬥”又加声符分化出“鬭”。现代简化字并入升斗的“斗”。

## 鬭（斗）

从鬥斲声，是“鬥”为区分于“門”而产生的追加声符的分化字，与“鬥”表义无别，《说文》将其分为两个不同的字，不确。声符或替换为\\[豆+斤]、\\[豆+寸]等，如“鬪”。汉代或将形旁讹为“門”。现代简化字统一并入“斗”。

## 鬩（阋）

从鬥从兒、兒亦声，本义是不和、争吵。所从的“鬥”旁很早就有讹为“門”的形体，故有讹体“䦧”，现代简化字“阋”即是基于讹体简化而来。“兄弟阋于墙”即是用本义。

## 鬧（闹）

战国文字和汉初帛书外部为“門”，内部类似“市”之形，构形不明。《说文》新附字形为“从市鬥”，会市中争斗吵闹之意。門、鬥孰为本孰为讹以及内部构件是否为“市”，均无定论。

基本义即是不静、嘈杂、打闹等。引申指闹事、热闹、遭受等。

***

# 又部

## 又

右手之象形，古时多用作左右之“右”、有无之“有”、佑助之“佑”等，以“又”作形符的字多与手有关。

## 右

最初“左”、“右”仅靠方向区别，易混，后加区别符号以作区分，加“口”符的为“右”，加“工”符的为“左”，其中的“又”不再区分方向。“右”除指代方向，又常用于表示其本字“又”所承载的“佑助”义，后再分化出从人的“佑”字表此义，分工更清晰。

## 厷

从又，另一部分为圆圈形或三角形。该部分《说文》认为是“厷”的古文，形似“厶”，无据。或说是“宫”字初文的省形，也是“公”字所从的声旁。

本义是大臂，后造从肉的“肱”字表此义，“厷”则仅作偏旁不再单独使用。

## 叉

字形为又（手）内加一点，《说文》释为手指相错，段玉裁释为手指与物相错，即叉取义。引申指歧头的东西，即叉状物。目前未见早期字形，叉状物和叉取哪个是本义暂不确定。

## 㕚

“㕚”、“爪”本一字，表鸟兽的脚指或人的手爪，“㕚”更突出指端的利甲。小篆的“㕚”已讹变，将指甲与手分离。“㕚”多特指指甲。

## 父

从又，以手举一物之形。或说所举之物是杖，会行使责打教育权力的家长之意，与“攴”同源；或说所举之物是斧子，会以手持斧从事劳作的家庭成员之意，与“斧”同源。构形尚无定论，但所指意象明确，就是父亲。

## 叜（叟）

甲骨文字形为手持火把在屋中，是“搜”的本字，后借为老叟的叟，久借不还，就又造从手的“搜”字表本义。古隶演变为汉隶时，上半部发生讹变，字形变为“叟”。

## 燮

甲骨文上面是三个火，下面是又（手），中间或说是火炬形，或说是“言”字。从金文开始三个火省作两个火，中间构件几经讹变，至小篆时变为“言”，字形固定为“燮”。另有将“言”替换为“辛”、“屰”的字形，与“燮”皆是一字之讹形，不应区分看待。

本义是调和、谐和。

## 曼

甲骨文和商代金文像两手张目之形，西周金文在上半部又加“冃”作声符，战国楚简则省略了上面的手，小篆从之，形旁中的“目”与声符“冃”合并作“冒”，《说文》即认为是“从又冒声”，但“冃”本就是“冒”的初文，且这样割裂了形旁的构形本义，应当看作从“冃”声。

本义是双手张目，引申指牵拉、长，进一步引申指曼延、声音长、曼妙等。

## 夬

甲骨文像右手套着扳指之形，指拉弦射箭时套在拇指上用来钩弦的器物。至小篆上面的扳指形已经大幅讹变，字形成为“叏”，《说文》据此解释为“象決形”，有误。隶变后上面的一竖与下面的又起笔相连，作“夬”。

## 尹

像以手持物之形，所持之物一说是权杖，一说是笔。若理解为权杖，则是表示管理民众之官，若理解为笔，则是执笔记事之人。总之“尹”字在商代已经作为官名使用。早期尹、君混用，至西周金文二字含义基本完成分化。

作动词表治理，作名词表治理的人也即官长，这两种义项动、名相因，均可视为本义。截至清朝，“尹”是贯穿中国历史的官名，但历代的具体职权各不相同。

## 及

从人从又，会追上前人、以手逮之之意。秦汉文字直承商周写法，一脉相承，而六国文字则迥异繁复。

本义是追赶、抓住，引申出赶上、到达、比得上、连累、与等义。

## 秉

从又持禾，古今字形变化不大。本义是禾束，由其字形又有握持、执持义，由执持义又引申出执掌、保持、遵循等义。

## 反

从又、厂，通常理解为会手攀山崖之意，即“扳”的本字，与“攀”同源。后产生“翻覆”的引申义，于是再造从手的“扳”字表本义。《说文》释为“覆也”，应该已经是引申义。

本义已消失，后世常用义均是围绕“翻覆”这一义项而来。由翻覆引申出掉转、返回、归还、重复、报复、违反、背叛、反省、类推、背面等义。

## 𠬝

甲骨文左边是一个跪着的人，右边是又（手），会以手按人使其跪下之意，本义是降服，是“服”的本字。甲骨文中多用作名词，表示俘获的敌人。西周以后基本只作声旁，不单独使用。

而“服”字最早产生于甲骨文，左侧义符或说是舟，或说是凡（盘）。释为从舟则是表示让屈服之人跟自己上船，释为从凡则是表示让人奉盘服侍，但形状确实是“凡”形。西周晚期左侧义符已明确讹变为“舟”，隶变后又变成“月”。

## 叔

构形说法如下：

1.  从又持弋掘土收芋之形，所持的“弋”像下部尖锐上有柄的挖掘器具，下面的点表示土或芋，由收芋引申出拾取义。
2.  左部“尗”为豆子的象形，上半部是枝茎和豆荚，下面的点是散落的豆粒，从又表示用手拾取豆子。本义即是拾取。

总之“拾取”是“叔”字的一个基本义。后被借指叔伯之叔。若“拾取豆粒”一说为真，则“叔”字本与豆子有关，表豆类的“菽”字或是用来表本义的后起字。

## 𠬸

从回从又，“回”是水流回旋的水渊，“又”为手，会入水有所取之意，是“没”的本字，本义是沉没。至秦隶有的字形讹变得像“殳”字，此类字形楷化后上半部又变成“刀”。“没”是追加形旁而来的分化字表本义，而𠬸本字则不再单独使用，只用作偏旁存在于“殁”等字中，

## 取

从又从耳，古今字形变化不大。古代战争杀死敌人割下左耳记功，“取”字本义即是获取、夺取。引申出拿、得到、取出、挑选、采用等义。

## 彗

甲骨文像扫帚形，（曾一度被释为“羽”字），本义即是扫帚。小篆将其讹为“甡”形，并下方加义符“又”，表示手持。隶变后作“彗”。战国时另有从竹的写法，演变为《说文》或体“篲”。《说文》古文从竹習声，当是后起字，“習”字本就从“彗”声，旧误以为从“羽”。从竹習声的字当是繁化后的结果。

## 叚

构形不明，金文为上下两只手，左侧为“厂”下两横。一说是两手表示相付予，从石省，表“借”义；一说是像从山崖下取石，为“瑕”的本字，尚无定论。

## 友

从二又，两手相并，表示相互交好、友好。两手朝向同一侧，与“廾”字相别。小篆改为上下分布，隶变后作“友”。西周金文另有字形在下方加羡符“口”，口内又或再加饰笔横，至战国时下部讹为“自（白）”，后上部两个“又”讹为“彗”，形成《说文》古文的“習”形写法，此一脉字形是累加讹变的结果。

本义即是朋友，引申指相好、友善、结交等。

## 度

从又石声。《说文》以为从“庶”省声，其实“庶”本就从“石”声，秦文字习惯将“石”写作庶省形。本义是长短计量标准，“度量衡”即用本义。引申指程度、法度、测量、推测、谋划、胸怀等。

***

# 𠂇部

## 𠂇

左手之象形，“左”的初文。甲骨文正反无别，“𠂇”、“又”互通，但二字并用时，则不混用，以朝向做区分。后为方便区分，增加区别符号“工”作“左”，与加区别符号“口”构成的“右”相对，不再以手的朝向做区分。

本义是左手，或泛指手，引申指左方。又引申指旁侧、辅助，后分化出“佐”专表辅助义。旁侧义后引申出偏斜、相违之义。

## 卑

甲骨文从又持一“甲”形物体，所持之物或说是酒器，或说是锤，不论是为人倒酒还是干体力活，都是下等人所为，故有卑贱义。西周时器柄衍出一横，后诸多讹变，或省略器柄，或将“又”讹为“寸”、“尹”等，或“甲”上部出头。古文字𠂇、又正反无别，下部或有从𠂇者。《说文》小篆整理为从𠂇甲，符合原始字形。隶变楷化后作“卑”。

本义是卑贱、卑下，引申指微小、弱小、位置低、轻视等义。

***

# 史部

## 史

吏、史、使、事为一字之分化，最初为手持一物之形，详见“吏”字。殷商时此字同时用作“出使”、“事情”、“记事者”等义。后分化出的“史”字主要承担记事者这一义项，指记录国家大事及负责卜筮、星历的官员，由由记事官员引申出历史义，进一步引申指史书。

## 事

吏、史、使、事为一字之分化，最初为手持一物之形，详见“吏”、“史”字。西周时，由“史”字分化出“事”字，所持的“中”形物上端分叉，《说文》认为“从史、之省声”并非其本源。隶变后作“事”。此分化字专指“治事”、“从事”义，引申指事情、事业、职事、任职、侍奉等义。

***

# 支部

## 支

战国文字有“从又从竹”和“从又从半竹”两种形体。从竹的写法即《说文》古文字形，又（手）在竹上下两半的中间。小篆承袭从半竹的写法，隶变后上部拉直笔画，作“支”。

手持半竹或手从中持竹之一半，本义即是指脱离竹茎的竹枝。引申指植物的枝杈，此义后作“枝”。又引申指人的肢体，此义后作“肢”。又引申出旁支、分支等义。因分叉物有支撑功能，引申出支撑义，由此进一步引申出阻塞、抗拒、应付、打发等义。

***

# 𦘒部

## 𦘒

从又持巾，即“帇”，隶变作“𦘒”。会擦拭洁净之意，引申指手灵巧。

## 肄

甲骨文从又从㣇、㣇亦声，“㣇”为长毛兽畜，“又”为手，会刷洗兽畜意。西周金文于手下增加义符“巾”，与“又”合并作“帇”，但多讹作“隶”、“聿”。小篆作从𦘒㣇声。另外战国时出现将左侧㣇旁替换为\\[匕+矢]（yí）的写法，隶变后成为“肄”。

本义是刷洗兽畜，常用义是学习、练习（引申逻辑不明）。“肄业”一词本指修习学业，现代特指学了一部分课程但未毕业的状态。

## 肅（肃）

从𦘒从𣶒（yuān，渊的本字，指渊潭），会临渊擦拭战战兢兢之意，本义是恭敬戒惧。《说文》古文将下部替换为心、卪（跪着的人），会人跪着擦拭、心中敬惧之意，表意相同。小篆沿袭早期字形，隶变后作“肅”，现代简化字作“肃”。

由本义引申出庄重、威严、严峻、幽静、肃杀、清除等义。

***

# 聿部

## 聿

从又（手）持毛笔形，会笔之意，是“筆”的初文，本义即是笔。至春秋时，下部加一横为饰笔，小篆从之，隶变后作“聿”。后被借作语气词，于是另造“筆”字表本义，“筆”字约始于秦。

## 筆（笔）

“聿”的分化字，因“聿”被借作语气词，分化出从竹的“筆”字表书写工具本义。详见“聿”字。至北齐时出现从竹从毛的“笔”字，为现代简体字所采用。

## 書（书）

从聿者声，最初以“者”表“書”义，后分化出专字“書”表此义。形旁“聿”是筆的初文，表示与笔有关。隶变后省略部分笔画作“書”。现代简化字“书”是草书楷化而来。

本义是书写、记录。引申指文字、书法、书籍、文件等，古时又特指《尚书》。

***

# 畫部

## 畫（画）

甲骨文从聿从乂，像手持笔以规画，或省手，或省笔毫。西周时下部增加田地形的义符“周”，突出划分田界义。或省去“乂”，或将“周”省作“田”。小篆作“畵”，《说文》解释为“象田四界”，所谓四界，左右两边其实是“乂”讹变而来，下边的横是饰笔，上边的横是“聿”的底横，本质也是饰笔。隶变后省略左右两侧的竖，作“畫”。又有省去上半部、恢复两侧竖画的写法，即“画”，现代简化字即采用此字形。

本义划分土地，泛指用笔描绘图形，引申指描绘出的图形，进一步引申指汉字的一笔，即笔画。也指用手或物比划的动作。划分界限有规划含义，故又引申指规划、策划。其中除绘画外的绝大多数义项后分化出专字“劃”表示，简化字作“划”。

## 晝（昼）

甲骨文和金文均为从日、聿声。至《说文》籀文，在日的左右两侧各加一条线，表示光芒。至小篆，底部再加一横作饰笔。隶变后省去左右两侧的指事线，作“晝”。现代简化字“昼”源于草书楷化，最早见于元抄本。

义为白天。

***

# 隶部

## 隶

“逮”的初文，音dài。春秋文字从又（手）持牛尾形，会追上、逮住义。后牛尾两侧的毛与主体脱离，隶变后作“隶”。其本义被后起的从辵的“逮”字继承。现代作为“隸”、“隷”的简化字。

## 隸

从隶柰声，形旁“隶”为追赶牲畜之义，放牧牛马者多为仆役，故“隸”字本义是奴隶、被役使的人。引申指差役、附属、跟随等义。书法中的“隸书”一词，一说是源于狱隶书写文书所用的书体，一说是取附属义，表示其作为篆书之外的辅助性书体。现代简化字并入“隶”。

## 隷

从隶祟声，“隸”的异体字，隶变后“出”讹为“士”，字形作“隷”。现代简化字并入“隶”。

***

# 臤部

## 臤

从又从臣、臣亦声。“臣”是竖目形，表示因恭顺而俯首的战俘、奴仆，“又”为手，合起来会以手牵引奴仆之意，本义即是牵引，是“掔”的本字，此义后多借“牵”表示。同时又用作坚固、贤义，后分化出“堅”、“賢”二字。

## 緊（紧）

从糸从臤、臤亦声，“糸”为束丝之象形，“臤”有坚固义，合起来表示缠丝在拉力作用下呈现出的紧张状态。引申指强固、急迫、重要、紧缩等义。现代简化字作“紧”。

## 堅（坚）

从土从臤、臤亦声，“臤”有坚固义，形旁土表示与土有关。本义即是硬，引申指坚固、坚固的事物、坚强、稳定等义。现代简化字作“坚”。

## 豎（竖）

早期多从臣豆声，由于臣与臤义近，战国时也出现从臤豆声的写法，形旁臤中的“又”或作“攴”，又讹为“殳”，即《说文》籀文的写法“䝂”。小篆采用从臤豆声的字形，作“豎”。隶变时出现一个无来源的俗字“竪”，或是以“立”会竖立意。后此种字形成为主流。现代简化字作“竖”。

本义指奴仆，引申指宫中小臣、童子、对人的蔑称，假借指竖立（或是根据奴仆、小臣侍立的样子引申而来，仅猜测）。

***

# 臣部

## 臣

竖目的象形，表示因恭顺而俯首的战俘、奴仆。本义即是仆隶，引申指臣子、官吏，又指臣服、使臣服等。

## 臧

甲骨文从戈刺目，本义为由俘虏沦为奴隶的人。至籀文加声旁“爿”（床的象形），下加饰笔。爿与戈合为“戕”字，义为杀害，故“臧”可看作会意兼形声字。西周时又有从口戕声的字形。至战国时主要有三种写法：从臣戕声、从臣爿声、从口戕声。小篆采用从臣戕声的写法，隶变后作“臧”。

因奴仆多顺从主人，由此引申出善、好、成功义，引申指称赞。

***

# 殳部

## 殳

甲骨文为手持一锤状兵器之形。本义即是一种用于撞击的兵器，出土实物显示为头部形似三棱矛、兼具锤头的长柄兵器。至金文，上部已讹变得看不出兵器形状，至小篆进一步变形，隶变后楷书作“殳”。后又造分化字“杸”表本义。

## 毆（殴）

西周金文为从攴區声，至战国时出现从殳區声的写法，攴、殳作形符可互通。小篆采用后者，隶变后楷书作“毆”。

本义是打击、捶击，也通“驅”表驱赶。

## 殿

从殳，声符“𡱂”为“臀”的本字。𡱂的演变详见“𡱂”字，此字在“殿”字中作声符。

《说文》言“殿”本义为“击声”，但文献中不见用例。假借作宫殿义。又有最后一等、后军、殿后等义，此系列义项或许源于其声符臀的隐含义，仅猜测。

## 段

西周金文从殳从厂、厂亦声，厂下有两点，合起来会捶击山体掉落石块之意。战国时“厂”上或再加饰笔，所从的“殳”或作“攴”，殳、攴形旁互通。《说文》认为“从殳、耑省声”有误。汉隶或从攴，主流从殳，楷书作“段”。

本义是敲击、捶打，此义后作“锻”。又指在石上捶治干肉，此义后作“腶”。与断同音又假借为断，有截断、分开义，由此引申指段落、段位、截断物体的量词、事物的一部分等。

## 毅

从殳豙声。声符“豙”从豕辛，小篆将“辛”末笔的横与“豕”首笔的横合并，隶变后进一步简省作“豙”。“豙”本义为猪发怒毛竖起，此处兼有表义意味。

本义指勇决果断，引申指勇猛、严酷、盛怒等。

## 役

甲骨文从人从殳、殳亦声，会持械击打、驱使人之意，本义是役使。战国时“殳”或作“攴”，形符互通。此形一直延续到楷书，作“伇”。《说文》小篆则将人旁改为彳，隶变后作“役”。后世“伇”、“役”并行，现代以“役”为正。

由役使本义引申指仆役、劳役、差人、职事、服役戍边、士兵、战役等。

***

# 殺部

## 殺

甲骨文从戈截断人散发，表示杀戮。西周时在散发下加人，戈单独分离出来，戈又或作攴。《说文》籀文从双乂，表切割义，亦表音。秦系文字省为单乂，散发人的部分持续讹变。所从的“攴”或作“殳”，形符互通。小篆隶变后作“殺”。《说文》古文省略右边的义符，作“杀”，现代简化字即采用此字形。

本义为杀戮、处死，引申指征伐、攻克、灭除、削减、收束、衰微、停止等义，又作副词表程度深。后出现异体俗字“煞”，是“殺”的讹形，本与“殺”为一字，后逐渐分化，承担了其部分含义如收束、停止、程度深等，同时又产生凶神恶鬼义，此义多不用“殺”。

## 弑

从殺省、式声，本义为臣杀君、子杀亲、下杀上，后也泛指杀。

***

# 寸部

## 寸

从又从一，“又”是手形，“一”是指事符号，指手腕下一寸的动脉位置，即寸口。引申作长度单位。因寸在长度单位中是较小者，所以引申出短、小义。

## 寺

甲骨文从又从之、之亦声，“又”为手，“之”表示止（脚）到达某地，合起来会手之所往之意，本义为持取，是“持”的本字。春秋时“又”或作“寸”，形符互通。战国时又或加口。小篆为从寸之声（之亦表义）。

古时可用作持取、季节、侍从、等待、国名、痔疮、依仗诸义，后分别分化出持、時、侍、待、邿、痔、恃字。另外也指官署、朝廷，当是假借义。寺庙义由官署义引申而来。

## 將（将）

战国文字从又（手）持肉于爿（音chuáng，床的古字，表桌案类），爿亦声，表示将肉放置在桌案上面，本义是持取。古初借𨟻 、𤖕（即“醬”）字为“將”，后分化出此字。战国时“又”旁开始作“寸”，形符互通。现代简化字作“将”。

由持取义引申出扶助、养护、顺从等义，假借作副词表将要、将近，以上义读jiāng。又引申指统率、统率军队的人，读jiàng，此义古多假“𨟻”表示。

## 專（专）

甲骨文从又从叀、叀亦声。“又”为手，“叀”为缠丝用的纺砖，会以手往纺砖上缠丝之意，这个动作产生了“转动”、“集中”两个原始义项，前者分化出专字“轉”表示，且摶、團、傳等字均含有转动的属性；后者由“專”本字承载，引申出专一、专注、专长、专横、专门等义。

至战国时所从的“又”或作“寸”，为形符互换，后成为主流。隶变后作“專”，而“专”源于草书楷化，最早见于清初，为现代简化字所采用。

## 尃

从又从甫、甫亦声，“又”为手，“甫”像田上长菜之形，是“圃”的初文，合起来会以手布设花草之意。战国时开始出现“寸”旁，并逐渐替代“又”旁。隶变后楷书作“尃”。

本义指布设、布散，引申指颁布、辅助、归顺、给人财物、普遍，以上义后世分别作敷、輔、傅、賻、博。

## 導（导）

从寸从道、道亦声，西周时从“道”字分化而来，专表导引义，详见“道”字。现代简化字作“导”。

由导引义引申指疏导、表达、传导等。

***

# 皮部

## 皮

西周金文从又（手）剥取兽皮，后世兽躯干和皮的部分形变较大，至小篆已失去象形功能，所从的“又”在战国时或作“寸”，但未成主流。至小篆仍从又。汉隶字形更接近于战国秦文字，而非小篆，作“皮”。

本义既指剥皮的动作，也指剥下的兽皮。由兽皮义引申指一切生物体表组织，进一步引申指一切物体的表层或外层包裹的部分，又引申指肤浅，由生物皮的特性引申出有韧性、结实、淘气等义。

## 皰（疱）

从皮包声，本义指面疮，引申指皮肤上的泡状疙瘩。异体作“疱”，现代简化字以“疱”为正。

## 皸（皲）

从皮軍声，本义是皮肤因干燥或寒冷而开裂，引申泛指物体表面的裂纹。先秦借“龟”字表示，后世表皲裂义时，“龟”、“皸”并存。现代简化字作“皲”。

## 皴

从皮夋声，指皮肤因皲裂而粗糙，引申指物体打皱，也指皮肤泥垢和脱落的表皮。

***

# 攴部

## 攴

甲骨文从又持一歧头杖形器具，会击打之意，本义即是击打、敲击。演变至楷书有攴、攵两种字形，作偏旁时皆有使用，作单字时以攴为正体。

## 啓（启）

见“启”字。

## 徹（彻）

甲骨文从又从鬲、鬲亦声，手持炊具，表示吃过饭后将炊具撤除。战国时改“又”为“攴”，为形符互通，有的字形额外加“彳”旁，强调动作属性，《说文》古文即是𢖉。又有将“鬲”讹为“育”的，即是小篆写法，隶变后楷书作“徹”。

本义为撤去、撤除，此义后用“撤”字。由于将东西撤除后即整洁空荡，引申出通透、通达义，进而引申为到、终了、尽、彻底等义。

## 肇

甲骨文从戈从户，会以兵器敲门之意。另有从攴从户的写法，戈、攴形体互通，此“\\[户+攴]”字与“啓”字不同，“啓”字在战国之前均是从“又”而非“攴”。至西周时又叠加声符“聿”。战国时出现省略“戈”或“攴”的写法，作“肁”。后世“肈”、“肇”、“肁”并存，以“肇”为正体。

本义是以兵器敲开门，由开门引申出开始义，由兵器暴力开门引申出引起事端、招惹是非义。

## 敏

甲骨文从又从每、每亦声。早期以“每”表“敏”，“每”是头戴笄饰的成年女子象形，其中一个引申义项即是敏捷，或许是取年长女性梳理头发相对熟练之意，后造从又（手）的字专表此义。战国时以“攴”代“又”，形符互通。隶变后楷书作“敏”。

本义为敏捷，引申指聪明、勤勉、恭敬等义。

## 敃

西周金文从又从民、民亦声，“又”为手，“民”为锐器刺目的象形，既是“盲”的本字，也指被刺瞎一目的奴隶。战国时以“攴”代“又”。“敃”所会之意暂不确定，本义是强悍，引申指勉力、努力。

## 敄

从攴矛声，本义是勉力。

## 整

从敕从正、正亦声，“敕”本义是训诫，与“正”合会训诫以持正之意。最初以“正”为“整”，后造专字“整”表整饬义。

本义是整齐、规整，引申指整理、整顿、完整等义。

## 效

从攴交声，本义为训诫，初以“交”表“效”，后造专字“效”。隶变后有异体作“効”。

由训诫义引申为效法、检验、效果等义。

## 故

从攴古声，本义为原因，初以“古”表“故”，后造专字“故”。

由原因义引申作连词表所以，也引申出故旧、以往义。

## 政

从攴从正、正亦声，初文为“正”，后造“政”继承“正”的征伐义及由此引申出的政务义。征伐义后主要由“征”字表示，“政”则专表政事义。由此又引申出政令、官吏、主持政事等义。

## 敷

战国文字从攴从尃、尃亦声，是“尃”分化出的专用字，继承“尃”的布施、颁布义。后有将“寸”写作“方”的俗字“敷”，无理据，但使用广泛，被立为正体。

引申出铺展、涂抹、足够等义。

## 數（数）

从攴婁声，本义为计算、查点，初以“婁”表“數”，后造专字“數”。引申指列举、比较后选出等义，以上义读shǔ。又作名词表示数目、规律、策略等，也表不确定的约数，以上义读shù。又引申表频繁、多次、疾速等，读shuò。

## 孜

从攴子声，本义是勤勉、努力不懈的样子。引申指高兴的样子。

## 敞

从攴尚声，或说“尚”有使显露义，在此兼表义。本义是宽敞，引申指敞开、露出。

## 改

从攴己声，本义为变更。初借“攺”表示，即表驱邪佩物的“攺”与表变更的“攺”是同形字关系，战国时开始用声旁“己”替换“巳”，正式分离出“改”字表变更义。

又变更义引申出更换、纠正、修订等义。

## 變（变）

从攴䜌声，或从又，小篆继承从攴的字形，隶变后作“變”。现代简化字“变”是由从又的字形简化而来。

本义是改变，引申指非正常的变化。

## 更

甲骨文为从攴丙声，即“㪅”。西周时出现从二丙的写法，或将“攴”替换为“辵”。战国时出现从又丙声的字形，小篆为从攴丙声，但隶变后从又，进一步变形成“更”。

初始含义有几种说法：

1.  “㪅”是“鞭”的初文，是由从又持策的甲骨文演变而来，后加人旁作“便”强调用鞭打人，后“便”用于引申义，才又造“鞭”字表本义。
2.  由从二丙的字形表示古代前后相续的车制，本义为相继。引申出更替义，进一步引申出更改义。
3.  本义是更改，《说文》即是此种说法。

不论如何，实际用例中的基本义项包括改变、相继、轮替。由轮替义引申指夜间计时单位。引申作副词表重复，相当于再，又表程度加深。

## 敕

春秋至战国均作从攴柬声，小篆作从攴束声，应是形近讹变。另有从力束声的“勅”字，最早见于西周，可视为“敕”的异体。隶变时常借“勑”表“敕”，“勑”本义为慰劳、慰勉，与“敕”形近义远，可视为通假字。现代以“敕”为正字。

本义为告诫，引申指整饬、约束自己，由告诫义又引申特指皇帝下达的命令。

## 斂（敛）

从攴僉声，本义是收取、聚合，初以“僉”表“斂”，后造专字“斂”。现代简化字作“敛”。

由本义引申指征收、退缩、停止、约束、整肃等义。

## 敶（陈）

西周时有从阜東声（陳）、从阜从攴東声（敶）两种字形，春秋时或在“東”下加“土”，或可视为将声符“東”替换为“重”。《说文》厘定为“敶”，但将声符“東”视为“从木申声”，不妥。

“敶”与“陳”的关系有两种说法：

1.  本字为“陳”，初始义为陈列，后被用作国名，于是后起“敶”字表本义。
2.  本是两字，“陳”本义是国名，“敶”本义是陈列，后陈列义多假借“陳”字表示。

不论哪种说法正确，后世“敶”字已淘汰，国名和陈列义都由“陳”字承担。现代简化字作“陈”。由陈列义又引申指军队行列，也即军阵，此义后演化出专字“陣”。

## 陣（阵）

初文为“敶”，春秋战国时有异体从阜从土東声，专表军阵义的字在战国时“東”讹为“車”（双車），写作\\[阜+双車+土]，后省作从阜从車，楷化为“陣”，现代简化字作“阵”。

此字并不是从阜从車，而是由“敶”/“陳”讹变分化而来。“陣”也曾偶尔用以表“陳”，如战国燕玺姓氏陈即作“陣”。

由军队行列、阵列义引申出阵地、战斗、事物经过一段时间等义。

## 敵（敌）

从攴啻声，本义为敌人，初以“啻”表“敵”，最晚于战国时分化出专字“敵”。隶变时“啻”定作“啇”，形旁“攴”或讹作“殳”、“戈”，楷书作“敵”。现代简化字作“敌”。

由本义引申指敌对的、对抗、相当的等义。

## 救

从攴求声，本义为阻止、消除，初以“求”表“救”，后造专字“救”。“救火”、“救灾”等词即是用本义，后引申出援助、拯救义。

## 赦

古时初以“亦”表赦免义，西周金文分化出从攴的𢼜字专表此义，战国时出现以“赤”代“亦”的写法，属于声符替换，小篆以从攴赤声为正体，并收从攴亦声的字形。隶变后作“赦”。

本义即宽宥他人罪过。

## 攸

甲骨文从人从攴，作手持械击人之状。西周时，或在人与攴之间增加一竖笔，或在人与攴之间增加一点/两点/三点。后者的写法或将诸点连接在“人”的末笔上，或与“人”分离。之后逐渐演变为两种主流字形：一种是从攴从水，即“㳊”；另一种是从攴从人、中间有一竖笔，即“攸”。

《说文》释本义为“行水”，即流水，疑是引申义。引申指居处。由水流貌引申出长远、迅疾、从容等义，与“悠”通。又作助词，相当于所，如“性命攸关”。

## 敦

古文初以𦎫（chún）为敦，表挞伐义（禹鼎例）。战国时分化出加攴旁的𣀦字表此义，小篆即为此形。战国时左侧部分已发生简化，隶变后“亯”和“羊”合作“享”形，整字写作“敦”。

本义为挞伐、逼迫。《说文》认为本义是怒和诋责，应是引申义。由逼迫义，引申出督促、劝导、治理、推崇、厚实、厚道等义，以上义读dūn。又指一种半球形食器，读duì。

## 敗（败）

甲骨文有三种字形：一是从攴从鼎，“鼎”后讹作“貝”；二是从攴从貝；三是从手持貝与从手持貝相撞。三种构形都会毁坏意。从西周到《说文》籀文，均是从攴从二貝。至战国，攴或作殳、戈、刀、又，从刀的又讹作从勿，左侧或省为一貝。小篆作从攴从貝，隶变后作“敗”，现代简化字作“败”。

本义是毁坏，引申指伤害、妨碍、消除，又引申指失败、灾祸、腐烂，又引申指打败、战胜。

## 寇

金文从宀（房屋）从攴（持械击打）从元（人头），会室内杖击人之意，即入室暴力抢劫。后“宀”或作“广”、“厂”、“冖”，“攴”或作“戈”、“戉”，表义无别。小篆顺承主流结构，但《说文》分析为“从攴从完”，不妥。隶变后作“寇”，而“攴”或作“殳”，“元”或作“衣”，均未成主流。

本义是强暴、劫夺，引申指入侵、盗匪、敌人等。

## 收

初以丩为收，战国时分化出从攴的专字“收”，成为从攴丩声的形声字。“攴”或作“手”，形旁互通。小篆继承从攴丩声，隶变后楷书作“收”。

本义为拘捕，引申指没收、收取、聚敛、收获、接受、束止、收回等义。

## 鼔（鼓）

“壴”为“鼓”的初文，是打击乐器鼓的象形。后造专字，或从攴、或从支、或从殳，此三种形旁均表手持物品敲击义，可视为一字，均兼表乐器鼓和动词击鼓。后从殳的字形淘汰，从攴和从支的分别演化为“鼔”和“鼓”，《说文》将此二字分开，以“鼓”作动词、“鼔”作名词，其实本为一字，同源无别。东汉隶书还产生从皮的“皷”，应是从支之讹。现代简化字采用“鼓”。

本义指鼓、击鼓，引申为演奏其他乐器，如鼓琴、鼓瑟，进而引申为泛指的敲或拍，如鼓掌。敲鼓会产生振动，故又引申出振动、激荡义，如鼓风、鼓浪，进一步引申指振奋、煽动、吹捧。由鼓本身外凸的形状，引申出饱满凸起之义，又作动词指涨大。

## 攷

从攴丂声，初以丂为攷，后造专字。本义为扣击，引申指考课、讯问、调查、研求、成就等义。古时多假借表老义的“考”字表“攷”，后“攷”字渐废，全部义项被“考”承载，扣击的本义又转由更后起的“拷”承载。现代简化字已并入“考”、“拷”。

## 攻

初以“工”表攻击义，后造专字，春秋时或从攴、或从又，形符互通，成为从攴工声或从又工声的形声字。战国时形旁或作“戈”、“殳”，也属于形符互通。小篆承袭从攴工声，隶变后作“攻”。

本义是攻打、攻击，引申为指责、开凿、加工（金石等）、专力于等义。

## 敲

从攴高声，《说文》本义为“横擿”，即横掷，泛指击打。又特指用较短的杖打人，或指代这种较短的刑具，如“执敲扑以鞭笞天下”中“敲”是较短的杖，“扑”是较长的杖。另有从殳的“毃”字，《说文》训为“击头”，与“敲”分作二字，但“攴”、“殳”形符互通，此二字当互为异体，不必区分，《玉篇》即将其看作异体。

## 叙

甲骨文从又从余、余亦声，“余”或说是茅屋，或说是针砭，从前者则会铺排茅草搭屋之意，从后者则会执针治病之意。战国时“又”旁变为“攴”，形符互通。小篆继承从攴，隶变后“敍（敘）”、“叙”并存，现代简化字以“叙”为正。

《说文》释为“次弟”。如果按铺排茅草说，则次第义应是引申而来；如果按执针治病说，则次第义应属假借义。由次第义引申指依次排列、评定等级、述说、记述。又指书籍的序文、序言，此义后多写作“序”。

## 牧

甲骨文异体颇多，有从攴从牛、从攴从羊、从帚从牛、从又持帚从牛，会牧牛、牧羊、刷洗牛羊等义，或再叠加构件彳/止/辵等，强调动作属性。西周时只保留从攴从牛，后直至楷书一脉相承，作“牧”。

本义是放牧，即放养牲畜。引申指牧场、牧民。由将民众比喻为牛羊，将君主比喻为牧民，引申出管理、养育、统治义，由此又引申作官名。

***

# 教部

## 教

甲骨文最初从攴爻声，后加“子”，会手持戒具督促（小孩）学习之意，又另有一种字形省去“爻”的一半，即从攴从子从爻省。“爻”或认为只是声符；或认为表示算筹，会教学筹算之意；或认为是被教鞭抽打的象征符号。以上只是构形解释的细微差别，总体会意一致，即教育学习的场景。至金文，一类字形承袭最古老的从攴爻声的写法，即成《说文》古文字形，一直延续到战国；另一类承袭额外从子的写法，演变为小篆，隶变后“爻”或写作“耂”，至楷书写作“教”；而承袭从半爻的写法至战国后消失。

古施受同词，“教”“學”同字，均既表教导也表学习，后二字分化，“教”专表教导，“學”专表学习，反之也可认为是本为二字但古时经常互相通假。后由教导义引申出政教、管教、训练、学说、传授、使等义。

## 學（学）

甲骨文或从廾从爻，或从爻从宀，或从𦥑从宀，或从𦥑从爻从宀，或从𦥑从宀从爻省。“宀”为房屋，即学习场所；“廾”为两手；“爻”或说是声符，或说是学习用的算筹；“𦥑”既是两手，也作声符。至金文，加义符“子”，强调学习对象是儿童，整体字形作“學”。或再加“攴”，强调教育者用戒具责打，作“斆”。《说文》以“斆”为正，认为“學”是“斆省”，其实本为同源。隶变后以“學”为正，“斆”在后世字书被单列为一字，实可视为“學”、“教”的异体字。现代将“學”简化为“学”。

古“教”“學”同字，后“學”专表学习义，详见“教”字。由学习引申指效法、觉悟、学校、学问、学习的人等。

## 斆（敩）

字形演变见“學”字。“教”、“學”、“斆”古时不分，均既表教导也表学习，“斆”可看作是“教”+“\\[𦥑+宀]（學的初文）”合并而成，进一步表明早期教学不分。表学习、效法、觉悟义时读xué，表教授义时读xiào。

***

# 卜部

## 卜

占卜时烧灼龟甲兽骨所产生的裂纹形状，同时发音也类似骨甲裂开的声响。

本义是占卜、卜问，引申指预测，又作象声词。从清代开始，作为蘿蔔之“蔔”的音近简化字，现代作“萝卜”。

## 卦

从卜圭声，《说文》本义是“筮”，即以蓍草占卜。引申指占筮所得的象征符号。

## 卟

西周金文为卜骨上有卜兆之形，会卜问之意。小篆整理为从卜口，会意相同。

本义是卜以问疑。与“乩”同，或假“稽”表示。引申指考查。以上义读jī。现代作为化学名词用字，读bǔ。

## 貞（贞）

初文为“鼎”，最初即借“鼎”为“貞”。甲骨文或加形旁“卜”构成从卜鼎声的形声字。西周至春秋均继承从卜鼎声的字形，至战国将声旁“鼎”简化，主流简化写法是省作“貝”。小篆整理为从卜从貝，严格来说应是从卜、鼎省声。楷书作“貞”，现代简化字作“贞”。

本义是卜问，引申指言行一致、端正。

## 占

甲骨文有繁简二体，简体从卜（龟甲兽骨裂纹）从口，会卜问意，繁体在外部又加盛放卜具的袋子。至战国，从卜从口成为主流，后世沿用。

本义是卜问，引申指占卜、推测、估计、验证、征兆等。又有占有义，后分化出专字“佔”表此义。现代简化字又将“佔”并入“占”，以读音区分，表占卜义读zhān，表占有义读zhàn。

## 兆

或说象龟甲被火烧出的裂纹之形；或说从北（两人向背）夹一水，是“逃”和“洮”的初文。至战国时，中间的一笔或作两笔，分别在后世演变为两个系列，楷书中间作一笔和两笔的字形共存，后以中间两笔的字形“兆”为正体。

《说文》本义为兆纹，即用于占卜的龟甲裂纹。引申指征兆、预兆，作动词表示预先显现，又引申指开始。又作数词泛指较大的数，具体作单位时有十万、百万、万亿、亿亿等多种说法。

***

# 用部

## 用

甲骨文作桶形，是“桶”的初文。“同”与“桶”同韵，桶可使用，故最初借桶形表用。

本义是使人、物发挥功能，行使、使用，引申指任用、采纳，引申作名词指效果、功能、花费等。

## 甫

甲骨文为田上长蔬菜之形，是“圃”的初文。春秋时开始，下面的“田”逐渐讹变为“用”，上面的蔬菜形先弯曲，后讹变为“父”，小篆定为“从用父声”的形声字，隶变后作“甫”。

本义是菜园、菜地，由幼苗生长引申出开始义，继而有刚、方才义。又与“父”同，表示对男子的美称。

## 庸

初以“用”为“庸”，后分化出加义符“庚”的专字，“用”则兼表音义，隶变后作“庸”。构形有两种说法：

1.  “庚”为乐器，“用”为桶，都可使用，“庸”的本义即与使用有关，表示人被使用于劳役，也即雇佣。
2.  “庸”本义是指一种大钟，从庚以示像钲铙类的打击乐器，“用”或认为表声，或认为是放置大钟的木座。后被假借作使用义，又分化出从金的“鏞”字表本义。

无论是本义还是假借义，“庸”的一个基本义项即为使用，引申指需要、受雇，又引申出平常、平凡、不高明等义。

## 甯（宁）

初文为“寍”、“寜”，表安宁义，至晚于战国时又分化出从用的“甯”，此三字音义互通，可视作互为异体。“寍”于秦汉后即被淘汰。现代将“寜”立为正体，“甯”只作姓氏，其余义项均视为“寜”的异体，又将“寜”简化为“宁”。详见“寜”字。

***

# 爻部

## 爻

甲骨文或从二叉形，或从三叉形，金文以后定形为从二叉形。特指《周易》中构成卦的基本符号。《说文》认为本义为交，即交错、交织，此义可能是由卦爻义而来。

***

# 㸚部

## 㸚

古今字形变化不大，二爻并列交错之形。本义为窗棂交错，引申指西数明朗、分布清晰。

## 爾（尔）

甲骨文像上有锐头的三足络丝架之形，是“檷”的初文。西周金文在锐头下多出两点，上半部成为“尒”（尔），并将“尒”作为“爾”的省文，下部络丝之状变为“㸚”，小篆即承此字形，隶变后作“爾”。《说文》认为“从冂从㸚尒声”，并将本义释为“靡丽”，不确。

由络丝工具引申出遍、满义，体现于“沵”、“弥”，进而又有近义，如“迩”。后因与“汝”音近，被借用于第二人称代词，并开始虚化，用作语气词和助词等，后又分化出从人的“你”专表第二人称代词。

## 爽

甲骨文从大（张开双臂的人形），两腋下各有一物对称。人腋下之物或说是火盆，会明亮意；或说是容器“豆”，会持物丰盛心情畅快意；或说是酒器，会大量饮酒心情畅快意；或说是“壴”的下半部分，即鼓，会击鼓心情畅快意；或说是表示手抓搔的符号，会抓痒畅快意。腋下之物的形状后诸多讹变，最终变为爻形。至战国，“大”或作“夫”，《说文》小篆将从大和从夫的两种字形一并收录，后世以“爽”为正体。

《说文》本义为明亮，引申出凉快、畅快等义。又有差错、失去义，此义是通“喪”而来，爽、喪同属心纽阳部，上古同音，西周小盂鼎铭文中假喪为爽，免簋铭文中有爽的异体写作从日喪声，均证明爽、喪在先秦可互相假借。

***

# 目部

## 目

眼睛的象形，战国时由横目变为竖目，笔画规整化后成为“目”。

本义即是眼睛，引申表示看。由眼睛又引申为孔眼，进一步引申指大项中的小项，如条目、名目等。

## 眼

初借“艮”表“眼”，后分化出从目的专用字“眼”表此义。“艮”字是“見”的反文，本义是不听从。从目艮声的“眼”字分化较晚，最早见于《说文》小篆。大约在汉末取代了“目”作为眼睛的口语叫法，而“目”则转为用于书面语。

本义是眼睛，引申指视力、孔洞、事物的关键处等。

## 眩

从目玄声，本义是眼花、看不清。引申指变幻、戏法，此义后用“幻”表示。

## 眥（眦）

从目此声，隶变后楷书作“眥”或“眦”，后世以“眦”为正体。本义是眼眶，也指眼角。

## 睫

从目疌声，始见于战国，《说文》未收录，而是收录了从目夾声的“䀹”，此二字或是声符替换的关系。

本义是睫毛，引申指眨眼。

## 瞞（瞒）

从目㒼声，“㒼”有平匀遮盖义，此处兼表义。

本义是眼皮低垂、闭目貌。又假借为“謾”，表欺骗隐匿。

## 盼

从目从分、分亦声，本义为眼珠黑白分明，引申指黑眼珠，又引申指顾看，进一步引申指看重、重视、企望等。

## 睨

从目兒声，本义为斜眼看。

## 眈

从目冘声，《说文》本义为视近而志远，用于“眈眈”一词时表注视、逼视的样子。又有沉溺享乐义，此义通“耽”。

## 睘

一种观点解释为从目袁声，其所从的“袁”初文从衣从又○声，本义可能是将衣拉长、拉平整，详见“袁”字。“袁”在这里是否兼表义暂不确定。“睘”在《说文》中的本义是“目惊视”，即受惊后环顾的样子或受惊后睁圆眼睛的样子。“睘”字在甲骨文中即出现表示玉环类器物的用法，有可能是假借。后造从玉的“環”字专表玉环义。

一说是“環”的初文，本义就是指玉环。初文中的“○”是玉环的象形，这里表示手持玉环佩在胸前，“目”可能指代头部（与首、頁等原理类似），这里用于指示玉环佩戴的位置（头以下、衣服正中）。而“目惊视”义则是由环形、环视引申而来。

本义暂无确论，但从谐声字来看，从睘声的字多与圆环、回环有关，从袁声的字则无此特征，故“睘”的本义应当与环形有关，而“袁”在其中是否表义甚至“睘”的下部究竟是否是“袁”字，仍待考。

叠用作“睘睘”，表示孤独的样子。

## 瞟

从目票声，本义是斜视、偷看。

## 睹

战国时有两种字形：从見者声和从目𣥐（旅）声，前者改变左右分布后即是《说文》古文写法，楷书作“覩”。《说文》小篆为从目者声，隶变后作“睹”。现代以“睹”为正体。

本义为看见，引申指察视、明白。

## 睽

西周时字形上面是䀠，下面是癸的古文。后省略一目，成为从目癸声，楷书作“睽”。

本义是两眼不能集中视力于一点，引申指乖离违背，又指张目注视，如“众目睽睽”。

## 睢

从目隹声，本义是仰目、仰视，引申指欢乐貌、怒视貌。

## 睦

西周金文从見、从三圥（即籀文圥），战国时形成两种演变方向：一是“見”省作“目”或变作“囧”，后三圥省作一圥，变为上下结构，成为《说文》古文的字形；二是变为从目、坴声，成为《说文》小篆的字形。后者后来成为主流，隶变后楷书作“睦”。

本义是“目顺”、“敬和”，即和睦，引申指亲近。

## 瞻

初以“詹”为“瞻”，后分化出从目的专字“瞻”。本义为临视，即向下看。后引申指仰视、敬视，也泛指一般的看。

## 相

甲骨文从目视木，会观看意。早期字形木、目位置不固定，西周后基本固定为左木右目，或在目下加两横饰笔。

本义为省视、考察、仔细观看，引申指挑选、模仿。又转为名词表样貌、形象。也有辅佐、帮助的意思，如“吉人天相”，但此义或说是作为“襄”的同音替代字。由辅佐义又引申指官名，如宰相、丞相等。又作副词表示相互关系。

## 瞋

从目真声，战国时真左目右，小篆以后改为目左真右。本义为瞪大眼睛，引申指发怒。

## 眷

从目龹声，异体作“睠”。本义是回头看，引申指留恋、器重、亲属等。

## 督

从目叔声，本义是查看，引申指督促、监视、纠正、责罚、统领、治理等。

## 看

战国文字从目㫃声，《说文》或体是将“㫃”替换为“倝”，而小篆则进一步将原本的声旁讹变“手”，成为“从手下目”，致《说文》误认为是会意字。

本义是以目视物，引申指估量、考察、观赏、看望、看待等义，以上义读kàn。又引申指照料、守护、监管、等义，读kān。

## 睡

从目垂声，本义是坐着打盹、打瞌睡，引申指睡觉。

## 瞑

从目从冥、冥亦声，“冥”有幽暗义，古初以“冥”为“瞑”，后造专字“瞑”。

本义是闭眼，引申指视力不明、昏暗。又同“眠”，表睡眠。

## 眚（省）

甲骨文从目、生省声，春秋时开始出现从目生声的写法。《说文》将从生省的字形总结为“从眉省、从屮”，楷化后即“省”；从目生声的字形则作“眚”。《说文》别“省”、“眚”为二字，将“眚”单独训为“目病生翳”，实际当视为同一字。

本义是察视、察看。引申指观察自己，也即反省。由本义又引申指探望。以上义读xǐng。《说文》“目病生翳”义应是引申义，文献少用，但由此引申出过失、灾害义。又有减少、节俭义，也指皇宫禁地（可看作从察视义的引申），进一步引申为官署，后来演变为行政区域单位。以上义读shěng。

## 瞥

从目敝声，本义为扫视，引申指突然。

## 眛

从目未声，本义为目不明。

## 眯

从目米声，本义是异物入眼，即眯眼。引申指眼微合。

## 眺

从目兆声，战国时形旁或作“囧”，小篆定为从目。本义是目不正，即斜视。引申指远望。

## 睞（睐）

从目來声，本义指瞳仁不正，引申指侧视，又引申指一般的看。

## 矇

从目蒙声，本字为“蒙”，“矇”为后起分化字，现代简化字并入“蒙”。

本义指瞳孔被蒙覆，即青光眼或盲。引申指昏暗。

## 眇

从目从少、少亦声，本义指一只眼小，也指一只眼瞎，后又指双目失明。引申指眯着眼看，又引申指细小、遥远，此义后作“渺”。

## 眄

从目丏声，《说文》本义有“只睁一只眼仔细看”和“斜视”两个义项，前者罕用。引申指一般的看、望。

## 盲

从目亡声，初以“亡”为“盲”，后造专字“盲”。本义指眼珠黑白不分、没有瞳仁，有眼睛但看不见东西，是失明的一种。后成为各类失明的统称。引申指盲人，又指昏暗、糊涂等。

## 瞽

从目鼓声，初以“鼓”为“瞽”，后造专字“瞽”。本义指眼睛睁不开，只有缝隙，失明的一种。古代盲人常从事演奏，故引申指乐工。又引申指糊涂、不达事理。

## 瞍

从目叜声，本义是没有眼珠，失明的一种。又用于“瞽瞍”一词专指舜的父亲。

## 睇

从目弟声，本义是斜视，泛指看、瞧。

## 瞚（瞬）

从目寅声，初以“寅”为“瞚”，后造专字“瞚”。后俗体更换声符作“瞬”。本义是眨眼，引申指极短时间。

## 瞼（睑）

从目僉声，指眼皮。现代简化字作“睑”。

## 眨

从目乏声，本义指眼睛开合，即眨眼。

## 眸

从目牟声，初文为“牟”，后分化出从目的专字“眸”。本义指眼珠内的瞳孔，引申指眼珠。

## 睚

从目从厓、厓亦声，“厓”有边缘义，初以“厓”表眼眶义，后造从目的“睚”专表此义。又引申指举目、瞪眼，

***

# 䀠部

## 䀠

从二目，本义为左右惊视，是“瞿”的本字。

***

# 眉部

## 眉

甲骨文为目上有眉毛的象形，下方或加“人”或“女”。后不断抽象化，至小篆，目上的眉毛变成类似仌+∫的形状，隶变后楷书作“眉”。

本义是眉毛，引申指边侧、上端。又因老人眉毛长，而引申指长寿、年高，如“眉寿”。

***

# 盾部

## 盾

甲骨文像中间有把手的方形盾牌之形。西周金文或在上方加“人”，下方的盾牌形变为近似目上加一竖。战国时“人”左右颠倒，“人”靠下的短笔画与盾牌上的一竖交叉，并逐渐与人的长笔画脱离，整个字成为“⺁+十+目”的形状。小篆沿袭，隶变后作“盾”。

本义是盾牌，引申指形似盾的东西，又引申指支撑的力量，如后盾。

***

# 自部

## 自

为“鼻”的本字。甲骨文像鼻子形，西周时下部两个鼻孔连为一体。战国时或在上方加一横饰笔，但未成主流。隶变后作“自”。《说文》另有一“白”字，小篆字形为“自”少一横（与黑白的“白”篆书写法不同），是“自”的异体，但楷化后与黑白的“白”同形易混，后世不单独使用，只作为构字部件（讹形）存在于“皆”、“智”等字中。

本义是鼻子，引申指自己、亲自，假借作介词表“从”。

***

# 白部

## 白（自）

“自”的异体，即“自”少一横，甲骨文时代混用，后世因避免与与黑白的“白”相混，基本只用两横的“自”。

## 皆

西周金文从从、从曰，会二人言行相从之意。战国时或将“从”换为“并”，属于形旁互通，但未成主流。秦文字将“从”换为“比”，《说文》小篆将下部的“曰”看作“白”（zì），属于讹变，汉代仍多作从曰的写法。楷书沿袭小篆的写法，作“皆”。

本义作虚词表都、俱，又表示一起、相同，此义后作“偕”。

## 魯（鲁）

甲骨文上面是“魚”，下面是“口”。西周时，“口”或作“白”（zì），或作“甘”，前者是讹变，后者是形义相近偏旁更易。《说文》小篆继承从白的讹变写法，释为“从白、鮺省声”，不妥。隶变时下部进一步讹作“曰”，楷书作“魯”，现代简化字作“鲁”。

造字本义主要有两种说法：

1.  形声字，“魚”作声符不表义，“魯”本义是言语，是“嚕”的初文。
2.  会意字，会鱼入人口之意，或说“口”是盛鱼的器皿。本义是美味，引申出嘉美义。

不论是本义还是后起义，“嘉美”确为“魯”的基本义项。《说文》训为“钝词也”，即迟钝、笨拙，此义或说是假借义，或说是引申义，引申逻辑如下：由嘉美义引申为大，大引申为粗，进一步引申为粗鲁，再引申为鲁钝。

## 者

甲骨文字形下面是口，上面或说是长有树叶/果实的木，或说是木架和火星，也有字形下半部不是“口”而是“火”。西周时或在“口”内加一横饰笔。至战国，形变繁多。小篆下部讹为“白（zì）”。隶变后作“者”。

初始字形从火的说法，认为“者”是“煮”和“諸”的本字，表示聚众煮食。初始字形为树木的说法，认为“者”是“楮”的本字，指楮树。

后多借用作代词、助词。

## 智

本字为“知”，甲骨文时即分化出从于的字形，但后世仍多见以“知”表“智”。西周时下方加“甘”，此部件战国时或作“口”。至小篆，下部讹为“白（zì）”，《说文》厘定为“从白（zì）、从于、从知”。隶变后或省去“于”，楷书作“智”。

本义是聪明、智慧，引申指计谋、策略、有智慧的人等。

## 百

初以“白”为“百”，甲骨文时即分化出上加指事符号的“百”字：上加一横，中间或加一折线。西周时下面加折线的白讹变为“白（zì）”，后沿袭。或说本以“白”作为百这个数字单位，甲骨文数字多合书，一百即在白上加一横，二百即加两横，依此类推，故加一横的字形固定为“百”，表示一百。

本义为数字单位，泛指数量大。

***

# 鼻部

## 鼻

本字为“自”，“自”被用来指自己后，又造从“畀”声的“鼻”字表本义，最早见于战国。《说文》认为“从自畀”，有误，应是“从自畀声”。

本义指鼻子，引申指器物上隆起部分，又指起始、开端。

## 齅（嗅）

本字是“臭”，义为用鼻子闻。后造从鼻的专字“齅”表本义。又有从口的“嗅”字，但《说文》未载，可能晚于“齅”字，但因笔画较少，后成主流。

## 鼾

从鼻干声，本义是打呼噜。

***

# 習部

## 習（习）

甲骨文下部为日，上部旧多释为“羽”，另一说法认为是“彗”的初文，即扫帚形，在“習”字中表声，“羽”字在甲骨文中另有单独的字形（一根有复杂纹路的羽毛）。这个从日彗声的字在甲骨文中已经有“练习”义了，含义演变来源尚不明确。旧说多基于“从羽”的观点对造字义进行解说，所谓“禽鸟于晴日学飞”，将本义释为“鸟数飞”，值得商榷。

战国时“日”或讹作“目”、““白（zì）”。至小篆，《说文》整理作“从羽从白（zì）”。隶变后下部多沿袭古字形从日，楷书则依小篆从白，作“習”。现代简化字取部分构件代替整字，作“习”。

基本义为练习，引申指学习、复习、熟悉、习惯、风俗等。

## 羽

甲骨文中有类似后世篆书“羽”形的字，旧多释为“羽”，另一种说法认为此字应是“彗”的初文，是两把扫帚形，“彗”是在此形下追加“又”（手）而来。而“羽”最初的甲骨文是一根有复杂纹路的羽毛形。但鉴于很多从羽的字（如翟、翡、翠、翥等）早在先秦就有类似“彗”初文的写法，不排除“羽”字在商代之后已经从复杂的具象羽毛形简化为与“彗”的初文近似乃至同形的写法。《说文》则将此字形明确定为“羽”字，后沿用，楷书作“羽”。

本义是羽毛，引申指翅膀、鸟、仙人。又引申指辅佐的力量，如“羽翼”、“党羽”。

## 翰

石鼓文为从飛倝声，小篆作从羽倝声，“飛”、“羽”形旁互通。隶变后作“翰”。

本义为赤羽天鸡，即“鶾”。引申指高飞。鸟羽可制笔，故又引申指毛笔、文章、文词等。

## 翟

从羽从隹、隹亦声，本义是长尾野鸡，引申指雉羽、雉服装、教羽舞的小吏。又通“狄”，指北方少数民族。又作姓氏，居北方者读dí，居南方者读zhái（此音于唐代产生），别为二氏。

## 翡

最早见于战国，作“从羽肥声”。《说文》小篆采用“从羽非声”，隶变后楷书作“翡”。

本义是一种赤羽雀，雄赤曰翡、雌青曰翠。引申指用于饰品的翡翠羽毛。进一步引申指一种青绿色硬玉。

## 翠

战国字形为“从羽辠声”或“从鳥辠声”，而“从羽卒声”的字形始见于《说文》，隶变后楷书作“翠”。

本义指一种青绿色的翠鸟，见“翡”字。引申指用于饰品的青绿色鸟毛。又引申指青绿色，进一步引申指色彩鲜明。也用于指青绿色硬玉，亦见“翡”字。

## 翦

从羽歬声，战国时或加“刀”，作从羽前声。《说文》采用从歬声的字形，但隶变后仍以从前声为主，楷书作“翦”。

《说文》本义为初生的羽毛，此义罕用。通常假借为“剪”，指截断（或认为不是假借，而是由初生羽毛整齐的特征引申而来）。引申指除灭。

## 翁

从羽公声，本义是鸟颈毛，因头颈毛居上，引申为长者、父祖。而古代多以“公”为“翁”，或说“公”是“翁”的本字，“翁”是后起分化字，但此说与鸟颈毛义不合，以“公”为“翁”应是通假用法。

## 翄（翅）

从羽支声，或体从氏声，属于同音声旁替换。小篆羽在左，楷书左羽右支和左支右羽的字形兼有，现代以“翅”为正体。

本义是翅膀、羽翼，引申指翼状物，又作动词指展翅。

## 翹（翘）

从羽堯声，隶变后写作半包围结构“翹”，现代简化字作“翘”。

本义是鸟尾长毛，引申指抬起、扬起，进一步引申指杰出、拔尖的人才，以上义读qiáo。俗语指向上昂起，读qiào。

## 羿

从羽幵声，楷书或省作“羿”。《说文》本义为鸟张翅旋风而上，但此义未见用例。多专指唐尧时的射师，即传说射日的羿，或指夏朝有穷氏国君后羿。《说文》另收从弓幵声的“𢏗”字，训为“帝喾射官，夏少康灭之”，与“羿”所指相同，应视为异体字。

## 翥

从羽者声，异体作“䬡”。本义是飞举，即向上高飞。

## 翕

从羽合声，本义是起飞，此义罕用。因鸟起飞前必先敛翅，故引申出闭合、收敛义，此为常用义。引申指聚集、吸引、和好。

## 翏

西周金文作从羽勹声，后加二或三饰笔。至战国或省略勹保留饰笔，或去掉饰笔保留勹，均未成主流。《说文》整理为“从羽从㐱”，已是讹变，非造字本义。

《说文》本义为高飞，金文多用作人名或方国名。叠词“翏翏”指风声。

## 翩

初以“扁”为“翩”，后造从羽的专字“翩”。本义是疾飞，引申指飘动翻飞的样子，进一步引申指体态轻盈生动。

## 翊（翌）

甲骨文借用“羽”字（一根纹路复杂的羽毛形）纪时，后为突出时间概念，又增加意符“日”，另有字形增加声符“立”，也有同时加“日”和“立”的。西周多作从立，而羽毛的部分由具象写法变为接近后世的“羽”形，与“彗”的初文同形。《说文》整理为“从羽立声”，隶变后楷书作“翊”或“翌”。而单有从日立声的分化字“昱”，与“翊”、“翌”同源，在表时间时互通。

本义最初指来日，可以是次日或更长的时间，后世多特指次日。《说文》将其本义释为“飞貌”，或是因从“羽”而假借产生。通“翼”，表翅膀，引申指辅佐、协助。“翊”、“翌”互为异体，现代均视为正体，前者多用于协助义，后者多用于表时间。

## 翶（翱）

从羽皐声，本义是翱翔。“翶”特指翅膀上下振动地飞，“翔”指翅膀不动地飞，即滑翔。

## 翔

从羽羊声，初以“羊”为“翔”，后造专字“翔”。本义指盘旋地飞而不扇动翅膀，引申指悠闲地行游，也引申指物价上涨。

## 翳

从羽殹声，本义是华盖，即有羽饰的车伞，引申为遮蔽、隐藏。进一步引申为眼睛上影响视力的膜，此义有后起分化字“瞖”。

## 翻

从羽番声，初以“番”为“翻”，后造专字“翻”。本义是飞动，引申指翻转、推倒，又引申指翻阅，又引申指翻译、研讨等。

## 翎

从羽令声，本义是鸟羽，引申指箭羽，也指顶戴花翎。

***

# 隹部

## 隹

甲骨文为头、尾、身、羽俱全的鸟形，西周以后字形逐渐固定，隶变后楷书作“隹”。

本义是短尾鸟或泛指所有鸟。《说文》区分“隹”为短尾鸟、“鳥”为长尾鸟，但一些从隹的字并不是短尾鸟，如“雉”。有观点认为早期的“隹”和“鳥”本是一字，并没有严格区分。

## 雅

从隹牙声，本义是乌鸦，后以“鴉”为此义正体，而“雅”则假借指正确的、规范的，引申指高雅、文雅等。另有写作“疋”的字表“雅”义，实为假借用字，非规范正体，详见“疋”字。

“烏（乌）”、“雅（鸦）”源于同一字音的分化，楚乌秦雅。类似的现象还有“贾”字gǔ、jià、jiǎ的分化。

## 隻（只）

从又从隹，会擒获意。自甲骨文至楷书构形变化不大，一脉相承。现代简化字并入“只”。

本义是捕获，是“獲”的本字。引申为捕获的鸟的量词，又引申用作各种事物的量词。又引申指单独、单一、独特。

## 雒

西周金文从隹各声，战国时或从二隹，至小篆又变回从一隹。隶变后楷书作“雒”。

《说文》本义是“鵋䳢”，即一种猫头鹰，此义罕用。假借指白鬣黑身的马。又通“洛”，用于指代洛水、洛阳。

## 雀

甲骨文从小从隹、小亦声，会小型鸟之意。战国时“小”或作“少”，“小”、“少”古本一字，音形均通，不影响表意。小篆仍从“小”，隶变后楷书作“雀”。

本义是麻雀，由麻雀毛色引申指赤黑色。

## 雉

甲骨文从隹矢声，声符或替换为“大”、“至”、“夷”。春秋时统一为左矢右隹。战国时或沿袭从夷声的字形，但“夷”变作“弟”，此字形后楷书作“𨿘”。小篆承袭主流结构，隶变后主流作“雉”，或将“矢”讹作“夫”。

本义是野鸡，又用作城墙面积计量单位，盖因野鸡不善飞，故以其飞行能力所占空间作单位。

## 鷄（鸡）

甲骨文像高冠长喙之鸡，后加声符“奚”构成形声字。后演变为《说文》籀文从鳥奚声的“鷄”。至战国，产生将形符替换为隹的异体字形，《说文》以此为正体，即从隹奚声，楷书作“雞”。新中国以“鷄”为正体，而简化字根据另一异体字“鳮”简化而来，作“鸡”。

本义是报晓家禽。

## 雛（雏）

甲骨文从鳥芻声，此字形演变为《说文》籀文，楷书作“鶵”。小篆从隹，楷书作“雛”，现代简化字作“雏”。

本义是小鸡，引申指小鸟，又引申指小动物，又引申指幼儿。

## 離（离）

甲骨文上部是隹（小鸟），下部是长柄网（捕猎工具）。至战国，隹固定在右边，而猎具部分逐渐讹变，被《说文》分析为从禽头、从禸从屮。隶变时，猎具部分中所谓的“屮”或讹变为“艸”、“廿”，或与“禽头”合并作“又”，而所谓的“禽头”或讹变作“田”、“口”等。楷书作“離”。而不从隹的“离”字始见于战国，最早的字形上部为“林”，其后才讹变为“艸”或“屮”。或说“离”由“離”简省而来，或说“離”为“离”的后起字形，尚无定论。

《说文》将离、離别为二字，将“离”训为“山神、兽”，将“離”训为“黄仓庚”（即黄莺），应有误。“离”、“離”古本一字，孰先起暂不可知，但本义应由张网捕鸟或林中张网会意而来，甲骨文用例已有“鸟兽入网”和“遭遇”这两个义项。由“鸟兽入网”义引申出离散、分离义，进一步引申出违背、相隔等义。由“遭遇”义引申出遭受义，此义后多作“罹”。“山神”、“猛兽”义应是引申而来，分别分化出“魑”、“螭”。

## 雕

从隹周声，初以“周”为“雕”，后造专字，籀文从鳥，小篆从隹。楷书分别作“鵰”、“雕”，现代以“雕”为正体。

本义是一种大型猛禽，引申指迅捷凶猛。通“彫”，表彩绘。通“琱”，表治玉、刻镂。

## 鷹（鹰）

西周金文为人、隹加一竖（指事符号），是“膺”的早期字形，“膺”的甲骨文为隹（鸟）胸部加一指事符号，表示胸部，至金文加人旁。此字在西周时被借指动物鹰（也可能不是假借，而是造字之初即兼有两义，鹰有凸胸的特征）。战国时，左上的“人”形讹变为“𤕫”。至小篆，中间的一竖讹变为“人”。此字形隶变后作“𨿳”，或省作“䧹”。另有籀文字形额外追加“鳥”旁，此字形隶变时将“疒”省作“广”，整体作“鷹”，现代简化字据此简化为“鹰”。

本义为猛禽名。

## 鴟（鸱）

《说文》籀文从鳥氐声，此字形楷书作“鴟”。战国时出现从隹氏声的字形，形符鳥、隹互通，声符氐、氏互通。小篆作从隹氐声，《说文》以此为正体，但后世则以“鴟”为主流，现代简化字作“鸱”。

本义指鹞鹰，一种猛禽。又指猫头鹰类的鸟。

## 雝（雍）

甲骨文从水、\\[吕+隹]声，其声符\\[吕+隹]是从隹、宫省声（不是lǚ）的形声字。初以\\[吕+隹]表雝，后造分化字。西周金文或将“吕”省作“口”，或再讹作“日”，有的字形又加形旁殳。春秋时保持主流的从水、\\[吕+隹]声写法。战国时声旁变化繁多。《说文》小篆整理作“从隹邕声”，其所谓的“邕”旁中的“邑”实际是“吕”之讹。小篆隶定作“雝”，隶变后又作“雍”，后者成为后世正体。

本义一说是水名，一说是地名，一说是鸟名。后用此字表和谐。

## 雁

始见于战国文字，从隹从人、厂（hǎn）声，最初“厂”与“隹”结合，“人”在外部，后“人”移至“厂”内，作“雁”。“雁”和“鹰”在早期可能是同形字，后用于表示两种不同的鸟，字形逐渐分离，“雁”保持较古老的字形，“鹰”先讹变为从“疒”，再讹变为从“广”，下追加多加“鳥”旁。也有可能“鹰”和“雁”本非同字，演变过程中的某段时期（大约战国前后）各自讹变的字形有重叠，后又再度分离。

《说文》单独另收“鴈”字，训为“鹅”，但从字形演变来看，“鴈”应是“雁”的异体，且鹅这种动物本身就是驯化的雁，此二字古初应无区别，实际使用中这两字也经常混用。

本义是候鸟大雁，由其候鸟的特性引申形容流动无定。

## 雇

甲骨文从户声，形旁或作“隹”或作“鳥”，而“隹”、“鳥”最初可能本就是同一个字，后世逐渐区分。从鳥者，演变为《说文》籀文写法，楷书作“𩿇”、“鳸”。从隹者，即《说文》小篆写法，后作“雇”。另有叠加形旁的俗体“\\[鳥+雇]”。另有《说文》或体从鳥雩声，作“
𪄮”，为声符替换而得。

本义是一种鸟，读hù，此义可通“扈”。假借指雇佣，此义分化出专字“僱”，但未能替代“雇”，雇佣义项上此二字互通，现代以“雇”为正体。引申指租赁、购买、付报酬、卖等义。以上义均读gù。

## 𨿡（鹑）

从隹𦎫（chún）声，隶变时或从鳥，作“𨿡”、“鶉”、“\\[鳥+享]”。后世“鶉”使用最广，现代简化字以此为正，简化为“鹑”。

本义指鹌鹑。引申指南方朱雀七宿。又引申指破衣，因像鹌鹑的秃尾。

## 雄

始见于战国文字，从厷声，形旁或作“隹”或作“鳥”。小篆以后从鳥的字形淘汰，隶变作“雄”，或将“厷”讹作“右”，即“䧺”。现代以“雄”为正体。

本义指公鸟，引申指其他雄性动物，又引申指强悍过人的男性，进一步引申指英雄、雄壮、雄险等。

## 雌

战国时有从隹止声和从隹此声两种字形，后分别演化为“䧳”和“雌”。形旁“隹”或替换为“鳥”，作“䳄”。现代以“雌”为正体。

本义指母鸟，引申指其他雌性动物，又引申指柔弱。

## 雋（隽）

战国文字上为“隹”，下为横放的“弓”，会以弓射鸟之意。小篆承此写法，楷书作“雋”。而弓横写多不便，隶变时多将弓竖写，或进一步讹变为“乃”，楷书作“隽”。现代以“隽”为正体。

古代射箭以小鸟为靶，射中为隽。用弓箭射的都是野鸟，而野鸟味美，由此引申指
鸟肉肥美，又引申指美味，进一步引申指深长的意味。由射中小鸟又引申指中选、中试，进一步引申指才德超卓的人，此义通“俊”。

***

# 奞部

## 奞

从大从隹、隹亦声，本义指鸟张大翅膀奋飞。

## 奪（夺）

西周金文从又从衣从雀，或说会手从衣内夺取小鸟之意，或说会用衣物捕捉的小鸟脱手飞走之意。所从的“雀”或省去“小”作“隹”。至战国，形变为𡙜，其演变逻辑有两种解释：

1.  省略“衣”的左右部分，仅保留上部，而这部分又与“雀”上半部的“小”合并讹变为“大”；
2.  先由“雀”省去“小”作“隹”，然后完整的“衣”讹作“大”（演变路径与“奮”类似）。

因上部讹为“大”致《说文》厘定为“从又从奞”，已非造字本意。隶变时“又”作“寸”，楷书作“奪”，简化字“夺”始见于明代，现行简化字采之。

初始会意说法不一：

1.  依“手从衣内夺取小鸟”之说，则本义为抢取，而被夺之人有所失去，故引申出失去义。
2.  依“小鸟脱手飞走”之说，则本义又有“脱出”和“失去”两种说法，其实是同一件事针对不同主体的不同侧面，以飞走的小鸟为主体，则是“脱出”，以失手的人为主体，则是“失去”，而从“失去”义又引申出“使失去”，即夺取义。

总之“抢取”、“脱出”、“失去”这三个义项互有关联，不确定哪个是源头，但都是“奪”字的常用义。“夺门而出”即用的是脱出义，“不夺其时”即用的是失去义。由抢取义又引申指争先取得，如夺冠。进一步引申指胜过，如喧宾夺主、巧夺天工。进一步引申指刺眼，如夺目。古代官员守丧期间朝廷召回称为“夺情”，取“使失去”义，后专用“夺”字作“夺情”的简称。另有说法认为奪的“抢取”义是通“敚”而来，非“奪”字本义。

## 奮（奋）

西周金文从隹从田从衣，会用衣物捕捉的鸟挣扎要飞往田地之意。战国时有三种演变方向：

1.  从隹从田，“衣”演变为类似“尔”形，或“亦”形，后进一步讹为“大”，此为主流字形，小篆从之。
2.  从隹从田，“衣”被“田”隔为上下两部分，“田”或移至左侧。
3.  省去“衣”，增加“攴”。从捕鸟这个行为来说，表意可互通，是用衣物捕捉和用棍棒击打的方式区别。另有字形省去“隹”。

小篆依第一种字形，《说文》厘定为“从奞在田上”，已非造字本意。隶变后作“奮”，简化字“奋”始见于清代，现行简化字采之。

本义是鸟振翅飞翔，引申指举起、用力挥动、震动、振作、激愤等，表激愤时通“愤”。

***

# 雈部

## 雈

甲骨文像头上有毛角的鸟形，即猫头鹰类，隶变后楷书作“雈”，上部或讹作“艹”，写作“萑”，读huán。

而本有从艸隹声的“萑”字，本义为草多貌，读zhuī（职追切），又假借指芦荻类植物，读huán（胡官切）。这个从艸的“萑”字与表猫头鹰的“雈”字本无关联，但后世楷书同形。“萑”字胡关切的读音疑是与“雈”相混而来。

## 蒦

从又从雈、雈亦声，读huò，会用手抓猫头鹰之意，本义是抓住、捕获，引申指被捉之后的惊视貌，又指尺度、法度，此义后作“彠”。

另有从艸隻声的“蒦”字，读wò，本义是草名。后世楷书此二字同形，本义无涉。

## 雚

甲骨文最初与“雈”同形，后加“吅”，强调与鸣叫有关。战国时或在“隹”下加“口”，小篆又将“口”省去，楷书作“雚”，上部讹作“艹”。

本义是一种水鸟，后作“鸛”，读guàn。

另有从艸、\\[吅+隹]声的“雚”字，读huán，是从艸雈声的\\[艹+雈]的异体字，本义同“萑”，表示芦荻类植物。

## 舊（旧）

甲骨文从雈，下方声符为“臼”的初文，写作“凵”形，本义是猫头鹰。形符“雈”或作“隹”，从隹的字形一直延续到战国，后又或从鳥。西周时，声符“凵”形内部增加几点表示沟槽，逐渐变成后世的“臼”形。小篆承袭主流结构，作从雈臼声，隶变后主流结构楷书作“舊”，兼有大量俗体。另有《说文》或体从鳥休声，即“鵂”字，可看作由从鳥臼声的字形更替声旁而来的异体字。后“舊”字被假借指时间长的，即陈旧，“鵂”则用来表示猫头鹰的本义，二字逐渐分化。元代常借“臼”表“舊”，而“臼”产生变体“旧”，现代简化字即采用“旧”作为“舊”的简化字。而“鵂”字则类推简化为“鸺”，用于“鸺鹠”、“鸱鸺”等词。

猫头鹰的本义被“鵂”继承，而被假借为陈旧义的“舊”字引申出长久、以前的、往昔、老交情、原本等义。

***

# 𠁥部

## 𠁥

像羊角形，是羊字去掉下面两横剩余的部分，在小篆中作为“羊”、“雈”、“𥄕”的构件。

## 乖

西周金文为“𠁥”外加“八”，《说文》小篆将“八”繁化为“别”的古文，实际应是“北”的省变，隶变时即回归“北”形，而“𠁥”则变作“千”，楷书写作“乖”。

本义是“戾”，即背离、不协调统一，引申指离别、差别、乖僻反常、差错。后俗语中产生“乖巧、听话”的貌似相反的含义，并非属于反训现象，而是逐步引申而来，其演进路径大致为：由背离义引申出奸猾灵活义，再引申出机灵聪明义，再引申出听话义。

***

# 𥄕部

## 𥄕

甲骨文或从二目从𠁥（羊角形），或从一目从𠁥，构意思不明。战国时羊角形简化，下部统一为一目，或横置或竖置，小篆定为从𠁥从目，隶变后楷书作“𥄕”，与从艸目声的“苜”字（苜蓿）是不同的字。

《说文》本义为“目不正”，此义罕用，甲骨文用例多通“蔑”，表否定。

## 瞢

战国字形从目，声旁为从人从𥄕、𥄕亦声的字，《说文》整理为“从𥄕从䀏”，楷书作“瞢”。

本义是目不明，引申指昏昧、憋闷、惭愧，又通“盲”，又通“夢”。

## 蔑

甲骨文从戈眉声，或从䇂眉声。西周时形旁大多数作“戈”，少数作“戊”，而构件“眉”中“目”上的眉毛形讹变得像羊角，同时“眉”半部的“人”或省去，以致声旁整体讹作“𥄕”，也可以看作是音近声符更替。至战国，原“眉”下部的“人”开始与上半部分离，而与“戈”结合。至小篆，《说文》整理为从𥄕、从戍，隶变后楷书作“蔑”。

《说文》本义为“劳目无精”。甲骨文通“微”，金文中可通“灭”，引申指“无”、“末”、“莫”、“弃”、“慢”，其中“慢”（即轻视、侮慢）成为后世常用义。明代时起，出现借“蔑”作“衊”的用例，表示污衊义，现代简化字将“衊”并入“蔑”。

***

# 羊部

## 羊

甲骨文像带弯角的羊头形，至西周简化，已接近小篆。战国时异体较多，小篆承袭主流字形，《说文》整理为“从𠁥，象头角足尾之形”，有误。隶变后楷书作“羊”。

本义是家畜羊，因用作祭品，被认为能带来祥福，于是产生吉祥义，此义后分化出从示的专字“祥”承担。

## 芈

从羊，上有一指事符号表示有声气发出，表示羊叫。甲骨文中上部的指事符号有多种形态，小篆定为短竖，隶变后楷书作“芈”。

本义是羊叫，又用作春秋时楚国祖先的族姓。

## 咩

从口芈声，由“芈”分化出的专表羊叫义的异体字，楷书作“哶”，讹作“咩”。“咩”又用作地名、方言中的语气词（相当于“吗”），用于以上义时不通“芈”。

## 羍

从羊大声，始见于《说文》，本义是小羊羔。是“達”的声符，又与“達”通假。

## 羸

从羊𦝠声，战国文字和汉隶多讹变异体，小篆主流字体楷书作“羸”。

本义指瘦弱，引申指疲惫、破旧、衰弱、低劣。

## 羣（群）

从羊君声，古多作上下结构，隶变后楷书“羣”、“群”并存，现代以“群”为正体。

本义是羊群，后泛指同类相聚，引申指众多、朋辈、随俗。

## 美

甲骨文为站立的头戴饰物的人形，以此表示美丽、美好。至战国时上部头饰已经变得像“羊”形，与小篆接近，同时产生下部讹作“火”的异体写法。小篆承袭主流字形，整理为“从羊从大”，隶变后楷书作“美”，而从火的字形则演变为“羙”。

本义是美好，引申指味美，又引申指善、精、良，又作动词表赞扬、使变美，又作名词表美好的人或事物，

## 羌

甲骨文字形为人体上有羊角，旁有绳索或刑具，用以表示西方的游牧民族，因该族人多作战俘、奴隶，所以加绳索。西周时去掉绳索，统一作“从人从羊、羊亦声”，后世字形变化不大，楷书作“羌”。

## 羑

从羊久声，始见于战国，楷书作“羑”。本义是导人向善（羊性善，故从羊），引申有善义。又用作地名，羑里。

另外，《说文》所收“㕗”字古文作“羑”，而“㕗”与“誘”互为异体，表示呼引、引导，“㕗”应是“羑”的后起分化字，初始的“羑”字表义比较狭窄，仅指导人向善，而分化出的“㕗”字则不限于向善，泛指各种引导。

***

# 羴部

## 羴

甲骨文有从二羊、从三羊、从四羊三种字形，会羊气味之意。战国时固定为从三羊，后沿袭，楷书作“羴”。另有《说文》或体从羊亶声，作“羶”。现代以从肉的“膻”为正体，“膻”的《说文》本义是裸衣露肉，读dàn，但《集韻》载“膻”同“羴”、“羶”，即可认为“膻”在读shān时与“羴”、“羶”互为异体字，表示羊腥味。

## 羼

从羴在尸下，羴兼表声，本义为群羊杂居，引申指滥入、夹杂。

***

# 瞿部

## 瞿

本字为“䀠”，从二目，表示左右惊视。战国时分化出从隹的“瞿”字，表示像鹰隼一样惊视。

***

# 雔部

## 雔

从二隹，本义是双鸟，即一对鸟。引申指相当的、对等的、伴侣，表伴侣义时可与“逑”通。另有从言从雔、雔亦声的“讎”字，异体作“讐”，由“雔”分化而来，本义为应答，可与“雔”互通。“讎”又引申出仇敌义，而从人九声的“仇”字（读qiú）《说文》训为“讎”，“仇”与“讎”同韵同义，后世也多借“讎”表“仇”，二字音义合流，“仇”于是在此义项下也产生“chóu”的读音。现代淘汰“雔”、“讐”，而在表仇雠、校对义时保留“讎”字，类推简化为“雠”，其余义项均以“仇”为正体。

## 靃（霍）

甲骨文为雨下三隹或雨下一隹。至西周，作一隹者消失，开始出现作二隹者。战国时，以作二隹者为主流，小篆沿袭，楷书作“靃”。隶变后又出现甲骨文中古老的从一隹的写法，也可认为是从两隹的省体，楷书作“霍”。又有俗体追加“又”，作“䨥”。现代以“霍”为正体。

本义为群鸟冒雨而飞发出的霍霍声，引申指疾速声、疾速、消散。

## 雙（双）

从又持雔，即手持两只鸟。类似“隻”字，“隻”是“獲”的本字，表捕获，引申指捕获鸟的量词，一鸟为“隻”，二鸟为“雙”。故“雙”的本义即是两只鸟，引申指偶数、匹敌、重复、伴随等。

***

# 雥部

## 雥

从三隹，会群鸟意。本义是群鸟，引申指丛集。

## 雧（集）

甲骨文下为木，上为一隹或一鳥或三隹。《说文》小篆继承从三隹的写法，楷书作“雧”。《说文》或体继承从一隹的写法，楷书作“集”。战国时又有或体在“集”之上再加声符“亼”，“亼”或省作“人”，此字形后淘汰。现代以“集”为正体。

本义是群鸟聚集在树上，引申泛指会聚汇合、成就，又引申指汇集成册的书、聚会交易场所（集市）等。

***

# 鳥部

## 鳥

甲骨文为鸟的象形，初“鳥”、“隹”同字，形音义并近，后逐渐分化。春秋时开始脱离象形，战国字形杂乱，小篆规整化，隶变后楷书作“鳥”，简化字“鸟”源自草书楷化。

本义是长尾鸟或泛指所有鸟。《说文》区分“隹”为短尾鸟、“鳥”为长尾鸟，但实际“隹”和“鳥”同源，构字时也经常互通，并没有严格的长短尾表意区别。

## 鳳（凤）

甲骨文像高冠、丰羽的鸟形，本义指古代形似孔雀的神鸟。商代晚期开始增加声符“凡”。此字常被借用作表“風”，金文以后二字逐渐分化：表空气流动的“風”字将鸟形简化只保留尾羽，至小篆讹为“虫”，作“風”；表神鸟的“鳳”字继续保留鸟形但省略繁复的冠羽，至小篆《说文》整理为从鳥凡声，即“鳳”。简化字“凤”由草书楷化而来。

本义为传说中的神鸟，雄为鳳、雌为凰，引申指婚姻关系中的男方，也指帝王，或比喻有圣德的人。后来龙图腾兴起，“鳳”沦为附属地位，逐渐变为女性的象征，与代表男性的龙相对，“鳳”成为“鳳凰”的简称，鳳、凰不再区分性别，统一代表女性。

## 鸞（鸾）

从鳥䜌声，楷书作“鸞”，现代简化字作“鸾”。本义是凤凰类的鸟。

## 鳩（鸠）

从鳥九声，本义是鸟名，也指一种行于沙中的运载工具，作动词表聚集、使安定。

## 鴿（鸽）

从鳥合声，即鸽子。

## 鴞（鸮）

从鳥号声，本义指鸱类，即鹞鹰，也指猫头鹰类，常被认为叫声不吉利。常见于“鴟鴞”一词。

## 鶹（鹠）

从鳥留声，指鶹離（或作鶹鷅、留離、流離）鸟，幼时长得美，长大变丑，食其生母。又指“鵂鶹”，即小型猫头鹰。实际“鶹離”、“鵂鶹”应都是猫头鹰类。

## 難（难）

从隹堇声，但声符是“堇”的讹体，后多变易，楷书作“難”。此字在《说文》中被列为或体，正体从鳥，隹、鳥形旁互通。但后世用“難”最为普遍。现代简化字“难”始见于明代，属于用记号替代声符。

本义是鸟，罕见用例，常假借作不容易、困难，读nán。又引申指灾难、责难，读nàn。又指茂盛貌，又作语气助词，读nuó。

## 鶴（鹤）

从鳥隺声，本义指水鸟白鹤，引申指白色、长寿。又可用“隺”表“鶴”，这一用法当看作俗字。

## 鷺（鹭）

从鳥路声，指水鸟白鹭。

## 鵠（鹄）

从鳥告声，指天鹅。引申指白色。又通“鶴”。

## 鴻（鸿）

本字为\\[工+隹]，从隹工声，《说文》或体从鳥工声，此字《说文》训为“鸟肥大”，将其与“鴻”视为两字，实际应是同一字的异体。从鳥江声的“鴻”字后起，本义指大雁，而所谓“鸟肥大”，盖因鸿鸟体型较大之故，《毛传》：大曰鸿，小曰雁。

古时有鸿雁传书之说，故引申指书信。又由其本义引申有“大”义，进一步引申指学识渊博、兴盛等。

## 鴛（鸳）

从鳥夗声，本义指鸳鸯，比喻指夫妻。

## 鴦（鸯）

从鳥央声，见“鴛”。

## 鵝（鹅）

从鳥我声，小篆为左鳥右我，隶变后产生“鵝”、“䳘”、“鵞”、“䳗”各种形体，其中“鵝”使用最广，现代定为正体，简化作“鹅”。

本义指家禽鹅，即驯化的雁。野生的称为鸿雁、鴚鹅，家养的称为鹅、舒雁。

## 鶩（鹜）

从鳥敄声，即家养的鸭。野生的称凫，家养的称鹜、舒凫。

## 鷀（鹚）

从鳥兹声，指水鸟鸬鹚。

## 鴇（鸨）

从鳥𠤏声，或体从包声作“䳈”，后以“鴇”为正体。本义指大鸨，一种类似雁而体型较大的鸟，善走不善飞。因此鸟雌雄个体外貌差异较大，古人误认为是两种不同的鸟，雌雄交配时被看作是与其他物种滥交，所以古人认为这种鸟性淫，用以代指老年妓女或妓院经营者。

## 鷂（鹞）

从鳥䍃声，一种猛禽，即鹞鹰、鹞子。

## 鷙（鸷）

从鳥執声，本义指凶猛的鸟，引申指凶猛、凶残。

## 鶯（莺）

从鳥𤇾声，本义指鸟羽有花纹的样子。也用作鸟名，指仓庚，即黄莺、黄鹂。

另有从賏的“鸎”字，是“鶯”更换声符后的异体字，出现于三国之后，后又出现“鷪”字，乃是“鸎”、“鶯”共同产生的讹体。现均淘汰。

## 鸚（鹦）

从鳥嬰声，本义是鹦鹉，一种会说话的鸟。因鹦鹉会学舌，作为文字浅薄的谦称。

## 鴆（鸩）

从鳥冘声，本义是传说中一种羽毛有剧毒的鸟，引申指用毒杀人，引申泛指有毒害之物。

## 鳴（鸣）

甲骨文从口从鳥，“鳥”或作“隹”、“鸡”，春秋以后只从鳥。隶变后楷书作“鳴”。本义是鸟叫，引申指一般的鸣响。

## 鷓（鹧）

从鳥庶声，指鹧鸪。

## 鴣（鸪）

从鳥古声，指鹧鸪。

## 鴨（鸭）

从鳥甲声，本义是家禽鸭子，又称舒凫、鹜。引申指鸭形香炉。

***

# 烏部

## 烏

西周金文像乌鸦之形，后字形多为没有眼睛、张嘴鸣叫的鸟形，因乌鸦通体黑色，难以分辨眼睛。西周以后分化为两种字形：一种保持完整的鸟形；一种将鸟喙脱离身体，讹为“人”形，战国时“人”下或再加两饰横，而左侧身体的部分最终讹变为“方”。第一种字形最终演变为“烏”，第二种则演变为“於”。

本义指乌鸦，引申指黑色，又因古时传说太阳中有三足金乌，故又引申指太阳。以上义主要由“烏”继承。“於”初期与“烏”表意无别，后逐渐被假借用作语气词（如於乎）和介词。其中表介词时本字为“于”，约公元前五百年左右开始将音近的“於”借作“于”使用，后世“於”、“于”并用，所介对象是地点时多用“于”，其余情况如表被动、表比较等则多用“於”，但并不绝对。

“烏”字现代简化为“乌”，“於”在做介词时简化字并入“于”，“於”表姓氏、人名、地名时则仍作“於”。

## 舄

西周金文像鸟张翅飞翔之形，战国时上部鸟翼与主体分离，至小篆，上部讹为臼形。隶变后作“舃”或“舄”。《说文》或体从隹㫺，作“䧿”，隶变从鳥，作“鵲”，现代简化作“鹊”。

本义指鹊鸟，读què。金文及古文献中中“舄”字多用于假借义，指木底鞋，又泛指鞋，读xì。“䧿”、“鵲”则表鹊鸟本义。

## 焉

最早见于战国晚期，左部为“烏”形，右上为“正”，小篆将两部分各省略部分笔画后合并，隶变后作“焉”。

本义指一种鸟，但具体所指种类不详。后世多用其假借义，作疑问代词（怎么、哪里、什么）、指示代词（此、之）、介词加代词（于此）、介词（于）、连词（则）、形容词或副词后缀表状态（然）、语气词等。以上义读yān。又通“夷”，对周边少数民族的蔑称，此义读yí。

***

# 𠦒部

## 畢

甲骨文像带有木柄的网状捕猎工具之形，或额外加“又”，表示手持。西周金文在上面加“田”，突出田猎之意，下部网状规整化，后演变为“畢”。甲骨文中从又的字形在西周变为从“攴”，后演变为“㪤”。现代简化字作“毕”，成为形声字。

“畢”本义指用于捕鸟的长柄丫杈形网具，引申指猎取、擒获，进一步引申为结束、终止。由结束义又引申为全部，此义可作“㪤”，后“㪤”废，统一作“畢”。又指毕宿，因其状似“畢”而得名。

# 糞（粪）

甲骨文从廾、从其（箕的本字），上有小点表示秽物，会双手持箕有所弃除之意。字形或额外从帚。战国时，“其”讹变作“𠦒”，上部的小点变作“米”，小篆从之，隶变后楷书作“糞”，今简化作“粪”。

本义为扫除、弃置，引申指污秽、粪便，又引申指施肥、使肥沃。

## 棄（弃）

甲骨文从廾、从子置于其（箕的本字）上，旁有小点，“其”亦声，会双手持箕抛弃婴儿之意。至金文，“子”倒置，省略“其”和小点，成为从廾从𠫓（倒“子”），此字形后作“弃”。而小篆承袭从其的字形，“其”讹变作“𠦒”，隶变后楷书作“棄”。现代采用笔画更少的“弃”为正，非简化字，而是战国时已有的异体字。

本义为抛弃、扔掉，引申指离开、废除、忘记、违背、背叛、放逐等。

***

# 冓部

## 冓

甲骨文像二鱼碰头之形，金文以后脱离象形，至小篆成为上下两个“冉”对称之形，隶变作“冓”。《说文》训为“交积材也”，即架积木材，与初文构形不合。

古文字材料中多用作“相遇、遭遇”义，此义后作“遘”。由相遇义引申指交合婚姻，此义后作“媾”。又假借为“篝”，表宫室深密处。

## 再

甲骨文字形是一条鱼的头尾处各加一横画，会重复得鱼之意。金文或累加横笔，或加口形，均为饰笔。小篆整理为从一从冓省，隶变作“再”。

本义为两次、第二次。引申指更加、重复、继续、另外等。

## 爯

甲骨文从爪持鱼（冓的一半）形，隶变作“爯”，本义是用手提物衡定重量，分别引申出举起和测重两个基本义项，由举起义引申出赞扬、述说义，由测重义引申出适合、重量单位、测重器具等义。后分化出专字“偁”、“稱”，“偁”继承举、赞扬、述说等义，“稱”继承测重及其衍生义，后“偁”、“爯”的全部义项由“稱”取代，“稱”字现代简化字作“称”。

***

# 幺部

## 幺

甲骨文像丝束之形，直至小篆均变化不大，楷书作“幺”。《说文》训为“象子初生之形”，不确。俗体作“么”，现代简化字将“麽”简化为“么”后，“么”不再作为“幺”的异体字存在。

本义指微小，引申指最小的、排行最末的。俗语中将一称作幺，即是取最小的自然数之意。又作颜色名，此义后通作“𢆶”、“幽”、“玄”。

## 幼

从幺从力，会力量小之意，本义指年少、初生的。引申指小孩，又引申指爱护。

## 麽

从幺从麻、麻亦声，近代字形又或从“么”（“幺”的俗体），现代简化字取其下部，将“麽”简化作“么”，“么”不再视作“幺”的异体。

本义指细小。假借作语气助词，如“这么”、“那么”。又假借指“什么”，犹今之“嘛”。又用在句末表疑问。

## 𢆶

从二幺，像两束丝相并之形，“幽”的本字。本义指微小，引申指微妙、隐暗不明等。又作又作颜色名。

## 幽

本作“𢆶”，由“𢆶”的微明之义引申指微火之色，于是分化出从火的专字表此义。后“火”讹作“山”，成为“幽”字。《说文》释为从山，有误。

本义为微火之色。或指黑色，假为“黝”。其本字“𢆶”有昏暗微弱义，由此引申出幽静、优雅、隐蔽、囚禁等义。

## 幾（几）

从戍从𢆶，会兵事隐微莫测之意。战国时“𢆶”或省作“幺”。小篆承袭主流字形，隶变后作“幾”。现代简化字并入几案之“几”。

本义为细微、隐微。引申指事情的苗头、迹象，进一步引申指机会、事务、机关、危险等义，这些义项后分化出专字“機”承担。由本义又引申出将近、几乎义，也引申指不定的少数，由此又引申指多少，此义音转读上声。

***

# 叀部

## 叀

像纺砖之形，是“專”的本字，详见“專”字，此义读zhuān。又假作语气助词，相当于“惟”，或表强调、主观愿望。又用作仁爱、和顺义。以上义读huì。

## 惠

初文为“叀”，后追加心旁作“惠”，本义为仁爱。此义或说是“叀”的假借义，或说是会心专一之意，引申而得仁爱义，但可以确定的是金文时期“叀”已经有仁爱之义。由仁爱义引申指恩惠，又引申指赐予、赠予、顺从、和顺等义。后常作敬辞。

***

# 玄部

## 玄

初文为“幺”，表颜色义时分化出专字“玄”。本义指赤黑色。“玄”、“𢆶”、“幽”三字同源，义项互有交叠，“玄”亦有隐晦幽远、微妙义，引申指奥妙，又引申指虚幻、不可靠。

## 兹

初文为“𢆶”，春秋时分化出从二玄的字形，即“玆”，本义为黑色，引申指浑浊，读xuán。战国时又出现从艸、絲省声的“茲”字，《说文》训为“草木多益”，读zī。或认为“玆”、“茲”实为一字之异体，即将“茲”上的艸视作由两个玄的上端讹变而来；或认为此为不同的两字，本义无涉。因字形相近，后世均写作“兹”。

从二玄的“玆”字基本只用于本义。从艸絲省声的“茲”字由“草木多益”引申出“益、愈加”义，后作“滋”。又用作近指代词，相当于“此、这”。

***

# 予部

## 予

金文字形为上下两个三角形相接，构形解释说法如下：

1.  是“吕”的分化字，将“吕”的上下两部分粘连在一起，为“野”、“豫”、“舒”等字所从。
2.  连环之形，是“雍”的本字，有“合、通”之义。但“雍”所从的应是“宫”的本字，作声符，故此说不确。
3.  指事，象以手推物付之。

秦系文字在下部加竖画，六国文字则加“八”形。隶变后楷书作“予”。

本义是给予，引申指赞许，又假作介词相当于“与、同”，以上义读yŭ。又作第一人称代词，相当于“余”，又作介词相当于“于、在”，以上义读yú。

## 舒

战国时为上下结构，上从余，下从予，余、予均兼表声。小篆变为左右结构，左侧在“余”下加“口”作“舍”（“舍”为“余”的分化字），隶变后作“舒”。

本义为伸展，引申指展现、放开、散开，又引申有迟缓义，由此引申出缓解、调畅、安详义。

## 幻

西周金文为“幺”上引出一长弧笔，战国时弧笔与幺分离，“幺”或作“糸”，小篆讹作从反予，楷书依古字形，作“幻”。

构形本意不明，段玉裁所谓“使彼予我”是依据“从反予”的讹形作解释，不确。较为合理的推测应是与“幺”、“𢆶”、“玄”这一系列字的微妙、隐晦、幽远等义相关。《说文》本义是“相诈惑”，又有虚幻、奇异的变化等义。

***

# 放部

## 放

从攴方声，本义指驱逐，引申出释放、放任、开放、发放、放置等义，以上义读fàng。又指仿效、依据，读fǎng。

## 敖

甲骨文为人形上部带“屮”形，人首处或羡加饰点，饰点或作横。金文累加攴旁，顶部“屮”形或繁化成“出”形，小篆将加饰点的人形讹为“方”，《说文》释为“从出从放”，不确。隶变后楷书作“敖”。

本义为某一族人的专名，也作地名，此义后世加阜旁作“隞”。古文献中多借表游玩义，此义后加辵旁作“遨”。

## 敫

从白从放，会放发光亮之意，本义为光芒闪耀，引申指显明。

***

# 𠬪部

## 爰

甲骨文为上下两手中间持“|”状物，会援引之意。金文以后将“|”音化为“于”，或讹作“工”。隶变后作“爰”、“𤔌”。《说文》将“爰”、“𤔌”别为二字，或应视作一字之异体。

本义是援引、拉，是“援”的本字，引申出援助、引用依据等义，以上义后作“援”。又有变换、更换义，又假借作语气词、连词、介词、代词等。

## 𤔔

“亂”的本字。甲骨文为上下两手持“幺”（束丝），会整理紊乱的丝线之意。金文以后在“幺”中间加一个类似“冖”形的线轴，或在两侧累加四个口。隶变后中间的“冖”形拉长作“冂”，下部的“又”或作“寸”，楷书仍从“又”，字形作“𤔔”。

本义包含治理和紊乱两个方面。从战国时产生累加“乙”旁的“亂”字，逐渐取代了“𤔔”，详见“亂”字。

## 受

甲骨文从𠬪从舟、舟亦声，会双手授受舟之意。直至战国，字形变化不大。小篆改为从舟省声，声符变成类似“冖”形，隶变后作“受”。

本义包含授予和接受两个方面。前者后世造从手的专字“授”来表示，“受”则变为专表接受义。由接受义引申出遭受、收取、容纳、买入、继承、应和、禀受等义。

## 爭（争）

甲骨文为上下两手争夺“凵”状物，会争夺意。金文以后，所争夺之物变为一竖弯笔，且与下部手形交错。隶变后楷书作“爭”，唐宋时产生简化写法“争”，为现代简化字所采用。

本义是争夺，引申为争斗、辩论、竞争等义，以上义读zhēng。又有规劝义，此义后作“諍”，读zhèng。

## 寽

西周金文为上下两手中间持一点状，后点变为横画。战国时下方或再加一短笔，使得下部的手成为“寸”。小篆将中间的横画移至下方，或可视作省略了中间的横画，而下部的手继承战国或体作“寸”。《说文》释为“从𠬪一声”，或说为“从爪从寸”，盖均非造字本意。

本义为手握条状物顺着向一端滑动，引申指摩擦，以上义后世造专字“捋”。又作重量单位，后世作“锊”。

## 敢

甲骨文下部为两只手握一叉状武器，上部为反写的“豕”，即手握猎叉刺向野猪，会勇敢之意。西周金文将两只手省作一只手，猎叉与反豕合并讹变，下半部先讹作“口”，后讹作“甘”，至小篆，猎叉与反豕已讹变为爪+古，《说文》又将讹变出的“爪”与右侧的手形整体看作“𠬪”，所谓“从𠬪古声”，已非造字本意。战国时右侧的手形“又”或作“殳”，属于义近形旁互换，汉隶从之，左侧进一步讹变，楷书作“敢”。

本义即勇敢、有胆量。引申指敢于做某事。又作为“岂敢”的省语，用法相当于“不敢”，引申作谦辞，有冒昧义。由冒昧义又引申指冒犯、侵犯。

***

# 𣦼部

## 𣦼

从又从歺，会手执残骨之意，本义为残穿、穿凿，引申为残败义。

## 㕡（壑）

从𣦼从谷，“𣦼”有穿意，会穿地为沟谷之意。或从土作“壑”。本义为山沟、深谷，引申指坑、护城河等。

## 叡（睿）

从目从㕡省，会以目光深邃洞察之意。本义是深明、通达。又有省体作“睿”，现代以“睿”为正体。

***

# 歺部

## 歺（歹）

甲骨文字形像残骨，本义即是剔去肉后的残骨。隶变后作“歺”，后产生变体“歹”，读è。多作偏旁，很少单独使用，甲骨文中也多用于假借义，如假“歹”为“烈”。

唐末、五代时北方口语中开始将“歹”字用于“恶劣、不好”义，读dǎi，此义实源于藏文，本作“𣦶”，后用“歹”混指。宋代传入南方，由口语进入书面语，元代以后普遍使用。

## 殄

从歺㐱声，本义为尽、绝，引申为病。

## 𣨛

从歺卒声，本义指大夫死，引申泛指死，又引申指终结。是“卒”在表以上义项时的专用分化字，也可通作“卒”。

## 殊

从歺朱声，本义是断绝，引申指死。又由断绝义引申出差异、区别义，进一步引申指特殊，由特殊义又引申作程度副词表大、甚。

## 殤（殇）

战国字形从歺昜声。至小篆写作“殤”，此字形《说文》释为“从傷省声”，实际应为“从𥏻省声”，“傷”也是从𥏻省声的。

本义指人未至二十岁而死。

## 殂

战国字形作从歺𠭯声，或从歺作声（ 𣨐）。秦文字为从歺且声，𠭯、作、且古音近。

本义为死亡，为避讳说“死”，将尊贵人物的死成为“殂”，实为借“䢐”、“徂”的去、往义代指死。

## 殛

从歺亟声，本义为诛杀，引申指惩罚、流放。

上古传说鲧治水不利，被舜殛于羽山，此处的“殛”大概率不是诛杀，而是流放。

## 殯（殡）

从歺从賓、賓亦声。本义指人死后停棺待葬，周人停棺于西阶，西阶属宾位，故从賓。后泛指丧葬事务。

## 殣

从歺堇声，本指饿死之人被掩埋在路边。有三重含义：饿死、路冢、埋葬。

## 殠

从歺臭声，本义为腐臭气味，泛指不好的气味，是表香臭之臭（恶劣气味）的专用字，而“臭”字本只是表气味，不分香恶与否，后“臭”逐渐用于“殠”义，“殠”也逐渐废弃。

## 㱙（朽）

从歺丂声，异体从木作“朽”。本义为腐烂。现代以“朽”为正体。

## 殆

从歺台声，本义为危险、危亡。引申有败坏义。又引申出畏惧、疑惑、困乏义。又表大概、仅仅、必定、将要、乃等义。

## 殃

战国字形为从心央声，上下结构。小篆从歺央声，左右结构，楷书作“殃”。本义为祸害、灾难。引申指危害。

## 殘（残）

从歺戔声，本义为伤害、杀害。引申为毁坏、毁灭。又引申出残缺、剩余、凶狠、酷烈等义。

## 殲（歼）

从歺韱声，本义为尽、消灭。现代简化字替换声符作“歼”。

## 殫（殚）

从歺單声，本义为用尽、竭尽。

## 殖

从歺直声，本义指脂膏久置变质，引申指生长、繁殖，进一步引申指增加、货殖、树立、种植等。

***

# 死部

## 死

从人从歺（残骨），象生人拜于朽骨之旁，会死亡意。至小篆字形变化不大，隶变后“人”讹为“匕”，字形作“死”。

本义为生命终止，引申指为某事而死、拼死、灭、绝、不灵活、牢固、难以动摇等义。

## 薨

从死、瞢省声，周朝指诸侯死，后世有封爵的大官死也称薨。

***

# 冎部

## 冎

甲骨文像骨架形，后渐讹作“冎”，或加口作“咼”。是“骨”的初文，指骨头。《说文》本义为“剔人肉置其骨”，即“剐”义，应是后起义。“剐”字即是“冎”的同源分化字。

## 𠛰（别）

甲骨文从冎从刀，会以刀剔骨、使其分离之意。隶变后“冎”上部讹为“口”，下部讹为“刀”，作“別”。后又将左下部进一步讹为“力”，作“别”。

本义为分解、使分离。引申出分离、违背、区分、不同、分类、另外等义。由违背义又引申表劝阻，相当于“不要”。

“别扭”一词中的“别”本字为“彆”，从弓敝声，本义指弓末端反曲处，引申有执拗、别扭义。明代时即出现以“别”作“彆”的简化俗字，为现代简化字所采用。

***

# 骨部

## 骨

初文为“冎”，像骨架之形。战国时累加肉旁而成专字“骨”。古隶或省作“肎”，后成为独立字“肯”，见“肯”字。

本义为骨头，引申指尸骨、起支撑作用的物体、事物的核心基础部分、支撑人精神的品格等。

## 髑（骷）

从骨蜀声，不单用，与“髏（髅）”字组成联绵词“髑髏”，合音为“頭”字，本义指头，后专指人的头骨。由于语音变化，后将声旁“蜀”替换为“古”，作“骷”。词义又扩大指人的整副骨架。

## 髀

从骨卑声，《说文》古文为从足卑声，作“䠋”。本义为大腿，也指大腿骨，古代又把测量日影的表称作“髀”。

## 髁

从骨果声，本义指股骨头，即髀骨上端的球状凸起，从果声的字所指事物多有圆凸形状的特点。又指膝盖骨，现在方言中“髁膝盖”一词即此义。

## 髖（髋）

从骨寬声，简化字作“髋”。本义是胯骨，也代指臀。

## 髕（膑）

从骨賓声，简化字作“髌”，又有俗体从肉作“臏”，简化字作“膑”。本义为膝盖骨，引申指剔掉膝盖骨的酷刑。

## 骸

从骨亥声，本义指小腿骨，引申泛指骨、尸骨。

## 體（体）

最早见于战国，有从骨豊声（體）、从肉豊声、从身豊声（軆）三种异体，所从形符互通。后世以从骨的“體”为主流。后又出现“骵”、“躰”、“体”三种俗体，“体”用作“體”的俗体约出现于宋代前后，“体”同时也是“笨”的俗体，属于同形字。现代选用“体”作“體”的规范简化字。

本义指身体，全身能看到的外部器官的总称，不包括内脏，与心相对。也指身体的一部分，如“四体不勤”中的“四体”即指四肢。又引申指事物的外部形态、事物的主体、事物的本质、事物的形式规制，进一步引申指辨别区分。由本义又引申指亲身，进一步引申指体会、体谅、体贴、体察等。

## 骾（鲠）

从骨更声，本义指骨、刺卡在喉咙中。因卡喉咙的多为鱼刺，后世多写作从魚的“鯁”，简化字作“鲠”。《说文》将“鯁”单列为一字，训为“鱼骨”，实为“骾”的异体，与“骾”用法无别。

由本义引申指病患、祸害。因忠言逆耳，如食骾在喉，故也引申指性格刚直，如“骨鲠之臣”。

***

# 肉部

## 肉

甲骨文像肉块横放之形，西周时表示肉纹理的部分繁化作两笔，春秋以后字由横势改为纵势，隶变后两条弯曲的纹理各作两笔书写，楷书作“肉”。作偏旁时与“月”形近，隶变后多与“月”混同。

本义指供食用的动物肉，又引申指人皮肤、肌肉和脂肪的总称，也专指肌肉。又引申指蔬菜瓜果可食用的部分、物体的瓤等。

## 肧（胚）

从肉不声，后也作“胚”。本义指初期发育的胎儿（或说孕一月，或说三月），引申作动词指怀孕。

## 胎

从肉台声，本义指母体内早期的胎儿（或说孕三月，或说四月），引申为胚胎的总称。引申指初始、起因、孕育等。

## 肌

从肉几声，本义指人的肉。先秦时“肌”指人的肉，“肉”指禽兽的肉，后渐不区分。又引申指皮肤。

## 膚（肤）

西周金文从肉𧆨声，上下结构。“𧆨”为“盧”的初文，二者实际为一字。《说文》籀文从肉𧆨声，作“膚”，小篆从肉盧声，作“臚”。“膚”、“臚”本为一字之，后世用法逐渐分离：“膚”表皮肤义，简体作“肤”（声符“𧆨”替换为“夫”，战国楚简已见，宋元时开始流行，现代定为正体）；“臚”表陈列义，简体作“胪”。

本义指皮肤，引申指物体的表层，又引申有肤浅义。分化出的“臚”（胪）字则由皮肤的本义引申指陈列、陈述、传言，古代官名“鸿胪”即用“传陈”义，表示大声传赞、引导仪节，主掌外交事宜。

## 脣（唇）

从肉辰声，本义是嘴唇，引申指边缘。从口辰声的“唇”本义是惊，与“脣”本是两个不同的字，后将“唇”假借用作“脣”义，沿用已久，现代将“唇”作为嘴唇义的规范字。

## 肓

从肉亡声，指心脏与横膈膜之间的部位，古人认为是药力达不到的地方。“病入膏肓”一词中“膏”指心尖脂肪，与“肓”同为古人认为药力达不到的部位，以此表示病重无药可治。

## 腎（肾）

从肉臤声，简化字作“肾”，指肾脏，五行属水。

## 肺

从肉巿（fú）声，《说文》大徐本作“从𣎵声”，有误，声符当是“巿”。指器官肺，五行属金。因肺附于肝，故以“肺附”表亲近、亲近的人，后又写作“肺腑”。而“肺腑之言”中的“肺腑”则是用本义，用脏器代指内心，“肺腑”、“肝肠”、“肝胆”、“心肝”等皆是此类用法。

## 脾

从肉卑声，指脾脏，五行属土。

“脾气”一词本指脾脏之气，五志中脾志为思，脾又为仓廪之本，主运化，支撑人体生命活动，所以脾气被认为构成一个人的基础性格，故用来指人的性情。“脾气”本身指各类性格，包括好的和坏的，后来常专指怒气，如“发脾气”。而五志中肝志为怒，单论怒这一项“肝气”比“脾气”更贴切。

## 肝

从肉干声，指肝脏，五行属木。肝、胆相连，习语中肝胆常连用。

## 膽（胆）

从肉詹声，现代简化字替换声符为“旦”，作“胆”。指胆囊。《素问》：“胆者，中正之官，决断出焉。”，因此引申指勇气。由胆囊的形态引申指物体内层可容它物的东西。

## 胃

春秋金文上部“𱕻”为胃的象形，加形符肉组成“胃”字。战国后多省去上部中的小点，隶变后上部讹作“田”。

本义为器官胃，先秦多假“胃”为“謂”，后造专字“謂”。由本义引申指食欲，用于“胃口”一词，进一步引申指兴趣。

## 脬

从肉孚声，指膀胱，今俗称“尿脬”。由膀胱的形态引申指鼓起而轻软之物，如鱼鳔。

## 腸（肠）

从肉昜声，指器官大小肠。引申指内心、情怀，如衷肠、心肠、肝肠等。

## 膏

甲骨文从肉，上部为“高”的初文，表声。或在底部加口。周以后将口移至“肉”上放，变为从肉高声，隶变后楷书作“膏”。

本义指油脂，特指无角动物的油脂（戴角动物的油脂称“脂”）。引申指粘稠状物。又引申指事物的精华、肥、肥沃、滋润，进一步引申指恩惠。中医又称心尖脂肪为“膏”，与“肓”（心脏与横膈膜之间）连用代指药力无法到达之处。

## 肪

从肉方声，本义指脂肪，也指食物的油脂，特指动物腰部肥厚的油。

## 膺

甲骨文为隹（鸟）胸部加一点（指事符号），表示胸部。周代追加形符“人”，“人”后又讹变为“𤕫”，中间的指事符号则讹为“人”，此字形隶变后作“𨿳”，或省作“䧹”。此字也被借作表“鹰”（也可能不是假借，而是造字之初即兼表此两义），见“鹰”字。后分化出从肉的专字“膺”表胸部义，以及从鳥的专字“鷹”表猛禽鹰义。

本义为胸，引申指内心。又引申为受、承受，此动词义与“肩”类似，都是由身体部位的受力作用而来，所谓“当事以膺，任事以肩”。

## 肊（臆）

《说文》小篆从肉乙声，或体从肉意声，现代以“臆”为正体。本义指胸骨，也指胸部，引申指胸怀、内心，又引申指主观猜测。

## 背

初文为“北”，像两人相背对，会意。而北字后又用以指方位等义，于是造从肉的专字“背”表本义。

本义为背对，引申指后背、脊背，泛指物体的后面。由背对义又引申为背对着诵读，即背诵义。又引申指离开、违反、抛弃、背叛等义。以上义读bèi。由脊背义又作动词表示用脊背驮，读bēi，此义后作“揹”，现代简化字又合并回“背”。

## 脅（胁）

从肉劦声，作“脅”或“脇”。现代简化字将两个力省作两点，简化为“胁”。本义为腋下肋骨以外、大臂以内的位置，也指肋骨。引申指旁侧。人挟持东西时即是将东西夹在肋下，于是也引申有胁迫、劫持、威胁义。

## 膀

从肉旁声，或体从骨作“髈”。本义指肩以下、肘以上的部分，俗称膀子。《说文》“脅”、“膀”互训，共同构成胁持这一动作所用到的身体部位，“脅”为内，“膀”为外。引申指鸟类的翅膀。以上义读bǎng。又指膀胱，读páng。

## 肋

从肉力声，本义为肋骨，引申指胸部两侧。

## 𦙪（肩）

甲骨文像肩胛骨之形，后累加形符肉作“𦙪”。俗体从户，作“肩”，乃是讹形，与门户之“户”无关。

本义指肩胛骨，也指肩膀部位。因人常用肩部扛、挑重物，所以引申出担负义，又引申有任用义。

## 胳

从肉各声，本义指腋窝。今“胳膊”一词指手臂。

## 臂

从肉辟声，本义指胳膊，手上肩下的部分。引申指动物的前肢、器械伸出似臂的部分。

## 肘

甲骨文为手臂底部弯曲处加一指事符号，表示肘部。后此字形与“寸”形近混同，于是加肉旁作“肘”，与方寸的“寸”本义无关。“守”、“討”、“紂”等字皆以“肘”初文为声符，而非“寸”。

本义指大小臂之间的关节，引申作动词指用肘触人。

## 腹

甲骨文从身复声，或从人复声，春秋以后多从肉，作“腹”。本义指躯干胸以下的部分，俗称肚子。引申指物体中部或中空的部分。常与“心”连用表亲信或内心。

## 腴

从肉臾声，本义为腹下肥肉，引申指土地肥沃、食物甘美。又引申指事物的精髓。

## 胯

从肉夸声，指两股（大腿）之间。

## 股

从肉殳声，本义指大腿。人自腰以下分为两腿，故引申有分支、部分之义。又引申作量词用于成条的、成批的、一节一节的事物。大腿和大臂均有力，所以“股肱”一词指强大、得力的助手。

## 腳（脚）

从肉卻声，“卻”本从𧮫声，隶变时或从“去”声作“却”，故“腳”也或作“脚”。

本义为胫，即小腿。又指足，即今天的常用义。引申指物体最下端。又指沉留的残渣，如“下脚料”。“脚色”一词本义为初入仕的人需开具的履历出身说明，有人物背景的含义，从而引申出戏剧中演员扮演的人物之意，也指差事、某一类型的人物等，后因音近转写作“角色”。表剧本或手稿的“脚本”一词或说是源于“脚色之本”，或说是因剧本手稿多有脚注而得名，而“脚注”一词即是指书页下端的注文，由脚的“下端”义引申而来。

## 脛（胫）

从肉坙声，本义指小腿，泛指人或动物的腿。

## 腓

从肉非声，即腓肠肌，俗称腿肚子。又指古代剔除膝盖骨或断足的酷刑。

## 肖

春秋文字或从肉小声，或从肉少声，“小”、“少”本一字之分化，古音相通，此处或兼表义。

本义为相似、相像，引申指刻画人像、仿效，以上义读xiào。又有细微、渺小义，引申指衰退、消失。

“肖”作为常见姓氏，始于20世纪70年代推行二简字，将“肖”视作“萧”的简化字，登记户口时大量民众将“萧”姓改为“肖”，后二简字废除，因户口信息修改不便，致使“肖”姓大量留存。而历史上真正以“肖”作姓氏的例子极罕见，仅汉代、明代有孤证。先秦时有姓氏作“肖”的，均是“趙”的通假。

## 胤

构形不明。西周字形中部为从幺从肉，两侧类似“八”形但与“幺”相粘连。春秋时两侧分离成“八”形，战国时或繁化为四笔。小篆承袭春秋字形，隶变作“胤”。

从肉表骨肉血统，从幺表重迭，两侧所从的义符如看作“八”，则有“象其长”（表绵长）和“分也”（表分支派别）两种解释，但初文是否从八仍不确定。

本义为子孙相承。引申指子孙、后裔。

## 胄

从肉由声，指帝王和贵族后代。与甲冑之“冑”是不同的两个字，后者从冃（帽的初文）由声，此二字隶变后字形常混同，本义无涉。现代简化字将“冑”并入“胄”。

## 膻

从肉亶声，本义为脱去上衣露出身体，读dàn。用于穴位名“膻中”后，多用“襢”、“袒”表“膻”的本义，“襢”为后起字，替换形符而来，“袒”本义为衣缝开裂、绽开，引申为脱衣露肉义，或说此是假借。此义现代以“袒”为正。

表羊肉味道的“膻”本字为“羴”，后世也写作“膻”，读shān，与表袒露义的“膻”为同形字。

## 脱

从肉兑声，本义指过于消瘦。人过瘦似肉离其骨而去，如蝉蜕，故又引申有离开、掉落、取下、缺漏等义。又引申指言行轻慢、洒脱、轻快等义。

## 肬（疣）

初文为“尤”，甲骨文为“又”（手）上加指事符号，或说表示手上长的肉瘤，或说表示多出的手指，“尤”字有肉瘤义，又引申出“多余”、“过错”、“责备”、“突出”等义，于是造从肉的“肬”字表肉瘤本义。籀文从黑。后世或体作“疣”，现代以“疣”为正。

## 腫（肿）

战国文字从肉童声，作“朣”，与“朣朦”之“朣”同形，小篆以后从重声，作“腫”。现代简化字从中声，作“肿”。本义指皮肤肌肉凸起、肿胀，引申指粗大笨重、不灵活、系统繁杂等。

## 臘（腊）

从肉巤声，本义是古人在岁终时举行的一种祭祀，因臘祭举行于夏历十二月，故称其为臘月，在臘月或冬天腌制后做成的肉干称为臘肉。

从肉昔声的“腊”字本义为干肉，读音xī，与“臘”在干肉这一义项上有重合，于明清时被借为“臘”的简化字，为现代简化字所采用。

## 隋

春秋文字从肉，声符为“从阜圣（非聖）声”的形声字，其中的“圣”乃是“从又从土”，后“土”讹变为“工”，又或繁作“隓”，是“隳”的本字。《说文》所谓“从肉，隓省声”，不确，声符本就是“隓”的初文。隶变后作“隋”。

本义指祭享后所剩余的肉，又通“堕”，读duò。又读suí，为隋朝国号。

## 膳

西周时只作“譱”，战国时追加肉旁，后又省去一“言”，小篆从之，隶变后作“膳”，或从食作“饍”。

本义指准备饭食，又指进献食物，引申指烹调、吃饭，作名词指饭食，一般指肉类美食。

## 肴

从肉爻声，楷书将“爻”下部拉平，作“肴”。指做熟的鱼肉等食物。

## 腆

从肉典声。《说文》古文为上典下日，“日”应是“月”之讹，“月”又是“肉”之讹，此上下结构字形即“䐌”，为“腆”之异体。

本义指饭菜丰盛，引申指丰厚，又引申为善、美。由“厚”义引申出凸挺胸/腹（如腆着肚子）、厚脸皮（如腆冒、腆颜）义，形容厚脸皮时通“覥”。

## 胡

从肉古声，本义为牛脖子下的垂肉，引申泛指动物颔颈下垂处。类比到人又指喉咙（胡咙）或胡须，胡须义后造专字“鬍”。引申有长远、长寿等义。又作为音译词指代西北少数民族，常作为对异族的蔑称，又由此产生胡乱、胡来等义。又通“何”，古音通，用于疑问句。

## 膘

从肉票声，本义指牲畜小腹两边的肥肉，引申泛指肥肉。

## 脯

战国时从肉父声，小篆作从肉甫声。本义为干肉，作动词指制成干肉。又引申指干果，如果脯。以上义读fǔ。又指人或动物的胸部，读pú。

## 脩（修）

战国文字或从肉攸声，或从食攸声，后世皆从肉。本义指加姜桂等香料捶制而成的干肉，又称锻脩、腶脩。古代从师以送“束脩”为礼，故用以指学生付给教师的酬金。又引申指干枯。秦汉以后，除“干肉”相关义项专用“脩”外，“脩”皆与“修”通用。

## 胥

从肉疋声，本义为蟹酱。又有其他音近假借义（或说是引申义），如相互、皆、辅助，又通“须”表须臾、等待，通“疏”表疏远。又用作掌管捕捉盗贼的小官吏，后作“偦”。又指有才智之士，后作“諝”。

## 胜（腥）

从肉生声，本义指狗肉腥味，泛指肉的腥臊气味，也指生肉。后因语音变化，渐与其声符“生”的发音有别，故转用“腥”字表示，而“腥”字本义指猪肉中米粒状息肉，此处被借用作腥臊义，后成为正字。现代将“胜”作为“勝”的简化字，“胜”与“勝”本义无涉。

## 臊

从肉喿声，本义指猪肉腥味，泛指肉或动物体上的腥臭味，引申指丑恶，以上义读sāo。又指剁细的肉、害羞，以上义读sào。

## 腥

从肉从星、星亦声，本义指猪肉中米粒状息肉。又指腥臊味、生肉，同“胜”（非“勝”），见“胜”字。又指带腥气的肉食，如“荤腥”。

## 脂

从肉旨声，本义指油脂，特指戴角动物的油脂（无角动物的油脂称“膏”）。用作动词指用脂膏涂抹。表示化妆品的“胭脂”一词本为匈奴语音译，匈奴人称妇女为“阏氏”，生长有红蓝花（胭脂原料）的山名为“焉支山”，此类植物颜料化妆品最初写作“燕支”，南北朝时期在其工艺中加入动物脂膏，于是转写作“胭脂”。

## 膩（腻）

从肉貮声，本义指表层脂肪，引申指光滑、污垢、粘稠、亲昵、厌烦等义。

## 膜

从肉莫声，本义指生物体内薄皮形组织，引申泛指薄皮状物。又有拜义，如“膜拜”，此义与薄膜义无关，最初读音为mú，与“薄膜”之“膜”或为同形字，后读音合并，统一作mó。另外，膜拜一词应与佛教无关，其出现早于佛教传入中国，见于《穆天子传》。

## 膾（脍）

从肉會声，本义指细切的肉、鱼。

## 腌

从肉奄声，本义指用盐浸渍肉类，泛指用调料浸渍食物。

## 散

甲骨文从林从攴，作“㪔”，会芟除草木之意。西周金文或将“林”变作“艸”，又追加声符“月”。小篆将“月”讹为“肉”，成为从肉㪔声，《说文》训为“杂肉”。隶变后“林”讹作“龷”，楷书作“散”。

本义指芟除草木，引申指使分离，进一步引申指分离、分发、排遣、松开、零碎、杂乱、潇洒、懒慢等义。

## 腐

从肉府声，本义指朽烂、变质，引申指陈旧过时，又指施以宫刑。

## 肎（肯）

由“骨”字省变而来，隶变后或讹作“肯”。《说文》本义为附在骨头上的肉。“中肯”一词即用本义，引申指切中要害。又假借作“可”，表应允，引申指愿意。

## 肥

从肉从卪，“卪”为“節”的初文，所会之意不明（徐锴认为是肉多需要节制，此说较牵强）。隶变后“卪”写作“巴”，楷书作“肥”。

本义为肉多，引申为肥沃、茁壮、宽大、肥料等义。

## 腔

从肉从空、空亦声，指人和动物体内的空处，引申泛指物体内部空的部分。声音由口腔、鼻腔、胸腔等腔体发出，故又引申出口音、曲调等义。

***

# 筋部

## 筋

从力从肉从竹，会意，指肌腱或韧带。或说因竹多筋故从竹，或说因筋多附于关节，而竹多节，故从竹。秦汉简帛或从刀不从力，应是从力的讹变。

由本义引申指筋状物、皮下静脉、肌肉等。

## 䇟（腱）

从筋、从夗省声，《说文》或体从肉建声（《说文》言从肉、建，应漏“声”字），作“腱”。本义为肌腱，引申特指供食用的蹄筋。

***

# 刀部

## 刀

商代金文像刀器之形，甲骨文将线条简化为两笔，后世沿袭，隶变后作“刀”。本义即是刀具，可作兵器也可作切割工具。由兵器名引申指用兵征伐。又指古代一种形似刀的钱币。又指小船，后作“舠”。

## 削

从刀肖声，本义指用刀斜刮。引申指分割、削除、削减、削弱、剥削等义。

## 利

甲骨文或从禾从勿（刎初文），或从禾从刀，勿、刀形、义皆近可互通，会锋利意。从勿的写法一直延续到战国，后世以从刀的字形为正。

由锋利义引申出速度快、顺利、便利等义，进一步引申出吉利、好处、利益等义。

## 初

从刀从衣，用刀裁布是制衣之始，会起始意。本义为开始、起始，引申指第一个、级别最低的、当初、早先等义，又作副词相当于刚刚、才。

## 前

本作“歬”，表前进、前方等义，详见“歬”字。战国时造从刀歬声的字，隶变后作“前”，表以刀齐断义，是“剪”的初文。后常假借“前”表“歬”义，久借不还，“歬”渐废，另造累加刀符的“剪”字表齐断义。

## 剪

本作“前”，从刀歬声，表以刀齐断义，详见“前”字。后世“前”被借作表“歬”义，于是累加刀符造“剪”字表“前”的本义。引申指用于齐断物体的刀具，即剪刀。又引申为拦截、挥动等义。又引申出除灭、杀戮、削减义，此义后又借“翦”表示，“翦”本义为初生的羽毛，被借用作“剪”的除灭等义。

## 則（则）

西周金文从刀从鼎，又或从二鼎，会用刀刻鼎铭为准则之意。战国时鼎足被简省，“鼎”讹作“貝”，后世从之，隶变后楷书作“則”，现代简化字作“则”。

本义指准则、规范，引申指规章、榜样，又作动词表按等级划分、遵守、效法等义。又引申作量词，用于计量篇幅短小的文字。又作副词，相当于就。

## 剛（刚）

甲骨文从刀从网，以刀砍断网绳会坚硬、刚强意。周以后网下加刀成为声符“岡”，成为形声字，楷书作“剛”，现代简化字作“刚”。

由坚硬、刚强义引申指刚正、刚直，又引申指坚硬的金属名，后作“鋼”。又作副词表仅仅、恰好、不久前、才等。

## 切

本字为“七”，甲骨文字形为“十”形，一横一竖交叉表切断义，而数字“十”的甲骨文为一竖中间加一点。后“十”中间的一点演变为短横，与“七”形近，区别为“十”竖长横短、“七”竖短横长，但易混，战国时遂将“七”的竖画弯曲，隶变后楷书作“七”。后“七”被借作数字名，于是加刀旁造“切”字表切断的本义。

本义为切断，引申指加工骨器，又引申指互相研讨，以上义读qiē。因刀切断物体时需要紧贴物体，故引申出接触、摩擦义，引申出贴近、相合、急迫、深切、诚恳、把脉等义。由急迫、诚恳义引申作副词表务必。以上义读qiè。

## 刻

从刀亥声，本义指雕刻、刻镂。引申指削减、严格要求、深、急迫等义。由严格要求又引申出苛刻、刻薄等义。古时以漏壶计时，上有刻度，故引申出时间单位义，进一步引申指一段短暂的时间。

## 副

从刀畐声，《说文》籀文及战国字形或双写声旁。本义指用刀将物体一分为二，读pì。引申指位居第二的、次要的、附带的、相称等义，又作量词表套、双、张等。以上义读fù。

## 剖

从刀咅（否的变体分化字）声，本义指中分、破开，引申指分析、辨明。

## 辨

从刀辡声，本义为判别、分辨，引申指辨认、明察、确定，引申作名词表区别。又通“辩”表辩论、言辞漂亮，通“徧”表周遍。以上义读biàn。又通“辦”表备办、治理，读bàn。又通“贬”表损减、贬卑，读biǎn。又表皮革中断，读piàn。

## 判

从刀从半、半亦声。本义指分开、一分为二。引申指区别、分辨、评断、判决等。

## 列

战国文字从刀从歺、歺亦声，“歺”或作“𡿪”形，小篆即为从刀𡿪声，汉代以后𡿪简省作歹，整字作“列”。

本义指分裂、分解，此义后作“裂”。引申指行列、位次，进一步引申指陈列、陈述、归类、类别、众多等义。又作量词用于成行列的东西。又通“烈”。

## 刊

从刀干声，战国秦汉之际另有从木幵声的“栞”字，为“刊”的异体字。本义指用刀削去外皮、砍削。引申指雕刻、修改、删除、刊定、排版印刷、出版物等。

## 删

从刀从册、册亦声，本义指用刀在简册上削去错字，有削除、去掉义。引申指修改取舍、选取摘录。

## 劈

从刀辟声，本义指破开，引申指雷击、正对着、冲着，以上义读pī。又引申指分开、掰开、撕开、扭伤等，读pǐ。

## 剥

从刀录声，甲骨文或从刀从卜、卜亦声，为《说文》或体所本，即“𠚩”。本义指割裂、撕裂，引申指削去、脱落、搜刮、侵夺、革除等，以上义读bō。也指去掉物的外皮或壳，读bāo。

## 割

从刀从害、害亦声，金文或以“害”为“割”，后乃分化出专字“割”。楚简文字或将“刀”作“刃”，形符互通。本义指用刀切断，引申指分割、划分、割取、放弃、屠宰等。又指灾害、损害，此义与“害”同。

## 劃（划）

从刀从畫、畫亦声，现代简体字作“划”。本义指用尖锐物品把东西割开，引申为擦、抹掉、拨水等义。又承担了“畫”字出绘画义以外的绝大多数义项，如比划、规划、策划、笔画等义。

## 劑（剂）

从刀从齊、齊亦声，现代简化字作“剂”。本义指剪齐，又指调节、调和。引申指剂量、药剂。进一步引申作量词，用于若干味药配制的汤药。又指做面食时从和好的面上分出来的小块儿，即“剂子”。

## 刷

《说文》分录“㕞”、“刷”二字，前者为“从又持巾在尸下”，本义为擦拭，后者为“从刀、㕞省声”，本义为刮。此二字可视作一字之异体，表义无别。古隶又作从人、从尸、从巾，今一律写作“刷”。

由擦拭、刮义引申出刷子、涂抹、用刷子去垢、淘汰、洗雪、搜括等义。

## 刮

从刀、𠯑声，隶变后𠯑讹作舌。本义为刮削、刮摩，引申为摩擦、扫拂、搜刮等义。又指风吹动，通“颳”。

## 剽

从刀票声，本义为砭刺，又指抢劫。由抢劫义引申指攻击、窃取。又通“飘”，有飘动义，进一步引申为轻疾、强悍、轻浮义。

## 剉（锉）

从刀坐声，本义指折损、摧折，此义后写作“挫”。又指用锉刀磋磨，此义后作“锉”。又引申指铡碎、饲料。现代简化字并入“锉”。

## 釗（钊）

从金从刀、刀亦声，本义指磨损，引申指勉励。又用为遥远义。

## 制

甲骨文从刀从木，会以刀断木之意。周代左侧的“木”变为“未”形。秦以后演变为两类字形：一种左侧作“朱”形，为今文字所本，楷书作“制”；另一种将左侧截断，下部作“巾”，至汉代或变为上下结构。

本义为以刀断木，即裁断义。由本义引申指制造，又进一步引申指制定、形制、法度、帝王的命令、限制等义。

后由“制”分化出从衣的“製”字，本义为剪裁，引申指撰写，“制”的制造义也转由“製”承担。现代简化字将“製”并入“制”。

## 罰（罚）

从刀从詈（詈从网从言，表责骂），会惩处意。西周金文为左右结构，战国出现“刀”移至“网”下的上下结构字形。小篆仍沿袭原始的左右结构，隶变后则固定为上下结构，上部的“网”变作“罒”，汉隶“刀”或讹作“寸”，楷书作“罰”，现代简化字作“罚”。

本义为惩处，引申指征罚、刑罚、罪过、出钱赎罪等。

## 㓝（刑）

与“荆”同源。西周字形为从刀井声，即“㓝”，其形符刀本为“荆”的初文，是带刺的荆条形，本义即是带刺灌木名，后省略小刺而成“刀”形，追加声符井而成“㓝”。至小篆或将“井”讹为“幵”，作“𠛬”，隶变后进一步将“幵”讹作“开”，写作“刑”。因荆条古时被用来做刑具，故引申出刑具、刑罚义，另外其声符“井”本就有法度、刑罚义，可兼表义。战国时又造从艸的专字“荆”表带刺灌木的本义，而不从艸的㓝（𠛬/刑）则专表引申出的刑罚义。

《说文》将从井声的“㓝”和从幵声的“𠛬”别为二字，将前者训为“罰辠”（即刑罚义），将后者训为“剄”（用刀割颈，杀戮义）。实际从幵声的“𠛬”属于讹形，并非有独立来源的字，“幵”与“𠛬”古音也不合，刭杀义应是由刑罚义引申而来。

## 券

秦简文字从刀、灷声，楚简文字从力。小篆将声符“灷”讹为“𢍏”，隶变后又将“𢍏”进一步省作“龹”，楷书作“券”。

本义指契据，古代将契据书于简牍，用刀分为两半，双方各执其一，以为凭证。引申指票证、币钞、保障，又作动词表契合、描摹等。以上义读quàn。又指建筑上呈弧形的部分，即拱券，读xuàn。

## 刺

初文为“朿”，甲骨文字形或说像用于刺杀的矛类兵器形，或说像树上多尖锐锋芒之形。秦文字始出现追加形符“刀”的“刺”字。汉隶或讹“朿”为“夾”，作“㓨”、“刾”。楷书作“刺”。

根据对构形的不同理解，“朿”字本义有“木芒”和“刺杀类兵器”两种解释。分化出的“刺”字由“朿”的本义引申出兵器锋刃、芒刺形的物体、用尖利的东西戳，进一步引申有刺杀、刺激、指责、讥讽、侦察、撑船等义。又指书写，即“以笔刺纸简之上”，由此又引申指名帖。

## 剔

从刀易声，本义指分解骨肉，引申指剜、剪削、清除、挑拣等。

## 刎

有观点认为“勿”为“刎”的初文，甲骨文“勿”为刀上有血的样子，后分化出从刀的“刎”字。其他观点认为“勿”的构形原理与“刎”无关，“刎”仅仅是从刀勿声的形声字。

“刎”的《说文》本义为“割颈”，用刀割颈自杀即称“自刎”。引申指泛指割断。

## 剜

从刀宛声，本义是用刀刻或挖。

## 劇（剧）

《说文》只有从力豦声的“勮”字，后“力”讹作“刀”，产生从刀的俗字“劇”，收录于《说文新附》。现代简化字作从刀居声的“剧”。

本义为用力尤甚，用来形容程度深，有极、甚之义。引申出繁多、艰难、险要等义。又指戏剧，此义来源有两种说法：

1. “劇”与“戲”在上古时代晚期至中古时代早期音、形皆近，故用“劇”借指“戲”。
2. 表戏剧的本字应是“噱”、“㘌”，由嘻闹义引申出戏弄、演戏、戏剧等义，后以“劇”代替。

## 刹

从刀、殺省声，源自梵语“刹多罗”，省称为“刹”，梵语本义为土田、国土，引申指佛寺、佛塔，或塔顶上的幡柱。“刹那”一词是梵语ksana的音译，表示极短促的瞬间。以上义读chà。又有止住义，如“刹车”，读shā。

***

# 刃部

## 刃

刀形刃部加指事符号而成的指事字，本义指刀口、刀锋。引申指利器。作动词有杀义。刃需磨，故又有磨义。

## 刅（创）

“刅”为创伤之“创”的初文，为“刃”字加一点以示伤人之意的指事字。战国字形从立从刃。《说文》或体为从刀倉声，即“創”。而“創”表创造义时本字为“刱”，从井刅声，以凿井取水示初创之意，与表伤人义的“刅”非同字，读音也不同，后世此二字并用“創”形。

本义指杀伤，引申指伤口。

（“刅”与“荆”的初文同形，疑为一字之分化，如果确如此，其本义也或与“刀”、“刃”无关。另外“刱”与“㓝”在部分时期也同形，而“㓝”与“荆”同源，此四字间应有同源关系，分化后侧重点不同，读音也分化，“㓝”、“荆”以井为声符，“刅”、“刱”的读音或是由“楚”音演变而来，待考。）

## 劍（剑）

金文多从金僉声，此字形楷书作“鐱”。《说文》籀文为从刀僉声，楷书作“劍”。《说文》小篆为从刃僉声，楷书作“劒”。现代简化字作“剑”。指双刃短柄兵器。

***

# 㓞部

## 㓞

初文作“丯”，像契刻积画之形，后追加形符“刀”作“㓞”，所从的“刀”在汉隶中或讹作“力”。因所刻之物多为木，故又累加木旁作“栔”。现代将“㓞”、“栔”作为异体字并入“契”字。

本义为用刀在木头上刻画以记事，也指所刻之契，引申指契约，此义后作“契”。又泛指刻，此义后分化出从金的“鍥”。

## 栔（契）

初文为“㓞”，表示用刀刻画以记事，或累加木旁作“栔”，强调刻画的材料为木头。或体作“契”，其所从的“大”或说为“木”之讹，或说强调大事之契约。

本义为用刀在木头上刻画以记事，也指所刻的文字，符契刻字后剖为两半，双方各执其一以为凭证，由此引申指文书、合同、字据、盟约等，由符契可以相合的特征，引申有符合、相合义，如“契合”、“默契”等。

***

# 丯部

## 丯

本为“㓞”的初文，像契刻积画之形。《说文》训为“艸蔡”，即野草，未见用例，恐有误。

***

# 耒部

## 耒

金文为翻土用的耜类木叉形农具的象形，其省形即为“力”字，“耒”、“力”二字同源。或在上方加形符“又”（手形）呈持握状，成为会意字。至小篆，上方的“又”讹作三横，下方的农具形讹作“木”，《说文》释为“从木推丯”，不确。隶变后作“耒”。

本义指耒耜，一种柄为曲木、头为叉形的翻土用农具。引申泛指农具。

## 耕

从耒从井、井亦声，井代表井田，会以农具犁田翻地之意。本义即翻地松土，引申指从事农业劳动，进一步引申指致力于某种工作或事业，尤其强调勤勉不怠。

## 耦

从耒禺声，禺兼表义，从禺声的字大多有匹配、相合的含义。本义指两人两耜并耕，即两人一起耕地。引申为婚配、配偶义，又引申指双数、相对、相合、匹敌、相遇等。其中婚配、配偶、双数义后世多作“偶”。

## 𦔐（耘）

《说文》小篆从耒員声，作“𦔐”。《说文》或体从耒芸声，作“𦶮”。隶楷多省作从耒云声，即“耘”。

本义指除草，泛指除去，也指辛勤攻读。

***

# 角部

## 角

甲骨文像动物犄角形，周以后多将角尖上引，或再羡出一斜笔。隶变后作“角”。

本义指兽角，引申指像角的东西，又引申指角落、两线相夹而成的形状等。兽角可用于制作吹奏乐器，故又指号角。兽角还可用于制作容器，故又作酒器、茶具名，进一步引申作酒、茶等液体的量词。又由角形物引申作从整体划分成角形部分的量词，如一角饼，由此又进一步引申作货币单位，指元的十分之一。兽角用于攻击，故引申有斗争、竞争义，如角斗、角力等。又指古代五音中的第三音。而“角色”一词本作“脚色”，后因音近转写作“角色”，与“角”本义无关。由角色义又引申指演员，如名角。

## 觭

从角奇声，本义为角一上弯一下弯而不对称，引申指偏向一面、侧重。角不对称即不成双，引申有奇数、单数之义。又通“奇”，表怪异。

## 觸（触）

从角蜀声，战国古玺或作从角从牛会意。现代简化字作“触”。本义为用犄角顶，引申泛指碰撞，进一步引申指冒犯，又指接触、遇到等义。

## 衡

从角从大、行声，行兼表义。本义指为防止牛顶伤人而在其角上所绑的横木，“大”为人形，从角从大会牛触人之意，“行”有横向条状含义（行列之行），从行声的字多有此特点，如“珩”、“桁”等，在此表横木。《说文》古文“𡙏”为省略“行”的写法，其上部是“角”之讹。

由本义引申指车辕前的横木，也通“桁”指房梁上的横木。由横木义引申有横、平义。表横义时与“横”通。又引申指平衡、对抗等。因秤杆使用时需平放，故引申指秤杆，泛指称重器物，进一步引申指称量、估量比较、准则等。

## 觜

从角此声，本义指猫头鹰类头上的毛角。泛指鸟类头部向前突出的部分，多指鸟喙，由此进一步引申指人的口，此义后作“嘴”。又进一步引申指像嘴的东西。作动词有啄义。

## 解

甲骨文字形为双手持角与牛分离，会割牛角、解剖牛之意。其双手的部分在西周金文或作“殳”，至战国时又改作“刃”，小篆作“刀”，隶变后作“解”。

本义为解剖、分解牛，后泛指一般的解剖、分解。进一步引申指瓦解、分裂、融化、和解、脱除、消除、理解、解释、注释、解答等。以上义读jiě。又指事物相连接的地方，引申指武术的套路，泛指手段。以上义读xiè。又有递送、交付义，多作司法语境的专用词，如押解、解送、解元等，又由交付义引申指典押。以上义读jiè。

## 觵（觥）

从角黄声，或体从角光声。本义指用兽角制成的酒器，后泛指酒杯。引申指丰盛、大。

## 觴（觞）

西周金文从爵昜声，战国时改为从角昜声，小篆改作从角、𥏻省声，隶变后作“觴”，现代简化字作“觞”。

本义指倒满酒的酒杯，也泛指酒杯、酒器，又引申指饮酒、敬酒、宴请等。

***

# 竹部

## 竹

甲骨文像竹叶下垂之形，战国时两竹枝分离，或各累加一短横。后世字形变化不大，楷书作“竹”。

本义指竹子，也指乐器、书简。

## 箭

战国字形从竹、歬声，因“歬”后作“前”，故此字至小篆时也改作从竹、前声。本义指箭竹，可以用来制作箭矢，后也用“箭”指“矢”。

## 筍（笋）

西周金文从竹䀏声，小篆将声符改为“旬”。战国时有异体作“笋”，从竹尹声，为现代简化字所采用。

本义指竹子初从土里长出的嫩芽，引申指像竹笋的东西，也指悬挂钟磬的横木。

## 節（节）

从竹即声，秦隶有异体将竹写作艹，楷书作“莭”，后俗字又据此形省作“节”，始见于元代，为现代简化字所本。

本义为竹节，引申泛指物体分段或两段连接的地方，进一步引申指成段的事物，如节奏、章节等，又作成段事物的量词。由段落义又引申作动词表示选取段落，如节选。将时间分段即成为季节、节气，每个节气开始的一天即称作节日，每逢节日通常要举行祭祀或庆祝活动，而节日以外的特殊日期也举行类似的活动，如端午、中秋等，于是这类日子也统称为节日。因竹节形状有所约束，引申出约束、节约、限制等义，而约束思想行为使其合乎道德即有礼节、气节、节操等义。由此又引申出凭信的意味，于是可作凭信的物品也称作节，如符节。使者出使他国需要持节以作凭信，故也代指使者。

## 笨

从竹本声，本义指竹子的内层，即竹黄。后被假借用于不聪明、不灵巧、粗重等义。

## 篆

从竹彖声，汉隶或将竹讹作艹。本义为运笔书写，引申作字体名，即篆书。又引申指用篆书书写，也指铭刻。古代官印文字多用篆书，故也作官印的代称，又借指官职。

## 籀

从竹㨨声，本义指读书。周宣王太史作《史籀篇》，其书中字体被称为籀文，是一种流行于西周晚期有别于金文的字体，现称为大篆。

## 篇

从竹扁声，汉隶或将竹讹作艹、艸。本义指编连成册的竹简，引申指书、典籍、结构完整的诗文或著作，也作书页或文章的量词。

## 籍

从竹耤声，汉隶或将竹讹作艹、艸，而与艸部的“藉”字相混。

“籍”本义为登记户口赋税的档案簿书，引申泛指人的隶属关系的档案，如户籍、籍贯、国籍等。作动词有登记、征收等义。因籍多书于竹帛，故也指书，如书籍。

从艸的“藉”字本义为席垫，引申指杂乱，如狼藉。因后世“籍”常讹作“藉”，故也借“藉”表“籍”义。

## 篁

从竹皇声，本义指竹田、竹园，也指竹林。又是一种竹名。引申泛指竹子，也作管乐器的通称。

## 𥳑（简）

从竹閒声，又作“簡”，“閒”、“間”本一字。汉隶或将竹讹作艹，与兰草义的“蕑”字同形。现代简化字作“简”。

本义为竹简，即书写文字的长竹片。引申指书籍、信札。又有简略义，此义或说源于因竹简制作、携带不便而需对所写文字进行缩略概括。由简略义引申出简单、简朴、简慢等义。而要使对象简略，必须要选择取舍，故又有选择义，如简拔人才，此义与“柬”通。

## 等

从竹从寺、寺亦声，秦汉隶书或将竹讹作艹。寺有官署义，“等”的本义即是官署整理简册使之齐整，引申有整齐、等同义。等同的一组事物即为一个级别，故引申有级别、类型、品类义。又指台阶。由齐同义引申作动词表示衡量。由品类义引申作助词表复数、列举未尽。又有等候义，此义是由音形皆近的“待”字假借而来，此义后起。

## 笵（范）

从竹氾声，《说文》本义为法，即法则，而此字有竹制模子义（竹制为笵，木制为模），法则义应是由模子义引申而来，又进一步引申指典范、规范等义。另有从車、笵省声的“範”字，本义为出行祭祀道神，但典籍中多假“範”作“笵”，表示模子、法则、典范等义，使“範”本义渐废。

汉隶或将竹讹作艹，与从艸氾声的“范”同形，后者本义为草名，也作姓氏。今简化字将“笵”、“範”均并入“范”字。

## 箋（笺）

从竹戔声，异体从片，作“牋”。现代简化字作“笺”。从戔声的字多有细小义。

本义指注释，也是一种古代公文体裁。又指精美的小幅纸张，引申指书信。

## 符

从竹付声，付兼表义。汉隶或将竹讹作艹，而与从艸的“苻”字同形，后者本义为草名，也作姓氏。

“符”本义指古代朝廷传达命令或调遣兵将的凭证，常以竹制，剖为两半，双方各执其一，用时相合以为凭信，其声符“付”兼表交付义。因两符相合以为凭信，故引申有相合、应验义，如符合、符验。由君王颁发的凭信又引申指天神交付的凭信，如符谶，进一步引申指征兆、瑞信。道士、巫师等声称假借神力的图形也称为符，如符咒。进一步引申指有意义的记号，如符号、音符等。

## 筮

西周金文从竹、从巫、从廾，《说文》小篆作“𥷂”，言所从的“𢍮”为“巫”的古字，实际整字应是西周金文的讹变。晚周以后省去“廾”，成为从竹从巫，隶变后楷书作“筮”。汉隶或将竹讹作艹，而与表木名的“莁”字同形。

本义指用蓍草占卜，引申泛指占卜。

## 筓（笄）

初文为“幵”，像两发簪形。战国时追加形符竹，成为从竹幵声的形声字。隶变以后“幵”左右相连讹为“开”，字形变为“笄”。

本义即是发簪。引申指女子成年礼，进一步引申指女子十五岁或成年。

## 簾（帘）

从竹廉声，本义指用竹片、布等制成的遮蔽门窗的用具。而“帘”字本义为酒店门前悬挂的旗帜、幌子，现代简化字将“簾”并入“帘”。

## 筵

战国文字为从竹妟声，小篆将声符换为“延”，沿用至今。汉隶或将竹讹作艹。

本义指铺在地上供人坐的垫底的竹席，垫底的称“筵”，铺在上面的称“席”。引申指席位，作动词指铺席。进而引申指宴会。

## 箅

从竹畀声，本义指蒸煮食物的竹格，引申指起间隔作用且有空隙的器物。

## 簞（箪）

从竹單声，汉隶或将竹讹作艹。本义指古代盛饭的圆形竹器，引申泛指竹盒。

## 箸

从竹者声，汉隶或将竹讹作艹，分化出异体字“著”。本义为筷子，假借为书写、撰写义，进而引申出明显义。分化出“著”字后，“箸”回归本义，其引申义多由“著”承担。“著”又产生接触、穿戴等义，又表动作正在进行或状态持续。约在宋代，由“著”的草书分化出“着”字，字义进一步分工：“箸”表筷子义，“著”表书写、撰写、明显义，“着”表接触、穿戴、正在进行等义。

## 簍（篓）

从竹婁声，指用竹条、柳条等编成的盛物器具。

## 籃（篮）

从竹監声，指用竹条、柳条等编成的有提手的盛器。

## 篝

从竹冓声，本义为罩在熏炉上的笼子，又泛指盛物的竹篓，作动词指笼罩。由笼子罩着的火引申指野外燃烧的火堆。

## 簋

甲骨文初文为“皀”，是盛食物器皿的象形，为即、既、郷等字所从。后累加殳旁，作“𣪘”，殳此处表示手持饭具。西周金文出现将“皀”替换为“食”的异体字形，表意无别。又或在“𣪘”下累加形符“皿”。《说文》古文字形有三：一作“㔳”，从匚从飢（飢疑为𣪘之讹）；一作“匭”，从匚軌声；一作“朹”，从木九声。以上皆为𣪘之异体。小篆后起，从竹从皿、皀声，作“簋”。后世通行“𣪘”与“簋”，今以“簋”为正。

本义为古代食器，圆口，两耳或四耳。

## 竿
从竹干声，汉隶或将竹讹作艹、艸，而与草名之“芉”同形。本义指竹子的主干，又特指钓竿，也指竹简、书札、文书，又用作竹子的量词。

## 箇（个）

从竹固声，异体从人，作“個”。另有异体“个”，此字来源说法有二：

1. 为“介”之变体，一个即为一介。
2. 为半竹，即“竹”字的一半，表示一条竹枝。竹曰个，木曰枚。

“箇”本义为竹杖，引申作通用个体量词，作量词时与“個”、“个”互通。而“个”字除了作量词，还指正堂两旁的侧室，表此义时与不可用作“箇”、“個”。

## 籠（笼）

从竹龍声，汉隶或将竹讹作艹，而与草名之“蘢”同形。现代简化字作“笼”。

本义指古代竹制盛土器具，其他泛指类笼的盛物器具，又特指关养动物的笼子，引申指囚禁犯人的刑具。以上义读lóng。又作动词表罩住、缠绕、包罗、控制，由包罗义又引申指概括，如笼统。以上义读lǒng。

## 笠

从竹立声，汉隶或将竹讹作艹、艸，而与药草名之“苙”同形。本义指用竹篾或棕皮制成的遮阳挡雨的帽子，即斗笠。引申泛指笠状覆盖物。

## 箱

从竹相声，本义为车箱，即车上容纳人或物的部分，引申泛指有底、盖可以藏物的方形器具。又通“厢”，指前厅两侧的房屋。

## 策

从竹朿声，汉隶或将竹讹作艹、艸，而与草茦之“茦”同形。汉隶又或将“朿”讹为“夾”，而与义为箸的“筴”同形，进而又或将竹讹作艹，而与豆荚之“莢”同形。战国金文又有异体从竹𣂔声，其中“𣂔”为“析”之异体，“片”为“木”之半，与“木”同义。此字形至汉又作从竹析声的“𥮥”，又或省去“𣂔”中的“斤”，作从竹从片，进而讹作从艹从卜。

本义为竹制的马鞭，引申作动词有鞭打、驱使义，引申为鞭策、督促。由本义又引申指拐杖。古代计算用的算筹也称策，引申指数、谋划、计谋，由此引申出决策、策划、政策、策论等用法。又假借为“册”，指简册，泛指书籍，引申为册赏、记载。

## 笞

从竹台声，汉隶或将竹讹作艹，而与苔藓之“苔”同形。本义指用鞭、杖、竹板等抽打，又作为刑罚专名。

## 箴

从竹咸声，汉隶或将竹讹作艹，而与草名之“葴”同形。本义为缝衣用的工具，即针。古以竹为针，故用“箴”；后世以金属为针，故又作“鍼”，从金咸声；俗作“針”，从金从十（像针形）会意。现代简化字作“针”。

箴可刺穴位治病，故引申有规劝、告诫之义，又指以规劝告诫为主的一种文体。

## 竽

甲骨文为一个乐器竽形内部加一个声符“于”。后变为从竹于声，《说文》小篆从之，作从竹亏（于）声。本义指古簧管乐器，形似笙而略大。

## 籥

从竹龠声，汉隶或将竹讹作艹，而与雀麦义之“蘥”同形。本义指古代儿童习字用的竹片，引申指简册。又指鼓风吹火的竹器，见于“橐籥”。又通“龠”，指管乐器。古代钥匙形似管，故管、籥皆有锁钥义，后世改用金属后，即将“籥”改作“鑰”，从金龠声，现代简体字作“钥”，声符改为月。

## 笙

从竹生声，汉隶或将竹讹作艹，而与古地名之“苼”同形。本义指古簧管乐器。也指竹席。

## 簧

从竹黄声，本义指乐器中发声的薄片，引申指竽、笙类的簧管乐器。因簧是有弹性的薄片，故引申指器物中有弹性的构件，如锁簧、弹簧。舌之于人犹簧之于笙竽，故以“簧”喻能言善辩。又为竹名。

## 簫（箫）

从竹肅声，春秋金文或省作“𬕝”。汉隶或将竹讹作艹，而与萧瑟之“萧”同形。现代简化字作“箫”。本义指竹制管乐器，以长短不等的竹管编排而成，俗称排箫。另有单管直吹乐器，相传出自西羌，称为洞箫。

## 筒

从竹同声，本义指洞箫，引申指竹管，又泛指较粗的管状物。

## 籟（籁）

从竹賴声，本义指古代一种三孔管乐器。也指箫。引申指孔穴中发出的声音，又泛指声音。

## 管

从竹官声，汉隶或将竹讹作艹，而与草菅之“菅”同形。本义指古代单管乐器，似笛而六孔。引申泛指管乐器。又引申泛指管状物。笔杆为管状，故又为毛笔的专称。古代锁钥为管状，故也指锁钥。由锁钥义引申指枢要，进一步引申为掌管、管辖、管理等义。一说管理统辖义是通假“輨”字而来，“輨”与“辖”都是车上固定车毂的部件，由此引申出控制管辖义。

## 笛

从竹由声（以由为声符的字在上古以后读音分流严重，一系列如油、邮、抽、胄、宙、袖等，另一系列如迪、笛、頔等，但这些字声符确实同为“由”，上古时互相谐声）。本义为管乐器名，引申指响声尖锐的发声器。

## 筑

从竹从𢀜，竹亦声。“𢀜”即“巩”，义为抱。“筑”本义为击弦乐器名，似筝，十三弦。今建筑之筑本作“築”，是从木筑声的形声字，但常假“筑”作“築”，现代简化字将“築”并入“筑”。见“築”字。

## 箏（筝）

从竹爭声，现代简化字作“筝”。本义指古代拨弦乐器，形似瑟，即古筝。五代时，出现系有竹笛的纸鸢，有风时声如筝鸣，故此类能发声的纸鸢也称作风筝，而后风筝又泛指纸鸢。

## 籌（筹）

从竹壽声，汉隶或将竹讹作艹，而与草名之“薵”同形。现代简化字作“筹”。本义指古代投壶游戏所用的矢。也指古代计算用的竹码类用具，引申为谋划、策划等义。

## 簙

从竹博声，指局戏，又称六博，一种棋类游戏。后世多用“博”字表示，如博弈、赌博等，详见“博”字。

## 筭

从竹从弄会意，汉隶或将竹讹作艹、艸。本义指计数用的筹码。常与“算”字通用，表计算义，又引申指谋划。

## 算

从竹从具会意，本义指计算。常与“筭”字通用，“筭”本义为计算的工具，“算”为计算的动作，典籍中混用无别。由计算义引申指数目、数额，也引申指谋略、料想、估量等。

## 笑

战国文字从艸从犬，即“𦬫”，构意不明。小篆讹为从竹从犬，即“𥬇”。李阳冰刊定《说文》改为从竹从夭，即为“笑”字。汉隶或沿袭从艸从犬的字形，或又将“犬”讹为“大”，写作“芖”，此字形后讹为“关”，又累加口旁作“咲”，

本义即喜笑，引申为讥笑、玩笑、羡慕等义。

## 筠

从竹均声，本义指竹子的青皮，引申指竹子，又引申指竹制管乐器。

## 笏

从竹勿声，指古代大臣朝会时手持的可以记事的手板，以竹、玉或象牙制成。

## 篙

从竹高声，指撑船的竿。

## 第

初文为“弟”，“弟”像柲缠韦形，本义是次序、秩序义，后被用作兄弟之弟，又造从竹的“第”字表本义。

“第”本义为次序，引申指等级。又指科举考试合格列入的等级，即科第，科举应试合格即称“及第”。又引申指古代按品级为王侯大臣所造的宅院，后也泛指上等房屋。又等级义引申作动词表评定等级。由次序义引申用于数字前表示次序，如第一。

***

# 箕部

## 箕

初文为“其”，是簸箕的象形，“其”被久借作副词、代词等，故又增加义符造专字表簸箕的本义，最早加的义符是“匚”，即作“𠥊”字，见于《说文》籀文。战国时多从竹，作“箕”，后沿袭。战国时声符“其”又或省作“丌”、“亓”。

本义为簸箕，即盛装垃圾土石的器具。又作星宿名，箕宿因形似簸箕而得名。

## 其

甲骨文像簸箕形，商晚期在底部加一横饰笔。西周时在底部累加断开的两短横，这两短横后斜写成“八”形。战国以后将簸箕顶端左右两短画相连为一长横，簸箕内部纹理或作“×”，或作“十”，或作“工”，或作两横，或作一横。楷书定形作“其”。

本义是簸箕，但长期被假借作副词、代词、连词、助词等，于是另造“箕”字表本义，见“箕”字。

## 簸

从箕皮声，本义指用簸箕扬去谷米中的糠秕尘土等杂物。由簸米的动作特点引申出上下颤动、摇荡的意义，即颠簸。与“箕”连用，构成动宾式复合名词“簸箕”。

***

# 丌部

## 丌

“其”的简化字，始见于战国时期，另有加一饰笔的“亓”字，此两字与“其”表意无别。盛行于战国至西汉，汉以后“丌”、“亓”专用于姓氏。

## 亓

“其”的简化字，由“丌”加饰笔而来。详见“丌”字。

## 典

甲骨文从廾从册，会捧读典册之意。或在册形下加两短横饰笔（或表衬垫物），或将廾（双手）省作一手。西周时完全省去手形，下半部饰笔变为一横加“八”形（或认为是放置典册的器具），或在册的竖笔上端加饰点，加饰点的写法后演变为竹头，成为《说文》古文字形。《说文》小篆所谓“从冊在丌上”，非初始构形。秦隶将册左右两竖上端截去，与上端长横相连，中间两竖出头，汉隶继承，楷书作“典”。

本义指有垂范价值的重要文献书籍，引申出准则、制度、法律、郑重仪式、典故、雅致、掌管主持等义。重要的东西才可作抵押物，故又引申出抵押义，即典当。

## 畀

甲骨文像有宽大箭镞的箭矢形，西周时上部的箭镞逐渐变宽，至战国时已讹变为“田”形，之后又与箭杆分离，后省略箭杆，尾部箭羽讹变为“丌”形。《说文》小篆认为“从丌甶声”，不确。隶变后楷书作“畀”。

本义指古代一种扁平长阔的矢镞，古文献中用“匕”表此义，此用法即是以“匕”通“畀”。从甲骨文时“畀”即不用作本义，被假借为“给与”义。

## 巽

甲骨文从二卩，即“𰆋”，像二人一前一后朝同一方向跪坐，会顺从意。战国时，跪跽的腿形拉长，并在两人腿中贯穿一横或两横，后上下分离。加一横的演变为《说文》小篆字形，所谓“从丌𠨖声”，隶变作“巺”；加两横的演变为《说文》篆文字形，隶变后下部讹为“共”，作“𢁉”，楷书作“巽”。

本义是顺从，引申有谦逊、谦让义，与“愻”（后用“逊”）字同用，二字古同音。又引申出卑顺、怯懦义。又作八卦卦名。

## 奠

甲骨文从酉从一，酉为酒坛，一表地面或酒坛下的衬托物，会设酒祭祀之意。西周时在表示地面的横线下加了两个水平排列的短横，后来这两短横又变为斜笔，作“八”形，连同酉下的横线整体成为“丌”形。或是受“尊”字影响，小篆在酉上加“八”形，即《说文》言“从酋”。东汉隶书将下部讹作“大”，楷书作“奠”。

本义指设酒祭祀，引申泛指设置各种祭品的祭祀。进一步引申指进献、放置、安放，由放置义引申出确定、规定、平定、建立义。又是“鄭（郑）”的古字。

***

# 左部

## 左

初文为“𠂇”，像人左手形。因字义增多，西周时加区别符号“口”或“言”，表佐助义，而由本字“𠂇”表左手义（最终被“左”取代）。此时左、右所加的区别符号都是“口”，区别在于左字是“𠂇”在口左侧，右字是“又”在口右侧。西周中期至战国时，才将左字的区别符号由“口”改作“工”，左、右不再以手的朝向作区分。隶变后将“𠂇”手形的弧笔拉直，楷书作“左”。

本义是佐助、辅佐，是“佐”的古字。先秦又用“左”表“𠂇”的左手义，逐渐取代了“𠂇”。由左手义引申出左方、向左方，而大部分人左手相较右手更为拙笨不便，故引申有偏颇、违背等义。春秋以前以左为尊，故有“虚左以待”之说。古代借钱使用契券，债权人持左券，债务人持右券，故有“稳操左券”一词。而后世逐渐变为右尊左卑，因此“左”又引申出卑下、贬谪、降级等义。而现代用“左”表示进步、革命或激进的政治思想倾向，是受近代欧洲政治文化影响而来：法国大革命时期，三级会议上反对君主体制、支持激进改革的自由派参议员坐在左侧，被称为左翼；而拥护王权和传统秩序、反对革命的贵族阶级坐在右侧，被称为右翼。

## 差

始见于西周金文，是“𠂇”增加声符“𠂹”（垂的上部）而来，春秋时在“𠂇”下加“工”或“口”符作“左”（参见“左”字演变），或将“工”写作两短横，即《说文》籀文字形。上部的“𠂹”在战国时或变为“木”形，小篆直至早期汉隶仍作“𠂹”，东汉以后省作“¥”形，与下部的左结合后楷书作“差”。

本义为佐助、辅佐，引申指副贰、副职。以上义承“左”而来，或认为应读zuǒ。因正副有别，且副较正更劣，又引申出差别、区别、差错、歪斜等义，以上义读chā。又引申为低劣、不好、欠缺等义，读chà。又引申为选择、派遣、被派遣者、受派的职事等义，读chāi。由差别义又引申为次第、等级、依次排列等义，读cī。又指病愈，读chài，后作“瘥”。

***

# 工部

## 工

初文像古代画直角或方形的工具曲尺，一端为方框，后将方框省为一横，字形即与现代无异。汉隶或将中间的竖写成曲笔。

本义是矩，即曲尺，引申指工匠，后泛指各种劳动者，古代又特指乐官。由工匠义引申为擅长、精巧、技巧。又从本义引申出工程义，进一步引申指功业、功绩，此义后写作“功”。又有攻击、致力于等义，后造专字“攻”表此义。

## 式

从工弋声，本义是法则、准则，引申为楷模、规矩、规格、格式、仪式、典礼等义。作动词表示范、效仿、用、施行等。

## 巧

从工丂声，本义为技巧、技艺，引申为灵巧、工巧、精致、美妙、擅长，进一步引申为巧诈、虚伪义，由美妙义又引申出恰巧义。

## 巨

西周早期金文为一人分腿站立（大），手持一工形曲尺。后人形上部加一横成为“夫”，人手则与人身分离，变为一个半弧形附着在表曲尺的“工”上。后多省略人形，东周以后均继承此写法，汉印中有将“工”写作“匚”的，但未成主流，直至近代楷书仍维持“工”形框架，现代则以从“匚”的写法为正，作“巨”。东周以后仍有未简化人形的写法，而表人形的“夫”进一步讹变为“矢”，成为“矩”字，由此又产生一个累加木旁的异体字“榘”，为《说文》或体所载。战国时还产生过“𢀓”的字形，中间的曲笔是弧形人手的进一步讹变。

本义是曲尺，巨、矩同字，引申指尺度、法度等。后巨被假借作大义，其本义及由本义产生的引申义全部由“矩”、“榘”承担。由大义引申出极、最等义。

## 矩

与“巨”同字，本义为曲尺，详见“巨”字。“巨”被假借作大义后，由“矩”承担曲尺的本义。引申为方形、直角、法度、准则、刻下标记等义。

## 榘

“矩”的加旁异体字，与“巨”、“矩”同源，详见“巨”字。本义是曲尺，引申为规则、法度，常用于“规榘”、“榘矱”等复合词。

***

# 巫部

## 巫

两个“工”字交叉的形状，或说像古代的度量工具，或说是与巫事有关的器具。战国时中间的长横折断，与左右两旁的两短竖结合成为两个“^”形。或在下部加口形（𠳄），或在上部加短横，均为异体。至小篆，两个“^”讹为两个人形，隶楷从之，作“巫”。

本义指巫师，即自称能沟通天地鬼神的人，也特指女巫。古代巫医不分，故也指医师。

## 覡（觋）

始见于战国，从巫从見，所从的“巫”或作其繁化形式“𠳄”。现代简化字类推简化为“觋”。本义指男性巫师，“在男曰覡，在女曰巫”。后泛指巫师。

***

# 甘部

## 甘

口中加一短画作指事符号，表示香甜美味。字形从甲骨文到早期汉隶均没有变化，东汉以后或是为与“曰”相区别，将口的上横左右穿透，楷书作“甘”。

本义为香甜美味，又特指甜味。引申指美味的食物，又引申指嗜好、爱好、情愿乐意等。

## 甜

从甘从舌，小篆为左甘右舌，隶定作“甛”，后世楷书多作左舌右甘，即“甜”。本义即甘甜，与苦相对的味道。引申指美好、快乐、幸福、睡得酣畅、讨人喜欢等。

## 猒

西周金文从犬口食肉，会饱足意。小篆将“口”讹作“甘”，并与“肉”分离，写作“𤡜”。西汉早期或将“口”写成椭圆形，与“㠯”的先秦写法接近，写成篆书讹为“𤟶”，被《说文》作为或体收录。至东汉，将小篆左上的“甘”变为“日”，字形固定为“猒”。

本义为饱足，此义保留在后出的分化字“厭（厌）”和“饜（餍）”上。从厂的“厭”本义为压迫，是“壓（压）”的本字，但常假借为“猒”义，即饱足。“猒”、“厭”由饱足义引申出满足、嫌恶义，于是又造从食的“饜”字专表饱足的本义。因“厭”久用于饱足、满足、嫌恶等义，于是又造“壓”字表压迫义。

## 甚

西周时初文从甘，下部类似“匕”形，其意未详。西周晚期在“匕”形中繁增“八”形，此部分至秦汉时类似“匹”，致《说文》误认为从匹。上部本作甘，西周时起即有省作“口”的写法，战国楚系文字或将“口”与“八”调换位置。汉隶因“甘”上横左右穿透，整个字形已类似“其”在“L”上之形，或将“L”之上的部分直接写作“其”，楷书从之，作“甚”。

本义是特别安乐，此义在其分化字“湛”中有体现。由本义引申为过分、过度、严重、太、深、很、极、超过等，又引申为的确、甚至，又作疑问代词，此义后写作“什”（约始于五代），如“甚没”今写作“什么”。

***

# 曰部

## 曰

甲骨文从口，上加短横指事符号，以表示言从口出。早期甲骨文短横在口上部中央，晚期甲骨文短横与口的右端相连，此字形一直延续到战国时。春秋时出现将短横向上弯折的写法，传至小篆。秦文字或将顶横延长封口，与“甘”字易混。至东汉，口的两竖不再高于顶横，此时产生两种写法：一是继承旧式，顶横左侧不封口；二是顶横封口，类似“日”，但结构写扁与“日”相区别。后世楷书继承了第二种。

本义是说，引申为叫做，虚化为语气助词。

## 曷

初文构造不明，目前古文字材料中均作为合体字偏旁（几乎都是声符）出现，战国时异体字形繁杂，秦汉隶变时上部作“曰”，《说文》小篆从曰即可能是汉人所为。下部逐渐讹为匃，楷书写作“曷”。

本义不明，古文献中主要作疑问代词，表示为什么、怎么。

## 沓

甲骨文从水从口，可能会口若悬河之意。下部本从口，战国时在口内加一横，类似后世的“曰”形，但与先秦时“曰”写法不同。小篆则彻底变为“曰”，后世沿袭，作“沓”。

本义是话多，引申为重叠、繁杂、会合，又引申为贪婪，也指水势翻涌，由此又引申指在行进中击鼓。

## 曹

甲骨卜辞有从二東的“㯥”字，会对偶之意，是“曹”的初文，后下加“口”形。西周时在口内部加短横，混同于“甘”的古形，此写法延续至秦汉。小篆下部变作“曰”，东汉以后成为主流，后世楷书与“日”混同。上部的“㯥”在汉代先省去下端出头的竖和撇点，后又连通上部两个短横，后再合并中间两短竖，字形成为“曹”。从战国时起，有简化字形上部只作一个“東”，汉代有或体继承此写法，后简省为“曺”，但未成正体。

本义为对偶。引申指诉讼的双方，即原告和被告，古时称两曹。对偶是双方相对，故引申为遭逢，此义后分化出专字“遭”。由两曹义引申指等辈、群类，又引申指古代分科治事的官署和部门。

***

# 𠄎部

## 𠄎（乃）

所象之形不明，有说是奶头形，《说文》解作“象气之出难”。字形从殷商至战国变化不大，秦文字将顶端起笔处向左下延长，形成一斜笔，汉代将这一斜笔拉长作撇，楷书作“乃”。

本义不明，上古时多作第二人称代词，表示你、你的，或作副词，表示就是、竟然、难道、仅仅、才、刚刚等。又由副词虚化为连词、语气词。

## 𠧟（乃）

甲骨文上部像盛器内盐卤结晶之形，即“卤”字，盛器下有一弧线像托盘之形，或缀加小点表示盐粒。西周以后不加小点，上部歧出一短画。至战国，底部弧线变为横画，秦以后变为折笔。隶变过程中，下部的折画分化为“L”、“辶”、“廴”三种形态，上部盛器则分化为“卤”、“西”两种形态，至楷书，整字有“𠧟”、“迺”、“廼”三种字形，但“𠧟”渐废。

本义为盐卤，此义保留在“鹵（卤）”字上。后被假借作“乃”，与“乃”读音、用法皆同。《说文》训为“惊声”，读若仍，此应是通“乃”而来，非本义。“乃”有发语词的用法，且“乃”本身即可通“仍”，二字古音相通。“𠧟”、“迺”、“廼”从“乃”的通假字逐渐被视为异体字，现代简化字统一归入“乃”。

***

# 丂部

## 丂

甲骨文像斧柄之形，一说是有握柄的号角，又或说是气欲舒出而上碍之形。按斧柄说，则本义为斧柄，是“柯”的本字，柯从可声，而可从丂声。古时多假借为“考”，表示父亲和长寿义。也被假为“巧”、“于”。

一说斧柄义的初文和气欲舒出之“丂”是两个不同的字，甲骨文形状存在区别，韵部也不相近，不能混同。“可”所从的构件是斧柄之形，相对弯曲且成锐角，而“乎”、“号”所从的“丂”是从“考”字中截取而来并继承“考”之读音的字。“考”是一长发老人拄拐杖之形，其中的“丂”正是拐杖的象形，本不独立成字，后从“考”字中截取出来并开始表“考”的读音，成为“巧”、“号”、“亏（于）”、“乎”等字的声符。

## 寜（宁）

甲骨文初文上部是皿，即盛器，下部或说是“示”，表示祭台，或说是“丂”，表示老人。晚期甲骨文在上部又加表房屋的“宀”。如果按从示说，则会祭神祈福以求安宁之意；如果按从丂说，则会老人有食物、有住处，生活安定之意。总之初文有安定、安宁的含义。因为安宁是心中的一种状态，故西周时累加“心”符，成为“寜”字。

甲骨文时期也有仅从宀从皿的字形，西周时同样累加“心”符，成为“寍”字。“寍”与“寜”不是简单的先后简省关系，而是同时期并存，同步演化而来。战国时又产生从用的“甯”字，较为晚起。在后来的使用中，“寍”于秦汉之后被淘汰，现代将“寜”作为正体，简化为“宁”（zhù，“㝉”的异体，本义为贮藏），为避免混淆，原本的“宁”（zhù）作偏旁时统一简化为“㝉”，如“贮”、“伫”。“甯”则只作姓氏，其余用法并入“宁”。

本义是安定、安宁，引申为问安、慰问，进一步引申指已婚女子回家看望父母，由本义又引申为安静、止息。以上义读níng。由本义又引申为副词，表示宁愿、宁可，即内心安于某种选择。也用作语气副词相当于“岂”、“乃”、“曾”等。以上义读nìng。

***

# 可部

## 可

甲骨文由“口”和“丂”两部分组成，左右位置不定。构形本义说法如下：

1. “口”为形旁，“丂”为声旁，本义为歌咏，是“歌”的本字。
2. “丂”是“柯”的本字，表示斧柄，从口表示劳动时歌唱助力，是“歌”的本字。
3. “口”旁的符号不是“丂”，而是表示人的手掌或右臂弯曲的形状，描述人捂嘴避免发出声响的场景。
4. “丂”表示气流受阻无法舒出，加口表示可以舒出，本义是许可、可以。
5. 本义为大怒而言，是“訶”的本字。
6. 《说文》训为“肎（肯）”，“肎”本义为附着在骨头上的肉，有愿意、应允义，此说盖是取应允义，但“肎”的应允义通常认为本就是假借作“可”而来，此说并未解释“可”的应允义从何而来。

可的几个基本义项包括：歌咏、许可应允、怒责。后产生从二可的繁化字“哥”专表歌咏义，而歌咏义又逐渐由后起的“歌”、“謌”承担。后“哥”受鲜卑语对父兄的称呼“阿干”的影响，被讹用作表父兄。怒责义则由“訶”、“呵”承担。“可”本字则保留了许可、应允、能够等义，进一步引申出值得、适合、恰好、约略、确实，由虚化为转折连词，相当于但是。又通“何”。又作译音用字，如可汗等。

## 奇

从大可声，楷书作“奇”。上部的“大”在战国时即产生形似“介”的变体，此字形隶变后作“竒”，被视作“奇”的俗体。

本义是独特、殊异，引申指出人意料、惊异、美妙，又作副词表甚、非常。又引申出意动用法，以某为奇，有赏识、看重义。以上义读qí。由本义引申出单数义，与“耦（偶）”相对，引申指余数、零数。又由本义引申为不正、非法、命运不好等义。以上义读jī。

## 哥

初文为“可”，繁化叠加而来，本义为歌咏、唱。此义在先秦古文字材料中也写作“訶”、“謌”，但典籍主要用累加欠符的“歌”字，汉后偶用“哥”字。从唐代起，被用作鲜卑语“阿干”的音译写法，用来称呼兄或父。

## 叵

从反可，取“不可”的合音和意义。先秦文字多正反无别，正写和反写的“可”均表示可义，而将“叵”明确视作反可表“不可”义是秦以后才出现的用法。“叵”也偶用于遂、于是义。

***

# 兮部

## 兮

是“乎”的分化字，二字同源，但于殷商卜辞中此二字已经分化。早期甲骨文“兮”为“丂”上加两短画，“乎”为“丂”上加三短画。到殷商后期，“兮”上部的两短画变为近似“八”形，后世变化不大，楷书作“兮”，隶变后或改变笔势作“𠔃”，为“兮”的俗字。

用作语气助词，相当于现代的“啊”。也作形容词词尾，相当于“然”。

## 羲

从兮義声，楷书略省作“羲”。《说文》训为“气”，古文献主要用于神人名。

## 乎

初始字形为声符“丂”上加三短画，与“兮”同源，“兮”少一短画，二字为一字之分化。西周时在顶部追加一横，后又将中间的短画与丂的竖画相连。也有或体省去中间的短画，《说文》小篆依此形将顶横改为斜笔而成，作“𠂞”，因下部与“兮”同形，致《说文》认为“乎”从兮。此写法汉后渐废，主流写法沿袭西周时中间短画与竖相连的字形，顶横或与中竖相连偏向一侧，与“平”相别。东汉以后，顶横变为一撇，中竖下端弯折，楷书作“乎”。

“乎”是“呼”、“𧦝”的古字。本义是招呼、呼叫。引申为传召、传令、命令。又用于语气词，又作形容词或副词后缀。也作介词，相当于“于”，“乎”、“于”古音同。

***

# 号部

## 号

从口丂声，《说文》本义为痛声，即大声哭，但此义在典籍中均作“號”。出土文献中所见的“号”用于称谓和号令义，读hào，而此两种意义在典籍中同样写作“號”。

## 號（号）

从虎号声，主流写法为左号右虎，西汉时偶有左虎右号的写法。现代简化字将“號”并入“号”。

本义为大声呼叫，引申为大声哭、动物放声鸣叫、风发出大的响声等，以上义均读háo。又引申指号令、命令、扬言、宣称等，由号令义又引申指称谓、给以称谓、名称、别号等，又引申为记号、标志、口令、暗语等。由鸣叫义又引申为管乐器名。以上义读hào。

***

# 亏部

## 亏（于）

始见于甲骨文，象形不明，今音“yú”。古今字形变化不大，隶变后作“于”。小篆微讹，竖笔上端不穿透横画，隶定作“亏”。《说文》训为“於”，即作语气词，如“於（乌）乎”、“呜呼”的用法，按此说则“于/亏”是“吁”的本字。也有人认为是“纡”、“迂”的初文，本义为纡曲。

早期假借为动词表往、去。后虚化为介词，相当于在、到、对于、以、从、比、被、为等。

现代将“亏”作为“虧”的简化字，此二字本义无涉。

## 虧（亏）

从亏雐声，本义是气缺损不足，引申泛指缺损、减少，又引申为欠缺、不足、衰退、毁坏、损失、违背、虚弱等义。现代简化字作“亏”，而“亏”本与“于”同字，与“虧”在古时为不同的两字。

## 粤

是“雩”的变体分化字。初文从雨于声，《说文》收录一个将雨讹为宷的字，将此字与“雩”别为二字。此讹体至汉隶又将“釆”讹为“米”，整字作“粤”。

《说文》认为“粤”本义为审慎语气的发语词，而“雩”本义为古人祈求降雨的祭祀活动。但出土文献中此二字共用的早期字形主要用于专名及假借为介词、连词、语气词。在传世文献中，以上用法由“粤”承担，而“雩”表祈雨祭名。

## 平

始见于春秋时期，字形与西周晚期的“乎”字近似，构形不明。战国时增繁较多，可能是为与“乎”区分。秦小篆不增繁，而是中竖脱离顶横。隶变后沿袭春秋时未繁化的旧字形，楷书作“平”。

《说文》本义为“语平舒”，即声音、气息舒缓。引申出安舒宁静、平坦、不偏斜、公正、齐一、普通等义，又作动词表示使平静、使平坦、镇压等，由不偏斜、公正义引申指衡量标准及器具，如天平、库平。

***

# 旨部

## 旨

甲骨文从匕从口，匕是勺子形，像用勺向嘴里送食物，会甘美意。后或在口内繁增横画，至春秋以后，带横画字形渐多，致《说文》认为从甘。春秋战国文字又或在匕形下部贯穿一横，秦系文字无此写法。秦简将匕写作人形，小篆从之写作朝右的人形，隶变后上部渐变为“丄”，整字作“𣅀”。楷书正体作“旨”。

本义指味道甘美，引申泛指美好，也引申为思想主张、意图，又特指皇帝的诏书、命令。

## 嘗（尝）

西周初文从旨、尚省声，声符为省去口的尚。战国时声符不再省形，成为从旨尚声。隶变时下部的“旨”或作“𣅀”（同“旨”字演变），或讹作“目”，或省作“甘”。楷书以小篆为本，作“嘗”。现代简化字为草书楷化，作“尝”。

本义指用口舌辨别滋味，引申为吃、食用、试探，还引申为滋味。又引申为古代秋季的一种祭祀，这一意义战国南楚或用从示尚声的“𬓂”字，但后世不用。由食用义又引申出经历、经受，由此虚化为时间副词，表示曾经。

***

# 喜部

## 喜

从壴从口，“壴”为“鼓”的初文，会听到鼓声开口欢笑之意。字形从甲骨文到楷书一脉相承，写作“喜”。只有汉隶部分或体微讹，如写作上下二吉、上吉下古等。

本义是欢喜、快乐，引申为喜爱、爱好，又引申为生物习惯或适应某种环境条件，或事物容易发生某种变化。由本义还引申为吉庆快乐之事，又特指结婚或女子怀孕。又引申为福、吉祥，此义后作“禧”。由爱好义引申为游戏，此义后作“嬉”。

## 憙

从心从喜、喜亦声，实际是“喜”的加旁异体字，加义符心强调心理活动。始见于战国时期，另有从心从壴的字形“𢝫”，可视作是从喜省，也可视作用“心”替换喜底部的“口”。后世“憙”、“𢝫”并见，现代已并入“喜”字。字义与“喜”同。

***

# 壴部

## 壴（鼓）

甲骨文像上插羽饰、下有脚座的圆鼓形，西周时上部的羽饰与鼓体分离，隶变后楷书作“壴”。

本义是乐器鼓，名词。而从攴或从支的“鼔”、“鼓”本义是敲鼓，动词。殷商卜辞和西周金文中，“壴”与“鼔”、“鼓”通用，名动义同出一源。由击鼓义引申出敲击义，秦后“壴”被淘汰，只用“鼓”。

## 尌

初文字形有争议：

1. 甲骨文有从又从木的字，会以手植木之意，是“樹”的初文。春秋时加注“豆”声，隶定作“𣕒”。后世将“又”讹为“寸”，作“𡬾”。小篆将木简化为“㞢”形，于是左侧变为与“壴”同形，隶变后作“尌”。由于丢失“植木”的会意功能，于是又繁加木旁作“樹”。
2. 西周时即有从又从壴的字，“又”为手，“壴”为上插羽饰的鼓形，会手持羽饰植于鼓上之意，此为本字。后来“壴”上端的羽饰逐渐脱离鼓体（见“壴”字演变），大概同时受字义影响，春秋时此字中“壴”的上端逐渐变作“木”，而所从的“又”讹为“寸”，此字形楷书作“𡬾”。小篆则保持从壴，右侧同样作“寸”，隶变后楷书作“尌”。此字本义与树木无关，“樹”是后起的专表树木、种植树木义的分化字。

本义应是“树立”和“种植”二者之一，孰为本义孰为引申义暂无确论。引申为名词树木。由树立义又引申为立定、停止，与“驻”通。

另有将“尌”省写为“壴”的用例，表树立义，此与表乐器鼓义的“壴”非同字，应读shù，此用法较罕见。

## 彭

从壴从彡，“壴”为鼓的象形，“彡”表示发出的鼓声，结合会意。本义是鼓声，象声词。殷商卜辞和周金文多用作人名和地名。早期典籍借“逢”表鼓声义。由鼓声义引申出盛、多、壮等义。

## 嘉

从壴加声，西周以后变体繁多，但秦系文字始终承袭原始字形，隶变后楷书作“嘉”。

本义是美好，引申为赞美、褒扬、表彰，还引申为吉庆、幸福、快乐、喜欢。

***

# 豈部

## 豈（岂）

构形不明。《说文》分析为“从豆、微省声”，不尽可信。可能是“壴”的分化字，或有同源关系。“豈”、“壴”上古音近，词义也有关联，字形差异仅在于上端构件的倾斜与否。“壴”上端表示鼓上羽饰的“屮”形端正，而此部分在“豈”中则呈偏斜状。东汉以后，“豈”的上部与主体分离，且变得端正，成为“山”形。楷书作“豈”。现代简化字作“岂”，源于元代草书楷化字形。

本义是还师振旅乐，即战争胜利后为振奋士气而演奏的音乐——凯乐，也指奏凯乐。先秦典籍中用“愷（恺）”字表此义，汉魏以后渐用“凱（凯）”字。由本义引申为和乐、欢快义，此义后世亦用“愷”字，如“豈弟”后世写作“愷悌”。以上义均读kǎi。又假借作副词，主要表反问，也表推测、期望或命令。以上义读qǐ。

## 凱（凯）

本是“豈”的异体字，后分化。最初继承“豈”的凯乐、奏凯乐、和乐等义，与“豈”、“愷”互通。汉魏以后，逐渐分化，与凯乐、战胜相关的义项用“凱”，与和乐、欢快相关的义项用“愷”，用作表反问等副词用“豈”。

***

# 豆部

## 豆

甲骨文像古代盛食器之形，一种带盖的高脚盘，后世字形变化不大，仅器盖与器身分离、器足内或加饰笔，楷书作“豆”。

本义即是食器名，引申指容器，用作容量单位。秦后被假借用来表示“尗（菽）”，即豆科植物。

***

# 豊部

## 豊

是“禮”的古字。甲骨文从壴从珏，“壴”是鼓的象形，“珏”为两串玉，二者均为古代祭祀所用的礼器，由此会意。战国时，“壴”的上部与鼓身分离，下部成为“豆”形，以致《说文》解作“从豆”。上部与珏结合，几经讹变，整字小篆作“𧯽”，省去两玉中间的竖画。隶楷进一步简化作“豊”。

另外，此字与“豐（fēng）”在商周时字形有区别但十分近似。“豊”的上部为珏，是两串玉；而“豐”的上部是两个“丰”，“丰”既作声符也含有茂盛义。汉隶中此二字常混用，至楷书又分开，分别写作“豊”和“豐”。

本义是典礼，引申义见“禮”字。

***

# 豐部

## 豐

始见于西周金文，从壴丰声，“壴”是鼓的象形，声符“丰”重复，左右对称。声符“丰”同时也兼表茂盛义。战国时，“壴”的上部与鼓身分离，下部成为“豆”形，以致《说文》解作“从豆”。原本“壴”的上部在小篆中讹为“山”形。隶变后，整字写作“豊”、“豐”，前者与“禮”的本字“豊（lǐ）”混同，此二字在汉代常混用。至楷书，明确写作“豐”，与“豊（lǐ）”相区别。明代时始见用“丰”代替“豐”的用法，现代简化字将“豐”并入“丰”。

《说文》因误认为此字从豆，故将字义解释为“豆之豐满者也”，有误。本义可能是鼓声宏大，词义扩大也指宏大的钟声。由本义引申为大、增大、扩大，又引申为充足、多、兴盛、茂盛、体貌美好等。

## 豔（艳）

从豐盍声，楷书写作“豔”、“豓”，或将左侧的“豐”写作“豊”，整字作“𧰟”、“𧰚”。约南北朝时，又产生会意异体字“艷”，从豐从色，亦作“艶”。明代始出现简化字形“艳”。现代将“艷”作为正体，并以“艳”作为简化字。

本义为漂亮而高大。引申为鲜艳、艳丽、文辞华丽、俗气花俏等义。

***

# 䖒部

## 䖒

从豆虍声，本义为古陶器名，单字罕见用例，多作偏旁。

***

# 虍部

## 虍

“虎”的省形，是老虎头部的象形，多作偏旁。

## 虞

从虍吴声。本义是兽名，即“驺虞”，后多作掌管山泽禽兽的职官名。一说是戴着面具的人在跳舞，会歌舞娱乐意。早期义项有猜度、料想，引申为忧虑、戒备、期待、欺诈等义。

## 虔

《说文》解作“从虍文声”，徐铉、段玉裁认为“文”并非声符。而“虔”字的《说文》本义是虎行貌，有观点认为按此说则下部应该是“夊”（倒“止”），“文”是讹误。

由本义引申指勇武、强固，进一步引申指诚敬。又有杀戮义，此义或是由勇武义引申而来，进一步引申指强取、掠夺。

## 虖

初从虍兮声，秦系文字将“兮”变为“乎”，小篆从之，隶变后楷书作“虖”。本义是虎叫，引申作语气助词、叹词，相当于“乎”，如“乌虖”。

## 虐

甲骨文从虎从人，会虎张口食人之意。西周时人形变作“匕”形。小篆将本表示人的“匕”形进一步讹作“爪”，而将虎的身体部分脱离头，单独讹为“人”形，《说文》误解为“从虍，虎足反爪人也”。虽表意无大差错，但实际是将本表示人的部分视作虎爪，而将本是虎身的部分视作人。隶变后，“虍”下的整体部分讹作“亡”或“匕”，此部分至楷书又写作“E”形。现代字形将中横向左穿透，整字作“虐”。

本义是虎伤害人，引申为残害、残暴、灾害、暴烈、过分、轻视等义。

***

# 虎部

## 虎

甲骨文像虎形，巨嘴尖牙，身有条纹，头、身、足、尾俱全。至战国时，虎头与身分离，一种字形身体部分变为“人”形（前肢、身体和尾巴的遗存），为小篆所本，还有一种字形身体部分变为“巾”形（保留了后肢），隶变后作“𧆞”。汉隶又或将“𧆞”进一步变为“乕”。楷书除“𧆞”外，另有小篆的隶定体“虎”，唐代以后以“虎”为正体。

本义即是老虎。引申用以比喻威武勇猛。

## 彪

从虎、彡，本义指虎身斑纹，用以比喻文彩鲜明，又引申指彰明、显著，也形容人魁梧健壮。

## 虓

从虎九声，本义指虎吼，引申泛指动物叫声，又比喻大风之声。由本义还引申为震怒、勇猛。

## 虢

甲骨文从攴从虎，会持械格击猛虎之意。西周金文将“攴”移左，后成主流。后又在“攴”上方增加一爪（手形），成为两只手持械的样子，后所持之物省略，全字左侧变为“𠬪”，小篆又将“𠬪”加一笔作“寽”，《说文》解作“寽声”，与初文不合。

本义是格击猛兽，引申为格斗、打击，以上义在文献中均借用“格”字。又作国名。

另有从手各声的“挌”字，段玉裁认为“格”表格斗相关义时的本字是“挌”，但实际“挌”是后起字，此义本字是“虢”，后因音近假借“格”表此义，因形符不通，又造从手的“挌”。

## 虒

初文构形不明，战国有从虎从𠂆（或从广）的字形。《说文》训为兽名，但未见用例。又作地名。

## 𧇒（虣）

甲骨文从戈从虎，会以戈击虎之意。西周金文沿袭，或将“戈”写作“戊”。战国时或在“戈”下加双手，变为从戒。《说文》小篆在“戈”下加“止”，成为从武从虎。楷书兼有左虎右武、左武右虎两种字形，以“虣”为正体。

本义是搏击猛虎，音bào，此义后世借用“暴”字，如“暴虎冯河”。原是徒步持械搏虎，后字义演变为徒手搏虎。又由本义引申为凶暴、暴虐。

***

# 皿部

## 皿

甲骨文像口沿外翻、带底座的器皿形，西周以后器口渐平，外翻的边沿下垂明显，或在底座两竖间加一至二横画饰笔。小篆将下垂的两短画脱离器口，但隶书不从，楷书作“皿”。

本义即器皿，泛指各种盛器，多作偏旁。

## 盂

从皿亏（于）声，本义为大型盛食器，又泛指盛饮食或其他液体的圆口器皿。

## 盌（碗）

从皿夗声，约出现于秦汉时代，另有异体字㼝、碗、椀，现代以“碗”为正体。本义指小型盛食器。

## 盛

从皿成声，先秦文字或将声符省作“戊”、“戈”等，隶变后楷书作“盛”。

本义指盛装、容纳，分化出名词义，特指盛装在祭器中的谷物。以上义读chéng。由本义又引申指盛满、丰盛、众多，由此引申为兴旺、大、繁茂、深厚、美好等义。又引申出使动用法，有使丰足、使兴盛（盛行）、使茁壮（抚育）、称赞等义。由盛满义又引申为极、甚。以上义读shèng。

## 盧（卢）

殷商初文像上有炉身下有炉足的火炉形，是一种可以在下层放置燃料用来加热食物的双层鼎，是“爐（炉）”的本字。甲骨文另有加声符“虍”的字形，成为形声字，此字形隶定为“𧆣”、“𧇄”、“𧆨”等。至西周又累加皿旁，成为“盧”字。《说文》将“盧”解为“从皿𧇄声”，将“𧇄”解为“从甾虍声”，实际“盧”是“𧇄”的加形异体字，而所谓的“甾”其实是炉形的讹变。隶变后，炉形的部分讹为“田”。现代简化字将“盧”简化作“卢”。部分从盧声的字将声符类推简化为“卢”（如泸、栌、颅、胪等），另一部分则将声符简化为“户”（如庐、芦、炉、驴等）。

本义为火炉，此义后世作“爐”、“鑪”（炉）。因火炉会被熏黑，又引申出黑色义，由此又代指有黑色特点之物，如指黑色猎犬、黑色瞳仁（后作矑），盧鷀（鸬鹚）即黑色水鸟。在甲骨文中多用作剥皮义或祭名，此应是用作“膚（肤）”义，而非“𧆨”字本义，“膚”也是“𧆨”的后起分化字。

## 盎

从皿央声，《说文》或体从瓦作“㼜”。本义是大腹敛口的盆类陶器，引申指充满、洋溢。

## 盆

从皿分声，本义为口大底小的圆形盛器，又作容量单位、量词。

## 益

甲骨文为皿中有若干水滴之形，会水满外溢之意，是“溢”的古字。西周时将上部的水滴写作“八”加一短横，战国秦系文字将上部变作横写的“水”，隶书从之。楷书改变笔势写作“益”。

本义是水满溢出。引申为江河水道涨水。以上义后世作“溢”。又引申为丰饶、富足、多、增益、好处、有好处的，由增益义又引申为上进、更加、逐渐。

## 盈

从皿，上部构形不明。《说文》认为从夃，并将“夃”训为“市買多得”，即交易多得的部分，由此将“盈”训为“满器”。

基本义为充满、满，引申为丰满、圆满、满足、有余、增加、自满骄傲等。

## 盡（尽）

甲骨文从皿，上部为又（手）持一毛刷，即擦拭器皿内壁，会饮食已尽洗刷食器之意。战国文字或将毛刷下部毛间加两点，使下部类似“亦”形；或省去“亦”形顶部的两斜笔，使下部讹为“火”形，秦系文字多从此形。小篆则在“亦”形中间再加一横画，致《说文》解为“从皿㶳声”，不确。隶变后，将“亦”形变作一横加四点，楷书作“盡”。汉隶部分字形又省去四点，未成主流。现代简化字“尽”是草书楷化而来，始见于唐朝。

本义是器中空，有净、完、无等义。引申为终止、全部使出、达到极限、努力完成、死、所有，又作副词表示全都。以上义均读jìn。

又引申指力求达到最大限度，如尽快、尽量。又指听凭。又指不得超过某个范围、优先处理某事等，多与“着”连用。又做程度副词，相当于“最”，如“尽北边”。又表老是、总是。以上义均读jǐn。从宋朝时分化出“儘”字承担读jǐn的义项，现代简化字又并入“尽”。

## 盦

从皿酓声，本义是覆盖，引申为掩埋。宋人称一种有盖立式圆形盛食器为“盦”。中古以后，引申指圆形小草屋，与“庵”同义，但与“庵”并非异体关系，多用于斋号、人名。

## 𥁕（昷）

从皿，上部在甲骨文中写作一圆形包围的人，此部分在《说文》中被解为囚犯之“囚”，但目前学界观点并不认可。或说此甲骨文字形本就是“𥁕”的初文，皿符是后起累加的，其字形与“因”相似，区别在于圆形内部之人的朝向，“因”中是正面的人，即“大”形，“𥁕”中的是侧面的人，或认为此二字是“氤氲”的本字，外面的圆形表示光雾，存疑。

本义不明。《说文》训为“仁也，从皿，以食囚也”，这是基于从囚的观点做出的解释，可能有误。目前所见用例只用于人名。

## 盥

从𦥑、水、皿，会用水在水盆上冲洗双手之意。本义是浇水洗手，手在盆上由旁人从上浇水冲洗。后引申为洗脸、洗浴，或泛指洗涤。也指洗手的器皿。

## 盪（荡）

从皿湯声，常借用从水𦳝声的“蕩”字表示，现代将“盪”视为“蕩”的异体，以“蕩”为正，简化为“荡”。

“盪”本义为洗涤器皿，引申为水摇动、激荡，进一步引申为动荡、摇摆、推移、荡涤、军事扫荡、放纵等。

“蕩”本义是水名，又指浅水湖。假借为摇动、摆动义，引申为动荡、震动、涤荡、碰撞、放纵等义。又有平坦、宽大、广阔义，如浩荡、坦荡等。

此二字大多数义项相通，后世常混用。其中浩荡义的本字为“潒”（或说是“羕”），放荡义本字为“愓”（异体为“𢠽”），此二义用“蕩”、“盪”均为假借。

## 盞（盏）

从皿戔声，始见于春秋。《说文》小篆从酉，作“醆”；《说文》新附从玉，作“琖”。现代以“盞”为正体，简化为“盏”。

本义为盛食器的一种，引申指浅而小的杯子，再引申为杯状器皿。

***

# 去部

## 去

甲骨文为“大”下有“口”形，至西周或将“口”写作“𠙴”。构形有如下几种说法

1. 下部为器皿形，上部的“大”表示器盖，整个字是𠙴卢（𥬔籚/𥬔𥰠）的象形，一种盛食器；
2. 上部的“大”为人形，下面的的“口”表示某种出口，会人从出口离开之意；
3. 下部就是“口”字，此字从大从口，是“呿”的初文，表示张口。

可能最初表盛食器义和表离开义是两个不同的字，但字形过于相似，在商周时即已混用。隶变后上部的“大”逐渐变作“土”形，下部则多写作“厶”形，楷书作“去”。

常用义项为违离、离开，引申出使动用法表示去除，由离开义还引申为放弃、失去、距离、往等义。表示盛食器义时后世加竹旁作“𥬔”，此义又有后起形声字“筥”。由盛食器义引申为收藏义，后世作“弆”。又引申为器盖，后世分化出从皿的“盍”字表此义，“盍”被假借作它义，又再加艸旁造“蓋（盖）”字。

***

# 血部

## 血

甲骨文从皿，上有一液滴形，表示祭祀器皿中盛放的鲜血。后血滴省作一短竖，至西周又将短竖写作短横，隶变后短横倾斜，楷书又变作撇，整字写作“血”。

本义指祭祀时敬献的牲畜血，后泛指血液。引申为用血涂沾、有血缘关系、血色、红色等义，又引申指刚烈、热诚。

## 衄

从血丑声，本义指鼻出血，引申泛指出血，又引申为挫败、损伤、侮辱、退缩、耻辱等。由挫折、退缩义引申成为书法中一种笔法的名称，称作“衄笔”，即停住笔锋暗中挫动以调整行笔方向，常与“挫笔”连用，并称“衄挫”。

## 膿（脓）

《说文》小篆收录两种字形：其一为从血、䢉省声，作“𧗕”，其二为从肉、䢉声，作“膿”。后者本为俗体，但后世广为使用，逐渐成为正体，“𧗕”则被淘汰。现代简化字将“膿”类推简化为“脓”。

本义指化脓性炎症病变形成的黄白色粘液。引申为腐烂、肥硕、浓厚，表浓厚义时通“醲”。

## 卹（恤）

始见于西周金文，从卩从血，像人鞠躬俯视盆血，以会祭祀时谨慎庄重之意。至秦简文字将“卩”讹为“邑”。从卩的字形楷书作“卹”，从邑的字形楷书作“䘏”，二字并行。现代将“卹”、“䘏”均视为“恤”的异体字而淘汰，详见“恤”字。

本义是谨慎，引申为忧虑、顾念，进而引申为救济、抚恤、怜悯。

## 盇（盍）

从皿去声，始见于战国，“去”的下部有写作“口”和“𠙴”的两种写法，后“去”底部的弧线与“皿”上部的弧形叠合简省，以致《说文》误认为此字从血、大，此形楷书作“盇”，而未叠省的字形楷书作“盍”，现代以“盍”为正体。

本义为器盖，是“葢（蓋/盖）”的本字，引申为盖合、覆盖、聚合。后假借为疑问副词，于是又分化出从艸的“葢/蓋”字表示本义及其引申义。

## 衊（蔑）

从血蔑声，本义为污血，引申为血染，再引申为用物涂染，进一步引申为恶语诋毁，即污衊。明代时开始出现借“蔑”表“衊”的用法，写作“污蔑”。现代简化字将“衊”并入“蔑”。

***

# 丶部

## 丶

本义不明，一般认为是“主”的初文，而“主”又是“炷”的古字，或认为其是火炷的象形，但无确证。

## 主

构形主要有两种说法：

1. 商代初文为“T”形，像神主形，与“示”共用一字，后分化，详见“示”字。西周时在竖笔中间加圆点。至战国顶部或加短横饰笔（与“示”类似），并将圆点变为短横。后又在底部再加一横，上部的长横变为上翘的弧形，原顶部的短横饰笔变为竖点，至此成为小篆字形。
2. 甲骨文另有一火炬形的字，上部为一个弧形托着火苗，下部为木，为树枝扎成的火把的象形，是“炷”的先造字。后来出现高脚油灯，底部的“木”于是变形为类似“土”形，表示灯台，演变为战国文字与小篆的字形。

隶变后将上翘的弧形拉直，又变回横画。顶部竖点在隶书中写作短横，楷书写作斜点，整个字作“主”。

如按神主说，则本义为神主，即已逝的君主诸侯的牌位，引申指君主，进一步引申出家长、主人、为首的、根本等义，借表灯炷义。如按灯具说，则本义为灯炷，对灯来讲火炷是最重要的，故引申出首要、根本义。而神主本称“示”，后因牌位与灯盏外形相似，借用“主”表牌位义。

由君主、首领义引申为主持、掌管义，进一步引申为主张、注重等义。灯炷义后分化出从火的专字“炷”。又有灌入义，后作“注”。

## 咅（否）

从口不声，本为“否”字，后分化。战国时多在“不”上加饰笔，隶变后将“不”得左右斜笔拉平为一长横，带饰笔的“不”于是变为“立”形。东汉之前“否”与“咅”为异体关系，混用无别，东汉以后明确区分为不同的字，“咅”字不单独使用，只作合体字的声符。《说文》解为“从丶从否”，所谓的“丶”其实是“否”的饰笔讹变而来。

***

# 丹部

## 丹

初文为“𠂁”，后世字形变化不大，微变作“丹”。构形说法有二：

1. 外部为矿井形，中间一点表示开采的朱砂。
2. 外部形状与“井”字有区别，应是竹筒的剖面，像竹筒盛放着朱砂。

本义为朱砂，红色矿物名。引申为朱红色、赤诚的、染红等义，又因道家炼丹药多用朱砂，故所炼的丹药也称为“丹”。

## 彤

从丹从彡，“丹”为朱砂，用“彡”表示朱砂色彩绚丽。本义指朱砂的颜色，即朱红色。引申指用红色涂饰器物。

***

# 青部

## 青

西周金文从生井声，会草木生长期颜色之意，即指青绿色。上部的“生”或作“木”、“屮”，表意近似。声符“井”中间有加点的写法，即“丼”，因“丼”与“𠂁”形似，故出现讹从丹的字形。从井声的字形到战国时或在底部加“口”形为饰，一直延续到汉代。而从丹的字形延续到小篆，隶变后主流字形将“丹”变作“月”。为了与“月”相区别，楷书或将“月”的撇写作竖，或将“月”写作“円”，分别成为“青”、“靑”，现代以“青”为正体。

本义指青绿色，引申为与绿色接近的靛蓝色，又可指黑色。引申指草木生长茂盛，此义后世作“菁”。

## 靜（静)

由“青”和“爭”组成，关于如何判定形符和义符有争议。《说文》认为是从青爭声，训为“审”，即清楚明白义。或认为是从爭青声，或认为青争皆声，或认为“靜”是“耕”的本字，暂无定论。

隶变后义符“爭”上部的“爪”或讹作“日”，但此形未传至楷书，楷书作“靜”。唐宋以后“爭”开始被简化为“争”，“靜”也类推简化为“静”。

本义不确定，常用基本义为安定不动，或说此义本字为“竫”，用“静”是假借用法。由此义引申为没有声响，即寂静。由安定不动义引申为使动用法，即“使安静”，引申为平定、镇抚，此义后用“靖”。

***

# 井部

## 井

甲骨文即有“井”字，其构形有几种说法：

1. 像四木交搭的井口围栏之形。
2. 奴隶社会井田制的产物，即奴隶主将土地按“井”形划为九个区域，八家各占一块，正中一块为公田并掘水井供八家灌溉、饮用。
3. 取形自早期一种加固水井防止井壁坍塌的木墙支架，顶部有方形木框，俯视即为“井”字，见于河姆渡遗址，后世称为“井干”。

西周时或在中间加点，表示井中有水，一说是表示汲水的器物。“井”、“丼”并行至东汉，楷书以“井”为正体，“丼”渐渐淘汰。

本义是水井，也特指井栏。因形状又用以指井田制。由井田义（或说由井栏义）引申为条理、次序、法度义。进一步引申为惩罚，此义在典籍中写作“刑”或“型”，而“刑”字的本义另有来源，详见“刑”。由本义引申指类似井的建筑，如矿井、天井等。古代因井设市，又引申指人口聚居的地方，如市井、背井离乡等。

## 阱

春秋战国之际的侯马盟书上字形从阜从土、井声。小篆省去土，《说文》解作“从阜从井、井亦声”，隶变后楷书作“阱”。“阱”是“井”的后起分化字。另有从穴的异体字“穽”，始见于《说文》，今已淘汰。

本义是捕捉野兽的陷坑，引申为深坑、囚人的地牢，进一步引申指害人的圈套。作动词表示陷入、陷害。

***

# 皀部

## 皀

是“𣪘”和“簋”的初文，甲骨文像食物盛于簋中之形，详见“簋”字。后世逐渐讹变，至楷书写作“皀”。其食器的本义后世用“𣪘”或“簋”（金文多用“𣪘”，典籍多用“簋”），而本字“皀”则多用于偏旁，并略简化。

## 卽（即）

从卩从皀，甲骨文像人坐或站于盛满食物的簋旁，会就食之意。楷书旧字形本小篆，作“卽”。而汉隶产生将“皀”简化作“㫐”形，此形楷书作“即”。现代以“即”为正体。

由就食本义引申为就（动词）、接近、靠近。又引申为至、到达、迎合、符合、寻求、按照。由接近、到达义又引申为当时、当天、不久后、就（副词）等，又虚化为连词，相当于“则”。又表假设，相当于“哪怕”。

## 旣（既）

从旡从皀，甲骨文像人坐于盛满实物的簋旁并转头向后，会用食完毕之意。楷书旧字形作“旣”，现代正体依汉隶作“既”。

本义是食毕、食尽，引申为完毕、尽。又引申为全都、已经，由此虚化为连词。又特指日全食或月全食。

***

# 鬯部

## 鬯

甲骨文像酒器内盛装鬯酒之形，外为器形，内部小点表示酒液。字形后逐渐讹变，底部的器足讹为匕，整字至楷书作“鬯”。《说文》解为“中象米，匕以扱之”，是根据讹形推断的，有误。

本义是由黑黍酿成的一种香酒，用于祭祀、宴饮。

## 𩰪（郁）

从𦥑、鬱省声，是“鬱”的异体字，后世以“鬱”为正体，鲜见用“𩰪”。现代简化字并入“郁”。详见“鬱”字。

## 爵

商代甲骨文和金文为三足酒杯“爵”的象形，上部或加“↑”形表示爵柱，杯壁或加方块形表示把手，右侧或加“又”（手形）表示持爵。至西周，爵柱讹作类似“尔”形，下部省为二足。秦简文字将“又”加一画作“寸”，并置于底部与酒杯形上下分离，左下或作“皀”，此字形由汉隶继承，汉隶将中间的杯体省去两足写作“罒”，至楷书又将上部“尔”形的爵柱讹作“爪”，整字作“爵”。而秦简文字另有字形将“皀”的上部繁化，致《说文》小篆讹作“鬯”。

本义是酒器名，借代指酒，也作酒的量词。古代君王授予官职爵位时，常伴随赐爵等器物，由此引申指爵位，由作动词指授爵、授职。

***

# 食部

## 食

甲骨文上从亼形（张开的倒口），下从皀（簋），会张口就簋而食之意。“食”原是“飤”的简写形式，“飤”字像一人俯身张口就簋进食之状，在甲骨文时期就已经普遍省去人身，简写作“食”了。隶变后，下部的“皀”讹为“艮”形。楷书作“食”。

本义是进食、吃，引申作名词表示食物。由吃义引申为享受、使用。又引申指日食、月食，此义后作“蝕（蚀）”，由此引申指亏损。以上义均读shí。又有使动用法，表示用食物给人、动物吃，也即供养、饲养、宴请、给俸禄等，此义后多作“飼（饲）”。以上义读sì。用于人名时保留古音yì，如郦食其。

## 飪（饪）

始见于《说文》，其中古文从肉壬声，作“䏕”；小篆从食壬声，作“飪”。现代简化字将作偏旁的“食”按草书楷化简化为“饣”，“飪”类推简化为“饪”。

本义为煮熟，泛指做饭做菜，即烹饪。

## 飴（饴）

西周金文从食、異（异）省声，或作从食从皿、異省声。小篆改为从食台（yí）声，楷书作“飴”，现代简化字作“饴”。而西周初文隶定为“𩞫”，声符不省，但此形后世罕见用例。

本义指用米和麦芽熬制而成的糖稀。引申指甜、美食。以上义均读yí。六朝以后又用同“飼（饲）”，有供养、喂养义，读sì，近现代不用此义。

## 餅（饼）

从食并声，现代简化字作“饼”。本义为面食的通称，声符“并”兼表合并义，即用水调和面使之合并，依据形状分为蒸饼、汤饼、蝎饼等。后世专指扁圆形面食。由引申指饼状的事物。

## 饌（馔）

从食巽声，现代简化字作“馔”。本义为陈设或备办食物。引申为吃喝、菜肴等。

## 養（养）

从食羊声，《说文》古文作“䍩”（见于楚简）。甲骨文中另有一个从攴从羊的字，多认为是“牧”的异体，西周之后放牧之“牧”统一作“牧”，未有从羊者。故《说文》古文和楚简中的“䍩”被视作是“養”的异体是合理的，与甲骨文中的从羊的牧字应为词义无关的同形字。现代简化字据元代草书楷化形式作“养”。

本义为饲养牲畜，引申为对人的供养、奉养、抚育。由引申为培养、教育、保养、贮藏、隐藏等义。近代又由养活义引申指氧气，分化出“氧”字。

## 飯（饭）

从食反声，始见于春秋时期，现代简化字作“饭”。本义为吃饭，引申作名词表饭食，多指米饭。又有使动用法表示给别人饭吃、喂牲畜。又引申为含，即死者口中含着米贝珠玉等物。

## 飤

甲骨文像人俯首张口就簋进食，后有省去人身只保留张开的人口的简化形态，即是“食”字，“飤”、“食”为繁简异体关系，详见“食”字。西周以后，人身体的部分与人口分离，变为从食从人，此形隶变后作“飤”。战国时或有将人置于左侧的写法，此形隶变后作“𠋡”。较晚时（约在六朝时期）出现从食司声的形声字“飼”，专表“飤”、“食”的使动用法，后人以“飤”为“飼”的异体。

本义同“食”，与“食”本为一字。后主要用于使动用法，即使吃，同“飼”。

## 餐

从食𣦼声，或体从水从食，作“湌”。“湌”楷书又有异体作“飡”。本义是吃。引申为饭食，又用作饭食的量词，相当于“顿”。

## 餉（饷）

从食向声，或体从食襄声，作“饟”。现代以“餉”为正体，简化为“饷”。

本义为饷田，即给田间耕作的人送饭。引申为馈送、招待、所送的食物、军粮、运送军粮、薪金等。由本义引申为短暂的一段时间和中午，因饷田多在中午且时间不长，此两义后用“晌”字，读音也发生改变。

## 饋（馈）

从食贵声，现代简化字作“馈”。本义为赠送粮食或饭食，引申为赠送、进献、输送粮食、祭祀、进食、烹调等。又指食物、饮食之事、粮饷。

## 饗（飨）

甲骨文像两人面朝皀（簋）相对而食之形，后世“卿”字直承此形，是“饗（飨）、鄉、嚮、卿”的共同初文，象形表示众人相聚宴饮。后由本义又分化出朝向（由二人相对之形引申而来）、乡党（共同饮食的聚落）、聚落中的权威代表（由乡党义进一步引申而来）三个义项，其中朝向义后分化出“嚮”字（今简化做“向”），乡党义用“鄉”本字（今简化做“乡”），聚落乡老义用“卿”字，而相聚宴饮的本义则另加义符食作“饗”。

表示乡党义的“鄉”字至小篆时，于皀两侧的人形上各加一口，变为两个左右相对的“邑”，应是根据“鄉”的行政区义改造而来，隶变后左面的反邑写作“乡”，右边的正邑写作“⻏”，于是整个字变为“鄕”，楷书将讹变后的“皀”进一步讹作“良”，整字作“鄉”。而为与表行政区义的“鄉”字相区分，表乡老义的字仍保留左右的人形，并不变为“邑”，隶变后写作“卿”。表相聚宴饮义的从食分化字因以“鄉”为声，故上半部继承“鄉”的变法，整字写作“饗”，现代因将“鄉”简化作“乡”，于是“饗”变为左右结构写作“飨”。而表朝向的字分化为“嚮”，其所加的义符兼声符“向”本义为回响，是“响”的初文。

“饗”由本义引申为宴请宾客、祭献、享受等。

## 餬

从食胡声，本义是稠粥，引申作动词表示用粥填口以充饥，即“餬口”。由本义引申指粉加水和成的胶状物，又指涂抹、粘合。后作“糊”。

## 飽（饱）

从食包声，现代简化字作“饱”。本义指吃足。引申为满足、饱满、充足、充分。

## 饒（饶）

从食堯声，现代简化字作“饶”。本义为充足、富足，引申为丰富、多、土质肥沃，由丰富、多义又引申出厚赐、多给、剩余、增添、厚重等义，由厚赐、多给义又引申出宽容、宽恕义。由多给义又引申作连词相当于“任凭”。

## 餘（余、馀）

从食余声，始见于小篆和秦隶。其声符“余”的本义是房舍（为“舍”的古字），借作第一人称代词。而“餘”本义是食物有剩余，引申泛指剩余，进一步引申为宽裕、丰足，由剩余义又引申为残剩、末、其他的、零头尾数等义。

“餘”与“余”本义无涉。汉以后常用“余”同音替代“餘”，现代正式将“余”作为“餘”的简化字，但当意义可能混淆时，用类推简化而来的“馀”字。比如“余日无多”，可能产生“我的时间不多”和“剩余时间不多”两种歧义，这种情况下对于表剩余义时，可以写作“馀日无多”。

## 餞（饯）

从食戔声，现代简化字作“饯”。本义为设酒食送行，引申为送、送走。近现代也指以蜜或糖浸渍果品。

## 館（馆）

从食官声，战国时有将声符省作“𠂤”的写法，与同时期“官”单字的省写形式一致。汉隶以下承小篆，楷书作“館”，现代简化字作“馆”。

本义是接待宾客的房舍，作动词表示寓居留宿、接待安置。由本义引申为华丽的住宅、官署。近现代也指接待公众的活动场所。

## 饑（饥）

从食幾声，本义为谷物歉收、荒年。与从食几声的“飢”非同字，“飢”本义为饿。现代简化字将“饑”和“飢”统一归为“饥”，义项合并。

## 饉（馑）

从食堇声，现代简化字作“馑”。本义为谷物歉收、荒年，与“饑”类似，在不同古籍中“饑”与“饉”的具体标准不同，但大意相同。

## 餧（馁、喂）

从食委声，有饥饿和鱼腐烂两个本义，此二义无明显关联，可能是两个同音词共用了一个字形。由饥饿义又引申指泄气、丧气。以上义读něi，后世替换声符作“餒”，现代简化为“馁”。“餧”又另有喂养义，同“餵”，读wèi，此义后世作“喂”。今“餧”已完全被“馁”和“喂”取代。

## 飢（饥）

从食几声，现代简化字作“饥”。本义为饿。另有从食幾声的“饑”字，本义为谷物歉收，与“飢”为不同的两字，现代也简化为“饥”，义项合并。

## 餓（饿）

从食我声，秦简中义符作“飤”，“飤”与“食”为一字之分化。现代简化字作“饿”。本义为饥饿，但程度甚于“飢”，指严重的饥饿。使动用法表示使受饿。又引申指贫困、资源匮乏。

## 餻（糕）

从食羔声，北宋时出现异体字“糕”，二字并行，现代以“糕”为正体。

本义为用米粉、面粉等制成的一种食品。

***

# 亼部

## 亼

非独立字形，出现于其他字的局部，在不同字中所指不同。《说文》列为部首之一，将“亼”视为古“集”字，与古文字不合。

## 合

甲骨文上为“亼”，下为“口”，构形有几种说法：

1. 像器盖与器皿上下相合之形。
2. 像上下两口相接，即接吻之形。
3. 《说文》以“亼”为古“集”字，将“合”字训为“合口”，即闭口。

至于将“合”拆作“人、一、口”，所谓“多个人发出同一种声音”之说，则纯属按楷书字形穿凿附会，先秦文字中“人”字的写法与“合”上部之形差异巨大。

不论哪种说法为确，总之“合”的字形具有二物相接合的属性，引申为闭合、合拢、聚合、结合、符合等义。由聚合义又引申为联合、合并，作副词表共同、一起。又结合义引申为男女相合、匹配。由符合义引申为重合、适合。用于语言交际，表示对答、回答，后分化出“答”字。

## 僉（佥）

西周金文上为“亼”形，表示倒口，下为两个向上张口的跪坐的人。至小篆，将下面张口的人形拆作分离的“口”和“人”，隶变后楷书作“僉”。

初文会意不明，本义未知，可能是会召集意，从僉声的字多有收拢、聚集、约束的属性。《说文》训为“皆”，此副词义应是由更早的实词意义引申而来，源头尚不确定。

## 侖（仑）

始见于西周，上为“亼”形，下为“册”形，构形不明。《说文》训为“思”。或认为与“龠”字有关联，如此则下部并非“册”而是编排的竹管乐器，可能指代乐音的等次、条理。此义及其引申义“伦次、条理”在典籍中都写作“倫（伦）”。由此又引申分析说明事物的条理，此义后作“論（论）”。现代简化字按草书楷化，作“仑”。

## 今

初文为倒“曰”形，为“亼”下加短画，构形有几种说法：

1. 倒曰加指事符号，表示口吟，是“吟”的本字。
2. 曰表示说话，倒曰表示闭口不言，为“唫（噤）”的初文。
3. 口下的一横表示口中所含之物，是“含”的初文。

西周以后或将下部的短横弯折，为小篆所本。隶变后这部分又写作“T”形，至楷书整字写作“今”。

不论本义为何，“今”字早在商代就被借用表当下、现在，也可与日、年等连用，表示当前的一段时间。

## 舍

“舍”字的构形本义及字义演变脉络有两种观点：

1. 初文为“余”，春秋以前无左右两点，像以木柱支撑屋顶的房舍之形。后“余”被借作第一人称代词，于是加“口”符造“舍”字表屋舍的本义，所加的“口”或认为是房间，或认为是基石，但总归是强调屋舍的含义。“舍”字本义是为客人提供的临时居住的房屋，即客舍。后用“社”同音替代，产生“旅社”等词。由客舍义又引申出居住、留宿义，春秋时每行军三十里要暂住一次，故“舍”又作距离单位表示三十里。又指星次，是将天空部分个区域比作星体留宿之所。由留宿义进一步引申出保留、止息义。因客舍多简陋，故将简陋的居所统称为“舍”，可作谦称，如“寒舍”、“舍弟”等。由于客舍是临时居所，居住后即会离开，所以引申出放弃义。由放弃义进一步引申出废止、释放、赦免、施舍等义。
2. 从口余声，“余”仅作声符，本义为口头发布。引申为发出、释放、施予、给予，进一步引申为离开、罢止、放弃。由罢止义引申为止息、住宿，由此引申出行军距离单位、星次、安置、保留等义。由住宿义又引申指住宿的客馆，进一步引申为对自己家或家内成员的谦称。

初文左右无两点，与“余”同。春秋时“余”、“舍”均增加两点，作“八”形。后世“余”字保留两点，“舍”则未保留。后又为表放弃的动词义造从手的“捨”字，以作区分，现代简化字又将“捨”重新并入“舍”。

***

# 會部

## 會（会）

西周金文从合，中间夹一内有小点的构件，此部分或认为是“胃”的象形初文，在此作声符。后世中间的声符讹变较多，至小篆变为《说文》所谓“从曾省”。底部“合”的下半部分本为口形，春秋时起或加一点，成为“甘”形，至小篆则又变作“曰”。整字楷书作“會”，现代简化字采用草书楷化，作“会”。

本义不明，可能是积聚禾谷，为“廥”的古字。引申为聚合、会合。进一步引申为盟誓、聚会、相遇、符合。又引申为器盖义。也指人口聚集之所，即都会。由相遇义引申为机会，又作副词表示恰逢。由符合义引申为领悟、能、熟悉、擅长、应当等义。以上义读huì。由聚合义又引申指总计，如会计，又指买卖的中间人，后作“儈（侩）”。以上义读kuài。

***

# 倉部

## 倉

甲骨文像粮仓形，形为“合”字中间夹一“户”，实际上部为苫盖，底部为坎穴，中间“户”为门扇。至战国时变形繁多，小篆整体沿袭初始字形，但将底部表示坎穴的“口”移至门轴的右侧。隶变后楷书作“倉”。现代简化字作“仓”，与战国个别异体以及《说文》所载的“仺”形近似。

本义为粮仓，后泛指贮藏物品的建筑。最初“倉”专用来藏谷物，“廪”藏米，“库”藏兵器财物，后词义扩大常混用。被假借为匆忙急迫义，用于“仓促”、“仓皇”等单纯词，不可拆为单字解释。

***

# 入部

## 入

“内”的分化字。初文为有锐锋的楔形符号刺入“冂”形，表示进入内里。后逐渐分化为“内”、“入”、“納（纳）”三个字。其中初始字形演变为“内”，由本义引申为内部、接纳、交纳等义，后两个义项后又分化出“納”字。另有字形省去被刺之物之保留楔形，即成为“入”，专表进入义。因同源，“入”也兼有“纳”义。

## 内

初文为有锐锋的楔形符号刺入“冂”形，表示进入内里，后分化出“内”、“入”、“納（纳）”三个字，详见“入”字。

## 全

始见于战国，从入从工，构形不明。战国中期，“工”中竖加饰点，演变为短横。至小篆，下部讹为“王（玉）”形。楷书旧字形从入，新字形因从俗改为从人。

本义为完整、整个，引申为完好、完备、保全、纯粹等义。引申作副词表示都。由完好义引申为病愈，后写作“痊”。由纯粹义引申指纯色玉。

***

# 缶部

## 缶

甲骨文上部为“午”，下为口形，“口”为瓦器的象形，“午”或说是不表义的声符，或说为“杵”，表示制坯工具，兼表音。春秋时或省去“口”顶部的横，后世沿袭，楷书作“缶”。

本义为一种小口大腹的瓦器，可以盛酒也可以汲水。春秋时也用铜制缶，故或从金（如栾书缶铭文中的缶字）。秦人有击缶而歌的习俗，缶为盛酒器，故酒酣兴起击缶来打拍子，逐渐成为一种乐器，但因不是正式乐器，击缶往往被视作低级、下等的娱乐。

## 匋

从缶勹声，《说文》作“包省声”，但“勹”即是“包”的古文。本义为瓦器，即陶土烧制的器皿，此义后作“陶”，读táo。又同“窯”，指烧陶器的炉灶，“窯”后作“窑”，此义读yáo。

## 缾（瓶）

春秋字形从缶比声，战国时变为从缶并声，楷书作“缾”。《说文》或体从瓦并声，楷书作“瓶”。

本义为一种陶制汲水器，后泛指口小腹大用来盛液体的器皿。

## 缸

从缶工声，另有从瓦工声的“瓨”字，与“缸”音义皆同，《说文》别为二字。本义为陶制长颈容器。后又泛指圆筒状的大口容器，或像缸的器物。

## 䍃

从缶肉声，徐铉认为“从䚻省”。隶变后上部的“肉”写作斜“月”，楷书又或讹作“爫”。本义为一种瓦器。

## 缺

从缶夬声，本义为器具破损，泛指各种事物的破损，引申指欠乏、空额、缺陷等。

## 罅

从缶虖声，本义为瓦器的裂缝，引申泛指裂缝、开裂。

## 罄

从缶殸声，声符“殸”是“磬”的古文。本义指器皿中空，里面没有东西。引申指尽、全部用完，进一步引申为全部、整个。古时“罄”、“磬”二字同音假借，常互通，现代明确区分。

## 罐

从缶雚声，较为晚起，见于《说文》新附。本义为汲水器。

***

# 矢部

## 矢

甲骨文为箭的象形，后在箭杆中间加一短横，西周金文或将短横写成圆点或圆圈，春秋以后固定为短横的写法。隶变后楷书作“矢”。

本义为箭，商代也用于陈列义。由陈列义引申为陈述。又通“誓”，表发誓、誓言，如“矢志不渝”。

## 䠶（射）

甲骨文像箭矢在弓弦上之形，偶见繁形像一人双手拉弓射箭之形。西周时或加一手（又），春秋沿袭。战国时将“弓”与“矢”分离，左右并立，或再将“矢”倒置。秦文字沿袭春秋写法，但将弓箭之形讹为“身”，“又”加一画变为“寸”。小篆有从矢从身（䠶）、从寸从身（射）两种形体。汉以后以从寸为主流，楷书作“射”。

本义为射箭，引申泛指借力投送，也指放出、发出。古代主射者掌事，故成为官名，如仆射，此义读yè。

## 矯（矫）

秦简文字从矢、从又、从高省声，“矢”、“又”会用手矫正箭杆使之笔直之意。至小篆讹为从矢喬声，但《说文》本义“揉箭箝也”与初文相合，即指把箭杆揉直的一种器具。引申指使弯曲的物体变直。进一步引申为纠正、匡正、诈称、违背等义。由“使变直”义引申为高举，如“矫首”，又进一步引申指勇武的样子。

## 矦（侯）

从商代到战国，字形为“矢”在“厂”下，会箭射向布靶之意。战国时有在“厂”上加短横饰笔的写法，秦文字又把饰笔写作横折，致《说文》认为此累加的部分为“人”，误解作从人。隶变后作“矦”，至楷书或将“厃”左右割裂，左半部讹为“亻”，整个字写作“侯”。约在汉代，分化出累加人旁的“𠊱”字，此字先类似演化为“𠋫”，然后又将中间的“亻”省为一竖，整字写作“候”。

本义指古代射礼所用的射布，作用类似后世的靶。从商代起，也用于指代方国或封国的君主、时间单位、地名等。由封国君主义引申为爵位，作动词表封侯。分化出的“候”字则表示观察守望，引申为等待、看望，又继承了时间单位义，引申为时节、事物发展状态等义。

## 短

从矢豆声，本义为不长，引申指不足。

## 知

甲骨文从子、大、口、册，其中“大”表示成人，“子”为儿童，“册”为简册，“口”表示说话，整个字表示成人按照简册的内容教育儿童。或省去“口”，或省去“册”，或将“大”变作“矢”，或将“子”变作“于”。其中“矢”可看作是根据读音音化的声符。

西周以后，主流字形为：上部作“大、口、于”，下部作“曰”，隶定体为“𣉻”，《说文》白部中的“𥏼”即为此形的讹变，以形而论应属于“智”字。从矢从口的“知”字约出现于春秋战国时期，初始为上下结构，小篆变为左右结构，隶变后楷书作“知”。“智”与“知”本无严格区分，约至汉代分工才逐渐确定，分化为两字。

造字之初既表示智慧之“智”，也表示知道之“知”。而由知道义又引申指使人知道。又由知道义引申为知觉、理解、交好、执掌、学问等。而智慧及其引申义后由“智”字承担。

## 矣

从矢㠯声，隶变后“㠯”简写作“厶”。本义为表示已然或肯定的语气词。汉以前有将“𥎨”用作“矣”的用法，但“𥎨”本是“疑”字，与“矣”字含义无关。

## 矮

从矢委声，箭矢作为长度固定的古代常用物品，常被用来丈量较短事物的长度，故从矢。声符委或认为兼表义，有委屈萎缩义。

本义为身材短，引申泛指物体高度小，或等级低。作动词表示变得低矮或使低矮。

***

# 高部

## 高

甲骨文像高台建筑之形，后在下方加“口”，可能表示高台的入口。后世字形变化不大，楷书作“高”。由高台之形表示由下向上离地面远之义，与低、矮相对，也指高处。引申指远、盛大、等级或程度在上的、升高、推崇、高度等。

## 亭

从高省、丁声，而所谓的“从高省”即不加口的“高”形，本就是甲骨文“高”的初文。始见于战国文字，本义指设在边防要塞的观察敌情岗亭。秦汉时亭的作用范围扩大，成为基层行政单位，十里为一亭。汉以后随着驿站兴起，亭多设在道旁供行人停留食宿。后来供人歇脚的功能被广泛用于园林建造，即今天的“亭子”。又由亭的形状引申指像亭的物体，如电话亭、邮亭等。因亭是高高耸立状，故引申指挺拔修长。

## 亳

甲骨文有“从高省从屮”、“从高省从乇乇亦声”两种字形，屮为草，乇为落叶的草木，指代含义相近，都像草生于台观下之形。本义待考，常用于地名。

***

# 冂部

## 冂

像门扃之形，即从外关门的门闩。《说文》本义为都城的远郊，或是以门闩之形比喻远界。西周时或在内部加口，即《说文》古文字形，其中的口表示国邑。战国时又出现从土的“坰”字写法。

## 市

甲骨文上为“之”、下为“丂”，旁加两至三点。构意不明，“之”可能是声符，也可能有前往之义。从商代时即用于市场义，即买卖之所。西周文字集成甲骨文写法，战国时发生讹变，“之”底部的横和“丂”顶部的横合并，左右两个点与中间合并后的横相连成为类似“冂”形，致《说文》误解为“从冂从乁”。战国时另有或体累加土旁。汉隶将上部原先“之”左右的折笔拉直，变成一长横，楷书则将竖顶部出头的部分拆为一点，字形作“市”。

因市场为人口聚集的场所，故引申指人口密集之地，进一步成为行政区划单位。由买卖之所义引申指交易、买卖货物，引申指求取。

## 央

甲骨文像正立的人（大）颈上戴枷之形，本义为灾祸，是“殃”的本字。另又分化出“鞅”字，表示套在马颈上的皮套。西周金文将枷的两竖笔下移，战国时讹变较多，秦文字承袭西周写法，《说文》误将变形后的枷形构件认作“冂”，隶变后楷书作“央”。

因枷的两块木板中心有孔洞，故引申为中心、中央。戴枷的犯人往往前程或性命将终结，故引申出尽义，如“长乐未央”。犯人戴枷难免请求公人减轻痛苦，故引申出央求义。另有观点认为央字是像一个人挑着担子，肩膀位于扁担的中间位置，故有中央义，可备一说。西周时又用于“鲜明”义，此义来源不明。

## 隺

从隹，上欲出冂，会鸟往高处飞之意，也指极高。又作为“鹤”的俗字。本是“鹤”的声符，但俗用“隺”代“鹤”，是不正规用法。

***

# 𩫖部

## 𩫖（郭/墉）

是“郭”、“墉”的本字，甲骨文像城郭四面有塔楼之形，后简化为上下两面。西周时或在城郭中央再加一圆形。战国时下端塔楼形或讹为“子”，此字形隶定作“𩫖”。秦文字或省去中间的城邑，只保留上部的塔楼和下端讹变后的“子”，整个字变成“享”形，此简化字形后保留在从邑的“𩫩”字中，即“郭”。𩫖字在上古时既用为城郭义的“郭”字，也用为城墙义的“墉”字，后分化：表城郭义时加邑旁，成为“郭”；表城墙义时另造从土庸声的形声字，成为“墉”。

***

# 京部

## 京

甲骨文像像积土高台上有建筑形，至小篆字形变化不大，隶变后作“京”或“亰”，现代以“京”为正体。

本义指建在高大平台上的房子，引申指王者所居，进一步指代国都。由本义引申出高、大义。由大义又引申作古代的计数单位，或说为十兆，或说为万万兆。现代也作为北京的简称。

## 就

初文为上亯下京，商代用于人名，西周时用为“即”义。后加声旁尤，为《说文》籀文所本，但《说文》籀文将左侧简省，类似“重京”。战国时或省去“亯”，简化为从京尤声，成为后世主流，楷书作“就”。

“亯”为祭祀祖先的宗庙建筑，“京”为建在高处的建筑，从亯在京上即表示“就高处以建宗庙祭所”，所以有开始从事、趋向、成就义。《说文》认为“尤”表义，表示异于凡，可备一说。由趋向义引申出靠近、遭逢、登上、随着一起吃等义，由开始从事义引申为谋求、按照义，由成就义引申为终、尽义。又作副词表示将要、则、加强肯定、仅等义。又作介词表示趁着、从、被等义。

***

# 亯部

## 亯

甲骨文像高台上有建筑物，本义指祭祀祖先的宗庙建筑。高台中间或加一横，西周时或将一横变为十字。战国秦文字下端作“子”或“了”。后演化为“亯”、“享”、“亨”三种字形。

由宗庙祭所引申指祭祀、进献、神鬼享用祭品等义，进一步引申为受用、享受。又指蒸煮食物，此义后专由“亨”字承担。“亯”、“享”则专表祭祀和享用相关的义项，“亯”又逐渐淘汰，“享”成为主流。后“亨”又用作通达、顺利义，于是蒸煮食物义又造从火的专字“烹”表示。

## 𦎫

甲骨文从亯从羊，后世字形变化不大。商代及西周多用于敦伐义，也用为器物名的“敦”。作偏旁时常简化为“享”，见于“敦”、“淳”、“谆”、“醇”、“鹑”等。

***

# 厚部

## 㫗

甲骨文像坛形容器，《说文》解为“从反亯”，与初文不合。

## 覃

甲骨文像坛中盛盐之形。西周文字从鹵。《说文》认为“从㫗、鹹省声”。本义为滋味深长，引申为延长、蔓延到、深广、广施等，以上义读tán。作姓氏时有tán、qín两种读音。

## 厚

商周文字上端从厂，下端像一敞口尖底的酒坛，后经讹变隶定为从㫗。战国时或从戈，或从句，都用于标声。

本义为山陵之厚，即地壳厚，因山陵多石故从厂。泛指各种物体两面间隔大，与“薄”相对。引申指深、大、多、重、浓等义。

***

# 畐部

## 畐

甲骨文和西周金文像盛酒容器形，至战国时器颈与器身分离，秦文字变得与“亯”的或体近似了。《说文》误解为“从高声”，与初文不合。

本义为容器名，引申指满。

## 良

初文构形说法不一：

1. 像水中有桥梁形，本义即是桥梁，古文中“良”、“梁”互通。
2. 像依附水道而建的城邑之形，引申为通达、畅达。
3. 像量（古代用来测定容积的器具）之形，是“量”的古文。
4. 像长囊裹米之形，是“粮”的本字，指出门带的干粮。
5. 模拟“豆”这种食物盛器。
6. 筛选谷物的器具，风箱鼓风，谷物中劣质颗粒较轻会被吹走，留在器内的是品质好的谷粒，故有好、善义。
7. 像穴居两侧有孔或台阶上出之形，是“廊”的本字。又因两侧有通道，故有通畅义，引申为良好、明朗义。
8. 像头发、长须俱全的人头。

历代字形讹变较大。春秋战国时下部音化为“亡”。《说文》解作“从畗省”，不确。秦汉时多写作上ㄇ、中日、下亡。楷书写作“良”。
本义不明，但常用于好、善义。引申为和睦、贤良的人、甚等义。

***

# 㐭部

## 㐭

甲骨文像露天的谷堆，顶上有一亭盖形，本义为仓廪。后世讹变繁多，小篆以后定形为“㐭”。后为强调时储粮之所，又累加“禾”旁作“稟”。后“禾”讹作“示”，写作“禀”。“禀”由本义引申指官府赏赐谷物，进一步引申为赋予、赐予，又引申为被动用法，也即领受、承受、奉行，专指向上级报告。由被赐予义引申指禀赋、禀性等。因字义增多，故又造从广的“廩（廪）”字表粮仓的本义，与“禀”分化。

## 亶

商周初文从㐭从虫，隶定作“𫢀”，会仓廪生虫之意，表示粮食多吃不完。后加声符旦并省去虫，写作“亶”。增加声符旦与省去虫之间应存在过渡字形，但未见古文字例，不过《说文》“鳣”字籀文写法说明增加旦符之初仍保留虫。

本义为谷多，引申为厚道、忠实、广大、平坦等义。

***

# 嗇部

## 嗇（啬）

从來从㐭，“來”指麦子，“㐭”指粮仓，本义为将麦子收入粮仓，即收获粮食。从商代即有异体从秝从㐭，此字形在西周时“牆”字中尚有体现。隶变后楷书作“嗇”，现代简化字作“啬”。

由本义引申泛指各种农事，如田夫也称“啬夫”。由本义又引申出爱惜、节省、小气、贪图等义。因词义扩大，收获粮食的本义以及农事义后造从禾的专字“穡（穑）”表示。

## 牆（墙）

从嗇爿声、爿兼表义。商周时其所从的“嗇”多为从秝从㐭的字形，《说文》籀文将“秝”写作“㯤”，隶定作“𤖧”。至小篆，其形旁的写法与同形的“嗇”一致，为从來从㐭，隶变后整字写作“牆”。后为表明质地，又将“爿”替换为“土”，写作“墻”，但丢失了表音构件。现代简化字作“墙”。

“嗇”表示藏谷于廪，“爿”既作声符，也表示古代筑墙技术——版筑。二者合起来表示筑起围屏收纳粮食，泛指用土石砌筑的屏障。

***

# 來部

## 來（来）

像带穗的麦子形，本义指小麦。至晚于商代（大概率始于更早的时期），“來”字已经产生了返回、到来的意思，与“往”相对，此义引申来源暂不明确。《说文》认为麦子是“天所来也”，即是上天所赠来，所以有到来义，但此说较牵强。另有一个从來从夊（倒止）的“麥”字，倒止表示返回的脚，从字形上看此字更可能是为承担“來”的到来义而后起的分化字，但从出土的古文字材料来看，“麥”只见到表示小麦义，而“來”大多数用例为到来义，“來”小部分用例为小麦义。此分化结果有可能是传播过程中出现的错误，一个比较合理的推测是：最初先产生象形的“來”字表示小麦，后“來”字分化出到来义，为此又造从夊的“麥”字，但可能因为笔画较少或普及度高，“來”被广泛用于到来义，其小麦的本义用得更少，于是分化出的“麥”字反倒被用来表示小麦义。

由返回、到来义引申指将来的一段时间、招致（后多作“徠”）。又作虚词，表示约数。

***

# 麥部

## 麥

从來从夊，是“來”的分化字，本义为小麦，其含义演变见“來”字。汉代以后也简写作“麦”，现代以“麦”为正。

## 麪（面）

从麥丏声，本义指用麦子粉碎成的细末，即面粉。俗作“麺”，现代简化为“面”。

***

# 夊部

## 夊

像倒止形，“止”为脚的象形。倒止形后分为“夂”、“夊”两字，都多用于构字偏旁，主要区别为“夂”多置于字的上部，“夊”多置于字的下部。小篆以后的字体中，“夊”的末笔多出头，与“夂”相别，但不绝对。“夊”单独成字时表示行走迟缓。

## 夋

西周金文从女允声，至小篆将“女”写作“夊”，结合“夏”、“稷”等字的先秦字形，“夊”常讹作“女”，虽从女的金文早于小篆，但更早的字形很可能就是从夊，只是尚未发现，暂不能确论小篆系讹变。楷书作“夋”。

本义为行走舒缓的样子。

## 复

甲骨文上部为居穴，下部为“夊”，即倒止形。表示往返于居处之地。后被累加彳旁的“復”取代，字形和含义演变详见“復”字。“复”在甲骨文中用法有三：报告、再次、人名，秦代以后被淘汰。现代简化字又将“復”简化为初文“复”。

另有一个从衣复声的“複”字，约产生于秦代，本义为双层夹衣，引申为繁複、重複。先秦时期，“複”与“復”常互通。现代简化字将“複”同并入“复”。

## 夌

甲骨文下端从人，上端所从不明。西周时，下端的人加“止”（脚）。《说文》解为“从夊从𡴆”，训为“越”，即攀越、超越。

## 致

甲骨文从至从卩（跪坐的人形），西周时变为从至从人，战国时又在人的下端加“止”。秦文字将“人”和倒止分离，字的右部变为从人从夊。小篆省去人，成为从夊从至。楷书将“夊”写作“攵”，与“攴”的简化写法同形，整个字形成为“致”。

本义为送出、送到，引申为到达、传至、招来、导致，又引申为集中心力于某事，由此引申为情趣、精致等义。

## 憂（忧）

西周金文为一人举手搔头，会忧愁意。战国时，将人身、人手和人头整体讹为形近的“頁”，下部累加“心”旁，强调忧愁的心理活动。此字形隶定作“㥑”。秦隶出现累加“夊”的字形，楷书作“憂”。《说文》将“㥑”、“憂”别为二字，将“㥑”训为“愁”，将“憂”训为“和之行也”，实际此二字为古今字的关系，表义无别。典籍中忧愁义多用“憂”，“㥑”渐废。现代简化字将“憂”简化为“忧”，而“忧”字古已有之，从心尤声，本义为心动。因“忧”较为生僻，故作为“憂”的简化字，而其本义不再使用。

## 愛（爱）

初文为“㤅”，从心旡声，《说文》训为“惠”，即仁爱。战国时“㤅”字上端或作“旡”或作“欠”，“旡”和“欠”左右相反，都是张口的人形，或说此部分兼表义，表示张口告人心里喜欢。秦文字累加“夊”旁，即成为小篆“𢜤”字，《说文》将“𢜤”训为“行貌”，与“㤅”别为二字，实际此二字为古今字的关系，表义无别。隶变后上端讹为“爫”，楷书字形作“愛”。现代简化字依行草字形，将“心”和“夊”整体简化为“友”，整字作“爱”。

本义仁爱，引申为喜爱、爱好、爱情、爱惜、吝惜、贪爱、容易发生某种行为等义。

## 夏

甲骨文中有上部似“日”、下部似“頁”（强调头部的人形）的字形，部分学者释为“夏”，表示人在烈日之下，即一年中炎热的时段（最初不是明确的季节名，商代只有春秋没有冬夏），但未成定论。入周以后有若干字形均被视作“夏”字：或省去“日”，或在“頁”内部繁增构件（加双足、双手等），或将所加的“止”（人脚）与“日”相连，此相连的部分又或省作“足”、“疋”，又或作从頁从日从又，或将“又”讹作“寸”，又或将頁下的人形连同“止”变作“女”，又或从虫等等。

秦文字采用省去“日”，保留“頁”（人首）、“𦥑”（双手）、“夊”（脚）的写法，小篆从之，此字形隶定为“夓”。汉隶或省去双手和“頁”的人身部分，此简化写法为楷书所本，作“夏”。

《说文》训为“中国之人”，即华夏，但无法解释早期字形中的“日”。目前初文虽无定论，但造字本义应与日有关，本义可能就是夏日。另外楚简中从虫的写法，可能也是强调天气炎热有虫类活动之义。甲骨文中未见有用于表示中国之人的意思的，此义当为后起。

常用义有夏季、中原部族、朝代名、水名、大、大屋（后作“厦”）等。又通“雅”。因“夏”有或体将日和止相连并讹作“疋”，同时又有省去“頁”旁的省形，整个字直接写作“疋”，故“疋”也有“夏”义，表此义时常作为“雅”的通假字。但“疋”的本义为人的下肢，与“足”为一字之分化，与此处“夏”的省形只是碰巧同形，字义无涉。

***

# 舛部

## 舛

从两夊向背，会相违背之意。引申为交错、错乱、不幸等义。

## 舞

甲骨文像人两手执兽尾类器具舞蹈之形，是“無”和“舞”的初文。后此字产生有无之无的含义，为区分字义，分化出类加舛（双脚）的“舞”字专表舞蹈的本义。而不加舛的字形则专用于有无之无，隶变后作“無”。详见“無”字。

由舞蹈的本义引申出挥动、飘动、振奋、玩弄等义。

***

# 䑞部

## 䑞（舜）

战国文字上端从“㠯”，中间为“亦”，下端从“土”，或说是“允”的繁形，即“夋”字。后经讹变，“㠯”先变作“つ”形，又变作“月”，“亦”变作“炎”，成为《说文》古文字形，隶定作“𡐩”。小篆进一步讹变，并将底部换成“舛”，整字隶定作“䑞”。隶变后简化，楷书作“舜”。

“舜”的《说文》本义为草名，但在古文字中大都指帝舜。“舜”与“夋”可能同源，且同音，“舜”在古书上通“俊”，“帝俊”即是“帝舜”。

***

# 韋部

## 韋（韦）

商代初文从囗、从四止，即四只脚围在城邑四周，会围城四周以攻城或守城之意。有简形从三止或二止。入周以后只从二止，中间表示城邑的“囗”或变作“帀”（音zā，本义为环绕）以增强表义，或直接省去中间部分。战国时恢复二止夹囗的写法，隶变后楷书作“韋”，现代简化字依草书楷化作“韦”。

“韋”、“衛”、“圍”、“違”四字同源，后分化。最初“韋”字有包围、守卫、违背三种意思，后分化出累加行旁的“衛”字专表守卫义，累加囗旁的“圍”字专表包围义，累加辵旁的“違”字表违背义。而“韋”字则渐渐脱离这些常用义项，多只用于人名。另外春秋时“韋”也用来指去毛鞣制过的熟皮，可能源于熟皮可以包裹环绕其他物品。用皮韦编连的竹书即称为“韦书”，“韦编三绝”即取此义。

## 韜（韬）

从韋舀声，本义为剑套，引申为收纳、包容、掩藏等义。

## 韓（韩）

战国文字初以倝为韓，后形成从韋倝声的形声字，至楷书省略“韋”上的“人”，写作“韓”。本义为井栏，多用作国名和姓氏。

## 韌（韧）

从韋刃声，本义指柔软而结实，引申指意志坚忍不拔。

***

# 弟部

## 弟

甲骨文从必从己，像柲上缠韦之形，《说文》训为“韦束之次第也”，即本义为次序、秩序。古多用于兄弟之弟，次第的本义后用“第”字。又引申指对兄长恭敬有礼，此义后作“悌”，如“豈弟”后作“恺悌”。

***

# 久部

## 久

《说文》解为“象人两胫后有距也”，是基于小篆字形判断的，但战国文字上部并不是“人”，整个字更接近于“氒”或“斗”，本义不可考。另有观点认为“久”是“灸”的本字，字形为一个侧卧的人背部有针，但此说也是基于上部是“人”的看法，与早期字形不合。

古时常用义项有停止行进、耐久、时间长、终于等，也同“旧”表示从前的，也用作“灸”。

***

# 桀部

## 桀

始见于战国，从舛从木，或体从舛从土，构形不明。有观点认为是“乘”的讹字，以两足站在树上表示高出别人之意，是“傑”的初文，但未有定论。也指小木桩。典籍中多用“桀”为“傑”。后多专指夏朝末代君主，豪杰之义则由后起的“傑”字承担。

## 磔

从石从桀，本义为分裂牲畜的肢体。《说文》认为石表声。古初以桀为磔，后增加石旁分化出“磔”字，若视作形声字，一般此类分化都是累加义符作形旁，鲜有累加声符改变读音者，所以《说文》的说法存疑。

## 乘

甲骨文从大（人形）在木（已伐之木）上，会登、升之意。西周时在人形下端增加两止（脚形）强调踩在树上之意。战国时讹变甚多，所从之木或替换为几、車。秦文字仍从木，但人形已经讹变，小篆隶定作“椉”。隶变后简化作“乗”，楷书或作“乘”，现代以“乘”为正体。

本义为登、升，引申指骑坐，进一步引申指驾驭、凭借、利用等义，又作四匹马的车的量词。

***

# 木部

## 木

像树木之形，上有树枝，下有树根，本义即是树。字形变化不大，隶变后将两侧树枝拉平，写作“木”。

由本义引申指树叶、木头、木材、木制的，也特指木制乐器。又根据木头的特性引申指质朴、呆笨等义。

## 橘

从木矞声，果树名，也指橘树的果实。明清以后也用“桔”作“橘”的俗字，“桔”本指桔梗，是一种草本植物，本义与“橘”无关，假“桔”为“橘”最初是一种不规范的民间用法，后此用法逐渐普遍。现代字典已将“桔”正式作为“橘”的俗字，表此义时读jú，表桔梗的本义时读jié。

## 橙

从木登声，果树名，也指橙树的果实。引申指近似橙子的颜色。

## 柚

从木由声，果树名，也指柚树的果实，此义读yòu。也假借为“軸”，用于“杼柚（杼轴）”一词，旧读zhú，今读zhóu。

## 梨

从木利声，果树名，也指梨树的果实。小篆的“利”旁写作异体“𥝤”，整字隶定作“棃”。隶变以后不加饰笔，写作“梨”。

## 柹（柿）

从木𠂔声，隶变后“𠂔”或讹作“市”，楷书“柹”、“柿”并行，现代以“柿”为正体。

## 枏（楠）

从木冄（冉）声，树名，即楠树，又名“梅”。俗作“楠”，现代以“楠”为正体，枏、柟作为异体字并入楠。

## 梅

从木每声，本义是楠树，见“枏”字。后被假借作表酸果的“楳”，“梅”的本义渐废。

## 楳（梅）

本字为“某”，从木从甘（或从口，甘、口作形符可互通），本义是果树名，果实为酸果，即梅子。后因“某”多被假借作代词，于是又造累加木旁的专字“楳”表本义。或体从二呆（“呆”即“某”从口不从甘的写法），作“槑”。后又多假借本义是楠树的“梅”字表此义。现代将“楳”、“槑”并入“梅”字。

## 杏

构形不明。《说文》认为“从木、可省声”，但缺少杏与可古声相谐的证据。或说是会意字，“杏”其实是“呆（某）”上下易位的字形，后者本义为梅树、梅子（详见“楳”字），故“杏”可能是类似构形会意用来表示果树名，也可能就是与“某”为同一个字，但此说也缺少证据。

果树名，也指杏树的果实。

## 柰（奈）

从木示声，果树名，也指柰树的果实，苹果的一种。假借为“柰何”字，表示对付、处置，常与“何”连用，相当于怎么办。汉代时产生省体，将上部的“木”简化为“大”，整字作“奈”。后“柰”、“奈”分化，“柰”表本义，“奈”表假借义。可能为强调字义分化，另有累加木旁的俗体“㮈”表果树、水果的本义。

## 李

从木子声，果树名，也指李树的果实。汉代时产生省体，将上部的“木”简化为“大”，与“柰”、“奈”的演化关系类同，但此省写字形后淘汰。古代常与“理”同音通用，常用于狱官名。

“行李”一词即是以“李”通“理”而来，本作“行理”，指出使别国的使者，作动词表出使，引申为旅行、行程、出行所带的东西等。

## 桃

从木兆声，桃树名，也指桃树的果实。

## 𣓀（榛）

从木辛声，“榛”的古字，本义为植物名，果实似小栗，即“榛子”。“𣓀”多用于假借义，假借为“辛”、“莘”、“新”、“親”等，后造从木秦声的形声字“榛”来表示“𣓀”的植物本义。“𣓀”作为单字渐废，但其省形“亲”却作为偏旁保留在“親”、“新”等字中。楷书中偶见以“亲”为“親”者，现代将“亲”定为“親”的规范简化字。

## 楷

从木皆声，本义为树木名，即黄连木，此义读jiē。因楷树枝干疏而不屈，被用来形容刚直，进而引申为法式、典范，作动词表效法，以上义读kǎi。

## 桂

从木圭声，树木名，所指包括木犀（即桂花之桂）、肉桂（树皮可入药）、月桂（原产于地中海的外来品种树木）等。因传说月中有桂树，故也用以指代月亮。

“桂冠”一词在中国古代指用桂花编的帽子，比喻清香高洁，用以自誉。而现代语境中指代胜者荣誉的“桂冠”一词源于古希腊，古希腊用月桂枝叶编成帽子授予杰出诗人或英雄，罗马帝国时代又以桂冠作为帝王冠冕，由此引申指光荣称号或竞技中的冠军。

## 棠

从木尚声，树木名，野梨的一种，也称棠梨、杜梨，分红白两种：赤而涩者称“杜”，白而甘者称“棠”。

“海棠”一词约源于唐朝，因海棠为外来品种，故冠以“海”字，因与“棠梨”形似，故称“海棠”。

## 杜

从木土声，树木名，赤而涩者称“杜”，白而甘者称“棠”，详见“棠”字。因杜树果实味涩，故引申有苦涩义，又因“涩”与“塞”音义并近，故“杜”也引申为堵塞义，如“杜绝”。

## 椅

从木奇声，本义为树木名，即山桐子，与梓树近似，《说文》、《尔雅》等书认为“椅”、“梓”是同一种植物。此义读yī。又作坐具名，即“椅子”，此义本作“倚子”，因有靠背可以倚靠而得名，后将人旁换为木旁以强调材质，分化出“椅”字，此义与“椅”字椅树本义无关，读yǐ。

## 梓

从木宰省声，或体不省，作“榟”，但此形罕见。本义为树木名。古代多以梓木作器具，故引申指木工。雕版也多用梓木，故也指雕版，引申指印刷。古代家宅旁常栽种桑树和梓树，故以桑梓指代家乡。

## 栩

从木羽声，本义是树木名，即柞栎。也称“𣏗/杼（shù）”，与“栩”为替换声符的关系。栩、𣏗、柞、櫟为同一种植物，其果实称为“樣”，后作“橡”，也称“梂”。又借为形容词，多叠用，表示活泼生动的样子。

## 樣（样）

从木羕声，本义为栎树的果实，读xiàng，此义后俗写作“橡”，也称“梂”。后假借为“像”，表式样义，引申指形状、模样，也作种类的量词。以上假借义读yàng，现代简化字作“样”。

## 枇

从木比声，本义为果树名，即枇杷，也指枇杷树的果实。也指乐器“琵琶”，此乐器弹奏时主要用向前弹和向后挑两种动作，称为“批”、“把”，故称此乐器为“批把”，后也写作“枇杷”、“琵琶”。

也通“匕”，指舀取食物的器具。此义本作“匕”，象形。战国时出现加注义符木的“朼”字，后改声符“匕”为“比”，作“枇”，与枇杷之“枇”同形。但此义古书多用“匕”。

也通“篦”，指齿密的梳子。此义本作“比”，“比”字本义指靠近、挨着，引申指齿密的栉，齿疏者称“梳”，齿密者称“比”，总称为“櫛（栉）”。因“比”字多义，后以累加木旁的“枇”字表此义，与枇杷之“枇”同形。此字或从竹，作“笓”，或从𣬉，作“篦”，后世多用“篦”字。

## 桔

从木吉声，本义指桔梗。明清以后也作“橘”的俗字。另有“桔槔”一词，指古代利用杠杆原理的汲水工具。

## 柞

从木乍声，本义为树木名，又称櫟（栎）、栩、𣏗（杼）。因柞树可以砍作薪柴，故引申指伐木，除草曰“芟”，除木曰“柞”。

## 梭

从木夋声，本义为树木名，读xùn。后借指织布时牵引纬线的杼，即“梭子”，读suō，此义或替换声符作“𣘡”。因梭子的特性，又引申比喻往来频繁、运行快速。

## 枸

从木句声，本义为树木名，即枳枸，也作枳椇，俗称拐枣，此义读jǔ。又指落叶小灌木“枸杞”，也指其果实，此义读gǒu。

## 楊（杨）

从木昜声，树木名，指蒲柳，即水杨，柳属。现多指杨属植物。现代简化字作“杨”。

## 柳

从木卯声，《说文》小篆误将卯顶部相连写作“丣”，解作“从木丣声”，又将“丣”释为“古文酉”，不确。“柳”字从商至秦始终从卯。小篆的隶定写法为“桺”，现代作为异体字并入“柳”。

本义为树木名，杨（水杨，非今之杨树）柳同属，杨枝硬而扬起，故称“杨”，柳枝弱而垂流，故称“柳”。因柳树枝叶纤细，常用以指女子腰肢，进而引申指美女，特指歌姬、娼妓。因与“留”音近，故古代离别时折柳相赠，表达不舍之情。

## 欒（栾）

从木䜌声，树木名。宋元以来有简化俗体“栾”，为现代简化字所采用。

## 枳

从木只声，果树名，也指枳树的果实，与橘同属，又名“枸橘”。橘生淮南则为橘，生于淮北则为枳。枳树多刺，可作篱笆。

## 楓（枫）

从木風声，树木名，指枫香树，一名欇。后也俗指槭属植物，今之枫树即为此义。现代简化字作“枫”。

## 權（权）

从木雚声，《说文》本义为树木名，指黄华木，但此义罕用。先秦时即多用以指秤锤，也指秤。引申作动词指称量、衡量、平均、变通、秉持、谋略等义，由衡量又引申指定夺事物的能力，即权力。元代时出现将“雚”简化为“又”的字形“权”，为现代简化字所采用。

## 柜

从木巨声，本义为树木名，即柜柳，一作榉柳。部分方言里，“柜”与“櫃”音近，清代即出现以“柜”代“櫃”的用法，现代将“柜”作为“櫃”的简化字。

## 槐

从木鬼声，树木名。

## 杞

从木己声，植物名，指枸杞，一说指杞柳。又为古国名，如：杞人忧天。

## 檀

从木亶声，树木名，古书中称檀的木很多，时无定指。后多作檀香的省称，而檀香之“檀”源于梵语音译“旃檀”一词，属于借用中国本土木名作为音译用字的例子。

## 櫟（栎）

从木樂声，树木名，又称栩、𣏗、柞，果实称樣、橡、梂。现代简化字采用草书楷化，作“栎”。

## 柘

从木石声，树木名，桑的一种。

## 梧

从木吾声，树木名，即梧桐，也称“榮（荣）”。

## 榮（荣）

从木𬊇声。“𬊇”为“熒”的初文，始见于西周，为两火炬相交之形，会灯烛光亮之意，小篆作“𤇾”，将火与火炬分离。西周时“𬊇”即用为“榮”字，战国时产生加注木旁的“榮”字。而“𬊇”的火光本义则分化出“熒”字承担。《说文》将榮解为“从木、熒省声”，不确，实际“榮”和“熒”均是由“𬊇”字分化而来。

《说文》本义为树木名，指梧桐。又指草木的花。引申指茂盛，此义疑是由“𬊇”本义直接引申而来，可能是从木的“榮”字的最初义，但无确证。由茂盛义引申指赞扬、荣耀、富贵等。

元代以来民间多将“𤇾”简化为“𫇦”，“榮”的现代简化字即作“荣”。

## 桐

从木同声，西周至战国时为上下结构，秦文字改为左右结构。本义为梧桐树，也称“榮（荣）”。因桐木可作琴，也用“桐”代指琴。

## 榆

从木俞声，树木名。

## 樵

从木焦声，本义为木柴、散木，引申指打柴、打柴的人。

## 松

从木公声，本义为树木名，即松树。又假借为鬆散之“鬆”（明代即有此用法）。现代简化字将“鬆”并入“松”。

## 檜（桧）

从木會声，树木名，也称桧柏、刺柏、圆柏等。现代简化字作“桧”。

## 樅（枞）

从木從声，本义为树木名，也作地名。现代简化字作“枞”。

## 柏

从木白声，本义为树木名。又假借为“伯”、“迫”。或体从百声作“栢”，现代简化字将“栢”并入“柏”。用为树木名时读bǎi，用为外语音译字时读bó。

## 机

从木几声，本义为树木名，即桤树，此义后作“桤”。假借为几案之“几”。现代又用为“機”的简化字。

## 栀

从木卮声，树木名，果实称栀子，可入药，又可作黄色染料。篆文“卮”下从㔾（卩），从㔾之字隶变后或从巴，如“色”字，故“卮”、“栀”也作“巵”、“梔”。现代简化字将“梔”并入“栀”。

## 某

从木从甘，所从之“甘”或作“口”，“甘”、“口”作义符可互通。本义为果树名，果实为酸果，即梅子。后“某”多用于假借义，作不明确事物的代词，也作谦辞指“我”。于是分化出从木的“楳”字表果树本义，后又借本义为楠树的“梅”字表此义。

## 樹（树）

初文为“尌”，为竖立、种植义，详见“尌”字。后分化出累加木旁的“樹”字，强调种植义，“尌”字渐废。由种植义引申为培养。后又作木本植物的总称，相当于上古时的“木”字本义。现代简化字作“树”。

## 本

金文字形为“木”字树根部加一点作指事符号，强调树根。战国时点变作短横，后世沿袭。

本义为树根，又指草木的茎、干。引申指根本的、重要的、基础的事物。字形、字义均与“末”相对，“末”字形为“木”字树梢部加指事符号，本义即指树梢，引申指次要的、不重要的事物。“本”又引申指自己方面的、目前的、原来的。由根本义引申出依据、按照义，由此义又进一步引申指书籍、册子，进而又指书册的版本。

## 柢

从木氐声，本义指树的主根、直根，也泛指树根。花之根称“蒂”，树之根称“柢”。引申指事物的根本或基础。

## 朱

“木”字中间加一点或横作指事符号，指树根露出地面的部分，即树桩，是“株”的初文。隶变后作“朱”。后假借指大红色，因常用于假借义，又造从木的“株”字表本义。

## 根

甲骨文上部为止（人脚），下部为“木”字的树根部分。因仅作“木”字下半部指代不明确，故加“止”强调位于地下。本义即是树根。后木字不省，写作“𣏔”，被《说文》作为“困”的古文收录，以”𣏔“作”困“应是假借用法。小篆改为形声字，从木艮声，隶变后楷书作“根”。

本义为树根，在地下的部分称“根”，在地上的部分称“株”。引申指物体的最下部，进一步引申指事物的本原、根据，也指彻底。引申作条形物的量词。

## 株

初文为“朱”，指树根露出地面的部分，即树桩。因“朱”后被借用作颜色词，于是造从木的“株”字表本义。由本义泛指草木、单棵的植物体，又作草木的量词。

## 末

金文字形为“木”字树梢部加一点或短横作指事符号，本义为树梢。引申指物体的末梢，比喻次要的、非根本的事物。字形与字义均与“本”相对，详见“本”字。又引申指细微的、卑微的、末尾、终了等。由细微义引申作名词表碎屑、细粉。

## 果

金文像树上长有果实之形，本义即指树上结的果实。果实的部分后省作“田”，整字隶变后楷书作“果”。

由本义引申指使充实、变成圆球形，如“果腹”。又因果实是植物生长后期所结，故引申指事物发展的结局、终于、成为事实、实现等，进一步引申表假设。又引申指勇于决断。因“果”字多用于假借义，战国时即产生从艸的分化字“菓”表本义，现代简化字将“菓”并入“果”。

## 杈

从木叉声，本义指歧生的树枝。引申指叉状用具，此义后又借“叉”字表示。

## 枝

本字为“支”，详见“支”字。因“支”字多义，后造从木的“枝”字表“支”的枝条义。引申作细茎或杆状物体的量词。又指地支，此义后用“支”，与之对应的天干之“干”本字作“幹”，详见“干”字。又通“支”表分支、支撑。又通“肢”表四肢。又通“歧”表旁出。

## 朴

从木卜声，本义指树皮，读pò。作姓氏读piáo。假借为“樸”，指未经加工的东西，进而引申指朴质、朴实。现代简化字将“樸”并入“朴”。

## 條（条）

从木攸声，本义为树的小枝，泛指条状物，引申指条理、秩序、项目、字据等。作量词用于细长事物、可分项的事物等，较特殊的是用于部分人体类名词：

1. 命：基于生命在时间上的线性特征。
2. 心：用于多人同心，即是比喻将多人的心连成一条，其比喻义隐含有条状物的特征；用于诸如“死了这条心”，即是表示持续性的念头，也具有线性特征。
3. 汉子/好汉：“汉子”一词最初作为胡人对汉族男子的贱称，以“条”作量词即是贬义，即将人比喻为牲畜，后“汉子”一词逐渐脱离贬义，甚至具有褒义，但“条”作为其量词保留了下来。

## 枚

从木从攴，本义为树干，因树干可以作杖，故从攴会意。又指树枝，引申指马鞭。也引申指古时行军为防止喧哗让士兵衔在口中的小棍。又用为量词，相当于“个”，竹曰个，木曰枚，详见“箇”字。

## 栞（刊）

从木幵声，后作“刊”，从刀干声。《说文》将“栞”、“刊”别为二字，古书混用无别。详见“刊”字。

## 標（标）

从木𤐫声，“𤐫”隶变后作“票”，整字作“標”，现代简化字作“标”。

本义为树梢，泛指事物的顶端、末梢，引申指非根本的、次要的事物，与“本”相对，与“末”近似。引申指标杆、标记，由标杆义又引申指楷模、标准，作动词表标明、显扬。又引申指突出、俊美等。

## 朵

秦文字从禾，在禾穗处加一短竖，指示禾中下垂的部分。本义指禾的垂穗，引申指禾穗下垂的样子。此引申义后用从禾耑声的“𥠄”字表示。“朵”字后被分为上下两截，禾穗与指事符号合成类似“几”形，余下部分成为“木”，隶变后楷书作“朵”，也作“朶”，现代简化字将“朶”并入“朵”。

失去“禾”的象形后，字义也扩大泛指植物枝叶花实之垂，又特指花朵。引申指朵状物，如云朵、耳朵。又作花朵即朵状物的量词。作动词表示鼓动，只见用于“朵颐”一词，表示鼓动腮颊嚼东西（可能是使腮像骨朵一样颤动，或使腮像骨朵一样鼓起之义）。

## 枉

从木㞷声，“㞷”是“往”的本字，初文为“止”和“王”的合体字，详见“㞷”字。隶变后“往”字中“㞷”的上部省作一点，而其他从㞷声的字如“枉”、“狂”、“旺”、“汪”等字中此部分直接省去，将声符整体替换为“王”。

本义为弯曲，引申指不正派、不公正、使受屈、违背、屈尊就卑等。又作副词表示徒然、白白。

## 格

从木各声，本义为树木的长枝条，引申指架子、框子、栅栏，又指法式、标准。又被假借作“虢”，表示击打、搏斗，如“格杀”、“格斗”，后本字“虢”渐废，又因“格”是假借而来形符不通，再造从手的“挌”字专表此义，由搏斗义又引申为抵挡、阻碍、匡正。又假借为“𢓜”表示至、来，由此引申指推究。

## 枯

从木古声，本义指草木枯萎，也指枯树，引申指干涸、枯竭、憔悴、干瘦、乏味、空等。

## 槀（槁）

从木高声，初为上下结构，后改左右结构，二形并存，现代以“槁”为正体。本义指本义指草木干枯，引申指干瘦憔悴，以上义读gǎo。又引申指用酒食慰劳，读kào，“润其枯槁曰槁，慰其劳苦曰劳”，合称“槁劳”，此义后写作“犒”，“犒”字约起于汉代，是替换形旁而来，但究其本字应为“槀/槁”。

## 樸（朴）

从木菐声，本义指未经加工的木材，泛指未经加工的事物。引申指朴质、朴实，古书中常假借本义为树皮的“朴”字表“樸”义，现代将“朴”作为“樸”的简化字。

## 柔

从木矛声，本义指木可曲可直的特性，即柔软、柔弱，与“刚”相对。引申指温和、柔美、幼嫩，作动词表示使柔软、使柔弱、安抚。其中使柔软的含义用于同材料时分化出不同的字，如加工木头使柔软后用“楺”，加工皮革使柔软后用“鞣”。

## 材

从木才声，本义为木料，引申指材料、原料、体貌、资质等。又假借为“才”，指才能。

## 柴

从木此声，本义指细小树枝、枯枝，“大者可析谓之薪，小者合束谓之柴”。泛指可作燃料的散木。引申指烧柴祭天，此义后作“祡”。又由枯枝义引申为干瘦义。以上义读chái。又引申指用于防卫的篱笆栅栏，此义后读音转为zhài，别作“寨”字。此义又引申为覆盖、闭塞等义。

## 杲

从日在木上，会太阳升起天色明亮之意，本义为明亮。

## 杳

从日在木下，会太阳落下天色昏暗之意，本义为昏暗。引申指遥远无际，又指见不到踪影。

## 栽

从木𢦏声，本义指筑土墙所用的长板，引申指设板筑墙、安装，进一步引申指种植、树立，又由栽种的动作比喻摔、跌，进而引申指办事失败、捏造假证嫁祸于人等。

## 築（筑）

从木筑声，“筑”字本义为击弦乐器名，在“築”字中作声符。战国或体从攴䈞声，《说文》古文从土䈞声，都是替换声符和形符而来。

本义为建造土墙时捣土用的杵。引申指捣土、使坚实。进一步引申指击打、修建、建筑物等。古代或借“筑”为“築”，现代简化字将“築”并入“筑”。

## 榦（干）

从木倝声，本义指筑土墙时所用的立柱。引申指主干、树干。又指天干，此义后作“干”。汉代时出现俗体将所从之“木”换为“干”，整字写作“幹”，成为双声字。秦汉时即出现用“干”同音替代“榦/幹”的用法，通用已久。现代将“榦”作为异体字并入“幹”，又将“干”作为“幹”的简化字。

## 構（构）

从木冓声，本义是架木造屋，引申指修建、建造，也指建筑物。又引申指交接、交集、组成、结成、招致、陷害等义。现代简化字作“构”。

## 模

从木莫声，本义指制造器物的模子，引申指模范、榜样、法则、效法、样子等。也通“摹”，指照样子写或画。古时也通“摩”或“摸”，表示抚摩、揣摩，“模棱两可”一词即取此义，详见“棱”字。或作“橅”。

## 棟（栋）

从木東声，本义为房屋的正梁，即屋顶最高的横梁。引申指堪当大任的人，也作房屋的量词。

## 極（极）

从木亟声，本义为房屋的正梁，义同“棟”。因正梁在房屋的正中最高处，故引申出“中”、“顶点、最高”义。由中义引申为准则、标准义，由顶点义引申为程度副词表最、非常。现代简化字将“極”简化为“极”，而从木及声的“极”字本义为驴背上的驮架，因此字罕用，故作为“極”的简化字。

## 柱

从木主声，本义为支撑屋顶的木料，也称“楹”。后材料不限于木头。也泛指像柱的东西。引申指支撑，通“拄”。

## 楹

从木盈声，本义为柱子。又特指厅堂前的柱子。又作房屋的量词，一列为一楹。

## 椽

从木彖声，本义为放在檩子上支架屋顶的木条，也称“橑”、“桷”、“榱”。也作房屋间数的量词。

## 楣

从木眉声，指房屋的次梁，正中曰棟，次曰楣。又指门框上的横木，如“门楣”。一说指屋檐口椽端的横板。

## 檐

从木詹声，本义为屋檐，即屋顶边沿探出屋墙的部分。引申指屋檐下的平台。也指其他器物上形状像屋檐的部分。

## 植

从木直声，《说文》或体从置声。本义为树立，引申指关闭门户用的直木。又由本义引申指栽种、培植。

## 樞（枢）

从木區声，本义为承托门轴的臼，也指门轴。樞的作用是使门窗开合，故引申指主制动的机关。因樞是门窗得以活动的重要构件，且位于门扇转动的轴心，故比喻事物重要的或中心的部分。进一步引申指国家机关发号施令的机构和朝廷重臣。以上义读shū。又作树名，指刺榆，是“櫙”的异体字，此义读ōu。现代简化字作“枢”。

## 樓（楼）

从木婁声，本义指两层以上的房屋，即楼房。也指楼层。泛指楼状物。宋元以来，“婁”多据草书楷化而简化作“娄”，现代将“娄”作为“婁”的简化字，将“樓”类推简化为“楼”。

## 櫺（棂）

从木霝声，本义指栏杆或窗户上的孔格，引申指带栏杆的。后写作“欞”。宋元以来，“靈”或俗写作“灵”。清代出现将“欞”类推简化为“棂”的写法，为现代简化字所采用。

## 槍（枪）

从木倉声，本义指长柄有金属尖头的刺击武器。俗体从金，作“鎗”。热兵器时代指小口径的发射弹药的武器。引申指冲抵、碰撞，如“头槍地”、“槍榆枋而止”，此义也作“搶”。现代将“鎗”作为异体字并入“槍”，又简化为“枪”。

“枪手”一词可指请人代作，此义来源如下：宋时武装力量分禁军、厢军、民间武装力量三种，后者称为枪手，因其没有正式俸禄且调遣频繁，故常花钱招人顶替，于是“枪手”一词逐渐成为拿钱顶替别人做事的代名词。

## 楔

从木契声，本义为楔子，即上粗下锐的小木橛。泛指楔形物。作动词表示将楔形物插入某物，引申指安插。

## 栅

演变说法有二：

1. “册”为“栅”的本字，像栅栏之形，后因形近用以指简册，于是另造从木的“栅”字表本义。
2. “册”本义即是简册，像编连在一起的竹简之形，“栅”字是从木册声的形声字。

本义为栅栏，即用竹木做成的阻拦物。也指与栅栏相似的事物，如营寨、栏圈等。

## 𣟄（柝）

从木橐声，指巡夜打更用的梆子。后多假借从木㡿（斥）声的“柝”字，而“柝”本义为劈开、分开。

## 桓

从木𠄢（xuān）声，声旁“𠄢”与“亙（gèn）”非同字，但二者隶变后都写作“亘”。桓、宣、垣等字皆从“𠄢”，而“亙”是“恒”的本字。

本义指古代邮亭边用为标志的木桩，后泛指其标志作用的木桩、表柱。桓多成双而立，又称桓门、桓表、和表、华表，桓、和、华古音通。叠词“桓桓”表威武貌。又有“盘桓”一词，表示徘徊不能前进，此义应源于声旁“𠄢”所兼表的回转义，“𠄢”中间所从即是古文“回”字。

## 杠

从木工声，本义指床前横木，又指旗竿、小桥，后泛指粗棍子。

## 牀（床）

甲骨文有“爿”字，一种观点认为是床的侧面象形，是“床”的初文，另一种观点则认为是构筑墙体用的夯土夹板，是“墙”的初文。或说此二者可并存，可能这两类形状相似的事物均用“爿”这个符号表示。战国时出现从爿从木的“牀”字，专表坐卧器具义。后俗体将“爿”写作“广”，整个字作“床”。现代以“床”为正体。

本义为供人坐卧的器具，引申泛指像床一样起承托作用事物。也作量词，用于被褥、大型器物等。

## 枕

从木冘声，本义为枕头，引申指用头枕着，又引申指靠近、临近。

## 櫝（椟）

从木𧶠（yù）声，其声旁非買賣之“賣”。隶变后“𧶠”、“賣”开始相混，最迟到唐代已混同无别，现代统一据草书楷化简化为“卖”。“櫝”类推简化为“椟”。

本义为木匣类收藏用具，引申指棺材。

## 櫛（栉）

战国字形从木即声，小篆变为从木節声。本义为梳子和篦子的总称，引申指梳理头发。因声旁“節”后被简化为“节”（详见“節”字），现代将“櫛”类推简化为“栉”。

## 梳

从木疏省声，本义是梳子，即齿较稀疏的栉。齿疏者称“梳”，齿密者称“比”（后作“篦”），总称为“櫛（栉）”。一说本义即是梳理头发的器具，与齿是否稀疏无关。“疏”字有疏通、疏分义，秦末汉初时造从木的“梳”字表示用于疏分头发的木制器具，即梳子。引申指梳理头发，泛指梳理、整理。

另外其所从的疏省声“㐬”在“疏”字中应是“糸”的讹变，楚简中“疏”字写作从糸疋声，会理线意，秦文字将“糸”讹作“㐬”。从这种意义上说，“疏”应是梳理义的本字。

## 㭒（耜）

战国文字从木㠯声，或体从木里声。后世楷书或将形旁替换为”耒“，作”耜“，以强调农具义。

本义为锸、锹类的挖土农具。作动词表示以耜铲土。“耒耜”常合用，“耒”特指此类农具的曲木柄，“耜”特指其前端铲土的硬头。

## 杷

从木巴声，本义为有齿农具，竹木制的用来聚拢或散开柴草谷物，金属制的用来碎土平地，即耙子。无齿为捌，有齿为杷。引申指用杷将东西聚拢或散开，或用杷碎土平地。以上义后替换形符作“耙”，从耒以强调农具义。后引申指用手扒，此义后作“扒”。另有果树名“枇杷”，此义之“杷”与耙子义的“杷”同形。“枇杷”也作乐器名，即“琵琶”。详见“枇”字。又指器物的柄，此义后用从手的“把”字表示。

## 枷

从木加声，本义为一种打稻谷的农具，也叫连枷。又指套在犯人脖子上的刑具。又指搁置物体的架子，此义后作“架”。

## 杵

初文为“午”，像舂米用的木棒形，后“午”借用作地支第七位，于是加木旁作“杵”字表本义。本义即是舂米用的木棒，泛指捣物用的木棒，或杵形物体。引申作动词指舂捣、戳。

## 槩（概）

从木既声，初为上下结构，后变为左右结构。本义指量谷物时刮平斗斛的木板。引申指刮平、衡量、限制、遮盖。又引申为对诸多事物像刮平谷物一样一并总括论述，即概括义，进而引申指大约、概念、概率等。又引申指景象、气度等义。

## 桮（杯）

战国文字从木不声，此字形延续到楷书作“杯”。秦文字声旁加“口”繁化为“否”，“否”是“不”的分化字，整字作“桮”。“否”又或异构为“咅”，整字作“棓”。汉隶另有承袭战国文字中“不”下加饰笔的字形，声旁作“丕”，“丕”也是“不”的分化字，整字作“柸”。《说文》籀文从𠥓（匚），隶定作“𠥧（𠤯）”。后又或作“𦈶”、“𦈧”、“盃”等，皆替换形旁或分化声旁而来。诸多异体中，后世楷书常见的主要是“杯”、“桮”、“盃”，现代以“杯”为正体。

一般指酒、茶或其他饮料的盛器，也指一种似盆带双耳的盛羹器。又作酒水等的量词。引申指似杯的物体。

## 槃（盘）

初文为“凡”。甲骨文中“凡”与“同”近似，“同”为竹筒的象形，“凡”为盘子侧立的象形，区别为“同”字左右对称，“凡”左短右长，左为盘足右为盘口。后加攴旁，表示手持勺类器具舀水或食物，使整字表义更清晰。后左侧的“凡”逐渐讹为“舟”，“攴”变作“殳”，整字作“般”。“攴”、“殳”作义符可互通，但“凡”变作“舟”则完全是讹变，致使《说文》误解为“象舟之旋，从舟从殳”，与初文不合。后“般”引申义繁多，西周时又造从皿的“盤”字表盘子的本义。春秋时又产生从金的或体，为《说文》籀文之形，隶定作“鎜”。小篆改从木，作“槃”。唐以后多用“盤”字，现代简化字作“盘”。

本义即盘子，浅而敞口的盛器。泛指形状或功能像盘的事物。又作量词。由盘的形状引申为回旋、环绕、交结义，进一步引申为仔细查究。

## 案

从木安声，本义为木制器物，所指有三：

1. 无靠背的坐床；
2. 有短足的托盘（无足曰槃，又足曰案）；
3. 长方形的桌子，即几案。

又几案义引申指官署的文书、案卷，进一步引申指涉及法律问题的事件，泛指各种事件，也指计划、方法等。由案件义也引申指查办、审讯、考查等。

## 杓

从木勺声，本义是勺、枓的柄，借指北斗七星中形成斗柄的三颗星。引申指拉开、击打。以上义读biāo。又俗读作sháo，义同“勺”。

## 櫑（罍）

一种古代大型盛酒器。商代借“雷”的古字表示，后加皿分化出专字，《说文》或体据此形省作“𥃇”。西周时或从木，或从金。从木者，为小篆为本，后作“櫑”。《说文》籀文从缶，《说文》或体据此省作“罍”。

## 橢（椭）

从木隋声，本义为长圆形容器，引申指长圆形。元代以来，“隋”多简化作“陏”，现代将“橢”类推简化为“椭”。

## 槌

从木追声，本义为搁置蚕箔的木柱，读zhuì。也同“椎”，指敲击用具，引申指击打、捶打。以上义读chuí。

## 機（机）

从木幾声，本义指弩机，弩上的发动机关。引申指各种制动装置，也泛指机械。又特指织布机。引申指事物变化的关键、缘由、征兆。又引申指时机、心计、灵感、秉赋、事务、重要或保密的事情等。因机关多复杂、精巧，故引申指巧妙、灵巧。元代以来，多借本义为木名的“机”字表“機”义，现代简化字将“機”并入“机”。

## 杼

从木予声，本义指织布机上缠纬线的梭子，读zhù。牵引纬线的称“杼”，承受经线的称“軸”或“柚”。“杼”为古称，后称为“梭”。另有上下结构的“𣏗”字，读shù，义为栎树，又称栩、柞、櫟，后改为左右结构，于是与机杼之“杼”同形。

## 核

从木亥声，《说文》曰“蛮夷以木皮为箧，状如籢尊”，所指不明，此义未见使用。多用作果核义，也指有核的果实。引申指像核的东西，或中心的、内部的。又引申指查对、审查，进一步引申指翔实正确。通作“覈”，详见“覈”字。

## 棚

从木朋声，本义为用竹木搭成的篷架或小屋，与“栈”类似。板阁曰栈，连阁曰棚。用木板横竖相搭而成的简易小屋或小空间称为“栈”，搭出顶以遮蔽下部空间的称为“棚”，《说文》混为一类，不做区分。

## 棧（栈）

从木戔声，本义为简易的棚屋，与“棚”类似，详见“棚”字。多特指牲口棚。引申指用竹木条横排编成车箱的轻便车子，构造与搭棚类似。山壁间通过横排木头编连修建的简易道路即称为“栈道”，也是与棚屋搭建方式类似。由本义引申指留宿客商或储存货物的房屋，如客栈、货栈。现代简化字作“栈”。

## 梯

从木弟声，弟兼表次第义。本义是木梯，后泛指用于上下攀登的用具。引申指形状像梯的分级的东西。引申作动词表示攀登、依凭、谋求。

## 橜（橛）

从木厥声，初为上下结构，后作左右结构。本义指短木桩。在墙曰杙，在地曰橛，但实际多不作区分。引申指门限，竖立于门中以作限隔的短木。横于门下的长条状隔板称为“閾（阈）”、“榍”，即今之门槛；竖立在门中以别尊卑出入的木桩称为“橛”、“梱”、“闑”；竖立于门两旁以防止车碰门的木桩称为“棖（枨）”。

又指草木的残根。又指马口中所衔的横木，即马嚼子。又作木头的量词，表示一小段。

## 樴

从木戠声，指短木桩。与杙、橜（橛）互训。

## 杖

从木丈声，本义是棍子，特指手杖。又引申为拄着、拿着、用棍子打、倚靠等义。倚靠义后多用“仗”字，从人的“仗”字始见于秦简，流行于唐以后。

## 棓

从木咅声，本义为棒子，是“棒”的本字，读bàng，或作“㭋”，俗作“棒”。又指连枷，一种打谷器。又与“桮（杯）”的异体字同形，指杯子。又指踏板，读pǒu。

## 椎

从木隹声，本义为敲击器具，即槌子。或从木隼声，作“榫”，隹、隼古音通，后“椎”、“榫”分化为二字。

“椎”由敲击器具义引申指用椎击打，泛指重力撞击，引申指朴实、迟钝。以上义读chuí。又指椎骨，读zhuī。异体字“榫”后专指榫卯之“榫”，即凹凸相合的构件处中凸出的一方，读sǔn，此义应是从椎子义引申而来。

## 柯

从木可声，本义为斧柄。有一种说法认为其声旁“可”所从的“丂”即是斧柄的象形，是“柯”的本字。详见“可”、“丂”字。因斧柄长度固定，长三尺，引申指法则。又指树枝。

## 柄

指器物的把手，初文为“秉”，由握持义引申而来。后加注木旁分化出“棅”字，即《说文》或体字形。小篆又替换声符改从丙声，作“柄”。后世多用“柄”字。

由把手义本义比喻言行上被人抓住的材料，即把柄。又指权力，“權（权）”有秤锤义，执有权柄（秤砣的把手）即比喻拥有衡量、定夺的能力。引申为执掌。

## 柲

初文为“必”，甲骨文像戈类兵器的柄，金文加注“八”声，详见“必”字。因“必”被借作副词，又造从木的“柲”字表本义。由本义引申指刺。又指保护、矫正弓身的竹片。

## 榜

从木旁声，指木片，引申指木牌、匾额。榜上多张贴文书、告示，故引申指此类告示，即榜文。又特指告示应试取录的名单。榜上公示的多为优秀的、值得效法的示例，故用“榜样”一词指楷模、典范。又俗从片，作“牓”。现代以“榜”为正体。以上义读bǎng。

《说文》本义为矫正弓弩的器具，但经传未见此义。又指船桨，读bèng。引申指船、划船，划船义也作“搒”。

## 桰(栝)

从木𠯑声，其声符“𠯑”所从之“氒”甲骨文即为矢栝的象形，是“栝”的初文。“氒”字竖画上或加短横或饰点，春秋时或赘加“口”旁。不从口者演变为“氒”，《说文》据小篆字形误解为“从氏”，不确。从口者演变为“𠯑”，“氒”、“𠯑”实为一字。“氒”在古文字中常被借为代词“厥”，其本义反而不显。后造从木𠯑声的形声字“桰”表本义。隶变后，“𠯑”作偏旁多讹作“舌”，与舌头之“舌”字形混同，如括、刮、話等。故“桰”后作“栝”，与从木、甛省声的“栝”字同形，后者本义为“炊竈木（拨火棍）”，读tiān。

本义为箭栝，即箭末分叉用于扣弦的部件。又指櫽栝，即矫正竹木弯曲的器具。又为树名，即桧。

## 棊（棋）

从木其声，初为上下结构“棊”，也作左右结构“棋”。本义指博弈类游戏的子。也代指围棋。根据制作材料不同，或体从石作“碁”。现代简化字将“碁”、“棊”并入“棋”。

## 椄（接）

从木妾声，本义为嫁接花木，引申指连接。此二义后均用“接”表示，“椄”字遂废。

## 槽

从木曹声，本义为盛牲畜饲料的长条形食器。泛指槽状物，或物体两旁高起、中间凹下的部分。

## 臬

从木从自，本义为射箭的靶子。引申用作圭表的标杆。圭表为古代测日影定方位、节气的器具，其竖立的标杆称作“臬”、“表”，平放的用来测量标杆影子长度的刻板称作“圭”，合称“圭表”或“圭臬”。又引申为法度、准则。又指终、极。

## 桶

从木甬声，本义为量器名，即方形的斛。又用为容器名。引申指桶状物。又作量词。

## 櫓（橹）

从木魯声，或体从鹵声作“樐”，又或从虜声作“㯭”。本义指大盾，“流血漂橹”即为此义。又指无顶的望楼。又指比桨长且大的行船工具，此义又从舟作“艪”、“艣”。现代将“樐”、“㯭”、“艪”、“艣”统一并入“櫓”，又简化为“橹”。

## 樂（乐）

甲骨文从𢆶（两束丝）从木，像弦附于木上，会乐器之意。西周时增加“白”符，或说是调弦之器。后字形变化不大，楷书作“樂”。现代简化字作“乐”，为草书楷化。

本义为音乐，又指乐器、乐工。因音乐可使人快乐，故引申指快乐。进一步引申为乐于、喜好。

## 札

从木乙声，本义为古代书写用的小木片。一尺长的大木片称为“牘（牍）”，未经书写的牘称为“槧（椠）”，薄而小的称为“札”、“牒”。引申指书信、公文。又引申指书写。又因形状类似而指铠甲的叶片，以此形叶片构成的铠甲形制称为“札甲”。

## 檢（检）

从木僉声，本义为封书匣的题签。引申指约束、法度，进一步引申为考查、收敛、收拾、拣选、查阅等义。

## 檄

从木敫声，长二尺的木简，古代用作征召、晓谕、声讨的文书。作动词表示用檄文征召、晓谕或声讨。也泛指信函。

## 极

从木及声，本义为驴背上用以载物的驮架。此字罕用，现代用作“極”的简化字。

## 橋（桥）

从木喬声，本义为桥梁。河上架木用以通行的统称为“梁”，独木的称“杠”、“榷”，骈木、较大的称“橋”，后以“橋梁”一概言之。引申指器物上的横梁、形状或功能似桥的事物。又指汲水工具桔槔。又指古代行山路时的代步工具，前后两人抬行，后作“轎（轿）”，并逐渐演化为日用的人力抬行载具。现代简化字作“桥”。

## 梁

西周文字从水刅声，隶定作“𱥻”。战国时或加木，即后世“梁”字。或再省去水，作从木刅声。或再加邑旁，为地名、国名专字。

本义为桥梁。引申指屋梁。又由本义引申指形状或功能似梁的事物。又用为地名、国名、姓氏。

## 𣔱（艘）

从木叜声，声符“叜”隶变后作“叟”，“𣔱”则写作“㮴”。魏晋以后又产生将形旁替换为“舟”的“艘”字。今以“艘”为正体。

本义为船的总名，引申用作船只量词。

## 楫

从木咠声，或从戢声作“檝”。本义是船桨，短曰楫，长曰櫂（棹）。也指用楫划船。也借指船。现代将“檝”作为异体字并入“楫”。

## 校

从木交声，本义指古代桎梏、枷类的刑具。引申指田猎时用来阻拦野兽的木栅栏。又引申指古代军队建制名、军职级别。又指对抗、较量，引申指校对、比较，进一步引申指计算、清点。又指教学场所，即学校，“夏曰校，殷曰序，周曰庠”。

## 采

甲骨文从爪从枼，会用手采摘树叶之意。“枼”后省作“木”，其后字形变化不大，楷书作“采”。本义是摘取，引申为搜集、选择、采纳、取得等义。又借作色彩义，此义后作“彩”。由色彩义引申指文章的辞藻，即文采，此义仍用本字，不作“彩”。又由色彩义引申指彩色丝织品，此义后作“綵”。以上义读cǎi。又由本义引申指古代卿大夫受封的土地，即采邑，此义后作“寀”、“埰”，读cài。由于“采”字引申义繁多，故为其本义即相关动词义后造从手的专字“採”。现代简化字将“綵”并入“彩”，将“採”、“寀”、“埰”并入“采”。

## 杮

从木巿（fú）声。《说文》小篆从𣎵声，或有误，《说文》训“𣎵”为“艸木盛𣎵𣎵然”，但古文字材料未见“𣎵”字及以“𣎵”作偏旁的字，且清华简中“肺”字明确从巿声，“𣎵”疑是《说文》从“孛”字中强行割裂出的部分。杮、肺、沛等《说文》中从𣎵声的字应均是从巿声。

本义为砍削木材而产生的木皮。另有从木𠂔声的“柹”字，本义为果树或果实，即柿子，隶变后“𠂔”或讹作“巿”、“市”，“柹”产生异体“柿”，但与此字毫不相干的“杮”却常与“柹/柿”相混，究其本意应作明确区分。

## 横

从木黄声，本义指门框横木，或说是门闩，也作“桁”。因横放，故引申为横向，与“纵”相对。又指东西向的。又引申为使物成横向。又指纵横交错，引申为恣意妄为，进一步引申为祸害、出乎意料。

## 棱

从木夌声，本义为棱角，即物体两面交接处。也指四面的木。引申指威势、严厉、梗直。“模棱两可”一词典故出于唐朝宰相苏味道，旁人问处理国事方法时苏味道并不回答，只以手摸床棱，床指胡床（交椅），即仅抚摩椅子棱而不表态，时人称其为“苏摸棱”，又作“模棱”，是以“模”通“摸”或“摩”，后“模棱”一词固定用来表示态度含糊不明确。

俗从禾作“稜”。又俗作“楞”，会四方木意，后“楞”与“棱”逐渐分化。“楞”由威严、梗直义又引申出蛮横、鲁莽义，此义多不用“棱”。“楞”字又通“睖”表失神、发呆，此义以及鲁莽义后又作“愣”。现代将“稜”并入“棱”，保留“楞”用于口语及“棱”不具有的含义。

## 析

商代金文像手持斧破木之形。甲骨文省去手形，将斧形写作“斤”。西周继承从木从斤的写法，偶见将“木”讹为“禾”。战国时出现或体将所从之“木”换作“片”，表义相同。从木从斤者，后作“析”，为主流；从片从斤者，后作“𣂔”，受此形影响，汉代还出现从木从片的俗体，但丢失构字本义。

本义是劈开木头，泛指剖开。引申为分开、分散、解除、解释、剖析等义。

## 枼

为“葉”的初文，本义为树叶，详见“葉”字。因形象近似故引申为薄木片，由此又分化出“牒”、“碟”、“䈎”、“鍱”等字，皆取薄片义。“枼”也用作“世”，详见“世”字。

## 休

从人从木，像人倚树而息。本义为人在树荫下休息，此义或从艸作“茠”。又泛指休息。引申指休假、停止、离去、抛弃。由本义又引申指树荫、荫蔽，此义也作“庥”。“休”由树荫、休息等义又引申出美好、喜悦、吉庆等义，由美好义又引申为意动用法表示赞美。“休戚相关”一词中的“休”即是喜悦义。由停止义又引申作副词表示不要。

## 㮓（亘）

从木恆声。商周文字有“亙”字，从二从月，像月在天地之间，是恒常之“恆”的本字，本义为长久。西周时累加心旁，小篆将“月”讹为“舟”，隶变后作“恆”，又或将“月”讹作“日”，整字写作“恒”，其右侧“亘”与“𠄢（读xuān，桓、塇、宣等字所从）”的隶变字形混同。

从木恆声的“㮓”本义为穷尽，引申指绵延、贯通。此字在古书中多借“亙”为之，今作“亘”，但究其来源，并非“亙”字本义，属于假借。现代简化字将“㮓”、“亙”并入“亘”。

## 械

从木戒声，本义为桎梏类的刑具。泛指器械，有盛为械，无盛为器。又特指兵器。由刑具义又引申指拘束。

## 桎

从木至声，本义指木制脚镣，在足曰桎，在手曰梏。也指戴上脚镣。引申指束缚。

## 梏

从木告声，本义指木制手铐，在足曰桎，在手曰梏。也指戴上手铐，泛指拘系。引申指约束。另也指为防牛触人而套在牛角上的横木，此义本作“告”。

## 棺

从木官声，本义为内棺，泛指棺材。

## 椁

战国文字为从木𩫖省声，小篆声符不省，隶定作“𣠐”。声符“𩫖”为城郭之“郭”的初文，隶变后多作“享”，与“亯”的异体字形相混。声符或作“郭”，整字写作“槨”。现代以“椁”为正体。

本义为外棺，内曰棺，外曰椁。

## 梟（枭）

从鳥头在木上，本义指猫头鹰一类的猛禽，相传为食母的恶鸟，故当人们白天见到枭鸟就将其捕捉并砍下鸟头悬于木上。小篆中鸟头部分包括“鳥”除脚以外的所有部分。汉隶或繁化为从鳥在木上，作“䲷”，此字形是后起，而段玉裁言“从鳥在木上，隶省作梟”属于本末倒置。现代简化字作“枭”。

又借作“𥄉”（倒“首”形，縣、懸所从），指悬头示众。因“梟”字的造字构形之意与“𥄉”义近似，且二字古音相通，故俗以“梟”字表“𥄉”义，用于人的悬头示众，而不仅用于鸟。又借作“驍（骁）”，指勇猛难驯。

## 榭

从木䠶声，其声符“䠶”字后世以异体“射”为主流，整字作“榭”。本义指建在高台上只有楹柱没有墙壁的房子，本为讲军习武之所，故称“射”，后加木旁成专字“榭”。泛指建在高台上或临水的房子。

## 槊

本字为“矟”，从矛肖声，指长杆矛，因其声旁“肖”后世读音与“矟”字差异渐大，故产生从木朔声的俗字“槊”。

## 榻

从木𦐇声，或从翕，作“㯓”。一种狭长低矮的坐卧用具，泛指床。

## 櫂

从木翟声，本义是船桨，短曰楫，长曰櫂。也指用櫂划船，又引申指船。“櫂”字较为晚起，古书用“濯”，“楫櫂”作“辑濯”。或体从卓，作“棹”，现代简化字将“櫂”并入“棹”。

另有“桌”的异体字“棹”，与船桨义的“棹”同形。此义本作“卓”，因其高于几案而得名，后分化出从木的专字“棹”表此义，后为与船桨义的“棹”相区别，于是桌椅义的“棹”改为上下结构，并将“木”和“卓”笔画重叠，写作“桌”。

## 櫻（樱）

从木嬰声，本义指樱桃树，也指其果实樱桃，也指其花。现代简化字作“樱”。

***

# 東部

## 東（东）

商代初文像两头用绳索扎住的口袋，是“橐”、“束”字的初文。后借来表示方位之“東”，即太阳升起的方向。“東”、“束”、“橐”分化为三字。《说文》将“東”解为“从日在木中”，是据小篆字形附会而来，与初文不合。现代简化字依草书楷化作“东”。

由东方义引申为往东、使往东。古时主居东，宾居西，故也用东代指主人，进而产生东家、房东等词。

***

# 林部

## 林

从二木，会丛聚的树木之意。本义是连接成片的树木。比喻聚集在一起的人或物。引申指众多纷繁的样子。

## 無（无）

甲骨文像人两手持物而舞之形，为“舞”的初文。西周时，两手所持之物变为上口下木形，并与人手分离，后将左右两口的上横贯通。春秋时将两口的顶端与人的手臂相连，又或省去人形的躯干和腿，又或省去口形。第一种不省的字形即演变为小篆字形，省去人形的躯干和腿后写作“橆”，隶变后又作“無”。省去口形的写法进一步省去两木，即成为“无”。《说文》小篆另收一个累加“亡”旁的“𣞣”字，应是“橆”引申出“亡”的含义后分化出的字形，约产生于东汉。

本义为舞蹈，此义后作“舞”。假借为“亡”，表示没有，引申为不、非、未、不要等义。又有荒芜义，此义后分化出“蕪（芜）”。现代简化字将“橆”、“無”、“𣞣”并入“无”。

## 鬱（郁）

甲骨文字形为“大”（人形）在“勹”（屈伏人形）上，左右为“林”。就其构形本义有不同观点：

1. 从林从勹的部分是“苞”字，“艸”、“林”可互换，“勹”为“包”的古字。整字会林木丛生茂盛之意。
2. 为一人于林中伏地受另一人践踏，会忧愁压抑之意。

茂盛义和忧愁义均是常用义，且二者可能是引申关系，但孰为源头暂无定论。由茂盛又引申为（云气、香味、文采等）浓盛。

西周金文或在底部加两横饰笔。至秦简文字，出现从林从冖从爵省的字形，此字具体演变路径不明，但上部应是承接商周字形，将“勹”讹作“冖”，“爵”为酒器，此字含义大概与酒器有关，与此字形最接近的后世字形为“欎”，区别在于林中多了“爻”，此部分可能是由商周文字中的“大”讹变而来，而秦简字形有可能是省去这个构件的省形写法。小篆基于秦简字形，林中间增加“缶”，“缶”与“爻”类似，可能都是“大”的讹变。由于小篆中的“爵”将左下构件讹作“鬯”，故小篆本字也同样从鬯，右侧的“寸”则讹为“彡”，整字小篆作“鬱”。

另有从𦥑的“𩰪”字，《说文》本义为芳草名，后世用为“鬱”的异体，可能同出一源。

又有从邑有声的“郁”字，本义为地名，有时借用为“鬱”。现代简化字将“鬱”、“欎”、“𩰪”及其一系列异体字均并入“郁”。

## 楚

从林疋声，本义为丛生的树木，又指灌木“荆”。引申指打人用的荆条，进一步引申指痛苦。又指鲜明整齐貌，如衣冠楚楚，此义是通“𪓐”而来，“𪓐”所从的“黹”指刺绣，“𪓐”本义即是鲜明整齐貌。由此又引申指清晰、明白。

## 楙

从林矛声，指草木茂盛，与从艸戊声的“茂”字音义皆同。

## 麓

甲骨文或从林鹿声，或从林录声，或从四木、录声。四木与林同义。从鹿声者演变为小篆，楷书作“麓”；从录声者演变为西周金文和《说文》古文写法，隶定作“㯟”。

本义指生长在山脚的林木，引申指山脚、看守山林苑囿的官吏。另有观点认为鹿同时表义，解释为鹿生活在山脚下，但从商代即可将声符替换为“录”可知，“鹿”在此处应该仅作声符。

## 森

从三木，会成片树木之意。本义指树木茂密，引申为众多、罗列、耸立、森严等义。又由本义引申为阴沉幽暗、寒凉义。又以树木耸立比喻人惊恐时毛发耸起。

## 梵

从林凡声，本是“芃”替换形旁而来的俗体，形容草木茂盛。后“梵”被借用作译音词，作为Brahmā（梵天，婆罗门教的创造之神）的译音。相传梵语为梵天所造，故称为梵语、梵文。梵文为古印度书面语，佛教经典也多用梵文书写，故汉文化圈也以“梵”泛指与佛教、印度有关的事物。古印度人认为清净的行为受梵天赞赏，称其为“梵行”，此信仰也被佛教接纳，汉语中的“梵”于是又有清净、寂静之意。

***

# 才部

## 才

甲骨文像草木自一（象征地面）钻出之形，演变至楷书作“才”。本义为草木初生。引申指初生即具有的能力，也即资质、才能，进而引申指有才能的人。由资质义又引申为有资质的可用之物、材料，此义后作“材”。又由本义引申指刚刚，进一步引申为仅仅。此两种用法后作“纔”，现代又简化为“才”。

***

# 叒部

## 叒

“若”的讹省，“若”本像人跽坐以双手顺发之形，本义为顺。“叒”是只保留头发和双手的讹变省形。《说文》将“叒”区别于“若”，单独训为“叒木”，即扶桑，神树名，相传太阳初升登于此木。而“叒木”在古籍中即写作“若木”，本为一字。

## 桑

甲骨文像枝叶茂密的桑树之形，战国文字两侧枝叶与树形脱离，至秦文字全部枝叶与树形脱离，上部讹为“芔（卉）”，下部树形作“木”，此字形隶变后作“桒”。小篆将讹变后的“芔”进一步讹为“叒”，隶变后作“桑”，成为后世主流字形。

本义为桑树，也指桑叶，引申指采桑叶，进一步引申指蚕桑之事。

***

# 之部

## 之

甲骨文从止（足形）从一（指代当前的地方），表示离开此地前往他处。后演变为两种字形，较规整的写法作“㞢”（楷书中仅用于偏旁），隶变后笔势相连又作“之”，后者成为主流。

本义为往、到……去。引申为至、直到。又假借为第三人称代词（相当于“他”、“她”、“它”）、指示代词（相当于“这”）、助词（相当于“的”）等。

## 㞷

是“往”的本字，商代初文为从止从王，后“王”省去上部，构意即不明显。春秋战国文字将“止”与省略后的“王”的顶横合并为“㞢（之）”，下部或变为“土”，或变为“𡈼”，同时出现累加彳旁或辵旁的字形。小篆隶定为“㞷”，从彳者作“𢓸”，从辵者作“𨓹”。汉代以后，从㞷得声的字多改为从王声，相当于省去顶部的“屮”形，只有“𢓸”字将声旁写作“主”，相当于将顶部的“屮”形先简化为竖的出头部分，至楷书变为一点。

《说文》将“㞷”训为“草木妄生也”，不确。作为“往”的本字，本义为到某地去。后只作为偏旁出现在其他字中，其本义由从彳的“往”字表示。

***

# 帀部

## 帀（匝）

始见于小篆，从反㞢（之）。本义为环绕，引申为量词，表示环绕一周、一遍。为强调行走属性，俗体累加辵旁作“迊”，后将顶部的横与“辶”一并讹为“匚”，整字作“匝”。现代以“匝”为正体。以上义读zā

另有读shī的“帀”字，即“師”字所从。初文构形不明，在古文字中用作“師”。

## 師（师）

甲骨文构形不明，此形隶定为“𠂤”。西周金文或加“帀”旁（暂不确定与周匝之“帀”是否为同字，后者始见于小篆，无先秦古文字作参照）作“師”。春秋时又或省去“𠂤”，仅用“帀”表“師”义。直至秦汉，“師”、“帀”并存，至楷书则只用“師”。现代简化字作“师”。

《说文》本义为古代军队编制单位，二千五百人为一师。泛指军队。引申指驻扎军队、征伐、民众。由本义又引申指军中一个师的长官，词义扩大又用作其他官名，引申指精通某种技艺的人、教育者、榜样等。汉代以后用“師子”一词作为动物狮子名称的音译词，狮子最初由西域传入中国，“師子”或说是波斯语Shir的音译，或说是梵语Simba的音译。此用法的“師”后加犬旁作“獅”，现代类推简化为“狮”。

***

# 出部

## 出

甲骨文从止（足形）从凵（坎穴），会人离开居处之意。直至战国字形变化不大，秦文字将上部的“止”讹为“屮”形，隶变后整字作“出”。《说文》小篆基于春秋时的一种屈曲化的写法，已看不出“止”和“凵”形，《说文》解为“象草木益滋，上出达也”，与初文不合。

本义当为从里到外，即出去，与“入”相对。引申指离开、发出、拿出、支出、卖出、生产、发生、显现、超过、出嫁、驱逐、舍弃、脱离等义。又作副词表示向外、显露、完成等。

另有“齣”字，初用于表示明清传奇剧的一回，后泛用为戏曲剧目的量词。而“齣”是“齝”的讹形，“齝”字从齒台声，本义为牛反刍，因传奇剧每一段落均一进一出，故以牛反刍作比喻。明清时期，开始将“出”假借为“齣”表此义，如“一出戏”。现代简化字将“齣”并入“出”。

## 賣（卖）

从出从買、買亦声。“買”字最初指商品交易活动，兼有买、卖二义。约于秦汉之际，分化出加注“出”旁的“賣”字专指卖出义，而“買”则变为专指买入。“賣”又由卖出义引申指贩卖。

另有从貝[㞢+目]声的“𧶠”字，读yù，其声旁在《说文》小篆中讹为“𡍬”（古文睦），本义为沿街叫卖、贩卖，引申指炫耀、夸耀。隶变后，“賣（mài）”字中间的“网”和“𧶠（yù）”字中间的“囧（原本应是目，小篆讹为囧）”均变为“罒”，于是此二字字形逐渐混同。由于“𧶠”、“賣”二字形、义皆近，最迟于唐代即出现将“𧶠（yù）”和“賣（mài）”的全部含义一律并入“賣”这个字形，并读作mài，故“賣（mài）”也开始具有炫耀的含义，形成“賣弄”等词，但此义的源头在“𧶠（yù）”字。而“𧶠（yù）”原本的音、义在古书中多用后起分化字“儥”字表示，又或假借本义为粥的“鬻”字表示，如“賣官鬻爵”。而由于“鬻”字被假借为“𧶠（yù）”义，故其粥的本义用其省形“粥”表示。

在现代，“𧶠（yù）”的贩卖义并入“鬻”，炫耀义并入“賣（mài）”，“賣（mài）”又简化为“卖”，为草书楷化。

***

# 𣎵部

## 索

甲骨文像一条经线被绳绞缠的绳索形，两端有扎系的绳结，或又在下方加一双手。西周金文或在中间加一“H”形，表示绞索工具。战国时，中间的“H”形两端延长，讹为“宀”形。小篆将延长后的“宀”形两端与主体分离，《说文》将此部分与顶端的绳结整体视作“𣎵”，将此字解为“从𣎵、糸”，有误。“𣎵”作为单字本不存在，《说文》中的𣎵部是将不同源头的多个字生硬拆解出一个共同的“𣎵”形作部首以统辖。

“索”与“素”早期字形近似，主要区别在于“索”的顶部分叉向上，“素”的顶部分叉下垂。隶变后，“索”下部从糸，顶部分叉拉直，至楷书整字写作“索”。

本义为粗大的绳子，大者谓之索，小者谓之绳。后泛指绳索。引申指搓绳、绞合。后有从宀索声的“𡩡”字，本义为入室搜寻，后假“索”为“𡩡”，作“搜索”。由搜寻义引申为求索、索取、思索。一说以上一系列含义是由绳索义直接引申而来，即顺着绳索搜寻，而非假借“𡩡”字而来。又有孤独、无趣等义，但如何引申而来暂不明确，一种猜想是用像顺着绳索一样没有变化以比喻无趣，进而引申为孤独。“索性”一词以顺着绳索行事比喻顺着事物原本的性质行事，也即副词“干脆”义。

## 孛

构形不明。商周古文字“子”上从“丰”，战国时上部讹变，至《说文》小篆讹为“从𣎵从子”。《说文》本义为草木茂盛的样子。又指彗星，可能由草木茂盛类比彗星光芒四射，故引申而来。又引申指人发怒变色，因人发怒时神色壮盛，与草木茂盛相似，此义后作“勃”。

## 𠂔

甲骨文像植物从土中长出，中间被“H”形阻隔，本义为止。后分为两种字形：一种将植物根部的部分保留，先写作肥笔，后变为短横；另一种字形将这部分直接省去。小篆即承自后者，将“H”形两端拉长后，《说文》将整字解为从𣎵，不确。此形隶变后与“巿（fú）”相混，渐废弃。另一种保留短横（原植物根部）的写法，隶变后将短横写作撇，整字作“𪩲”，后楷书多写作“𠂔”。“𠂔（zǐ）”、“巿（fú）”、“市（shì）”三字形近，作偏旁时常相混讹。

## 南

初文构形暂无定论，几种观点如下：

1. 像龟腹甲形，龟类居穴大都朝南，故指代南方。
2. 像一种钟形乐器，流行于南方地区，故指代南方。
3. 像一种由带提纽的容器演化而来的乐器，假借原因同上。

《说文》小篆解为“从𣎵𢆉声”，与初文不合。本义不详，假借指代南方。引申为向南、南方舞乐。又作爵位名，后多作“男”。

***

# 生部

## 生

甲骨文像草木从地面长出之形，中竖或加点作饰笔。西周时或将点变为短横，为后世文字所本。

本义为生长。引申指生育、出生、产生、发生、生产、生存、生命、活着的。由活着的又引申指新鲜的，用于食物，与“熟”相对。由此进一步引申指人际关系不熟、对某事不熟练等。又作副词表示将某人某物活着……，如生擒、生吃。由此进一步表示生硬、勉强。又用为“先生”的简称，由此泛指读书人，如儒生、书生，进而引申为学生。

## 丰

甲骨文像植物根茎丰满肥大，后将肥大的根茎部分写作肥笔，又变为短横，最终变为长横。本义为茂盛、丰满。“丰”与“豐”义近，明代以后有以“丰”代“豐”的例子，现代简化字将“豐”并入“丰”。

## 産（产）

从生[文+厂]声。其声符从文厂声，是“彥（彦）”的初文，累加饰笔即成“彥”字。《说文》解为“从生、彥省声”，或可不必。战国时或从彥声。小篆隶定作“產”。隶变时，[文+厂]变形为“产”，故“彥”作“彦”、“產”作“産”。现代将“産”简化为“产”，而“产”本质上是“彥”之初文的类推隶变体。

本义为生育、生子，引申为出产、发生、滋生、制造。作名词表示制造或自然生长的东西。由生产制造义又引申指拥有的资财、土地、产业等。

## 隆

战国文字从土降声。西汉时将“降”中的“㐄”与“土”结合为整体后省写作“王”形。新莽时又恢复从降声，但恢复后所从的“土”仍写作“王”形或将“王”的中竖出头，此部分在《说文》小篆中讹作“生”，故《说文》解为“从生降声”，隶定为“𨼇”。至东汉隶书，又变回从土降声，“㐄”与“土”共用一竖。至楷书，受小篆影响，微讹写作“隆”。

本义为四面高起的山。又泛指高，引申指增高、尊崇、兴盛、盛大、程度深。

***

# 𠂹部

## 𠂹

像花叶下垂之形，是“垂”的本字。从土𠂹声的“𡍮（垂）”字本义为边陲，后借“垂”为“𠂹”，“𠂹”字遂废，而边陲义则又用累加阜旁的“陲”字表示。

***

# 𠌶部

## 𠌶

“華（华）、花”的初文，始见于西周金文，像草木之花，下有花蒂。小篆将下部讹为“亏（于）”，致《说文》解为“从𠂹亏声”。本义即为草木之花。后世多用累加艸旁的“𦻏”字，“𠌶”字遂废。“𦻏”隶变作“華”，俗作“花”。现代将“華”简化为“华”，与“花”分化为两字，详见“華”字。

***

# 華部

## 華（华）

初文为“𠌶”，后加艸旁繁化为“𦻏”，隶变后先作“蕐”，后作“華”，现代简化字作“华”。

本义为草木之花，引申指开花。以上义读huā。又引申为光彩、华丽、繁盛、荣耀、浮华、精华、年华等义，又因中国（中原）服章华美，故用“华”指代中国，与“夏”连称“华夏”。以上义读huá。又作山名、姓氏，读huà。因引申义众多，故自秦汉以来为其草木之花的本义另造“荂”、“蘤”、“花”等专字，后世多用“花”字，而“华”则逐渐专用于引申义。

***

# 稽部

## 稽

从𥝌（jī）从尤、旨声，其所从之“𥝌”像树木头部曲折受阻不能上长的样子。隶变后将“𥝌”变为形近的“禾”。

本义为留止、停留，引申出审慎求详的意味，故有考察、核查义。进而引申为计算、计较、争论等义。“滑稽”一词本义指古时一种能连续转注吐酒的流酒器，“滑”指顺畅，“稽”指阻滞，因其能源源不断注酒吐酒，引申指人能言善辩、言辞流利，进而引申为诙谐、可笑、荒唐。以上义读jī。

另有“qǐ”音，用于古时一种跪拜礼“稽首”，九拜之一，指叩头至地停留片刻，与“顿首”（头触地即起）、“空首”（头不触地）相对，“稽”在此取停留义。后世又与“起手”音同混用，后者为道士等出家人之间见面问候的礼节，单手置于胸前点头施礼，此义写作“稽首”属于俗讹，二者本义不通，“起手”是较为简单的动作，而“稽首”是先秦时非常隆重的跪拜礼。

***

# 巢部

## 巢

甲骨文像树上有鸟巢之形，后世字形变化不大，只有小篆将上部的鸟巢形左右剥离，但隶楷仍承古形。

本义是鸟窝，泛指其他动物的窝。上古未有房屋之前先民在树上的住处也称为“巢”。又引申指敌人或盗贼盘踞之处。作动词表示筑巢、栖息。

***

# 桼部

## 桼

生漆之“漆”的本字。初文从木，两侧有若干斜点，象征漆树流出的汁液。秦文字斜点位于下方，左右各二。小篆在木的左右两侧再各加一点，为后世楷书所本，楷书作“桼”。

本义指漆树皮里的黏汁，又叫生漆，可用作涂料。也指漆树。因生漆氧化干燥后呈黑色，故也引申指黑色。又指用生漆涂。从水桼声的“漆”字本义为水名，后借指“桼”，“桼”字遂废。“漆”又有俗体“柒”。汉代又曾借“桼”作数字“七”，因汉隶中“七”与“十”形近，借用“桼”字是为避免数字间混淆，后又改用“漆”的异体字“柒”作为“七”的大写，多用于账目等文书防止篡改。

***

# 束部

## 束

“束”、“橐”、“東”三字同源，初文像两头用绳索扎住的口袋。其捆扎义分化为“束”字，口袋义分化为“橐”，假借为方位时分化为“東”。

“束”由捆扎义引申为约束、拘束、限制、收拾、狭窄等义，又引申指聚集成条状的东西，进而作此类事物的量词。

## 柬

构形不明。西周金文从束，中间有两点。《说文》解为“从束从八”。本义为挑选，从事物中分别出好坏，此义后作“揀（拣）”，又通简拔之“簡（简）”。又指信札、名帖，此义也通“簡（简）”。

## 剌

商周文字从刀，左旁不明，或似“束”，或似“柬”。小篆从束，楷书作“剌”。《说文》训为“戾”，即违背。古文字中多用于假借义：或借为“烈”，指显赫、功业；或借为“列”，指众；或借为“厲”，指周厉王。今用作“拉”，表示割开、划破。

***

# 㯻部

## 橐

与“束”、“東”同源，初文像两头用绳索扎住的口袋。后分化：较完整的字形为两端的绳结之间有一个小圈和一个大圈，小圈表示捆扎的绳索，大圈表示口袋，此字用来表示口袋义，即后来的“橐”；而另一字形省去大圈，至保留小圈强调捆扎义，演变为“束”字。小篆又在下面表示口袋的大圈内累加“石”作声旁，隶变后作“橐”。

本义为无底、两头捆扎的口袋，有底曰囊，无底曰橐。也泛指口袋。

## 囊

初文与“橐”的初文近似，区别在于：“橐”字初文为两头捆扎、中间有一小圈（绳索）和一大圈（袋体）的口袋形；”囊“字初文仅上部捆扎，底部无绳结。故“囊”的本义为仅一端有口的口袋，与两端扎口的“橐”相区别。小篆在表示袋体的大圈内累加“𤕦”作声符，即从襄省声，并在底部加绳结形，即将形旁改为与“橐”字一致，仅靠声旁区分。隶变后所从的“襄省声”又与小篆所省构件不尽相同。至章草和楷书，又省去底部的“木”形（实际为袋体的底端和底部的绳结），楷书最终写作“囊”。

本义为有底、一头捆扎的口袋，有底曰囊，无底曰橐。也泛指口袋。引申指像袋子的东西。作动词指用囊盛物，引申为蒙住、敛藏、囊括等义。

***

# 囗部

## 囗

像围起来的一块地方，只用作偏旁，从囗的字大多与区域、界围有关。

## 圜

从囗睘声，本义为圆。引申指天、钱币、圆形的。以上义读yuán。又作动词表环绕，通“環（环）”，读huán。

## 團（团）

从囗專声，本义是圆。引申指圆形或球形的东西，其中专指米或粉做成的圆球形食物时，有后起分化字“糰”。由本义又引申为聚集、围绕、活动集体或组织、军队编制。现代将“團”、“糰”简化为“团”。

## 圓（圆）

字本作“員”，上部是“〇”，下部是“鼎”，表示圆形义，后所从的“鼎”讹为“貝”，字遂作“員”。又因“員”多用于假借义，遂加“囗”旁分化出“圓”字表本义。现代将“員”简化为“员”，“圓”类推简化为“圆”。

本义为圆形，又代指天，引申指完整、周全、使完满、灵活变通、婉转、旋转。又代指圆形的货币，后作“元”。

## 回

商周文字像回环旋转之形，隶定为“囘”。秦文字变为内外两个封闭的环形，隶变后作“回”。

本义为旋转。引申指掉转、转变、返还、答复、迂折、邪僻，又作量词相当于次、件、章等。

另有后起分化字“迴”，在大多数义项中可与“回”互相替换，其区别为：

1. 在表邪僻义以及作为民族名等专有名词时，只能用“回”；
2. 在表旋转环绕、迂折义时，后世多习惯用“迴”。

现代简化字将“迴”并入“回”。

## 圖（图）

从囗从啚，“啚”为“鄙”的初文，表示郊外边远地区，“囗”像国邑，整字会地图之意。

本义为地图，引申指图画、意图，作动词表绘画、谋划、谋取。现代简化字依草书楷化作“图”。

## 國（国）

初文为“或”，始见于西周金文，从囗（表示疆域）从必（柲的本字，像戈柄之形），会以武器守卫疆域之意。后在“囗”四周加短线，强调疆域边界。或省去左右两短竖，只保留上下两短横。后上面的短横与“必”相连成为“戈”字，整字即成为后世“或”的字形。因“或”多被假借作虚词，西周时即出现累加囗旁的“國”字、累加邑旁的“𬪇”字以表本义。战国时又出现累加土旁的“域”字、累加宀旁的“[宀+或]”字。后世“𬪇”、“[宀+或]”被淘汰，“或”、“國”、“域”则分化为不同的三字。

初文本义为疆域、地域，引申指地区、区域，以上义后作“域”。引申指分封的诸侯国，此义由“國”承担。由此进一步引申为国都。而国家义先秦多用“邦”字，“邦”与“國”最初都作为诸侯国义，大曰邦、小曰國，至西汉为避刘邦讳，开始以“國”泛指国家。

“國”字异体字繁多，其中从王的“囯”字最为流行，但不符合新中国的政治主张，后采用“国”作为标准简化字，此本为“囯”的加点俗体，而非从玉。

## 圈

战国字形从囗𢍏声，其声旁隶变后作“龹”。又或在“𢍏”下加“土”。秦文字改为从囗卷声，为后世文字所本。

本义指饲养家畜的有栅栏的地方，与“牢”同义，此义读juàn。引申将禽畜关在圈内，进一步引申指拘禁，此义读juān。又引申指环行物、区域、划圈、合围，又作环形事物的量词，以上义读quān。

## 囿

甲骨文字形像框域内有若干屮（草）或木（树）之形，本义为古代养禽兽以供田猎用的大园子。此形演变为《说文》籀文字形，隶定作“𡈹”。春秋时出现从囗有声的形声字，为后世文字所本，楷书作“囿”。

与“苑”义近，古称“囿”，汉以后称“苑”，一说有围栏的称“囿”，开放式的称“苑”。由本义引申指菜园、果园。又比喻事物会聚的地方。又引申指局限、拘泥。

## 園（园）

从囗袁声，本义为围起来种植蔬果树木的地方。又特指花园。后引申为供人游览、娱乐的场所。也比喻事物聚集的地方。元代以来出现简化字“园”，为现代简化字所采用。

## 圃

初文为“甫”，甲骨文从屮在田上，像田上长蔬菜之形。西周文字加“囗”，强调界围。或在“甫”下加“又”，变为从囗、尃声。至小篆又改回从囗甫声，楷书作“圃”。

本义为菜园，后也指种植花草、果木的园子。引申指种菜、种菜的人。又比喻事物丛集之处。

## 因

甲骨文有诸多形近变体，内部为人形（或正面作“大”，或侧卧）外部有轮廓包围（或为方框，或沿人形曲折环绕），释读暂无定论，这些字形中可能包含“因”、“囚”、“𥁕”等字。至西周金文，较明确的“因”字是正面的人形外有沿人形包裹的轮廓。至战国，其轮廓逐渐方正，后世作“因”。

其造字本义有以下几种说法：

1. 从人在衣中，表示衣着于人体，本义指内衣，是“裀”的初文。
2. 像人躺在草席上，其外部线条表示草席被人压陷的轮廓，本义是草垫，是“茵”的初文。
3. 像人被雾气围绕，是“氤”的初文。其变体中人呈侧立形者，是“𥁕”的初文，是其未加皿旁的形态，隶定作“囚”，但非囚犯之“囚”，也是“氲”的初文，“因囚”即“氤氲”。

无论哪种观点属实，以上构形均有某事物贴近、顺沿人体的特点，故“因”字引申出亲近、顺沿、承袭、凭借、按照、趁着、于是等义，又引申为原由、由于。

## 囹

从囗令声，本义为监狱，周代称监狱为囹圄。

## 圄

从囗吾声，本义为监狱，周代称监狱为囹圄。引申为囚禁。又通“禦”，表守御。

## 囚

从人在囗中，本义为关押、拘禁。引申为限制、束缚、俘获，又引申指囚犯、俘虏。

## 固

从囗古声，本义为坚固。引申为地势险要、安定、固定、固执、坚决、必定、本来等义。

## 圍（围）

初文为“韋”，后分化为“韋”、“圍”、“衛”、“違”四字，详见“韋”字。现代简化字作“围”。

“圍”本义为围绕、包围，又特指以军队包围。引申指周围。又作圆周的计量单位，指两臂合围的长度，也指两手拇指食指合围的长度。

## 困

从木在囗中，会意不明，或说会树木被围之意。常用义为困窘、被围困，引申为使困窘、围困，又引申为匮乏、贫困、疲乏。又疲乏义又引申为睡觉。疲乏、睡觉义后加目旁作“睏”，现代简化字将“睏”并入“困”。

***

# 員部

## 員（员）

商代金文有“〇”字，是“員”、“圓”的初文，表示圆形。甲骨文中由于锲刻不变，刻作方形，为加强表意，又加注“鼎”旁，因三足鼎为圆鼎。至小篆将“鼎”讹为“貝”，隶变后楷书作“員”。现代简化字作“员”。

本义为圆形。引申指周围，如幅员。又假借指物的数目，又引申为人的数目，进一步引申指某种职业、职务、组织的人。因其引申义较多，故分化出从囗的“圓”字表本义。

***

# 貝部

## 貝（贝）

甲骨文像海贝（宝螺科）之形，后世逐渐演变为“貝”，宋元以来出现简化字“贝”，为草书楷化，为现代简化字所采用。

本义为海中有壳的软体动物，不包含淡水贝类，且主要指单壳的宝螺科，现代生物学归属于腹足纲，即螺，而非双壳纲。后词义扩大，泛指有壳的软体动物，即贝类。引申指贝类的壳。

最晚于商代，因中原远离海滨，海贝稀有，人们以海贝作为货币。故“貝”字也有货币义，且从貝的字多与财货有关。

## 𧴪

从小从貝，本义即小贝，也指小贝壳的碰撞声。引申指细小、细碎，此义后作“瑣（琐）”。

## 賄（贿）

从貝有声，本义为财物的总称。引申指赠送财物，又引申为贿赂，即用财物买通他人。

## 財（财）

从貝才声，本义为财物，金钱、物资的总称。引申为财富、财产。又通“材”表材料，又通“才”表资质、仅仅、刚刚，又通“裁”表裁制、杀。

## 貨（货）

从貝化声，本义为金玉布帛的总称。引申指商品、货物。又引申为买、卖、贿赂、给报酬等义。

## 資（资）

从貝次声，本义为货物、钱财的总称。引申为积蓄、资助、凭借、资料、资质、资历等义。

## 賑（赈）

从貝辰声，本义为富有、富饶。又指赈济，即以财物救济，此义本作“振”，因与财物有关，故将形旁替换为貝。

## 賢（贤）

从貝臤声。其声符“臤”是“掔”的初文，本义为牵引、使牢固，后又分化出“堅”字表牢固义。“臤”又被假借表多、多财、多才等义，这些义项最晚于西周时分化出加注貝旁的“賢”字表示。由多才义引申为有德行、良善。作名词表示有才德的人、贤能。现代简化字作“贤”。

## 賁（贲）

从貝卉声，本义是文饰，引申为有光彩。以上义读bì。又通“奔”，表奔走，如“虎賁”即是取奔走义，此义读bēn。

## 賀（贺）

从貝加声，本义为以礼物相庆贺，泛指祝贺、庆贺。又通“荷”，表担负。

## 貢（贡）

从貝工声，本义兼指上对下的赐予和下对上的献奉，后专用于献奉义，而赐予义后用“𥫔（赣）”字。又指所献的贡品。由进献义引申为推举人才，如科举时代的“贡生”即取此义。

## 贊（赞）

从貝㚘声。其声旁“㚘（读bàn）”从二夫，会二人相伴并行之意，本义为伴侣，后以“伴”表此义。“贊”字于汉代将所从的“㚘”拉长笔画，《说文》小篆则进一步将其讹为“兟”。后世楷书中“賛”、“贊”并存。

本义为佐助。引申指引导。又指辅助行礼的人，司仪。因赞者在仪式中要大声唱诵，故引申出赞颂、文体名义。由赞颂义又引申为称赞、告知。其中赞颂、称赞、文体名、佐助等义，后世分化出“讚”字表示。现代将“賛”、“讚”并入“贊”，并简化为“赞”。

## 貸（贷）

从貝代声，由“貣”分化而来，分化之初用于专指借出义，后也兼表借入义，逐渐取代了“貣”，详见“貣”字。由借出义引申为施与、给予。又引申为宽恕、推卸。

## 貣

从貝弋声，本义为借贷，引申为乞求。最初兼有借入和借出义，后加“人”旁分化出“貸”字，以“貣”表借入，以“貸”表借出。但这种分化并未成功，后世“貸”也有表示借入、乞求义的例子，最终“貸”完全替代了“貣”。

## 賂（赂）

从貝各声，本义为赠送财物，又指所赠的财物，也泛指财物。引申指行贿，即用财物买通他人。

## 賸

从貝𦩎（朕）声，本义为送，特指嫁女时的陪送，也指随嫁的人。或体从女作“媵”，在表示陪嫁相关义时，后世多用“媵”字。以上义读yìng。

“賸”由送义又引申为赘余、剩余义，读shèng，后俗作“剩”。

现代已将“賸”的下辖义项分别并入“媵”和“剩”字。

## 贈（赠）

从貝曾声，本义为送给，引申指送走、驱除。又引申指为死者追封爵位。

## 𥫔（赣）

西周金文从章从丮，像两手捧章（璋）。战国时或累加貝旁。小篆将“丮”讹为“夅”，隶变后楷书作“𥫔”。因“𥫔”、“貢”同义，后世楷书多将“𥫔”写作“贛”，即从貢得声，兼表义。

初文由两手捧璋会意，本义兼有赐予和贡献二义，与“貢”相同，二字可互通，如子贛即子贡。后此二字分工，“貢”逐渐专指贡献义，“贛”则专指赐予义。以上义读gòng。又指水名，即赣江，读gàn。此义本作“贑”，是赣江上游的“章”、“貢”二水名的合文，后写作“贛”，与赐予义的“贛”合为一字，也作“灨”。现代将“𥫔”、“贑”、“灨”统一并入“贛”，并简化为“赣”。

## 賞（赏）

从貝尚声，西周和战国文字或从尚省声，省去“口”。

本义为偿还、赔偿，读cháng，此义后作“償（偿）”。后假借为赏赐义，读shǎng。此义最初在西周金文中多假“商”字表示，后又加注貝旁作“𧷞”，或将声符微省作“𧶜”，专表赏赐义。春秋以后开始借本义为偿还的“賞”字表赏赐义，于是“𧶜”字遂转而被借用作行贾义，此义后又被“商”字取代。而“賞”因被借用作赏赐义，其偿还的本义则又分化出专字“償”。

“賞”由赏赐义又引申出赠送、称赏、欣赏等义。

## 賜（赐）

商代文字假借“易”字表示赏赐义，西周金文又或改借本义为“目疾视”的“睗”字表示。春秋时将目旁替换为貝旁，分化出从貝易声的“賜”字专表此义，后世从之。

本义为赏赐，引申指给予人的恩惠或财物。

## 贏（赢）

从貝𦟀（luǒ）声。其声符“𦟀”是“蠃”的初文，是一种虫类的象形，其所象之形或说是螺、蜗牛、蛞蝓类软体动物，或说是一种细腰蜂类，但就其形状而看至少应是无壳动物。其口、身的部分在战国时讹为二“月”，在小篆中又讹为“月”、“丮”，其中“丮”后又讹为“凡”。头和触角的部分几经讹变，最终写作“吂”。

“贏”本义为获利，引申指利润、超出、增长。

## 賴（赖）

从貝剌声，本义指盈利、利益。引申指依赖、依靠。进一步引申为责怪、耍赖等义。

## 負（负）

从人从貝，人有钱财，会凭仗、仗恃之意，引申为背负义。一说本义即是背负，凭仗义是引申而来，引申过程为背负->背靠->凭仗。由背负义引申指负担、背靠着、承受、担任。又引申为违背、辜负、亏欠、赔偿、失败等义。由亏欠义引申，数学上指小于零的，与“正”相对。

“負”字上古音bi，类似的音变现象如复（愎即保留古音）、否（否泰之否）、弗（鄪、佛狸之佛）等。“負”字古音与“敗”、“北”、“背”、“悖”通，其失败、违背、背负等相关义项疑是由此通假而来，抑或本就是音义皆近的近源字甚至分化字，但均无确切证据。“負”较晚起，始见于秦简，而“敗”、“北（背的本字）”、“𢨋（悖的初文）”均见于甲骨文，

## 貯（贮）

初文为“宁（zhù）”，像上下及两旁有立柱，中空可贮物的容器。本义为盛放、积藏。后加注貝旁作“貯”。现代因将“寜”简化为“宁”，为作区别，所有从宁（zhù）声的字均将声旁写作“㝉”，“貯”即类推简化为“贮”。

## 貳（贰）

从貝弍声，“弍”金文从戈或从戌，小篆改为从弋。本义是增加，引申指副的、辅佐、重复，又引申指不专一、背离，特指从属二主。又用作数字二的大写，用于账务以防篡改。

## 賓（宾）

甲骨文从宀（房屋）从万（客人形）从卩（跪跽迎接的主人形）从止（朝向房屋的脚形），会客人自外而来、主人迎接之意。所从之“卩”或作“女”。或省去卩/女，或再省去止，最简者仅从宀从万，隶定作“𡧊”。西周金文沿袭“𡧊”形，或在底部加注貝旁。春秋战国时多在“万”上方加一横作饰笔。小篆将“万”讹作“丏”，《说文》解作“从貝𡧍声”，但其所谓的声旁与本义为冥合的“𡧍”字无关，仅是讹变后同形。隶变后楷书作“賓”。清代出现将声旁替换为“兵”的简化字“宾”，为现代简化字所采用。

本义为引导、迎接客人，此义后用儐（傧）。引申指宾客。又引申指赠送、所赠的礼品，产生此引申义后故而加注貝旁。由宾客义又引申为辅佐、侧旁、尊敬、服从等义。

## 賖（赊）

从貝余声，上古是鱼部字，中古转入麻韵后，曾有过从舍声的俗体“𧶟”，但未成主流。明清之际又出现从佘声的“賒”，被广泛接受，现代简化字作“赊”。而“佘”本就是“余”的分化字，与“舍”类似，都是“余”字读音变化后分化而来。

本义指赊欠，即交易时延期交款。引申指借、饶恕、松缓、迟缓、遥远、长久等。

## 贅（赘）

从敖从貝，“敖”为游玩、出游，“貝”为货币，敖貝即会放出钱财、任其流转、延期取回之意。本义为抵押，引申指多余的、无用的，又引申为连缀、附着，此义通“綴（缀）”。由本义又引申指将人身作抵押，如“赘子”即是将子女典卖为奴婢三年不能赎。又特指男子到女家成婚，成为女方家庭成员，称“赘婿”，即取以人身作抵押之意。

## 質（质）

从貝斦声，东汉时有或体作“貭”，清代据此产生简化字“质”，为现代简化字所采用。本义为抵押。以钱受物曰贅（赘），以物受钱曰質（质），即抵押物品放出金钱称为贅，抵押钱财做担保称为質，但实际并不严格区分。“質”也可指以人作抵押，如质子、人质。引申指买卖货物的契券，长曰質，短曰劑（剂）。由抵押物又引申为质量、质地、本质、质疑、对质、诚信等义。由质地、本质义又引申指质朴、底子。由底子义又引申指箭靶、斩人用的砧板，表砧板义时后作“鑕（锧）”、“櫍”。

## 𧶻（贸）

从貝戼（卯）声，本义指交换财物，即交易。引申指变易、变更。引申指杂乱，进而引申为蒙昧不明、轻率冒失，此二义或说是通“冒”而来。

## 贖（赎）

从貝𧶠（yù）声，西周金文借“𧶠”字表赎回义，秦文字加注貝旁专表此义，后“𧶠”、“賣”相混，整字遂写作“贖”。现代简化字作“赎”。

本义指以财物换回抵押的人或物。也指交纳财物以减免刑罚。引申指替换。

## 費（费）

从貝弗声，本义为耗费、损耗，引申指费用。以上义今读fèi。又作地名，此义保留古音读bì，也作“鄪”。

## 責（责）

从貝朿声，隶定作“𧵩”，隶变后作“責”。本义为索取，引申为要求、督促、责备、惩处、责任、罪责。又引申为债务，读zhài，此义后作“債（债）”。

## 賈（贾）

甲骨文从貝在宁（zhù）中，“宁”是“貯（贮）”的初文，指贮物容器，“貝”为钱财，整字会囤积营利之意。或体将“貝”移至“宁”下方，为后世文字所本。入周以后，均作上宁下貝，与左右结构的“貯”相区别。上部的“宁”几经讹变，至战国时或讹为“用”，或替换为声符“古”，又或将从貝古声变为从貝買声，又或作从貝襾声。秦系文字即从貝襾（​xià）声，隶变后作“賈”。其上部由“宁（zhù）”到“襾（​xià）”的替换过程应与其读音分化有关，即由gǔ到jià、jiǎ，类似的现象还有“烏（乌）”和“雅（鸦）”，楚谓烏（乌）、秦谓雅（鸦）。

本义指囤积营利的坐商，引申泛指做买卖，也专指买或卖。引申为求取、招致。以上义读gǔ。又指价格，读jià，此义后作“價（价）”。又作古国名、姓氏，读jiǎ。

## 𧶜

从貝、商省声，本义为赏赐，读shǎng。西周金文最初假“商”字表赏赐义，后加注貝旁作“𧷞”，继而将声符简省，作“𧶜”。是赏赐义的专用字。至春秋金文，仍借用“商”字表赏赐义。至战国，又假借本义是偿还义的“賞”字表赏赐义，于是“𧶜”字转而被假借表行贾买卖之义，读shāng，这种用法后又被“商”取代，“𧶜”字遂废。

## 販（贩）

从貝反声，本义指贱买贵卖以营利，也指贩卖货物的小商人。又单指买进或卖出货物。引申指出卖背叛。

## 買（买）

从网从貝，会网罗钱财、获利之意。本义为商品交易活动，兼有买、卖二义。约于秦汉之际，分化出加注“出”旁的“賣”字专指卖出义，而“買”则变为专指买入。引申为雇用、租赁、招致、博取、收买等义。清代出现草书楷化字“买”，为现代简化字所采用。

## 賤（贱）

从貝戔声，戔兼有微小义。本义指价格低，与“貴”相对。引申指地位低。又引申为意动用法，表示轻视。引申作谦辞。由地位低引申为人格、行为卑劣。现代简化字作“贱”。

## 賦（赋）

从貝武声，本义是用于军事的税，“税以足食，賦以足兵”，后泛指税，“赋税”浑言无别。引申指征收赋税。由本义又引申指军队。又有颁发、授予义，“賦、布、敷、铺，并声近而义同”。引申为宣布、陈述、诵读，进而引申指一种铺叙直陈诗歌表现手法，也作文体名。

## 貪（贪）

从貝今声，本义指爱财，不择手段地求取财物。爱财曰貪，爱食曰婪。引申泛指多欲而不知满足、贪求、贪图、贪污。

## 貶（贬）

从貝乏声，本义是损减。引申指给予底下的评价，与“褒”相对。又引申指降职、降级。

## 貧（贫）

从貝分声，或说“分”兼表义，会将钱拆分使用之意。本义指贫穷，与“富”相对。引申指不足、缺乏。又引申作僧道的谦称。又由缺乏义引申指言语内容空洞匮乏，专指话多令人厌烦，如“贫嘴贱舌”。

## 賃（赁）

从貝任声，本义指被人雇用、给人做雇工。引申指租借，兼有出租、租用二义。

## 購（购）

从貝冓声，本义指悬赏征求、重金收购。引申指奖赏、购买。现代简化字替换声旁为“勾”，作“购”。

## 貲（赀）

从貝此声，本义指罚缴，引申指计量、价格，又引申指财货。现代在财货这一义项上将“貲”并入“資”，简化为“资”，其他义项简化为“赀”。

## 貴（贵）

从貝臾声。其声旁“臾（kuì）”像两手捧物有所遗落之形，是“遺”的本字，古文用为“蕢”字，或说属于假借，或说其来源有二：像两手捧物者是遗落、赠予义的初文，另一初文形体似“甾”，是蕢、簣的初文，后字形合并，统一作“臾”。“臾”在“貴”字中仅作声旁。整字隶定作“䝿”，隶变后作“貴”，现代简化字作“贵”。

本义指价格高，与“賤（贱）”相对。引申指地位高。又引申为意动用法，表示重视。引申作敬辞。又作名词指价高的货物、地位高的人。

## 賭（赌）

从貝者声，本义指用财物作注比输赢。引申泛指比输赢、争高下。

## 貼（贴）

从貝占声，本义是典当、抵押，即以物质钱。引申指补助。又引申为依附、黏附、挨近等义。

## 貽（贻）

从貝台（yí）声，本义是赠送。引申指留赠、遗留。

## 𧸖（赚）

从貝廉声，声符后俗省作“兼”，整字作“賺”。本义为做买卖获利，引申指赢得、获得、通过劳动挣，也特指得利多、占便宜。又引申指欺哄、骗取、耽误、出错误。

## 賽（赛）

从貝𡫟声。其声符“𡫟”是“塞”的本字，从宀、从㠭（初文为二工）、从廾，像两手捧物于宀中，会堵塞义，隶变后作“𡨄”。“𡫟”后加土成为“塞”字，由本义引申为酬神之祭，取以牲礼填塞回报之意，此义后替换形旁为“貝”，分化出专字“賽”。

本义为酬神之祭，引申指了结、完毕。另外“塞”字还引申指古代一种博戏“格五”，专字作“簺”，受其影响，“賽”也引申出比赛、竞争之义，进而引申为胜过、比得上。

## 贍（赡）

从貝詹声，本义是供给，引申指充足、充满。最初假“澹”字表以上义，后分化出从貝的专字“贍”。

***

# 邑部

## 邑

初文从囗从卪，“囗”表示城市，“卪”为跪坐的人形，会城中有人居住之意。隶变后“卪”讹作“巴”，整字作“邑”。作偏旁时后省作“⻏”。

本义指人民聚居的城市。引申作古代行政区划名，也指封地、邦国、国都。作动词表示封土建邑。

## 邦

与“封”同源，甲骨文下部为“田”，上部像一棵植物，表示划分领地植树以为边界，作动词即分化出“封”，作名词即分化出“邦”。西周时将“田”去掉，或在底部加“土”，并加注邑旁。至战国时，植物连带“土”旁整体逐渐讹为“丰”，致《说文》误解为“从邑丰声”，隶变后楷书作“邦”。

与“封”分化后，“邦”专指分封的疆域，即诸侯国。后词义扩大，泛指国家。由本义又引申指疆界。

## 郡

从邑君声，“郡，群也。人所群聚也”。本义为古代行政区划。

## 都

从邑者声，本义为有先君宗庙的大城市，引申指国君居住的城市，即国家的都城。后也泛指人口聚集的大城市。引申指闲雅、美好。由都城的特征引申有聚集、首领、率领之义。以上义读dū。又引申为副词表总括，或加强语气强调极端，读dōu。

## 鄰（邻）

从邑粦声，战国时曾假借“𠳵”字表示，秦简和小篆改用形声字“鄰”。本义为古代居民组织，泛指住处接近的人家。引申为靠近、亲密、紧挨等义。现代简化字将声符替换为“令”，作“邻”。

## 鄙

初文为“啚”，从囗从㐭，“囗”为城市，“㐭”为粮仓，整字会城外粮仓或农田之意。小篆加注邑旁，隶变后楷书作“鄙”。

本义指城外的粮仓或农田，也作为周代地方行政单位。因距王城较远，故引申为郊野、边远之地。又引申为狭小、质朴、粗俗、见识浅薄等义，也作谦辞。意动用法表示轻视、看不起。

## 郊

从邑交声，“交”通“烄”，古代城外交叉架木燃烧的祭祀称为“烄”，举行烄祭的场所即称为“郊”。后特指距离国都一定距离的地区，也泛指田野。

## 邸

从邑氐声，本义指诸侯或地方官朝见天子时在京城息宿的馆舍。后泛指官员、贵族办事或居住的处所。又引申指普通的旅舍、馆舍。

## 郵（邮）

从邑从垂，“垂”是“陲”的本字，表示边境，文书传递到边境途中所设的停宿处即称为“郵”，也即驿站。后引申指引申指递送文书，又指递送文书的人。现代语境下所传递之物由政府文书变为民间信件，但递送形式类似。现代简化字将“郵”并入本义为地名的“邮”。

## 郁

从邑有声，本义为地名。也被假借为“鬱”，现代简化字将“鬱”并入“郁”。

## 扈

从邑户声，本义为地名，后用为姓氏。通“护”，表示随从护卫，如扈从。又通“雇”、“鳸”，表鸟名。

## 郝

从邑赤声，本义为地名，后用为姓氏。

## 鄭（郑）

初借“奠”表地名，春秋时增加形旁“𩫖”，战国时将形旁替换为“邑”，成为从邑奠声的形声字。由地名也用为姓氏。分化出“鄭”字后，有时也用为“奠”义，因祭奠行为严肃神圣，故“鄭”引申出严肃、慎重之意。清代出现草书楷化的简化字“郑”，为现代简化字所采用。

## 邮

从邑由声，本义为亭名，后设乡，位于陕西高陵。此义读dí。现代用为“郵”的简化字，读“yóu”。

## 部

从邑咅声，《说文》本义为地名，存疑。“咅”通“剖”，有分开义，“部”字本义应是某一地域下分出的下级行政单位，引申为部分、单位、门类、部落、管辖、安排等，也作量词。

## 邙

从邑亡声，本义为洛阳北邙山上的城邑，山名本为“芒”，芒山上的城邑称“邙”，后逐渐以“邙”代指此山，因位于洛阳以北，又称北邙，是帝王公侯、达官显贵的陵墓聚集处。

## 邵

从邑召声，本义为地名，后用为姓氏。

## 𨙷/郉（邢）

初文作“井”，后加义符“邑”，地名。《说文》分别收录从邑井声的“𨙷”和从邑幵声的“郉”两个字，将“𨙷”训为“郑地𨙷亭”，将“郉”训为“地近河内怀”，实际后者地区出土文物多从井声。隶变后，“𨙷”、“郉”均写作“邢”。后世“邢”多指今河北省邢台市西南的襄国故城，读xíng。而《说文》中的“河内怀”，是指商代祖乙迁邢之地，典籍多通作“耿”，读gěng，一音qiān。究其根本，曾有多地都以从邑井声的“𨙷”命名，而“郉”、“邢”当为此字之讹。

## 祁

从邑示声，本义为地名，后用为姓氏。借用以表示大、众多等义。

## 鄴（邺）

从邑業声，本义为地名。现代简化字做“邺”。

## 邯

初借“甘單”或“甘丹”表地名，后加注邑旁，作“邯郸”。

## 鄲（郸）

见“邯”字。

## 鄧（邓）

春秋金文从登从廾，假借用来表国名，后加注邑旁。战国以后省去廾，变为从邑登声。现代简化字依草书楷化作“邓”。

## 郢

从邑呈声，地名，先秦楚国都城。

## 鄢

从邑焉声，本义为周代古国名，后楚迁都于此，“鄢郢”连用指代楚都。后用“鄢郢”泛指楚文化核心区或汉江中游平原。

## 鄂

初文为“咢”，与“噩”、“喪”同源，详见“咢”、“喪”字。借为地名，后加注邑旁分化出“鄂”专表此义。

## 那

从邑冄（冉）声，本义为地名，读nuó。借用为疑问副词或者疑问代词，或以为是“奈何”的合言，此义后加口旁作“哪”，读nǎ。现代又用作指示代词或连词，读nà。又用作姓氏，源于以地名为姓的读nuó，源于外族汉化的多读nā。又可通假为周代国名“聃”，此义读nán。

## 鄱

金文借“番”表国名，后加注邑旁分化出专字“鄱”。本指周代己姓小国“番国”，最初在河南温县附近，西周末春秋初南迁至淮河上游，河南信阳一带，后归附楚国。而今江西“鄱阳”源于南方另一“鄱君国”，其内重要城邑称“番邑”，秦统一后设“番县”，西汉改称“番阳”，东汉始定名“鄱阳”。或说此“鄱君国”就是原己姓“番国”迁徙而来，因史料缺乏暂无定论。

## 鄒（邹）

从邑芻声，即古邾国，战国时改名“鄒”，取“邾娄”合音。也作姓氏。现代简化字作“邹”。

## 郎

从邑良声，本义为地名，春秋时鲁国两地都称“郎”。后假借为官名，此义本取自“廊”，即廊殿下的近侍之臣。后郎官职能加强，“郎”逐渐变为对他人的敬称，至此声旁良已兼有表义作用。后泛指青年，多指男子。

## 邳

金文借“不”表地名，“丕”为“不”的分化字，后加注邑旁作“邳”。也作姓氏。

## 邪

战国文字从邑𤘈声，“𤘈”是“牙”繁增齒旁的异体字，小篆改为从邑牙声。本义指地名“琅邪邑”，位于今山东青岛琅琊台西北，秦朝建琅琊郡，西汉时迁至今山东诸城，东汉改为琅琊国，都城位于今山东临沂。西晋末年琅琊王司马睿南渡至今安徽滁州附近的山中练兵，后将其王号“琅琊”二字赋予此山，称为琅琊山。此义中“邪”后写作“玡”、“琊”、“瑘”、“峫”等，读yá。后借用为语气助词，隶变后俗讹作“耶”，二字并存互通，读yé。又假借为“衺”，表示不正、妖异，引申为偏斜、品行不正的人、私心等义，读xié。

## 郭

初文为“𩫖”，像城郭四面有塔楼之形，详见“𩫖”字。同时具有外城、城墙二义，后分化为两字：加注邑旁成为“郭”字表外城义，另造从土庸声的“墉”字表城墙义。

本义为外城，内城称“城”，外城称“郭”。后也泛指城市。由本义引申指事物的外沿轮廓，后分化出“廓”字表此义。又通“椁”，指棺材外面套的大棺。又为古国名，后作姓氏。

## 邱

从邑丘声，本义指土丘地貌，多作地名。清代避孔丘之讳，“丘”姓普遍改为“邱”。

***

# 𨛜部

## 𨛜

从两邑相对，表示两邑之间的小道，是“𨞠（巷）”的本字。

## 鄉（乡）

甲骨文像两人相对就皀（簋）而食之形，是“饗（飨）、鄉、嚮、卿”的共同初文。详见“饗”字。

分化后表乡党、聚落的字在相对的两个人形上方各加一“囗”，使之变为两邑相对，隶变后作“鄉”。后成为行政区划名，也泛指城市以外的农村地区，引申指家乡。现代简化字以局部替代整体，简化为“乡”，这个构件实际是反邑的省形。

## 𨞠（巷）

本字为“𨛜”，从两邑相对，表示两邑之间的小道。后加注声符“共”，隶定作“𨞠”。后又省去一个邑，可视作从𨛜省、共声，隶变后作“巷”。

本义指里中的道路，即小巷，后世北方的“胡同”、南方弄堂的“弄”均源自“巷”字发音的流变。也特指宫廷中的小道。后泛指狭长的小街道。

***

# 日部

## 日

太阳的象形，本义即是太阳。引申指太阳光。也引申指能见到太阳的时间，即白昼，与夜相对。又作计时单位表示“天”，指太阳一次东升西落的周期，即地球自转一周的时间。引申泛指时间。

## 時（时）

甲骨文作“旹”，从日之声、之兼表义，或以为“之日”的合文。“之”有往、走义，与“日”结合会太阳运行之意。春秋时增加“又”，后讹为“寸”，与“之”合成“寺”，变为从日寺声，整字作“時”。现代简化字依草书楷化作“时”。

本义为季节，即四时之时。引申为时辰，即一昼夜的十二分之一。泛指时间、光阴。引申为时代、某段时间、当时、时机、运势、合时、恰逢、经常等。

## 早

战国文字从日棗声，后将声符省略为“朿”，可视作从日棗省声。至小篆讹为从日从甲，隶变后讹为“早”。另有观点认为“早”字是由“旦”字形变而来。

本义为早晨，引申为时间靠前的、早先、尽快等义。

## 昧

从未在日上，未兼表声，会天色将明未明之意，本义即指天快亮的时候。引申指昏暗、眼不明、糊涂、隐藏、贪占、冒犯等义。

## 昭

西周金文假“卲”为之，战国时或添加“日”旁，小篆写作从日召声，楷书作“昭”。本义为阳光明亮，泛指明亮，引申为显著、清楚、表明、开导。也通“照”，表照亮。

## 晤

从日吾声，本义为明白、通明。引申为聪敏、觉悟。通“迕”，表遇见、相逢，如会晤。

## 旳（的）

从日勺声，本义为明亮。因光亮即白，白有明亮义，所以俗体改为从白，写作“的”。由本义引申为明确、确实。也指白额头的马，此义通“馰”，所谓“的盧”即是黑白相间的马，“的”表白色，“盧”表黑色。假借为助词，此义源自“之”，“之”的古音与今“的”相近，后读音变化，“之”的读音与口语脱节，于是借音近的“的”字在口语中代替“之”。

## 晄（晃）

从日光声，初为左右结构，后多写作上下结构。本义为光明，引申为耀眼、照耀。又引申指摇动、一闪而过、游逛等。

## 旭

从日九声，本义为日出之貌，引申指初出的太阳、日出之时、光。

## 晉（晋）

甲骨文从二倒矢、从日，小篆将倒矢与日分离并讹为“至”，整字变为从日从臸，隶定为“㬜”。汉隶承袭早期未将倒矢讹为“至”的字形，隶变后写作“晉”。现代简化字作“晋”。

其构形本义说法不一：

1. 上部是两支箭，下部是箭靶的象形，两支箭接连射中箭靶，会递进之意。
2. 上部是两支箭，下部是表示太阳的“日”，二矢射日，本义为射日之箭，引申出前进、升义。
3. 上部是两支箭，下部是插箭的器具，本义是插，是“搢”的本字。
4. 《说文》认为从日臸声，上部仅作声符，训为“进”，

基本义为前进、升。又表抑制、按捺、俯，又表插，此义后作“搢”。也作国名，后成为晋国所处地理区域的代称，成为地名。

## 暘（旸）

从日昜声，本义为日出、太阳升起。“暘谷”即传说中太阳升起的地方。引申指太阳、晴天、干燥等义。又通为“昜”、“陽（阳）”。现代简化字作“旸”。

## 晵

见“启”字。

## 昫

从日句声，本义为温暖，引申指日光。后分化出加注火旁的“煦”字强调温暖义，与“昫”音义皆同。

## 晏

从日安声，本义为天清，即晴朗。引申指鲜艳华美。又通“旰”，表迟、晚。又通“安”，表平静、闲逸、温和。

## 景

从日京声，也是“影”的本字。本义指日光，也指因光线照射所产生的影子。影子义后分化出专字“影”。引申指日光照射处有形色可玩赏的事物，即景致、景色。“风景”本指风和日光，成为复合词后也泛指景色。又引申为现象、情况、时光。又由本义引申为光明、大、祥美、敬慕等义。

## 𣋌（晔）

从日从𠌶，会日光照到花上鲜艳繁盛之意。左右结构作“𣋌”，上下结构作“𣋓”，后加艸旁作“曄”、“曅”，后世以“曄”为主流，现代简化字作“晔”。

本义为光明灿烂、华美兴盛的样子。通“爗（烨）”，表示火盛、明亮。

## 暉（晖）

从日軍声，与“暈（晕）”本为一字，指日月周围的光圈，引申指光、光彩，通“煇”。现代简化字作“晖”。

## 晷

从日咎声，本义为日影，引申指光线。测量日影以划定时刻的工具也称“晷”，由此引申指时间。

## 晚

从日免声，本义为暮，即日落后的一段时间。后泛指夜晚。引申指时间靠后的、迟、一段时期将近终了、后来的。

## 昏

从日从氏，或从氐，“氏”、“氐”为一字之分化，有低、落义，与“日”结合会太阳落下之意。隶变后或因音近改从民声，作“昬”，与“昏”互为异体。

本义为日暮，即黄昏。引申为光线暗、视力模糊、头脑迷糊、迷乱、失去知觉等义。上古有抢婚习俗，男子趁夜晚昏暗时抢女为妻，故“昏”字有结婚义，此义后加女旁分化出“婚”字。

## 暗

从日音声，本义为黑暗无光，引申为夜晚、幽暗、昏昧、隐密等义。

## 晦

战国文字从日母声，小篆改从每声。“母”、“每”声符互通。本义为每月最后一天，这一天看不到月亮，故引申出黑暗、夜晚、隐晦、愚昧、掩蔽、凋零、倒霉等义。

## 旱

从日干声，本义指久不降雨导致的缺水，引申指干旱引起的灾害。又引申指无水的、陆上的。

## 昴

从日卯声，本义为星宿名，白虎七宿之一。

## 昨

从日乍声，本义为隔夜、前一天，泛指过去。一说本义即是往昔，引申为昨天义。

## 暇

从日叚声，本义指空闲时间，引申指悠闲、从容。

## 暫（暂）

从日斬声，本义为短时间、一时的。引申为临时、目前、方才、突然。

## 昌

甲骨文从日从口，指日出时呼唤他人起身干事的叫声，是“唱”的本字。后“口”变为“曰”，写作“昌”。又由日出的特点引申出明亮、美好、兴盛等义。因引申义众多，故分化出加注口旁的“唱”字表本义。“唱”又由呼唤他人劳作引申出倡导、发起义，此义后作“倡”。“昌”可通“唱”、“倡”。

## 昱

从日立声，是“翌”的分化字，表来日、次日义时与“翌”互通，详见“翊（翌）”字。“昱”又有日光义，进一步引申为照耀、灿烂，这些义项不可通“翌”。

## 暑

从日者声，与“暏”本为一字，后分化：“暏”表天亮义，通“曙”，引申为显露；“暑”表炎热义，引申指炎热的日子、夏季。

## 暴

战国文字从日从出从廾，会双手捧物在日下曝晒之意，是“曝”的本字。小篆又加“米”，作“㬥”。《说文》另收一个“曓”字，从日、出、夲、廾，与“㬥”的区别为将“米”换作“夲”，《说文》训为“疾有所趣”，即迅急、猛烈。但有观点认为“㬥”、“曓”本是一字之讹，其猛烈义是由曝晒义引申而来。隶变后字形统一作“暴”。

曝晒的本义后作“曝”。由曝晒义引申出显露义，如暴露。由猛烈义引申为凶狠残酷、急躁冲动、突然、欺凌、损害等义。又通“虣”，本指徒步（不乘车）搏斗，后演变为徒手搏击，如暴虎冯河。

## 曬（晒）

从日麗声，本义即是曝晒。引申指照耀。俗体作“晒”，为现代简化字所采用。

## 晞

从日希声，本义为干燥、晒干。引申为曝晒、破晓。

## 昔

甲骨文上部为两或三条波浪状线，下部为日。其构形本义主要有两种说法：

1. 上部像洪水之形，与“日”结合会上古洪水泛滥时期之意。本义为过去、从前。
2. 上部像肉片之形，与“日”结合会太阳暴晒肉片之意，是腊肉之“腊”的本字。假借为从前义。

由从前义引申为昨天、久远义。春秋时出现累加肉旁的“𦠡”字表干肉义，如按“昔”本义为从前的观点，则此字是从肉昔声的形声字，如按“昔”本义即是干肉的观点，则此字是因“昔”被假借他用而后造的加旁专字。后“𦠡”变为左右结构，作“腊”。

“腊”字本读xī，与臘肉之“臘”义近音不同。“臘”读là，本义是岁终举行的祭祀，后把岁终时制作的干肉称为“臘肉”，明清以后借“腊”为“臘”的简化字，于是“腊”开始有là的读音。

## 暱（昵）

从日匿声，或体从尼声。本义为日近，引申指亲近、私的。现代简化字以“昵”为正体。

## 昆

金文为“日”下有两“匕”形，其造字本义有三种说法：

1. 由“眾”分化而来，“眾”的初文是“日”下并立三人，像众人在太阳下劳作。“昆”则是下部为两个人（反写的人），与“眾”表义相同，后下部写作“比”。引申为共同、众多，又因一起劳作的人多为兄弟辈，故引申为兄。“昆虫”即是众多虫之义。
2. 日下的部分是鸟的两足，整字是神鸟载日飞行之形。本义是滚动，是“滚”的初文。加水旁作“混”表示水翻滚，后引申为浑浊、混同义。后由后起形声字“滚”替代了“昆”表本义。以昆为声旁的“輥（辊）”、“緄（绲）”、“䅙”、“棍”等都与圆形相关。而“昆虫”之昆本作“䖵”，“昆弟”之昆本作“𥊽/晜”，后均假借笔画少的“昆”字代替。
3. 整字像昆虫之形，其身体部分后讹为“日”，两足讹为“比”。本义即为昆虫，“䖵”是其异体。假借为“混”义，引申出混同、众多等义。“昆弟”之昆本作“𥊽/晜”。

主要义项有众多、共同、混同、兄长、后裔、昆虫等义，混同义后作“混”。

又借为山名，本作“昆仑”，后加山旁分化出专字作“崑崙”或“崐崘”，现代简化字又统一作“昆仑”。

## 暜（普）

从日竝（“并”的异体）声，《说文》认为“竝”是形旁，实际应是声旁，或兼表义。《说文》训为“日无色”，徐锴解释为“日无光则远近皆同”。后多用“广大、全面”义，按徐锴说则此义是引申而来，另有观点认为此义是假借而来，本字是“溥”。

## 暁（晓）

从日堯声，声旁“堯”有高义，日升高即是天明。本义为天刚亮，引申泛指明亮。又引申为明白、知道、使知道等义。

## 昕

从日斤声，本义为旦明日将出，即黎明。引申指明亮。

## 晟

从日成声，本义为明亮，通作“盛”，表兴盛。

## 昶

从日从永，“永”有长久义，“昶”即会长日之意。本义为白昼时间长，引申出明亮、长远义。也通“畅”，表舒畅义。

## 暈（晕）

甲骨文像云气环日之形，汉初多假“軍”为“暈”。小篆从日軍声，成为形声字，“軍”本义为用战车围成营垒，从軍声的字多有圆周、围绕义。“暈”与“暉”本为一字，后分化，详见“暉”字。

本义为日月周围的光圈，引申指光彩四周模糊的部分，也指色彩向四周扩散。又引申指头发昏、昏眩、失去知觉。

## 映

从日央声，异体从英声，作“暎”。本义为照亮，特指通过照射而显出。也指隐藏、遮蔽。由本义引申指衬托、阳光等。

## 曙

从日署声，与“暏”本为一字，详见“暏”字。本义为天刚亮。

## 曇（昙）

从日、雲，会云气密布之意。本义即密布的云气。又用为鸩鸟的别名。后又用于梵语译音词。

## 曆（历）

本字为“歷”，义为经过、经历。约于战国时分化出从日的“曆”字，专表历法、天象义，后引申为命运、年代、年龄等义。也通“歷”。现代简化字将“曆”、“歷”统一简化为“历”。

## 昂

从日卬声，本义为太阳升起，泛指举、抬升。也通作“卬”、“仰”。引申指高、贵、情绪高涨。

## 昇（升）

初文为“升”，是勺形量器的象形，本义为量器名。后假借为升高、登上义，或说是由用升舀取、提的动作引申而来。秦以后又分化出从日的俗字“昇”，专表太阳升起，也泛指一般的升高。又造“陞”字表登义，唐以后“陞”多只用于升官义。现代简化字将“昇”、“陞”并入“升”。

***

# 旦部

## 旦

初文像太阳从地面升起之形。后将地面写作一横，上面的“日”或与之粘连或与之分离，楷书作“旦”。

本义为太阳刚刚升起之时，即清晨。引申为光明、坦白诚恳。也引申指一天，相当于日、天。又作戏曲中女性角色的行当名，此义本字为“狚”，后俗讹为“旦”，一说本字为“妲”，而后者又是“姐”的讹写。

## 暨

从旦既声，本义是太阳初升、微微可见之时。又有完结、限制义，应是源自声符“既”的完成义。由此引申为直到、至、及，又反训为不及。又假借为“臮”，作连词，相当于和、与。

***

# 倝部

## 倝

从早㫃声，金文中假借为“韩”。《说文》本义为太阳初升光辉灿烂的样子。

## 朝

甲骨文从日、月、茻，会日月同时隐于草中之意，即早晨义。后“茻”省为上下两屮。金文将“月”变作“巜”或“川”，此形实际是“𣶃（潮）”的本字，表示早上涨潮，至战国时即分化出从水的“𣶃”字。小篆基于从川的字形，将“川”讹为“舟”，将左侧本从日从二屮的部分讹为“倝”，《说文》误解为“从倝舟声”。隶变后将“舟”又写作“月”，一定程度上回归了商代文字的本义。楷书作“朝”。

本义是早晨，引申为初始、一天。古代君主早上处理政事，此时群臣面见君主，故“朝”又引申出朝见、拜见义，进而引申指朝见的地方，也即朝廷。而每一代君主往往有自己的朝廷班底，故“朝”又引申出朝代、王朝义，即指某一君主或某一世系君主的统治时期。臣子朝见时面朝君主，故又引申为朝着，并虚化为介词。如前文所述，“朝”字在演化过程中产生了潮汐义，并为此分化出“𣶃”字，但“𣶃”字并未延续到秦汉，秦汉时出现从水朝声的形声字“潮”表此义。

***

# 㫃部

## 㫃

甲骨文、金文像旌旗飘扬之形。小篆将旗帜与旗杆分离，隶变后楷书作“㫃”。从㫃的字多与旗帜有关。

## 旗

战国文字或从㫃丌声，或再累加义符“羽”，或从㫃其声。小篆承袭从㫃其声的字形，隶变后楷书作“旗”。本义是画有熊虎的旗帜。《周礼·春官·司常》：“日月为常，交龙为旂，通帛为旃（旜），杂帛为物，熊虎为旗，鸟隼为旟，龟蛇为旐，全羽为旞，析羽为旌。”后泛指旗帜。引申为标志、象征物。又指满族的兵民一体组织，因以旗帜颜色相区别，故称“旗”，一共有八个，统称“八旗”。后用“旗”泛指满族的，如旗人、旗袍。

## 旌

战国文字或从㫃青声，或从㫃生声。小篆承袭从㫃生声的字形，隶变后楷书作“旌”。本义为旗杆上端饰有旄牛尾或兼饰有五色鸟羽的旗子。后泛指旗帜。因外形与使者所持的符节相似，故也用作节，如旌节。引申为表彰、表明、识别。

## 旂

初文从㫃𰕣声，西周时或从斤声，后世从之。本义是杆头悬铃、画有二龙相交的旗帜。又泛指旗帜。在泛指旗帜时，可与“旗”通，曾作为“旗”在旗帜义上的异体字。

## 施

从㫃也声，本义为旗帜飘动貌。假借为给予，引申为施舍、恩惠。又假借为“𢻫”，“𢻫”从攴也声，本义为敷，即布散、颁布。“施”由此引申为实行、施加、运用、设置等义。

## 游

甲骨文作“斿”，从㫃从子。西周金文或加彳旁，春秋时分化为两种字形：其一从辵，“彳”、“辵”作义符互通，此形楷书作“遊”；其二从水，此形楷书作“游”。

《说文》本义为“旌旗之流（旒）”，即旌旗上的飘带。另有观点认为本义应为督导，按其初文像一子立于旌旗下之形，与“纛”、“翿”、“督”音义皆近，而旌旗之流义是假借为“旒”的用法。

分化出的“游”字从旌旗之流引申为在水中行动，此义或认为是假借为“汓（泅）”。又引申为河流、流动、不固定。又引申为游行、游逛、嬉戏、交往等义，这些义项也可作“遊”。但与水相关的义项只能用“游”。

## 旋

甲骨文从㫃从足，会人在旗下周旋之意。金文省去“足”上部的“口”形，变为从止，表义无别。小篆从㫃从疋，“疋”是“足”的分化字。隶变后楷书作“旋”。

本义为人随旌旗旋转，泛指旋转。引申为回还、斡旋、圈子、转圈的。又引申指时间短，如“旋即”，此义或说是由源自“旋踵”一词。以上义读xuán。现代又作“鏇”的简化字，义为圆炉，也指转圈切削，此义读xuàn。

## 旅

甲骨文从㫃、从，商代金文或将“从”写作三人，表示多人。会众人聚集在旗下之意。又或累加車旁，表示兵车，也兼表声。西周金文或从㫃、从，或从从㫃、从、車，或从㫃、从、辵，或仅从㫃、車。小篆采用从㫃、从，隶变后“从”讹变较大，楷书作“旅”。

本义为军队编制单位，也指旅的将官。引申泛指军队。引申为众多、列阵陈列、陈述等义。又假借为“路”，表示道路，引申为旅客、旅行、旅舍等义。又假借为“侣”，表示伴侣、结为伴侣。

## 族

从㫃从矢，会以旗帜召集军队之意。本义是聚集，是“簇”的本字。又用为箭头义，此义是“鏃（镞）”的本字，为作区分后孳乳出从金的“鏃（镞）”字表此义。由聚集义引申指多人聚集而成的社会组织，如家族、民族，后又演变为行政单位名。进而引申指有共性的一类人或事物。也作族人的量词。又特指灭族，刑罚名。由本义又引申指众多。

***

# 冥部

## 冥

战国诅楚文作从日从冖从大，会人头顶的太阳被覆盖之意，“冖”兼表声。秦文字将“大”讹为“六”，《说文》解为“从日从六冖声”，其对本义的解说基于从六的判断，不确。

本义是幽暗，引申为黑夜、天空、地下、幽深、奥妙、渺茫、静默、愚昧、潜心等义。又通“溟”，如“北冥”指最北方阳光照不到的大海。

***

# 晶部

## 晶

初文像三星之形，是“曐（星）”的初文，本义即是星。引申指光亮。后分化出加注声旁“生”的形声字“曐”表本义，而未加声旁的初文用以表光亮义，其星形后变得与“日”相同，致《说文》解为从三日。

由光亮义引申指明亮、闪耀。又引申为清明、明净义，此义或说是通假“晴”字而来。进而引申指透明的矿物，如水晶。

## 曐

由“晶”分化而来，“晶”像群星之形，本义即是星。甲骨文中已出现累加声旁“生”的字形，但多假为“夝（晴）”字，表示晴天。入周以后其形旁的星形数量固定为三个，后演变为“曐”。战国时或将星形省为一个，即将“晶”省作“日”，成为《说文》或体，楷书作“星”。现代以“星”为正体。

本义即是星星，一般指日、地、月之外的发光或反射光的天体。引申为星形物、微小的事物、小点、多而分散、明丽、微小、微小事物的量词等。

## 曑（参）

商代金文像一个跪着的人头顶三星冠之形。西周金文或增加“彡”作声符。金文中多假借为“三”字。春秋时或省去人形，至战国或将人形与“彡”相连，《说文》将相连的人形与“彡”视作“㐱”，解为“从晶㐱声”，隶定作“曑”。《说文》或体是承袭将星形省为圆形的写法，此形隶变后楷书作“參”，成为主流，现代简化字依草书楷化作“参”。

构形本义说法不一：

1. 按《说文》从晶㐱声，本义为星名，即参星，“㐱”仅作声符。
2. 本义为星名，即参宿三星，初文人头顶的三星即是此形，而“彡”除了表音，也可视作“三”之讹形，同样强调三星之义。
3. 是“篸”的本字，初文像人头上戴簪笄之形，后加的“彡”为羡符。
4. 像人参之形，上半部像人参在地上的部分，下部为根茎。本义即是人参。

目前以本义为星宿名的观点为主流，而人参义的本字应该是“薓”，后假借音近的“參”字表示，并分化出从艸的“蔘”字。以上义读shēn。引申为三，此义读sān。进一步引申为罗列、并立、间杂等义，又引申为加入、探究领会、查考、弹劾、下级按礼节晋见上级等。以上义读cān。又音cēn，仅用于联绵词“参差”，此义或说本字为“篸”或“槮”。

## 曟（晨）

从晶辰声，或体省作“晨”。本义为房星，二十八宿之一。或假“辰”字表房星义。“曟”又假作“䢅”，表早晨义，详见“䢅”字。现代将“曟”、“䢅”均简化为“晨”。

## 曡（叠）

从晶从宜，“宜”从多，而“多”从二肉，故“曡”有多义。王莽新朝认为从三日太盛，改为三田，作“疊”。现代简化字作“叠”。

本义是重叠，引申为折叠、接连，也作量词。

***

# 月部

## 月

初文像半月之形，或在内部加一点，与“夕”本为一字，形义均混用，至小篆才与“夕”分化。

本义即是月亮。引申作时间单位，表示月亮盈亏周期。又引申为按月的。也指女性月经，因其周期与一月相近。又指颜色或形状像月的事物。

## 朔

从月屰声，本义为阴历每月初一，这一天看不到月相，是月从亏转盈的起始。或认为“屰”表义，“屰”是“逆”的初文，此处表示月相逆转，可备一说。

由本义引申为初始、幽暗。周代每月朔日诸侯要到祖庙禀告政事，称告朔，也指周天子每年秋冬向诸侯颁发来年历书。又指北方，此义或说是假为“逆”字，古以南为正，北也是“背”的初文，故以逆表北，后假“朔”字为之，此说暂无确论。

## 朏

从日、出会意，本义为新月初现，历法中特指每月初三。

## 霸

从月䨣声，本义指一种月相，此义也作“魄”，但所指的具体日期有争论，读pò。其声符“䨣”《说文》训为“雨濡革也”，指雨沾湿皮革而隆起，由此推测从䨣声的“霸”字所指的月相应与此意象相关，可能是月初转亮、转白之时，且所通的“魄”字从白声，也有此意。“霸”、“白”相通，也解释了文献中“霸”通“伯”的用法。

“白”是“伯”的本字，从人的“伯”字是后起的分化专字，最初借“白”表首领、排行之长之义。而“霸”可通”白“，故也以“霸”为之，如春秋争霸、霸主、霸王，均是此义。引申指才能过人、凭借武力刑法统治的政策、依仗势力横行的人、用强力占为己有、蛮横等。除月相义外，其他义今均读bà。

## 朗

从月良声，本义是月光明亮，泛指明亮。引申指声音响亮、清楚、高洁、明智等义。

## 朓

从月兆声，本义为晦日（农历每月最后一天）月亮出现在西方，晦日本应看不到月亮，故“朓”是不正常的现象，古人视作异变之兆，实际多为历法误差所致。

## 期

春秋金文或从日其声，或从月其声，战国时或将声旁变作“几”或“丌”。小篆作从月其声，隶变后楷书作“期”，异体作“朞”、“㫷”等。现代以“期”为正体。

本义为会合、约会。引申为约定的时间、一段时间、等待盼望、机运、限度、料想、必定。以上义读qī。又引申指满一年、一月、一日，又指期服，即古代一种丧服，也指服丧，以上义读jī。

## 朦

从月蒙声，本义为月亮被云遮挡模糊不清。“蒙”有覆盖、模糊义，“朦”是其加旁分化字。另有从肉蒙声的“朦”字，秦晋方言表示大貌，字形与从月的“朦”混同。

## 朧（胧）

从月龍声，一般指“朦朧”，见“朦”字。现代简化字作“胧”。

***

# 有部

## 有

初文为“又”，像右手之形，假借为持有、拥有义。西周金文分化出从肉的专字，至小篆将“肉”讹为“月”，《说文》误解为从月又声。隶变后楷书作“有”。

由拥有义引申为存在、发生，又可强调所拥有的东西多，又用同“或”，也表示表示不定指、达到一定数量，又虚化为助词等。

***

# 朙部

## 朙（明）

甲骨文从日从月（夕），或从囧从月（夕）。从日者，会日月光照之意，从囧者，会月亮照到窗户之意。此二形分别演化为“明”、“朙”，《说文》小篆以“朙”为正体，而后世多用“明”。秦汉时又出现将“囧”讹为“目”的异体，写作“眀”。现代以“明”为正体。

本义是光照。引申为明亮、点燃、天亮、明显、公开、清晰、明白、清明、明智等。又引申为下一时间单位，如明日、明年等。

***

# 囧部

## 囧（冏）

像窗牖透光之形。本义为本义为窗户明亮，引申为明亮。也假借为“炯”。后有俗体字作“冏”，现代以“冏”为正体。

二十世纪网络语言中，用以指郁闷、无语、尴尬等，源于“囧”字形与人的此类表情形似。在尴尬的语义上，又可视作与“窘”通。

## 盟

甲骨文从囧皿声。西周金文或加月，上部变为“朙”，可视为声旁。或在皿上加一横，变为“血”。小篆从囧从血或从朙从血。隶变后仍从皿不从血，楷书作“𥁰”、“𥂗”、“盟”等，现代以“盟”为正体。

本义为诸侯立誓缔约的仪式，即歃血为盟。仪式用到朱盘玉敦，作盛血、盛食的器皿，故初文故皿，“囧”有光明义，此处会公开之意。又因仪式中需要歃血，所以所从的皿曾一度讹为血。

由本义引申泛指发誓，也指所立的誓约，又指依约结成的联合组织。又引申指结拜的。作动词时旧读míng，今读méng。

***

# 夕部

## 夕

初文像半月之形，或在内部加一点，与“月”本为一字，形义均混用，至小篆才与“月”分化。“月”专表月亮，“夕”专表新月初升之时，即傍晚。

由傍晚引申为夜晚、年末或月末。又指晚上的潮水，此义后作“汐”，与之相对的是早上的潮水，初用“朝/𣶃”，后作“潮”，潮汐并称泛指海水涨落。

## 夜

金文从夕、亦省声，夕内或加一点，先秦夕、月不分。春秋时所从“亦”或不省。小篆依初文写法，隶变后“亦”的左点与左撇合成“人”形，右捺与夕相连，楷书作“夜”。

本义即是夜晚，与昼、日相对。引申为昏暗、夜行、夜色等，也作夜晚的量词。

## 夢（梦）

甲骨文从爿，像床之形，旁有一倚床而睡的睁目人形。表示睡着而有所知觉，即做梦。战国文字改从夕，强调睡梦在夜间之意。《说文》解为“从夕，瞢省声”，所谓的瞢省声实际是睁目人形的讹变。隶变后楷书作“夢”。

《说文》将此字本义训为“不明”，另收“㝱”字表做梦义。“夢”、“㝱”应是一字之分化，均由甲骨文中从爿的初文演变而来，“不明”义可能是引申义，由睡梦引申为迷糊、不清醒，进而引申为不明。与表目不明的“瞢”同源，或假“瞢”表睡梦义。

由睡梦义引申为幻想、愿望，由不明义引申为昏乱、蒙昧。宋元时出现俗体字“梦”，为现代简化字所采用。

## 夝（晴）

从夕生声，《说文》本义为“雨而夜除星见”，即夜里雨后天空清朗。至楷书又造从日青声的“晴”字，泛指雨雪停止、天空无云或少云，不分昼夜，表义较“夝”更广，又或作“暒”、“精”。现代以“晴”为正体。

## 外

甲骨文与“卜”同形，造字本义尚不明确。西周金文增加月旁，古月夕不分，小篆明确为从卜从夕，隶变后楷书作“外”。

一种观点认为“月”为声旁，古“外”、“月”同音。而《说文》认为从卜、夕，表示晚上占卜，属于例外情况，以此会意。

基本义是外边、表面，与“内”、“里”相对。泛指一个具体或抽象范围以外。引申为外在仪容等。《说文》训为远，由空间的远引申为时间的远、人际关系疏远，引申为排斥、抛弃等。

## 𡖊（夙）

甲骨文从月从丮，像人两手捧月之形，会敬拜之意。西周金文“丮”下部演变为从女之形。小篆从夕从丮，隶定作“𡖊”。秦隶将“丮”讹为“凡”，下从月。汉隶从夕，楷书作“夙”。

本义是早敬，有早和敬双重含义。引申为早晨、早先、早年、平素、经久的、肃敬等义。《说文》古文从人㐁声，实际是“宿”字的省形，假借为“夙”。

***

# 多部

## 多

甲骨文为重肉之形，“肉”与“夕”形近但不同，以重肉会多之意。后世字形变化不大，《说文》误解为“从重夕”。

本义是重复、众多。引申为深厚、重视、欣赏、超出、多余、过分等，又作副词表程度、大多、仅仅等。

## 㚌（伙）

从多果声，或体作“夥”。本义为多，是齐宋、楚魏交界地区的方言。明清以后被借为“伙”，用于其同伴、共同、集体等引申义，以分化“伙”的繁多义项。“伙”字是在唐宋时期由“火”分化而来，指兵制人员单位，十人为一火，共同起火做饭，后用“伙”字表此义。引申为饭食、工具、同伴、集体、共同等，也作量词。借“夥/㚌”表同伴相关义项后，“伙”就专表饭食等含义。现代简化字又将“夥/㚌”的假借义重新归于“伙”，“夥”只用于其本义，即众多义，而“㚌”则作为异体字并入“夥”。

***

# 毌部

## 毌

春秋金文像二物用线贯穿之形，是“貫（贯）”的本字，战国时省去一半，后世作“毌”。本义为贯通、贯穿，此义后作“貫（贯）”。又用于地名、姓氏。

## 貫（贯）

初文为“毌”，像穿物之形，表示贯通义。战国时分化出从貝的“貫”字，强调与钱贝有关，楷书作“貫”。

由本义引申为穿钱的绳子，也指用绳串连的钱，一千文为一贯。进而引申出积累义。又由贯穿本义引申为统一、条理、序次、隶属、通过、经过、实行、事务、侍奉、灌注、满、熟练、习惯等义。习惯义后作“慣（惯）”。

## 虜（虏）

战国文字从虍从毌从力，虍也是声符。本义为战俘，“毌”本义是用绳贯穿，此处表示用绳索拘束。隶变后所从的“毌”讹为“田”形，下部整体似“男”，楷书作“虜”。现代简化字作“虏”。

又战俘义引申为俘获、劫掠、仇敌、敌人。因战俘常作奴隶，故也引申指奴隶。又引申指蛮族。

***

# 𢎘部

## 圅（函）

甲骨文像矢函之形，外为有提手的箭囊，内部是矢（箭）。西周时将“矢”倒置，至小篆，将倒置的“矢”讹为“𢆉”形，隶定作“圅”。隶变后进一步讹变，楷书作“函”。《说文》训为舌，此义实际是“顄”的假借字，俗作“肣”，从肉今声。

本义为箭囊，即装箭的容器。引申为一般的用于装物的盒子、封套等。装信的称信函，由信函又引申为信件、文书等。由装套容器义又引申为铠甲、制造铠甲的工人，作动词表示容纳、包含、装盛、寄信等。包含义与“含”通。

## 甬

初文构形说法不一：

1. 像上有系钮的钟形，本义即是悬挂钟的钟鼻。
2. 是“用”加指事符号，以与“用”相区别，义与“用”近，可表桶、使用等义。
3. 是从人用声的形声字，是“俑”的初文。

可指钟上的系钮，也指钟。又用作量器、盛器名。又指两旁有墙遮蔽或楼房间有棚顶的通道。又指仆役、佣工，此应是“佣”、“庸”的假借。

***

# 𠧪部

## 𠧪（卣）

初文是有提梁的圆腹酒器的象形，或加皿旁，或从二𠧪，或从三𠧪。隶定作“𠧪”，隶变后楷书作“卣”。本义是酒器名。

## 栗

甲骨文像栗树结果，果实带刺之形。至春秋时，三个果实已经变形为与“𠧪”接近。《说文》古文承袭此形，但将最上端的果实讹作“西”，成为从木从西从二𠧪。战国时或将果实省为一个，至小篆写作从木从𠧪，隶定为“㮚”。隶变后上部讹为“西”，整字作“栗”。

本义为树名，也指栗树的果实，即栗子。引申指果实饱满。又因栗树质地坚硬，故引申指坚实、威严。又有因恐惧或寒冷而发抖的含义，此义或说是假借义，或说是以栗子多刺比喻毛发直立的样子。由此分化出从心的“慄”字表颤抖义。引申指寒冷，分化出从仌的“凓”字表此义。

## 粟

甲骨文为粟穗下垂、旁有谷粒之形。战国时下部从禾，上部变得与“𠧪”形近。小篆将禾与谷粒整体讹作“米”，也可能是因义重构。隶变后上部讹为“西”，整字作“粟”。

本义为谷类子实的统称，也泛指粮食。后专指小米，也称谷子。引申指细小的东西、俸禄，又作古代容量、长度单位。

***

# 齊部

## 齊（齐）

初文像谷穗上端齐平之形。战国时下部增加两横，《说文》认为这部分表示地，一说此为“二”表声，此形隶定为“亝”。小篆以后拉长笔画，隶变后楷书作“齊”，异体作“斉”，宋元时进一步简化作“齐”，为现代简化字所采用。

本义为谷穗整齐，后泛指整齐。引申为完备、等同、一致、共同、整治、使一致。又假借为“齋（斋）”，表斋戒义，由此引申为肃敬、庄重。又作地名、国名、姓氏。

***

# 朿部

“刺”的初文，详见“刺”字。

## 棗（枣）

从二朿重叠，表示有芒刺的枣树。本义为枣树，也指枣树的果实。现代简化字作“枣”，下部的两点为重文符号，此写法始见于清初。

## 棘

从并朿，本义是丛生的小枣树。又指酸枣树。后泛指有芒刺的草木。引申为尖锐、艰难。也假借为“戟”。

***

# 片部

## 片

构形本义有两种观点：

1. 像“木”的右半，表示把木头分为两半。
2. 甲骨文中“片”、“爿”都像竖写的床形，古文左右无别，都是“牀”的初文。

《说文》本义为“判木”，即将木头一分为二。引申为分开、半边、单方、薄扁物体、切成薄片等义，又作量词用于薄片物体、大面积事物等。

## 版

从片反声，本义指筑墙时所用的夹板。古代筑墙先立两块木板，往中间填土夯实，再撤去木板，这种技术称为版筑，所用的木板即称作“版”。又引申指简牍、书籍、户籍、地图等书写于木板上的东西。印刷术出现后，因用木板印制，故指刊刻的可印刷的板子及相关事物，进而引申为印刷物排印一次。由本义又引申作墙的长度单位。

## 牘（牍）

从片𧶠（yù）声，隶变后“𧶠”与“賣”形混，现代简化字作“牍”。本义为书写用的木片，也引申指所写的文字内容，如文书、书信等。

## 牖

从片、户、甫。徐锴认为“甫”为声符，不确，甫、牖古音不近，应是义符。片指木片，户指窗户，甫或以为是“用”字之讹，表示通的意思。

本义为窗户。在墙曰牖，在屋曰窗。先秦多用“牖”，而少见“窗”。

***

# 鼎部

## 鼎

初文为鼎的象形，本义即是烹煮器具鼎，也假借作占卜义，后分化出从卜鼎声的专字“鼑”表占卜义，但“鼎”、“鼑”常互相混用。战国以后，“鼑”多省作“貞”，即将原声旁“鼎”讹作“貝”。战国表食器义时又或从金貞声作“鍞”，或从皿鼎声，汉代金文或从金鼎声作“鐤”。秦汉以后，“鼎”与“貞”基本分化，食器义用“鼎”，占卜义用“貞”。

“鼎”本义为烹煮器具，一般三足两耳，也有方形四足。后也用于祭祀和宴飨，又发展为权力象征，又兼做礼器。引申指王位、重臣、盛大。由三足鼎引申指三方并立对峙。又借为“貞”字，详见“貞”。

***

# 克部

## 克

初文构形说法不一：

1. 像甲胄之形，古代胄多作战利品，以此表示战胜义。
2. 下部像野兽，上部像石斧，表示用石斧杀死野兽并剥皮，本义为战胜。
3. 《说文》认为象屋下刻木之形，是基于小篆讹变后的字形附会而来，与初文不合。

一般认为本义是战胜，引申为胜任，进而虚化为助动词表示能。又引申为抑制、克服、削减、完成等义。又假借为“刻”表示限定时间，如克期、克日。又分化出从力的“勊”字，本义为极其辛劳，并承担克的大部分含义。后“勊”讹变出俗体“剋”、“尅”，后世通行“剋”，而“勊”、“尅”渐废。后世“剋”、“克”混用不分，但能够义一般多用“克”不用“剋”。现代简化字将“剋”读kè时并入“克”，但读kēi时不做简化，表示打架、训斥等义。

***

# 录部

## 录

甲骨文像辘轳汲水之形，应是“辘”的象形初文。讹变后象形意味减弱，小篆隶定为“𢑗”，隶变后楷书作“彔”、“录”。甲骨文中假借为“麓”，金文用为“禄”。现代作为“錄”的简化字。

***

# 禾部

## 禾

初文像谷穗下垂之形，后世字形变化不大，隶变后将下垂的谷穗写作一撇，楷书作“禾”。本义指谷子，即粟。后泛指谷类作物。也专指谷类的穗、苗、茎秆，或指水稻植株等。

## 秀

石鼓文从禾从弓，此形汉隶仍有承袭。小篆将“弓”讹作“人”形，隶变后又讹为“乃”。整字楷书写作“秀”。

本义不明，《说文》对此字的解释因避光武帝刘秀讳而空缺。或说本义指不开花而结果，一说指抽穗或开花。东汉时为避刘秀讳将秀才改为茂才，故“秀”应与“茂”义近。

基本义是禾类植物抽穗开花，也泛指植物开花、结籽。引申为成长、显露、高出、炫耀、茂盛、优异、秀美、聪明、花、茂盛的草木、优异的人等。

## 稼

从禾家声，本义是禾穗。禾之秀实为稼，茎节为禾。也泛指谷物。引申为耕种、农事、种田的技能等。种曰稼，敛曰穑。

## 穡（穑）

本字为“嗇（啬）”，本义为将麦子收入粮仓，即收获粮食，引申泛指农事、耕作，详见“嗇”字。因“嗇”字常用于爱惜、节省、小气、贪图等引申义，于是又造从禾的专字“穡（穑）”表本义。

## 穜（种）

从禾童声，《说文》训为“埶”，本义是种植。引申为养殖、接种、散布等。后世因“童”、“重”音形相近，常将“穜”与“種”混。现代简化字作“种”。

## 種（种）

战国文字从米重声，小篆改为从禾重声，《说文》训为“先穜后孰”，即先种而后熟的谷物。通作“重”。引申为植物的种子，进一步引申为原因、后代、种族、类别等。后世常与“穜”混，讹作种植义。

## 稑

从禾坴声，或体从翏声，作“穋”。本义为“后穜先孰”，即后种而先熟的谷物，与“先种后熟”的“種”相对，并称“重穋”、“種稑”。

## 稺（稚）

从禾屖声，汉代文字“屖”与“隹”形近，故又讹为从禾隹声，写作“稚”。

本义是迟种的谷物，“遟”、“稺”义通，引申为幼禾。进而引申指幼小、细小、儿童等。

## 稠

从禾周声，“周”有密义，“稠”本义为禾苗多而密。后泛指众多、繁密，引申指浓厚。

## 稀

初文为“希”，从巾爻声，或说爻兼表义，本义为麻布织得不密，即稀疏，引申出少、罕见、企盼、仰慕等义。后分化出从禾希声的“稀”字，本义表禾苗稀疏，后承担了“希”字的稀疏、少、罕见这些义项。而“希”则逐渐只用于企盼、仰慕等引申义。

## 穆

西周金文像谷穗饱满之形，一说像花朵下垂之形，下部或增加“彡”作饰笔。至《说文》小篆，将谷穗部分和“彡”整体讹作“㣎”，与禾秆分离，构成所谓“从禾㣎声”，而“㣎”本不独立成字，是从“穆”字中强行剥离出的构件。《说文》将“㣎”训为“细文”，应是“穆”的引申义。

《说文》本义为“禾”，此义未见于出土文献和传世文献。文献中多用为“华美”、“幽微”等义。结合其象形初文，其造字本义可能是花朵华美，其后增的“彡”即有纹饰、华彩之意。故引申出华美、美好、温和、和睦等义。而“幽微”义或说是因声通“缪”而来。又引申为严肃、恭敬。

## 私

初文为“厶”，为手臂环抱的象形，表示据为己有，本义即是私有。后分化出从禾厶声的“私”字，本义为私人拥有的禾，后假借为“厶”，私行而厶废。引申为私人、自己、独自、亲属、秘密的、非法的、偷偷地、偏爱、贪爱等义。

## 稷

战国金文从示畟声，作“禝”。小篆从禾，作“稷”。本义为粮食作物名，但具体所指有争议，或说是谷子，即今之小米，或说是高粱。现代则作为独立物种，粘者称黍，不粘者称稷。由本义引申泛指五谷，又指五谷之神，与土地神“社”并称“社稷”，因涉及祭祀，故战国文字从示。又引申为主管农事的官。

## 穧

从禾齊声，本义指收割后丢在田地里还未收拾的谷物。也泛指收获的谷物。又用为容量单位。

## 秫

初文为“术”，像禾苗之形，本义指黏黍，即一种有黏性的谷物。后加禾旁分化出“秫”表此义。今指黏高粱，或泛指高粱。

## 稻

春秋文字从禾，右侧上部为爪（手形）持一棍状物、下部为臼，此构件或认为即是“舀”的古文，在此作声符。本义为稻谷，一种需要舂捣脱壳的作物。战国时形旁由禾换作米，右侧则省去所持之物，变为后世的“舀”形。小篆作从禾舀声，隶变后楷书作“稻”。

此类作物古时称粘者为稻，不粘者称秔，后世一并称“稻”。

## 稌

从禾余声，稻之粘者为稌。又指粳稻。

## 移

从禾多声，本义为禾苗随风摇摆的样子。《说文》训为“禾相倚移”，“倚移”即是“婀娜”的古音。引申指人的摇晃。假借为“迻”，表示移动，引申为变动、转移等。

## 穎（颖）

从禾頃声，本义指禾穗的末端，也借指禾穗。由本义引申指尖端、锋芒、毛笔的锋毫，进而引申为突出、杰出、聪惠。又指刀把末端的圆镮。

## 𥝩（穗）

从爪从禾，会用手采穗之意，或以为此是“秀”字。《说文》或体是从禾惠声的形声字，为后世文字所本。本义是禾穗，引申指穗状物。

## 秒

从禾少声，“少”与“小”为一字之分化，在此兼表义。“秒”本义为谷物种子壳上的芒，引申指细微、末端，也作长度和重量单位。现在用作时间和角度单位。

## 穫（获）

从禾蒦声，与“獲”同为“蒦”的分化专字。初文为“隻”，从又从隹，会擒获意。战国时将“隹”换作“雈”，整字作“蒦”，“雈”本义指猫头鹰类有毛角的鸟，此处与“隹”会意相近。秦文字分化出从犬的“獲”和从禾的“穫”，前者表示猎获，并引申泛指获取等，后者则专表庄稼的收获。后世也借用“獲”表收穫义。现代将“獲”、“穫”一并简化为“获”。

## 積（积）

从禾責声，本义为聚积粮食，引申泛指堆积、储藏，引申为累积、积习、滞留、长久等义。

## 秩

从禾失声，本义指堆积谷物时依循的次第。泛指一般的秩序、次第。引申为等级、品级、官职、俸禄、常态等义。

## 穅（糠）

初文为“康”。甲骨文至战国文字均从庚，下有小点。“庚”字构形本义尚有争议，或说像悬钟，或说像扬糠的风柜，“庚”在此也作声符。至小篆，下部的小点讹为“米”，隶定作“𥹺”。汉隶不依小篆，仍承袭旧形，隶变作“康”。《说文》小篆又有累加禾旁的“穅”字，专表谷皮义。后世替换形旁，改从米，作“糠”。而不加形旁的“康”字多用于和乐、安定义，并由此引申出健康、广大、富足等义。或说“康”本义即是谷皮，后假借为和乐、安定等义。或说和乐、安定是“康”的本义，而“穅”、“糠”仅是以“康”表声的形声字。

## 稭（秸）

从禾皆声，或体从禾吉声，作“秸”，又或作“鞂”、“䕸”。本义为农作物去掉穗和外皮后剩余的茎秆。现代以“秸”为正体。

## 稈（秆）

从禾旱声，或体从干声，作“秆”。与“稾”互训，本义为禾茎。现代以“秆”为正体。

## 稾（稿）

从禾高声，初为上下结构，后或改为左右结构，作“稿”。本义为禾茎。因秸秆多凌乱弃置，故引申指初拟的不正式的文本或图画，“草稿”一词中“草”和“稿”的用法类似，都有散乱义。

## 秧

从禾央声，《说文》训为“禾若秧穰也”，即禾叶繁茂的样子。约唐代以后多俗用以指稻的幼苗，泛指植物可移栽的幼苗。引申指栽种。今“秧歌”之“秧”，或说是通“禳”而来。

## 年

甲骨文像人负禾之形，会丰收义，“人”也兼表声。西周金文或将“人”换为“千”，表音相近。后世文字承袭从禾千声，此形楷书作“秊”。汉代隶变后将“禾”的最后两笔连为一横，并将“千”的第一笔与主体分离，写作一点，整字楷书作“年”。

本义指丰收、收成。古代生产力低下，谷物成熟周期要经历春夏秋冬，于是“年”也用于时间单位，约等于一岁。但历法中“年”与“岁”不完全相同：“年”是农历（阴阳合历）概念，指两个正月初一的间隔；“岁”是太阳历概念，指两个冬至的间隔，即现代的回归年。一年包含12或13（闰年）个朔望历月，一岁则固定为365.2422日。农历置闰的目的即是使年的平均长度趋近于岁。“年”由时间单位进一步引申指时代、年龄、人生阶段、一年一度等。又特指年节，即春节，如过年、拜年。

## 穀（谷）

从禾㱿声，“㱿”是“壳”的本字，有坚硬外皮义，故“穀”本义指有壳的农作物，用作庄稼和粮食的总称。引申为食物、进食、供养、生长等义。现代简化字并入“谷”。

## 稔

从禾念声，本义是谷物成熟。引申指一次收成。古代生产力低下，谷物基本是一年一熟，故也引申为“年”，与“年”字的引申过程类似。由本义引申指熟悉、事物积久养成、素来、艳美等。

## 租

从禾且声，本义是田赋，即农产品收获后需交纳的年贡，与“税”互训。引申泛指赋税。作动词表示征收租税。租税可看作是农民在使用土地后向土地所有者（国家）交纳的“使用代价” ，故又引申出租赁义，即让渡事物的使用权并换取金钱或其他回报的行为。

## 税

从禾兑声，本义是田赋，与“租”互训。引申泛指赋税。又引申为利息、租赁、买卖等义。又假借为“脱”，表释放、休止等义。又假借以为“繐”，指细疏布制的丧服。

## 𥡃

从禾荒声，是“饥荒”之“荒”的分化专字，表示收成不好、凶年。“荒”本义为田地荒芜、杂草丛生，引申指收成不好，造“𥡃”专用于此引申义。但后世仍多用“荒”字，“𥡃”渐废。

## 穌（稣）

金文从魚从木，小篆改从禾。《说文》本义为“把取禾若”，即耙取禾苗。又有复活、苏醒义，也通“蘇”，详见“蘇”字。“耶稣”译名用此字也是取其复活义。

## 稍

从禾肖声，《说文》训为“出物有渐”，所言晦涩，或说本义是渐进，或说本义是禾末，又或二者相联系表示庄稼渐渐抽穗。引申指逐渐、微小、略微。引申指俸禄，如稍食，但究其本意是小，相当于“小钱”。又指赌本，也作“梢”。

## 秋

甲骨文为一种昆虫的象形，多认为是蟋蟀或蝗虫，因此两种昆虫均活跃于秋季，故借指秋季，此形隶定为“𬟏”，上部表示触角。或体从火，其所会之意或说是秋季烧荒以备播种，或说是焚地以杀灭害虫。《说文》籀文又累加“禾”旁，突出秋季谷物成熟的特征，同时将昆虫形讹作“龜”，此形隶定为“𪛁”。春秋战国文字多省去昆虫形，写作从禾从火，左右位置不定。战国时又或累加日旁，这一时期表季节的春、夏、秋、冬多从日。小篆字形左火右禾，隶变后固定为左禾右火，楷书作”秋“。

商代即借为季节名，其时一年只有春秋，没有冬夏。西周以后确立四季，“秋”位于春冬之间。引申作时间单位，指一年，又泛指某一时期、时机等。又指作物成熟、收成、破败。

## 秦

甲骨文从午、从廾、从秝。“午”是“杵”的初文，“廾”为两手，两手握杵，会舂义。也可认为是从秝从𦦓（舂）省。战国文字或省去廾。小篆不省廾，而省去一禾，作从禾从舂省。隶变后上部变为“𡗗”，整字作“秦”。

从字形上看，本义似乎应是举杵舂禾，但未见此用法。《说文》本义为国名，因此地适宜种禾，故从禾/秝。一曰为禾名。也可能是本为禾名，后假借为国名。由国名固定为地名，后世用为姓氏。

## 稱（称）

先秦文字均作“爯”，从爪从冓省，像手提一条鱼之形。小篆累加禾旁作“稱”，后世字形变化不大，现代简化字作“称”。

《说文》将“爯”训为“并举”，将“稱”训为“銓”，即衡量轻重的器具。但先秦时均借“爯”表“稱”义。“稱”又引申作动词表示量轻重，进而引申出适合、符合、均等、对称等义。表适合、顺遂义时通“趁”，但二者并非假借关系，而是不同源的近义字。又假借为“偁”，表示称颂、称扬，引申为称呼、述说、名称等义。又假借为本字“爯”，表示举，引申为举荐、兴起。因“稱”引申义繁多，有后起俗字“秤”表衡量轻重器具的本义。

## 科

从禾从斗，或认为“禾”也表声，会衡量谷物之意。本义为品类、程度。引申为条款、法式、法规、查考、审理、征发赋税等义。传统戏剧中“科”又专指夸张滑稽的肢体动作，与指代诙谐语言的“諢（诨）”一并组成戏曲中的逗趣元素，称插科打诨。

## 程

从禾呈声，本义为长度单位，引申为度量衡的标准规格，泛指度量衡。引申为法度、标准、章程、限度、距离、一段路、过程、衡量、考核等义。

## 穩（稳）

从禾、隱省声，“穩”、“隱”古音同，同属影纽文部。《说文》训为“蹂榖聚也”，所言晦涩，一种解释是将搓蹂的谷粒聚拢，一说是蹂践聚集的谷粒使秕稃（瘪粒和谷壳）与米分离。民国《续修盐城县志》：“稻秕稃聚者谓之穩”，即是说“穩”指聚拢的秕稃。结合后世将扬场后分离出的成堆的谷壳碎屑称为“穩子”，或称“偃子”，这应该就是“穩”的本义。“偃”与“穩”古音近，可能是讹字。

后世常用的安稳义是通假“隱”字而来。由安稳义引申为稳固、稳重、稳妥、使安稳等。有俗字“稳”，是草书楷化而来，为现代简化字所采用。

***

# 秝部

## 秝

从二禾，本义指禾苗间距稀疏均等。后世歷歷可数等词本字应是“秝”，后用分化字“歷”代替，“秝”字渐废。

## 兼

像手持二禾之形，会一并、连同之意。兼持二禾，秉持一禾。引申为合并、相同、积累、加倍、穷尽等义。

***

# 黍部

## 黍

甲骨文是黍这种植物的象形，或加水旁。金文将象黍之形的部分省作“禾”，成为从水从禾。战国时或将“水”变作若干小点。汉代又或将“水”讹作“米”。《说文》小篆在“水”上又赘加“冂”形，《说文》解为“从禾、雨省声”，与初文不合。楷书沿袭小篆字形，写作“黍”。

本义为粮食作物名，去壳后称黄米，比小米稍大，煮熟后有黏性，可酿酒。引申作容量单位、重量单位。

## 𪎭（糜）

从黍麻声，本义指一种不黏的黍，又称“穄”。后世多假借从米的“糜”字为之，而“糜”字本义为稠粥。现代简化字将“𪎭”并入“糜”。

## 黏

从黍占声，本义即是黏性，物体间附着胶合的性质。或体作“粘”。引申作动词表胶着、粘贴。现代多用“黏”作形容词，用“粘”作动词，但并不严格，二者可互通。“黏”现代只有nián的读音，而“粘”作形容词时读nián，作动词读zhān。

## 黎

从黍𥝢（利）省声，秦文字或从𥝤省声，“𥝢”、“𥝤”、“利”互为异体。楷书作“黎”。

本义指用以粘布作履的黍胶。后世常用于“黎民”、“黎明”二义，前者或说是假借为“齐”，表众多义，后者或说是假借为比及义。但更合理的解释应是二者均假借为“黧”，表示黑中带黄的颜色，泛指黑色。“黎民”应与“黔首”类似，都是以黑色头巾（或说是黑发，或说是因劳作而肤色黑，或说是黥面标识奴隶）为特征指代庶民。“黎明”指天刚亮，天色仍比较黑暗的时刻。

***

# 香部

## 香

甲骨文和西周金文上部为禾，旁有若干小点，下部为“口”。或说“口”表盛装谷物的容器。小篆将上部写作“黍”，下部的“口”改作“甘”。但甲骨文和西周金文的上部与同时期的“黍”字形并不一致，小篆从黍可能是讹变。隶变后又将上部省作“禾”，下部的“甘”讹为“曰”，整字作“香”。

本义为谷物的香味，兼有味觉和嗅觉上的美味。后泛指各种食物的美味、芳香。引申指胃口好、睡得踏实、受欢迎等。又引申指美妙，多用于女子相关的事物。又指有香气的原料或制成品，作动词指上香。

## 馨

从香殸声，本义指散布很远的香气，也泛指香气，引申为芳香之物、美好。也比喻声誉流芳后世。

## 馥

从香复声，本义为香味浓郁，引申指香气、散发香气。

***

# 米部

## 米

初文为一横上下各有三点，像米粒之形。后将上下中间两点写作竖，而后又将两竖相连，与横交叉为十字形。隶变后楷书作“米”。

本义粮食作物的去皮子实。后泛指各种植物去皮的籽粒、小粒似米的东西，引申指食物。又指极小，相当于点滴。现代又作为长度单位meter的音译字。

## 粱

西周金文从米刅声，或将声符换作“刱”、“𱥻（梁的初文）”。春秋以后固定为从米𱥻声。《说文》解为“从米、梁省声”，是不知“𱥻”为“梁”之初文的原因。

本义为粮食作物名，指粟的优良品种。又指黄粱，即黄小米。又指高粱。引申指精美的饭食。

## 粲

从米𣦼声，本义是精米，即舂得精细的白米。引申为晶莹明亮，此义后作“燦”，现代简化字作“灿”。进一步引申指美好。

## 精

从米青声，本义是经过挑选的纯净的米。引申为精细、完美、娴熟、精明、精华、精力、精液等义。以上义读jīng。又假借为“晴”，表晴朗义，此义读qíng。

## 粗

从米且声，本义是粗粮。引申为粗糙、不精致、粗大、疏忽、鲁笨、粗略等义。古时常借从三鹿的“麤”为之，此字《说文》本义为“行超远”，鹿善惊跃，故从三鹿，引申为鲁莽义，与“粗”互通。现代将“麤”作为异体字并入“粗”。

## 粒

《说文》古文从食立声，小篆从米立声，后世从之作“粒”。本义是米粒，也泛指粮食。引申指进食、养活。又引申指粒状物，也作粒状物的量词。

## 糜

从米麻声，《说文》训为“糁”，指以米和羹，即粥义。因粥的形态较烂，故引申指烂。进而引申指细碎，此义通“䊳”，或将“䊳”视为“糜”的异体。又假借为“𪎭”，指一种不黏的黍。又通“靡”，表损耗义。

## 糟

《说文》籀文从酉㯥声，小篆从米曹声，后世承袭小篆字形。本义指未经过滤的带渣滓的酒，引申指过滤后剩下的渣滓，即酒糟。引申指粗恶的食物、腐烂、败坏、糟蹋。

## 糗

从米臭声，本义是干粮，即炒熟的米麦等。后世方言也用以指米面粘连成块状，即“坨了”，现代也指尴尬或丢脸的事。

## 糧（粮）

从米量声，汉隶或从良声，楷书“糧”、“粮”并存，以“糧”为正体。现代简化字以“粮”为正体。本义指干粮，引申泛指粮食。

## 粹

从米卒声，本义为纯净无杂质的米，引申指无杂质的、精华、美好、精通等。

## 氣（气）

从米气声，或体从米既声，作“䊠”。本义是赠送粮食，引申指食物，读xì。汉代假“氣”为“气”，表示云气义，于是又造加注食旁的“餼”字表本义，详见“气”字。现代简化字将云气义恢复为古体“气”字，而赠送粮食义类推简化为“饩”。

## 粉

从米分声，本义为米豆加工成的细末。引申泛指细末、研成粉末。又特指化妆用的粉末，进一步引申指擦粉、涂饰、绘画用的颜料、白色或白中带红的颜色等义。由本义又引申指淀粉制成的食品。

## 竊

《说文》小篆解为“从穴从米，禼、廿皆声”，隶定作“𥩓”。或认为初文应是从穴从䊪，所谓的“禼”和“廿”是由“萬”拆分讹变而来。汉隶或作从宀从䊪。今隶以后仍从穴，省去小篆中的“廿”，楷书则将“廿”省作一撇，整字写作“竊”。东晋时出现从穴切声的形声字“窃”，为现代简化字所采用。

本义为盗，引申为私自、暗自、偷偷地、抄袭等义。

## 粕

从米白声，本义是酒糟，即酿酒产生的渣滓，引申泛指物品经提炼后的残余部分，比如粗劣没有价值的东西。

## 糉（粽）

从米㚇声，俗体从宗声，作“粽”。现代以“粽”为正体。本义指粽子，即用箬叶或苇叶包裹糯米制成的多角形食品。

## 糖

从米唐声，楷书异体从食，作“餹”。现代以“糖”为正体。本义是饴，即用米芽、麦芽煎熬而成的糖浆。后也指用甘蔗、甜菜等提取出来的有甜味的物质，引申指糖制的食品。现代也指碳水化合物。

***

# 臼部

## 臼

像内有沟槽的捣缸之形，后世字形变化不大，楷书作“臼”。本义是舂米用的捣缸，引申泛指用来捣碎东西的容器、臼状物等。

## 舂

从午从廾从臼，“午”是“杵”的初文，“廾”为两手，“臼”为捣缸，会双手持杵在捣缸中捣米之意。本义指在臼中用杵捣去谷物的壳或将其捣碎。引申为冲击、撞击，可通“衝”。也指臼，即捣缸。

## 舀

战国文字从爪（手形）持一物体，下从臼，可能是表示手持器具掏取、刮取臼中舂好的米。小篆省去所持之物，写作从爪从臼，即用手在臼中掏取舂好的米。此形楷书作“舀”。《说文》另收从手从宂的“抭/抌/㧒”、从臼从宂的“𦥟/𦥨”两个或体，而此二字所从的“宂”或认为是“冘”的讹变，“冘”在此作声符，一说应是“穴”的讹变，以手挹穴以会意。现代以“舀”为正体。

由本义引申指用瓢、勺等器具挹取液体或颗粒状物质。

## 臽

从人从臼，会人落入陷阱之意。本义指落入陷坑，引申指陷阱、坑穴。后世用从阜的“陷”字表“臽”的本义，“臽”字渐废。

***

# 凶部

## 凶

像坑中有危险物体之形，历代字形变化不大。本义是灾祸、不吉利，与“吉”相对。引申指饥荒、夭亡、凶恶、恶人、厉害等。

## 兇

从人从凶，《说文》本义为扰恐。后也用“兇”表凶恶义，在此义上与“凶”互为异体。但灾祸、不吉义只用“凶”。现代简化字将“兇”并入“凶”。

***

# 麻部

## 麻

金文从厂从𣏟，与其所从的“𣏟”同义，均是指大麻，一种茎皮纤维植物。“𣏟”从二“𣎳”，与“木”不同，最后两笔不与竖相连，表示剥离的麻皮。小篆改“厂”为“广”，后世字形固定为“麻”。

“麻”由本义引申指麻的茎皮纤维，可制布、纸等。由麻的粗糙特征引申指细碎带斑点、表面不平，又由剥离麻纤维的过程引申指纷乱。

***

# 尗部

## 尗

始见于《说文》小篆，《说文》训为“豆”。西周金文有“叔”字，“尗”应是“叔”的省形。“叔”的构形本义有争议，或说是掘土收芋，或说是拾取豆子。若依收芋说，则“叔”本义与豆子无关，表豆子的“菽”仅以“叔”作声旁，而后借“叔”的省形“尗”表“菽”义。若依拾豆说，则“尗”在“叔”字中本就是用以作豆子的象形。目前无定论，但古籍中确有将“尗”用于菽豆义的例子。

## 𢻃（豉）

从尗支声，俗体从豆，作“豉”。因“豆”多被假借为菽豆义，故作形旁可与“尗”通。本义为豆豉，即用熟的大豆经发酵后制成的食品。后世以“豉”为主流，“𢻃”字渐废。

***

# 耑部

## 耑

甲骨文中间一横表示地，其下象植物根之形，其上或说是“止”，或说是像植物初生枝叶之形，旁有小点，表示土或水。春秋金文上部明确变作植物初生枝叶之形，与“止”有明显区别。至小篆字形变化不大，隶变后楷书作“耑”。

一般认为“耑”为“端”的本字，本义为起始、发端。分化出的从立的“端”字本义为直，即端正，后用“端”表“耑”的起始义，“耑”字渐废。

***

# 韭部

## 韭

战国文字上部像韭菜之形，下部为一横或两横，表示地。隶变后上部与“非”同形，整字楷书作“韭”。因字形演变后失去象形功能，后人不知其本就是韭菜的象形，又赘加艸旁，造俗字“韮”。现代简化字义“韭”为正体。

本义即是韭菜。与“久”同音，《说文》认为韭菜“一种而久”，故音“久”。

## 齏（齑）

从韭，次、𠂔皆声，此形隶定为“䪢”。或体从亝（齊）声，隶变后楷书作“齏”。后世以“齏”为主流，现代简化字作“齑”。

本义指捣碎并用酱拌的姜、蒜、韭菜等调味碎末。引申为细碎、碎末、调和、混杂等。

## 韱

从韭㦰声，本义是山韭，一种细小的韭菜。可用同“纖（纤）”，表示细小。

***

# 瓜部

## 瓜

战国文字像蔓上长有瓜之形，小篆字形微变，隶变后楷书作“瓜”。本义为各种瓜的通称，蔓生植物，属葫芦科。引申指形如瓜的器物。

## 瓞

从瓜失声，或体从瓜弗声，作“𤫰”。本义是小瓜。

***

# 瓠部

## 瓠

从瓜夸声，本义是葫芦，《说文》中与“匏”互训，此义读hù。又通“壶”，读hú。又用于联绵词“瓠落”，表示大而无用或空旷寥廓，读huò。

## 瓢

从瓜票声，本义指剖葫芦做成的舀水器，引申作液体量词。也有瓠瓜的意思。

***

# 宀部

## 宀

像尖顶房屋的侧视之形，本义为房屋。引申有覆盖义。甲骨文中可独立成字，后世多用于偏旁。

## 家

甲骨文从宀，下为带有雄性生殖器标识的豕，即“豭”的象形初文，在此兼作声符。也有或体省从豕，即不强调雄性，此形失去表音功能。入周以后多用从豕的写法，成为主流。《说文》解为“从宀、豭省声”，原理正确，但严格来说不是从豭省声，声符本就是“豭”的初文。隶变后楷书作“家”。

以房子和所养的猪会住所之意。本义即是住所，引申为安家、定居、家养的、家庭等义。春秋战国时被用来指学术流派，又进一步引申为对某种专门学识经验丰富的人，也指对独特技艺有传承的家族或派别，词义扩大后泛指经营某种行业的人。也作谦词，用于自己亲属中的长辈。

## 宅

从宀乇声，本义是居住的房舍。引申为住处、居住、居于、寄托、墓穴等义。《说文》古文将宀换为广，作“㡯”，或体在“宅”中加土旁，作“𡧪”。此二形今均已淘汰。

## 室

从宀从至、至亦声。“至”有到达、止息义，与“宀”结合会止息处所之意。本义为居室、房间，古代建筑中特指堂后供人寝卧的房间。引申指房屋、家、妻子、帝王家族、墓室、器物内部的空腔等。

## 宣

从宀𠄢声，其声符“𠄢”为漩涡之形，隶变后与表恒常义的“亙”字相混，同作“亘”。本义为宣室，即天子接见臣民、发布命令的大厅，引申为召唤臣子、公开散布、扬显、疏散、疏通、普遍、广大等义。

## 向

从宀从口，会室内张口发声产生回音之意。隶变后楷书作“向”。本义是回响，是“響（响）”的本字。《说文》训为“北出牖”，即朝北的窗户，或说此义是假借义。

又作为“鄉/嚮”的通假字，表朝向义，此义本字为“鄉”，为两人面朝皀（簋）相对而食之形，后分化出“嚮”、“饗”、“卿”，其中“嚮”是“鄉”之朝向义的后起专字，并也假借“向”为之，古书中表示朝向义时“鄉”、“嚮”、“向”三字常混用。由朝向义引申为方位、去往、仰慕、面临、迎合、偏袒、向来、从前等义。

“向”被用作朝向义后，又为其原本的回响义造后起形声字“響”、“㗽”，并以“響”为主流。明代时出现简化字“响”，为现代简化字所采用。

## 宦

从宀从臣，本义为贵族家里的奴仆，引申为帝王的家仆，即宫内侍奉王族的官员，后成为官吏的统称。作动词表做官、学习官吏的事务。东汉以后，宫内侍奉王族的宦官全由阉人担任，故此后“宦官”又特指阉人。

## 奥

《说文》解为“从宀𢍏声”，但“奥”与“𢍏”古音不通，目前未见更早的文字材料出土，故初文构形暂不明。《说文》本义为室内西南角，引申为内室、室内深处、幽深的地方，进一步引申为深、奥妙等义。古时祭祀时室内西南角为神主或尊长居坐之处，故由本义引申为主事人、主管的职事等义。

## 宛

从宀夗声，声符“夗”有弯曲义。《说文》训为“屈草自覆”，即把草弯曲用以覆盖自身。引申为弯曲、曲折、低洼、隆起、婉转、温柔、小、晃荡、好像、历历在目等义。以上义读wǎn。表地名读yuān。

## 宸

从宀辰声，本义是屋檐，引申指深邃的房屋。又指北辰，即北极星。因北极星位于地轴延长线，从地面观测静止不动，其他星体围绕其旋转，表现为众星拱北辰，故以北极星比喻帝王，而“宸”则引申指与帝王有关的，如帝王的住处、王位等。

## 宇

从宀亏（于）声，或体从宀禹声，作“㝢”。后世以“宇”为主流，“㝢”被淘汰。本义是屋檐，引申指覆盖物的边沿、房屋、住处、疆域、空间、仪容、气度、覆蔽等义。

## 宏

从宀厷声，本义是房屋幽深而有回响。引申为广大、广博、声音洪亮、远、发扬光大等义。另有从宀弘声的“宖”字，音义皆与“宏”同，一般认为是“宏”的异体字。

## 定

从宀从正、正亦声，隶变后所从的“正”写作“𤴓”，整字作“定”。本义是安定、使安定，引申为宁静、稳定、固定、停止、建成、确立、决定、必定、约定等义。

## 安

甲骨文从宀从女，旁或有一至三个小点。这些小点或说是饰笔，或说是由“止”省写而来，也有人认为这些小点和“女”整体构成一个字，表示坐，且这个字很可能是“安”的声符。入周以后，小点多只省作一个，或完全省略。带点的字形一直沿袭到战国时期。小篆以后固定为从宀从女。

初文所会之意多认为是女子坐在室内，以表示静、止义。《说文》本义即是静。引申为安定、舒适、稳妥、安全、设置、使稳定等义。又作疑问副词，相当于“怎么”。

## 宓

从宀必声，本义是安定。引申为寂静、停止、秘密等义。后来“宓”的所有含义均用其分化字“密”表示，而“密”从山宓声，本义是形状像堂屋的山，被假借为“宓”后，“宓”字渐废。

后世也通“伏”，这源于讹误，最初假“虙”为“伏”，此二字音近故能通假，而传抄过程中又将“虙”讹写为形近的“宓”，导致“伏羲”写作“宓羲”。但“宓”与“伏”音形义均不通，故以“宓”通“伏”本身是讹误，但这种用法后世较普遍。

## 宴

从宀妟声，本义是安闲。引申为安定、安居、休息、聚饮聚餐、酒席等义。古籍中或假“燕”字为“宴”。“宴”又通“晏”，表晚、迟义。

## 𡧯（寂）

从宀尗声，本义是寂静。后世又有“寂”字，从宀叔声，逐渐取代了“𡧯”。由本义引申为闲静、孤单等义。

## 察

从宀祭声，本义是详审、细究。引申为考察、推举、观察、知晓、辨别、清楚、明智等义。

## 完

从宀元声，本义是完整。引申为坚固、充足、保全、完成、结束、整修、修筑等义。

## 富

从宀畐声，本义是完备。引申为多、财产多、财产、使变富等义。又通“福”，表示保佑。

## 實（实）

西周金文或从宀从田从貝，或从宀从貫，田、貝、貫均有财产义，故表意相同，有房有财产，会富裕意。小篆以后固定为从宀从貫，楷书作“實”，现代简化字依草书楷化作“实”。

本义是富裕，财产多。引申为财富、物资、满、充实、坚实、真实、实诚、事实、果实、结果实、填塞（使充实）、践行（使真实）等义。

## 容

甲骨文有从穴从口形的字，或认为是“容”的初文，“穴”即洞穴，“口”形表示物品，会容纳意。战国文字及《说文》古文作从宀公声，字形与前述甲骨文字形接近，可能是变形后有意改为形声字。小篆又将“公”改作“谷”，变为从宀从谷、谷亦声，后世沿袭，楷书作“容”。

本义是容纳、装盛。引申为容量、收留、宽容、允许、从容。又有容貌义，此义本字为“頌”，后假“容”为之。由容貌义又引申为威仪、装饰、外观等义。

## 𡦼（冗）

从宀从儿（rén），其所从的“儿”在《说文》中解释为“古文奇字人也”，整字像人在屋中，无田事，会闲散意。小篆隶定为“𡦼”，隶变后与“冘”同形，为作区别，将“人”写作“儿”，后又讹为“几”，“宀”讹为“冖”，整字楷书作“冗”。

本义为闲散，引申为多余、杂乱、繁忙、庸劣等义。

## 寶（宝）

甲骨文初文从宀从玉从貝，会屋中有玉、贝等珍宝之意。后加“缶”旁表声。或省去貝写作从宀从玉缶声，此形即《说文》古文的源头，西周时或进一步省去玉，写作从宀缶声。西周以后，以“从宀从玉从貝缶声”为主流，即“寶”。汉隶或将“缶”讹作“尔”，与“玉”合为“珎”，整字作“寳”。楷书仍以“寶”为主流。汉代时已出现省去貝、缶，仅从宀从玉的“宝”字，为现代简化字所采用。

本义指珍贵的东西，引申指珍贵的、珍视。又特指天子、诸侯作符信的圭璧，秦以后改用玺印为信，至唐开始用“寶”指帝、后、太子的印信。又作赌具名，如“押宝”即用此义。

## 宰

从宀从辛，“辛”为刑刀，与“宀”结合会屋内奴隶之意。本义指充当家奴的罪人，泛指家中劳作的奴仆。由于能在屋内劳作（伺候奴隶主）的奴隶一般在奴隶中地位较高，故引申指处于支配地位的人和物。进一步引申为官名、官吏的通称。又引申为主管、杀牲、分割等义。

## 守

从宀寸（zhǒu）声，其声旁是“肘”的初文，与方寸之“寸”无关。《说文》训为“守官”、“寺府之事者”。或认为本义应是治理、守护。引申为官员的职责，进而指长官名。由守护义引申为看管、保持、遵循、节操等义。

## 寵（宠）

从宀龍声，本义是尊崇。引申为荣耀、恩惠、宠爱、受宠爱的人等义。现代简化字作“宠”。

## 宥

从宀有声，本义是宽待。引申为宽恕、赦免、空深等义。

## 宜

初文像两块肉在俎上之形，春秋时或将俎的边沿断开，至《说文》古文将断开的弧形讹作“宀”，并将“肉”讹作“夕”，小篆又将二夕省为一夕，隶定为“宐”。汉隶不作“夕”而仍作“肉”，但隶变后的“肉”与“月”同形，又与底部本为俎边沿的一横相连，结合为“且”，并将“宀”讹为“冖”，整字作“冝”。楷书仍从宀，写作“宜”。

本义是菜肴，一说本义指祭肉或祭祀之事。引申指烹调菜肴、祭名、适宜的事、适宜、安适、应当等义。

## 寫（写）

从宀舄声，本义为移置、放置。引申为输送、倾吐、抄写、书写、画、描绘、写作等。倾吐义后引申为倾注、排泄、消散等义，这些义项后作“瀉”。现代简化字将“寫”依草书楷化作“写”，“瀉”类推简化为“泻”。

## 宵

从宀肖声，本义是夜。

## 宿

甲骨文从宀从人，旁有席子形，会人躺在屋内席子上休息之意。至战国时，席子形讹变为“百”。《说文》小篆为从宀𠈇声，其所谓的声旁“𠈇”从人、㐁，《说文》又将“𠈇”解为“𡖊（夙）”的古文，其实“𠈇”本就是“宿”的省形，而非“宿”的声旁，且并非“夙”的古文，而是因音近通假为“夙”。隶变后楷书作“宿”。

本义为夜晚睡觉、过夜。引申为居住、停留、安于、住宿的地方、隔夜的、素来的。以上义读sù。又作夜的量词，此义读xiǔ。又指若干星体组成的区域，是将其比喻成日月、五星的栖宿场所，此义读xiù。

## 寑（寝）

甲骨文从宀从帚，像用扫帚打扫房间，会睡卧的房间之意。西周以后或在帚下加“又”，即用手持扫帚，此形隶定为“𡩠”。《说文》籀文将“宀”讹为“冖”，隶定为“𠖗”。战国时或从爿，“爿”为“牀”的象形初文，表示床。小篆将“爿”换作“人”，隶定作“𡪢”。隶变后省去“帚”的下部，从人者作“寑”，从爿者作“寢”。现代以“寢”为正体，并简化为“寝”。

本义是卧室，引申为躺卧、睡觉、休息、搁置、平息等义。又特指君王祖先休息之所：周代指宗庙后殿，放置祖宗衣冠之处；秦汉以后指帝王陵墓上的正殿。

## 寬（宽）

从宀萈声，其声符“萈”为细角山羊形，其上部为“𠁥”，像羊角形，而非艸。后世楷书或将“𠁥”讹为“艹”，或省去本表示尾巴的一点，整字作“寛”。现代简化字作“宽”。

本义为房屋宽敞，引申泛指面积大、横向距离大，又引申为开阔、宽厚、饶恕、舒缓、富裕、放松、减轻、解开、宽慰等义。

## 寡

初文从宀从頁，“頁”像突出人头的人形，整字会一人独居一室之意。战国文字或省去宀，在人身体两侧各加两饰笔。小篆讹为从宀从頒。汉隶仍承袭战国字形，从宀从頁加两点。楷书作“寡”。

本义为丧偶。后专指女子丧偶，而用“鰥（鳏）”专指男子丧偶。引申为孤单、人少、少、缺少、减少等义。又作王侯的谦称。

## 客

从宀从各、各亦声，“各”有来到义，整字会有人从外来到房屋里之意。本义即是客人，强调自外而来的人，与“主”相对。引申指寄居外地的人、奔走各地从事某种活动的人、寄食于贵族豪门的人、在他国或外地做官的人、服务行业的服务对象等。又引申指外来的、独立于人类意识之外的、以客礼对待、寄居外地等。

## 寄

从宀奇声，本义是客居、寓居。引申为托付、依附、寄送、赠予、寄存、无血缘关系的亲属等。

## 寓

从宀禺声，战国时产生从广的异体，楷书作“庽”，后被淘汰。本义是寄居，与”寄“同义。引申为居处、寄送、寄托等义。

## 寒

初文从宀从茻从人，像人垫着草在屋中。西周金文又加仌（冰的本字），强调寒冷之意。隶变后楷书作“寒”。

本义是寒冷，引申为感到冷、寒冷的季节、贫困、卑微、恐惧、凄凉、枯萎等义。

## 害

西周金文下从古，上部类似罩子形，构形不明。或认为是“軎”的先造字，也是“轄”的本字，本义指軎辖，即马车轴端的青铜固定部件，其功能是固定车轴，防止车轮错位，故引申有阻止义，可与“曷”通，“害”、“曷”上古同音，进一步引申为妨碍、损伤等义。一说上部表示仅剩支架的屋顶，本义为灾祸。《说文》解为从宀从口丯声，是基于讹变后字形，与初文不合。

常用义有损伤、侵犯、妨碍、畏惧、患染、产生某种不适之感、有害的、灾祸等，又通“曷”表阻止、什么、为什么。

## 宕

从宀从石、石亦声（宕为定母阳部，石为禅母铎部，上古无舌上音，定、禅同纽，阳、铎阳入对转，故“宕”与“石”音近），西周或体从广，本义为洞屋，即山洞石室。由山洞引申为通过、穿过。又引申为宽广、放纵、飘荡、拖延、搁置等义。

## 宋

从宀从木，本义是居住或居处。此义后世不见使用，多用于国名和姓氏。

## 宗

从宀从示，会放置神主的房屋之意，本义为宗庙。引申为祖先、同祖家族、派别、起统领楷模作用的、根本、尊崇等义。

## 宙

从宀由声，本义是栋梁，引申为“舟舆所极覆”，即车、船的顶盖。进一步引申为古往今来的时间，与表四方上下的“宇”合称“宇宙”。

## 寘（置）

从宀真声，本义是放置、安放。由于与“置”音近，且均有放置、安放义，古代常与“置”相通假，现代将“寘”列为淘汰字，其全部含义并入“置”。

## 寰

初文从宀袁声，即“㝨”。小篆将声符替换为“睘”，“睘”本从目袁声，与“袁”表声相同。隶变后楷书作“寰”。本义是王畿，即京都周围千里内的区域。引申指广大境域、王宫围墙。又引申指天下，古代指整个国家疆域，现代也指全世界、整个宇宙空间等。

## 寀

从宀采声，初文为“采”，由采摘义引申为古代卿大夫受封的土地，即采邑，此义后分化出专字“寀”，也作“埰”，但典籍也通用“采”。

***

# 宫部

## 宫

甲骨文从宀，内有两口相连，像居室相连的房屋之形。或将两个口分开，形似“吕”。春秋时或将两口用短竖相连，为小篆所本。楷书作“宮”或“宫”，现代以“宫”为正体。

本义是房屋、居室。引申为居住、围绕、建造房屋、学校、宗庙、神殿等义。秦汉以后，专指帝王居住的房屋，借指帝王、后妃。

## 營（营）

或认为从宫𤇾声，宫与𤇾共用“ㄇ”形，但此说是基于小篆字形，不确。“𤇾”最初写作“𬊇”，为两火炬相交之形，是“熒”的初文，下部本不是“ㄇ”形，无法与“宫”共用。故更合理的说法是从宫省、𬊇声。这里的“从宫省”也见于“雝（雍）”的声符，详见“雝”字。后俗将“𤇾”简化为“𫇦”，整字作“营”，为现代简化字所采用。

本义是四周垒土而居，引申为围绕、营寨、扎营、军队编制、建造、经营、供养、谋求等义。

***

# 吕部

## 吕

初文为两圆圈上下排列之形，《说文》认为是脊骨的象形，认为本义为脊骨。但主流观点认为应是像两个金属块，本义是金属名，即“鋁（铝）”的本字，甲骨卜辞中有此类用例。而脊骨义应是假借“旅”而来，旅有军队义，将人的脊骨比喻为军队以起到支撑身体的作用（也可能仅仅是因声借字），“旅”是脊骨义的本字，后世加注肉旁作“膂”。另外“吕”也通“旅”表客舍义，如“逆吕”。后世多用作国名、姓氏。

## 躳（躬）

从身从吕，“吕”常被假借为脊骨义（详见“吕”字），故整字会身体意。或体从身弓声，一说“弓”兼表义，像身体弯曲之形。现代以“躬”为正体。

本义为身体，引申为自我、亲自、弯曲身体等义

***

# 穴部

## 穴

像挖地建造的用于居住的洞穴之形，上部的“宀”为房屋形，“八”形表示支撑穴顶的斜木或出入口。本义为土屋，泛指洞窟。引申指动物的窝、敌人盘踞的地方、窟窿、中医的穴位等义。作动词表示穴居、凿通等义。

## 窯（窑）

从穴羔声，本义是烧制砖瓦陶器的炉灶。宋代时出现将声符替换为“䍃”的异体“窰”，后又将“䍃”省为“缶”，整字作“窑”，可分析为从穴从缶会意。现代简化字将“窯”、“窰”均并入“窑”。

由本义引申为陶瓷器、窑洞等义。南宋以后俗语又指低级妓院，此义或说假“寮”而来。

## 竈（灶）

金文从穴，下从多足昆虫形。本义指生活烧煮食物的灶坑，最初的灶是掘地成坑，故从穴，熄火时昆虫喜欢寄居其中，故以此会意。其下部的昆虫形至小篆讹为本义是蛙类的“黽”，隶定为“𥨫”，《说文》解释为“鼀省声”，并说鼀或不省，即有或体“𥩋”。后世楷书多微省作“竈”。后世发展出用砖石砌成的灶台，至晚于金代已出现从火从土的异体字“灶”，为现代简化字所采用。

## 𥥍（罙）

甲骨文中有从皿从爪、旁有小点的字形，或认为此是“探”、“深”的初文，会以手探测器皿中水深浅之意，兼有探测和深之义。甲骨文中或将字形倒置，成为从倒皿、从又，旁有小点。至金文，倒皿形讹为“穴”，而“又”（手形）和两旁本表水滴的小点整体讹为近似“𡗕”之形，此形可隶定为“𥥍”。《说文》解为“从穴从火，从求省”，与初文不合。隶变后将“𡗕”形变作“木”，整字作“罙”。

《说文》本义为深，即从里到外距离大，此义后用“㴱（深）”表示，而“㴱”字的《说文》本义是水名，但此义罕用。《说文》另外记载“𥥍”有灶突义，也即灶上的烟囱，此义或是讹混而来。“鱼伯作邢姬[穴+火]鼎”铭文中有一个从穴从火的字，而此鼎形制为鼎下有盛放炭火的烤盆，有人将这个从穴从火的字释为“灶”的表义初文，而所谓“灶突”义，其本字大概就是此字。金文“𥥍”字下的“𡗕”形与“火”形近，故将此二字相混淆，即为《说文》“𥥍”字下“灶突”义的来源。

## 穿

从穴从牙，会牙咬打洞之意，本义为穿透。引申为开凿、通过、开道、孔洞、贯连等义。

## 竇（窦）

从穴𧶠（yù）声，隶变后“𧶠”与“賣”形混，现代简化字作“窦”。本义是孔穴，引申指小窗户、水沟口、椭圆形地窖等义。现在也指生物器官或组织内部凹入的部分。

## 窻（窗）

《说文》古文像窗户形，隶定为“𡆧”。小篆作“囪”，隶变后楷书作“囱”。本义为屋顶上留的洞，可以透光，也可以出烟。后泛指房屋、车船上通气透光的洞口，此义读chuāng。也指烟道的洞口，即烟囱，此义读cōng。或体加穴旁，作“窗”。《说文》另载从穴悤声的“窻”字，训为“通孔”，其实“窻”就是“囱”、“窗”的后起异体字，其声旁“悤”即匆忙之“匆”的本字，从心从囱、囱亦声，所以“囱”是“悤”的声旁，而“悤”又是“窻”的声旁，故“窻”是“囱”叠床架屋后产生的异体字。另外“悤”字即是以心有孔洞会急促意，此义后也省作“囱”，或也可认为是假“囱”为之，而为与本表窗户、烟囱等义的“囱”字相区别，表急促意时写作“匆”，以此类推，“悤”也作“怱”。另外“悤”后世又有异体俗字“忩”，而以“悤”为声旁的“窻”字也省写作“窓”。“忩”又有或体作“总”，如“聰”可写作聦、聡、聪，“摠”可写作揔、捴、搃。现代又将“总”作为“摠”的简化字。

以上字的关系如下：

1. 𡆧、囪、囱、匆为同一字的不同变体，其中𡆧、囪已淘汰，囱为正体，匆为俗体。而窗、窻、窓又同与此这些字互为异体，以上所有字均可表窗户和烟囱两个含义。现代规定烟囱义用“囱”，而窗户义用“窗”。
2. 悤为急促义的本字，异体作怱、忩、总，或省去心，借“匆”字表此义，现代规定急促义用“匆”。
4. 其他以“悤”为声旁的字大多可类推将声旁替换为怱、忩、总，而现代简化字中，“总”独立成为“搃（摠）”的简化字。

## 竅（窍）

从穴敫声，本义是孔洞。后也特指耳鼻目口等孔洞状器官。引申为凿洞、贯通、事物的关键等义。现代简化字将声符换为“巧”，作“窍”。

## 空

从穴工声，本义是孔穴，此义读kǒng，可与“孔”通。引申为空虚、空间、穷尽、没有、徒然等义，读kōng。又引申为腾让空间、亏欠、未占用的、未占用的事物（时间、空间等），读kòng。

## 窖

从穴告声，本义指储藏物品的地穴。椭曰竇（窦），方曰窖。引申为坑穴、埋藏等义。

## 窺（窥）

从穴規声，本义是从孔隙或隐僻处偷看，引申为观看、观察、觊觎、接近于某种境界等义。

## 窴（填）

从穴真声，本义是填塞，引申为充盈、加等义。后从土作“填”，“窴”字渐废。

## 窒

从穴至声，本义是填塞，引申为阻塞、遏制、障碍物、充满等义。

## 突

从穴从犬，会犬从穴中突然窜出之意。本义为急速往外冲，有急速、冲撞和向外运动三方面含义。由冲撞义引申为冒犯、穿破。由急速义引申为突然。由向外运动引申为鼓起、凸出，进一步引申为超出一般，也指烟囱。

## 竄（窜）

从穴从鼠，会老鼠藏入洞中之意。本义是藏匿，引申为奔逃、放逐、混入、骚扰、删改等义。其中“窜改”一词与“篡改”含义不同：“窜改”主要针对文字层面作局部增删改动，多出于便利考虑；“篡改”主要针对精神主旨作曲解、歪曲，带有主观恶意。现代简化字将声符换为“串”，作“窜”。

## 窘

从穴君声，本义为穷困、窘迫，引申为使窘迫，即拘禁、局限等。又作副词表示仍。

## 究

从穴九声，本义是穷尽，引申为贯彻、推求、钻研、谋划、清楚等义。作副词表示毕竟、终究。汉隶有异体从久声，但未沿用下来。

## 竆（穷）

从穴躳声，声符常作“躬”，整字作“窮”。本义是极尽、完结。引申为极端、彻底、寻根究源、不足、困厄、贫穷等义。元代出现草书楷化字“穷”，为现代简化字所采用。

## 邃

从穴遂声，本义是深远，引申为精深、精通。

## 窈

从穴幼声，本义是深远，引申为幽静、昏暗、美好等义。可与“窕”合成联绵词“窈窕”，指女子美丽娴静的样子。

***

# 㝱部

## 㝱（梦）

与“夢”为一字之分化，详见“夢”字。初文为从爿，像床之形，旁有一倚床而睡的睁目人形。表示睡着而有所知觉，即做梦。或加夕、宀，强调做梦发生在夜晚、屋内，此即“㝱”字。战国时有省体作“夢”。《说文》将“夢”、“㝱”别为二字，不确。宋元时出现俗体字“梦”，为现代简化字所采用。

## 寐

《说文》解为从㝱省、未声。其实甲骨文中有从宀从爿的字，义与“寢”近，故[宀+爿]可单独成字，“寐”可分析为从[宀+爿]未声。

《说文》训为“卧”，多用为睡着义，与“醒”相对。

## 寤

《说文》籀文从㝱省、吾声，隶定作“𡬑”。小篆进一步省去睁目人形，作“寤”。汉隶则保留睁目人形而省去宀，作“𧄯”，又有或体从宀悟声。楷书承袭小篆，作“寤”。

本义为“寐觉而有言”，即睡醒并伴有言语的状态。泛指睡醒。也引申指做梦、说梦话。又通“悟”，指觉悟、理解。又通“牾”，指逆、违背，如郑庄公名“寤生”，即是逆着出生（胎位不正）导致难产，故其母武姜厌恶他。

***

# 疒部

## 疒

甲骨文像人有躺在床上，旁有小点，表示生病卧床出汗。小篆将人形的一笔与“爿”合并，另一笔作横，省去表汗滴的小点，整字作“𤕬”。虽此字未见于战国文字，但以此字为偏旁的字在春秋战国时已经写作此省形，故“𤕬”写法的出现应不晚于春秋时期。隶变以后写作“疒”，后世不再独立成字，仅作偏旁。

本义是疾病，也指手足麻痹。

## 疾

甲骨文从大、矢，像人腋下中箭，西周金文承袭此形。春秋时将表示人形的“大”换为“疒”，且“矢”与“疾”脂质阴入对转，古音近，此形可分析为从疒矢声，为后世文字所本。

本义是外伤，引申泛指伤病、疾病。进一步引申为病人、病残、缺点、祸害、痛苦、憎恶、担忧等义。又有快速义，此义一般认为是源于初文中箭这一场景，引申为敏捷、急剧、激扬等义。

## 痛

从疒甬声，本义是疼痛、痛楚。引申为痛恨、痛惜、怜爱、悲伤、尽兴、严厉、竭力、彻底等义。汉隶或追加心旁，但未沿用下来。

## 病

战国文字或从疒丙声，或从疒方声。后世承袭从丙声的写法，作“病”。

《说文》训为“疾加”，即病情危重。但主流观点认为此是引申义，按先秦文献用例，本义应是困苦，引申为困难、忧虑、怨恨、耻辱、祸害、侵犯、失败、危重等。如《论语·子罕》“子疾病”，其中“疾”是名词表示现代意义上的疾病，而“病”是形容词，表示危重、加重的状态。战国以后，“病”才引申为病重、重病等义，此应是“疾病”长期连用后省略“疾”字的现象。进而泛指疾病，这是比较晚起的含义。

## 疴

从疒可声，本义为疾病。

## 㽱

从疒丩声，本义是腹中绞痛，此义读jiǎo，是绞痛、绞肠之“绞”的本字。又与“瘤”构成复合词“㽱瘤”，指肌肉隆起之症，读jiū。又有小痛义，读niú。

## 癇（痫）

从疒閒声，本义是癫痫，俗称羊角风。现代简化字作“痫”。

## 疵

从疒此声，本义是病，多指小毛病。引申为缺点、过失、斑点等义，作动词表挑剔、诋毁等。

## 癈（废）

从疒發声，本义是残废、痼疾。引申为废弃义。古籍往往借“廢”字为之，“廢”本义为房屋倒塌，引申有废止、废弃义，与“癈”引申义近，故可通。现代将“癈”作为“廢”的异体字，并简化为“废”。

## 痒

从疒羊声，本义是痈疮、溃疡，也指忧思成病，读yáng。又作“蛘”、“癢”的通假字，表瘙痒欲搔的感觉。此义本字为“蛘”，“癢”为后起字，后世癢行而蛘废，但“癢”笔画繁多，常假“痒”字为之，但此义与“痒”本义无涉。现代以“痒”作为“癢”的简化字。由瘙痒义又引申指难以抑制的强烈愿望。

## 瘖（喑）

从疒音声，本义是哑，不能说话。引申为缄默、不说话。另有从口音声的“喑”字，《说文》训为“宋齐谓儿泣不止”，由小儿哭泣不止引申为沙哑失声，进而引申为哑、缄默不语等义，与“瘖”可互通。现代将“瘖”作为异体字并入“喑”。

## 瘀

从疒於声，本义是积血，引申为郁积。本字为“淤”，表淤积义，后分化出“瘀”字专表血液的淤积，但此义后世仍常以“淤”字为之。

## 疝

从疒山声，本义是心腹气痛，引申为疝气。

## 痀

从疒句声，本义是驼背，一般作“痀瘻（瘘）”，也可单用“痀”。“痀瘻（瘘）”也作“佝僂（偻）”。

## 痱

从疒非声，本义是中风，此义读féi。又指汗疹，即痱子，此义读fèi。

## 瘤

从疒留声，本义是肿瘤，引申指物体表面隆起的疙瘩。

## 痤

从疒坐声，本义是小肿、疖子，引申指痈疽类毒疮。今指痤疮，俗称粉刺。

## 瘜

从疒息声，本义是息肉，即肉疙瘩。本作“息”，“息”有生长义，故将肉中生出的疙瘩称为息肉，后造专字“瘜”表此义，但后世仍多用“息肉”表此义。

## 癬（癣）

从疒鮮声，本义为由真菌感染引发的皮肤病，现代简化字作“癣”。

## 疥

从疒介声，本义为由疥虫寄生引发的皮肤病，即疥疮。常与“癣”并称。

## 痂

从疒加声，本义是疥疮，后也指疮或伤口愈合后结的硬壳。

## 癘（疠）

从疒蠆省声，也可视作从萬声，“萬”、“蠆”同源。本义为恶性疾病，多指麻风，也指瘟疫。现代简化字作“疠”。

## 瘧（疟）

从疒从虐、虐亦声，本义是疟疾。初作“虐”，因此病折磨人故称“虐”，后加注疒旁造“瘧”字。现代简化字作“疟”。

## 痔

从疒寺声，本义为痔疮。

## 痿

从疒委声，本义指因肌肉麻痹而萎缩的症状，引申为衰竭、阳痿等。是“萎”的分化字，可与“萎”互通。

## 痹

从疒畀声，本义指一种风湿病，引申为麻木、气郁闷。

## 𤹝

从疒畢声，本义指坐得久而脚麻木。

## 㾫

从疒扁声，本义为半身不遂、偏瘫，本字作“偏”，后分化出从疒的专字“㾫”。

## 痕

从疒艮声，本义是疤痕，引申泛指痕迹。

## 瘦

从疒叜声，声符“叜”隶变后作“叟”。本义指肌体的肉、脂肪少。引申为细小、瘠薄、贫穷、稀薄、削直、减损等义。

## 疸

从疒旦声，本义是黄疸，读dǎn。明代以后民间也借用作“瘩”，将“疙瘩”写作“疙疸”，此义读“da”。

## 痞

从疒否声，本义为胸腹间气机阻塞引发的胀痛，声符“否”有阻塞义，故从否声。明代以后又将流氓无赖俗称为“痞”，此义是“佊”之讹，“佊”本义为邪、不正，故称邪人为“佊子”，民间俗讹为“痞子”。

## 疲

从疒皮声，本义为劳累，引申为懈怠、厌倦、懒惰、瘦弱、衰老、停止等义。“疲”字较晚起，古籍多借“罷（罢）”字为之，罷、皮、疲同属並纽歌部，古音同。

## 疫

从疒役省声，本义为流行性的传染病。初借“伇（役）”字为之，后造专字“疫”。引申指疫鬼。

## 𤻲（疗）

从疒樂声，或体从尞声，作“療”。《说文》以“𤻲”为正体，而后世以“療”为主流，现代简化字替换声符作“疗”。本义为治疗，引申为制止、消除。

## 瘌

从疒剌声，本义是由服药或上药引起的刺痛感。初用“剌”字表此义，后造“瘌”字专表由药物引起的刺痛感。

## 癆（痨）

从疒勞声，本义是由服药或上药引起的刺痛感，是由“剌/瘌”音变而来，“南楚之外谓之瘌，北燕朝鲜之间谓之痨，东齐海岱之间谓之眠，或谓之眩。自关而西谓之毒。”此义读lào。又指积劳瘦削之病，称“癆病”，明清时期逐渐专指结核病，以上义读“láo”。现代简化字作“痨”。

## 瘥

本义有二，属于同形关系：

1. 从疒差声，本义是病愈，“南楚病愈者谓之差”，后加注疒旁专表此义。今读chài。
2. 从疒差声，或从左声，本义是小规模疫病，“大死曰札，小疫曰瘥”，多“札瘥”合称，泛指灾疫流行。今读cuó。

## 𤸬

从疒衰声，本义为减退。本字为“衰”，“衰”本义为用草编的遮雨衣服，即“蓑”的本字。因蓑衣是用草逐次层叠编成的，故引申出按等级递减的含义，进而引申为减退义，后造从疒的专字“𤸬”专表此引申义，但未能沿用，后世仍用“衰”字兼表此义，而蓑衣的本义则另造从艸的“蓑”字表示。

## 瘉（愈）

从疒俞声，本义是病愈。后世多假借“愈”为之，而“愈”本是“愉”的异体，古文字不严格区别构形位置，但在楷书中愈、愉逐渐分化，“愈”表病愈义，实质上已成为“瘉”的异体。宋代以后又有异体“癒”，但未流行。现代简化字将“瘉”、“癒”并入“愈”。

## 癡（痴）

从疒疑声，本义是不聪慧、呆傻，引申为癫狂、发呆、入迷、天真、持久不止等义。语音演变后，出现从知声的俗字“痴”，为现代简化字所采用。

***

# 冖部

## 冖

像布巾蒙覆形，本义为覆盖。后世“冖”多用于偏旁，为其本义另造形声字，从幕声作“冪”，俗字作“幂”。

## 冠

战国楚文字从冃从元，“冃”为帽子，“元”为人头，强调戴帽子的部位，整字即是会头上所戴帽子之意。至小篆，改“冃”为“冖”，又追加寸旁，即“又”加饰笔，表示手，强调用手将帽子戴到头上，整字所会之意没有变化。隶变后楷书作“冠”。

本义是帽子的总称，也指戴帽子。引申为冠状物、覆盖、居于首位、加在前面、冠军、行加冠礼等义。

## 冣

从冖取声，“冖”表示帽子，古人用帽子聚拢头发，“冣”本义即是聚拢、聚集，是“聚”的异体字。“聚”从乑取声，其形旁“乑”是三人之形，以此会集合、会集之意。“冣”、“聚”是针对同一音义采用不同形旁会意而来的异体字。

而从冃取声的“最”字与“冣”形近，南北朝时已用“最”取代“冣”，故“最”也继承了“冣”的聚集义。

***

# 𠔼部

## 𠔼

从冖从一，《说文》训为“重覆”，因“冖”本义为覆盖，故加一横表示重叠覆盖。一说“𠔼”是“冃”的省形，并不单独成字。

## 同

甲骨文字形上部似凡形，下从口。早期观点认为上部就是“凡”，而“凡”是“盤”的初文，是盘子的象形。而新观点认为“同”的上部与“凡”有根本区别：“凡”是盘子侧视并旋转90°之形，其左右两笔长短不对称，长者是盘口，短者是盘足；而“同”的上部构件左右对称，是竹筒、桶类器具的侧视之形，西周青铜觚“内史亳同”铭文中的“同”即是此义，青铜觚的形制即是模拟早期竹筒器，觚是后起之名，故“同”的上部应是“同”、“筒”的初文。

而从口的“同”字多用于合会、一齐义，这一般认为与“興”有关。“興”的甲骨文是四只手共同抬一器物之形，所抬之物即是“同”的上部，以此会举起之意。至西周金文，下方加口，或说是表示抬物时呼喊口号。而“同”即是将所抬之物和“口”截取出来而成的字，承担四手抬物所隐含的合会、一齐之意。《说文》解为“从𠔼从口”，不确。

由合会、一齐义引申为一致、统一、和睦等义。作连词表并列相当于“和”，作介词相当于“跟”。

## 冡

从𠔼从豕，用巾覆盖所饲养的猪的眼睛防止其逃跑，会覆盖之意。本义即是覆盖，是蒙覆之“蒙”的本字。而“蒙”字本义为草名，后假“蒙”为“冡”。

***

# 冃部

## 冃

从冖从二，“冖”为帽子形，“二”为其装饰，《说文》训为“小儿蛮夷头衣也”。后加目旁表示人头（造字常见的特征突出类用法，类似的如“頁”、“首”等），强调戴帽子的部位，成为“冒”字，并取代了“冃”，“冃”后世只用于偏旁。而“冒”又由本义引申出升起、顶着、触犯等义，故又造加注巾旁的“帽”字表本义。

## 冕

从冃免声，本义指古代大夫以上地位的人所戴的礼帽，后专指帝王之冠，引申指王位、冠军荣誉等。

其声旁“免”的初文是人以布包头之形，本义是去冠、用布包裹发髻，是古代的一种丧服，故引申有去除义，而其丧服的本义后作“絻”。“免”也假借作贵族礼帽之意，此义后分化出“冕”字，但古时也借“免”、“絻”表此义，“絻”表冠冕义时今读miǎn，表丧服本义时今读wèn。

## 冑（胄）

甲骨文上部从由表声，下部像头盔形。西周时在底部加“目”，强调头盔戴在头上。战国时一种写法是将头盔形写作“冖”，并将“目”换做“元”，同样表人头；另一种写法是从革由声，表示头盔用皮革制成，为《说文》古文所本。小篆固定为从冃由声，隶变后楷书作“冑”。本义是头盔。

隶变后，与本义表贵族后代的“胄”字形混，“胄”从肉，隶变后“肉”写作“月”，与“冃”形近，于是“冑”、“胄”常混同。现代简化字将“冑”并入“胄”。

## 冒

初文为“冃”，为帽子的象形，本义即是帽子。而后加目，以眼睛表示人头，强调帽子所戴的部位，成为“冒”字。引申出蒙覆、升起、漫溢、顶着（恶劣处境）、触犯等义，蒙覆义隐含有“不明”之义，故又引申出冒昧、鲁莽、假冒等义。因其引申义众多，故又造从巾的“帽”字表本义。

## 最

从冃取声，本义是军功最高，与“殿”相对。“冃”为帽子，因戴在头顶而有最高之意，故从冃。《说文》训为“犯而取也”，即进攻并捉拿，此即是最高军功的具体形式。由本义引申为最高、最突出、居于首要地位的事物等，又作副词表示极其或某种属性超过所有同类。又与“冣”形近混同，“冣”本义为聚拢，南北朝以后完全以“最”取代“冣”，故“最”也有聚拢、聚集义，进而引申出总计、纲目、概要等义。楷书中“最”上部的“冃”变形作“曰”。

***

# 㒳部

## 㒳

“兩”的早期写法，详见“兩”字。

## 兩（两）

初文为“㒳”，甲骨文“車”的上半部分，也是西周金文“車”的右半部分（西周金文字形是将甲骨文顺时针旋转90°），即包含衡（轭前横木）、双轭（套在牲口颈上的曲木）及辕（连接轭和轴的直木）的前半段。早期战车多为独辕双马，“㒳”字所表示的就是整辆车里两匹马所处的部位。故“㒳”有成双的两个物体之义，也作双马战车的量词。西周金文或在“㒳”上部加一横作饰笔，后定形为“兩”字。

作战车量词时，即是“輛”的本字。而由成双的两个物体义则引申为数目二、双方、不定数等义。又借作重量单位。由于“兩”普遍用于数目字等义，故又造加注車旁的专字“輛”表车的量词。

## 㒼

构形不明。《说文》解为“从廿从㒳”，西周金文中两个“人”形写作“个”，而战国文字中两个“人”又写作两竖，暂不确定是否从“㒳”。《说文》训为“平”。

***

# 网部

## 网

甲骨文为网的象形，左右各一直棍，中间是交织的绳索。小篆承袭此形，隶定为“网”，但此形并未被隶楷沿用。战国时出现或体加注声旁“亡”，《说文》或体承袭此形，隶定作“𦉸”，隶变后写作“罔”，成为主流。后因“罔”被假借作无、没有等义，故又加注糸旁造“𦋟”字表本义，此形楷书作“網”。现代简化字采用小篆的隶定体，即“网”。作偏旁时，多写作“罒”。

本义为捕猎用的网，引申为网状物、繁杂交织的事物、法律、捕捉、笼罩、搜罗等义。

## 罕

从网干声，隶定作“䍑”，早期楷书用此形，作“䍐”。战国时“网”多省去一个“×”，作“冈”，汉隶或承此写法，并将“冈”进一步变作“㓁”，整字作“罕”，此形初为“䍐”的俗体，后逐渐成为主流。

本义指一种捕鸟的长柄小网。后假借为“尟”，“尟”用同“鮮（鲜）”，表少义。“罕”由此引申为稀少、稀疏、稀缺等义，又有意动用法表示以...为稀罕，即珍爱义。

## 罩

从网卓声，本义为捕鱼的竹笼。引申指笼、罩形的器物，进一步引申指用笼捕取、覆盖、笼罩等义。

## 罪

从网非声，本义为捕鱼的竹网。秦始皇认为“辠”字形似“皇”，于是改用同音的“罪”替代“辠”，表作恶或犯法的行为之义。由此义引申为罪人、过失、苦难、刑罚、归罪于、治罪等义。

## 羅（罗）

甲骨文从网从隹，会捕鸟网之意。春秋时另加糸旁，后世沿用，楷书作“羅”。元代出现简化字“罗”，是将左下的“糸”草书楷化为“夕”并省去“隹”而来，为现代简化字所采用。

本义为捕鸟的网，引申为张网捕捉、搜集、囊括、陈列等义，又由网的外观引申指稀疏而轻软的丝织品、密孔的筛子，后对同心圆或环形物体都冠以罗字，如罗纹、罗盘、罗锅、罗圈等，有些时候可以与“螺”通，但“螺”强调螺旋形，而“罗”强调同心圆或环形。

## 署

从网者声，本义是布置、部署，引申为代行其职、办理公务的机关等义，又引申指签名，表示为所签之事负责。

## 罷（罢）

从网从能，“能”是熊的象形，本义为动物熊，从字形上看“罷”所会之意应是以网捕熊。《说文》认为本义是“遣有辠”、“言有贤能而入网，而贳遣之”，即有贤能的人犯罪被捕，赦免其罪后予以贬谴。这应是引申义，“能”用为贤能义是后起义，造字之初用的应是本义。一种推测是此字通过以网捕熊表示使对方力量无从施展，进而引申为使停止、完毕、解除（官职等）、废除等义。又作叹词表示决定终结某事。又作句末助词，此义后作“吧”。又通“疲”，表示累。

## 置

甲骨文从止从丙，或再加𦥑。“止”为人足形，在此表声，“𦥑”为两只手，所从之“丙”或释为“穴”，并理解为地牢，此类观点认为此字会抓捕犯人并关入地牢之意。但“丙”与“穴”早期字形有明显的区别，“丙”上部是平的而“穴”上部是拱起的（表示房顶），故此处应释为“丙”。而关于“丙”的本义有争论，或说是器物底座，或说是炊器，或说是盛放牺牲的俎类器具，但无论为何，在此应都是放置物品（大概率是祭祀用品）的承托器具。结合“𦥑”旁，整字会放置、安置之意。

至小篆，“𦥑”讹为“网”，而“止”和“丙”整体讹为“直”，整字成为从网从直，隶变后楷书作“置”。《说文》解为“赦也”。此应是引申义而非本义。本义应该是安放，引申为安排、设立、搁置、赦免、舍弃、委托、置办等义。可与“寘”互通，现代简化字将“寘”并入“置”。

## 詈

石经古文从两人对立、从言，会两人争吵对骂之意。小篆将对立的两人形讹为“网”，整字讹为从网从言。《说文》解为“骂也，从网从言，网辠人”，其释义是对的，但构形分析有误，是基于讹变后的字形附会而来。

本义是骂。

## 罵（骂）

从网馬声，本义是恶言侮辱，与“詈”互训，引申为斥责义。所从之网疑是由“詈”类推而来，“詈”所从的“网”是两人对立之形的讹变，“罵”的形旁最初可能与之一致，后依口语另造了从馬的形声字，但尚未见支持此说的古文字材料，故存疑。可能是因为义符“网”不能准确会意，故楷书中多将“罒”写作“吅”，以两口会詈骂之意，整字作“駡”。现代简化字作“骂”。

## 羈（羁）

从网从馽，隶定为“𦌭”。“馽”像以绳索绊马足之形。或体累加革旁，隶定作“𦍈”。由于字形繁复，隶变后将“馽”省作“馬”，整字作“羈”，现代简化字作“羁”。

本义是马笼头，引申为束缚、拘禁、使停留、停留、寄居在外等义。又有“羈縻”一词，“羈”为马笼头，“縻”为牛缰绳，合起来表笼络控制之意，多用以指古代中央对边远部族威压、抚慰并用的策略。

## 罹

从网从隹从心，以鸟被网罩住会遭受意，从心强调内心感受。此字是“離”的后起分化字，遭受义本是“離”的引申义，后分化出“罹”字专表此义。由遭受义又引申为触犯、苦难等义。

***

# 襾部

## 襾

《说文》训为“覆”。古代文献中不独立成字。

## 覈（核）

从襾敫声，本义是核实、考察。引申为翔实、深刻、苛刻。又指果实中心的坚硬部分，也指核果。后用“核”字表“覈”义，而“核”在《说文》中训为“蛮夷以木皮为箧，状如籢尊”，此义未见使用，如按许慎之说，则用“核”为“覈”是假借，核查和果核这两组义项的本字都是“覈”。一说核查义的本字为“覈”，而果核义的本字为“核”，后互相通假，两字均可表示所有含义。现代简化字将“覈”并入“核”。

## 覆

从襾復声，本义是翻转，引申为倾倒、灭亡、覆盖等义。又通“復”，表返回、回答等义。

曾以“復”的简化字“复”同时作“覆”的简化字，但因有歧义，后取消。如“反復（复）”和“反覆”并不完全等同：“反復（复）”强调来回折返，用如“反復踱步”等；而“反覆”强调来回翻转，用如“政局反覆”等；但诸如“反复无常”等词，则用“復（复）”、“覆”均可。再如“回復（复）”和“回覆”也不完全等同：“回覆”仅有回答之义，而“回復（复）”既可表此义，也有恢复之义。

“覆”表翻转、倾倒、覆盖等义时，不可用“復（复）”。

***

# 巾部

## 巾

像下垂的织物之形，本义为用来擦抹的织物。后也用以裹头、佩带、覆盖等。作动词表包裹、覆盖、戴上头巾等。也指巾箱，即放置头巾或书卷的小箱子。

## 帥（帅）

西周金文从寻从二巾，或省从一巾。所从之巾上部或加一横作“巿”，“巿”也是由“巾”分化而来。秦系文字将“寻”讹为“㠯”形，小篆讹作“𠂤”。汉隶从寻和从𠂤者并存，楷书固定作“帥”。元代出现草书楷化的俗字“帅”，为现代简化字所采用。

本义为佩巾。假借为“率”，表率领义。引申为带头、表率、统帅、起主导作用的人或事物等义。今又有英俊义，此义或说是由表率、楷模义引申而来。

## 幣（币）

从巾敝声，本义是用作礼物的丝织品，引申泛指车马玉帛。引申为财物、货币、赠送等义。现代简化字将声符“敝”省作一撇，整字作“币”。

## 幅

从巾畐声，本义指布帛的宽度。泛指事物的宽度，如“幅员”一词中，“幅”是宽度，“员”即“圆”指周围，合起来表示面积范围，多用于疆域。由本义又引申指布帛的边，泛指衣服边缘，如不修边幅本义即指衣着不整。又作布帛的量词，后也用于与布帛外形类似的事物，如纸张、书画等，也指此类事物。由宽度又引申指限度、尺度，如篇幅、幅程等。

## 帶（带）

甲骨文像用于束衣的有坠饰的带子之形。战国文字下部变得像两个嵌套的“巾”。至小篆，字形固定为“帶”。现代简化字作“带”，是草书楷化的俗字。

本义是腰带。用于束住外衣、身前打结下垂的丝质大带称“紳（绅）”，用于悬佩饰物的皮制腰带称“鞶”。由腰带义引申指带状物、地区，又作带状物的量词。因腰带可悬佩物品，故引申为佩戴、携带、率领、引导、兼任、连附、含带、呈现、照看等义。又因腰带是缠绕在腰间的，又引申为捆绑、环绕等义。

## 常

从巾尚声，一般认为本义是裙子、下身的衣服。但结合文献用例，“常”字最早用于“天子之旗”的含义，后用以指下裙，此二义可视作无引申关系的同形字。天子之旗以日月为饰，故引申出恒久义。由恒久义进一步引申为普通、平时、时常、规律、法度等义。后分化出从衣的“裳”字专表下裙义。“常”、“裳”初为异体关系，后分化。

## 帬（裙）

从巾君声，本义为下裳，古代男女均服，今仅作为女性衣着。也指缝在衣领周围的边，似披肩。或体从衣，作“裠”、“裙”。

## 帷

从巾隹声，本义指围在四周的幕布。在旁曰帷，在上曰幕。引申指用帷幕遮挡。

## 帳（帐）

从巾長声，本义指床帐，泛指张挂、支架起来的遮蔽用具。初以“張”表此义，后造从巾的专字“帳”。引申指帐篷、军帐等，又作游牧民族计算户数的单位。另外，古人把账目记在布帛上挂起来保存，故引申为账簿、账目、债务等义，为与帷帐义区分，清代时造从貝的专字“賬”表此义。现代简化字将“帳”简化为“帐”，将“賬”简化为“账”。

## 幕

从巾莫声，本义是帷帐的顶布。在旁曰帷，在上曰幕。引申为帐篷，进一步引申为幕府，即将帅出行搭幕帐而成的临时办公府署。又引申指形状、作用像幕的事物，如夜幕。作动词表笼罩。又引申为单面垂挂的布幔，此义晚起，今舞台幕布、电影银幕即用此义。由戏剧演出时两个段落间以开合幕布为标志，故幕引申出戏剧段落义，进而又引申为情景的量词。

## 帖

从巾占声，本义为题签，木制称檢（检），帛制称帖。后也指信件、对联、书画的摹临范本等。以上义读tiè。又指官府文书、公告、单据、写有简短文字的柬帖等，以上义读tiě。又通“贴”，表示粘贴，引申为紧挨着、添补、服帖、安定等义，以上义读tiē。

## 幡

从巾番声，《说文》训为“书儿拭觚布”，即擦拭写字板的抹布。又作为“旛”的异体字，表示长幅下垂的旗帜，后世幡行而旛废。也指冠上的巾饰、簿册等。

## 飾（饰）

从巾从人食声，以人持巾会刷拭意。本义为刷拭，引申为修饰、妆点、遮掩、修整、饰品等义。

## 帚

初文为扫帚的象形。小篆将上部表示扫帚穗的部分讹为“又”，将中间捆扎扫帚的绳结讹为“冂”，将下部的扫帚把讹为“巾”，《说文》据此解为“从又持巾埽冂内”，属于附会之说。隶变后楷书作“帚”。

本义即是清洁用具扫帚。

## 席

甲骨文为长方形带纹路的席子的象形。西周金文从厂从巾，以“厂”表房屋，会屋内席子之意。战国文字由竹、厂、巾、席子形四部分组成。《说文》古文从厂、从席子形。这些字形应都是同一字的不同繁简程度的写法。小篆讹为从巾从庶省，隶变后楷书作“席”。

本义指用草、竹、芦苇等编成的垫子。一般用于坐卧，故引申为座位、职位、酒席、坐卧于上等义。

## 帑

从巾奴声，本义指收藏钱财的府库。引申为国库里的钱财。也指装金帛的囊。以上义今读tǎng。又指鸟尾，并用于比喻妻儿，此义读nú。

## 布

从巾父声，隶变后“父”讹为“𠂇”形，整字作“布”。本义指麻织品。后作为棉、麻等织物的统称。古代平民穿麻布衣服，故以“布衣”指代平民、清苦的生活。又由本义引申为铺展、分散、宣告、显露、发放、安排等义。古代布也曾作为货币，最初以布匹实物为货币，铜币出现后，有一种形制仿农具“镈”的铜币也称为“布”，是作为“镈”的假借字，“布”、“镈”音近，且“镈”的声旁“尃”与“布”均有布散、布设义，音义皆近故可假借。由货币义引申为财货、赋税。

## 幢

从巾童声，本义指古代一种用于仪仗的旗帜，也指车盖等垂筒形、带装饰的仪仗用品。佛教传入后也指经幢。以上义读chuáng。又作量词指房屋栋数，读zhuàng。

## 幟（帜）

从巾戠声，本义指旗子。其声旁戠有标志的含义，旗帜即多用于标志作用，故也引申指标记。现代简化字作“帜”。

## 幗（帼）

从巾國声，本义指古代妇女戴的头饰。后用作妇女的代称。现代简化字作“帼”。

## 帒（袋）

从巾代声，本义是囊，即口袋。或体从衣，作“袋”。

## 希

从巾爻声，或说爻兼表义，本义为麻布织得不密，即稀疏，引申出少、罕见、企盼、远望、仰慕、希求等义。其中稀疏、稀少义后作“稀”，远望义后作“睎”。

***

# 帛部

## 帛

从巾从白、白亦声，本义是白色的丝织品，后作为丝织品的总称。古代曾作为书写材料，故也以“帛”指帛书。古代也作为礼物，引申指财货。

## 錦（锦）

从帛金声，声符金兼有贵重之意。本义为有彩色花纹的丝织品。引申为花样多而美好的东西、色彩艳丽等。又特指锦袍，引申为奖赏、荣誉。现代简化字作“锦”。

## 幫（帮）

从帛封声，本义指鞋的边缘，引申指物体两旁或周围立起的部分。进一步引申为辅助、帮助、帮会、群伙等义。异体从邦声，作“幚”，近代史出现简化俗体“帮”，为现代简化字所采用。

***

# 白部

## 白

初文构形有争议：

1. 像拇指之形，引申为排行首位的，是“伯”的本字，假借用于颜色。
2. 像初升太阳之形，本义是明亮、光明，引申为白色。
3. 像烛火之形，本义同上。
4. 像米粒之形，本义为白色。
5. 结合“皃”字，“白”应是像人首之形，故有居首位之义。

甲、金文实际用例包括：地名、白色、姊妹排行第一、首領、假借为百等义。综上，基础义应有两组，一组是由排行第一引申而来，一组是由白色或光亮引申而来，而这两组义项之间似乎没有引申关系，可能是假借，而孰为本义，暂无确论。

由光亮义引申为显明、清楚、真诚、理解、陈述、报告等义。由白色义引申为洁净、空白、徒然等义。而表排行第一、首領等义时，后作“伯”。

## 皎

从白交声，本义指月光洁白明亮。引申泛指明亮，进一步引申为洁白、清楚等义。

## 皢

从白堯声，本义指日光明亮，引申为天亮。同“曉（晓）”。

## 皙

从白析声，本义指人肤色洁白。引申为白色、清楚、明白。异体作“晰”，后分化，清楚、明白义只用“晰”。

## 皚（皑）

从白豈声，本义指霜雪洁白。现代简化字作“皑”。

## 皅（葩）

从白巴声，本义指草花洁白。引申指花，此义后加艸旁作“葩”，而“葩”也可用同“皅”表草花洁白，实际成为“皅”的异体字。

## 皦

从白敫声，本义指玉石洁白。引申指白、明亮、清晰、清白等。

## 𡭴

甲骨文为“口”形上下各有若干小点，会日光穿过缝隙之意。小篆将“口”变作“白”，上下均作“小”，楷书则写作“𡭴”。

本义指缝隙透光明亮。也指缝隙，此义后作“隙”。

***

# 㡀部

## 㡀

像破旧的巾形，小点表示破碎的布屑。本义指破旧的衣服，引申为衣服破旧的样子，泛指破旧、破败、困顿的样子。

## 敝

从攴从㡀、㡀亦声。甲骨文或从攴从巾。会手持棍棒抽打衣物之意。本义是破旧的衣服，引申为破旧、衰败、疲惫等义。也作谦辞。

***

# 黹部

## 黹

西周金文像用针线缝缀之形，上下为织物纹路，中间是屈绕的针线。《说文》小篆讹为所谓“从㡀、丵省”，楷书作“黹”。

本义指缝纫刺绣。

## 𪓐

从黹虘声，本义为鲜明整洁的样子，从黹故一般用于衣物类。后假“楚”字为之，如衣冠楚楚，“楚”字从而有鲜明、整齐、清晰等义。

## 黻

从黹犮声，本义指古代礼服上绣的黑青相间的花纹。“青与赤谓之文，赤与白谓之章，白与黑谓之黼，黑与青谓之黻，五采备谓之绣”。

***

# 人部

## 人

初文像人的侧视形。本义即是人。

## 保

商代金文像人将孩子背在背上之形，会负子于背之意。西周时将向后伸手的人形简化为“人”，而为了与“仔”字相区别，在“子”右下加一斜笔，以保留托子之意。后又在子的左侧再加一笔以求对称，为小篆字形所本。此形隶变后楷书作“保”。战国时又出现累加爪旁的或体，强调手部动作，此形可隶定为“𠊻”，为《说文》古文所本。《说文》古文另收一省去人旁的或体，隶定作“𡥀”。后世通行“保”字。

本义为负子于背，引申为抚养、保育、护卫、维护、维持、保留、保证。又指保育幼儿的人，引申为掌管宫廷教育的官名，又指担保人、佣工。由本义又引申指包裹婴儿的布被，此义后作“褓”。

## 仁

春秋文字从尸从二，此形延续到战国，秦文字将“尸”变作“人”，成为从人从二，隶变后楷书作“仁”。战国时有异体形声字，从心千声，隶定作“忎”，或从心身声，均未能沿用。

《说文》本义是“親”，即对人友善、相亲。其构形解释，或说是仁者兼爱，故从二；或说“二”是饰符，整字是“人”的分化字，但初文并不从人，此说有误；或说“二”是重文符号（看作数字二也可），整字会两人之意，人相耦以为亲。但无论如何，初文不是以“人”为声符，是后世改为从人后才兼有这部分功能。

由本义引申为广泛的道德概念，即仁德。进一步引申为有德之人、行惠、保养等义。宋以后又用以指果核中心能吃的部分，此义最初用“人”，或说是源于“瞳人”一词，瞳孔中可映现人像故以“人”指瞳孔，后用以比喻与之形态类似的果核内芯，称为“果人”，宋以后改作“仁”。

## 企

甲骨文为人形下连有“止”（脚），会举踵意。后“人”、“止”分离，形态变化不大，楷书作“企”。

本义是踮起脚跟。一般张望时会踮起脚，所以引申有盼望、希求、仰慕义。企业一词即是用希望义，也即希望营利的实业。由本义也引申指一般的站立，如企鹅即是因其能似人一样站立而得名。

## 仞

从人刃声，本义为长度单位，周制八尺，汉制七尺。引申指测量深度。又是“認”的古字，表识别、当作、认同等，后作“認”，现代简化为“认”。

## 仕

从人从士、士亦声，本义为学习仕宦之事，引申指做官、官员、官职、审察等义。

## 佼

从人从交、交亦声，本义为交往。又通“姣”，指容貌美好，泛指美好、出众。

## 佩

初文为“不”。“不”为下垂的佩饰之形，见于商代金文“戈”字内像垂饰形的部分。最初与“巾”字形类似，但“不”下垂的穗是弯曲的，“巾”是直的，因“巾”所指代的是织物，较为平整，而“不”指代的是较轻柔的丝穗。后来为了明确“不”的读音，又为其增加了声符“▽”形，这个构件是“樴”的象形初文（木楔子形），不、樴阴入对转，故可表声。于是整体字形变为“𠀚”，与“巾”字形差别更加明显。“不”后被假借为否定副词，于是又造“佩”字表其本义。“佩”目前能见到的最早的字形是西周金文，从人，右上是“同”的初文，表示筒形饮器觚，详见“同”字，右下是“巾”。这里的“巾”已经是“不”的讹变了，最初应是“不”，不、佩均是並纽之部字，“佩”是“不”的后起分化字，整个字的右半部分由觚的垂饰会饰物之意。从人则强调是悬戴在人身上的饰品。小篆将同的初文讹为“凡”，同与凡有根本的区别，详见“同”字。《说文》解为“从人从凡从巾”，是依据讹变后的形体做出的分析。

初文本义是悬挂的装饰品，从人的后起字“佩”专指系在衣带上的装饰品，一般为玉制。引申为佩戴、携带。因玉佩常作为名誉和地位的象征，故又引申出钦佩、敬仰义。

## 儒

从人需声，本义指性格柔和的人。又指术士，即春秋时从巫、史、祝、卜中分化出来的、熟悉诗书礼乐而为贵族服务的人。后泛指学者，又专指孔子创立的儒家学派及其门徒。另有联绵词“侏儒”，指身材短小的人，仅因声造词，与“儒”字义无关，或说是“短”的双音节拆分而来。

## 俊

从人夋声，本义为才智超群。材过千人称俊，一说二十人、百人等。引申为英武、容貌美、高明、美好等义。作名词表示此类人。

## 傑（杰）

从人桀声，本义为才智超群。材过万人称傑，一说十人、百人等。其声旁“桀”或说是由“乘”演化而来，会人登于树颠之意，会超群之意，按此说则“桀”也表义，但《说文》将“桀”训为“磔”。初以“桀”表“傑”义，后因“桀”用于夏朝末代君主专名，于是后起“傑”字表才智超群义。

“杰”字本义不明，古代只用于人名，后俗借作“傑”，现代简化字将“傑”简化为“杰”。

## 伉

从人亢声，《说文》训为人名，古籍中多表匹敌、相当之义。引申为匹偶、夫妻。又引申为抵挡、强健、刚直、骄傲、高大等义。大部分义项可与“抗”、“亢”、“閌（闶）”等字相通，表夫妻义时只用“伉”，如伉儷（俪）。

## 伯

初文为“白”，或说像人首之形会居首位之意，或说像拇指之形会居首位之意，或说本义为白色或光明假借为首位义，详见“白”字。总之“白”可表示居首位的、首领等义，后加注人旁专表此义。引申为家庭排行第一、嫡长子、父之兄、官长、魁首、爵位名等义。春秋时指诸侯盟主，后世借同音的“霸”字表此义。

## 仲

初文为“中”，用以表示家庭排行第二，即非长非幼的居中者，战国以后加注人旁专表此义。引申泛指排第二位的，也通“中”表居中的，如“仲月”即每季第二月，“仲吕”即古乐十二律的第六律。

## 伊

始见于甲骨文，从人从尹，《说文》古文从𠒁（“死”的古文）从人，作“𠈽”。本义有争论。《说文》训为“殷圣人阿衡也”，其中阿，倚也，衡，平也，即是指殷商贤相伊尹，也就是说《说文》认为“伊”字本义就是人名。但伊尹之“伊”一般认为来源于伊水，伊尹生于伊水边故以伊为姓，商汤用其为尹（官名），故称伊尹。或认为“伊”是“尹”的后起字，此二字是古今字关系，“伊”本义与“尹”相同，表示治理。

实际用例中多借作语助词，也作近指代词或远指代词，相当于“这”、“那”。后世也作第二人称、第三人称代词。

## 倩

从人青声，本义为古代男子美称，引申指美好，以上义读qiàn。后世方言也指借助、请人做某事、倚近等义，读qìng。

## 伃

从人予声，本义为汉代宫中女官名，即“倢伃”，又作“婕妤”。

## 佳

从人圭声，本义是美好，引申为赞赏、喜爱。

## 偉（伟）

从人韋声，本义为奇异、超出一般，引申为高大壮美、宏大、卓越等。

## 份

从人分声，古文作“彬”，本义指外在文彩和内质美好兼备，即所谓文质彬彬，此义读bīn。现代又作“分”的分化字，承担“分”的限度、情面、本分、整体里一部分等义，读fèn。而“份”的本义在现代完全由“彬”承担。

## 僚

从人尞声，本义指美好的样子，此义读liǎo。又指官员、一起作官的人，此义读liáo。

## 儺（傩）

从人難声，本义指行走有节度。又有驱疫仪式名，本作“難（难）”，后借“儺”为之，逐渐成为固定用法。现代简化字作“傩”。

## 倭

从人委声，本义为绵延曲折，通“逶”，用于联绵词“倭遲（迟）”，也作“逶迤”、“𨖿迆”、“委蛇”、“威遲”、“委移”等，此义读wēi。又指身材矮小，古代特指对日本列岛的称谓，此义读wō。

## 僑（侨）

从人喬（乔）声，本义为高。或说是踩高蹺（跷）一词的本字。又指客居异地，今特指客居国外。

## 俟

从人矣声，本义指大、壮大。常用作等待义，有异体字“竢”。

## 侗

从人同声，本义指大貌，引申为通达。以上义读tǒng。由大引申为虚无浑茫、蒙昧无知，用于联绵词“倥侗”，也作“空同”，通“僮”、“童”，进一步引申指幼童。“空同”也作山名，即取空旷义，后作“崆峒”。以上义读tóng。又指中国少数民族侗族，读dòng。

## 佶

从人吉声，本义为正，又指壮健。

## 健

从人建声，本义为强壮，引申为健康、擅长、使健壮等。

## 傲

从人敖声，本义为傲慢。引申为高傲不屈、蔑视、自豪等义。

## 倨

从人居声，本义为傲慢、不谦逊。因傲慢时体态多不端正，故又引申指微微弯曲，微曲为倨，甚曲为句（勾）。

## 儼（俨）

从人嚴声，本义指昂头，引申指恭敬、庄重、使整齐等。

## 俚

从人里声，本义为凭赖，与“賴”、“聊”同义。又引申为鄙俗、民间的。

## 伴

从人半声，本义是大貌。后假借为“㚘”，表伴侣义，引申为陪同、依随、配合等义。

## 俺

从人奄声，本义为大。方言中作为第一人称代词，由“我”音变而来。

## 仿

从人方声，《说文》籀文从人丙声，作“㑂”，丙、方古同音，声符互通。本义指相似，引申为效法、临摹、好像等。以上义读fǎng。又通“彷”，表徘徊，读páng。

## 佛

从人弗声，本义指看不清楚，与“仿”构成“仿佛”一词表好像、似乎，此义读fú。又作为梵文音译字，Buddha音译为“佛陀”，意为觉悟者，也特指释迦牟尼，后将“佛陀”简称为“佛”，泛指佛教相关事物。此义读fó。

## 佗

从人它声，本义指用背载负物体。初用于人，后也用于牲畜，俗字作“駝（驼）”、“馱（驮）”。因骆驼能载负重物，故以“佗/駝（驼）”命名，又因其背部隆起，似囊袋，故称为“橐駝”，也作“橐它”、“駱駝”等。借由骆驼背部隆起的特征，“駝（驼）”也指代人背部拱起，即驼背。又作第三人称代词，由“它”分化而来。异体作“他”，隶变以后从它的字多讹从也。

## 何

甲骨文像人用肩担物之形，是负荷之“荷”的本字。西周时或将人头繁化，并繁加“口”形，可能是为将担形与口结合为“可”以起到表音的作用。战国时简化掉所增的人头，人形与担形分离，右侧完全变为“可”，演变为后世“何”字。

本义是用肩担物。假借为疑问代词，且使用频率极高，于是借用本义为荷花的“荷”字表担负义。

## 儋（担）

从人詹声，本义是用肩担荷，与“何”互训。背曰负，肩曰儋。俗作“擔”、“担”。引申泛指背负，也指抽象的承担，以上动词义读dān。作名词表示担荷东西的用具，即担子，也比喻责任。又作量词用于成挑的东西。也作重量单位，因与单位“石”所指的重量接近，后世也将“石”训读为“担”。以上义读dàn。现代以“担”为正体。

## 供

从人共声，本义为设置、摆放。引申为供奉、奉献、受审者陈述案情等。以上义读gòng。最初以“共”表以上含义，后加人旁作“供”。又指满足他人需求，即供给、供应，此义读gōng。

## 儲（储）

从人諸声，本义为储蓄物品以待使用。引申指所储备的物品。引申指太子，即储备的接班人以待未来继位。

## 僃（备）

从人𤰈声。其初文“𤰈”是盛矢器“箙”的象形本字，甲骨文像一个开口的箭匣，内插二矢，西周金文简化为一矢，战国以后变形严重，箭杆与箭匣结合讹为“用”形，小篆将箭羽部分进一步讹变，整字隶定作“𤰈”。因箭匣可排放箭矢以供随时取用，故有武备、预备、防备、具备等含义。西周时出现加注人旁的“僃”字，专表这些引申义。隶变后，声旁进一步讹为“[䒑+丿+用]”，楷书作“𤰇”，整字作“備”。现代简化字作“备”，是取其声旁（也是初文）草书楷化而来。

其引申义主要有两个系列，其一是事先筹划以应对突发状况，其二是出于前述目的而配置的物品。前者引申出准备、预备、防备等义。后者引申出武备、装备、设备、完备、具备等，又作副词表示皆。

因𤰈/僃多用于引申义，后又假借同音的“服”字表盛矢器义，𤰈、服均为並纽职部，后造专字“箙”。

## 位

初文用“立”表示。“立”为“大”（正立人形）立于“一”（地面）之上之形，本义是站立，也用以表所站立的位置。为分化字义，战国时给表位置义的字追加声旁“胃”，又或加人旁会人所立地点之意，成为从人从立的会意字。后世沿袭后者，楷书作“位”。

关于“立”在“位”字中是否表声暂无定论，“立”为来纽缉部，“位”为匣纽物部，缉、物可通转，但声母有差异。有可能造字之初即是有意通过分化读音来区分名词、动词义（加胃表声即是旁证），所以“位”、“立”的读音在很早时期就已经有差异，但韵部不远，主元音相同，或可谐声。一般观点遵照《说文》将“位”分析为会意字。另外，不能因“莅”字与“立”同音而判断“位”从立声，因“莅”是后起字，本字为“䇐”，其声旁是“隶”而非“位”。

本义为人所站立的位置，泛指人或物所处的位置，引申指抽象的地位、等级、职位等。也作个体人的量词，含敬意。也作名次、数码等的量词。

## 儐（傧）

“賓（宾）”的分化字。“賓”本义是引导、迎接客人，后引申指客人、礼品、赠送等义，于是分化出从人的“儐”字表本导引的本义。引申指导引客人的人。现代简化字作“傧”。

## 儕（侪）

从人齊声，本义为同辈或同类的人，“齊”有等同义，从人强调主体是人。现代简化字作“侪”。

## 倫（伦）

从人侖声，本义为辈。引申为人与人之间的关系，特指尊卑长幼等道德关系。又引申为条理、类别、义理、相比并等义。

## 偕

从人皆声，《说文》本义有二：“强”、“俱”，多用于后者，即共同义。

## 俱

从人具声，本义为共同、全都。

## 傅

战国文字从人甫声，作“俌”。秦文字改为从人尃声，作“傅”，后世沿用。本义为辅佐，引申为辅导、教育、负责教导的人。又通“附”，有附着、附会、附和、跟随、靠近、涂抹等义。

## 倚

从人奇声，本义为凭依、靠着，引申为抽象的倚仗。又引申为依附、靠近、倾斜、偏颇等义。

## 依

从人衣声，本义为倚靠，引申为挨着、凭赖、听从、原谅，作介词相当于按照。

## 仍

从人乃声，本义是因袭、沿用。引申指频繁发生，作副词表照旧、还是。

## 侍

从人寺声，本义是承奉，引申为服侍、进言等。

## 傾（倾）

初文为“頃”，“頃”本义为头不正，引申指倾斜。又因歪头动作时间很短，而引申出极短时间之义，如顷刻，又借作土地面积单位。因字义增多，于是分化出从人的“傾”字专表倾斜义。进而引申为倒塌、衰败、倒出、竭尽等义。现代简化字作“倾”。

## 側（侧）

从人則声，本义指旁边。引申为不正、向旁边歪斜、靠近等义。通“仄”，表倾斜。

## 付

初文从人从又，“又”为手形，以手持物与人会给予、交付之意。或在“又”下加一点写作“寸”，小篆以后固定为从寸，整字作“付”。

本义为交给，引申为给钱、付出抽象的代价、寄托、对付等义。

## 俠（侠）

从人夾声，本义指轻财重义的人。汉代长安一带方言称“甹”、“俜”，“甹”从丂从由，会用意气行事之意。俠的声旁“夾”有辅佐义，整字可会助人之意。相与信为任、同是非为俠。后逐渐专指有武艺高强、见义勇为、舍己助人的人，也指此类品行。现代简化字作“侠”。

## 仰

初文为“卬”，有抬起、升起义，也专指抬头。后分化为“仰”、“昂”。“昂”从日，本义为太阳升起，后承担“卬”的升起、扬起义。“仰”从人，本义为抬头、脸向上，与“俯”相对，引申为敬慕、依赖、物体面朝上、使物体面朝上等义。

## 佰

从人从百，本义为古代军队编制单位，五人为伍，十人为什，百人为佰。引申指百人编制的长官。也用于户籍管理，五户为伍，十户为什，百户为佰，相互担保。后在账务领域用作“百”的大写，防止篡改。

## 𢼸

是“微”的初文，左半部像人生有长发，右为攴。所会之意暂无定论，《说文》训为“妙”。详见“微”字。

## 作

初文为“乍”，构形有如下说法：

1. 从耒的初文，旁有“L”形表示被翻起的土块，整字会以农具耒起土之意，表示耕作。
2. 从刀形，一旁的“L”形与刀弯折角度一致，表示被刀刻画出的痕迹，整字会雕刻意。
3. 为衣领之形，表示缝制衣服，会制作之意，又因为仅作出衣领，有初始意，故也引申为初、刚刚等义。

《说文》小篆讹为“从亡从一”，不确。后引申出突然、暂时等义，于是分化出从人的“作”字表劳作、制作等相关含义。

由于构形暂无定论，故无法判断本义，但结合实际用例以及衍生词义来倒推，“乍”字本义应该同时具有“做某事”和“初始”这两层含义，很可能本义就是开始做某事。其引申义也沿着这两个方向延伸。由“做某事”引申出劳动、制造、兴起、创作、发作、当作、作品、事业等义，由“初始”引申出开始、刚刚、暂时、突然、恰好等义。前一系列含义后世统一用“作”承担，后一系列含义则保持用“乍”。

## 假

从人叚声，《说文》本义为非真。其声旁兼初文“叚”的本义是借，兼指借出和借入。而非真的含义应该是由借引申而来，因为借用他人之物并非自己所有，故有虚假、不真实的含义。

由借义也可引申为凭借、依靠、寄托、伪托、冒充、暂时给予、暂时代理、宽容、饶恕、假饶（如果）、暂且等。以上义读jiǎ。又引申为暂时宽缓的时间，即假期，此义读jià。

## 借

从人昔声，本义是借用，即暂时使用他人之物，兼指借入和借出。引申为假托、依靠、借助、假使等义。“借”和“叚/假”在多数义项上可互训。表假托、依凭义时与“藉”通，“藉”本义是席垫，引申出抚慰、依凭、假托等义。“藉”与“借”并非异体字关系，仅是引申义有交叉且音近，藉从耤声，耤从昔声，与借声符相同。

## 侵

甲骨文像手持帚，旁有牛，牛上有小点。所会之意或说是驱赶牲畜，或说是给牲畜扫土。或省去手形（又）。西周时将牛换作人。小篆固定为从人、从帚、从又。隶变后“帚”简化，整字作“侵”。

《说文》训为“渐进”，引申为临近、逼迫、逐渐损坏、强行进入、非法占有等义。

## 候

从人矦声，隶定作“𠊱”，隶变后因“矦”写作“侯”，故“𠊱”写作“𠋫”，又进一步将中间的“亻”简写为一竖，整字作“候”。

本义是守望，引申为等待、观测、服侍、看望、问好、诊察、事物的变化阶段、时节等义。

## 償（偿）

初文为“賞”，本义为偿还，后借“賞”为“𧷞”，开始表示赏赐义，于是分化出从人的专字“償”表偿还的本义。详见“賞（赏）”字。

本义即是偿还、补换。引申为回报、满足、抵偿等义。现代简化字作“偿”，是先将声符替换为现代发音更接近的“嘗”字，然后类推简化而来。

## 僅（仅）

从人堇声，本义为才、只、不过。引申为将近。现代简化字作“仅”。

## 代

从人弋声，本义是更替。引申为替换、代理、继承、世系辈分、历史分期、朝代等义。

## 儀（仪）

从人義声，本义指人的容止外观。引申为仪式、仪仗、礼节、典范、法度、用于测量观察事物某种属性的装置等。作动词表示匹配、忖度、测量等。现代简化字作“仪”，关于“義”简化为“义”的过程详见“義”字。

## 傍

从人旁声，本义是靠近、临近。引申为依附、依靠、沿着、伴随等。又通“旁”表旁侧、邪僻等。

## 似

从人㠯声，隶定作“佀”。其声旁“㠯”在秦文字中多加人旁，隶变后写作“以”，故“佀”作“似”。

本义是相像，引申为似乎，虚化为助词相当于如...一般。也表示继承、延续，通“嗣”。

## 便

西周金文从人从𠓥。所从的“𠓥”即“更”，是“鞭”的初文，最初从攴丙声（㪅），后或作从攴免声，讹作“𠓥”，详见“鞭”字。西周时产生追加人旁的字形，仍用为鞭打义。小篆从人从㪅，隶定作“𠊳”。《说文》训为“安”，一般认为此是假借义。隶变后“㪅”写作“更”，“𠊳”写作“便”。由于“便”多用于假借义，于是又加革旁造专字“鞭”表本义。

后世义项的基础义是“安”（非造字本义），此义读pián。引申为便利、方便、轻捷、简便、非正式、有利于、排泄、有利的机会等义，作副词表就、即，作连词表纵使，以上义读biàn。由便利、有利引申为小利、物价低等义，此义也读pián。

## 任

从人壬声，本义是抱。引申指背负、承担、担任、保举、任用、使用、相信、听凭、放纵。又引申为担子、任务、职责、职位、能力等义。由任凭义引申作连词表示让步关系，相当于即使。又作量词用于担任职位的次数。以上义读rèn。用于地名、姓氏时读rén。

## 優（优）

从人憂声，《说文》本义有二：“饶”、“倡”，即富饶和戏曲演员。关于此有三种看法：

1. 此二义间无引申关系，是用同一字形表示的两个无关的义项。
2. 本义为戏曲演员，古人认为音乐能调和阴阳之气，故引申出调和义，进而引申为富裕。
3. 本义是宽余。《说文》将“㥑”训为“愁”，将“憂”训为“和之行”（悠闲地行走，優游的本字）。“憂”在后世实际上也用于愁义，而其本义“和之行”所引申出的宽闲、宽余义则由“優”承载。因戏曲可使人心情舒缓，故引申指戏曲演员。

不论本义为何，宽裕义和戏曲演员义均是“優”字较早的义项。引申为充足、使丰足、宽绰、和顺、柔弱、宽容、优待、胜过、优良等义。现代简化字替换声旁作“优”。

## 儉（俭）

从人僉声，本义是约束行为、节制。引申为节约、勤俭、谦逊、贫乏、粮食歉收、微薄等义。

## 俗

从人谷声，本义是习俗、风尚，指群体范围长期形成的习惯。引申为一般人、平凡、流行、世俗、庸俗、厌烦等义。

## 倪

从人兒声，本义为小孩，引申为开端、头绪、边际。《说文》训为“俾”，而“俾”又训为“益”，即增益，此义罕见。

## 億（亿）

从人意声，本义指安。借作数词，具体所指不一，今以万万为億。进而引申为极多、盈满等义。现代简化字作“亿”。

## 使

吏、史、使、事原为一字，详见“吏”字。战国时分化出从人的“使”字，强调与人事相关。分化出的“使”字后世主要表示命令、役使、仆役、派遣、运用、致使、假使、出使、使者等。

## 伶

从人令声，声旁“令”有美好、巧媚义，“伶”本义为“弄”，即耍弄、演奏等。也专指乐官、歌舞艺人，即通过好听的声音或好看的表演使人开心的人，伶人即弄臣。又引申为聪慧、机灵。

## 儷（俪）

从人麗声，《说文》训为“棽儷”，即枝条参差繁茂，此义罕见。多用于“耦”义，即配偶，此义本字是“麗”，初文为“丽”（或说是省形），一种说法认为“丽”是两人相连之形，下加“鹿”表示古代订婚时所赠的鹿皮，本义为成对的鹿皮，指代夫妻。后“麗”多用于美丽义，于是用“儷”表本义。引申为成对、对偶、并列、相称等义。现代简化字作“俪”。

## 傳（传）

从人專声，本义为传递消息的驿车。以车曰傳，亦曰馹（驲）；以马曰遽，亦曰驛（驿）。并称傳遽。引申指驿站、符信等。以上义读zhuàn。又引申为传递、传授、传承、留传等义。以上义读chuán。由留传义引申指留传后世的文字，特指经书的注释、人物生平记载等，引申为作传、记载，这些义也读zhuàn。

## 倌

从人官声，本义指地位低微的臣仆，泛指各种服杂役、饲养牲畜的人。

## 价

从人介声，本义为善。明清时假借为“價”的俗字，现代简化字正式将“價”简化为“价”。

## 仔

从人子声，本义指所担负的责任。又指小孩、动物幼崽等，通“崽”，引申为幼小、细小、细密，如“仔细”即是取细密义。

## 伸

初文为“申”，闪电的象形，也是“電”的本字（“电”是“申”弯折笔画的写法），本义即是闪电。由闪电的形态引申出延伸、伸展义，后造从人的“伸”字专表此义。又引申为伸张、陈述、申理等义。

## 倍

从人咅声，《说文》训为“反”，可通“背”，有违反、背叛、背诵等义。又有加倍、翻倍义，此义或说是由“反”引申而来，一反一覆或一去一返，即是二倍；一说此义本字是“培”，假“倍”为之。引申作数学概念，表等量倍数。泛指程度加深或增益。

## 僭

从人朁声，许慎训为“假”，段玉裁改为“儗”，意近。本义是假冒，特指以下冒上。引申为超越本分、过分、虚伪等，也作谦辞。

## 儗

从人疑声，本义为僭越，又有相疑义。又通“擬（拟）”，表比拟、摹仿、打算等义。

## 偏

从人扁声，本义为偏斜。引申为片面、侧重某一方、不公正、差错、旁、非中心的、边远等。又作副词表与意愿相反。

## 倀（伥）

从人長声，本义是猖狂。或说是“猖”的本字。又指传说中人被老虎咬死所变成的助虎伤人的鬼。

## 佃

从人从田、田亦声，《说文》本义为中等车乘、一辕车。或认为此是假借义，本义当是田吏。古“佃”、“甸”同字，均从人从田，仅左右位置区别，战国时将左田右人的字形中右部的人旁讹为勹，后写作“甸”。而“甸”的《说文》本义是王田，引申有甸人义，即管理田事的官吏。或认为本义就是田吏，王田才是引申义。

“佃”在后世主要指农民租种地主或官府的土地，也指租种田地的人。

## 僻

从人辟声，本义是回避、避开，引申为偏远、孤冷、歪斜、偏执、邪僻等义。

## 伎

从人支声，本义为党与、同党的人。又指以歌舞为业的人，此义本作“技”，初指具备某种技艺的人，后专指从事歌舞的艺人，也写作“伎”，后专指其中的女性，并逐渐风尘化，甚至专指以卖淫为生的女子，字遂作“妓”。

## 侈

从人多声，本义为蒙蔽上位者、胁制旁人，即自高自大、盛气凌人。引申为过分、过度、放纵、奢侈、扩大、夸大等义。

## 僞（伪）

从人爲声，本义为欺诈。引申为人为、假装、伪造、虚假、非法等义。

## 佝

从人句声，本义指愚昧无知。又通“痀”，表驼背义，痀瘻（瘘）”也作“佝僂（偻）”。

## 倡

从人昌声，本义指歌舞艺人，读chāng。又通“唱”，承担了其领唱、倡导、发起等义，读chàng。

## 俳

从人非声，本义指杂戏，也指以舞乐杂戏为业的人。与“倡”同类，“倡”侧重音乐，“俳”侧重戏耍，也统称为“優（优）”。引申为游戏、诙谐。六朝时期产生一种行文诙谐、旨在讽喻嘲谑的文体，称为俳谐文，即是取诙谐义，一说通“誹（诽）”，有讽刺义。此类文章多对仗工整、庄词谐用，至唐代发展为骈体文分支，继而“俳”又有对偶、骈俪之意，但究其本质当与诙谐相关。

## 佚

从人失声，本义指隐逸之人，引申指散失、逃逸、放纵、安逸、过失等。所有引申义均可与“逸”通，只有本义强调隐逸的主体是人，是“逸”字不具备的，这也是“佚”从人的原因。

## 俄

初文像手持锯类刑具将人的一只脚割去之形，是“刖”的初文。至小篆将缺一足的“大”形写作“人”，手持刑具的部分讹作“我”，兼作声符。此形专表由刖足引申出的行路歪斜义，而另造从刀月声的形声字“刖”表本义。后“俄”、“刖”的音、义均逐渐分化。

“俄”由行路歪斜引申为一般的倾斜、不正。又引申指短暂的时间，即一歪身子的时间，其引申思路与“頃（顷）”类同，合称“俄顷”。

## 侮

战国文字从人母声，小篆从每声，母、每同音。本义指轻慢，引申指欺负。

## 僨（偾）

从人賁声，本义指向后仰倒。引申指倒下、覆灭、败坏、使灭亡等。又有亢奋、奋起义，此应是通“奮”而来，用如“血脉偾张”。

## 僵

从人畺声，本义指向后仰倒。却偃曰僵，前覆曰仆。引申为直挺挺、不灵活、相持不下等、颓败之物等义。

## 仆

从人卜声，本义为以头叩地。引申指向前倾倒，与“僵”相对，也泛指倒下。又引申为倒毙、推倒、使覆败等。也引申为颓败之物，与“僵”类似。现代又用作“僕”的简化字。

## 偃

从人匽声，本义为向后仰倒，兼有仰和倒的双重含义，引申为仰卧、倒下、停息等义。另外“偃月”一词表示横卧形的半弦月，泛指半月形事物，如“偃月刀”即因刀身呈半月形而得名。僨、僵、偃、仆、踣、蹶、跌、顛、覆、傾、倒均有倾倒义，侧重各不相同。

## 傷（伤）

初文为“𥏫”，从矢昜声，表示被箭射伤。后另加人旁，表示受伤的主体是人，作“𥏻”。此字的右半部后成为固定声旁，称作“𥏻省声”。后又另加人旁表受伤义，写作“傷”，可分析为“从人、𥏻省声”。元代时出现草书楷化字“伤”，为现代简化字所采用。

本义指创伤，与“刅（創）”互训。引申指损害、妨碍、悲哀、受某种侵害而得病、失之于、过度等义。

## 催

从人崔声，本义是相迫促，使赶快行动。引申指使事物的发展加快。

## 俑

从人甬声，本义指痛。假借为“偶”，特指殡葬用的偶人，“偶”属侯部，“俑”属东部，侯、东阴阳对转，故可谐声，属于音近假借。后假借义盛行而本义渐废。

## 伏

从人从犬，会犬趴伏在人旁之意，有俯伏、守候、伺候等义。引申为藏匿、屈服、佩服、使屈服、使佩服、低下去、泛指倒卧、埋伏、居住、住处等义。与“服”、“俯”、“覆”均有音义上的联系，其中很多有交集之义可互通。

## 促

从人足声，本义指急迫、紧迫。引申为狭窄、短、使加快、使行动、靠近、缩减等义。

## 例

从人列声，本义为类例，可比照的事物。引申指比照、规定、按成规的。

## 係（系）

甲骨文为绳索拴人颈部之形，会缚系俘虏之意，后人与绳索分离，成为从人系声的形声字。

按初文所会之意，本义应是用绳索束缚他人，引申为一般的捆扎、束结。《说文》训为“絜束”，应是引申义。系、係、繫三字义近，常互通。究其本义，“系”为联结义，侧重将两个本独立的对象相连，“係”为缚系他人义，作用于人，“繫”为拴绑义，作用于物。其中jì的读音最初源于“繫”，与“擊”一样声旁同为“毄”，见纽。而“系”为匣纽，系、係本均读xì。但由于此三字常互通，故读音也随所借之义而互用。现代简化字统一作“系”。

## 伐

甲骨文像以戈断人首之形，会砍头之意，与人在戈旁的“戍”字有明显区别。战国之后人形与戈分离，成为从人从戈，隶变后楷书作“伐”，而原本从人在戈旁的“戍”字为与之区别则将“人”置于戈左下，楷书写作“戍”。

“伐”本义为砍头，引申为一般的砍、击刺、杀、攻打、抨击、铲除等，古代战争以砍头记功，故又引申为功勋、功业、自夸等义。

## 俘

甲骨文为一只手或两只手抓一小儿之形，或另再从彳。西周以后固定为一只手，后写作“爪”。此形对应后世的“孚”，小篆以后分化出一个从人的“俘”字，此形或说由早期文字从彳的字形演变而来。《说文》将“孚”、“俘”别为二字，将“孚”训为卵孵，将“俘”训为“军所获”。关于此有两种观点：

1. 其实孚、俘二字同源，为古今字，本义就是俘获。“子”在早期字形里明确用于人，通常不会用于动物意义，所以卵孵义应是后起的引申义或假借义，而不是本义。
2. “俘”（早期从彳，后变为从人）是表俘获义的专字，早在甲骨文中即有用例，而“孚”表俘获义则始见于金文，所以“孚”用作俘获义应是通假用法，而“孚”的本义暂不可考，按《说文》是卵孵义，而其常用基本义是“信”，也即信用、诚信，但这种抽象含义大概率也是引申义而非本义。

综合以上观点，作出以下推论：“孚”字构形本义可能是以手抓小儿以使其服从、顺服，据此引申出使信服、信服、信用、诚信等义，成为后世的常用义。而使顺服的本义应用在战争领域，则引申为使敌方人员顺服，也即擒获、俘虏，为专表此义而分化出从彳或从人的专字，后作“俘”。而至于卵孵义应是假借义，与“孚”本义没有引申关系。

故“俘”本义当为俘获，即战争中掳获对方人员，引申指战争中获取对方土地或资源、缴获，作名词表被擒获的敌人，即俘虏。

## 但

从人旦声，本义指赤裸上身。与“裼”互训，音义与“膻”同源，“膻”后又替换形旁分化出“襢”。另有从衣旦声的“袒”字，或说是由“但”替换形旁而来，而《说文》则训本义为衣缝开裂、绽开，即“綻（绽）”的本字，与赤裸身体义有语义上的关联。如依《说文》，则“袒”是由衣服绽裂义引申或假借为赤裸身体义，进而通“膻”、“但”；如不依《说文》，则“袒”是“但”的后起分化字，人、衣作形旁可互通，衣服绽裂才是引申义。后世“膻”多用作“羴”、“羶”的异体字，表羊腥味，“但”则假借为语辞，“裼”、“襢”渐废，“袒”逐渐成为裸露义的专字。

“但”后世多用为副词，相当于只、仅，又表凡、徒，又作连词表转折、假设。

## 傴（伛）

从人區声，本义为驼背。引申为弯腰，表恭敬。现代简化字作“伛”。

## 僂（偻）

从人婁声，本义为脊背弯曲、弯腰，程度较“傴（伛）”更甚一些，引申泛指弯曲。此义读lǚ，如伛偻。又指驼背，读lóu，如佝偻。现代简化字作“偻”。

## 仇

从人九声，本义为配偶。《说文》将字义训为“讎”，“仇”又与“逑”通。仇、逑、讎三字同韵，共属幽部，其中仇、逑为群纽，完全同音，讎为禅纽。讎始见于西周，逑始见于春秋，仇出现最晚，始见于《说文》小篆。这三字的关系大致如下：

“讎”从言从雔、雔亦声，其所从的“雔”即是一对鸟，有匹配、伴侣义，“讎”本义为应答，但也继承了“雔”的匹配、伴侣义，与“儔（俦）”音义皆通，并进一步引申出匹敌、仇敌、仇恨、报复、两相校对等义。

“逑”本义为敛聚，有匹合义，进而引申为匹配、伴侣。也即讎、逑的引申义有交叉，音、义皆近但形不同源，可互通。

而“仇”则是专用于“讎”之引申义与“逑”之读音的后起形声字，音与“逑”同，不具备“讎”的应答义和“逑”的敛聚义。仇最初音同逑，今应读qiú，后因通“讎”而也具有讎的读音，今读chóu。现代一般只在用于姓氏时读qiú，其他情况读chóu。

“仇”可表示同伴、配偶、仇敌、怨恨、报复、校对等义。最初无情感色彩，既可表怨匹，也可表嘉偶，后逐渐专表前者。

现代“讎”字在大多数义项下已作为异体字并入“仇”，用于表应答、校对义以及“仇讎”一词时予以保留，并简化为“雠”。“仇雠”本应读qiú chóu，今读chóu chóu。

## 儡

从人畾声，本义指容颜颓丧的样子，一说是败坏之貌。后多用于“傀儡”一词，表示用以表演的木偶，此义使用“傀儡”二字约通行于唐以后，更早时候称窟礧子、魁礧子、窟磊子等，本字为何暂无确论，傀儡戏一般认为源于丧礼仪式，汉末以后才用于嘉会表演。

个人推测，“傀儡”的本字可能是“鬼”，鬼的上古拟音有lʔ韵尾，后可能分化为双音节词。而傀儡的起源有一种说法即是源于周朝时驱疫逐鬼的神职“方相”，即头戴面具、身着特殊服装主持傩仪的人，与“鬼”字也有形、义上的关联。

## 咎

从人从各，汉隶将“人”置于右上，并逐渐讹为“卜”，楷书整字作“咎”。本义为灾祸，引申为过失、怪罪、怨仇等义。

## 值

从人直声，本义指措置，一说本义为持、拿着。引申为遇到、轮到（工作等）、价值相当、价值、价钱。

## 像

从人从象、象亦声，本义为相似、相像，初用“象”字，后分化出“像”字承担其部分含义。“像”继承了“象”的相似、模拟、仿效、形象、容貌、法式等义，又引申出一些“象”所没有的含义，如雕像、图像、立像、照片等义。象、像常混用，但“象”更倾向于表示事物自然的样子，而“像”更倾向于表示照着本体比拟出的样子。

## 倦

从人卷声，本义是疲劳，引申指懈怠、失去兴趣、厌烦等。

## 偶

从人禺声，本义指桐木雕的偶人，泛指仿人形制成的偶像。又有成双、匹对义，引申为同伴、配偶、迎合、对仗、双数等义，这些义可通“耦”。又有偶然义，即碰巧的、非必然的，引申为偶尔，即低频发生且无规律。偶然、偶尔义或说是“俄”之讹。

## 弔（吊）

初文像一人被一端有箭头的绳子缠绕之形，所会之意不明，有部分观点如下：

1. 会人被捆绑并悬挂在高处之意，本义即是捆缚、吊挂。但悬挂义在宋元以前不见使用，应非本义。
2. 缠绕人身的并非带箭的绳子，而是“虫”的变体，表示蛇虺类的毒虫，整字像巨蛇缠啮人之状，会忧惧、痛苦之意。
3. 《说文》认为是古时葬死者并不埋入土中，亲属带弓箭守候以驱赶禽兽，有哀悼义。此是基于小篆字形做解释，与初文不合。

小篆将箭头形省去，隶变后又将“人”省作一竖，整字楷书作“弔”。后又产生俗字“吊”，为现代简化字所采用。

早期义项为祭奠、悼念死者。与“悼”同为端纽药部，上古同音，此二字可能存在一定的音义关联。最初吊死为吊，吊生为唁，即“吊”用于对祭奠死者，“唁”用于对慰问未死亡的事主，后混称“吊唁”。引申为抚恤、追怀等义。宋元以后又有悬挂义，此义或说是通“釣（钓）”而来。清代又用于货币单位，将一贯钱称为一吊钱，也是取悬挂义。

## 僊（仙）

从人从䙴、䙴亦声。“䙴”为“遷”的本字，初作“𢍱/䙲”，后追加邑旁作“䙴”，本义为升高、向上移。与“人”结合会意表飞升之人，“僊”本义即指长生不死的仙人。汉代时有异体从山声，作“仙”，为现代简化字所采用。

由本义引申指超越凡品的人或事物、宫禁事物的美称、死的婉辞等。又形容轻盈、轻松等。

## 僥（侥）

从人堯声，《说文》本义为南方矮人国之名，称“焦僥”、“僬僥”，此义读yáo。后多用于贪求不止义，引申指希求意外以获取成功，如僥倖、僥覦等，此义读jiǎo。

## 件

从人从牛，本义指分解、分开。引申指被分割开的部分，泛指较小的或个体的事物，也作量词。

## 侣

从人吕声，本义指伙伴、同伴，引申特指夫妻。作动词表示结伴、陪伴。

## 倜

从人周声，《说文》认为周非声符，是因为《说文》成书年代“倜”与“周”的发音已经演变得差别很大了。实际从周（章纽幽部）到倜（透纽锡部）的发音演变是有迹可循的，而倜与其他从周声的字后世读音差距较大或与其长期作为联绵词“倜儻”的首音节字有关。

用于联绵词“倜儻（傥）”，本义为洒脱不羁，引申指卓越不凡。又引申为超然高举、疏远貌，见于“倜然”一词。

## 儻（傥）

从人黨声，用于联绵词“倜儻”，表洒脱义，见“倜”字。又引申为安闲自得、怅然失意、正直、广大等义。又表假设、偶然，此义后俗作“倘”。“儻”现代简化字作“傥”。

## 倒

从人到声，本义指仆倒，引申指倒下、倒塌、垮台、损伤、对调、转移、更换等，以上义读dǎo。由本义又引申指颠倒、反向的、使反向、倾倒、违逆、后退等，作副词表转折、让步等，以上义读dào。

## 儈（侩）

从人會声，本义指介绍买卖以从中获利的人，即今之中介。引申指唯利是图、庸俗可厌。现代简化字作“侩”。

## 低

从人从氐、氐亦声，“氐”有根、本义，根深埋地下，从而会意。本义为下、高度小，与高相对。引申指某种属性在一般标准之下。作动词表示使向下。

## 債（债）

初文为“責”，“責”本义为索取，引申出欠负的钱财之义，即债务，此义后加人旁分化出“債”字。引申指应兑现或应偿还的事情。作动词表借贷、租赁、讨债等。现代简化字作“债”。

## 價（价）

从人賈声，本义指事物所值的钱财数，即价格。引申指抽象的价值、地位等。明清时开始假借本义为善的“价”字作“價”的俗字，为现代简化字所采用。

## 停

初文为“亭”，因亭可供人停留食宿，故引申出留止义，秦汉以后分化出从人的“停”字专表此义。引申指停下、暂住、停放、搁置、蓄积，又通“亭”有抚育、妥贴、均匀、正等义。

## 伺

初文为“司”，“司”由掌管义引申出观察、窥察义，此义后分化出从人的“伺”、从見的“覗”，此二字可互通。“伺”在此基础上进一步引申出守候、等待义，此义可通“俟”、“竢”。以上义读sì。“伺”又引申为照料起居、守候身边以供使唤，此义读cì。

## 僧

从人曾声，译音字，梵语samgha音译为“僧伽”，字面义为“大众”，原指出家佛教徒四人以上组成的团体，后也指单个和尚，泛指出家修行的男性佛教徒，取首字简称作“僧”。

## 佇（伫）

从人从宁（zhù）、宁亦声，“宁”本义为积藏，引申出久远义，进一步引申指久立，后造从人的“佇”字专表久立义。又引申指等待、盼望等。“佇”也通“宁”表积聚义。现代简化字因将“寜”简化为“宁”，为作区分，所有从宁（zhù）声的字均将声旁写作“㝉”，“佇”即类推简化为“伫”。

## 偵（侦）

初文为“貞”，有占卜、卜问义。后引申泛指问、探问，分化出从人的“偵”字专表此义。进一步引申为探伺、暗中察看、侦察、探子等义。

***

# 𠤎部

## 𠤎

倒人形，不独立成字，仅用作偏旁。

## 眞（真）

构形及本义无定论，有两种主要说法：

1. 与“貞”本同字，“貞”指占卜，可示真伪，故引申出真实、正确义，后字形与“貞”逐渐分化。
2. 初文（西周伯真甗）下部是“贝”和“丁”（可能表声），上部是“顛”的表意初文。本义当是顶，是“顛”的初文。“丁”后讹为“丌”。

至小篆，讹为从𠤎、目、乚、八，完全失去初文构形，隶变后楷书作“眞”，俗作“真”，为现代简化字所采用。

《说文》依据讹变后的小篆字形解为“仙人变形而登天也”，与初文不合。常用基本义为本质，引申为真实、真诚、正、真切、的确等义。由本质义又引申为本样、肖像、道家称得道成仙之人等。

## 化

为一正一倒的人形，会变化之意，后世字形变化不大。本义是变化，即事物的性质或形态发生改变。引申指使变化、用言行影响使转变、习俗风气、生成、融化、消除、消散、自然变化规律等。

***

# 匕部

## 匕

一种长柄浅勺的象形，本义即是指这种取食器。后将一种形状类似匕的勺体前端的短剑称为匕首，即是匕之首之意。

## 匙

从匕是声，本义指取食器匕，后泛指各种取食用的勺类器具。

## 頃（顷）

从頁从匕，“頁”表人头，所从之“匕”或说是另一人形变体，但整字所会之意比较确定是头不正。引申泛指倾斜，此义后作“傾”。又因歪头动作时间很短，而引申出极短时间之义，如顷刻。又引申为不久之前、时间的约指、时候、当时、往昔等。又借作土地面积单位。

## 卬

从匕从卩，其所从之“卩”为一人跪跽之形，“匕”会意不明，或认为在此处同“比”。《说文》本义为“欲有所庶及”，即希望达到某种境界，也即仰望。此义后分化出“仰”。又引申指抬起、扬起、高昂等义，这些义后作“昂”。

## 卓

构形不明，《说文》解为从匕从早，与西周字形不合。《说文》本义为高，此义确为常用义，但是否为本义暂不确定。由高义引申为高远、直立、超凡、独特等义。后世又将高于几案的置物家具称为“卓子”，即取其高并直立之义，并根据木制特点加注木旁作“棹”，但“棹”字古已有之，本是“櫂”的异体字，表示船桨。为与船桨义的“棹”相区别，后将家具义的“棹”写作上下结构，并将卓的下部与木的上部相重叠，整字作“桌”。

## 艮

从匕从目，匕有相比、相对之义，会两人怒目相视、互不相让之意。由此引申出静止、坚固、坚硬、艰难等义，以上义读gèn。引申指食物硬或韧而不易嚼、言语率直不委婉等，读gěn。

***

# 从部

## 从

像一人跟随在另一人身后之形，本义是跟随、随行。引申指听从、顺从等。后世繁作“從”，详见“從”字。

## 從（从）

初文为“从”，商代时即追加辵旁，增强动作属性。入周以后或从辵，或从彳，或从止，此三者义符互通，而其二人之形或繁作三人，或省作一人。小篆固定为从辵从二人，隶定作“𨑢”。隶变后，“辵”并未按常规变作“辶”，而是保持彳、止分离，整字作“從”，或将“从”进一步简化为“䒑”，整字作“従”。晋代又或再赘加辵旁，成为“䢨”。后世楷书從、従并存，以“從”为正体。现代简化字回归初文，作“从”。

本义是跟随、随行。引申指听从、顺从、依照、参与、次要的、堂亲、仆从，又作使动用法表使跟随，即率领。又引申有宽缓义，如“從容”即是由此引申出的舒缓安闲义。而宽缓义的使动用法，则分化出“縱（纵）”字承担，即专表使宽缓，如“縱容”即与“從容”有明显区分，從容用于形容自身舒缓的状态，而縱容表示使他人舒缓。

## 并

像腿部连在一起的两人之形，本义为将两个或多个事物合为一个，即合并。隶变后楷书作“并”。《说文》训为“相从”，与初始用义不合。由本义引申为聚、一并、一同。

另有从二立的“竝”字，异体作“並”，本义为並列。与“并”音义均有区别但近似，“并”属帮纽，“竝（並）”属並纽，上古发音有清浊之分。古文献中“并”与“竝（並）”时常互相通假。另外又有从人并声的“併”字，《说文》训为“並”，也即併与竝（並）同义。现代简化字将以上所有字统一合并为“并”。

***

# 比部

## 比

从二匕，“匕”为古代一种长柄浅勺，二匕并列会紧挨、邻并之意，“匕”也兼表音。《说文》将其形解为“二人为从，反从为比”，有误。商周文字中“比”所从的“匕”形与“从”所从的“人”形存在形态上的区别，而不仅仅是方向相反，不过“从”与“比”因形近偶见互假，这也是导致后世辨析初文时发生困惑的一大原因。

本义为紧挨、邻并。引申为亲近、依附、勾结、一齐、相较、依照、比喻、比得上、辈等义。作副词表示全都、接连等，作介词表等到。又由本义引申指齿密的梳子，后作“枇”、“笓”、“篦”。

***

# 北部

## 北

像二人向背之形，为“背”的初文。本义是向背、相违。引申指后背、背叛等义。由背对义又引申指败逃，即“败北”，进而引申指败逃的军队。后被假借用作方位词，与南相对，于是另造从肉的“背”字表本义。

## 冀

初文为一长有双角的怪头人形，本义不明。至小篆，人头讹为“田”，人身讹为“共”，头上双角讹为“北”。《说文》据此讹形释其义，则不可信。

一般用作地名，指古九州之一的冀州。又假借为“覬（觊）”，表希望、期望。

***

# 丘部

## 丘

甲骨文像地面突起的两个小土山之形。后两土山之形逐渐讹为“北”形，战国时或追加土旁以加强表义。小篆则彻底讹为从北从一，隶定位“㐀”。隶变后进一步变形为“丘”。

本义为自然形成的小土山、小土堆。而大土山则用从丘虍声的“虚”字表示，因“虚”后多用于引申义，故造“墟”字表其本义。常丘虚（墟）并称，指代山陵、荒地，特指人群聚居区破败后所形成的荒凉景象。“丘”字后字义扩大，也泛指各种山。又引申指坟墓，因其形状与土丘相似。又作姓氏。孔子名丘，而孔子在后世被尊为圣人，为避其讳，“丘”字多缺笔，清雍正时则明令将“丘”改为“邱”，后虽恢复了“丘”的用法，但作为姓氏时至今仍作“邱”。

## 虛（虚）

从丘虍声，隶定为“虗”，隶变为“虛”，楷书又作“虚”。本义指大丘，即大土山。上古时人群多聚居在大土山的坡地、平台上，故“虚”也引申为集市、住所、区域、居住等义。又因城邑破败荒废后其状与土丘相似，故用丘虚指代废墟、荒地，此义后作“墟”。“虚”由大丘的本义又引申为空旷，进而引申为空虚义，与实相对。进一步引申为稀少、空闲、空隙、薄弱、虚假、耗尽、空出、凌空、凭空地、徒劳地等义。

***

# 㐺部

## 㐺

从三人，会众多意。是“眾”的初文或省形。

## 眾（众）

甲骨文从日下三人，会多人在日下（劳作）之意。西周时或将“日”改为“目”，为后世字形所本，楷书作“眾”。汉隶又或在“目”上羡出一撇，此形楷书作“衆”。现代简化字作“众”，本质上是“㐺”的异体。

本义指很多人，引申特指百官、军队等。由本义引申泛指多，进而引申为广泛、普通、集中、群等义。

## 聚

从㐺取声，本义是会集。引申为使会集，即召集、积蓄、征集等。又作名词表集团、一众、聚居区等。

***

# 𡈼部

## 𡈼

像人挺立地上之形，西周时人形中间形成一圆点，此点后变为短横，隶变后楷书作“𡈼”。与“壬”隶变后的字形相近，但“壬”早期字形为上下对称，与“𡈼”差异明显，楷书中则以中横长短作区分。

一般认为本义为挺立，是“挺”的初文。但《说文》又训为“善”，此义来源不明。

## 徵（征）

从辵从𢼸省，其右侧是“𢼸”省去攴所剩的部分，像人生有长发之形。战国时将辵换为口。《说文》古文又加攴旁，使得口旁以外的部分成为完整的“𢼸”。小篆则省去“𢼸”中人身的部分，并加彳、𡈼，其所加的彳、𡈼当是辵的讹变。隶变后楷书作“徵”。

本义待考。常用于音名，为古代五音之一，此义今读zhǐ。《说文》训为“召”，即征召，引申为寻求、证明、迹象等，以上义今读zhēng。“徵”与“征”最初音义皆不通，“征”为征伐义，后世语音流变使其成为同音字，开始出现借“征”表“徵”的用法，现代简化字据此将“徵”字读zhēng时对应的所有义项并入“征”，而在其读zhǐ表音名时，仍用“徵”。

## 朢（望）

甲骨文像一人站立地上张大眼睛之形，会远望之意。西周时，口语中产生月相的朔朢一词，遂借此字为声，加注月旁表朔朢之“朢”，也即满月，同时也兼表远望的本义。此形延续到楷书写作“朢”，人眼部分写作“臣”，人身挺立地上之形写作“𡈼”。西周时又或将表示眼睛的构件（臣）变为“亡”，既是形近讹变，也兼表声，此形后成为“望”。朢、望最初仅是异体关系，无字义上的差别，后逐渐分工，“望”专表远望义，“朢”专表满月义。现代简化字将“朢”并入“望”。另外，现代规范字又将字内的𡈼变为王，成为声符，但失去表义功能。

***

# 重部

## 重

初文为一人身后背着橐（口袋）之形，会沉重之意。后将人形与橐形合并，共用竖笔。春秋以后，在下部追加土旁，人、東（橐形）、土共用中间的一竖笔。隶变后或省去“東”下部原本表示捆扎口袋底口之绳索的两斜笔，整字作“重”。

本义为沉重，引申为稳重、浓厚、端庄、程度深、权势、重要、重视、重任、重量等。以上义读zhòng。由厚、深等义引申出重叠、重复义，进而引申为多，作副词表再次，作量词表层，这些义读chóng。

## 量

从日从重，最初所从之“重”尚未加“土”，后增加土旁。小篆将“重”顶部人的部分省略，成为《说文》所谓“从重省”，实际初文是不省的。初文构形及会意不明。《说文》本义为称轻重，这也是常用的基本义。后泛指测定事物的某种属性，不仅限于重量，即测量义。引申为估量、考虑、商量、酌情、可测量的某种属性、数目、法度、容纳的限度、器度等义。

***

# 卧部

## 卧

像人大目低垂之形，“臣”为竖立的眼睛，人伏于几案上时眼睛会竖立，故会伏案休息之意。楷书中人形讹作“卜”，整字作“卧”。

本义即是伏案休息，与“寝”有别，躺于床称寝，伏于几称卧。后也泛指倒伏、躺。引申指睡、隐居、伏藏、停息等义。

## 監（监）

初文像人跪跽在盛水的器皿旁俯首照看之形，本义是以水为镜照视自己。后俯首大目的人形演变为“卧”，有水的器皿则演变为“血”形，其实“血”的初文就是皿内一点表示祭祀时所盛的血液，与这里皿内加一点表示水的象形原理一致，字形也完全一致。此形隶定为“𧗄”。隶变后省去皿中表示水的一点，并将人身之形讹为“亼”形，整字作“監”。元代时出现草书楷化字“监”，为现代简化字所采用。

由本义引申为从旁察看，即督察，进而引申为掌管、总领、官名、官府名、囚禁、监狱等义。又有本义引申出照映、镜子、借鉴等义，这些义后作“鑑”，或讹为“鑒”，省作“鍳（鉴）”，详见“鑑”字。

## 臨（临）

初文像一人俯首下视一堆物品之形，“品”兼表声。后演变为从卧品声，隶变后楷书作“臨”。

本义为从上往下俯视，引申为统治、降临、位尊者到位卑者处来等义，也泛指来到、靠近、面对、遭逢、对照范本摹习（书画等），作副词表即将。

***

# 身部

## 身

甲骨文像突出中间部分的人身躯之形，或在突出之处中间加一点作指事符号，以强调所指的位置。西周时又在腿部加一横，以示边界。本义当是指人颈部以下、大腿以上的躯体。小篆将中间起指示作用的点写作横，将腿部指示边界的横写作斜笔。隶变后楷书作“身”。

本义指人颈部以下、大腿以上的躯体。引申指头以外的部分，又指整个身体。后不限于人，泛指各种动物的身体，进一步引申指物体的主体、主干部分。由身体义引申为自己、亲自、生命、地位、品德、穿着、担当、身孕等义，又作量词用于衣物。

另有观点认为“身”、“孕”本一字，“孕”是人隆起的腹部内有一子之形，表示怀孕，而“身”字内部的一点即是“子”的省形。此观点不妥，早期文字中“孕”与“身”有比较明确的区分，且按此说无法解释“身”字下部的一横，身字确实可引申指身孕，但这属于义项引申，不可作为字形混同的证据。对此暂不采纳。

## 軀（躯）

从身區声，本义指身体。引申为身孕、生命。又作身体的量词。

***

# 㐆部

## 㐆

“身”字反形，不独立成字。

## 殷

像手持一物伸向一人腹部之形，所会之意不明。人身固定朝右，与“身”字相反，后写作“㐆”，手持物之形后作“殳”。

《说文》训为“作乐之盛”，是否为本义尚待考。常用义有盛大、丰富、深厚、居中等。一种观点认为初文之形是表示人内腑有疾病，用器物治疗。如按此说，则可由探察、治疗人体内部而引申出“深”义，进而引申出深厚、盛大等义。

***

# 衣部

## 衣

像上衣之形，本义即是上衣。上曰衣，下曰裳。后泛指衣服，又引申指蒙覆在物体表面的薄层。作动词表示穿衣服、给人穿衣服、覆盖等。

## 裁

从衣𢦏声，本义为制衣。因制衣需要剪布料，故引申指剪裁、减除、割断。制衣时要取舍布料剪裁的形状、大小等，又引申出判断、裁决、取舍等义。由本义又引申指规制、体制、文体等。

## 衮

从衣公声，本义指天子或三公穿着的绣有卷曲龙纹的礼服。后借以指代天子、三公。又由其图案特点，引申有卷曲义。

## 表

从衣从毛，秦文字将“毛”置于“衣”内部，汉隶将“毛”移至“衣”之上，后变形为“表”。《说文》古文从衣麃声，作“𧞧”，是形声字。

本义指外衣，多用野兽毛皮制成，与“裏（里）”相对，“裏”指衣服内层。引申泛指外层、表面，也与“裏”相对。进而引申为使显露，包括彰显、表达、标明、说明、表示、启奏等。由启奏义引申为奏章。由彰显义引申指出于标识路程而立的柱子，后演变为装饰用的华表。由表柱之形又借以指测日影的工具“圭表”的组成部分，即其中竖立的标杆，又称“臬”。因标杆必须要直，故又引申出正直、表率等义。由外层义引申指父亲姐妹、母亲兄弟姐妹所连带的亲属关系（非同姓），即表亲，以示其血缘关系与堂亲相比更偏外。由表明义引申指标示某种度数的仪器，其中金属制的计时器后分化出专字“錶”，现代简化字又简化回“表”。又指表格，也是取其能清晰表示数据之意。

## 裏（里）

从衣里声，初文为里外结构，作“裏”，或体改为左右结构，作“裡”。现代简化字统一并入“里”。

本义指衣服内层，引申为内部、事物不可见的部分等，与“表”相对。

## 襁

从衣强声，本义指背负婴儿的衣物、布被，与“褓”同义，多连称“襁褓”。“襁”更偏背负义，“褓”的本字是“保”，更偏保育义。

## 衽

从衣壬声，秦时或从任声作“袵”。本义指衣服胸前交领的部分，与“䘳（襟）”互训。引申指扣合、整理衣襟。又指睡觉用的席子，引申指睡卧、以某物为卧席等。

## 褸（褛）

从衣婁声，本义指衣襟。又用于联绵词“襤褸（褴褛）”，也作藍縷、褸裂等，指衣服破烂。

## 䘳（襟）

从衣金声，西周时为内外结构，小篆改为左右结构。本义指衣服胸前交领的部分，与“衽”互训，又称“衭”。晋代以后出现替换声符为“禁”的或体“襟”字，后世楷书又出现从今声的异体“衿”字，与“衾”的异体字同形。后世其字义逐渐分化，“襟”表本义，“衿”多转指衣领，即围着后颈的部分。“衿”又指衣带，此义是通“紟”而来。

因位于胸前，故引申指胸怀、心怀。又引申指前面，与“背”相对。“连襟”一词即是以胸怀相连比喻彼此知心，初用于知己好友，后成为姐妹丈夫互称的专用词。

## 襲（袭）

西周金文、《说文》籀文均从衣龖声，隶定作“𧟟”。小篆省从一龍，上下结构。汉魏时结构多变，楷书固定为上龍下衣，作“襲”。现代简化字作“袭”。

本义指给死者穿的左衽（衣襟左掩）不纽（不用纽扣，用布带系死结）的衣服，与活人衣着形式不同以示阴阳有别。引申指给死者穿衣。中国传统习俗给死者穿的寿衣是层层包覆的，故而引申指衣上加衣，字义扩大不仅限于死者。进而引申出遮盖、重叠、重复、积累、继承、沿用、抄袭等义。由多层衣服引申作成套衣服的量词，或也用于单件衣服。又有出其不意进攻之义，此义来源不明，疑是假借而来，由此义引申为触及、熏染等义。

## 袍

从衣包声，本义指带夹层、内有乱麻或棉絮的长衣，与“襺”类似，以絮（粗绵）曰襺，以緼（乱麻）曰袍，后多混称。泛指不分上衣下裳的中式长衣，又指外衣，特指战袍。

## 袤

《说文》籀文从衣楙声，隶定作“𧝺”，小篆替换声符为“矛”，作“袤”，为后世文字所本。本义指衣带以上的部分。又指南北向的距离，南北曰袤，东西曰廣（广）。由此义引申指辽阔，也泛指长度。

## 褎（袖）

从衣𥝩声，其声旁“𥝩”是“穗”的本字。俗体从衣由声，作“袖”。现代以“袖”为正体。

本义是衣袖，即衣服套在胳膊上的部分，与“袂”互训。引申指藏于袖中，如袖手。“袖珍”一词本指可藏于衣袖中的小巧珍玩器物，引申指体积小巧的事物。

## 袂

从衣夬声，本义指衣袖，与“褎（袖）”互训。

## 褱

从衣眔声，本义指怀夹，即利用衣服裹夹腋下所持之物。引申指怀藏、包围、怀孕、思念等义，这些义后均作“懷（怀）”。“褱”可视作“懷”的古字。

## 裾

从衣居声，本义指衣服的前襟，也指后襟。

## 襃（褒）

从衣𠊻省声，“𠊻”是“保”的古文异体。隶变后楷书作“襃”，后又将其中间的𤓽（𠊻省声）写作“保”，整字作“褒”。

本义指衣襟宽大，引申指宽大、广大。古代天子赏赐给诸侯的礼服称“褒衣”，引申为嘉奖、赞扬。

## 複（复）

从衣复声，本义指有里子、夹层的衣服，引申指多层、多重、重复、复杂等。现代简化字并入“复”。

## 裔

从衣㕯声，本义指衣服边缘。引申指边远地带、年代久远的后代等。

## 袁

甲骨文从又从衣，为以手曳衣之形。或加注“○”表声，或在上部加“止”（这里的“止”或说是另一手形的讹变）。西周时“○”移至“衣”内部，上部固定为“止”，省去“又”，小篆将上部讹作“屮”形，隶变后整字作“袁”。

《说文》本义是“长衣貌”。一说是“擐”的初文，本义是穿衣。结合袁声字（如遠、轅、園）的共同特征（长、直、平整）以及初文构形，“袁”的本义应该与手将衣服拉直有关。后主要用作姓氏。

## 襦

从衣需声，本义指上身穿的短衣、短袄，长不过膝。

## 襄

从衣𤕦声，“𤕦”的初文构形争议颇多，在这里一般认为只作声符。隶变后简省作“襄”。《说文》本义为“解衣耕”，语焉不详。或说是脱衣耕田，或说“衣”指地的表皮，“解衣耕”是一种扒除耕地表层使湿润土壤暴露以供播种的耕作方式，按此说则“襄”可能是“壤”的先造字。

基本义主要围绕除去和高举这两个方向，由除去义引申为平定，由高举义引申为辅助、成就、漫上、高等。

## 被

从衣皮声，本义为被子，狭义指小被，与“衾”相对。因被子是盖在身上的，故引申出表面、覆盖、施加、遭受等义，由遭受义引申作介词、助词表被动。又引申指搭衣服于肩背、穿着，此义后作“披”。

## 衾

从衣今声，小篆内外结构，隶变后改上下结构。本义指大被，泛指被子。

## 褻（亵）

从衣埶声，西周时上下结构，小篆以后改为内外结构。本义指居家或私下穿的便服。引申指亲近、轻慢、轻佻不庄重、肮脏、淫秽等义。

## 衷

从衣中声，本义指贴身内衣，“褻”的一种，特指穿在里面的。引申指贴身穿着、包围。因贴身内衣紧挨心口，故引申为内心。又引申为中心、正、忠诚，可通“中”。

## 裨

从衣卑声，本义指用布接续、补缀不够长的衣物，引申指补助、弥补。以上义读bì。又引申为副佐、小等义，读pí。

## 雜（杂）

从衣集声，隶定作“襍”。秦隶将“集”下部的“木”置于整字的下方，小篆则进一步将“木”置于“衣”下，将“隹”置于整字右侧，汉隶二形兼有，楷书承袭小篆结构，并将“衣”变形作“𠅃”，将“木”变形作“朩”，整字作“雜”。汉隶有或体将“衣”讹为“九”，即“雑”，现代简化字依据此俗体，进一步省去“隹”，写作“杂”。

本义指以各种彩色搭配制作衣服，引申指搭配、混合、集合、使紊乱、紊乱、不纯、非正式等义。

## 裕

从衣谷声，本义指衣物富余，引申指富饶、使富饶、宽容、扩大等义。

## 衦

从衣干声，本义指把衣服的褶皱压平展。宋代以后产生从手幹声的“擀”字，表示用手或棍棒碾轧物体以使其平展，其本字即当是“衦”。

## 裂

从衣列声，《说文》本义是缯余，即裁剪丝帛的残余。文献中多用于撕破布帛、绽裂之义。其声旁“列”本义即是分裂、分解，“裂”是其分化出的作用于布帛时的专字。后也通“列”泛指各种事物的破开、分开、裂缝等，由分开义又引申为割据、划分土地。

## 袒

从衣旦声，本义指衣缝裂开，读zhàn，此义又作“䘺”、“綻（绽）”。又指脱去上衣、露出身体，通“但”、“膻”、“襢”，此义读tǎn。

## 補（补）

从衣甫声，本义指修缝衣服使其完整。引申指修补、填补、弥补、补充、济助、滋补等义。现代简化字替换声旁为“卜”，作“补”。

## 褫

从衣虒声，本义指把衣服剥去，引申指夺去、革除、废弛、拉扯等义。

## 𧝹（裸）

从衣𦟀（luǒ）声。或体从果声，作“裸”，固定为左右结构，与内外结构的“裹”非同字。本义指赤身露体。引申指露出的身体。泛指外面没有东西包裹的事物。

## 衺

从衣牙声，《说文》与“𩎮”互训，并未解释，字从衣本义应与衣物有关，一般认为本义是回违、重裹。文献中多用于偏斜、不正、邪恶、怪诞等义。战国末期开始假本义为地名的“邪”字表示行为、思想上的不正，“衺”仅保留方位上的偏斜义。南北朝开始又用“斜”表方位上的不正，“衺”字遂废。

## 襭（撷）

从衣頡声，或体从手，作“擷”，现代简化字采取后者，简化为“撷”。本义指用衣襟兜东西。引申泛指摘取，故将形旁替换为手。

## 装

从衣壮声，本义指缠束好的行囊、包裹。引申指泛指衣服、装备。作动词表整备行装、将东西放进器物里、安装、穿戴、打扮、修饰、假扮等义。

## 裹

从衣果声，固定为内外结构，与左右结构的“裸”非同字。本义是缠束，引申指包罗、携带、夹杂等。作名词表示打包好的物件。

## 褐

从衣曷声，本义有二，一为用粗麻编成的袜子，二为用兽毛或麻编织成的粗衣。泛指贫贱人穿的衣服，引申指卑贱的人。又引申作颜色名。

## 褗

从衣匽声，本义指衣领。

## 衰

“蓑”的初文，是蓑衣的象形，上有笠，中间是人头部，下为草衣形。秦文字改为从衣，中间是初文中像草衣形的构件，隶定为“𧜸”。隶变后将中间部分简化，整字作“衰”。

本义指用草编的用于遮雨的衣服，即蓑衣。因蓑衣是用草逐次层叠编成的，故引申出按等级递减的含义，进而引申为减退、衰落、虚弱等义，后造从疒的专字“𤸬”专表此引申义，但未成主流，后世仍用“衰”字。又造从艸的“蓑”字表本义。“衰”又作古代丧服名，用粗麻布制成，此义也作“縗（缞）”

## 卒

甲骨文字形为在“衣”上加交叉线，西周金文改为在“衣”形下部加一短划。后世沿袭西周字形，隶变后作“卒”。

《说文》训为“隶人给事者衣为卒。卒，衣有题识者”，即指衣服有标记的差役。另有观点认为其初文所会之意是衣服已缝制完毕，故本义当是完毕、停止。此二者孰为本义暂无确论，且很难建立引申关系，其中之一可能是假借而来。由差役义引申指服徭役的人、步兵，也泛指士兵。由完毕义引申为大夫死亡的专称，后泛指死亡。又作副词表最终。又引申为突然、迅疾义，此义后作“猝”。

另有一种观点认为“卒”的终止义可能是通“遂”，卒、遂上古音近，仅清浊差异，可备一说。

## 褚

从衣者声，本义有二，一指兵卒，二指用丝绵装进衣服。作名词指丝绵衣服。后主要用作姓氏。

## 製（制）

从衣制声，本义是裁衣。引申为制造、撰写等。与“制”含义有重叠，表制造义时，“製”偏向用于具体物品的制作，“制”偏向用于抽象事物的创制。现代简化字将“製”并入“制”。

## 襖（袄）

从衣奥声，本义指皮裘类的衣服，用以御寒，后也指有衬里的上衣。

***

# 裘部

## 裘

甲骨文像外有毛的衣服之形，本义即是用动物毛皮制成的衣服。西周时在衣形内部加“又”作声符，后省去衣服外围的毛形，变为从衣又声。后又将声符替换为“求”。初为内外结构，隶定为“𧚍”，楷书改为上下结构，写作“裘”。

曾有观点认为“求”、“裘”同源，但从字形和早期韵部（裘、又同属之部，而求属幽部）来看，这两个字的源头并不相同，“裘”本为象形字，其转为形声字最初也是从又声，是在西周中期语音流变后才产生从求声的写法，而“求”的初文更像是一种虫类的象形，或说是“蛷”的初文，在晚期“裘”字中仅表声。而古籍中“求”用作“裘”义应属假借。

本义为皮衣，引申指穿上皮衣。也假借为“求”，表求取义。

***

# 老部

## 老

与“考”本为一字，甲骨文像长发老人拄拐杖之形，会年老意。拐杖形有两种形态，一是竖立的杖向一旁分叉，一是在杖顶有握把，这两种形态分别演化为后世之“匕”形和“丂”形。但这两种写法早起所表含义没有区别，均为年老义。西周中晚期开始有所分化，从丂形的字逐渐用以表示对去世父亲的称呼。隶变后，从匕形的演变为“老”，从丂形的演变为“考”，字义也逐渐分化。

本义为年纪大，也指年纪大的人。引申指有经验的、历时长久的、原来的、困乏、烹煮过度、菜果等过了适口时期、排行最末等义。又引申为晚年、父母、老去、致仕、养老等，又作为死的婉辞。又作词的前后缀。

## 耊（耋）

从老省、至声，后世或体不省，作“耋”，现代以“耋”为正体。本义指年八十岁，一说七十岁。也泛指老年。

## 𦽡（耄）

从老、蒿省声，后世或体从老毛声，作“耄”，现代以“耄”为正体。本义指年九十岁，也有说七十岁、八十岁。泛指老年，引申指昏乱。

## 耆

从老省、旨声，本义为年老，也特指六十岁。引申指长者、强横。

## 耇

从老省、句声，本义指面部有寿斑的长寿老人，泛指年老高寿。

## 壽（寿）

初文从老省、𠃬声，“𠃬”为“疇”的象形初文。西周中晚期在底部加口，或加又，或口、又并存。战国时将“又”讹作“寸”。小篆不从寸，隶定作“𦓆”。汉隶多从寸，而将上部简化，楷书作“壽”。现代简化字依草书楷化作“寿”。

本义指活得长久，引申为久远、寿命、使用期限、年、生日（多用于中老年人）等义。

## 考

与“老”本为一字，甲骨文像长发老人拄拐杖之形，会年老意。后分化为老、考二字，详见“老”字。

本义为年纪大，也指年纪大的人。此义为老、考二字所共有。“考”后又作为对去世父亲的称呼，此义为“考”字所独有。后又假借为“攷”字，表考查、研求等义，详见“攷”字。

## 孝

甲骨文为一子（孩子）承扶老人之形，会孝顺之意。其老人之形与“老”、“考”所从之形相同。《说文》解为“从老省、从子”。

本义为“善事父母”，即奉养、尊敬、顺从父母。引申指孝道，又用于长辈去世后丧礼相关事务的名称，如孝服、守孝等。古代以祖先为鬼神，故又由本义引申出祭祀义。

***

# 毛部

## 毛

初文为毛发的象形，本义指人、兽身上的毛发，最初不包含禽类的羽毛，后者用“羽”字。后世词义扩大，凡绒毛状物体统称为毛。引申指多而细碎、小、半加工的、粗糙、贬值等义。又有地表长有草木之义，此义或说通“芼”，或说通“苗”，也可能就是从毛的本义引申而来。

## 氈（毡）

从毛亶声，本义指加工动物毛而成的块片状材料，即毡子。俗体从占声，作“毡”。

## 毬

不见于许慎《说文》，小篆字形为五代徐铉所收，此字始见于唐代文献，应较为晚起。从毛求声，本义为蹴鞠用的皮球，用皮革制成，内装兽毛，故从毛。是“鞠”字在后世读音变化后所新造的形声字，与“鞠”是古今字关系。后泛指圆形、成团的物体。近代以后又假借本义为美玉的“球”字为之，现代以“球”为正体，“毬”字遂废。

## 氅

从毛敞声，始见于南北朝，本义为鶖（一种水鸟）的毛。后世用以指大衣、外套。

***

# 尸部

## 尸

初文为一屈膝的人形，或说是侧卧之形，或说是箕踞之形。根据尸部字的总体特征，“尸”字本义应该与现代意义上坐的动作有关，即泛指微曲膝盖、臀部承重的姿势。其辖字或直接表示此类动作（居），或与休息相关（凥、㞒、屖），或与臀部相关（尻、𡱂），可为旁证。

古籍中或假“夷”为“尸”，甲金文又或假“尸”为“夷”，中原人以“坐”为常见姿势，即跪着并将臀部坐在脚跟上，而东夷人以踞坐为常见姿势，即臀部着地、腿向前伸，故以“尸”指代东夷。

殷商时期或更早，有一定社会地位的人死后会被扶坐在高台上受祭祀，其姿势与踞坐相仿，故称其为“尸”。对于死去已久的先祖，则由生人化妆后充任尸主接受祭祀，也称为“尸”。后世受祭之尸逐渐被陈列木刻牌位、画像所替代，故又引申为神主、神像。进一步引申为陈列。因曾用以指代受祭之死者身体，故引申出尸体义，即死后的身体，后分化出从死的“屍”字专表此义，尸、屍为古今字关系。现代简化字将“屍”并入“尸”。

因“尸”多用于引申义，其踞坐的本义后由“居”字承担。

## 居

与“尸”本义相同，即臀部着地、脚伸在前面的坐姿。古代“坐”指膝盖着地、臀部坐在脚跟上，“跪”指膝盖着地、身体向上挺直，“蹲”指足底着地、双膝立起、臀部下沉，“居”指臀部着地、脚伸在前面。

或说“居”即箕踞，但箕踞强调双腿伸直并分开，形成簸箕形，而“居”字所指应更泛，且所从之“尸”的初文字形明显膝盖是弯曲的，与箕踞姿势不完全一致。故“居”应泛指臀部着地的坐姿，“箕踞”是属于“居”的一种更狭义、更具体的形态。

由本义引申为居住、住处、停留，这些义的本字为“凥”，后逐渐被“居”替代。“居”用于引申义后，其本义则另造“踞”字表示。“居”又进一步引申为处于、相处、积蓄、安放、担任、占据等义，又作语气助词。

## 㞕（屑）

从尸䏌声，始见于《说文》。古文字材料不见“㞕”字，或认为是早期“逸”字形中的部分构件的讹变。一种可能是源于石经古文从水、从爿、从兔的“逸”字，此形后隶定位“𤖚”，其中“爿”讹为“尸”，“兔”（隶定体中[夂+夂]的部分）讹为“䏌”，于是整字去掉水旁后的部分演变为“㞕”字。另一种可能是源于秦文字（如秦子戈）中从爿（或彳）、从兔、从肉的“逸”字，其中兔头部分讹为“尸”，兔身部分讹为“八”，加上底部的“肉”，整字去掉爿后的部分演变为“㞕”字。东汉以后改从肖，可能是讹误，也可能是读音流变后替换声符而来。

一般认为石经古文“逸”字通“歌钟一肆”之“肆”，表乐舞行列之义，与“佾”本一字。如上述观点属实，则“㞕”也是“逸”、“佾”的另一分化异体。

《说文》训为“动作切切也”，后世解释不一，或释为“不安”，或释为“敬”，或释为“洁”，或释为“劳”，或释为“顾”。后世常用义有二，一是顾惜，二是琐碎、碎末。或认为此二义均是由所通之“肆”的“陈列所解牲体”义引申而来，牲体分解为小块，故有碎末义，陈列义则引申为省阅、看，进而引申为顾惜义，可备一说。

## 展

从尸、𧝑省声，隶定作“㞡”，隶变后作“展”。《说文》训为“转”，一说本义为“舒”。其中辗转义后作“輾”。由舒展义则引申出张开、放宽、展示、发挥、显现等义。

## 屆（届）

从尸凷声，声旁“凷”为“塊（块）”之初文。隶变后所从之“凷”的中竖贯通到底横，至楷书进一步将“凷”讹为“由”。本义为行动不便，受阻不得进。引申为极限、终止、到达等义。近现代用为周期性事件的量词。

## 尻

从尸九声，本义为臀部，脊骨的末端。

## 𡱂（臀）

甲骨文为人形，臀部有一指事符号，指示所表的部位。西周（师寰簋）加尸旁，原代指事符号的人形微讹，近似“丌”、“爪”之形。一说初文为“𠂤”，是臀部的象形，后加尸旁，例见永盂，后讹为师寰簋该字之形。后在底部加“丌”表示基座，强调人体所坐之处。至说文小篆，尸下讹变的构件进一步讹为“丌”，而原本底部的“丌”则讹为“几”，此形隶定作“𡱂”。《说文》或体为从肉殿声，即“臀”。其声旁“殿”是在战国时由𡱂孳乳而来，本从攴𡱂声，后所从之“攴”改作“殳”，隶变为“殿”。后世臀行𡱂废。

本义为屁股，引申为器物底部。

## 尼

像一人坐于另一人背上之形，会靠近之意，是“昵”的本字。《说文》将反人之形视作“匕声”，不确。

本义为亲近、相近。引申为安定、平和。又有阻止义，此义通“泥”。梵语Bhidsunt音译为“比丘尼”，后也简称为“尼”，指代佛教中出家修行的女子，如“尼姑”。

## 屖

从尸辛声，本义为游息，停留休息，与“栖”、“棲”同义。是“遟”的初文，详见“遟”字。

## 屍（尸）

从尸从死，是“尸”的后起分化俗字，可表示“尸”的受祭之尸、神主、尸体等义，后逐渐专用于尸体义。

## 屠

从尸者声，本义是宰杀牲畜、分割牲肉。引申为残杀、分裂、以宰杀牲畜为业的人等。

## 屋

始见于战国文字，下从至，上所从构件不明，与《说文》古文形似，隶定作“𦤿”。《说文》籀文从尸从厂从至，隶定作“𡲃”。小篆从尸从至，隶变作“屋”。

《说文》训为“凥”，其对字形的解释较为牵强。“屋”字先秦时多用于屋顶、幕幄等义，或认为是“幄”的本字。后引申指房屋、房间、建造房屋等义。

## 屏

从尸并声，广部另有从广并声的“庰”字，《说文》均训为“蔽”。但此义与“屏”字形不合，或认为“屏”是“庰”之讹，但“屏”见于秦简，就目前见到的出土材料比“庰”字更早，暂无法对讹变之说下定论。如非讹变，“屏”构形本义可能另作他解，而假借为屏蔽义。

早期常用义为照壁，即宫殿当门的小墙，引申为遮挡物、屏风，又引申为遮蔽、隐藏、保护、抑止、退避、去除等，其中去除义后作“摒”。

## 層（层）

“曾”本义为一种两层的炊具，引申有层叠、高、重等义，古以“曾”表这些义。后造从尸曾声的“層”字表这些义，但“層”字不见于秦汉文字，可能产生晚于东汉。《说文》中的“層”字疑是《新附》羼入，徐锴本未收。

《说文》本义为重屋，引申为多重的、重复的、高、层级，又作有层次事物的量词。现代简化字作“层”。

## 屢（屡）

初作“婁”，有多次义。此义后作“屢”，演变过程不详，此字未见于先秦古文字材料。

***

# 尺部

## 尺

始见于战国文字，构形不明。《说文》解为从尸从乙，本义训为“十寸”，即长度单位。此义与构形难以关联，但与典籍中早期用例相合。由长度单位义引申指量长度的工具，即尺子。又进一步引申指形状像尺的东西。又引申为法度、短小等。

## 咫

从尺只声，本义为长度单位，指八寸。引申为近、短。

***

# 尾部

## 尾

甲骨文为一人臀部系一尾饰之形，本义当与禽兽无关，指人所戴的尾饰。后人形与尾饰之形分离，小篆从尸、从倒毛。隶变后，所从的倒毛形写作“毛”，楷书整字作“尾”。

本义指先民所戴的尾饰。引申指动物尾巴、末端、边际、后部、跟踪、禽兽交配等，又作鱼的量词。

## 屬（属）

从尾蜀声，本义为相连接，或说本义为动物交尾，引申为连接。由连接义引申为连续、跟随、聚集、归属、是、亲属、部属、种类等。又引申指叮嘱，此义后作“囑（嘱）”。又指委托，此义也可作“囑（嘱）”。现代读音有二，与归属相关的含义读shǔ，与连接、推托相关的含义读zhǔ。隶变时另一更简的形体为“属”，字书多认为此是“屬”的俗体，但其产生时间很早，在秦隶中已见，为现代简化字所采用。

## 屈

从尾出声，隶定作“𡲬”，隶变时或将“尾”省作“尸”，整字作“屈”，汉代中期以后屈行𡲬废。

本义为短尾，引申泛指短，进而引申为弯曲、屈服、冤屈、压抑等义。其引申义也通“詘（诎）”。

## 尿

从尾从水，隶定作“㞙”，隶变后省作“尿”。本义指人小便，后泛指小便。产生时间不可考，因其所指不雅，鲜见于文献。

***

# 履部

## 履

甲骨文主体为人形，上突出眉毛，下突出脚，脚下加一短横，表示践踏之意。或说上部的“眉”表声。西周金文将指示鞋的短横变为舟形，“眉”下人形或讹为“頁”，或进一步省去“頁”上的眉毛形，失去表音功能。后突出的足形与“頁”分离，写作“止”。战国楚简文字即从頁从舟从止，为《说文》古文所本。小篆变为从尸从彳从舟从夊，其中的尸、彳可能是从“眉”或“頁”讹变而来，夊为倒“止”。秦简又将其中的“舟”进一步讹作“自”。汉隶逐渐将“舟”与“止”整体讹作“复”，为楷书所本，楷书作“履”。

先秦用作践踏义，秦汉以后开始指代鞋，在此之前用“屨（屦）”字表鞋之义。引申为行走、穿鞋、脚步、品行、礼仪、至、经历、处、执行等义。

## 屨（屦）

从履省、婁声，此形始见于秦简和小篆，所谓的“从履省”是基于已经讹变后的“履”形而言的，此字在传世文献中使用较早，不晚于西周，但因缺少出土文字材料故无法确定此字的早期字形。本义为麻、葛做的鞋，又作鞋履的总称。也通“履”表践踏。秦汉以后用本义为践踏的“履”字替代“屨”表鞋义。现代简化字作“屦”。

## 屐

从履省、支声，所谓的“从履省”是基于已经讹变后的“履”形而言的，而此字不见于西汉及以前的文献，可能产生于汉代。本义为木制的鞋。

***

# 舟部

## 舟

甲骨文像独木舟之形，后世字形变化不大，楷书作“舟”。本义为舟船，作动词表乘船渡水、用船运载。先秦时也通“周”。

## 俞

西周金文从舟，右部构件不明，或说是“余”的初文，或说是挖木工具的象形。西周时即或在右侧加一饰笔。小篆将初文中右侧构件上下分离，《说文》解为“从亼从舟从巜”，其所谓的“亼”是原本右侧构件的上半部分，“巜”则是其下半部分和饰笔强行绑定而来，此说不可取。隶变后楷书作“俞”。

本义为挖空树木做船，此义罕见。又作安定、应允等义。又作国名。

## 船

从舟㕣声，本义为舟，约东周以后产生的关西方言，后世广泛使用。

## 舳

从舟由声，本义为船舵。“船之有舳，如车之有轴，主乎运转”。因位于船尾，引申指船尾。

## 艫（舻）

从舟盧声，本义为船头的小屋，或指代船头。“船头谓之舻，犹人头谓之颅”，一说“舟其上屋曰庐，象庐舍也”。常与表船尾的“舳”字连用，合称“舳舻”，指代船，或首尾相连的船队。现代简化字作“舻”。

## 朕

从舟灷声，隶定作“𦩎”。其声旁“灷”初文为双手捧一物，所捧之物后变为火，所会之意不明。隶变后“舟”变作“月”，“灷”变作“关”，整字作“朕"。

《说文》训为“我”，段玉裁解为“舟缝”，即船的裂缝。先秦文献多用为代词，偶见用为裂缝义者，无法确实是假借还是本义。秦朝以前，常用为第一人称代词，相当于“我”。自秦始皇起，定为帝王自称，沿用至清。

## 舫

初作“方”，“方”有耦耕义，即两人并耕。引申为一般的并列，包括两船相并。后孳乳出从舟的“舫”字专表两船相并，方、舫是古今字关系。后引申为船（多指小舟）、船夫。后也指园林水面上建造的船型建筑物。

## 般

初文为“凡”，是盘子的侧立之形，后加攴旁，表示手持勺类器具舀水或食物，应隶定为[凡+攴]，本义即是盛器盘子，详见“槃”字。西周中期即开始将“凡”讹为形近的“舟”，至小篆又将“攴”变作“殳”，隶变后作“般”。

《说文》解为“象舟之旋”，是基于讹变后的字形附会而来，不确。本义即是盘子。因其为圆形，引申出回旋义，进而引申为徘徊、游玩、仔细查问等义。又有种类义，并虚化为助词表“似的”，此义较晚起，约起于唐代，或说是通“班”而来。其盘子的本义后造“槃”、“鎜”、“盤”等专字表示，后世以“盤”为主流，并继承了“般”的回旋等一系列引申义。后般、盤分化，“般”专表种类义，而“盤”则承担盘子、回旋等义，现代将“盤”简化为“盘”。

## 服

初文为“𠬝”，甲骨文从又从卩，像一只手从后按住或抓住一个跪着的人，甲骨文中用为俘虏义。后加“凡”旁，“凡”是“盤（盘）”的初文。关于为什么从凡，有的观点认为是会奉盘服侍或使人服务于盘前之意，较牵强，一说是表音。西周以后多用从凡的字形代替“𠬝”。西周中期开始将“凡”讹为形近的“舟”，为后世文字所本，此形从舟从𠬝，隶定作“𦨕”。隶变后“舟”讹作“月”，整字作“服”。

本义为降服、使顺从，也指顺从。与“伏”音义同源，可互通。由顺从义引申为服侍、承当、执行、承认、适应、职务、制度、事情等义。其中承当义既可作用于虚拟的事物，如服役、服刑、服丧等，也可作用于具体的物品，如作用于药即表示食用，作用于衣物即表示穿戴。由穿戴衣物又引申为衣物。

## 舸

从舟可声，从可声的字有“大”义。本义指大船，后泛指船。

## 艇

从舟廷声，本义是小舟。

***

# 方部

## 方

初文像起土农具耒之形，“古者秉耒而耕，刺上曰推，起土曰方，方或借伐﹑發﹑墢等字为之”。方﹑坺﹑伐﹑發﹑墢古皆读重唇音，可互通。古时普遍两人协作耕作，即耦耕，故引申出并列义，也可能是与“並”读音相通而来，“並”同样为重唇音。由并列义引申为相当、对比、辨别、一齐等义，“不可方物”一词中的“方”最初即是取辨别义，后转为比拟义。《说文》训为“併船”，即相并的两船，此义应是从并列义引申而来，是引申义而非本义。此义后作专字“舫”。

甲骨文中又借为方向、方国义，金文中又用为方圆之方，即方形义。方形义与方向（四方）义可能存在引申关系，但与“方”字本义无关，究其根源应都是假借义。由方形义引申为正直、准则、方法、配方标准。由方向、四方义引申为区域、相对的某一面等义。

## 𣃚（航）

从方亢声，本义为“方舟”，不是方形的船，而是指将两船相并而渡河。“天子造舟（四船相并），诸侯維舟（三船相并），大夫方舟（二船相并），士特舟（单独一船）。”引申泛指渡河、行船。俗体从舟，作“航”。又或从木，作“杭”，如一苇杭之、餘杭等。而《说文》将“杭”列为“抗”的异体，因“抗木”即棺椁上面的木架，是木制的，故可替换形旁改从木，通抗之杭与通𣃚之杭应视为本义无涉的同形字。

***

# 儿部

## 儿

《说文》释为“人”的古文奇字，读rén。目前出土文献未见此形独立成字，仅作为构件存在于兀、兒、允、兑、充等字中。现代以此形作为“兒”的简化字。

## 兀

元、兀原为一字，为突出头部的人形，本义即是人头，详见“元”字。后人头形状的圆点变为一横，演变为“兀”字。“元”本是“兀”加饰笔的异体写法，约于汉代时音、义分化。

因头在人体的上端，故“兀”引申为高耸突出、独立、奇特不协调、光秃、茫然、昏沉、静止等义。

## 兒（儿）

像小儿头顶囟门未闭合之形，本义即是幼儿，最初特指男孩，“男曰兒，女曰嬰”，后泛指孩童。引申为父母对儿女的称呼，又专指儿子。以上义读ér。又作国名、姓氏，国名后作“郳”，姓氏后作“倪”，此义今读ní。清代时出现将“兒”俗写作“儿”的用法，为现代简化字采用，但在读ní时不予简化。

## 允

初文构形不明，《说文》解为“从儿㠯声”，不确，初文上部并非“㠯”形，约于西周时讹变为“㠯”。本义不可考，但甲金文中多用为确实义。引申为诚信、公平、许可、依从、符合等义。

## 兑

构形不明。或认为是古“説（说）”字，或认为是古“悦”字，或认为是古“鋭（锐）”字。目前见到最早的词义是快速，即“锐”义，但无法证明是否为本义。后常用作交换义，引申为抵偿、补零、掺杂等义。

## 充

始见于《说文》小篆，未见更早的出土文字材料，故构形不明。《说文》解为“从儿、育省声”，聊备一说。《说文》所训之义以及典籍中的常用义皆围绕长、高。引申为满、足、肥胖、装满、扩大、凑数、假冒、供应、充任等义。

## 亮

《说文》无亮字，段玉裁认为从儿高省，训为“明”。《尔雅》训为“信”。战国时有从高从人的字，后省去“高”下的“口”，一说是从京省声，无确论。但亮、京古音同，且“亮”与从京声的“諒（谅）”均有诚信义，应该存在一定的音义联系，暂依何琳仪之说：从儿京省声。

常用义有明亮、诚信，其中诚信义后多用“諒（谅）”。由明亮义引申为显露、光线、清楚、响亮、发光等义。由诚信义引申出信任、原谅等义。又有辅佐义。

***

# 兄部

## 兄

构形不明。甲金文中多用为兄长义。典籍中又用为滋长义，引申出赐给义。赐给义后作“貺（贶）”，此义在甲金文中用“光”表示，“貺”也有异体字作“𧵦”。

后世主要用为兄长义，即兄弟之兄。引申指同辈而年纪比自己大的男子。

## 𠓆（兢）

从二兄，上各有一“丰”形。构形本义不明。《说文》训为“競”，或认为是强劲义，或认为是悈惧义。后世主要用为悈惧义。楷书作“兢”。

***

# 兂部

## 兂

甲骨文像女人头戴发簪之形。小篆讹为从儿从匕。因失去象形功能，故又造从竹朁声的形声字“簪”。本义即是簪子。

## 兓

从二兂，本义为锐利。“兂”为发簪，因发簪一头尖利，故会此意。

***

# 皃部

## 皃（貌）

从儿（人），上部为“白”象人面形。汉代以后出现后起形声字“貌”，后世貌行皃废。

本义指面容。引申为外表、外观、状态、描绘、表面上等义。

***

# 先部

## 先

甲骨文从止在人上，或从止在兀上。“兀”为人首，此二形会意相同，均表示在前面，即先后之先，与甲骨文实际用例也相符合。《说文》解为“从儿从之”，是将“兀”的顶横和“止”看作一个整体而来。《说文》训为“前进”，此应是引申义。隶变后楷书作“先”。

本义为在前的，由空间概念引申用于时间、次序等。由次序在前的引申为首要、根本。由时间在前的引申为祖先、已去世的，又作副词表示发生在前。又由本义引申为前进、超越、尊崇、死亡等。

***

# 秃部

## 秃

从禾从儿（人）。段玉裁认为“秃”与“秀”为一字之分化，秃顶即称“秀顶”。但从战国晚期至秦汉的文字材料来看，同时期的“秃”与“秀”下部差异明显，至少至晚在该时期此二字已有明显区分，而尚未见更早的文字材料，故无法判断此二字是否为一字之分化。

一般用于头上无毛发之义，引申指山无草木、树无枝叶，泛指光秃。又指物体失去尖端而不锐利。

## 穨（颓）

从秃貴声，后世俗字作“頽”，失其声符，现代简化字作“颓”。

本义为头发脱落，引申为一般的落下，进而引申为消沉、衰微、衰老、坍塌、暴风从上而下等义。

***

# 見部

## 見（见）

初文为突出眼睛的跪坐人形。而商代、西周文字中人形直立的字形一般释为“視”，用法与“見”有明显区别。后跪坐人身部分变为“儿”形，整字作“見”。现代简化字依草书楷化作“见”。

本义为看到。引申为显现出、会晤、遇到、观察、听到、看法、主意、现在等，用在动词前表被动。早期又用为进献义，可视作通“獻”。其中显现、现在义后俗作“現（现）”。

## 視（视）

初文为突出眼睛的直立人形，与“見”有所区分。可能是与“見”容易混淆，西周时出现从見氏声的形声字，此形后省作“眂/眡”，为《说文》古文所本。秦文字则从示声，小篆即从見示声，隶变后作“視”，成为后世主流。现代简化字作“视”。

本义为看，强调主动看的动作，而“見”则强调看的结果。引申为考察、治理、看待、照顾、视线、眼力等。

## 𧡎（睨）

从見兒声，与“睨”同，仅繁省之别。本义为旁视、斜视。

## 觀（观）

甲骨文初用“雈”或“雚”表观看义，初为猫头鹰的象形，以猫头鹰大眼睛特征指代观看。战国时孳乳出加注見旁的“觀”字专表此义。现代简化字作“观”。

本义为仔细地看。引申为观察、一般的看、游览、看到的景象、外貌、看法等义。以上义读guān。又指朝廷宫门外高台上修筑的观望台，后泛指楼台亭阁，又特指道教庙宇，又引申指京观，以上义读guàn。

## 覽（览）

本字为“監”，其本义是以水为镜照视自己，引申有观看义，后加注見旁孳乳出“覽”字专表观看义。隶变后省作“覽”，现代简化字依草书楷化作“览”。

本义为泛泛地看，与“觀（观）”义略有不同，后者强调仔细得看。引申泛指看。又引申为观赏、考察、景致、采纳、采摘、把握等义，其中采摘、把握等义后作“攬（揽）”。

## 𧢄（瞟）

从見票声，与“瞟”同。

## 覯（觏）

从見冓声，与“遘”同，表遇见。

## 𧠟

本作“𧠠”，从見民声，唐人避李世民讳，民缺笔，似“氏”，后又讹为“氐”，整字讹作“𧠟”。本义为昏迷之迷，后世作“迷”。

## 覬（觊）

从見豈声，本义为希望，此义后多假“冀”为之。“覬”字多引申特指非分的希望。现代简化字作“觊”。

## 覦（觎）

从見俞声，本义是见而欲得，覦、欲双声。现代简化字作“觎”。

## 覺（觉）

从見、學省声，本义为睡醒。引申为醒悟、感到、发现、使人觉悟、感受等。以上义读jué。又引申指睡眠，此义读jiào。现代简化字依草书楷化作“觉”。

## 靚（靓）

从見青声，本义为召见。引申指被召见，即朝见。汉朝诸侯秋天朝见皇帝称“請”，春曰朝，秋曰請（周代秋朝称“覲”），或认为此处“請”本应为“靚”。“請”本义为拜谒，与召见义相反相成，故可相通，后世通用“請”。請客之“請”即是召义，本字也当为“靚”。又有妆饰义，引申为艳丽、美好。现代简化字作“靓”。

字本读jìng，表外貌美好义时又读liàng，此音源于粤语方言。

## 親（亲）

甲骨文有从宀、新声的字，释为后世之“寴”。其声旁“新”中的“亲”是“𣓀”的省形，“𣓀”是“榛”的本字，本义是榛树，在此作声首。西周时将“斤”换为“見”，整字作“寴”，或省去宀旁，成为从見亲声的“親”字，又或将声符“亲”换为“辛”。战国时从宀新声、从見辛声、从見新声等字形并见。小篆有从見𣓀声（隶定为“𧡿”）和从宀𧡿声，《说文》分列为二字，实际是同一字的繁简二形。隶变后将“𣓀”省作“亲”，整字作“親”、“寴”。现代简化字作“亲”。

《说文》训为“至”，即亲密无间，或认为此是引申义，西周时已用为亲自义，这可能是本义。由亲自义引申为至亲、亲密、父母、婚姻、有血缘或婚姻关系的、本人的、信任、接触、特指用嘴唇接触等义。

## 覲（觐）

殷商晚期至西周早期，用“堇”为朝见国王之义，西周晚期成为诸侯秋天朝见天子的专称，典籍中用“覲”字，“春见曰朝，秋见曰覲”，但出土西周金文只作“堇”。加注見旁的“覲”字始见于说文，此字具体产生的时间暂无法确定。现代简化字作“觐”。

由朝见义引申为一般的访谒、会见、探望、朝拜祭祀等。

## 覜

从見兆声，《说文》训为“诸侯三年大相聘”，即周代诸侯每三年一次的大规模访问他国的外交活动。究其构形，应本与“眺”为一字，本义当为斜视、远望。而聘问义应是周代礼制完备后所赋予的后起义，并非本义。

***

# 欠部

## 欠

初文像一跪坐之人张口出气之形，本义为打哈欠。《说文》小篆将张口的人头形讹作“彡”形，并将此作为“气形”，但这种写法与同时代的汉印、汉隶字形均不同，或认为《说文》小篆是后人根据“张口气悟”的说法改造的。秦汉隶书直承先秦字形，楷书作“欠”。

因人在精力不足时才会打哈欠，故由本义引申出缺少、不足、亏欠、微弯身躯等义。

## 欽（钦）

从欠金声，《说文》训为“欠貌”，即打哈欠的样子，此义罕见。典籍和战国文字中多用为敬义，即恭敬、仰慕等。帝王所做之事也多冠以“欽”字，以示尊崇。现代简化字作“钦”。

## 欨

从欠句声，本义为呵气使物体温暖，“欲暖者欨之，欲凉者吹之”。又指笑意。

## 歟（欤）

从欠與声，本义为“安气”，即安舒语气。多用为句末语气助词，典籍中多用“與”。现代简化字作“欤”。

## 歇

从欠曷声，本义为休息，与“愒”、“憩”同源。约战国时由“曷”分化出从欠和从心的字专表休息义，会意相通。从心的“愒”字后世异体作“憇”，又变作“憩”。

由本义引申为留宿、停止、竭尽、凋零、消散等义。

## 歡（欢）

从欠雚声，本义为喜乐。或假本义为马名的“驩”、本义为喧哗的“讙”字为之。又有从心的“懽”字，也同“歡”。现代简化字作“欢”。

由本义引申为所喜爱的情人、男女欢爱之事、活跃等义。

## 欣

从欠斤声，本义为喜乐。由本义引申为爱戴、赏慕。欣、忻、訢、听同为一字之分化，均有喜乐义。

## 歀（款）

从欠柰声，字本作歀。或将“柰”讹为“祟”，字作“㱁”。隶变后省作“款”。

本义为意有所欲，引申为真诚、殷勤、缓慢、议和、留歇等义。又通“䥗”，表款识义，即金属器物上铸刻的标识文字，但此义后世通行“款”字。由款识义引申为题名、样式、事项、条理等。又由事项义引申为款项、钱财等义。

## 欲

西周时用“谷”为欲望之意，或说谷有虚受之义，故借其为之。战国时加注欠旁，作“欲”字。

本义为想得到、想达到。引申为贪求、想要、爱好、愿意、需要、将要等义。

## 歌

春秋文字从言可声，作“訶”，表歌咏义。战国时或从二可，作“哥”，或从言哥声，作“謌”。小篆从欠哥声，作“歌”。后世歌咏义多用“歌”，“訶”转表呵斥义，“哥”在唐朝以后用于兄、父义。

本义为歌咏、唱，引申为颂扬、奏乐、作歌、供人唱的作品、诗歌体裁名等。

## 歎（叹）

籀文从欠𪄿（難）声，小篆以后从欠堇声（堇本也是𪄿的声符），作“歎”。同“嘆”，详见“嘆”字。

## 歐（欧）

从欠區声，本义为呕吐。俗体从口，作“嘔（呕）”，其本义后世多用“嘔”，而“歐”则多用于姓氏。现代简化字作“欧”。

## 㵣

从欠渴声，其声旁“渴”的本义是水枯竭，即“竭”的本字，而加欠旁后表示人口干想喝水，“㵣”为口渴之渴的本字。后世以“竭”表枯竭义，转以“渴”表口渴义，“㵣”字遂废。

## 歃

从欠臿声，本义为啜饮、微吸。特指诸侯盟誓时饮动物血的仪式，也代指盟誓。

## 歉

从欠兼声，本义为吃不饱，引申为收成不好、缺少、不好、歉意等义。

## 欬（咳）

从欠亥声，本义为咳嗽，是咳嗽之咳的本字。而从口的“咳”字本是“孩”的异体字，本义指婴儿笑。后世多借“咳”表“欬”义，“欬”字渐废。

## 歙

从欠翕声，本义为用鼻子吸气，又通“翕”表收敛。

## 次

从欠二声，《说文》本义为“不前不精”，即次等。甲骨文和西周金文中有与后世“次”字形近的字，主流观点释为“㳄”。甲骨文中以“𠂤”表师旅、军队义，用“𫠨”表示军队驻扎，用“[𠂤+𠂔]”表示军队所驻扎的地方，战国时又借同音的“次”表𫠨、[𠂤+𠂔]，即师次。故“次”又有驻扎、驻扎场所之义。

由本义引申为第二、副的、等级、顺序、中间位置、动作次数等义。由军队驻扎场所义引申为旅行居所、到/至义。

## 欺

从欠其声，本义为欺诈、欺骗。引申指欺压、欺负。

## 歆

甲骨文中用“言”表示歆享义，即鬼神享用祭品的香气。周代表歆享义或用“言”，或用“音”，言、音为一字之分化，早期常混用。至迟在战国时产生从欠音声的“歆”字专表此义。

本义为鬼神享用祭品的香气，又有使动用法表示使享用，即用食品祭祀鬼神。引申为贪图、羡慕、欣喜、引诱等义。

***

# 㱃（饮）

甲骨文为人俯首吐舌、扶酉（酒器）饮用之形。西周时舌形与人头分离，成为“亼”形，又进一步变为“今”，起表音作用，而张口的人形则写作“欠”。整字遂变作从欠从酉、今声，作“㱃”。或省去欠，作“酓”。战国时产生异体字从食从欠，作“飲”。《说文》古文为从食今声，作“𩚜”，或从水今声，作“𣲎”。后世以“飲”为主流，现代简化字作“饮”。

本义为喝，也专指喝酒。引申为没入、心里含着，作名词指可以喝的东西、酒席等。以上义读yǐn。使动用法表示给牲畜水喝、以酒食款待、满足等，读yìn。

## 歠

从㱃省、叕声，本义是一口口喝、小口喝。或认为“啜”即“歠”的或体。

***

# 㳄部

## 㳄（涎）

甲骨文为人张口流涎之形，以若干小点表示涎液。小篆规整化为从欠从水，隶变后作“㳄”。本义即口水、唾液。引申为水流泛滥、羡慕、贪图等义。俗体从延声，作“涎”。

## 羨（羡）

从羊从㳄、㳄亦声，“㳄”为口水，“羊”有美义，整字会贪欲之意。或体作“羡”，羨字中的氵本非水，羡字中的冫也本非仌（更不是次等之次所从的二），二者均对应初文中表示涎液的小点，故严格来说“羡”并非“羨”的俗讹。

本义为贪欲，引申为羡慕、多余、超过等义。

## 盜（盗）

甲骨文从㳄从舟、㳄亦声，“㳄”为口水，引申有水流泛滥义，从舟即会此意。秦文字将“舟”讹为“皿”，一说从皿表示所垂涎的器皿，聊备一说。整字作“盜”，或作“盗”。

本义为贪欲他人财物而盗窃，引申指用不正当的手段谋取、私通、暗中、偷窃或抢劫的人、谗佞的人

***

# 旡部

## 旡

初文为“欠”，为人张口出气之形，甲骨文中正反无别。约西周中晚期后，以“欠”的反形专表逆气，即气从体内发出，也即今天所谓“打嗝儿”，而正写的“欠”则专表打哈欠，二字分化。

***

# 頁部

## 頁

初文为一突出头部的人形，发、头、身俱全，后省去头发，仅保留头、身，楷书作“頁”。仅有发、头者，即“首”字。仅有头者，即“𦣻”字。頁、首、𦣻本一字，仅繁简差异，均表人头义。旧读xié。

另有薄片状物以及其量词之义，此义本作“葉”，“葉”由树叶义引申指薄片状物体，如“书葉”、“一葉纸”。后因“頁”与“葉”音近，故借“頁”为之。后世“頁”只用于此假借义，其人头的本义仅在做偏旁时仍有体现。此义读yè。

现代简化字依草书楷化作“页”。

## 頭（头）

从頁豆声，本义为人首。初作“首”，后因语音流变，“首”字读音与口语中人头义的读音发生偏差，春秋时另造了从頁豆声的形声字“頭”表此义，以指示其读音。现代简化字作“头”。“头”本多作为“贯”的草书楷化字，如“實”即简化为“实”，但因也与“頭”的草书略似，明清时也出现以“头”表“頭”的用法，为现代简化字所采用。

由本义引申指头发、物体顶端、端点、方面、物体的残余部分、为首的，作量词用于某些大型动物等，又作后缀。

## 顔（颜）

西周金文从[文+厂]从面，“[文+厂]”是“彦”的初文。《说文》籀文从頁彦声，其中頁字为带头发的繁形，此字隶定作“𩕝”。小篆承籀文之形，省去头发型，作“顔”。

本义为额头。《说文》训为“眉目之间”者，经考证应是“䫤”字之义。“顔”由额头义引申为脸、面子、面色表情、色彩、匾额、题字于匾额等义。

## 頌（颂）

从頁公声，本义为容貌，是容貌之容的本字。“容”本义为容纳，后假借为“頌”表容貌义。“頌”又假借为“誦”表朗诵义，引申为歌颂、祝颂、赞扬义，又作文体名。

## 顱（颅）

从頁盧声，本义为头骨，引申指头。应是秦汉后产生的字。

## 𩕾（愿）

从頁𡚇声，本义为头顶，或认为是“元”的后起形声字。秦汉出土材料及传世典籍多借为愿望之义，又因笔画繁复，汉以后多写作“願”，而“願”本义为大头。愿望义现代又以本义为恭谨的“愿”为正体。𩕾、願、愿三字本义皆非愿望义，同属假借。

## 顛（颠）

从頁真声，本义为头顶，是“天”的后起形声字，“天”字初文即为人头顶之形。引申为物体顶部、本始。又借作“蹎”，表仆倒义，由此引申为上下倒置、覆亡、颠簸等义。又通“癲”，表发狂。“顛沛”一词一般认为本字为“蹎跋”，又或认为是单字无义、不可拆分的联绵词。

## 頂（顶）

从頁丁声，《说文》籀文从頁鼎声，作“𩕢”。与“顛（颠）”同为“天”的后起形声字，本义为头顶。引申指物体顶端、用头支承、向上抵、冲撞、相对着、相当、担当、代替、极等，又用于有顶事物的量词。

## 題（题）

从頁是声，本义为额头，引申指物体的上部前端、书签、题目、签署、书写、品评等义。

## 頟（额）

从頁各声，后俗从客声，作“額”。本义是额头。“中夏谓之頟（額），东齐谓之顙”。现代以“額”为正体，简化为“额”。

## 頰（颊）

从頁夾声，本义指脸的左右两侧。引申泛指旁侧。现代简化字作“颊”。

## 頜（颌）

从頁合声，本义指下巴。后也借本义为面黄的“頷（颔）”字表此义，“南楚谓之頷，秦晋谓之頜，頤其通语也”。

## 頸（颈）

从頁坙声，本义指脖子，又特指脖子前部。引申指器物上像颈的部位、仰慕、期待等。现代简化字作“颈”。

## 領（领）

从頁令声，本义指脖子，引申为衣领、引导、统率、拥有、治理、大纲等义，从被领导的一方出发，又引申出接受、领取、了解等义。

## 項（项）

从頁工声，本义指脖子后部，泛指脖子。引申指种类条目、经费，又作量词用于分项目的事物。

## 碩（硕）

从頁石声，本义为头大，引申泛指大。“石”字本有大义，后造从頁的“碩”专表头大，而后“碩”也借表一般的大，取代了“石”。引申为丰富、远、学识渊博、德高望重等义。

## 頒（颁）

从頁分声，《说文》训为“大头”、“一曰鬢”，此义未见于文献。一般用于头发半黑半白义，通“斑”。又通“班”，表发布、公布。又假借为“攽”，表发放、分发。

## 願（愿）

从頁原声，《说文》训为“大头”，此义未见于文献。汉以后用于意愿、愿望义，此义在汉以前多用“𩕾”字，详见“𩕾”字。愿望义现代又以本义为恭谨的“愿”为正体。

## 頑（顽）

从頁元声，《说文》训为“㮯头”，“㮯”即是“囫囵”的本字，“㮯头”是指难劈开的囫囵木头。引申指浑圆、粗钝、坚硬、愚钝、顽固、不驯服、坚强、强暴、凶恶等义。又通“玩”，表玩耍、游戏。

## 顆（颗）

从頁果声，《说文》训为“小头”，此义未见于文献。多用其引申义，泛指颗粒状物，也作此类物体的量词。

## 頷（颔）

从頁含声，本义为面黄，饥饿的样子。多借表下巴义，“南楚谓之頷，秦晋谓之頜，頤其通语也”。引申指点头。“颔联”一词指代律诗的第二联，以下巴比喻其在全诗中的位置。

## 顧（顾）

从頁雇声，本义是回头看，引申为顾念、考虑、拜访、反省、照顾、光顾等。简化字“顾”始见于晋代，是草书楷化，为现代简化字所采用。

## 順（顺）

从頁从川、川亦声，战国文字或从心川声。本义为肌肤的纹理。引申为沿着同一方向，与逆相对。又引申为顺从、顺利、合乎心意、依循次序等义。

## 顓（颛）

从頁耑声，本义为拘谨、诚实的样子。又通“專（专）”，表专擅。

## 頊（顼）

从頁玉声，本义为谨慎的样子。多用于古帝顓頊（颛顼）之名。

## 頓（顿）

从頁屯声，本义为拜头叩地，即九拜之一的顿首。引申指跺脚、跌倒、停顿、止宿、安放、解脱、疲劳、立刻等。

## 頫（𫖯）

从頁，其所从之“兆”有争议，因“頫”字原本的读音尚无定论，故无法判断“兆”是否为声符，《说文》认为“从逃省”，因“頫”字本义是低头，低头为逃亡貌，故从逃省，可备一说。或体从人免声，作“俛”，此字本音同“免”。东汉出现俗体“俯”，从人府声，初借“府”表頫义，后加人旁。或认为頫、俛、俯三字本不同音，至少頫、俛二字与俯字应不同音，但因同义，故后世将頫、俛训读为俯，如按此说，则此三字不应是异体字关系，而是同义换读关系。

本义为低头，引申为弯腰、卧伏、从上往下等义。`,cx=`---\r
title: 罗马史笔记\r
date: 2025-08-26\r
description: 从古罗马起源开始整理\r
---\r
\r
# 一、起源\r
特洛伊战争期间，特洛伊王女婿埃涅阿斯逃亡，至亚平宁半岛定居，其子在台伯河下游建立阿尔巴·隆伽（亦作阿鲁巴）城。\r
\r
四百年后，阿鲁巴王兄弟夺位，先王外孙——双胞胎罗慕路斯、瑞摩斯于民间幸存，成年后起兵推翻僭主，还政于先王，并于台伯河畔建立新城。后兄弟内讧，瑞摩斯被杀，罗慕路斯称王，新城定名罗马。\r
\r
\r
# 二、王政时代\r
## 1. 罗慕路斯\r
罗马城址定于台伯河东岸七丘，罗慕路斯为首任国王。\r
实行三权分立：\r
- **国王**（宗教、军事、政治最高权威，选举产生）\r
- **元老院**（国王的顾问，由国王任命）\r
- **市民大会**（选举和投票权，可否决国王决议，全体市民组成）\r
\r
初期罗马人口主要为拉丁男性，曾大肆掠夺萨宾族女性，两族多次冲突后和解，萨宾人被同化，两王共治。\r
\r
罗马不断对外扩张，萨宾王战死。罗慕路斯创立“百人队”军制。公元前715年，罗慕路斯去世并神化。\r
\r
## 2. 努马\r
萨宾人努马被选为第二任国王，力主整顿内政。\r
- 振兴农牧业\r
- 划分职业，建立工会\r
- 制定历法\r
- 整顿宗教，使政教分离\r
\r
## 3. 托里斯\r
拉丁族托里斯为第三任国王，偏重武力扩张，战果辉煌。征服母国阿鲁巴及邻近部族，使罗马成为拉丁民族祖国。托里斯最终死于雷劈。\r
\r
## 4. 安库斯\r
努马外孙安库斯即位。\r
- 对外秉承托里斯武力扩张方针\r
- 对内：\r
    1. 跨台伯河修建桥梁\r
    2. 征服河口奥斯提亚，开展盐田业，使盐成为流通货币\r
\r
## 5. 塔克文\r
希腊-伊特鲁里亚混血塔克文开创竞选先河，成为第五任国王。\r
扩增元老院人数至200人\r
继续对外征服，给予战败者市民权，加以同化\r
从伊特鲁里亚引进技术，开发七丘间湿地\r
\r
## 6. 塞尔维乌斯\r
塔克文死于政治暗杀，但其养子塞尔维乌斯（伊特鲁里亚裔）抢先继位。\r
- 建立“塞尔维乌斯城墙”，围拢七丘\r
- 军制改革，使**军制=税制=选举制**\r
- 进行人口财产普查，划分阶级，财产与军事义务、政治权利成正比\r
\r
## 7. 小塔克文（傲慢者塔克文）\r
塞尔维乌斯女婿、第五任国王塔克文的儿子小塔克文篡位。即位后暴戾专制，清洗先王派系，蔑视元老院和市民大会。\r
\r
但小塔克文对外军功卓著，持续扩大疆土。\r
\r
其子赛克斯图斯强暴他人妻子，受害者自尽，此事掀起众怒，市民发起暴动，驱逐了当时正在外征战的国王小塔克文，罗马王政时代结束。\r
\r
\r
# 三、共和制建立\r
## 1. 政体转变\r
三权中的国王改为两位**执政官**，由元老院指定，任期一年。\r
\r
元老院地位因此被强化，引起贵族青年阶层不满，多人密谋迎回小塔克文复辟王政，后因计划败露而失败。\r
\r
## 2. 小塔克文反击\r
被驱逐的小塔克文游走于伊特鲁里亚各城邦，借兵反攻罗马。罗马以微弱优势获胜，一名执政官战死。\r
\r
新政体导致国力下降，人才流失，其它推行王政的拉丁盟国倒戈。执政官“亲民者”瓦莱里乌斯将贩盐国有化，以稳固经济，同时通过减税弥补盐商，鼓励外国人定居，吸引人才。\r
\r
小塔克文投奔伊特鲁里亚城邦丘西，其国王波塞纳出兵南下，包围罗马。瓦莱里乌斯用计突围，同时一位年轻人穆奇乌斯请缨刺杀波塞纳，事败但宁死不屈，赢得波塞纳敬重，两国讲和。\r
\r
## 3. 阶级矛盾\r
**根源：** 因废除国王，新产生的执政官由元老院指派，**三足鼎立**逐渐变为**二足对立**，贵族-平民间阶级矛盾诞生。\r
\r
**促因：** 常年征战，平民家中无劳动力->退役后破产->借贷成为农奴，贵族有资产及被保护人做后盾->不受战争影响->放贷持续获得财富，**贫富差距**越来越大。\r
\r
一系列摩擦后，诞生了平民大会，以及维护平民利益的“**护民官**”职位，拥有非战时的否决权。\r
\r
土地分配方面，平民要求平等分配，贵族坚持私有财产制度。此外平民要求制订成文法，以对抗贵族的优势话语权。\r
\r
## 4.《十二表法》\r
为满足平民诉求，元老院派出考察团前往希腊，学习先进制度。回国后，成立十人委员会，制订首部**成文法**《十二表法》。\r
\r
但《十二表法》改革幅度微小，主要矛盾“不动产分配问题”和“无法还债时人身自由问题”仍未解决。\r
\r
十人委员会领袖因能力和作风问题，引起众怒，十人委员会被迫取消，贵族承诺不再擅自设立机构。共和政体处于**持续摸索**状态。\r
\r
## 5. 凯尔特入侵\r
北方蛮族凯尔特（希腊称凯尔特，罗马称高卢）人南迁，由于处于中间地带的伊特鲁里亚被罗马征服，罗马失去军事缓冲。\r
\r
平民要求于伊特鲁里亚大城维爱建立第二首都，贵族反对，于是平民找借口流放了总司令官卡米路斯，并擅自向维爱移民。\r
\r
此时凯尔特入侵，失去总司令的罗马惨败，罗马城沦陷。老弱妇孺被屠杀，城市被烧毁，仅剩的市民与凯尔特人持续对峙，最终赔付巨额黄金，使凯尔特人撤退。\r
\r
随即卡米路斯被召回，任独裁官，组织军力反击，击破北还的凯尔特人。\r
\r
## 6. 双重危机\r
罗马军事上的虚弱使临近部族倒戈，**拉丁同盟瓦解**。\r
\r
同时期**希腊步入衰亡**：雅典进入群愚政治时代，伯罗奔尼撒战争后斯巴达称霸，但社会闭塞，被底比斯取代，最终希腊落入马其顿手中。罗马因此陷入对政体的迷茫，意识到**城邦的局限性**。\r
\r
## 7. 重建与改革\r
**重建：**\r
- 加固城墙，整修公共设施\r
- 改良战术，注重营地建设\r
- 以攻为守，重新征服周边势力，修复联盟。\r
- 共同祭祀为主的“拉丁同盟”->军事联合为主的“罗马联盟”，其它成员国间不许互相结盟\r
- 因领土扩大，大规模修建道路，构建交通网\r
\r
**改革：** 颁布《李锡尼法》\r
- 废除六人军事指挥官，恢复二人执政官\r
- 政府要职向平民开放\r
- 贵族政体->**寡头政体**，血统不再重要\r
\r
原先的贵族-平民对立阶级，转变为精英（血统无关）-平民两大派系，相互吸收融合。\r
\r
\r
# 四、称霸意大利\r
## 1. 萨莫奈战争\r
领土扩大后，罗马与意大利中南部山岳地区的强族萨莫奈爆发冲突。\r
\r
**第一次萨莫奈战争**：因萨莫奈侵扰，加普亚求援罗马，罗马撕毁盟约对萨莫奈出兵。因战事过久，且为外邦战争，罗马士兵哗变，罗马方面平定兵变后与萨莫奈讲和。\r
\r
**第二次萨莫奈战争**：那不勒斯的希腊人攻击罗马殖民地，萨莫奈入驻那不勒斯，双方再次爆发战争。初期罗马占上风，后被萨莫奈人引入峡谷伏击，罗马惨败投降，放弃那不勒斯殖民地。罗马转而扩大同盟势力，对萨莫奈形成地理包围，五年后加普亚倒戈，罗马再次宣战，攻占加普亚，蚕食萨莫奈领土，萨莫奈被迫讲和。\r
\r
**第三次萨莫奈战争**：萨莫奈联合北方的凯尔特和伊特鲁里亚、东方的翁布里亚三面联合进攻罗马，罗马发动紧急动员。战前三名伊特鲁里亚人投奔罗马，泄露联军部署，罗马得以切断敌方联合，经激烈厮杀最终取胜。凯尔特人被赶回北方，伊特鲁里亚和翁布里亚加入罗马联盟，萨莫奈投降。\r
\r
## 2. 征服塔兰托\r
公元前283年，罗马与意大利南部希腊殖民地塔兰托开战。塔兰托雇佣伊庇鲁斯军队应战，伊庇鲁斯国王、名将**皮洛士**率军出征。\r
\r
皮洛士首战获胜，随后一路北上，但罗马联盟仍然稳固，且罗马从本土得以补充军力，皮洛士撤回塔兰托。塔兰托提出和谈，要求罗马停止侵略并放弃萨莫奈，罗马犹豫后拒绝。\r
\r
来年双方再战，皮洛士再度胜利，但军队持续减员，罗马军力则源源不断。此时西西里希腊同胞向皮洛士求援，皮洛士暂时放弃罗马，转而去西西里抵抗入侵的迦太基人。\r
\r
皮洛士因性格骄横，于西西里遭遇背叛，损失惨重后回到塔兰托，继续对战罗马。最终，被积攒足够实力的罗马打败，率残兵返回伊庇鲁斯，不久在攻打斯巴达时战死。\r
\r
公元前272年，罗马攻占塔兰托，将其设为海军基地。至此罗马**称霸意大利半岛**。\r
\r
\r
# 五、对阵迦太基\r
## 1. 第一次布匿战争\r
公元前265年，西西里岛东北端的墨西拿被锡拉库萨（亦作叙拉古）攻击，同时求援罗马和北非的迦太基，两国先后参战。\r
\r
罗马军抵达西西里后，迅速与墨西拿签订盟约，包围锡拉库萨首都，迫使锡拉库萨加入同盟，成功控制西西里东部，与西部的迦太基抗衡。\r
\r
两国持续增派兵力，罗马于陆地占据上风，但无法攻占迦太基拥有海上支援的沿海地区。鉴于此，罗马首度建立海军。\r
\r
为弥补海战经验劣势，罗马发明“乌鸦吊桥”，化海战为陆战，先后三次海战均取得胜利。\r
\r
迦太基退守首都，罗马于东侧克鲁比湾登陆非洲，随后直抵突尼斯，迦太基求和失败。冬季换防期间，留守非洲的执政官急于在任期内立功，提前交战，致惨败。\r
\r
罗马再度出兵，取得第四次海战胜利，将驻守克鲁尼湾的残兵接回西西里。途中遇风暴，6万士兵遇难。迦太基趁机请求和谈，罗马拒绝。\r
\r
迦太基再次派大军前往西西里，但在罗马的持续攻势下，丢失巴勒莫等地，只保有马尔萨拉为首的西部沿海地区。罗马军冬季返程途中再遇风暴，又一次损失惨重。\r
\r
迦太基出兵包围巴勒莫，罗马用计完胜。随后罗马又赶造战船，攻打马尔萨拉。迦太基大量招募雇佣兵派往马尔萨拉，双方陷入胶着。\r
\r
公元前247年，迦太基派出名将**哈米尔卡·巴卡**，于西西里不断骚扰罗马军，劫掠海上商船。罗马决定夺取非洲和西西里间的制海权，以切断哈米尔卡的补给。于是再次组建庞大舰队，国库见空，开始发行国债。罗马最终攻克马尔萨拉，迦太基本国命令哈米尔卡立刻与罗马和谈，条约如下：\r
- 迦太基彻底**放弃西西里**\r
- 迦太基承诺不向罗马盟友发起战争\r
- 交换俘虏\r
- 迦太基支付**3200塔兰特赔款**\r
- 罗马尊重迦太基独立自治\r
\r
至此，持续了23年的第一次布匿战争结束。\r
\r
## 2. 休战期间\r
迦太基出于赔款压力，未能如约支付雇佣兵佣金，致2万佣兵叛变，被哈米尔卡镇压。罗马趁机占领**撒丁岛**和**科西嘉岛**。\r
\r
哈米尔卡随后前往西班牙，将西班牙东南部开发为富饶的殖民地。十年后，“**迦太基新城**”在此建立，哈米尔卡死后，其女婿哈斯德鲁鲍尔上位，罗马承诺不干涉迦太基在埃布罗河以南的扩张。\r
\r
罗马方面，对新征服的西西里、撒丁岛、科西嘉首次采用**行省制**，归罗马直辖，其居民需缴纳“什一税”，无需服兵役。西西里成为罗马粮仓，罗马本土转而种植经济作物。\r
\r
此时，伊利里亚海盗猖獗，无视罗马警告，被罗马出兵降服，伊利里亚割让阿波罗尼亚，罗马得以控制亚得里亚海。\r
\r
东、南、西三面安全后，罗马着手解决北方的高卢问题。罗马组织几乎全部现役兵力，歼灭高卢四万人，次年越过卢比孔河，瓦解高卢联盟，一路追击，占领米兰。至此，罗马将北部防线从卢比孔河移至波河，准备开发波河以南地区。\r
\r
与此同时在西班牙，哈斯德鲁鲍尔被杀，哈米尔卡长子**汉尼拔**就任总督。汉尼拔意图称霸埃布罗河以南全境，被攻击的东岸港口萨贡托向罗马求援，罗马出使调停，汉尼拔无视并占领萨贡托。罗马再次对迦太基宣战。\r
\r
## 3. 第二次布匿战争\r
汉尼拔为将战场移至罗马本土，率十万大军，从卡塔赫纳出发，北渡埃布罗河，翻过比利牛斯山脉，穿越高卢腹地，横渡罗讷河，翻越阿尔卑斯山，绕至意大利北部攻入罗马。由于沿途分兵留守，且减员严重，最终只剩2.6万人。\r
\r
罗马方面错判战场，紧急回撤。汉尼拔入境后，先后于**提契诺河**、**特雷比亚河**、**特拉西梅诺湖**三次完胜罗马军，之后双方于粮仓坎尼展开会战，汉尼拔以包围战术几乎全歼罗马8万人。\r
\r
随后意大利战场陷入僵局，罗马采用消耗游击战术，与汉尼拔在意大利南部持续拉锯。加普亚背叛罗马，汉尼拔又与锡拉库萨、马其顿结为同盟，并攻占塔兰托，使罗马四面受敌。\r
\r
罗马方面，西班牙战线节节取胜，同时通过外交手段巩固东方同盟，击败马其顿（**第一次马其顿战争**），北方因两个军团被高卢全歼而撤回卢比孔河，南方攻克有阿基米德协助防守的锡拉库萨，不久罗马收复加普亚。\r
\r
而后西班牙战线由于人数差距，罗马军全线崩溃。**大西庇阿**请缨赴西班牙，仅一天攻占卡塔赫纳，同时费边夺取塔兰托，马尔凯鲁斯与汉尼拔缠斗战死。\r
\r
汉尼拔二弟哈斯德鲁鲍尔被西庇阿击败，意图北上至意大利与汉尼拔会合，被罗马方面截杀。同时西庇阿在西班牙完败汉尼拔三弟马可尼，并拉拢努米底亚王子马西尼萨。\r
\r
西庇阿在西西里经营一年后，登陆非洲，与马西尼萨结盟，假意和谈，奇袭迦太基-努米底亚营地，后又在会战中以少胜多，西庇阿助马西尼萨夺回努米底亚王位。迦太基求和，命汉尼拔从意大利撤军。后和谈破裂，汉尼拔与西庇阿在北非**扎马**展开会战，西庇阿以包围战术完胜。\r
\r
扎马一役后，两国和谈，条约如下：\r
- 罗马承认迦太基自治\r
- 迦太基**放弃西西里、撒丁岛和西班牙**\r
- 迦太基承认马西尼萨的努米底亚王位\r
- 迦太基不得向罗马盟国发起战争\r
- 交换俘虏\r
- 迦太基**解散海军**，只留10艘战船\r
- 不经罗马同意，迦太基**不得发动战争**\r
- 合约生效前，罗马驻非军费由迦太基承担\r
- 迦太基支付**1万塔兰特赔款**，50年付清\r
- 迦太基将100名人质送至罗马\r
\r
第二次布匿战争结束，西庇阿凯旋后被尊为“**阿非利加努斯**”。\r
\r
## 4. 第二次马其顿战争\r
马其顿**菲利普五世**侵略雅典等希腊诸城邦，罗马派人交涉无果，遂出兵干涉。罗马-希腊联军于**西诺塞法拉**重创马其顿，菲利普五世被迫签订和约：\r
- 马其顿尊重其它希腊城邦自治\r
- 马其顿将**本土以外领地交给罗马**\r
- 马其顿**解散海军**，只留5艘战船\r
- 马其顿**军队上限**5000人\r
- 不经罗马允许，马其顿不得在本国领土外作战\r
- 马其顿支付**1000塔兰特赔款**\r
- 国王次子作为人质送往罗马\r
\r
## 5. 叙利亚战争\r
迦太基方面，汉尼拔着手恢复国内经济，因过于激进而被陷害，逃往**叙利亚**，投奔塞琉古王朝国王**安条克**。时逢希腊城邦埃托利亚不满罗马，求助叙利亚。汉尼拔主张自领一军游说迦太基进攻意大利，同时安条克攻打希腊，两军于意大利本土夹击罗马。\r
\r
西庇阿亲赴叙利亚交涉未果（期间与汉尼拔会面），两年后安条克发兵西进，被罗马于**温泉关**击败。次年，西庇阿反击，取得两场海战胜利后控制爱琴海，进军叙利亚本土。安条克试图求和，条件未能谈妥，两军于**马格尼西亚平原**展开会战。得益于帕加马国王欧迈尼斯二世反制塞琉古战车的战术，罗马-希腊联军以劣势人数取胜。\r
\r
战后合约如下：\r
- 罗马承认叙利亚自治\r
- 叙利亚承诺**不侵犯托罗斯山脉以西**\r
- 叙利亚向罗马支付**1.5万塔兰特赔款**\r
- 叙利亚向帕加马支付400塔兰特赔款\r
- 20名人质移交罗马\r
- 引渡汉尼拔（失败，已潜逃）和三位埃托利亚首领\r
\r
西庇阿回国后，遭到以老加图为首的保守派弹劾，西庇阿选择沉默，隐居乡野。保守派欲拘捕西庇阿，被年轻议员格拉古阻止。西庇阿将女儿嫁给格拉古，生下提比利乌斯和盖乌斯（格拉古兄弟）。公元前183年，西庇阿和汉尼拔与同年去世。老加图把持罗马。\r
\r
## 6. 第三次马其顿战争\r
菲利普五世去世后，长子**珀尔修斯**继位，与叙利亚、比提尼亚联姻，并以抵御蛮族为名扩充军备，引起罗马警觉。随后马其顿进攻帕加马，后者向罗马求援。罗马出使交涉未果，珀尔修斯反而开始策反其他希腊城邦，罗马决定开战。\r
\r
罗马首先出使盟国，确保与希腊诸城邦、帕加马、叙利亚等国统一战线，比提尼亚则保持中立，马其顿被孤立。开始三年罗马对战争表现消极，连吃败仗。直到公元前168年，**埃米利乌斯·保卢斯**（大西庇阿妻弟，小西庇阿生父）当政，率大军从西岸登陆希腊，急行军直扑珀尔修斯军，两军于**皮得纳平原**展开会战，罗马以3万联军击败马其顿4.4万人。\r
\r
珀尔修斯战败后遭背叛被罗马抓获，终身软禁。罗马于马其顿境内大肆掠夺，**马其顿彻底灭**亡，领土分裂为四个小国，罗马在要求分缴一半税收的前提下承认其自治。\r
\r
## 7. 第三次布匿战争\r
迦太基经过50年休养恢复了元气，因忌惮努米底亚扩张，自行招募6万雇佣兵。罗马派出使团，在迦太基的控诉下，让努米底亚军队退回国境。\r
\r
迦太基以此认为罗马软弱，贸然出兵努米底亚。罗马元老院震怒，派4个军团南下。迦太基紧急道歉，许诺解散雇佣兵，处死指挥官。罗马于是暂停出兵，改为派遣调查团。\r
\r
迦太基却一再拖延兑现承诺，罗马失去耐心，乌蒂卡站罗马阵营，罗马执政官改驻非洲，意图宣战。迦太基再次道歉，无条件投降，送去300人质，并在罗马要求下解除全部武装。\r
\r
此时马其顿，冒充珀尔修斯次子的菲利普在希腊煽动反罗马情绪，意图趁机对抗罗马。公元前148年，罗马再次出兵希腊（**第四次马其顿战争**），同时向迦太基发出最后通牒：拆毁首都迦太基，全体居民迁至离海15公里的内陆。迦太基民众大怒，将回国使者打死，全民备战，保卫首都。\r
\r
罗马用一年时间镇压马其顿叛乱，原四个自治国沦为行省。随后罗马不断干涉希腊内政外交，压缩亚该亚同盟领土，以科林斯为首的希腊势力发起反抗，遭罗马剿灭，科林斯城被夷平，强烈震撼了其他希腊城邦。\r
\r
公元前146年，**西庇阿·埃米利乌斯（小西庇阿）** 受命对围困的迦太基发起总攻，迦太基城化为瓦砾，土地被撒盐，居民被卖为奴隶，领土沦为“**非洲行省**”。\r
\r
帕加马国王无继承人，临死将王国托付给罗马，于是小亚细亚也成为罗马行省。至此，**地中海成为罗马内海**。\r
\r
\r
# 五、格拉古兄弟改革\r
## 1. 提比利乌斯\r
此时的罗马逐渐暴露出以下问题：\r
- **统治阶级人群僵化**：\r
\`\`\`\r
graph LR\r
A(接连胜仗)-->B(执政官很少战死)\r
B-->C(其子孙成为贵族)\r
C-->D(领导阶级被大家族垄断)\r
\`\`\`\r
- **元老院权力膨胀**：战时变通政策战后未收回，元老院把控外交、人事、财政、司法、军事任地权\r
- **贫富差距扩大**：\r
\`\`\`\r
graph LR\r
A(对外征服)-->B(富人财富过剩)\r
A-->C(获得大量奴隶 )\r
A-->D(农民因从军丧失资产)\r
B-->E(富人投资土地)\r
C-->F(为富人经营庄园)\r
E-->G(大庄园崛起)\r
F-->G\r
D-->H(农民土地被兼并)\r
G-->H\r
H-->I(中产阶级沦为无产阶级)\r
\`\`\`\r
- **社会动荡**：大量破产流民流入首都\r
- **军队质量降低**：\r
\`\`\`\r
graph LR\r
A(承担兵役的中产阶级人数变少)-->B(降低兵役门槛)\r
B-->C(原非服役者被迫从军)\r
C-->D(荣誉感低)\r
D-->E(战斗力低)\r
\`\`\`\r
\r
提比利乌斯·格拉古29岁当选护民官，提出 **《农地法》**：\r
1. 租借土地严格按照**人均上限**执行\r
2. 土地租借权**可继承不可让渡**\r
3. **退还**已超出的部分，国家补偿\r
4. 向无产阶级方法**救济金**和**复耕启动金**\r
\r
此举遭到既得利益者反对，反对派拉拢另一名护民官予以制衡，但提比利乌斯通过公民大会解除了对方职务。提比利乌斯又提出动用帕加马行省税作为改革资金，挑战元老院权威，最终在竞选连任的选举现场，发生大规模冲突，提比利乌斯当场死亡，其尸体被投入台伯河。\r
\r
同期，小西庇阿经努曼提亚战役平定**西班牙叛乱**，回罗马后反对提比利乌斯改革，不久病逝。\r
\r
## 2. 盖乌斯\r
提比利乌斯死后，其弟盖乌斯·格拉古当选护民官，提出以下政策：\r
\r
1. 《农地法》：提比利乌斯提出，由盖乌斯重新确认\r
2. 《小麦法》：国家收购**小麦低价配售**给穷人\r
3. 《军队法》：明确**征兵年龄下限**并由**国家负担军人开支**\r
4. 《公用事业法》：振兴公用事业并**解决失业问题**\r
5. 《殖民城市法》：以**发展经济**为目的建设殖民地\r
6. 《陪审员改革法》：陪审团全部由**骑士阶级**担任\r
7. 《行省法》：优待骑士阶级\r
8. 《公民权改革法》：给拉丁公民发放**罗马公民权**，给其他意大利人发放**拉丁公民权**\r
 \r
由于危及元老院统治，反对派一方面中伤盖乌斯意欲独裁，一方面扶植其他护民官出台讨好民众的荒唐法案。\r
\r
公元前121年，一次公民大会上两派发生冲突，元老院发布“**最终劝告**”，对盖乌斯派**武装镇压**，盖乌斯逃跑途中自尽，牵连处死者达3000人。\r
\r
格拉古兄弟改革**宣告失败**。\r
\r
\r
# 六、马略时代\r
## 1. 崛起\r
盖乌斯·马略出身平民，前期政绩平平。48岁时，**朱古达战争**爆发。\r
\r
努米底亚继承人（马西尼萨之孙）内斗，朱古达获胜，败者向罗马求援，元老院出面将努米底亚一分为二，朱古达占东部。不出五年，朱古达西侵，很多意大利商人被杀。\r
\r
罗马群情激愤，于公元前112年向朱古达宣战，朱古达直接投降表示臣服，双方议和。\r
\r
而后朱古达暗杀堂兄于罗马，致罗马二次出兵，却战败受辱回国。随后执政官亲征，马略为副将，罗马首战得胜，朱古达转为游击，战况陷入胶着。\r
\r
马略欲速战，不受采纳，于是回国竞选执政官，成功当选后负责非洲战事。马略展开军事改革，**改征兵制为志愿兵制**，军人成为正式职业，既吸收了失业者，又稳固了军队质量，但开启了军队私人化的先河。\r
\r
马略攻占了努米迪亚一半领土，但无法消灭朱古达。罗马派出**路奇乌斯·科尔涅利乌斯·苏拉**辅助马略从外交上切断毛里塔尼亚和努米底亚的同盟。\r
\r
苏拉出身没落贵族，与毛里塔尼亚国王谈判，使其诱捕朱古达，罗马与毛里塔尼亚和解，朱古达战争结束。\r
\r
同时，为抵御日耳曼人南下，马略连任执政官后驻军罗讷河，经“埃奎亚·塞克斯提亚之战”以不足3万人击溃条顿部落10余万人，与另一执政官合兵后于维尔切利歼灭日耳曼人10余万。凯旋后马略声望达到顶点。\r
\r
## 2. 衰落\r
对内，马略将改革全权交由护民官，任其提出一系列激进提案与元老院公开对立，马略声望急剧降低。\r
\r
平民派得势后暗杀政敌，迫使元老院发布“最终劝告”。马略犹豫后服从元老院，镇压暴徒。平民派对马略大失所望，马略遂以祭神为由移居希腊。\r
\r
公元前91年，因不满与罗马人之间日益明显的待遇差别，意大利各同盟国爆发了反对罗马的“**同盟战争**”。东部沿海8个部落联合建国“意大利”，定都科尔芬尼乌姆。罗马执政官分兵讨伐，双方均损失惨重，其间苏拉打法果断，战绩突出。\r
\r
次年，执政官路奇乌斯·尤里乌斯·恺撒（恺撒大帝的叔叔）提出 **《尤里乌斯公民法》**，正式给予意大利人罗马公民权，双方停战，罗马**从城邦联盟转为大国**。\r
\r
本都国王**米特拉达梯六世**趁罗马内乱，攻打比提尼亚，又入侵帕加马行省。同盟战争结束后，罗马着手东征本都。\r
\r
苏拉凭借同盟战争中的表现当选执政官，指挥东征。马略为争夺指挥权，与护民官结成政治同盟，经平民大会发布《苏尔皮基乌斯法》**取消新老公民差别**，并任命马略为东征总指挥。\r
\r
两派冲突升级为流血事件，苏拉在马略家躲过一难，随后苏拉召集3.5万私人军队攻入首都。马略等人没有防备，被苏拉控制，马略逃往伊特鲁里亚。\r
\r
苏拉政变得手后，巩固元老院统治，废除《苏尔皮基乌斯法》，将平民派领袖定为国贼，马略逃往非洲。\r
\r
\r
# 七、苏拉时代\r
## 1. 第一次米特拉达梯战争\r
米特拉达梯攻占帕加马后屠杀8万罗马人，并鼓动全希腊反对罗马。\r
\r
苏拉率军登陆希腊后，留守罗马的执政官**秦纳**随即叛投平民派，但于冲突中落败逃走，马略闻讯赶回罗马，与秦纳联手武装夺权，疯狂屠杀反对派。\r
\r
不久马略病逝，秦纳独裁，解除苏拉军职，并将苏拉派驱逐出境，同时派军走海路绕过希腊远征本都。\r
\r
苏拉方面，先派幕僚卢库鲁斯筹集海军，同时向希腊各地征收经费，并逼迫希腊的精神支柱雅典投降。本都大军两次登陆希腊，均被苏拉击溃，苏拉以战养战，战绩震慑了全希腊，确保了当地稳定后在达达尼尔海峡边等待海军。\r
\r
政府军登陆小亚细亚后，副将芬布洛斯兵变夺权，与本都军交战得胜。米特拉达梯权衡后与苏拉讲和，苏拉提出：\r
\r
- 本都放弃侵占的领土，退回国内\r
- 本都与罗马结盟\r
- 海军战船移交给苏拉军\r
- 苏拉归还全部本都俘虏\r
- 本都赔款2000塔兰特\r
\r
谈判期间卢库鲁斯带来了海军，米特拉达梯迫于压力选择妥协。苏拉随后进军小亚细亚，诱使芬布洛斯军士兵叛逃，芬布洛斯自杀，苏拉完胜。\r
\r
战后苏拉重建了小亚细亚秩序：\r
- 让本都、比提尼亚、卡帕多西亚三国结盟\r
- 恢复帕加马行省秩序，征收拖欠税款\r
- 卢库鲁斯留驻小亚细亚\r
\r
而后苏拉在雅典停留一年，以图同时牵制秦纳和米特拉达梯。\r
\r
## 2. 苏拉独裁\r
秦纳独裁期间，维持了国内稳定，将女儿嫁给时年16岁的恺撒。为抵御苏拉，秦纳于安科纳集结军队，但军纪混乱，暴乱不止，致秦纳意外身亡。\r
\r
苏拉登陆意大利后，收拢人心，徐徐北上。期间，父亲被马略杀害的克拉苏、庞培投奔苏拉。几番内战后，苏拉攻陷罗马，捕杀平民派，恺撒凭多人求情获免，苏拉要求恺撒、庞培与出身平民派的妻子离婚，恺撒拒绝并逃往小亚细亚，庞培服从。克拉苏则在此次大规模抄家行动中大发横财。\r
\r
苏拉通过公民大会破例成为无限期独裁官，可越过公民大会发布政令，随即展开改革：\r
\r
1. 公民权：认可《尤里乌斯公民权法》和《苏尔皮基乌斯法》\r
2. 福祉：废除救济贫民的《小麦法》\r
3. 失业：建设殖民地吸纳失业老兵\r
4. 元老院：扩充议员至600人，扶持骑士阶层\r
5. 司法：陪审团全部由元老院议员担任\r
6. 行政：调整任职条件，使高级官员成为元老院主体\r
7. 军事：**军政分离**。国内（意大利半岛）仅执政官能统军（不超过4军团），行省军队调动需元老院许可，不许进入国内，总督任地由元老院决定，总督任期不得超过一年，**避免形成军阀**。\r
8. 地方：同盟城邦转为国内自治体，中央**下派行政长官**，与地方议会共同管理地方政务。\r
9. 护民官：禁止护民官卸任后担任其他职务，且连任间隔10年，**弱化护民官**\r
\r
整体原则为：**强化元老院**、**加强中央集权**\r
\r
两年后，苏拉主动辞官隐居，不久病逝，享国葬。\r
\r
\r
# 八、庞培时代\r
## 1. 崛起\r
公元前78年，卸任执政官的老雷必达（后三头雷必达之父）起兵反叛，被年仅29岁的庞培（临时指挥）击败，残部往西班牙投奔塞多留。庞培又破格越龄担任总指挥进军西班牙，历时数年平息了塞多留叛乱。\r
\r
公元前73年，**斯巴达克斯奴隶起义**爆发。起义军初期势头大盛，后因领袖理念不合，分兵两路。克里克斯军先被击溃，斯巴达克斯则连战连胜，转战北上，又掉头南下，一路掠夺失去民心，最终在意大利南部被克拉苏击败。\r
\r
此时庞培从西班牙凯旋，但未解散军队，越过卢比孔河直抵罗马，要求举办凯旋仪式并提名执政官。元老院让同样握兵的克拉苏代为游说，二人私下达成协议，**克拉苏在元老院内帮助庞培提名执政官，庞培在军队中帮克拉苏拉选票**，而后各自解散军队。\r
\r
公元前70年，庞培和克拉苏当选执政官。\r
\r
- 重新起用《霍滕修斯法》，恢复平民大会绕过元老院的权力\r
- 陪审团由元老院议员、骑士、平民三分。\r
\r
同时期，米特拉达梯趁罗马疲于应对国内叛乱和起义，掀起**第二次米特拉达梯战争**。卢库鲁斯出兵迎战，两次击败本都军，米特拉达梯逃往亚美尼亚，卢库鲁斯则着手处理小亚细亚当地内政。\r
\r
为缓解当地的高利贷，卢库鲁斯一举抵消了大半债务，被激怒的放贷人向元老院告状，使得卢库鲁斯始终得不到母国支援。\r
\r
卢库鲁斯要求亚美尼亚引渡米特拉达梯被拒绝，遂宣战，以十分之一的军力击溃亚美尼亚军，一路打到里海，但因治下苛刻，爆发兵变，只好罢兵。\r
\r
另一边庞培作为总司令主导肃清海盗，斥巨资，领12万人，仅用三个月消灭了整个地中海的海盗。为延长绝对指挥权，庞培要求接替卢库鲁斯，负责本都战事。由于卢库鲁斯激怒了骑士阶级，该决议高票通过。卢库鲁斯回国后举行凯旋仪式，后逐渐隐退。\r
\r
庞培接手后发动**第三次米特拉达梯战争**，初战得胜，米特拉达梯逃入山区。庞培转与帕提亚结盟，两国以幼发拉底河为界互不侵犯。亚美尼亚迫于压力臣服罗马。\r
\r
庞培进军叙利亚，塞琉古王朝覆灭，成为叙利亚行省。庞培取消犹太政教合一的模式，遭到犹太人抵抗，庞培遂攻克耶路撒冷，进入神庙圣所，被犹太人视为亵渎。从此犹太沦为半行省，由叙利亚总督管理。\r
\r
众叛亲离的米特拉达梯自杀，其子投降庞培，小亚细亚彻底平定。`,fx=`---
title: 一战笔记
date: 2025-08-26
description: 整理一战历史
---

# 一、两大阵营的成立背景
19世纪初，神圣罗马帝国崩溃，德意志境内四分五裂，小邦林立，严重阻碍了社会发展。德意志民众迫切期待结束割据，建立起统一的民族国家。

德意志诸邦中，奥地利长期居于主导地位，普鲁士则在俾斯麦的领导下迅速崛起，与奥地利争夺霸权。

俾斯麦上台后主张铁血政策（通过铁与血解决问题），先后发动普丹战争、普奥战争、普法战争，结合精妙的外交手段和强势的军事行动，最终完成了德国的统一。

### 普丹战争（1863）：
> 普鲁士与丹麦因为石勒苏益格和荷尔斯泰因两个公国的归属问题发生冲突，俾斯麦趁机对丹麦发动战争，首先稳住英法俄（俄国因普鲁士曾支持其镇压波兰起义而示好，法国正兵陷墨西哥，英国没有大陆盟友难以出兵），同时许诺与奥地利平分两个公国，联合奥地利一同出兵，丹麦战败，签订《维也纳和约》，普鲁士占石勒苏益格，维也纳占荷尔斯泰因（飞地）。

### 普奥战争（1866）：
> 战胜丹麦后，俾斯麦积极准备与奥地利开战争夺德意志领导权。首先与意大利结为反奥联盟，相约两面夹击奥地利，又稳住法国，拿破仑三世认为普鲁士自不量力所以答应不干涉。准备就绪后，俾斯麦提出管辖荷尔斯泰因，诱使奥地利开战。意大利在南部牵扯奥军，使普鲁士迅速从北推进，但意大利很快战败。普军经过萨多瓦决战彻底击败奥军，双方签订《布拉格和约》，奥地利退出德意志联邦。转年奥地利与匈牙利合并为奥匈帝国。

### 普法战争（1870）：
> 法国担心德国威胁其欧洲大陆霸主的地位而阻挠德意志统一，俾斯麦为解决统一最后的障碍而发动普法战争。南北德意志并肩作战，一举击败法国，成立德意志帝国，德法签订《法兰克福条约》，法国割地赔款，威廉一世在凡尔赛宫加冕为德意志帝国皇帝。德国完成统一，德法则从此结仇。

俾斯麦担心法国报复，促成德国-奥匈帝国-意大利三国同盟，同时为避免俄国发难（俄国和奥匈帝国在巴尔干地区有利益冲突），与俄国签订中立条约，维持各国平衡。

德意志帝国的第三代也是末代皇帝威廉二世即位后，罢黜俾斯麦，一改斡旋稳定的路线为霸权扩张，发展海军，争夺海外殖民地，意图建立世界帝国。德国取消了与俄国的再保险条约，促使俄国与法国结盟，东西封堵德国。而英国与法国有互保条约，且希望牵制新兴的德国，保住海上霸权，最终英、法、俄结成协约国。

欧洲两大军事集团——同盟国与协约国开始对峙。


# 二、巴尔干火药桶：
奥斯曼土耳其帝国自18世纪后期逐渐衰落，到20世纪初远远落后于西方列强，成为“西亚病夫”，其统治下的领土四分五裂，各小国先后独立，列强均在觊觎帝国遗产。

### 意土战争（1911）：
> 意大利出于国内汹涌的民族主义运动，意图占领土耳其在北非的属地的黎波里塔尼亚和昔兰尼加（即利比亚），以确保自己对西西里-北非之间的海域控制权。第二次摩洛哥危机爆发后，意大利以位于利比亚领土上的意大利居民受到危害为借口，对土耳其宣战。意土战争期间，意大利在人类史上首次使用飞机参与战争，并于海上发动闪电袭击。适逢巴尔干战争爆发前夕，土耳其急于将兵力调回巴尔干地区以应对巴尔干同盟国的围攻，被迫签订《意土和约》，将利比亚割让给意大利。

### 第一次巴尔干战争（1912）：
> 因奥斯曼帝国拒绝给予马其顿和色雷斯自治权，巴尔干同盟国先后对土宣战。黑山攻阿尔巴尼亚北部，保加利亚攻东色雷斯，塞尔维亚攻马其顿北部，希腊攻马其顿南部，土耳其连战连败。此时各大国介入，俄国担心保加利亚进抵伊斯坦布尔不利于自己解决黑海海峡问题，德国和奥匈帝国认为塞尔维亚和希腊是站在协约国一方。在列强压力下，交战双方议和。马其顿被塞尔维亚、保加利亚和希腊瓜分，塞萨洛尼基并入希腊，奥匈帝国担心塞尔维亚吞并阿尔巴尼亚后过于强大，要求阿尔巴尼亚独立，封锁塞尔维亚进入亚得里亚海的通道。

第一次巴尔干战争以各国签订《伦敦条约》告终，但战胜国内部因分赃不均而加深矛盾。保加利亚出力最多，应占领更多的马其顿领土，于是武力驱逐希腊、塞尔维尼亚军队。塞尔维亚一心想通过马其顿控制出海口，罗马尼亚则向保加利亚提出多布罗加的领土要求。

### 第二次巴尔干战争（1913）：
> 在奥匈帝国和德国唆使下，保加利亚攻击马其顿境内的希、塞军队，协约国则支持后者，巴尔干爆发了保加利亚对战希腊、塞尔维亚、黑山的战争。保加利亚迎战不利，罗马尼亚趁机也对保宣战，奥斯曼也卷土重来，保加利亚四面楚歌，被迫割地求和。

战后，保加利亚丧失大量领土并加入德奥同盟，罗马尼亚站队协约国，以俄国为后台的塞尔维亚版图大涨但仍被奥匈帝国扼制出海口。各国矛盾持续加剧。

1914年6月28日，奥匈帝国皇储斐迪南夫妇在萨拉热窝遇刺，奥匈帝国皇帝弗朗茨·约瑟夫一世对塞尔维亚宣战。随后德、俄、法、英各国相继卷入战争，第一次世界大战爆发。


# 三、西线
德国早在战前就由总参谋长施里芬制定了“施里芬计划”，以应对未来东西两线作战。其精髓是绕开布防严密的德法边界，将主力经由比利时做大迂回，迅速攻占巴黎，然后再将部队调往东方，迎战俄军。

德国对法宣战后，向中立国比利时要求借道，比利时拒绝，德国随即对比利时不宣而战。德军在列日要塞遭遇顽强抵抗，于是发动巨炮将其摧毁，随即占领布鲁塞尔，比利时政府流亡法国。

德军强大的右翼经由比利时迅速突入法国，逼近巴黎。同时法国秉持以攻为守的方针，大军攻打阿尔萨斯和洛林，却被德军人数劣势的左翼击败，小毛奇临时修改计划，左翼尚未将法军引入陷阱即提前反攻，使得法军右翼保存了有生力量，向国内撤退。德国左右翼均节节取胜，于是提前将部分右翼抽调到东线，应对已攻入东普鲁士的俄军。`,mh=Symbol.for("yaml.alias"),Xc=Symbol.for("yaml.document"),Ft=Symbol.for("yaml.map"),P1=Symbol.for("yaml.pair"),Pe=Symbol.for("yaml.scalar"),Gl=Symbol.for("yaml.seq"),Re=Symbol.for("yaml.node.type"),ii=n=>!!n&&typeof n=="object"&&n[Re]===mh,Li=n=>!!n&&typeof n=="object"&&n[Re]===Xc,$l=n=>!!n&&typeof n=="object"&&n[Re]===Ft,vn=n=>!!n&&typeof n=="object"&&n[Re]===P1,hn=n=>!!n&&typeof n=="object"&&n[Re]===Pe,Ql=n=>!!n&&typeof n=="object"&&n[Re]===Gl;function kn(n){if(n&&typeof n=="object")switch(n[Re]){case Ft:case Gl:return!0}return!1}function xn(n){if(n&&typeof n=="object")switch(n[Re]){case mh:case Ft:case Pe:case Gl:return!0}return!1}const J1=n=>(hn(n)||kn(n))&&!!n.anchor,ae=Symbol("break visit"),W1=Symbol("skip children"),Ze=Symbol("remove node");function Ri(n,e){const t=n0(e);Li(n)?sl(null,n.contents,t,Object.freeze([n]))===Ze&&(n.contents=null):sl(null,n,t,Object.freeze([]))}Ri.BREAK=ae;Ri.SKIP=W1;Ri.REMOVE=Ze;function sl(n,e,t,i){const l=e0(n,e,t,i);if(xn(l)||vn(l))return t0(n,i,l),sl(n,l,t,i);if(typeof l!="symbol"){if(kn(e)){i=Object.freeze(i.concat(e));for(let r=0;r<e.items.length;++r){const a=sl(r,e.items[r],t,i);if(typeof a=="number")r=a-1;else{if(a===ae)return ae;a===Ze&&(e.items.splice(r,1),r-=1)}}}else if(vn(e)){i=Object.freeze(i.concat(e));const r=sl("key",e.key,t,i);if(r===ae)return ae;r===Ze&&(e.key=null);const a=sl("value",e.value,t,i);if(a===ae)return ae;a===Ze&&(e.value=null)}}return l}async function Ts(n,e){const t=n0(e);Li(n)?await ol(null,n.contents,t,Object.freeze([n]))===Ze&&(n.contents=null):await ol(null,n,t,Object.freeze([]))}Ts.BREAK=ae;Ts.SKIP=W1;Ts.REMOVE=Ze;async function ol(n,e,t,i){const l=await e0(n,e,t,i);if(xn(l)||vn(l))return t0(n,i,l),ol(n,l,t,i);if(typeof l!="symbol"){if(kn(e)){i=Object.freeze(i.concat(e));for(let r=0;r<e.items.length;++r){const a=await ol(r,e.items[r],t,i);if(typeof a=="number")r=a-1;else{if(a===ae)return ae;a===Ze&&(e.items.splice(r,1),r-=1)}}}else if(vn(e)){i=Object.freeze(i.concat(e));const r=await ol("key",e.key,t,i);if(r===ae)return ae;r===Ze&&(e.key=null);const a=await ol("value",e.value,t,i);if(a===ae)return ae;a===Ze&&(e.value=null)}}return l}function n0(n){return typeof n=="object"&&(n.Collection||n.Node||n.Value)?Object.assign({Alias:n.Node,Map:n.Node,Scalar:n.Node,Seq:n.Node},n.Value&&{Map:n.Value,Scalar:n.Value,Seq:n.Value},n.Collection&&{Map:n.Collection,Seq:n.Collection},n):n}function e0(n,e,t,i){var l,r,a,u,s;if(typeof t=="function")return t(n,e,i);if($l(e))return(l=t.Map)==null?void 0:l.call(t,n,e,i);if(Ql(e))return(r=t.Seq)==null?void 0:r.call(t,n,e,i);if(vn(e))return(a=t.Pair)==null?void 0:a.call(t,n,e,i);if(hn(e))return(u=t.Scalar)==null?void 0:u.call(t,n,e,i);if(ii(e))return(s=t.Alias)==null?void 0:s.call(t,n,e,i)}function t0(n,e,t){const i=e[e.length-1];if(kn(i))i.items[n]=t;else if(vn(i))n==="key"?i.key=t:i.value=t;else if(Li(i))i.contents=t;else{const l=ii(i)?"alias":"scalar";throw new Error(`Cannot replace node with ${l} parent`)}}const hx={"!":"%21",",":"%2C","[":"%5B","]":"%5D","{":"%7B","}":"%7D"},dx=n=>n.replace(/[!,[\]{}]/g,e=>hx[e]);class Zn{constructor(e,t){this.docStart=null,this.docEnd=!1,this.yaml=Object.assign({},Zn.defaultYaml,e),this.tags=Object.assign({},Zn.defaultTags,t)}clone(){const e=new Zn(this.yaml,this.tags);return e.docStart=this.docStart,e}atDocument(){const e=new Zn(this.yaml,this.tags);switch(this.yaml.version){case"1.1":this.atNextDocument=!0;break;case"1.2":this.atNextDocument=!1,this.yaml={explicit:Zn.defaultYaml.explicit,version:"1.2"},this.tags=Object.assign({},Zn.defaultTags);break}return e}add(e,t){this.atNextDocument&&(this.yaml={explicit:Zn.defaultYaml.explicit,version:"1.1"},this.tags=Object.assign({},Zn.defaultTags),this.atNextDocument=!1);const i=e.trim().split(/[ \t]+/),l=i.shift();switch(l){case"%TAG":{if(i.length!==2&&(t(0,"%TAG directive should contain exactly two parts"),i.length<2))return!1;const[r,a]=i;return this.tags[r]=a,!0}case"%YAML":{if(this.yaml.explicit=!0,i.length!==1)return t(0,"%YAML directive should contain exactly one part"),!1;const[r]=i;if(r==="1.1"||r==="1.2")return this.yaml.version=r,!0;{const a=/^\d+\.\d+$/.test(r);return t(6,`Unsupported YAML version ${r}`,a),!1}}default:return t(0,`Unknown directive ${l}`,!0),!1}}tagName(e,t){if(e==="!")return"!";if(e[0]!=="!")return t(`Not a valid tag: ${e}`),null;if(e[1]==="<"){const a=e.slice(2,-1);return a==="!"||a==="!!"?(t(`Verbatim tags aren't resolved, so ${e} is invalid.`),null):(e[e.length-1]!==">"&&t("Verbatim tags must end with a >"),a)}const[,i,l]=e.match(/^(.*!)([^!]*)$/s);l||t(`The ${e} tag has no suffix`);const r=this.tags[i];if(r)try{return r+decodeURIComponent(l)}catch(a){return t(String(a)),null}return i==="!"?e:(t(`Could not resolve tag: ${e}`),null)}tagString(e){for(const[t,i]of Object.entries(this.tags))if(e.startsWith(i))return t+dx(e.substring(i.length));return e[0]==="!"?e:`!<${e}>`}toString(e){const t=this.yaml.explicit?[`%YAML ${this.yaml.version||"1.2"}`]:[],i=Object.entries(this.tags);let l;if(e&&i.length>0&&xn(e.contents)){const r={};Ri(e.contents,(a,u)=>{xn(u)&&u.tag&&(r[u.tag]=!0)}),l=Object.keys(r)}else l=[];for(const[r,a]of i)r==="!!"&&a==="tag:yaml.org,2002:"||(!e||l.some(u=>u.startsWith(a)))&&t.push(`%TAG ${r} ${a}`);return t.join(`
`)}}Zn.defaultYaml={explicit:!1,version:"1.2"};Zn.defaultTags={"!!":"tag:yaml.org,2002:"};function i0(n){if(/[\x00-\x19\s,[\]{}]/.test(n)){const t=`Anchor must not contain whitespace or control characters: ${JSON.stringify(n)}`;throw new Error(t)}return!0}function l0(n){const e=new Set;return Ri(n,{Value(t,i){i.anchor&&e.add(i.anchor)}}),e}function r0(n,e){for(let t=1;;++t){const i=`${n}${t}`;if(!e.has(i))return i}}function px(n,e){const t=[],i=new Map;let l=null;return{onAnchor:r=>{t.push(r),l??(l=l0(n));const a=r0(e,l);return l.add(a),a},setAnchors:()=>{for(const r of t){const a=i.get(r);if(typeof a=="object"&&a.anchor&&(hn(a.node)||kn(a.node)))a.node.anchor=a.anchor;else{const u=new Error("Failed to resolve repeated object (this should not happen)");throw u.source=r,u}}},sourceObjects:i}}function cl(n,e,t,i){if(i&&typeof i=="object")if(Array.isArray(i))for(let l=0,r=i.length;l<r;++l){const a=i[l],u=cl(n,i,String(l),a);u===void 0?delete i[l]:u!==a&&(i[l]=u)}else if(i instanceof Map)for(const l of Array.from(i.keys())){const r=i.get(l),a=cl(n,i,l,r);a===void 0?i.delete(l):a!==r&&i.set(l,a)}else if(i instanceof Set)for(const l of Array.from(i)){const r=cl(n,i,l,l);r===void 0?i.delete(l):r!==l&&(i.delete(l),i.add(r))}else for(const[l,r]of Object.entries(i)){const a=cl(n,i,l,r);a===void 0?delete i[l]:a!==r&&(i[l]=a)}return n.call(e,t,i)}function ze(n,e,t){if(Array.isArray(n))return n.map((i,l)=>ze(i,String(l),t));if(n&&typeof n.toJSON=="function"){if(!t||!J1(n))return n.toJSON(e,t);const i={aliasCount:0,count:1,res:void 0};t.anchors.set(n,i),t.onCreate=r=>{i.res=r,delete t.onCreate};const l=n.toJSON(e,t);return t.onCreate&&t.onCreate(l),l}return typeof n=="bigint"&&!(t!=null&&t.keep)?Number(n):n}class gh{constructor(e){Object.defineProperty(this,Re,{value:e})}clone(){const e=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return this.range&&(e.range=this.range.slice()),e}toJS(e,{mapAsMap:t,maxAliasCount:i,onAnchor:l,reviver:r}={}){if(!Li(e))throw new TypeError("A document argument is required");const a={anchors:new Map,doc:e,keep:!0,mapAsMap:t===!0,mapKeyWarned:!1,maxAliasCount:typeof i=="number"?i:100},u=ze(this,"",a);if(typeof l=="function")for(const{count:s,res:o}of a.anchors.values())l(o,s);return typeof r=="function"?cl(r,{"":u},"",u):u}}class As extends gh{constructor(e){super(mh),this.source=e,Object.defineProperty(this,"tag",{set(){throw new Error("Alias nodes cannot have tags")}})}resolve(e,t){let i;t!=null&&t.aliasResolveCache?i=t.aliasResolveCache:(i=[],Ri(e,{Node:(r,a)=>{(ii(a)||J1(a))&&i.push(a)}}),t&&(t.aliasResolveCache=i));let l;for(const r of i){if(r===this)break;r.anchor===this.source&&(l=r)}return l}toJSON(e,t){if(!t)return{source:this.source};const{anchors:i,doc:l,maxAliasCount:r}=t,a=this.resolve(l,t);if(!a){const s=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new ReferenceError(s)}let u=i.get(a);if(u||(ze(a,null,t),u=i.get(a)),!u||u.res===void 0){const s="This should not happen: Alias anchor was not resolved?";throw new ReferenceError(s)}if(r>=0&&(u.count+=1,u.aliasCount===0&&(u.aliasCount=hu(l,a,i)),u.count*u.aliasCount>r)){const s="Excessive alias count indicates a resource exhaustion attack";throw new ReferenceError(s)}return u.res}toString(e,t,i){const l=`*${this.source}`;if(e){if(i0(this.source),e.options.verifyAliasOrder&&!e.anchors.has(this.source)){const r=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new Error(r)}if(e.implicitKey)return`${l} `}return l}}function hu(n,e,t){if(ii(e)){const i=e.resolve(n),l=t&&i&&t.get(i);return l?l.count*l.aliasCount:0}else if(kn(e)){let i=0;for(const l of e.items){const r=hu(n,l,t);r>i&&(i=r)}return i}else if(vn(e)){const i=hu(n,e.key,t),l=hu(n,e.value,t);return Math.max(i,l)}return 1}const a0=n=>!n||typeof n!="function"&&typeof n!="object";class Y extends gh{constructor(e){super(Pe),this.value=e}toJSON(e,t){return t!=null&&t.keep?this.value:ze(this.value,e,t)}toString(){return String(this.value)}}Y.BLOCK_FOLDED="BLOCK_FOLDED";Y.BLOCK_LITERAL="BLOCK_LITERAL";Y.PLAIN="PLAIN";Y.QUOTE_DOUBLE="QUOTE_DOUBLE";Y.QUOTE_SINGLE="QUOTE_SINGLE";const mx="tag:yaml.org,2002:";function gx(n,e,t){if(e){const i=t.filter(r=>r.tag===e),l=i.find(r=>!r.format)??i[0];if(!l)throw new Error(`Tag ${e} not found`);return l}return t.find(i=>{var l;return((l=i.identify)==null?void 0:l.call(i,n))&&!i.format})}function na(n,e,t){var c,d,h;if(Li(n)&&(n=n.contents),xn(n))return n;if(vn(n)){const y=(d=(c=t.schema[Ft]).createNode)==null?void 0:d.call(c,t.schema,null,t);return y.items.push(n),y}(n instanceof String||n instanceof Number||n instanceof Boolean||typeof BigInt<"u"&&n instanceof BigInt)&&(n=n.valueOf());const{aliasDuplicateObjects:i,onAnchor:l,onTagObj:r,schema:a,sourceObjects:u}=t;let s;if(i&&n&&typeof n=="object"){if(s=u.get(n),s)return s.anchor??(s.anchor=l(n)),new As(s.anchor);s={anchor:null,node:null},u.set(n,s)}e!=null&&e.startsWith("!!")&&(e=mx+e.slice(2));let o=gx(n,e,a.tags);if(!o){if(n&&typeof n.toJSON=="function"&&(n=n.toJSON()),!n||typeof n!="object"){const y=new Y(n);return s&&(s.node=y),y}o=n instanceof Map?a[Ft]:Symbol.iterator in Object(n)?a[Gl]:a[Ft]}r&&(r(o),delete t.onTagObj);const f=o!=null&&o.createNode?o.createNode(t.schema,n,t):typeof((h=o==null?void 0:o.nodeClass)==null?void 0:h.from)=="function"?o.nodeClass.from(t.schema,n,t):new Y(n);return e?f.tag=e:o.default||(f.tag=o.tag),s&&(s.node=f),f}function Pu(n,e,t){let i=t;for(let l=e.length-1;l>=0;--l){const r=e[l];if(typeof r=="number"&&Number.isInteger(r)&&r>=0){const a=[];a[r]=i,i=a}else i=new Map([[r,i]])}return na(i,void 0,{aliasDuplicateObjects:!1,keepUndefined:!1,onAnchor:()=>{throw new Error("This should not happen, please report a bug.")},schema:n,sourceObjects:new Map})}const br=n=>n==null||typeof n=="object"&&!!n[Symbol.iterator]().next().done;class u0 extends gh{constructor(e,t){super(e),Object.defineProperty(this,"schema",{value:t,configurable:!0,enumerable:!1,writable:!0})}clone(e){const t=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return e&&(t.schema=e),t.items=t.items.map(i=>xn(i)||vn(i)?i.clone(e):i),this.range&&(t.range=this.range.slice()),t}addIn(e,t){if(br(e))this.add(t);else{const[i,...l]=e,r=this.get(i,!0);if(kn(r))r.addIn(l,t);else if(r===void 0&&this.schema)this.set(i,Pu(this.schema,l,t));else throw new Error(`Expected YAML collection at ${i}. Remaining path: ${l}`)}}deleteIn(e){const[t,...i]=e;if(i.length===0)return this.delete(t);const l=this.get(t,!0);if(kn(l))return l.deleteIn(i);throw new Error(`Expected YAML collection at ${t}. Remaining path: ${i}`)}getIn(e,t){const[i,...l]=e,r=this.get(i,!0);return l.length===0?!t&&hn(r)?r.value:r:kn(r)?r.getIn(l,t):void 0}hasAllNullValues(e){return this.items.every(t=>{if(!vn(t))return!1;const i=t.value;return i==null||e&&hn(i)&&i.value==null&&!i.commentBefore&&!i.comment&&!i.tag})}hasIn(e){const[t,...i]=e;if(i.length===0)return this.has(t);const l=this.get(t,!0);return kn(l)?l.hasIn(i):!1}setIn(e,t){const[i,...l]=e;if(l.length===0)this.set(i,t);else{const r=this.get(i,!0);if(kn(r))r.setIn(l,t);else if(r===void 0&&this.schema)this.set(i,Pu(this.schema,l,t));else throw new Error(`Expected YAML collection at ${i}. Remaining path: ${l}`)}}}const yx=n=>n.replace(/^(?!$)(?: $)?/gm,"#");function ht(n,e){return/^\n+$/.test(n)?n.substring(1):e?n.replace(/^(?! *$)/gm,e):n}const di=(n,e,t)=>n.endsWith(`
`)?ht(t,e):t.includes(`
`)?`
`+ht(t,e):(n.endsWith(" ")?"":" ")+t,s0="flow",Fc="block",du="quoted";function Os(n,e,t="flow",{indentAtStart:i,lineWidth:l=80,minContentWidth:r=20,onFold:a,onOverflow:u}={}){if(!l||l<0)return n;l<r&&(r=0);const s=Math.max(1+r,1+l-e.length);if(n.length<=s)return n;const o=[],f={};let c=l-e.length;typeof i=="number"&&(i>l-Math.max(2,r)?o.push(0):c=l-i);let d,h,y=!1,g=-1,S=-1,p=-1;t===Fc&&(g=Lp(n,g,e.length),g!==-1&&(c=g+s));for(let b;b=n[g+=1];){if(t===du&&b==="\\"){switch(S=g,n[g+1]){case"x":g+=3;break;case"u":g+=5;break;case"U":g+=9;break;default:g+=1}p=g}if(b===`
`)t===Fc&&(g=Lp(n,g,e.length)),c=g+e.length+s,d=void 0;else{if(b===" "&&h&&h!==" "&&h!==`
`&&h!=="	"){const v=n[g+1];v&&v!==" "&&v!==`
`&&v!=="	"&&(d=g)}if(g>=c)if(d)o.push(d),c=d+s,d=void 0;else if(t===du){for(;h===" "||h==="	";)h=b,b=n[g+=1],y=!0;const v=g>p+1?g-2:S-1;if(f[v])return n;o.push(v),f[v]=!0,c=v+s,d=void 0}else y=!0}h=b}if(y&&u&&u(),o.length===0)return n;a&&a();let m=n.slice(0,o[0]);for(let b=0;b<o.length;++b){const v=o[b],T=o[b+1]||n.length;v===0?m=`
${e}${n.slice(0,T)}`:(t===du&&f[v]&&(m+=`${n[v]}\\`),m+=`
${e}${n.slice(v+1,T)}`)}return m}function Lp(n,e,t){let i=e,l=e+1,r=n[l];for(;r===" "||r==="	";)if(e<l+t)r=n[++e];else{do r=n[++e];while(r&&r!==`
`);i=e,l=e+1,r=n[l]}return i}const Cs=(n,e)=>({indentAtStart:e?n.indent.length:n.indentAtStart,lineWidth:n.options.lineWidth,minContentWidth:n.options.minContentWidth}),_s=n=>/^(%|---|\.\.\.)/m.test(n);function bx(n,e,t){if(!e||e<0)return!1;const i=e-t,l=n.length;if(l<=i)return!1;for(let r=0,a=0;r<l;++r)if(n[r]===`
`){if(r-a>i)return!0;if(a=r+1,l-a<=i)return!1}return!0}function Lr(n,e){const t=JSON.stringify(n);if(e.options.doubleQuotedAsJSON)return t;const{implicitKey:i}=e,l=e.options.doubleQuotedMinMultiLineLength,r=e.indent||(_s(n)?"  ":"");let a="",u=0;for(let s=0,o=t[s];o;o=t[++s])if(o===" "&&t[s+1]==="\\"&&t[s+2]==="n"&&(a+=t.slice(u,s)+"\\ ",s+=1,u=s,o="\\"),o==="\\")switch(t[s+1]){case"u":{a+=t.slice(u,s);const f=t.substr(s+2,4);switch(f){case"0000":a+="\\0";break;case"0007":a+="\\a";break;case"000b":a+="\\v";break;case"001b":a+="\\e";break;case"0085":a+="\\N";break;case"00a0":a+="\\_";break;case"2028":a+="\\L";break;case"2029":a+="\\P";break;default:f.substr(0,2)==="00"?a+="\\x"+f.substr(2):a+=t.substr(s,6)}s+=5,u=s+1}break;case"n":if(i||t[s+2]==='"'||t.length<l)s+=1;else{for(a+=t.slice(u,s)+`

`;t[s+2]==="\\"&&t[s+3]==="n"&&t[s+4]!=='"';)a+=`
`,s+=2;a+=r,t[s+2]===" "&&(a+="\\"),s+=1,u=s+1}break;default:s+=1}return a=u?a+t.slice(u):t,i?a:Os(a,r,du,Cs(e,!1))}function Zc(n,e){if(e.options.singleQuote===!1||e.implicitKey&&n.includes(`
`)||/[ \t]\n|\n[ \t]/.test(n))return Lr(n,e);const t=e.indent||(_s(n)?"  ":""),i="'"+n.replace(/'/g,"''").replace(/\n+/g,`$&
${t}`)+"'";return e.implicitKey?i:Os(i,t,s0,Cs(e,!1))}function fl(n,e){const{singleQuote:t}=e.options;let i;if(t===!1)i=Lr;else{const l=n.includes('"'),r=n.includes("'");l&&!r?i=Zc:r&&!l?i=Lr:i=t?Zc:Lr}return i(n,e)}let Pc;try{Pc=new RegExp(`(^|(?<!
))
+(?!
|$)`,"g")}catch{Pc=/\n+(?!\n|$)/g}function pu({comment:n,type:e,value:t},i,l,r){const{blockQuote:a,commentString:u,lineWidth:s}=i.options;if(!a||/\n[\t ]+$/.test(t))return fl(t,i);const o=i.indent||(i.forceBlockIndent||_s(t)?"  ":""),f=a==="literal"?!0:a==="folded"||e===Y.BLOCK_FOLDED?!1:e===Y.BLOCK_LITERAL?!0:!bx(t,s,o.length);if(!t)return f?`|
`:`>
`;let c,d;for(d=t.length;d>0;--d){const T=t[d-1];if(T!==`
`&&T!=="	"&&T!==" ")break}let h=t.substring(d);const y=h.indexOf(`
`);y===-1?c="-":t===h||y!==h.length-1?(c="+",r&&r()):c="",h&&(t=t.slice(0,-h.length),h[h.length-1]===`
`&&(h=h.slice(0,-1)),h=h.replace(Pc,`$&${o}`));let g=!1,S,p=-1;for(S=0;S<t.length;++S){const T=t[S];if(T===" ")g=!0;else if(T===`
`)p=S;else break}let m=t.substring(0,p<S?p+1:S);m&&(t=t.substring(m.length),m=m.replace(/\n+/g,`$&${o}`));let v=(g?o?"2":"1":"")+c;if(n&&(v+=" "+u(n.replace(/ ?[\r\n]+/g," ")),l&&l()),!f){const T=t.replace(/\n+/g,`
$&`).replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g,"$1$2").replace(/\n+/g,`$&${o}`);let x=!1;const O=Cs(i,!0);a!=="folded"&&e!==Y.BLOCK_FOLDED&&(O.onOverflow=()=>{x=!0});const A=Os(`${m}${T}${h}`,o,Fc,O);if(!x)return`>${v}
${o}${A}`}return t=t.replace(/\n+/g,`$&${o}`),`|${v}
${o}${m}${t}${h}`}function Sx(n,e,t,i){const{type:l,value:r}=n,{actualString:a,implicitKey:u,indent:s,indentStep:o,inFlow:f}=e;if(u&&r.includes(`
`)||f&&/[[\]{},]/.test(r))return fl(r,e);if(/^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(r))return u||f||!r.includes(`
`)?fl(r,e):pu(n,e,t,i);if(!u&&!f&&l!==Y.PLAIN&&r.includes(`
`))return pu(n,e,t,i);if(_s(r)){if(s==="")return e.forceBlockIndent=!0,pu(n,e,t,i);if(u&&s===o)return fl(r,e)}const c=r.replace(/\n+/g,`$&
${s}`);if(a){const d=g=>{var S;return g.default&&g.tag!=="tag:yaml.org,2002:str"&&((S=g.test)==null?void 0:S.test(c))},{compat:h,tags:y}=e.doc.schema;if(y.some(d)||h!=null&&h.some(d))return fl(r,e)}return u?c:Os(c,s,s0,Cs(e,!1))}function ka(n,e,t,i){const{implicitKey:l,inFlow:r}=e,a=typeof n.value=="string"?n:Object.assign({},n,{value:String(n.value)});let{type:u}=n;u!==Y.QUOTE_DOUBLE&&/[\x00-\x08\x0b-\x1f\x7f-\x9f\u{D800}-\u{DFFF}]/u.test(a.value)&&(u=Y.QUOTE_DOUBLE);const s=f=>{switch(f){case Y.BLOCK_FOLDED:case Y.BLOCK_LITERAL:return l||r?fl(a.value,e):pu(a,e,t,i);case Y.QUOTE_DOUBLE:return Lr(a.value,e);case Y.QUOTE_SINGLE:return Zc(a.value,e);case Y.PLAIN:return Sx(a,e,t,i);default:return null}};let o=s(u);if(o===null){const{defaultKeyType:f,defaultStringType:c}=e.options,d=l&&f||c;if(o=s(d),o===null)throw new Error(`Unsupported default string type ${d}`)}return o}function o0(n,e){const t=Object.assign({blockQuote:!0,commentString:yx,defaultKeyType:null,defaultStringType:"PLAIN",directives:null,doubleQuotedAsJSON:!1,doubleQuotedMinMultiLineLength:40,falseStr:"false",flowCollectionPadding:!0,indentSeq:!0,lineWidth:80,minContentWidth:20,nullStr:"null",simpleKeys:!1,singleQuote:null,trueStr:"true",verifyAliasOrder:!0},n.schema.toStringOptions,e);let i;switch(t.collectionStyle){case"block":i=!1;break;case"flow":i=!0;break;default:i=null}return{anchors:new Set,doc:n,flowCollectionPadding:t.flowCollectionPadding?" ":"",indent:"",indentStep:typeof t.indent=="number"?" ".repeat(t.indent):"  ",inFlow:i,options:t}}function vx(n,e){var l;if(e.tag){const r=n.filter(a=>a.tag===e.tag);if(r.length>0)return r.find(a=>a.format===e.format)??r[0]}let t,i;if(hn(e)){i=e.value;let r=n.filter(a=>{var u;return(u=a.identify)==null?void 0:u.call(a,i)});if(r.length>1){const a=r.filter(u=>u.test);a.length>0&&(r=a)}t=r.find(a=>a.format===e.format)??r.find(a=>!a.format)}else i=e,t=n.find(r=>r.nodeClass&&i instanceof r.nodeClass);if(!t){const r=((l=i==null?void 0:i.constructor)==null?void 0:l.name)??(i===null?"null":typeof i);throw new Error(`Tag not resolved for ${r} value`)}return t}function wx(n,e,{anchors:t,doc:i}){if(!i.directives)return"";const l=[],r=(hn(n)||kn(n))&&n.anchor;r&&i0(r)&&(t.add(r),l.push(`&${r}`));const a=n.tag??(e.default?null:e.tag);return a&&l.push(i.directives.tagString(a)),l.join(" ")}function Ll(n,e,t,i){var s;if(vn(n))return n.toString(e,t,i);if(ii(n)){if(e.doc.directives)return n.toString(e);if((s=e.resolvedAliases)!=null&&s.has(n))throw new TypeError("Cannot stringify circular structure without alias nodes");e.resolvedAliases?e.resolvedAliases.add(n):e.resolvedAliases=new Set([n]),n=n.resolve(e.doc)}let l;const r=xn(n)?n:e.doc.createNode(n,{onTagObj:o=>l=o});l??(l=vx(e.doc.schema.tags,r));const a=wx(r,l,e);a.length>0&&(e.indentAtStart=(e.indentAtStart??0)+a.length+1);const u=typeof l.stringify=="function"?l.stringify(r,e,t,i):hn(r)?ka(r,e,t,i):r.toString(e,t,i);return a?hn(r)||u[0]==="{"||u[0]==="["?`${a} ${u}`:`${a}
${e.indent}${u}`:u}function kx({key:n,value:e},t,i,l){const{allNullValues:r,doc:a,indent:u,indentStep:s,options:{commentString:o,indentSeq:f,simpleKeys:c}}=t;let d=xn(n)&&n.comment||null;if(c){if(d)throw new Error("With simple keys, key nodes cannot have comments");if(kn(n)||!xn(n)&&typeof n=="object"){const O="With simple keys, collection cannot be used as a key value";throw new Error(O)}}let h=!c&&(!n||d&&e==null&&!t.inFlow||kn(n)||(hn(n)?n.type===Y.BLOCK_FOLDED||n.type===Y.BLOCK_LITERAL:typeof n=="object"));t=Object.assign({},t,{allNullValues:!1,implicitKey:!h&&(c||!r),indent:u+s});let y=!1,g=!1,S=Ll(n,t,()=>y=!0,()=>g=!0);if(!h&&!t.inFlow&&S.length>1024){if(c)throw new Error("With simple keys, single line scalar must not span more than 1024 characters");h=!0}if(t.inFlow){if(r||e==null)return y&&i&&i(),S===""?"?":h?`? ${S}`:S}else if(r&&!c||e==null&&h)return S=`? ${S}`,d&&!y?S+=di(S,t.indent,o(d)):g&&l&&l(),S;y&&(d=null),h?(d&&(S+=di(S,t.indent,o(d))),S=`? ${S}
${u}:`):(S=`${S}:`,d&&(S+=di(S,t.indent,o(d))));let p,m,b;xn(e)?(p=!!e.spaceBefore,m=e.commentBefore,b=e.comment):(p=!1,m=null,b=null,e&&typeof e=="object"&&(e=a.createNode(e))),t.implicitKey=!1,!h&&!d&&hn(e)&&(t.indentAtStart=S.length+1),g=!1,!f&&s.length>=2&&!t.inFlow&&!h&&Ql(e)&&!e.flow&&!e.tag&&!e.anchor&&(t.indent=t.indent.substring(2));let v=!1;const T=Ll(e,t,()=>v=!0,()=>g=!0);let x=" ";if(d||p||m){if(x=p?`
`:"",m){const O=o(m);x+=`
${ht(O,t.indent)}`}T===""&&!t.inFlow?x===`
`&&(x=`

`):x+=`
${t.indent}`}else if(!h&&kn(e)){const O=T[0],A=T.indexOf(`
`),j=A!==-1,E=t.inFlow??e.flow??e.items.length===0;if(j||!E){let B=!1;if(j&&(O==="&"||O==="!")){let D=T.indexOf(" ");O==="&"&&D!==-1&&D<A&&T[D+1]==="!"&&(D=T.indexOf(" ",D+1)),(D===-1||A<D)&&(B=!0)}B||(x=`
${t.indent}`)}}else(T===""||T[0]===`
`)&&(x="");return S+=x+T,t.inFlow?v&&i&&i():b&&!v?S+=di(S,t.indent,o(b)):g&&l&&l(),S}function c0(n,e){(n==="debug"||n==="warn")&&console.warn(e)}const Ka="<<",mt={identify:n=>n===Ka||typeof n=="symbol"&&n.description===Ka,default:"key",tag:"tag:yaml.org,2002:merge",test:/^<<$/,resolve:()=>Object.assign(new Y(Symbol(Ka)),{addToJSMap:f0}),stringify:()=>Ka},xx=(n,e)=>(mt.identify(e)||hn(e)&&(!e.type||e.type===Y.PLAIN)&&mt.identify(e.value))&&(n==null?void 0:n.doc.schema.tags.some(t=>t.tag===mt.tag&&t.default));function f0(n,e,t){if(t=n&&ii(t)?t.resolve(n.doc):t,Ql(t))for(const i of t.items)Oo(n,e,i);else if(Array.isArray(t))for(const i of t)Oo(n,e,i);else Oo(n,e,t)}function Oo(n,e,t){const i=n&&ii(t)?t.resolve(n.doc):t;if(!$l(i))throw new Error("Merge sources must be maps or map aliases");const l=i.toJSON(null,n,Map);for(const[r,a]of l)e instanceof Map?e.has(r)||e.set(r,a):e instanceof Set?e.add(r):Object.prototype.hasOwnProperty.call(e,r)||Object.defineProperty(e,r,{value:a,writable:!0,enumerable:!0,configurable:!0});return e}function h0(n,e,{key:t,value:i}){if(xn(t)&&t.addToJSMap)t.addToJSMap(n,e,i);else if(xx(n,t))f0(n,e,i);else{const l=ze(t,"",n);if(e instanceof Map)e.set(l,ze(i,l,n));else if(e instanceof Set)e.add(l);else{const r=Ex(t,l,n),a=ze(i,r,n);r in e?Object.defineProperty(e,r,{value:a,writable:!0,enumerable:!0,configurable:!0}):e[r]=a}}return e}function Ex(n,e,t){if(e===null)return"";if(typeof e!="object")return String(e);if(xn(n)&&(t!=null&&t.doc)){const i=o0(t.doc,{});i.anchors=new Set;for(const r of t.anchors.keys())i.anchors.add(r.anchor);i.inFlow=!0,i.inStringifyKey=!0;const l=n.toString(i);if(!t.mapKeyWarned){let r=JSON.stringify(l);r.length>40&&(r=r.substring(0,36)+'..."'),c0(t.doc.options.logLevel,`Keys with collection values will be stringified due to JS Object restrictions: ${r}. Set mapAsMap: true to use object keys.`),t.mapKeyWarned=!0}return l}return JSON.stringify(e)}function yh(n,e,t){const i=na(n,void 0,t),l=na(e,void 0,t);return new Xn(i,l)}class Xn{constructor(e,t=null){Object.defineProperty(this,Re,{value:P1}),this.key=e,this.value=t}clone(e){let{key:t,value:i}=this;return xn(t)&&(t=t.clone(e)),xn(i)&&(i=i.clone(e)),new Xn(t,i)}toJSON(e,t){const i=t!=null&&t.mapAsMap?new Map:{};return h0(t,i,this)}toString(e,t,i){return e!=null&&e.doc?kx(this,e,t,i):JSON.stringify(this)}}function d0(n,e,t){return(e.inFlow??n.flow?Ax:Tx)(n,e,t)}function Tx({comment:n,items:e},t,{blockItemPrefix:i,flowChars:l,itemIndent:r,onChompKeep:a,onComment:u}){const{indent:s,options:{commentString:o}}=t,f=Object.assign({},t,{indent:r,type:null});let c=!1;const d=[];for(let y=0;y<e.length;++y){const g=e[y];let S=null;if(xn(g))!c&&g.spaceBefore&&d.push(""),Ju(t,d,g.commentBefore,c),g.comment&&(S=g.comment);else if(vn(g)){const m=xn(g.key)?g.key:null;m&&(!c&&m.spaceBefore&&d.push(""),Ju(t,d,m.commentBefore,c))}c=!1;let p=Ll(g,f,()=>S=null,()=>c=!0);S&&(p+=di(p,r,o(S))),c&&S&&(c=!1),d.push(i+p)}let h;if(d.length===0)h=l.start+l.end;else{h=d[0];for(let y=1;y<d.length;++y){const g=d[y];h+=g?`
${s}${g}`:`
`}}return n?(h+=`
`+ht(o(n),s),u&&u()):c&&a&&a(),h}function Ax({items:n},e,{flowChars:t,itemIndent:i}){const{indent:l,indentStep:r,flowCollectionPadding:a,options:{commentString:u}}=e;i+=r;const s=Object.assign({},e,{indent:i,inFlow:!0,type:null});let o=!1,f=0;const c=[];for(let y=0;y<n.length;++y){const g=n[y];let S=null;if(xn(g))g.spaceBefore&&c.push(""),Ju(e,c,g.commentBefore,!1),g.comment&&(S=g.comment);else if(vn(g)){const m=xn(g.key)?g.key:null;m&&(m.spaceBefore&&c.push(""),Ju(e,c,m.commentBefore,!1),m.comment&&(o=!0));const b=xn(g.value)?g.value:null;b?(b.comment&&(S=b.comment),b.commentBefore&&(o=!0)):g.value==null&&(m!=null&&m.comment)&&(S=m.comment)}S&&(o=!0);let p=Ll(g,s,()=>S=null);y<n.length-1&&(p+=","),S&&(p+=di(p,i,u(S))),!o&&(c.length>f||p.includes(`
`))&&(o=!0),c.push(p),f=c.length}const{start:d,end:h}=t;if(c.length===0)return d+h;if(!o){const y=c.reduce((g,S)=>g+S.length+2,2);o=e.options.lineWidth>0&&y>e.options.lineWidth}if(o){let y=d;for(const g of c)y+=g?`
${r}${l}${g}`:`
`;return`${y}
${l}${h}`}else return`${d}${a}${c.join(" ")}${a}${h}`}function Ju({indent:n,options:{commentString:e}},t,i,l){if(i&&l&&(i=i.replace(/^\n+/,"")),i){const r=ht(e(i),n);t.push(r.trimStart())}}function pi(n,e){const t=hn(e)?e.value:e;for(const i of n)if(vn(i)&&(i.key===e||i.key===t||hn(i.key)&&i.key.value===t))return i}class ge extends u0{static get tagName(){return"tag:yaml.org,2002:map"}constructor(e){super(Ft,e),this.items=[]}static from(e,t,i){const{keepUndefined:l,replacer:r}=i,a=new this(e),u=(s,o)=>{if(typeof r=="function")o=r.call(t,s,o);else if(Array.isArray(r)&&!r.includes(s))return;(o!==void 0||l)&&a.items.push(yh(s,o,i))};if(t instanceof Map)for(const[s,o]of t)u(s,o);else if(t&&typeof t=="object")for(const s of Object.keys(t))u(s,t[s]);return typeof e.sortMapEntries=="function"&&a.items.sort(e.sortMapEntries),a}add(e,t){var a;let i;vn(e)?i=e:!e||typeof e!="object"||!("key"in e)?i=new Xn(e,e==null?void 0:e.value):i=new Xn(e.key,e.value);const l=pi(this.items,i.key),r=(a=this.schema)==null?void 0:a.sortMapEntries;if(l){if(!t)throw new Error(`Key ${i.key} already set`);hn(l.value)&&a0(i.value)?l.value.value=i.value:l.value=i.value}else if(r){const u=this.items.findIndex(s=>r(i,s)<0);u===-1?this.items.push(i):this.items.splice(u,0,i)}else this.items.push(i)}delete(e){const t=pi(this.items,e);return t?this.items.splice(this.items.indexOf(t),1).length>0:!1}get(e,t){const i=pi(this.items,e),l=i==null?void 0:i.value;return(!t&&hn(l)?l.value:l)??void 0}has(e){return!!pi(this.items,e)}set(e,t){this.add(new Xn(e,t),!0)}toJSON(e,t,i){const l=i?new i:t!=null&&t.mapAsMap?new Map:{};t!=null&&t.onCreate&&t.onCreate(l);for(const r of this.items)h0(t,l,r);return l}toString(e,t,i){if(!e)return JSON.stringify(this);for(const l of this.items)if(!vn(l))throw new Error(`Map items must all be pairs; found ${JSON.stringify(l)} instead`);return!e.allNullValues&&this.hasAllNullValues(!1)&&(e=Object.assign({},e,{allNullValues:!0})),d0(this,e,{blockItemPrefix:"",flowChars:{start:"{",end:"}"},itemIndent:e.indent||"",onChompKeep:i,onComment:t})}}const Xl={collection:"map",default:!0,nodeClass:ge,tag:"tag:yaml.org,2002:map",resolve(n,e){return $l(n)||e("Expected a mapping for this tag"),n},createNode:(n,e,t)=>ge.from(n,e,t)};class Wt extends u0{static get tagName(){return"tag:yaml.org,2002:seq"}constructor(e){super(Gl,e),this.items=[]}add(e){this.items.push(e)}delete(e){const t=Ga(e);return typeof t!="number"?!1:this.items.splice(t,1).length>0}get(e,t){const i=Ga(e);if(typeof i!="number")return;const l=this.items[i];return!t&&hn(l)?l.value:l}has(e){const t=Ga(e);return typeof t=="number"&&t<this.items.length}set(e,t){const i=Ga(e);if(typeof i!="number")throw new Error(`Expected a valid index, not ${e}.`);const l=this.items[i];hn(l)&&a0(t)?l.value=t:this.items[i]=t}toJSON(e,t){const i=[];t!=null&&t.onCreate&&t.onCreate(i);let l=0;for(const r of this.items)i.push(ze(r,String(l++),t));return i}toString(e,t,i){return e?d0(this,e,{blockItemPrefix:"- ",flowChars:{start:"[",end:"]"},itemIndent:(e.indent||"")+"  ",onChompKeep:i,onComment:t}):JSON.stringify(this)}static from(e,t,i){const{replacer:l}=i,r=new this(e);if(t&&Symbol.iterator in Object(t)){let a=0;for(let u of t){if(typeof l=="function"){const s=t instanceof Set?u:String(a++);u=l.call(t,s,u)}r.items.push(na(u,void 0,i))}}return r}}function Ga(n){let e=hn(n)?n.value:n;return e&&typeof e=="string"&&(e=Number(e)),typeof e=="number"&&Number.isInteger(e)&&e>=0?e:null}const Fl={collection:"seq",default:!0,nodeClass:Wt,tag:"tag:yaml.org,2002:seq",resolve(n,e){return Ql(n)||e("Expected a sequence for this tag"),n},createNode:(n,e,t)=>Wt.from(n,e,t)},Ns={identify:n=>typeof n=="string",default:!0,tag:"tag:yaml.org,2002:str",resolve:n=>n,stringify(n,e,t,i){return e=Object.assign({actualString:!0},e),ka(n,e,t,i)}},Ds={identify:n=>n==null,createNode:()=>new Y(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^(?:~|[Nn]ull|NULL)?$/,resolve:()=>new Y(null),stringify:({source:n},e)=>typeof n=="string"&&Ds.test.test(n)?n:e.options.nullStr},bh={identify:n=>typeof n=="boolean",default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/,resolve:n=>new Y(n[0]==="t"||n[0]==="T"),stringify({source:n,value:e},t){if(n&&bh.test.test(n)){const i=n[0]==="t"||n[0]==="T";if(e===i)return n}return e?t.options.trueStr:t.options.falseStr}};function Ye({format:n,minFractionDigits:e,tag:t,value:i}){if(typeof i=="bigint")return String(i);const l=typeof i=="number"?i:Number(i);if(!isFinite(l))return isNaN(l)?".nan":l<0?"-.inf":".inf";let r=JSON.stringify(i);if(!n&&e&&(!t||t==="tag:yaml.org,2002:float")&&/^\d/.test(r)){let a=r.indexOf(".");a<0&&(a=r.length,r+=".");let u=e-(r.length-a-1);for(;u-- >0;)r+="0"}return r}const p0={identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,resolve:n=>n.slice(-3).toLowerCase()==="nan"?NaN:n[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:Ye},m0={identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:\.[0-9]+|[0-9]+(?:\.[0-9]*)?)[eE][-+]?[0-9]+$/,resolve:n=>parseFloat(n),stringify(n){const e=Number(n.value);return isFinite(e)?e.toExponential():Ye(n)}},g0={identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:\.[0-9]+|[0-9]+\.[0-9]*)$/,resolve(n){const e=new Y(parseFloat(n)),t=n.indexOf(".");return t!==-1&&n[n.length-1]==="0"&&(e.minFractionDigits=n.length-t-1),e},stringify:Ye},zs=n=>typeof n=="bigint"||Number.isInteger(n),Sh=(n,e,t,{intAsBigInt:i})=>i?BigInt(n):parseInt(n.substring(e),t);function y0(n,e,t){const{value:i}=n;return zs(i)&&i>=0?t+i.toString(e):Ye(n)}const b0={identify:n=>zs(n)&&n>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^0o[0-7]+$/,resolve:(n,e,t)=>Sh(n,2,8,t),stringify:n=>y0(n,8,"0o")},S0={identify:zs,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9]+$/,resolve:(n,e,t)=>Sh(n,0,10,t),stringify:Ye},v0={identify:n=>zs(n)&&n>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^0x[0-9a-fA-F]+$/,resolve:(n,e,t)=>Sh(n,2,16,t),stringify:n=>y0(n,16,"0x")},Ox=[Xl,Fl,Ns,Ds,bh,b0,S0,v0,p0,m0,g0];function Rp(n){return typeof n=="bigint"||Number.isInteger(n)}const $a=({value:n})=>JSON.stringify(n),Cx=[{identify:n=>typeof n=="string",default:!0,tag:"tag:yaml.org,2002:str",resolve:n=>n,stringify:$a},{identify:n=>n==null,createNode:()=>new Y(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^null$/,resolve:()=>null,stringify:$a},{identify:n=>typeof n=="boolean",default:!0,tag:"tag:yaml.org,2002:bool",test:/^true$|^false$/,resolve:n=>n==="true",stringify:$a},{identify:Rp,default:!0,tag:"tag:yaml.org,2002:int",test:/^-?(?:0|[1-9][0-9]*)$/,resolve:(n,e,{intAsBigInt:t})=>t?BigInt(n):parseInt(n,10),stringify:({value:n})=>Rp(n)?n.toString():JSON.stringify(n)},{identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,resolve:n=>parseFloat(n),stringify:$a}],_x={default:!0,tag:"",test:/^/,resolve(n,e){return e(`Unresolved plain scalar ${JSON.stringify(n)}`),n}},Nx=[Xl,Fl].concat(Cx,_x),vh={identify:n=>n instanceof Uint8Array,default:!1,tag:"tag:yaml.org,2002:binary",resolve(n,e){if(typeof atob=="function"){const t=atob(n.replace(/[\n\r]/g,"")),i=new Uint8Array(t.length);for(let l=0;l<t.length;++l)i[l]=t.charCodeAt(l);return i}else return e("This environment does not support reading binary tags; either Buffer or atob is required"),n},stringify({comment:n,type:e,value:t},i,l,r){if(!t)return"";const a=t;let u;if(typeof btoa=="function"){let s="";for(let o=0;o<a.length;++o)s+=String.fromCharCode(a[o]);u=btoa(s)}else throw new Error("This environment does not support writing binary tags; either Buffer or btoa is required");if(e??(e=Y.BLOCK_LITERAL),e!==Y.QUOTE_DOUBLE){const s=Math.max(i.options.lineWidth-i.indent.length,i.options.minContentWidth),o=Math.ceil(u.length/s),f=new Array(o);for(let c=0,d=0;c<o;++c,d+=s)f[c]=u.substr(d,s);u=f.join(e===Y.BLOCK_LITERAL?`
`:" ")}return ka({comment:n,type:e,value:u},i,l,r)}};function w0(n,e){if(Ql(n))for(let t=0;t<n.items.length;++t){let i=n.items[t];if(!vn(i)){if($l(i)){i.items.length>1&&e("Each pair must have its own sequence indicator");const l=i.items[0]||new Xn(new Y(null));if(i.commentBefore&&(l.key.commentBefore=l.key.commentBefore?`${i.commentBefore}
${l.key.commentBefore}`:i.commentBefore),i.comment){const r=l.value??l.key;r.comment=r.comment?`${i.comment}
${r.comment}`:i.comment}i=l}n.items[t]=vn(i)?i:new Xn(i)}}else e("Expected a sequence for this tag");return n}function k0(n,e,t){const{replacer:i}=t,l=new Wt(n);l.tag="tag:yaml.org,2002:pairs";let r=0;if(e&&Symbol.iterator in Object(e))for(let a of e){typeof i=="function"&&(a=i.call(e,String(r++),a));let u,s;if(Array.isArray(a))if(a.length===2)u=a[0],s=a[1];else throw new TypeError(`Expected [key, value] tuple: ${a}`);else if(a&&a instanceof Object){const o=Object.keys(a);if(o.length===1)u=o[0],s=a[u];else throw new TypeError(`Expected tuple with one key, not ${o.length} keys`)}else u=a;l.items.push(yh(u,s,t))}return l}const wh={collection:"seq",default:!1,tag:"tag:yaml.org,2002:pairs",resolve:w0,createNode:k0};class vl extends Wt{constructor(){super(),this.add=ge.prototype.add.bind(this),this.delete=ge.prototype.delete.bind(this),this.get=ge.prototype.get.bind(this),this.has=ge.prototype.has.bind(this),this.set=ge.prototype.set.bind(this),this.tag=vl.tag}toJSON(e,t){if(!t)return super.toJSON(e);const i=new Map;t!=null&&t.onCreate&&t.onCreate(i);for(const l of this.items){let r,a;if(vn(l)?(r=ze(l.key,"",t),a=ze(l.value,r,t)):r=ze(l,"",t),i.has(r))throw new Error("Ordered maps must not include duplicate keys");i.set(r,a)}return i}static from(e,t,i){const l=k0(e,t,i),r=new this;return r.items=l.items,r}}vl.tag="tag:yaml.org,2002:omap";const kh={collection:"seq",identify:n=>n instanceof Map,nodeClass:vl,default:!1,tag:"tag:yaml.org,2002:omap",resolve(n,e){const t=w0(n,e),i=[];for(const{key:l}of t.items)hn(l)&&(i.includes(l.value)?e(`Ordered maps must not include duplicate keys: ${l.value}`):i.push(l.value));return Object.assign(new vl,t)},createNode:(n,e,t)=>vl.from(n,e,t)};function x0({value:n,source:e},t){return e&&(n?E0:T0).test.test(e)?e:n?t.options.trueStr:t.options.falseStr}const E0={identify:n=>n===!0,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/,resolve:()=>new Y(!0),stringify:x0},T0={identify:n=>n===!1,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/,resolve:()=>new Y(!1),stringify:x0},Dx={identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,resolve:n=>n.slice(-3).toLowerCase()==="nan"?NaN:n[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:Ye},zx={identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:[0-9][0-9_]*)?(?:\.[0-9_]*)?[eE][-+]?[0-9]+$/,resolve:n=>parseFloat(n.replace(/_/g,"")),stringify(n){const e=Number(n.value);return isFinite(e)?e.toExponential():Ye(n)}},Mx={identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:[0-9][0-9_]*)?\.[0-9_]*$/,resolve(n){const e=new Y(parseFloat(n.replace(/_/g,""))),t=n.indexOf(".");if(t!==-1){const i=n.substring(t+1).replace(/_/g,"");i[i.length-1]==="0"&&(e.minFractionDigits=i.length)}return e},stringify:Ye},xa=n=>typeof n=="bigint"||Number.isInteger(n);function Ms(n,e,t,{intAsBigInt:i}){const l=n[0];if((l==="-"||l==="+")&&(e+=1),n=n.substring(e).replace(/_/g,""),i){switch(t){case 2:n=`0b${n}`;break;case 8:n=`0o${n}`;break;case 16:n=`0x${n}`;break}const a=BigInt(n);return l==="-"?BigInt(-1)*a:a}const r=parseInt(n,t);return l==="-"?-1*r:r}function xh(n,e,t){const{value:i}=n;if(xa(i)){const l=i.toString(e);return i<0?"-"+t+l.substr(1):t+l}return Ye(n)}const Lx={identify:xa,default:!0,tag:"tag:yaml.org,2002:int",format:"BIN",test:/^[-+]?0b[0-1_]+$/,resolve:(n,e,t)=>Ms(n,2,2,t),stringify:n=>xh(n,2,"0b")},Rx={identify:xa,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^[-+]?0[0-7_]+$/,resolve:(n,e,t)=>Ms(n,1,8,t),stringify:n=>xh(n,8,"0")},Bx={identify:xa,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9][0-9_]*$/,resolve:(n,e,t)=>Ms(n,0,10,t),stringify:Ye},jx={identify:xa,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^[-+]?0x[0-9a-fA-F_]+$/,resolve:(n,e,t)=>Ms(n,2,16,t),stringify:n=>xh(n,16,"0x")};class wl extends ge{constructor(e){super(e),this.tag=wl.tag}add(e){let t;vn(e)?t=e:e&&typeof e=="object"&&"key"in e&&"value"in e&&e.value===null?t=new Xn(e.key,null):t=new Xn(e,null),pi(this.items,t.key)||this.items.push(t)}get(e,t){const i=pi(this.items,e);return!t&&vn(i)?hn(i.key)?i.key.value:i.key:i}set(e,t){if(typeof t!="boolean")throw new Error(`Expected boolean value for set(key, value) in a YAML set, not ${typeof t}`);const i=pi(this.items,e);i&&!t?this.items.splice(this.items.indexOf(i),1):!i&&t&&this.items.push(new Xn(e))}toJSON(e,t){return super.toJSON(e,t,Set)}toString(e,t,i){if(!e)return JSON.stringify(this);if(this.hasAllNullValues(!0))return super.toString(Object.assign({},e,{allNullValues:!0}),t,i);throw new Error("Set items must all have null values")}static from(e,t,i){const{replacer:l}=i,r=new this(e);if(t&&Symbol.iterator in Object(t))for(let a of t)typeof l=="function"&&(a=l.call(t,a,a)),r.items.push(yh(a,null,i));return r}}wl.tag="tag:yaml.org,2002:set";const Eh={collection:"map",identify:n=>n instanceof Set,nodeClass:wl,default:!1,tag:"tag:yaml.org,2002:set",createNode:(n,e,t)=>wl.from(n,e,t),resolve(n,e){if($l(n)){if(n.hasAllNullValues(!0))return Object.assign(new wl,n);e("Set items must all have null values")}else e("Expected a mapping for this tag");return n}};function Th(n,e){const t=n[0],i=t==="-"||t==="+"?n.substring(1):n,l=a=>e?BigInt(a):Number(a),r=i.replace(/_/g,"").split(":").reduce((a,u)=>a*l(60)+l(u),l(0));return t==="-"?l(-1)*r:r}function A0(n){let{value:e}=n,t=a=>a;if(typeof e=="bigint")t=a=>BigInt(a);else if(isNaN(e)||!isFinite(e))return Ye(n);let i="";e<0&&(i="-",e*=t(-1));const l=t(60),r=[e%l];return e<60?r.unshift(0):(e=(e-r[0])/l,r.unshift(e%l),e>=60&&(e=(e-r[0])/l,r.unshift(e))),i+r.map(a=>String(a).padStart(2,"0")).join(":").replace(/000000\d*$/,"")}const O0={identify:n=>typeof n=="bigint"||Number.isInteger(n),default:!0,tag:"tag:yaml.org,2002:int",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+$/,resolve:(n,e,{intAsBigInt:t})=>Th(n,t),stringify:A0},C0={identify:n=>typeof n=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*$/,resolve:n=>Th(n,!1),stringify:A0},Ls={identify:n=>n instanceof Date,default:!0,tag:"tag:yaml.org,2002:timestamp",test:RegExp("^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})(?:(?:t|T|[ \\t]+)([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?)?$"),resolve(n){const e=n.match(Ls.test);if(!e)throw new Error("!!timestamp expects a date, starting with yyyy-mm-dd");const[,t,i,l,r,a,u]=e.map(Number),s=e[7]?Number((e[7]+"00").substr(1,3)):0;let o=Date.UTC(t,i-1,l,r||0,a||0,u||0,s);const f=e[8];if(f&&f!=="Z"){let c=Th(f,!1);Math.abs(c)<30&&(c*=60),o-=6e4*c}return new Date(o)},stringify:({value:n})=>(n==null?void 0:n.toISOString().replace(/(T00:00:00)?\.000Z$/,""))??""},Bp=[Xl,Fl,Ns,Ds,E0,T0,Lx,Rx,Bx,jx,Dx,zx,Mx,vh,mt,kh,wh,Eh,O0,C0,Ls],jp=new Map([["core",Ox],["failsafe",[Xl,Fl,Ns]],["json",Nx],["yaml11",Bp],["yaml-1.1",Bp]]),Up={binary:vh,bool:bh,float:g0,floatExp:m0,floatNaN:p0,floatTime:C0,int:S0,intHex:v0,intOct:b0,intTime:O0,map:Xl,merge:mt,null:Ds,omap:kh,pairs:wh,seq:Fl,set:Eh,timestamp:Ls},Ux={"tag:yaml.org,2002:binary":vh,"tag:yaml.org,2002:merge":mt,"tag:yaml.org,2002:omap":kh,"tag:yaml.org,2002:pairs":wh,"tag:yaml.org,2002:set":Eh,"tag:yaml.org,2002:timestamp":Ls};function Co(n,e,t){const i=jp.get(e);if(i&&!n)return t&&!i.includes(mt)?i.concat(mt):i.slice();let l=i;if(!l)if(Array.isArray(n))l=[];else{const r=Array.from(jp.keys()).filter(a=>a!=="yaml11").map(a=>JSON.stringify(a)).join(", ");throw new Error(`Unknown schema "${e}"; use one of ${r} or define customTags array`)}if(Array.isArray(n))for(const r of n)l=l.concat(r);else typeof n=="function"&&(l=n(l.slice()));return t&&(l=l.concat(mt)),l.reduce((r,a)=>{const u=typeof a=="string"?Up[a]:a;if(!u){const s=JSON.stringify(a),o=Object.keys(Up).map(f=>JSON.stringify(f)).join(", ");throw new Error(`Unknown custom tag ${s}; use one of ${o}`)}return r.includes(u)||r.push(u),r},[])}const qx=(n,e)=>n.key<e.key?-1:n.key>e.key?1:0;let _0=class N0{constructor({compat:e,customTags:t,merge:i,resolveKnownTags:l,schema:r,sortMapEntries:a,toStringDefaults:u}){this.compat=Array.isArray(e)?Co(e,"compat"):e?Co(null,e):null,this.name=typeof r=="string"&&r||"core",this.knownTags=l?Ux:{},this.tags=Co(t,this.name,i),this.toStringOptions=u??null,Object.defineProperty(this,Ft,{value:Xl}),Object.defineProperty(this,Pe,{value:Ns}),Object.defineProperty(this,Gl,{value:Fl}),this.sortMapEntries=typeof a=="function"?a:a===!0?qx:null}clone(){const e=Object.create(N0.prototype,Object.getOwnPropertyDescriptors(this));return e.tags=this.tags.slice(),e}};function Hx(n,e){var s;const t=[];let i=e.directives===!0;if(e.directives!==!1&&n.directives){const o=n.directives.toString(n);o?(t.push(o),i=!0):n.directives.docStart&&(i=!0)}i&&t.push("---");const l=o0(n,e),{commentString:r}=l.options;if(n.commentBefore){t.length!==1&&t.unshift("");const o=r(n.commentBefore);t.unshift(ht(o,""))}let a=!1,u=null;if(n.contents){if(xn(n.contents)){if(n.contents.spaceBefore&&i&&t.push(""),n.contents.commentBefore){const c=r(n.contents.commentBefore);t.push(ht(c,""))}l.forceBlockIndent=!!n.comment,u=n.contents.comment}const o=u?void 0:()=>a=!0;let f=Ll(n.contents,l,()=>u=null,o);u&&(f+=di(f,"",r(u))),(f[0]==="|"||f[0]===">")&&t[t.length-1]==="---"?t[t.length-1]=`--- ${f}`:t.push(f)}else t.push(Ll(n.contents,l));if((s=n.directives)!=null&&s.docEnd)if(n.comment){const o=r(n.comment);o.includes(`
`)?(t.push("..."),t.push(ht(o,""))):t.push(`... ${o}`)}else t.push("...");else{let o=n.comment;o&&a&&(o=o.replace(/^\n+/,"")),o&&((!a||u)&&t[t.length-1]!==""&&t.push(""),t.push(ht(r(o),"")))}return t.join(`
`)+`
`}class Zl{constructor(e,t,i){this.commentBefore=null,this.comment=null,this.errors=[],this.warnings=[],Object.defineProperty(this,Re,{value:Xc});let l=null;typeof t=="function"||Array.isArray(t)?l=t:i===void 0&&t&&(i=t,t=void 0);const r=Object.assign({intAsBigInt:!1,keepSourceTokens:!1,logLevel:"warn",prettyErrors:!0,strict:!0,stringKeys:!1,uniqueKeys:!0,version:"1.2"},i);this.options=r;let{version:a}=r;i!=null&&i._directives?(this.directives=i._directives.atDocument(),this.directives.yaml.explicit&&(a=this.directives.yaml.version)):this.directives=new Zn({version:a}),this.setSchema(a,i),this.contents=e===void 0?null:this.createNode(e,l,i)}clone(){const e=Object.create(Zl.prototype,{[Re]:{value:Xc}});return e.commentBefore=this.commentBefore,e.comment=this.comment,e.errors=this.errors.slice(),e.warnings=this.warnings.slice(),e.options=Object.assign({},this.options),this.directives&&(e.directives=this.directives.clone()),e.schema=this.schema.clone(),e.contents=xn(this.contents)?this.contents.clone(e.schema):this.contents,this.range&&(e.range=this.range.slice()),e}add(e){Yi(this.contents)&&this.contents.add(e)}addIn(e,t){Yi(this.contents)&&this.contents.addIn(e,t)}createAlias(e,t){if(!e.anchor){const i=l0(this);e.anchor=!t||i.has(t)?r0(t||"a",i):t}return new As(e.anchor)}createNode(e,t,i){let l;if(typeof t=="function")e=t.call({"":e},"",e),l=t;else if(Array.isArray(t)){const S=m=>typeof m=="number"||m instanceof String||m instanceof Number,p=t.filter(S).map(String);p.length>0&&(t=t.concat(p)),l=t}else i===void 0&&t&&(i=t,t=void 0);const{aliasDuplicateObjects:r,anchorPrefix:a,flow:u,keepUndefined:s,onTagObj:o,tag:f}=i??{},{onAnchor:c,setAnchors:d,sourceObjects:h}=px(this,a||"a"),y={aliasDuplicateObjects:r??!0,keepUndefined:s??!1,onAnchor:c,onTagObj:o,replacer:l,schema:this.schema,sourceObjects:h},g=na(e,f,y);return u&&kn(g)&&(g.flow=!0),d(),g}createPair(e,t,i={}){const l=this.createNode(e,null,i),r=this.createNode(t,null,i);return new Xn(l,r)}delete(e){return Yi(this.contents)?this.contents.delete(e):!1}deleteIn(e){return br(e)?this.contents==null?!1:(this.contents=null,!0):Yi(this.contents)?this.contents.deleteIn(e):!1}get(e,t){return kn(this.contents)?this.contents.get(e,t):void 0}getIn(e,t){return br(e)?!t&&hn(this.contents)?this.contents.value:this.contents:kn(this.contents)?this.contents.getIn(e,t):void 0}has(e){return kn(this.contents)?this.contents.has(e):!1}hasIn(e){return br(e)?this.contents!==void 0:kn(this.contents)?this.contents.hasIn(e):!1}set(e,t){this.contents==null?this.contents=Pu(this.schema,[e],t):Yi(this.contents)&&this.contents.set(e,t)}setIn(e,t){br(e)?this.contents=t:this.contents==null?this.contents=Pu(this.schema,Array.from(e),t):Yi(this.contents)&&this.contents.setIn(e,t)}setSchema(e,t={}){typeof e=="number"&&(e=String(e));let i;switch(e){case"1.1":this.directives?this.directives.yaml.version="1.1":this.directives=new Zn({version:"1.1"}),i={resolveKnownTags:!1,schema:"yaml-1.1"};break;case"1.2":case"next":this.directives?this.directives.yaml.version=e:this.directives=new Zn({version:e}),i={resolveKnownTags:!0,schema:"core"};break;case null:this.directives&&delete this.directives,i=null;break;default:{const l=JSON.stringify(e);throw new Error(`Expected '1.1', '1.2' or null as first argument, but found: ${l}`)}}if(t.schema instanceof Object)this.schema=t.schema;else if(i)this.schema=new _0(Object.assign(i,t));else throw new Error("With a null YAML version, the { schema: Schema } option is required")}toJS({json:e,jsonArg:t,mapAsMap:i,maxAliasCount:l,onAnchor:r,reviver:a}={}){const u={anchors:new Map,doc:this,keep:!e,mapAsMap:i===!0,mapKeyWarned:!1,maxAliasCount:typeof l=="number"?l:100},s=ze(this.contents,t??"",u);if(typeof r=="function")for(const{count:o,res:f}of u.anchors.values())r(f,o);return typeof a=="function"?cl(a,{"":s},"",s):s}toJSON(e,t){return this.toJS({json:!0,jsonArg:e,mapAsMap:!1,onAnchor:t})}toString(e={}){if(this.errors.length>0)throw new Error("Document with errors cannot be stringified");if("indent"in e&&(!Number.isInteger(e.indent)||Number(e.indent)<=0)){const t=JSON.stringify(e.indent);throw new Error(`"indent" option must be a positive integer, not ${t}`)}return Hx(this,e)}}function Yi(n){if(kn(n))return!0;throw new Error("Expected a YAML collection as document contents")}class Ah extends Error{constructor(e,t,i,l){super(),this.name=e,this.code=i,this.message=l,this.pos=t}}class mi extends Ah{constructor(e,t,i){super("YAMLParseError",e,t,i)}}class D0 extends Ah{constructor(e,t,i){super("YAMLWarning",e,t,i)}}const Wu=(n,e)=>t=>{if(t.pos[0]===-1)return;t.linePos=t.pos.map(u=>e.linePos(u));const{line:i,col:l}=t.linePos[0];t.message+=` at line ${i}, column ${l}`;let r=l-1,a=n.substring(e.lineStarts[i-1],e.lineStarts[i]).replace(/[\n\r]+$/,"");if(r>=60&&a.length>80){const u=Math.min(r-39,a.length-79);a="…"+a.substring(u),r-=u-1}if(a.length>80&&(a=a.substring(0,79)+"…"),i>1&&/^ *$/.test(a.substring(0,r))){let u=n.substring(e.lineStarts[i-2],e.lineStarts[i-1]);u.length>80&&(u=u.substring(0,79)+`…
`),a=u+a}if(/[^ ]/.test(a)){let u=1;const s=t.linePos[1];s&&s.line===i&&s.col>l&&(u=Math.max(1,Math.min(s.col-l,80-r)));const o=" ".repeat(r)+"^".repeat(u);t.message+=`:

${a}
${o}
`}};function Rl(n,{flow:e,indicator:t,next:i,offset:l,onError:r,parentIndent:a,startOnNewline:u}){let s=!1,o=u,f=u,c="",d="",h=!1,y=!1,g=null,S=null,p=null,m=null,b=null,v=null,T=null;for(const A of n)switch(y&&(A.type!=="space"&&A.type!=="newline"&&A.type!=="comma"&&r(A.offset,"MISSING_CHAR","Tags and anchors must be separated from the next token by white space"),y=!1),g&&(o&&A.type!=="comment"&&A.type!=="newline"&&r(g,"TAB_AS_INDENT","Tabs are not allowed as indentation"),g=null),A.type){case"space":!e&&(t!=="doc-start"||(i==null?void 0:i.type)!=="flow-collection")&&A.source.includes("	")&&(g=A),f=!0;break;case"comment":{f||r(A,"MISSING_CHAR","Comments must be separated from other tokens by white space characters");const j=A.source.substring(1)||" ";c?c+=d+j:c=j,d="",o=!1;break}case"newline":o?c?c+=A.source:(!v||t!=="seq-item-ind")&&(s=!0):d+=A.source,o=!0,h=!0,(S||p)&&(m=A),f=!0;break;case"anchor":S&&r(A,"MULTIPLE_ANCHORS","A node can have at most one anchor"),A.source.endsWith(":")&&r(A.offset+A.source.length-1,"BAD_ALIAS","Anchor ending in : is ambiguous",!0),S=A,T??(T=A.offset),o=!1,f=!1,y=!0;break;case"tag":{p&&r(A,"MULTIPLE_TAGS","A node can have at most one tag"),p=A,T??(T=A.offset),o=!1,f=!1,y=!0;break}case t:(S||p)&&r(A,"BAD_PROP_ORDER",`Anchors and tags must be after the ${A.source} indicator`),v&&r(A,"UNEXPECTED_TOKEN",`Unexpected ${A.source} in ${e??"collection"}`),v=A,o=t==="seq-item-ind"||t==="explicit-key-ind",f=!1;break;case"comma":if(e){b&&r(A,"UNEXPECTED_TOKEN",`Unexpected , in ${e}`),b=A,o=!1,f=!1;break}default:r(A,"UNEXPECTED_TOKEN",`Unexpected ${A.type} token`),o=!1,f=!1}const x=n[n.length-1],O=x?x.offset+x.source.length:l;return y&&i&&i.type!=="space"&&i.type!=="newline"&&i.type!=="comma"&&(i.type!=="scalar"||i.source!=="")&&r(i.offset,"MISSING_CHAR","Tags and anchors must be separated from the next token by white space"),g&&(o&&g.indent<=a||(i==null?void 0:i.type)==="block-map"||(i==null?void 0:i.type)==="block-seq")&&r(g,"TAB_AS_INDENT","Tabs are not allowed as indentation"),{comma:b,found:v,spaceBefore:s,comment:c,hasNewline:h,anchor:S,tag:p,newlineAfterProp:m,end:O,start:T??O}}function ea(n){if(!n)return null;switch(n.type){case"alias":case"scalar":case"double-quoted-scalar":case"single-quoted-scalar":if(n.source.includes(`
`))return!0;if(n.end){for(const e of n.end)if(e.type==="newline")return!0}return!1;case"flow-collection":for(const e of n.items){for(const t of e.start)if(t.type==="newline")return!0;if(e.sep){for(const t of e.sep)if(t.type==="newline")return!0}if(ea(e.key)||ea(e.value))return!0}return!1;default:return!0}}function Jc(n,e,t){if((e==null?void 0:e.type)==="flow-collection"){const i=e.end[0];i.indent===n&&(i.source==="]"||i.source==="}")&&ea(e)&&t(i,"BAD_INDENT","Flow end indicator should be more indented than parent",!0)}}function z0(n,e,t){const{uniqueKeys:i}=n.options;if(i===!1)return!1;const l=typeof i=="function"?i:(r,a)=>r===a||hn(r)&&hn(a)&&r.value===a.value;return e.some(r=>l(r.key,t))}const qp="All mapping items must start at the same column";function Ix({composeNode:n,composeEmptyNode:e},t,i,l,r){var f;const a=(r==null?void 0:r.nodeClass)??ge,u=new a(t.schema);t.atRoot&&(t.atRoot=!1);let s=i.offset,o=null;for(const c of i.items){const{start:d,key:h,sep:y,value:g}=c,S=Rl(d,{indicator:"explicit-key-ind",next:h??(y==null?void 0:y[0]),offset:s,onError:l,parentIndent:i.indent,startOnNewline:!0}),p=!S.found;if(p){if(h&&(h.type==="block-seq"?l(s,"BLOCK_AS_IMPLICIT_KEY","A block sequence may not be used as an implicit map key"):"indent"in h&&h.indent!==i.indent&&l(s,"BAD_INDENT",qp)),!S.anchor&&!S.tag&&!y){o=S.end,S.comment&&(u.comment?u.comment+=`
`+S.comment:u.comment=S.comment);continue}(S.newlineAfterProp||ea(h))&&l(h??d[d.length-1],"MULTILINE_IMPLICIT_KEY","Implicit keys need to be on a single line")}else((f=S.found)==null?void 0:f.indent)!==i.indent&&l(s,"BAD_INDENT",qp);t.atKey=!0;const m=S.end,b=h?n(t,h,S,l):e(t,m,d,null,S,l);t.schema.compat&&Jc(i.indent,h,l),t.atKey=!1,z0(t,u.items,b)&&l(m,"DUPLICATE_KEY","Map keys must be unique");const v=Rl(y??[],{indicator:"map-value-ind",next:g,offset:b.range[2],onError:l,parentIndent:i.indent,startOnNewline:!h||h.type==="block-scalar"});if(s=v.end,v.found){p&&((g==null?void 0:g.type)==="block-map"&&!v.hasNewline&&l(s,"BLOCK_AS_IMPLICIT_KEY","Nested mappings are not allowed in compact mappings"),t.options.strict&&S.start<v.found.offset-1024&&l(b.range,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit block mapping key"));const T=g?n(t,g,v,l):e(t,s,y,null,v,l);t.schema.compat&&Jc(i.indent,g,l),s=T.range[2];const x=new Xn(b,T);t.options.keepSourceTokens&&(x.srcToken=c),u.items.push(x)}else{p&&l(b.range,"MISSING_CHAR","Implicit map keys need to be followed by map values"),v.comment&&(b.comment?b.comment+=`
`+v.comment:b.comment=v.comment);const T=new Xn(b);t.options.keepSourceTokens&&(T.srcToken=c),u.items.push(T)}}return o&&o<s&&l(o,"IMPOSSIBLE","Map comment with trailing content"),u.range=[i.offset,s,o??s],u}function Yx({composeNode:n,composeEmptyNode:e},t,i,l,r){const a=(r==null?void 0:r.nodeClass)??Wt,u=new a(t.schema);t.atRoot&&(t.atRoot=!1),t.atKey&&(t.atKey=!1);let s=i.offset,o=null;for(const{start:f,value:c}of i.items){const d=Rl(f,{indicator:"seq-item-ind",next:c,offset:s,onError:l,parentIndent:i.indent,startOnNewline:!0});if(!d.found)if(d.anchor||d.tag||c)c&&c.type==="block-seq"?l(d.end,"BAD_INDENT","All sequence items must start at the same column"):l(s,"MISSING_CHAR","Sequence item without - indicator");else{o=d.end,d.comment&&(u.comment=d.comment);continue}const h=c?n(t,c,d,l):e(t,d.end,f,null,d,l);t.schema.compat&&Jc(i.indent,c,l),s=h.range[2],u.items.push(h)}return u.range=[i.offset,s,o??s],u}function Ea(n,e,t,i){let l="";if(n){let r=!1,a="";for(const u of n){const{source:s,type:o}=u;switch(o){case"space":r=!0;break;case"comment":{t&&!r&&i(u,"MISSING_CHAR","Comments must be separated from other tokens by white space characters");const f=s.substring(1)||" ";l?l+=a+f:l=f,a="";break}case"newline":l&&(a+=s),r=!0;break;default:i(u,"UNEXPECTED_TOKEN",`Unexpected ${o} at node end`)}e+=s.length}}return{comment:l,offset:e}}const _o="Block collections are not allowed within flow collections",No=n=>n&&(n.type==="block-map"||n.type==="block-seq");function Vx({composeNode:n,composeEmptyNode:e},t,i,l,r){const a=i.start.source==="{",u=a?"flow map":"flow sequence",s=(r==null?void 0:r.nodeClass)??(a?ge:Wt),o=new s(t.schema);o.flow=!0;const f=t.atRoot;f&&(t.atRoot=!1),t.atKey&&(t.atKey=!1);let c=i.offset+i.start.source.length;for(let S=0;S<i.items.length;++S){const p=i.items[S],{start:m,key:b,sep:v,value:T}=p,x=Rl(m,{flow:u,indicator:"explicit-key-ind",next:b??(v==null?void 0:v[0]),offset:c,onError:l,parentIndent:i.indent,startOnNewline:!1});if(!x.found){if(!x.anchor&&!x.tag&&!v&&!T){S===0&&x.comma?l(x.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${u}`):S<i.items.length-1&&l(x.start,"UNEXPECTED_TOKEN",`Unexpected empty item in ${u}`),x.comment&&(o.comment?o.comment+=`
`+x.comment:o.comment=x.comment),c=x.end;continue}!a&&t.options.strict&&ea(b)&&l(b,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line")}if(S===0)x.comma&&l(x.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${u}`);else if(x.comma||l(x.start,"MISSING_CHAR",`Missing , between ${u} items`),x.comment){let O="";n:for(const A of m)switch(A.type){case"comma":case"space":break;case"comment":O=A.source.substring(1);break n;default:break n}if(O){let A=o.items[o.items.length-1];vn(A)&&(A=A.value??A.key),A.comment?A.comment+=`
`+O:A.comment=O,x.comment=x.comment.substring(O.length+1)}}if(!a&&!v&&!x.found){const O=T?n(t,T,x,l):e(t,x.end,v,null,x,l);o.items.push(O),c=O.range[2],No(T)&&l(O.range,"BLOCK_IN_FLOW",_o)}else{t.atKey=!0;const O=x.end,A=b?n(t,b,x,l):e(t,O,m,null,x,l);No(b)&&l(A.range,"BLOCK_IN_FLOW",_o),t.atKey=!1;const j=Rl(v??[],{flow:u,indicator:"map-value-ind",next:T,offset:A.range[2],onError:l,parentIndent:i.indent,startOnNewline:!1});if(j.found){if(!a&&!x.found&&t.options.strict){if(v)for(const D of v){if(D===j.found)break;if(D.type==="newline"){l(D,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line");break}}x.start<j.found.offset-1024&&l(j.found,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit flow sequence key")}}else T&&("source"in T&&T.source&&T.source[0]===":"?l(T,"MISSING_CHAR",`Missing space after : in ${u}`):l(j.start,"MISSING_CHAR",`Missing , or : between ${u} items`));const E=T?n(t,T,j,l):j.found?e(t,j.end,v,null,j,l):null;E?No(T)&&l(E.range,"BLOCK_IN_FLOW",_o):j.comment&&(A.comment?A.comment+=`
`+j.comment:A.comment=j.comment);const B=new Xn(A,E);if(t.options.keepSourceTokens&&(B.srcToken=p),a){const D=o;z0(t,D.items,A)&&l(O,"DUPLICATE_KEY","Map keys must be unique"),D.items.push(B)}else{const D=new ge(t.schema);D.flow=!0,D.items.push(B);const nn=(E??A).range;D.range=[A.range[0],nn[1],nn[2]],o.items.push(D)}c=E?E.range[2]:j.end}}const d=a?"}":"]",[h,...y]=i.end;let g=c;if(h&&h.source===d)g=h.offset+h.source.length;else{const S=u[0].toUpperCase()+u.substring(1),p=f?`${S} must end with a ${d}`:`${S} in block collection must be sufficiently indented and end with a ${d}`;l(c,f?"MISSING_CHAR":"BAD_INDENT",p),h&&h.source.length!==1&&y.unshift(h)}if(y.length>0){const S=Ea(y,g,t.options.strict,l);S.comment&&(o.comment?o.comment+=`
`+S.comment:o.comment=S.comment),o.range=[i.offset,g,S.offset]}else o.range=[i.offset,g,g];return o}function Do(n,e,t,i,l,r){const a=t.type==="block-map"?Ix(n,e,t,i,r):t.type==="block-seq"?Yx(n,e,t,i,r):Vx(n,e,t,i,r),u=a.constructor;return l==="!"||l===u.tagName?(a.tag=u.tagName,a):(l&&(a.tag=l),a)}function Kx(n,e,t,i,l){var d;const r=i.tag,a=r?e.directives.tagName(r.source,h=>l(r,"TAG_RESOLVE_FAILED",h)):null;if(t.type==="block-seq"){const{anchor:h,newlineAfterProp:y}=i,g=h&&r?h.offset>r.offset?h:r:h??r;g&&(!y||y.offset<g.offset)&&l(g,"MISSING_CHAR","Missing newline after block sequence props")}const u=t.type==="block-map"?"map":t.type==="block-seq"?"seq":t.start.source==="{"?"map":"seq";if(!r||!a||a==="!"||a===ge.tagName&&u==="map"||a===Wt.tagName&&u==="seq")return Do(n,e,t,l,a);let s=e.schema.tags.find(h=>h.tag===a&&h.collection===u);if(!s){const h=e.schema.knownTags[a];if(h&&h.collection===u)e.schema.tags.push(Object.assign({},h,{default:!1})),s=h;else return h?l(r,"BAD_COLLECTION_TYPE",`${h.tag} used for ${u} collection, but expects ${h.collection??"scalar"}`,!0):l(r,"TAG_RESOLVE_FAILED",`Unresolved tag: ${a}`,!0),Do(n,e,t,l,a)}const o=Do(n,e,t,l,a,s),f=((d=s.resolve)==null?void 0:d.call(s,o,h=>l(r,"TAG_RESOLVE_FAILED",h),e.options))??o,c=xn(f)?f:new Y(f);return c.range=o.range,c.tag=a,s!=null&&s.format&&(c.format=s.format),c}function M0(n,e,t){const i=e.offset,l=Gx(e,n.options.strict,t);if(!l)return{value:"",type:null,comment:"",range:[i,i,i]};const r=l.mode===">"?Y.BLOCK_FOLDED:Y.BLOCK_LITERAL,a=e.source?$x(e.source):[];let u=a.length;for(let g=a.length-1;g>=0;--g){const S=a[g][1];if(S===""||S==="\r")u=g;else break}if(u===0){const g=l.chomp==="+"&&a.length>0?`
`.repeat(Math.max(1,a.length-1)):"";let S=i+l.length;return e.source&&(S+=e.source.length),{value:g,type:r,comment:l.comment,range:[i,S,S]}}let s=e.indent+l.indent,o=e.offset+l.length,f=0;for(let g=0;g<u;++g){const[S,p]=a[g];if(p===""||p==="\r")l.indent===0&&S.length>s&&(s=S.length);else{S.length<s&&t(o+S.length,"MISSING_CHAR","Block scalars with more-indented leading empty lines must use an explicit indentation indicator"),l.indent===0&&(s=S.length),f=g,s===0&&!n.atRoot&&t(o,"BAD_INDENT","Block scalar values in collections must be indented");break}o+=S.length+p.length+1}for(let g=a.length-1;g>=u;--g)a[g][0].length>s&&(u=g+1);let c="",d="",h=!1;for(let g=0;g<f;++g)c+=a[g][0].slice(s)+`
`;for(let g=f;g<u;++g){let[S,p]=a[g];o+=S.length+p.length+1;const m=p[p.length-1]==="\r";if(m&&(p=p.slice(0,-1)),p&&S.length<s){const v=`Block scalar lines must not be less indented than their ${l.indent?"explicit indentation indicator":"first line"}`;t(o-p.length-(m?2:1),"BAD_INDENT",v),S=""}r===Y.BLOCK_LITERAL?(c+=d+S.slice(s)+p,d=`
`):S.length>s||p[0]==="	"?(d===" "?d=`
`:!h&&d===`
`&&(d=`

`),c+=d+S.slice(s)+p,d=`
`,h=!0):p===""?d===`
`?c+=`
`:d=`
`:(c+=d+p,d=" ",h=!1)}switch(l.chomp){case"-":break;case"+":for(let g=u;g<a.length;++g)c+=`
`+a[g][0].slice(s);c[c.length-1]!==`
`&&(c+=`
`);break;default:c+=`
`}const y=i+l.length+e.source.length;return{value:c,type:r,comment:l.comment,range:[i,y,y]}}function Gx({offset:n,props:e},t,i){if(e[0].type!=="block-scalar-header")return i(e[0],"IMPOSSIBLE","Block scalar header not found"),null;const{source:l}=e[0],r=l[0];let a=0,u="",s=-1;for(let d=1;d<l.length;++d){const h=l[d];if(!u&&(h==="-"||h==="+"))u=h;else{const y=Number(h);!a&&y?a=y:s===-1&&(s=n+d)}}s!==-1&&i(s,"UNEXPECTED_TOKEN",`Block scalar header includes extra characters: ${l}`);let o=!1,f="",c=l.length;for(let d=1;d<e.length;++d){const h=e[d];switch(h.type){case"space":o=!0;case"newline":c+=h.source.length;break;case"comment":t&&!o&&i(h,"MISSING_CHAR","Comments must be separated from other tokens by white space characters"),c+=h.source.length,f=h.source.substring(1);break;case"error":i(h,"UNEXPECTED_TOKEN",h.message),c+=h.source.length;break;default:{const y=`Unexpected token in block scalar header: ${h.type}`;i(h,"UNEXPECTED_TOKEN",y);const g=h.source;g&&typeof g=="string"&&(c+=g.length)}}}return{mode:r,indent:a,chomp:u,comment:f,length:c}}function $x(n){const e=n.split(/\n( *)/),t=e[0],i=t.match(/^( *)/),r=[i!=null&&i[1]?[i[1],t.slice(i[1].length)]:["",t]];for(let a=1;a<e.length;a+=2)r.push([e[a],e[a+1]]);return r}function L0(n,e,t){const{offset:i,type:l,source:r,end:a}=n;let u,s;const o=(d,h,y)=>t(i+d,h,y);switch(l){case"scalar":u=Y.PLAIN,s=Qx(r,o);break;case"single-quoted-scalar":u=Y.QUOTE_SINGLE,s=Xx(r,o);break;case"double-quoted-scalar":u=Y.QUOTE_DOUBLE,s=Fx(r,o);break;default:return t(n,"UNEXPECTED_TOKEN",`Expected a flow scalar value, but found: ${l}`),{value:"",type:null,comment:"",range:[i,i+r.length,i+r.length]}}const f=i+r.length,c=Ea(a,f,e,t);return{value:s,type:u,comment:c.comment,range:[i,f,c.offset]}}function Qx(n,e){let t="";switch(n[0]){case"	":t="a tab character";break;case",":t="flow indicator character ,";break;case"%":t="directive indicator character %";break;case"|":case">":{t=`block scalar indicator ${n[0]}`;break}case"@":case"`":{t=`reserved character ${n[0]}`;break}}return t&&e(0,"BAD_SCALAR_START",`Plain value cannot start with ${t}`),R0(n)}function Xx(n,e){return(n[n.length-1]!=="'"||n.length===1)&&e(n.length,"MISSING_CHAR","Missing closing 'quote"),R0(n.slice(1,-1)).replace(/''/g,"'")}function R0(n){let e,t;try{e=new RegExp(`(.*?)(?<![ 	])[ 	]*\r?
`,"sy"),t=new RegExp(`[ 	]*(.*?)(?:(?<![ 	])[ 	]*)?\r?
`,"sy")}catch{e=/(.*?)[ \t]*\r?\n/sy,t=/[ \t]*(.*?)[ \t]*\r?\n/sy}let i=e.exec(n);if(!i)return n;let l=i[1],r=" ",a=e.lastIndex;for(t.lastIndex=a;i=t.exec(n);)i[1]===""?r===`
`?l+=r:r=`
`:(l+=r+i[1],r=" "),a=t.lastIndex;const u=/[ \t]*(.*)/sy;return u.lastIndex=a,i=u.exec(n),l+r+((i==null?void 0:i[1])??"")}function Fx(n,e){let t="";for(let i=1;i<n.length-1;++i){const l=n[i];if(!(l==="\r"&&n[i+1]===`
`))if(l===`
`){const{fold:r,offset:a}=Zx(n,i);t+=r,i=a}else if(l==="\\"){let r=n[++i];const a=Px[r];if(a)t+=a;else if(r===`
`)for(r=n[i+1];r===" "||r==="	";)r=n[++i+1];else if(r==="\r"&&n[i+1]===`
`)for(r=n[++i+1];r===" "||r==="	";)r=n[++i+1];else if(r==="x"||r==="u"||r==="U"){const u={x:2,u:4,U:8}[r];t+=Jx(n,i+1,u,e),i+=u}else{const u=n.substr(i-1,2);e(i-1,"BAD_DQ_ESCAPE",`Invalid escape sequence ${u}`),t+=u}}else if(l===" "||l==="	"){const r=i;let a=n[i+1];for(;a===" "||a==="	";)a=n[++i+1];a!==`
`&&!(a==="\r"&&n[i+2]===`
`)&&(t+=i>r?n.slice(r,i+1):l)}else t+=l}return(n[n.length-1]!=='"'||n.length===1)&&e(n.length,"MISSING_CHAR",'Missing closing "quote'),t}function Zx(n,e){let t="",i=n[e+1];for(;(i===" "||i==="	"||i===`
`||i==="\r")&&!(i==="\r"&&n[e+2]!==`
`);)i===`
`&&(t+=`
`),e+=1,i=n[e+1];return t||(t=" "),{fold:t,offset:e}}const Px={0:"\0",a:"\x07",b:"\b",e:"\x1B",f:"\f",n:`
`,r:"\r",t:"	",v:"\v",N:"",_:" ",L:"\u2028",P:"\u2029"," ":" ",'"':'"',"/":"/","\\":"\\","	":"	"};function Jx(n,e,t,i){const l=n.substr(e,t),a=l.length===t&&/^[0-9a-fA-F]+$/.test(l)?parseInt(l,16):NaN;if(isNaN(a)){const u=n.substr(e-2,t+2);return i(e-2,"BAD_DQ_ESCAPE",`Invalid escape sequence ${u}`),u}return String.fromCodePoint(a)}function B0(n,e,t,i){const{value:l,type:r,comment:a,range:u}=e.type==="block-scalar"?M0(n,e,i):L0(e,n.options.strict,i),s=t?n.directives.tagName(t.source,c=>i(t,"TAG_RESOLVE_FAILED",c)):null;let o;n.options.stringKeys&&n.atKey?o=n.schema[Pe]:s?o=Wx(n.schema,l,s,t,i):e.type==="scalar"?o=n2(n,l,e,i):o=n.schema[Pe];let f;try{const c=o.resolve(l,d=>i(t??e,"TAG_RESOLVE_FAILED",d),n.options);f=hn(c)?c:new Y(c)}catch(c){const d=c instanceof Error?c.message:String(c);i(t??e,"TAG_RESOLVE_FAILED",d),f=new Y(l)}return f.range=u,f.source=l,r&&(f.type=r),s&&(f.tag=s),o.format&&(f.format=o.format),a&&(f.comment=a),f}function Wx(n,e,t,i,l){var u;if(t==="!")return n[Pe];const r=[];for(const s of n.tags)if(!s.collection&&s.tag===t)if(s.default&&s.test)r.push(s);else return s;for(const s of r)if((u=s.test)!=null&&u.test(e))return s;const a=n.knownTags[t];return a&&!a.collection?(n.tags.push(Object.assign({},a,{default:!1,test:void 0})),a):(l(i,"TAG_RESOLVE_FAILED",`Unresolved tag: ${t}`,t!=="tag:yaml.org,2002:str"),n[Pe])}function n2({atKey:n,directives:e,schema:t},i,l,r){const a=t.tags.find(u=>{var s;return(u.default===!0||n&&u.default==="key")&&((s=u.test)==null?void 0:s.test(i))})||t[Pe];if(t.compat){const u=t.compat.find(s=>{var o;return s.default&&((o=s.test)==null?void 0:o.test(i))})??t[Pe];if(a.tag!==u.tag){const s=e.tagString(a.tag),o=e.tagString(u.tag),f=`Value may be parsed as either ${s} or ${o}`;r(l,"TAG_RESOLVE_FAILED",f,!0)}}return a}function e2(n,e,t){if(e){t??(t=e.length);for(let i=t-1;i>=0;--i){let l=e[i];switch(l.type){case"space":case"comment":case"newline":n-=l.source.length;continue}for(l=e[++i];(l==null?void 0:l.type)==="space";)n+=l.source.length,l=e[++i];break}}return n}const t2={composeNode:j0,composeEmptyNode:Oh};function j0(n,e,t,i){const l=n.atKey,{spaceBefore:r,comment:a,anchor:u,tag:s}=t;let o,f=!0;switch(e.type){case"alias":o=i2(n,e,i),(u||s)&&i(e,"ALIAS_PROPS","An alias node must not specify any properties");break;case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"block-scalar":o=B0(n,e,s,i),u&&(o.anchor=u.source.substring(1));break;case"block-map":case"block-seq":case"flow-collection":o=Kx(t2,n,e,t,i),u&&(o.anchor=u.source.substring(1));break;default:{const c=e.type==="error"?e.message:`Unsupported token (type: ${e.type})`;i(e,"UNEXPECTED_TOKEN",c),o=Oh(n,e.offset,void 0,null,t,i),f=!1}}return u&&o.anchor===""&&i(u,"BAD_ALIAS","Anchor cannot be an empty string"),l&&n.options.stringKeys&&(!hn(o)||typeof o.value!="string"||o.tag&&o.tag!=="tag:yaml.org,2002:str")&&i(s??e,"NON_STRING_KEY","With stringKeys, all keys must be strings"),r&&(o.spaceBefore=!0),a&&(e.type==="scalar"&&e.source===""?o.comment=a:o.commentBefore=a),n.options.keepSourceTokens&&f&&(o.srcToken=e),o}function Oh(n,e,t,i,{spaceBefore:l,comment:r,anchor:a,tag:u,end:s},o){const f={type:"scalar",offset:e2(e,t,i),indent:-1,source:""},c=B0(n,f,u,o);return a&&(c.anchor=a.source.substring(1),c.anchor===""&&o(a,"BAD_ALIAS","Anchor cannot be an empty string")),l&&(c.spaceBefore=!0),r&&(c.comment=r,c.range[2]=s),c}function i2({options:n},{offset:e,source:t,end:i},l){const r=new As(t.substring(1));r.source===""&&l(e,"BAD_ALIAS","Alias cannot be an empty string"),r.source.endsWith(":")&&l(e+t.length-1,"BAD_ALIAS","Alias ending in : is ambiguous",!0);const a=e+t.length,u=Ea(i,a,n.strict,l);return r.range=[e,a,u.offset],u.comment&&(r.comment=u.comment),r}function l2(n,e,{offset:t,start:i,value:l,end:r},a){const u=Object.assign({_directives:e},n),s=new Zl(void 0,u),o={atKey:!1,atRoot:!0,directives:s.directives,options:s.options,schema:s.schema},f=Rl(i,{indicator:"doc-start",next:l??(r==null?void 0:r[0]),offset:t,onError:a,parentIndent:0,startOnNewline:!0});f.found&&(s.directives.docStart=!0,l&&(l.type==="block-map"||l.type==="block-seq")&&!f.hasNewline&&a(f.end,"MISSING_CHAR","Block collection cannot start on same line with directives-end marker")),s.contents=l?j0(o,l,f,a):Oh(o,f.end,i,null,f,a);const c=s.contents.range[2],d=Ea(r,c,!1,a);return d.comment&&(s.comment=d.comment),s.range=[t,c,d.offset],s}function cr(n){if(typeof n=="number")return[n,n+1];if(Array.isArray(n))return n.length===2?n:[n[0],n[1]];const{offset:e,source:t}=n;return[e,e+(typeof t=="string"?t.length:1)]}function Hp(n){var l;let e="",t=!1,i=!1;for(let r=0;r<n.length;++r){const a=n[r];switch(a[0]){case"#":e+=(e===""?"":i?`

`:`
`)+(a.substring(1)||" "),t=!0,i=!1;break;case"%":((l=n[r+1])==null?void 0:l[0])!=="#"&&(r+=1),t=!1;break;default:t||(i=!0),t=!1}}return{comment:e,afterEmptyLine:i}}class Ch{constructor(e={}){this.doc=null,this.atDirectives=!1,this.prelude=[],this.errors=[],this.warnings=[],this.onError=(t,i,l,r)=>{const a=cr(t);r?this.warnings.push(new D0(a,i,l)):this.errors.push(new mi(a,i,l))},this.directives=new Zn({version:e.version||"1.2"}),this.options=e}decorate(e,t){const{comment:i,afterEmptyLine:l}=Hp(this.prelude);if(i){const r=e.contents;if(t)e.comment=e.comment?`${e.comment}
${i}`:i;else if(l||e.directives.docStart||!r)e.commentBefore=i;else if(kn(r)&&!r.flow&&r.items.length>0){let a=r.items[0];vn(a)&&(a=a.key);const u=a.commentBefore;a.commentBefore=u?`${i}
${u}`:i}else{const a=r.commentBefore;r.commentBefore=a?`${i}
${a}`:i}}t?(Array.prototype.push.apply(e.errors,this.errors),Array.prototype.push.apply(e.warnings,this.warnings)):(e.errors=this.errors,e.warnings=this.warnings),this.prelude=[],this.errors=[],this.warnings=[]}streamInfo(){return{comment:Hp(this.prelude).comment,directives:this.directives,errors:this.errors,warnings:this.warnings}}*compose(e,t=!1,i=-1){for(const l of e)yield*this.next(l);yield*this.end(t,i)}*next(e){switch(e.type){case"directive":this.directives.add(e.source,(t,i,l)=>{const r=cr(e);r[0]+=t,this.onError(r,"BAD_DIRECTIVE",i,l)}),this.prelude.push(e.source),this.atDirectives=!0;break;case"document":{const t=l2(this.options,this.directives,e,this.onError);this.atDirectives&&!t.directives.docStart&&this.onError(e,"MISSING_CHAR","Missing directives-end/doc-start indicator line"),this.decorate(t,!1),this.doc&&(yield this.doc),this.doc=t,this.atDirectives=!1;break}case"byte-order-mark":case"space":break;case"comment":case"newline":this.prelude.push(e.source);break;case"error":{const t=e.source?`${e.message}: ${JSON.stringify(e.source)}`:e.message,i=new mi(cr(e),"UNEXPECTED_TOKEN",t);this.atDirectives||!this.doc?this.errors.push(i):this.doc.errors.push(i);break}case"doc-end":{if(!this.doc){const i="Unexpected doc-end without preceding document";this.errors.push(new mi(cr(e),"UNEXPECTED_TOKEN",i));break}this.doc.directives.docEnd=!0;const t=Ea(e.end,e.offset+e.source.length,this.doc.options.strict,this.onError);if(this.decorate(this.doc,!0),t.comment){const i=this.doc.comment;this.doc.comment=i?`${i}
${t.comment}`:t.comment}this.doc.range[2]=t.offset;break}default:this.errors.push(new mi(cr(e),"UNEXPECTED_TOKEN",`Unsupported token ${e.type}`))}}*end(e=!1,t=-1){if(this.doc)this.decorate(this.doc,!0),yield this.doc,this.doc=null;else if(e){const i=Object.assign({_directives:this.directives},this.options),l=new Zl(void 0,i);this.atDirectives&&this.onError(t,"MISSING_CHAR","Missing directives-end indicator line"),l.range=[0,t,t],this.decorate(l,!1),yield l}}}function r2(n,e=!0,t){if(n){const i=(l,r,a)=>{const u=typeof l=="number"?l:Array.isArray(l)?l[0]:l.offset;if(t)t(u,r,a);else throw new mi([u,u+1],r,a)};switch(n.type){case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return L0(n,e,i);case"block-scalar":return M0({options:{strict:e}},n,i)}}return null}function a2(n,e){const{implicitKey:t=!1,indent:i,inFlow:l=!1,offset:r=-1,type:a="PLAIN"}=e,u=ka({type:a,value:n},{implicitKey:t,indent:i>0?" ".repeat(i):"",inFlow:l,options:{blockQuote:!0,lineWidth:-1}}),s=e.end??[{type:"newline",offset:-1,indent:i,source:`
`}];switch(u[0]){case"|":case">":{const o=u.indexOf(`
`),f=u.substring(0,o),c=u.substring(o+1)+`
`,d=[{type:"block-scalar-header",offset:r,indent:i,source:f}];return U0(d,s)||d.push({type:"newline",offset:-1,indent:i,source:`
`}),{type:"block-scalar",offset:r,indent:i,props:d,source:c}}case'"':return{type:"double-quoted-scalar",offset:r,indent:i,source:u,end:s};case"'":return{type:"single-quoted-scalar",offset:r,indent:i,source:u,end:s};default:return{type:"scalar",offset:r,indent:i,source:u,end:s}}}function u2(n,e,t={}){let{afterKey:i=!1,implicitKey:l=!1,inFlow:r=!1,type:a}=t,u="indent"in n?n.indent:null;if(i&&typeof u=="number"&&(u+=2),!a)switch(n.type){case"single-quoted-scalar":a="QUOTE_SINGLE";break;case"double-quoted-scalar":a="QUOTE_DOUBLE";break;case"block-scalar":{const o=n.props[0];if(o.type!=="block-scalar-header")throw new Error("Invalid block scalar header");a=o.source[0]===">"?"BLOCK_FOLDED":"BLOCK_LITERAL";break}default:a="PLAIN"}const s=ka({type:a,value:e},{implicitKey:l||u===null,indent:u!==null&&u>0?" ".repeat(u):"",inFlow:r,options:{blockQuote:!0,lineWidth:-1}});switch(s[0]){case"|":case">":s2(n,s);break;case'"':zo(n,s,"double-quoted-scalar");break;case"'":zo(n,s,"single-quoted-scalar");break;default:zo(n,s,"scalar")}}function s2(n,e){const t=e.indexOf(`
`),i=e.substring(0,t),l=e.substring(t+1)+`
`;if(n.type==="block-scalar"){const r=n.props[0];if(r.type!=="block-scalar-header")throw new Error("Invalid block scalar header");r.source=i,n.source=l}else{const{offset:r}=n,a="indent"in n?n.indent:-1,u=[{type:"block-scalar-header",offset:r,indent:a,source:i}];U0(u,"end"in n?n.end:void 0)||u.push({type:"newline",offset:-1,indent:a,source:`
`});for(const s of Object.keys(n))s!=="type"&&s!=="offset"&&delete n[s];Object.assign(n,{type:"block-scalar",indent:a,props:u,source:l})}}function U0(n,e){if(e)for(const t of e)switch(t.type){case"space":case"comment":n.push(t);break;case"newline":return n.push(t),!0}return!1}function zo(n,e,t){switch(n.type){case"scalar":case"double-quoted-scalar":case"single-quoted-scalar":n.type=t,n.source=e;break;case"block-scalar":{const i=n.props.slice(1);let l=e.length;n.props[0].type==="block-scalar-header"&&(l-=n.props[0].source.length);for(const r of i)r.offset+=l;delete n.props,Object.assign(n,{type:t,source:e,end:i});break}case"block-map":case"block-seq":{const l={type:"newline",offset:n.offset+e.length,indent:n.indent,source:`
`};delete n.items,Object.assign(n,{type:t,source:e,end:[l]});break}default:{const i="indent"in n?n.indent:-1,l="end"in n&&Array.isArray(n.end)?n.end.filter(r=>r.type==="space"||r.type==="comment"||r.type==="newline"):[];for(const r of Object.keys(n))r!=="type"&&r!=="offset"&&delete n[r];Object.assign(n,{type:t,indent:i,source:e,end:l})}}}const o2=n=>"type"in n?ns(n):mu(n);function ns(n){switch(n.type){case"block-scalar":{let e="";for(const t of n.props)e+=ns(t);return e+n.source}case"block-map":case"block-seq":{let e="";for(const t of n.items)e+=mu(t);return e}case"flow-collection":{let e=n.start.source;for(const t of n.items)e+=mu(t);for(const t of n.end)e+=t.source;return e}case"document":{let e=mu(n);if(n.end)for(const t of n.end)e+=t.source;return e}default:{let e=n.source;if("end"in n&&n.end)for(const t of n.end)e+=t.source;return e}}}function mu({start:n,key:e,sep:t,value:i}){let l="";for(const r of n)l+=r.source;if(e&&(l+=ns(e)),t)for(const r of t)l+=r.source;return i&&(l+=ns(i)),l}const Wc=Symbol("break visit"),c2=Symbol("skip children"),q0=Symbol("remove item");function Oi(n,e){"type"in n&&n.type==="document"&&(n={start:n.start,value:n.value}),H0(Object.freeze([]),n,e)}Oi.BREAK=Wc;Oi.SKIP=c2;Oi.REMOVE=q0;Oi.itemAtPath=(n,e)=>{let t=n;for(const[i,l]of e){const r=t==null?void 0:t[i];if(r&&"items"in r)t=r.items[l];else return}return t};Oi.parentCollection=(n,e)=>{const t=Oi.itemAtPath(n,e.slice(0,-1)),i=e[e.length-1][0],l=t==null?void 0:t[i];if(l&&"items"in l)return l;throw new Error("Parent collection not found")};function H0(n,e,t){let i=t(e,n);if(typeof i=="symbol")return i;for(const l of["key","value"]){const r=e[l];if(r&&"items"in r){for(let a=0;a<r.items.length;++a){const u=H0(Object.freeze(n.concat([[l,a]])),r.items[a],t);if(typeof u=="number")a=u-1;else{if(u===Wc)return Wc;u===q0&&(r.items.splice(a,1),a-=1)}}typeof i=="function"&&l==="key"&&(i=i(e,n))}}return typeof i=="function"?i(e,n):i}const Rs="\uFEFF",Bs="",js="",ta="",f2=n=>!!n&&"items"in n,h2=n=>!!n&&(n.type==="scalar"||n.type==="single-quoted-scalar"||n.type==="double-quoted-scalar"||n.type==="block-scalar");function d2(n){switch(n){case Rs:return"<BOM>";case Bs:return"<DOC>";case js:return"<FLOW_END>";case ta:return"<SCALAR>";default:return JSON.stringify(n)}}function I0(n){switch(n){case Rs:return"byte-order-mark";case Bs:return"doc-mode";case js:return"flow-error-end";case ta:return"scalar";case"---":return"doc-start";case"...":return"doc-end";case"":case`
`:case`\r
`:return"newline";case"-":return"seq-item-ind";case"?":return"explicit-key-ind";case":":return"map-value-ind";case"{":return"flow-map-start";case"}":return"flow-map-end";case"[":return"flow-seq-start";case"]":return"flow-seq-end";case",":return"comma"}switch(n[0]){case" ":case"	":return"space";case"#":return"comment";case"%":return"directive-line";case"*":return"alias";case"&":return"anchor";case"!":return"tag";case"'":return"single-quoted-scalar";case'"':return"double-quoted-scalar";case"|":case">":return"block-scalar-header"}return null}const p2=Object.freeze(Object.defineProperty({__proto__:null,BOM:Rs,DOCUMENT:Bs,FLOW_END:js,SCALAR:ta,createScalarToken:a2,isCollection:f2,isScalar:h2,prettyToken:d2,resolveAsScalar:r2,setScalarValue:u2,stringify:o2,tokenType:I0,visit:Oi},Symbol.toStringTag,{value:"Module"}));function je(n){switch(n){case void 0:case" ":case`
`:case"\r":case"	":return!0;default:return!1}}const Ip=new Set("0123456789ABCDEFabcdef"),m2=new Set("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-#;/?:@&=+$_.!~*'()"),Qa=new Set(",[]{}"),g2=new Set(` ,[]{}
\r	`),Mo=n=>!n||g2.has(n);class Y0{constructor(){this.atEnd=!1,this.blockScalarIndent=-1,this.blockScalarKeep=!1,this.buffer="",this.flowKey=!1,this.flowLevel=0,this.indentNext=0,this.indentValue=0,this.lineEndPos=null,this.next=null,this.pos=0}*lex(e,t=!1){if(e){if(typeof e!="string")throw TypeError("source is not a string");this.buffer=this.buffer?this.buffer+e:e,this.lineEndPos=null}this.atEnd=!t;let i=this.next??"stream";for(;i&&(t||this.hasChars(1));)i=yield*this.parseNext(i)}atLineEnd(){let e=this.pos,t=this.buffer[e];for(;t===" "||t==="	";)t=this.buffer[++e];return!t||t==="#"||t===`
`?!0:t==="\r"?this.buffer[e+1]===`
`:!1}charAt(e){return this.buffer[this.pos+e]}continueScalar(e){let t=this.buffer[e];if(this.indentNext>0){let i=0;for(;t===" ";)t=this.buffer[++i+e];if(t==="\r"){const l=this.buffer[i+e+1];if(l===`
`||!l&&!this.atEnd)return e+i+1}return t===`
`||i>=this.indentNext||!t&&!this.atEnd?e+i:-1}if(t==="-"||t==="."){const i=this.buffer.substr(e,3);if((i==="---"||i==="...")&&je(this.buffer[e+3]))return-1}return e}getLine(){let e=this.lineEndPos;return(typeof e!="number"||e!==-1&&e<this.pos)&&(e=this.buffer.indexOf(`
`,this.pos),this.lineEndPos=e),e===-1?this.atEnd?this.buffer.substring(this.pos):null:(this.buffer[e-1]==="\r"&&(e-=1),this.buffer.substring(this.pos,e))}hasChars(e){return this.pos+e<=this.buffer.length}setNext(e){return this.buffer=this.buffer.substring(this.pos),this.pos=0,this.lineEndPos=null,this.next=e,null}peek(e){return this.buffer.substr(this.pos,e)}*parseNext(e){switch(e){case"stream":return yield*this.parseStream();case"line-start":return yield*this.parseLineStart();case"block-start":return yield*this.parseBlockStart();case"doc":return yield*this.parseDocument();case"flow":return yield*this.parseFlowCollection();case"quoted-scalar":return yield*this.parseQuotedScalar();case"block-scalar":return yield*this.parseBlockScalar();case"plain-scalar":return yield*this.parsePlainScalar()}}*parseStream(){let e=this.getLine();if(e===null)return this.setNext("stream");if(e[0]===Rs&&(yield*this.pushCount(1),e=e.substring(1)),e[0]==="%"){let t=e.length,i=e.indexOf("#");for(;i!==-1;){const r=e[i-1];if(r===" "||r==="	"){t=i-1;break}else i=e.indexOf("#",i+1)}for(;;){const r=e[t-1];if(r===" "||r==="	")t-=1;else break}const l=(yield*this.pushCount(t))+(yield*this.pushSpaces(!0));return yield*this.pushCount(e.length-l),this.pushNewline(),"stream"}if(this.atLineEnd()){const t=yield*this.pushSpaces(!0);return yield*this.pushCount(e.length-t),yield*this.pushNewline(),"stream"}return yield Bs,yield*this.parseLineStart()}*parseLineStart(){const e=this.charAt(0);if(!e&&!this.atEnd)return this.setNext("line-start");if(e==="-"||e==="."){if(!this.atEnd&&!this.hasChars(4))return this.setNext("line-start");const t=this.peek(3);if((t==="---"||t==="...")&&je(this.charAt(3)))return yield*this.pushCount(3),this.indentValue=0,this.indentNext=0,t==="---"?"doc":"stream"}return this.indentValue=yield*this.pushSpaces(!1),this.indentNext>this.indentValue&&!je(this.charAt(1))&&(this.indentNext=this.indentValue),yield*this.parseBlockStart()}*parseBlockStart(){const[e,t]=this.peek(2);if(!t&&!this.atEnd)return this.setNext("block-start");if((e==="-"||e==="?"||e===":")&&je(t)){const i=(yield*this.pushCount(1))+(yield*this.pushSpaces(!0));return this.indentNext=this.indentValue+1,this.indentValue+=i,yield*this.parseBlockStart()}return"doc"}*parseDocument(){yield*this.pushSpaces(!0);const e=this.getLine();if(e===null)return this.setNext("doc");let t=yield*this.pushIndicators();switch(e[t]){case"#":yield*this.pushCount(e.length-t);case void 0:return yield*this.pushNewline(),yield*this.parseLineStart();case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel=1,"flow";case"}":case"]":return yield*this.pushCount(1),"doc";case"*":return yield*this.pushUntil(Mo),"doc";case'"':case"'":return yield*this.parseQuotedScalar();case"|":case">":return t+=yield*this.parseBlockScalarHeader(),t+=yield*this.pushSpaces(!0),yield*this.pushCount(e.length-t),yield*this.pushNewline(),yield*this.parseBlockScalar();default:return yield*this.parsePlainScalar()}}*parseFlowCollection(){let e,t,i=-1;do e=yield*this.pushNewline(),e>0?(t=yield*this.pushSpaces(!1),this.indentValue=i=t):t=0,t+=yield*this.pushSpaces(!0);while(e+t>0);const l=this.getLine();if(l===null)return this.setNext("flow");if((i!==-1&&i<this.indentNext&&l[0]!=="#"||i===0&&(l.startsWith("---")||l.startsWith("..."))&&je(l[3]))&&!(i===this.indentNext-1&&this.flowLevel===1&&(l[0]==="]"||l[0]==="}")))return this.flowLevel=0,yield js,yield*this.parseLineStart();let r=0;for(;l[r]===",";)r+=yield*this.pushCount(1),r+=yield*this.pushSpaces(!0),this.flowKey=!1;switch(r+=yield*this.pushIndicators(),l[r]){case void 0:return"flow";case"#":return yield*this.pushCount(l.length-r),"flow";case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel+=1,"flow";case"}":case"]":return yield*this.pushCount(1),this.flowKey=!0,this.flowLevel-=1,this.flowLevel?"flow":"doc";case"*":return yield*this.pushUntil(Mo),"flow";case'"':case"'":return this.flowKey=!0,yield*this.parseQuotedScalar();case":":{const a=this.charAt(1);if(this.flowKey||je(a)||a===",")return this.flowKey=!1,yield*this.pushCount(1),yield*this.pushSpaces(!0),"flow"}default:return this.flowKey=!1,yield*this.parsePlainScalar()}}*parseQuotedScalar(){const e=this.charAt(0);let t=this.buffer.indexOf(e,this.pos+1);if(e==="'")for(;t!==-1&&this.buffer[t+1]==="'";)t=this.buffer.indexOf("'",t+2);else for(;t!==-1;){let r=0;for(;this.buffer[t-1-r]==="\\";)r+=1;if(r%2===0)break;t=this.buffer.indexOf('"',t+1)}const i=this.buffer.substring(0,t);let l=i.indexOf(`
`,this.pos);if(l!==-1){for(;l!==-1;){const r=this.continueScalar(l+1);if(r===-1)break;l=i.indexOf(`
`,r)}l!==-1&&(t=l-(i[l-1]==="\r"?2:1))}if(t===-1){if(!this.atEnd)return this.setNext("quoted-scalar");t=this.buffer.length}return yield*this.pushToIndex(t+1,!1),this.flowLevel?"flow":"doc"}*parseBlockScalarHeader(){this.blockScalarIndent=-1,this.blockScalarKeep=!1;let e=this.pos;for(;;){const t=this.buffer[++e];if(t==="+")this.blockScalarKeep=!0;else if(t>"0"&&t<="9")this.blockScalarIndent=Number(t)-1;else if(t!=="-")break}return yield*this.pushUntil(t=>je(t)||t==="#")}*parseBlockScalar(){let e=this.pos-1,t=0,i;n:for(let r=this.pos;i=this.buffer[r];++r)switch(i){case" ":t+=1;break;case`
`:e=r,t=0;break;case"\r":{const a=this.buffer[r+1];if(!a&&!this.atEnd)return this.setNext("block-scalar");if(a===`
`)break}default:break n}if(!i&&!this.atEnd)return this.setNext("block-scalar");if(t>=this.indentNext){this.blockScalarIndent===-1?this.indentNext=t:this.indentNext=this.blockScalarIndent+(this.indentNext===0?1:this.indentNext);do{const r=this.continueScalar(e+1);if(r===-1)break;e=this.buffer.indexOf(`
`,r)}while(e!==-1);if(e===-1){if(!this.atEnd)return this.setNext("block-scalar");e=this.buffer.length}}let l=e+1;for(i=this.buffer[l];i===" ";)i=this.buffer[++l];if(i==="	"){for(;i==="	"||i===" "||i==="\r"||i===`
`;)i=this.buffer[++l];e=l-1}else if(!this.blockScalarKeep)do{let r=e-1,a=this.buffer[r];a==="\r"&&(a=this.buffer[--r]);const u=r;for(;a===" ";)a=this.buffer[--r];if(a===`
`&&r>=this.pos&&r+1+t>u)e=r;else break}while(!0);return yield ta,yield*this.pushToIndex(e+1,!0),yield*this.parseLineStart()}*parsePlainScalar(){const e=this.flowLevel>0;let t=this.pos-1,i=this.pos-1,l;for(;l=this.buffer[++i];)if(l===":"){const r=this.buffer[i+1];if(je(r)||e&&Qa.has(r))break;t=i}else if(je(l)){let r=this.buffer[i+1];if(l==="\r"&&(r===`
`?(i+=1,l=`
`,r=this.buffer[i+1]):t=i),r==="#"||e&&Qa.has(r))break;if(l===`
`){const a=this.continueScalar(i+1);if(a===-1)break;i=Math.max(i,a-2)}}else{if(e&&Qa.has(l))break;t=i}return!l&&!this.atEnd?this.setNext("plain-scalar"):(yield ta,yield*this.pushToIndex(t+1,!0),e?"flow":"doc")}*pushCount(e){return e>0?(yield this.buffer.substr(this.pos,e),this.pos+=e,e):0}*pushToIndex(e,t){const i=this.buffer.slice(this.pos,e);return i?(yield i,this.pos+=i.length,i.length):(t&&(yield""),0)}*pushIndicators(){switch(this.charAt(0)){case"!":return(yield*this.pushTag())+(yield*this.pushSpaces(!0))+(yield*this.pushIndicators());case"&":return(yield*this.pushUntil(Mo))+(yield*this.pushSpaces(!0))+(yield*this.pushIndicators());case"-":case"?":case":":{const e=this.flowLevel>0,t=this.charAt(1);if(je(t)||e&&Qa.has(t))return e?this.flowKey&&(this.flowKey=!1):this.indentNext=this.indentValue+1,(yield*this.pushCount(1))+(yield*this.pushSpaces(!0))+(yield*this.pushIndicators())}}return 0}*pushTag(){if(this.charAt(1)==="<"){let e=this.pos+2,t=this.buffer[e];for(;!je(t)&&t!==">";)t=this.buffer[++e];return yield*this.pushToIndex(t===">"?e+1:e,!1)}else{let e=this.pos+1,t=this.buffer[e];for(;t;)if(m2.has(t))t=this.buffer[++e];else if(t==="%"&&Ip.has(this.buffer[e+1])&&Ip.has(this.buffer[e+2]))t=this.buffer[e+=3];else break;return yield*this.pushToIndex(e,!1)}}*pushNewline(){const e=this.buffer[this.pos];return e===`
`?yield*this.pushCount(1):e==="\r"&&this.charAt(1)===`
`?yield*this.pushCount(2):0}*pushSpaces(e){let t=this.pos-1,i;do i=this.buffer[++t];while(i===" "||e&&i==="	");const l=t-this.pos;return l>0&&(yield this.buffer.substr(this.pos,l),this.pos=t),l}*pushUntil(e){let t=this.pos,i=this.buffer[t];for(;!e(i);)i=this.buffer[++t];return yield*this.pushToIndex(t,!1)}}class V0{constructor(){this.lineStarts=[],this.addNewLine=e=>this.lineStarts.push(e),this.linePos=e=>{let t=0,i=this.lineStarts.length;for(;t<i;){const r=t+i>>1;this.lineStarts[r]<e?t=r+1:i=r}if(this.lineStarts[t]===e)return{line:t+1,col:1};if(t===0)return{line:0,col:e};const l=this.lineStarts[t-1];return{line:t,col:e-l+1}}}}function _t(n,e){for(let t=0;t<n.length;++t)if(n[t].type===e)return!0;return!1}function Yp(n){for(let e=0;e<n.length;++e)switch(n[e].type){case"space":case"comment":case"newline":break;default:return e}return-1}function K0(n){switch(n==null?void 0:n.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"flow-collection":return!0;default:return!1}}function Xa(n){switch(n.type){case"document":return n.start;case"block-map":{const e=n.items[n.items.length-1];return e.sep??e.start}case"block-seq":return n.items[n.items.length-1].start;default:return[]}}function Vi(n){var t;if(n.length===0)return[];let e=n.length;n:for(;--e>=0;)switch(n[e].type){case"doc-start":case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":case"newline":break n}for(;((t=n[++e])==null?void 0:t.type)==="space";);return n.splice(e,n.length)}function Vp(n){if(n.start.type==="flow-seq-start")for(const e of n.items)e.sep&&!e.value&&!_t(e.start,"explicit-key-ind")&&!_t(e.sep,"map-value-ind")&&(e.key&&(e.value=e.key),delete e.key,K0(e.value)?e.value.end?Array.prototype.push.apply(e.value.end,e.sep):e.value.end=e.sep:Array.prototype.push.apply(e.start,e.sep),delete e.sep)}class _h{constructor(e){this.atNewLine=!0,this.atScalar=!1,this.indent=0,this.offset=0,this.onKeyLine=!1,this.stack=[],this.source="",this.type="",this.lexer=new Y0,this.onNewLine=e}*parse(e,t=!1){this.onNewLine&&this.offset===0&&this.onNewLine(0);for(const i of this.lexer.lex(e,t))yield*this.next(i);t||(yield*this.end())}*next(e){if(this.source=e,this.atScalar){this.atScalar=!1,yield*this.step(),this.offset+=e.length;return}const t=I0(e);if(t)if(t==="scalar")this.atNewLine=!1,this.atScalar=!0,this.type="scalar";else{switch(this.type=t,yield*this.step(),t){case"newline":this.atNewLine=!0,this.indent=0,this.onNewLine&&this.onNewLine(this.offset+e.length);break;case"space":this.atNewLine&&e[0]===" "&&(this.indent+=e.length);break;case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":this.atNewLine&&(this.indent+=e.length);break;case"doc-mode":case"flow-error-end":return;default:this.atNewLine=!1}this.offset+=e.length}else{const i=`Not a YAML token: ${e}`;yield*this.pop({type:"error",offset:this.offset,message:i,source:e}),this.offset+=e.length}}*end(){for(;this.stack.length>0;)yield*this.pop()}get sourceToken(){return{type:this.type,offset:this.offset,indent:this.indent,source:this.source}}*step(){const e=this.peek(1);if(this.type==="doc-end"&&(!e||e.type!=="doc-end")){for(;this.stack.length>0;)yield*this.pop();this.stack.push({type:"doc-end",offset:this.offset,source:this.source});return}if(!e)return yield*this.stream();switch(e.type){case"document":return yield*this.document(e);case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return yield*this.scalar(e);case"block-scalar":return yield*this.blockScalar(e);case"block-map":return yield*this.blockMap(e);case"block-seq":return yield*this.blockSequence(e);case"flow-collection":return yield*this.flowCollection(e);case"doc-end":return yield*this.documentEnd(e)}yield*this.pop()}peek(e){return this.stack[this.stack.length-e]}*pop(e){const t=e??this.stack.pop();if(!t)yield{type:"error",offset:this.offset,source:"",message:"Tried to pop an empty stack"};else if(this.stack.length===0)yield t;else{const i=this.peek(1);switch(t.type==="block-scalar"?t.indent="indent"in i?i.indent:0:t.type==="flow-collection"&&i.type==="document"&&(t.indent=0),t.type==="flow-collection"&&Vp(t),i.type){case"document":i.value=t;break;case"block-scalar":i.props.push(t);break;case"block-map":{const l=i.items[i.items.length-1];if(l.value){i.items.push({start:[],key:t,sep:[]}),this.onKeyLine=!0;return}else if(l.sep)l.value=t;else{Object.assign(l,{key:t,sep:[]}),this.onKeyLine=!l.explicitKey;return}break}case"block-seq":{const l=i.items[i.items.length-1];l.value?i.items.push({start:[],value:t}):l.value=t;break}case"flow-collection":{const l=i.items[i.items.length-1];!l||l.value?i.items.push({start:[],key:t,sep:[]}):l.sep?l.value=t:Object.assign(l,{key:t,sep:[]});return}default:yield*this.pop(),yield*this.pop(t)}if((i.type==="document"||i.type==="block-map"||i.type==="block-seq")&&(t.type==="block-map"||t.type==="block-seq")){const l=t.items[t.items.length-1];l&&!l.sep&&!l.value&&l.start.length>0&&Yp(l.start)===-1&&(t.indent===0||l.start.every(r=>r.type!=="comment"||r.indent<t.indent))&&(i.type==="document"?i.end=l.start:i.items.push({start:l.start}),t.items.splice(-1,1))}}}*stream(){switch(this.type){case"directive-line":yield{type:"directive",offset:this.offset,source:this.source};return;case"byte-order-mark":case"space":case"comment":case"newline":yield this.sourceToken;return;case"doc-mode":case"doc-start":{const e={type:"document",offset:this.offset,start:[]};this.type==="doc-start"&&e.start.push(this.sourceToken),this.stack.push(e);return}}yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML stream`,source:this.source}}*document(e){if(e.value)return yield*this.lineEnd(e);switch(this.type){case"doc-start":{Yp(e.start)!==-1?(yield*this.pop(),yield*this.step()):e.start.push(this.sourceToken);return}case"anchor":case"tag":case"space":case"comment":case"newline":e.start.push(this.sourceToken);return}const t=this.startBlockValue(e);t?this.stack.push(t):yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML document`,source:this.source}}*scalar(e){if(this.type==="map-value-ind"){const t=Xa(this.peek(2)),i=Vi(t);let l;e.end?(l=e.end,l.push(this.sourceToken),delete e.end):l=[this.sourceToken];const r={type:"block-map",offset:e.offset,indent:e.indent,items:[{start:i,key:e,sep:l}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=r}else yield*this.lineEnd(e)}*blockScalar(e){switch(this.type){case"space":case"comment":case"newline":e.props.push(this.sourceToken);return;case"scalar":if(e.source=this.source,this.atNewLine=!0,this.indent=0,this.onNewLine){let t=this.source.indexOf(`
`)+1;for(;t!==0;)this.onNewLine(this.offset+t),t=this.source.indexOf(`
`,t)+1}yield*this.pop();break;default:yield*this.pop(),yield*this.step()}}*blockMap(e){var i;const t=e.items[e.items.length-1];switch(this.type){case"newline":if(this.onKeyLine=!1,t.value){const l="end"in t.value?t.value.end:void 0,r=Array.isArray(l)?l[l.length-1]:void 0;(r==null?void 0:r.type)==="comment"?l==null||l.push(this.sourceToken):e.items.push({start:[this.sourceToken]})}else t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case"space":case"comment":if(t.value)e.items.push({start:[this.sourceToken]});else if(t.sep)t.sep.push(this.sourceToken);else{if(this.atIndentedComment(t.start,e.indent)){const l=e.items[e.items.length-2],r=(i=l==null?void 0:l.value)==null?void 0:i.end;if(Array.isArray(r)){Array.prototype.push.apply(r,t.start),r.push(this.sourceToken),e.items.pop();return}}t.start.push(this.sourceToken)}return}if(this.indent>=e.indent){const l=!this.onKeyLine&&this.indent===e.indent,r=l&&(t.sep||t.explicitKey)&&this.type!=="seq-item-ind";let a=[];if(r&&t.sep&&!t.value){const u=[];for(let s=0;s<t.sep.length;++s){const o=t.sep[s];switch(o.type){case"newline":u.push(s);break;case"space":break;case"comment":o.indent>e.indent&&(u.length=0);break;default:u.length=0}}u.length>=2&&(a=t.sep.splice(u[1]))}switch(this.type){case"anchor":case"tag":r||t.value?(a.push(this.sourceToken),e.items.push({start:a}),this.onKeyLine=!0):t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case"explicit-key-ind":!t.sep&&!t.explicitKey?(t.start.push(this.sourceToken),t.explicitKey=!0):r||t.value?(a.push(this.sourceToken),e.items.push({start:a,explicitKey:!0})):this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken],explicitKey:!0}]}),this.onKeyLine=!0;return;case"map-value-ind":if(t.explicitKey)if(t.sep)if(t.value)e.items.push({start:[],key:null,sep:[this.sourceToken]});else if(_t(t.sep,"map-value-ind"))this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:a,key:null,sep:[this.sourceToken]}]});else if(K0(t.key)&&!_t(t.sep,"newline")){const u=Vi(t.start),s=t.key,o=t.sep;o.push(this.sourceToken),delete t.key,delete t.sep,this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:u,key:s,sep:o}]})}else a.length>0?t.sep=t.sep.concat(a,this.sourceToken):t.sep.push(this.sourceToken);else if(_t(t.start,"newline"))Object.assign(t,{key:null,sep:[this.sourceToken]});else{const u=Vi(t.start);this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:u,key:null,sep:[this.sourceToken]}]})}else t.sep?t.value||r?e.items.push({start:a,key:null,sep:[this.sourceToken]}):_t(t.sep,"map-value-ind")?this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[],key:null,sep:[this.sourceToken]}]}):t.sep.push(this.sourceToken):Object.assign(t,{key:null,sep:[this.sourceToken]});this.onKeyLine=!0;return;case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{const u=this.flowScalar(this.type);r||t.value?(e.items.push({start:a,key:u,sep:[]}),this.onKeyLine=!0):t.sep?this.stack.push(u):(Object.assign(t,{key:u,sep:[]}),this.onKeyLine=!0);return}default:{const u=this.startBlockValue(e);if(u){if(u.type==="block-seq"){if(!t.explicitKey&&t.sep&&!_t(t.sep,"newline")){yield*this.pop({type:"error",offset:this.offset,message:"Unexpected block-seq-ind on same line with key",source:this.source});return}}else l&&e.items.push({start:a});this.stack.push(u);return}}}}yield*this.pop(),yield*this.step()}*blockSequence(e){var i;const t=e.items[e.items.length-1];switch(this.type){case"newline":if(t.value){const l="end"in t.value?t.value.end:void 0,r=Array.isArray(l)?l[l.length-1]:void 0;(r==null?void 0:r.type)==="comment"?l==null||l.push(this.sourceToken):e.items.push({start:[this.sourceToken]})}else t.start.push(this.sourceToken);return;case"space":case"comment":if(t.value)e.items.push({start:[this.sourceToken]});else{if(this.atIndentedComment(t.start,e.indent)){const l=e.items[e.items.length-2],r=(i=l==null?void 0:l.value)==null?void 0:i.end;if(Array.isArray(r)){Array.prototype.push.apply(r,t.start),r.push(this.sourceToken),e.items.pop();return}}t.start.push(this.sourceToken)}return;case"anchor":case"tag":if(t.value||this.indent<=e.indent)break;t.start.push(this.sourceToken);return;case"seq-item-ind":if(this.indent!==e.indent)break;t.value||_t(t.start,"seq-item-ind")?e.items.push({start:[this.sourceToken]}):t.start.push(this.sourceToken);return}if(this.indent>e.indent){const l=this.startBlockValue(e);if(l){this.stack.push(l);return}}yield*this.pop(),yield*this.step()}*flowCollection(e){const t=e.items[e.items.length-1];if(this.type==="flow-error-end"){let i;do yield*this.pop(),i=this.peek(1);while(i&&i.type==="flow-collection")}else if(e.end.length===0){switch(this.type){case"comma":case"explicit-key-ind":!t||t.sep?e.items.push({start:[this.sourceToken]}):t.start.push(this.sourceToken);return;case"map-value-ind":!t||t.value?e.items.push({start:[],key:null,sep:[this.sourceToken]}):t.sep?t.sep.push(this.sourceToken):Object.assign(t,{key:null,sep:[this.sourceToken]});return;case"space":case"comment":case"newline":case"anchor":case"tag":!t||t.value?e.items.push({start:[this.sourceToken]}):t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{const l=this.flowScalar(this.type);!t||t.value?e.items.push({start:[],key:l,sep:[]}):t.sep?this.stack.push(l):Object.assign(t,{key:l,sep:[]});return}case"flow-map-end":case"flow-seq-end":e.end.push(this.sourceToken);return}const i=this.startBlockValue(e);i?this.stack.push(i):(yield*this.pop(),yield*this.step())}else{const i=this.peek(2);if(i.type==="block-map"&&(this.type==="map-value-ind"&&i.indent===e.indent||this.type==="newline"&&!i.items[i.items.length-1].sep))yield*this.pop(),yield*this.step();else if(this.type==="map-value-ind"&&i.type!=="flow-collection"){const l=Xa(i),r=Vi(l);Vp(e);const a=e.end.splice(1,e.end.length);a.push(this.sourceToken);const u={type:"block-map",offset:e.offset,indent:e.indent,items:[{start:r,key:e,sep:a}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=u}else yield*this.lineEnd(e)}}flowScalar(e){if(this.onNewLine){let t=this.source.indexOf(`
`)+1;for(;t!==0;)this.onNewLine(this.offset+t),t=this.source.indexOf(`
`,t)+1}return{type:e,offset:this.offset,indent:this.indent,source:this.source}}startBlockValue(e){switch(this.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return this.flowScalar(this.type);case"block-scalar-header":return{type:"block-scalar",offset:this.offset,indent:this.indent,props:[this.sourceToken],source:""};case"flow-map-start":case"flow-seq-start":return{type:"flow-collection",offset:this.offset,indent:this.indent,start:this.sourceToken,items:[],end:[]};case"seq-item-ind":return{type:"block-seq",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken]}]};case"explicit-key-ind":{this.onKeyLine=!0;const t=Xa(e),i=Vi(t);return i.push(this.sourceToken),{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:i,explicitKey:!0}]}}case"map-value-ind":{this.onKeyLine=!0;const t=Xa(e),i=Vi(t);return{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:i,key:null,sep:[this.sourceToken]}]}}}return null}atIndentedComment(e,t){return this.type!=="comment"||this.indent<=t?!1:e.every(i=>i.type==="newline"||i.type==="space")}*documentEnd(e){this.type!=="doc-mode"&&(e.end?e.end.push(this.sourceToken):e.end=[this.sourceToken],this.type==="newline"&&(yield*this.pop()))}*lineEnd(e){switch(this.type){case"comma":case"doc-start":case"doc-end":case"flow-seq-end":case"flow-map-end":case"map-value-ind":yield*this.pop(),yield*this.step();break;case"newline":this.onKeyLine=!1;case"space":case"comment":default:e.end?e.end.push(this.sourceToken):e.end=[this.sourceToken],this.type==="newline"&&(yield*this.pop())}}}function G0(n){const e=n.prettyErrors!==!1;return{lineCounter:n.lineCounter||e&&new V0||null,prettyErrors:e}}function y2(n,e={}){const{lineCounter:t,prettyErrors:i}=G0(e),l=new _h(t==null?void 0:t.addNewLine),r=new Ch(e),a=Array.from(r.compose(l.parse(n)));if(i&&t)for(const u of a)u.errors.forEach(Wu(n,t)),u.warnings.forEach(Wu(n,t));return a.length>0?a:Object.assign([],{empty:!0},r.streamInfo())}function $0(n,e={}){const{lineCounter:t,prettyErrors:i}=G0(e),l=new _h(t==null?void 0:t.addNewLine),r=new Ch(e);let a=null;for(const u of r.compose(l.parse(n),!0,n.length))if(!a)a=u;else if(a.options.logLevel!=="silent"){a.errors.push(new mi(u.range.slice(0,2),"MULTIPLE_DOCS","Source contains multiple documents; please use YAML.parseAllDocuments()"));break}return i&&t&&(a.errors.forEach(Wu(n,t)),a.warnings.forEach(Wu(n,t))),a}function b2(n,e,t){let i;typeof e=="function"?i=e:t===void 0&&e&&typeof e=="object"&&(t=e);const l=$0(n,t);if(!l)return null;if(l.warnings.forEach(r=>c0(l.options.logLevel,r)),l.errors.length>0){if(l.options.logLevel!=="silent")throw l.errors[0];l.errors=[]}return l.toJS(Object.assign({reviver:i},t))}function S2(n,e,t){let i=null;if(typeof e=="function"||Array.isArray(e)?i=e:t===void 0&&e&&(t=e),typeof t=="string"&&(t=t.length),typeof t=="number"){const l=Math.round(t);t=l<1?void 0:l>8?{indent:8}:{indent:l}}if(n===void 0){const{keepUndefined:l}=t??e??{};if(!l)return}return Li(n)&&!i?n.toString(t):new Zl(n,i,t).toString(t)}const v2=Object.freeze(Object.defineProperty({__proto__:null,Alias:As,CST:p2,Composer:Ch,Document:Zl,Lexer:Y0,LineCounter:V0,Pair:Xn,Parser:_h,Scalar:Y,Schema:_0,YAMLError:Ah,YAMLMap:ge,YAMLParseError:mi,YAMLSeq:Wt,YAMLWarning:D0,isAlias:ii,isCollection:kn,isDocument:Li,isMap:$l,isNode:xn,isPair:vn,isScalar:hn,isSeq:Ql,parse:b2,parseAllDocuments:y2,parseDocument:$0,stringify:S2,visit:Ri,visitAsync:Ts},Symbol.toStringTag,{value:"Module"}));function w2(n){if(n.startsWith("---")){const e=n.indexOf(`
---`,3);if(e!==-1){const t=n.slice(3,e+1),i=n.slice(e+4);return{data:v2.parse(t)??{},content:i}}}return{data:{},content:n}}const k2=Object.assign({"/src/content/posts/Etymology.md":ox,"/src/content/posts/Rome.md":cx,"/src/content/posts/WW1.md":fx}),Nh=Object.entries(k2).map(([n,e])=>{const{content:t,data:i}=w2(e),l=n.split("/"),a=l[l.length-1].replace(/\.md$/,"");return{...{title:i&&i.title?String(i.title):a,date:i!=null&&i.date?String(i.date):void 0,description:i!=null&&i.description?String(i.description):void 0,slug:a},content:t}});Nh.sort((n,e)=>{const t=n.date?Date.parse(n.date):0;return(e.date?Date.parse(e.date):0)-t});const x2=Nh.map(({content:n,...e})=>e),E2=Nh.reduce((n,e)=>(n[e.slug]=e,n),{});function T2(){return R.jsxs("div",{className:"container",children:[R.jsx("h1",{children:"博客"}),R.jsx("ul",{className:"post-list",children:x2.map(n=>R.jsxs("li",{className:"post-item",children:[R.jsx("h2",{children:R.jsx(Zu,{to:`/post/${n.slug}`,children:n.title})}),n.date&&R.jsx("time",{dateTime:n.date,children:new Date(n.date).toLocaleDateString()}),n.description&&R.jsx("p",{children:n.description})]},n.slug))})]})}function A2(n,e){const t={};return(n[n.length-1]===""?[...n,""]:n).join((t.padRight?" ":"")+","+(t.padLeft===!1?"":" ")).trim()}const O2=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,C2=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,_2={};function Kp(n,e){return(_2.jsx?C2:O2).test(n)}const N2=/[ \t\n\f\r]/g;function D2(n){return typeof n=="object"?n.type==="text"?Gp(n.value):!1:Gp(n)}function Gp(n){return n.replace(N2,"")===""}class Ta{constructor(e,t,i){this.normal=t,this.property=e,i&&(this.space=i)}}Ta.prototype.normal={};Ta.prototype.property={};Ta.prototype.space=void 0;function Q0(n,e){const t={},i={};for(const l of n)Object.assign(t,l.property),Object.assign(i,l.normal);return new Ta(t,i,e)}function nf(n){return n.toLowerCase()}class oe{constructor(e,t){this.attribute=t,this.property=e}}oe.prototype.attribute="";oe.prototype.booleanish=!1;oe.prototype.boolean=!1;oe.prototype.commaOrSpaceSeparated=!1;oe.prototype.commaSeparated=!1;oe.prototype.defined=!1;oe.prototype.mustUseProperty=!1;oe.prototype.number=!1;oe.prototype.overloadedBoolean=!1;oe.prototype.property="";oe.prototype.spaceSeparated=!1;oe.prototype.space=void 0;let z2=0;const K=Bi(),Cn=Bi(),ef=Bi(),N=Bi(),dn=Bi(),kl=Bi(),de=Bi();function Bi(){return 2**++z2}const tf=Object.freeze(Object.defineProperty({__proto__:null,boolean:K,booleanish:Cn,commaOrSpaceSeparated:de,commaSeparated:kl,number:N,overloadedBoolean:ef,spaceSeparated:dn},Symbol.toStringTag,{value:"Module"})),Lo=Object.keys(tf);class Dh extends oe{constructor(e,t,i,l){let r=-1;if(super(e,t),$p(this,"space",l),typeof i=="number")for(;++r<Lo.length;){const a=Lo[r];$p(this,Lo[r],(i&tf[a])===tf[a])}}}Dh.prototype.defined=!0;function $p(n,e,t){t&&(n[e]=t)}function Pl(n){const e={},t={};for(const[i,l]of Object.entries(n.properties)){const r=new Dh(i,n.transform(n.attributes||{},i),l,n.space);n.mustUseProperty&&n.mustUseProperty.includes(i)&&(r.mustUseProperty=!0),e[i]=r,t[nf(i)]=i,t[nf(r.attribute)]=i}return new Ta(e,t,n.space)}const X0=Pl({properties:{ariaActiveDescendant:null,ariaAtomic:Cn,ariaAutoComplete:null,ariaBusy:Cn,ariaChecked:Cn,ariaColCount:N,ariaColIndex:N,ariaColSpan:N,ariaControls:dn,ariaCurrent:null,ariaDescribedBy:dn,ariaDetails:null,ariaDisabled:Cn,ariaDropEffect:dn,ariaErrorMessage:null,ariaExpanded:Cn,ariaFlowTo:dn,ariaGrabbed:Cn,ariaHasPopup:null,ariaHidden:Cn,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:dn,ariaLevel:N,ariaLive:null,ariaModal:Cn,ariaMultiLine:Cn,ariaMultiSelectable:Cn,ariaOrientation:null,ariaOwns:dn,ariaPlaceholder:null,ariaPosInSet:N,ariaPressed:Cn,ariaReadOnly:Cn,ariaRelevant:null,ariaRequired:Cn,ariaRoleDescription:dn,ariaRowCount:N,ariaRowIndex:N,ariaRowSpan:N,ariaSelected:Cn,ariaSetSize:N,ariaSort:null,ariaValueMax:N,ariaValueMin:N,ariaValueNow:N,ariaValueText:null,role:null},transform(n,e){return e==="role"?e:"aria-"+e.slice(4).toLowerCase()}});function F0(n,e){return e in n?n[e]:e}function Z0(n,e){return F0(n,e.toLowerCase())}const M2=Pl({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:kl,acceptCharset:dn,accessKey:dn,action:null,allow:null,allowFullScreen:K,allowPaymentRequest:K,allowUserMedia:K,alt:null,as:null,async:K,autoCapitalize:null,autoComplete:dn,autoFocus:K,autoPlay:K,blocking:dn,capture:null,charSet:null,checked:K,cite:null,className:dn,cols:N,colSpan:null,content:null,contentEditable:Cn,controls:K,controlsList:dn,coords:N|kl,crossOrigin:null,data:null,dateTime:null,decoding:null,default:K,defer:K,dir:null,dirName:null,disabled:K,download:ef,draggable:Cn,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:K,formTarget:null,headers:dn,height:N,hidden:ef,high:N,href:null,hrefLang:null,htmlFor:dn,httpEquiv:dn,id:null,imageSizes:null,imageSrcSet:null,inert:K,inputMode:null,integrity:null,is:null,isMap:K,itemId:null,itemProp:dn,itemRef:dn,itemScope:K,itemType:dn,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:K,low:N,manifest:null,max:null,maxLength:N,media:null,method:null,min:null,minLength:N,multiple:K,muted:K,name:null,nonce:null,noModule:K,noValidate:K,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:K,optimum:N,pattern:null,ping:dn,placeholder:null,playsInline:K,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:K,referrerPolicy:null,rel:dn,required:K,reversed:K,rows:N,rowSpan:N,sandbox:dn,scope:null,scoped:K,seamless:K,selected:K,shadowRootClonable:K,shadowRootDelegatesFocus:K,shadowRootMode:null,shape:null,size:N,sizes:null,slot:null,span:N,spellCheck:Cn,src:null,srcDoc:null,srcLang:null,srcSet:null,start:N,step:null,style:null,tabIndex:N,target:null,title:null,translate:null,type:null,typeMustMatch:K,useMap:null,value:Cn,width:N,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:dn,axis:null,background:null,bgColor:null,border:N,borderColor:null,bottomMargin:N,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:K,declare:K,event:null,face:null,frame:null,frameBorder:null,hSpace:N,leftMargin:N,link:null,longDesc:null,lowSrc:null,marginHeight:N,marginWidth:N,noResize:K,noHref:K,noShade:K,noWrap:K,object:null,profile:null,prompt:null,rev:null,rightMargin:N,rules:null,scheme:null,scrolling:Cn,standby:null,summary:null,text:null,topMargin:N,valueType:null,version:null,vAlign:null,vLink:null,vSpace:N,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:K,disableRemotePlayback:K,prefix:null,property:null,results:N,security:null,unselectable:null},space:"html",transform:Z0}),L2=Pl({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:de,accentHeight:N,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:N,amplitude:N,arabicForm:null,ascent:N,attributeName:null,attributeType:null,azimuth:N,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:N,by:null,calcMode:null,capHeight:N,className:dn,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:N,diffuseConstant:N,direction:null,display:null,dur:null,divisor:N,dominantBaseline:null,download:K,dx:null,dy:null,edgeMode:null,editable:null,elevation:N,enableBackground:null,end:null,event:null,exponent:N,externalResourcesRequired:null,fill:null,fillOpacity:N,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:kl,g2:kl,glyphName:kl,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:N,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:N,horizOriginX:N,horizOriginY:N,id:null,ideographic:N,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:N,k:N,k1:N,k2:N,k3:N,k4:N,kernelMatrix:de,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:N,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:N,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:N,overlineThickness:N,paintOrder:null,panose1:null,path:null,pathLength:N,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:dn,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:N,pointsAtY:N,pointsAtZ:N,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:de,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:de,rev:de,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:de,requiredFeatures:de,requiredFonts:de,requiredFormats:de,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:N,specularExponent:N,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:N,strikethroughThickness:N,string:null,stroke:null,strokeDashArray:de,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:N,strokeOpacity:N,strokeWidth:null,style:null,surfaceScale:N,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:de,tabIndex:N,tableValues:null,target:null,targetX:N,targetY:N,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:de,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:N,underlineThickness:N,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:N,values:null,vAlphabetic:N,vMathematical:N,vectorEffect:null,vHanging:N,vIdeographic:N,version:null,vertAdvY:N,vertOriginX:N,vertOriginY:N,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:N,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:F0}),P0=Pl({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(n,e){return"xlink:"+e.slice(5).toLowerCase()}}),J0=Pl({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:Z0}),W0=Pl({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(n,e){return"xml:"+e.slice(3).toLowerCase()}}),R2={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},B2=/[A-Z]/g,Qp=/-[a-z]/g,j2=/^data[-\w.:]+$/i;function U2(n,e){const t=nf(e);let i=e,l=oe;if(t in n.normal)return n.property[n.normal[t]];if(t.length>4&&t.slice(0,4)==="data"&&j2.test(e)){if(e.charAt(4)==="-"){const r=e.slice(5).replace(Qp,H2);i="data"+r.charAt(0).toUpperCase()+r.slice(1)}else{const r=e.slice(4);if(!Qp.test(r)){let a=r.replace(B2,q2);a.charAt(0)!=="-"&&(a="-"+a),e="data"+a}}l=Dh}return new l(i,e)}function q2(n){return"-"+n.toLowerCase()}function H2(n){return n.charAt(1).toUpperCase()}const I2=Q0([X0,M2,P0,J0,W0],"html"),zh=Q0([X0,L2,P0,J0,W0],"svg");function Y2(n){return n.join(" ").trim()}var Mh={},Xp=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,V2=/\n/g,K2=/^\s*/,G2=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,$2=/^:\s*/,Q2=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,X2=/^[;\s]*/,F2=/^\s+|\s+$/g,Z2=`
`,Fp="/",Zp="*",hi="",P2="comment",J2="declaration",W2=function(n,e){if(typeof n!="string")throw new TypeError("First argument must be a string");if(!n)return[];e=e||{};var t=1,i=1;function l(y){var g=y.match(V2);g&&(t+=g.length);var S=y.lastIndexOf(Z2);i=~S?y.length-S:i+y.length}function r(){var y={line:t,column:i};return function(g){return g.position=new a(y),o(),g}}function a(y){this.start=y,this.end={line:t,column:i},this.source=e.source}a.prototype.content=n;function u(y){var g=new Error(e.source+":"+t+":"+i+": "+y);if(g.reason=y,g.filename=e.source,g.line=t,g.column=i,g.source=n,!e.silent)throw g}function s(y){var g=y.exec(n);if(g){var S=g[0];return l(S),n=n.slice(S.length),g}}function o(){s(K2)}function f(y){var g;for(y=y||[];g=c();)g!==!1&&y.push(g);return y}function c(){var y=r();if(!(Fp!=n.charAt(0)||Zp!=n.charAt(1))){for(var g=2;hi!=n.charAt(g)&&(Zp!=n.charAt(g)||Fp!=n.charAt(g+1));)++g;if(g+=2,hi===n.charAt(g-1))return u("End of comment missing");var S=n.slice(2,g-2);return i+=2,l(S),n=n.slice(g),i+=2,y({type:P2,comment:S})}}function d(){var y=r(),g=s(G2);if(g){if(c(),!s($2))return u("property missing ':'");var S=s(Q2),p=y({type:J2,property:Pp(g[0].replace(Xp,hi)),value:S?Pp(S[0].replace(Xp,hi)):hi});return s(X2),p}}function h(){var y=[];f(y);for(var g;g=d();)g!==!1&&(y.push(g),f(y));return y}return o(),h()};function Pp(n){return n?n.replace(F2,hi):hi}var nE=bu&&bu.__importDefault||function(n){return n&&n.__esModule?n:{default:n}};Object.defineProperty(Mh,"__esModule",{value:!0});Mh.default=tE;var eE=nE(W2);function tE(n,e){var t=null;if(!n||typeof n!="string")return t;var i=(0,eE.default)(n),l=typeof e=="function";return i.forEach(function(r){if(r.type==="declaration"){var a=r.property,u=r.value;l?e(a,u,r):u&&(t=t||{},t[a]=u)}}),t}var Us={};Object.defineProperty(Us,"__esModule",{value:!0});Us.camelCase=void 0;var iE=/^--[a-zA-Z0-9_-]+$/,lE=/-([a-z])/g,rE=/^[^-]+$/,aE=/^-(webkit|moz|ms|o|khtml)-/,uE=/^-(ms)-/,sE=function(n){return!n||rE.test(n)||iE.test(n)},oE=function(n,e){return e.toUpperCase()},Jp=function(n,e){return"".concat(e,"-")},cE=function(n,e){return e===void 0&&(e={}),sE(n)?n:(n=n.toLowerCase(),e.reactCompat?n=n.replace(uE,Jp):n=n.replace(aE,Jp),n.replace(lE,oE))};Us.camelCase=cE;var fE=bu&&bu.__importDefault||function(n){return n&&n.__esModule?n:{default:n}},hE=fE(Mh),dE=Us;function lf(n,e){var t={};return!n||typeof n!="string"||(0,hE.default)(n,function(i,l){i&&l&&(t[(0,dE.camelCase)(i,e)]=l)}),t}lf.default=lf;var pE=lf;const mE=df(pE),nb=eb("end"),Lh=eb("start");function eb(n){return e;function e(t){const i=t&&t.position&&t.position[n]||{};if(typeof i.line=="number"&&i.line>0&&typeof i.column=="number"&&i.column>0)return{line:i.line,column:i.column,offset:typeof i.offset=="number"&&i.offset>-1?i.offset:void 0}}}function gE(n){const e=Lh(n),t=nb(n);if(e&&t)return{start:e,end:t}}function Rr(n){return!n||typeof n!="object"?"":"position"in n||"type"in n?Wp(n.position):"start"in n||"end"in n?Wp(n):"line"in n||"column"in n?rf(n):""}function rf(n){return nm(n&&n.line)+":"+nm(n&&n.column)}function Wp(n){return rf(n&&n.start)+"-"+rf(n&&n.end)}function nm(n){return n&&typeof n=="number"?n:1}class Fn extends Error{constructor(e,t,i){super(),typeof t=="string"&&(i=t,t=void 0);let l="",r={},a=!1;if(t&&("line"in t&&"column"in t?r={place:t}:"start"in t&&"end"in t?r={place:t}:"type"in t?r={ancestors:[t],place:t.position}:r={...t}),typeof e=="string"?l=e:!r.cause&&e&&(a=!0,l=e.message,r.cause=e),!r.ruleId&&!r.source&&typeof i=="string"){const s=i.indexOf(":");s===-1?r.ruleId=i:(r.source=i.slice(0,s),r.ruleId=i.slice(s+1))}if(!r.place&&r.ancestors&&r.ancestors){const s=r.ancestors[r.ancestors.length-1];s&&(r.place=s.position)}const u=r.place&&"start"in r.place?r.place.start:r.place;this.ancestors=r.ancestors||void 0,this.cause=r.cause||void 0,this.column=u?u.column:void 0,this.fatal=void 0,this.file="",this.message=l,this.line=u?u.line:void 0,this.name=Rr(r.place)||"1:1",this.place=r.place||void 0,this.reason=this.message,this.ruleId=r.ruleId||void 0,this.source=r.source||void 0,this.stack=a&&r.cause&&typeof r.cause.stack=="string"?r.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}Fn.prototype.file="";Fn.prototype.name="";Fn.prototype.reason="";Fn.prototype.message="";Fn.prototype.stack="";Fn.prototype.column=void 0;Fn.prototype.line=void 0;Fn.prototype.ancestors=void 0;Fn.prototype.cause=void 0;Fn.prototype.fatal=void 0;Fn.prototype.place=void 0;Fn.prototype.ruleId=void 0;Fn.prototype.source=void 0;const Rh={}.hasOwnProperty,yE=new Map,bE=/[A-Z]/g,SE=new Set(["table","tbody","thead","tfoot","tr"]),vE=new Set(["td","th"]),tb="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function wE(n,e){if(!e||e.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const t=e.filePath||void 0;let i;if(e.development){if(typeof e.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");i=_E(t,e.jsxDEV)}else{if(typeof e.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof e.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");i=CE(t,e.jsx,e.jsxs)}const l={Fragment:e.Fragment,ancestors:[],components:e.components||{},create:i,elementAttributeNameCase:e.elementAttributeNameCase||"react",evaluater:e.createEvaluater?e.createEvaluater():void 0,filePath:t,ignoreInvalidStyle:e.ignoreInvalidStyle||!1,passKeys:e.passKeys!==!1,passNode:e.passNode||!1,schema:e.space==="svg"?zh:I2,stylePropertyNameCase:e.stylePropertyNameCase||"dom",tableCellAlignToStyle:e.tableCellAlignToStyle!==!1},r=ib(l,n,void 0);return r&&typeof r!="string"?r:l.create(n,l.Fragment,{children:r||void 0},void 0)}function ib(n,e,t){if(e.type==="element")return kE(n,e,t);if(e.type==="mdxFlowExpression"||e.type==="mdxTextExpression")return xE(n,e);if(e.type==="mdxJsxFlowElement"||e.type==="mdxJsxTextElement")return TE(n,e,t);if(e.type==="mdxjsEsm")return EE(n,e);if(e.type==="root")return AE(n,e,t);if(e.type==="text")return OE(n,e)}function kE(n,e,t){const i=n.schema;let l=i;e.tagName.toLowerCase()==="svg"&&i.space==="html"&&(l=zh,n.schema=l),n.ancestors.push(e);const r=rb(n,e.tagName,!1),a=NE(n,e);let u=jh(n,e);return SE.has(e.tagName)&&(u=u.filter(function(s){return typeof s=="string"?!D2(s):!0})),lb(n,a,r,e),Bh(a,u),n.ancestors.pop(),n.schema=i,n.create(e,r,a,t)}function xE(n,e){if(e.data&&e.data.estree&&n.evaluater){const i=e.data.estree.body[0];return i.type,n.evaluater.evaluateExpression(i.expression)}ia(n,e.position)}function EE(n,e){if(e.data&&e.data.estree&&n.evaluater)return n.evaluater.evaluateProgram(e.data.estree);ia(n,e.position)}function TE(n,e,t){const i=n.schema;let l=i;e.name==="svg"&&i.space==="html"&&(l=zh,n.schema=l),n.ancestors.push(e);const r=e.name===null?n.Fragment:rb(n,e.name,!0),a=DE(n,e),u=jh(n,e);return lb(n,a,r,e),Bh(a,u),n.ancestors.pop(),n.schema=i,n.create(e,r,a,t)}function AE(n,e,t){const i={};return Bh(i,jh(n,e)),n.create(e,n.Fragment,i,t)}function OE(n,e){return e.value}function lb(n,e,t,i){typeof t!="string"&&t!==n.Fragment&&n.passNode&&(e.node=i)}function Bh(n,e){if(e.length>0){const t=e.length>1?e:e[0];t&&(n.children=t)}}function CE(n,e,t){return i;function i(l,r,a,u){const o=Array.isArray(a.children)?t:e;return u?o(r,a,u):o(r,a)}}function _E(n,e){return t;function t(i,l,r,a){const u=Array.isArray(r.children),s=Lh(i);return e(l,r,a,u,{columnNumber:s?s.column-1:void 0,fileName:n,lineNumber:s?s.line:void 0},void 0)}}function NE(n,e){const t={};let i,l;for(l in e.properties)if(l!=="children"&&Rh.call(e.properties,l)){const r=zE(n,l,e.properties[l]);if(r){const[a,u]=r;n.tableCellAlignToStyle&&a==="align"&&typeof u=="string"&&vE.has(e.tagName)?i=u:t[a]=u}}if(i){const r=t.style||(t.style={});r[n.stylePropertyNameCase==="css"?"text-align":"textAlign"]=i}return t}function DE(n,e){const t={};for(const i of e.attributes)if(i.type==="mdxJsxExpressionAttribute")if(i.data&&i.data.estree&&n.evaluater){const r=i.data.estree.body[0];r.type;const a=r.expression;a.type;const u=a.properties[0];u.type,Object.assign(t,n.evaluater.evaluateExpression(u.argument))}else ia(n,e.position);else{const l=i.name;let r;if(i.value&&typeof i.value=="object")if(i.value.data&&i.value.data.estree&&n.evaluater){const u=i.value.data.estree.body[0];u.type,r=n.evaluater.evaluateExpression(u.expression)}else ia(n,e.position);else r=i.value===null?!0:i.value;t[l]=r}return t}function jh(n,e){const t=[];let i=-1;const l=n.passKeys?new Map:yE;for(;++i<e.children.length;){const r=e.children[i];let a;if(n.passKeys){const s=r.type==="element"?r.tagName:r.type==="mdxJsxFlowElement"||r.type==="mdxJsxTextElement"?r.name:void 0;if(s){const o=l.get(s)||0;a=s+"-"+o,l.set(s,o+1)}}const u=ib(n,r,a);u!==void 0&&t.push(u)}return t}function zE(n,e,t){const i=U2(n.schema,e);if(!(t==null||typeof t=="number"&&Number.isNaN(t))){if(Array.isArray(t)&&(t=i.commaSeparated?A2(t):Y2(t)),i.property==="style"){let l=typeof t=="object"?t:ME(n,String(t));return n.stylePropertyNameCase==="css"&&(l=LE(l)),["style",l]}return[n.elementAttributeNameCase==="react"&&i.space?R2[i.property]||i.property:i.attribute,t]}}function ME(n,e){try{return mE(e,{reactCompat:!0})}catch(t){if(n.ignoreInvalidStyle)return{};const i=t,l=new Fn("Cannot parse `style` attribute",{ancestors:n.ancestors,cause:i,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw l.file=n.filePath||void 0,l.url=tb+"#cannot-parse-style-attribute",l}}function rb(n,e,t){let i;if(!t)i={type:"Literal",value:e};else if(e.includes(".")){const l=e.split(".");let r=-1,a;for(;++r<l.length;){const u=Kp(l[r])?{type:"Identifier",name:l[r]}:{type:"Literal",value:l[r]};a=a?{type:"MemberExpression",object:a,property:u,computed:!!(r&&u.type==="Literal"),optional:!1}:u}i=a}else i=Kp(e)&&!/^[a-z]/.test(e)?{type:"Identifier",name:e}:{type:"Literal",value:e};if(i.type==="Literal"){const l=i.value;return Rh.call(n.components,l)?n.components[l]:l}if(n.evaluater)return n.evaluater.evaluateExpression(i);ia(n)}function ia(n,e){const t=new Fn("Cannot handle MDX estrees without `createEvaluater`",{ancestors:n.ancestors,place:e,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw t.file=n.filePath||void 0,t.url=tb+"#cannot-handle-mdx-estrees-without-createevaluater",t}function LE(n){const e={};let t;for(t in n)Rh.call(n,t)&&(e[RE(t)]=n[t]);return e}function RE(n){let e=n.replace(bE,BE);return e.slice(0,3)==="ms-"&&(e="-"+e),e}function BE(n){return"-"+n.toLowerCase()}const Ro={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},jE={};function Uh(n,e){const t=jE,i=typeof t.includeImageAlt=="boolean"?t.includeImageAlt:!0,l=typeof t.includeHtml=="boolean"?t.includeHtml:!0;return ab(n,i,l)}function ab(n,e,t){if(UE(n)){if("value"in n)return n.type==="html"&&!t?"":n.value;if(e&&"alt"in n&&n.alt)return n.alt;if("children"in n)return em(n.children,e,t)}return Array.isArray(n)?em(n,e,t):""}function em(n,e,t){const i=[];let l=-1;for(;++l<n.length;)i[l]=ab(n[l],e,t);return i.join("")}function UE(n){return!!(n&&typeof n=="object")}const tm=document.createElement("i");function qh(n){const e="&"+n+";";tm.innerHTML=e;const t=tm.textContent;return t.charCodeAt(t.length-1)===59&&n!=="semi"||t===e?!1:t}function we(n,e,t,i){const l=n.length;let r=0,a;if(e<0?e=-e>l?0:l+e:e=e>l?l:e,t=t>0?t:0,i.length<1e4)a=Array.from(i),a.unshift(e,t),n.splice(...a);else for(t&&n.splice(e,t);r<i.length;)a=i.slice(r,r+1e4),a.unshift(e,0),n.splice(...a),r+=1e4,e+=1e4}function Ce(n,e){return n.length>0?(we(n,n.length,0,e),n):e}const im={}.hasOwnProperty;function ub(n){const e={};let t=-1;for(;++t<n.length;)qE(e,n[t]);return e}function qE(n,e){let t;for(t in e){const l=(im.call(n,t)?n[t]:void 0)||(n[t]={}),r=e[t];let a;if(r)for(a in r){im.call(l,a)||(l[a]=[]);const u=r[a];HE(l[a],Array.isArray(u)?u:u?[u]:[])}}}function HE(n,e){let t=-1;const i=[];for(;++t<e.length;)(e[t].add==="after"?n:i).push(e[t]);we(n,0,0,i)}function sb(n,e){const t=Number.parseInt(n,e);return t<9||t===11||t>13&&t<32||t>126&&t<160||t>55295&&t<57344||t>64975&&t<65008||(t&65535)===65535||(t&65535)===65534||t>1114111?"�":String.fromCodePoint(t)}function He(n){return n.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const Jn=li(/[A-Za-z]/),Qn=li(/[\dA-Za-z]/),IE=li(/[#-'*+\--9=?A-Z^-~]/);function es(n){return n!==null&&(n<32||n===127)}const af=li(/\d/),YE=li(/[\dA-Fa-f]/),VE=li(/[!-/:-@[-`{-~]/);function q(n){return n!==null&&n<-2}function fn(n){return n!==null&&(n<0||n===32)}function Z(n){return n===-2||n===-1||n===32}const qs=li(new RegExp("\\p{P}|\\p{S}","u")),Ci=li(/\s/);function li(n){return e;function e(t){return t!==null&&t>-1&&n.test(String.fromCharCode(t))}}function Jl(n){const e=[];let t=-1,i=0,l=0;for(;++t<n.length;){const r=n.charCodeAt(t);let a="";if(r===37&&Qn(n.charCodeAt(t+1))&&Qn(n.charCodeAt(t+2)))l=2;else if(r<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(r))||(a=String.fromCharCode(r));else if(r>55295&&r<57344){const u=n.charCodeAt(t+1);r<56320&&u>56319&&u<57344?(a=String.fromCharCode(r,u),l=1):a="�"}else a=String.fromCharCode(r);a&&(e.push(n.slice(i,t),encodeURIComponent(a)),i=t+l+1,a=""),l&&(t+=l,l=0)}return e.join("")+n.slice(i)}function W(n,e,t,i){const l=i?i-1:Number.POSITIVE_INFINITY;let r=0;return a;function a(s){return Z(s)?(n.enter(t),u(s)):e(s)}function u(s){return Z(s)&&r++<l?(n.consume(s),u):(n.exit(t),e(s))}}const KE={tokenize:GE};function GE(n){const e=n.attempt(this.parser.constructs.contentInitial,i,l);let t;return e;function i(u){if(u===null){n.consume(u);return}return n.enter("lineEnding"),n.consume(u),n.exit("lineEnding"),W(n,e,"linePrefix")}function l(u){return n.enter("paragraph"),r(u)}function r(u){const s=n.enter("chunkText",{contentType:"text",previous:t});return t&&(t.next=s),t=s,a(u)}function a(u){if(u===null){n.exit("chunkText"),n.exit("paragraph"),n.consume(u);return}return q(u)?(n.consume(u),n.exit("chunkText"),r):(n.consume(u),a)}}const $E={tokenize:QE},lm={tokenize:XE};function QE(n){const e=this,t=[];let i=0,l,r,a;return u;function u(b){if(i<t.length){const v=t[i];return e.containerState=v[1],n.attempt(v[0].continuation,s,o)(b)}return o(b)}function s(b){if(i++,e.containerState._closeFlow){e.containerState._closeFlow=void 0,l&&m();const v=e.events.length;let T=v,x;for(;T--;)if(e.events[T][0]==="exit"&&e.events[T][1].type==="chunkFlow"){x=e.events[T][1].end;break}p(i);let O=v;for(;O<e.events.length;)e.events[O][1].end={...x},O++;return we(e.events,T+1,0,e.events.slice(v)),e.events.length=O,o(b)}return u(b)}function o(b){if(i===t.length){if(!l)return d(b);if(l.currentConstruct&&l.currentConstruct.concrete)return y(b);e.interrupt=!!(l.currentConstruct&&!l._gfmTableDynamicInterruptHack)}return e.containerState={},n.check(lm,f,c)(b)}function f(b){return l&&m(),p(i),d(b)}function c(b){return e.parser.lazy[e.now().line]=i!==t.length,a=e.now().offset,y(b)}function d(b){return e.containerState={},n.attempt(lm,h,y)(b)}function h(b){return i++,t.push([e.currentConstruct,e.containerState]),d(b)}function y(b){if(b===null){l&&m(),p(0),n.consume(b);return}return l=l||e.parser.flow(e.now()),n.enter("chunkFlow",{_tokenizer:l,contentType:"flow",previous:r}),g(b)}function g(b){if(b===null){S(n.exit("chunkFlow"),!0),p(0),n.consume(b);return}return q(b)?(n.consume(b),S(n.exit("chunkFlow")),i=0,e.interrupt=void 0,u):(n.consume(b),g)}function S(b,v){const T=e.sliceStream(b);if(v&&T.push(null),b.previous=r,r&&(r.next=b),r=b,l.defineSkip(b.start),l.write(T),e.parser.lazy[b.start.line]){let x=l.events.length;for(;x--;)if(l.events[x][1].start.offset<a&&(!l.events[x][1].end||l.events[x][1].end.offset>a))return;const O=e.events.length;let A=O,j,E;for(;A--;)if(e.events[A][0]==="exit"&&e.events[A][1].type==="chunkFlow"){if(j){E=e.events[A][1].end;break}j=!0}for(p(i),x=O;x<e.events.length;)e.events[x][1].end={...E},x++;we(e.events,A+1,0,e.events.slice(O)),e.events.length=x}}function p(b){let v=t.length;for(;v-- >b;){const T=t[v];e.containerState=T[1],T[0].exit.call(e,n)}t.length=b}function m(){l.write([null]),r=void 0,l=void 0,e.containerState._closeFlow=void 0}}function XE(n,e,t){return W(n,n.attempt(this.parser.constructs.document,e,t),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function Bl(n){if(n===null||fn(n)||Ci(n))return 1;if(qs(n))return 2}function Hs(n,e,t){const i=[];let l=-1;for(;++l<n.length;){const r=n[l].resolveAll;r&&!i.includes(r)&&(e=r(e,t),i.push(r))}return e}const uf={name:"attention",resolveAll:FE,tokenize:ZE};function FE(n,e){let t=-1,i,l,r,a,u,s,o,f;for(;++t<n.length;)if(n[t][0]==="enter"&&n[t][1].type==="attentionSequence"&&n[t][1]._close){for(i=t;i--;)if(n[i][0]==="exit"&&n[i][1].type==="attentionSequence"&&n[i][1]._open&&e.sliceSerialize(n[i][1]).charCodeAt(0)===e.sliceSerialize(n[t][1]).charCodeAt(0)){if((n[i][1]._close||n[t][1]._open)&&(n[t][1].end.offset-n[t][1].start.offset)%3&&!((n[i][1].end.offset-n[i][1].start.offset+n[t][1].end.offset-n[t][1].start.offset)%3))continue;s=n[i][1].end.offset-n[i][1].start.offset>1&&n[t][1].end.offset-n[t][1].start.offset>1?2:1;const c={...n[i][1].end},d={...n[t][1].start};rm(c,-s),rm(d,s),a={type:s>1?"strongSequence":"emphasisSequence",start:c,end:{...n[i][1].end}},u={type:s>1?"strongSequence":"emphasisSequence",start:{...n[t][1].start},end:d},r={type:s>1?"strongText":"emphasisText",start:{...n[i][1].end},end:{...n[t][1].start}},l={type:s>1?"strong":"emphasis",start:{...a.start},end:{...u.end}},n[i][1].end={...a.start},n[t][1].start={...u.end},o=[],n[i][1].end.offset-n[i][1].start.offset&&(o=Ce(o,[["enter",n[i][1],e],["exit",n[i][1],e]])),o=Ce(o,[["enter",l,e],["enter",a,e],["exit",a,e],["enter",r,e]]),o=Ce(o,Hs(e.parser.constructs.insideSpan.null,n.slice(i+1,t),e)),o=Ce(o,[["exit",r,e],["enter",u,e],["exit",u,e],["exit",l,e]]),n[t][1].end.offset-n[t][1].start.offset?(f=2,o=Ce(o,[["enter",n[t][1],e],["exit",n[t][1],e]])):f=0,we(n,i-1,t-i+3,o),t=i+o.length-f-2;break}}for(t=-1;++t<n.length;)n[t][1].type==="attentionSequence"&&(n[t][1].type="data");return n}function ZE(n,e){const t=this.parser.constructs.attentionMarkers.null,i=this.previous,l=Bl(i);let r;return a;function a(s){return r=s,n.enter("attentionSequence"),u(s)}function u(s){if(s===r)return n.consume(s),u;const o=n.exit("attentionSequence"),f=Bl(s),c=!f||f===2&&l||t.includes(s),d=!l||l===2&&f||t.includes(i);return o._open=!!(r===42?c:c&&(l||!d)),o._close=!!(r===42?d:d&&(f||!c)),e(s)}}function rm(n,e){n.column+=e,n.offset+=e,n._bufferIndex+=e}const PE={name:"autolink",tokenize:JE};function JE(n,e,t){let i=0;return l;function l(h){return n.enter("autolink"),n.enter("autolinkMarker"),n.consume(h),n.exit("autolinkMarker"),n.enter("autolinkProtocol"),r}function r(h){return Jn(h)?(n.consume(h),a):h===64?t(h):o(h)}function a(h){return h===43||h===45||h===46||Qn(h)?(i=1,u(h)):o(h)}function u(h){return h===58?(n.consume(h),i=0,s):(h===43||h===45||h===46||Qn(h))&&i++<32?(n.consume(h),u):(i=0,o(h))}function s(h){return h===62?(n.exit("autolinkProtocol"),n.enter("autolinkMarker"),n.consume(h),n.exit("autolinkMarker"),n.exit("autolink"),e):h===null||h===32||h===60||es(h)?t(h):(n.consume(h),s)}function o(h){return h===64?(n.consume(h),f):IE(h)?(n.consume(h),o):t(h)}function f(h){return Qn(h)?c(h):t(h)}function c(h){return h===46?(n.consume(h),i=0,f):h===62?(n.exit("autolinkProtocol").type="autolinkEmail",n.enter("autolinkMarker"),n.consume(h),n.exit("autolinkMarker"),n.exit("autolink"),e):d(h)}function d(h){if((h===45||Qn(h))&&i++<63){const y=h===45?d:c;return n.consume(h),y}return t(h)}}const Aa={partial:!0,tokenize:WE};function WE(n,e,t){return i;function i(r){return Z(r)?W(n,l,"linePrefix")(r):l(r)}function l(r){return r===null||q(r)?e(r):t(r)}}const ob={continuation:{tokenize:eT},exit:tT,name:"blockQuote",tokenize:nT};function nT(n,e,t){const i=this;return l;function l(a){if(a===62){const u=i.containerState;return u.open||(n.enter("blockQuote",{_container:!0}),u.open=!0),n.enter("blockQuotePrefix"),n.enter("blockQuoteMarker"),n.consume(a),n.exit("blockQuoteMarker"),r}return t(a)}function r(a){return Z(a)?(n.enter("blockQuotePrefixWhitespace"),n.consume(a),n.exit("blockQuotePrefixWhitespace"),n.exit("blockQuotePrefix"),e):(n.exit("blockQuotePrefix"),e(a))}}function eT(n,e,t){const i=this;return l;function l(a){return Z(a)?W(n,r,"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a):r(a)}function r(a){return n.attempt(ob,e,t)(a)}}function tT(n){n.exit("blockQuote")}const cb={name:"characterEscape",tokenize:iT};function iT(n,e,t){return i;function i(r){return n.enter("characterEscape"),n.enter("escapeMarker"),n.consume(r),n.exit("escapeMarker"),l}function l(r){return VE(r)?(n.enter("characterEscapeValue"),n.consume(r),n.exit("characterEscapeValue"),n.exit("characterEscape"),e):t(r)}}const fb={name:"characterReference",tokenize:lT};function lT(n,e,t){const i=this;let l=0,r,a;return u;function u(c){return n.enter("characterReference"),n.enter("characterReferenceMarker"),n.consume(c),n.exit("characterReferenceMarker"),s}function s(c){return c===35?(n.enter("characterReferenceMarkerNumeric"),n.consume(c),n.exit("characterReferenceMarkerNumeric"),o):(n.enter("characterReferenceValue"),r=31,a=Qn,f(c))}function o(c){return c===88||c===120?(n.enter("characterReferenceMarkerHexadecimal"),n.consume(c),n.exit("characterReferenceMarkerHexadecimal"),n.enter("characterReferenceValue"),r=6,a=YE,f):(n.enter("characterReferenceValue"),r=7,a=af,f(c))}function f(c){if(c===59&&l){const d=n.exit("characterReferenceValue");return a===Qn&&!qh(i.sliceSerialize(d))?t(c):(n.enter("characterReferenceMarker"),n.consume(c),n.exit("characterReferenceMarker"),n.exit("characterReference"),e)}return a(c)&&l++<r?(n.consume(c),f):t(c)}}const am={partial:!0,tokenize:aT},um={concrete:!0,name:"codeFenced",tokenize:rT};function rT(n,e,t){const i=this,l={partial:!0,tokenize:T};let r=0,a=0,u;return s;function s(x){return o(x)}function o(x){const O=i.events[i.events.length-1];return r=O&&O[1].type==="linePrefix"?O[2].sliceSerialize(O[1],!0).length:0,u=x,n.enter("codeFenced"),n.enter("codeFencedFence"),n.enter("codeFencedFenceSequence"),f(x)}function f(x){return x===u?(a++,n.consume(x),f):a<3?t(x):(n.exit("codeFencedFenceSequence"),Z(x)?W(n,c,"whitespace")(x):c(x))}function c(x){return x===null||q(x)?(n.exit("codeFencedFence"),i.interrupt?e(x):n.check(am,g,v)(x)):(n.enter("codeFencedFenceInfo"),n.enter("chunkString",{contentType:"string"}),d(x))}function d(x){return x===null||q(x)?(n.exit("chunkString"),n.exit("codeFencedFenceInfo"),c(x)):Z(x)?(n.exit("chunkString"),n.exit("codeFencedFenceInfo"),W(n,h,"whitespace")(x)):x===96&&x===u?t(x):(n.consume(x),d)}function h(x){return x===null||q(x)?c(x):(n.enter("codeFencedFenceMeta"),n.enter("chunkString",{contentType:"string"}),y(x))}function y(x){return x===null||q(x)?(n.exit("chunkString"),n.exit("codeFencedFenceMeta"),c(x)):x===96&&x===u?t(x):(n.consume(x),y)}function g(x){return n.attempt(l,v,S)(x)}function S(x){return n.enter("lineEnding"),n.consume(x),n.exit("lineEnding"),p}function p(x){return r>0&&Z(x)?W(n,m,"linePrefix",r+1)(x):m(x)}function m(x){return x===null||q(x)?n.check(am,g,v)(x):(n.enter("codeFlowValue"),b(x))}function b(x){return x===null||q(x)?(n.exit("codeFlowValue"),m(x)):(n.consume(x),b)}function v(x){return n.exit("codeFenced"),e(x)}function T(x,O,A){let j=0;return E;function E(Q){return x.enter("lineEnding"),x.consume(Q),x.exit("lineEnding"),B}function B(Q){return x.enter("codeFencedFence"),Z(Q)?W(x,D,"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(Q):D(Q)}function D(Q){return Q===u?(x.enter("codeFencedFenceSequence"),nn(Q)):A(Q)}function nn(Q){return Q===u?(j++,x.consume(Q),nn):j>=a?(x.exit("codeFencedFenceSequence"),Z(Q)?W(x,mn,"whitespace")(Q):mn(Q)):A(Q)}function mn(Q){return Q===null||q(Q)?(x.exit("codeFencedFence"),O(Q)):A(Q)}}}function aT(n,e,t){const i=this;return l;function l(a){return a===null?t(a):(n.enter("lineEnding"),n.consume(a),n.exit("lineEnding"),r)}function r(a){return i.parser.lazy[i.now().line]?t(a):e(a)}}const Bo={name:"codeIndented",tokenize:sT},uT={partial:!0,tokenize:oT};function sT(n,e,t){const i=this;return l;function l(o){return n.enter("codeIndented"),W(n,r,"linePrefix",5)(o)}function r(o){const f=i.events[i.events.length-1];return f&&f[1].type==="linePrefix"&&f[2].sliceSerialize(f[1],!0).length>=4?a(o):t(o)}function a(o){return o===null?s(o):q(o)?n.attempt(uT,a,s)(o):(n.enter("codeFlowValue"),u(o))}function u(o){return o===null||q(o)?(n.exit("codeFlowValue"),a(o)):(n.consume(o),u)}function s(o){return n.exit("codeIndented"),e(o)}}function oT(n,e,t){const i=this;return l;function l(a){return i.parser.lazy[i.now().line]?t(a):q(a)?(n.enter("lineEnding"),n.consume(a),n.exit("lineEnding"),l):W(n,r,"linePrefix",5)(a)}function r(a){const u=i.events[i.events.length-1];return u&&u[1].type==="linePrefix"&&u[2].sliceSerialize(u[1],!0).length>=4?e(a):q(a)?l(a):t(a)}}const cT={name:"codeText",previous:hT,resolve:fT,tokenize:dT};function fT(n){let e=n.length-4,t=3,i,l;if((n[t][1].type==="lineEnding"||n[t][1].type==="space")&&(n[e][1].type==="lineEnding"||n[e][1].type==="space")){for(i=t;++i<e;)if(n[i][1].type==="codeTextData"){n[t][1].type="codeTextPadding",n[e][1].type="codeTextPadding",t+=2,e-=2;break}}for(i=t-1,e++;++i<=e;)l===void 0?i!==e&&n[i][1].type!=="lineEnding"&&(l=i):(i===e||n[i][1].type==="lineEnding")&&(n[l][1].type="codeTextData",i!==l+2&&(n[l][1].end=n[i-1][1].end,n.splice(l+2,i-l-2),e-=i-l-2,i=l+2),l=void 0);return n}function hT(n){return n!==96||this.events[this.events.length-1][1].type==="characterEscape"}function dT(n,e,t){let i=0,l,r;return a;function a(c){return n.enter("codeText"),n.enter("codeTextSequence"),u(c)}function u(c){return c===96?(n.consume(c),i++,u):(n.exit("codeTextSequence"),s(c))}function s(c){return c===null?t(c):c===32?(n.enter("space"),n.consume(c),n.exit("space"),s):c===96?(r=n.enter("codeTextSequence"),l=0,f(c)):q(c)?(n.enter("lineEnding"),n.consume(c),n.exit("lineEnding"),s):(n.enter("codeTextData"),o(c))}function o(c){return c===null||c===32||c===96||q(c)?(n.exit("codeTextData"),s(c)):(n.consume(c),o)}function f(c){return c===96?(n.consume(c),l++,f):l===i?(n.exit("codeTextSequence"),n.exit("codeText"),e(c)):(r.type="codeTextData",o(c))}}class pT{constructor(e){this.left=e?[...e]:[],this.right=[]}get(e){if(e<0||e>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+e+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return e<this.left.length?this.left[e]:this.right[this.right.length-e+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(e,t){const i=t??Number.POSITIVE_INFINITY;return i<this.left.length?this.left.slice(e,i):e>this.left.length?this.right.slice(this.right.length-i+this.left.length,this.right.length-e+this.left.length).reverse():this.left.slice(e).concat(this.right.slice(this.right.length-i+this.left.length).reverse())}splice(e,t,i){const l=t||0;this.setCursor(Math.trunc(e));const r=this.right.splice(this.right.length-l,Number.POSITIVE_INFINITY);return i&&fr(this.left,i),r.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(e){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(e)}pushMany(e){this.setCursor(Number.POSITIVE_INFINITY),fr(this.left,e)}unshift(e){this.setCursor(0),this.right.push(e)}unshiftMany(e){this.setCursor(0),fr(this.right,e.reverse())}setCursor(e){if(!(e===this.left.length||e>this.left.length&&this.right.length===0||e<0&&this.left.length===0))if(e<this.left.length){const t=this.left.splice(e,Number.POSITIVE_INFINITY);fr(this.right,t.reverse())}else{const t=this.right.splice(this.left.length+this.right.length-e,Number.POSITIVE_INFINITY);fr(this.left,t.reverse())}}}function fr(n,e){let t=0;if(e.length<1e4)n.push(...e);else for(;t<e.length;)n.push(...e.slice(t,t+1e4)),t+=1e4}function hb(n){const e={};let t=-1,i,l,r,a,u,s,o;const f=new pT(n);for(;++t<f.length;){for(;t in e;)t=e[t];if(i=f.get(t),t&&i[1].type==="chunkFlow"&&f.get(t-1)[1].type==="listItemPrefix"&&(s=i[1]._tokenizer.events,r=0,r<s.length&&s[r][1].type==="lineEndingBlank"&&(r+=2),r<s.length&&s[r][1].type==="content"))for(;++r<s.length&&s[r][1].type!=="content";)s[r][1].type==="chunkText"&&(s[r][1]._isInFirstContentOfListItem=!0,r++);if(i[0]==="enter")i[1].contentType&&(Object.assign(e,mT(f,t)),t=e[t],o=!0);else if(i[1]._container){for(r=t,l=void 0;r--;)if(a=f.get(r),a[1].type==="lineEnding"||a[1].type==="lineEndingBlank")a[0]==="enter"&&(l&&(f.get(l)[1].type="lineEndingBlank"),a[1].type="lineEnding",l=r);else if(!(a[1].type==="linePrefix"||a[1].type==="listItemIndent"))break;l&&(i[1].end={...f.get(l)[1].start},u=f.slice(l,t),u.unshift(i),f.splice(l,t-l+1,u))}}return we(n,0,Number.POSITIVE_INFINITY,f.slice(0)),!o}function mT(n,e){const t=n.get(e)[1],i=n.get(e)[2];let l=e-1;const r=[];let a=t._tokenizer;a||(a=i.parser[t.contentType](t.start),t._contentTypeTextTrailing&&(a._contentTypeTextTrailing=!0));const u=a.events,s=[],o={};let f,c,d=-1,h=t,y=0,g=0;const S=[g];for(;h;){for(;n.get(++l)[1]!==h;);r.push(l),h._tokenizer||(f=i.sliceStream(h),h.next||f.push(null),c&&a.defineSkip(h.start),h._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=!0),a.write(f),h._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=void 0)),c=h,h=h.next}for(h=t;++d<u.length;)u[d][0]==="exit"&&u[d-1][0]==="enter"&&u[d][1].type===u[d-1][1].type&&u[d][1].start.line!==u[d][1].end.line&&(g=d+1,S.push(g),h._tokenizer=void 0,h.previous=void 0,h=h.next);for(a.events=[],h?(h._tokenizer=void 0,h.previous=void 0):S.pop(),d=S.length;d--;){const p=u.slice(S[d],S[d+1]),m=r.pop();s.push([m,m+p.length-1]),n.splice(m,2,p)}for(s.reverse(),d=-1;++d<s.length;)o[y+s[d][0]]=y+s[d][1],y+=s[d][1]-s[d][0]-1;return o}const gT={resolve:bT,tokenize:ST},yT={partial:!0,tokenize:vT};function bT(n){return hb(n),n}function ST(n,e){let t;return i;function i(u){return n.enter("content"),t=n.enter("chunkContent",{contentType:"content"}),l(u)}function l(u){return u===null?r(u):q(u)?n.check(yT,a,r)(u):(n.consume(u),l)}function r(u){return n.exit("chunkContent"),n.exit("content"),e(u)}function a(u){return n.consume(u),n.exit("chunkContent"),t.next=n.enter("chunkContent",{contentType:"content",previous:t}),t=t.next,l}}function vT(n,e,t){const i=this;return l;function l(a){return n.exit("chunkContent"),n.enter("lineEnding"),n.consume(a),n.exit("lineEnding"),W(n,r,"linePrefix")}function r(a){if(a===null||q(a))return t(a);const u=i.events[i.events.length-1];return!i.parser.constructs.disable.null.includes("codeIndented")&&u&&u[1].type==="linePrefix"&&u[2].sliceSerialize(u[1],!0).length>=4?e(a):n.interrupt(i.parser.constructs.flow,t,e)(a)}}function db(n,e,t,i,l,r,a,u,s){const o=s||Number.POSITIVE_INFINITY;let f=0;return c;function c(p){return p===60?(n.enter(i),n.enter(l),n.enter(r),n.consume(p),n.exit(r),d):p===null||p===32||p===41||es(p)?t(p):(n.enter(i),n.enter(a),n.enter(u),n.enter("chunkString",{contentType:"string"}),g(p))}function d(p){return p===62?(n.enter(r),n.consume(p),n.exit(r),n.exit(l),n.exit(i),e):(n.enter(u),n.enter("chunkString",{contentType:"string"}),h(p))}function h(p){return p===62?(n.exit("chunkString"),n.exit(u),d(p)):p===null||p===60||q(p)?t(p):(n.consume(p),p===92?y:h)}function y(p){return p===60||p===62||p===92?(n.consume(p),h):h(p)}function g(p){return!f&&(p===null||p===41||fn(p))?(n.exit("chunkString"),n.exit(u),n.exit(a),n.exit(i),e(p)):f<o&&p===40?(n.consume(p),f++,g):p===41?(n.consume(p),f--,g):p===null||p===32||p===40||es(p)?t(p):(n.consume(p),p===92?S:g)}function S(p){return p===40||p===41||p===92?(n.consume(p),g):g(p)}}function pb(n,e,t,i,l,r){const a=this;let u=0,s;return o;function o(h){return n.enter(i),n.enter(l),n.consume(h),n.exit(l),n.enter(r),f}function f(h){return u>999||h===null||h===91||h===93&&!s||h===94&&!u&&"_hiddenFootnoteSupport"in a.parser.constructs?t(h):h===93?(n.exit(r),n.enter(l),n.consume(h),n.exit(l),n.exit(i),e):q(h)?(n.enter("lineEnding"),n.consume(h),n.exit("lineEnding"),f):(n.enter("chunkString",{contentType:"string"}),c(h))}function c(h){return h===null||h===91||h===93||q(h)||u++>999?(n.exit("chunkString"),f(h)):(n.consume(h),s||(s=!Z(h)),h===92?d:c)}function d(h){return h===91||h===92||h===93?(n.consume(h),u++,c):c(h)}}function mb(n,e,t,i,l,r){let a;return u;function u(d){return d===34||d===39||d===40?(n.enter(i),n.enter(l),n.consume(d),n.exit(l),a=d===40?41:d,s):t(d)}function s(d){return d===a?(n.enter(l),n.consume(d),n.exit(l),n.exit(i),e):(n.enter(r),o(d))}function o(d){return d===a?(n.exit(r),s(a)):d===null?t(d):q(d)?(n.enter("lineEnding"),n.consume(d),n.exit("lineEnding"),W(n,o,"linePrefix")):(n.enter("chunkString",{contentType:"string"}),f(d))}function f(d){return d===a||d===null||q(d)?(n.exit("chunkString"),o(d)):(n.consume(d),d===92?c:f)}function c(d){return d===a||d===92?(n.consume(d),f):f(d)}}function Br(n,e){let t;return i;function i(l){return q(l)?(n.enter("lineEnding"),n.consume(l),n.exit("lineEnding"),t=!0,i):Z(l)?W(n,i,t?"linePrefix":"lineSuffix")(l):e(l)}}const wT={name:"definition",tokenize:xT},kT={partial:!0,tokenize:ET};function xT(n,e,t){const i=this;let l;return r;function r(h){return n.enter("definition"),a(h)}function a(h){return pb.call(i,n,u,t,"definitionLabel","definitionLabelMarker","definitionLabelString")(h)}function u(h){return l=He(i.sliceSerialize(i.events[i.events.length-1][1]).slice(1,-1)),h===58?(n.enter("definitionMarker"),n.consume(h),n.exit("definitionMarker"),s):t(h)}function s(h){return fn(h)?Br(n,o)(h):o(h)}function o(h){return db(n,f,t,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(h)}function f(h){return n.attempt(kT,c,c)(h)}function c(h){return Z(h)?W(n,d,"whitespace")(h):d(h)}function d(h){return h===null||q(h)?(n.exit("definition"),i.parser.defined.push(l),e(h)):t(h)}}function ET(n,e,t){return i;function i(u){return fn(u)?Br(n,l)(u):t(u)}function l(u){return mb(n,r,t,"definitionTitle","definitionTitleMarker","definitionTitleString")(u)}function r(u){return Z(u)?W(n,a,"whitespace")(u):a(u)}function a(u){return u===null||q(u)?e(u):t(u)}}const TT={name:"hardBreakEscape",tokenize:AT};function AT(n,e,t){return i;function i(r){return n.enter("hardBreakEscape"),n.consume(r),l}function l(r){return q(r)?(n.exit("hardBreakEscape"),e(r)):t(r)}}const OT={name:"headingAtx",resolve:CT,tokenize:_T};function CT(n,e){let t=n.length-2,i=3,l,r;return n[i][1].type==="whitespace"&&(i+=2),t-2>i&&n[t][1].type==="whitespace"&&(t-=2),n[t][1].type==="atxHeadingSequence"&&(i===t-1||t-4>i&&n[t-2][1].type==="whitespace")&&(t-=i+1===t?2:4),t>i&&(l={type:"atxHeadingText",start:n[i][1].start,end:n[t][1].end},r={type:"chunkText",start:n[i][1].start,end:n[t][1].end,contentType:"text"},we(n,i,t-i+1,[["enter",l,e],["enter",r,e],["exit",r,e],["exit",l,e]])),n}function _T(n,e,t){let i=0;return l;function l(f){return n.enter("atxHeading"),r(f)}function r(f){return n.enter("atxHeadingSequence"),a(f)}function a(f){return f===35&&i++<6?(n.consume(f),a):f===null||fn(f)?(n.exit("atxHeadingSequence"),u(f)):t(f)}function u(f){return f===35?(n.enter("atxHeadingSequence"),s(f)):f===null||q(f)?(n.exit("atxHeading"),e(f)):Z(f)?W(n,u,"whitespace")(f):(n.enter("atxHeadingText"),o(f))}function s(f){return f===35?(n.consume(f),s):(n.exit("atxHeadingSequence"),u(f))}function o(f){return f===null||f===35||fn(f)?(n.exit("atxHeadingText"),u(f)):(n.consume(f),o)}}const NT=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],sm=["pre","script","style","textarea"],DT={concrete:!0,name:"htmlFlow",resolveTo:LT,tokenize:RT},zT={partial:!0,tokenize:jT},MT={partial:!0,tokenize:BT};function LT(n){let e=n.length;for(;e--&&!(n[e][0]==="enter"&&n[e][1].type==="htmlFlow"););return e>1&&n[e-2][1].type==="linePrefix"&&(n[e][1].start=n[e-2][1].start,n[e+1][1].start=n[e-2][1].start,n.splice(e-2,2)),n}function RT(n,e,t){const i=this;let l,r,a,u,s;return o;function o(k){return f(k)}function f(k){return n.enter("htmlFlow"),n.enter("htmlFlowData"),n.consume(k),c}function c(k){return k===33?(n.consume(k),d):k===47?(n.consume(k),r=!0,g):k===63?(n.consume(k),l=3,i.interrupt?e:w):Jn(k)?(n.consume(k),a=String.fromCharCode(k),S):t(k)}function d(k){return k===45?(n.consume(k),l=2,h):k===91?(n.consume(k),l=5,u=0,y):Jn(k)?(n.consume(k),l=4,i.interrupt?e:w):t(k)}function h(k){return k===45?(n.consume(k),i.interrupt?e:w):t(k)}function y(k){const zn="CDATA[";return k===zn.charCodeAt(u++)?(n.consume(k),u===zn.length?i.interrupt?e:D:y):t(k)}function g(k){return Jn(k)?(n.consume(k),a=String.fromCharCode(k),S):t(k)}function S(k){if(k===null||k===47||k===62||fn(k)){const zn=k===47,xe=a.toLowerCase();return!zn&&!r&&sm.includes(xe)?(l=1,i.interrupt?e(k):D(k)):NT.includes(a.toLowerCase())?(l=6,zn?(n.consume(k),p):i.interrupt?e(k):D(k)):(l=7,i.interrupt&&!i.parser.lazy[i.now().line]?t(k):r?m(k):b(k))}return k===45||Qn(k)?(n.consume(k),a+=String.fromCharCode(k),S):t(k)}function p(k){return k===62?(n.consume(k),i.interrupt?e:D):t(k)}function m(k){return Z(k)?(n.consume(k),m):E(k)}function b(k){return k===47?(n.consume(k),E):k===58||k===95||Jn(k)?(n.consume(k),v):Z(k)?(n.consume(k),b):E(k)}function v(k){return k===45||k===46||k===58||k===95||Qn(k)?(n.consume(k),v):T(k)}function T(k){return k===61?(n.consume(k),x):Z(k)?(n.consume(k),T):b(k)}function x(k){return k===null||k===60||k===61||k===62||k===96?t(k):k===34||k===39?(n.consume(k),s=k,O):Z(k)?(n.consume(k),x):A(k)}function O(k){return k===s?(n.consume(k),s=null,j):k===null||q(k)?t(k):(n.consume(k),O)}function A(k){return k===null||k===34||k===39||k===47||k===60||k===61||k===62||k===96||fn(k)?T(k):(n.consume(k),A)}function j(k){return k===47||k===62||Z(k)?b(k):t(k)}function E(k){return k===62?(n.consume(k),B):t(k)}function B(k){return k===null||q(k)?D(k):Z(k)?(n.consume(k),B):t(k)}function D(k){return k===45&&l===2?(n.consume(k),z):k===60&&l===1?(n.consume(k),U):k===62&&l===4?(n.consume(k),Kn):k===63&&l===3?(n.consume(k),w):k===93&&l===5?(n.consume(k),en):q(k)&&(l===6||l===7)?(n.exit("htmlFlowData"),n.check(zT,ee,nn)(k)):k===null||q(k)?(n.exit("htmlFlowData"),nn(k)):(n.consume(k),D)}function nn(k){return n.check(MT,mn,ee)(k)}function mn(k){return n.enter("lineEnding"),n.consume(k),n.exit("lineEnding"),Q}function Q(k){return k===null||q(k)?nn(k):(n.enter("htmlFlowData"),D(k))}function z(k){return k===45?(n.consume(k),w):D(k)}function U(k){return k===47?(n.consume(k),a="",H):D(k)}function H(k){if(k===62){const zn=a.toLowerCase();return sm.includes(zn)?(n.consume(k),Kn):D(k)}return Jn(k)&&a.length<8?(n.consume(k),a+=String.fromCharCode(k),H):D(k)}function en(k){return k===93?(n.consume(k),w):D(k)}function w(k){return k===62?(n.consume(k),Kn):k===45&&l===2?(n.consume(k),w):D(k)}function Kn(k){return k===null||q(k)?(n.exit("htmlFlowData"),ee(k)):(n.consume(k),Kn)}function ee(k){return n.exit("htmlFlow"),e(k)}}function BT(n,e,t){const i=this;return l;function l(a){return q(a)?(n.enter("lineEnding"),n.consume(a),n.exit("lineEnding"),r):t(a)}function r(a){return i.parser.lazy[i.now().line]?t(a):e(a)}}function jT(n,e,t){return i;function i(l){return n.enter("lineEnding"),n.consume(l),n.exit("lineEnding"),n.attempt(Aa,e,t)}}const UT={name:"htmlText",tokenize:qT};function qT(n,e,t){const i=this;let l,r,a;return u;function u(w){return n.enter("htmlText"),n.enter("htmlTextData"),n.consume(w),s}function s(w){return w===33?(n.consume(w),o):w===47?(n.consume(w),T):w===63?(n.consume(w),b):Jn(w)?(n.consume(w),A):t(w)}function o(w){return w===45?(n.consume(w),f):w===91?(n.consume(w),r=0,y):Jn(w)?(n.consume(w),m):t(w)}function f(w){return w===45?(n.consume(w),h):t(w)}function c(w){return w===null?t(w):w===45?(n.consume(w),d):q(w)?(a=c,U(w)):(n.consume(w),c)}function d(w){return w===45?(n.consume(w),h):c(w)}function h(w){return w===62?z(w):w===45?d(w):c(w)}function y(w){const Kn="CDATA[";return w===Kn.charCodeAt(r++)?(n.consume(w),r===Kn.length?g:y):t(w)}function g(w){return w===null?t(w):w===93?(n.consume(w),S):q(w)?(a=g,U(w)):(n.consume(w),g)}function S(w){return w===93?(n.consume(w),p):g(w)}function p(w){return w===62?z(w):w===93?(n.consume(w),p):g(w)}function m(w){return w===null||w===62?z(w):q(w)?(a=m,U(w)):(n.consume(w),m)}function b(w){return w===null?t(w):w===63?(n.consume(w),v):q(w)?(a=b,U(w)):(n.consume(w),b)}function v(w){return w===62?z(w):b(w)}function T(w){return Jn(w)?(n.consume(w),x):t(w)}function x(w){return w===45||Qn(w)?(n.consume(w),x):O(w)}function O(w){return q(w)?(a=O,U(w)):Z(w)?(n.consume(w),O):z(w)}function A(w){return w===45||Qn(w)?(n.consume(w),A):w===47||w===62||fn(w)?j(w):t(w)}function j(w){return w===47?(n.consume(w),z):w===58||w===95||Jn(w)?(n.consume(w),E):q(w)?(a=j,U(w)):Z(w)?(n.consume(w),j):z(w)}function E(w){return w===45||w===46||w===58||w===95||Qn(w)?(n.consume(w),E):B(w)}function B(w){return w===61?(n.consume(w),D):q(w)?(a=B,U(w)):Z(w)?(n.consume(w),B):j(w)}function D(w){return w===null||w===60||w===61||w===62||w===96?t(w):w===34||w===39?(n.consume(w),l=w,nn):q(w)?(a=D,U(w)):Z(w)?(n.consume(w),D):(n.consume(w),mn)}function nn(w){return w===l?(n.consume(w),l=void 0,Q):w===null?t(w):q(w)?(a=nn,U(w)):(n.consume(w),nn)}function mn(w){return w===null||w===34||w===39||w===60||w===61||w===96?t(w):w===47||w===62||fn(w)?j(w):(n.consume(w),mn)}function Q(w){return w===47||w===62||fn(w)?j(w):t(w)}function z(w){return w===62?(n.consume(w),n.exit("htmlTextData"),n.exit("htmlText"),e):t(w)}function U(w){return n.exit("htmlTextData"),n.enter("lineEnding"),n.consume(w),n.exit("lineEnding"),H}function H(w){return Z(w)?W(n,en,"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(w):en(w)}function en(w){return n.enter("htmlTextData"),a(w)}}const Hh={name:"labelEnd",resolveAll:VT,resolveTo:KT,tokenize:GT},HT={tokenize:$T},IT={tokenize:QT},YT={tokenize:XT};function VT(n){let e=-1;const t=[];for(;++e<n.length;){const i=n[e][1];if(t.push(n[e]),i.type==="labelImage"||i.type==="labelLink"||i.type==="labelEnd"){const l=i.type==="labelImage"?4:2;i.type="data",e+=l}}return n.length!==t.length&&we(n,0,n.length,t),n}function KT(n,e){let t=n.length,i=0,l,r,a,u;for(;t--;)if(l=n[t][1],r){if(l.type==="link"||l.type==="labelLink"&&l._inactive)break;n[t][0]==="enter"&&l.type==="labelLink"&&(l._inactive=!0)}else if(a){if(n[t][0]==="enter"&&(l.type==="labelImage"||l.type==="labelLink")&&!l._balanced&&(r=t,l.type!=="labelLink")){i=2;break}}else l.type==="labelEnd"&&(a=t);const s={type:n[r][1].type==="labelLink"?"link":"image",start:{...n[r][1].start},end:{...n[n.length-1][1].end}},o={type:"label",start:{...n[r][1].start},end:{...n[a][1].end}},f={type:"labelText",start:{...n[r+i+2][1].end},end:{...n[a-2][1].start}};return u=[["enter",s,e],["enter",o,e]],u=Ce(u,n.slice(r+1,r+i+3)),u=Ce(u,[["enter",f,e]]),u=Ce(u,Hs(e.parser.constructs.insideSpan.null,n.slice(r+i+4,a-3),e)),u=Ce(u,[["exit",f,e],n[a-2],n[a-1],["exit",o,e]]),u=Ce(u,n.slice(a+1)),u=Ce(u,[["exit",s,e]]),we(n,r,n.length,u),n}function GT(n,e,t){const i=this;let l=i.events.length,r,a;for(;l--;)if((i.events[l][1].type==="labelImage"||i.events[l][1].type==="labelLink")&&!i.events[l][1]._balanced){r=i.events[l][1];break}return u;function u(d){return r?r._inactive?c(d):(a=i.parser.defined.includes(He(i.sliceSerialize({start:r.end,end:i.now()}))),n.enter("labelEnd"),n.enter("labelMarker"),n.consume(d),n.exit("labelMarker"),n.exit("labelEnd"),s):t(d)}function s(d){return d===40?n.attempt(HT,f,a?f:c)(d):d===91?n.attempt(IT,f,a?o:c)(d):a?f(d):c(d)}function o(d){return n.attempt(YT,f,c)(d)}function f(d){return e(d)}function c(d){return r._balanced=!0,t(d)}}function $T(n,e,t){return i;function i(c){return n.enter("resource"),n.enter("resourceMarker"),n.consume(c),n.exit("resourceMarker"),l}function l(c){return fn(c)?Br(n,r)(c):r(c)}function r(c){return c===41?f(c):db(n,a,u,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(c)}function a(c){return fn(c)?Br(n,s)(c):f(c)}function u(c){return t(c)}function s(c){return c===34||c===39||c===40?mb(n,o,t,"resourceTitle","resourceTitleMarker","resourceTitleString")(c):f(c)}function o(c){return fn(c)?Br(n,f)(c):f(c)}function f(c){return c===41?(n.enter("resourceMarker"),n.consume(c),n.exit("resourceMarker"),n.exit("resource"),e):t(c)}}function QT(n,e,t){const i=this;return l;function l(u){return pb.call(i,n,r,a,"reference","referenceMarker","referenceString")(u)}function r(u){return i.parser.defined.includes(He(i.sliceSerialize(i.events[i.events.length-1][1]).slice(1,-1)))?e(u):t(u)}function a(u){return t(u)}}function XT(n,e,t){return i;function i(r){return n.enter("reference"),n.enter("referenceMarker"),n.consume(r),n.exit("referenceMarker"),l}function l(r){return r===93?(n.enter("referenceMarker"),n.consume(r),n.exit("referenceMarker"),n.exit("reference"),e):t(r)}}const FT={name:"labelStartImage",resolveAll:Hh.resolveAll,tokenize:ZT};function ZT(n,e,t){const i=this;return l;function l(u){return n.enter("labelImage"),n.enter("labelImageMarker"),n.consume(u),n.exit("labelImageMarker"),r}function r(u){return u===91?(n.enter("labelMarker"),n.consume(u),n.exit("labelMarker"),n.exit("labelImage"),a):t(u)}function a(u){return u===94&&"_hiddenFootnoteSupport"in i.parser.constructs?t(u):e(u)}}const PT={name:"labelStartLink",resolveAll:Hh.resolveAll,tokenize:JT};function JT(n,e,t){const i=this;return l;function l(a){return n.enter("labelLink"),n.enter("labelMarker"),n.consume(a),n.exit("labelMarker"),n.exit("labelLink"),r}function r(a){return a===94&&"_hiddenFootnoteSupport"in i.parser.constructs?t(a):e(a)}}const jo={name:"lineEnding",tokenize:WT};function WT(n,e){return t;function t(i){return n.enter("lineEnding"),n.consume(i),n.exit("lineEnding"),W(n,e,"linePrefix")}}const gu={name:"thematicBreak",tokenize:nA};function nA(n,e,t){let i=0,l;return r;function r(o){return n.enter("thematicBreak"),a(o)}function a(o){return l=o,u(o)}function u(o){return o===l?(n.enter("thematicBreakSequence"),s(o)):i>=3&&(o===null||q(o))?(n.exit("thematicBreak"),e(o)):t(o)}function s(o){return o===l?(n.consume(o),i++,s):(n.exit("thematicBreakSequence"),Z(o)?W(n,u,"whitespace")(o):u(o))}}const te={continuation:{tokenize:lA},exit:aA,name:"list",tokenize:iA},eA={partial:!0,tokenize:uA},tA={partial:!0,tokenize:rA};function iA(n,e,t){const i=this,l=i.events[i.events.length-1];let r=l&&l[1].type==="linePrefix"?l[2].sliceSerialize(l[1],!0).length:0,a=0;return u;function u(h){const y=i.containerState.type||(h===42||h===43||h===45?"listUnordered":"listOrdered");if(y==="listUnordered"?!i.containerState.marker||h===i.containerState.marker:af(h)){if(i.containerState.type||(i.containerState.type=y,n.enter(y,{_container:!0})),y==="listUnordered")return n.enter("listItemPrefix"),h===42||h===45?n.check(gu,t,o)(h):o(h);if(!i.interrupt||h===49)return n.enter("listItemPrefix"),n.enter("listItemValue"),s(h)}return t(h)}function s(h){return af(h)&&++a<10?(n.consume(h),s):(!i.interrupt||a<2)&&(i.containerState.marker?h===i.containerState.marker:h===41||h===46)?(n.exit("listItemValue"),o(h)):t(h)}function o(h){return n.enter("listItemMarker"),n.consume(h),n.exit("listItemMarker"),i.containerState.marker=i.containerState.marker||h,n.check(Aa,i.interrupt?t:f,n.attempt(eA,d,c))}function f(h){return i.containerState.initialBlankLine=!0,r++,d(h)}function c(h){return Z(h)?(n.enter("listItemPrefixWhitespace"),n.consume(h),n.exit("listItemPrefixWhitespace"),d):t(h)}function d(h){return i.containerState.size=r+i.sliceSerialize(n.exit("listItemPrefix"),!0).length,e(h)}}function lA(n,e,t){const i=this;return i.containerState._closeFlow=void 0,n.check(Aa,l,r);function l(u){return i.containerState.furtherBlankLines=i.containerState.furtherBlankLines||i.containerState.initialBlankLine,W(n,e,"listItemIndent",i.containerState.size+1)(u)}function r(u){return i.containerState.furtherBlankLines||!Z(u)?(i.containerState.furtherBlankLines=void 0,i.containerState.initialBlankLine=void 0,a(u)):(i.containerState.furtherBlankLines=void 0,i.containerState.initialBlankLine=void 0,n.attempt(tA,e,a)(u))}function a(u){return i.containerState._closeFlow=!0,i.interrupt=void 0,W(n,n.attempt(te,e,t),"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(u)}}function rA(n,e,t){const i=this;return W(n,l,"listItemIndent",i.containerState.size+1);function l(r){const a=i.events[i.events.length-1];return a&&a[1].type==="listItemIndent"&&a[2].sliceSerialize(a[1],!0).length===i.containerState.size?e(r):t(r)}}function aA(n){n.exit(this.containerState.type)}function uA(n,e,t){const i=this;return W(n,l,"listItemPrefixWhitespace",i.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function l(r){const a=i.events[i.events.length-1];return!Z(r)&&a&&a[1].type==="listItemPrefixWhitespace"?e(r):t(r)}}const om={name:"setextUnderline",resolveTo:sA,tokenize:oA};function sA(n,e){let t=n.length,i,l,r;for(;t--;)if(n[t][0]==="enter"){if(n[t][1].type==="content"){i=t;break}n[t][1].type==="paragraph"&&(l=t)}else n[t][1].type==="content"&&n.splice(t,1),!r&&n[t][1].type==="definition"&&(r=t);const a={type:"setextHeading",start:{...n[i][1].start},end:{...n[n.length-1][1].end}};return n[l][1].type="setextHeadingText",r?(n.splice(l,0,["enter",a,e]),n.splice(r+1,0,["exit",n[i][1],e]),n[i][1].end={...n[r][1].end}):n[i][1]=a,n.push(["exit",a,e]),n}function oA(n,e,t){const i=this;let l;return r;function r(o){let f=i.events.length,c;for(;f--;)if(i.events[f][1].type!=="lineEnding"&&i.events[f][1].type!=="linePrefix"&&i.events[f][1].type!=="content"){c=i.events[f][1].type==="paragraph";break}return!i.parser.lazy[i.now().line]&&(i.interrupt||c)?(n.enter("setextHeadingLine"),l=o,a(o)):t(o)}function a(o){return n.enter("setextHeadingLineSequence"),u(o)}function u(o){return o===l?(n.consume(o),u):(n.exit("setextHeadingLineSequence"),Z(o)?W(n,s,"lineSuffix")(o):s(o))}function s(o){return o===null||q(o)?(n.exit("setextHeadingLine"),e(o)):t(o)}}const cA={tokenize:fA};function fA(n){const e=this,t=n.attempt(Aa,i,n.attempt(this.parser.constructs.flowInitial,l,W(n,n.attempt(this.parser.constructs.flow,l,n.attempt(gT,l)),"linePrefix")));return t;function i(r){if(r===null){n.consume(r);return}return n.enter("lineEndingBlank"),n.consume(r),n.exit("lineEndingBlank"),e.currentConstruct=void 0,t}function l(r){if(r===null){n.consume(r);return}return n.enter("lineEnding"),n.consume(r),n.exit("lineEnding"),e.currentConstruct=void 0,t}}const hA={resolveAll:yb()},dA=gb("string"),pA=gb("text");function gb(n){return{resolveAll:yb(n==="text"?mA:void 0),tokenize:e};function e(t){const i=this,l=this.parser.constructs[n],r=t.attempt(l,a,u);return a;function a(f){return o(f)?r(f):u(f)}function u(f){if(f===null){t.consume(f);return}return t.enter("data"),t.consume(f),s}function s(f){return o(f)?(t.exit("data"),r(f)):(t.consume(f),s)}function o(f){if(f===null)return!0;const c=l[f];let d=-1;if(c)for(;++d<c.length;){const h=c[d];if(!h.previous||h.previous.call(i,i.previous))return!0}return!1}}}function yb(n){return e;function e(t,i){let l=-1,r;for(;++l<=t.length;)r===void 0?t[l]&&t[l][1].type==="data"&&(r=l,l++):(!t[l]||t[l][1].type!=="data")&&(l!==r+2&&(t[r][1].end=t[l-1][1].end,t.splice(r+2,l-r-2),l=r+2),r=void 0);return n?n(t,i):t}}function mA(n,e){let t=0;for(;++t<=n.length;)if((t===n.length||n[t][1].type==="lineEnding")&&n[t-1][1].type==="data"){const i=n[t-1][1],l=e.sliceStream(i);let r=l.length,a=-1,u=0,s;for(;r--;){const o=l[r];if(typeof o=="string"){for(a=o.length;o.charCodeAt(a-1)===32;)u++,a--;if(a)break;a=-1}else if(o===-2)s=!0,u++;else if(o!==-1){r++;break}}if(e._contentTypeTextTrailing&&t===n.length&&(u=0),u){const o={type:t===n.length||s||u<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:r?a:i.start._bufferIndex+a,_index:i.start._index+r,line:i.end.line,column:i.end.column-u,offset:i.end.offset-u},end:{...i.end}};i.end={...o.start},i.start.offset===i.end.offset?Object.assign(i,o):(n.splice(t,0,["enter",o,e],["exit",o,e]),t+=2)}t++}return n}const gA={42:te,43:te,45:te,48:te,49:te,50:te,51:te,52:te,53:te,54:te,55:te,56:te,57:te,62:ob},yA={91:wT},bA={[-2]:Bo,[-1]:Bo,32:Bo},SA={35:OT,42:gu,45:[om,gu],60:DT,61:om,95:gu,96:um,126:um},vA={38:fb,92:cb},wA={[-5]:jo,[-4]:jo,[-3]:jo,33:FT,38:fb,42:uf,60:[PE,UT],91:PT,92:[TT,cb],93:Hh,95:uf,96:cT},kA={null:[uf,hA]},xA={null:[42,95]},EA={null:[]},TA=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:xA,contentInitial:yA,disable:EA,document:gA,flow:SA,flowInitial:bA,insideSpan:kA,string:vA,text:wA},Symbol.toStringTag,{value:"Module"}));function AA(n,e,t){let i={_bufferIndex:-1,_index:0,line:t&&t.line||1,column:t&&t.column||1,offset:t&&t.offset||0};const l={},r=[];let a=[],u=[];const s={attempt:O(T),check:O(x),consume:m,enter:b,exit:v,interrupt:O(x,{interrupt:!0})},o={code:null,containerState:{},defineSkip:g,events:[],now:y,parser:n,previous:null,sliceSerialize:d,sliceStream:h,write:c};let f=e.tokenize.call(o,s);return e.resolveAll&&r.push(e),o;function c(B){return a=Ce(a,B),S(),a[a.length-1]!==null?[]:(A(e,0),o.events=Hs(r,o.events,o),o.events)}function d(B,D){return CA(h(B),D)}function h(B){return OA(a,B)}function y(){const{_bufferIndex:B,_index:D,line:nn,column:mn,offset:Q}=i;return{_bufferIndex:B,_index:D,line:nn,column:mn,offset:Q}}function g(B){l[B.line]=B.column,E()}function S(){let B;for(;i._index<a.length;){const D=a[i._index];if(typeof D=="string")for(B=i._index,i._bufferIndex<0&&(i._bufferIndex=0);i._index===B&&i._bufferIndex<D.length;)p(D.charCodeAt(i._bufferIndex));else p(D)}}function p(B){f=f(B)}function m(B){q(B)?(i.line++,i.column=1,i.offset+=B===-3?2:1,E()):B!==-1&&(i.column++,i.offset++),i._bufferIndex<0?i._index++:(i._bufferIndex++,i._bufferIndex===a[i._index].length&&(i._bufferIndex=-1,i._index++)),o.previous=B}function b(B,D){const nn=D||{};return nn.type=B,nn.start=y(),o.events.push(["enter",nn,o]),u.push(nn),nn}function v(B){const D=u.pop();return D.end=y(),o.events.push(["exit",D,o]),D}function T(B,D){A(B,D.from)}function x(B,D){D.restore()}function O(B,D){return nn;function nn(mn,Q,z){let U,H,en,w;return Array.isArray(mn)?ee(mn):"tokenize"in mn?ee([mn]):Kn(mn);function Kn(Hn){return Wl;function Wl(kt){const ji=kt!==null&&Hn[kt],Ui=kt!==null&&Hn.null,Ca=[...Array.isArray(ji)?ji:ji?[ji]:[],...Array.isArray(Ui)?Ui:Ui?[Ui]:[]];return ee(Ca)(kt)}}function ee(Hn){return U=Hn,H=0,Hn.length===0?z:k(Hn[H])}function k(Hn){return Wl;function Wl(kt){return w=j(),en=Hn,Hn.partial||(o.currentConstruct=Hn),Hn.name&&o.parser.constructs.disable.null.includes(Hn.name)?xe():Hn.tokenize.call(D?Object.assign(Object.create(o),D):o,s,zn,xe)(kt)}}function zn(Hn){return B(en,w),Q}function xe(Hn){return w.restore(),++H<U.length?k(U[H]):z}}}function A(B,D){B.resolveAll&&!r.includes(B)&&r.push(B),B.resolve&&we(o.events,D,o.events.length-D,B.resolve(o.events.slice(D),o)),B.resolveTo&&(o.events=B.resolveTo(o.events,o))}function j(){const B=y(),D=o.previous,nn=o.currentConstruct,mn=o.events.length,Q=Array.from(u);return{from:mn,restore:z};function z(){i=B,o.previous=D,o.currentConstruct=nn,o.events.length=mn,u=Q,E()}}function E(){i.line in l&&i.column<2&&(i.column=l[i.line],i.offset+=l[i.line]-1)}}function OA(n,e){const t=e.start._index,i=e.start._bufferIndex,l=e.end._index,r=e.end._bufferIndex;let a;if(t===l)a=[n[t].slice(i,r)];else{if(a=n.slice(t,l),i>-1){const u=a[0];typeof u=="string"?a[0]=u.slice(i):a.shift()}r>0&&a.push(n[l].slice(0,r))}return a}function CA(n,e){let t=-1;const i=[];let l;for(;++t<n.length;){const r=n[t];let a;if(typeof r=="string")a=r;else switch(r){case-5:{a="\r";break}case-4:{a=`
`;break}case-3:{a=`\r
`;break}case-2:{a=e?" ":"	";break}case-1:{if(!e&&l)continue;a=" ";break}default:a=String.fromCharCode(r)}l=r===-2,i.push(a)}return i.join("")}function _A(n){const i={constructs:ub([TA,...(n||{}).extensions||[]]),content:l(KE),defined:[],document:l($E),flow:l(cA),lazy:{},string:l(dA),text:l(pA)};return i;function l(r){return a;function a(u){return AA(i,r,u)}}}function NA(n){for(;!hb(n););return n}const cm=/[\0\t\n\r]/g;function DA(){let n=1,e="",t=!0,i;return l;function l(r,a,u){const s=[];let o,f,c,d,h;for(r=e+(typeof r=="string"?r.toString():new TextDecoder(a||void 0).decode(r)),c=0,e="",t&&(r.charCodeAt(0)===65279&&c++,t=void 0);c<r.length;){if(cm.lastIndex=c,o=cm.exec(r),d=o&&o.index!==void 0?o.index:r.length,h=r.charCodeAt(d),!o){e=r.slice(c);break}if(h===10&&c===d&&i)s.push(-3),i=void 0;else switch(i&&(s.push(-5),i=void 0),c<d&&(s.push(r.slice(c,d)),n+=d-c),h){case 0:{s.push(65533),n++;break}case 9:{for(f=Math.ceil(n/4)*4,s.push(-2);n++<f;)s.push(-1);break}case 10:{s.push(-4),n=1;break}default:i=!0,n=1}c=d+1}return u&&(i&&s.push(-5),e&&s.push(e),s.push(null)),s}}const zA=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function MA(n){return n.replace(zA,LA)}function LA(n,e,t){if(e)return e;if(t.charCodeAt(0)===35){const l=t.charCodeAt(1),r=l===120||l===88;return sb(t.slice(r?2:1),r?16:10)}return qh(t)||n}const bb={}.hasOwnProperty;function RA(n,e,t){return typeof e!="string"&&(t=e,e=void 0),BA(t)(NA(_A(t).document().write(DA()(n,e,!0))))}function BA(n){const e={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:r(Wh),autolinkProtocol:j,autolinkEmail:j,atxHeading:r(Zh),blockQuote:r(Ui),characterEscape:j,characterReference:j,codeFenced:r(Ca),codeFencedFenceInfo:a,codeFencedFenceMeta:a,codeIndented:r(Ca,a),codeText:r(Jb,a),codeTextData:j,data:j,codeFlowValue:j,definition:r(Wb),definitionDestinationString:a,definitionLabelString:a,definitionTitleString:a,emphasis:r(nS),hardBreakEscape:r(Ph),hardBreakTrailing:r(Ph),htmlFlow:r(Jh,a),htmlFlowData:j,htmlText:r(Jh,a),htmlTextData:j,image:r(eS),label:a,link:r(Wh),listItem:r(tS),listItemValue:d,listOrdered:r(nd,c),listUnordered:r(nd),paragraph:r(iS),reference:k,referenceString:a,resourceDestinationString:a,resourceTitleString:a,setextHeading:r(Zh),strong:r(lS),thematicBreak:r(aS)},exit:{atxHeading:s(),atxHeadingSequence:T,autolink:s(),autolinkEmail:ji,autolinkProtocol:kt,blockQuote:s(),characterEscapeValue:E,characterReferenceMarkerHexadecimal:xe,characterReferenceMarkerNumeric:xe,characterReferenceValue:Hn,characterReference:Wl,codeFenced:s(S),codeFencedFence:g,codeFencedFenceInfo:h,codeFencedFenceMeta:y,codeFlowValue:E,codeIndented:s(p),codeText:s(Q),codeTextData:E,data:E,definition:s(),definitionDestinationString:v,definitionLabelString:m,definitionTitleString:b,emphasis:s(),hardBreakEscape:s(D),hardBreakTrailing:s(D),htmlFlow:s(nn),htmlFlowData:E,htmlText:s(mn),htmlTextData:E,image:s(U),label:en,labelText:H,lineEnding:B,link:s(z),listItem:s(),listOrdered:s(),listUnordered:s(),paragraph:s(),referenceString:zn,resourceDestinationString:w,resourceTitleString:Kn,resource:ee,setextHeading:s(A),setextHeadingLineSequence:O,setextHeadingText:x,strong:s(),thematicBreak:s()}};Sb(e,(n||{}).mdastExtensions||[]);const t={};return i;function i(C){let M={type:"root",children:[]};const V={stack:[M],tokenStack:[],config:e,enter:u,exit:o,buffer:a,resume:f,data:t},P=[];let on=-1;for(;++on<C.length;)if(C[on][1].type==="listOrdered"||C[on][1].type==="listUnordered")if(C[on][0]==="enter")P.push(on);else{const Be=P.pop();on=l(C,Be,on)}for(on=-1;++on<C.length;){const Be=e[C[on][0]];bb.call(Be,C[on][1].type)&&Be[C[on][1].type].call(Object.assign({sliceSerialize:C[on][2].sliceSerialize},V),C[on][1])}if(V.tokenStack.length>0){const Be=V.tokenStack[V.tokenStack.length-1];(Be[1]||fm).call(V,void 0,Be[0])}for(M.position={start:Tt(C.length>0?C[0][1].start:{line:1,column:1,offset:0}),end:Tt(C.length>0?C[C.length-2][1].end:{line:1,column:1,offset:0})},on=-1;++on<e.transforms.length;)M=e.transforms[on](M)||M;return M}function l(C,M,V){let P=M-1,on=-1,Be=!1,ri,et,nr,er;for(;++P<=V;){const ce=C[P];switch(ce[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{ce[0]==="enter"?on++:on--,er=void 0;break}case"lineEndingBlank":{ce[0]==="enter"&&(ri&&!er&&!on&&!nr&&(nr=P),er=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:er=void 0}if(!on&&ce[0]==="enter"&&ce[1].type==="listItemPrefix"||on===-1&&ce[0]==="exit"&&(ce[1].type==="listUnordered"||ce[1].type==="listOrdered")){if(ri){let qi=P;for(et=void 0;qi--;){const tt=C[qi];if(tt[1].type==="lineEnding"||tt[1].type==="lineEndingBlank"){if(tt[0]==="exit")continue;et&&(C[et][1].type="lineEndingBlank",Be=!0),tt[1].type="lineEnding",et=qi}else if(!(tt[1].type==="linePrefix"||tt[1].type==="blockQuotePrefix"||tt[1].type==="blockQuotePrefixWhitespace"||tt[1].type==="blockQuoteMarker"||tt[1].type==="listItemIndent"))break}nr&&(!et||nr<et)&&(ri._spread=!0),ri.end=Object.assign({},et?C[et][1].start:ce[1].end),C.splice(et||P,0,["exit",ri,ce[2]]),P++,V++}if(ce[1].type==="listItemPrefix"){const qi={type:"listItem",_spread:!1,start:Object.assign({},ce[1].start),end:void 0};ri=qi,C.splice(P,0,["enter",qi,ce[2]]),P++,V++,nr=void 0,er=!0}}}return C[M][1]._spread=Be,V}function r(C,M){return V;function V(P){u.call(this,C(P),P),M&&M.call(this,P)}}function a(){this.stack.push({type:"fragment",children:[]})}function u(C,M,V){this.stack[this.stack.length-1].children.push(C),this.stack.push(C),this.tokenStack.push([M,V||void 0]),C.position={start:Tt(M.start),end:void 0}}function s(C){return M;function M(V){C&&C.call(this,V),o.call(this,V)}}function o(C,M){const V=this.stack.pop(),P=this.tokenStack.pop();if(P)P[0].type!==C.type&&(M?M.call(this,C,P[0]):(P[1]||fm).call(this,C,P[0]));else throw new Error("Cannot close `"+C.type+"` ("+Rr({start:C.start,end:C.end})+"): it’s not open");V.position.end=Tt(C.end)}function f(){return Uh(this.stack.pop())}function c(){this.data.expectingFirstListItemValue=!0}function d(C){if(this.data.expectingFirstListItemValue){const M=this.stack[this.stack.length-2];M.start=Number.parseInt(this.sliceSerialize(C),10),this.data.expectingFirstListItemValue=void 0}}function h(){const C=this.resume(),M=this.stack[this.stack.length-1];M.lang=C}function y(){const C=this.resume(),M=this.stack[this.stack.length-1];M.meta=C}function g(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function S(){const C=this.resume(),M=this.stack[this.stack.length-1];M.value=C.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function p(){const C=this.resume(),M=this.stack[this.stack.length-1];M.value=C.replace(/(\r?\n|\r)$/g,"")}function m(C){const M=this.resume(),V=this.stack[this.stack.length-1];V.label=M,V.identifier=He(this.sliceSerialize(C)).toLowerCase()}function b(){const C=this.resume(),M=this.stack[this.stack.length-1];M.title=C}function v(){const C=this.resume(),M=this.stack[this.stack.length-1];M.url=C}function T(C){const M=this.stack[this.stack.length-1];if(!M.depth){const V=this.sliceSerialize(C).length;M.depth=V}}function x(){this.data.setextHeadingSlurpLineEnding=!0}function O(C){const M=this.stack[this.stack.length-1];M.depth=this.sliceSerialize(C).codePointAt(0)===61?1:2}function A(){this.data.setextHeadingSlurpLineEnding=void 0}function j(C){const V=this.stack[this.stack.length-1].children;let P=V[V.length-1];(!P||P.type!=="text")&&(P=rS(),P.position={start:Tt(C.start),end:void 0},V.push(P)),this.stack.push(P)}function E(C){const M=this.stack.pop();M.value+=this.sliceSerialize(C),M.position.end=Tt(C.end)}function B(C){const M=this.stack[this.stack.length-1];if(this.data.atHardBreak){const V=M.children[M.children.length-1];V.position.end=Tt(C.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&e.canContainEols.includes(M.type)&&(j.call(this,C),E.call(this,C))}function D(){this.data.atHardBreak=!0}function nn(){const C=this.resume(),M=this.stack[this.stack.length-1];M.value=C}function mn(){const C=this.resume(),M=this.stack[this.stack.length-1];M.value=C}function Q(){const C=this.resume(),M=this.stack[this.stack.length-1];M.value=C}function z(){const C=this.stack[this.stack.length-1];if(this.data.inReference){const M=this.data.referenceType||"shortcut";C.type+="Reference",C.referenceType=M,delete C.url,delete C.title}else delete C.identifier,delete C.label;this.data.referenceType=void 0}function U(){const C=this.stack[this.stack.length-1];if(this.data.inReference){const M=this.data.referenceType||"shortcut";C.type+="Reference",C.referenceType=M,delete C.url,delete C.title}else delete C.identifier,delete C.label;this.data.referenceType=void 0}function H(C){const M=this.sliceSerialize(C),V=this.stack[this.stack.length-2];V.label=MA(M),V.identifier=He(M).toLowerCase()}function en(){const C=this.stack[this.stack.length-1],M=this.resume(),V=this.stack[this.stack.length-1];if(this.data.inReference=!0,V.type==="link"){const P=C.children;V.children=P}else V.alt=M}function w(){const C=this.resume(),M=this.stack[this.stack.length-1];M.url=C}function Kn(){const C=this.resume(),M=this.stack[this.stack.length-1];M.title=C}function ee(){this.data.inReference=void 0}function k(){this.data.referenceType="collapsed"}function zn(C){const M=this.resume(),V=this.stack[this.stack.length-1];V.label=M,V.identifier=He(this.sliceSerialize(C)).toLowerCase(),this.data.referenceType="full"}function xe(C){this.data.characterReferenceType=C.type}function Hn(C){const M=this.sliceSerialize(C),V=this.data.characterReferenceType;let P;V?(P=sb(M,V==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):P=qh(M);const on=this.stack[this.stack.length-1];on.value+=P}function Wl(C){const M=this.stack.pop();M.position.end=Tt(C.end)}function kt(C){E.call(this,C);const M=this.stack[this.stack.length-1];M.url=this.sliceSerialize(C)}function ji(C){E.call(this,C);const M=this.stack[this.stack.length-1];M.url="mailto:"+this.sliceSerialize(C)}function Ui(){return{type:"blockquote",children:[]}}function Ca(){return{type:"code",lang:null,meta:null,value:""}}function Jb(){return{type:"inlineCode",value:""}}function Wb(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function nS(){return{type:"emphasis",children:[]}}function Zh(){return{type:"heading",depth:0,children:[]}}function Ph(){return{type:"break"}}function Jh(){return{type:"html",value:""}}function eS(){return{type:"image",title:null,url:"",alt:null}}function Wh(){return{type:"link",title:null,url:"",children:[]}}function nd(C){return{type:"list",ordered:C.type==="listOrdered",start:null,spread:C._spread,children:[]}}function tS(C){return{type:"listItem",spread:C._spread,checked:null,children:[]}}function iS(){return{type:"paragraph",children:[]}}function lS(){return{type:"strong",children:[]}}function rS(){return{type:"text",value:""}}function aS(){return{type:"thematicBreak"}}}function Tt(n){return{line:n.line,column:n.column,offset:n.offset}}function Sb(n,e){let t=-1;for(;++t<e.length;){const i=e[t];Array.isArray(i)?Sb(n,i):jA(n,i)}}function jA(n,e){let t;for(t in e)if(bb.call(e,t))switch(t){case"canContainEols":{const i=e[t];i&&n[t].push(...i);break}case"transforms":{const i=e[t];i&&n[t].push(...i);break}case"enter":case"exit":{const i=e[t];i&&Object.assign(n[t],i);break}}}function fm(n,e){throw n?new Error("Cannot close `"+n.type+"` ("+Rr({start:n.start,end:n.end})+"): a different token (`"+e.type+"`, "+Rr({start:e.start,end:e.end})+") is open"):new Error("Cannot close document, a token (`"+e.type+"`, "+Rr({start:e.start,end:e.end})+") is still open")}function UA(n){const e=this;e.parser=t;function t(i){return RA(i,{...e.data("settings"),...n,extensions:e.data("micromarkExtensions")||[],mdastExtensions:e.data("fromMarkdownExtensions")||[]})}}function qA(n,e){const t={type:"element",tagName:"blockquote",properties:{},children:n.wrap(n.all(e),!0)};return n.patch(e,t),n.applyData(e,t)}function HA(n,e){const t={type:"element",tagName:"br",properties:{},children:[]};return n.patch(e,t),[n.applyData(e,t),{type:"text",value:`
`}]}function IA(n,e){const t=e.value?e.value+`
`:"",i={};e.lang&&(i.className=["language-"+e.lang]);let l={type:"element",tagName:"code",properties:i,children:[{type:"text",value:t}]};return e.meta&&(l.data={meta:e.meta}),n.patch(e,l),l=n.applyData(e,l),l={type:"element",tagName:"pre",properties:{},children:[l]},n.patch(e,l),l}function YA(n,e){const t={type:"element",tagName:"del",properties:{},children:n.all(e)};return n.patch(e,t),n.applyData(e,t)}function VA(n,e){const t={type:"element",tagName:"em",properties:{},children:n.all(e)};return n.patch(e,t),n.applyData(e,t)}function KA(n,e){const t=typeof n.options.clobberPrefix=="string"?n.options.clobberPrefix:"user-content-",i=String(e.identifier).toUpperCase(),l=Jl(i.toLowerCase()),r=n.footnoteOrder.indexOf(i);let a,u=n.footnoteCounts.get(i);u===void 0?(u=0,n.footnoteOrder.push(i),a=n.footnoteOrder.length):a=r+1,u+=1,n.footnoteCounts.set(i,u);const s={type:"element",tagName:"a",properties:{href:"#"+t+"fn-"+l,id:t+"fnref-"+l+(u>1?"-"+u:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(a)}]};n.patch(e,s);const o={type:"element",tagName:"sup",properties:{},children:[s]};return n.patch(e,o),n.applyData(e,o)}function GA(n,e){const t={type:"element",tagName:"h"+e.depth,properties:{},children:n.all(e)};return n.patch(e,t),n.applyData(e,t)}function $A(n,e){if(n.options.allowDangerousHtml){const t={type:"raw",value:e.value};return n.patch(e,t),n.applyData(e,t)}}function vb(n,e){const t=e.referenceType;let i="]";if(t==="collapsed"?i+="[]":t==="full"&&(i+="["+(e.label||e.identifier)+"]"),e.type==="imageReference")return[{type:"text",value:"!["+e.alt+i}];const l=n.all(e),r=l[0];r&&r.type==="text"?r.value="["+r.value:l.unshift({type:"text",value:"["});const a=l[l.length-1];return a&&a.type==="text"?a.value+=i:l.push({type:"text",value:i}),l}function QA(n,e){const t=String(e.identifier).toUpperCase(),i=n.definitionById.get(t);if(!i)return vb(n,e);const l={src:Jl(i.url||""),alt:e.alt};i.title!==null&&i.title!==void 0&&(l.title=i.title);const r={type:"element",tagName:"img",properties:l,children:[]};return n.patch(e,r),n.applyData(e,r)}function XA(n,e){const t={src:Jl(e.url)};e.alt!==null&&e.alt!==void 0&&(t.alt=e.alt),e.title!==null&&e.title!==void 0&&(t.title=e.title);const i={type:"element",tagName:"img",properties:t,children:[]};return n.patch(e,i),n.applyData(e,i)}function FA(n,e){const t={type:"text",value:e.value.replace(/\r?\n|\r/g," ")};n.patch(e,t);const i={type:"element",tagName:"code",properties:{},children:[t]};return n.patch(e,i),n.applyData(e,i)}function ZA(n,e){const t=String(e.identifier).toUpperCase(),i=n.definitionById.get(t);if(!i)return vb(n,e);const l={href:Jl(i.url||"")};i.title!==null&&i.title!==void 0&&(l.title=i.title);const r={type:"element",tagName:"a",properties:l,children:n.all(e)};return n.patch(e,r),n.applyData(e,r)}function PA(n,e){const t={href:Jl(e.url)};e.title!==null&&e.title!==void 0&&(t.title=e.title);const i={type:"element",tagName:"a",properties:t,children:n.all(e)};return n.patch(e,i),n.applyData(e,i)}function JA(n,e,t){const i=n.all(e),l=t?WA(t):wb(e),r={},a=[];if(typeof e.checked=="boolean"){const f=i[0];let c;f&&f.type==="element"&&f.tagName==="p"?c=f:(c={type:"element",tagName:"p",properties:{},children:[]},i.unshift(c)),c.children.length>0&&c.children.unshift({type:"text",value:" "}),c.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:e.checked,disabled:!0},children:[]}),r.className=["task-list-item"]}let u=-1;for(;++u<i.length;){const f=i[u];(l||u!==0||f.type!=="element"||f.tagName!=="p")&&a.push({type:"text",value:`
`}),f.type==="element"&&f.tagName==="p"&&!l?a.push(...f.children):a.push(f)}const s=i[i.length-1];s&&(l||s.type!=="element"||s.tagName!=="p")&&a.push({type:"text",value:`
`});const o={type:"element",tagName:"li",properties:r,children:a};return n.patch(e,o),n.applyData(e,o)}function WA(n){let e=!1;if(n.type==="list"){e=n.spread||!1;const t=n.children;let i=-1;for(;!e&&++i<t.length;)e=wb(t[i])}return e}function wb(n){const e=n.spread;return e??n.children.length>1}function nO(n,e){const t={},i=n.all(e);let l=-1;for(typeof e.start=="number"&&e.start!==1&&(t.start=e.start);++l<i.length;){const a=i[l];if(a.type==="element"&&a.tagName==="li"&&a.properties&&Array.isArray(a.properties.className)&&a.properties.className.includes("task-list-item")){t.className=["contains-task-list"];break}}const r={type:"element",tagName:e.ordered?"ol":"ul",properties:t,children:n.wrap(i,!0)};return n.patch(e,r),n.applyData(e,r)}function eO(n,e){const t={type:"element",tagName:"p",properties:{},children:n.all(e)};return n.patch(e,t),n.applyData(e,t)}function tO(n,e){const t={type:"root",children:n.wrap(n.all(e))};return n.patch(e,t),n.applyData(e,t)}function iO(n,e){const t={type:"element",tagName:"strong",properties:{},children:n.all(e)};return n.patch(e,t),n.applyData(e,t)}function lO(n,e){const t=n.all(e),i=t.shift(),l=[];if(i){const a={type:"element",tagName:"thead",properties:{},children:n.wrap([i],!0)};n.patch(e.children[0],a),l.push(a)}if(t.length>0){const a={type:"element",tagName:"tbody",properties:{},children:n.wrap(t,!0)},u=Lh(e.children[1]),s=nb(e.children[e.children.length-1]);u&&s&&(a.position={start:u,end:s}),l.push(a)}const r={type:"element",tagName:"table",properties:{},children:n.wrap(l,!0)};return n.patch(e,r),n.applyData(e,r)}function rO(n,e,t){const i=t?t.children:void 0,r=(i?i.indexOf(e):1)===0?"th":"td",a=t&&t.type==="table"?t.align:void 0,u=a?a.length:e.children.length;let s=-1;const o=[];for(;++s<u;){const c=e.children[s],d={},h=a?a[s]:void 0;h&&(d.align=h);let y={type:"element",tagName:r,properties:d,children:[]};c&&(y.children=n.all(c),n.patch(c,y),y=n.applyData(c,y)),o.push(y)}const f={type:"element",tagName:"tr",properties:{},children:n.wrap(o,!0)};return n.patch(e,f),n.applyData(e,f)}function aO(n,e){const t={type:"element",tagName:"td",properties:{},children:n.all(e)};return n.patch(e,t),n.applyData(e,t)}const hm=9,dm=32;function uO(n){const e=String(n),t=/\r?\n|\r/g;let i=t.exec(e),l=0;const r=[];for(;i;)r.push(pm(e.slice(l,i.index),l>0,!0),i[0]),l=i.index+i[0].length,i=t.exec(e);return r.push(pm(e.slice(l),l>0,!1)),r.join("")}function pm(n,e,t){let i=0,l=n.length;if(e){let r=n.codePointAt(i);for(;r===hm||r===dm;)i++,r=n.codePointAt(i)}if(t){let r=n.codePointAt(l-1);for(;r===hm||r===dm;)l--,r=n.codePointAt(l-1)}return l>i?n.slice(i,l):""}function sO(n,e){const t={type:"text",value:uO(String(e.value))};return n.patch(e,t),n.applyData(e,t)}function oO(n,e){const t={type:"element",tagName:"hr",properties:{},children:[]};return n.patch(e,t),n.applyData(e,t)}const cO={blockquote:qA,break:HA,code:IA,delete:YA,emphasis:VA,footnoteReference:KA,heading:GA,html:$A,imageReference:QA,image:XA,inlineCode:FA,linkReference:ZA,link:PA,listItem:JA,list:nO,paragraph:eO,root:tO,strong:iO,table:lO,tableCell:aO,tableRow:rO,text:sO,thematicBreak:oO,toml:Fa,yaml:Fa,definition:Fa,footnoteDefinition:Fa};function Fa(){}const kb=-1,Is=0,jr=1,ts=2,Ih=3,Yh=4,Vh=5,Kh=6,xb=7,Eb=8,mm=typeof self=="object"?self:globalThis,fO=(n,e)=>{const t=(l,r)=>(n.set(r,l),l),i=l=>{if(n.has(l))return n.get(l);const[r,a]=e[l];switch(r){case Is:case kb:return t(a,l);case jr:{const u=t([],l);for(const s of a)u.push(i(s));return u}case ts:{const u=t({},l);for(const[s,o]of a)u[i(s)]=i(o);return u}case Ih:return t(new Date(a),l);case Yh:{const{source:u,flags:s}=a;return t(new RegExp(u,s),l)}case Vh:{const u=t(new Map,l);for(const[s,o]of a)u.set(i(s),i(o));return u}case Kh:{const u=t(new Set,l);for(const s of a)u.add(i(s));return u}case xb:{const{name:u,message:s}=a;return t(new mm[u](s),l)}case Eb:return t(BigInt(a),l);case"BigInt":return t(Object(BigInt(a)),l);case"ArrayBuffer":return t(new Uint8Array(a).buffer,a);case"DataView":{const{buffer:u}=new Uint8Array(a);return t(new DataView(u),a)}}return t(new mm[r](a),l)};return i},gm=n=>fO(new Map,n)(0),Ki="",{toString:hO}={},{keys:dO}=Object,hr=n=>{const e=typeof n;if(e!=="object"||!n)return[Is,e];const t=hO.call(n).slice(8,-1);switch(t){case"Array":return[jr,Ki];case"Object":return[ts,Ki];case"Date":return[Ih,Ki];case"RegExp":return[Yh,Ki];case"Map":return[Vh,Ki];case"Set":return[Kh,Ki];case"DataView":return[jr,t]}return t.includes("Array")?[jr,t]:t.includes("Error")?[xb,t]:[ts,t]},Za=([n,e])=>n===Is&&(e==="function"||e==="symbol"),pO=(n,e,t,i)=>{const l=(a,u)=>{const s=i.push(a)-1;return t.set(u,s),s},r=a=>{if(t.has(a))return t.get(a);let[u,s]=hr(a);switch(u){case Is:{let f=a;switch(s){case"bigint":u=Eb,f=a.toString();break;case"function":case"symbol":if(n)throw new TypeError("unable to serialize "+s);f=null;break;case"undefined":return l([kb],a)}return l([u,f],a)}case jr:{if(s){let d=a;return s==="DataView"?d=new Uint8Array(a.buffer):s==="ArrayBuffer"&&(d=new Uint8Array(a)),l([s,[...d]],a)}const f=[],c=l([u,f],a);for(const d of a)f.push(r(d));return c}case ts:{if(s)switch(s){case"BigInt":return l([s,a.toString()],a);case"Boolean":case"Number":case"String":return l([s,a.valueOf()],a)}if(e&&"toJSON"in a)return r(a.toJSON());const f=[],c=l([u,f],a);for(const d of dO(a))(n||!Za(hr(a[d])))&&f.push([r(d),r(a[d])]);return c}case Ih:return l([u,a.toISOString()],a);case Yh:{const{source:f,flags:c}=a;return l([u,{source:f,flags:c}],a)}case Vh:{const f=[],c=l([u,f],a);for(const[d,h]of a)(n||!(Za(hr(d))||Za(hr(h))))&&f.push([r(d),r(h)]);return c}case Kh:{const f=[],c=l([u,f],a);for(const d of a)(n||!Za(hr(d)))&&f.push(r(d));return c}}const{message:o}=a;return l([u,{name:s,message:o}],a)};return r},ym=(n,{json:e,lossy:t}={})=>{const i=[];return pO(!(e||t),!!e,new Map,i)(n),i},is=typeof structuredClone=="function"?(n,e)=>e&&("json"in e||"lossy"in e)?gm(ym(n,e)):structuredClone(n):(n,e)=>gm(ym(n,e));function mO(n,e){const t=[{type:"text",value:"↩"}];return e>1&&t.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(e)}]}),t}function gO(n,e){return"Back to reference "+(n+1)+(e>1?"-"+e:"")}function yO(n){const e=typeof n.options.clobberPrefix=="string"?n.options.clobberPrefix:"user-content-",t=n.options.footnoteBackContent||mO,i=n.options.footnoteBackLabel||gO,l=n.options.footnoteLabel||"Footnotes",r=n.options.footnoteLabelTagName||"h2",a=n.options.footnoteLabelProperties||{className:["sr-only"]},u=[];let s=-1;for(;++s<n.footnoteOrder.length;){const o=n.footnoteById.get(n.footnoteOrder[s]);if(!o)continue;const f=n.all(o),c=String(o.identifier).toUpperCase(),d=Jl(c.toLowerCase());let h=0;const y=[],g=n.footnoteCounts.get(c);for(;g!==void 0&&++h<=g;){y.length>0&&y.push({type:"text",value:" "});let m=typeof t=="string"?t:t(s,h);typeof m=="string"&&(m={type:"text",value:m}),y.push({type:"element",tagName:"a",properties:{href:"#"+e+"fnref-"+d+(h>1?"-"+h:""),dataFootnoteBackref:"",ariaLabel:typeof i=="string"?i:i(s,h),className:["data-footnote-backref"]},children:Array.isArray(m)?m:[m]})}const S=f[f.length-1];if(S&&S.type==="element"&&S.tagName==="p"){const m=S.children[S.children.length-1];m&&m.type==="text"?m.value+=" ":S.children.push({type:"text",value:" "}),S.children.push(...y)}else f.push(...y);const p={type:"element",tagName:"li",properties:{id:e+"fn-"+d},children:n.wrap(f,!0)};n.patch(o,p),u.push(p)}if(u.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:r,properties:{...is(a),id:"footnote-label"},children:[{type:"text",value:l}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:n.wrap(u,!0)},{type:"text",value:`
`}]}}const Ys=function(n){if(n==null)return wO;if(typeof n=="function")return Vs(n);if(typeof n=="object")return Array.isArray(n)?bO(n):SO(n);if(typeof n=="string")return vO(n);throw new Error("Expected function, string, or object as test")};function bO(n){const e=[];let t=-1;for(;++t<n.length;)e[t]=Ys(n[t]);return Vs(i);function i(...l){let r=-1;for(;++r<e.length;)if(e[r].apply(this,l))return!0;return!1}}function SO(n){const e=n;return Vs(t);function t(i){const l=i;let r;for(r in n)if(l[r]!==e[r])return!1;return!0}}function vO(n){return Vs(e);function e(t){return t&&t.type===n}}function Vs(n){return e;function e(t,i,l){return!!(kO(t)&&n.call(this,t,typeof i=="number"?i:void 0,l||void 0))}}function wO(){return!0}function kO(n){return n!==null&&typeof n=="object"&&"type"in n}const Tb=[],xO=!0,sf=!1,EO="skip";function Ab(n,e,t,i){let l;typeof e=="function"&&typeof t!="function"?(i=t,t=e):l=e;const r=Ys(l),a=i?-1:1;u(n,void 0,[])();function u(s,o,f){const c=s&&typeof s=="object"?s:{};if(typeof c.type=="string"){const h=typeof c.tagName=="string"?c.tagName:typeof c.name=="string"?c.name:void 0;Object.defineProperty(d,"name",{value:"node ("+(s.type+(h?"<"+h+">":""))+")"})}return d;function d(){let h=Tb,y,g,S;if((!e||r(s,o,f[f.length-1]||void 0))&&(h=TO(t(s,f)),h[0]===sf))return h;if("children"in s&&s.children){const p=s;if(p.children&&h[0]!==EO)for(g=(i?p.children.length:-1)+a,S=f.concat(p);g>-1&&g<p.children.length;){const m=p.children[g];if(y=u(m,g,S)(),y[0]===sf)return y;g=typeof y[1]=="number"?y[1]:g+a}}return h}}}function TO(n){return Array.isArray(n)?n:typeof n=="number"?[xO,n]:n==null?Tb:[n]}function Gh(n,e,t,i){let l,r,a;typeof e=="function"&&typeof t!="function"?(r=void 0,a=e,l=t):(r=e,a=t,l=i),Ab(n,r,u,l);function u(s,o){const f=o[o.length-1],c=f?f.children.indexOf(s):void 0;return a(s,c,f)}}const of={}.hasOwnProperty,AO={};function OO(n,e){const t=e||AO,i=new Map,l=new Map,r=new Map,a={...cO,...t.handlers},u={all:o,applyData:_O,definitionById:i,footnoteById:l,footnoteCounts:r,footnoteOrder:[],handlers:a,one:s,options:t,patch:CO,wrap:DO};return Gh(n,function(f){if(f.type==="definition"||f.type==="footnoteDefinition"){const c=f.type==="definition"?i:l,d=String(f.identifier).toUpperCase();c.has(d)||c.set(d,f)}}),u;function s(f,c){const d=f.type,h=u.handlers[d];if(of.call(u.handlers,d)&&h)return h(u,f,c);if(u.options.passThrough&&u.options.passThrough.includes(d)){if("children"in f){const{children:g,...S}=f,p=is(S);return p.children=u.all(f),p}return is(f)}return(u.options.unknownHandler||NO)(u,f,c)}function o(f){const c=[];if("children"in f){const d=f.children;let h=-1;for(;++h<d.length;){const y=u.one(d[h],f);if(y){if(h&&d[h-1].type==="break"&&(!Array.isArray(y)&&y.type==="text"&&(y.value=bm(y.value)),!Array.isArray(y)&&y.type==="element")){const g=y.children[0];g&&g.type==="text"&&(g.value=bm(g.value))}Array.isArray(y)?c.push(...y):c.push(y)}}}return c}}function CO(n,e){n.position&&(e.position=gE(n))}function _O(n,e){let t=e;if(n&&n.data){const i=n.data.hName,l=n.data.hChildren,r=n.data.hProperties;if(typeof i=="string")if(t.type==="element")t.tagName=i;else{const a="children"in t?t.children:[t];t={type:"element",tagName:i,properties:{},children:a}}t.type==="element"&&r&&Object.assign(t.properties,is(r)),"children"in t&&t.children&&l!==null&&l!==void 0&&(t.children=l)}return t}function NO(n,e){const t=e.data||{},i="value"in e&&!(of.call(t,"hProperties")||of.call(t,"hChildren"))?{type:"text",value:e.value}:{type:"element",tagName:"div",properties:{},children:n.all(e)};return n.patch(e,i),n.applyData(e,i)}function DO(n,e){const t=[];let i=-1;for(e&&t.push({type:"text",value:`
`});++i<n.length;)i&&t.push({type:"text",value:`
`}),t.push(n[i]);return e&&n.length>0&&t.push({type:"text",value:`
`}),t}function bm(n){let e=0,t=n.charCodeAt(e);for(;t===9||t===32;)e++,t=n.charCodeAt(e);return n.slice(e)}function Sm(n,e){const t=OO(n,e),i=t.one(n,void 0),l=yO(t),r=Array.isArray(i)?{type:"root",children:i}:i||{type:"root",children:[]};return l&&r.children.push({type:"text",value:`
`},l),r}function zO(n,e){return n&&"run"in n?async function(t,i){const l=Sm(t,{file:i,...e});await n.run(l,i)}:function(t,i){return Sm(t,{file:i,...n||e})}}function vm(n){if(n)throw n}var yu=Object.prototype.hasOwnProperty,Ob=Object.prototype.toString,wm=Object.defineProperty,km=Object.getOwnPropertyDescriptor,xm=function(e){return typeof Array.isArray=="function"?Array.isArray(e):Ob.call(e)==="[object Array]"},Em=function(e){if(!e||Ob.call(e)!=="[object Object]")return!1;var t=yu.call(e,"constructor"),i=e.constructor&&e.constructor.prototype&&yu.call(e.constructor.prototype,"isPrototypeOf");if(e.constructor&&!t&&!i)return!1;var l;for(l in e);return typeof l>"u"||yu.call(e,l)},Tm=function(e,t){wm&&t.name==="__proto__"?wm(e,t.name,{enumerable:!0,configurable:!0,value:t.newValue,writable:!0}):e[t.name]=t.newValue},Am=function(e,t){if(t==="__proto__")if(yu.call(e,t)){if(km)return km(e,t).value}else return;return e[t]},MO=function n(){var e,t,i,l,r,a,u=arguments[0],s=1,o=arguments.length,f=!1;for(typeof u=="boolean"&&(f=u,u=arguments[1]||{},s=2),(u==null||typeof u!="object"&&typeof u!="function")&&(u={});s<o;++s)if(e=arguments[s],e!=null)for(t in e)i=Am(u,t),l=Am(e,t),u!==l&&(f&&l&&(Em(l)||(r=xm(l)))?(r?(r=!1,a=i&&xm(i)?i:[]):a=i&&Em(i)?i:{},Tm(u,{name:t,newValue:n(f,a,l)})):typeof l<"u"&&Tm(u,{name:t,newValue:l}));return u};const Uo=df(MO);function cf(n){if(typeof n!="object"||n===null)return!1;const e=Object.getPrototypeOf(n);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in n)&&!(Symbol.iterator in n)}function LO(){const n=[],e={run:t,use:i};return e;function t(...l){let r=-1;const a=l.pop();if(typeof a!="function")throw new TypeError("Expected function as last argument, not "+a);u(null,...l);function u(s,...o){const f=n[++r];let c=-1;if(s){a(s);return}for(;++c<l.length;)(o[c]===null||o[c]===void 0)&&(o[c]=l[c]);l=o,f?RO(f,u)(...o):a(null,...o)}}function i(l){if(typeof l!="function")throw new TypeError("Expected `middelware` to be a function, not "+l);return n.push(l),e}}function RO(n,e){let t;return i;function i(...a){const u=n.length>a.length;let s;u&&a.push(l);try{s=n.apply(this,a)}catch(o){const f=o;if(u&&t)throw f;return l(f)}u||(s&&s.then&&typeof s.then=="function"?s.then(r,l):s instanceof Error?l(s):r(s))}function l(a,...u){t||(t=!0,e(a,...u))}function r(a){l(null,a)}}const Ke={basename:BO,dirname:jO,extname:UO,join:qO,sep:"/"};function BO(n,e){if(e!==void 0&&typeof e!="string")throw new TypeError('"ext" argument must be a string');Oa(n);let t=0,i=-1,l=n.length,r;if(e===void 0||e.length===0||e.length>n.length){for(;l--;)if(n.codePointAt(l)===47){if(r){t=l+1;break}}else i<0&&(r=!0,i=l+1);return i<0?"":n.slice(t,i)}if(e===n)return"";let a=-1,u=e.length-1;for(;l--;)if(n.codePointAt(l)===47){if(r){t=l+1;break}}else a<0&&(r=!0,a=l+1),u>-1&&(n.codePointAt(l)===e.codePointAt(u--)?u<0&&(i=l):(u=-1,i=a));return t===i?i=a:i<0&&(i=n.length),n.slice(t,i)}function jO(n){if(Oa(n),n.length===0)return".";let e=-1,t=n.length,i;for(;--t;)if(n.codePointAt(t)===47){if(i){e=t;break}}else i||(i=!0);return e<0?n.codePointAt(0)===47?"/":".":e===1&&n.codePointAt(0)===47?"//":n.slice(0,e)}function UO(n){Oa(n);let e=n.length,t=-1,i=0,l=-1,r=0,a;for(;e--;){const u=n.codePointAt(e);if(u===47){if(a){i=e+1;break}continue}t<0&&(a=!0,t=e+1),u===46?l<0?l=e:r!==1&&(r=1):l>-1&&(r=-1)}return l<0||t<0||r===0||r===1&&l===t-1&&l===i+1?"":n.slice(l,t)}function qO(...n){let e=-1,t;for(;++e<n.length;)Oa(n[e]),n[e]&&(t=t===void 0?n[e]:t+"/"+n[e]);return t===void 0?".":HO(t)}function HO(n){Oa(n);const e=n.codePointAt(0)===47;let t=IO(n,!e);return t.length===0&&!e&&(t="."),t.length>0&&n.codePointAt(n.length-1)===47&&(t+="/"),e?"/"+t:t}function IO(n,e){let t="",i=0,l=-1,r=0,a=-1,u,s;for(;++a<=n.length;){if(a<n.length)u=n.codePointAt(a);else{if(u===47)break;u=47}if(u===47){if(!(l===a-1||r===1))if(l!==a-1&&r===2){if(t.length<2||i!==2||t.codePointAt(t.length-1)!==46||t.codePointAt(t.length-2)!==46){if(t.length>2){if(s=t.lastIndexOf("/"),s!==t.length-1){s<0?(t="",i=0):(t=t.slice(0,s),i=t.length-1-t.lastIndexOf("/")),l=a,r=0;continue}}else if(t.length>0){t="",i=0,l=a,r=0;continue}}e&&(t=t.length>0?t+"/..":"..",i=2)}else t.length>0?t+="/"+n.slice(l+1,a):t=n.slice(l+1,a),i=a-l-1;l=a,r=0}else u===46&&r>-1?r++:r=-1}return t}function Oa(n){if(typeof n!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(n))}const YO={cwd:VO};function VO(){return"/"}function ff(n){return!!(n!==null&&typeof n=="object"&&"href"in n&&n.href&&"protocol"in n&&n.protocol&&n.auth===void 0)}function KO(n){if(typeof n=="string")n=new URL(n);else if(!ff(n)){const e=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+n+"`");throw e.code="ERR_INVALID_ARG_TYPE",e}if(n.protocol!=="file:"){const e=new TypeError("The URL must be of scheme file");throw e.code="ERR_INVALID_URL_SCHEME",e}return GO(n)}function GO(n){if(n.hostname!==""){const i=new TypeError('File URL host must be "localhost" or empty on darwin');throw i.code="ERR_INVALID_FILE_URL_HOST",i}const e=n.pathname;let t=-1;for(;++t<e.length;)if(e.codePointAt(t)===37&&e.codePointAt(t+1)===50){const i=e.codePointAt(t+2);if(i===70||i===102){const l=new TypeError("File URL path must not include encoded / characters");throw l.code="ERR_INVALID_FILE_URL_PATH",l}}return decodeURIComponent(e)}const qo=["history","path","basename","stem","extname","dirname"];class Cb{constructor(e){let t;e?ff(e)?t={path:e}:typeof e=="string"||$O(e)?t={value:e}:t=e:t={},this.cwd="cwd"in t?"":YO.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let i=-1;for(;++i<qo.length;){const r=qo[i];r in t&&t[r]!==void 0&&t[r]!==null&&(this[r]=r==="history"?[...t[r]]:t[r])}let l;for(l in t)qo.includes(l)||(this[l]=t[l])}get basename(){return typeof this.path=="string"?Ke.basename(this.path):void 0}set basename(e){Io(e,"basename"),Ho(e,"basename"),this.path=Ke.join(this.dirname||"",e)}get dirname(){return typeof this.path=="string"?Ke.dirname(this.path):void 0}set dirname(e){Om(this.basename,"dirname"),this.path=Ke.join(e||"",this.basename)}get extname(){return typeof this.path=="string"?Ke.extname(this.path):void 0}set extname(e){if(Ho(e,"extname"),Om(this.dirname,"extname"),e){if(e.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(e.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=Ke.join(this.dirname,this.stem+(e||""))}get path(){return this.history[this.history.length-1]}set path(e){ff(e)&&(e=KO(e)),Io(e,"path"),this.path!==e&&this.history.push(e)}get stem(){return typeof this.path=="string"?Ke.basename(this.path,this.extname):void 0}set stem(e){Io(e,"stem"),Ho(e,"stem"),this.path=Ke.join(this.dirname||"",e+(this.extname||""))}fail(e,t,i){const l=this.message(e,t,i);throw l.fatal=!0,l}info(e,t,i){const l=this.message(e,t,i);return l.fatal=void 0,l}message(e,t,i){const l=new Fn(e,t,i);return this.path&&(l.name=this.path+":"+l.name,l.file=this.path),l.fatal=!1,this.messages.push(l),l}toString(e){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(e||void 0).decode(this.value)}}function Ho(n,e){if(n&&n.includes(Ke.sep))throw new Error("`"+e+"` cannot be a path: did not expect `"+Ke.sep+"`")}function Io(n,e){if(!n)throw new Error("`"+e+"` cannot be empty")}function Om(n,e){if(!n)throw new Error("Setting `"+e+"` requires `path` to be set too")}function $O(n){return!!(n&&typeof n=="object"&&"byteLength"in n&&"byteOffset"in n)}const QO=function(n){const i=this.constructor.prototype,l=i[n],r=function(){return l.apply(r,arguments)};return Object.setPrototypeOf(r,i),r},XO={}.hasOwnProperty;class $h extends QO{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=LO()}copy(){const e=new $h;let t=-1;for(;++t<this.attachers.length;){const i=this.attachers[t];e.use(...i)}return e.data(Uo(!0,{},this.namespace)),e}data(e,t){return typeof e=="string"?arguments.length===2?(Ko("data",this.frozen),this.namespace[e]=t,this):XO.call(this.namespace,e)&&this.namespace[e]||void 0:e?(Ko("data",this.frozen),this.namespace=e,this):this.namespace}freeze(){if(this.frozen)return this;const e=this;for(;++this.freezeIndex<this.attachers.length;){const[t,...i]=this.attachers[this.freezeIndex];if(i[0]===!1)continue;i[0]===!0&&(i[0]=void 0);const l=t.call(e,...i);typeof l=="function"&&this.transformers.use(l)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(e){this.freeze();const t=Pa(e),i=this.parser||this.Parser;return Yo("parse",i),i(String(t),t)}process(e,t){const i=this;return this.freeze(),Yo("process",this.parser||this.Parser),Vo("process",this.compiler||this.Compiler),t?l(void 0,t):new Promise(l);function l(r,a){const u=Pa(e),s=i.parse(u);i.run(s,u,function(f,c,d){if(f||!c||!d)return o(f);const h=c,y=i.stringify(h,d);PO(y)?d.value=y:d.result=y,o(f,d)});function o(f,c){f||!c?a(f):r?r(c):t(void 0,c)}}}processSync(e){let t=!1,i;return this.freeze(),Yo("processSync",this.parser||this.Parser),Vo("processSync",this.compiler||this.Compiler),this.process(e,l),_m("processSync","process",t),i;function l(r,a){t=!0,vm(r),i=a}}run(e,t,i){Cm(e),this.freeze();const l=this.transformers;return!i&&typeof t=="function"&&(i=t,t=void 0),i?r(void 0,i):new Promise(r);function r(a,u){const s=Pa(t);l.run(e,s,o);function o(f,c,d){const h=c||e;f?u(f):a?a(h):i(void 0,h,d)}}}runSync(e,t){let i=!1,l;return this.run(e,t,r),_m("runSync","run",i),l;function r(a,u){vm(a),l=u,i=!0}}stringify(e,t){this.freeze();const i=Pa(t),l=this.compiler||this.Compiler;return Vo("stringify",l),Cm(e),l(e,i)}use(e,...t){const i=this.attachers,l=this.namespace;if(Ko("use",this.frozen),e!=null)if(typeof e=="function")s(e,t);else if(typeof e=="object")Array.isArray(e)?u(e):a(e);else throw new TypeError("Expected usable value, not `"+e+"`");return this;function r(o){if(typeof o=="function")s(o,[]);else if(typeof o=="object")if(Array.isArray(o)){const[f,...c]=o;s(f,c)}else a(o);else throw new TypeError("Expected usable value, not `"+o+"`")}function a(o){if(!("plugins"in o)&&!("settings"in o))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");u(o.plugins),o.settings&&(l.settings=Uo(!0,l.settings,o.settings))}function u(o){let f=-1;if(o!=null)if(Array.isArray(o))for(;++f<o.length;){const c=o[f];r(c)}else throw new TypeError("Expected a list of plugins, not `"+o+"`")}function s(o,f){let c=-1,d=-1;for(;++c<i.length;)if(i[c][0]===o){d=c;break}if(d===-1)i.push([o,...f]);else if(f.length>0){let[h,...y]=f;const g=i[d][1];cf(g)&&cf(h)&&(h=Uo(!0,g,h)),i[d]=[o,h,...y]}}}}const FO=new $h().freeze();function Yo(n,e){if(typeof e!="function")throw new TypeError("Cannot `"+n+"` without `parser`")}function Vo(n,e){if(typeof e!="function")throw new TypeError("Cannot `"+n+"` without `compiler`")}function Ko(n,e){if(e)throw new Error("Cannot call `"+n+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function Cm(n){if(!cf(n)||typeof n.type!="string")throw new TypeError("Expected node, got `"+n+"`")}function _m(n,e,t){if(!t)throw new Error("`"+n+"` finished async. Use `"+e+"` instead")}function Pa(n){return ZO(n)?n:new Cb(n)}function ZO(n){return!!(n&&typeof n=="object"&&"message"in n&&"messages"in n)}function PO(n){return typeof n=="string"||JO(n)}function JO(n){return!!(n&&typeof n=="object"&&"byteLength"in n&&"byteOffset"in n)}const WO="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",Nm=[],Dm={allowDangerousHtml:!0},nC=/^(https?|ircs?|mailto|xmpp)$/i,eC=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function tC(n){const e=iC(n),t=lC(n);return rC(e.runSync(e.parse(t),t),n)}function iC(n){const e=n.rehypePlugins||Nm,t=n.remarkPlugins||Nm,i=n.remarkRehypeOptions?{...n.remarkRehypeOptions,...Dm}:Dm;return FO().use(UA).use(t).use(zO,i).use(e)}function lC(n){const e=n.children||"",t=new Cb;return typeof e=="string"&&(t.value=e),t}function rC(n,e){const t=e.allowedElements,i=e.allowElement,l=e.components,r=e.disallowedElements,a=e.skipHtml,u=e.unwrapDisallowed,s=e.urlTransform||aC;for(const f of eC)Object.hasOwn(e,f.from)&&(""+f.from+(f.to?"use `"+f.to+"` instead":"remove it")+WO+f.id,void 0);return Gh(n,o),wE(n,{Fragment:R.Fragment,components:l,ignoreInvalidStyle:!0,jsx:R.jsx,jsxs:R.jsxs,passKeys:!0,passNode:!0});function o(f,c,d){if(f.type==="raw"&&d&&typeof c=="number")return a?d.children.splice(c,1):d.children[c]={type:"text",value:f.value},c;if(f.type==="element"){let h;for(h in Ro)if(Object.hasOwn(Ro,h)&&Object.hasOwn(f.properties,h)){const y=f.properties[h],g=Ro[h];(g===null||g.includes(f.tagName))&&(f.properties[h]=s(String(y||""),h,f))}}if(f.type==="element"){let h=t?!t.includes(f.tagName):r?r.includes(f.tagName):!1;if(!h&&i&&typeof c=="number"&&(h=!i(f,c,d)),h&&d&&typeof c=="number")return u&&f.children?d.children.splice(c,1,...f.children):d.children.splice(c,1),c}}}function aC(n){const e=n.indexOf(":"),t=n.indexOf("?"),i=n.indexOf("#"),l=n.indexOf("/");return e===-1||l!==-1&&e>l||t!==-1&&e>t||i!==-1&&e>i||nC.test(n.slice(0,e))?n:""}function zm(n,e){const t=String(n);if(typeof e!="string")throw new TypeError("Expected character");let i=0,l=t.indexOf(e);for(;l!==-1;)i++,l=t.indexOf(e,l+e.length);return i}function uC(n){if(typeof n!="string")throw new TypeError("Expected a string");return n.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}function sC(n,e,t){const l=Ys((t||{}).ignore||[]),r=oC(e);let a=-1;for(;++a<r.length;)Ab(n,"text",u);function u(o,f){let c=-1,d;for(;++c<f.length;){const h=f[c],y=d?d.children:void 0;if(l(h,y?y.indexOf(h):void 0,d))return;d=h}if(d)return s(o,f)}function s(o,f){const c=f[f.length-1],d=r[a][0],h=r[a][1];let y=0;const S=c.children.indexOf(o);let p=!1,m=[];d.lastIndex=0;let b=d.exec(o.value);for(;b;){const v=b.index,T={index:b.index,input:b.input,stack:[...f,o]};let x=h(...b,T);if(typeof x=="string"&&(x=x.length>0?{type:"text",value:x}:void 0),x===!1?d.lastIndex=v+1:(y!==v&&m.push({type:"text",value:o.value.slice(y,v)}),Array.isArray(x)?m.push(...x):x&&m.push(x),y=v+b[0].length,p=!0),!d.global)break;b=d.exec(o.value)}return p?(y<o.value.length&&m.push({type:"text",value:o.value.slice(y)}),c.children.splice(S,1,...m)):m=[o],S+m.length}}function oC(n){const e=[];if(!Array.isArray(n))throw new TypeError("Expected find and replace tuple or list of tuples");const t=!n[0]||Array.isArray(n[0])?n:[n];let i=-1;for(;++i<t.length;){const l=t[i];e.push([cC(l[0]),fC(l[1])])}return e}function cC(n){return typeof n=="string"?new RegExp(uC(n),"g"):n}function fC(n){return typeof n=="function"?n:function(){return n}}const Go="phrasing",$o=["autolink","link","image","label"];function hC(){return{transforms:[SC],enter:{literalAutolink:pC,literalAutolinkEmail:Qo,literalAutolinkHttp:Qo,literalAutolinkWww:Qo},exit:{literalAutolink:bC,literalAutolinkEmail:yC,literalAutolinkHttp:mC,literalAutolinkWww:gC}}}function dC(){return{unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:Go,notInConstruct:$o},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:Go,notInConstruct:$o},{character:":",before:"[ps]",after:"\\/",inConstruct:Go,notInConstruct:$o}]}}function pC(n){this.enter({type:"link",title:null,url:"",children:[]},n)}function Qo(n){this.config.enter.autolinkProtocol.call(this,n)}function mC(n){this.config.exit.autolinkProtocol.call(this,n)}function gC(n){this.config.exit.data.call(this,n);const e=this.stack[this.stack.length-1];e.type,e.url="http://"+this.sliceSerialize(n)}function yC(n){this.config.exit.autolinkEmail.call(this,n)}function bC(n){this.exit(n)}function SC(n){sC(n,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,vC],[new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)","gu"),wC]],{ignore:["link","linkReference"]})}function vC(n,e,t,i,l){let r="";if(!_b(l)||(/^w/i.test(e)&&(t=e+t,e="",r="http://"),!kC(t)))return!1;const a=xC(t+i);if(!a[0])return!1;const u={type:"link",title:null,url:r+e+a[0],children:[{type:"text",value:e+a[0]}]};return a[1]?[u,{type:"text",value:a[1]}]:u}function wC(n,e,t,i){return!_b(i,!0)||/[-\d_]$/.test(t)?!1:{type:"link",title:null,url:"mailto:"+e+"@"+t,children:[{type:"text",value:e+"@"+t}]}}function kC(n){const e=n.split(".");return!(e.length<2||e[e.length-1]&&(/_/.test(e[e.length-1])||!/[a-zA-Z\d]/.test(e[e.length-1]))||e[e.length-2]&&(/_/.test(e[e.length-2])||!/[a-zA-Z\d]/.test(e[e.length-2])))}function xC(n){const e=/[!"&'),.:;<>?\]}]+$/.exec(n);if(!e)return[n,void 0];n=n.slice(0,e.index);let t=e[0],i=t.indexOf(")");const l=zm(n,"(");let r=zm(n,")");for(;i!==-1&&l>r;)n+=t.slice(0,i+1),t=t.slice(i+1),i=t.indexOf(")"),r++;return[n,t]}function _b(n,e){const t=n.input.charCodeAt(n.index-1);return(n.index===0||Ci(t)||qs(t))&&(!e||t!==47)}Nb.peek=zC;function EC(){this.buffer()}function TC(n){this.enter({type:"footnoteReference",identifier:"",label:""},n)}function AC(){this.buffer()}function OC(n){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},n)}function CC(n){const e=this.resume(),t=this.stack[this.stack.length-1];t.type,t.identifier=He(this.sliceSerialize(n)).toLowerCase(),t.label=e}function _C(n){this.exit(n)}function NC(n){const e=this.resume(),t=this.stack[this.stack.length-1];t.type,t.identifier=He(this.sliceSerialize(n)).toLowerCase(),t.label=e}function DC(n){this.exit(n)}function zC(){return"["}function Nb(n,e,t,i){const l=t.createTracker(i);let r=l.move("[^");const a=t.enter("footnoteReference"),u=t.enter("reference");return r+=l.move(t.safe(t.associationId(n),{after:"]",before:r})),u(),a(),r+=l.move("]"),r}function MC(){return{enter:{gfmFootnoteCallString:EC,gfmFootnoteCall:TC,gfmFootnoteDefinitionLabelString:AC,gfmFootnoteDefinition:OC},exit:{gfmFootnoteCallString:CC,gfmFootnoteCall:_C,gfmFootnoteDefinitionLabelString:NC,gfmFootnoteDefinition:DC}}}function LC(n){let e=!1;return n&&n.firstLineBlank&&(e=!0),{handlers:{footnoteDefinition:t,footnoteReference:Nb},unsafe:[{character:"[",inConstruct:["label","phrasing","reference"]}]};function t(i,l,r,a){const u=r.createTracker(a);let s=u.move("[^");const o=r.enter("footnoteDefinition"),f=r.enter("label");return s+=u.move(r.safe(r.associationId(i),{before:s,after:"]"})),f(),s+=u.move("]:"),i.children&&i.children.length>0&&(u.shift(4),s+=u.move((e?`
`:" ")+r.indentLines(r.containerFlow(i,u.current()),e?Db:RC))),o(),s}}function RC(n,e,t){return e===0?n:Db(n,e,t)}function Db(n,e,t){return(t?"":"    ")+n}const BC=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"];zb.peek=IC;function jC(){return{canContainEols:["delete"],enter:{strikethrough:qC},exit:{strikethrough:HC}}}function UC(){return{unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:BC}],handlers:{delete:zb}}}function qC(n){this.enter({type:"delete",children:[]},n)}function HC(n){this.exit(n)}function zb(n,e,t,i){const l=t.createTracker(i),r=t.enter("strikethrough");let a=l.move("~~");return a+=t.containerPhrasing(n,{...l.current(),before:a,after:"~"}),a+=l.move("~~"),r(),a}function IC(){return"~"}function YC(n){return n.length}function VC(n,e){const t=e||{},i=(t.align||[]).concat(),l=t.stringLength||YC,r=[],a=[],u=[],s=[];let o=0,f=-1;for(;++f<n.length;){const g=[],S=[];let p=-1;for(n[f].length>o&&(o=n[f].length);++p<n[f].length;){const m=KC(n[f][p]);if(t.alignDelimiters!==!1){const b=l(m);S[p]=b,(s[p]===void 0||b>s[p])&&(s[p]=b)}g.push(m)}a[f]=g,u[f]=S}let c=-1;if(typeof i=="object"&&"length"in i)for(;++c<o;)r[c]=Mm(i[c]);else{const g=Mm(i);for(;++c<o;)r[c]=g}c=-1;const d=[],h=[];for(;++c<o;){const g=r[c];let S="",p="";g===99?(S=":",p=":"):g===108?S=":":g===114&&(p=":");let m=t.alignDelimiters===!1?1:Math.max(1,s[c]-S.length-p.length);const b=S+"-".repeat(m)+p;t.alignDelimiters!==!1&&(m=S.length+m+p.length,m>s[c]&&(s[c]=m),h[c]=m),d[c]=b}a.splice(1,0,d),u.splice(1,0,h),f=-1;const y=[];for(;++f<a.length;){const g=a[f],S=u[f];c=-1;const p=[];for(;++c<o;){const m=g[c]||"";let b="",v="";if(t.alignDelimiters!==!1){const T=s[c]-(S[c]||0),x=r[c];x===114?b=" ".repeat(T):x===99?T%2?(b=" ".repeat(T/2+.5),v=" ".repeat(T/2-.5)):(b=" ".repeat(T/2),v=b):v=" ".repeat(T)}t.delimiterStart!==!1&&!c&&p.push("|"),t.padding!==!1&&!(t.alignDelimiters===!1&&m==="")&&(t.delimiterStart!==!1||c)&&p.push(" "),t.alignDelimiters!==!1&&p.push(b),p.push(m),t.alignDelimiters!==!1&&p.push(v),t.padding!==!1&&p.push(" "),(t.delimiterEnd!==!1||c!==o-1)&&p.push("|")}y.push(t.delimiterEnd===!1?p.join("").replace(/ +$/,""):p.join(""))}return y.join(`
`)}function KC(n){return n==null?"":String(n)}function Mm(n){const e=typeof n=="string"?n.codePointAt(0):0;return e===67||e===99?99:e===76||e===108?108:e===82||e===114?114:0}function GC(n,e,t,i){const l=t.enter("blockquote"),r=t.createTracker(i);r.move("> "),r.shift(2);const a=t.indentLines(t.containerFlow(n,r.current()),$C);return l(),a}function $C(n,e,t){return">"+(t?"":" ")+n}function QC(n,e){return Lm(n,e.inConstruct,!0)&&!Lm(n,e.notInConstruct,!1)}function Lm(n,e,t){if(typeof e=="string"&&(e=[e]),!e||e.length===0)return t;let i=-1;for(;++i<e.length;)if(n.includes(e[i]))return!0;return!1}function Rm(n,e,t,i){let l=-1;for(;++l<t.unsafe.length;)if(t.unsafe[l].character===`
`&&QC(t.stack,t.unsafe[l]))return/[ \t]/.test(i.before)?"":" ";return`\\
`}function XC(n,e){const t=String(n);let i=t.indexOf(e),l=i,r=0,a=0;if(typeof e!="string")throw new TypeError("Expected substring");for(;i!==-1;)i===l?++r>a&&(a=r):r=1,l=i+e.length,i=t.indexOf(e,l);return a}function FC(n,e){return!!(e.options.fences===!1&&n.value&&!n.lang&&/[^ \r\n]/.test(n.value)&&!/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(n.value))}function ZC(n){const e=n.options.fence||"`";if(e!=="`"&&e!=="~")throw new Error("Cannot serialize code with `"+e+"` for `options.fence`, expected `` ` `` or `~`");return e}function PC(n,e,t,i){const l=ZC(t),r=n.value||"",a=l==="`"?"GraveAccent":"Tilde";if(FC(n,t)){const c=t.enter("codeIndented"),d=t.indentLines(r,JC);return c(),d}const u=t.createTracker(i),s=l.repeat(Math.max(XC(r,l)+1,3)),o=t.enter("codeFenced");let f=u.move(s);if(n.lang){const c=t.enter(`codeFencedLang${a}`);f+=u.move(t.safe(n.lang,{before:f,after:" ",encode:["`"],...u.current()})),c()}if(n.lang&&n.meta){const c=t.enter(`codeFencedMeta${a}`);f+=u.move(" "),f+=u.move(t.safe(n.meta,{before:f,after:`
`,encode:["`"],...u.current()})),c()}return f+=u.move(`
`),r&&(f+=u.move(r+`
`)),f+=u.move(s),o(),f}function JC(n,e,t){return(t?"":"    ")+n}function Qh(n){const e=n.options.quote||'"';if(e!=='"'&&e!=="'")throw new Error("Cannot serialize title with `"+e+"` for `options.quote`, expected `\"`, or `'`");return e}function WC(n,e,t,i){const l=Qh(t),r=l==='"'?"Quote":"Apostrophe",a=t.enter("definition");let u=t.enter("label");const s=t.createTracker(i);let o=s.move("[");return o+=s.move(t.safe(t.associationId(n),{before:o,after:"]",...s.current()})),o+=s.move("]: "),u(),!n.url||/[\0- \u007F]/.test(n.url)?(u=t.enter("destinationLiteral"),o+=s.move("<"),o+=s.move(t.safe(n.url,{before:o,after:">",...s.current()})),o+=s.move(">")):(u=t.enter("destinationRaw"),o+=s.move(t.safe(n.url,{before:o,after:n.title?" ":`
`,...s.current()}))),u(),n.title&&(u=t.enter(`title${r}`),o+=s.move(" "+l),o+=s.move(t.safe(n.title,{before:o,after:l,...s.current()})),o+=s.move(l),u()),a(),o}function n_(n){const e=n.options.emphasis||"*";if(e!=="*"&&e!=="_")throw new Error("Cannot serialize emphasis with `"+e+"` for `options.emphasis`, expected `*`, or `_`");return e}function la(n){return"&#x"+n.toString(16).toUpperCase()+";"}function ls(n,e,t){const i=Bl(n),l=Bl(e);return i===void 0?l===void 0?t==="_"?{inside:!0,outside:!0}:{inside:!1,outside:!1}:l===1?{inside:!0,outside:!0}:{inside:!1,outside:!0}:i===1?l===void 0?{inside:!1,outside:!1}:l===1?{inside:!0,outside:!0}:{inside:!1,outside:!1}:l===void 0?{inside:!1,outside:!1}:l===1?{inside:!0,outside:!1}:{inside:!1,outside:!1}}Mb.peek=e_;function Mb(n,e,t,i){const l=n_(t),r=t.enter("emphasis"),a=t.createTracker(i),u=a.move(l);let s=a.move(t.containerPhrasing(n,{after:l,before:u,...a.current()}));const o=s.charCodeAt(0),f=ls(i.before.charCodeAt(i.before.length-1),o,l);f.inside&&(s=la(o)+s.slice(1));const c=s.charCodeAt(s.length-1),d=ls(i.after.charCodeAt(0),c,l);d.inside&&(s=s.slice(0,-1)+la(c));const h=a.move(l);return r(),t.attentionEncodeSurroundingInfo={after:d.outside,before:f.outside},u+s+h}function e_(n,e,t){return t.options.emphasis||"*"}function t_(n,e){let t=!1;return Gh(n,function(i){if("value"in i&&/\r?\n|\r/.test(i.value)||i.type==="break")return t=!0,sf}),!!((!n.depth||n.depth<3)&&Uh(n)&&(e.options.setext||t))}function i_(n,e,t,i){const l=Math.max(Math.min(6,n.depth||1),1),r=t.createTracker(i);if(t_(n,t)){const f=t.enter("headingSetext"),c=t.enter("phrasing"),d=t.containerPhrasing(n,{...r.current(),before:`
`,after:`
`});return c(),f(),d+`
`+(l===1?"=":"-").repeat(d.length-(Math.max(d.lastIndexOf("\r"),d.lastIndexOf(`
`))+1))}const a="#".repeat(l),u=t.enter("headingAtx"),s=t.enter("phrasing");r.move(a+" ");let o=t.containerPhrasing(n,{before:"# ",after:`
`,...r.current()});return/^[\t ]/.test(o)&&(o=la(o.charCodeAt(0))+o.slice(1)),o=o?a+" "+o:a,t.options.closeAtx&&(o+=" "+a),s(),u(),o}Lb.peek=l_;function Lb(n){return n.value||""}function l_(){return"<"}Rb.peek=r_;function Rb(n,e,t,i){const l=Qh(t),r=l==='"'?"Quote":"Apostrophe",a=t.enter("image");let u=t.enter("label");const s=t.createTracker(i);let o=s.move("![");return o+=s.move(t.safe(n.alt,{before:o,after:"]",...s.current()})),o+=s.move("]("),u(),!n.url&&n.title||/[\0- \u007F]/.test(n.url)?(u=t.enter("destinationLiteral"),o+=s.move("<"),o+=s.move(t.safe(n.url,{before:o,after:">",...s.current()})),o+=s.move(">")):(u=t.enter("destinationRaw"),o+=s.move(t.safe(n.url,{before:o,after:n.title?" ":")",...s.current()}))),u(),n.title&&(u=t.enter(`title${r}`),o+=s.move(" "+l),o+=s.move(t.safe(n.title,{before:o,after:l,...s.current()})),o+=s.move(l),u()),o+=s.move(")"),a(),o}function r_(){return"!"}Bb.peek=a_;function Bb(n,e,t,i){const l=n.referenceType,r=t.enter("imageReference");let a=t.enter("label");const u=t.createTracker(i);let s=u.move("![");const o=t.safe(n.alt,{before:s,after:"]",...u.current()});s+=u.move(o+"]["),a();const f=t.stack;t.stack=[],a=t.enter("reference");const c=t.safe(t.associationId(n),{before:s,after:"]",...u.current()});return a(),t.stack=f,r(),l==="full"||!o||o!==c?s+=u.move(c+"]"):l==="shortcut"?s=s.slice(0,-1):s+=u.move("]"),s}function a_(){return"!"}jb.peek=u_;function jb(n,e,t){let i=n.value||"",l="`",r=-1;for(;new RegExp("(^|[^`])"+l+"([^`]|$)").test(i);)l+="`";for(/[^ \r\n]/.test(i)&&(/^[ \r\n]/.test(i)&&/[ \r\n]$/.test(i)||/^`|`$/.test(i))&&(i=" "+i+" ");++r<t.unsafe.length;){const a=t.unsafe[r],u=t.compilePattern(a);let s;if(a.atBreak)for(;s=u.exec(i);){let o=s.index;i.charCodeAt(o)===10&&i.charCodeAt(o-1)===13&&o--,i=i.slice(0,o)+" "+i.slice(s.index+1)}}return l+i+l}function u_(){return"`"}function Ub(n,e){const t=Uh(n);return!!(!e.options.resourceLink&&n.url&&!n.title&&n.children&&n.children.length===1&&n.children[0].type==="text"&&(t===n.url||"mailto:"+t===n.url)&&/^[a-z][a-z+.-]+:/i.test(n.url)&&!/[\0- <>\u007F]/.test(n.url))}qb.peek=s_;function qb(n,e,t,i){const l=Qh(t),r=l==='"'?"Quote":"Apostrophe",a=t.createTracker(i);let u,s;if(Ub(n,t)){const f=t.stack;t.stack=[],u=t.enter("autolink");let c=a.move("<");return c+=a.move(t.containerPhrasing(n,{before:c,after:">",...a.current()})),c+=a.move(">"),u(),t.stack=f,c}u=t.enter("link"),s=t.enter("label");let o=a.move("[");return o+=a.move(t.containerPhrasing(n,{before:o,after:"](",...a.current()})),o+=a.move("]("),s(),!n.url&&n.title||/[\0- \u007F]/.test(n.url)?(s=t.enter("destinationLiteral"),o+=a.move("<"),o+=a.move(t.safe(n.url,{before:o,after:">",...a.current()})),o+=a.move(">")):(s=t.enter("destinationRaw"),o+=a.move(t.safe(n.url,{before:o,after:n.title?" ":")",...a.current()}))),s(),n.title&&(s=t.enter(`title${r}`),o+=a.move(" "+l),o+=a.move(t.safe(n.title,{before:o,after:l,...a.current()})),o+=a.move(l),s()),o+=a.move(")"),u(),o}function s_(n,e,t){return Ub(n,t)?"<":"["}Hb.peek=o_;function Hb(n,e,t,i){const l=n.referenceType,r=t.enter("linkReference");let a=t.enter("label");const u=t.createTracker(i);let s=u.move("[");const o=t.containerPhrasing(n,{before:s,after:"]",...u.current()});s+=u.move(o+"]["),a();const f=t.stack;t.stack=[],a=t.enter("reference");const c=t.safe(t.associationId(n),{before:s,after:"]",...u.current()});return a(),t.stack=f,r(),l==="full"||!o||o!==c?s+=u.move(c+"]"):l==="shortcut"?s=s.slice(0,-1):s+=u.move("]"),s}function o_(){return"["}function Xh(n){const e=n.options.bullet||"*";if(e!=="*"&&e!=="+"&&e!=="-")throw new Error("Cannot serialize items with `"+e+"` for `options.bullet`, expected `*`, `+`, or `-`");return e}function c_(n){const e=Xh(n),t=n.options.bulletOther;if(!t)return e==="*"?"-":"*";if(t!=="*"&&t!=="+"&&t!=="-")throw new Error("Cannot serialize items with `"+t+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(t===e)throw new Error("Expected `bullet` (`"+e+"`) and `bulletOther` (`"+t+"`) to be different");return t}function f_(n){const e=n.options.bulletOrdered||".";if(e!=="."&&e!==")")throw new Error("Cannot serialize items with `"+e+"` for `options.bulletOrdered`, expected `.` or `)`");return e}function Ib(n){const e=n.options.rule||"*";if(e!=="*"&&e!=="-"&&e!=="_")throw new Error("Cannot serialize rules with `"+e+"` for `options.rule`, expected `*`, `-`, or `_`");return e}function h_(n,e,t,i){const l=t.enter("list"),r=t.bulletCurrent;let a=n.ordered?f_(t):Xh(t);const u=n.ordered?a==="."?")":".":c_(t);let s=e&&t.bulletLastUsed?a===t.bulletLastUsed:!1;if(!n.ordered){const f=n.children?n.children[0]:void 0;if((a==="*"||a==="-")&&f&&(!f.children||!f.children[0])&&t.stack[t.stack.length-1]==="list"&&t.stack[t.stack.length-2]==="listItem"&&t.stack[t.stack.length-3]==="list"&&t.stack[t.stack.length-4]==="listItem"&&t.indexStack[t.indexStack.length-1]===0&&t.indexStack[t.indexStack.length-2]===0&&t.indexStack[t.indexStack.length-3]===0&&(s=!0),Ib(t)===a&&f){let c=-1;for(;++c<n.children.length;){const d=n.children[c];if(d&&d.type==="listItem"&&d.children&&d.children[0]&&d.children[0].type==="thematicBreak"){s=!0;break}}}}s&&(a=u),t.bulletCurrent=a;const o=t.containerFlow(n,i);return t.bulletLastUsed=a,t.bulletCurrent=r,l(),o}function d_(n){const e=n.options.listItemIndent||"one";if(e!=="tab"&&e!=="one"&&e!=="mixed")throw new Error("Cannot serialize items with `"+e+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return e}function p_(n,e,t,i){const l=d_(t);let r=t.bulletCurrent||Xh(t);e&&e.type==="list"&&e.ordered&&(r=(typeof e.start=="number"&&e.start>-1?e.start:1)+(t.options.incrementListMarker===!1?0:e.children.indexOf(n))+r);let a=r.length+1;(l==="tab"||l==="mixed"&&(e&&e.type==="list"&&e.spread||n.spread))&&(a=Math.ceil(a/4)*4);const u=t.createTracker(i);u.move(r+" ".repeat(a-r.length)),u.shift(a);const s=t.enter("listItem"),o=t.indentLines(t.containerFlow(n,u.current()),f);return s(),o;function f(c,d,h){return d?(h?"":" ".repeat(a))+c:(h?r:r+" ".repeat(a-r.length))+c}}function m_(n,e,t,i){const l=t.enter("paragraph"),r=t.enter("phrasing"),a=t.containerPhrasing(n,i);return r(),l(),a}const g_=Ys(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","inlineMath","link","linkReference","mdxJsxTextElement","mdxTextExpression","strong","text","textDirective"]);function y_(n,e,t,i){return(n.children.some(function(a){return g_(a)})?t.containerPhrasing:t.containerFlow).call(t,n,i)}function b_(n){const e=n.options.strong||"*";if(e!=="*"&&e!=="_")throw new Error("Cannot serialize strong with `"+e+"` for `options.strong`, expected `*`, or `_`");return e}Yb.peek=S_;function Yb(n,e,t,i){const l=b_(t),r=t.enter("strong"),a=t.createTracker(i),u=a.move(l+l);let s=a.move(t.containerPhrasing(n,{after:l,before:u,...a.current()}));const o=s.charCodeAt(0),f=ls(i.before.charCodeAt(i.before.length-1),o,l);f.inside&&(s=la(o)+s.slice(1));const c=s.charCodeAt(s.length-1),d=ls(i.after.charCodeAt(0),c,l);d.inside&&(s=s.slice(0,-1)+la(c));const h=a.move(l+l);return r(),t.attentionEncodeSurroundingInfo={after:d.outside,before:f.outside},u+s+h}function S_(n,e,t){return t.options.strong||"*"}function v_(n,e,t,i){return t.safe(n.value,i)}function w_(n){const e=n.options.ruleRepetition||3;if(e<3)throw new Error("Cannot serialize rules with repetition `"+e+"` for `options.ruleRepetition`, expected `3` or more");return e}function k_(n,e,t){const i=(Ib(t)+(t.options.ruleSpaces?" ":"")).repeat(w_(t));return t.options.ruleSpaces?i.slice(0,-1):i}const Vb={blockquote:GC,break:Rm,code:PC,definition:WC,emphasis:Mb,hardBreak:Rm,heading:i_,html:Lb,image:Rb,imageReference:Bb,inlineCode:jb,link:qb,linkReference:Hb,list:h_,listItem:p_,paragraph:m_,root:y_,strong:Yb,text:v_,thematicBreak:k_};function x_(){return{enter:{table:E_,tableData:Bm,tableHeader:Bm,tableRow:A_},exit:{codeText:O_,table:T_,tableData:Xo,tableHeader:Xo,tableRow:Xo}}}function E_(n){const e=n._align;this.enter({type:"table",align:e.map(function(t){return t==="none"?null:t}),children:[]},n),this.data.inTable=!0}function T_(n){this.exit(n),this.data.inTable=void 0}function A_(n){this.enter({type:"tableRow",children:[]},n)}function Xo(n){this.exit(n)}function Bm(n){this.enter({type:"tableCell",children:[]},n)}function O_(n){let e=this.resume();this.data.inTable&&(e=e.replace(/\\([\\|])/g,C_));const t=this.stack[this.stack.length-1];t.type,t.value=e,this.exit(n)}function C_(n,e){return e==="|"?e:n}function __(n){const e=n||{},t=e.tableCellPadding,i=e.tablePipeAlign,l=e.stringLength,r=t?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{inlineCode:d,table:a,tableCell:s,tableRow:u}};function a(h,y,g,S){return o(f(h,g,S),h.align)}function u(h,y,g,S){const p=c(h,g,S),m=o([p]);return m.slice(0,m.indexOf(`
`))}function s(h,y,g,S){const p=g.enter("tableCell"),m=g.enter("phrasing"),b=g.containerPhrasing(h,{...S,before:r,after:r});return m(),p(),b}function o(h,y){return VC(h,{align:y,alignDelimiters:i,padding:t,stringLength:l})}function f(h,y,g){const S=h.children;let p=-1;const m=[],b=y.enter("table");for(;++p<S.length;)m[p]=c(S[p],y,g);return b(),m}function c(h,y,g){const S=h.children;let p=-1;const m=[],b=y.enter("tableRow");for(;++p<S.length;)m[p]=s(S[p],h,y,g);return b(),m}function d(h,y,g){let S=Vb.inlineCode(h,y,g);return g.stack.includes("tableCell")&&(S=S.replace(/\|/g,"\\$&")),S}}function N_(){return{exit:{taskListCheckValueChecked:jm,taskListCheckValueUnchecked:jm,paragraph:z_}}}function D_(){return{unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:M_}}}function jm(n){const e=this.stack[this.stack.length-2];e.type,e.checked=n.type==="taskListCheckValueChecked"}function z_(n){const e=this.stack[this.stack.length-2];if(e&&e.type==="listItem"&&typeof e.checked=="boolean"){const t=this.stack[this.stack.length-1];t.type;const i=t.children[0];if(i&&i.type==="text"){const l=e.children;let r=-1,a;for(;++r<l.length;){const u=l[r];if(u.type==="paragraph"){a=u;break}}a===t&&(i.value=i.value.slice(1),i.value.length===0?t.children.shift():t.position&&i.position&&typeof i.position.start.offset=="number"&&(i.position.start.column++,i.position.start.offset++,t.position.start=Object.assign({},i.position.start)))}}this.exit(n)}function M_(n,e,t,i){const l=n.children[0],r=typeof n.checked=="boolean"&&l&&l.type==="paragraph",a="["+(n.checked?"x":" ")+"] ",u=t.createTracker(i);r&&u.move(a);let s=Vb.listItem(n,e,t,{...i,...u.current()});return r&&(s=s.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,o)),s;function o(f){return f+a}}function L_(){return[hC(),MC(),jC(),x_(),N_()]}function R_(n){return{extensions:[dC(),LC(n),UC(),__(n),D_()]}}const B_={tokenize:Y_,partial:!0},Kb={tokenize:V_,partial:!0},Gb={tokenize:K_,partial:!0},$b={tokenize:G_,partial:!0},j_={tokenize:$_,partial:!0},Qb={name:"wwwAutolink",tokenize:H_,previous:Fb},Xb={name:"protocolAutolink",tokenize:I_,previous:Zb},wt={name:"emailAutolink",tokenize:q_,previous:Pb},nt={};function U_(){return{text:nt}}let ui=48;for(;ui<123;)nt[ui]=wt,ui++,ui===58?ui=65:ui===91&&(ui=97);nt[43]=wt;nt[45]=wt;nt[46]=wt;nt[95]=wt;nt[72]=[wt,Xb];nt[104]=[wt,Xb];nt[87]=[wt,Qb];nt[119]=[wt,Qb];function q_(n,e,t){const i=this;let l,r;return a;function a(c){return!hf(c)||!Pb.call(i,i.previous)||Fh(i.events)?t(c):(n.enter("literalAutolink"),n.enter("literalAutolinkEmail"),u(c))}function u(c){return hf(c)?(n.consume(c),u):c===64?(n.consume(c),s):t(c)}function s(c){return c===46?n.check(j_,f,o)(c):c===45||c===95||Qn(c)?(r=!0,n.consume(c),s):f(c)}function o(c){return n.consume(c),l=!0,s}function f(c){return r&&l&&Jn(i.previous)?(n.exit("literalAutolinkEmail"),n.exit("literalAutolink"),e(c)):t(c)}}function H_(n,e,t){const i=this;return l;function l(a){return a!==87&&a!==119||!Fb.call(i,i.previous)||Fh(i.events)?t(a):(n.enter("literalAutolink"),n.enter("literalAutolinkWww"),n.check(B_,n.attempt(Kb,n.attempt(Gb,r),t),t)(a))}function r(a){return n.exit("literalAutolinkWww"),n.exit("literalAutolink"),e(a)}}function I_(n,e,t){const i=this;let l="",r=!1;return a;function a(c){return(c===72||c===104)&&Zb.call(i,i.previous)&&!Fh(i.events)?(n.enter("literalAutolink"),n.enter("literalAutolinkHttp"),l+=String.fromCodePoint(c),n.consume(c),u):t(c)}function u(c){if(Jn(c)&&l.length<5)return l+=String.fromCodePoint(c),n.consume(c),u;if(c===58){const d=l.toLowerCase();if(d==="http"||d==="https")return n.consume(c),s}return t(c)}function s(c){return c===47?(n.consume(c),r?o:(r=!0,s)):t(c)}function o(c){return c===null||es(c)||fn(c)||Ci(c)||qs(c)?t(c):n.attempt(Kb,n.attempt(Gb,f),t)(c)}function f(c){return n.exit("literalAutolinkHttp"),n.exit("literalAutolink"),e(c)}}function Y_(n,e,t){let i=0;return l;function l(a){return(a===87||a===119)&&i<3?(i++,n.consume(a),l):a===46&&i===3?(n.consume(a),r):t(a)}function r(a){return a===null?t(a):e(a)}}function V_(n,e,t){let i,l,r;return a;function a(o){return o===46||o===95?n.check($b,s,u)(o):o===null||fn(o)||Ci(o)||o!==45&&qs(o)?s(o):(r=!0,n.consume(o),a)}function u(o){return o===95?i=!0:(l=i,i=void 0),n.consume(o),a}function s(o){return l||i||!r?t(o):e(o)}}function K_(n,e){let t=0,i=0;return l;function l(a){return a===40?(t++,n.consume(a),l):a===41&&i<t?r(a):a===33||a===34||a===38||a===39||a===41||a===42||a===44||a===46||a===58||a===59||a===60||a===63||a===93||a===95||a===126?n.check($b,e,r)(a):a===null||fn(a)||Ci(a)?e(a):(n.consume(a),l)}function r(a){return a===41&&i++,n.consume(a),l}}function G_(n,e,t){return i;function i(u){return u===33||u===34||u===39||u===41||u===42||u===44||u===46||u===58||u===59||u===63||u===95||u===126?(n.consume(u),i):u===38?(n.consume(u),r):u===93?(n.consume(u),l):u===60||u===null||fn(u)||Ci(u)?e(u):t(u)}function l(u){return u===null||u===40||u===91||fn(u)||Ci(u)?e(u):i(u)}function r(u){return Jn(u)?a(u):t(u)}function a(u){return u===59?(n.consume(u),i):Jn(u)?(n.consume(u),a):t(u)}}function $_(n,e,t){return i;function i(r){return n.consume(r),l}function l(r){return Qn(r)?t(r):e(r)}}function Fb(n){return n===null||n===40||n===42||n===95||n===91||n===93||n===126||fn(n)}function Zb(n){return!Jn(n)}function Pb(n){return!(n===47||hf(n))}function hf(n){return n===43||n===45||n===46||n===95||Qn(n)}function Fh(n){let e=n.length,t=!1;for(;e--;){const i=n[e][1];if((i.type==="labelLink"||i.type==="labelImage")&&!i._balanced){t=!0;break}if(i._gfmAutolinkLiteralWalkedInto){t=!1;break}}return n.length>0&&!t&&(n[n.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),t}const Q_={tokenize:eN,partial:!0};function X_(){return{document:{91:{name:"gfmFootnoteDefinition",tokenize:J_,continuation:{tokenize:W_},exit:nN}},text:{91:{name:"gfmFootnoteCall",tokenize:P_},93:{name:"gfmPotentialFootnoteCall",add:"after",tokenize:F_,resolveTo:Z_}}}}function F_(n,e,t){const i=this;let l=i.events.length;const r=i.parser.gfmFootnotes||(i.parser.gfmFootnotes=[]);let a;for(;l--;){const s=i.events[l][1];if(s.type==="labelImage"){a=s;break}if(s.type==="gfmFootnoteCall"||s.type==="labelLink"||s.type==="label"||s.type==="image"||s.type==="link")break}return u;function u(s){if(!a||!a._balanced)return t(s);const o=He(i.sliceSerialize({start:a.end,end:i.now()}));return o.codePointAt(0)!==94||!r.includes(o.slice(1))?t(s):(n.enter("gfmFootnoteCallLabelMarker"),n.consume(s),n.exit("gfmFootnoteCallLabelMarker"),e(s))}}function Z_(n,e){let t=n.length;for(;t--;)if(n[t][1].type==="labelImage"&&n[t][0]==="enter"){n[t][1];break}n[t+1][1].type="data",n[t+3][1].type="gfmFootnoteCallLabelMarker";const i={type:"gfmFootnoteCall",start:Object.assign({},n[t+3][1].start),end:Object.assign({},n[n.length-1][1].end)},l={type:"gfmFootnoteCallMarker",start:Object.assign({},n[t+3][1].end),end:Object.assign({},n[t+3][1].end)};l.end.column++,l.end.offset++,l.end._bufferIndex++;const r={type:"gfmFootnoteCallString",start:Object.assign({},l.end),end:Object.assign({},n[n.length-1][1].start)},a={type:"chunkString",contentType:"string",start:Object.assign({},r.start),end:Object.assign({},r.end)},u=[n[t+1],n[t+2],["enter",i,e],n[t+3],n[t+4],["enter",l,e],["exit",l,e],["enter",r,e],["enter",a,e],["exit",a,e],["exit",r,e],n[n.length-2],n[n.length-1],["exit",i,e]];return n.splice(t,n.length-t+1,...u),n}function P_(n,e,t){const i=this,l=i.parser.gfmFootnotes||(i.parser.gfmFootnotes=[]);let r=0,a;return u;function u(c){return n.enter("gfmFootnoteCall"),n.enter("gfmFootnoteCallLabelMarker"),n.consume(c),n.exit("gfmFootnoteCallLabelMarker"),s}function s(c){return c!==94?t(c):(n.enter("gfmFootnoteCallMarker"),n.consume(c),n.exit("gfmFootnoteCallMarker"),n.enter("gfmFootnoteCallString"),n.enter("chunkString").contentType="string",o)}function o(c){if(r>999||c===93&&!a||c===null||c===91||fn(c))return t(c);if(c===93){n.exit("chunkString");const d=n.exit("gfmFootnoteCallString");return l.includes(He(i.sliceSerialize(d)))?(n.enter("gfmFootnoteCallLabelMarker"),n.consume(c),n.exit("gfmFootnoteCallLabelMarker"),n.exit("gfmFootnoteCall"),e):t(c)}return fn(c)||(a=!0),r++,n.consume(c),c===92?f:o}function f(c){return c===91||c===92||c===93?(n.consume(c),r++,o):o(c)}}function J_(n,e,t){const i=this,l=i.parser.gfmFootnotes||(i.parser.gfmFootnotes=[]);let r,a=0,u;return s;function s(y){return n.enter("gfmFootnoteDefinition")._container=!0,n.enter("gfmFootnoteDefinitionLabel"),n.enter("gfmFootnoteDefinitionLabelMarker"),n.consume(y),n.exit("gfmFootnoteDefinitionLabelMarker"),o}function o(y){return y===94?(n.enter("gfmFootnoteDefinitionMarker"),n.consume(y),n.exit("gfmFootnoteDefinitionMarker"),n.enter("gfmFootnoteDefinitionLabelString"),n.enter("chunkString").contentType="string",f):t(y)}function f(y){if(a>999||y===93&&!u||y===null||y===91||fn(y))return t(y);if(y===93){n.exit("chunkString");const g=n.exit("gfmFootnoteDefinitionLabelString");return r=He(i.sliceSerialize(g)),n.enter("gfmFootnoteDefinitionLabelMarker"),n.consume(y),n.exit("gfmFootnoteDefinitionLabelMarker"),n.exit("gfmFootnoteDefinitionLabel"),d}return fn(y)||(u=!0),a++,n.consume(y),y===92?c:f}function c(y){return y===91||y===92||y===93?(n.consume(y),a++,f):f(y)}function d(y){return y===58?(n.enter("definitionMarker"),n.consume(y),n.exit("definitionMarker"),l.includes(r)||l.push(r),W(n,h,"gfmFootnoteDefinitionWhitespace")):t(y)}function h(y){return e(y)}}function W_(n,e,t){return n.check(Aa,e,n.attempt(Q_,e,t))}function nN(n){n.exit("gfmFootnoteDefinition")}function eN(n,e,t){const i=this;return W(n,l,"gfmFootnoteDefinitionIndent",5);function l(r){const a=i.events[i.events.length-1];return a&&a[1].type==="gfmFootnoteDefinitionIndent"&&a[2].sliceSerialize(a[1],!0).length===4?e(r):t(r)}}function tN(n){let t=(n||{}).singleTilde;const i={name:"strikethrough",tokenize:r,resolveAll:l};return t==null&&(t=!0),{text:{126:i},insideSpan:{null:[i]},attentionMarkers:{null:[126]}};function l(a,u){let s=-1;for(;++s<a.length;)if(a[s][0]==="enter"&&a[s][1].type==="strikethroughSequenceTemporary"&&a[s][1]._close){let o=s;for(;o--;)if(a[o][0]==="exit"&&a[o][1].type==="strikethroughSequenceTemporary"&&a[o][1]._open&&a[s][1].end.offset-a[s][1].start.offset===a[o][1].end.offset-a[o][1].start.offset){a[s][1].type="strikethroughSequence",a[o][1].type="strikethroughSequence";const f={type:"strikethrough",start:Object.assign({},a[o][1].start),end:Object.assign({},a[s][1].end)},c={type:"strikethroughText",start:Object.assign({},a[o][1].end),end:Object.assign({},a[s][1].start)},d=[["enter",f,u],["enter",a[o][1],u],["exit",a[o][1],u],["enter",c,u]],h=u.parser.constructs.insideSpan.null;h&&we(d,d.length,0,Hs(h,a.slice(o+1,s),u)),we(d,d.length,0,[["exit",c,u],["enter",a[s][1],u],["exit",a[s][1],u],["exit",f,u]]),we(a,o-1,s-o+3,d),s=o+d.length-2;break}}for(s=-1;++s<a.length;)a[s][1].type==="strikethroughSequenceTemporary"&&(a[s][1].type="data");return a}function r(a,u,s){const o=this.previous,f=this.events;let c=0;return d;function d(y){return o===126&&f[f.length-1][1].type!=="characterEscape"?s(y):(a.enter("strikethroughSequenceTemporary"),h(y))}function h(y){const g=Bl(o);if(y===126)return c>1?s(y):(a.consume(y),c++,h);if(c<2&&!t)return s(y);const S=a.exit("strikethroughSequenceTemporary"),p=Bl(y);return S._open=!p||p===2&&!!g,S._close=!g||g===2&&!!p,u(y)}}}class iN{constructor(){this.map=[]}add(e,t,i){lN(this,e,t,i)}consume(e){if(this.map.sort(function(r,a){return r[0]-a[0]}),this.map.length===0)return;let t=this.map.length;const i=[];for(;t>0;)t-=1,i.push(e.slice(this.map[t][0]+this.map[t][1]),this.map[t][2]),e.length=this.map[t][0];i.push(e.slice()),e.length=0;let l=i.pop();for(;l;){for(const r of l)e.push(r);l=i.pop()}this.map.length=0}}function lN(n,e,t,i){let l=0;if(!(t===0&&i.length===0)){for(;l<n.map.length;){if(n.map[l][0]===e){n.map[l][1]+=t,n.map[l][2].push(...i);return}l+=1}n.map.push([e,t,i])}}function rN(n,e){let t=!1;const i=[];for(;e<n.length;){const l=n[e];if(t){if(l[0]==="enter")l[1].type==="tableContent"&&i.push(n[e+1][1].type==="tableDelimiterMarker"?"left":"none");else if(l[1].type==="tableContent"){if(n[e-1][1].type==="tableDelimiterMarker"){const r=i.length-1;i[r]=i[r]==="left"?"center":"right"}}else if(l[1].type==="tableDelimiterRow")break}else l[0]==="enter"&&l[1].type==="tableDelimiterRow"&&(t=!0);e+=1}return i}function aN(){return{flow:{null:{name:"table",tokenize:uN,resolveAll:sN}}}}function uN(n,e,t){const i=this;let l=0,r=0,a;return u;function u(E){let B=i.events.length-1;for(;B>-1;){const mn=i.events[B][1].type;if(mn==="lineEnding"||mn==="linePrefix")B--;else break}const D=B>-1?i.events[B][1].type:null,nn=D==="tableHead"||D==="tableRow"?x:s;return nn===x&&i.parser.lazy[i.now().line]?t(E):nn(E)}function s(E){return n.enter("tableHead"),n.enter("tableRow"),o(E)}function o(E){return E===124||(a=!0,r+=1),f(E)}function f(E){return E===null?t(E):q(E)?r>1?(r=0,i.interrupt=!0,n.exit("tableRow"),n.enter("lineEnding"),n.consume(E),n.exit("lineEnding"),h):t(E):Z(E)?W(n,f,"whitespace")(E):(r+=1,a&&(a=!1,l+=1),E===124?(n.enter("tableCellDivider"),n.consume(E),n.exit("tableCellDivider"),a=!0,f):(n.enter("data"),c(E)))}function c(E){return E===null||E===124||fn(E)?(n.exit("data"),f(E)):(n.consume(E),E===92?d:c)}function d(E){return E===92||E===124?(n.consume(E),c):c(E)}function h(E){return i.interrupt=!1,i.parser.lazy[i.now().line]?t(E):(n.enter("tableDelimiterRow"),a=!1,Z(E)?W(n,y,"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(E):y(E))}function y(E){return E===45||E===58?S(E):E===124?(a=!0,n.enter("tableCellDivider"),n.consume(E),n.exit("tableCellDivider"),g):T(E)}function g(E){return Z(E)?W(n,S,"whitespace")(E):S(E)}function S(E){return E===58?(r+=1,a=!0,n.enter("tableDelimiterMarker"),n.consume(E),n.exit("tableDelimiterMarker"),p):E===45?(r+=1,p(E)):E===null||q(E)?v(E):T(E)}function p(E){return E===45?(n.enter("tableDelimiterFiller"),m(E)):T(E)}function m(E){return E===45?(n.consume(E),m):E===58?(a=!0,n.exit("tableDelimiterFiller"),n.enter("tableDelimiterMarker"),n.consume(E),n.exit("tableDelimiterMarker"),b):(n.exit("tableDelimiterFiller"),b(E))}function b(E){return Z(E)?W(n,v,"whitespace")(E):v(E)}function v(E){return E===124?y(E):E===null||q(E)?!a||l!==r?T(E):(n.exit("tableDelimiterRow"),n.exit("tableHead"),e(E)):T(E)}function T(E){return t(E)}function x(E){return n.enter("tableRow"),O(E)}function O(E){return E===124?(n.enter("tableCellDivider"),n.consume(E),n.exit("tableCellDivider"),O):E===null||q(E)?(n.exit("tableRow"),e(E)):Z(E)?W(n,O,"whitespace")(E):(n.enter("data"),A(E))}function A(E){return E===null||E===124||fn(E)?(n.exit("data"),O(E)):(n.consume(E),E===92?j:A)}function j(E){return E===92||E===124?(n.consume(E),A):A(E)}}function sN(n,e){let t=-1,i=!0,l=0,r=[0,0,0,0],a=[0,0,0,0],u=!1,s=0,o,f,c;const d=new iN;for(;++t<n.length;){const h=n[t],y=h[1];h[0]==="enter"?y.type==="tableHead"?(u=!1,s!==0&&(Um(d,e,s,o,f),f=void 0,s=0),o={type:"table",start:Object.assign({},y.start),end:Object.assign({},y.end)},d.add(t,0,[["enter",o,e]])):y.type==="tableRow"||y.type==="tableDelimiterRow"?(i=!0,c=void 0,r=[0,0,0,0],a=[0,t+1,0,0],u&&(u=!1,f={type:"tableBody",start:Object.assign({},y.start),end:Object.assign({},y.end)},d.add(t,0,[["enter",f,e]])),l=y.type==="tableDelimiterRow"?2:f?3:1):l&&(y.type==="data"||y.type==="tableDelimiterMarker"||y.type==="tableDelimiterFiller")?(i=!1,a[2]===0&&(r[1]!==0&&(a[0]=a[1],c=Ja(d,e,r,l,void 0,c),r=[0,0,0,0]),a[2]=t)):y.type==="tableCellDivider"&&(i?i=!1:(r[1]!==0&&(a[0]=a[1],c=Ja(d,e,r,l,void 0,c)),r=a,a=[r[1],t,0,0])):y.type==="tableHead"?(u=!0,s=t):y.type==="tableRow"||y.type==="tableDelimiterRow"?(s=t,r[1]!==0?(a[0]=a[1],c=Ja(d,e,r,l,t,c)):a[1]!==0&&(c=Ja(d,e,a,l,t,c)),l=0):l&&(y.type==="data"||y.type==="tableDelimiterMarker"||y.type==="tableDelimiterFiller")&&(a[3]=t)}for(s!==0&&Um(d,e,s,o,f),d.consume(e.events),t=-1;++t<e.events.length;){const h=e.events[t];h[0]==="enter"&&h[1].type==="table"&&(h[1]._align=rN(e.events,t))}return n}function Ja(n,e,t,i,l,r){const a=i===1?"tableHeader":i===2?"tableDelimiter":"tableData",u="tableContent";t[0]!==0&&(r.end=Object.assign({},Fi(e.events,t[0])),n.add(t[0],0,[["exit",r,e]]));const s=Fi(e.events,t[1]);if(r={type:a,start:Object.assign({},s),end:Object.assign({},s)},n.add(t[1],0,[["enter",r,e]]),t[2]!==0){const o=Fi(e.events,t[2]),f=Fi(e.events,t[3]),c={type:u,start:Object.assign({},o),end:Object.assign({},f)};if(n.add(t[2],0,[["enter",c,e]]),i!==2){const d=e.events[t[2]],h=e.events[t[3]];if(d[1].end=Object.assign({},h[1].end),d[1].type="chunkText",d[1].contentType="text",t[3]>t[2]+1){const y=t[2]+1,g=t[3]-t[2]-1;n.add(y,g,[])}}n.add(t[3]+1,0,[["exit",c,e]])}return l!==void 0&&(r.end=Object.assign({},Fi(e.events,l)),n.add(l,0,[["exit",r,e]]),r=void 0),r}function Um(n,e,t,i,l){const r=[],a=Fi(e.events,t);l&&(l.end=Object.assign({},a),r.push(["exit",l,e])),i.end=Object.assign({},a),r.push(["exit",i,e]),n.add(t+1,0,r)}function Fi(n,e){const t=n[e],i=t[0]==="enter"?"start":"end";return t[1][i]}const oN={name:"tasklistCheck",tokenize:fN};function cN(){return{text:{91:oN}}}function fN(n,e,t){const i=this;return l;function l(s){return i.previous!==null||!i._gfmTasklistFirstContentOfListItem?t(s):(n.enter("taskListCheck"),n.enter("taskListCheckMarker"),n.consume(s),n.exit("taskListCheckMarker"),r)}function r(s){return fn(s)?(n.enter("taskListCheckValueUnchecked"),n.consume(s),n.exit("taskListCheckValueUnchecked"),a):s===88||s===120?(n.enter("taskListCheckValueChecked"),n.consume(s),n.exit("taskListCheckValueChecked"),a):t(s)}function a(s){return s===93?(n.enter("taskListCheckMarker"),n.consume(s),n.exit("taskListCheckMarker"),n.exit("taskListCheck"),u):t(s)}function u(s){return q(s)?e(s):Z(s)?n.check({tokenize:hN},e,t)(s):t(s)}}function hN(n,e,t){return W(n,i,"whitespace");function i(l){return l===null?t(l):e(l)}}function dN(n){return ub([U_(),X_(),tN(n),aN(),cN()])}const pN={};function mN(n){const e=this,t=n||pN,i=e.data(),l=i.micromarkExtensions||(i.micromarkExtensions=[]),r=i.fromMarkdownExtensions||(i.fromMarkdownExtensions=[]),a=i.toMarkdownExtensions||(i.toMarkdownExtensions=[]);l.push(dN(t)),r.push(L_()),a.push(R_(t))}function qm({headings:n}){return L.useEffect(()=>{if(location.hash){const e=document.getElementById(decodeURIComponent(location.hash.slice(1)));e&&e.scrollIntoView({behavior:"smooth",block:"start"})}},[]),R.jsxs("nav",{"aria-label":"目录",style:{position:"sticky",top:12,maxHeight:"calc(100vh - 24px)",overflow:"auto",paddingLeft:8},children:[R.jsx("div",{style:{fontWeight:700,marginBottom:8},children:"目录"}),R.jsx("ul",{style:{listStyle:"none",padding:0,margin:0},children:n.map(e=>R.jsx("li",{style:{padding:"4px 0",marginLeft:(e.level-1)*12},children:R.jsx("a",{href:`#${e.id}`,style:{color:"inherit",textDecoration:"none",opacity:.9},children:e.text})},e.id))})]})}function si(n){return n.toLowerCase().trim().replace(/[^\p{L}\p{N}]+/gu,"-").replace(/^-+|-+$/g,"")}const gN="modulepreload",yN=function(n){return"/"+n},Hm={},bN=function(e,t,i){let l=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),u=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));l=Promise.allSettled(t.map(s=>{if(s=yN(s),s in Hm)return;Hm[s]=!0;const o=s.endsWith(".css"),f=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${f}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":gN,o||(c.as="script"),c.crossOrigin="",c.href=s,u&&c.setAttribute("nonce",u),document.head.appendChild(c),o)return new Promise((d,h)=>{c.addEventListener("load",d),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${s}`)))})}))}function r(a){const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=a,window.dispatchEvent(u),!u.defaultPrevented)throw a}return l.then(a=>{for(const u of a||[])u.status==="rejected"&&r(u.reason);return e().catch(r)})};function SN({code:n}){const e=L.useRef(null),[t,i]=L.useState(null),l=L.useId().replace(/[:]/g,"");return L.useEffect(()=>{let r=!1;async function a(){try{const u=await bN(()=>import("./mermaid.core-DxfvjhG1.js").then(o=>o.bB),[]);u.default.initialize({startOnLoad:!1,securityLevel:"loose",theme:"dark"});const{svg:s}=await u.default.render(`m-${l}`,n);!r&&e.current&&(e.current.innerHTML=s)}catch(u){r||i((u==null?void 0:u.message)||"Mermaid 渲染失败")}}return a(),()=>{r=!0}},[n,l]),t?R.jsxs("pre",{style:{color:"tomato",whiteSpace:"pre-wrap"},children:[t,"\\n",n]}):R.jsx("div",{ref:e,className:"mermaid",style:{width:"100%",overflowX:"auto"}})}function Nt(n){return typeof n=="string"?n:Array.isArray(n)?n.map(Nt).join(""):n&&typeof n=="object"&&"props"in n?Nt(n.props.children):""}function vN(n,e){if(e&&e.toLowerCase()==="mermaid")return!0;const t=n.trim().split(/\s+/)[0];return["graph","sequenceDiagram","classDiagram","stateDiagram","erDiagram","gitGraph"].includes(t)}function wN(){const{slug:n}=Bk(),e=n?E2[n]:void 0,t=L.useMemo(()=>{if(!e)return[];const i=e.content.split(/\r?\n/),l=[];for(let r=0;r<i.length;r++){const a=i[r].match(/^(#{1,6})\s+(.+)$/);if(a){const u=a[1].length,s=a[2].trim(),o=si(s);l.push({level:u,text:s,id:o})}}return l},[e]);return e?R.jsxs("div",{className:"container",children:[R.jsx("p",{children:R.jsx(Zu,{to:"/",children:"← 返回"})}),R.jsx("div",{className:"toc-mobile",style:{marginBottom:8},children:t.length>0&&R.jsx(qm,{headings:t})}),R.jsxs("div",{className:"post-layout",children:[R.jsxs("div",{className:"post-main",children:[R.jsx("h1",{children:e.title}),e.date&&R.jsx("time",{dateTime:e.date,children:new Date(e.date).toLocaleDateString()}),R.jsx("article",{className:"markdown-body",children:R.jsx(tC,{remarkPlugins:[mN],components:{code(i){const{inline:l,className:r,children:a,...u}=i||{},s=/language-(\w+)/.exec(r||""),o=String(a);return!l&&vN(o,s==null?void 0:s[1])?R.jsx(SN,{code:o}):R.jsx("code",{className:r,...u,children:a})},h1:({node:i,children:l,...r})=>{const a=si(Nt(l));return R.jsx("h1",{id:a,...r,children:l})},h2:({node:i,children:l,...r})=>{const a=si(Nt(l));return R.jsx("h2",{id:a,...r,children:l})},h3:({node:i,children:l,...r})=>{const a=si(Nt(l));return R.jsx("h3",{id:a,...r,children:l})},h4:({node:i,children:l,...r})=>{const a=si(Nt(l));return R.jsx("h4",{id:a,...r,children:l})},h5:({node:i,children:l,...r})=>{const a=si(Nt(l));return R.jsx("h5",{id:a,...r,children:l})},h6:({node:i,children:l,...r})=>{const a=si(Nt(l));return R.jsx("h6",{id:a,...r,children:l})}},children:e.content})})]}),R.jsx("aside",{className:"post-toc",children:t.length>0&&R.jsx(qm,{headings:t})})]})]}):R.jsxs("div",{className:"container",children:[R.jsx("p",{children:"未找到文章。"}),R.jsx("p",{children:R.jsx(Zu,{to:"/",children:"返回首页"})})]})}const Im=[{label:"系统默认",value:'system-ui, -apple-system, Segoe UI, Roboto, Noto Sans, Ubuntu, Cantarell, Helvetica Neue, Arial, "Apple Color Emoji", "Segoe UI Emoji"'},{label:"Serif 衬线",value:'Georgia, Cambria, "Times New Roman", Times, serif'},{label:"Mono 等宽",value:'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'},{label:"纳米老宋",value:'"纳米老宋-A", "纳米老宋-B", "纳米老宋-C", Noto Sans, monospace'}];function kN(){const[n,e]=L.useState(()=>localStorage.getItem("font-family")||Im[0].value);return L.useEffect(()=>{document.documentElement.style.setProperty("--font-family",n),localStorage.setItem("font-family",n)},[n]),R.jsxs("label",{style:{display:"inline-flex",alignItems:"center",gap:8},children:[R.jsx("span",{children:"字体："}),R.jsx("select",{value:n,onChange:t=>e(t.target.value),children:Im.map(t=>R.jsx("option",{value:t.value,children:t.label},t.label))})]})}const dr=[{label:"暗灰（默认）",value:{bg:"#1e1e1e",text:"#e5e7eb",border:"rgba(255,255,255,0.08)",code:"#2a2a2a"}},{label:"墨绿",value:{bg:"#0f1a14",text:"#e6f4ea",border:"rgba(230,244,234,0.12)",code:"#163021"}},{label:"夜蓝",value:{bg:"#0f172a",text:"#e2e8f0",border:"rgba(226,232,240,0.12)",code:"#111827"}},{label:"暖灰",value:{bg:"#1c1b22",text:"#ede9e3",border:"rgba(237,233,227,0.12)",code:"#2a2520"}}],Ym="custom-palette";function xN(n){document.documentElement.style.setProperty("--bg-color",n.bg),document.documentElement.style.setProperty("--text-color",n.text),document.documentElement.style.setProperty("--border-color",n.border),document.documentElement.style.setProperty("--code-bg",n.code)}function EN(){const n=L.useMemo(()=>{try{const i=localStorage.getItem(Ym);return i?JSON.parse(i):null}catch{return null}},[]),[e,t]=L.useState(()=>n??dr[0].value);return L.useEffect(()=>{xN(e),localStorage.setItem(Ym,JSON.stringify(e))},[e]),R.jsx("div",{style:{display:"inline-flex",alignItems:"center",gap:8},children:R.jsxs("label",{style:{display:"inline-flex",alignItems:"center",gap:6},children:[R.jsx("span",{children:"主题："}),R.jsx("select",{value:dr.findIndex(i=>JSON.stringify(i.value)===JSON.stringify(e)),onChange:i=>{const l=Number(i.target.value);!Number.isNaN(l)&&l>=0&&l<dr.length&&t(dr[l].value)},children:dr.map((i,l)=>R.jsx("option",{value:l,children:i.label},i.label))})]})})}function TN(){const[n,e]=L.useState(!1);return L.useEffect(()=>{const t=()=>{e(window.scrollY>300)};return t(),window.addEventListener("scroll",t,{passive:!0}),()=>window.removeEventListener("scroll",t)},[]),n?R.jsx("button",{onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),style:{position:"fixed",right:32,bottom:48,width:44,height:44,borderRadius:"50%",border:"1px solid var(--border-color)",background:"color-mix(in oklab, var(--code-bg) 92%, black 8%)",color:"var(--text-color)",cursor:"pointer",display:"inline-flex",alignItems:"center",justifyContent:"center",boxShadow:"0 6px 18px rgba(0,0,0,0.25)",backdropFilter:"blur(6px)",transition:"transform 0.15s ease, opacity 0.15s ease, box-shadow 0.15s ease",opacity:.95},onMouseEnter:t=>{t.currentTarget.style.transform="translateY(-2px)",t.currentTarget.style.boxShadow="0 10px 22px rgba(0,0,0,0.28)"},onMouseLeave:t=>{t.currentTarget.style.transform="translateY(0)",t.currentTarget.style.boxShadow="0 6px 18px rgba(0,0,0,0.25)"},"aria-label":"返回顶部",title:"返回顶部",children:R.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,children:[R.jsx("path",{d:"M6 10l6-6 6 6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),R.jsx("path",{d:"M12 4v16",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",opacity:"0.85"})]})}):null}function AN(){return R.jsxs(R.Fragment,{children:[R.jsxs(rx,{children:[R.jsx("header",{className:"site-header",children:R.jsxs("nav",{className:"container",style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:16},children:[R.jsx(Zu,{to:"/",className:"brand",children:"Colin Blog"}),R.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:16},children:[R.jsx(EN,{}),R.jsx(kN,{})]})]})}),R.jsx("main",{className:"site-main container",children:R.jsxs(Jk,{children:[R.jsx(Gc,{path:"/",element:R.jsx(T2,{})}),R.jsx(Gc,{path:"/post/:slug",element:R.jsx(wN,{})})]})}),R.jsx("footer",{className:"site-footer",children:R.jsxs("div",{className:"container",children:["© ",new Date().getFullYear()," Colin"]})})]}),R.jsx(TN,{})]})}rk.createRoot(document.getElementById("root")).render(R.jsx(L.StrictMode,{children:R.jsx(AN,{})}));export{bN as _,bu as c,df as g};
