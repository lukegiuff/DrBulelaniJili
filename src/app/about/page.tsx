import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About - Dr. Bulelani Jili',
  description: 'Learn more about Dr. Bulelani Jili, his academic background, research interests, and career achievements.',
};

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/profile/aboutimage.jpg"
            alt="Dr. Bulelani Jili - About Page Background"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center 20%' }}
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
                  About <span className="text-accent">Dr. Bulelani Jili</span>
                </h1>
                <div className="w-24 h-1 bg-accent mx-auto"></div>
              </div>
              
              {/* Quote Section */}
              <div className="space-y-4">
                <blockquote className="text-2xl lg:text-4xl font-light italic text-white/95 leading-relaxed">
                  "He writes the most insightful work on these issues."
                </blockquote>
                <cite className="text-xl text-accent font-medium">– Eric Olander</cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-8 text-lg leading-relaxed text-foreground/80">
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
          <div className="mt-16 mb-16">
            <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-8 text-center">
              <div className="mb-6">
                <svg className="w-16 h-16 text-accent mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
                </svg>
                <h3 className="text-2xl font-bold mb-2">Curriculum Vitae</h3>
                <p className="text-foreground/70">
                  Download Dr. Jili&apos;s complete academic CV including education, research experience, 
                  publications, presentations, and professional affiliations.
                </p>
              </div>
              
              <a 
                href="/assets/images/profile/Jili_Bulelani_CV.pdf"
                download="Dr_Bulelani_Jili_CV.pdf"
                className="inline-flex items-center px-8 py-4 bg-accent text-background font-semibold text-lg hover:bg-accent-dark transition-colors duration-200 group"
              >
                <svg className="w-5 h-5 mr-3 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Download CV (PDF)
              </a>
            </div>
          </div>

          {/* Research Areas Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8 text-accent">Research Areas</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
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
                <div key={area} className="bg-gray-800/30 p-3 border border-gray-700 text-sm text-center">
                  {area}
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8 text-accent">Education</h2>
            <div className="space-y-6">
              <div className="border-l-2 border-accent pl-6">
                <h3 className="text-xl font-semibold mb-2">Ph.D., Harvard University</h3>
                <p className="text-foreground/60">Doctoral studies in African political economy and international relations</p>
              </div>
              <div className="border-l-2 border-accent pl-6">
                <h3 className="text-xl font-semibold mb-2">M.Phil., Cambridge University (UK)</h3>
                <p className="text-foreground/60">Standard Bank Africa Chairman&apos;s Scholar</p>
              </div>
              <div className="border-l-2 border-accent pl-6">
                <h3 className="text-xl font-semibold mb-2">M.A. in Economics, Peking University (China)</h3>
                <p className="text-foreground/60">Yenching Scholarship recipient, Yenching Academy</p>
              </div>
              <div className="border-l-2 border-accent pl-6">
                <h3 className="text-xl font-semibold mb-2">A.B. with honors in Philosophy, Politics, and Economics</h3>
                <p className="text-foreground/60">Wesleyan University (CT), College of Social Studies, Pfeiffer Scholar</p>
              </div>
            </div>
          </div>

          {/* Awards Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8 text-accent">Recent Awards & Fellowships</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-800/30 p-6 border border-gray-700">
                <h3 className="text-lg font-semibold text-accent mb-2">2024</h3>
                <p>International Strategy Forum Fellowship</p>
              </div>
              <div className="bg-gray-800/30 p-6 border border-gray-700">
                <h3 className="text-lg font-semibold text-accent mb-2">2023</h3>
                <p>Google Public Policy Fellow</p>
              </div>
              <div className="bg-gray-800/30 p-6 border border-gray-700">
                <h3 className="text-lg font-semibold text-accent mb-2">2022</h3>
                <p>Meta Research PhD Fellowship Award</p>
              </div>
              <div className="bg-gray-800/30 p-6 border border-gray-700">
                <h3 className="text-lg font-semibold text-accent mb-2">2022</h3>
                <p>Wenner-Gren Foundation Fellowship</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 