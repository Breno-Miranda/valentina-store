const CACHE_NAME = 'valentina-store-v1';
const ASSETS = [
    './index.html',
    './products.html',
    './style.css',
    './products.json',
    './videos.json',
    './assets/favicon-purple.png',
    './assets/anizia-silva.jpg'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(ASSETS);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
