import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import ScrollableFolderStack from '../components/projects/ScrollableFolderStack.jsx'
import SpotifyIpod from '../components/home/SpotifyIpod.jsx'

function ProjectsPage() {
  const [isFolderOpen, setIsFolderOpen] = useState(false)

  useEffect(() => {
    if (isFolderOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isFolderOpen])

  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        position: 'relative',
        padding: '2vh 0',
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

      <div style={{ padding: '4vh 0' }}>
        <ScrollableFolderStack onFolderOpenChange={setIsFolderOpen} />
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

export default ProjectsPage
