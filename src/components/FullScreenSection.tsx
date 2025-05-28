import type { FC, ReactNode } from "react";

//Componente che mostra una sezione a schermo intero con sfondo personalizzato
const FullScreenSection: FC<{
  children: ReactNode; //Contenuto della sezione
  bg?: string; //Colore di sfondo opzionale
}> = ({ children, bg = "light" }) => (
  <div
    className="d-flex align-items-center justify-content-center"
    style={{ minHeight: "100vh", backgroundColor: bg }}
  >
    <div className="container text-center">
      {children}
    </div>
  </div>
);

export default FullScreenSection;