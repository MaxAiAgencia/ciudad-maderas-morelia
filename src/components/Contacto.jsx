import { useState } from 'react'

const WA_NUM = '524433250555'

const TX = {
  es: {
    eyebrow1: 'Contáctanos',
    title1: <>Hablemos de<br />tu <em>terreno ideal</em></>,
    desc: 'Sin costo ni compromiso. Te asesoramos para encontrar el terreno que mejor se adapte a tus metas de inversión.',
    phone1lbl: 'WhatsApp / Teléfono',
    phone2lbl: 'Teléfono alterno',
    addrlbl: 'Dirección',
    addrval: <>Vicente Guerrero 151 Int 1, Col. Insurgentes<br />CP 58250 · Morelia, Michoacán</>,
    hourlbl: 'Horario de atención',
    hourval: 'Lun–Vie: 9:30am – 6:00pm · Sáb: 10am – 2pm',
    eyebrow2: 'Formulario de contacto',
    title2: <>Envíanos tu<br /><em>solicitud</em></>,
    lname: 'Nombre completo *',
    lphone: 'WhatsApp / Teléfono *',
    lemail: 'Correo electrónico *',
    lcity: 'Ciudad de interés',
    lpago: '¿Cuánto puedes pagar al mes?',
    lmsg: 'Mensaje adicional',
    pname: 'Tu nombre',
    pphone: '+52 443 000 0000',
    pemail: 'correo@ejemplo.com',
    pcity: 'Selecciona una ciudad',
    ppago: 'Selecciona un rango',
    pmsg: '¿Alguna pregunta o comentario?',
    cities: ['Querétaro – Bosques', 'Querétaro – Privada Bosques', 'Querétaro – Corregidora', 'Cancún', 'Mérida', 'Monterrey', 'León', 'Aguascalientes', 'Puebla', 'San Luis Potosí', 'San Miguel de Allende', 'No lo he decidido aún'],
    pagos: ['$1,000 – $2,000 MXN', '$2,000 – $3,500 MXN', '$3,500 – $5,000 MXN', 'Más de $5,000 MXN'],
    btnSend: 'Enviar por WhatsApp',
    btnSent: '✓ Abriendo WhatsApp...',
    waIntro: 'Hola Eduardo, me interesa información sobre terrenos Ciudad Maderas 🏡\n\n',
    waFields: (nombre, tel, email, ciudad, pago, msg) =>
      `*Nombre:* ${nombre}\n*Teléfono:* ${tel}\n*Correo:* ${email}\n*Ciudad de interés:* ${ciudad}\n*Pago mensual aproximado:* ${pago}\n*Mensaje:* ${msg}`,
    waCityDef: 'No especificada',
    waPagoDef: 'No especificado',
    waMsgDef: 'Sin mensaje adicional',
  },
  en: {
    eyebrow1: 'Contact Us',
    title1: <>Let's talk about<br />your <em>ideal land</em></>,
    desc: 'No cost or commitment. We advise you to find the land that best fits your investment goals.',
    phone1lbl: 'WhatsApp / Phone',
    phone2lbl: 'Alternate Phone',
    addrlbl: 'Address',
    addrval: <>Vicente Guerrero 151 Int 1, Col. Insurgentes<br />CP 58250 · Morelia, Michoacán</>,
    hourlbl: 'Office Hours',
    hourval: 'Mon–Fri: 9:30am – 6:00pm · Sat: 10am – 2pm',
    eyebrow2: 'Contact Form',
    title2: <>Send us your<br /><em>request</em></>,
    lname: 'Full name *',
    lphone: 'WhatsApp / Phone *',
    lemail: 'Email address *',
    lcity: 'City of interest',
    lpago: 'How much can you pay per month?',
    lmsg: 'Additional message',
    pname: 'Your name',
    pphone: '+52 443 000 0000',
    pemail: 'email@example.com',
    pcity: 'Select a city',
    ppago: 'Select a range',
    pmsg: 'Any questions or comments?',
    cities: ['Querétaro – Bosques', 'Querétaro – Privada Bosques', 'Querétaro – Corregidora', 'Cancún', 'Mérida', 'Monterrey', 'León', 'Aguascalientes', 'Puebla', 'San Luis Potosí', 'San Miguel de Allende', "I haven't decided yet"],
    pagos: ['$1,000 – $2,000 MXN', '$2,000 – $3,500 MXN', '$3,500 – $5,000 MXN', 'More than $5,000 MXN'],
    btnSend: 'Send via WhatsApp',
    btnSent: '✓ Opening WhatsApp...',
    waIntro: 'Hello Eduardo, I am interested in information about Ciudad Maderas land 🏡\n\n',
    waFields: (nombre, tel, email, ciudad, pago, msg) =>
      `*Name:* ${nombre}\n*Phone:* ${tel}\n*Email:* ${email}\n*City of interest:* ${ciudad}\n*Approximate monthly payment:* ${pago}\n*Message:* ${msg}`,
    waCityDef: 'Not specified',
    waPagoDef: 'Not specified',
    waMsgDef: 'No additional message',
  },
}

const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.07 1.18 2 2 0 012.06 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
  </svg>
)

export default function Contacto({ lang = 'es' }) {
  const [nombre, setNombre] = useState('')
  const [tel, setTel] = useState('')
  const [email, setEmail] = useState('')
  const [ciudad, setCiudad] = useState('')
  const [pago, setPago] = useState('')
  const [msg, setMsg] = useState('')
  const [sent, setSent] = useState(false)
  const tx = TX[lang]

  function submitForm(e) {
    e.preventDefault()
    const c = ciudad || tx.waCityDef
    const p = pago || tx.waPagoDef
    const m = msg || tx.waMsgDef
    const text = tx.waIntro + tx.waFields(nombre, tel, email, c, p, m)
    window.open(`https://wa.me/${WA_NUM}?text=${encodeURIComponent(text)}`, '_blank')
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section className="section" id="contacto">
      <div className="contacto-wrap">

        <div className="rev">
          <p className="eyebrow">{tx.eyebrow1}</p>
          <h2 className="sec-title">{tx.title1}</h2>
          <p style={{ fontSize: '.95rem', fontWeight: 300, lineHeight: 1.9, color: 'var(--muted)', margin: '1.2rem 0 1.5rem' }}>
            {tx.desc}
          </p>
          <div className="contact-cards">
            <a href="tel:+524433250555" className="contact-card">
              <PhoneIcon /><div><div className="label">{tx.phone1lbl}</div><div className="value">443 325 0555</div></div>
            </a>
            <a href="tel:+524433685399" className="contact-card">
              <PhoneIcon /><div><div className="label">{tx.phone2lbl}</div><div className="value">443 368 5399</div></div>
            </a>
            <div className="contact-card">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <div><div className="label">{tx.addrlbl}</div><div className="value">{tx.addrval}</div></div>
            </div>
            <div className="contact-card">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              <div><div className="label">{tx.hourlbl}</div><div className="value">{tx.hourval}</div></div>
            </div>
          </div>
        </div>

        <div className="rev">
          <p className="eyebrow">{tx.eyebrow2}</p>
          <h2 className="sec-title">{tx.title2}</h2>
          <form className="form-wrap" style={{ marginTop: '1.2rem' }} onSubmit={submitForm}>
            <div className="frow">
              <div className="fg"><label>{tx.lname}</label><input type="text" placeholder={tx.pname} value={nombre} onChange={e => setNombre(e.target.value)} required /></div>
              <div className="fg"><label>{tx.lphone}</label><input type="tel" placeholder={tx.pphone} value={tel} onChange={e => setTel(e.target.value)} required /></div>
            </div>
            <div className="fg"><label>{tx.lemail}</label><input type="email" placeholder={tx.pemail} value={email} onChange={e => setEmail(e.target.value)} required /></div>
            <div className="fg">
              <label>{tx.lcity}</label>
              <select value={ciudad} onChange={e => setCiudad(e.target.value)}>
                <option value="">{tx.pcity}</option>
                {tx.cities.map(c => <option key={c}>{c}</option>)}
              </select>
            </div>
            <div className="fg">
              <label>{tx.lpago}</label>
              <select value={pago} onChange={e => setPago(e.target.value)}>
                <option value="">{tx.ppago}</option>
                {tx.pagos.map(p => <option key={p}>{p}</option>)}
              </select>
            </div>
            <div className="fg"><label>{tx.lmsg}</label><textarea rows={3} placeholder={tx.pmsg} value={msg} onChange={e => setMsg(e.target.value)} /></div>
            <button type="submit" className="btn-submit" style={sent ? { background: '#1a5c1a', color: '#a8e6a3' } : {}}>
              {sent ? tx.btnSent : (
                <>
                  {tx.btnSend}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                </>
              )}
            </button>
          </form>
        </div>

      </div>
    </section>
  )
}
