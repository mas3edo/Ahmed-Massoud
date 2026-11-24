import type { Metadata } from "next";
import { Fraunces, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";
import Footer from "./footer";
import ScrollToTop from "./components/ScrollToTop";
import SiteFx from "./components/SiteFx";
import { ThemeProvider } from "../components/theme-provider";

const display = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-display",
  display: "swap",
});

const bodyFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ahmed Massoud — Frontend Developer",
  description:
    "Ahmed Massoud is a frontend developer in Cairo, Egypt, building fast, expressive interfaces with React, Next.js and TypeScript.",
  openGraph: {
    title: "Ahmed Massoud — Frontend Developer",
    description:
      "Frontend developer crafting fast, expressive interfaces with a designer's eye and an engineer's discipline.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${display.variable} ${bodyFont.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ScrollToTop />
          <SiteFx />
        </ThemeProvider>
      </body>
    </html>
  );
}
