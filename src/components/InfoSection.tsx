import { useState } from "react";

const infoSections = [
  {
    title: "Cos'è la salute mentale?",
    content:
      "La salute mentale è uno stato di benessere che coinvolge emozioni, pensieri e relazioni. Significa sentirsi in equilibrio, riuscire ad affrontare le sfide della vita, lavorare in modo produttivo e costruire rapporti positivi con gli altri. Non è solo assenza di disturbi, ma anche la capacità di riconoscere le proprie emozioni, gestire lo stress e prendersi cura di sé.",
  },
  {
    title: "Quali sono i segnali dei problemi legati alla salute mentale?",
    content:
      "Quando qualcosa non va, la mente spesso ci manda dei segnali. Potresti sentirti più triste, irritabile o ansioso del solito, oppure notare che ti manca la voglia di fare cose che prima ti piacevano. A volte può essere difficile concentrarsi, dormire bene o trovare energia anche dopo aver riposato. Può capitare di isolarsi dagli altri, di avere pensieri negativi ricorrenti o di notare cambiamenti nell’appetito. Questi segnali non vanno ignorati: ascoltarli è il primo passo per prendersi cura di sé e chiedere aiuto se serve.",
  },
  {
    title: "Perché è importante prendersi cura della salute mentale?",
    content:
      "Prendersi cura della propria salute mentale significa volersi bene ogni giorno. Il benessere mentale ci aiuta a vivere con più serenità, a gestire meglio le difficoltà e a costruire relazioni più forti. Una buona salute mentale favorisce la resilienza, la creatività e la capacità di affrontare i cambiamenti. Investire su di sé, anche con piccoli gesti quotidiani, migliora la qualità della vita e riduce il rischio di disturbi psicologici.",
  },
  {
    title: "A chi chiedere aiuto?",
    content:
      "Non sei solo: se senti il bisogno di parlare, rivolgiti a persone di cui ti fidi, come amici o familiari. Anche i professionisti, come psicologi, medici di base o centri di ascolto, sono pronti ad ascoltarti e a darti supporto. Chiedere aiuto è un atto di coraggio e un segno di forza, non di debolezza. Condividere ciò che provi può fare davvero la differenza.",
  },
  {
    title: "Strategie per il benessere mentale",
    content:
      "Prendersi cura della propria salute mentale significa concedersi attenzione e gentilezza ogni giorno. Anche una semplice passeggiata o un po’ di movimento possono aiutare a liberare la mente e migliorare l’umore. Mangiare in modo sano e regolare sostiene il benessere psicofisico, mentre dormire bene ti permette di affrontare la giornata con più energia. Coltiva le relazioni con le persone che ti fanno stare bene e non avere paura di condividere le tue emozioni. Trova tempo per te stesso, dedicandoti a ciò che ami o semplicemente rilassandoti. Tecniche come la meditazione, la respirazione profonda o la mindfulness possono aiutare a ridurre lo stress. E se senti il bisogno di un aiuto in più, ricorda che parlare con qualcuno di fiducia o con un professionista può fare davvero la differenza. Il benessere mentale si costruisce giorno dopo giorno, con piccoli gesti e tanta cura verso sé stessi.",
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
