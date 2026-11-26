import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Google Apps Script web app that appends each submission to a Google Sheet.
const SHEET_WEBHOOK_URL = process.env.SHEET_WEBHOOK_URL ||
  "https://script.google.com/macros/s/AKfycbwyxob0wKgK8lY60Qn0jDTVAvQ74FHursZZvQiQY-5ciK6RSYa16Z9ZUfmw6vM47xtafg/exec";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const clean = (v: unknown, max: number) => String(v ?? "").trim().slice(0, max);
    const name = clean(body.name, 120);
    const email = clean(body.email, 200);
    const subject = clean(body.subject, 200);
    const message = clean(body.message, 5000);

    if (!name || !email || !subject || !message || !/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }
    // Honeypot: bots fill this hidden field.
    if (body.website) return NextResponse.json({ ok: true });

    const tasks: Promise<boolean>[] = [];

    if (SHEET_WEBHOOK_URL) {
      tasks.push(
        fetch(SHEET_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: JSON.stringify({ name, email, subject, message }),
          redirect: "follow",
        })
          .then(async (r) => r.ok && (await r.text()).trim() === "ok")
          .catch(() => false)
      );
    }

    if (process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD) {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: { user: process.env.GMAIL_USER, pass: process.env.GMAIL_APP_PASSWORD },
      });
      tasks.push(
        transporter
          .sendMail({
            from: process.env.GMAIL_USER,
            to: "ahmedmassouddev@gmail.com",
            replyTo: email,
            subject: `Portfolio Contact: ${subject}`,
            text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}\n\nDate: ${new Date().toISOString()}`,
          })
          .then(() => true)
          .catch(() => false)
      );
    }

    const results = await Promise.all(tasks);
    if (!results.some(Boolean)) {
      return NextResponse.json({ error: "Could not record the message" }, { status: 500 });
    }
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
