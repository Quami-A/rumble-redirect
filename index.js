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
    
    // Custom 404 Page with Your Logo
    return new Response(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>404 - Link Not Found | World Cup Central</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
      background: linear-gradient(135deg, #0066CC 0%, #00CC66 100%);
      color: #fff;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
    }
    
    .container {
      max-width: 600px;
      text-align: center;
      background: rgba(0, 20, 40, 0.85);
      backdrop-filter: blur(10px);
      border-radius: 20px;
      padding: 50px 30px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    }
    
    .logo {
      width: 150px;
      height: 150px;
      margin: 0 auto 30px;
      border-radius: 20px;
      animation: bounce 2s infinite ease-in-out;
    }
    
    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-15px); }
    }
    
    h1 {
      font-size: 96px;
      font-weight: 700;
      margin-bottom: 20px;
      color: #FFD700;
      text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.4);
      line-height: 1;
    }
    
    h2 {
      font-size: 32px;
      font-weight: 600;
      margin-bottom: 15px;
      color: #fff;
    }
    
    p {
      font-size: 18px;
      margin-bottom: 35px;
      opacity: 0.95;
      line-height: 1.6;
      color: #fff;
    }
    
    .links {
      display: flex;
      flex-wrap: wrap;
      gap: 15px;
      justify-content: center;
      margin-top: 30px;
    }
    
    .btn {
      display: inline-block;
      padding: 16px 32px;
      background: #fff;
      color: #0066CC;
      text-decoration: none;
      border-radius: 50px;
      font-weight: 600;
      font-size: 16px;
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    }
    
    .btn:hover {
      transform: translateY(-3px);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
    }
    
    .btn-primary {
      background: #FFD700;
      color: #0066CC;
      font-size: 18px;
      padding: 18px 40px;
    }
    
    .btn-primary:hover {
      background: #FFC700;
    }
    
    .btn-secondary {
      background: #fff;
      color: #0066CC;
    }
    
    .btn-secondary:hover {
      background: #00CC66;
      color: #fff;
    }
    
    .available-links {
      margin-top: 40px;
      padding-top: 30px;
      border-top: 2px solid rgba(255, 255, 255, 0.2);
    }
    
    .available-links h3 {
      font-size: 20px;
      margin-bottom: 20px;
      opacity: 0.9;
      color: #00CC66;
    }
    
    @media (max-width: 600px) {
      h1 { font-size: 72px; }
      h2 { font-size: 26px; }
      p { font-size: 16px; }
      .btn { padding: 14px 28px; font-size: 15px; }
      .btn-primary { padding: 16px 32px; font-size: 16px; }
      .container { padding: 40px 20px; }
      .logo { width: 120px; height: 120px; }
    }
  </style>
</head>
<body>
  <div class="container">
    <img src="https://d1yei2z3i6k35z.cloudfront.net/15825967/695acb033797b_LogoforWorldCupCentral.png" alt="World Cup Central Logo" class="logo">
    
    <h1>404</h1>
    <h2>Offside! ⚽</h2>
    <p>This link doesn't exist. Looks like you've been sent to the wrong side of the pitch!</p>
    
    <div class="links">
      <a href="https://worldcupcentral.net" class="btn btn-primary">🏠 Go Home</a>
    </div>
    
    <div class="available-links">
      <h3>🔗 Available Quick Links:</h3>
      <div class="links">
        <a href="https://link.worldcupcentral.net/rumble" class="btn btn-secondary">📺 Rumble</a>
        <a href="https://link.worldcupcentral.net/youtube" class="btn btn-secondary">▶️ YouTube</a>
      </div>
    </div>
  </div>
</body>
</html>
    `, {
      status: 404,
      headers: { 'Content-Type': 'text/html; charset=utf-8' }
    });
  }
}
