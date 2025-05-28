import React from "react";

//Componente che mostra la sezione contatti con un form
const ContactSection: React.FC = () => ( //Viene usato per indicare che il componente e' una funzione che restituisce JSX (JavaScript e HTML)
  <div>
    <p id="ContactSectionText">Hai domande, suggerimenti o vuoi rimanere aggiornato sulle nostre iniziative? Compila il form qui sotto e ti ricontatteremo al più presto. La tua opinione è importante per noi e ci aiuta a migliorare costantemente i nostri servizi.</p>
    {/* Form di contatto */}
    <form id="contactForm">
      {/*Campo nome*/}
      <label htmlFor="name"><strong>Nome:</strong></label>
      <br />
      <input type="name" id="name" name="name" required />
      <br />
      {/*Campo email*/}
      <label htmlFor="email"><strong>Email:</strong></label>
      <br />
      <input type="email" id="email" name="email" required />
      <br />
      {/*Campo messaggio*/}
      <label htmlFor="message" id="labelContactMessage"><strong>Messaggio:</strong></label>
      <textarea id="message" name="message" rows={6} required></textarea>
      <br />
      {/*Bottone di invio*/}
      <button type="submit" id="submitContactButton">Invia</button>
    </form>

    <p id="textPrivacyContact">Rispettiamo la tua privacy: il tuo indirizzo email non sarà condiviso con terzi.</p>
  </div>
);

export default ContactSection;