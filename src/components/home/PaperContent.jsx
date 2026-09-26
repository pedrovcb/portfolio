import NavCard from './NavCard.jsx'
import SocialLinks from './SocialLinks.jsx'

function PaperContent() {
  return (
    <>
      {/* Headline (não o do lollapalooza) */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
        <h1 style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 'normal', letterSpacing: '1px' }}>
          Pedro Bedor
        </h1>
        <img
          src="/images/cameraIcon.png"
          alt=""
          aria-hidden="true"
          style={{ width: '20px', height: '20px' }}
        />
      </div>

      {/* Foto e fitinhas nos cantos */}
      <div style={{ position: 'relative', width: '140px', marginBottom: '16px', alignSelf: 'flex-end' }}>
        <img
          src="/images/pedroPhoto.jpg"
          alt="Pedro Bedor"
          style={{ width: '100%', borderRadius: '2px' }}
        />
        <img
          src="/images/tapeCorner.png"
          alt=""
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '-10px',
            left: '-8px',
            width: '36px',
            transform: 'rotate(-12deg)',
            opacity: 0.85,
          }}
        />
        <img
          src="/images/tapeCorner.png"
          alt=""
          aria-hidden="true"
          style={{
            position: 'absolute',
            bottom: '-8px',
            right: '-6px',
            width: '36px',
            transform: 'rotate(10deg)',
            opacity: 0.85,
          }}
        />
      </div>

      {/* Minibio */}
      <p style={{ fontSize: '14px', textAlign: 'center', marginBottom: '8px', maxWidth: '300px' }}>
        Computer Science Student and Game Developer.
      </p>

      {/* Divisor */}
      <hr style={{ width: '80%', border: 'none', borderTop: '1px solid #b5a892', margin: '8px 0 20px' }} />

      {/* Nav Cards */}
      <div style={{ display: 'flex', gap: '16px', width: '100%', marginBottom: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <NavCard
          number="01"
          icon="/images/penIcon.png"
          label="About Me"
          href="/about"
        />
        <NavCard
          number="02"
          icon="/images/laptopIcon.png"
          label="Projects"
          href="/projects"
        />
      </div>

      {/* Links para Redes Sociais */}
      <SocialLinks />

      {/* Selos */}
      <div style={{ display: 'flex', gap: '12px', marginTop: '20px', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
        <img src="/images/seloBrasil.png" alt="" style={{ width: '50px' }} />
        <img src="/images/seloFall.png" alt="" style={{ width: '45px' }} />
        <img src="/images/seloGato.png" alt="" style={{ width: '50px' }} />
      </div>
    </>
  )
}

export default PaperContent
