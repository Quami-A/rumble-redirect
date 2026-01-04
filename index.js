export default {
  async fetch(request) {
    const url = new URL(request.url);
    const pathname = url.pathname.toLowerCase();
    
    const redirects = {
      '/': 'https://worldcupcentral.net',
      '/rumble': 'https://rumble.com/c/c-7834008',
      '/youtube': 'https://www.youtube.com/@theworldcupcentral',
    };
    
    if (redirects[pathname]) {
      return Response.redirect(redirects[pathname], 301);
    }
    
    return new Response('Link not found. Visit worldcupcentral.net for available links.', { 
  status: 404,
  headers: { 'Content-Type': 'text/plain' }
});
