import { useState } from 'react'
import './App.css'
import AboutSection from './components/AboutSection'
import CaseSection from './components/CaseSection'
import ComingSoonModal from './components/ComingSoonModal'
import HomeSection from './components/HomeSection'
import NavigationModal from './components/NavigationModal'
import WorkSection from './components/WorkSection'

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
