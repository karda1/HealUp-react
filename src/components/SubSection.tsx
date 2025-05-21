import sections from "../data/sectionsData.json";

const SubSection = ({ onCardClick }: { onCardClick: (id: string) => void }) => (
  <div id="subSection" className="container-fluid">
    <div
      className="row justify-content-center align-items-center flex-wrap"
      style={{ gap: "2rem" }}
    >
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
                <h3
                  className="card-title"
                  style={{ cursor: "pointer" }}
                  onClick={() => onCardClick(s.id)}
                >
                  {s.title}
                </h3>
                <p className="card-text">{s.description}</p>
              </div>
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
