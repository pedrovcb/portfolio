import { motion, MotionConfig } from 'framer-motion'
import PaperContent from './PaperContent.jsx'

const TYPEWRITER_MAX_WIDTH = 800
const PAPER_WIDTH = Math.round(TYPEWRITER_MAX_WIDTH * 0.698)

function PaperSheet() {
  return (
    <MotionConfig reduceMotion="user">
      <motion.div
        initial={{ y: '80%' }}
        animate={{ y: '-30%' }}
        transition={{
          duration: 5,
          ease: [0.16, 1, 0.3, 1],
        }}
        style={{
          width: PAPER_WIDTH,
          aspectRatio: '635 / 761',
          backgroundImage: 'url(/images/paperBasev1.png)',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          position: 'relative',
        }}
      >
        <PaperContent />
      </motion.div>
    </MotionConfig>
  )
}

export default PaperSheet
