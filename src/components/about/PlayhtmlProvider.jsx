import { PlayProvider } from '@playhtml/react'
import { useLocation } from 'react-router-dom'

function PlayhtmlProvider({ children }) {
  const location = useLocation()

  return (
    <PlayProvider pathname={location.pathname}>
      {children}
    </PlayProvider>
  )
}

export default PlayhtmlProvider
