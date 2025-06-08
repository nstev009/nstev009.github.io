import resumePdf from '../assets/images/NoahStevens_Resume.pdf';

function ResumeModal({ onClose }) {
  // Close when clicking outside the content
  const handleBackgroundClick = (e) => {
    if (e.target.id === 'resume-modal-bg') {
      onClose();
    }
  };

  return (
    <div id="resume-modal-bg" onClick={handleBackgroundClick}>
      <div id="resume-modal-content">
        <button 
          id="resume-modal-close" 
          aria-label="Close"
          onClick={onClose}
        >
          &times;
        </button>
        <iframe src={resumePdf} title="Resume"></iframe>
      </div>
    </div>
  );
}

export default ResumeModal;