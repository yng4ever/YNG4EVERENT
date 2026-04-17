const PRODUCTS = [
  {
    name: 'Y4E MAIN VOCAL CHAIN',
    type: 'PRESET',
    price: '€7.99',
    compat: 'Per FL Studio',
    desc: 'Il nostro preset vocale ufficiale, quello che viene usato in stream.',
  },
  {
    name: 'Y4E MAIN AD LIBS',
    type: 'PRESET',
    price: '€5.99',
    compat: 'Per FL Studio',
    desc: 'Per delle sporche SWAG!',
  },
]

const REVIEWS = [
  {
    username: 'ItsAndrei!',
    avatar: '/img/andrei.jpg',
    text: "Valore assurdo, se c'è qualche plugin che non trovate andate su G-Meh e 4downloads e trovate tutto raga, i preset sono devastanti, consiglio fr.",
  },
  {
    username: 'AleScabbio67',
    avatar: '/img/scabbia.jpg',
    text: 'Grazie ragazzi, ora vado mainstream grazie a voi ahahahahah',
  },
]

const DM_STICKER = 'DM su IG per qualsiasi info!'

export default function Store() {
  return (
    <>
      <div className="page-header">
        <h1 className="page-title">PRESETS, TEMPLATES<br />&amp; <span className="neon">AD LIBS</span></h1>
        <p className="page-subtitle">Tutti i tools che usiamo in sessione.</p>
      </div>

      <div className="store-body">

        {/* FREE BOX */}
        <div className="free-box">
          <div className="free-box-badge">FREE!</div>
          <div className="free-box-title">PRESET OMAGGIO</div>
          <p className="free-box-desc">
            Seguici su Instagram e Twitch e mandaci gli screen in DM su IG — ti mandiamo il preset gratis.
          </p>
          <div className="free-box-links">
            <a
              href="https://www.twitch.tv/yng4ever_ent"
              target="_blank"
              rel="noreferrer"
              className="free-link free-link-twitch"
            >TWITCH →</a>
            <a
              href="https://www.instagram.com/yng4ever.ent"
              target="_blank"
              rel="noreferrer"
              className="free-link free-link-ig"
            >INSTAGRAM →</a>
          </div>
        </div>

        {/* PRODUCTS */}
        <div className="products-grid products-grid-2">
          {PRODUCTS.map(p => (
            <div key={p.name} className="product-card">
              <div className="product-sticker">{DM_STICKER}</div>
              <span className="product-type-tag tag-preset">{p.type}</span>
              <div className="product-name">{p.name}</div>
              <div className="product-compat">{p.compat}</div>
              <div className="product-desc">{p.desc}</div>
              <div className="product-price">{p.price}</div>
              <button className="product-buy">ACQUISTA →</button>
            </div>
          ))}
        </div>

        {/* FEATURED — FL RECORDING TEMPLATE */}
        <div className="bundle-outer">
          <div className="bundle-sticker">{DM_STICKER}</div>
          <div className="bundle-inner">
            <div className="bundle-info">
              <div className="bundle-name">Y4E FL RECORDING TEMPLATE</div>
              <div className="bundle-value">
                Per FL Studio — file .flp già impostato e pronto all'uso.<br />
                Comprende <strong>Y4E MAIN VOCAL CHAIN</strong> + <strong>Y4E MAIN AD LIBS</strong> inclusi.
              </div>
            </div>
            <div>
              <div className="bundle-price">€10.99</div>
              <button className="btn btn-neon" style={{ marginTop: 16 }}>
                PRENDI IL PACK →
              </button>
            </div>
          </div>
        </div>

        {/* REVIEWS */}
        <div className="reviews-section">
          <div className="reviews-label">// REVIEWS</div>
          {REVIEWS.map(r => (
            <div key={r.username} className="review-card">
              <div className="review-header">
                <img src={r.avatar} className="review-avatar" alt={r.username} />
                <div className="review-user-info">
                  <span className="review-username">{r.username}</span>
                  <span className="review-tag">#Y4E</span>
                </div>
              </div>
              <p className="review-text">{r.text}</p>
            </div>
          ))}
        </div>

      </div>
    </>
  )
}
