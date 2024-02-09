'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/FETCH_HEAD": "c01f8a0c837c21f750e14501cb945859",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/config": "688828ac223deb29d4f27a17b18508c9",
".git/objects/40/f3c314bd90fe6990a05047f49f44013bd40e6b": "45f9e66823947d736540637887247a77",
".git/objects/d4/c0c81a4271924507636929cc025c1f382c8dc4": "816505545720c85166ca09cc4c466c66",
".git/objects/5f/add6b3b6abfc51eff7fbfd87ad91e886ddce3a": "ee1f3a81a89c67aa0182387859d79ee4",
".git/objects/c7/dc88d001ef08aa963b80cfd3177cdeb68ba553": "aa97e8613615c79e693655d5c1c9c37e",
".git/objects/b0/e613db5b021adb8e0545d5d3f0f7a8fb15276d": "4c6f941165344e1d8b4b95152e72b5f5",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/94/cfd0cab3ecf1712f782cc3ae8e8183c589800a": "694d60539e7605be42f3b1c37c5b782e",
".git/objects/94/041474426bcf352c7dcbb0a32fbed9c23d2125": "95713b1e7f9b44364d25b10e777953d4",
".git/objects/9c/5d9eaa340a4511985c563a7682f0916f2d4135": "d4d4a8433c3a85bcc94e075579c9d532",
".git/objects/7d/a4e76951d33735fe44a826cafa620e8249553b": "3d6ef86e0153e9bd3e78127512caee03",
".git/objects/66/0f480ce7cb045bd25506b259975e49710ba3c5": "6e28c8bd45405e3ac21bb4cec7772214",
".git/objects/72/de1ff6ca7422094357dc01450fd5ffeecb67b9": "c679b0def225f026d8e3d92b8c7ccfcc",
".git/objects/df/d0fcb40ec761ccced488d783fc77a4276548db": "26d43f599cc9b63ac4c147bc750bc16a",
".git/objects/60/e574f3f78940483b7c4895ca60d0463750fe4b": "e952205f7977ed9055358bcaa849b109",
".git/objects/33/368cf44182dddeb8ac2ec8f91bcf533fe8057a": "504d443508373f07c241657fd85d1ad6",
".git/objects/4c/385ef09b913b3e732bd3ee7df2dacfd1a79ba3": "eeea51e5545e486243585ee082c25be4",
".git/objects/12/885b96f3628d28ffcb55254bb6b43c56b1cb04": "c84595bd934287920363b39fbcbf4f7c",
".git/objects/64/22570c074a78363850194ebf1a7fae036163c8": "ac3a106bd51a26201291e74b7afe63d9",
".git/objects/00/d4952365122a940d611f5bf25101308e4da6e8": "081a00d1fdf278729fcf83f5ee9614de",
".git/objects/05/d1192a45a897930973a91d6130bd9e036bbd90": "8d16af36f31aa3faf48bc9a5af72434d",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/18/b26bac22197ab901c8dcfa4d50ab999202d824": "6cfb40f714f0b97f2b27d01f26003031",
".git/objects/8f/6ffbeee86c77cf81466c67d7dd17c9bd7d7089": "a27428b8ffc8931e8d5ad07390edc33d",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/7a/ad9b23bff95bc1f9d7c9b9dd2c481e9fe2a3d3": "cbd5ba327f2cdba25dee5a4e8050f4cc",
".git/objects/cf/6fecbc0dec6a596d48513eb74d5bba10d92489": "1358a5afa230f1c48ec9a31f78726fbc",
".git/objects/d6/0d37f0d315cb2c8d24a199d7f7f6d8008051e8": "76b8da6e976d35e4b14474e9fa561688",
".git/objects/ea/ea536b0c0d4832d32058e862af71f0bd343985": "6b2d6bf93a29c4fd21609fb25e5f9af8",
".git/objects/32/dacaa60d9fb2ff3cd75790687f94b31600918b": "a5303f04fa709fcd7f08d25fe74fc400",
".git/objects/59/f303d1c193f0c057170ba55594f55a6e7de367": "dfea5484e9d2a4a7e2afc7871df64ffb",
".git/objects/59/b52325705ca4aa016052ce1f3bb17ef3c68c35": "ad6b6a43c4c7e67543a22c8c80d6dbea",
".git/objects/f1/0a07db7cc295bafe4e9a0ceea8417433ecbb20": "12a7bd69cae2b3a46f4545771c01d159",
".git/objects/de/618e5689ff8126884073491e49eb9b2c5eb000": "d40becfc61c68f576d9579422337b895",
".git/objects/61/2504e22b53e567d253b7b547171d404fe7eace": "8953e27cae785b4b0e24e905b25e8ef1",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/f4/6bc272e61e1585902b25651e6458b6d45574c7": "3c14a4501a63f0e48ea7ad69fb07fdec",
".git/objects/e6/f4a0bb058b0ea0d63c50fbd04cc34994c3745b": "6b62eb6fb258a3242986d15e6293a745",
".git/objects/a3/003ea0c4e58c6a85a14991b61b3cf1366020ef": "e6c7d1d83e841e131e0d06011b21a9b2",
".git/objects/6e/ce20f0421ab559d35e932b30454bc7993366ac": "c93b5d4c3d5471a32bf2bf248b21f394",
".git/objects/82/edc96469e68a862368e711c52f5a169b3d4d36": "35f3e5a728e1ad652d8674c9e5e8e60e",
".git/objects/5d/52b00606bdc4e2a273ce440d93b56495e95479": "1d08c4de66bde101ae57a8d00d3e49fb",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/e9/53199f0a5209ea73a65cf16568411cb75946ce": "aa7e599a325cca39751f4899acca0ff6",
".git/objects/41/83a158c4a0d51ed102edbb81aac5cf2ce48499": "0c33bbd878683fc1e6ed550cbc4e78a3",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/a9/dd2723a0525eee05517dd3f19784d7666e1265": "d89b022a5285173c04a9e03f5c1fed2a",
".git/objects/a9/1cf5189dac6b5852a397f793be162304dfea5b": "a578ec8181845c8445d217f8a872d112",
".git/objects/6a/4c99ff95e35b18ff6db89926e9d16b59b88654": "e41ecc2d4fc5b4897fb876b1d8a62f1b",
".git/objects/fc/e65ac8ad02f622486514c5deed910423c1910c": "3ddd3699bca8750bb048fa7e4ff8aa5d",
".git/objects/ab/8e94693845dd0414cf3b4b4d33b005898748b5": "8f4ea527cef775df5de1793a17bd92de",
".git/objects/74/c636fe4f1a24d5209c62240419bef5d1a70cfd": "624ca195bcb7e6ac1ce5ffc3e21bd156",
".git/objects/fd/3535056571390a175abd56f33fbd43163f8e5e": "12e4a59653598f9875dc342fc73115ef",
".git/objects/14/be6b714929614423cc47853e3b7c4011423b36": "a6ad86b9a6df71d088d473c428408adc",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/69/6dc82ca37b48b7bcc76d438f5786bf577114b8": "6e09143575a6380810f40eb16a25eaaa",
".git/objects/d2/bb1aadf87dabb5436f849cbafcc143a003786a": "a68954a45d83d64c90d810ce9617f870",
".git/objects/36/b6a9442e7f16f83b1ad5aee9da26426bdf430b": "16cac545415b92ae5b19dac6cf9232da",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/35/2706dcbe548589932cd4ab9d8a4eed67178eca": "98d0bfe74ad63d5e7a2596c5d9854b73",
".git/objects/6d/4316839805da7f9e48da3be39ca25380b6d27a": "35eae023a6ea021e2e64bf1e9bde2416",
".git/objects/ee/d9f174884857cb392f9ccc1da44abaf804e7e0": "5ff5451fd8f7ab2df62828e937cc94de",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/e3/d4f74e72f0c19ba5fbd2261c0cb6dfdb5a2f71": "604ca6a8fdb819fbf3ad2974d33bc0f3",
".git/objects/f3/b8993282ed09fac27a99a060889030468d009d": "d351ea0a6f622afc490469dd84905a0f",
".git/objects/b8/17c24c17f2bb176ec0829d045b1b4700df5d88": "70f58ae6a2de9ab530ab7d846a220cf7",
".git/objects/cb/82c7611f5ea54f38f212bdf819a54f17b3e40c": "3faac67b527cb6fa8293a6f49b092905",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/7c/15e70f18b7c176520c97a8231e080bf77cb20e": "0328fb191b19cbc3912082e0bc617dad",
".git/objects/5c/a44e4b6f9a14d2fb52e6f11adfb97587fac092": "ed80d889c6cfa88f2e90bd01208cc154",
".git/objects/c6/9b05e2044534e630d8457430f53ac3f285e647": "977f0d53b9176bf48a116db97b68be25",
".git/objects/17/5b96f41048ee497bcde2678d0021f5c5c89adf": "2a1a7c6cb6d3e39b7a95d114f8790120",
".git/objects/dc/67dd363b44f82d30dc9bd7cf661744278f4dd3": "fedc759dd4ef5de29d7b523f1c03f1a6",
".git/objects/67/83253377d30cceb06435a49fdda5895e59755d": "f49878cd847bcc36183827710a290c5e",
".git/objects/38/93564a2d5d760bac7c5e6923c53aaef110f1d3": "35d74be8a8c5f0283e1757771800b11f",
".git/objects/38/33b3f86c26f00e2cda3568862467f8e7d847bb": "d125d04aeaf55b1d4a61230c95562c93",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/0e/8c281e216937048582e080a97483743499eb57": "4395f825dba0dab4ca6540cad20bbb89",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/d3/91d9a15b71585f192bf09a1b5f8b86e037b3b7": "729073f940d92106c952c903c8768e44",
".git/refs/remotes/origin/main": "5afdf553de08b1383b6aadf36c915bda",
".git/refs/heads/main": "a8c5c9a7e219974bbf2c6bbf45923cef",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/index": "5cb2f3bf058b69ba4f691338c10bbec5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/ORIG_HEAD": "a8c5c9a7e219974bbf2c6bbf45923cef",
".git/logs/refs/remotes/origin/main": "8e6d382dec5eba549389a82b07ed3522",
".git/logs/refs/heads/main": "f027c2c69a7109fbbc912efedb04b5fc",
".git/logs/HEAD": "efd367f0da662c41e827db9c4bad9e09",
"index.html": "8869a9f30bf979595daacc9fbbd7fc49",
"/": "8869a9f30bf979595daacc9fbbd7fc49",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"version.json": "8dba9b4c821320ad4a652a573844cb64",
"favicon.png": "e1df774ef8747a91653e1b9d295d3d23",
"assets/AssetManifest.bin": "c577b35937dcf91be23bda690422de25",
"assets/AssetManifest.bin.json": "f877be455ebc779d405eb880365af504",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "ed6a675a3f07a524c6111f676b5382b5",
"assets/assets/images/learnflow-backoffice.png": "2aafdd0e7748d2cd630f2fefc1724361",
"assets/assets/images/spinner-dark.apng": "d7f6e0cca2ae052bdb7973799975027a",
"assets/assets/images/mume.png": "4843ccc3698c716d2fd7d51b8cfde398",
"assets/assets/images/sms.png": "6bf2c06bb317b0c882f182781541654d",
"assets/assets/images/learnflow-api.png": "106bf340d0676bdcccdc17c8c29e4d6f",
"assets/assets/images/logo.svg": "df08988fdc848d0a0722655527f00dcd",
"assets/assets/images/gsb-rv-visiteur-serveur.png": "aa279e9a72f05f8041d4259f1ffbc640",
"assets/assets/images/portfolio.png": "77a58b35cdeafc34a8f06fa5c8a14598",
"assets/assets/images/logo.png": "ec4e40868695ea191ece5a171600c7bf",
"assets/assets/images/gsb-frais.png": "6cd08121c9fa313d0e1ec93ef8075e4a",
"assets/assets/images/calilio1.png": "1c62a705c10ff35531456b363f87c695",
"assets/assets/images/gsb-rv-dr.png": "9cae33c5226005d87431d9389233a2fb",
"assets/assets/images/retail.png": "c8b86a184500e459026c75ed696a55ca",
"assets/assets/images/spinner-light.apng": "0aa2c9bee051117e80ffaafb604e9258",
"assets/assets/images/mume1.png": "40da806418f810e22f99b693f1005b73",
"assets/assets/translations/en.json": "f83d0c70abd2b72d7a67b1b069da56ea",
"assets/assets/translations/fr.json": "36c507927b2ab60e4f409f266b012bf9",
"assets/assets/fonts/Nunito-Bold.ttf": "91019ffb3b1df640e444b34e5a73dfc3",
"assets/assets/fonts/Nunito-Regular.ttf": "0c890be2af0d241a2387ad2c4c16af2c",
"assets/FontManifest.json": "3ddd9b2ab1c2ae162d46e3cc7b78ba88",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "f25e8e701660fb45e2a81ff3f43c6d5c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "b72c617acdf2227c8b1413215f620711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a5d7457fda15b7622c14f432ba63039a",
"assets/AssetManifest.json": "0f8c26870fae971ffb559619dc5cc5dd",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"manifest.json": "8672fcac67dca841afad9c0b14382bd8",
"splash/img/light-1x.png": "7c30af472ff42aefab92cfb9b43d8a27",
"splash/img/dark-1x.png": "225589a01421c21310fdd2e539b8d84a",
"splash/img/light-4x.png": "211a30d09cccdcc2cc6a0d1fd48f0844",
"splash/img/dark-4x.png": "7a08e8e8c5e8efbd817575f489ec69e3",
"splash/img/dark-2x.png": "e1e618009f200dbbf2d972cfbe22499f",
"splash/img/dark-3x.png": "e978c93bc1698685bae734d89f186e79",
"splash/img/light-3x.png": "6235edea04ec2d7a921551691a015fdd",
"splash/img/light-2x.png": "0a3ff24e24e8342ea317a0c039b946d6",
"icons/Icon-maskable-512.png": "3f51793bd9d85e1f165390a2a9e28256",
"icons/Icon-192.png": "2707bbfaa290337dd4e2320cc49b7a58",
"icons/Icon-maskable-192.png": "2707bbfaa290337dd4e2320cc49b7a58",
"icons/Icon-512.png": "3f51793bd9d85e1f165390a2a9e28256",
"main.dart.js": "570a0f6a13421955f19a1fb4aeddfef9"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
