/* Service worker — Jadwal Jaga Waqi'ah
   Naikkan angka CACHE setiap kali index.html / ikon diperbarui. */
var CACHE = "waqiah-2026-10-29-2";
var SHELL = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icon-192.png",
  "./icon-512.png",
  "./icon-maskable-512.png",
  "./apple-touch-icon.png"
];
var NAV_TIMEOUT = 4000;

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE).then(function (cache) {
      return Promise.all(SHELL.map(function (url) {
        var abs = new URL(url, self.location.href).href;
        return cache.add(new Request(abs, { cache: "reload" })).catch(function () {});
      }));
    }).then(function () {
      return self.skipWaiting();
    })
  );
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.map(function (key) {
        return key === CACHE ? null : caches.delete(key);
      }));
    }).then(function () {
      return self.clients.claim();
    })
  );
});

function putPage(res) {
  if (!res || !res.ok || res.type !== "basic") return;
  caches.open(CACHE).then(function (cache) {
    cache.put("./index.html", res.clone()).catch(function () {});
    cache.put("./", res.clone()).catch(function () {});
  });
}

function offlinePage() {
  return caches.open(CACHE).then(function (cache) {
    return cache.match("./index.html").then(function (hit) {
      return hit || cache.match("./");
    });
  }).then(function (hit) {
    if (hit) return hit;
    return new Response(
      "<!DOCTYPE html><meta charset=\"utf-8\"><title>Mode luring</title>" +
      "<body style=\"font-family:system-ui;padding:32px;text-align:center;background:#f7f2e7;color:#1d2a24\">" +
      "<h1 style=\"font-size:18px\">Belum tersimpan untuk mode luring</h1>" +
      "<p style=\"font-size:14px;color:#6b7462\">Sambungkan internet sekali lagi, lalu buka aplikasinya.</p></body>",
      { status: 503, headers: { "Content-Type": "text/html; charset=utf-8" } }
    );
  });
}

function networkFirst(req) {
  return new Promise(function (resolve) {
    var done = false;
    function fallback() {
      if (done) return;
      done = true;
      clearTimeout(timer);
      offlinePage().then(resolve);
    }
    var timer = setTimeout(fallback, NAV_TIMEOUT);

    fetch(new Request(req.url, { cache: "no-store", credentials: "same-origin" }))
      .then(function (res) {
        // server sedang bermasalah (mis. 502/503): pakai salinan luring bila ada
        if (!res || res.status >= 500) { fallback(); return; }
        putPage(res);
        if (done) return;
        done = true;
        clearTimeout(timer);
        resolve(res);
      })
      .catch(fallback);
  });
}

function cacheFirst(req) {
  return caches.open(CACHE).then(function (cache) {
    return cache.match(req).then(function (hit) {
      if (hit) {
        fetch(req).then(function (res) {
          if (res && res.ok && res.type === "basic") cache.put(req, res.clone()).catch(function () {});
        }).catch(function () {});
        return hit;
      }
      return fetch(req).then(function (res) {
        if (res && res.ok && res.type === "basic") cache.put(req, res.clone()).catch(function () {});
        return res;
      });
    });
  });
}

self.addEventListener("fetch", function (event) {
  var req = event.request;
  if (req.method !== "GET") return;

  var url;
  try { url = new URL(req.url); } catch (e) { return; }
  // Jangan ganggu Firebase/Firestore dan sumber lain di luar situs ini.
  if (url.origin !== self.location.origin) return;

  if (req.mode === "navigate" || (req.headers.get("accept") || "").indexOf("text/html") === 0) {
    event.respondWith(networkFirst(req));
    return;
  }
  event.respondWith(cacheFirst(req));
});
