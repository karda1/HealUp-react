import { useState } from "react";

const infoSections = [
  {
    title: "Cos'è la salute mentale?",
    content:
      "La salute mentale è uno stato di benessere emotivo, psicologico e sociale che permette di affrontare le sfide della vita, lavorare in modo produttivo e instaurare relazioni positive. Non è solo assenza di disturbi, ma anche capacità di gestire lo stress, riconoscere le emozioni e sviluppare resilienza.",
  },
  {
    title: "I segnali dei problemi legati alla salute mentale",
    content:
      "Sintomi comuni: cambiamenti d'umore, difficoltà di concentrazione, perdita di interesse, isolamento, irritabilità, disturbi del sonno o dell'appetito, stanchezza, ansia, pensieri negativi ricorrenti. Riconoscerli è importante per chiedere aiuto.",
  },
  {
    title: "Perché è importante prendersi cura della salute mentale?",
    content:
      "La salute mentale influisce su pensieri, emozioni, relazioni e capacità di affrontare le difficoltà. Favorisce resilienza, produttività e benessere generale, riducendo il rischio di disturbi psicologici.",
  },
  {
    title: "A chi chiedere aiuto?",
    content:
      "Parla con amici, familiari o professionisti come psicologi, medici di base o centri di ascolto. Chiedere aiuto è un segno di forza.",
  },
  {
    title: "Strategie per il benessere mentale",
    content:
      "Attività fisica, alimentazione equilibrata, sonno regolare, relazioni positive, hobby, tecniche di rilassamento come meditazione e mindfulness. Chiedi supporto quando serve.",
  },
];

const InfoSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      className="info-section"
      style={{ background: "#CFDDF7", minHeight: "100vh" }}
    >
      <h2 className="info-section-title">Guida alla Salute Mentale</h2>
      {infoSections.map((s, i) => {
        const isOpen = open === i;
        return (
          <div className={`info-item${isOpen ? " open" : ""}`} key={i}>
            <button
              className="info-title"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span>{s.title}</span>
              <span className={`arrow${isOpen ? " arrow-open" : ""}`}>▼</span>
            </button>
            <div className={`info-content-anim${isOpen ? " show" : ""}`}>
              <div className="info-content">{s.content}</div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default InfoSection;
