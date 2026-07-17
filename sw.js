// Bump this whenever index.html (or the lineup data inside it) changes,
// so returning visitors pick up the new version instead of a stale cache.
const CACHE_NAME = 'ozora-cache-v127';
// Photos and the map ARE precached (blocking, during install) so the app is
// fully usable offline right after the first visit/install — e.g. someone
// who adds the app to their home screen and immediately loses signal still
// sees every artist photo, not just the ones they happened to open first.
// Real per-file JPGs (vs. the old single base64 blob) still save ~1MB total
// (no base64 inflation) even though everything is fetched upfront either way.
const ASSETS = [
  './',
  './index.html',
  './jsqr.js',
  './qrcode.js',
  './manifest.json',
  './icon-192.png',
  './icon-192-light.png',
  './icon-512.png',
  './icon-512-light.png',
  './icon-512-maskable.png',
  './icon-180.png',
  './icon-180-light.png',
  './icon-512-maskable-light.png',
  './map-2025.jpg',
  './photos/aardvarkk.jpg',
  './photos/abstrakt.jpg',
  './photos/ace-ventura.jpg',
  './photos/acid-echoes.jpg',
  './photos/aiwa.jpg',
  './photos/ajja.jpg',
  './photos/altruism.jpg',
  './photos/andras-toth.jpg',
  './photos/anoebis.jpg',
  './photos/asgard.jpg',
  './photos/astral-projection.jpg',
  './photos/astrix.jpg',
  './photos/atmos.jpg',
  './photos/aurafood.jpg',
  './photos/avalon.jpg',
  './photos/bayawaka.jpg',
  './photos/bcuc.jpg',
  './photos/biomigrant.jpg',
  './photos/bioterranean.jpg',
  './photos/braincell.jpg',
  './photos/breger.jpg',
  './photos/britta-arnold.jpg',
  './photos/captain-hook.jpg',
  './photos/captain-pastek.jpg',
  './photos/chicha-libre.jpg',
  './photos/chillum-trio.jpg',
  './photos/codex-spiralis.jpg',
  './photos/deedrah.jpg',
  './photos/digital-talk.jpg',
  './photos/dirty-saffi.jpg',
  './photos/eat-static.jpg',
  './photos/eclektic.jpg',
  './photos/efdemin.jpg',
  './photos/egorythmia.jpg',
  './photos/emiri.jpg',
  './photos/encounters.jpg',
  './photos/ethnica.jpg',
  './photos/fantazma.jpg',
  './photos/farebi-jalebi.jpg',
  './photos/felix-laband.jpg',
  './photos/freedom-fighters.jpg',
  './photos/gaudi.jpg',
  './photos/geoglyph.jpg',
  './photos/globular.jpg',
  './photos/gorovich.jpg',
  './photos/grant-darshan.jpg',
  './photos/griffin-kloud.jpg',
  './photos/grouch.jpg',
  './photos/grounch-in-dub.jpg',
  './photos/hallucinogen.jpg',
  './photos/headroom.jpg',
  './photos/herrhausen-treindl.jpg',
  './photos/hilight-tribe.jpg',
  './photos/ignez.jpg',
  './photos/jane-fitz.jpg',
  './photos/jedidiah.jpg',
  './photos/jimi-green.jpg',
  './photos/john-00-fleming.jpg',
  './photos/jossie-telch.jpg',
  './photos/justin-chaos.jpg',
  './photos/kalki.jpg',
  './photos/kalumet.jpg',
  './photos/kalya-scintilla.jpg',
  './photos/klipsun.jpg',
  './photos/konono-n-1.jpg',
  './photos/koxbox.jpg',
  './photos/lo-renzo.jpg',
  './photos/marysia-osu.jpg',
  './photos/merkaba.jpg',
  './photos/miles-from-mars.jpg',
  './photos/mirror-system.jpg',
  './photos/misled-convoy.jpg',
  './photos/my-baby.jpg',
  './photos/nanoplex.jpg',
  './photos/ness.jpg',
  './photos/neutron.jpg',
  './photos/noura-mint-seymali.jpg',
  './photos/oforia.jpg',
  './photos/one-million-toys.jpg',
  './photos/operentzia.jpg',
  './photos/originz-rajax.jpg',
  './photos/out-of-orbit.jpg',
  './photos/para-halu.jpg',
  './photos/populous.jpg',
  './photos/porat.jpg',
  './photos/psynonima.jpg',
  './photos/pusher.jpg',
  './photos/red-snapper.jpg',
  './photos/regan.jpg',
  './photos/rumpistol.jpg',
  './photos/sebastian-venu.jpg',
  './photos/sensient.jpg',
  './photos/shpongle-simon-posford-raja-ram-live.jpg',
  './photos/shred-er.jpg',
  './photos/sindh.jpg',
  './photos/skizologic.jpg',
  './photos/solar-fields.jpg',
  './photos/spinal-fusion.jpg',
  './photos/ssiege.jpg',
  './photos/starlab.jpg',
  './photos/swanasa.jpg',
  './photos/taiga.jpg',
  './photos/talpa.jpg',
  './photos/tetrameth.jpg',
  './photos/tongue-groove.jpg',
  './photos/tribone.jpg',
  './photos/triforce.jpg',
  './photos/tristan.jpg',
  './photos/tron.jpg',
  './photos/tsu.jpg',
  './photos/tsubi.jpg',
  './photos/tsuyoshi-suzuki.jpg',
  './photos/vibrasphere.jpg',
  './photos/vlastur.jpg',
  './photos/vox-fabri.jpg',
  './photos/weirdos.jpg',
  './photos/yuli-fershtat.jpg',
  './photos/zen-baboon.jpg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Cache-first for our own files (instant offline load), falling back to the
// network for anything else (e.g. the Google Fonts stylesheet), and finally
// to whatever's cached if the network is unavailable.
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request)
        .then((resp) => {
          if (resp && resp.ok && event.request.url.startsWith(self.location.origin)) {
            const clone = resp.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          }
          return resp;
        })
        .catch(() => cached);
    })
  );
});
