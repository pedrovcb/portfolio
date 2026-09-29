import TypewriterHero from '../components/home/TypewriterHero.jsx'
import SpotifyIpod from '../components/home/SpotifyIpod.jsx'

function HomePage() {
  return (
    <div style={{ width: '100%', minHeight: '100vh', overflow: 'hidden', position: 'relative' }}>
        {/* Foto decorativa esquerda — crossword */}
        <img
          src="/images/crosswordBg.png"
          alt=""
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '0%',
            left: '0%',
            width: 'min(19vw, 300px)',
            opacity: 1,
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />

        {/* Foto decorativa direita — coffee mug */}
        <img
          src="/images/coffeeMug.png"
          alt=""
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '0%',
            right: '0%',
            width: 'min(15vw, 240px)',
            opacity: 1,
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />

        {/* Selos decorativos — canto inferior direito, dispostos verticalmente com sobreposição leve */}
  <div
    style={{
      position: 'absolute',
      bottom: '1%',
      right: '5%',
      width: 'min(9vw, 140px)',
      zIndex: 0,
      pointerEvents: 'none',
    }}
  >
    {/* Selo Brasil — topo, levemente para a esquerda */}
    <img
      src="/images/seloBrasil.png"
      alt=""
      aria-hidden="true"
      style={{
        width: '120%',
        marginLeft: '-10%',
        transform: 'rotate(-14deg)',
      }}
    />
    {/* Selo Fall — meio, levemente para a direita, sobrepõe o canto do Brasil */}
    <img
      src="/images/seloFall.png"
      alt=""
      aria-hidden="true"
      style={{
        width: '115%',
        marginLeft: '25%',
        marginTop: '-20%',
        transform: 'rotate(9deg)',
      }}
    />
    {/* Selo Gato — base, levemente para a esquerda, sobrepõe o canto do Fall */}
    <img
      src="/images/seloGato.png"
      alt=""
      aria-hidden="true"
      style={{
        width: '110%',
        marginLeft: '-2%',
        marginTop: '-17%',
        transform: 'rotate(-2deg)',
      }}
    />
  </div>

        <TypewriterHero />
        <SpotifyIpod />
      </div>
  )
}

export default HomePage
