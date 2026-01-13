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
        I'm a 3rd year Software Engineering student at the University of Ottawa.

        I am currently searching for a Co-op for the Spring - Summer 2026. Any inquires, please feel free to contact me at stevenscnoah@gmail.com. 
      </div>

      <div className="me">
        <img src="/images/me_update.jpg" alt="Profile Photo" />
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
              src="/images/Noah_Stevens_Resume_1p.pdf"
              title="Resume"
            />
          </div>
        </div>
      )}
    </section>
  )
}

export default AboutSection
