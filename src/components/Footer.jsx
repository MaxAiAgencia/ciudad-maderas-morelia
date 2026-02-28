import { maxaiLogo } from '../assets/maxai-logo'

export default function Footer() {
  return (
    <footer>
      {/* Izquierda: logo Ciudad Maderas */}
      <div className="foot-logo" style={{ flex: 1 }}>
        <img
          src="https://maderasrealstate.com/wp-content/uploads/2025/07/CIUDAD-MADERAS-1.png"
          alt="Ciudad Maderas"
          onError={e => { e.target.style.display = 'none'; document.getElementById('footFallback').style.display = 'inline' }}
        />
        <span style={{ display: 'none', fontFamily: "'Playfair Display',serif", fontSize: '1.1rem', color: 'var(--cream)' }} id="footFallback">
          Ciudad<span style={{ color: 'var(--gold)' }}>Maderas</span>
        </span>
      </div>

      {/* Centro: texto "Creado por MaxAI" + logo */}
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '.5rem' }}>
        <span style={{ fontSize: '.68rem', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--muted)' }}>
          Creado por MaxAI
        </span>
        <img src={maxaiLogo} alt="MaxAI" style={{ height: '22px', objectFit: 'contain', filter: 'grayscale(1) brightness(0.6)' }} />
      </div>

      {/* Derecha: espacio vacío para balance visual */}
      <div style={{ flex: 1 }} />
    </footer>
  )
}
