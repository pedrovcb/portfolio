import { motion, MotionConfig } from 'framer-motion'
import PaperContent from './PaperContent.jsx'

const PAPER_ASPECT = 0.8344  // 635 / 761
const TYPEWRITER_MAX_WIDTH = 700
const PAPER_WIDTH = Math.round(TYPEWRITER_MAX_WIDTH * 0.683)  // ≈ 478px
const PAPER_HEIGHT = Math.round(PAPER_WIDTH / PAPER_ASPECT)    // ≈ 573px

function PaperSheet() {
  return (
    <MotionConfig reduceMotion="user">
      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        transition={{
          duration: 1,
          ease: [0.16, 1, 0.3, 1],
        }}
        style={{
          position: 'relative',
          zIndex: 1,
          width: PAPER_WIDTH,
          height: PAPER_HEIGHT,
          marginBottom: '15%',  // posiciona o bottom do papel atrás dos rolos
          backgroundImage: 'url(/images/paperBasev1.png)',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          padding: '40px 30px 60px 30px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <PaperContent />
      </motion.div>
    </MotionConfig>
  )
}

export default PaperSheet
