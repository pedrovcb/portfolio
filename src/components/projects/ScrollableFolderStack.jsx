import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const projects = [
  {
    id: 'tuxedo',
    name: 'Tuxedo',
    image: '/images/folders/paperTuxedo.png',
    cardImage: '/images/folders/cardFolderTuxedo.png',
    textRegions: [
      {
        top: '66.7%', left: '3.7%', width: '89.8%', height: '31.1%',
        align: 'justify',
        text: `Bitsy Tuxedo is an enhanced version of Bitsy, the minimalist editor for making small games and interactive narratives. The original is a great entry point to Computational Thinking, but it lacks features like undo, area fill, and media import, and the community hacks that fill those gaps require editing HTML, which is a barrier for beginners.

Built as a fork of Bitsy Color in JavaScript and HTML5 (MIT license), Tuxedo brings these features together in one stable, documented environment, based on feedback from 24 students. It was developed at CESAR School and presented at the Mágica workshop.`
      }
    ]
  },
  {
    id: 'plantec',
    name: 'PlanTec',
    image: '/images/folders/paperPlantec.png',
    cardImage: '/images/folders/cardFolderPlantec.png',
    textRegions: [
      {
        top: '74.8%', left: '3.7%', width: '40.7%', height: '23%',
        align: 'left', size: 'small',
        text: `Built with Arduino by Group G15 during the Projetos I course at CESAR School, PlanTec was selected as the best Projetos I project at the Mostra TechDesign 2025.2.`
      },
      {
        top: '43%', left: '45.4%', width: '43.5%', height: '54.8%',
        align: 'justify',
        text: `PlanTec is a "figital" (physical + digital) crop monitoring and management system for family farming, aligned with the environmental axis and ESG principles. It brings technology already common in large agribusiness to small farmers: soil moisture sensors and a GSM module detect dry soil and send an SMS alert, and the farmer can reply by SMS to remotely trigger an automatic irrigation system (solenoid valve), needing only a cell network.`
      }
    ]
  },
  {
    id: 'ismalia',
    name: 'Ismália',
    image: '/images/folders/paperIsmalia.png',
    cardImage: '/images/folders/cardFolderIsmalia.png',
    textRegions: [
      {
        top: '66.7%', left: '1.9%', width: '91.6%', height: '31.1%',
        align: 'justify',
        text: `Ismália is a narrative game based on the story behind Alphonsus de Guimaraens' poem of the same name. Using a time loop mechanic, the player steps into the poet's shoes as he tries, and fails, to stop his beloved from throwing herself from the tower. Set in a tower full of symbolism, players explore different floors and dialogue options, living through the hope and inevitability of the ending the poem made eternal.

It began as a Bitsy game for the Introduction to Computer Science course and was later selected to continue development at FORJA Game Studio. Now being rebuilt in Unity, with me as Game Director and Creative Director.`
      }
    ]
  },
  {
    id: 'genesis',
    name: 'Genesis',
    image: '/images/folders/paperGenesis.png',
    cardImage: '/images/folders/cardFolderGenesis.png',
    textRegions: [
      {
        top: '67%', left: '5.6%', width: '88%', height: '31%',
        align: 'justify',
        text: `Genesis is a web app built for medical students nearing graduation who are aiming for a pediatrics residency, as well as for physicians already working in the field. It brings essential clinical support tools into a single, fast interface: interactive protocols and flowcharts, an Emergency Mode that guides the doctor step by step in critical situations, and an automatic weight-based dose calculator that suggests analogous drugs when the main medication isn't available.

Created as an academic project at CESAR School by a team of ten, Genesis grew out of research showing that new doctors struggle most with dose calculations under pressure and that existing apps are slow or hard to trust. No competitor combined interactive protocols, automatic pediatric dosing, and reliable sources in one tool.`
      }
    ]
  },
  {
    id: 'pulso',
    name: 'PULSO',
    image: '/images/folders/paperPulso.png',
    cardImage: '/images/folders/cardFolderPulso.png',
    textRegions: [
      {
        top: '56.3%', left: '1.9%', width: '91.6%', height: '41.5%',
        align: 'justify',
        text: `PULSO (Previsão Urbana de Localização e Sinais de Ocorrência) is a decision-support system that predicts where arboviruses like dengue, zika, and chikungunya are likely to spike across Recife's 94 neighborhoods. It turns rainfall, standing-water, and case-notification data into a dynamic priority queue, so surveillance teams can act before an outbreak instead of after cases are confirmed. The system recommends, and the professional decides.

Born at the ARIES Hackathon for climate adaptation in urban health, the project continues at CESAR School's School Innovation program, where our team of ten is integrating municipal data (ovitraps, larvicide stations, field visits) and exploring expansion to other climate-related health risks such as leptospirosis.`
      }
    ]
  },
]

function ScrollableFolderStack({ onFolderOpenChange }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [openIndex, setOpenIndex] = useState(null)
  const [cardStyles, setCardStyles] = useState([])
  const containerRef = useRef(null)
  const cardsRef = useRef([])

  const scrollToCard = (index) => {
    const card = cardsRef.current[index]
    if (card) {
      card.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  const updateCardStyles = () => {
    const container = containerRef.current
    if (!container) return

    const containerRect = container.getBoundingClientRect()
    const containerCenter = containerRect.top + containerRect.height / 2
    
    let closestIndex = 0
    let closestDistance = Infinity
    const newStyles = []

    cardsRef.current.forEach((card, i) => {
      if (card) {
        const cardRect = card.getBoundingClientRect()
        const cardCenter = cardRect.top + cardRect.height / 2
        const distance = Math.abs(containerCenter - cardCenter)
        const normalizedDistance = distance / containerRect.height
        
        const scale = Math.max(0.95, 1 - normalizedDistance * 0.05)
        const blur = Math.min(2, normalizedDistance * 3)
        const opacity = Math.max(0.8, 1 - normalizedDistance * 0.2)
        
        newStyles[i] = { scale, filter: `blur(${blur}px)`, opacity }
        
        if (distance < closestDistance) {
          closestDistance = distance
          closestIndex = i
        }
      }
    })

    setCardStyles(newStyles)
    setActiveIndex(closestIndex)
  }

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    container.addEventListener('scroll', updateCardStyles)
    updateCardStyles()
    
    return () => container.removeEventListener('scroll', updateCardStyles)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (openIndex !== null) {
        if (e.key === 'Escape') {
          setOpenIndex(null)
          if (onFolderOpenChange) onFolderOpenChange(false)
        }
        return
      }

      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        e.preventDefault()
        const newIndex = Math.min(activeIndex + 1, projects.length - 1)
        scrollToCard(newIndex)
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault()
        const newIndex = Math.max(activeIndex - 1, 0)
        scrollToCard(newIndex)
      } else if (e.key === 'Home') {
        e.preventDefault()
        scrollToCard(0)
      } else if (e.key === 'End') {
        e.preventDefault()
        scrollToCard(projects.length - 1)
      } else if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        setOpenIndex(activeIndex)
        if (onFolderOpenChange) onFolderOpenChange(true)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeIndex, openIndex, onFolderOpenChange])

  return (
    <>
      <div
        ref={containerRef}
        role="tablist"
        aria-label="Projetos"
        style={{
          width: 'min(55vw, 660px)',
          height: '85vh',
          margin: '0 auto',
          overflowY: 'scroll',
          scrollSnapType: 'y mandatory',
          position: 'relative',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          padding: '25vh 0',
        }}
      >
        <style>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        
        {projects.map((project, i) => {
          const style = cardStyles[i] || { scale: 1, filter: 'blur(0px)', opacity: 1 }
          
          return (
            <div key={project.id} style={{ marginBottom: '40px' }}>
              <motion.div
                ref={(el) => (cardsRef.current[i] = el)}
                role="tab"
                aria-selected={i === activeIndex}
                aria-label={project.id}
                tabIndex={i === activeIndex ? 0 : -1}
                onClick={() => {
                  if (i === activeIndex) {
                    setOpenIndex(i)
                    if (onFolderOpenChange) onFolderOpenChange(true)
                  } else {
                    scrollToCard(i)
                  }
                }}
                animate={style}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  width: '100%',
                  aspectRatio: '1.4 / 1',
                  scrollSnapAlign: 'center',
                  cursor: i === activeIndex ? 'pointer' : 'default',
                  backgroundImage: `url(${project.cardImage})`,
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  borderRadius: '8px',
                }}
              />
              <div
                style={{
                  textAlign: 'center',
                  marginTop: '12px',
                  fontFamily: "'Special Elite', monospace",
                  fontSize: 'clamp(16px, 2vw, 20px)',
                  color: '#3a3226',
                }}
              >
                {project.name}
              </div>
            </div>
          )
        })}
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '8px',
          marginTop: '20px',
        }}
      >
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToCard(i)}
            aria-label={`Ir para projeto ${i + 1}`}
            style={{
              width: i === activeIndex ? '24px' : '8px',
              height: '8px',
              borderRadius: '4px',
              background: i === activeIndex ? '#3a3226' : '#b5a892',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
          />
        ))}
      </div>

      <AnimatePresence>
        {openIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => {
              setOpenIndex(null)
              if (onFolderOpenChange) onFolderOpenChange(false)
            }}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0,0,0,0.9)',
              zIndex: 1000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              style={{
                position: 'relative',
                width: 'min(80vh, 90vw)',
                aspectRatio: '0.8 / 1',
                backgroundImage: `url(${projects[openIndex].image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '8px',
                cursor: 'default',
                maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ScrollableFolderStack
