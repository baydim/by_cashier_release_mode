'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/AssetManifest.json": "8744dd4c76f132cf86f302fec7f19266",
"assets/assets/images/Group%25201.png": "ebf08090245ed891b843cec164ec687a",
"assets/assets/images/can.json": "0ae88e9bfdf1ad02755c60349fe5fe4b",
"assets/assets/images/icon.png": "1dacfe4344da8fee50ffecc917f78bf0",
"assets/assets/images/icon.svg": "1931d5c2e8a81fecc101d046e24e674e",
"assets/assets/images/maintain.svg": "86b902aac618a02970818846e2b37ac4",
"assets/NOTICES": "44b42ce73ddada9492bb85534370ebf9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"index.html": "506947d76cfdfdb62e83f22668da824e",
"/": "506947d76cfdfdb62e83f22668da824e",
"manifest.json": "b4679f7079b70b50bbe1d34f4fed648a",
"flutter.js": "27cd53a8ea0535a790fbc9fde83b9fdd",
"version.json": "3e152f3cd7861e188853706737a4ad71",
"splash/style.css": "81a24bcfa06fe31a9de083e4d5778d2c",
"splash/img/dark-1x.png": "9606e0d1489c63b529539587c3e00470",
"splash/img/light-4x.png": "91e5c50860c9dd6dab7aea4c3f8e708e",
"splash/img/dark-4x.png": "91e5c50860c9dd6dab7aea4c3f8e708e",
"splash/img/dark-2x.png": "d8a55ee1589d0ba6f947ca939ba6b3c0",
"splash/img/light-3x.png": "6d1d9391f9afe0fbf13f73365b0dac7a",
"splash/img/light-2x.png": "d8a55ee1589d0ba6f947ca939ba6b3c0",
"splash/img/dark-3x.png": "6d1d9391f9afe0fbf13f73365b0dac7a",
"splash/img/light-1x.png": "9606e0d1489c63b529539587c3e00470",
"main.dart.js": "5818f5e547de647b08b1e597c2ec626a",
".git/config": "23fb38bfcb7df20eec059f91017259f5",
".git/packed-refs": "96c90ac6bb8bb8ff87451505ed0bebed",
".git/logs/HEAD": "dbcf4571a5821ecdfa4f578820774309",
".git/logs/refs/heads/main": "dbcf4571a5821ecdfa4f578820774309",
".git/logs/refs/remotes/origin/HEAD": "313a8c18c3dd03ae49d1387024593e3f",
".git/logs/refs/remotes/origin/main": "327ffce64f920b76d16373425c0a2322",
".git/COMMIT_EDITMSG": "3a716bc58f1574a37d46a88bf3ea7005",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/FETCH_HEAD": "c8185716a014a94b4c4931f60e99a8b0",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/index": "3fabbc9c72f90c0363c51759d3786b2f",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/ORIG_HEAD": "4d0d3d6a45bb3d97fd2bd2bd433e70b2",
".git/refs/heads/main": "4d0d3d6a45bb3d97fd2bd2bd433e70b2",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "4d0d3d6a45bb3d97fd2bd2bd433e70b2",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/d0/0ec0001b09fa9b28d0e92478633e8155d41441": "ac24cbc6126d078ca6e9ac5a2f964903",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/fb/5e450880f72332d4f053022a24ccc5451bd6a5": "59a71290d0f611e17635245c74cffecf",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/24/ce1299699b5b3f8a12c887d04e9c2b410f2e7e": "a8e6275c7816febec7e4e2164d7abdb6",
".git/objects/8b/219f0a472d53ac2f8af310066b8f74155e9d47": "413972a50f5c8baba19d85c0f5441406",
".git/objects/fc/fcfdabca37e78a1edb37001d27a3a9899e1b14": "e4004ff1520215e96b8392b1941cbd22",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/97/727ee71a11d5e12833980d2d99e53e950170fd": "75491a972241cc407179bfc9b4a0a19d",
".git/objects/2f/38cbd61256060f285d2a19d671cbc20c98869a": "a7368ebbb1fcfb581efd749523a872f2",
".git/objects/33/22b1fedbcb024ec656a01608e35f4e878844ea": "126672f74545fde7ed3e8b852995dd61",
".git/objects/16/df1ae43a65c8d9d815252d378200bc12ea28c4": "9d2855735ddf06a508c524d9834e9f66",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/36/62eadd9518f514ccd82a94267db47819e0d70f": "4d07f9d8d9de2a80ef155c96b410d27b",
".git/objects/36/1ffcf0e2df30015caacc0d64e17de6e0fbf034": "c55d7492ed12cbff29399ca9413e0680",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/01/00e1c05c05437e5049bdb34e1b952e594e0c0c": "1475ffb329e3f70e187c3d10983ad83d",
".git/objects/d9/83c59eaa5848f9b7c4e7ee85bcd3c67c17bb42": "fa69bfe298ce41830dca0de169fc2ec4",
".git/objects/23/b85766f8c80e7b5d9374606fa5b841f11dfc78": "d3c79c219c72006df83490704748f52e",
".git/objects/26/ad04e0540b1381c2fbd3b75ec86d7443d6a7f6": "23177a897525af5d20932213a0396e1f",
".git/objects/b9/19d6ca70cbb69ee2ce65683e700f2114225bdc": "7994fe04743a808e1a9109f539790e30",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/37/733e78d7b54e8243bbeb799d52f0c1083c4d6e": "4f9d2e4b8e59795e481ef17e016030ce",
".git/objects/7f/98ce7abe2b729033409f7576b7a225ea29a087": "2a66dc6ed27bde709408a44524287cce",
".git/objects/93/80ce2387378a136e1ddebe5d0d58f6bb556182": "003971254db614020b8f4d45534218dc",
".git/objects/7c/ffcf17606fa27784582bfd3e2a8e87fe2726fd": "0f424a0c97e993ca8e4275713ea9483a",
".git/objects/ec/19000187401403370b6a73e967f98ce9e27776": "1c1af919d683f1efb53c588845fbf937",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/41/75307134c4d979a9545d6d3a137dfbdf164e28": "7b48262561866c892cca88aa0e986191",
".git/objects/49/740dcec8dbd16a56e9443d4f9bc33670eab982": "aeb4f84dc296411c04f8c3c2152492d3",
".git/objects/50/30d1e691a2267ef09135022f8b193328725660": "b370f2503dfe1e4c98af9eeb99de3679",
".git/objects/50/def5137a7aaa67be6ae6fa74038c04bdab7aa0": "60a55a57f2d84a4c11e88c84a810199d",
".git/objects/91/d2176c64a3edbffb12dc8bdfa99757ac77fbb3": "beff76a5ec19419aca42be40760c37c7",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/58/db1c0c030749f46dc2dd41440c8c8464b61c5d": "d022180867ea5be3c6ef24d00b4655e3",
".git/objects/f3/d9314496e6d63617389b153c68f098510cfbb4": "abe9fc24c18d9fb07ef49e72f6719d56",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/1c/380e0b22a64c6c3cd495bec9166fed4efa2208": "705bb1aa08c7f4098e76441d6f453306",
".git/objects/30/38d5222b75a5f7b8c55d51eeea7ee41f3c9d37": "14d9e3ad5ee8afa9f3b229d6d92c3d9d",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4e/7ac36e89326d83a47948f303c5c203e67b0328": "a560bd884aa16c8bd291cb4d3d73c06c",
".git/objects/0b/691901827d9ce067c0cd33c7d2122237aa9dda": "b1b19aa1475422957c64cd7f5d410534",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/1a8d1c3b22c538111d3e66f182127ee46f03fa": "4e4d95a009ffb6ded912ca9f4528a8d6",
".git/objects/02/0f5e56a927a04113ecb38d06238b0c2998ee52": "b74ec5f14b7d6eaa207cddb2b632edf0",
".git/objects/42/576d15c1a7a51bb87c6b2f4d4936d3107e418d": "f0f9137de1d98128ce9c8d1c7664e87d",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/dc/caca3fd01222cd4d20997c94eb313e6d783ec9": "4b6c3551bad321ea3a12e22c6bafe6bb",
".git/objects/dc/2064177a36dc2dbdbb5c1cab572a8668851b56": "9b63ce233d7c50ea34de78cc29899d70",
".git/objects/dc/48404c9faa62308051dca1e0df8f6e32c65810": "aeb20e2c6e99f3c251112d8ab1b11a89",
".git/objects/81/8cdb82b8b40e9e5d2ea1ebcc46abcb6b9ecd6d": "1ca137c0e0f751250ba5f3bd6b32155d",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/a5/320540b17bd273466b368356f9498673697487": "a61a17effb4e9b39d7599651dab7e8ef",
".git/objects/d5/6aed8231d9d1d9f07b7b40f61e07929c44bd30": "8f6edb3f2874da282a0994890204fb06",
".git/objects/c6/08cdcb4128b3024ecbb6f05678c7de3dd8a5fb": "0a1c6d243dc47817607f310507bbbec1",
".git/objects/c6/c2d65b9f8aafde72823abe22404f0f1e882bca": "d9f1233a1693c2a19dd8dec92102b9cb",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
