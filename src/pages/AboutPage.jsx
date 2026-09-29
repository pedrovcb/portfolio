import InfoPage from '../components/about/InfoPage.jsx'
import StampCollage from '../components/about/StampCollage.jsx'

function AboutPage() {
  return (
    <div
      style={{
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2vh 0',
      }}
    >
        <div
          style={{
            position: 'relative',
            width: 'min(90vw, 1200px)',
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
              width: '47%',
              height: '95%',
            }}
          >
            <InfoPage />
          </div>

          <div
            style={{
              position: 'absolute',
              left: '51%',
              top: '3%',
              width: '45%',
              height: '95%',
            }}
          >
            <StampCollage />
          </div>
        </div>
      </div>
  )
}

export default AboutPage
