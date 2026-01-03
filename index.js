export default {
  async fetch(request) {
    const url = new URL(request.url);
    const pathname = url.pathname.toLowerCase();
    
    const redirects = {
      '/rumble': 'https://rumble.com/c/c-7834008',
    };
    
    if (redirects[pathname]) {
      return Response.redirect(redirects[pathname], 301);
    }
    
    return new Response('Link not found', { status: 404 });
  }
}
