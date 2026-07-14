 

const CACHE_NAME = 'qurratul-ayni-v5';
// Only pre-cache static files that are guaranteed to succeed.
const STATIC_ASSETS = [
  '/manifest.json',
  '/manifest.webmanifest',
  '/favicon.png',
  '/icon-192.png',
  '/icon-512.png',
  '/apple-touch-icon.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    }).then(() => {
      self.skipWaiting();
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
          return null;
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;

  // 1. NE PAS intercepter l'audio (pour éviter les erreurs de streaming 206)
  // 2. NE PAS intercepter Supabase
  if (request.url.includes('.mp3') || request.url.includes('supabase.co')) {
    return;
  }

  // 3. Stratégie réseau d'abord avec fallback cache pour le reste
  event.respondWith(
    fetch(request)
      .then(response => {
        // Only cache valid, non-opaque responses (status 200)
        if (response.status === 200) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
        }
        return response;
      })
      .catch(() =>
        caches.match(request).then(cached =>
          // Always return a valid Response — never undefined
          cached || new Response('Offline', { status: 503, statusText: 'Service Unavailable' })
        )
      )
  );
});
