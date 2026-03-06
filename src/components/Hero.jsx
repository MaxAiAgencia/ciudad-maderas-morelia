import { useState, useEffect } from 'react'

const SLIDES = [
  '/1.jpeg',
  '/2.jpeg',
  '/3.jpeg',
  '/4.jpeg',
  '/5.jpeg',
]

function scrollTo(id) {
  const target = document.querySelector(id)
  if (target) {
    const navH = document.getElementById('mainNav').offsetHeight
    window.scrollTo({ top: target.offsetTop - navH, behavior: 'smooth' })
  }
}

export default function Hero() {
  const [cur, setCur] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setCur(c => (c + 1) % SLIDES.length), 5000)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="hero" id="inicio">
      <div className="hero-slides">
        {SLIDES.map((src, i) => (
          <div
            key={i}
            className={`hero-slide${i === cur ? ' active' : ''}`}
            style={{ backgroundImage: `url('${src}')` }}
          />
        ))}
      </div>
      <div className="hero-overlay" />
      <div className="hero-dots">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            className={`hero-dot${i === cur ? ' active' : ''}`}
            aria-label={`Slide ${i + 1}`}
            onClick={() => setCur(i)}
          />
        ))}
      </div>

      <div className="hero-content">
        <p className="hero-eyebrow">Terrenos y Casas Premium</p>
        <h1>Tu terreno,<br />tu <em>mejor</em><br />inversión</h1>
        <p className="hero-sub">
          Terrenos con escrituras en las ciudades de mayor plusvalía de México. Desde <strong>$1,386 al mes</strong>, con crédito directo, sin buró y sin aval.
        </p>
        <div className="hero-actions">
          <a href="#ciudades" className="btn-gold" onClick={e => { e.preventDefault(); scrollTo('#ciudades') }}>
            Ver ciudades disponibles
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
          <a href="#credito" className="btn-ghost" onClick={e => { e.preventDefault(); scrollTo('#credito') }}>
            Conocer el crédito
          </a>
        </div>
      </div>

      <div className="stats-row">
        <div className="stat"><span className="stat-num">+30</span><div className="stat-lbl">Amenidades por desarrollo</div></div>
        <div className="stat"><span className="stat-num">9+</span><div className="stat-lbl">Ciudades disponibles</div></div>
        <div className="stat"><span className="stat-num">30</span><div className="stat-lbl">Años de crédito directo</div></div>
        <div className="stat"><span className="stat-num">1%</span><div className="stat-lbl">Enganche mínimo</div></div>
      </div>
    </section>
  )
}
