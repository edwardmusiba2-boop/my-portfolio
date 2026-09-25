import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">

        <Link to="/" className="logo" onClick={closeMenu}>
          Edward Musiba
        </Link>

        {/* Desktop Navigation */}
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/experience">Experience</Link>
          <Link to="/certifications">Certifications</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`menu-button ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile Navigation */}
        <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>

          <Link to="/" onClick={closeMenu}>
            Home
          </Link>

          <Link to="/about" onClick={closeMenu}>
            About
          </Link>

          <Link to="/skills" onClick={closeMenu}>
            Skills
          </Link>

          <Link to="/projects" onClick={closeMenu}>
            Projects
          </Link>

          <Link to="/experience" onClick={closeMenu}>
            Experience
          </Link>

            <Link to="/certifications" onClick={closeMenu}>
                Certifications
            </Link>

          <Link to="/contact" onClick={closeMenu}>
            Contact
          </Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;