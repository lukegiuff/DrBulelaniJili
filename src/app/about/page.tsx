import type { Metadata } from 'next';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { getAboutContent } from '@/lib/content';

export async function generateMetadata(): Promise<Metadata> {
  const aboutContent = getAboutContent();
  
  return {
    title: aboutContent.title,
    description: aboutContent.description,
    keywords: aboutContent.keywords,
    openGraph: {
      title: aboutContent.title,
      description: aboutContent.description,
      images: ['/assets/images/profile/aboutimage.jpg'],
    },
    alternates: {
      canonical: 'https://bulelani-jili.com/about',
    },
  };
}

export default function About() {
  const aboutContent = getAboutContent();
  return (
    <>
      {/* Hero Section */}
      <section 
        className="relative min-h-[50vh] sm:min-h-[60vh] flex items-center justify-center pt-20"
        role="banner"
        aria-labelledby="about-hero-heading"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/profile/aboutimage.jpg"
            alt="Professional academic setting representing Dr. Bulelani Jili&apos;s scholarly work in international relations"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center 20%' }}
            priority
          />
        </div>
        
        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/65 z-10" aria-hidden="true"></div>
        
        {/* Content */}
        <div className="relative z-20 container mx-auto px-4 sm:px-6 text-center flex items-center justify-center min-h-full">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-4">
                <h1 id="about-hero-heading" className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight text-white">
                  About <span className="text-accent">Dr. Bulelani Jili</span>
                </h1>
                <div className="w-16 sm:w-24 h-1 bg-accent mx-auto" aria-hidden="true"></div>
              </div>
              
              {/* Quote Section */}
              <div className="space-y-4">
                <blockquote className="text-lg sm:text-2xl lg:text-4xl font-light italic text-white/95 leading-relaxed">
                  &ldquo;{aboutContent.heroQuote}&rdquo;
                </blockquote>
                <cite className="text-base sm:text-xl text-accent font-medium">– {aboutContent.quoteAttribution}</cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
                  <div className="space-y-6 sm:space-y-8 text-base sm:text-lg leading-relaxed text-foreground/80">
          {aboutContent.body
            .replace(/\r\n/g, '\n') // Normalize Windows line endings to Unix
            .split(/\n\n+/) // Split on two or more line breaks
            .filter(paragraph => paragraph.trim())
            .map((paragraph, index) => (
              <p key={index}>
                {paragraph.replace(/\n/g, ' ').trim()}
              </p>
            ))}
        </div>

          {/* CV Download Section */}
          <div className="mt-12 sm:mt-16">
            <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6 sm:p-8 text-center">
              <div className="mb-6">
                <svg className="w-12 h-12 sm:w-16 sm:h-16 text-accent mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
                </svg>
                <h3 className="text-xl sm:text-2xl font-bold mb-2">Curriculum Vitae</h3>
                <p className="text-sm sm:text-base text-foreground/70">
                  Download Dr. Jili&apos;s complete academic CV including education, research experience, 
                  publications, presentations, and professional affiliations.
                </p>
              </div>
              
              <a 
                href="/assets/images/profile/Jili_Bulelani_CV.pdf"
                download="Dr_Bulelani_Jili_CV.pdf"
                className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-accent text-background font-semibold text-base sm:text-lg hover:bg-accent-dark focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background transition-all duration-200 group"
                aria-describedby="cv-description"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Download CV (PDF)
              </a>
              <span id="cv-description" className="sr-only">
                Downloads Dr. Bulelani Jili&apos;s curriculum vitae as a PDF file
              </span>
            </div>
          </div>

          {/* Research Areas Section */}
          <section className="mt-12 sm:mt-16" aria-labelledby="research-areas-heading">
            <h2 id="research-areas-heading" className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-accent">Research Areas</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3" role="list">
              {aboutContent.researchAreas.map((researchArea) => (
                <div key={researchArea.area} className="bg-gray-800/30 p-3 border border-gray-700 text-xs sm:text-sm text-center leading-relaxed" role="listitem">
                  {researchArea.area}
                </div>
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section className="mt-12 sm:mt-16" aria-labelledby="education-heading">
            <h2 id="education-heading" className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-accent">Education</h2>
            <div className="space-y-4 sm:space-y-6" role="list">
              {aboutContent.education.map((edu, index) => (
                <article key={index} className="border-l-2 border-accent pl-4 sm:pl-6" role="listitem">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">{edu.degree}</h3>
                  <p className="text-sm sm:text-base text-foreground/60">{edu.description}</p>
                </article>
              ))}
            </div>
          </section>

          {/* Awards Section */}
          <section className="mt-12 sm:mt-16" aria-labelledby="awards-heading">
            <h2 id="awards-heading" className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-accent">Recent Awards & Fellowships</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6" role="list">
              {aboutContent.awards.map((award, index) => (
                <article key={index} className="bg-gray-800/30 p-4 sm:p-6 border border-gray-700" role="listitem">
                  <h3 className="text-base sm:text-lg font-semibold text-accent mb-2">
                    <time dateTime={award.year}>{award.year}</time>
                  </h3>
                  <p className="text-sm sm:text-base">{award.award}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
} 