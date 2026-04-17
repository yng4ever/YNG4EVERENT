import { useState } from 'react'

function FounderCard({ name, role, bio, color, soundcloudUrl }) {
  return (
    <div className="founder-flip" style={{ '--fc': color }}>
      <div className="founder-front">
        <div className="mc-accent" style={{ background: color }} />
        <div className="mc-name">{name}</div>
        <div className="mc-role" style={{ color }}>{role}</div>
        <div className="mc-bio">{bio}</div>
      </div>
      <div className="founder-back">
        <div className="founder-sc-label">SEGUI</div>
        <a href={soundcloudUrl} target="_blank" rel="noreferrer" className="founder-sc-link">
          SOUNDCLOUD →
        </a>
      </div>
    </div>
  )
}

function MemberCard({ name, role, bio, color }) {
  const [hov, setHov] = useState(false)
  return (
    <div
      className="member-card"
      style={hov ? { borderColor: color, boxShadow: `0 0 32px ${color}22` } : {}}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <div className="mc-accent" style={{ background: color }} />
      <div className="mc-name">{name}</div>
      <div className="mc-role" style={{ color }}>{role}</div>
      <div className="mc-bio">{bio}</div>
    </div>
  )
}

const FOUNDERS = [
  {
    name: 'VLOZY', role: 'FOUNDER · MIX & MASTER', color: '#7C3AED',
    bio: 'Autodidatta puro. Ha imparato mix e mastering da solo, poi ha lavorato in studi come engineer. È lui che fa suonare bene tutto.',
    soundcloudUrl: 'https://soundcloud.com/vlozy',
  },
  {
    name: 'SKI', role: 'FOUNDER · PRODUCER', color: '#AAFF00',
    bio: 'Fa musica da quando era piccolo. 5 anni di trap, new jazz, Detroit, beat sperimentali. Versatile come pochi.',
    soundcloudUrl: 'https://soundcloud.com/schiopu-943339448',
  },
]

const ROSTER_MEMBERS = [
  {
    name: 'YXNGALE!', role: 'ARTIST', color: '#A78BFA',
    bio: 'Fratello di Vlozy. Sta bene su qualsiasi traccia e propone flow insani. Sperimentale di natura.',
  },
  {
    name: 'JLELE', role: 'ARTIST', color: '#EF4444',
    bio: "Timbro basso, hard, ti fa cagare addosso. Come un demone uscito dall'inferno.",
  },
]

const GUESTS = [
  {
    name: 'WAN', role: 'GUEST', color: '#86EFAC',
    bio: 'Trap sì, ma brilla di più sui beat indie. Ha il suo sound, riconoscibile.',
  },
  {
    name: 'REY', role: 'SPECIAL GUEST', color: '#F59E0B',
    bio: 'Sale da Milano a Padova per fare musica con la crew. Rende catchy qualsiasi traccia su cui mette bocca.',
  },
]

export default function Roster() {
  return (
    <>
      <div className="roster-page-header">
        <h1 className="page-title">IL <span className="neon">ROSTER</span></h1>
        <p className="page-subtitle">Padova — IT · Est. 2025</p>
      </div>

      <section className="roster-section-wrap">
        <div>
          <h2 className="about-title">FOUNDER</h2>
        </div>
        <div className="founders-grid">
          {FOUNDERS.map(m => <FounderCard key={m.name} {...m} />)}
        </div>
      </section>

      <section className="roster-section-wrap">
        <div>
          <h2 className="about-title">MEMBERS</h2>
        </div>
        <div className="roster-main-grid">
          {ROSTER_MEMBERS.map(m => <MemberCard key={m.name} {...m} />)}
        </div>
      </section>

      <section className="roster-section-wrap">
        <div>
          <h2 className="about-title">GUESTS</h2>
        </div>
        <div className="guest-row">
          {GUESTS.map(m => <MemberCard key={m.name} {...m} />)}
        </div>
      </section>
    </>
  )
}
