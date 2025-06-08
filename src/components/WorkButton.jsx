function WorkButton({ index, text, onButtonClick }) {
  return (
    <button 
      className="work-btn" 
      data-index={index}
      onClick={onButtonClick}
    >
      {text}
    </button>
  );
}

export default WorkButton;