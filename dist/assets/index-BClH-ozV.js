(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();const le=(e,t)=>e===t,re=Symbol("solid-track"),P={equals:le};let ie=Z;const x=1,v=2,V={owned:null,cleanups:null,context:null,owner:null};var d=null;let q=null,fe=null,h=null,p=null,S=null,D=0;function B(e,t){const n=h,l=d,s=e.length===0,o=t===void 0?l:t,i=s?V:{owned:null,cleanups:null,context:o?o.context:null,owner:o},r=s?e:()=>e(()=>U(()=>$(i)));d=i,h=null;try{return N(r,!0)}finally{h=n,d=l}}function Q(e,t){t=t?Object.assign({},P,t):P;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},l=s=>(typeof s=="function"&&(s=s(n.value)),X(n,s));return[W.bind(n),l]}function _(e,t,n){const l=J(e,t,!1,x);j(l)}function ue(e,t,n){n=n?Object.assign({},P,n):P;const l=J(e,t,!0,0);return l.observers=null,l.observerSlots=null,l.comparator=n.equals||void 0,j(l),W.bind(l)}function U(e){if(h===null)return e();const t=h;h=null;try{return e()}finally{h=t}}function ce(e){return d===null||(d.cleanups===null?d.cleanups=[e]:d.cleanups.push(e)),e}function W(){if(this.sources&&this.state)if(this.state===x)j(this);else{const e=p;p=null,N(()=>I(this),!1),p=e}if(h){const e=this.observers?this.observers.length:0;h.sources?(h.sources.push(this),h.sourceSlots.push(e)):(h.sources=[this],h.sourceSlots=[e]),this.observers?(this.observers.push(h),this.observerSlots.push(h.sources.length-1)):(this.observers=[h],this.observerSlots=[h.sources.length-1])}return this.value}function X(e,t,n){let l=e.value;return(!e.comparator||!e.comparator(l,t))&&(e.value=t,e.observers&&e.observers.length&&N(()=>{for(let s=0;s<e.observers.length;s+=1){const o=e.observers[s],i=q&&q.running;i&&q.disposed.has(o),(i?!o.tState:!o.state)&&(o.pure?p.push(o):S.push(o),o.observers&&z(o)),i||(o.state=x)}if(p.length>1e6)throw p=[],new Error},!1)),t}function j(e){if(!e.fn)return;$(e);const t=D;ae(e,e.value,t)}function ae(e,t,n){let l;const s=d,o=h;h=d=e;try{l=e.fn(t)}catch(i){return e.pure&&(e.state=x,e.owned&&e.owned.forEach($),e.owned=null),e.updatedAt=n+1,ee(i)}finally{h=o,d=s}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?X(e,l):e.value=l,e.updatedAt=n)}function J(e,t,n,l=x,s){const o={fn:e,state:l,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:d,context:d?d.context:null,pure:n};return d===null||d!==V&&(d.owned?d.owned.push(o):d.owned=[o]),o}function Y(e){if(e.state===0)return;if(e.state===v)return I(e);if(e.suspense&&U(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<D);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===x)j(e);else if(e.state===v){const l=p;p=null,N(()=>I(e,t[0]),!1),p=l}}function N(e,t){if(p)return e();let n=!1;t||(p=[]),S?n=!0:S=[],D++;try{const l=e();return he(n),l}catch(l){n||(S=null),p=null,ee(l)}}function he(e){if(p&&(Z(p),p=null),e)return;const t=S;S=null,t.length&&N(()=>ie(t),!1)}function Z(e){for(let t=0;t<e.length;t++)Y(e[t])}function I(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const l=e.sources[n];if(l.sources){const s=l.state;s===x?l!==t&&(!l.updatedAt||l.updatedAt<D)&&Y(l):s===v&&I(l,t)}}}function z(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=v,n.pure?p.push(n):S.push(n),n.observers&&z(n))}}function $(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),l=e.sourceSlots.pop(),s=n.observers;if(s&&s.length){const o=s.pop(),i=n.observerSlots.pop();l<s.length&&(o.sourceSlots[i]=l,s[l]=o,n.observerSlots[l]=i)}}if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)$(e.tOwned[t]);delete e.tOwned}if(e.owned){for(t=e.owned.length-1;t>=0;t--)$(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function de(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function ee(e,t=d){throw de(e)}const pe=Symbol("fallback");function F(e){for(let t=0;t<e.length;t++)e[t]()}function ge(e,t,n={}){let l=[],s=[],o=[],i=0,r=t.length>1?[]:null;return ce(()=>F(o)),()=>{let u=e()||[],c=u.length,a,f;return u[re],U(()=>{let g,m,A,O,L,y,w,b,C;if(c===0)i!==0&&(F(o),o=[],l=[],s=[],i=0,r&&(r=[])),n.fallback&&(l=[pe],s[0]=B(oe=>(o[0]=oe,n.fallback())),i=1);else if(i===0){for(s=new Array(c),f=0;f<c;f++)l[f]=u[f],s[f]=B(E);i=c}else{for(A=new Array(c),O=new Array(c),r&&(L=new Array(c)),y=0,w=Math.min(i,c);y<w&&l[y]===u[y];y++);for(w=i-1,b=c-1;w>=y&&b>=y&&l[w]===u[b];w--,b--)A[b]=s[w],O[b]=o[w],r&&(L[b]=r[w]);for(g=new Map,m=new Array(b+1),f=b;f>=y;f--)C=u[f],a=g.get(C),m[f]=a===void 0?-1:a,g.set(C,f);for(a=y;a<=w;a++)C=l[a],f=g.get(C),f!==void 0&&f!==-1?(A[f]=s[a],O[f]=o[a],r&&(L[f]=r[a]),f=m[f],g.set(C,f)):o[a]();for(f=y;f<c;f++)f in A?(s[f]=A[f],o[f]=O[f],r&&(r[f]=L[f],r[f](f))):s[f]=B(E);s=s.slice(0,i=c),l=u.slice(0)}return s});function E(g){if(o[f]=g,r){const[m,A]=Q(f);return r[f]=A,t(u[f],m)}return t(u[f])}}}function R(e,t){return U(()=>e(t||{}))}function ye(e){const t="fallback"in e&&{fallback:()=>e.fallback};return ue(ge(()=>e.each,e.children,t||void 0))}function we(e,t,n){let l=n.length,s=t.length,o=l,i=0,r=0,u=t[s-1].nextSibling,c=null;for(;i<s||r<o;){if(t[i]===n[r]){i++,r++;continue}for(;t[s-1]===n[o-1];)s--,o--;if(s===i){const a=o<l?r?n[r-1].nextSibling:n[o-r]:u;for(;r<o;)e.insertBefore(n[r++],a)}else if(o===r)for(;i<s;)(!c||!c.has(t[i]))&&t[i].remove(),i++;else if(t[i]===n[o-1]&&n[r]===t[s-1]){const a=t[--s].nextSibling;e.insertBefore(n[r++],t[i++].nextSibling),e.insertBefore(n[--o],a),t[s]=n[o]}else{if(!c){c=new Map;let f=r;for(;f<o;)c.set(n[f],f++)}const a=c.get(t[i]);if(a!=null)if(r<a&&a<o){let f=i,E=1,g;for(;++f<s&&f<o&&!((g=c.get(t[f]))==null||g!==a+E);)E++;if(E>a-r){const m=t[i];for(;r<a;)e.insertBefore(n[r++],m)}else e.replaceChild(n[r++],t[i++])}else i++;else t[i++].remove()}}}const H="_$DX_DELEGATE";function be(e,t,n,l={}){let s;return B(o=>{s=o,t===document?e():ne(t,e(),t.firstChild?null:void 0,n)},l.owner),()=>{s(),t.textContent=""}}function te(e,t,n){let l;const s=()=>{const i=document.createElement("template");return i.innerHTML=e,i.content.firstChild},o=()=>(l||(l=s())).cloneNode(!0);return o.cloneNode=o,o}function me(e,t=window.document){const n=t[H]||(t[H]=new Set);for(let l=0,s=e.length;l<s;l++){const o=e[l];n.has(o)||(n.add(o),t.addEventListener(o,xe))}}function Ae(e,t,n){e.removeAttribute(t)}function Se(e,t,n){if(!t)return n?Ae(e,"style"):t;const l=e.style;if(typeof t=="string")return l.cssText=t;typeof n=="string"&&(l.cssText=n=void 0),n||(n={}),t||(t={});let s,o;for(o in n)t[o]==null&&l.removeProperty(o),delete n[o];for(o in t)s=t[o],s!==n[o]&&(l.setProperty(o,s),n[o]=s);return n}function ne(e,t,n,l){if(n!==void 0&&!l&&(l=[]),typeof t!="function")return M(e,t,l,n);_(s=>M(e,t(),s,n),l)}function xe(e){let t=e.target;const n=`$$${e.type}`,l=e.target,s=e.currentTarget,o=u=>Object.defineProperty(e,"target",{configurable:!0,value:u}),i=()=>{const u=t[n];if(u&&!t.disabled){const c=t[`${n}Data`];if(c!==void 0?u.call(t,c,e):u.call(t,e),e.cancelBubble)return}return t.host&&typeof t.host!="string"&&!t.host._$host&&t.contains(e.target)&&o(t.host),!0},r=()=>{for(;i()&&(t=t._$host||t.parentNode||t.host););};if(Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),e.composedPath){const u=e.composedPath();o(u[0]);for(let c=0;c<u.length-2&&(t=u[c],!!i());c++){if(t._$host){t=t._$host,r();break}if(t.parentNode===s)break}}else r();o(l)}function M(e,t,n,l,s){for(;typeof n=="function";)n=n();if(t===n)return n;const o=typeof t,i=l!==void 0;if(e=i&&n[0]&&n[0].parentNode||e,o==="string"||o==="number"){if(o==="number"&&(t=t.toString(),t===n))return n;if(i){let r=n[0];r&&r.nodeType===3?r.data!==t&&(r.data=t):r=document.createTextNode(t),n=T(e,n,l,r)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||o==="boolean")n=T(e,n,l);else{if(o==="function")return _(()=>{let r=t();for(;typeof r=="function";)r=r();n=M(e,r,n,l)}),()=>n;if(Array.isArray(t)){const r=[],u=n&&Array.isArray(n);if(k(r,t,n,s))return _(()=>n=M(e,r,n,l,!0)),()=>n;if(r.length===0){if(n=T(e,n,l),i)return n}else u?n.length===0?G(e,r,l):we(e,n,r):(n&&T(e),G(e,r));n=r}else if(t.nodeType){if(Array.isArray(n)){if(i)return n=T(e,n,l,t);T(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function k(e,t,n,l){let s=!1;for(let o=0,i=t.length;o<i;o++){let r=t[o],u=n&&n[e.length],c;if(!(r==null||r===!0||r===!1))if((c=typeof r)=="object"&&r.nodeType)e.push(r);else if(Array.isArray(r))s=k(e,r,u)||s;else if(c==="function")if(l){for(;typeof r=="function";)r=r();s=k(e,Array.isArray(r)?r:[r],Array.isArray(u)?u:[u])||s}else e.push(r),s=!0;else{const a=String(r);u&&u.nodeType===3&&u.data===a?e.push(u):e.push(document.createTextNode(a))}}return s}function G(e,t,n=null){for(let l=0,s=t.length;l<s;l++)e.insertBefore(t[l],n)}function T(e,t,n,l){if(n===void 0)return e.textContent="";const s=l||document.createTextNode("");if(t.length){let o=!1;for(let i=t.length-1;i>=0;i--){const r=t[i];if(s!==r){const u=r.parentNode===e;!o&&!i?u?e.replaceChild(s,r):e.insertBefore(s,n):u&&r.remove()}else o=!0}}else e.insertBefore(s,n);return[s]}var Ee=te("<div class=happy-boxes>"),Ce=te("<div class=happy-box>");const Te=4,$e=(100/Te)**2;function Ne(){return`#${Math.floor(Math.random()*16777215).toString(16)}`}function K(){const e=[];for(let t=0;t<$e;t++)e.push(Ne());return e}function Oe(){const[e,t]=Q(K());return(()=>{var n=Ee();return n.$$mousemove=()=>{t(K())},ne(n,R(ye,{get each(){return e()},children:l=>R(Le,{color:l})})),n})()}const Le=e=>(()=>{var t=Ce();return _(n=>Se(t,`background-color: ${e.color}`,n)),t})();me(["mousemove"]);const se=document.getElementById("root");if(!se)throw new Error("Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?");be(()=>R(Oe,{}),se);