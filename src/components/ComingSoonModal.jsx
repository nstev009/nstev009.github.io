import React from 'react'

const ComingSoonModal = ({ isOpen, onClose }) => {
  const handleBackgroundClick = (e) => {
    if (e.target.classList.contains('modal-bg')) {
      onClose()
    }
  }

  const handleClose = () => {
    onClose()
    document.body.style.overflow = ''
  }

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div 
      className={`modal-bg ${isOpen ? 'active' : ''}`}
      onClick={handleBackgroundClick}
    >
      <div className="modal-content">
        <button 
          className="modal-close" 
          onClick={handleClose}
          aria-label="Close"
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
  )
}

export default ComingSoonModal
