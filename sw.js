{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // sw.js\
const CACHE_NAME = "gf-reset-times-v2";\
const APP_SHELL = [\
  "/gf-reset-times/",\
  "/gf-reset-times/index.html",\
  "/gf-reset-times/manifest.json",\
  "/gf-reset-times/icon-192.png",\
  "/gf-reset-times/icon-512.png",\
  "/gf-reset-times/fallback.html"\
];\
\
self.addEventListener("install", (event) => \{\
  event.waitUntil(\
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))\
  );\
  self.skipWaiting();\
\});\
\
self.addEventListener("activate", (event) => \{\
  event.waitUntil(\
    caches.keys().then((keys) =>\
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))\
    )\
  );\
  self.clients.claim();\
\});\
\
self.addEventListener("fetch", (event) => \{\
  // Only handle GET\
  if (event.request.method !== "GET") return;\
\
  const url = new URL(event.request.url);\
\
  // 1) Offline fallback for SPA navigations (HTML page requests)\
  if (event.request.mode === "navigate") \{\
    event.respondWith(\
      (async () => \{\
        try \{\
          // Try network first for navigations to get latest content\
          const fresh = await fetch(event.request);\
          // Optionally update the cache in background\
          const cache = await caches.open(CACHE_NAME);\
          cache.put(event.request, fresh.clone());\
          return fresh;\
        \} catch (err) \{\
          // Network failed: serve cached page or fallback\
          const cache = await caches.open(CACHE_NAME);\
          const cached = await cache.match(event.request);\
          return cached || cache.match("/gf-reset-times/fallback.html");\
        \}\
      \})()\
    );\
    return;\
  \}\
\
  // 2) Cache-first for same-origin static assets\
  if (url.origin === location.origin) \{\
    event.respondWith(\
      caches.match(event.request).then((cached) => \{\
        if (cached) return cached;\
        return fetch(event.request).then((resp) => \{\
          // Put a copy in cache for next time (best effort)\
          const copy = resp.clone();\
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));\
          return resp;\
        \}).catch(() => \{\
          // If request was for an image and offline, show app icon as a tiny fallback\
          if (event.request.destination === "image") \{\
            return caches.match("/gf-reset-times/icon-192.png");\
          \}\
          // Otherwise, just fail silently\
        \});\
      \})\
    );\
  \}\
\});\
}
