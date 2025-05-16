import React, { useState } from "react";

const sections = [
  {
    title: "Cos'è la salute mentale?",
    content:
      "La salute mentale è uno stato di benessere in cui ogni individuo realizza le proprie capacità, può affrontare le normali tensioni della vita, lavorare in modo produttivo e contribuire alla comunità.",
  },
  {
    title: "I segnali dei problemi legati alla salute mentale",
    content:
      "Cambiamenti d'umore, difficoltà di concentrazione, isolamento sociale, disturbi del sonno o dell'appetito possono essere segnali di problemi di salute mentale.",
  },
  {
    title: "Perché è importante prendersi cura della salute mentale?",
    content:
      "Prendersi cura della salute mentale migliora la qualità della vita, le relazioni e la produttività, riducendo il rischio di sviluppare disturbi più gravi.",
  },
  {
    title: "A chi chiedere aiuto?",
    content:
      "Parlare con amici, familiari o professionisti della salute mentale è il primo passo per ricevere supporto e trovare le risorse giuste.",
  },
  {
    title: "Strategie per il benessere mentale",
    content:
      "Attività fisica, alimentazione equilibrata, sonno regolare, tecniche di rilassamento e mantenere relazioni sociali sono strategie utili per il benessere mentale.",
  },
];

const InfoSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="info-section"
      style={{ background: "#CFDDF7", minHeight: "100vh" }}
    >
      <h2 className="info-section-title">Guida alla Salute Mentale</h2>
      {sections.map((section, idx) => (
        <div
          className={`info-item ${openIndex === idx ? "open" : ""}`}
          key={idx}
        >
          <button className="info-title" onClick={() => handleToggle(idx)}>
            <span>{section.title}</span>
            <span
              className={`arrow ${openIndex === idx ? "arrow-open" : ""}`}
              aria-hidden="true"
            >
              ▼
            </span>
          </button>
          {openIndex === idx && (
            <div className="info-content">{section.content}</div>
          )}
        </div>
      ))}
    </section>
  );
};

export default InfoSection;