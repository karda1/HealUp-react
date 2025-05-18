import React, { useState } from "react";

const sections = [
  {
    title: "Cos'è la salute mentale?",
    content: "La salute mentale è uno stato di benessere emotivo, psicologico e sociale che permette a ciascun individuo di affrontare le sfide della vita, lavorare in modo produttivo, instaurare relazioni positive e contribuire attivamente alla comunità. Non significa solo l’assenza di disturbi o malattie mentali, ma anche la capacità di gestire lo stress, riconoscere le proprie emozioni, sviluppare resilienza e prendere decisioni consapevoli. Prendersi cura della propria salute mentale è fondamentale in ogni fase della vita, dall’infanzia all’età adulta, e influisce profondamente sulla qualità della vita, sulle relazioni e sul benessere generale.",
  },
  {
    title: "I segnali dei problemi legati alla salute mentale",
    content: "I segnali di possibili problemi di salute mentale possono variare da persona a persona, ma alcuni sintomi comuni includono cambiamenti improvvisi d'umore, difficoltà di concentrazione, perdita di interesse per le attività quotidiane, isolamento sociale, irritabilità o rabbia immotivata, disturbi del sonno o dell'appetito, stanchezza persistente e sensazione di vuoto o tristezza profonda. Altri segnali possono essere ansia costante, difficoltà a gestire lo stress, pensieri negativi ricorrenti o senso di colpa eccessivo. Riconoscere questi segnali è importante per poter chiedere aiuto e intervenire tempestivamente, migliorando così il proprio benessere psicologico.",
  },
  {
    title: "Perché è importante prendersi cura della salute mentale?",
    content: "Prendersi cura della salute mentale è fondamentale perché influisce su ogni aspetto della nostra vita: dal modo in cui pensiamo, sentiamo e agiamo, fino alla qualità delle nostre relazioni e alla capacità di affrontare le difficoltà. Una buona salute mentale favorisce la resilienza, la produttività e il benessere generale, riducendo il rischio di sviluppare disturbi psicologici più gravi. Investire nella propria salute mentale significa anche prevenire problemi futuri e migliorare la qualità della vita quotidiana.",
  },
  {
    title: "A chi chiedere aiuto?",
    content: "Se senti di avere difficoltà a gestire le emozioni, lo stress o altri aspetti della tua salute mentale, è importante non affrontare tutto da solo. Puoi rivolgerti ad amici e familiari di fiducia per un primo supporto, ma anche a figure professionali come psicologi, psicoterapeuti, medici di base o centri di ascolto. Chiedere aiuto è un segno di forza e il primo passo per trovare le risorse e le strategie più adatte al tuo benessere.",
  },
  {
    title: "Strategie per il benessere mentale",
    content: "Per mantenere e migliorare il benessere mentale è utile adottare alcune strategie quotidiane: praticare attività fisica regolare, seguire un’alimentazione equilibrata, dormire a sufficienza, coltivare relazioni sociali positive e dedicare tempo a hobby e passioni. Tecniche di rilassamento come la meditazione, la mindfulness o la respirazione profonda possono aiutare a gestire lo stress. Non esitare a chiedere supporto quando ne senti il bisogno e ricorda che prendersi cura di sé è un percorso continuo.",
  }
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