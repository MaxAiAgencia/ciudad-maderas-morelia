import { useEffect, useRef } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Ventajas from './components/Ventajas'
import Ciudades from './components/Ciudades'
import Credito from './components/Credito'
import VideoSection from './components/VideoSection'
import Contacto from './components/Contacto'
import Footer from './components/Footer'

export default function App() {
  const pollingRef = useRef(null)
  const callListenerRef = useRef(false)

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

  // ElevenLabs: polling + client tool WhatsApp
  useEffect(() => {
    let callActive = false

    // ✅ MÉTODO OFICIAL: inyectar clientTools en el evento 'call'
    const handleCall = (event) => {
      console.log('📞 llamada iniciada, inyectando client tools...')
      event.detail.config.clientTools = {
        redirect_whatsapp: () => {
          console.log('✅ redirect_whatsapp ejecutado!')
          window.open(
            'https://wa.me/524437919303?text=Hola,%20me%20interesa%20información%20sobre%20los%20terrenos%20en%20Ciudad%20Maderas',
            '_blank'
          )
        }
      }
    }

    const checkWidget = () => {
      const widget = document.querySelector('elevenlabs-convai')
      if (!widget) return

      // Registrar listener de call solo una vez
      if (!callListenerRef.current) {
        widget.addEventListener('elevenlabs-convai:call', handleCall)
        callListenerRef.current = true
        console.log('✅ listener de call registrado')
      }

      if (!widget.shadowRoot) return

      const endBtn = widget.shadowRoot.querySelector('button[aria-label="End"]')
      const btn = document.getElementById('btn-colgar')

      if (endBtn && !callActive) {
        callActive = true
        if (btn) btn.style.display = 'flex'
      } else if (!endBtn && callActive) {
        callActive = false
        if (btn) btn.style.display = 'none'
      }
    }

    pollingRef.current = setInterval(checkWidget, 500)

    return () => {
      clearInterval(pollingRef.current)
      const widget = document.querySelector('elevenlabs-convai')
      if (widget) widget.removeEventListener('elevenlabs-convai:call', handleCall)
      callListenerRef.current = false
    }
  }, [])

  const colgarLlamada = () => {
    const widget = document.querySelector('elevenlabs-convai')
    if (!widget || !widget.shadowRoot) return
    const endBtn = widget.shadowRoot.querySelector('button[aria-label="End"]')
    if (endBtn) endBtn.click()
  }

  return (
    <>
      <div className="cur" id="cur" />
      <div className="cur-ring" id="curRing" />

      <elevenlabs-convai agent-id="agent_9201kjge18fcfvdr98yrc223rqwk" />

      <button
        id="btn-colgar"
        onClick={colgarLlamada}
        style={{
          display: 'none',
          alignItems: 'center',
          gap: '8px',
          position: 'fixed',
          bottom: '90px',
          right: '16px',
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
      <VideoSection />
      <Contacto />
      <Footer />
    </>
  )
}
