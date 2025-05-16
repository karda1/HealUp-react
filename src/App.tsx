import { useState } from "react";
import sections from "./data/sectionsData.json";
import Navbar from "./components/Navbar";
import FullScreenSection from "./components/FullScreenSection";
import Footer from "./components/Footer";
import ParticlesCustom from "./components/ParticlesCustom";
import SubSection from "./components/SubSection";
import InfoSection from "./components/InfoSection";
import { useEffect } from "react";



function App() {
  const [selectedSectionId, setSelectedSectionId] = useState<string | null>(
    null
  );

  useEffect(() => {
    document.title = "HealUp";
  }, []);

  // Trova la sezione selezionata
  const selectedSection = sections.find((sec) => sec.id === selectedSectionId);

  // Funzione per gestire il clic su una sezione dalla Navbar
  const handleSectionClick = (id: string) => {
    setSelectedSectionId(id);
  };

  return (
    <>
      {/* Aggiungi il componente ParticlesCustom */}
      <ParticlesCustom   />
      <Navbar onSectionClick={handleSectionClick} />{" "}
      {/* Passiamo la funzione alla Navbar */}
      {selectedSection ? (
        <FullScreenSection bg={selectedSection.bg} type="secondary">
          <h2>{selectedSection.title}</h2>
          <p>{selectedSection.description}</p>
        </FullScreenSection>
      ) : (
        <>
          <FullScreenSection bg="#CFF7D3">
            <h1>HealUp</h1>
            <h3>prenditi cura di te, ogni giorno</h3>
          </FullScreenSection>

          <FullScreenSection bg="#CFF7F4">
            <h2>Benvenuto su HealUp!</h2>
            <p className="mx-auto nomebello">
              La salute è un percorso, non una meta. HealUp nasce per
              accompagnarti ogni giorno nella cura di te stesso, attraverso
              semplici abitudini che fanno la differenza. Qui troverai consigli
              pratici e approfondimenti su alimentazione equilibrata, attività
              fisica, igiene personale, qualità del sonno e gestione dello
              stress. Ogni sezione è pensata per aiutarti a vivere meglio, con
              più consapevolezza, energia e serenità. HealUp è il tuo spazio di
              benessere: un passo alla volta, verso una vita più sana e
              armoniosa.
            </p>
          </FullScreenSection>

          {/*{sections.map((section) => (
            <FullScreenSection
              key={section.id}
              bg={section.bg}
              type="secondary"
            >
              <h2
                style={{ cursor: "pointer", transition: "transform 0.3s" }}
                onClick={() => setSelectedSectionId(section.id)} // Mantieni il click per selezionare la sezione
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                {section.title}
              </h2>
              <p>{section.description}</p>
            </FullScreenSection>
          ))}*/}
        </>
      )}
      <InfoSection />
      <SubSection />
      <Footer />
    </>
  );
}

export default App;
