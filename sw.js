// ACity Market — Service Worker
// Minimal SW just to enable "Add to Home Screen" install prompt.
// No offline caching — app requires internet connection.

const CACHE = 'acitymarket-v1';

self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(CACHE).then(cache =>
            cache.addAll(['/', '/acitymarket/', '/acitymarket/index.html'])
        ).catch(() => {}) // fail silently if offline
    );
    self.skipWaiting();
});

self.addEventListener('activate', e => {
    e.waitUntil(
        caches.keys().then(keys =>
            Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
        )
    );
    self.clients.claim();
});

self.addEventListener('fetch', e => {
    // Always fetch from network — app requires live data
    e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
