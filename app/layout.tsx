import type { Metadata } from "next";
import "./globals.css";
import Dock from "./components/Dock";

export const metadata: Metadata = {
  title: "Ahmed Massoud — Frontend Developer",
  description:
    "Ahmed Massoud is a frontend developer in Cairo, Egypt, building fast, polished interfaces with React, Next.js and TypeScript.",
  openGraph: {
    title: "Ahmed Massoud — Frontend Developer",
    description: "Frontend dev who ships fast. React, Next.js, TypeScript.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body id="top">
        <Dock />
        {children}
        <footer>© 2026 Ahmed Massoud</footer>
      </body>
    </html>
  );
}
