import Navbar from "./components/Navbar";
import FullScreenSection from "./components/FullScreenSection";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <FullScreenSection bg="#CFF7D3">
        <h1>HealUp</h1>
        <h3>prenditi cura di te, ogni giorno</h3>
      </FullScreenSection>
      <FullScreenSection bg="#CFF7F4">
        <h2>Benvenuto su HealUp!</h2>
        <p className="mx-auto nomebello">
          La salute è un percorso, non una meta. HealUp nasce per accompagnarti
          ogni giorno nella cura di te stesso, attraverso semplici abitudini che
          fanno la differenza. Qui troverai consigli pratici e approfondimenti
          su alimentazione equilibrata, attività fisica, igiene personale,
          qualità del sonno e gestione dello stress. Ogni sezione è pensata per
          aiutarti a vivere meglio, con più consapevolezza, energia e serenità.
          HealUp è il tuo spazio di benessere: un passo alla volta, verso una
          vita più sana e armoniosa.
        </p>
      </FullScreenSection>
      <FullScreenSection type="secondary" bg="#CFDDF7">
        <h2>Alimentazione sana</h2>
        <p>
          Mangiare sano è un gesto quotidiano di cura verso sé stessi. Favorisce
          lucidità mentale, energia e benessere a ogni età.
        </p>
      </FullScreenSection>
      <FullScreenSection type="secondary" bg="#E3C6FD">
        <p>
          L’igiene quotidiana è fondamentale per il benessere fisico e
          mentale.Curare se stessi attraverso semplici abitudini igieniche
          protegge e rafforza corpo e mente.
        </p>
        <h2>Igiene</h2>
      </FullScreenSection>
      <FullScreenSection type="secondary" bg="#FDC6C7">
        <h2>Attività fisica</h2>
        <p>
          L’attività fisica è un gesto quotidiano di cura verso sé stessi.
          Favorisce salute, equilibrio emotivo e qualità della vita, a ogni età
          e in ogni fase del percorso.
        </p>
      </FullScreenSection>
      <FullScreenSection type="secondary" bg="#FBEABD">
        <p>
          Un sonno di qualità e un buon riposo sono essenziali per rigenerare
          corpo e mente, migliorando la salute, l’energia e la capacità di
          affrontare le sfide quotidiane.
        </p>
        <h2>Sonno e riposo</h2>
      </FullScreenSection>
      <FullScreenSection type="secondary" bg="#e3f7cf">
        <h2>Gestione dello stress</h2>
        <p>
          Gestire lo stress è fondamentale per il benessere mentale e
          fisico.Tecniche di rilassamento e consapevolezza aiutano a ritrovare
          equilibrio, calma e concentrazione.
        </p>
      </FullScreenSection>
    </>
  );
}

export default App;
