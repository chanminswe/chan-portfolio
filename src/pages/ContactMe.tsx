import React, { useState } from 'react';
import '../styles/contactme.css'

function ContactMe() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    const formData = new FormData(e.currentTarget);

    if (formData.get("_gotcha")) {
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/xlgozzod", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus("SUCCESS");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      setStatus("ERROR");
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Get In Touch</h2>
        <p className="contact-subtitle">Have a project in mind? Let's build something great together.</p>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="hp-field" aria-hidden="true">
            <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
          </div>

          <div className="input-row">
            <div className="input-group">
              <input type="text" name="name" placeholder="Name" required />
            </div>
            <div className="input-group">
              <input type="email" name="email" placeholder="Email Address" required />
            </div>
          </div>

          <div className="input-group">
            <textarea name="message" placeholder="Your Message" rows={5} required />
          </div>

          <button type="submit" className="submit-btn" disabled={status === "Sending..."}>
            {status === "Sending..." ? "Sending..." : "Send Message"}
          </button>

          {status === "SUCCESS" && (
            <p className="form-status success">Message sent! I'll get back to you soon.</p>
          )}
          {status === "ERROR" && (
            <p className="form-status error">Something went wrong. Please try again.</p>
          )}
        </form>
      </div>
    </section>
  );
}

export default ContactMe;