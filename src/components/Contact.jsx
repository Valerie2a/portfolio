import React, { useState } from "react";
import "../styles/components.scss";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: "",
    website: "" 
  });
  const [status, setStatus] = useState({ sent: false, error: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // anti-spam: si le honeypot est rempli, on ignore
    if (formData.website.trim() !== "") return;

    console.log("Formulaire soumis :", formData);
    setStatus({ sent: true, error: "" });
    // reset basique
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      message: "",
      website: ""
    });
  };

  return (
    <section className="contact" id="contact">
      <h2>Me contacter</h2>
      <p>
        Si vous avez des questions, une opportunité d'emploi ou un projet en tête,
        n'hésitez pas à me contacter. Je suis impatiente de discuter de la manière
        dont nous pourrions collaborer.
      </p>

      {status.sent && (
        <p className="form-success" role="status" aria-live="polite">
          Merci pour votre message — je reviens vers vous rapidement.
        </p>
      )}

      <form onSubmit={handleSubmit} className="contact-form" noValidate>
        {/* Honeypot anti-spam (caché visuellement) */}
        <div className="hp">
          <label htmlFor="website">Site web (laisser vide)</label>
          <input
            type="text"
            id="website"
            name="website"
            value={formData.website}
            onChange={handleChange}
            autoComplete="off"
            tabIndex={-1}
          />
        </div>

        <div className="form-row">
          <div>
            <label htmlFor="firstName">Prénom *</label>
            <input
              id="firstName"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              autoComplete="given-name"
              required
            />
          </div>
          <div>
            <label htmlFor="lastName">Nom *</label>
            <input
              id="lastName"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              autoComplete="family-name"
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div>
            <label htmlFor="email">Email *</label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
              inputMode="email"
              required
            />
          </div>
          <div>
            <label htmlFor="company">Société</label>
            <input
              id="company"
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              autoComplete="organization"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message">Votre message *</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
          />
        </div>

        <button type="submit">Envoyer</button>
      </form>
    </section>
  );
}
