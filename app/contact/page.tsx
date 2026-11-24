"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    setTimeout(() => {
      const subject = encodeURIComponent(`Inquiry: ${formData.subject}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
      window.location.href = `mailto:ahmedmasshoud929@gmail.com?subject=${subject}&body=${body}`;

      setFormData({ name: "", email: "", subject: "", message: "" });
      setSubmitStatus("success");
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }, 600);
  };

  return (
    <section className="section contact">
      <header className="section-head reveal">
        <span className="section-label">04 — Contact</span>
      </header>

      <h2 className="contact-headline reveal">
        Have a project<br />in <em>mind?</em>
      </h2>

      <a className="contact-mail reveal" href="mailto:ahmedmasshoud929@gmail.com">
        <span className="contact-mail-text">ahmedmasshoud929@gmail.com</span>
        <span className="contact-mail-arrow" aria-hidden="true">↗</span>
      </a>

      <form className="contact-form reveal" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="field">
            <label htmlFor="cf-name">Name</label>
            <input
              id="cf-name"
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Your name"
            />
          </div>
          <div className="field">
            <label htmlFor="cf-email">Email</label>
            <input
              id="cf-email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="you@example.com"
            />
          </div>
        </div>
        <div className="field">
          <label htmlFor="cf-subject">Subject</label>
          <input
            id="cf-subject"
            type="text"
            required
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            placeholder="What is it about?"
          />
        </div>
        <div className="field">
          <label htmlFor="cf-message">Message</label>
          <textarea
            id="cf-message"
            rows={4}
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Tell me about the project…"
          />
        </div>

        <div className="form-foot">
          <button className="btn btn--solid" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Preparing…" : "Send message"} <span aria-hidden="true">↗</span>
          </button>
          <span className="form-note">Opens your mail app, addressed to me.</span>
        </div>

        {submitStatus === "success" && (
          <p className="form-success" role="status">Message prepared — your email client has been opened.</p>
        )}
      </form>

      <ul className="contact-links reveal">
        <li><a href="https://github.com/mas3edo" target="_blank" rel="noopener noreferrer"><span>GitHub</span><span className="contact-handle">@mas3edo</span><span aria-hidden="true">↗</span></a></li>
        <li><a href="https://www.linkedin.com/in/ahmed-masshoud-b495b730b" target="_blank" rel="noopener noreferrer"><span>LinkedIn</span><span className="contact-handle">Ahmed Massoud</span><span aria-hidden="true">↗</span></a></li>
        <li><a href="https://wa.me/201063308758" target="_blank" rel="noopener noreferrer"><span>WhatsApp</span><span className="contact-handle">+20 106 330 8758</span><span aria-hidden="true">↗</span></a></li>
      </ul>
    </section>
  );
}
