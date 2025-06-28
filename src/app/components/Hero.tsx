import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <>
      {/* Main Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  ASSISTANT<br />
                  PROFESSOR.<br />
                  <span className="text-accent">SCHOLAR.</span>
                </h1>
              </div>
              
              <div className="space-y-4 text-lg text-foreground/80 leading-relaxed max-w-xl">
                <p>
                  Dr. Bulelani Jili is an Assistant Professor at Georgetown University, a Visiting Fellow at Yale Law School, 
                  and a Fellow at New America. His research examines Africa-China relations, AI governance, cybersecurity, 
                  postcolonial theory, and the political economy of emerging technologies.
                </p>
                <p>
                  His work has appeared in African Affairs, Nature, Theory, Culture & Society, The Economist, 
                  the Financial Times, and other scholarly and public-facing outlets.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/about"
                  className="inline-flex items-center justify-center px-8 py-3 bg-accent text-background font-medium rounded-none hover:bg-accent-dark transition-colors duration-200"
                >
                  LEARN MORE
                </Link>
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 border border-accent text-accent font-medium rounded-none hover:bg-accent hover:text-background transition-colors duration-200"
                >
                  GET IN TOUCH
                </Link>
              </div>

              {/* Awards Section */}
              <div className="pt-8 space-y-2">
                <div className="text-sm text-accent font-medium">RECENT RECOGNITION</div>
                <div className="text-sm text-foreground/60">
                  Google Public Policy Fellow • International Strategy Forum Fellowship • Meta Research PhD Fellowship
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="aspect-[3/4] relative">
                {/* Professional Photo */}
                <div className="w-full h-full relative overflow-hidden">
                  <Image
                    src="/assets/images/profile/MWI 100.jpg"
                    alt="Dr. Bulelani Jili - Professional Portrait"
                    fill
                    style={{ objectFit: 'cover', objectPosition: '30% center' }}
                    className="rounded-sm"
                    priority
                  />
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-accent"></div>
                <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-accent"></div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="flex justify-center mt-16">
            <div className="animate-bounce">
              <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Highlights Section */}
      <section className="py-20 px-6 bg-gray-900/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Recent <span className="text-accent">Highlights</span>
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800/30 p-6 border border-gray-700 hover:border-accent transition-colors duration-200">
              <div className="text-accent text-sm font-medium mb-2">MAY 2025</div>
              <h3 className="text-lg font-semibold mb-3">Africanising Chinese Surveillance Technology</h3>
              <p className="text-foreground/80 text-sm mb-4">Featured analysis in East Asia Forum on how African nations are adapting Chinese surveillance technologies to local contexts.</p>
              <Link href="/news" className="text-accent text-sm font-medium hover:text-accent-dark">Read More →</Link>
            </div>

            <div className="bg-gray-800/30 p-6 border border-gray-700 hover:border-accent transition-colors duration-200">
              <div className="text-accent text-sm font-medium mb-2">2024</div>
              <h3 className="text-lg font-semibold mb-3">International Strategy Forum Fellowship</h3>
              <p className="text-foreground/80 text-sm mb-4">Awarded prestigious fellowship recognizing excellence in international affairs research and policy impact.</p>
              <Link href="/about" className="text-accent text-sm font-medium hover:text-accent-dark">Learn More →</Link>
            </div>

            <div className="bg-gray-800/30 p-6 border border-gray-700 hover:border-accent transition-colors duration-200">
              <div className="text-accent text-sm font-medium mb-2">2023</div>
              <h3 className="text-lg font-semibold mb-3">Congressional Citation</h3>
              <p className="text-foreground/80 text-sm mb-4">Research on Chinese surveillance technology cited by US Congress Committee on Homeland Security and Congressional-Executive Commission on China.</p>
              <Link href="/publications" className="text-accent text-sm font-medium hover:text-accent-dark">View Publications →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Research Focus Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Research <span className="text-accent">Focus</span>
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
            <p className="text-lg text-foreground/80 mt-6 max-w-3xl mx-auto">
              Interdisciplinary research at the intersection of technology, politics, and international relations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center group">
              <div className="w-16 h-16 bg-accent/20 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:bg-accent/30 transition-colors duration-200">
                <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">AI Governance</h3>
              <p className="text-sm text-foreground/70">Global AI regulation and policy frameworks</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-accent/20 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:bg-accent/30 transition-colors duration-200">
                <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Cybersecurity</h3>
              <p className="text-sm text-foreground/70">Digital security and surveillance technologies</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-accent/20 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:bg-accent/30 transition-colors duration-200">
                <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Africa-China Relations</h3>
              <p className="text-sm text-foreground/70">Technology transfer and digital diplomacy</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-accent/20 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:bg-accent/30 transition-colors duration-200">
                <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Digital Policy</h3>
              <p className="text-sm text-foreground/70">Internet governance and privacy law</p>
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