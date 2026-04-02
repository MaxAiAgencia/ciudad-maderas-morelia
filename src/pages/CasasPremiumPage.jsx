import { Link } from 'react-router-dom'
import Contacto from '../components/Contacto'
import Footer from '../components/Footer'
import './CasasPremiumPage.css'

const MODELOS = [
  {
    id: 'alba',
    nombre: 'Alba',
    img: 'https://storage.googleapis.com/landing-ciudad-maderas/casas/casas-premium/frame-2-RM1-ALBA.png',
    plantas: 'Baja + Roof',
    recamaras: '2 + multiusos',
    banos: '1½',
    features: ['Sala-comedor abierta', 'Cocina con barra', 'Cuarto de servicio', 'Roof con opción pérgola'],
  },
  {
    id: 'aura',
    nombre: 'Aura',
    img: 'https://storage.googleapis.com/landing-ciudad-maderas/casas/casas-premium/frame-2-RM2-AURA.png',
    plantas: 'Planta baja',
    recamaras: '2',
    banos: '1',
    features: ['Sala-comedor abierta', 'Cocina con barra', 'Recámara principal con walking clóset'],
  },
  {
    id: 'nova',
    nombre: 'Nova',
    img: 'https://storage.googleapis.com/landing-ciudad-maderas/casas/casas-premium/frame-2-RM3-NOVA.png',
    plantas: 'Baja + Alta + Roof',
    recamaras: '3 + opción cuarta en roof',
    banos: '3',
    features: ['Cocina con isla desayunadora', 'Cuarto TV', 'Roof garden', 'Baño en roof'],
  },
  {
    id: 'aqua',
    nombre: 'Aqua',
    img: 'https://storage.googleapis.com/landing-ciudad-maderas/casas/casas-premium/frame-2-RM4-AQUA.png',
    plantas: 'Baja + Alta',
    recamaras: '2',
    banos: '2',
    features: ['Recámara principal con walking clóset y balcón', 'Sala TV', 'Patio de servicio', 'Amplios espacios'],
  },
  {
    id: 'stella',
    nombre: 'Stella',
    img: 'https://storage.googleapis.com/landing-ciudad-maderas/casas/casas-premium/frame-2-RM5-STELLA.png',
    plantas: 'Baja + Alta',
    recamaras: '3',
    banos: '2',
    features: ['Concepto abierto', 'Recámara principal con walking clóset', 'Terraza en jardín', 'Sala TV'],
  },
  {
    id: 'lucero',
    nombre: 'Lucero',
    img: 'https://storage.googleapis.com/landing-ciudad-maderas/casas/casas-premium/frame-2-RM6-LUCERO.png',
    plantas: 'Baja + Alta + Roof',
    recamaras: '3 + opción cuarta en roof',
    banos: '3',
    features: ['Cocina con isla desayunadora', 'Roof garden', 'Baño en roof', 'Amplios espacios'],
  },
  {
    id: 'antara',
    nombre: 'Antara',
    img: 'https://storage.googleapis.com/landing-ciudad-maderas/casas/casas-premium/Antara/ANTARA_HD.webp',
    plantas: 'Baja + Alta + Roof',
    recamaras: '3',
    banos: '2 + 1 externo',
    features: ['Recámara principal con walk-in clóset', 'Clóset de blancos', 'Cuarto de lavado en roof', 'Terraza roof'],
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

export default function CasasPremiumPage() {
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
        <a href="#contacto" className="cp-nav-cta" onClick={e => { e.preventDefault(); document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' }) }}>
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
            <a href="#modelos" className="cp-btn-gold" onClick={e => { e.preventDefault(); document.querySelector('#modelos')?.scrollIntoView({ behavior: 'smooth' }) }}>
              Ver los 7 modelos
            </a>
            <a href="#contacto" className="cp-btn-ghost" onClick={e => { e.preventDefault(); document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' }) }}>
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
                  <a
                    href="#contacto"
                    className="cpp-card-cta"
                    onClick={e => { e.preventDefault(); document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' }) }}
                  >
                    Me interesa este modelo →
                  </a>
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

      {/* CONTACTO */}
      <Contacto />

      <Footer />
    </div>
  )
}
