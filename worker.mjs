export default {
  async fetch(request, env) {
    const url = new URL(request.url)
    const assetPath = url.pathname === '/' ? '/index.html' : url.pathname

    const assetResponse = await env.ASSETS.fetch(new URL(assetPath, url))
    if (assetResponse.status !== 404) {
      return assetResponse
    }

    return env.ASSETS.fetch(new URL('/index.html', url))
  },
}