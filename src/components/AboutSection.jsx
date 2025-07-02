import { useState } from 'react'

const AboutSection = () => {
  const [showResumeModal, setShowResumeModal] = useState(false)

  const handleResumeClick = () => {
    setShowResumeModal(true)
    document.body.style.overflow = 'hidden'
  }

  const handleCloseModal = () => {
    setShowResumeModal(false)
    document.body.style.overflow = ''
  }

  const handleModalBackgroundClick = (e) => {
    if (e.target.classList.contains('resume-modal-bg')) {
      handleCloseModal()
    }
  }

  return (
    <section id="about">
      <div className="resume" onClick={handleResumeClick}>
        <div className="resume-overlay">RESUME</div>
        <img src="/images/resume.png" alt="Resume Preview" />
      </div>

      <div className="title">
        Noah Stevens
      </div>

      <div className="about-content">
        I'm a 2nd year Software Engineering student at the University of Ottawa.
        
        This portfolio is a project I'll be continuously working on
        as part of my work load this semester.

        Currently, I'm looking for my next Co-op for Fall 2025.
      </div>

      <div className="me">
        <img src="/images/me.jpg" alt="Profile Photo" />
      </div>

      {/* Resume Modal */}
      {showResumeModal && (
        <div
          className={`resume-modal-bg ${showResumeModal ? 'active' : ''}`}
          onClick={handleModalBackgroundClick}
        >
          <div className="resume-modal-content">
            <button
              className="resume-modal-close"
              onClick={handleCloseModal}
              aria-label="Close"
            >
              &times;
            </button>
            <iframe
              src="/images/NoahStevens_Resume.pdf"
              title="Resume"
            />
          </div>
        </div>
      )}
    </section>
  )
}

export default AboutSection
