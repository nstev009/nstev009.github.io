import { useEffect, useState } from 'react'
import './App.css'
import AboutSection from './components/AboutSection'
import CaseSection from './components/CaseSection'
import ComingSoonModal from './components/ComingSoonModal'
import HomeSection from './components/HomeSection'
import NavigationModal from './components/NavigationModal'
import WorkSection from './components/WorkSection'

function App() {
  const [showComingSoonModal, setShowComingSoonModal] = useState(false)
  const [currentSection, setCurrentSection] = useState('home')

  useEffect(() => {
    // Intersection Observer to detect which section is in view
    const observerOptions = {
      root: null,
      rootMargin: '-10% 0px -60% 0px', // Trigger when section is more prominently in view
      threshold: 0
    }

    const observerCallback = (entries) => {
      // Find the entry with the highest intersection ratio
      let maxRatio = 0
      let activeEntry = null
      
      entries.forEach((entry) => {
        if (entry.intersectionRatio > maxRatio) {
          maxRatio = entry.intersectionRatio
          activeEntry = entry
        }
      })
      
      if (activeEntry && activeEntry.intersectionRatio > 0) {
        setCurrentSection(activeEntry.target.id)
      }
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    // Observe all sections
    const sections = document.querySelectorAll('section[id]')
    sections.forEach((section) => observer.observe(section))

    // Set initial section based on scroll position
    const handleInitialSection = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      const currentPos = scrollY + windowHeight / 2
      
      let currentSectionId = 'home'
      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        
        if (currentPos >= sectionTop && currentPos < sectionTop + sectionHeight) {
          currentSectionId = section.id
        }
      })
      
      setCurrentSection(currentSectionId)
    }

    // Call on initial load
    handleInitialSection()

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  return (
    <>
      <HomeSection />
      <CaseSection onComingSoon={() => setShowComingSoonModal(true)} />
      <WorkSection />
      <AboutSection />
      <NavigationModal currentSection={currentSection} />
      <ComingSoonModal
        isOpen={showComingSoonModal}
        onClose={() => setShowComingSoonModal(false)}
      />
    </>
  )
}

export default App
