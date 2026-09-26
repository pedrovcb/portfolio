import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function NavCard({ number, icon, label, href }) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      style={{
        position: 'relative',
        display: 'block',
        width: '100%',
        aspectRatio: '371 / 255',
        border: '2px dashed #3a3226',
        textDecoration: 'none',
        color: 'inherit',
        cursor: 'pointer',
      }}
    >
      {/* (a) Número no canto superior direito */}
      <span
        style={{
          position: 'absolute',
          top: '7%',
          right: '9%',
          fontFamily: "'Special Elite', monospace",
          fontSize: 'clamp(12px, 1.4vw, 15px)',
          color: '#000000',
        }}
      >
        {number}.
      </span>

      {/* (b) Ícone — grande, dominante no card */}
      <img
        src={icon}
        alt=""
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '2%',
          left: '5%',
          width: '50%',
          height: '68%',
          objectFit: 'contain',
        }}
      />

      {/* (c) + (d) Label e seta na mesma linha de base */}
      <div
        style={{
          position: 'absolute',
          bottom: '6%',
          left: '5%',
          right: '9%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
        }}
      >
        <span style={{ fontFamily: "'Special Elite', monospace", fontSize: 'clamp(15px, 2vw, 19px)' }}>
          {label}
        </span>
        <span style={{ fontFamily: "'Special Elite', monospace", fontSize: 'clamp(16px, 2.2vw, 20px)' }}>
          →
        </span>
      </div>
    </motion.a>
  )
}

export default NavCard
