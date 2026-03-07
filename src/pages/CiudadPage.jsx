import { useParams, Link } from 'react-router-dom'
import { getCiudad } from '../data/ciudadesData'
import Footer from '../components/Footer'
import './CiudadPage.css'

const WA_NUM = '524437919303'

function waLink(ciudad) {
  const txt = `Hola Eduardo, me interesa información sobre terrenos Ciudad Maderas en ${ciudad} 🏡`
  return `https://wa.me/${WA_NUM}?text=${encodeURIComponent(txt)}`
}

function Proxima({ ciudad }) {
  return (
    <div className="cp-proxima">
      <nav className="cp-nav">
        <Link to="/" className="cp-nav-logo">
          <img src="/logo-ciudad-maderas.png" alt="Ciudad Maderas" />
        </Link>
        <Link to="/#ciudades" className="cp-back">← Regresar</Link>
      </nav>
      <div className="cp-proxima-body">
        <p className="eyebrow" style={{ justifyContent: 'center' }}>Próximamente</p>
        <h1 className="sec-title">{ciudad.name}<br /><em>está en camino</em></h1>
        <p>Estamos preparando toda la información de este desarrollo. <br />¡Regresa pronto o contáctanos para más detalles!</p>
        <a href={waLink(ciudad.name)} target="_blank" rel="noreferrer" className="cp-btn-gold">
          Quiero información sobre {ciudad.name}
        </a>
        <Link to="/" className="cp-btn-ghost">Ver todas las ciudades</Link>
      </div>
      <Footer />
    </div>
  )
}

export default function CiudadPage() {
  const { slug } = useParams()
  const ciudad = getCiudad(slug)

  if (!ciudad) {
    return (
      <div className="cp-proxima">
        <nav className="cp-nav">
          <Link to="/" className="cp-nav-logo">
            <img src="/logo-ciudad-maderas.png" alt="Ciudad Maderas" />
          </Link>
          <Link to="/" className="cp-back">← Regresar</Link>
        </nav>
        <div className="cp-proxima-body">
          <h1 className="sec-title">Ciudad <em>no encontrada</em></h1>
          <Link to="/" className="cp-btn-gold">Volver al inicio</Link>
        </div>
      </div>
    )
  }

  if (!ciudad.listo) return <Proxima ciudad={ciudad} />

  return (
    <div className="cp-wrap">

      {/* NAV */}
      <nav className="cp-nav">
        <Link to="/" className="cp-nav-logo">
          <div className="cp-logo-capsule">
            <img src="/logo-ciudad-maderas.png" alt="Ciudad Maderas" />
          </div>
        </Link>
        <Link to="/#ciudades" className="cp-back">← Todas las ciudades</Link>
        <a href={waLink(ciudad.name)} target="_blank" rel="noreferrer" className="cp-nav-cta">
          Quiero invertir
        </a>
      </nav>

      {/* HERO */}
      <section className="cp-hero" style={{ backgroundImage: `url('${ciudad.imgDesarrollo}')` }}>
        <div className="cp-hero-overlay" />
        <div className="cp-hero-content">
          <p className="cp-eyebrow">{ciudad.estado} · Ciudad Maderas</p>
          <h1>{ciudad.desarrollo}</h1>
          <p className="cp-slogan">{ciudad.slogan}</p>
          <div className="cp-hero-precio">
            <span className="cp-desde">Crédito directo desde</span>
            <span className="cp-monto">{ciudad.precio}</span>
            <span className="cp-detalle">Sin revisión de buró · Apartado {ciudad.apartado} · {ciudad.financiamiento}</span>
          </div>
          <div className="cp-hero-actions">
            <a href={waLink(ciudad.name)} target="_blank" rel="noreferrer" className="cp-btn-gold">
              Quiero más información
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </a>
            <Link to="/" className="cp-btn-ghost">← Ver otras ciudades</Link>
          </div>
        </div>
      </section>

      {/* DESCRIPCIÓN CIUDAD */}
      <section className="cp-section cp-alt">
        <div className="cp-two-col">
          <div>
            <p className="cp-eyebrow">¿Por qué {ciudad.name}?</p>
            <h2 className="cp-sec-title">Una ciudad de<br /><em>gran oportunidad</em></h2>
            <p className="cp-text">{ciudad.descripcionCiudad}</p>
          </div>
          <div className="cp-stats-col">
            <div className="cp-stat-big">
              <span>{ciudad.hectareas}</span>
              <label>Hectáreas totales</label>
            </div>
            <div className="cp-stat-big">
              <span>{ciudad.masterPlan[3]?.split(' ')[0] || '2,324'}</span>
              <label>Lotes residenciales</label>
            </div>
          </div>
        </div>
      </section>

      {/* CONECTIVIDAD */}
      <section className="cp-section">
        <p className="cp-eyebrow" style={{ justifyContent: 'center', textAlign: 'center' }}>Ubicación estratégica</p>
        <h2 className="cp-sec-title" style={{ textAlign: 'center' }}>Conectividad que<br /><em>ahorra tiempo</em></h2>
        <div className="cp-conectividad">
          {ciudad.conectividad.map((c, i) => (
            <div className="cp-conect-item" key={i}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              <span className="cp-conect-lugar">{c.lugar}</span>
              <span className="cp-conect-min">{c.minutos} min</span>
            </div>
          ))}
        </div>
      </section>

      {/* DESARROLLO */}
      <section className="cp-section cp-alt">
        <p className="cp-eyebrow">El desarrollo</p>
        <h2 className="cp-sec-title">Una nueva vida<br />en una <em>nueva ciudad</em></h2>
        <p className="cp-text cp-text-lg">{ciudad.descripcionDesarrollo}</p>
      </section>

      {/* MASTER PLAN */}
      <section className="cp-section">
        <div className="cp-two-col">
          <div>
            <p className="cp-eyebrow">Master Plan</p>
            <h2 className="cp-sec-title">{ciudad.hectareas} <em>hectáreas</em><br />de desarrollo</h2>
            <ul className="cp-master-list">
              {ciudad.masterPlan.map((item, i) => (
                <li key={i}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="cp-amenidades">
            <p className="cp-eyebrow">Amenidades</p>
            <h2 className="cp-sec-title">+20 amenidades<br /><em>exclusivas</em></h2>
            <div className="cp-amenidades-grid">
              {ciudad.amenidades.map((a, i) => (
                <span className="cp-amenidad" key={i}>{a}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="cp-cta-final">
        <p className="cp-eyebrow" style={{ justifyContent: 'center' }}>¿Listo para invertir?</p>
        <h2 className="cp-sec-title">Tu terreno en {ciudad.name}<br /><em>te está esperando</em></h2>
        <p className="cp-text" style={{ textAlign: 'center', maxWidth: '500px', margin: '0 auto 2rem' }}>
          Crédito directo sin buró, sin aval. Aparta desde {ciudad.apartado}.
        </p>
        <div className="cp-cta-actions">
          <a href={waLink(ciudad.name)} target="_blank" rel="noreferrer" className="cp-btn-gold cp-btn-lg">
            Quiero mi terreno en {ciudad.name}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
