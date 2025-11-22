// ============================================
// 🕊️ DOVE OF HOPE - SERVICE WORKER v1.5.0
// ============================================

const CACHE_NAME = 'dove-hope-v1.5.0';

// Mode développement : ne pas mettre en cache pendant le dev
const isDevelopment = location.hostname === 'localhost' || location.hostname === '127.0.0.1';

const urlsToCache = isDevelopment ? [] : [
  '/dove-of-hope-sky-blessing/',
  '/dove-of-hope-sky-blessing/index.html',
  '/dove-of-hope-sky-blessing/manifest.json'
];

// Installation
self.addEventListener('install', event => {
  console.log('🕊️ Service Worker: Installation...');
  if (isDevelopment) {
    console.log('🕊️ Mode développement: pas de mise en cache');
    self.skipWaiting();
  } else {
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then(cache => cache.addAll(urlsToCache))
        .then(() => {
          console.log('🕊️ Service Worker: Mise en cache réussie');
          return self.skipWaiting();
        })
        .catch(err => console.error('❌ Erreur cache:', err))
    );
  }
});

// Activation
self.addEventListener('activate', event => {
  console.log('🕊️ Service Worker: Activation...');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('🕊️ Service Worker: Suppression ancien cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('🕊️ Service Worker: Activé');
      return self.clients.claim();
    })
  );
});

// Fetch - en mode dev, laisser passer toutes les requêtes
self.addEventListener('fetch', event => {
  if (isDevelopment) {
    return; // Pas de cache en dev
  }
  
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
        }).catch(err => {
          console.error('❌ Erreur fetch:', err);
          return new Response('Offline - Contenu non disponible');
        });
      })
  );
});
