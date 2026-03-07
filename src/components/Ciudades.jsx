import { Link } from 'react-router-dom'
import { CIUDADES } from '../data/ciudadesData'

function scrollTo(id) {
  const target = document.querySelector(id)
  if (target) {
    const navH = document.getElementById('mainNav').offsetHeight
    window.scrollTo({ top: target.offsetTop - navH, behavior: 'smooth' })
  }
}

export default function Ciudades() {
  return (
    <section className="section" id="ciudades">
      <div className="ciudades-header rev">
        <div>
          <p className="eyebrow">Portafolio</p>
          <h2 className="sec-title">Elige la ciudad de<br />tu <em>próxima inversión</em></h2>
        </div>
        <a href="#contacto" className="btn-gold" style={{ whiteSpace: 'nowrap' }}
          onClick={e => { e.preventDefault(); scrollTo('#contacto') }}>
          Ver disponibilidad
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
              <span className="ciudad-badge">{c.badge}</span>
              <div className="ciudad-name">{c.name}</div>
              <div className="ciudad-price">{c.precio}</div>
              {!c.listo && <div className="ciudad-soon">Ver detalles →</div>}
              {c.listo && <div className="ciudad-soon">Ver desarrollo →</div>}
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
