import { useState } from 'react';
import ResumeModal from '../components/ResumeModal';

// Import your images
import profileImg from '../assets/images/me.jpg';
import resumeImg from '../assets/images/resume.png';

function About() {
  const [showResumeModal, setShowResumeModal] = useState(false);

  const openResumeModal = () => {
    setShowResumeModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeResumeModal = () => {
    setShowResumeModal(false);
    document.body.style.overflow = '';
  };

  return (
    <section id="about">
      <div className="resume" id="resume-trigger" onClick={openResumeModal}>
        <div className="resume-overlay">RESUME</div>
        <img src={resumeImg} alt="Resume Preview" />
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
        <img src={profileImg} alt="Profile Photo" />
      </div>

      {showResumeModal && (
        <ResumeModal onClose={closeResumeModal} />
      )}
    </section>
  );
}

export default About;