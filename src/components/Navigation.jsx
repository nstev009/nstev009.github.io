import { Link } from 'react-scroll';

function Navigation() {
  return (
    <header className="fixed-header">
      <nav className="main-nav">
        <div className="nav-links">
          <Link 
            to="home" 
            spy={true}
            smooth={true} 
            duration={500}
            offset={0}
            activeClass="active"
          >
            Home
          </Link>
          <Link 
            to="case" 
            spy={true}
            smooth={true} 
            duration={500}
            offset={0}
            activeClass="active"
          >
            Case Studies
          </Link>
          <Link 
            to="work" 
            spy={true}
            smooth={true} 
            duration={500}
            offset={0}
            activeClass="active"
          >
            How I Work
          </Link>
          <Link 
            to="about" 
            spy={true}
            smooth={true} 
            duration={500}
            offset={0}
            activeClass="active"
          >
            About Me
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navigation;