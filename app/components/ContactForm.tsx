"use client";

import { useState } from "react";

export default function ContactForm() {
  const [d, setD] = useState({ name: "", email: "", subject: "", message: "" });
  const [busy, setBusy] = useState(false);
  const [ok, setOk] = useState(false);
  const [hp, setHp] = useState("");

  const [err, setErr] = useState(false);
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setErr(false);
    try {
      const r = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...d, website: hp }),
      });
      if (!r.ok) throw new Error("fail");
      setD({ name: "", email: "", subject: "", message: "" });
      setOk(true);
      setTimeout(() => setOk(false), 8000);
    } catch {
      setErr(true);
    }
    setBusy(false);
  };

  return (
    <form className="form" onSubmit={submit}>
      <div className="row">
        <div><label htmlFor="cf-name">NAME</label><input id="cf-name" required value={d.name} onChange={(e) => setD({ ...d, name: e.target.value })} placeholder="Your name" /></div>
        <div><label htmlFor="cf-email">EMAIL</label><input id="cf-email" type="email" required value={d.email} onChange={(e) => setD({ ...d, email: e.target.value })} placeholder="you@company.com" /></div>
      </div>
      <div><label htmlFor="cf-subject">SUBJECT</label><input id="cf-subject" required value={d.subject} onChange={(e) => setD({ ...d, subject: e.target.value })} placeholder="What is it about?" /></div>
      <div><label htmlFor="cf-message">MESSAGE</label><textarea id="cf-message" rows={5} maxLength={5000} required value={d.message} onChange={(e) => setD({ ...d, message: e.target.value })} placeholder="Tell me about the project..." /></div>
      <div className="fsub">
        <button className="btn p" type="submit" disabled={busy}>{busy ? "Sending..." : "Send message ↗"}</button>
        <span className="note">{d.message.length}/5000 · I reply within a day</span>
      </div>
      <input className="hp" tabIndex={-1} autoComplete="off" aria-hidden="true" value={hp} onChange={(e) => setHp(e.target.value)} />
      {err && <p className="ok bad" style={{ color: "#ff7b7b" }} role="alert">Could not send right now. Please email me directly.</p>}
      {ok && <p className="ok" role="status">✓ Thanks! Your message was sent. I will get back to you soon.</p>}
    </form>
  );
}
