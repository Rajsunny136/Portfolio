import React, { useState } from "react";
import "../Styles/Contact.css";

const Contact: React.FC = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("Thank you for reaching out!");
  };

  return (
    <section id="contact" className="contact">
      <h2 className="Contact-header">Contact Me</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <input type="text" placeholder="Raju Anneboina" required />
        <input type="email" placeholder="rajuanneboina136@gmail.com" required />
        <textarea placeholder="Your Message" rows={5} required></textarea>
        <button type="submit">Send Message</button>
      </form>
      {message && <p className="success-message">{message}</p>}
    </section>
  );
};

export default Contact;
