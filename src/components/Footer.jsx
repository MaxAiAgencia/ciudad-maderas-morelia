import { maxaiLogo } from '../assets/maxai-logo'

export default function Footer() {
  return (
    <footer>
      {/* Izquierda: logo Ciudad Maderas */}
      <div className="foot-logo" style={{ flex: 1 }}>
        <div style={{ background: 'rgba(255,255,255,0.92)', padding: '4px 12px', borderRadius: '5px', display: 'inline-flex' }}>
          <img
            src="/logo-ciudad-maderas.png"
            alt="Ciudad Maderas"
            onError={e => { e.target.closest('div').style.background = 'none'; e.target.style.display = 'none'; document.getElementById('footFallback').style.display = 'inline' }}
          />
        </div>
        <span style={{ display: 'none', fontFamily: "'Playfair Display',serif", fontSize: '1.1rem', color: 'var(--cream)' }} id="footFallback">
          Ciudad<span style={{ color: 'var(--gold)' }}>Maderas</span>
        </span>
      </div>

      {/* Centro: Creado con ❤️ + logo MaxAI en blanco */}
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '.4rem' }}>
        <span style={{ fontSize: '.68rem', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--muted)' }}>
          Creado con
        </span>
        <span style={{ color: '#e05252', fontSize: '.85rem', lineHeight: 1 }}>♥</span>
        <span style={{ fontSize: '.68rem', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--muted)' }}>
          por
        </span>
        <img src={maxaiLogo} alt="MaxAI" style={{ height: '20px', objectFit: 'contain', filter: 'brightness(0) invert(1)', opacity: 0.7 }} />
      </div>

      {/* Derecha: espacio vacío para balance visual */}
      <div style={{ flex: 1 }} />
    </footer>
  )
}
