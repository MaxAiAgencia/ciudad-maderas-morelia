export default function VideoSection({ lang = 'es' }) {
  const isEn = lang === 'en'
  return (
    <section className="section alt" id="video">
      <div className="rev" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <p className="eyebrow" style={{ justifyContent: 'center' }}>
          {isEn ? 'We Are Ciudad Maderas' : 'Somos Ciudad Maderas'}
        </p>
        <h2 className="sec-title">
          {isEn ? <>Your best<br /><em>investment</em></> : <>Tu mejor<br /><em>inversión</em></>}
        </h2>
      </div>
      <div className="video-wrap rev">
        <div className="video-container">
          {isEn ? (
            <video
              src="/VideoMaderasIngles.mp4"
              controls
              playsInline
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', border: 0 }}
            />
          ) : (
            <iframe
              src="https://www.youtube.com/embed/FLqeNQy_NHk"
              title="Ciudad Maderas"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          )}
        </div>
      </div>
    </section>
  )
}
