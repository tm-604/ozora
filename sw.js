// Bump this whenever index.html (or the lineup data inside it) changes,
// so returning visitors pick up the new version instead of a stale cache.
const CACHE_NAME = 'ozora-cache-v193';

// Must succeed, or the app shell itself is broken — small, low-risk set,
// kept atomic exactly like the old single-array cache.addAll() was.
const ASSETS_CRITICAL = [
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
  './icon-512-maskable-light.png'
];

// Best-effort — nice to have offline, never worth failing install over.
// One failed photo/map image should never cost the rest. Auto-regenerated
// by push_photos.js's syncForkSwAssets() whenever a photo is added/changed.
const ASSETS_PHOTOS = [
  './map-2025.jpg',
  './photos/8ternal-beings.jpg',
  './photos/aardvarkk.jpg',
  './photos/abstrakt.jpg',
  './photos/ace-ventura.jpg',
  './photos/acid-echoes.jpg',
  './photos/acideal.jpg',
  './photos/act-one.jpg',
  './photos/adx.jpg',
  './photos/airydisc.jpg',
  './photos/aiwa.jpg',
  './photos/ajja-tanina.jpg',
  './photos/ajja.jpg',
  './photos/aka-nina.jpg',
  './photos/alexander-descroix.jpg',
  './photos/aliji.jpg',
  './photos/alma-deya.jpg',
  './photos/altruism.jpg',
  './photos/amigdala.jpg',
  './photos/anatolian-weapons.jpg',
  './photos/andras-bader.jpg',
  './photos/andras-toth.jpg',
  './photos/anoebis.jpg',
  './photos/antique.jpg',
  './photos/arokem.jpg',
  './photos/arthetip.jpg',
  './photos/asgard.jpg',
  './photos/astral-projection.jpg',
  './photos/astrix.jpg',
  './photos/atia.jpg',
  './photos/atmos.jpg',
  './photos/aurafood.jpg',
  './photos/aux25.jpg',
  './photos/avalon.jpg',
  './photos/axeev.jpg',
  './photos/banyek.jpg',
  './photos/bass-kovac.jpg',
  './photos/baumb.jpg',
  './photos/bayawaka.jpg',
  './photos/bcuc.jpg',
  './photos/bellegance-fraser.jpg',
  './photos/benho-psymon.jpg',
  './photos/benji-vaughan.jpg',
  './photos/bernathy.jpg',
  './photos/beta.jpg',
  './photos/biomigrant.jpg',
  './photos/bioterranean.jpg',
  './photos/blue-planet-corporation.jpg',
  './photos/bodoo.jpg',
  './photos/boogie-knight.jpg',
  './photos/braincell.jpg',
  './photos/breger.jpg',
  './photos/britta-arnold.jpg',
  './photos/brooklyn-gypsies.jpg',
  './photos/captain-hook.jpg',
  './photos/captain-pastek.jpg',
  './photos/chicha-libre.jpg',
  './photos/chillum-trio.jpg',
  './photos/codex-spiralis.jpg',
  './photos/collignon.jpg',
  './photos/coloboma-filip-varial.jpg',
  './photos/colorstar.jpg',
  './photos/cosmic-trigger.jpg',
  './photos/crazy-baldhead.jpg',
  './photos/crimson.jpg',
  './photos/cyber-aghori.jpg',
  './photos/danger-beyond.jpg',
  './photos/deedrah.jpg',
  './photos/deerfeeder.jpg',
  './photos/delysid.jpg',
  './photos/detective-kelly.jpg',
  './photos/detune.jpg',
  './photos/digital-talk.jpg',
  './photos/dirty-saffi.jpg',
  './photos/dj-josko.jpg',
  './photos/dj-solitaire.jpg',
  './photos/domestic.jpg',
  './photos/dork.jpg',
  './photos/dubapest-hifi.jpg',
  './photos/dubsahara-meets-vlastur.jpg',
  './photos/dymons.jpg',
  './photos/earthly-measures.jpg',
  './photos/eat-static.jpg',
  './photos/eclektic.jpg',
  './photos/efdemin.jpg',
  './photos/egorythmia.jpg',
  './photos/ekkel.jpg',
  './photos/eltawave-yuri.jpg',
  './photos/emiri.jpg',
  './photos/encounters.jpg',
  './photos/enki.jpg',
  './photos/enrico-sanguliano.jpg',
  './photos/entangled-mind.jpg',
  './photos/entheogenic.jpg',
  './photos/erro.jpg',
  './photos/ethnica.jpg',
  './photos/ewake.jpg',
  './photos/fantazma.jpg',
  './photos/farebi-jalebi.jpg',
  './photos/felix-laband.jpg',
  './photos/fidju-kitxora.jpg',
  './photos/fluidum-x-peao-x-fanni-zahar.jpg',
  './photos/frederika.jpg',
  './photos/freedom-fighters.jpg',
  './photos/gabriel-le-mar.jpg',
  './photos/garpo-ferenc-szanati.jpg',
  './photos/gaudi-don-letts-earl-16.jpg',
  './photos/gaudi.jpg',
  './photos/geoglyph.jpg',
  './photos/gero.jpg',
  './photos/gino-sonica.jpg',
  './photos/giolibri.jpg',
  './photos/giuseppe-in-dub.jpg',
  './photos/giuseppe-parvati.jpg',
  './photos/globular.jpg',
  './photos/gms-dickster.jpg',
  './photos/gorovich.jpg',
  './photos/grant-darshan.jpg',
  './photos/greg-hunter.jpg',
  './photos/griffin-kloud.jpg',
  './photos/grouch.jpg',
  './photos/grounch-in-dub.jpg',
  './photos/gumi.jpg',
  './photos/hallucinogen.jpg',
  './photos/hatta.jpg',
  './photos/he-she-it.jpg',
  './photos/headroom.jpg',
  './photos/heavy-hertz.jpg',
  './photos/heimya.jpg',
  './photos/herrhausen-treindl.jpg',
  './photos/hilight-tribe.jpg',
  './photos/hruscsov.jpg',
  './photos/humanoids.jpg',
  './photos/ignez.jpg',
  './photos/ikoza-alphakey.jpg',
  './photos/infragandhi.jpg',
  './photos/irgumburgum.jpg',
  './photos/jane-fitz.jpg',
  './photos/jedidiah.jpg',
  './photos/jimi-green.jpg',
  './photos/john-00-fleming.jpg',
  './photos/jossie-telch.jpg',
  './photos/justin-chaos.jpg',
  './photos/kalki.jpg',
  './photos/kalumet.jpg',
  './photos/kalya-scintilla.jpg',
  './photos/katamii.jpg',
  './photos/kebab-symphonie-danael.jpg',
  './photos/klipsun.jpg',
  './photos/ko-shin-moon.jpg',
  './photos/konono-n-1.jpg',
  './photos/korruptcop.jpg',
  './photos/koxbox-saiko-pod.jpg',
  './photos/koxbox.jpg',
  './photos/kynethik.jpg',
  './photos/lazy-calm-raga.jpg',
  './photos/lensky.jpg',
  './photos/lo-renzo.jpg',
  './photos/m-o-culpa-zakhorov.jpg',
  './photos/m-o-culpa.jpg',
  './photos/mankind.jpg',
  './photos/mantismash.jpg',
  './photos/martian-arts.jpg',
  './photos/marysia-osu-kibir-la-amlak.jpg',
  './photos/marysia-osu.jpg',
  './photos/merkaba.jpg',
  './photos/merlyn-silva.jpg',
  './photos/metaverse.jpg',
  './photos/miles-from-mars.jpg',
  './photos/mirror-system.jpg',
  './photos/misled-convoy.jpg',
  './photos/mist.jpg',
  './photos/mitsoura.jpg',
  './photos/modern-biology.jpg',
  './photos/modus.jpg',
  './photos/muteless.jpg',
  './photos/my-baby.jpg',
  './photos/mysticism.jpg',
  './photos/nana-benz-du-togo.jpg',
  './photos/nanoplex.jpg',
  './photos/nathalia.jpg',
  './photos/nautis.jpg',
  './photos/neo-shaman.jpg',
  './photos/ness.jpg',
  './photos/neutron.jpg',
  './photos/nevo.jpg',
  './photos/nick-interchill.jpg',
  './photos/ninesense.jpg',
  './photos/noface.jpg',
  './photos/nora-matis.jpg',
  './photos/noura-mint-seymali.jpg',
  './photos/nova-gravity.jpg',
  './photos/oforia.jpg',
  './photos/ok-eg.jpg',
  './photos/om-unit.jpg',
  './photos/ondrej-psyla.jpg',
  './photos/one-million-toys.jpg',
  './photos/operentzia.jpg',
  './photos/originz-rajax.jpg',
  './photos/ott.jpg',
  './photos/ouoa.jpg',
  './photos/out-of-orbit.jpg',
  './photos/para-halu.jpg',
  './photos/patajana-karlo-kurbel.jpg',
  './photos/pause-dxa.jpg',
  './photos/phil-hartnoll.jpg',
  './photos/phobos.jpg',
  './photos/pistamashina.jpg',
  './photos/platon-karataev-duo.jpg',
  './photos/populous.jpg',
  './photos/porat.jpg',
  './photos/professor-chill.jpg',
  './photos/prometheus.jpg',
  './photos/psynonima.jpg',
  './photos/pusher.jpg',
  './photos/raja-ram-lucas.jpg',
  './photos/ramizes.jpg',
  './photos/rastaliens.jpg',
  './photos/rawar.jpg',
  './photos/red-snapper.jpg',
  './photos/regan.jpg',
  './photos/robot-bennett.jpg',
  './photos/roken-reger.jpg',
  './photos/roland-handrick.jpg',
  './photos/rook.jpg',
  './photos/roy-sason.jpg',
  './photos/rumpistol.jpg',
  './photos/s-a-in-dub.jpg',
  './photos/saalyx.jpg',
  './photos/sabee.jpg',
  './photos/savaborsa-richietyerra.jpg',
  './photos/sebastian-venu.jpg',
  './photos/sensient.jpg',
  './photos/shadow-fx.jpg',
  './photos/shenanigan.jpg',
  './photos/shpongle-simon-posford-raja-ram-live.jpg',
  './photos/shred-er.jpg',
  './photos/siblicity.jpg',
  './photos/sibu-manai.jpg',
  './photos/sindh.jpg',
  './photos/skizologic.jpg',
  './photos/slym-szoliver.jpg',
  './photos/smag-pa-dig-selv.jpg',
  './photos/smooglers.jpg',
  './photos/solar-fields.jpg',
  './photos/sonido-tupinamba.jpg',
  './photos/sorian.jpg',
  './photos/spinal-fusion.jpg',
  './photos/spoink.jpg',
  './photos/ssiege.jpg',
  './photos/star-sounds-orchestra.jpg',
  './photos/starlab.jpg',
  './photos/stereomantra.jpg',
  './photos/strontium-dogs.jpg',
  './photos/subotage.jpg',
  './photos/sudden-reverb.jpg',
  './photos/sundi-jr-paradiddle.jpg',
  './photos/sundi.jpg',
  './photos/sunju-hargun.jpg',
  './photos/swanasa.jpg',
  './photos/switch-nollie-tsu.jpg',
  './photos/switch-nollie.jpg',
  './photos/symbionts.jpg',
  './photos/szamy.jpg',
  './photos/taiga.jpg',
  './photos/taku.jpg',
  './photos/talpa.jpg',
  './photos/tatoo.jpg',
  './photos/tebra.jpg',
  './photos/tetrameth.jpg',
  './photos/the-flying-mars.jpg',
  './photos/titusz.jpg',
  './photos/tom-ato.jpg',
  './photos/tom-bini.jpg',
  './photos/tongue-groove.jpg',
  './photos/tor-ma-in-dub.jpg',
  './photos/tribone.jpg',
  './photos/triforce.jpg',
  './photos/tristan.jpg',
  './photos/tron.jpg',
  './photos/tsu.jpg',
  './photos/tsubi.jpg',
  './photos/tsuyoshi-suzuki.jpg',
  './photos/tunderke.jpg',
  './photos/undefined-behavior.jpg',
  './photos/vibrasphere.jpg',
  './photos/vlastur.jpg',
  './photos/vox-fabri.jpg',
  './photos/weirdos.jpg',
  './photos/wild-marmelade.jpg',
  './photos/x-dream.jpg',
  './photos/younger-brother.jpg',
  './photos/yoy-project.jpg',
  './photos/yuli-fershtat.jpg',
  './photos/zagi.jpg',
  './photos/zakhorov.jpg',
  './photos/zen-baboon.jpg',
  './photos/zsom.jpg'
];

// Runs cache.add() per URL independently via Promise.allSettled() so one
// bad fetch can't take the rest of the batch down with it (unlike
// cache.addAll(), which is atomic — any single rejection discards
// everything, even assets that already downloaded successfully). Logs
// failures via console.warn for debugging; no retry/backoff here — the
// fetch handler below already backfills any miss the next time it's
// requested on a real network.
function cacheBestEffort(cache, urls) {
  return Promise.allSettled(urls.map((url) => cache.add(url))).then((results) => {
    const failed = results
      .map((r, i) => (r.status === 'rejected' ? urls[i] : null))
      .filter(Boolean);
    if (failed.length) {
      console.warn(`[sw] ${failed.length}/${urls.length} best-effort assets failed to precache:`, failed);
    }
  });
}

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_CRITICAL))
  );
  self.skipWaiting();
});

// Best-effort photo/map caching happens here, not chained inside install,
// so the app shell activates almost immediately after a version bump
// instead of blocking on hundreds of media fetches first. Still fully
// protected against early SW termination since it stays inside this
// event's own waitUntil().
self.addEventListener('activate', (event) => {
  event.waitUntil(
    Promise.all([
      caches.keys().then((keys) =>
        Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
      ),
      caches.open(CACHE_NAME).then((cache) => cacheBestEffort(cache, ASSETS_PHOTOS)),
    ])
  );
  self.clients.claim();
});

// Cache-first for our own files (instant offline load), falling back to the
// network for anything else (e.g. the Google Fonts stylesheet), and finally
// to whatever's cached if the network is unavailable.
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  // Calendar-reminder handoff for installed iOS PWAs: data: URI navigation
  // is silently ignored in standalone display-mode, so index.html routes
  // through this instead — a real same-origin response with a proper
  // text/calendar Content-Type, which iOS reliably hands off to Calendar
  // even without the full Safari chrome around it.
  const url = new URL(event.request.url);
  if (url.pathname.endsWith('/reminder.ics')) {
    const ics = decodeURIComponent(url.searchParams.get('data') || '');
    event.respondWith(new Response(ics, {
      headers: {
        'Content-Type': 'text/calendar; charset=utf-8',
        'Content-Disposition': 'inline; filename="event.ics"'
      }
    }));
    return;
  }
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
