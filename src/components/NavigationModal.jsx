import React from 'react'

const NavigationModal = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div id="nav-modal-bg" className="modal-bg active">
      <div 
        id="nav-modal-content" 
        className="modal-content nav-top"
      >
        <div className="modal-nav-links">
          <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home') }}>
            Home
          </a>
          <a href="#case" onClick={(e) => { e.preventDefault(); scrollToSection('case') }}>
            Case Studies
          </a>
          <a href="#work" onClick={(e) => { e.preventDefault(); scrollToSection('work') }}>
            How I Work
          </a>
          <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about') }}>
            About Me
          </a>
        </div>
      </div>
    </div>
  )
}

export default NavigationModal
