import { motion } from 'framer-motion'
import InfoPage from '../components/about/InfoPage.jsx'
import StampCollage from '../components/about/StampCollage.jsx'
import SpotifyIpod from '../components/home/SpotifyIpod.jsx'

function AboutPage() {
  return (
    <div
      style={{
        width: '100%',
        minHeight: '100vh',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2vh 0',
        position: 'relative',
      }}
    >
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

        <div
          style={{
            position: 'relative',
            width: 'min(75vw, 1000px)',
            aspectRatio: '1200 / 1034',
            backgroundImage: 'url(/images/journal.png)',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div
            style={{
              position: 'absolute',
              left: '2%',
              top: '3%',
              width: '49%',
              height: '95%',
            }}
          >
            <InfoPage />
          </div>

          <div
            style={{
              position: 'absolute',
              // top, right, bottom, left
              inset: '9% 8% 9% 56%',
            }}
          >
            <StampCollage />
          </div>
        </div>
        <SpotifyIpod />
        <motion.a
          href="/"
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          style={{
            position: 'absolute',
            top: '5%',
            left: '3%',
            fontSize: 'clamp(40px, 5vw, 55px)',
            color: '#3a3226',
            textDecoration: 'none',
            zIndex: 3,
            cursor: 'pointer',
          }}
          aria-label="Voltar para Home"
        >
          ←
        </motion.a>
      </div>
  )
}

export default AboutPage
