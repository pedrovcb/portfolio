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
      {/* Typewriter renderizado primeiro (evitar ter o papel flutuando) */}
      <img
        src="/images/typewriterOverlayV2.png"
        alt=""
        aria-hidden="true"
        style={{
          position: 'relative',
          zIndex: 10,
          width: 'min(90vw, 800px)',
          pointerEvents: 'none',
          marginBottom: '0px',
          flexShrink: 0,
        }}
      />

      {/* o papel vai ser renderizado depois mas com z-index menor (fica atrás visualmente) */}
      <div
        style={{
          position: 'absolute',
          bottom: '0',
          left: '50%',
          transform: 'translateX(-51%)',
          zIndex: 1,
          display: 'flex',
          alignItems: 'flex-end',
        }}
      >
        <PaperSheet />
      </div>
    </div>
  )
}

export default TypewriterHero
