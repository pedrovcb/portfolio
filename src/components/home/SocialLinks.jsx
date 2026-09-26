import { motion } from 'framer-motion'

const SOCIAL_LINKS = [
  {
    href: 'https://github.com/pedrovcb',
    src: '/images/githubLogo.png',
    alt: 'GitHub',
    label: 'GitHub',
  },
  {
    href: 'https://www.linkedin.com/in/pedrobedor/',
    src: '/images/linkedinLogo.png',
    alt: 'LinkedIn',
    label: 'LinkedIn',
  },
  {
    href: 'https://pedrovcb.itch.io',
    src: '/images/itchioLogo.png',
    alt: 'Itch.io',
    label: 'Itch.io',
  },
]

function SocialLinks() {
  return (
    <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
      {SOCIAL_LINKS.map((link) => (
        <motion.a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.15, opacity: 0.8 }}
          whileTap={{ scale: 0.95 }}
          aria-label={link.label}
        >
          <img
            src={link.src}
            alt={link.alt}
            style={{ width: '28px', height: '28px' }}
          />
        </motion.a>
      ))}
    </div>
  )
}

export default SocialLinks
