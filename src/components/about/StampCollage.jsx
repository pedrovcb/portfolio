import PlayhtmlProvider from './PlayhtmlProvider.jsx'
import StampPhoto from './StampPhoto.jsx'

const stamps = [
  { id: 'stamp-01', src: '/images/stamps/stamp1Ret.png', alt: 'Photo 1', initialStyle: { left: '2%', top: '2%', width: '34%', height: '26.6%' } },
  { id: 'stamp-02', src: '/images/stamps/stamp2Pais.png', alt: 'Photo 2', initialStyle: { left: '37%', top: '1%', width: '27%', height: '34.5%' } },
  { id: 'stamp-03', src: '/images/stamps/stamp3Ret.png', alt: 'Photo 3', initialStyle: { left: '65%', top: '3%', width: '34%', height: '26.6%' } },
  
  { id: 'stamp-04', src: '/images/stamps/stamp4Ret.png', alt: 'Photo 4', initialStyle: { left: '1%', top: '29%', width: '34%', height: '26.6%' } },
  { id: 'stamp-05', src: '/images/stamps/stamp5Ret.png', alt: 'Photo 5', initialStyle: { left: '36%', top: '30%', width: '34%', height: '26.6%' } },
  { id: 'stamp-06', src: '/images/stamps/stamp6Quad.png', alt: 'Photo 6', initialStyle: { left: '71%', top: '29%', width: '29%', height: '29%' } },
  
  { id: 'stamp-07', src: '/images/stamps/stamp7Pais.png', alt: 'Photo 7', initialStyle: { left: '2%', top: '56%', width: '27%', height: '34.5%' } },
  { id: 'stamp-08', src: '/images/stamps/stamp8Ret.png', alt: 'Photo 8', initialStyle: { left: '30%', top: '57%', width: '34%', height: '26.6%' } },
  { id: 'stamp-09', src: '/images/stamps/stamp9Ret.png', alt: 'Photo 9', initialStyle: { left: '65%', top: '56%', width: '34%', height: '26.6%' } },
  
  { id: 'stamp-10', src: '/images/stamps/stamp10Pais.png', alt: 'Photo 10', initialStyle: { left: '1%', top: '90%', width: '27%', height: '34.5%' } },
  { id: 'stamp-11', src: '/images/stamps/stamp11Pais.png', alt: 'Photo 11', initialStyle: { left: '29%', top: '84%', width: '27%', height: '34.5%' } },
  { id: 'stamp-12', src: '/images/stamps/stamp12Ret.png', alt: 'Photo 12', initialStyle: { left: '57%', top: '83%', width: '34%', height: '26.6%' } },
  
  { id: 'stamp-13', src: '/images/stamps/stamp13Quad.png', alt: 'Photo 13', initialStyle: { left: '92%', top: '2%', width: '29%', height: '29%' } },
  { id: 'stamp-14', src: '/images/stamps/stamp14Ret.png', alt: 'Photo 14', initialStyle: { left: '90%', top: '31%', width: '34%', height: '26.6%' } },
  { id: 'stamp-15', src: '/images/stamps/stamp15Quad.png', alt: 'Photo 15', initialStyle: { left: '91%', top: '58%', width: '29%', height: '29%' } },
  { id: 'stamp-16', src: '/images/stamps/stamp16Ret.png', alt: 'Photo 16', initialStyle: { left: '92%', top: '87%', width: '34%', height: '26.6%' } },
  
  { id: 'stamp-17', src: '/images/stamps/stamp17Quad.png', alt: 'Photo 17', initialStyle: { left: '58%', top: '110%', width: '29%', height: '29%' } },
  { id: 'stamp-18', src: '/images/stamps/stamp18Quad.png', alt: 'Photo 18', initialStyle: { left: '28%', top: '118%', width: '29%', height: '29%' } },
  { id: 'stamp-19', src: '/images/stamps/stamp19Ret.png', alt: 'Photo 19', initialStyle: { left: '58%', top: '140%', width: '34%', height: '26.6%' } },
  { id: 'stamp-20', src: '/images/stamps/stamp20Ret.png', alt: 'Photo 20', initialStyle: { left: '2%', top: '125%', width: '34%', height: '26.6%' } },
]

function StampCollage() {
  return (
    <PlayhtmlProvider>
      <div id="journal-right-page" style={{ position: 'relative', width: '100%', height: '100%' }}>
        {stamps.map((s, index) => (
          <StampPhoto key={s.id} {...s} allStamps={stamps} currentIndex={index} />
        ))}
      </div>
    </PlayhtmlProvider>
  )
}

export default StampCollage
