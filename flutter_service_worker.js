'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/AssetManifest.json": "80cdc7fe60b2173734157046f97d0ce1",
"assets/assets/images/Group%25201.png": "ebf08090245ed891b843cec164ec687a",
"assets/assets/images/can.json": "0ae88e9bfdf1ad02755c60349fe5fe4b",
"assets/assets/images/icon.png": "1dacfe4344da8fee50ffecc917f78bf0",
"assets/assets/images/icon.svg": "1931d5c2e8a81fecc101d046e24e674e",
"assets/assets/images/gas-play.jpg": "41db63d83084c9c8e0502a950da989cc",
"assets/assets/images/maintain.svg": "86b902aac618a02970818846e2b37ac4",
"assets/assets/fonts/Poppins-Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/NOTICES": "37c8911256184bee2849a9749f30754f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/FontManifest.json": "828a6831a0d32c4ecb74183914302af1",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"index.html": "ac8f6ed860515af9ff534a03afc25dd2",
"/": "ac8f6ed860515af9ff534a03afc25dd2",
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
"main.dart.js": "0bc470070210f3c900d569e7a2fc13e9",
".git/config": "23fb38bfcb7df20eec059f91017259f5",
".git/packed-refs": "ad018b8771cb30fb081c3136b2fed50c",
".git/logs/HEAD": "0d7402817cc7649a9d9db3849796052b",
".git/logs/refs/heads/main": "0d7402817cc7649a9d9db3849796052b",
".git/logs/refs/remotes/origin/HEAD": "b91f2af60d0c615837ece77e4a7a2612",
".git/logs/refs/remotes/origin/main": "a2e486eebe9efe1dad7ee496a1575f84",
".git/COMMIT_EDITMSG": "1d48c4cbcedb308e0c4defc8b9c849cc",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/FETCH_HEAD": "ffe2305ecf5f638d155abf1295057ec8",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/index": "324c874ec7252bbd37cbb2345003919d",
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
".git/ORIG_HEAD": "65b135d42ced43dd3688a10e4391fb0d",
".git/refs/heads/main": "65b135d42ced43dd3688a10e4391fb0d",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "65b135d42ced43dd3688a10e4391fb0d",
".git/objects/pack/pack-fc069b9b0c3d023c0c39bc804eab2bcf56ab165c.idx": "64203a61c15c149a12f18aeaa2826e0c",
".git/objects/pack/pack-fc069b9b0c3d023c0c39bc804eab2bcf56ab165c.pack": "e0def7829c8d309c6efc677c84055bb2",
".git/objects/d0/218ff45ca5fc78222a52a3ab2a805889757797": "eeff615da7215aab1b250bd44e458d92",
".git/objects/70/c8eec272e3398bcf14c47ea30034fdcd1822a4": "77944b220fa469dd717991492bb6758b",
".git/objects/11/ed1f0f4f23273aa86d7048605b4fc1fb42e1cc": "bc8370292e65b855957c774756fd8fec",
".git/objects/21/4b116ac9dc75d5c749c2979dfb11c185366ee0": "8404465efe268dcefe04952eb159e276",
".git/objects/33/b5966f732ac8fc664cfc0478f96cc72952ebb1": "4df1cd0ccdebd28008c2a796aa2b25b8",
".git/objects/89/d73cebe7ee6af756d551ae63e724a5386d0b7b": "fb9d1c67076e5b2b01d6a92f8c2b8aec",
".git/objects/cf/38446c5800cffdeedc55e8b54fe62748521c17": "9d221af525f529e94759b8030576cfae",
".git/objects/01/d3e442fb22abcfe7e577be8a86e017cd92d69d": "0df3f4b9e34a5ddf653252a3f0c0a291",
".git/objects/28/6007aada998ba0c07d5eb1682a0d4509e56c9d": "22c25fd11e4f79a0453881ba93b7aad4",
".git/objects/3e/c413bb6836c3f73cde66989c4b440047f39acc": "3d9d437f7c6a6c282da3d70c9f16a209",
".git/objects/af/a6668cfa577919cdffc79b8302549641b7e710": "691a1c3cb28d45a5119af3c70f87e448",
".git/objects/80/9ceacd022544aeed461639b8eefda7cba5bace": "323f8146461816da10d461bcadde54bf",
".git/objects/d3/7ef8b0022c5faee12251271022c19f0836a125": "1bfe8feda8de2dfa26ca2621b652535f",
".git/objects/ec/c3db91ddc52301b7d0bad639103584d316d223": "d36cb447fcb696547387a3f8865cea61",
".git/objects/68/e286d45259efa41c6672113271f4ea020a593d": "ecb6498c5d3421c35f1a995b0eef9aae",
".git/objects/ac/17dfc03a5fa099ef3fe85f594bbdb50fed3262": "df3784f1c61aeab2abd52c3b9044e366",
".git/objects/ac/edc9b2c2c3887716d664db9c21e3b929a5099e": "8d8785b87dcaf91d7c402a9eacab1287",
".git/objects/1c/afeca8b184815418ebfbb528a3bbcc538ede10": "c8bc386313f065080a35ba9bcea8d170",
".git/objects/63/eeffbbea05c10c5b15257d76a860043ed15f0f": "c3443e7980e90e95be344426c52e1f54",
".git/objects/5e/a1b8dac1544925e24e1f767c5d18fa8d5779f1": "ea607b4402b32c2a804b77a310167d22",
".git/objects/f6/8d8bf1f42d2acdfd3a3cbe0ffda157d65269b7": "015cb2724982376ff0409d3de2af5715",
".git/objects/13/dc239821dd52d2fb590210eb3187ec08ac9973": "ca66f894e899513abcfc6f8055004d46",
".git/objects/99/3b4bacfa593734e261a2c91d8dbcab5d9aebba": "91eb2905dcdabbaf9f0ff104423b0ef6",
".git/objects/7b/24e517707a4d36af9ba9a4a7439836b243023f": "a235a924ca47ce1afe45790840813047",
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
