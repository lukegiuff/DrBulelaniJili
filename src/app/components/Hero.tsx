import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <>
      {/* Main Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center pt-20"
        role="banner"
        aria-label="Dr. Bulelani Jili - Homepage Hero"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/profile/hero-image.png"
            alt="Dr. Bulelani Jili in professional setting, representing expertise in international relations and technology policy"
            fill
            className="object-cover object-[66%_center] md:object-[35%_center]"
            priority
          />
        </div>
        
        {/* Natural Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/50 to-black/60 z-10" aria-hidden="true"></div>
        
        {/* Content */}
        <div className="relative z-20 container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-4">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-tight text-white">
                  EXPERT.<br />
                  SCHOLAR.<br />
                  <span className="text-accent">PROFESSOR.</span>
                </h1>
              </div>
              
              <div className="space-y-4 sm:space-y-5">
                <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed max-w-xl">
                  Dr. Bulelani Jili is an Assistant Professor at Georgetown University, Harvard University fellow, and Yale Law School 
                  Visiting Fellow. His groundbreaking research examines Chinese surveillance technology, Africa-China relations, 
                  AI governance, digital colonialism, AI sovereignty, and Chinese cybersecurity threats in the Global South.
                </p>
                <p className="hidden md:block text-sm sm:text-base md:text-lg text-white/80 leading-relaxed max-w-2xl">
                  A leading expert in information and communication technology development, his work on Chinese surveillance technology 
                  and AI governance has appeared in African Affairs, Nature, Theory, Culture &amp; Society, The Economist, 
                  the Financial Times, and other prestigious academic and policy outlets.
                </p>
              </div>

              <nav aria-label="Primary call-to-action buttons">
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
                  <Link 
                    href="/about"
                    className="inline-flex items-center justify-center px-6 sm:px-8 py-3 bg-accent text-white font-medium hover:bg-accent-dark focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background transition-all duration-200 text-sm sm:text-base"
                  >
                    ABOUT DR. JILI
                  </Link>
                  
                  <Link 
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 sm:px-8 py-3 border border-accent text-accent font-medium hover:bg-accent hover:text-white focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background transition-all duration-200 text-sm sm:text-base"
                    aria-describedby="contact-description"
                  >
                    GET IN TOUCH
                  </Link>
                  <span id="contact-description" className="sr-only">
                    Navigate to the contact page to send a message or inquire about collaboration
                  </span>
                </div>
              </nav>

              {/* Awards Section */}
              <div className="pt-4 sm:pt-6 space-y-2">
                <div className="text-xs sm:text-sm text-accent font-medium uppercase tracking-wide">Recent Recognition</div>
                <div className="text-xs sm:text-sm text-white/70 leading-relaxed">
                  <span className="block sm:inline">Google Public Policy Fellow</span>
                  <span className="hidden sm:inline"> • </span>
                  <span className="block sm:inline">International Strategy Forum Fellowship</span>
                  <span className="hidden sm:inline"> • </span>
                  <span className="block sm:inline">Meta Research PhD Fellowship</span>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block">
            <div className="animate-bounce" aria-label="Scroll down to see more content">
              <svg 
                className="w-6 h-6 text-accent" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                aria-hidden="true"
                role="img"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
              <span className="sr-only">Scroll down to see more content</span>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Highlights Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gray-900/30" aria-labelledby="highlights-heading">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8 sm:mb-12">
            <h2 id="highlights-heading" className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Recent <span className="text-accent">Highlights</span>
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-accent mx-auto" aria-hidden="true"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8" role="list">
            <article className="bg-gray-800/30 p-4 sm:p-6 border border-gray-700 hover:border-accent transition-colors duration-200" role="listitem">
              <time className="text-accent text-sm font-medium mb-2 block" dateTime="2025-05">MAY 2025</time>
              <h3 className="text-base sm:text-lg font-semibold mb-3">Africanising Chinese Surveillance Technology</h3>
              <p className="text-foreground/80 text-sm mb-4 leading-relaxed">Featured analysis in East Asia Forum on how African nations are adapting Chinese surveillance technologies to local contexts.</p>
              <Link 
                href="/news" 
                className="text-accent text-sm font-medium hover:text-accent-dark focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-gray-800 rounded-sm px-1 py-1 transition-all duration-200 inline-block"
              >
                Read Analysis →
              </Link>
            </article>

            <article className="bg-gray-800/30 p-4 sm:p-6 border border-gray-700 hover:border-accent transition-colors duration-200" role="listitem">
              <time className="text-accent text-sm font-medium mb-2 block" dateTime="2024">2024</time>
              <h3 className="text-base sm:text-lg font-semibold mb-3">International Strategy Forum Fellowship</h3>
              <p className="text-foreground/80 text-sm mb-4 leading-relaxed">Awarded prestigious fellowship recognizing excellence in international affairs research and policy impact.</p>
              <Link 
                href="/about" 
                className="text-accent text-sm font-medium hover:text-accent-dark focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-gray-800 rounded-sm px-1 py-1 transition-all duration-200 inline-block"
              >
                View Fellowship Details →
              </Link>
            </article>

            <article className="bg-gray-800/30 p-4 sm:p-6 border border-gray-700 hover:border-accent transition-colors duration-200" role="listitem">
              <time className="text-accent text-sm font-medium mb-2 block" dateTime="2023">2023</time>
              <h3 className="text-base sm:text-lg font-semibold mb-3">Congressional Citation</h3>
              <p className="text-foreground/80 text-sm mb-4 leading-relaxed">Research on Chinese surveillance technology cited by US Congress Committee on Homeland Security and Congressional-Executive Commission on China.</p>
              <Link 
                href="/publications" 
                className="text-accent text-sm font-medium hover:text-accent-dark focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-gray-800 rounded-sm px-1 py-1 transition-all duration-200 inline-block"
                aria-label="View publications related to Congressional Citation"
              >
                View Publications →
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* Research Focus Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6" aria-labelledby="research-heading">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8 sm:mb-12">
            <h2 id="research-heading" className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Research <span className="text-accent">Focus</span>
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-accent mx-auto" aria-hidden="true"></div>
            <p className="text-base sm:text-lg text-foreground/80 mt-6 max-w-3xl mx-auto">
              Interdisciplinary research at the intersection of technology, politics, and international relations
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6" role="list">
            <div className="text-center group" role="listitem">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-accent/20 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center group-hover:bg-accent/30 transition-colors duration-200" role="img" aria-label="AI Governance icon">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-accent" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-sm sm:text-lg font-semibold mb-1 sm:mb-2">AI Governance</h3>
              <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">Global AI regulation and policy frameworks</p>
            </div>

            <div className="text-center group" role="listitem">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-accent/20 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center group-hover:bg-accent/30 transition-colors duration-200" role="img" aria-label="Cybersecurity icon">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-accent" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-sm sm:text-lg font-semibold mb-1 sm:mb-2">Cybersecurity</h3>
              <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">Digital security and surveillance technologies</p>
            </div>

            <div className="text-center group" role="listitem">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-accent/20 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center group-hover:bg-accent/30 transition-colors duration-200" role="img" aria-label="Africa-China Relations icon">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-accent" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-sm sm:text-lg font-semibold mb-1 sm:mb-2">Africa-China</h3>
              <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">International relations and geopolitics</p>
            </div>

            <div className="text-center group" role="listitem">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-accent/20 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center group-hover:bg-accent/30 transition-colors duration-200" role="img" aria-label="Digital Policy icon">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-accent" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-sm sm:text-lg font-semibold mb-1 sm:mb-2">Digital Policy</h3>
              <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">Technology governance and regulation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Publications Section */}
      <section className="py-20 px-6 bg-gray-900/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Latest <span className="text-accent">Publications</span>
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-800/30 p-6 border border-gray-700 hover:border-accent transition-colors duration-200">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                <h3 className="text-xl font-semibold">A Technological Fix: The Adoption of Chinese Public Security Systems</h3>
                <span className="text-accent font-medium text-sm">2023</span>
              </div>
              <p className="text-accent mb-2">Georgetown Journal of International Affairs</p>
              <p className="text-foreground/80 text-sm">Analysis of how governments adopt and implement Chinese surveillance technologies as solutions to public security challenges.</p>
            </div>

            <div className="bg-gray-800/30 p-6 border border-gray-700 hover:border-accent transition-colors duration-200">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                <h3 className="text-xl font-semibold">Africa: Regulate Surveillance Technologies and Personal Data</h3>
                <span className="text-accent font-medium text-sm">2022</span>
              </div>
              <p className="text-accent mb-2">Nature</p>
              <p className="text-foreground/80 text-sm">Policy recommendations for African governments on regulating surveillance technologies and protecting personal data.</p>
            </div>

            <div className="bg-gray-800/30 p-6 border border-gray-700 hover:border-accent transition-colors duration-200">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                <h3 className="text-xl font-semibold">Chinese ICT and Smart City Initiatives in Kenya</h3>
                <span className="text-accent font-medium text-sm">2022</span>
              </div>
              <p className="text-accent mb-2">Asia Policy</p>
              <p className="text-foreground/80 text-sm">Examination of Chinese information and communication technology investments in Kenya&apos;s smart city development.</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link 
              href="/publications"
              className="inline-flex items-center px-8 py-3 border border-accent text-accent font-medium hover:bg-accent hover:text-background transition-colors duration-200"
            >
              View All Publications
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Upcoming <span className="text-accent">Events</span>
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800/30 p-6 border border-gray-700 hover:border-accent transition-colors duration-200">
              <div className="text-accent text-sm font-medium mb-2">APRIL 2025</div>
              <h3 className="text-lg font-semibold mb-3">Reframing Digital Trade in Africa</h3>
              <p className="text-foreground/80 text-sm mb-4">European University Institute, Fiesole, Italy</p>
              <p className="text-foreground/60 text-xs">Examining agency, dependency, and the China question in African digital trade relationships.</p>
            </div>

            <div className="bg-gray-800/30 p-6 border border-gray-700 hover:border-accent transition-colors duration-200">
              <div className="text-accent text-sm font-medium mb-2">APRIL 2025</div>
              <h3 className="text-lg font-semibold mb-3">African Agency Amid China&apos;s Digital Footprint</h3>
              <p className="text-foreground/80 text-sm mb-4">Georgetown University, Washington, DC</p>
              <p className="text-foreground/60 text-xs">Exploring the balance between dependency and independence in Africa-China digital relations.</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link 
              href="/events"
              className="inline-flex items-center px-8 py-3 border border-accent text-accent font-medium hover:bg-accent hover:text-background transition-colors duration-200"
            >
              View All Events
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero; 