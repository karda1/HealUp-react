import { useState, useEffect } from "react";
import sections from "./data/sectionsData.json";
import Navbar from "./components/Navbar";
import FullScreenSection from "./components/FullScreenSection";
import Footer from "./components/Footer";
import ParticlesCustom from "./components/ParticlesCustom";
import SubSection from "./components/SubSection";
import InfoSection from "./components/InfoSection";
import ContactSection from "./components/contactSection";

function App() {
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    document.title = "HealUp";
  }, []);

  // Se hai rimosso "contatti" dal JSON, questa variabile sarà undefined quando selected === "contatti"
  const section = sections.find((s) => s.id === selected);

  return (
    <>
      <ParticlesCustom />
      <Navbar onSectionClick={setSelected} />
      {selected === "contatti" ? (
        <FullScreenSection bg="#63B8FF" type="secondary">
          <div className="container py-5">
            <div className="row justify-content-center">
              <div className="col-12">
                <h2 id="pageTitle" className="text-center">
                  Contatti
                </h2>
              </div>
              <div className="col-12 col-md-10 col-lg-8">
                <div id="textCard" className="card shadow">
                  <div className="card-body p-4 p-md-5">
                    <ContactSection />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FullScreenSection>
      ) : section ? (
        <FullScreenSection bg={section.bg || "#fff"} type="secondary">
          <div className="container py-5">
            <div className="row justify-content-center">
              <div className="col-12">
                <h2 id="pageTitle" className="text-center">
                  {section.title}
                </h2>
              </div>
              <div className="col-12 col-md-10 col-lg-8">
                <div id="textCard" className="card shadow">
                  <div className="card-body p-4 p-md-5">
                    <div
                      id="pageText"
                      dangerouslySetInnerHTML={{ __html: section.sectionText }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FullScreenSection>
      ) : (
        <>
          <FullScreenSection bg="#CFF7D3">
            <h1>HealUp</h1>
            <h4 id="subTitle">prenditi cura di te, ogni giorno</h4>
          </FullScreenSection>
          <FullScreenSection bg="#CFF7F4">
            <h2>Benvenuto su HealUp!</h2>
            <p className="mx-auto nomebello">
              La salute è un percorso, non una meta. HealUp nasce per
              accompagnarti ogni giorno nella cura di te stesso, attraverso
              semplici abitudini che fanno la differenza. Qui troverai consigli
              pratici e approfondimenti su alimentazione equilibrata, attività
              fisica, qualità del sonno e gestione dello stress. Ogni sezione è
              pensata per aiutarti a vivere meglio, con più consapevolezza,
              energia e serenità. HealUp è il tuo spazio di benessere: un passo
              alla volta, verso una vita più sana e armoniosa.
            </p>
          </FullScreenSection>
          <InfoSection />
          <SubSection onCardClick={setSelected} />
        </>
      )}
      <Footer bg={selected === "contatti" ? "#63B8FF" : section?.footerBg} />
    </>
  );
}

export default App;
