(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();const x={};function J(e){x.context=e}const it=(e,t)=>e===t,lt=Symbol("solid-proxy"),le={equals:it};let Oe=Ve;const U=1,ue=2,Ue={owned:null,cleanups:null,context:null,owner:null},me={};var m=null;let q=null,v=null,C=null,T=null,xe=0;const[ut,Ln]=$(!1);function ke(e,t){const n=v,r=m,o=e.length===0,s=o?Ue:{owned:null,cleanups:null,context:null,owner:t||r},l=o?e:()=>e(()=>L(()=>$e(s)));m=s,v=null;try{return O(l,!0)}finally{v=n,m=r}}function $(e,t){t=t?Object.assign({},le,t):le;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},r=o=>(typeof o=="function"&&(o=o(n.value)),qe(n,o));return[Me.bind(n),r]}function Le(e,t,n){const r=de(e,t,!0,U);G(r)}function A(e,t,n){const r=de(e,t,!1,U);G(r)}function je(e,t,n){Oe=yt;const r=de(e,t,!1,U);r.user=!0,T?T.push(r):G(r)}function S(e,t,n){n=n?Object.assign({},le,n):le;const r=de(e,t,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,G(r),Me.bind(r)}function ct(e,t,n){let r,o,s;arguments.length===2&&typeof t=="object"||arguments.length===1?(r=!0,o=e,s=t||{}):(r=e,o=t,s=n||{});let l=null,i=me,u=null,c=!1,a="initialValue"in s,d=typeof r=="function"&&S(r);const g=new Set,[b,p]=(s.storage||$)(s.initialValue),[R,j]=$(void 0),[V,I]=$(void 0,{equals:!1}),[N,z]=$(a?"ready":"unresolved");if(x.context){u=`${x.context.id}${x.context.count++}`;let f;s.ssrLoadFrom==="initial"?i=s.initialValue:x.load&&(f=x.load(u))&&(i=f[0])}function D(f,h,P,E){return l===f&&(l=null,a=!0,(f===i||h===i)&&s.onHydrated&&queueMicrotask(()=>s.onHydrated(E,{value:h})),i=me,pe(h,P)),h}function pe(f,h){O(()=>{h||p(()=>f),j(h),z(h?"errored":"ready");for(const P of g.keys())P.decrement();g.clear()},!1)}function y(){const f=gt,h=b(),P=R();if(P&&!l)throw P;return v&&!v.user&&f&&Le(()=>{V(),l&&(f.resolved||g.has(f)||(f.increment(),g.add(f)))}),h}function w(f=!0){if(f!==!1&&c)return;c=!1;const h=d?d():r;if(h==null||h===!1){D(l,L(b));return}const P=i!==me?i:L(()=>o(h,{value:b(),refetching:f}));return typeof P!="object"||!("then"in P)?(D(l,P),P):(l=P,c=!0,queueMicrotask(()=>c=!1),O(()=>{z(a?"refreshing":"pending"),I()},!1),P.then(E=>D(P,E,void 0,h),E=>D(P,void 0,Ke(E))))}return Object.defineProperties(y,{state:{get:()=>N()},error:{get:()=>R()},loading:{get(){const f=N();return f==="pending"||f==="refreshing"}},latest:{get(){if(!a)return y();const f=R();if(f&&!l)throw f;return b()}}}),d?Le(()=>w(!1)):w(!1),[y,{refetch:w,mutate:p}]}function L(e){let t,n=v;return v=null,t=e(),v=n,t}function De(e,t,n){const r=Array.isArray(e);let o,s=n&&n.defer;return l=>{let i;if(r){i=Array(e.length);for(let c=0;c<e.length;c++)i[c]=e[c]()}else i=e();if(s){s=!1;return}const u=L(()=>t(i,o,l));return o=i,u}}function Be(e){return m===null||(m.cleanups===null?m.cleanups=[e]:m.cleanups.push(e)),e}function at(){return m}function ft(e,t){const n=m;m=e;try{return O(t,!0)}finally{m=n}}function dt(e){const t=v,n=m;return Promise.resolve().then(()=>{v=t,m=n;let r;return O(e,!1),v=m=null,r?r.done:void 0})}function ht(){return[ut,dt]}function Fe(e){const t=Symbol("context");return{id:t,Provider:vt(t),defaultValue:e}}function Se(e){let t;return(t=We(m,e.id))!==void 0?t:e.defaultValue}function Ce(e){const t=S(e),n=S(()=>we(t()));return n.toArray=()=>{const r=n();return Array.isArray(r)?r:r!=null?[r]:[]},n}let gt;function Me(){const e=q;if(this.sources&&(this.state||e))if(this.state===U||e)G(this);else{const t=C;C=null,O(()=>ae(this),!1),C=t}if(v){const t=this.observers?this.observers.length:0;v.sources?(v.sources.push(this),v.sourceSlots.push(t)):(v.sources=[this],v.sourceSlots=[t]),this.observers?(this.observers.push(v),this.observerSlots.push(v.sources.length-1)):(this.observers=[v],this.observerSlots=[v.sources.length-1])}return this.value}function qe(e,t,n){let r=e.value;return(!e.comparator||!e.comparator(r,t))&&(e.value=t,e.observers&&e.observers.length&&O(()=>{for(let o=0;o<e.observers.length;o+=1){const s=e.observers[o],l=q&&q.running;l&&q.disposed.has(s),(l&&!s.tState||!l&&!s.state)&&(s.pure?C.push(s):T.push(s),s.observers&&He(s)),l||(s.state=U)}if(C.length>1e6)throw C=[],new Error},!1)),t}function G(e){if(!e.fn)return;$e(e);const t=m,n=v,r=xe;v=m=e,pt(e,e.value,r),v=n,m=t}function pt(e,t,n){let r;try{r=e.fn(t)}catch(o){e.pure&&(e.state=U),Ge(o)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?qe(e,r):e.value=r,e.updatedAt=n)}function de(e,t,n,r=U,o){const s={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:m,context:null,pure:n};return m===null||m!==Ue&&(m.owned?m.owned.push(s):m.owned=[s]),s}function ce(e){const t=q;if(e.state===0||t)return;if(e.state===ue||t)return ae(e);if(e.suspense&&L(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<xe);)(e.state||t)&&n.push(e);for(let r=n.length-1;r>=0;r--)if(e=n[r],e.state===U||t)G(e);else if(e.state===ue||t){const o=C;C=null,O(()=>ae(e,n[0]),!1),C=o}}function O(e,t){if(C)return e();let n=!1;t||(C=[]),T?n=!0:T=[],xe++;try{const r=e();return mt(n),r}catch(r){C||(T=null),Ge(r)}}function mt(e){if(C&&(Ve(C),C=null),e)return;const t=T;T=null,t.length&&O(()=>Oe(t),!1)}function Ve(e){for(let t=0;t<e.length;t++)ce(e[t])}function yt(e){let t,n=0;for(t=0;t<e.length;t++){const r=e[t];r.user?e[n++]=r:ce(r)}for(x.context&&J(),t=0;t<n;t++)ce(e[t])}function ae(e,t){const n=q;e.state=0;for(let r=0;r<e.sources.length;r+=1){const o=e.sources[r];o.sources&&(o.state===U||n?o!==t&&ce(o):(o.state===ue||n)&&ae(o,t))}}function He(e){const t=q;for(let n=0;n<e.observers.length;n+=1){const r=e.observers[n];(!r.state||t)&&(r.state=ue,r.pure?C.push(r):T.push(r),r.observers&&He(r))}}function $e(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),r=e.sourceSlots.pop(),o=n.observers;if(o&&o.length){const s=o.pop(),l=n.observerSlots.pop();r<o.length&&(s.sourceSlots[l]=r,o[r]=s,n.observerSlots[r]=l)}}if(e.owned){for(t=0;t<e.owned.length;t++)$e(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function Ke(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function Ge(e){throw e=Ke(e),e}function We(e,t){return e?e.context&&e.context[t]!==void 0?e.context[t]:We(e.owner,t):void 0}function we(e){if(typeof e=="function"&&!e.length)return we(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const r=we(e[n]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return e}function vt(e){return function(n){let r;return A(()=>r=L(()=>(m.context={[e]:n.value},Ce(()=>n.children)))),r}}function _(e,t){return L(()=>e(t||{}))}function te(){return!0}const wt={get(e,t,n){return t===lt?n:e.get(t)},has(e,t){return e.has(t)},set:te,deleteProperty:te,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:te,deleteProperty:te}},ownKeys(e){return e.keys()}};function ye(e){return(e=typeof e=="function"?e():e)==null?{}:e}function _t(...e){return new Proxy({get(t){for(let n=e.length-1;n>=0;n--){const r=ye(e[n])[t];if(r!==void 0)return r}},has(t){for(let n=e.length-1;n>=0;n--)if(t in ye(e[n]))return!0;return!1},keys(){const t=[];for(let n=0;n<e.length;n++)t.push(...Object.keys(ye(e[n])));return[...new Set(t)]}},wt)}function ne(e){let t,n;const r=o=>{const s=x.context;if(s){const[i,u]=$();(n||(n=e())).then(c=>{J(s),u(()=>c.default),J()}),t=i}else if(t){const i=t();if(i)return i(o)}else{const[i]=ct(()=>(n||(n=e())).then(u=>u.default));t=i}let l;return S(()=>(l=t())&&L(()=>{if(!s)return l(o);const i=x.context;J(s);const u=l(o);return J(i),u}))};return r.preload=()=>n||((n=e()).then(o=>t=()=>o.default),n),r}function ze(e){let t=!1;const n=e.keyed,r=S(()=>e.when,void 0,{equals:(o,s)=>t?o===s:!o==!s});return S(()=>{const o=r();if(o){const s=e.children,l=typeof s=="function"&&s.length>0;return t=n||l,l?L(()=>s(o)):s}return e.fallback})}function bt(e,t,n){let r=n.length,o=t.length,s=r,l=0,i=0,u=t[o-1].nextSibling,c=null;for(;l<o||i<s;){if(t[l]===n[i]){l++,i++;continue}for(;t[o-1]===n[s-1];)o--,s--;if(o===l){const a=s<r?i?n[i-1].nextSibling:n[s-i]:u;for(;i<s;)e.insertBefore(n[i++],a)}else if(s===i)for(;l<o;)(!c||!c.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[s-1]&&n[i]===t[o-1]){const a=t[--o].nextSibling;e.insertBefore(n[i++],t[l++].nextSibling),e.insertBefore(n[--s],a),t[o]=n[s]}else{if(!c){c=new Map;let d=i;for(;d<s;)c.set(n[d],d++)}const a=c.get(t[l]);if(a!=null)if(i<a&&a<s){let d=l,g=1,b;for(;++d<o&&d<s&&!((b=c.get(t[d]))==null||b!==a+g);)g++;if(g>a-i){const p=t[l];for(;i<a;)e.insertBefore(n[i++],p)}else e.replaceChild(n[i++],t[l++])}else l++;else t[l++].remove()}}}const Re="_$DX_DELEGATE";function Pt(e,t,n){let r;return ke(o=>{r=o,t===document?e():M(t,e(),t.firstChild?null:void 0,n)}),()=>{r(),t.textContent=""}}function W(e,t,n){const r=document.createElement("template");r.innerHTML=e;let o=r.content.firstChild;return n&&(o=o.firstChild),o}function xt(e,t=window.document){const n=t[Re]||(t[Re]=new Set);for(let r=0,o=e.length;r<o;r++){const s=e[r];n.has(s)||(n.add(s),t.addEventListener(s,Ct))}}function Y(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function k(e,t){t==null?e.removeAttribute("class"):e.className=t}function St(e,t,n={}){const r=e.style,o=typeof n=="string";if(t==null&&o||typeof t=="string")return r.cssText=t;o&&(r.cssText=void 0,n={}),t||(t={});let s,l;for(l in n)t[l]==null&&r.removeProperty(l),delete n[l];for(l in t)s=t[l],s!==n[l]&&(r.setProperty(l,s),n[l]=s);return n}function M(e,t,n,r){if(n!==void 0&&!r&&(r=[]),typeof t!="function")return fe(e,t,r,n);A(o=>fe(e,t(),o,n),r)}function Ct(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),x.registry&&!x.done&&(x.done=!0,document.querySelectorAll("[id^=pl-]").forEach(r=>r.remove()));n!==null;){const r=n[t];if(r&&!n.disabled){const o=n[`${t}Data`];if(o!==void 0?r.call(n,o,e):r.call(n,e),e.cancelBubble)return}n=n.host&&n.host!==n&&n.host instanceof Node?n.host:n.parentNode}}function fe(e,t,n,r,o){for(x.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const s=typeof t,l=r!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,s==="string"||s==="number"){if(x.context)return n;if(s==="number"&&(t=t.toString()),l){let i=n[0];i&&i.nodeType===3?i.data=t:i=document.createTextNode(t),n=H(e,n,r,i)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||s==="boolean"){if(x.context)return n;n=H(e,n,r)}else{if(s==="function")return A(()=>{let i=t();for(;typeof i=="function";)i=i();n=fe(e,i,n,r)}),()=>n;if(Array.isArray(t)){const i=[],u=n&&Array.isArray(n);if(_e(i,t,n,o))return A(()=>n=fe(e,i,n,r,!0)),()=>n;if(x.context){if(!i.length)return n;for(let c=0;c<i.length;c++)if(i[c].parentNode)return n=i}if(i.length===0){if(n=H(e,n,r),l)return n}else u?n.length===0?Ie(e,i,r):bt(e,n,i):(n&&H(e),Ie(e,i));n=i}else if(t instanceof Node){if(x.context&&t.parentNode)return n=l?[t]:t;if(Array.isArray(n)){if(l)return n=H(e,n,r,t);H(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function _e(e,t,n,r){let o=!1;for(let s=0,l=t.length;s<l;s++){let i=t[s],u=n&&n[s];if(i instanceof Node)e.push(i);else if(!(i==null||i===!0||i===!1))if(Array.isArray(i))o=_e(e,i,u)||o;else if(typeof i=="function")if(r){for(;typeof i=="function";)i=i();o=_e(e,Array.isArray(i)?i:[i],Array.isArray(u)?u:[u])||o}else e.push(i),o=!0;else{const c=String(i);u&&u.nodeType===3&&u.data===c?e.push(u):e.push(document.createTextNode(c))}}return o}function Ie(e,t,n){for(let r=0,o=t.length;r<o;r++)e.insertBefore(t[r],n)}function H(e,t,n,r){if(n===void 0)return e.textContent="";const o=r||document.createTextNode("");if(t.length){let s=!1;for(let l=t.length-1;l>=0;l--){const i=t[l];if(o!==i){const u=i.parentNode===e;!s&&!l?u?e.replaceChild(o,i):e.insertBefore(o,n):u&&i.remove()}else s=!0}}else e.insertBefore(o,n);return[o]}function $t(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function Et([e,t],n,r){return[n?()=>n(e()):e,r?o=>t(r(o)):t]}function At(e){try{return document.querySelector(e)}catch{return null}}function Lt(e,t){const n=At(`#${e}`);n?n.scrollIntoView():t&&window.scrollTo(0,0)}function Rt(e,t,n,r){let o=!1;const s=i=>typeof i=="string"?{value:i}:i,l=Et($(s(e()),{equals:(i,u)=>i.value===u.value}),void 0,i=>(!o&&t(i),i));return n&&Be(n((i=e())=>{o=!0,l[1](s(i)),o=!1})),{signal:l,utils:r}}function It(e){if(e){if(Array.isArray(e))return{signal:e}}else return{signal:$({value:""})};return e}function Nt(){return Rt(()=>({value:window.location.pathname+window.location.search+window.location.hash,state:history.state}),({value:e,replace:t,scroll:n,state:r})=>{t?window.history.replaceState(r,"",e):window.history.pushState(r,"",e),Lt(window.location.hash.slice(1),n)},e=>$t(window,"popstate",()=>e()),{go:e=>window.history.go(e)})}const Tt=/^(?:[a-z0-9]+:)?\/\//i,Ot=/^\/+|\/+$/g;function Q(e,t=!1){const n=e.replace(Ot,"");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function ie(e,t,n){if(Tt.test(t))return;const r=Q(e),o=n&&Q(n);let s="";return!o||t.startsWith("/")?s=r:o.toLowerCase().indexOf(r.toLowerCase())!==0?s=r+o:s=o,(s||"/")+Q(t,!s)}function Ut(e,t){if(e==null)throw new Error(t);return e}function Xe(e,t){return Q(e).replace(/\/*(\*.*)?$/g,"")+Q(t)}function kt(e){const t={};return e.searchParams.forEach((n,r)=>{t[r]=n}),t}function K(e,t){return decodeURIComponent(t?e.replace(/\+/g," "):e)}function jt(e,t){const[n,r]=e.split("/*",2),o=n.split("/").filter(Boolean),s=o.length;return l=>{const i=l.split("/").filter(Boolean),u=i.length-s;if(u<0||u>0&&r===void 0&&!t)return null;const c={path:s?"":"/",params:{}};for(let a=0;a<s;a++){const d=o[a],g=i[a];if(d[0]===":")c.params[d.slice(1)]=g;else if(d.localeCompare(g,void 0,{sensitivity:"base"})!==0)return null;c.path+=`/${g}`}return r&&(c.params[r]=u?i.slice(-u).join("/"):""),c}}function Dt(e){const[t,n]=e.pattern.split("/*",2),r=t.split("/").filter(Boolean);return r.reduce((o,s)=>o+(s.startsWith(":")?2:3),r.length-(n===void 0?0:1))}function Je(e){const t=new Map,n=at();return new Proxy({},{get(r,o){return t.has(o)||ft(n,()=>t.set(o,S(()=>e()[o]))),t.get(o)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}function Qe(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),r=e.slice(t.index+t[0].length);const o=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(r);)o.push(n+=t[1]),r=r.slice(t[0].length);return Qe(r).reduce((s,l)=>[...s,...o.map(i=>i+l)],[])}const Bt=100,Ye=Fe(),he=Fe(),ge=()=>Ut(Se(Ye),"Make sure your app is wrapped in a <Router />");let Z;const Ze=()=>Z||Se(he)||ge().base,Ft=()=>ge().navigatorFactory(),et=()=>ge().location;function Mt(e,t="",n){const{component:r,data:o,children:s}=e,l=!s||Array.isArray(s)&&!s.length,i={key:e,element:r?()=>_(r,{}):()=>{const{element:u}=e;return u===void 0&&n?_(n,{}):u},preload:e.component?r.preload:e.preload,data:o};return tt(e.path).reduce((u,c)=>{for(const a of Qe(c)){const d=Xe(t,a),g=l?d:d.split("/*",1)[0];u.push({...i,originalPath:a,pattern:g,matcher:jt(g,!l)})}return u},[])}function qt(e,t=0){return{routes:e,score:Dt(e[e.length-1])*1e4-t,matcher(n){const r=[];for(let o=e.length-1;o>=0;o--){const s=e[o],l=s.matcher(n);if(!l)return null;r.unshift({...l,route:s})}return r}}}function tt(e){return Array.isArray(e)?e:[e]}function nt(e,t="",n,r=[],o=[]){const s=tt(e);for(let l=0,i=s.length;l<i;l++){const u=s[l];if(u&&typeof u=="object"&&u.hasOwnProperty("path")){const c=Mt(u,t,n);for(const a of c){if(r.push(a),u.children)nt(u.children,a.pattern,n,r,o);else{const d=qt([...r],o.length);o.push(d)}r.pop()}}}return r.length?o:o.sort((l,i)=>i.score-l.score)}function Vt(e,t){for(let n=0,r=e.length;n<r;n++){const o=e[n].matcher(t);if(o)return o}return[]}function Ht(e,t){const n=new URL("http://sar"),r=S(u=>{const c=e();try{return new URL(c,n)}catch{return console.error(`Invalid path ${c}`),u}},n,{equals:(u,c)=>u.href===c.href}),o=S(()=>K(r().pathname)),s=S(()=>K(r().search,!0)),l=S(()=>K(r().hash)),i=S(()=>"");return{get pathname(){return o()},get search(){return s()},get hash(){return l()},get state(){return t()},get key(){return i()},query:Je(De(s,()=>kt(r())))}}function Kt(e,t="",n,r){const{signal:[o,s],utils:l={}}=It(e),i=l.parsePath||(y=>y),u=l.renderPath||(y=>y),c=ie("",t),a=void 0;if(c===void 0)throw new Error(`${c} is not a valid base path`);c&&!o().value&&s({value:c,replace:!0,scroll:!1});const[d,g]=ht(),[b,p]=$(o().value),[R,j]=$(o().state),V=Ht(b,R),I=[],N={pattern:c,params:{},path:()=>c,outlet:()=>null,resolvePath(y){return ie(c,y)}};if(n)try{Z=N,N.data=n({data:void 0,params:{},location:V,navigate:D(N)})}finally{Z=void 0}function z(y,w,f){L(()=>{if(typeof w=="number"){w&&(l.go?l.go(w):console.warn("Router integration does not support relative routing"));return}const{replace:h,resolve:P,scroll:E,state:ee}={replace:!1,resolve:!0,scroll:!0,...f},B=P?y.resolvePath(w):ie("",w);if(B===void 0)throw new Error(`Path '${w}' is not a routable path`);if(I.length>=Bt)throw new Error("Too many redirects");const F=b();if(B!==F||ee!==R()){const X=I.push({value:F,replace:h,scroll:E,state:R()});g(()=>{p(B),j(ee)}).then(()=>{I.length===X&&pe({value:B,state:ee})})}})}function D(y){return y=y||Se(he)||N,(w,f)=>z(y,w,f)}function pe(y){const w=I[0];w&&((y.value!==w.value||y.state!==w.state)&&s({...y,replace:w.replace,scroll:w.scroll}),I.length=0)}A(()=>{const{value:y,state:w}=o();L(()=>{y!==b()&&g(()=>{p(y),j(w)})})});{let y=function(f){return f.namespaceURI==="http://www.w3.org/2000/svg"},w=function(f){if(f.defaultPrevented||f.button!==0||f.metaKey||f.altKey||f.ctrlKey||f.shiftKey)return;const h=f.composedPath().find(Ae=>Ae instanceof Node&&Ae.nodeName.toUpperCase()==="A");if(!h)return;const P=y(h),E=P?h.href.baseVal:h.href;if((P?h.target.baseVal:h.target)||!E&&!h.hasAttribute("state"))return;const B=(h.getAttribute("rel")||"").split(/\s+/);if(h.hasAttribute("download")||B&&B.includes("external"))return;const F=P?new URL(E,document.baseURI):new URL(E),X=K(F.pathname);if(F.origin!==window.location.origin||c&&X&&!X.toLowerCase().startsWith(c.toLowerCase()))return;const st=i(X+K(F.search,!0)+K(F.hash)),Ee=h.getAttribute("state");f.preventDefault(),z(N,st,{resolve:!1,replace:h.hasAttribute("replace"),scroll:!h.hasAttribute("noscroll"),state:Ee&&JSON.parse(Ee)})};xt(["click"]),document.addEventListener("click",w),Be(()=>document.removeEventListener("click",w))}return{base:N,out:a,location:V,isRouting:d,renderPath:u,parsePath:i,navigatorFactory:D}}function Gt(e,t,n,r){const{base:o,location:s,navigatorFactory:l}=e,{pattern:i,element:u,preload:c,data:a}=r().route,d=S(()=>r().path),g=Je(()=>r().params);c&&c();const b={parent:t,pattern:i,get child(){return n()},path:d,params:g,data:t.data,outlet:u,resolvePath(p){return ie(o.path(),p,d())}};if(a)try{Z=b,b.data=a({data:t.data,params:g,location:s,navigate:l(b)})}finally{Z=void 0}return b}const Wt=e=>{const{source:t,url:n,base:r,data:o,out:s}=e,l=t||Nt(),i=Kt(l,r,o);return _(Ye.Provider,{value:i,get children(){return e.children}})},zt=e=>{const t=ge(),n=Ze(),r=Ce(()=>e.children),o=S(()=>nt(r(),Xe(n.pattern,e.base||""),Xt)),s=S(()=>Vt(o(),t.location.pathname));t.out&&t.out.matches.push(s().map(({route:c,path:a,params:d})=>({originalPath:c.originalPath,pattern:c.pattern,path:a,params:d})));const l=[];let i;const u=S(De(s,(c,a,d)=>{let g=a&&c.length===a.length;const b=[];for(let p=0,R=c.length;p<R;p++){const j=a&&a[p],V=c[p];d&&j&&V.route.key===j.route.key?b[p]=d[p]:(g=!1,l[p]&&l[p](),ke(I=>{l[p]=I,b[p]=Gt(t,b[p-1]||n,()=>u()[p+1],()=>s()[p])}))}return l.splice(c.length).forEach(p=>p()),d&&g?d:(i=b[0],b)}));return _(ze,{get when(){return u()&&i},children:c=>_(he.Provider,{value:c,get children(){return c.outlet()}})})},re=e=>{const t=Ce(()=>e.children);return _t(e,{get children(){return t()}})},Xt=()=>{const e=Ze();return _(ze,{get when(){return e.child},children:t=>_(he.Provider,{value:t,get children(){return t.outlet()}})})};let Jt={visual:{preferredColorScheme:1},personal:{profilePicture:"/images/icons/default_user.svg",firstName:"First",lastName:"Last"},id:"0000000000",username:"USERNAME"};const[rt,Rn]=$(!1),[be,Ne]=$(null);function Qt(){rt()==!0?Ne(0):Ne(Jt)}function Yt(e){if(e==1)document.documentElement.dataset.colorScheme="light";else if(e==2)document.documentElement.dataset.colorScheme="dark";else{let t=window.matchMedia("(prefers-color-scheme: dark)");document.documentElement.dataset.colorScheme=t.matches?"dark":"light",t.addEventListener("change",n=>{document.documentElement.dataset.colorScheme=n.matches?"dark":"light"})}}const Zt="_globalbar_xcxs8_13",en="_fadeInMainFull_xcxs8_1",tn="_userprofile_xcxs8_67",nn="_fadeInPP_xcxs8_1",rn="_fadeInPPFull_xcxs8_1",on="_userProfileImage_xcxs8_109",sn="_opacityInOut_xcxs8_1",Pe={globalbar:Zt,fadeInMainFull:en,userprofile:tn,fadeInPP:nn,fadeInPPFull:rn,userProfileImage:on,opacityInOut:sn},ln={"lds-ring":"_lds-ring_xeywd_1"},un=W("<div><div></div><div></div><div></div><div></div></div>");function ot(e){return(()=>{const t=un.cloneNode(!0);return A(n=>{const r=e.style,o=ln["lds-ring"];return n._v$=St(t,r,n._v$),o!==n._v$2&&k(t,n._v$2=o),n},{_v$:void 0,_v$2:void 0}),t})()}const cn=W('<div unselectable><img width="70" height="70"></div>'),an=W("<div></div>");function fn(e){const[t,n]=$(!1);return(()=>{const r=cn.cloneNode(!0),o=r.firstChild;return M(r,_(ot,{get style(){return{display:t()?"none":null}}}),o),o.addEventListener("load",function(s){n(!0),e.report()}),Y(o,"draggable",!1),A(s=>{const l=Pe.userprofile,i=Pe.userProfileImage,u=t()?null:"none",c=e.picture;return l!==s._v$&&k(r,s._v$=l),i!==s._v$2&&k(o,s._v$2=i),u!==s._v$3&&o.style.setProperty("display",s._v$3=u),c!==s._v$4&&Y(o,"src",s._v$4=c),s},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),r})()}function dn(e){return(()=>{const t=an.cloneNode(!0);return M(t,_(fn,{get picture(){return e.userProfile},get report(){return e.report}})),A(n=>{const r=Pe.globalbar,o=e.showContent;return r!==n._v$5&&k(t,n._v$5=r),o!==n._v$6&&Y(t,"data-show-content",n._v$6=o),n},{_v$5:void 0,_v$6:void 0}),t})()}const hn="_globalfooter_1cgmo_13",gn="_opacityIn_1cgmo_1",pn={globalfooter:hn,opacityIn:gn},mn=W("<div>Terms and Conditions | About This Service | About 0x0C</div>");function yn(e){return(()=>{const t=mn.cloneNode(!0);return A(n=>{const r=pn.globalfooter,o=e.showContent;return r!==n._v$&&k(t,n._v$=r),o!==n._v$2&&Y(t,"data-show-content",n._v$2=o),n},{_v$:void 0,_v$2:void 0}),t})()}const vn="modulepreload",wn=function(e){return"/"+e},Te={},oe=function(t,n,r){return!n||n.length===0?t():Promise.all(n.map(o=>{if(o=wn(o),o in Te)return;Te[o]=!0;const s=o.endsWith(".css"),l=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${l}`))return;const i=document.createElement("link");if(i.rel=s?"stylesheet":vn,s||(i.as="script",i.crossOrigin=""),i.href=o,document.head.appendChild(i),s)return new Promise((u,c)=>{i.addEventListener("load",u),i.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t())},_n="_localcontent_zh8jh_13",bn="_slideInContent_zh8jh_1",Pn="_container_zh8jh_115",xn="_loadingContainer_zh8jh_117",ve={localcontent:_n,slideInContent:bn,container:Pn,loadingContainer:xn};function Sn(e){let t=et();je(()=>{t.pathname,e()})}function Cn(e){const t=et(),n=Ft();je(()=>{t.pathname=="/"?e||n("/new",{replace:!0}):(t.pathname.substring(4)=="/new"||t.pathname.substring(5)=="/user")&&e&&n("/",{replace:!1}),console.log(t.pathname)})}const $n=W("<div></div>"),En=W("<div><div></div></div>"),se={Home:ne(()=>oe(()=>import("./home.3c31db6a.js"),[])),New:ne(()=>oe(()=>import("./new.67a84881.js"),["assets/new.67a84881.js","assets/new.1cd5490a.css"])),Login:ne(()=>oe(()=>import("./login.608c1f60.js"),[])),Register:ne(()=>oe(()=>import("./register.a164735a.js"),[]))};function An(e){Cn(e.isSignedIn);let t;const[n,r]=$(1),o=function(){r(t=Math.abs(n())+1),e.report()};t=n(),Sn(function(){s.childNodes.length==0&&r(t=-Math.abs(t)-1)});let s=(()=>{const l=$n.cloneNode(!0);return l.addEventListener("emptied",function(){alert(0)}),M(l,_(zt,{get children(){return[_(re,{path:"/",get element(){return _(se.Home,{report:o})}}),_(re,{path:"/new",get element(){return _(se.New,{report:o})}}),_(re,{path:"/user/login",get element(){return _(se.Login,{report:o})}}),_(re,{path:"/user/register",get element(){return _(se.Register,{report:o})}})]}})),A(()=>k(l,ve.container)),l})();return(()=>{const l=En.cloneNode(!0),i=l.firstChild;return M(i,()=>console.log(s.childNodes.length==0),null),M(i,_(ot,{}),null),M(l,s,null),A(u=>{const c=ve.localcontent,a=e.showContent,d=ve.loadingContainer,g=n()<0?null:"none";return c!==u._v$&&k(l,u._v$=c),a!==u._v$2&&Y(l,"data-show-content",u._v$2=a),d!==u._v$3&&k(i,u._v$3=d),g!==u._v$4&&i.style.setProperty("display",u._v$4=g),u},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),l})()}Qt();Yt(be().visual.preferredColorScheme);Pt(()=>{const[e,t]=$(!1);let n={GlobalBar:!1,LocalContent:!1},r=o=>{n[o]=!0,n.GlobalBar&&n.LocalContent&&t(!0)};return _(Wt,{get children(){return[_(dn,{get userProfile(){return be().personal.profilePicture},get showContent(){return e()},report:()=>{r("GlobalBar")}}),_(An,{get userData(){return be()},get isSignedIn(){return rt()},get showContent(){return e()},report:()=>{r("LocalContent")}}),_(yn,{get showContent(){return e()}})]}})},document.body);export{k as a,A as c,xt as d,W as t,Ft as u};
