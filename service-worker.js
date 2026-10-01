const CACHE = 'atc-quick-v93';
const CORE = [
  './',
  './index.html',
  './data.js?v=93',
  './airports.json',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE).then(async cache => {
      // Cache each core asset independently so one transient failure does not
      // invalidate the whole offline install.
      await Promise.all(CORE.map(async url => {
        try {
          const response = await fetch(url, {cache:'reload'});
          if (response && response.ok) await cache.put(url, response.clone());
        } catch (_) {}
      }));
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(Promise.all([
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))),
    self.clients.claim()
  ]));
});

function isCore(url) {
  return url.pathname.endsWith('/index.html') ||
         url.pathname.endsWith('/data.js') ||
         url.pathname.endsWith('/airports.json') ||
         url.pathname.endsWith('/manifest.json') ||
         url.pathname.endsWith('/icon-192.png') ||
         url.pathname.endsWith('/icon-512.png');
}

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // App navigations: cached app shell first, then network. This makes the
  // installed app open with no connection after one successful online load.
  if (req.mode === 'navigate') {
    event.respondWith(
      caches.match('./index.html').then(cached => cached ||
        fetch(req).then(resp => {
          if (resp && resp.ok) caches.open(CACHE).then(c => c.put('./index.html', resp.clone()));
          return resp;
        }).catch(() => caches.match('./'))
      )
    );
    return;
  }

  // Packaged ATC/airport data: cache first. Refresh in the background when online.
  if (url.origin === self.location.origin && isCore(url)) {
    event.respondWith(
      caches.match(req, {ignoreSearch:true}).then(cached => {
        const update = fetch(req).then(resp => {
          if (resp && resp.ok) caches.open(CACHE).then(c => c.put(req, resp.clone()));
          return resp;
        }).catch(() => null);
        return cached || update.then(resp => resp || new Response('', {status:503}));
      })
    );
    return;
  }

  // Other same-origin assets: cache first, network fallback.
  if (url.origin === self.location.origin) {
    event.respondWith(
      caches.match(req).then(cached => cached || fetch(req).then(resp => {
        if (resp && resp.ok) caches.open(CACHE).then(c => c.put(req, resp.clone()));
        return resp;
      }))
    );
  }
  // Cross-origin requests (restaurants, museums, map links, etc.) remain network-only.
});
