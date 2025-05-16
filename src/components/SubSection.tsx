import type { FC } from "react";

const SubSection: FC = () => (
  <div
    className="container-fluid"
    style={{
      backgroundColor: "#B4F5FA",
      minHeight: "100vh",
      width: "100vw",
      margin: 0,
      padding: "4rem 0",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    }}
  >
    {/* Prima riga di card */}
    <div
      className="row justify-content-center align-items-center mb-4"
      style={{ gap: "2rem" }}
    >
      <div className="col-12 col-md-5 d-flex justify-content-center mb-4 mb-md-0">
        <div
          className="card h-100 w-100"
          style={{
            padding: "3rem",
            minHeight: "400px",
            background: "rgba(255,255,255,0.6)",
            border: "none",
            boxShadow: "0 2px 16px rgba(0,0,0,0.07)",
          }}
        >
          <div className="card-body d-flex flex-column justify-content-center h-100">
            <h3 className="card-title">Gestione dello stress</h3>
            <p className="card-text">
              Gestire lo stress è fondamentale per il benessere mentale e
              fisico. Tecniche di rilassamento e consapevolezza aiutano a
              ritrovare equilibrio, calma e concentrazione.
            </p>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-5 d-flex justify-content-center">
        <div
          className="card h-100 w-100"
          style={{
            padding: "3rem",
            minHeight: "400px",
            background: "rgba(255,255,255,0.6)",
            border: "none",
            boxShadow: "0 2px 16px rgba(0,0,0,0.07)",
          }}
        >
          <div className="card-body d-flex flex-column justify-content-center h-100">
            <h3 className="card-title">Attività fisica</h3>
            <p className="card-text">
              L’attività fisica è un gesto quotidiano di cura verso sé stessi.
              Favorisce salute, equilibrio emotivo e qualità della vita, a ogni
              età e in ogni fase del percorso.
            </p>
          </div>
        </div>
      </div>
    </div>
    {/* Seconda riga di card, più alte */}
    <div
      className="row justify-content-center align-items-center"
      style={{ gap: "2rem" }}
    >
      <div className="col-12 col-md-5 d-flex justify-content-center mb-4 mb-md-0">
        <div
          className="card h-100 w-100"
          style={{
            padding: "3rem",
            minHeight: "500px",
            background: "rgba(255,255,255,0.6)",
            border: "none",
            boxShadow: "0 2px 16px rgba(0,0,0,0.07)",
          }}
        >
          <div className="card-body d-flex flex-column justify-content-center h-100">
            <h3 className="card-title">Alimentazione sana</h3>
            <p className="card-text">
              Mangiare sano è un gesto quotidiano di cura verso sé stessi.
              Favorisce lucidità mentale, energia e benessere a ogni età.
            </p>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-5 d-flex justify-content-center">
        <div
          className="card h-100 w-100"
          style={{
            padding: "3rem",
            minHeight: "500px",
            background: "rgba(255,255,255,0.6)",
            border: "none",
            boxShadow: "0 2px 16px rgba(0,0,0,0.07)",
          }}
        >
          <div className="card-body d-flex flex-column justify-content-center h-100">
            <h3 className="card-title">Sonno e riposo</h3>
            <p className="card-text">
              Un sonno di qualità e un buon riposo sono essenziali per
              rigenerare corpo e mente, migliorando la salute, l’energia e la
              capacità di affrontare le sfide quotidiane.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default SubSection;
