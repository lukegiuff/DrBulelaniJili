import type { Metadata } from "next";
import { EB_Garamond, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import AccessibilityPanel from "./components/AccessibilityPanel";

const garamond = EB_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dr. Bulelani Jili - AI Governance & Chinese Surveillance Technology Expert | Georgetown University",
  description: "Dr. Bulelani Jili, Assistant Professor at Georgetown University and Harvard University fellow, specializes in Chinese surveillance technology, Africa-China relations, AI governance, digital colonialism, and AI sovereignty. Leading expert on Chinese cybersecurity threats and ICT development.",
  keywords: "Dr. Bulelani Jili, Chinese surveillance technology, Africa-China relations, AI governance, digital colonialism, AI sovereignty, Chinese cybersecurity threat, Georgetown University, Harvard University, information communication technology development, cybersecurity, postcolonial theory, tech policy",
  authors: [{ name: "Dr. Bulelani Jili" }],
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  openGraph: {
    title: "Dr. Bulelani Jili - Chinese Surveillance Technology & AI Governance Expert",
    description: "Leading scholar in Chinese surveillance technology, Africa-China relations, AI governance, and digital colonialism. Georgetown University Assistant Professor and Harvard University fellow.",
    type: "website",
    locale: "en_US",
    url: "https://bulelanijili.com",
    siteName: "Dr. Bulelani Jili",
    images: [
      {
        url: "/assets/images/profile/hero-image.png",
        width: 1200,
        height: 630,
        alt: "Dr. Bulelani Jili - Chinese Surveillance Technology and AI Governance Expert",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Bulelani Jili - Chinese Surveillance Technology & AI Governance Expert",
    description: "Leading scholar in Chinese surveillance technology, Africa-China relations, AI governance, and digital colonialism.",
    images: ["/assets/images/profile/hero-image.png"],
  },
  alternates: {
    canonical: "https://bulelanijili.com",
  },
  other: {
    "google-site-verification": "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Dr. Bulelani Jili",
    "jobTitle": "Assistant Professor",
    "affiliation": [
      {
        "@type": "Organization",
        "name": "Georgetown University",
        "department": "Edmund A. Walsh School of Foreign Service"
      },
      {
        "@type": "Organization", 
        "name": "Harvard University",
        "department": "Belfer Center for Science and International Affairs"
      }
    ],
    "knowsAbout": [
      "Chinese Surveillance Technology",
      "Africa-China Relations", 
      "AI Governance",
      "Digital Colonialism",
      "AI Sovereignty",
      "Chinese Cybersecurity Threat",
      "Information and Communication Technology Development",
      "Cybersecurity Policy",
      "Postcolonial Theory"
    ],
    "url": "https://bulelanijili.com",
    "image": "https://bulelanijili.com/assets/images/profile/hero-image.png",
    "sameAs": [
      "https://georgetown.edu",
      "https://harvard.edu"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Academic Researcher",
      "occupationLocation": {
        "@type": "Place",
        "name": "Washington, DC"
      },
      "skills": [
        "Chinese Surveillance Technology Research",
        "AI Governance Policy",
        "Africa-China Relations Analysis",
        "Digital Colonialism Studies"
      ]
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${garamond.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <Navigation />
        <AccessibilityPanel />
        <main id="main-content" role="main" tabIndex={-1}>
          {children}
        </main>
      </body>
    </html>
  );
}
