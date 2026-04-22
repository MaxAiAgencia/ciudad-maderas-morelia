export default function Contadores({ lang = 'es' }) {
  const isEn = lang === 'en'
  return (
    <>
      {/* Desktop: video webm de contadores (solo versión ES — video tiene texto en español) */}
      {!isEn && (
        <div className="contadores-wrap">
          <video
            src="https://storage.googleapis.com/landing-ciudad-maderas/somos/Contadores%20VF2.webm"
            autoPlay loop muted playsInline
            className="contadores-video"
          />
        </div>
      )}

      {/* Mobile (ES) y todo (EN): stats con texto y animación de scroll */}
      <div className={`contadores-mobile${isEn ? ' contadores-all-sizes' : ''}`}>
        <div className="cm-stat rev">
          <div className="cm-num-row">
            <span className="cm-prefix">{isEn ? 'More\nthan' : 'Más\nde'}</span>
            <span className="cm-num">40</span>
          </div>
          <p className="cm-lbl">
            {isEn ? <>Years of experience<br />in the sector</> : <>Años de experiencia<br />en el sector</>}
          </p>
        </div>

        <div className="cm-stat rev">
          <span className="cm-num">+124,000</span>
          <p className="cm-lbl">
            {isEn ? 'Satisfied Clients' : 'Clientes Satisfechos'}
          </p>
        </div>

        <div className="cm-stat rev">
          <span className="cm-num">+60,000</span>
          <p className="cm-lbl">
            {isEn ? 'Lots Delivered' : 'Terrenos entregados'}
          </p>
        </div>

        <div className="cm-stats-row rev">
          <div className="cm-stat">
            <span className="cm-num">34</span>
            <p className="cm-lbl">
              {isEn ? <>Developments across<br />Mexico</> : <>Desarrollos en<br />toda la república</>}
            </p>
          </div>
          <div className="cm-stat">
            <span className="cm-num">+30</span>
            <p className="cm-lbl">
              {isEn ? <>Luxury amenities<br />per development</> : <>Amenidades de lujo<br />en cada desarrollo</>}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
