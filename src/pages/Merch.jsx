import { useState } from 'react'

export default function Merch() {
  const [email, setEmail] = useState('')
  const [notified, setNotified] = useState(false)

  return (
    <>
      <div className="merch-simple">
        <div className="merch-qmarks">???</div>
        <div className="merch-coming">SHH…COMING SOON.</div>
      </div>

      <div className="merch-notify-section">
        <div className="merch-notify-label">// LASCIA LA MAIL, SEI IL PRIMO A SAPERLO.</div>
        <form
          className="merch-notify"
          onSubmit={e => { e.preventDefault(); if (email) setNotified(true) }}
        >
          {notified ? (
            <div className="merch-notified">// RICEVUTO. TI AVVISIAMO AL LANCIO.</div>
          ) : (
            <>
              <input
                className="merch-email"
                type="email"
                placeholder="la tua email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn btn-solid-neon">NOTIFICAMI</button>
            </>
          )}
        </form>
      </div>
    </>
  )
}
