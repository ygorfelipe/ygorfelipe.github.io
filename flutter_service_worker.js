'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "82581b8deb2ee22ddc1682050e0ff655",
".git/config": "fc2fd5641ed01bb5bf5e7be659d5d44c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "42e9e64f8a7116e1f741d5969813987e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f8e1409e54bcc825f288bd26332fdef0",
".git/logs/refs/heads/main": "10ea3a3f5538314fdaa2dee2a237d50e",
".git/logs/refs/remotes/origin/main": "ae7fcaf24e7e014889f84ab8df1e96b5",
".git/objects/01/ee09b16cd2739e8fb183a47b9d21358311296f": "82b47a0c4c7e87f52fe27c07feb2e09c",
".git/objects/06/aedc0500e47ef3b469bc2db8c91d120954c573": "3ce94632045adc4f77b0698ca21e05c0",
".git/objects/0c/389785a253b774eeed202b174958980f019599": "fd9fdb626c565c385dac4b014a5d6c0b",
".git/objects/0d/7953cd0378423cdd8ee7b9ee61e67b7962445e": "915c22dcd97b108ac6f2a1736f3759d0",
".git/objects/0f/56d84060cd8a5728097b717f66b4725c31e3fc": "3ca3c8345c543429875720139c3029fb",
".git/objects/0f/64fef6d97006027db0d86879e4c7e3a0e477ac": "7b19026ead93993762c7dd77b92ad4f4",
".git/objects/18/6b6a4a9dfa306ecb7dcb2b0cc67326f3ca65f5": "ca23744c899d60d21bb6fcd565d138e2",
".git/objects/19/f7e71f9464f34a6e6dad276e76c26645db913e": "0c90e1bac856260b60afe71363fad484",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1d/f107bdb6614f396e9ddfd17555288b9745746e": "0b202193f6f821e6541387def603b47e",
".git/objects/28/adf5e4b02e4f3a95e9ecc067b5ae589cf0ad99": "57873985a5be925db81574f3c59e6d04",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/34/b3551c28718600e6058e1bbb15ec3243a4f4ad": "79d9e0ba9de9ffdfbd3d9bf313b2281f",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/40/f2d13e5ac1b11a05fa0f53fa170ee0f826446f": "2fb2af80004257dadbb24b3649bfffa2",
".git/objects/4e/2f4c8bfb1eebaf939a1bfea9a669a5125ba795": "ac4f24cfb1af72ee19857c4a8071b447",
".git/objects/50/db6bebdab81453bca92f3d278189c613ae21e3": "6189df938301001b1757e06fe000ce21",
".git/objects/53/f3e6b1259a4860cf1b05ed0e78522f01c917cf": "834265a8458641c8d9f3bec1731c8587",
".git/objects/5f/10a7ec556565443bc7127b430cf5a3fca1bb4f": "d6fe9aebc1b04161df9eaa44d65867f4",
".git/objects/62/0cae12394f08ed6d1d9bdc6b013a9b35463002": "6f8deb230fd6e3b8011c28a645eaaedd",
".git/objects/63/1ad877c4f52870a54bfb97792919f812144184": "3fa40c1952725968fa2913dffc1d40f0",
".git/objects/70/fc5c653b9cc2177bd40878851805fb4377b92d": "5099d50334849c231dfaa1585c7a9c86",
".git/objects/73/e2db65d54b77ec4cd361eed4338f896d4cfa9e": "019d5eff88082233540eb2c0ee6184d2",
".git/objects/74/68450d3b049c9c72c471db9d61cc79c56410ed": "c76364129110c8aa57076c1be07e65a9",
".git/objects/77/af5d25ba8a9a626b344befb95d588d9b322a5b": "58fcc23bb42902fc95473cc5999ce7fb",
".git/objects/78/df43e58124862ab856106a70dfad8dfc1dfdee": "ccb0265bce68522f37481d05e354acdf",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/7d/e1396c7d8fc2f94474fb2edfee39a53ab81880": "9a56ca9a39f9aafcbcb8492fe80597fd",
".git/objects/83/a4c2799302406d8161dede9578def6d257d203": "a046bfbf6b8452cb4b7b9384c393a5af",
".git/objects/85/042c33164da8a8312fc550a3746f04ba087a11": "638d01c34fc342a16cfe2ed49eef64d3",
".git/objects/88/83336887925dcc184f56b831c8a4cc5e9b1cb7": "c49ffdd5cf55dc62c94baa6d084b5fd1",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/a6f7f063c861e09b0d3ed7bbe564ae91423fc3": "ac9a12c15a913bb99ec00610a65ec0cc",
".git/objects/92/c3a16fed2bf030ef6c521a22917d34748967f8": "6fd01b5bab771a7789289ab883ba246f",
".git/objects/93/2200e7689ad3c718316949c6795798a2012b62": "f5a7f39c51fc18da28e4caafb0b3bde7",
".git/objects/95/24aaa664c940be49b9b3c94a72f2c0e9aa94aa": "ea8775ed5d69e532337351a315604b6c",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/98/655112e852b9bb464b3e242ab52fe81ab42122": "fc46b6fc0e25df539f44372b2417d32b",
".git/objects/9e/3e5d0d8bd9ba278eb03e112eb8904c00eb7f93": "8c6c839361b3f97acd771dbd8bc3830e",
".git/objects/a0/0c3354ff8d7c022dfdced608e920c2bf27688a": "749a5e6f0d429c0859711f2f3db77ffe",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a4/4245003a5f1dd9973e04d114cd2d145fe56166": "fe39a763fcc0f016221094b56e6ecaab",
".git/objects/b1/aa44d1e46b0bf2e349986a210d6bb2592f3c4b": "cc8b39b17cefaf7cc8fe79338ef19d1a",
".git/objects/b3/8a1e6236af738e0656859eba642ed5b4154220": "38d4f1a3d0749e017e83e7fa39219add",
".git/objects/b5/3b32ecfa693cb5297b125378098e117f513b05": "29624ce4030350ee923102f487d35a64",
".git/objects/b5/65b57a5106a88bc5f1cf1afbe4668baafb8415": "c0c6df836c69b4d10b8cd57cc4cad5eb",
".git/objects/b6/dc356d00b11a552f40a969acd57f3f02ac86c0": "30526cccde78705a8840a173ceaae2fa",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/be/0e3c7058e48a7748b50224134625f7b01ac210": "9480b7572f0e6ec365fabb191ef9ac16",
".git/objects/bf/7bbdc057e0fa289de5486eae31e40e599a65a2": "f654daa4640acc663ed04a60c8f84fa7",
".git/objects/c2/6336ad75062b34fdbdf3b81b60269c901117f2": "d2cacf24e2db6e26cd702c7db61f96b8",
".git/objects/c3/e7dc63b560e477057c6ff3aecfb0bf9adc46d2": "9cc56a8f6e05437321983935d6dce875",
".git/objects/c5/48406e6fbf8eb9540d2e109c5233913b8357c0": "db116d94f3ce4f854c9c1a56454deff1",
".git/objects/c5/7feafe3d5546d9f4983d9bb1e432e689cf699e": "7d291becef6c9760bf65c4b602f5351c",
".git/objects/c7/4fbd3ab616c6fcacb9f0bd670d83353bed2b70": "ae3410ddd52b96f60f6ff4314d91f935",
".git/objects/c7/9b0539dff83a0a4d4d46dc54ad745ce3e2a772": "6443172e58a379e156d630a95800e19b",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/ce/255d407f886cbb6e843076c02a91dd8441c51b": "40eb9556b109a344826a97a69332409c",
".git/objects/d2/a496c43115725fbc49b5a6a99d183139cfaafb": "020e35ebad35ac442a6b5c61576553e8",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/f6627541ae396518c13b43e3dbce9a9eda04ae": "049816862289cf00a212180a409e9d7b",
".git/objects/ef/f4d66c549e506a663c0936d7eab0f2a26b841a": "92ec908c2fc527c67e76c75ce43a8ee3",
".git/objects/f5/80870d1354821fe6fc205ec35bf3fffaf9c590": "a31009911ffde77cd2a9ea2eb87f89f9",
".git/refs/heads/main": "f1b9a36bddd51d8ef7d6f5495fc806b6",
".git/refs/remotes/origin/main": "f1b9a36bddd51d8ef7d6f5495fc806b6",
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
"index.html": "0a4d618cd1ba4e0959a245a5b57a9dfd",
"/": "0a4d618cd1ba4e0959a245a5b57a9dfd",
"main.dart.js": "959919098dff21b048c0fe047ca12ef6",
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
