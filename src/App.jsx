import { useState, useEffect } from 'react'
import './App.css'
import HomeSection from './components/HomeSection'
import CaseSection from './components/CaseSection'
import WorkSection from './components/WorkSection'
import AboutSection from './components/AboutSection'
import NavigationModal from './components/NavigationModal'
import ComingSoonModal from './components/ComingSoonModal'

function App() {
  const [showComingSoonModal, setShowComingSoonModal] = useState(false)

  return (
    <>
      <HomeSection />
      <CaseSection onComingSoon={() => setShowComingSoonModal(true)} />
      <WorkSection />
      <AboutSection />
      <NavigationModal />
      <ComingSoonModal 
        isOpen={showComingSoonModal} 
        onClose={() => setShowComingSoonModal(false)} 
      />
    </>
  )
}

export default App
