import{join as v,dirname as D}from"node:path";import{fileURLToPath as H}from"node:url";import g from"node:async_hooks";import{parentPort as k}from"node:worker_threads";import U from"picocolors";function X(o){return o?.replace(/\\/g,"/")}function le(o){return typeof Deno<"u"?new Uint8Array(o):Buffer.copyBytesFrom(o)}function ie(o){return typeof Deno<"u"?new Uint8Array(o.reduce((e,t)=>[...e,...t],[])):Buffer.concat(o)}function F(o){return typeof Deno<"u"?o():setImmediate(o)}typeof Deno<"u"&&(globalThis.process={env:Deno.env.toObject(),cwd:Deno.cwd,argv:[Deno.execPath(),Deno.mainModule,...Deno.args],exit:Deno.exit,emit:function(){}});X(v(D(H(import.meta.url)),".."));class G{constructor(){this.store=new Map,this.contextMap=new Map,this.hook=g.createHook({init:(e,t,s)=>{this.contextMap.has(s)&&this.contextMap.set(e,this.contextMap.get(s))},destroy:e=>{this.contextMap.delete(e)}}),this.hook.enable()}run(e,t,...s){const n=g.executionAsyncId();this.contextMap.set(n,e);let c;try{c=t(...s)}finally{this.contextMap.delete(n)}return c}enterWith(e){const t=g.executionAsyncId();this.store.set(t,e)}getStore(){const e=g.executionAsyncId();return this.store.get(e)||this.contextMap.get(e)}}let N=k===null;class W{constructor(){typeof g.AsyncLocalStorage<"u"?this.asyncLocalStorage=new g.AsyncLocalStorage:(N&&(console.warn(U.yellow("AsyncLocalStorage is not supported, falling back to async hooks implementation")),N=!1),this.customAsyncLocalStorage=new G)}run(e,t,...s){return this.asyncLocalStorage?this.asyncLocalStorage.run(e,t,...s):this.customAsyncLocalStorage.run(e,t,...s)}enterWith(e){this.asyncLocalStorage?this.asyncLocalStorage.enterWith(e):this.customAsyncLocalStorage.enterWith(e)}getStore(){return this.asyncLocalStorage?this.asyncLocalStorage.getStore():this.customAsyncLocalStorage.getStore()}}const w=globalThis.__react_server_context__=globalThis.__react_server_context__||new W;function m(o){const e=w.getStore();return o?e?.[o]??null:e}function R(o,e){const t=w.getStore(),s=typeof o=="object"?o:{[o]:e};Reflect.ownKeys(s).forEach(n=>{t[n]=s[n]})}const fe=Symbol.for("LOGGER_CONTEXT"),ue=Symbol.for("FORM_DATA_PARSER"),pe=Symbol.for("MAIN_MODULE"),me=Symbol.for("COLLECT_STYLESHEETS"),P=Symbol.for("HTTP_CONTEXT"),B=Symbol.for("HTTP_STATUS"),he=Symbol.for("HTTP_HEADERS"),j=Symbol.for("HTTP_OUTLET"),ye=Symbol.for("HTTP_RESPONSE"),Te=Symbol.for("REDIRECT_CONTEXT"),Ee=Symbol.for("ERROR_BOUNDARY"),Se=Symbol.for("ERROR_COMPONENT"),ge=Symbol.for("ERROR_CONTEXT"),z=Symbol.for("CACHE_CONTEXT"),Y=Symbol.for("FLIGHT_CACHE"),K=Symbol.for("HTML_CACHE"),_e=Symbol.for("CONFIG_ROOT"),de=Symbol.for("CONFIG_CONTEXT"),V=Symbol.for("MANIFEST"),Re=Symbol.for("ROUTE_MATCH"),Oe=Symbol.for("STYLES_CONTEXT"),be=Symbol.for("ACTION_CONTEXT"),Ce=Symbol.for("RELOAD"),q=Symbol.for("RENDER"),Ae=Symbol.for("RENDER_STREAM"),M=Symbol.for("RENDER_CONTEXT"),L=Symbol.for("RENDER_WAIT"),Pe=Symbol.for("PRELUDE_HTML"),Ne=Symbol.for("POSTPONE_STATE"),Le=Symbol.for("IMPORT_MAP"),xe=Symbol.for("CACHE_MISS"),b=globalThis.__react_server_client_components__=globalThis.__react_server_client_components__||new Map,we=({remote:o,origin:e})=>new Proxy({},{get(t,s){let n=b.get(s);const[c,i="default"]=s.split("#");if(!b.has(s)){const r=m(V);r?n={id:`${o?e:""}/${r.browser[c.replace(/^(?:__\/)+/,f=>f.replace(/__\//g,"../"))]?.file}`,chunks:[],name:i,async:!0}:n={id:c,chunks:[],name:i,async:!0},b.set(s,n)}return n}});function Q(){return m(P).url}const J=Object.getOwnPropertyNames(URL.prototype).filter(o=>{const e=Object.getOwnPropertyDescriptor(URL.prototype,o);return e&&e.set});function Me(o){const e=m(P),t=typeof o=="string"?new URL(o,e.url):o;return J.forEach(s=>{e.url[s]=t[s]}),e.url}function Z(){return decodeURIComponent(m(j)??m(M)?.outlet??m(P)?.request?.headers?.get("react-server-outlet")??"PAGE_ROOT").replace(/[^a-zA-Z0-9_]/g,"_")}const x=[];async function Ie(){for(;x.length>0;)await x.shift().call(null)}function ve(o,e=1/0){return t=>($(e),o(t))}function $(o=1/0){const e=Q(),t=Z(),s=m(z);o===!0&&(o=1/0);const n=Date.now()+o;s.setExpiry([e,"text/x-component",t,Y],n),s.setExpiry([e,"text/html",t,K],n)}function De(o=200,e=void 0){R(B,{status:o,statusText:e})}const d=Symbol("RENDER_LOCK");function He(){const o=m(q),e=m(M),t=e?.flags.isRemote,s=e?.flags.isFunction;return{render:o,lock:c=>{R(d,(m(d)??0)+1);let i;const r=new Promise(f=>{i=()=>{F(()=>{const p=m(d);R(d,p-1),p===1&&f(L)})}});return R(L,r),c?new Promise(async(f,p)=>{try{await c(),f()}catch(T){p(T)}finally{i()}}):i},isRemote:t,isFunction:s}}const C=new Map,A=new Map;function ee(o){if(C.has(o))return C.get(o);const e=[];let t="",s=!1,n=!1,c=0,i,r=0;for(const f of o)f==="{"&&!s?(t&&e.push({type:"static",value:t}),t="{",s=!0):f==="}"&&s?(e.push({type:"escaped",value:t+"}"}),t="",s=!1):f==="["&&!s&&!n?(t&&e.push({type:"static",value:t}),t="[",n=!0,i=r,c++):f==="["&&n?(t+=f,c++):f==="]"&&n?(c--,c===0?(e.push({type:"param",value:t+"]",start:i,end:r+1}),t="",n=!1,i=null):t+=f):f==="/"&&!s&&!n?(t&&e.push({type:"static",value:t}),e.push({type:"separator"}),t=""):t+=f,r++;return t&&e.push({type:"static",value:t}),C.set(o,e),e}function te(o){if(A.has(o))return A.get(o);const e=ee(o),t=[];let s=[];for(const n of e)if(n.type==="separator")s.length&&(t.push(s),s=[]);else if(n.type==="escaped")s.push({type:"static",value:n.value.slice(1,-1)});else if(n.type==="param"){const c=n.value.slice(1,-1);if(c.startsWith("..."))s.push({type:"catchAll",param:c.slice(3),start:n.start,end:n.end});else if(c.startsWith("[...")&&c.endsWith("]"))s.push({type:"optionalCatchAll",param:c.slice(4,-1),start:n.start,end:n.end});else if(c.startsWith("[")&&c.endsWith("]")){const[i,r]=c.slice(1,-1).split("=");s.push({type:"optionalParam",param:i,matcher:r,start:n.start,end:n.end})}else{const[i,r]=c.split("=");s.push({type:"param",param:i,matcher:r,start:n.start,end:n.end})}}else n.type==="static"&&s.push({type:"static",value:n.value});return s.length&&t.push(s),A.set(o,t),t}function ke(o,e,t={}){if(o==="*")return{};const s=te(o),n=e.split("/").filter(Boolean),c={};let i=0,r=0,f=[];for(;i<s.length;){const p=s[i];let T=n[r],E=!0,y={};if(p.length>1){let a=0;for(let l=0;l<p.length;l++){const u=p[l];let S=l+1,h=p[S];for(;h?.type==="param";)h=p[++S];if(u.type==="static"){if(T.slice(a,a+u.value.length)!==u.value)return null;a+=u.value.length}else if(u.type==="param"||u.type==="optionalParam"){const _=h?T?.indexOf(h.value,a)??0:T.length,O=T?.slice(a,_)??"";if(!O&&u.type==="param")return null;if(u.matcher&&typeof t.matchers[u.matcher]=="function"){const I=t.matchers[u.matcher];if(!I(O)){if(u.type==="param")return null;if(u.type==="optionalParam"){E=!1;continue}}}y[u.param]=O,a=_}}r++}else for(const a of p)if(a.type==="static"){if(T!==a.value){E=!1;break}r++}else if(a.type==="param"){if(r>=n.length){E=!1;break}if(a.matcher&&typeof t.matchers[a.matcher]=="function"){const l=t.matchers[a.matcher];if(!l(n[r])){E=!1;break}}y[a.param]=n[r],r++}else if(a.type==="optionalParam")r<n.length&&(!a.matcher||typeof t.matchers[a.matcher]=="function"&&t.matchers[a.matcher](n[r]))&&(f.push(a),y[a.param]=n[r],r++);else if(a.type==="catchAll"||a.type==="optionalCatchAll"){const l=n.slice(r);if(i<s.length-1){const u=s.slice(i+1).find(S=>S.some(h=>h.type==="static"));if(u){const S=u.find(_=>_.type==="static").value,h=l.indexOf(S);if(h!==-1)y[a.param]=l.slice(0,h),r+=h;else if(a.type==="catchAll"){E=!1;break}}else y[a.param]=l,r=n.length}else y[a.param]=l,r=n.length;if(a.type==="catchAll"&&y[a.param].length===0){E=!1;break}}if(E)Object.assign(c,y),i++;else{if(p.some(l=>l.type==="static")&&f.length>0){r--;const l=f.pop();l.type==="optionalParam"&&(c[l.param]=void 0);continue}if(p.every(l=>l.type==="optionalParam"||l.type==="optionalCatchAll"))s.forEach(l=>{c[l.param]=l.type==="optionalCatchAll"?[]:void 0}),i++;else return null}}return t.exact&&r<n.length?null:c}const oe=`.react-server-global-error * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  .react-server-global-error {
    font-family: system-ui, -apple-system, sans-serif;
    line-height: 1.5;
    padding: 1rem;
    background: #fff !important;
    display: block;
  }
  
  .react-server-global-error h1 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: #e11d48;
  }
  
  .react-server-global-error pre {
    margin: 1rem 0;
    padding: 1rem;
    background: #f1f5f9;
    color: #374151;
    border-radius: 0.5rem;
    font-size: 0.875rem;
    width: 100%;
    overflow: auto;
    white-space: pre-wrap;
    word-wrap: break-word;
  }`,Ue=`${oe}
  
  .react-server-global-error button {
    padding: 0.5rem 1rem;
    background: #0ea5e9;
    color: white;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
  }
  
  .react-server-global-error button:hover {
    background: #0284c7;
  }`;export{be as A,Q as B,_e as C,ke as D,Se as E,ue as F,De as G,P as H,Le as I,$ as J,He as K,fe as L,pe as M,oe as N,Ue as O,Pe as P,ve as Q,M as R,Oe as S,me as T,V as U,Te as a,Y as b,R as c,K as d,z as e,xe as f,m as g,Ce as h,Ie as i,Ee as j,he as k,we as l,F as m,L as n,le as o,ie as p,B as q,Me as r,ye as s,w as t,Z as u,Ne as v,ge as w,de as x,Ae as y,Re as z};
