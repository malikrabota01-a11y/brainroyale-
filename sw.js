// BrainRoyale — самоочищающийся сервис-воркер.
// Удаляет все старые кэши прошлых сломанных версий и отключается сам.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.map((k) => caches.delete(k))))
      .then(() => self.registration.unregister())
  );
});
