import type { FC } from "react";

const Navbar: FC = () => {
  return (
    <nav className="navbar bg-body-tertiary fixed-top bg-opacity-50 glass-navbar">
      <div className="container-md d-flex justify-content-between">
        <a className="navbar-brand" href="#">
          <img
            src="src/assets/react.svg"
            alt="React"
            width="30"
            height="30"
          />
          HealUp
        </a>

        <div className="dropdown">
          <button
            className="btn btn-light d-flex align-items-center justify-content-center"
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span style={{ fontSize: "1.5rem", lineHeight: "1" }}>☰</span>
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li><a className="dropdown-item" href="#">Home</a></li>
            <li><a className="dropdown-item" href="#">Contatti</a></li>
            <li><a className="dropdown-item" href="#">About</a></li>
            <li><a className="dropdown-item" href="#">Alimentazione sana</a></li>
            <li><a className="dropdown-item" href="#">Igiene</a></li>
            <li><a className="dropdown-item" href="#">Attività fisica</a></li>
            <li><a className="dropdown-item" href="#">Sonno e riposo</a></li>
            <li><a className="dropdown-item" href="#">Gestione dello stress</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
