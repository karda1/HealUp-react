import { useState, useRef, useEffect } from "react";

//Array degli elementi del MenuBar
const menuItems = [
  { id: "home", label: "Home" },
  { id: "contatti", label: "Contatti" },
  { id: "alimentazione-sana", label: "Alimentazione sana" },
  { id: "attivita-fisica", label: "Attività fisica" },
  { id: "sonno-e-riposo", label: "Sonno e riposo" },
  { id: "gestione-dello-stress", label: "Gestione dello stress" },
  { id: "igiene", label: "Igiene" },
  { id: "relazioni", label: "Relazioni sane" },
];

//Tipizzazione delle props (parametri) del componente Navbar
type NavbarProps = { //oggetto TypeScript che specifica che il componente Navbar deve ricevere una prop chiamata onSectionClick (funzione che prende come parametro una stringa e non ritorna nulla)
  onSectionClick: (id: string) => void;
};

const Navbar = ({ onSectionClick }: NavbarProps) => {
  //Stato per gestire l'apertura/chiusura del MenuBar
  const [open, setOpen] = useState(false); //Inizializzalo stato open a false, quindi il MenuBar è chiuso all'inizio
  //Reference per il menu, usato per rilevare i click fuori dal menu
  const menuRef = useRef<HTMLDivElement>(null); 

  //Effetto per chiudere il menu quando si clicca fuori da esso
  useEffect(() => {
    if (!open) return; //Se il menu non è aperto, non aggiunge l'event listener
    const handleClickOutside = (event: MouseEvent) => {
      //Se il click è fuori dal menu, chiude il menu
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) { //Controlla se il target del click non è dentro il menu
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside); //Aggiunge un event listener per il click del mouse
    //Chiude l'ascoltatore (event listener)
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]); //UseEffect si attiva quando lo stato open cambia

  return (
    <>
      {/*Navbar*/}
      <nav className="navbar glass-navbar fixed-top d-flex justify-content-between align-items-center px-4">
        {/*Logo e titolo*/}
        <a
          className="navbar-brand d-flex align-items-center"
          href="#"
          onClick={() => onSectionClick("home")}
        >
          <img
            src="/img/heart.png"
            alt="HealUp"
            width={30}
            height={30}
            className="me-2"
          />
          HealUp
        </a>
        {/*Bottone per aprire/chiudere il MenuBar*/}
        <button
          className="btn d-flex align-items-center justify-content-center"
          type="button"
          onClick={() => setOpen((v) => !v)} //Cambia lo stato open quando il bottone viene cliccato (se chiuso lo apre, se aperto lo chiude)
        >
          <span style={{ fontSize: "1.5rem" }}>☰</span>
        </button>
      </nav>
      {/*MenuBar, visibile solo se open è true*/}
      {open && (
        <div className="menu-bar" ref={menuRef}>
          <ul className="menu-list">
            {menuItems.map((item) => (
              <li key={item.id}>
                {/*Ogni voce di MenuBar richiama onSectionClick e chiude il MenuBar*/}
                <a
                  className="menu-item"
                  href="#"
                  onClick={() => {
                    onSectionClick(item.id);
                    setOpen(false);
                  }}
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