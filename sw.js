importScripts('/OneSignalSDKWorker.js');

const CACHE_NAME = 'rewatch-cache-v1';
const urlsToCache = ['/'];

self.addEventListener('install', e => { 
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(urlsToCache))); 
});

self.addEventListener('fetch', e => { 
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request))); 
});
