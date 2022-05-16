'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/AssetManifest.json": "aa19e2ecd980331b357693cfda4383a3",
"assets/assets/images/Group%25201.png": "ebf08090245ed891b843cec164ec687a",
"assets/assets/images/can.json": "0ae88e9bfdf1ad02755c60349fe5fe4b",
"assets/assets/images/icon.png": "1dacfe4344da8fee50ffecc917f78bf0",
"assets/assets/images/icon.svg": "1931d5c2e8a81fecc101d046e24e674e",
"assets/assets/images/maintain.svg": "86b902aac618a02970818846e2b37ac4",
"assets/assets/fonts/Poppins-Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/NOTICES": "729fd42ba5cbe518039b9376713db83e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/FontManifest.json": "828a6831a0d32c4ecb74183914302af1",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"index.html": "1308d1db629860f2c27053bfdd45bb29",
"/": "1308d1db629860f2c27053bfdd45bb29",
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
"main.dart.js": "511d19f67fad2b5918f25cd5c0aebceb",
".git/config": "23fb38bfcb7df20eec059f91017259f5",
".git/packed-refs": "87d717eeba60410991dbbceb84d15474",
".git/logs/HEAD": "68f901b9631452b5bd74d4a5ef196860",
".git/logs/refs/heads/main": "68f901b9631452b5bd74d4a5ef196860",
".git/logs/refs/remotes/origin/HEAD": "16752766abdeeabc97743de0f052ab8b",
".git/logs/refs/remotes/origin/main": "4b7041322725729d4161d909dd4ea06b",
".git/COMMIT_EDITMSG": "8f662cf4cb4db27329ab5088d1d127ec",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/FETCH_HEAD": "de4cbf32c50cc54e51c567260da2eb58",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/index": "a22fd10342e96279520bbf7d8fdd962b",
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
".git/ORIG_HEAD": "3e13b0525ad38f3e3f6f7d146d98680b",
".git/refs/heads/main": "3e13b0525ad38f3e3f6f7d146d98680b",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "3e13b0525ad38f3e3f6f7d146d98680b",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/78/4b63393aae4619cc16482a2243041b237b6f86": "a675fe30b29747c5ab81420f045554f3",
".git/objects/19/4fa52a5f5e7507f11a1989f50329671ab891b6": "90b46c77a2676c58cd60a4dabb0f1b39",
".git/objects/a4/2880807c01cce2d66e6ea172301122864b339f": "d3aa6b501b5dd92fef6020f1593002c7",
".git/objects/a4/68847876bfb72be56892f2fbda287a01daeb91": "059c60f82947b23e79f06c1300215426",
".git/objects/d0/0ec0001b09fa9b28d0e92478633e8155d41441": "ac24cbc6126d078ca6e9ac5a2f964903",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/96/60361f8e94db2830834348b9ca1b7328ecd9ee": "b9fd75d4c21af36aae381edd66c7ce79",
".git/objects/fb/5e450880f72332d4f053022a24ccc5451bd6a5": "59a71290d0f611e17635245c74cffecf",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/24/ce1299699b5b3f8a12c887d04e9c2b410f2e7e": "a8e6275c7816febec7e4e2164d7abdb6",
".git/objects/8b/f32a66f64c937ed00bae4bbd8fa1d46bce3b25": "fad1ada73e1c6d09ccbb0bc8814d0c5e",
".git/objects/8b/219f0a472d53ac2f8af310066b8f74155e9d47": "413972a50f5c8baba19d85c0f5441406",
".git/objects/a7/e608c5a16f9dca5b2e6851724ec8c3ffeb5726": "1f2bd9a652ee511b29433f506f42b863",
".git/objects/fc/fcfdabca37e78a1edb37001d27a3a9899e1b14": "e4004ff1520215e96b8392b1941cbd22",
".git/objects/04/a2594beb199799809b606f007cc5c7d6587fb3": "8326b28295ae5a689668b1889645340d",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/97/727ee71a11d5e12833980d2d99e53e950170fd": "75491a972241cc407179bfc9b4a0a19d",
".git/objects/51/948e3f84cfcb5bf04224358f7d253b6153cf5e": "db9b85db53f4c6cf83e54d382f44ec8c",
".git/objects/70/3a1a9ad1df7c9ea57ad1a44c2ef5f7c88bd0ad": "756519cda586a529a6b2541a6d5f6954",
".git/objects/21/4e0bea2564689130d89b8bf577d9ac39684a08": "cc501f79ad01e19a95a4b80e33f2e036",
".git/objects/2f/38cbd61256060f285d2a19d671cbc20c98869a": "a7368ebbb1fcfb581efd749523a872f2",
".git/objects/33/22b1fedbcb024ec656a01608e35f4e878844ea": "126672f74545fde7ed3e8b852995dd61",
".git/objects/33/d6c97484e2086a9086f715749f5a67b5b3a7ed": "6075576024f4f6d7941307f0fd163d15",
".git/objects/89/b4299ab5cae1b319b48f12f0e0f4f69515e072": "6830aebca56d90c421d443951eae9f76",
".git/objects/2b/cc208981218e8200bd338374c981fcf8075b44": "a810f33b12003a951b1634b4c2a18a54",
".git/objects/ed/668c9d950b2efeab037f4793772b4550ab03d6": "1424e9756d79250caf52c6a9496bf034",
".git/objects/16/df1ae43a65c8d9d815252d378200bc12ea28c4": "9d2855735ddf06a508c524d9834e9f66",
".git/objects/31/bdd39aa0f7612e44c138a39202a9d2dbfa9671": "6eff5aabf69f3bcded15d2d70cb67631",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/36/62eadd9518f514ccd82a94267db47819e0d70f": "4d07f9d8d9de2a80ef155c96b410d27b",
".git/objects/36/1ffcf0e2df30015caacc0d64e17de6e0fbf034": "c55d7492ed12cbff29399ca9413e0680",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/c0/4cc391d3449db36bc43e1c130ef102a2a37c0c": "7f566822b9feaccee4b873227779fefa",
".git/objects/01/00e1c05c05437e5049bdb34e1b952e594e0c0c": "1475ffb329e3f70e187c3d10983ad83d",
".git/objects/d9/83c59eaa5848f9b7c4e7ee85bcd3c67c17bb42": "fa69bfe298ce41830dca0de169fc2ec4",
".git/objects/23/b85766f8c80e7b5d9374606fa5b841f11dfc78": "d3c79c219c72006df83490704748f52e",
".git/objects/a2/cbfb6da30f75084d2029b2e7b0d3db536b2702": "6145dcf0f493fe20bb25fc0c7ce5ef41",
".git/objects/26/ad04e0540b1381c2fbd3b75ec86d7443d6a7f6": "23177a897525af5d20932213a0396e1f",
".git/objects/b9/19d6ca70cbb69ee2ce65683e700f2114225bdc": "7994fe04743a808e1a9109f539790e30",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/37/733e78d7b54e8243bbeb799d52f0c1083c4d6e": "4f9d2e4b8e59795e481ef17e016030ce",
".git/objects/7f/98ce7abe2b729033409f7576b7a225ea29a087": "2a66dc6ed27bde709408a44524287cce",
".git/objects/93/80ce2387378a136e1ddebe5d0d58f6bb556182": "003971254db614020b8f4d45534218dc",
".git/objects/93/c704ad2164d911ea0d2ff851c4957ab6a07ce6": "ede8a58d0eee36e21d6fc885daac9a18",
".git/objects/7c/ffcf17606fa27784582bfd3e2a8e87fe2726fd": "0f424a0c97e993ca8e4275713ea9483a",
".git/objects/9e/951f9efc74d2c13365b9917a2f1cf101b38522": "c79ec637739b3da8fa9b1f4a8e87d838",
".git/objects/ec/19000187401403370b6a73e967f98ce9e27776": "1c1af919d683f1efb53c588845fbf937",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/f32c5e0e4619397e2606089ed1c472a9e53518": "870184ff5cf315f347bf755c94bc40f3",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/84/bd03df39a7f835353ce8e4f0e0ef0aab39287b": "0d83843799e2b52c6c9b6fbdd9ee846c",
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
".git/objects/02/1248d2c93e91a7c42ed74c2a59f3b254ca7589": "5bbf905d16b31216468efb3c56071729",
".git/objects/ee/3ae3b20702f46a9f3e30ef38ffa2b84846065b": "7e9e04bc00568a5f6b676f3248dde6d1",
".git/objects/42/576d15c1a7a51bb87c6b2f4d4936d3107e418d": "f0f9137de1d98128ce9c8d1c7664e87d",
".git/objects/40/6823b1012fbb5a049d4c77e380f90c9cdbbf67": "3f8484143ab9a1242e47c81181361877",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/dc/caca3fd01222cd4d20997c94eb313e6d783ec9": "4b6c3551bad321ea3a12e22c6bafe6bb",
".git/objects/dc/2064177a36dc2dbdbb5c1cab572a8668851b56": "9b63ce233d7c50ea34de78cc29899d70",
".git/objects/dc/48404c9faa62308051dca1e0df8f6e32c65810": "aeb20e2c6e99f3c251112d8ab1b11a89",
".git/objects/81/8cdb82b8b40e9e5d2ea1ebcc46abcb6b9ecd6d": "1ca137c0e0f751250ba5f3bd6b32155d",
".git/objects/9c/a17233ffaab941952fc569effa7ff74f5211fc": "0e45f9cfacf531b2666d1a86c867fc3c",
".git/objects/9a/b19d109b3fd05ad7547dbf9c8c9467368b7440": "fbcaa0c62c72766db22741f38da63d5a",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/72/22dc723b946d43fb458be84217d48fd42658ef": "e3977ba33a08fa671aa9bf119c044990",
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
