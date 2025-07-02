
const NavigationModal = ({ currentSection }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Determine if navbar should be centered (on home) or at top (other sections)
  const navPosition = currentSection === 'home' ? 'nav-centered' : 'nav-top'

  return (
    <div id="nav-modal-bg" className="modal-bg active">
      <div 
        id="nav-modal-content" 
        className={`modal-content ${navPosition}`}
      >
        <div className="modal-nav-links">
          <a 
            href="#home" 
            className={currentSection === 'home' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); scrollToSection('home') }}
          >
            Home
          </a>
          <a 
            href="#case" 
            className={currentSection === 'case' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); scrollToSection('case') }}
          >
            Case Studies
          </a>
          <a 
            href="#work" 
            className={currentSection === 'work' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); scrollToSection('work') }}
          >
            How I Work
          </a>
          <a 
            href="#about" 
            className={currentSection === 'about' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); scrollToSection('about') }}
          >
            About Me
          </a>
        </div>
      </div>
    </div>
  )
}

export default NavigationModal
