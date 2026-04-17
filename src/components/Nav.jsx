import { Link, NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className="nav">
      <Link to="/" className="nav-logo">
        <img src="/img/nobgreal.png" alt="Y4E" className="nav-logo-img" />
      </Link>
      <ul className="nav-links">
        <li><NavLink to="/sessions">IN THE BOOTH</NavLink></li>
        <li><NavLink to="/roster">ROSTER</NavLink></li>
        <li><NavLink to="/store">STORE</NavLink></li>
        <li><NavLink to="/merch">MERCH</NavLink></li>
        <li><Link to="/collab" className="nav-collab">COLLAB →</Link></li>
      </ul>
    </nav>
  )
}
