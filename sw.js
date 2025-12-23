const CACHE_NAME = 'imennik-v2';
const ASSETS = ['/', '/index.html', '/manifest.json', '/icons/icon.svg'];

self.addEventListener('install', e => {
  // Skip waiting to activate the new SW immediately
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  // Claim clients immediately so the new SW controls the page
  e.waitUntil(
    caches.keys().then(names => {
      return Promise.all(
        names.filter(n => n !== CACHE_NAME).map(n => caches.delete(n))
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  
  // Network-First strategy for HTML navigation and the root path
  // This ensures the user always gets the latest version from the server.
  if (e.request.mode === 'navigate' || url.pathname === '/' || url.pathname.endsWith('index.html')) {
    e.respondWith(
      fetch(e.request)
        .then(response => {
          // If we get a valid response, clone it and update the cache
          if (response.status === 200) {
            const responseClone = response.clone();
            caches.open(CACHE_NAME).then(cache => {
              cache.put(e.request, responseClone);
            });
          }
          return response;
        })
        .catch(() => {
          // If network fails, return the cached version
          return caches.match(e.request);
        })
    );
    return;
  }

  // Cache-First strategy for other assets (images, etc.)
  // If not in cache, fetch from network and cache it
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request).then(res => {
        if (res.status === 200) {
          const responseClone = res.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(e.request, responseClone);
          });
        }
        return res;
      });
    })
  );
});