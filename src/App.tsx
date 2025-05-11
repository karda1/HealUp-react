import Navbar from "./components/Navbar";
import FullScreenSection from "./components/FullScreenSection";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <FullScreenSection bg="success">
        <h1>HealUp</h1>
        <h3>prenditi cura di te, ogni giorno</h3>
      </FullScreenSection>
      <FullScreenSection bg="warning">
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
      <FullScreenSection type="secondary" bg="info">
        <h2>Alimentazione sana</h2>
        <p>
          Mangiare sano è un gesto quotidiano di cura verso sé stessi. Favorisce
          lucidità mentale, energia e benessere a ogni età.
        </p>
      </FullScreenSection>
      <FullScreenSection type="secondary" bg="dark text-white">
        <p>
          L’attività fisica è un gesto quotidiano di cura verso sé stessi.
          Favorisce salute, equilibrio emotivo e qualità della vita, a ogni età
          e in ogni fase del percorso.
        </p>
        <h2>Attività fisica</h2>
      </FullScreenSection>
    </>
  );
}

export default App;
