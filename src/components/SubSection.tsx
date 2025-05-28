import sections from "../data/sectionsData.json";

//Componente che mostra le sottosezioni come card cliccabili
const SubSection = ({ onCardClick }: { onCardClick: (id: string) => void }) => ( //Props che riceve il componente, una funzione per gestire il click sulla card
  <div id="subSection" className="container-fluid">
    <div
      className="row justify-content-center align-items-center flex-wrap"
      style={{ gap: "2rem" }}
    >
      {/*Ciclo su tutte le sezioni per creare una card per ciascuna*/}
      {sections.map((s) => (
        <div
          className="col-12 col-md-5 d-flex justify-content-center mb-4 mb-md-0"
          key={s.id}
        >
          <div id="card" className="card h-100 w-100">
            <div
              className="card-body d-flex flex-row align-items-center h-100"
              style={{ gap: "1rem" }}
            >
              <div className="flex-grow-1">
                {/*Titolo della card, cliccabile per cambiare sezione*/}
                <h3
                  className="card-title"
                  style={{ cursor: "pointer" }}
                  onClick={() => onCardClick(s.id)}
                >
                  {s.title}
                </h3>
                {/*Descrizione della sezione*/}
                <p className="card-text">{s.description}</p>
              </div>
              {/*Immagine della sezione, se presente*/}
              {s.image?.src && (
                <img
                  id="cardImage"
                  src={s.image.src}
                  alt={s.title}
                  className="img-fluid d-block"
                />
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default SubSection;