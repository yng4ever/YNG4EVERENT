import { useState } from 'react'

function HitForm() {
  const [form, setForm] = useState({ nome: '', email: '', tipo: '', messaggio: '' })
  const [sent, setSent] = useState(false)
  const update = k => e => setForm(p => ({ ...p, [k]: e.target.value }))

  if (sent) return (
    <div className="collab-panel violet">
      <div className="cpanel-title">HIT US UP</div>
      <div className="cpanel-sub">// CONTATTACI</div>
      <div className="form-confirm show">// MESSAGGIO RICEVUTO. CI SENTIAMO PRESTO.</div>
    </div>
  )

  return (
    <div className="collab-panel violet">
      <div className="cpanel-title">HIT US UP</div>
      <div className="cpanel-sub">// CONTATTACI</div>
      <form onSubmit={e => { e.preventDefault(); setSent(true) }}>
        <div className="form-row">
          <label className="form-label">NOME</label>
          <input className="form-input" type="text" required value={form.nome} onChange={update('nome')} />
        </div>
        <div className="form-row">
          <label className="form-label">EMAIL</label>
          <input className="form-input" type="email" required value={form.email} onChange={update('email')} />
        </div>
        <div className="form-row">
          <label className="form-label">TIPO RICHIESTA</label>
          <select className="form-select" required value={form.tipo} onChange={update('tipo')}>
            <option value="">—</option>
            <option>Collab musicale</option>
            <option>Mix &amp; Master</option>
            <option>Feature</option>
            <option>Produzione beat</option>
            <option>Altro</option>
          </select>
        </div>
        <div className="form-row">
          <label className="form-label">MESSAGGIO</label>
          <textarea className="form-textarea" required value={form.messaggio} onChange={update('messaggio')} />
        </div>
        <button type="submit" className="btn btn-violet">INVIA →</button>
      </form>
    </div>
  )
}

function StudioForm() {
  const [form, setForm] = useState({ nome: '', artista: '', instagram: '', genere: '', link: '', bio: '' })
  const [sent, setSent] = useState(false)
  const update = k => e => setForm(p => ({ ...p, [k]: e.target.value }))

  if (sent) return (
    <div className="collab-panel green">
      <div className="cpanel-title">SALI IN STUDIO</div>
      <div className="cpanel-sub">// ENTRA NEL ROSTER</div>
      <div className="form-confirm show">// CANDIDATURA RICEVUTA. TI CONTATTEREMO.</div>
    </div>
  )

  return (
    <div className="collab-panel green">
      <div className="cpanel-title">SALI IN STUDIO</div>
      <div className="cpanel-sub">// ENTRA NEL ROSTER</div>
      <form onSubmit={e => { e.preventDefault(); setSent(true) }}>
        <div className="form-row">
          <label className="form-label">NOME REALE</label>
          <input className="form-input" type="text" required value={form.nome} onChange={update('nome')} />
        </div>
        <div className="form-row">
          <label className="form-label">NOME ARTISTA</label>
          <input className="form-input" type="text" required value={form.artista} onChange={update('artista')} />
        </div>
        <div className="form-row">
          <label className="form-label">INSTAGRAM</label>
          <input className="form-input" type="text" value={form.instagram} onChange={update('instagram')} placeholder="@" />
        </div>
        <div className="form-row">
          <label className="form-label">GENERE</label>
          <select className="form-select" required value={form.genere} onChange={update('genere')}>
            <option value="">—</option>
            <option>Trap / Drill</option>
            <option>Sperimentale</option>
            <option>New Jazz</option>
            <option>Hip-Hop</option>
            <option>Altro</option>
          </select>
        </div>
        <div className="form-row">
          <label className="form-label">LINK MUSICA</label>
          <input className="form-input" type="url" value={form.link} onChange={update('link')} placeholder="https://" />
        </div>
        <div className="form-row">
          <label className="form-label">PARLACI DI TE</label>
          <textarea className="form-textarea" required value={form.bio} onChange={update('bio')} />
        </div>
        <button type="submit" className="btn btn-neon">CANDIDATI →</button>
      </form>
    </div>
  )
}

export default function Collab() {
  return (
    <>
      <div className="page-header">
        <h1 className="page-title">COLLABORA<br /><span className="neon">CON NOI</span></h1>
        <p className="page-subtitle">Due strade. Stesso posto.</p>
      </div>
      <div className="collab-body">
        <div className="collab-ig-wrap">
          <div className="collab-ig-label">SCRIVICI SU INSTAGRAM</div>
          <a
            href="https://www.instagram.com/yng4ever.ent"
            target="_blank"
            rel="noreferrer"
            className="collab-ig-btn"
          >
            @yng4ever.ent →
          </a>
        </div>
        <div className="collab-oppure">— OPPURE —</div>
        <div className="collab-grid">
          <HitForm />
          <StudioForm />
        </div>
      </div>
    </>
  )
}
