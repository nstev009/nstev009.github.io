import { useState } from 'react';
import { Link } from 'react-router-dom';

// Import your images
import analytics from '../assets/images/analytics.png';
import bikeRepair from '../assets/images/bike_repair.jpg';
import ecommerce from '../assets/images/ecommerce.jpg';
import smallGame from '../assets/images/small_game.jpg';

function CaseStudies() {
  const [showModal, setShowModal] = useState(false);
  
  const handleCaseClick = () => {
    setShowModal(true);
    document.body.style.overflow = 'hidden'; // Prevent background scroll
  };

  return (
    <section id="case">
      {/* The first case study links directly to your React app */}
      <Link to="/case_studies/ServiceSite" className="case-btn" id="case-btn-1">
        <img src={bikeRepair} alt="Bike Repair" />
      </Link>
      
      {/* Other case studies show the "coming soon" modal */}
      <button className="case-btn" id="case-btn-2" onClick={handleCaseClick}>
        <img src={smallGame} alt="Small Video Game" />
      </button>
      
      <button className="case-btn" id="case-btn-3" onClick={handleCaseClick}>
        <img src={ecommerce} alt="E Commerce site" />
      </button>
      
      <button className="case-btn" id="case-btn-4" onClick={handleCaseClick}>
        <img src={analytics} alt="Analytics site" />
      </button>
    </section>
  );
}

export default CaseStudies;