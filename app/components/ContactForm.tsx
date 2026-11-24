"use client";

import { useState } from "react";

export default function ContactForm() {
  const [d, setD] = useState({ name: "", email: "", subject: "", message: "" });
  const [busy, setBusy] = useState(false);
  const [ok, setOk] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setTimeout(() => {
      const subject = encodeURIComponent(`Inquiry: ${d.subject}`);
      const body = encodeURIComponent(`Name: ${d.name}\nEmail: ${d.email}\n\nMessage:\n${d.message}`);
      window.location.href = `mailto:ahmedmasshoud929@gmail.com?subject=${subject}&body=${body}`;
      setD({ name: "", email: "", subject: "", message: "" });
      setOk(true);
      setBusy(false);
      setTimeout(() => setOk(false), 5000);
    }, 600);
  };

  return (
    <form className="form" onSubmit={submit}>
      <div className="row">
        <div><label htmlFor="cf-name">NAME</label><input id="cf-name" required value={d.name} onChange={(e) => setD({ ...d, name: e.target.value })} placeholder="Your name" /></div>
        <div><label htmlFor="cf-email">EMAIL</label><input id="cf-email" type="email" required value={d.email} onChange={(e) => setD({ ...d, email: e.target.value })} placeholder="you@company.com" /></div>
      </div>
      <div><label htmlFor="cf-subject">SUBJECT</label><input id="cf-subject" required value={d.subject} onChange={(e) => setD({ ...d, subject: e.target.value })} placeholder="What is it about?" /></div>
      <div><label htmlFor="cf-message">MESSAGE</label><textarea id="cf-message" rows={4} required value={d.message} onChange={(e) => setD({ ...d, message: e.target.value })} placeholder="Tell me about the project..." /></div>
      <div>
        <button className="btn p" type="submit" disabled={busy}>{busy ? "Preparing..." : "Send message ↗"}</button>
        <span className="note">Opens your mail app, addressed to me.</span>
      </div>
      {ok && <p className="ok" role="status">Message prepared. Your email client has been opened.</p>}
    </form>
  );
}
