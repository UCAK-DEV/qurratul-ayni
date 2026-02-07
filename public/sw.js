/* eslint-disable no-restricted-globals */

const CACHE_NAME = 'qurratul-ayni-v1';
const STATIC_ASSETS = [
  '/',
  '/manifest.json',
  '/favicon.ico',
  '/mosque-192.png',
  '/mosque-512.png',
  '/accueil', // Cache the main page
];
const AUDIO_CACHE_NAME = 'qurratul-ayni-audio-v1';

self.addEventListener('install', (event) => {
  console.log('[SW] Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[SW] Caching static assets...');
      return cache.addAll(STATIC_ASSETS);
    }).then(() => {
      self.skipWaiting();
    })
  );
});

self.addEventListener('activate', (event) => {
  console.log('[SW] Service Worker activating.');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME && cacheName !== AUDIO_CACHE_NAME) {
            console.log(`[SW] Deleting old cache: ${cacheName}`);
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

  if (request.url.includes('.mp3')) {
    event.respondWith(cacheFirst(request, AUDIO_CACHE_NAME));
    return;
  }
  
  event.respondWith(staleWhileRevalidate(request, CACHE_NAME));
});

async function cacheFirst(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cachedResponse = await cache.match(request);
  
  if (cachedResponse) {
    return cachedResponse;
  }

  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      await cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.error(`[SW] Fetch error for audio: ${request.url}`, error);
    return new Response(JSON.stringify({ error: "Audio resource unavailable offline." }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

async function staleWhileRevalidate(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cachedResponse = await cache.match(request);

  const networkFetch = fetch(request).then(response => {
    if (response.ok) {
      cache.put(request, response.clone());
    }
    return response;
  }).catch(err => {
    console.error(`[SW] Fetch error (StaleWhileRevalidate): ${request.url}`, err);
  });

  return cachedResponse || networkFetch;
}
