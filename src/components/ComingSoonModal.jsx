import { useEffect, useState } from 'react';

function ComingSoonModal() {
  const [showModal, setShowModal] = useState(false);

  // Event listener for case study buttons
  useEffect(() => {
    const caseBtns = document.querySelectorAll('.case-btn');
    
    const handleCaseClick = (e) => {
      // Only show modal for buttons that aren't the first one (ServiceSite)
      if (e.currentTarget.id !== 'case-btn-1') {
        e.preventDefault();
        setShowModal(true);
        document.body.style.overflow = 'hidden';
      }
    };
    
    caseBtns.forEach(btn => {
      if (btn.id !== 'case-btn-1') {
        btn.addEventListener('click', handleCaseClick);
      }
    });
    
    return () => {
      caseBtns.forEach(btn => {
        if (btn.id !== 'case-btn-1') {
          btn.removeEventListener('click', handleCaseClick);
        }
      });
    };
  }, []);

  const closeModal = () => {
    setShowModal(false);
    document.body.style.overflow = '';
  };

  // Close when clicking outside the content
  const handleBackgroundClick = (e) => {
    if (e.target.id === 'coming-soon-modal-bg') {
      closeModal();
    }
  };

  if (!showModal) return null;

  return (
    <div 
      id="coming-soon-modal-bg" 
      className="modal-bg active"
      onClick={handleBackgroundClick}
    >
      <div id="coming-soon-modal-content" className="modal-content">
        <button 
          id="coming-soon-modal-close" 
          className="modal-close" 
          aria-label="Close"
          onClick={closeModal}
        >
          &times;
        </button>
        <div className="coming-soon-container">
          <h2>Coming Soon!</h2>
          <p>This case study is currently under development.</p>
          <p>Check back later for updates!</p>
        </div>
      </div>
    </div>
  );
}

export default ComingSoonModal;