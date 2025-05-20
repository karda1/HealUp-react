import React from "react";

const ContactSection: React.FC = () => (
  <div>
    <p style={{ textAlign: "left" }}>
      Hai domande, suggerimenti o vuoi rimanere aggiornato sulle nostre iniziative? Compila il form qui sotto e ti ricontatteremo al più presto. La tua opinione è importante per noi e ci aiuta a migliorare costantemente i nostri servizi.
    </p>
    <form id="contactForm">
        <label htmlFor="name"><strong>Nome:</strong></label><br />
        <input type="name" id="name" name="name" required/><br />
        <label htmlFor="email"><strong>Email:</strong></label><br />
        <input type="email" id="email" name="email" required/><br />
        <label htmlFor="message" id="labelContactMessage"><strong>Messaggio:</strong></label>
        <textarea id="message" name="message" rows={6} required></textarea><br />
        <button type="submit" id="submitContactButton">Invia</button>
        </form>
        <p id="textPrivacyContact">Rispettiamo la tua privacy: il tuo indirizzo email non sarà condiviso con terzi.</p>
    </div>
);

export default ContactSection;