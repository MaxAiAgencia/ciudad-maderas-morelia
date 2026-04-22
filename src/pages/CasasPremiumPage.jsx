import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Contacto from '../components/Contacto'
import Footer from '../components/Footer'
import './CasasPremiumPage.css'

const WA_NUM = '524433250555'
function waModelo(nombre) {
  const txt = `Hola, me interesa información sobre el modelo *${nombre}* de Casas Premium Ciudad Maderas 🏠`
  return `https://wa.me/${WA_NUM}?text=${encodeURIComponent(txt)}`
}

const MODELOS = [
  {
    id: 'alba',
    nombre: 'Alba',
    img: 'https://storage.googleapis.com/landing-ciudad-maderas/casas/casas-premium/frame-2-RM1-ALBA.png',
    plantas: 'Baja + Roof',
    recamaras: '2 + multiusos',
    banos: '1½',
    features: ['Sala-comedor abierta', 'Cocina con barra', 'Cuarto de servicio', 'Roof con opción pérgola'],
    tour: 'https://kuula.co/share/collection/7bD8t?logo=0&info=1&fs=1&vr=1&sd=1&thumbs=1',
  },
  {
    id: 'aura',
    nombre: 'Aura',
    img: 'https://storage.googleapis.com/landing-ciudad-maderas/casas/casas-premium/frame-2-RM2-AURA.png',
    plantas: 'Planta baja',
    recamaras: '2',
    banos: '1',
    features: ['Sala-comedor abierta', 'Cocina con barra', 'Recámara principal con walking clóset'],
    tour: 'https://kuula.co/share/collection/7bdmn?logo=0&info=0&fs=1&vr=1&sd=1&initload=0&thumbs=1',
  },
  {
    id: 'nova',
    nombre: 'Nova',
    img: 'https://storage.googleapis.com/landing-ciudad-maderas/casas/casas-premium/frame-2-RM3-NOVA.png',
    plantas: 'Baja + Alta + Roof',
    recamaras: '3 + opción cuarta en roof',
    banos: '3',
    features: ['Cocina con isla desayunadora', 'Cuarto TV', 'Roof garden', 'Baño en roof'],
    tour: 'https://kuula.co/share/collection/7bKM6?logo=0&info=0&fs=1&vr=1&sd=1&initload=0&thumbs=1',
  },
  {
    id: 'aqua',
    nombre: 'Aqua',
    img: 'https://storage.googleapis.com/landing-ciudad-maderas/casas/casas-premium/frame-2-RM4-AQUA.png',
    plantas: 'Baja + Alta',
    recamaras: '2',
    banos: '2',
    features: ['Recámara principal con walking clóset y balcón', 'Sala TV', 'Patio de servicio', 'Amplios espacios'],
    tour: 'https://kuula.co/share/collection/7bKJz?logo=0&info=0&fs=1&vr=1&sd=1&initload=0&thumbs=1',
  },
  {
    id: 'stella',
    nombre: 'Stella',
    img: 'https://storage.googleapis.com/landing-ciudad-maderas/casas/casas-premium/frame-2-RM5-STELLA.png',
    plantas: 'Baja + Alta',
    recamaras: '3',
    banos: '2',
    features: ['Concepto abierto', 'Recámara principal con walking clóset', 'Terraza en jardín', 'Sala TV'],
    tour: 'https://kuula.co/share/collection/7bn1S?logo=0&info=0&fs=1&vr=1&sd=1&initload=0&thumbs=1',
  },
  {
    id: 'lucero',
    nombre: 'Lucero',
    img: 'https://storage.googleapis.com/landing-ciudad-maderas/casas/casas-premium/frame-2-RM6-LUCERO.png',
    plantas: 'Baja + Alta + Roof',
    recamaras: '3 + opción cuarta en roof',
    banos: '3',
    features: ['Cocina con isla desayunadora', 'Roof garden', 'Baño en roof', 'Amplios espacios'],
    tour: 'https://kuula.co/share/collection/7bHzX?logo=0&info=0&fs=1&vr=1&sd=1&initload=0&thumbs=1',
  },
  {
    id: 'antara',
    nombre: 'Antara',
    img: 'https://storage.googleapis.com/landing-ciudad-maderas/casas/casas-premium/Antara/ANTARA_HD.webp',
    plantas: 'Baja + Alta + Roof',
    recamaras: '3',
    banos: '2 + 1 externo',
    features: ['Recámara principal con walk-in clóset', 'Clóset de blancos', 'Cuarto de lavado en roof', 'Terraza roof'],
    tour: 'https://kuula.co/share/collection/7HR52?logo=0&info=0&fs=1&vr=1&sd=1&initload=0&thumbs=1',
  },
]

const ACABADOS = [
  { icon: '🏠', label: 'Fachada', desc: 'Piedra galarza irregular' },
  { icon: '🪟', label: 'Marcos exteriores', desc: 'Cantera laminada' },
  { icon: '🌿', label: 'Jardín', desc: 'Pasto kikuyo en rollo' },
  { icon: '🚗', label: 'Estacionamiento', desc: 'Loseta de barro natural' },
]

const ACCESORIOS = [
  { cat: 'Generales', items: ['Cisterna 2,800 lts', 'Tanque estacionario', 'Calentador', 'Clósets incluidos'] },
  { cat: 'Baños', items: ['W.C. Castel', 'Lavabos cerámicos', 'Monomandos'] },
  { cat: 'Cocina', items: ['Estufa Mabe', 'Muebles de almacenamiento', 'Cubierta de granito', 'Tarja incluida'] },
]

const PASOS = [
  { num: '01', titulo: 'Asesoría', desc: 'Tu asesor te explica el programa y opciones de financiamiento.' },
  { num: '02', titulo: 'Documentación', desc: 'Elige tu plan y reúne los documentos necesarios.' },
  { num: '03', titulo: 'Modelo', desc: 'Selecciona el modelo de casa que mejor se adapte a ti.' },
  { num: '04', titulo: 'Construcción', desc: 'Iniciamos la construcción de tu nuevo hogar.' },
]

const BedIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M2 4v16M2 8h18a2 2 0 012 2v6H2M2 18h20"/><rect x="6" y="4" width="4" height="4" rx="1"/>
  </svg>
)
const BathIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M9 6 A3 3 0 0 1 6 3 M2 12h20v2a7 7 0 01-7 7H9a7 7 0 01-7-7v-2z"/><path d="M2 12V6a3 3 0 013-3h1"/>
  </svg>
)
const StairsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <polyline points="3 21 3 15 9 15 9 9 15 9 15 3 21 3"/>
  </svg>
)

function scrollToId(id) {
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function CasasPremiumPage() {
  // Activa las animaciones .rev que usa el componente Contacto
  useEffect(() => {
    const obs = new IntersectionObserver(
      es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add('in') }),
      { threshold: 0.08 }
    )
    document.querySelectorAll('.rev').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <div className="cpp-wrap">

      {/* NAV */}
      <nav className="cp-nav">
        <Link to="/" className="cp-nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="cp-logo-capsule">
            <img src="/logo-ciudad-maderas.png" alt="Ciudad Maderas" />
          </div>
        </Link>
        <Link to="/" className="cp-back">← Regresar al inicio</Link>
        <a href="#contacto" className="cp-nav-cta" onClick={e => { e.preventDefault(); scrollToId('#contacto') }}>
          Quiero invertir
        </a>
      </nav>

      {/* HERO */}
      <section className="cpp-hero">
        <div className="cpp-hero-overlay" />
        <div className="cpp-hero-content">
          <p className="cpp-eyebrow">Programa Exclusivo · Solo clientes Ciudad Maderas</p>
          <h1>Construye tu casa con<br /><em>tranquilidad y confianza</em></h1>
          <p className="cpp-hero-sub">La solución que facilita la construcción de tu hogar con financiamiento directo, sin trámites complicados.</p>
          <div className="cpp-hero-actions">
            <a href="#modelos" className="cp-btn-gold" onClick={e => { e.preventDefault(); scrollToId('#modelos') }}>
              Ver los 7 modelos
            </a>
            <a href="#contacto" className="cp-btn-ghost" onClick={e => { e.preventDefault(); scrollToId('#contacto') }}>
              Solicitar información
            </a>
          </div>
        </div>
      </section>

      {/* REQUISITOS */}
      <section className="cpp-req">
        <div className="cpp-req-inner">
          <div className="cpp-req-card">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            <div>
              <strong>Ser cliente de Ciudad Maderas</strong>
              <span>Programa exclusivo para propietarios de terrenos Ciudad Maderas</span>
            </div>
          </div>
          <div className="cpp-req-card">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            <div>
              <strong>Estar al corriente en pagos</strong>
              <span>Mensualidades desde montos accesibles con crédito directo</span>
            </div>
          </div>
        </div>
      </section>

      {/* MODELOS */}
      <section className="cpp-section" id="modelos">
        <div className="cpp-container">
          <p className="cpp-eyebrow-section">7 Modelos disponibles</p>
          <h2 className="cpp-sec-title">Elige el modelo de casa<br /><em>que más te gusta</em></h2>
          <div className="cpp-grid">
            {MODELOS.map(m => (
              <div key={m.id} className="cpp-card">
                <div className="cpp-card-img">
                  <img src={m.img} alt={`Modelo ${m.nombre}`} loading="lazy" />
                  <span className="cpp-card-badge">{m.nombre}</span>
                </div>
                <div className="cpp-card-body">
                  <div className="cpp-card-stats">
                    <span><StairsIcon />{m.plantas}</span>
                    <span><BedIcon />{m.recamaras} rec.</span>
                    <span><BathIcon />{m.banos} baños</span>
                  </div>
                  <ul className="cpp-card-features">
                    {m.features.map((f, i) => <li key={i}>{f}</li>)}
                  </ul>
                  <a href={waModelo(m.nombre)} target="_blank" rel="noreferrer" className="cpp-card-cta">
                    Me interesa este modelo →
                  </a>
                  {m.tour && (
                    <a href={m.tour} target="_blank" rel="noreferrer" className="cpp-card-tour">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 8l4 4-4 4M8 12h8"/></svg>
                      Visita el recorrido virtual
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACABADOS */}
      <section className="cpp-section cpp-alt">
        <div className="cpp-container">
          <p className="cpp-eyebrow-section">Calidad garantizada</p>
          <h2 className="cpp-sec-title">Acabados<br /><em>incluidos</em></h2>
          <div className="cpp-acabados-grid">
            {ACABADOS.map((a, i) => (
              <div key={i} className="cpp-acabado-card">
                <span className="cpp-acabado-icon">{a.icon}</span>
                <strong>{a.label}</strong>
                <p>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACCESORIOS */}
      <section className="cpp-section">
        <div className="cpp-container">
          <p className="cpp-eyebrow-section">Todo incluido</p>
          <h2 className="cpp-sec-title">Accesorios<br /><em>estándar</em></h2>
          <div className="cpp-accesorios-grid">
            {ACCESORIOS.map((a, i) => (
              <div key={i} className="cpp-acc-card">
                <h3>{a.cat}</h3>
                <ul>
                  {a.items.map((item, j) => <li key={j}><span className="cpp-check">✓</span>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section className="cpp-section cpp-alt">
        <div className="cpp-container">
          <p className="cpp-eyebrow-section">Simple y rápido</p>
          <h2 className="cpp-sec-title">Proceso de<br /><em>compra</em></h2>
          <div className="cpp-pasos-grid">
            {PASOS.map((p, i) => (
              <div key={i} className="cpp-paso">
                <span className="cpp-paso-num">{p.num}</span>
                <strong>{p.titulo}</strong>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BANNER MENSUALIDADES */}
      <section className="cpp-mensualidades">
        {/* Panel izquierdo */}
        <div className="cpp-mens-left">
          <span className="cpp-mens-watermark">MENSUALIDADES</span>
          <div className="cpp-mens-content">
            <p className="cpp-mens-desde">DESDE</p>
            <img
              src="https://storage.googleapis.com/landing-ciudad-maderas/casas/casas-premium/casas_casas-premium_frame-5-Mensualidades-2.svg%20"
              alt="Mensualidades desde"
              className="cpp-mens-monto"
            />
            <p className="cpp-mens-nota">*Aplican restricciones.</p>
          </div>
          <div className="cpp-mens-bottom">
            <img
              src="https://storage.googleapis.com/landing-ciudad-maderas/casas/casas-premium/frame-5-Credito-directo-blanco.svg"
              alt="Crédito directo"
              className="cpp-mens-credito"
            />
            <a href="tel:+524433250555" className="cpp-mens-phone">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              443 325 0555
            </a>
          </div>
        </div>
        {/* Panel derecho */}
        <div className="cpp-mens-right">
          <img
            src="https://storage.googleapis.com/landing-ciudad-maderas/casas/casas-premium/frame1-slide-5-1.png"
            alt="Interior casa premium"
            className="cpp-mens-bg"
          />
          <div className="cpp-mens-overlay">
            <p>Siente la <strong>tranquilidad y confianza</strong> que solo <br /><strong>Ciudad Maderas Casas Premium</strong> puede darte y déjate consentir como mereces.</p>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <Contacto />

      <Footer />
    </div>
  )
}
