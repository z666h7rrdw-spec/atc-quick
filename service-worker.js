const C='atc-quick-v86';
const F=['./index.html','./data.js?v=82','./airports.json','./manifest.json','./icon-192.png','./icon-512.png'];

self.addEventListener('install',e=>{
  self.skipWaiting();
  e.waitUntil(caches.open(C).then(c=>c.addAll(F)));
});

self.addEventListener('activate',e=>{
  e.waitUntil(Promise.all([
    caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==C).map(k=>caches.delete(k)))),
    self.clients.claim()
  ]));
});

self.addEventListener('fetch',e=>{
  const req=e.request;
  const url=new URL(req.url);

  // Always try the network first for page navigations/index so new builds appear immediately.
  if(req.mode==='navigate' || url.pathname.endsWith('/index.html') || url.pathname.endsWith('/atc-quick/')){
    e.respondWith(
      fetch(req,{cache:'no-store'}).then(r=>r).catch(()=>caches.match('./index.html').then(r=>r||caches.match('./')))
    );
    return;
  }

  // Network-first for JS/data files that change between builds.
  if(url.pathname.endsWith('/data.js') || url.pathname.endsWith('/airports.json') || url.pathname.endsWith('/service-worker.js')){
    e.respondWith(
      fetch(req,{cache:'no-store'}).then(r=>{
        const copy=r.clone();
        caches.open(C).then(c=>c.put(req,copy));
        return r;
      }).catch(()=>caches.match(req))
    );
    return;
  }

  // Cache-first for icons/manifest/static assets.
  e.respondWith(caches.match(req).then(r=>r||fetch(req)));
});
