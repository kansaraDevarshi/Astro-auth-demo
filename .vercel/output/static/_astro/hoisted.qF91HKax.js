const g="modulepreload",v=function(l){return"/"+l},a={},E=function(d,i,m){let c=Promise.resolve();if(i&&i.length>0){const n=document.getElementsByTagName("link");c=Promise.all(i.map(e=>{if(e=v(e),e in a)return;a[e]=!0;const o=e.endsWith(".css"),h=o?'[rel="stylesheet"]':"";if(!!m)for(let r=n.length-1;r>=0;r--){const s=n[r];if(s.href===e&&(!o||s.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${h}`))return;const t=document.createElement("link");if(t.rel=o?"stylesheet":g,o||(t.as="script",t.crossOrigin=""),t.href=e,document.head.appendChild(t),o)return new Promise((r,s)=>{t.addEventListener("load",r),t.addEventListener("error",()=>s(new Error(`Unable to preload CSS for ${e}`)))})}))}return c.then(()=>d()).catch(n=>{const e=new Event("vite:preloadError",{cancelable:!0});if(e.payload=n,window.dispatchEvent(e),!e.defaultPrevented)throw n})},{signIn:k,signOut:y}=await E(()=>import("./client.BqElmF-z.js"),__vite__mapDeps([])),u=document.querySelector("#login"),f=document.querySelector("#logout");u&&(u.onclick=()=>k("google"));f&&(f.onclick=()=>y());
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
