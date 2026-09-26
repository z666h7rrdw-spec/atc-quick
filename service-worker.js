const C='atc-quick-v74';
const F=['./','./index.html','./data.js?v=74','./airports.json','./manifest.json','./icon-192.png','./icon-512.png'];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(C).then(c=>c.addAll(F)))});
self.addEventListener('activate',e=>e.waitUntil(Promise.all([caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==C).map(k=>caches.delete(k)))),self.clients.claim()])));
self.addEventListener('fetch',e=>{
 if(e.request.mode==='navigate'){
  e.respondWith(fetch(e.request,{cache:'no-store'}).then(r=>{let x=r.clone();caches.open(C).then(c=>c.put('./index.html',x));return r}).catch(()=>caches.match('./index.html')));return;
 }
 e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request,{cache:'no-store'}).then(n=>{let x=n.clone();caches.open(C).then(c=>c.put(e.request,x));return n})));
});
