import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./navbar";
import Footer from "./footer";
import ScrollToTop from "./components/ScrollToTop";
import { ThemeProvider } from "../components/theme-provider";

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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#f9fafb] dark:bg-[#030014] text-black dark:text-white transition-colors duration-500 selection:bg-aurora-blue/30 selection:text-white flex flex-col min-h-screen overflow-x-hidden`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {/* Vibrant Aurora Background (Dark Mode only) */}
          <div className="fixed inset-0 z-[-2] hidden dark:block bg-aurora opacity-30 pointer-events-none" />
          <div className="fixed inset-0 z-[-1] hidden dark:block aurora-mesh opacity-70 pointer-events-none" />
          
          {/* Light Mode subtle background */}
          <div className="fixed inset-0 z-[-2] block dark:hidden bg-gradient-to-br from-white via-gray-50 to-gray-200 opacity-80 pointer-events-none" />
          <div className="fixed inset-0 z-[-1] block dark:hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-aurora-blue/5 via-transparent to-transparent pointer-events-none" />

          <Navbar />
          
          <main className="flex-grow relative z-10 pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto flex flex-col gap-32 w-full overflow-x-hidden">
            {children}
          </main>
          
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
