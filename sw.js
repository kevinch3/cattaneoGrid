/**
 * Custom service worker for CattaneoGrid.
 * Handles app shell caching and offline support.
 * Does NOT intercept cross-origin audio or API requests—those stay browser-managed.
 */

const CACHE_NAME = 'cattaneo-grid-v1'

// ─────────────────────────────────────────────────────────────────────────────
// INSTALL: Cache index.html explicitly for offline fallback
// ─────────────────────────────────────────────────────────────────────────────
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(['/index.html', '/']))
  )
  self.skipWaiting()
})

// ─────────────────────────────────────────────────────────────────────────────
// ACTIVATE: Clean up stale caches from previous versions
// ─────────────────────────────────────────────────────────────────────────────
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  )
  self.clients.claim()
})

// ─────────────────────────────────────────────────────────────────────────────
// FETCH: Smart caching strategy
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Check if a URL is a static asset worth caching.
 */
function isStaticAsset(url) {
  const ext = url.split('.').pop().split('?')[0]
  const cacheExts = ['js', 'css', 'png', 'jpg', 'jpeg', 'gif', 'svg', 'ico', 'woff2', 'webmanifest']
  return cacheExts.includes(ext)
}

/**
 * Check if a URL is same-origin (avoid intercepting cross-origin audio/fonts).
 */
function isSameOrigin(url) {
  const origin = self.location.origin
  return url.startsWith(origin) || url.startsWith('/')
}

self.addEventListener('fetch', event => {
  const { request } = event
  const url = new URL(request.url)

  // 1. Cross-origin requests (CDN audio, external fonts): let browser handle natively
  if (!isSameOrigin(request.url)) {
    return  // no respondWith — browser fetches normally
  }

  // 2. Non-GET requests: passthrough
  if (request.method !== 'GET') {
    return
  }

  // 3. Navigate requests (HTML pages): network-first, fall back to cached index.html
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then(response => {
          // Only cache successful HTML responses
          if (response.ok && response.headers.get('content-type')?.includes('text/html')) {
            caches.open(CACHE_NAME).then(cache => {
              cache.put(request, response.clone())
            })
          }
          return response
        })
        .catch(() => caches.match('/index.html') || new Response('Offline'))
    )
    return
  }

  // 4. Static assets (.js, .css, .png, .svg, etc.): cache-first
  if (isStaticAsset(request.url)) {
    event.respondWith(
      caches.match(request).then(cached => {
        if (cached) return cached
        return fetch(request).then(response => {
          // Cache successful responses
          if (response.ok) {
            caches.open(CACHE_NAME).then(cache => {
              cache.put(request, response.clone())
            })
          }
          return response
        })
      })
    )
    return
  }

  // 5. Other requests (API, dynamic content): network-first
  event.respondWith(
    fetch(request)
      .then(response => {
        if (response.ok) {
          caches.open(CACHE_NAME).then(cache => {
            cache.put(request, response.clone())
          })
        }
        return response
      })
      .catch(() => caches.match(request) || new Response('Offline'))
  )
})
