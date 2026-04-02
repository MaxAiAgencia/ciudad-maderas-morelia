import { Link } from 'react-router-dom'
import { CIUDADES } from '../data/ciudadesData'

const TX = {
  es: {
    eyebrow: 'Portafolio',
    title: <>Elige la ciudad de<br />tu <em>próxima inversión</em></>,
    cta: 'Ver disponibilidad',
    ver: 'Ver desarrollo →',
    pronto: 'Ver detalles →',
  },
  en: {
    eyebrow: 'Portfolio',
    title: <>Choose the city for<br />your <em>next investment</em></>,
    cta: 'Check Availability',
    ver: 'See development →',
    pronto: 'See details →',
  },
}

const BADGE_EN = {
  'Disponible': 'Available',
  'Próximamente': 'Coming Soon',
  'Nuevo': 'New',
  'Exclusivo': 'Exclusive',
}

function scrollTo(id) {
  const target = document.querySelector(id)
  if (target) {
    const navH = document.getElementById('mainNav').offsetHeight
    window.scrollTo({ top: target.offsetTop - navH, behavior: 'smooth' })
  }
}

export default function Ciudades({ lang = 'es' }) {
  const tx = TX[lang]
  return (
    <section className="section" id="ciudades">
      <div className="ciudades-header rev">
        <div>
          <p className="eyebrow">{tx.eyebrow}</p>
          <h2 className="sec-title">{tx.title}</h2>
        </div>
        <a href="#contacto" className="btn-gold" style={{ whiteSpace: 'nowrap' }}
          onClick={e => { e.preventDefault(); scrollTo('#contacto') }}>
          {tx.cta}
        </a>
      </div>
      <div className="ciudades-grid rev">
        {CIUDADES.map((c, i) => (
          <Link
            to={`/ciudades/${c.slug}`}
            className={`ciudad-card${c.large ? ' large' : ''}`}
            key={i}
            style={{ display: 'block', textDecoration: 'none' }}
          >
            <img className="ciudad-img" src={c.img} alt={c.name} loading="lazy" />
            <div className="ciudad-overlay" />
            <div className="ciudad-info">
              <span className="ciudad-badge">
                {lang === 'en' ? (BADGE_EN[c.badge] ?? c.badge) : c.badge}
              </span>
              <div className="ciudad-name">{c.name}</div>
              <div className="ciudad-price">{c.precio}</div>
              {!c.listo && <div className="ciudad-soon">{tx.pronto}</div>}
              {c.listo && <div className="ciudad-soon">{tx.ver}</div>}
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
