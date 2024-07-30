const staticCacheName = 'site-static-v1';
const assets = [
    '/Portfolio/',
    '/Portfolio/index.html',
    '/Portfolio/contact.html',
    '/Portfolio/work.html',
    '/Portfolio/skill.html',
    '/Portfolio/404.html',
    '/style.css',
    '/Portfolio/assets/img/favicon.png',
    'https://fonts.googleapis.com/css?family=Lato:300,400,700'
];
// install event
self.addEventListener('install', evt => {
    evt.waitUntil(
        caches.open(staticCacheName).then((cache) => {
            console.log('caching shell assets');
            cache.addAll(assets);
        })
    );
});
// activate event
self.addEventListener('activate', evt => {
    evt.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(keys
                .filter(key => key !== staticCacheName)
                .map(key => caches.delete(key))
            );
        })
    );
});

self.addEventListener('fetch', evt => {
    evt.respondWith(
        caches.match(evt.request).then(cacheRes => {
            return cacheRes || fetch(evt.request);
        })
    );
});