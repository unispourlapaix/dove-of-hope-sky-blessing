// ============================================
// 🕊️ DOVE OF HOPE - SERVICE WORKER v1.5.0
// ============================================

const CACHE_NAME = 'dove-hope-v1.5.0';
const urlsToCache = [
  '/dove-of-hope-sky-blessing/',
  '/dove-of-hope-sky-blessing/index.html',
  '/dove-of-hope-sky-blessing/manifest.json',
  '/dove-of-hope-sky-blessing/bible-verses.js',
  '/dove-of-hope-sky-blessing/js/testimonies.js',
  '/dove-of-hope-sky-blessing/js/translations/fr.js',
  '/dove-of-hope-sky-blessing/js/translations/en.js',
  '/dove-of-hope-sky-blessing/js/translations/es.js',
  '/dove-of-hope-sky-blessing/js/translations/de.js',
  '/dove-of-hope-sky-blessing/js/translations/it.js',
  '/dove-of-hope-sky-blessing/js/translations/pt.js',
  '/dove-of-hope-sky-blessing/js/translations/ru.js',
  '/dove-of-hope-sky-blessing/js/translations/zh.js',
  '/dove-of-hope-sky-blessing/js/translations/ja.js',
  '/dove-of-hope-sky-blessing/js/translations/ko.js',
  '/dove-of-hope-sky-blessing/js/translations/ar.js',
  '/dove-of-hope-sky-blessing/js/translations/hi.js',
  '/dove-of-hope-sky-blessing/js/translations/pl.js',
  '/dove-of-hope-sky-blessing/js/translations/sw.js',
  '/dove-of-hope-sky-blessing/js/translations/nl.js',
  '/dove-of-hope-sky-blessing/js/translations/tr.js',
  '/dove-of-hope-sky-blessing/js/levels/level-definitions.js',
  '/dove-of-hope-sky-blessing/js/levels/level-messages.js',
  '/dove-of-hope-sky-blessing/js/levels/bible-verses.js',
  '/dove-of-hope-sky-blessing/js/levels/progression-system.js',
  '/dove-of-hope-sky-blessing/js/bosses/boss-system.js'
];

// Installation
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
      .then(() => self.skipWaiting())
  );
});

// Activation
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request).then(response => {
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseToCache);
          });
          return response;
        });
      })
  );
});
