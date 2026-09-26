import PaperSheet from './PaperSheet.jsx'

function TypewriterHero() {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        overflow: 'hidden',
      }}
    >
      {/* O papel será renderizado primeiro para vir antes da Typewriter */}
      <PaperSheet />

      {/* Typewriter overlay: static, vai ficar na frente */}
      <img
        src="/images/typewriterOverlay.png"
        alt=""
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '-80px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'min(90vw, 700px)',
          zIndex: 10,
          pointerEvents: 'none',
        }}
      />
    </div>
  )
}

export default TypewriterHero
