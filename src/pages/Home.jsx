import { Link } from 'react-router-dom'

const PREVIEW_MEMBERS = [
  { name: 'VLOZY',    role: 'FOUNDER / ENGINEER', color: '#7C3AED' },
  { name: 'SKI',      role: 'FOUNDER / PRODUCER', color: '#AAFF00' },
  { name: 'YXNGALE!', role: 'ARTIST',              color: '#A78BFA' },
  { name: 'JLELE',    role: 'ARTIST',              color: '#EF4444' },
  { name: 'WAN',      role: 'GUEST',               color: '#86EFAC' },
  { name: 'REY',      role: 'SPECIAL GUEST',       color: '#F59E0B' },
]

const TICKER = Array(20).fill('#YNGSEASON ✦')

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <video className="hero-video" autoPlay muted loop playsInline>
          <source src="/img/alien.mov" type="video/mp4" />
        </video>
        <div className="hero-location">PADOVA<br />EST. 2025</div>
        <div className="hero-content">
          <div className="hero-title glitch">
            <span className="hero-main">YOUNG4EVER</span>
            <span className="hero-ent">ENTERTAINMENT</span>
          </div>
          <div className="hero-tagline">THIS IS YNG MUSIC</div>
          <Link to="/store" className="btn-shop-presets">SHOP YNG PRESETS</Link>
        </div>
        <div className="hero-scanline" />
      </section>

      {/* MARQUEE */}
      <div className="marquee-outer">
        <div className="marquee-inner">
          {[...TICKER, ...TICKER].map((t, i) => <span key={i}>{t}</span>)}
        </div>
      </div>

      {/* CHI SIAMO */}
      <section className="about">
        <div>
          <h2 className="about-title">CHI<br />SIAMO?</h2>
        </div>
        <div>
          <p className="about-text">
            YOUNG4EVER ENT. nasce dalla camera di Vlozy a Padova. 2 founder e un roster
            di artisti sempre in aumento. L'idea è semplice: creare musica in live e
            lasciarti guardare tutto il processo — quello che avremmo voluto noi,
            soprattutto quando abbiamo iniziato a fare musica.
          </p>
          <Link to="/collab" className="btn btn-violet">CANDIDATI PER Y4E</Link>
        </div>
      </section>

      {/* THIS IS YNG MUSIC — SoundCloud */}
      <section className="soundcloud-section">
        <div className="section-heading">THIS IS YNG MUSIC</div>
        <div className="sc-tracks">
          <div className="sc-embed-wrap">
            <iframe
              width="100%"
              height="166"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2302594874&color=%2322ec00&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
            />
            <div className="sc-meta">
              <a href="https://soundcloud.com/yng4ever-ent" target="_blank" rel="noreferrer">YNG4EVER ENT.</a>
              {' · '}
              <a href="https://soundcloud.com/yng4ever-ent/orio-al-serio" target="_blank" rel="noreferrer">Orio al Serio</a>
            </div>
          </div>

          <div className="sc-embed-wrap">
            <iframe
              width="100%"
              height="166"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2302581236&color=%23d02625&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
            />
            <div className="sc-meta">
              <a href="https://soundcloud.com/yng4ever-ent" target="_blank" rel="noreferrer">YNG4EVER ENT.</a>
              {' · '}
              <a href="https://soundcloud.com/yng4ever-ent/bitch-mi-chiama-al-cell" target="_blank" rel="noreferrer">Bitch mi chiama al cell (SAMSUNG)</a>
            </div>
          </div>
        </div>
      </section>

      {/* ROSTER PREVIEW */}
      <section className="roster-preview">
        <div className="section-heading">ROSTER</div>
        <div className="section-sub">PADOVA — IT · EST. 2025</div>
        <div className="roster-preview-grid">
          {PREVIEW_MEMBERS.map(m => (
            <div key={m.name} className="roster-mini-card">
              <div className="rmc-name" style={{ color: m.color }}>{m.name}</div>
              <div className="rmc-role">{m.role}</div>
            </div>
          ))}
        </div>
      </section>

      {/* VIDEO */}
      <section className="video-section">
        <div className="video-title glitch">
          ULTIMA <span className="neon">STUDIO</span> SESSION
        </div>
        <div className="video-embed">
          <iframe
            src="https://www.youtube.com/embed/20dQPWJ_Pww"
            title="Ultima Studio Session"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>

      {/* BLOCKS */}
      <div className="home-blocks">
        <Link to="/store" className="home-block">
          <span className="hb-tag">// TOOLS & SOUNDS</span>
          <div className="hb-title">STORE</div>
          <span className="hb-arrow">ESPLORA PRESETS →</span>
        </Link>
        <Link to="/merch" className="home-block">
          <span className="hb-tag">// COMING SOON</span>
          <div className="hb-title">MERCH</div>
          <span className="hb-arrow">FIRST DROP →</span>
        </Link>
      </div>
    </>
  )
}
