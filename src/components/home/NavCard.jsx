import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function NavCard({ number, icon, label, href }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      style={{
        border: '2px dashed #b5a892',
        borderRadius: '8px',
        padding: '16px 20px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        flex: '1 1 160px',
        maxWidth: '220px',
        position: 'relative',
        cursor: 'pointer',
        background: 'rgba(242, 238, 230, 0.6)',
      }}
    >
      <span
        style={{
          position: 'absolute',
          top: '4px',
          right: '8px',
          fontSize: '11px',
          color: '#999',
          fontFamily: 'monospace',
        }}
      >
        {number}.
      </span>
      <img src={icon} alt="" style={{ width: '24px', height: '24px' }} />
      <span style={{ fontSize: '15px', fontWeight: 'bold', flex: 1 }}>{label}</span>
      <span style={{ fontSize: '18px' }}>→</span>
      <Link to={href} style={{ position: 'absolute', inset: 0 }} aria-label={label} />
    </motion.div>
  )
}

export default NavCard
