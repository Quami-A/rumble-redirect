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
    
    // Complex 404 Page
    return new Response(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Page Not Found | World Cup Central</title>
  <!-- SEO (Indexable 404) -->
  <meta name="robots" content="index, follow">
  <meta name="description" content="VAR checked it — this page doesn't exist. Stay in the match with the latest World Cup 2026 news from World Cup Central.">
  <link rel="canonical" href="https://link.worldcupcentral.net/404">
  <!-- Open Graph -->
  <meta property="og:title" content="Page Not Found | World Cup Central">
  <meta property="og:description" content="Even the best teams miss sometimes. Stay in the match with World Cup Central.">
  <meta property="og:image" content="https://d1yei2z3i6k35z.cloudfront.net/15825967/695b008e424ce_LogoforWorldCupCentral.png">
  <meta property="og:url" content="https://link.worldcupcentral.net/404">
  <meta property="og:type" content="website">
  <!-- Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
  <style>
    :root{
      --blue:#0a4cff;
      --green:#2cff6a;
      --gold:#ffd24c;
      --dark:#070a12;
    }
    *{
      box-sizing:border-box;
    }
    body{
      margin:0;
      font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;
      background:#070a12;
      color:#fff;
      overflow-x:hidden;
    }
    /* Background video */
    .bg-video{
      position:fixed;
      inset:0;
      z-index:-2;
    }
    .bg-video video{
      width:100%;
      height:100%;
      object-fit:cover;
      filter:brightness(.55) saturate(1.1);
    }
    .bg-overlay{
      position:fixed;
      inset:0;
      z-index:-1;
      background: radial-gradient(circle at top, rgba(255,255,255,.15), transparent 45%),
                  linear-gradient(to bottom, rgba(7,10,18,.25), rgba(7,10,18,.85));
    }
    /* Ticker */
    .ticker{
      position:sticky;
      top:0;
      z-index:20;
      backdrop-filter:blur(12px);
      background:rgba(7,10,18,.6);
      border-bottom:1px solid rgba(255,255,255,.15);
    }
    .ticker-inner{
      display:flex;
      align-items:center;
      gap:12px;
      padding:12px 16px;
    }
    .ticker-badge{
      background:linear-gradient(135deg,var(--blue),var(--green));
      padding:8px 14px;
      border-radius:999px;
      font-weight:800;
      font-size:.75rem;
      letter-spacing:.08em;
    }
    .ticker-track{
      overflow:hidden;
      white-space:nowrap;
      flex:1;
    }
    .ticker-move{
      display:inline-block;
      padding-left:100%;
      animation:marquee 22s linear infinite;
      font-weight:700;
      color:var(--gold);
    }
    @keyframes marquee{
      from{transform:translateX(0)}
      to{transform:translateX(-100%)}
    }
    /* Layout */
    .wrap{
      max-width:1150px;
      margin:auto;
      padding:30px 18px 90px;
    }
    .hero{
      background:rgba(255,255,255,.10);
      border:1px solid rgba(255,255,255,.15);
      border-radius:22px;
      box-shadow:0 30px 70px rgba(0,0,0,.5);
      overflow:hidden;
    }
    .hero-top{
      display:grid;
      grid-template-columns:160px 1fr;
      gap:20px;
      padding:24px;
    }
    .logo-spin{
      width:140px;
      height:140px;
      animation:spin 16s linear infinite;
      cursor:pointer;
    }
    .logo-spin img{
      width:100%;
      height:100%;
      object-fit:contain;
      filter:drop-shadow(0 0 25px rgba(44,255,106,.4));
    }
    @keyframes spin{
      from{transform:rotate(0)}
      to{transform:rotate(360deg)}
    }
    .goal{
      animation:goalPop .6s ease-out
    }
    @keyframes goalPop{
      0%{transform:scale(1)}
      50%{transform:scale(1.3) rotate(20deg)}
      100%{transform:scale(1)}
    }
    .kicker{
      display:inline-block;
      padding:8px 14px;
      border-radius:999px;
      background:rgba(255,255,255,.12);
      font-weight:800;
    }
    h1{
      font-family:'Bebas Neue';
      font-size:clamp(3rem,6vw,5.5rem);
      margin:14px 0 8px;
      color:var(--gold);
    }
    .sub{font-size:1.1rem;opacity:.9}
    .actions{
      display:flex;
      flex-wrap:wrap;
      gap:12px;
      justify-content:center;
      padding:20px;
      border-top:1px solid rgba(255,255,255,.15);
    }
    .btn{
      padding:13px 18px;
      border-radius:999px;
      font-weight:800;
      text-decoration:none;
      color:#fff;
      background:rgba(255,255,255,.12);
      transition:all .3s ease;
    }
    .btn:hover{
      transform:translateY(-2px);
      background:rgba(255,255,255,.18);
    }
    .btn.primary{
      background:linear-gradient(135deg,var(--blue),var(--green));
    }
    .btn.primary:hover{
      box-shadow:0 10px 30px rgba(10,76,255,.3);
    }
    /* Flags */
    .flags{
      display:flex;
      justify-content:center;
      gap:12px;
      margin:14px 0;
    }
    .flags img{
      width:40px;
      animation:floatFlag 3s ease-in-out infinite;
    }
    .flags img:nth-child(2){animation-delay:.5s}
    .flags img:nth-child(3){animation-delay:1s}
    @keyframes floatFlag{
      0%,100%{transform:translateY(0)}
      50%{transform:translateY(-6px)}
    }
    /* News */
    .news{
      margin-top:26px;
      background:rgba(255,255,255,.10);
      border:1px solid rgba(255,255,255,.15);
      border-radius:22px;
      padding:22px;
    }
    .top-articles{
      background:rgba(255,255,255,.08);
      border-radius:16px;
      padding:16px;
      margin-bottom:18px;
    }
    .top-articles h3{
      margin:0 0 10px;
      font-family:'Bebas Neue';
    }
    .top-articles ul{list-style:none;padding:0;margin:0}
    .top-articles li{margin-bottom:8px}
    .top-articles a{color:var(--gold);text-decoration:none;font-weight:700}
    .top-articles a:hover{text-decoration:underline}
    .carousel{
      display:flex;
      gap:16px;
      overflow-x:auto;
      scroll-snap-type:x mandatory;
    }
    .card{
      min-width:320px;
      background:rgba(255,255,255,.12);
      border-radius:18px;
      padding:16px;
      scroll-snap-align:center;
      transition:all .3s ease;
    }
    .card:hover{
      background:rgba(255,255,255,.18);
      transform:translateY(-4px);
    }
    .card h3{margin:0 0 8px}
    .card p{opacity:.9;margin:0 0 12px}
    .card a{color:var(--gold);font-weight:800;text-decoration:none}
    .card a:hover{text-decoration:underline}
    /* Mobile */
    @media(max-width:800px){
      .hero-top{grid-template-columns:1fr;text-align:center}
      .logo-spin{margin:0 auto}
    }
  </style>
</head>
<body>
  <div class="bg-video">
    <video autoplay muted loop playsinline>
      <source src="https://d1yei2z3i6k35z.cloudfront.net/15825967/695b04a24aac6_12216260_1920_1080_30fps.mp4" type="video/mp4">
    </video>
  </div>
  <div class="bg-overlay"></div>

  <div class="ticker">
    <div class="ticker-inner">
      <div class="ticker-badge">LIVE</div>
      <div class="ticker-track">
        <div class="ticker-move" id="tickerMove">
          Breaking: World Cup 2026 updates loading • Breaking: World Cup 2026 updates loading •
        </div>
      </div>
    </div>
  </div>

  <div class="wrap">
    <section class="hero">
      <div class="hero-top">
        <div class="logo-spin" id="logoBall">
          <img src="https://d1yei2z3i6k35z.cloudfront.net/15825967/695b008e424ce_LogoforWorldCupCentral.png" alt="World Cup Central">
        </div>
        <div>
          <div class="kicker" id="kickerText">🚩 VAR Check: Link Not Found</div>
          <h1 id="headline">OFFSIDE!</h1>
          <p class="sub" id="subText">
            The ref raised the flag — this page doesn't exist. But you're still in the tournament.
          </p>
        </div>
      </div>
      <div class="flags">
        <img src="https://flagcdn.com/w40/us.png" alt="USA">
        <img src="https://flagcdn.com/w40/ca.png" alt="Canada">
        <img src="https://flagcdn.com/w40/mx.png" alt="Mexico">
      </div>
      <div class="actions">
        <a class="btn primary" href="https://www.worldcupcentral.net">🏠 Home</a>
        <a class="btn" href="https://link.worldcupcentral.net/youtube">📺 YouTube</a>
        <a class="btn" href="https://www.instagram.com/worldcupcentral">📸 Instagram</a>
        <a class="btn" href="https://www.tiktok.com/@worldcupcentral">🎵 TikTok</a>
        <a class="btn" href="https://link.worldcupcentral.net/rumble">🔥 Rumble</a>
      </div>
    </section>

    <section class="news">
      <div class="top-articles">
        <h3>🔥 Top WC 2026 Articles</h3>
        <ul id="topArticles"></ul>
      </div>
      <div class="carousel" id="carousel"></div>
    </section>
  </div>

  <audio id="whistle">
    <source src="https://d1yei2z3i6k35z.cloudfront.net/15825967/695b04a1c28b4_mixkit-police-whistle-614.wav" type="audio/wav">
  </audio>
  <audio id="chant" loop>
    <source src="https://d1yei2z3i6k35z.cloudfront.net/15825967/695b04a1c28b4_mixkit-police-whistle-614.wav" type="audio/wav">
  </audio>

  <script>
    const MESSAGES=[
      {h:"OFFSIDE!",k:"🚩 VAR Check",s:"The ref raised the flag — this page doesn't exist."},
      {h:"RED CARD!",k:"🟥 Foul Play",s:"That link went studs-up."},
      {h:"SHOT WIDE!",k:"⚽ Missed Chance",s:"That URL sailed into the stands."},
      {h:"SAVED!",k:"🧤 Goalkeeper",s:"The keeper stopped that page."}
    ];
    const pick=MESSAGES[Math.floor(Math.random()*MESSAGES.length)];
    document.getElementById("headline").textContent=pick.h;
    document.getElementById("kickerText").textContent=pick.k;
    document.getElementById("subText").textContent=pick.s;

    const logoBall=document.getElementById("logoBall");
    logoBall.onclick=()=>{
      logoBall.classList.add("goal");
      document.getElementById("whistle").play().catch(()=>{});
      setTimeout(()=>logoBall.classList.remove("goal"),600);
    };

    const chant=document.getElementById("chant");
    chant.volume=0;
    document.querySelector(".hero").onmouseenter=()=>{
      chant.play().catch(()=>{});
      let v=0;const i=setInterval(()=>{v+=.05;chant.volume=Math.min(v,.6);if(v>=.6)clearInterval(i)},80);
    };
    document.querySelector(".hero").onmouseleave=()=>{
      const i=setInterval(()=>{chant.volume=Math.max(chant.volume-.05,0);if(chant.volume<=0){chant.pause();clearInterval(i)}},80);
    };

    // RSS feed
    fetch("https://www.worldcupcentral.net/blog/rss")
      .then(r=>r.text())
      .then(t=>{
        const xml=new DOMParser().parseFromString(t,"text/xml");
        const items=[...xml.querySelectorAll("item")].slice(0,6);
        const carousel=document.getElementById("carousel");
        const list=document.getElementById("topArticles");
        let tick="";
        items.forEach(i=>{
          const title=i.querySelector("title").textContent;
          const link=i.querySelector("link").textContent;
          tick+=\`Breaking: \${title} • \`;
          carousel.innerHTML+=\`<div class="card"><h3>\${title}</h3><a href="\${link}" target="_blank">Read →</a></div>\`;
          list.innerHTML+=\`<li><a href="\${link}" target="_blank">\${title}</a></li>\`;
        });
        document.getElementById("tickerMove").textContent=tick+tick;
      })
      .catch(()=>{
        console.log("RSS feed unavailable - using fallback");
      });
  </script>
</body>
</html>`, {
      status: 404,
      headers: { 'Content-Type': 'text/html; charset=utf-8' }
    });
  }
}
