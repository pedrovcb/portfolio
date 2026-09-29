import { useState, useRef, useEffect } from 'react'
import Folder from './Folder.jsx'

const projects = [
  {
    id: 'tuxedo',
    image: '/images/folders/folderTuxedo.png',
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
    image: '/images/folders/folderPlantec.png',
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
    image: '/images/folders/folderIsmalia.png',
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
    image: '/images/folders/folderGenesis.png',
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
    image: '/images/folders/folderPulso.png',
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

function FolderStack({ onFolderOpenChange }) {
  const [openIndex, setOpenIndex] = useState(null)
  const [offset, setOffset] = useState(0)
  const containerRef = useRef(null)
  const foldersRef = useRef([])

  useEffect(() => {
    if (openIndex !== null && foldersRef.current[openIndex]) {
      const timer = setTimeout(() => {
        const folder = foldersRef.current[openIndex]
        const rect = folder.getBoundingClientRect()
        const folderHeight = rect.height
        const viewportHeight = window.innerHeight
        const folderTop = rect.top
        const folderCenter = folderTop + folderHeight / 2
        const viewportCenter = viewportHeight / 2
        const newOffset = viewportCenter - folderCenter
        setOffset(newOffset)
        if (onFolderOpenChange) onFolderOpenChange(true)
      }, 500)
      return () => clearTimeout(timer)
    } else {
      setOffset(0)
      if (onFolderOpenChange) onFolderOpenChange(false)
    }
  }, [openIndex, onFolderOpenChange])

  return (
    <div ref={containerRef} style={{ width: 'min(55vw, 660px)', margin: '0 auto', position: 'relative' }}>
      {projects.map((project, i) => (
        <Folder
          key={project.id}
          project={project}
          isFirst={i === 0}
          isOpen={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? null : i)}
          zIndex={i + 1}
          index={i}
          openIndex={openIndex}
          offset={offset}
          folderRef={(el) => (foldersRef.current[i] = el)}
        />
      ))}
    </div>
  )
}

export default FolderStack
