import{r as xt}from"../react-dom.CsUC0bGF.mjs";var tt={exports:{}},T={},wt;function kt(){if(wt)return T;wt=1;var St=xt(),At={stream:!0};function mt(t,n){if(t){var e=t[n[0]];if(t=e&&e[n[2]])e=t.name;else{if(t=e&&e["*"],!t)throw Error('Could not find the module "'+n[0]+'" in the React Server Consumer Manifest. This is probably a bug in the React Server Components bundler.');e=n[2]}return n.length===4?[t.id,t.chunks,e,1]:[t.id,t.chunks,e]}return n}function pt(t,n){var e="",r=t[n];if(r)e=r.name;else{var o=n.lastIndexOf("#");if(o!==-1&&(e=n.slice(o+1),r=t[n.slice(0,o)]),!r)throw Error('Could not find the module "'+n+'" in the React Server Manifest. This is probably a bug in the React Server Components bundler.')}return r.async?[r.id,r.chunks,e,1]:[r.id,r.chunks,e]}var I=new Map;function nt(t){var n=__webpack_require__(t);return typeof n.then!="function"||n.status==="fulfilled"?null:(n.then(function(e){n.status="fulfilled",n.value=e},function(e){n.status="rejected",n.reason=e}),n)}function $t(){}function rt(t){for(var n=t[1],e=[],r=0;r<n.length;){var o=n[r++],i=n[r++],l=I.get(o);l===void 0?(et.set(o,i),i=__webpack_chunk_load__(o),e.push(i),l=I.set.bind(I,o,null),i.then(l,$t),I.set(o,i)):l!==null&&e.push(l)}return t.length===4?e.length===0?nt(t[0]):Promise.all(e).then(function(){return nt(t[0])}):0<e.length?Promise.all(e):null}function G(t){var n=__webpack_require__(t[0]);if(t.length===4&&typeof n.then=="function")if(n.status==="fulfilled")n=n.value;else throw n.reason;return t[2]==="*"?n:t[2]===""?n.__esModule?n.default:n:n[t[2]]}var et=new Map,Ct=__webpack_require__.u;__webpack_require__.u=function(t){var n=et.get(t);return n!==void 0?n:Ct(t)};var Mt=St.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,M=Symbol.for("react.transitional.element"),J=Symbol.for("react.lazy"),bt=Symbol.for("react.postpone"),it=Symbol.iterator;function Et(t){return t===null||typeof t!="object"?null:(t=it&&t[it]||t["@@iterator"],typeof t=="function"?t:null)}var W=Symbol.asyncIterator,Ot=Array.isArray,ot=Object.getPrototypeOf,Dt=Object.prototype,at=new WeakMap;function Nt(t){return Number.isFinite(t)?t===0&&1/t===-1/0?"$-0":t:t===1/0?"$Infinity":t===-1/0?"$-Infinity":"$NaN"}function Tt(t,n,e,r,o){function i(s,a){a=new Blob([new Uint8Array(a.buffer,a.byteOffset,a.byteLength)]);var f=w++;return d===null&&(d=new FormData),d.append(n+f,a),"$"+s+f.toString(16)}function l(s){function a(y){y.done?(y=w++,f.append(n+y,new Blob(m)),f.append(n+A,'"$o'+y.toString(16)+'"'),f.append(n+A,"C"),_--,_===0&&r(f)):(m.push(y.value),s.read(new Uint8Array(1024)).then(a,o))}d===null&&(d=new FormData);var f=d;_++;var A=w++,m=[];return s.read(new Uint8Array(1024)).then(a,o),"$r"+A.toString(16)}function c(s){function a(m){if(m.done)f.append(n+A,"C"),_--,_===0&&r(f);else try{var y=JSON.stringify(m.value,g);f.append(n+A,y),s.read().then(a,o)}catch(B){o(B)}}d===null&&(d=new FormData);var f=d;_++;var A=w++;return s.read().then(a,o),"$R"+A.toString(16)}function u(s){try{var a=s.getReader({mode:"byob"})}catch{return c(s.getReader())}return l(a)}function h(s,a){function f(y){if(y.done){if(y.value===void 0)A.append(n+m,"C");else try{var B=JSON.stringify(y.value,g);A.append(n+m,"C"+B)}catch(N){o(N);return}_--,_===0&&r(A)}else try{var F=JSON.stringify(y.value,g);A.append(n+m,F),a.next().then(f,o)}catch(N){o(N)}}d===null&&(d=new FormData);var A=d;_++;var m=w++;return s=s===a,a.next().then(f,o),"$"+(s?"x":"X")+m.toString(16)}function g(s,a){if(a===null)return null;if(typeof a=="object"){switch(a.$$typeof){case M:if(e!==void 0&&s.indexOf(":")===-1){var f=D.get(this);if(f!==void 0)return e.set(f+":"+s,a),"$T"}throw Error("React Element cannot be passed to Server Functions from the Client without a temporary reference set. Pass a TemporaryReferenceSet to the options.");case J:f=a._payload;var A=a._init;d===null&&(d=new FormData),_++;try{var m=A(f),y=w++,B=C(m,y);return d.append(n+y,B),"$"+y.toString(16)}catch(p){if(typeof p=="object"&&p!==null&&typeof p.then=="function"){_++;var F=w++;return f=function(){try{var U=C(a,F),P=d;P.append(n+F,U),_--,_===0&&r(P)}catch(jt){o(jt)}},p.then(f,f),"$"+F.toString(16)}return o(p),null}finally{_--}}if(typeof a.then=="function"){d===null&&(d=new FormData),_++;var N=w++;return a.then(function(p){try{var U=C(p,N);p=d,p.append(n+N,U),_--,_===0&&r(p)}catch(P){o(P)}},o),"$@"+N.toString(16)}if(f=D.get(a),f!==void 0)if(x===a)x=null;else return f;else s.indexOf(":")===-1&&(f=D.get(this),f!==void 0&&(s=f+":"+s,D.set(a,s),e!==void 0&&e.set(s,a)));if(Ot(a))return a;if(a instanceof FormData){d===null&&(d=new FormData);var Qt=d;s=w++;var Lt=n+s+"_";return a.forEach(function(p,U){Qt.append(Lt+U,p)}),"$K"+s.toString(16)}if(a instanceof Map)return s=w++,f=C(Array.from(a),s),d===null&&(d=new FormData),d.append(n+s,f),"$Q"+s.toString(16);if(a instanceof Set)return s=w++,f=C(Array.from(a),s),d===null&&(d=new FormData),d.append(n+s,f),"$W"+s.toString(16);if(a instanceof ArrayBuffer)return s=new Blob([a]),f=w++,d===null&&(d=new FormData),d.append(n+f,s),"$A"+f.toString(16);if(a instanceof Int8Array)return i("O",a);if(a instanceof Uint8Array)return i("o",a);if(a instanceof Uint8ClampedArray)return i("U",a);if(a instanceof Int16Array)return i("S",a);if(a instanceof Uint16Array)return i("s",a);if(a instanceof Int32Array)return i("L",a);if(a instanceof Uint32Array)return i("l",a);if(a instanceof Float32Array)return i("G",a);if(a instanceof Float64Array)return i("g",a);if(a instanceof BigInt64Array)return i("M",a);if(a instanceof BigUint64Array)return i("m",a);if(a instanceof DataView)return i("V",a);if(typeof Blob=="function"&&a instanceof Blob)return d===null&&(d=new FormData),s=w++,d.append(n+s,a),"$B"+s.toString(16);if(s=Et(a))return f=s.call(a),f===a?(s=w++,f=C(Array.from(f),s),d===null&&(d=new FormData),d.append(n+s,f),"$i"+s.toString(16)):Array.from(f);if(typeof ReadableStream=="function"&&a instanceof ReadableStream)return u(a);if(s=a[W],typeof s=="function")return h(a,s.call(a));if(s=ot(a),s!==Dt&&(s===null||ot(s)!==null)){if(e===void 0)throw Error("Only plain objects, and a few built-ins, can be passed to Server Functions. Classes or null prototypes are not supported.");return"$T"}return a}if(typeof a=="string")return a[a.length-1]==="Z"&&this[s]instanceof Date?"$D"+a:(s=a[0]==="$"?"$"+a:a,s);if(typeof a=="boolean")return a;if(typeof a=="number")return Nt(a);if(typeof a>"u")return"$undefined";if(typeof a=="function"){if(f=at.get(a),f!==void 0)return s=JSON.stringify(f,g),d===null&&(d=new FormData),f=w++,d.set(n+f,s),"$F"+f.toString(16);if(e!==void 0&&s.indexOf(":")===-1&&(f=D.get(this),f!==void 0))return e.set(f+":"+s,a),"$T";throw Error("Client Functions cannot be passed directly to Server Functions. Only Functions passed from the Server can be passed back again.")}if(typeof a=="symbol"){if(e!==void 0&&s.indexOf(":")===-1&&(f=D.get(this),f!==void 0))return e.set(f+":"+s,a),"$T";throw Error("Symbols cannot be passed to a Server Function without a temporary reference set. Pass a TemporaryReferenceSet to the options.")}if(typeof a=="bigint")return"$n"+a.toString(10);throw Error("Type "+typeof a+" is not supported as an argument to a Server Function.")}function C(s,a){return typeof s=="object"&&s!==null&&(a="$"+a.toString(16),D.set(s,a),e!==void 0&&e.set(a,s)),x=s,JSON.stringify(s,g)}var w=1,_=0,d=null,D=new WeakMap,x=t,k=C(t,0);return d===null?r(k):(d.set(n+"0",k),_===0&&r(d)),function(){0<_&&(_=0,r(d===null?k:d))}}function lt(t,n){at.set(t,n)}function Rt(t,n){function e(){var i=Array.prototype.slice.call(arguments);return o?o.status==="fulfilled"?n(r,o.value.concat(i)):Promise.resolve(o).then(function(l){return n(r,l.concat(i))}):n(r,i)}var r=t.id,o=t.bound;return lt(e,{id:r,bound:o}),e}function S(t,n,e,r){this.status=t,this.value=n,this.reason=e,this._response=r}S.prototype=Object.create(Promise.prototype),S.prototype.then=function(t,n){switch(this.status){case"resolved_model":R(this);break;case"resolved_module":V(this)}switch(this.status){case"fulfilled":t(this.value);break;case"pending":case"blocked":t&&(this.value===null&&(this.value=[]),this.value.push(t)),n&&(this.reason===null&&(this.reason=[]),this.reason.push(n));break;default:n&&n(this.reason)}};function qt(t){switch(t.status){case"resolved_model":R(t);break;case"resolved_module":V(t)}switch(t.status){case"fulfilled":return t.value;case"pending":case"blocked":throw t;default:throw t.reason}}function z(t){return new S("pending",null,null,t)}function Y(t,n){return new S("rejected",null,n,t)}function b(t,n){for(var e=0;e<t.length;e++)(0,t[e])(n)}function X(t,n,e){switch(t.status){case"fulfilled":b(n,t.value);break;case"pending":case"blocked":if(t.value)for(var r=0;r<n.length;r++)t.value.push(n[r]);else t.value=n;if(t.reason){if(e)for(n=0;n<e.length;n++)t.reason.push(e[n])}else t.reason=e;break;case"rejected":e&&b(e,t.reason)}}function E(t,n){if(t.status!=="pending"&&t.status!=="blocked")t.reason.error(n);else{var e=t.reason;t.status="rejected",t.reason=n,e!==null&&b(e,n)}}function ut(t,n,e){return new S("resolved_model",(e?'{"done":true,"value":':'{"done":false,"value":')+n+"}",null,t)}function H(t,n,e){Z(t,(e?'{"done":true,"value":':'{"done":false,"value":')+n+"}")}function Z(t,n){if(t.status!=="pending")t.reason.enqueueModel(n);else{var e=t.value,r=t.reason;t.status="resolved_model",t.value=n,e!==null&&(R(t),X(t,e,r))}}function st(t,n){if(t.status==="pending"||t.status==="blocked"){var e=t.value,r=t.reason;t.status="resolved_module",t.value=n,e!==null&&(V(t),X(t,e,r))}}var v=null;function R(t){var n=v;v=null;var e=t.value;t.status="blocked",t.value=null,t.reason=null;try{var r=JSON.parse(e,t._response._fromJSON),o=t.value;if(o!==null&&(t.value=null,t.reason=null,b(o,r)),v!==null){if(v.errored)throw v.value;if(0<v.deps){v.value=r,v.chunk=t;return}}t.status="fulfilled",t.value=r}catch(i){t.status="rejected",t.reason=i}finally{v=n}}function V(t){try{var n=G(t.value);t.status="fulfilled",t.value=n}catch(e){t.status="rejected",t.reason=e}}function K(t,n){t._closed=!0,t._closedReason=n,t._chunks.forEach(function(e){e.status==="pending"&&E(e,n)})}function Q(t){return{$$typeof:J,_payload:t,_init:qt}}function q(t,n){var e=t._chunks,r=e.get(n);return r||(r=t._closed?Y(t,t._closedReason):z(t),e.set(n,r)),r}function ct(t,n,e,r,o,i){function l(h){for(var g=1;g<i.length;g++){for(;h.$$typeof===J;)if(h=h._payload,h===u.chunk)h=u.value;else if(h.status==="fulfilled")h=h.value;else{i.splice(0,g-1),h.then(l,c);return}h=h[i[g]]}if(g=o(r,h,n,e),n[e]=g,e===""&&u.value===null&&(u.value=g),n[0]===M&&typeof u.value=="object"&&u.value!==null&&u.value.$$typeof===M)switch(h=u.value,e){case"3":h.props=g}u.deps--,u.deps===0&&(g=u.chunk,g!==null&&g.status==="blocked"&&(h=g.value,g.status="fulfilled",g.value=u.value,h!==null&&b(h,u.value)))}function c(h){if(!u.errored){u.errored=!0,u.value=h;var g=u.chunk;g!==null&&g.status==="blocked"&&E(g,h)}}if(v){var u=v;u.deps++}else u=v={parent:null,chunk:null,value:null,deps:1,errored:!1};return t.then(l,c),null}function Bt(t,n,e,r){if(!t._serverReferenceConfig)return Rt(n,t._callServer);var o=pt(t._serverReferenceConfig,n.id);if(t=rt(o))n.bound&&(t=Promise.all([t,n.bound]));else if(n.bound)t=Promise.resolve(n.bound);else return G(o);if(v){var i=v;i.deps++}else i=v={parent:null,chunk:null,value:null,deps:1,errored:!1};return t.then(function(){var l=G(o);if(n.bound){var c=n.bound.value.slice(0);c.unshift(null),l=l.bind.apply(l,c)}if(e[r]=l,r===""&&i.value===null&&(i.value=l),e[0]===M&&typeof i.value=="object"&&i.value!==null&&i.value.$$typeof===M)switch(c=i.value,r){case"3":c.props=l}i.deps--,i.deps===0&&(l=i.chunk,l!==null&&l.status==="blocked"&&(c=l.value,l.status="fulfilled",l.value=i.value,c!==null&&b(c,i.value)))},function(l){if(!i.errored){i.errored=!0,i.value=l;var c=i.chunk;c!==null&&c.status==="blocked"&&E(c,l)}}),null}function O(t,n,e,r,o){n=n.split(":");var i=parseInt(n[0],16);switch(i=q(t,i),i.status){case"resolved_model":R(i);break;case"resolved_module":V(i)}switch(i.status){case"fulfilled":var l=i.value;for(i=1;i<n.length;i++){for(;l.$$typeof===J;)if(l=l._payload,l.status==="fulfilled")l=l.value;else return ct(l,e,r,t,o,n.slice(i-1));l=l[n[i]]}return o(t,l,e,r);case"pending":case"blocked":return ct(i,e,r,t,o,n);default:return v?(v.errored=!0,v.value=i.reason):v={parent:null,chunk:null,value:i.reason,deps:0,errored:!0},null}}function Ft(t,n){return new Map(n)}function Ut(t,n){return new Set(n)}function It(t,n){return new Blob(n.slice(1),{type:n[0]})}function Jt(t,n){t=new FormData;for(var e=0;e<n.length;e++)t.append(n[e][0],n[e][1]);return t}function Wt(t,n){return n[Symbol.iterator]()}function zt(t,n){return n}function Yt(t,n,e,r){if(r[0]==="$"){if(r==="$")return v!==null&&e==="0"&&(v={parent:v,chunk:null,value:null,deps:0,errored:!1}),M;switch(r[1]){case"$":return r.slice(1);case"L":return n=parseInt(r.slice(2),16),t=q(t,n),Q(t);case"@":return r.length===2?new Promise(function(){}):(n=parseInt(r.slice(2),16),q(t,n));case"S":return Symbol.for(r.slice(2));case"F":return r=r.slice(2),O(t,r,n,e,Bt);case"T":if(n="$"+r.slice(2),t=t._tempRefs,t==null)throw Error("Missing a temporary reference set but the RSC response returned a temporary reference. Pass a temporaryReference option with the set that was used with the reply.");return t.get(n);case"Q":return r=r.slice(2),O(t,r,n,e,Ft);case"W":return r=r.slice(2),O(t,r,n,e,Ut);case"B":return r=r.slice(2),O(t,r,n,e,It);case"K":return r=r.slice(2),O(t,r,n,e,Jt);case"Z":return gt();case"i":return r=r.slice(2),O(t,r,n,e,Wt);case"I":return 1/0;case"-":return r==="$-0"?-0:-1/0;case"N":return NaN;case"u":return;case"D":return new Date(Date.parse(r.slice(2)));case"n":return BigInt(r.slice(2));default:return r=r.slice(1),O(t,r,n,e,zt)}}return r}function Vt(){throw Error('Trying to call a function from "use server" but the callServer option was not implemented in your router runtime.')}function Pt(t,n,e,r,o,i,l){var c=new Map;this._bundlerConfig=t,this._serverReferenceConfig=n,this._moduleLoading=e,this._callServer=r!==void 0?r:Vt,this._encodeFormAction=o,this._nonce=i,this._chunks=c,this._stringDecoder=new TextDecoder,this._fromJSON=null,this._rowLength=this._rowTag=this._rowID=this._rowState=0,this._buffer=[],this._closed=!1,this._closedReason=null,this._tempRefs=l,this._fromJSON=Kt(this)}function L(t,n,e){var r=t._chunks,o=r.get(n);o&&o.status!=="pending"?o.reason.enqueueValue(e):r.set(n,new S("fulfilled",e,null,t))}function Gt(t,n,e){var r=t._chunks,o=r.get(n);e=JSON.parse(e,t._fromJSON);var i=mt(t._bundlerConfig,e);if(e=rt(i)){if(o){var l=o;l.status="blocked"}else l=new S("blocked",null,null,t),r.set(n,l);e.then(function(){return st(l,i)},function(c){return E(l,c)})}else o?st(o,i):r.set(n,new S("resolved_module",i,null,t))}function ft(t,n,e,r){var o=t._chunks,i=o.get(n);i?i.status==="pending"&&(t=i.value,i.status="fulfilled",i.value=e,i.reason=r,t!==null&&b(t,i.value)):o.set(n,new S("fulfilled",e,r,t))}function dt(t,n,e){var r=null;e=new ReadableStream({type:e,start:function(i){r=i}});var o=null;ft(t,n,e,{enqueueValue:function(i){o===null?r.enqueue(i):o.then(function(){r.enqueue(i)})},enqueueModel:function(i){if(o===null){var l=new S("resolved_model",i,null,t);R(l),l.status==="fulfilled"?r.enqueue(l.value):(l.then(function(u){return r.enqueue(u)},function(u){return r.error(u)}),o=l)}else{l=o;var c=z(t);c.then(function(u){return r.enqueue(u)},function(u){return r.error(u)}),o=c,l.then(function(){o===c&&(o=null),Z(c,i)})}},close:function(){if(o===null)r.close();else{var i=o;o=null,i.then(function(){return r.close()})}},error:function(i){if(o===null)r.error(i);else{var l=o;o=null,l.then(function(){return r.error(i)})}}})}function Xt(){return this}function Ht(t){return t={next:t},t[W]=Xt,t}function _t(t,n,e){var r=[],o=!1,i=0,l={};l=(l[W]=function(){var c=0;return Ht(function(u){if(u!==void 0)throw Error("Values cannot be passed to next() of AsyncIterables passed to Client Components.");if(c===r.length){if(o)return new S("fulfilled",{done:!0,value:void 0},null,t);r[c]=z(t)}return r[c++]})},l),ft(t,n,e?l[W]():l,{enqueueValue:function(c){if(i===r.length)r[i]=new S("fulfilled",{done:!1,value:c},null,t);else{var u=r[i],h=u.value,g=u.reason;u.status="fulfilled",u.value={done:!1,value:c},h!==null&&X(u,h,g)}i++},enqueueModel:function(c){i===r.length?r[i]=ut(t,c,!1):H(r[i],c,!1),i++},close:function(c){for(o=!0,i===r.length?r[i]=ut(t,c,!0):H(r[i],c,!0),i++;i<r.length;)H(r[i++],'"$undefined"',!0)},error:function(c){for(o=!0,i===r.length&&(r[i]=z(t));i<r.length;)E(r[i++],c)}})}function gt(){var t=Error("An error occurred in the Server Components render. The specific message is omitted in production builds to avoid leaking sensitive details. A digest property is included on this error instance which may provide additional details about the nature of the error.");return t.stack="Error: "+t.message,t}function j(t,n){for(var e=t.length,r=n.length,o=0;o<e;o++)r+=t[o].byteLength;r=new Uint8Array(r);for(var i=o=0;i<e;i++){var l=t[i];r.set(l,o),o+=l.byteLength}return r.set(n,o),r}function $(t,n,e,r,o,i){e=e.length===0&&r.byteOffset%i===0?r:j(e,r),o=new o(e.buffer,e.byteOffset,e.byteLength/i),L(t,n,o)}function Zt(t,n,e,r,o){switch(e){case 65:L(t,n,j(r,o).buffer);return;case 79:$(t,n,r,o,Int8Array,1);return;case 111:L(t,n,r.length===0?o:j(r,o));return;case 85:$(t,n,r,o,Uint8ClampedArray,1);return;case 83:$(t,n,r,o,Int16Array,2);return;case 115:$(t,n,r,o,Uint16Array,2);return;case 76:$(t,n,r,o,Int32Array,4);return;case 108:$(t,n,r,o,Uint32Array,4);return;case 71:$(t,n,r,o,Float32Array,4);return;case 103:$(t,n,r,o,Float64Array,8);return;case 77:$(t,n,r,o,BigInt64Array,8);return;case 109:$(t,n,r,o,BigUint64Array,8);return;case 86:$(t,n,r,o,DataView,1);return}for(var i=t._stringDecoder,l="",c=0;c<r.length;c++)l+=i.decode(r[c],At);switch(r=l+=i.decode(o),e){case 73:Gt(t,n,r);break;case 72:switch(n=r[0],r=r.slice(1),t=JSON.parse(r,t._fromJSON),r=Mt.d,n){case"D":r.D(t);break;case"C":typeof t=="string"?r.C(t):r.C(t[0],t[1]);break;case"L":n=t[0],e=t[1],t.length===3?r.L(n,e,t[2]):r.L(n,e);break;case"m":typeof t=="string"?r.m(t):r.m(t[0],t[1]);break;case"X":typeof t=="string"?r.X(t):r.X(t[0],t[1]);break;case"S":typeof t=="string"?r.S(t):r.S(t[0],t[1]===0?void 0:t[1],t.length===3?t[2]:void 0);break;case"M":typeof t=="string"?r.M(t):r.M(t[0],t[1])}break;case 69:e=JSON.parse(r),r=gt(),r.digest=e.digest,e=t._chunks,(o=e.get(n))?E(o,r):e.set(n,Y(t,r));break;case 84:e=t._chunks,(o=e.get(n))&&o.status!=="pending"?o.reason.enqueueValue(r):e.set(n,new S("fulfilled",r,null,t));break;case 78:case 68:case 87:throw Error("Failed to read a RSC payload created by a development version of React on the server while using a production version on the client. Always use matching versions on the server and the client.");case 82:dt(t,n,void 0);break;case 114:dt(t,n,"bytes");break;case 88:_t(t,n,!1);break;case 120:_t(t,n,!0);break;case 67:(t=t._chunks.get(n))&&t.status==="fulfilled"&&t.reason.close(r===""?'"$undefined"':r);break;case 80:r=Error("A Server Component was postponed. The reason is omitted in production builds to avoid leaking sensitive details."),r.$$typeof=bt,r.stack="Error: "+r.message,e=t._chunks,(o=e.get(n))?E(o,r):e.set(n,Y(t,r));break;default:e=t._chunks,(o=e.get(n))?Z(o,r):e.set(n,new S("resolved_model",r,null,t))}}function Kt(t){return function(n,e){if(typeof e=="string")return Yt(t,this,n,e);if(typeof e=="object"&&e!==null){if(e[0]===M){if(n={$$typeof:M,type:e[1],key:e[2],ref:null,props:e[3]},v!==null){if(e=v,v=e.parent,e.errored)n=Y(t,e.value),n=Q(n);else if(0<e.deps){var r=new S("blocked",null,null,t);e.value=n,e.chunk=r,n=Q(r)}}}else n=e;return n}return e}}function ht(t){return new Pt(null,null,null,t&&t.callServer?t.callServer:void 0,void 0,void 0,t&&t.temporaryReferences?t.temporaryReferences:void 0)}function vt(t,n){function e(i){var l=i.value;if(i.done)K(t,Error("Connection closed."));else{var c=0,u=t._rowState;i=t._rowID;for(var h=t._rowTag,g=t._rowLength,C=t._buffer,w=l.length;c<w;){var _=-1;switch(u){case 0:_=l[c++],_===58?u=1:i=i<<4|(96<_?_-87:_-48);continue;case 1:u=l[c],u===84||u===65||u===79||u===111||u===85||u===83||u===115||u===76||u===108||u===71||u===103||u===77||u===109||u===86?(h=u,u=2,c++):64<u&&91>u||u===35||u===114||u===120?(h=u,u=3,c++):(h=0,u=3);continue;case 2:_=l[c++],_===44?u=4:g=g<<4|(96<_?_-87:_-48);continue;case 3:_=l.indexOf(10,c);break;case 4:_=c+g,_>l.length&&(_=-1)}var d=l.byteOffset+c;if(-1<_)g=new Uint8Array(l.buffer,d,_-c),Zt(t,i,h,C,g),c=_,u===3&&c++,g=i=h=u=0,C.length=0;else{l=new Uint8Array(l.buffer,d,l.byteLength-c),C.push(l),g-=l.byteLength;break}}return t._rowState=u,t._rowID=i,t._rowTag=h,t._rowLength=g,o.read().then(e).catch(r)}}function r(i){K(t,i)}var o=n.getReader();o.read().then(e).catch(r)}return T.createFromFetch=function(t,n){var e=ht(n);return t.then(function(r){vt(e,r.body)},function(r){K(e,r)}),q(e,0)},T.createFromReadableStream=function(t,n){return n=ht(n),vt(n,t),q(n,0)},T.createServerReference=function(t,n){function e(){var r=Array.prototype.slice.call(arguments);return n(t,r)}return lt(e,{id:t,bound:null}),e},T.createTemporaryReferenceSet=function(){return new Map},T.encodeReply=function(t,n){return new Promise(function(e,r){var o=Tt(t,"",n&&n.temporaryReferences?n.temporaryReferences:void 0,e,r);if(n&&n.signal){var i=n.signal;if(i.aborted)o(i.reason);else{var l=function(){o(i.reason),i.removeEventListener("abort",l)};i.addEventListener("abort",l)}}})},T}var yt;function nn(){return yt||(yt=1,tt.exports=kt()),tt.exports}export{nn as r};
