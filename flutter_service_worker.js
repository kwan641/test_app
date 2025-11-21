'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "45748e930a3ada178108bcc9e31f3347",
"assets/AssetManifest.bin.json": "1b87a93eb36737ea0921235df2ae02fb",
"assets/AssetManifest.json": "e2553120882c794a78fb0ea71e4c2abf",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "3d9d74f74662c5ad90270d9ea2344be9",
"assets/images/1_special.png": "c7dd756667853b9e2c3831d97dd01b00",
"assets/images/2_wallet.png": "7c514a8a6ef49ecbe7229af61cf79c9e",
"assets/images/3_1get1.png": "cf7688a3f2194fc2961a393578870547",
"assets/images/4_member.png": "07283f4d7dc40a22829b4784bac64508",
"assets/images/5_deal.png": "c094389f1c2369eeef874aa03ef76c4a",
"assets/images/6_product.png": "312b6e7a0094a5e9c502099933ece4d5",
"assets/images/7_exchange.png": "546a29f7cee0a444817fd4e7ec0c3faa",
"assets/images/9FireSource.png": "e38f609e5d74dd37d6f55b66c1a28b9a",
"assets/images/b1.jpg": "d4b35d03309061ade12ce3eabb98109e",
"assets/images/b2.jpg": "27ca484193eeb6f0d0edc7c56fb50396",
"assets/images/b3.jpg": "e09e43b34b7f77a083f43a1b6eaca3ab",
"assets/images/banners/b1.png": "c557a3f802f1d3ec65f188fc3d102334",
"assets/images/banners/b2.png": "8f49e8ad7da5c4d5adbed56e7037b6a3",
"assets/images/banners/b3.png": "ffaa8df16d85fb8e67fa685130453896",
"assets/images/banners/b4.png": "5eb57b3be885c72f35decf0f022245fe",
"assets/images/banners/b5.png": "ab6e2291db0571f4f1e381021d47582d",
"assets/images/banners/b6.png": "761fc85d8b834cc7de2ff9b44d016de3",
"assets/images/banners/chill.jpg": "64c7fb5acc724c8de9323e8171346a68",
"assets/images/banners/coffee.jpg": "9217c505a1dbaa0b47580d5e322fe7d5",
"assets/images/banners/drink.jpg": "8b6f076ee222404fe9e999b31bbbda10",
"assets/images/banners/icetea.jpg": "b549c3d2a4eaf835a4e423acf1c9473c",
"assets/images/banners/jokejub.jpg": "edf3fa25b18d0dde7d3c17657d4a57cf",
"assets/images/banners/lamon.jpg": "0b3281c0cca66f9e681e2d1ae13fd75c",
"assets/images/banners/lamontea.jpg": "becdc3bb5537d62fff804df04b2d1b2c",
"assets/images/banners/noimage.jpg": "0fa1623bab5b9f8082851e93b214b1f9",
"assets/images/banners/noodle.jpg": "f3a68089d42fa1ce86c80406cb721ceb",
"assets/images/banners/orange.jpg": "45b42216df541f9666cf3f0339e7adca",
"assets/images/banners/redpork.jpg": "f513fe9a0731b17af4c5fe487d213a6f",
"assets/images/boat_1.jpg": "35185b3a73fb686b5ca430a17bbb6f6c",
"assets/images/bookItems.png": "6a055d2947edea04cff781119f2d2399",
"assets/images/cover_1.jpg": "5481bd1d83738b7af341c5f967b746fd",
"assets/images/cupong1.png": "94af55bf4250cf79000aa819c03591c7",
"assets/images/deliverynow.png": "c528474f4007b59e3441cc237c98707e",
"assets/images/empty_cart.png": "3ce966574dcdb4e2548d9a4f895575a4",
"assets/images/examination.jpg": "b23f90fba68c6b74e6b7ddc5d3735f1c",
"assets/images/f.png": "77d199c5b5fc1a2f7fa8683b5cfd67b6",
"assets/images/fired-1.png": "f5a9fe5f97de790fe813bdac62aa5168",
"assets/images/fired-2.png": "ccfa7089e117d94b1eeb3fff581d5a85",
"assets/images/food0.jpg": "7ab32b6207cfc45df1d560c6ea5639a7",
"assets/images/food1.png": "a1e39323a4493ab30a0daf60546ecac7",
"assets/images/food6.jpg": "ea1cf57277412e5686c154228c6e9489",
"assets/images/fruit_1.jpg": "a4f42b096155c916b22e08ad261c9721",
"assets/images/g.png": "51791544f2482d53a28225ae7ef91dfe",
"assets/images/icons/1.png": "c7dd756667853b9e2c3831d97dd01b00",
"assets/images/icons/2.png": "7c514a8a6ef49ecbe7229af61cf79c9e",
"assets/images/icons/3.png": "cf7688a3f2194fc2961a393578870547",
"assets/images/icons/4.png": "07283f4d7dc40a22829b4784bac64508",
"assets/images/icons/5.png": "c094389f1c2369eeef874aa03ef76c4a",
"assets/images/icons/6.png": "312b6e7a0094a5e9c502099933ece4d5",
"assets/images/icons/7.png": "546a29f7cee0a444817fd4e7ec0c3faa",
"assets/images/j_menu.jpg": "ab6b3313e8a7b9db13e353f654864843",
"assets/images/lock_logo.jpg": "705b80be411270ffb1cf95ae46a45e7d",
"assets/images/login.jpg": "af07001daf141cf2950a23118f0dca2a",
"assets/images/logo.png": "8d25f25374b104699693878ad712dabe",
"assets/images/logo1.png": "a80ae6c1e63baf89805dbf019098f7f6",
"assets/images/logo_part_1.png": "589d769182d2c748e845fe4cea9ae73d",
"assets/images/logo_part_2.png": "29d886d575de6007eefc3d5ca04d58d0",
"assets/images/package1.png": "c1e2c6c230d7a3a41ab4fbcadd3b4698",
"assets/images/pomelo.jpg": "d67518b8036be6a194f0158d6f58f42a",
"assets/images/pr1.png": "a4325cfdc5d335ba0c74c12dff7ef52b",
"assets/images/shopnow.png": "d8cd55847c997f2d398df8b5ef7431ad",
"assets/images/t.png": "b757f2bca8039d4a08882d38f4c1b8f0",
"assets/NOTICES": "4aebcbb449e74dd3706d960facd47558",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "4408412e4e400db2e99fe142aed52c30",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "6bf7d542199cd6dfb8b98e4d3c3190f3",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "bf70075aff4820c9ed33bbcaf215859c",
"/": "bf70075aff4820c9ed33bbcaf215859c",
"main.dart.js": "ab92b50451a0c8b755f75b93dfc4f311",
"manifest.json": "49869d5adf7df0017602772da3eea937",
"version.json": "ef4cb97f639c2dc3c754eaf247482062"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
