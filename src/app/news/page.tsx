import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'News & Updates - Dr. Bulelani Jili',
  description: 'Stay updated with Dr. Bulelani Jili\'s latest news, media appearances, and recent developments.',
};

export default function News() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/profile/updatesimage.jpg"
            alt="Dr. Bulelani Jili - News & Updates Background"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center 10%' }}
            priority
          />
        </div>
        
        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/65 z-10"></div>
        
        {/* Content */}
        <div className="relative z-20 container mx-auto px-6 text-center flex items-center justify-center min-h-full">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-white">
                  News & <span className="text-accent">Updates</span>
                </h1>
                <div className="w-24 h-1 bg-accent mx-auto"></div>
              </div>
              
              {/* Subtitle */}
              <div className="space-y-4">
                <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
                  Latest media coverage, expert commentary, and developments in technology policy, 
                  AI governance, and Africa-China relations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">

        {/* Recent News */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-accent">Recent Media & News</h2>
          <div className="space-y-6">
            <div className="bg-gray-800/30 p-6 border border-gray-700 hover:border-accent transition-colors duration-200">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Africanising Chinese Surveillance Technology</h3>
                <span className="text-accent font-medium">May 2025</span>
              </div>
              <p className="text-foreground/80 mb-2">East Asia Forum</p>
              <p className="text-sm text-foreground/60">Analysis of how African nations are adapting Chinese surveillance technologies to local contexts</p>
            </div>

            <div className="bg-gray-800/30 p-6 border border-gray-700 hover:border-accent transition-colors duration-200">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Chinese Startups Supported by Microsoft and Google Incubator Programs Worked with Police</h3>
                <span className="text-accent font-medium">November 2024</span>
              </div>
              <p className="text-foreground/80 mb-2">Rest of World</p>
              <p className="text-sm text-foreground/60">Investigation into tech company relationships with surveillance infrastructure</p>
            </div>

            <div className="bg-gray-800/30 p-6 border border-gray-700 hover:border-accent transition-colors duration-200">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">China in the Global South: Development and Influence in a Shifting Global Order</h3>
                <span className="text-accent font-medium">February 2024</span>
              </div>
              <p className="text-foreground/80 mb-2">Atlantic Council</p>
              <p className="text-sm text-foreground/60">Comprehensive analysis of China&apos;s growing influence in developing nations</p>
            </div>

            <div className="bg-gray-800/30 p-6 border border-gray-700 hover:border-accent transition-colors duration-200">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Kenya Must Update its Regulatory Frameworks to Keep Pace with AI</h3>
                <span className="text-accent font-medium">October 2023</span>
              </div>
              <p className="text-foreground/80 mb-2">Tech Policy Press</p>
              <p className="text-sm text-foreground/60">Policy recommendations for AI governance in Kenya</p>
            </div>

            <div className="bg-gray-800/30 p-6 border border-gray-700 hover:border-accent transition-colors duration-200">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">How India is using Digital Technology to Project Power</h3>
                <span className="text-accent font-medium">June 2023</span>
              </div>
              <p className="text-foreground/80 mb-2">The Economist</p>
              <p className="text-sm text-foreground/60">Analysis of India&apos;s digital diplomacy and technology strategy</p>
            </div>

            <div className="bg-gray-800/30 p-6 border border-gray-700 hover:border-accent transition-colors duration-200">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Is CISA Stretched Thin on Critical Infrastructure?</h3>
                <span className="text-accent font-medium">October 2022</span>
              </div>
              <p className="text-foreground/80 mb-2">Politico</p>
              <p className="text-sm text-foreground/60">Assessment of cybersecurity infrastructure and resource allocation</p>
            </div>
          </div>
        </section>

        {/* Expert Commentary */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-accent">Expert Commentary</h2>
          <div className="bg-gray-800/30 p-6 border border-gray-700 border-l-4 border-l-accent">
            <blockquote className="text-lg italic mb-4">
              &ldquo;He writes the most insightful work on these issues&rdquo;
            </blockquote>
            <p className="text-accent font-medium">
              Eric Olander, Editor in Chief of the China-Global South Project
            </p>
            <p className="text-sm text-foreground/60">
              On Chinese surveillance technology in Africa
            </p>
          </div>
        </section>

        {/* Archived Coverage */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-accent">Previous Coverage</h2>
          <div className="space-y-6">
            <div className="bg-gray-800/30 p-6 border border-gray-700 hover:border-accent transition-colors duration-200">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Charting the Future of China&apos;s Infrastructure Projects in Africa After a Decade of Lending</h3>
                <span className="text-accent font-medium">December 2021</span>
              </div>
              <p className="text-foreground/80 mb-2">Voice of America</p>
            </div>

            <div className="bg-gray-800/30 p-6 border border-gray-700 hover:border-accent transition-colors duration-200">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">The Spread of Surveillance Technology in Africa Stirs Security Concerns</h3>
                <span className="text-accent font-medium">December 2020</span>
              </div>
              <p className="text-foreground/80 mb-2">Africa Center for Strategic Studies</p>
            </div>

            <div className="bg-gray-800/30 p-6 border border-gray-700 hover:border-accent transition-colors duration-200">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Locating African Agency in Africa-China Relations</h3>
                <span className="text-accent font-medium">April 2020</span>
              </div>
              <p className="text-foreground/80 mb-2">Africa is a Country</p>
            </div>
          </div>
        </section>

        {/* Stay Connected */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-accent">Stay Connected</h2>
          <div className="bg-gray-800/30 p-8 border border-gray-700 text-center">
            <p className="text-lg mb-6">
              Keep up to date with Dr. Jili&apos;s latest research, publications, and media appearances
            </p>
            <div className="flex justify-center space-x-6">
              <a 
                href="https://linkedin.com/in/bulelani-jili" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-accent text-background font-medium hover:bg-accent-dark transition-colors duration-200"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                </svg>
                Follow on LinkedIn
              </a>
            </div>
          </div>
        </section>
        </div>
      </div>
    </>
  );
} 