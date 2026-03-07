export default function VideoSection() {
  return (
    <section className="section alt" id="video">
      <div className="rev" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <p className="eyebrow" style={{ justifyContent: 'center' }}>Somos Ciudad Maderas</p>
        <h2 className="sec-title">Tu mejor<br /><em>inversión</em></h2>
      </div>
      <div className="video-wrap rev">
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/EJuf3Ar0iF0"
            title="Ciudad Maderas"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}
