import { useState } from "react";
import type { FC } from "react";

interface NavbarProps {
  onSectionClick: (id: string) => void;
}

const Navbar: FC<NavbarProps> = ({ onSectionClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <nav className="navbar glass-navbar fixed-top d-flex justify-content-between align-items-center px-4">
        <a className="navbar-brand d-flex align-items-center" href="#" onClick={() => onSectionClick("home")}>
          <img
            src="src/assets/react.svg"
            alt="React"
            width="30"
            height="30"
            className="me-2"
          />
          HealUp
        </a>

        <button
          className="btn btn-light d-flex align-items-center justify-content-center"
          type="button"
          onClick={toggleMenu}
        >
          <span style={{ fontSize: "1.5rem", lineHeight: "1" }}>☰</span>
        </button>
      </nav>

      {isMenuOpen && (
        <div className="menu-bar">
          <ul className="menu-list">
            <li><a className="menu-item" href="#" onClick={() => onSectionClick("home")}>Home</a></li>
            <li><a className="menu-item" href="#" onClick={() => onSectionClick("contatti")}>Contatti</a></li>
            <li><a className="menu-item" href="#" onClick={() => onSectionClick("about")}>About</a></li>
            <li><a className="menu-item" href="#" onClick={() => onSectionClick("alimentazione-sana")}>Alimentazione sana</a></li>
            <li><a className="menu-item" href="#" onClick={() => onSectionClick("igiene")}>Igiene</a></li>
            <li><a className="menu-item" href="#" onClick={() => onSectionClick("attivita-fisica")}>Attività fisica</a></li>
            <li><a className="menu-item" href="#" onClick={() => onSectionClick("sonno-e-riposo")}>Sonno e riposo</a></li>
            <li><a className="menu-item" href="#" onClick={() => onSectionClick("gestione-dello-stress")}>Gestione dello stress</a></li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
