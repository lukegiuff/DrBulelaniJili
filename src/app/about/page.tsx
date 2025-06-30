import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Dr. Bulelani Jili - Chinese Surveillance Technology & AI Governance Expert | Georgetown & Harvard',
  description: 'Dr. Bulelani Jili is a leading expert in Chinese surveillance technology, Africa-China relations, AI governance, and digital colonialism. Assistant Professor at Georgetown University, Harvard fellow, specializing in Chinese cybersecurity threats and ICT development policy.',
  keywords: 'Dr. Bulelani Jili, Chinese surveillance technology, Africa-China relations, AI governance, digital colonialism, AI sovereignty, Chinese cybersecurity threat, Georgetown University, Harvard University, information communication technology development, academic research, postcolonial theory',
  openGraph: {
    title: 'About Dr. Bulelani Jili - Chinese Surveillance Technology Expert',
    description: 'Leading academic expert in Chinese surveillance technology, Africa-China relations, AI governance, and digital colonialism at Georgetown University and Harvard University.',
    images: ['/assets/images/profile/aboutimage.jpg'],
  },
  alternates: {
    canonical: 'https://bulelani-jili.com/about',
  },
};

export default function About() {
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
                  &ldquo;He writes the most insightful work on these issues.&rdquo;
                </blockquote>
                <cite className="text-base sm:text-xl text-accent font-medium">– Eric Olander</cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-6 sm:space-y-8 text-base sm:text-lg leading-relaxed text-foreground/80">
            <p>
              Dr. Bulelani Jili is an assistant professor at Georgetown University, Edmund A. Walsh School of Foreign Service, 
              where he is part of the African Studies Program and an affiliate of the Science, Technology, and International Affairs (STIA) Program. 
              His research interests include Africa-China relations, cybersecurity, ICT development, African political economy, internet policy, 
              Chinese business law, law and development, and privacy law.
            </p>

            <p>
              He is also a visiting fellow at Yale Law School, a former fellow at the Atlantic Council, and a former cybersecurity fellow 
              at the Belfer Center at Harvard University. He also conducted research for the China, Law, and Development project at Oxford University. 
              The European Research Council funds the 5-year interdisciplinary and multi-sited research project, which seeks to comprehend 
              the underlying order of China&apos;s new globalism.
            </p>

            <p>
              He has also advised leading think tanks, governments, firms, and watchdogs such as the American Bar Association, OpenAI, 
              the French government, Freedom House, the UK&apos;s Foreign, Commonwealth & Development Office, the US State Department, 
              the United Nations, and the Center for Strategic and International Studies.
            </p>

            <p>
              His writing has appeared in leading think tanks and journals around the world, including African Affairs, Nature, 
              Theory, Culture & Society, Mail & Guardian, Africa is a Country, The Elephant, South China Morning Post, 
              African Centre for Strategic Studies, Politico, Lawfare, Tech Policy Press, The Economist, and Financial Times. 
              He is also a regular panelist and speaker at international conferences, including those in South Africa, South Korea, 
              India, Switzerland, and Australia.
            </p>
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
              {[
                'Africa-China Relations',
                'AI Governance',
                'Cybersecurity',
                'Digital Policy',
                'Surveillance Technology',
                'International Relations',
                'Tech Ethics',
                'Political Economy'
              ].map((area) => (
                <div key={area} className="bg-gray-800/30 p-3 border border-gray-700 text-xs sm:text-sm text-center leading-relaxed" role="listitem">
                  {area}
                </div>
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section className="mt-12 sm:mt-16" aria-labelledby="education-heading">
            <h2 id="education-heading" className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-accent">Education</h2>
            <div className="space-y-4 sm:space-y-6" role="list">
              <article className="border-l-2 border-accent pl-4 sm:pl-6" role="listitem">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Ph.D., Harvard University</h3>
                <p className="text-sm sm:text-base text-foreground/60">Doctoral studies in African political economy and international relations</p>
              </article>
              <article className="border-l-2 border-accent pl-4 sm:pl-6" role="listitem">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">M.Phil., Cambridge University (UK)</h3>
                <p className="text-sm sm:text-base text-foreground/60">Standard Bank Africa Chairman&apos;s Scholar</p>
              </article>
              <article className="border-l-2 border-accent pl-4 sm:pl-6" role="listitem">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">M.A. in Economics, Peking University (China)</h3>
                <p className="text-sm sm:text-base text-foreground/60">Yenching Scholarship recipient, Yenching Academy</p>
              </article>
              <article className="border-l-2 border-accent pl-4 sm:pl-6" role="listitem">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">A.B. with honors in Philosophy, Politics, and Economics</h3>
                <p className="text-sm sm:text-base text-foreground/60">Wesleyan University (CT), College of Social Studies, Pfeiffer Scholar</p>
              </article>
            </div>
          </section>

          {/* Awards Section */}
          <section className="mt-12 sm:mt-16" aria-labelledby="awards-heading">
            <h2 id="awards-heading" className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-accent">Recent Awards & Fellowships</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6" role="list">
              <article className="bg-gray-800/30 p-4 sm:p-6 border border-gray-700" role="listitem">
                <h3 className="text-base sm:text-lg font-semibold text-accent mb-2">
                  <time dateTime="2024">2024</time>
                </h3>
                <p className="text-sm sm:text-base">International Strategy Forum Fellowship</p>
              </article>
              <article className="bg-gray-800/30 p-4 sm:p-6 border border-gray-700" role="listitem">
                <h3 className="text-base sm:text-lg font-semibold text-accent mb-2">
                  <time dateTime="2023">2023</time>
                </h3>
                <p className="text-sm sm:text-base">Google Public Policy Fellow</p>
              </article>
              <article className="bg-gray-800/30 p-4 sm:p-6 border border-gray-700" role="listitem">
                <h3 className="text-base sm:text-lg font-semibold text-accent mb-2">
                  <time dateTime="2022">2022</time>
                </h3>
                <p className="text-sm sm:text-base">Meta Research PhD Fellowship Award</p>
              </article>
              <article className="bg-gray-800/30 p-4 sm:p-6 border border-gray-700" role="listitem">
                <h3 className="text-base sm:text-lg font-semibold text-accent mb-2">
                  <time dateTime="2022">2022</time>
                </h3>
                <p className="text-sm sm:text-base">Wenner-Gren Foundation Fellowship</p>
              </article>
            </div>
          </section>
        </div>
      </div>
    </>
  );
} 