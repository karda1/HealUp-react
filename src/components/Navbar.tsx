import { useState } from "react";

const menuItems = [
  { id: "home", label: "Home" },
  { id: "contatti", label: "Contatti" },
  { id: "about", label: "About" },
  { id: "alimentazione-sana", label: "Alimentazione sana" },
  { id: "attivita-fisica", label: "Attività fisica" },
  { id: "sonno-e-riposo", label: "Sonno e riposo" },
  { id: "gestione-dello-stress", label: "Gestione dello stress" },
];

const Navbar = ({
  onSectionClick,
}: {
  onSectionClick: (id: string) => void;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="navbar glass-navbar fixed-top d-flex justify-content-between align-items-center px-4">
        <a
          className="navbar-brand d-flex align-items-center"
          href="#"
          onClick={() => onSectionClick("home")}
        >
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
          onClick={() => setOpen((v) => !v)}
        >
          <span style={{ fontSize: "1.5rem" }}>☰</span>
        </button>
      </nav>
      {open && (
        <div className="menu-bar">
          <ul className="menu-list">
            {menuItems.map((item) => (
              <li key={item.id}>
                <a
                  className="menu-item"
                  href="#"
                  onClick={() => onSectionClick(item.id)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
