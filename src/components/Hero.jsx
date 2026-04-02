import { useState, useEffect } from 'react'

const SLIDES = ['/1.jpeg', '/2.jpeg', '/3.jpeg', '/4.jpeg', '/5.jpeg']

const TX = {
  es: {
    eyebrow: 'Terrenos y Casas Premium',
    h1a: 'Tu terreno,', h1b: 'tu ', h1em: 'mejor', h1c: 'inversión',
    sub1: 'Terrenos con escrituras en las ciudades de mayor plusvalía de México. Desde ',
    sub2: '$1,106 al mes', sub3: ', con crédito directo, sin buró y sin aval.',
    cta1: 'Ver ciudades disponibles', cta2: 'Conocer el crédito',
    stats: [
      { num: '+20', lbl: 'Amenidades por desarrollo' },
      { num: '+30', lbl: 'Desarrollos en México' },
      { num: '30',  lbl: 'Años de crédito directo' },
      { num: '1–10%', lbl: 'De enganche' },
    ],
  },
  en: {
    eyebrow: 'Premium Land & Homes',
    h1a: 'Your land,', h1b: 'your ', h1em: 'best', h1c: 'investment',
    sub1: "Titled land in Mexico's highest-appreciation cities. From ",
    sub2: '$1,106/month', sub3: ' with direct financing, no credit check, no guarantor.',
    cta1: 'View Available Cities', cta2: 'Learn About Financing',
    stats: [
      { num: '+20', lbl: 'Amenities per development' },
      { num: '+30', lbl: 'Developments in Mexico' },
      { num: '30',  lbl: 'Years of direct financing' },
      { num: '1–10%', lbl: 'Down payment' },
    ],
  },
}

function scrollTo(id) {
  const target = document.querySelector(id)
  if (target) {
    const navH = document.getElementById('mainNav').offsetHeight
    window.scrollTo({ top: target.offsetTop - navH, behavior: 'smooth' })
  }
}

export default function Hero({ lang = 'es' }) {
  const [cur, setCur] = useState(0)
  const tx = TX[lang]

  useEffect(() => {
    const t = setInterval(() => setCur(c => (c + 1) % SLIDES.length), 5000)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="hero" id="inicio">
      <div className="hero-slides">
        {SLIDES.map((src, i) => (
          <div key={i} className={`hero-slide${i === cur ? ' active' : ''}`} style={{ backgroundImage: `url('${src}')` }} />
        ))}
      </div>
      <div className="hero-overlay" />
      <div className="hero-dots">
        {SLIDES.map((_, i) => (
          <button key={i} className={`hero-dot${i === cur ? ' active' : ''}`} aria-label={`Slide ${i + 1}`} onClick={() => setCur(i)} />
        ))}
      </div>

      <div className="hero-content">
        <p className="hero-eyebrow">{tx.eyebrow}</p>
        <h1>{tx.h1a}<br />{tx.h1b}<em>{tx.h1em}</em><br />{tx.h1c}</h1>
        <p className="hero-sub">
          {tx.sub1}<strong>{tx.sub2}</strong>{tx.sub3}
        </p>
        <div className="hero-actions">
          <a href="#ciudades" className="btn-gold" onClick={e => { e.preventDefault(); scrollTo('#ciudades') }}>
            {tx.cta1}
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
          <a href="#credito" className="btn-ghost" onClick={e => { e.preventDefault(); scrollTo('#credito') }}>
            {tx.cta2}
          </a>
        </div>
      </div>

      <div className="stats-row">
        {tx.stats.map((s, i) => (
          <div className="stat" key={i}>
            <span className="stat-num">{s.num}</span>
            <div className="stat-lbl">{s.lbl}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
