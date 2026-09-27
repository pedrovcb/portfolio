import { useState, useEffect, useRef } from 'react'

function formatMs(ms) {
  if (!ms) return '0:00'
  const totalSec = Math.floor(ms / 1000)
  const min = Math.floor(totalSec / 60)
  const sec = totalSec % 60
  return `${min}:${sec.toString().padStart(2, '0')}`
}

function MarqueeText({ text, style: baseStyle }) {
  const [shouldScroll, setShouldScroll] = useState(false)
  const containerRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    if (containerRef.current && textRef.current) {
      const overflow = textRef.current.scrollWidth > containerRef.current.clientWidth
      setShouldScroll(overflow)
    }
  }, [text])

  return (
    <div
      ref={containerRef}
      style={{
        overflow: 'hidden',
        ...baseStyle,
        ...(shouldScroll ? {
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 2%, black 98%, transparent 100%)',
          maskImage: 'linear-gradient(to right, transparent 0%, black 2%, black 98%, transparent 100%)',
        } : {}),
      }}
    >
      {shouldScroll ? (
        <span style={{ display: 'inline-block', animation: 'marquee-scroll 6s linear infinite' }}>
          <span ref={textRef}>{text}</span>
          <span style={{ marginLeft: '2em' }} aria-hidden="true">{text}</span>
        </span>
      ) : (
        <span ref={textRef}>{text}</span>
      )}
    </div>
  )
}

function AlbumCover({ imageUrl }) {
  const prevUrlRef = useRef(null)
  const [animating, setAnimating] = useState(false)
  const [oldUrl, setOldUrl] = useState(null)

  const src = imageUrl || '/images/fallbackCover.png'

  useEffect(() => {
    if (src !== prevUrlRef.current && !animating) {
      if (prevUrlRef.current !== null) {
        setOldUrl(prevUrlRef.current)
        setAnimating(true)
      }
      prevUrlRef.current = src
    }
  }, [src, animating])

  const handleAnimationEnd = () => {
    setAnimating(false)
    setOldUrl(null)
  }

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
      <img
        src={src}
        alt=""
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          borderRadius: '3px',
          boxShadow: '0 1px 4px rgba(0,0,0,0.2)',
          ...(animating ? {
            position: 'absolute',
            top: 0,
            left: 0,
            animation: 'album-slide-in 400ms ease-in-out forwards',
          } : {}),
        }}
      />
      {animating && oldUrl && (
        <img
          src={oldUrl}
          alt=""
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '3px',
            boxShadow: '0 1px 4px rgba(0,0,0,0.2)',
            animation: 'album-slide-out 400ms ease-in-out forwards',
          }}
          onAnimationEnd={handleAnimationEnd}
        />
      )}
    </div>
  )
}

function SpotifyIpod() {
  const [spotifyData, setSpotifyData] = useState({
    isPlaying: false,
    trackName: 'Song Name',
    artistName: 'Artist Name',
    albumName: 'Album Name',
    albumImageUrl: null,
    progressMs: 0,
    durationMs: 0,
  })
  const progressIntervalRef = useRef(null)

  useEffect(() => {
    const style = document.createElement('style')
    style.textContent = `
      @keyframes marquee-scroll {
        0%, 15% { transform: translateX(0) }
        85%, 100% { transform: translateX(-50%) }
      }
      @keyframes album-slide-in {
        0% { transform: translateX(100%); opacity: 0; }
        100% { transform: translateX(0); opacity: 1; }
      }
      @keyframes album-slide-out {
        0% { transform: translateX(0); opacity: 1; }
        100% { transform: translateX(-100%); opacity: 0; }
      }
    `
    document.head.appendChild(style)
    return () => document.head.removeChild(style)
  }, [])

  useEffect(() => {
    let alive = true

    const fetchSpotify = async () => {
      try {
        const res = await fetch('/api/spotify')
        if (res.status === 204) {
          if (alive) setSpotifyData(prev => ({ ...prev, isPlaying: false }))
          if (progressIntervalRef.current) clearInterval(progressIntervalRef.current)
          return
        }
        if (!res.ok) return

        const data = await res.json()
        if (!data.error && alive) {
          setSpotifyData(prev => ({ ...prev, ...data }))

          // Real-time progress if playing
          if (data.isPlaying && data.progressMs != null && data.durationMs) {
            if (progressIntervalRef.current) clearInterval(progressIntervalRef.current)
            progressIntervalRef.current = setInterval(() => {
              setSpotifyData(prev => ({
                ...prev,
                progressMs: Math.min(prev.progressMs + 100, prev.durationMs),
              }))
            }, 100)
          } else {
            if (progressIntervalRef.current) clearInterval(progressIntervalRef.current)
          }
        }
      } catch (e) {
        // Silent fail
      }
    }

    fetchSpotify()
    const pollInterval = setInterval(fetchSpotify, 5000)
    return () => {
      alive = false
      clearInterval(pollInterval)
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current)
    }
  }, [])

  return (
    <div
      style={{
        position: 'absolute',
        bottom: '3%',
        left: '2%',
        zIndex: 2,
        pointerEvents: 'auto',
      }}
    >
      {/* Corpo do iPod em alumínio prateado */}
      <div
        style={{
          width: 'min(26vw, 260px)',
          height: 'min(32vw, 360px)',
          background: '#ececec',
          borderRadius: '14px',
          position: 'relative',
          boxShadow: 'inset 3px 0px 10px 6px rgba(0,0,0,0.35)',
          border: '1px solid #d0d0d0',
        }}
      >
        {/* Tela display */}
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: '13px',
            transform: 'translateX(-50%)',
            width: '85%',
            height: '55%',
            background: '#fff',
            borderRadius: '5px',
            border: '1.5px solid #aaa',
            outline: '2.5px solid #222',
            outlineOffset: '-2.5px',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Header */}
          <div
            style={{
              background: 'linear-gradient(to bottom, #fff 0%, #9e9e9e 100%)',
              borderBottom: '1px solid #5c5c5c',
              borderRight: '1.5px solid #000',
              borderLeft: '1.5px solid #000',
              fontSize: 'clamp(7px, 0.8vw, 10px)',
              padding: '3px 6px',
              color: '#333',
              fontFamily: 'system-ui, sans-serif',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <span>{spotifyData.isPlaying ? 'Now Playing' : 'Last Played'}</span>
            <span style={{ fontSize: 'clamp(9px, 1vw, 12px)' }}></span>
          </div>

          {/* Conteúdo: capa à esquerda | info à direita */}
          <div
            style={{
              display: 'flex',
              flex: 1,
              overflow: 'hidden',
            }}
          >
            {/* Capa do álbum na esquerda */}
            <div
              style={{
                width: '50%',
                aspectRatio: '1 / 1',
                height: 'auto',
                alignSelf: 'center',
                flexShrink: 0,
                padding: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <AlbumCover imageUrl={spotifyData.albumImageUrl} />
            </div>

            {/* Informações da música na direita */}
            <div
              style={{
                width: '50%',
                padding: '4px 6px 4px 2px',
                display: 'flex',
                flexDirection: 'column',
                alignSelf: 'center',
                gap: '2px',
                justifyContent: 'flex-start',
              }}
            >
              <MarqueeText
                text={spotifyData.trackName || 'Song Name'}
                style={{
                  fontSize: 'clamp(10px, 1.2vw, 13px)',
                  fontFamily: 'system-ui, sans-serif',
                  fontWeight: 'bold',
                  color: '#111',
                  lineHeight: 1.2,
                }}
              />
              <MarqueeText
                text={spotifyData.artistName || 'Artist Name'}
                style={{
                  fontSize: 'clamp(10px, 1.2vw, 14px)',
                  fontFamily: 'system-ui, sans-serif',
                  color: '#444',
                  lineHeight: 1.2,
                }}
              />
              <MarqueeText
                text={spotifyData.albumName || 'Album Name'}
                style={{
                  fontSize: 'clamp(8px, 1vw, 11px)',
                  fontFamily: 'system-ui, sans-serif',
                  color: '#888',
                  lineHeight: 1.2,
                }}
              />
            </div>
          </div>

          {/* Progress bar azul quando estiver tocando*/}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '0 6px 4px',
              fontFamily: 'system-ui, sans-serif',
              fontSize: 'clamp(8px, 0.8vw, 10px)',
              color: '#333',
            }}
          >
            <span style={{ minWidth: '2.6em', textAlign: 'right' }}>{formatMs(spotifyData.progressMs)}</span>
            <div
              style={{
                flex: 1,
                height: '10px',
                background: '#e0e0e0',
                borderRadius: '5px',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  width: `${spotifyData.durationMs > 0 ? (spotifyData.progressMs / spotifyData.durationMs) * 100 : 0}%`,
                  height: '100%',
                  background: spotifyData.isPlaying ? '#69b3f2' : '#a0a0a0',
                  borderRadius: '5px',
                  transition: 'width 0.1s linear, background 0.3s ease',
                }}
              />
            </div>
            <span>{formatMs(spotifyData.durationMs)}</span>
          </div>
        </div>

        {/* Click wheel */}
        <div
          style={{
            position: 'absolute',
            left: '50%',
            bottom: '18px',
            transform: 'translateX(-50%)',
            width: 'min(11vw, 120px)',
            height: 'min(11vw, 120px)',
            borderRadius: '50%',
            background: '#fff',
            border: '0.5px solid #ccc',
            boxShadow: 'inset 0px 0px 3px 1px rgba(0,0,0,0.12)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Centro do wheel */}
          <div
            style={{
              width: '36%',
              height: '36%',
              borderRadius: '50%',
              background: '#ececec',
              boxShadow:
                'inset 14px 14px 28px #c6c6c6, inset -14px -14px 28px #ffffff',
              border: '0.5px solid #ccc',
            }}
          />

          {/* Botões */}
          <span
            style={{
              position: 'absolute',
              top: '6px',
              fontSize: 'clamp(6px, 0.6vw, 8px)',
              color: '#aaa',
              fontFamily: 'system-ui, sans-serif',
              fontWeight: '700',
            }}
          >
            MENU
          </span>
          <span
            style={{
              position: 'absolute',
              bottom: '7px',
              fontSize: 'clamp(10px, 1.1vw, 13px)',
              color: '#aaa',
            }}
          >
            ▶ 
          </span>
          <span
            style={{
              position: 'absolute',
              left: '7px',
              fontSize: 'clamp(10px, 1.1vw, 13px)',
              color: '#aaa',
            }}
          >
            ⏮
          </span>
          <span
            style={{
              position: 'absolute',
              right: '7px',
              fontSize: 'clamp(10px, 1.1vw, 13px)',
              color: '#aaa',
            }}
          >
            ⏭
          </span>
        </div>
      </div>
    </div>
  )
}

export default SpotifyIpod
