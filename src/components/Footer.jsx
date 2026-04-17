const SOCIALS = [
  { name: 'INSTAGRAM',  href: 'https://www.instagram.com/yng4ever.ent' },
  { name: 'TIKTOK',     href: 'https://www.tiktok.com/@young4ever.ent' },
  { name: 'YOUTUBE',    href: 'https://www.youtube.com/@yng4ever.entertainment' },
  { name: 'TWITCH',     href: 'https://www.twitch.tv/yng4ever_ent' },
  { name: 'SOUNDCLOUD', href: 'https://soundcloud.com/yng4ever-ent' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <img src="/img/nobgreal.png" alt="Y4E" className="footer-logo-img" />
        </div>
        <ul className="footer-socials">
          {SOCIALS.map(s => (
            <li key={s.name}>
              <a href={s.href} target="_blank" rel="noreferrer">{s.name}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="footer-copy">© 2025 YOUNG4EVER ENTERTAINMENT — PADOVA, IT</div>
    </footer>
  )
}
