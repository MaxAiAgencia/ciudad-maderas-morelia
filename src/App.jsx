import { useEffect, useRef } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Ventajas from './components/Ventajas'
import Ciudades from './components/Ciudades'
import Credito from './components/Credito'
import Contacto from './components/Contacto'
import Footer from './components/Footer'

export default function App() {
  const pollingRef = useRef(null)

  // Custom cursor
  useEffect(() => {
    const cur = document.getElementById('cur')
    const ring = document.getElementById('curRing')
    let mx = 0, my = 0, rx = 0, ry = 0, rafId
    const onMove = e => { mx = e.clientX; my = e.clientY }
    window.addEventListener('mousemove', onMove)
    const tick = () => {
      rx += (mx - rx) * 0.15
      ry += (my - ry) * 0.15
      if (cur) cur.style.cssText = `left:${mx}px;top:${my}px`
      if (ring) ring.style.cssText = `left:${rx}px;top:${ry}px`
      rafId = requestAnimationFrame(tick)
    }
    rafId = requestAnimationFrame(tick)
    return () => { window.removeEventListener('mousemove', onMove); cancelAnimationFrame(rafId) }
  }, [])

  // Intersection Observer
  useEffect(() => {
    const obs = new IntersectionObserver(
      es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add('in') }),
      { threshold: 0.08 }
    )
    document.querySelectorAll('.rev').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  // ElevenLabs: polling + postMessage
  useEffect(() => {
    let callActive = false

    const checkWidget = () => {
      const widget = document.querySelector('elevenlabs-convai')
      if (!widget || !widget.shadowRoot) return

      // LOG: ver todos los botones en el shadow DOM
      const allBtns = widget.shadowRoot.querySelectorAll('button')
      if (allBtns.length > 0) {
        allBtns.forEach(b => {
          console.log('SHADOW BTN:', b.getAttribute('aria-label'), b.textContent.trim(), b.className)
        })
      }

      // Buscar botón de colgar con múltiples selectores posibles
      const endBtn =
        widget.shadowRoot.querySelector('button[aria-label="end"]') ||
        widget.shadowRoot.querySelector('button[aria-label="End call"]') ||
        widget.shadowRoot.querySelector('button[aria-label="Hang up"]') ||
        widget.shadowRoot.querySelector('button[data-testid="end-call"]') ||
        [...widget.shadowRoot.querySelectorAll('button')].find(b =>
          b.textContent.toLowerCase().includes('end') ||
          b.textContent.toLowerCase().includes('hang') ||
          b.textContent.toLowerCase().includes('colgar')
        )

      const btn = document.getElementById('btn-colgar')

      if (endBtn && !callActive) {
        callActive = true
        if (btn) btn.style.display = 'flex'
        console.log('LLAMADA ACTIVA - botón encontrado:', endBtn)
      } else if (!endBtn && callActive) {
        callActive = false
        if (btn) btn.style.display = 'none'
        console.log('LLAMADA TERMINADA')
      }
    }

    const handleMessage = (e) => {
      try {
        const raw = typeof e.data === 'string' ? e.data : JSON.stringify(e.data)
        console.log('POSTMESSAGE:', raw.substring(0, 200))
        const data = typeof e.data === 'string' ? JSON.parse(e.data) : e.data
        if (!data) return
        if (raw.includes('redirect_whatsapp') || raw.includes('whatsapp')) {
          window.open(
            'https://wa.me/524437919303?text=Hola,%20me%20interesa%20información%20sobre%20los%20terrenos%20en%20Ciudad%20Maderas',
            '_blank'
          )
        }
      } catch (_) {}
    }

    window.addEventListener('message', handleMessage)
    pollingRef.current = setInterval(checkWidget, 500)

    return () => {
      window.removeEventListener('message', handleMessage)
      clearInterval(pollingRef.current)
    }
  }, [])

  const colgarLlamada = () => {
    const widget = document.querySelector('elevenlabs-convai')
    if (!widget || !widget.shadowRoot) return
    const allBtns = widget.shadowRoot.querySelectorAll('button')
    // Intentar todos los botones posibles
    const endBtn =
      widget.shadowRoot.querySelector('button[aria-label="end"]') ||
      widget.shadowRoot.querySelector('button[aria-label="End call"]') ||
      [...allBtns].find(b => b.textContent.toLowerCase().includes('end'))
    if (endBtn) endBtn.click()
    else console.warn('No se encontró botón end, botones disponibles:', [...allBtns].map(b => b.getAttribute('aria-label')))
  }

  return (
    <>
      <div className="cur" id="cur" />
      <div className="cur-ring" id="curRing" />

      {/* Widget ElevenLabs */}
      <elevenlabs-convai agent-id="agent_9201kjge18fcfvdr98yrc223rqwk" />

      {/* Botón colgar — VISIBLE SIEMPRE para prueba */}
      <button
        id="btn-colgar"
        onClick={colgarLlamada}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          position: 'fixed',
          bottom: '100px',
          right: '20px',
          background: '#e53935',
          color: 'white',
          padding: '14px 28px',
          fontSize: '18px',
          fontWeight: 'bold',
          borderRadius: '50px',
          border: 'none',
          cursor: 'pointer',
          zIndex: 9999,
          boxShadow: '0 4px 16px rgba(229,57,53,0.5)'
        }}
      >
        📞 Terminar llamada
      </button>

      <Nav />
      <Hero />
      <Ventajas />
      <Ciudades />
      <Credito />
      <Contacto />
      <Footer />
    </>
  )
}
