function InfoPage() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <img
        src="/images/aboutmeStamp.png"
        alt="Pedro Bedor"
        style={{
          position: 'absolute',
          left: '13%',
          top: '5%',
          width: '45%',
          height: '25%',
          objectFit: 'contain',
          borderRadius: '2px',
        }}
      />

      <div
        style={{
          position: 'absolute',
          left: '62%',
          top: '6%',
          width: '35.31%',
          height: '10.7%',
        }}
      >
        <h1 style={{ fontSize: 'clamp(22px, 4vw, 32px)', fontWeight: 'normal', lineHeight: 1.3, margin: 0 }}>
          <span style={{ display: 'block' }}>Pedro V.</span>
          <span style={{ display: 'block' }}>C. Bedor</span>
        </h1>
      </div>

      <div
        style={{
          position: 'absolute',
          left: '62%',
          top: '20%',
          width: '35.31%',
          height: '6%',
          fontSize: 'clamp(10px, 1.5vw, 14px)',
        }}
      >
        <p style={{ margin: 0, lineHeight: 1.4, fontSize: 'clamp(12px, 2vw, 16px)' }}>
  <span style={{ fontSize: 'clamp(14px, 2.5vw, 18px)', display: 'block', marginBottom: '0.3em' }}>
    Languages:
  </span>
  • English (Fluent)<br />
  • Portuguese (Fluent)
</p>
      </div>

      <h2
        style={{
          position: 'absolute',
          left: '12.65%',
          top: '34%',
          fontSize: 'clamp(14px, 2vw, 20px)',
          fontWeight: 'normal',
          margin: 0,
        }}
      >
        About me:
      </h2>

      <p
        style={{
          position: 'absolute',
          left: '12.65%',
          top: '38%',
          width: '77.96%',
          height: '16.8%',
          fontSize: 'clamp(12px, 2vw, 16px)',
          lineHeight: 1.5,
          margin: 0,
          overflow: 'hidden',
        }}
      >
        Computer Science undergraduate at CESAR School, with hands-on experience in Game Design as General and Creative Director of the Ismália project (FORJA Game Studio). Serving as a teaching assistant for the NExT Database program and as an educator in workshops on applying Game Design in no-code projects. Currently has 4 papers published at the 2026 Brazilian Symposium on Games and Digital Entertainment (SBGames).
      </p>

      <h2
        style={{
          position: 'absolute',
          left: '12.65%',
          top: '60%',
          fontSize: 'clamp(14px, 2vw, 20px)',
          fontWeight: 'normal',
          margin: 0,
        }}
      >
        What i know:
      </h2>

      <div
        style={{
          position: 'absolute',
          left: '20%',
          top: '64%',
          width: '80%',
          height: '10.3%',
          fontSize: 'clamp(15px, 2vw, 16px)',
          display: 'flex',
          gap: '25%',
        }}
      >
        <div style={{ lineHeight: 1.6 }}>
          <p style={{ margin: 0 }}>• Python</p>
          <p style={{ margin: 0 }}>• Java</p>
          <p style={{ margin: 0 }}>• C</p>
          <p style={{ margin: 0 }}>• Unity</p>
          <p style={{ margin: 0 }}>• Linux</p>
        </div>
        <div style={{ lineHeight: 1.6 }}>
          <p style={{ margin: 0 }}>• Web Dev:</p>
          <p style={{ margin: 0, paddingLeft: '1.5em' }}>• React</p>
          <p style={{ margin: 0, paddingLeft: '1.5em' }}>• HTML/CSS</p>
          <p style={{ margin: 0, paddingLeft: '1.5em' }}>• JavaScript</p>
          <p style={{ margin: 0 }}>• Arduino</p>
        </div>
      </div>

      <h2
        style={{
          position: 'absolute',
          left: '12.65%',
          top: '81%',
          fontSize: 'clamp(14px, 2vw, 20px)',
          fontWeight: 'normal',
          margin: 0,
        }}
      >
        Contact Me!
      </h2>

      <div
        style={{
          position: 'absolute',
          left: '20%',
          top: '85%',
          width: '53.06%',
          height: '5.4%',
          fontSize: 'clamp(12px, 2vw, 16px)',
          lineHeight: 1.6,
        }}
      >
        <p style={{ margin: 0 }}>• E-mail : Pedbedor@gmail.com</p>
        <p style={{ margin: 0 }}>• Github : Pedrovcb</p>
        <p style={{ margin: 0 }}>• LinkedIn : Pedro Bedor</p>
      </div>

      <img
        src="/images/miniEu.png"
        alt="Mini Pedro"
        style={{
          position: 'absolute',
          right: '0%',
          bottom: '4%',
          width: '20%',
        }}
      />
    </div>
  )
}

export default InfoPage
