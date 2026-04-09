import { Link } from 'react-router-dom'

const TX = {
  es: {
    eyebrow: 'Programa exclusivo',
    title: <>Construye tu casa en<br />tu <em>terreno Ciudad Maderas</em></>,
    sub: 'Diseña y construye la casa de tus sueños con financiamiento directo, sin buró y sin aval. Siete modelos para todos los gustos.',
    cta: 'Ver los 7 modelos',
    badge: 'Solo para clientes Ciudad Maderas',
  },
  en: {
    eyebrow: 'Exclusive Program',
    title: <>Build your home on your<br /><em>Ciudad Maderas land</em></>,
    sub: 'Design and build your dream home with direct financing, no credit check, no guarantor. Seven models to choose from.',
    cta: 'View the 7 Models',
    badge: 'For Ciudad Maderas clients only',
  },
}

const MODELOS_PREVIEW = [
  { nombre: 'Alba',   img: 'https://storage.googleapis.com/landing-ciudad-maderas/casas/casas-premium/frame-2-RM1-ALBA.png' },
  { nombre: 'Nova',   img: 'https://storage.googleapis.com/landing-ciudad-maderas/casas/casas-premium/frame-2-RM3-NOVA.png' },
  { nombre: 'Stella', img: 'https://storage.googleapis.com/landing-ciudad-maderas/casas/casas-premium/frame-2-RM5-STELLA.png' },
  { nombre: 'Antara', img: 'https://storage.googleapis.com/landing-ciudad-maderas/casas/casas-premium/Antara/ANTARA_HD.webp' },
]

export default function CasasPremiumSection({ lang = 'es' }) {
  const tx = TX[lang]
  return (
    <section className="section casas-premium-section" id="casas-premium">
      <div className="cp-sec-inner">

        {/* Texto izquierdo */}
        <div className="cp-sec-text rev">
          <p className="eyebrow">{tx.eyebrow}</p>
          <h2 className="sec-title">{tx.title}</h2>
          <p className="cp-sec-sub">{tx.sub}</p>
          <span className="cp-sec-badge">{tx.badge}</span>
          <Link to="/casas-premium" className="btn-gold cp-sec-cta">
            {tx.cta}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
          </Link>
        </div>

        {/* Grid de fotos de modelos */}
        <div className="cp-sec-grid rev">
          {MODELOS_PREVIEW.map((m, i) => (
            <Link to="/casas-premium" key={i} className="cp-sec-card">
              <img src={m.img} alt={`Modelo ${m.nombre}`} loading="lazy" />
              <div className="cp-sec-card-overlay" />
              <span className="cp-sec-card-name">{m.nombre}</span>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}
