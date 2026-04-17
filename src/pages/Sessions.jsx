import { useState, useEffect } from 'react'

const ARCHIVE = [
  { tag: 'MAKING OF', tagColor: '#7C3AED', title: 'BALLIN', feat: 'Ski w/ Rey' },
]

const CYCLE_WORDS = ['ROOM', 'BOOTH']

function TypewriterWord() {
  const [wordIndex, setWordIndex] = useState(0)
  const [text, setText] = useState('ROOM')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = CYCLE_WORDS[wordIndex]
    if (!isDeleting) {
      if (text.length < currentWord.length) {
        const t = setTimeout(() => setText(currentWord.slice(0, text.length + 1)), 120)
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => setIsDeleting(true), 2000)
        return () => clearTimeout(t)
      }
    } else {
      if (text.length > 0) {
        const t = setTimeout(() => setText(text.slice(0, -1)), 80)
        return () => clearTimeout(t)
      } else {
        setWordIndex((wordIndex + 1) % CYCLE_WORDS.length)
        setIsDeleting(false)
      }
    }
  }, [text, isDeleting, wordIndex])

  return <span className="typewriter-word">{text}<span className="typewriter-cursor">|</span></span>
}

export default function Sessions() {
  return (
    <>
      <div className="page-header">
        <h1 className="page-title glitch">LIVE IN<br /><span className="neon">THE <TypewriterWord /></span></h1>
        <p className="page-subtitle">Tutto il processo di Y4E, dalla scelta del beat, al master finale &lt;3</p>
      </div>

      <div className="sessions-stream">
        <div className="sessions-embed-box">
          <iframe
            src="https://www.youtube.com/embed/20dQPWJ_Pww"
            title="Session Ski w/ Rey"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>

      <div className="sessions-stream-btns">
        <a href="https://www.twitch.tv/yng4ever_ent" className="btn btn-violet" target="_blank" rel="noreferrer">▸ TWITCH</a>
        <a href="https://www.youtube.com/@yng4ever.entertainment" className="btn btn-neon" target="_blank" rel="noreferrer">▸ YOUTUBE</a>
      </div>

      <div className="archive-section">
        <div className="archive-label">// ARCHIVIO SESSIONI</div>
        <div className="archive-grid archive-grid-single">
          {ARCHIVE.map(s => (
            <div key={s.title} className="archive-card">
              <div className="archive-thumb archive-thumb-video">
                <iframe
                  src="https://www.youtube.com/embed/20dQPWJ_Pww"
                  title={s.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="archive-info">
                <span className="archive-tag-dot" style={{ color: s.tagColor }}>{s.tag}</span>
                <div className="archive-session-title">{s.title}</div>
                <div className="archive-feat">{s.feat}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
