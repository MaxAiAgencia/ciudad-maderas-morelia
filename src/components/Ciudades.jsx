const CIUDADES = [
  {
    img: 'https://maderasrealstate.com/wp-content/uploads/2025/07/QRO-BOSQUES-sur-2-tomas-dron-frame-at-0m2s-sin-logos.jpg',
    alt: 'Querétaro',
    badge: '⭐ Más vendido',
    name: 'Querétaro',
    price: <><strong>$1,386/mes</strong> · 225–1,000 m²</>,
    large: true,
  },
  {
    img: 'https://maderasrealstate.com/wp-content/uploads/2025/07/Razones-para-invertir-en-el-Caribe-frame-at-0m19s-850x570.jpg',
    alt: 'Cancún',
    badge: 'Caribe',
    name: 'Cancún',
    price: <>Desde <strong>$1,386/mes</strong></>,
  },
  {
    img: 'https://maderasrealstate.com/wp-content/uploads/2025/07/chuburna-frame-at-8m47s-850x570.jpg',
    alt: 'Mérida',
    badge: 'Yucatán',
    name: 'Mérida',
    price: <>Desde <strong>$1,386/mes</strong></>,
  },
  {
    img: 'https://maderasrealstate.com/wp-content/uploads/2025/08/monterrey-005.png',
    alt: 'Monterrey',
    badge: 'Noreste',
    name: 'Monterrey',
    price: <>Desde <strong>$1,474/mes</strong></>,
  },
  {
    img: 'https://maderasrealstate.com/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-25-at-9.53.53-PM-850x570.jpeg',
    alt: 'San Miguel de Allende',
    badge: 'Nuevo',
    name: <>San Miguel<br />de Allende</>,
    price: <>Desde <strong>$1,550/mes</strong></>,
  },
  {
    img: 'https://maderasrealstate.com/wp-content/uploads/2025/08/BROCHURE-SOMOS-AGS-30x20_001-850x570.jpg',
    alt: 'Aguascalientes',
    badge: 'Centro',
    name: 'Aguascalientes',
    price: <>Desde <strong>$1,386/mes</strong></>,
  },
  {
    img: 'https://maderasrealstate.com/wp-content/uploads/2025/08/WhatsApp-Image-2024-11-25-at-12.30.17-PM-850x570.jpeg',
    alt: 'Puebla',
    badge: 'Centro',
    name: <>Puebla &amp;<br />San Luis Potosí</>,
    price: <>Desde <strong>$1,134/mes</strong></>,
  },
]

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
          <div className={`ciudad-card${c.large ? ' large' : ''}`} key={i}>
            <img className="ciudad-img" src={c.img} alt={c.alt} loading="lazy" />
            <div className="ciudad-overlay" />
            <div className="ciudad-info">
              <span className="ciudad-badge">{c.badge}</span>
              <div className="ciudad-name">{c.name}</div>
              <div className="ciudad-price">{c.price}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
