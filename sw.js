// Service Worker بسيط — يفعّل تثبيت التطبيق
const CACHE = 'alharam-attendance-v1';

self.addEventListener('install', function (event) {
  self.skipWaiting();
});

self.addEventListener('activate', function (event) {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function (event) {
  // نمرر الطلبات مباشرة (النظام يحتاج نت حي)
  event.respondWith(
    fetch(event.request).catch(function () {
      return caches.match(event.request);
    })
  );
});
