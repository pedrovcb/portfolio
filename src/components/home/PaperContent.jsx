import NavCard from './NavCard.jsx'
import SocialLinks from './SocialLinks.jsx'

function PaperContent() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>

      {/* COLUNA ESQUERDA — nome + câmera + divisor + tagline */}
      <div
        style={{
          position: 'absolute',
          top: '8.5%',
          left: '5%',
          width: '42%',
        }}
      >
        <div style={{ position: 'relative', fontSize: 'clamp(28px, 5vw, 48px)' }}>
          {/* Nome 2 linhas */}
          <h1 style={{ fontSize: '1em', fontWeight: 'normal', lineHeight: 1.30, margin: 0, marginTop : 7 }}>
            <span style={{ display: 'block' , paddingLeft: '0.2em' }}>Pedro</span>
            <span style={{ display: 'block', paddingLeft: '0.7em' }}>Bedor</span>
          </h1>

          {/* Ícone câmera+mão — escala em 'em' relativo ao font-size do h1 */}
          <img
            src="/images/cameraIcon.png"
            alt=""
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: '-0.6em',
              left: '3.3em',
              width: '2.3em',
              height: '3em',
              objectFit: 'contain',
            }}
          />

          {/* Divisor — largura = 110% da coluna esquerda, não do papel inteiro */}
          <hr
            style={{
              width: '110%',
              border: 'none',
              borderTop: '2px solid #b5a892',
              margin: '0.2em 0 0.5em',
            }}
          />

          {/* Tagline — alinhada à esquerda, dentro da coluna esquerda */}
          <p
            style={{
              fontSize: '0.35em',
              textAlign: 'center',
              margin: 0,
              marginLeft : '6%',
              lineHeight: 1.4,
            }}
          >
            A Caffeinated CS Student and Game Dev.
          </p>
        </div>
      </div>

      {/* COLUNA DIREITA — foto + fitas */}
      <div
        style={{
          position: 'absolute',
          top: '7%',
          left: '56.5%',
          width: '40%',
        }}
      >
        <div style={{ position: 'relative' }}>
          <img
            src="/images/pedroPhoto.jpg"
            alt="Pedro Bedor"
            style={{ width: '100%', display: 'block', borderRadius: '2px' }}
          />
          <img
            src="/images/tapeCorner.png"
            alt=""
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: '-8%',
              left: '-8%',
              width: '30%',
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
              top: '88%',
              right: '-3%',
              width: '25%',
              transform: 'rotate(10deg)',
              opacity: 0.85,
            }}
          />
        </div>
      </div>

      {/* NAV CARDS — 2 cards iguais, gap preciso */}
      <div
        style={{
          position: 'absolute',
          top: '47.5%',
          left: '3%',
          width: '94%',
          display: 'flex',
          gap: '3%',
        }}
      >
        <NavCard number="01" icon="/images/penIcon.png" label="About Me" href="/about" />
        <NavCard number="02" icon="/images/laptopIcon.png" label="Projects" href="/projects" />
      </div>

      {/* SOCIAL ROW — centralizado */}
      <div
        style={{
          position: 'absolute',
          top: '80.5%',
          left: '0',
          right: '0',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <SocialLinks />
      </div>

    </div>
  )
}

export default PaperContent
