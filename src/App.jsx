import { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ComingSoonModal from './components/ComingSoonModal';
import Navigation from './components/Navigation';
import About from './sections/About';
import CaseStudies from './sections/CaseStudies';
import Home from './sections/Home';
import Work from './sections/Work';

// Import your styles
import './styles/about.css';
import './styles/case.css';
import './styles/home.css';
import './styles/modal.css';
import './styles/style.css';
import './styles/work.css';

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // This will run when the component mounts
  useEffect(() => {
    // Set the document title
    document.title = 'Noah Stevens - Portfolio';
    
    // Ensure the page starts at the top when loaded
    window.scrollTo(0, 0);
  }, []);

  return (
    <Router>
      <div className="app">
        <Navigation /> {/* Put the navigation at the top */}
        <Home />
        <CaseStudies />
        <Work />
        <About />
        <ComingSoonModal />
      </div>
    </Router>
  );
}

export default App;