'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "ad3966b3d4ffd0ddf1834bbc48031ac3",
"assets/assets/4class/10SearchBook.png": "f1c055ac53e04a193d66423f675fac0e",
"assets/assets/4class/11Documments.png": "f3e6272a3a01041324371ff52da20807",
"assets/assets/4class/12Chat.png": "ddc7f555eb22052189b9c4394771cfde",
"assets/assets/4class/13Profile.png": "b29516655cb37f8212b2ffd706a13f4a",
"assets/assets/4class/1Login.png": "b43a41fab9214c102f7ab0c5fb1c7d6d",
"assets/assets/4class/2HomePage.png": "4165a08fd618a4b5fff4c42238304542",
"assets/assets/4class/3Hours.png": "7fcd57a75e2b91c6d60aac836ba1c469",
"assets/assets/4class/4class-logo-2x.png": "dcbed233d9db9c01e852ed279ce5625d",
"assets/assets/4class/4Rating.png": "1c57276e1e78c942641e2f2ee48d9c67",
"assets/assets/4class/5Events.png": "7248a3b69f74736daf8e9da11d1000ed",
"assets/assets/4class/6StoreEvents.png": "64b25af79a286ccd8b66b62c58d00d10",
"assets/assets/4class/7Library.png": "75d78cd794db6fa15b363f695df50ffa",
"assets/assets/4class/8LibraryDescription.png": "2223e1ff51fb7204cbac70bea4f7f677",
"assets/assets/4class/9LibraryDescription2.png": "f5fa2d285e17b6ae46e8f8f5ff9e8607",
"assets/assets/icons/e-mail.png": "0a3a3edc6e1e916e5078b7cc65a92a31",
"assets/assets/icons/github.png": "357c3c73e054d6b0eb9a10dbf80aca08",
"assets/assets/icons/linkedin.png": "0dfdf900b4949bfe7a038c3121e99376",
"assets/assets/images/html-background.jpg": "db01fd98c71cbfd750084fba8c0bdcf7",
"assets/assets/supermagasin/details_1.png": "8a449f7ba28577ca220245ba52b99bf0",
"assets/assets/supermagasin/details_2.png": "a5c00b9268855ff48c4d0f6198f62d5c",
"assets/assets/supermagasin/forgot_password.png": "a2b1c828a7b018451d9a116203ea502e",
"assets/assets/supermagasin/home.png": "eb888a70d1f4e25c42cac6b4fce506c4",
"assets/assets/supermagasin/login.png": "fe17349016e4eccbe04460215b78a19e",
"assets/assets/supermagasin/login_success.png": "ff12fe491afaa253f332510a9d6ab4cc",
"assets/assets/supermagasin/logo-supermagasin.png": "88ab294951010bd4e785f32e27dd0565",
"assets/assets/supermagasin/splash_1.png": "a5bfde519f1ddb122b2ae8c607f21599",
"assets/assets/supermagasin/splash_2.png": "7454b37949d062e6a4ea37eea1cda9c8",
"assets/assets/supermagasin/splash_3.png": "30e48d2df134089a48f04396fe846f1e",
"assets/FontManifest.json": "e024588c84b5d20cb7869d6f908130e8",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "acf121f705dbe11dce2489a79524f8c8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/line_icons/lib/assets/fonts/LineIcons.ttf": "23621397bc1906a79180a918e98f35b2",
"assets/shaders/ink_sparkle.frag": "9d41677ca8a2511f3af703e4aefa20df",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e3ebef8da38e80cb63207cee1a808dae",
"/": "e3ebef8da38e80cb63207cee1a808dae",
"main.dart.js": "cd9167f7d414cd2a44fccdfc75f353be",
"manifest.json": "ecfe5403c2c36a51575b147dcfecc99a",
"version.json": "f73c5e0a99df53e09a9d24de747fa802"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
