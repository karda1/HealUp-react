import type { FC } from "react";
import sections from "../data/sectionsData.json";

interface SubSectionProps {
  onCardClick: (id: string) => void;
}

const SubSection: FC<SubSectionProps> = ({ onCardClick }) => (
  <div id="subSection"
    className="container-fluid"
  >
    <div className="row justify-content-center align-items-center flex-wrap" style={{ gap: "2rem" }}>
      {sections.map((section, idx) => (
        <div
          className="col-12 col-md-5 d-flex justify-content-center mb-4 mb-md-0"
          key={section.id}
        >
          <div id="card"
            className="card h-100 w-100"
          >
            <div className="card-body d-flex flex-column justify-content-center h-100">
              <h3
                className="card-title"
                style={{ cursor: "pointer" }}
                onClick={() => onCardClick(section.id)}
              >
                {section.title}
              </h3>
              <p className="card-text">{section.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default SubSection;