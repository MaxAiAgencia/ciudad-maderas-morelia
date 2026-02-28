const VENTAJAS = [
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    title: 'Crédito Directo sin Buró',
    desc: 'Sin revisión de buró de crédito ni aval. Financiamiento directo con el desarrollador hasta 30 años.',
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>,
    title: 'Desde $1,386 al mes',
    desc: 'Mensualidades accesibles con enganche desde el 1%. Sin sorpresas ni letras chiquitas.',
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>,
    title: '+30 Amenidades incluidas',
    desc: 'Parques, canchas, áreas verdes, ciclopista, alberca y más. Todo desde el primer día.',
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>,
    title: 'Escrituras y Seguridad Jurídica',
    desc: 'Todos los terrenos con escrituras limpias y proceso legal verificado desde el inicio.',
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>,
    title: 'Ciudades con Alta Plusvalía',
    desc: 'Desarrollos en Querétaro, Cancún, Mérida, Monterrey y más, con crecimiento comprobado.',
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>,
    title: 'Asesoría Personal en Morelia',
    desc: 'Eduardo Sosa te acompaña de principio a fin, en persona, en nuestra oficina en Morelia.',
  },
]

export default function Ventajas() {
  return (
    <section className="section alt" id="ventajas">
      <div className="rev">
        <p className="eyebrow">Por qué elegirnos</p>
        <h2 className="sec-title">Ventajas que<br /><em>marcan la diferencia</em></h2>
      </div>
      <div className="ventajas-grid rev">
        {VENTAJAS.map((v, i) => (
          <div className="vent-card" key={i}>
            <div className="vent-icon">{v.icon}</div>
            <div className="vent-title">{v.title}</div>
            <div className="vent-desc">{v.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
