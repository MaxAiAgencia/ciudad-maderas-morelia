export default function Contadores() {
  return (
    <>
      {/* Desktop: video webm de contadores */}
      <div className="contadores-wrap">
        <video
          src="https://storage.googleapis.com/landing-ciudad-maderas/somos/Contadores%20VF2.webm"
          autoPlay
          loop
          muted
          playsInline
          className="contadores-video"
        />
      </div>

      {/* Mobile: stats con texto y animación de scroll */}
      <div className="contadores-mobile">
        <div className="cm-stat rev">
          <div className="cm-num-row">
            <span className="cm-prefix">Más<br/>de</span>
            <span className="cm-num">40</span>
          </div>
          <p className="cm-lbl">Años de experiencia<br/>en el sector</p>
        </div>

        <div className="cm-stat rev">
          <span className="cm-num">+124,000</span>
          <p className="cm-lbl">Lotes habitacionales y comerciales</p>
        </div>

        <div className="cm-stats-row rev">
          <div className="cm-stat">
            <span className="cm-num">28</span>
            <p className="cm-lbl">Desarrollos en<br/>toda la república</p>
          </div>
          <div className="cm-stat">
            <span className="cm-num">+30</span>
            <p className="cm-lbl">Amenidades de lujo<br/>en cada desarrollo</p>
          </div>
        </div>
      </div>
    </>
  )
}
