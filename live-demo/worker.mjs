// novel.thedreamcompany.space: halaman fitur Novelis (/) dan live demo (/live-demo). Novelis sendiri perlu login dan
// khusus member undangan.
export default {
  async fetch(request, env) {
    const url = new URL(request.url)
    if (url.pathname === '/') return env.ASSETS.fetch(new URL('/index.html', url))
    // /novelis dan /novelis/lihat-demo: alamat lama yang masih ditautkan halaman Novelis Studio di portal.
    if (url.pathname === '/live-demo/' || url.pathname === '/novelis' || url.pathname.startsWith('/novelis/')) return Response.redirect(new URL('/live-demo', url), 302)
    if (url.pathname === '/live-demo') return env.ASSETS.fetch(new URL('/live-demo/index.html', url))
    return env.ASSETS.fetch(request)
  },
}
