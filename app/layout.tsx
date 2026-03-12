import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Ahmed Massoud - Frontend Developer Portfolio",
  description:
    "Frontend Developer specializing in React, Next.js, and modern web technologies. View my projects and get in touch.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Ahmed Massoud - Frontend Developer Portfolio",
    description:
      "Frontend Developer specializing in React, Next.js, and modern web technologies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#050505] text-white selection:bg-neon-cyan selection:text-black`}
      >
        {/* Dynamic Background Elements */}
        <div className="fixed inset-0 z-[-1] bg-grid-pattern opacity-30 pointer-events-none" />
        <div className="fixed inset-0 z-[-1] bg-gradient-to-b from-transparent via-[#050505]/50 to-[#050505] pointer-events-none" />

        {/* Glowing Orbs */}
        <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-neon-cyan/10 blur-[120px] pointer-events-none z-[-1]" />
        <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-neon-purple/10 blur-[120px] pointer-events-none z-[-1]" />

        <Navbar />
        <main className="relative z-10 pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto flex flex-col gap-32">
          {children}
        </main>
      </body>
    </html>
  );
}
