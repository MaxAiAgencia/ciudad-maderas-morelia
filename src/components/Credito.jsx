const PILARES = {
  es: [
    {
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>,
      title: 'Sin revisión de Buró de Crédito',
      sub: 'Aplicas aunque hayas tenido problemas crediticios anteriores',
    },
    {
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
      title: 'Sin Aval requerido',
      sub: 'El trámite es completamente individual, sin necesitar a terceros',
    },
    {
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>,
      title: 'Mensualidades desde $1,106',
      sub: 'Planes adaptados a tu capacidad de pago',
    },
    {
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
      title: 'Enganche del 1 al 10%',
      sub: 'El costo de entrada más bajo del mercado inmobiliario en México',
    },
    {
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
      title: 'Plazo hasta 30 años',
      sub: 'El plazo más largo del mercado para que tu inversión sea sostenible',
    },
  ],
  en: [
    {
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>,
      title: 'No Credit Check Required',
      sub: 'You can apply even if you have had previous credit issues',
    },
    {
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
      title: 'No Guarantor Required',
      sub: 'The process is completely individual, no third parties needed',
    },
    {
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>,
      title: 'Monthly Payments from $1,106',
      sub: 'Plans adapted to your payment capacity',
    },
    {
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
      title: 'Down Payment from 1 to 10%',
      sub: 'The lowest entry cost in the Mexican real estate market',
    },
    {
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
      title: 'Terms Up to 30 Years',
      sub: 'The longest term on the market to make your investment sustainable',
    },
  ],
}

const TX = {
  es: { eyebrow: 'Condiciones de crédito', title: <>La forma más<br /><em>accesible</em> de invertir<br />en terreno</>, cta: 'Consultar disponibilidad', box: 'Ciudad Maderas ofrece el único crédito inmobiliario directo del mercado sin revisión de buró y sin necesidad de aval. Fraccionamiento privado con todas las amenidades incluidas desde el primer día.' },
  en: { eyebrow: 'Financing Terms', title: <>The most<br /><em>accessible</em> way to invest<br />in land</>, cta: 'Check Availability', box: 'Ciudad Maderas offers the only direct real estate financing on the market with no credit check and no guarantor required. A private gated community with all amenities included from day one.' },
}

function scrollTo(id) {
  const target = document.querySelector(id)
  if (target) {
    const navH = document.getElementById('mainNav').offsetHeight
    window.scrollTo({ top: target.offsetTop - navH, behavior: 'smooth' })
  }
}

export default function Credito({ lang = 'es' }) {
  const tx = TX[lang]
  const pilares = PILARES[lang]
  return (
    <section className="section alt" id="credito">
      <div className="credito-layout rev">
        <div className="credito-visual">
          <img
            className="credito-img"
            src="https://maderasrealstate.com/wp-content/uploads/2025/06/WhatsApp-Image-2025-01-03-at-11.53.12-AM-850x570.jpeg"
            alt="Desarrollo Ciudad Maderas"
            loading="lazy"
          />
          <div className="credito-badge">
            <span className="big">30</span>
            <span className="small">{lang === 'en' ? <>Years of<br />financing</> : <>Años de<br />crédito</>}</span>
          </div>
          <div className="credito-box">
            <p>{tx.box}</p>
          </div>
        </div>

        <div>
          <p className="eyebrow">{tx.eyebrow}</p>
          <h2 className="sec-title">{tx.title}</h2>
          <div className="pilares">
            {pilares.map((p, i) => (
              <div className="pilar" key={i}>
                <div className="pilar-icon">{p.icon}</div>
                <div className="pilar-text">
                  <div className="t">{p.title}</div>
                  <div className="s">{p.sub}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '2rem' }}>
            <a href="#contacto" className="btn-gold" onClick={e => { e.preventDefault(); scrollTo('#contacto') }}>
              {tx.cta}
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
