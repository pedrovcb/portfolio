import { useState } from 'react'
import { CanMoveElement } from '@playhtml/react'
import StampLightbox from './StampLightbox.jsx'

function StampPhoto({ id, src, alt, initialStyle, allStamps, currentIndex }) {
  const [isZoomed, setIsZoomed] = useState(false)
  const [internalIndex, setInternalIndex] = useState(currentIndex)

  const handleDoubleClick = (e) => {
    e.stopPropagation()
    e.preventDefault()
    setIsZoomed(true)
  }

  return (
    <>
      <CanMoveElement
        bounds="journal-right-page"
        boundsMinVisible={0.6}
        loading={{ behavior: 'animate', style: 'fade' }}
      >
        <div
          id={id}
          onDoubleClick={handleDoubleClick}
          style={{ 
            position: 'absolute', 
            left: initialStyle.left,
            top: initialStyle.top,
            width: initialStyle.width,
            height: 'fit-content',
            cursor: 'zoom-in'
          }}
          aria-label="Ampliar imagem"
        >
          <div style={{ padding: '5px', background: '#f4ead9', boxShadow: '0 2px 6px rgba(0,0,0,0.25)' }}>
            <img src={src} alt={alt} style={{ width: '100%', display: 'block' }} />
          </div>
        </div>
      </CanMoveElement>

      {isZoomed && (
        <StampLightbox
          images={allStamps}
          currentIndex={internalIndex}
          onClose={() => setIsZoomed(false)}
          onNavigate={(direction) => {
            const newIndex = direction === 'prev'
              ? (internalIndex === 0 ? allStamps.length - 1 : internalIndex - 1)
              : (internalIndex === allStamps.length - 1 ? 0 : internalIndex + 1)
            setInternalIndex(newIndex)
          }}
        />
      )}
    </>
  )
}

export default StampPhoto
