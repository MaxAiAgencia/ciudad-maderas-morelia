import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CIUDADES } from '../data/ciudadesData'

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dropOpen, setDropOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function scrollTo(id) {
    const target = document.querySelector(id)
    if (target) {
      const navH = document.getElementById('mainNav').offsetHeight
      window.scrollTo({ top: target.offsetTop - navH, behavior: 'smooth' })
    }
    setMenuOpen(false)
    setDropOpen(false)
  }

  const menuStyle = menuOpen
    ? { display: 'flex', flexDirection: 'column', position: 'absolute', top: '100%', left: 0, right: 0, background: 'var(--dark2)', padding: '1.5rem 5vw', gap: '1.2rem', borderBottom: '1px solid var(--border)', zIndex: 199 }
    : {}

  return (
    <nav id="mainNav" className={scrolled ? 'scrolled' : ''}>
      <div className="nav-logo">
        <div style={{ background: 'rgba(255,255,255,0.92)', padding: '5px 14px', borderRadius: '6px' }}>
          <img
            src="/logo-ciudad-maderas.png"
            alt="Ciudad Maderas"
            onError={e => { e.target.closest('div').style.background = 'none'; e.target.style.display = 'none'; document.getElementById('logoFallback').style.display = 'block' }}
          />
        </div>
        <span className="nav-logo-fallback" id="logoFallback">Ciudad<span>Maderas</span></span>
      </div>

      <ul className="nav-links" style={menuStyle}>
        <li><a href="#ventajas" onClick={e => { e.preventDefault(); scrollTo('#ventajas') }}>Ventajas</a></li>

        {/* DROPDOWN CIUDADES */}
        <li
          className="nav-dropdown"
          onMouseEnter={() => setDropOpen(true)}
          onMouseLeave={() => setDropOpen(false)}
        >
          <a
            href="#ciudades"
            onClick={e => { e.preventDefault(); scrollTo('#ciudades') }}
            className="nav-dropdown-trigger"
          >
            Ciudades
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ marginLeft: '4px' }}><polyline points="6 9 12 15 18 9"/></svg>
          </a>
          {dropOpen && (
            <ul className="nav-dropdown-menu">
              {CIUDADES.map(c => (
                <li key={c.slug}>
                  <Link to={`/ciudades/${c.slug}`} onClick={() => setDropOpen(false)}>
                    <span>{c.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}

          {/* Mobile: expandable list */}
          {menuOpen && (
            <ul className="nav-drop-mobile">
              {CIUDADES.map(c => (
                <li key={c.slug}>
                  <Link to={`/ciudades/${c.slug}`} onClick={() => { setMenuOpen(false); setDropOpen(false) }}>
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>

        <li><a href="#credito" onClick={e => { e.preventDefault(); scrollTo('#credito') }}>Crédito</a></li>
        <li><a href="#contacto" onClick={e => { e.preventDefault(); scrollTo('#contacto') }}>Contacto</a></li>
      </ul>

      <a href="#contacto" className="nav-cta" onClick={e => { e.preventDefault(); scrollTo('#contacto') }}>
        Quiero invertir
      </a>

      <button className="hamburger" onClick={() => setMenuOpen(v => !v)} aria-label="Menú">
        <span /><span /><span />
      </button>
    </nav>
  )
}
