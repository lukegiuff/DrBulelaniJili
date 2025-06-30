import type { Metadata } from "next";
import { EB_Garamond, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";

const garamond = EB_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dr. Bulelani Jili - Assistant Professor & Scholar",
  description: "Dr. Bulelani Jili is an Assistant Professor at Georgetown University, Visiting Fellow at Yale Law School, and Fellow at New America. Expert in Africa-China relations, AI governance, and cybersecurity.",
  keywords: "Bulelani Jili, Georgetown University, Yale Law School, Africa-China relations, AI governance, cybersecurity, academic research",
  authors: [{ name: "Dr. Bulelani Jili" }],
  openGraph: {
    title: "Dr. Bulelani Jili - Assistant Professor & Scholar",
    description: "Expert in Africa-China relations, AI governance, and cybersecurity",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${garamond.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <Navigation />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
