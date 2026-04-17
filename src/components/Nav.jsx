import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <nav className="nav">
      <Link to="/" className="nav-logo" onClick={close}>
        <img src="/img/nobgreal.png" alt="Y4E" className="nav-logo-img" />
      </Link>

      <button
        className={`nav-hamburger${open ? ' is-open' : ''}`}
        onClick={() => setOpen(o => !o)}
        aria-label="menu"
      >
        <span /><span /><span />
      </button>

      <ul className={`nav-links${open ? ' nav-links-open' : ''}`}>
        <li><NavLink to="/sessions" onClick={close}>IN THE BOOTH</NavLink></li>
        <li><NavLink to="/roster" onClick={close}>ROSTER</NavLink></li>
        <li><NavLink to="/store" onClick={close}>STORE</NavLink></li>
        <li><NavLink to="/merch" onClick={close}>MERCH</NavLink></li>
        <li><Link to="/collab" className="nav-collab" onClick={close}>COLLAB →</Link></li>
      </ul>
    </nav>
  )
}
