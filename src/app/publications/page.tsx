import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Publications - Dr. Bulelani Jili',
  description: 'Explore Dr. Bulelani Jili\'s academic publications, research papers, and scholarly contributions.',
};

export default function Publications() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-accent">Publications</span> & Research
          </h1>
          <div className="w-24 h-1 bg-accent"></div>
        </div>

        {/* Peer Reviewed Articles */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-accent">Peer Reviewed Articles</h2>
          <div className="space-y-6">
            <div className="bg-gray-800/30 p-6 border border-gray-700 hover:border-accent transition-colors duration-200">
              <h3 className="text-xl font-semibold mb-2">A Technological Fix: The Adoption of Chinese Public Security Systems</h3>
              <p className="text-accent mb-2">Georgetown Journal of International Affairs (2023)</p>
              <p className="text-foreground/80">Jili, Bulelani</p>
            </div>

            <div className="bg-gray-800/30 p-6 border border-gray-700 hover:border-accent transition-colors duration-200">
              <h3 className="text-xl font-semibold mb-2">Digital Surveillance Trends and Chinese Influence in Light of the COVID-19 Pandemic in Asia</h3>
              <p className="text-accent mb-2">Asian Journal of Comparative Law (2022)</p>
              <p className="text-foreground/80">Skebba, Jacob, Liu, Ava, Germanao, Marco, & Jili, Bulelani</p>
            </div>

            <div className="bg-gray-800/30 p-6 border border-gray-700 hover:border-accent transition-colors duration-200">
              <h3 className="text-xl font-semibold mb-2">Africa: Regulate Surveillance Technologies and Personal Data</h3>
              <p className="text-accent mb-2">Nature (2022)</p>
              <p className="text-foreground/80">Jili, Bulelani</p>
            </div>

            <div className="bg-gray-800/30 p-6 border border-gray-700 hover:border-accent transition-colors duration-200">
              <h3 className="text-xl font-semibold mb-2">Chinese ICT and Smart City Initiatives in Kenya</h3>
              <p className="text-accent mb-2">Asia Policy, 17(3), 40–50 (2022)</p>
              <p className="text-foreground/80">Jili, Bulelani</p>
            </div>

            <div className="bg-gray-800/30 p-6 border border-gray-700 hover:border-accent transition-colors duration-200">
              <h3 className="text-xl font-semibold mb-2">The Emergence of Guiding Cases in China</h3>
              <p className="text-accent mb-2">Peking University Law Journal, 6(2), 273–281 (2018)</p>
              <p className="text-foreground/80">Guo, Li & Jili, Bulelani</p>
            </div>
          </div>
        </section>

        {/* Book Chapters */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-accent">Book Chapters</h2>
          <div className="bg-gray-800/30 p-6 border border-gray-700 hover:border-accent transition-colors duration-200">
            <h3 className="text-xl font-semibold mb-2">The Spread of Chinese Surveillance Tools in Africa: A Focus on Ethiopia and Kenya</h3>
            <p className="text-accent mb-2">Africa–Europe Cooperation and Digital Transformation, Routledge (2022)</p>
            <p className="text-foreground/80">Jili, Bulelani</p>
          </div>
        </section>

        {/* Research Briefs */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-accent">Research & Policy Briefs</h2>
          <div className="space-y-6">
            <div className="bg-gray-800/30 p-6 border border-gray-700 hover:border-accent transition-colors duration-200">
              <h3 className="text-xl font-semibold mb-2">What Is Driving the Adoption of Chinese Surveillance Technology in Africa?</h3>
              <p className="text-accent mb-2">Atlantic Council Primer (2023)</p>
              <p className="text-foreground/80 mb-2">Jili, Bulelani</p>
              <div className="text-sm space-y-1">
                <p className="text-accent">• Cited in the Committee on Homeland Security, U.S. Congress</p>
                <p className="text-accent">• Cited in the Congressional-Executive Commission on China, US Congress</p>
              </div>
            </div>

            <div className="bg-gray-800/30 p-6 border border-gray-700 hover:border-accent transition-colors duration-200">
              <h3 className="text-xl font-semibold mb-2">China's Surveillance Ecosystem & the Global Spread of Its Tools</h3>
              <p className="text-accent mb-2">Atlantic Council Primer (2022)</p>
              <p className="text-foreground/80">Jili, Bulelani</p>
            </div>
          </div>
        </section>

        {/* Book Reviews */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-accent">Book Reviews</h2>
          <div className="space-y-6">
            <div className="bg-gray-800/30 p-6 border border-gray-700 hover:border-accent transition-colors duration-200">
              <h3 className="text-xl font-semibold mb-2">China, Africa, and the Future of the Internet</h3>
              <p className="text-accent mb-2">African Affairs, Oxford University Press (2021)</p>
              <p className="text-foreground/80">Jili, Bulelani</p>
            </div>

            <div className="bg-gray-800/30 p-6 border border-gray-700 hover:border-accent transition-colors duration-200">
              <h3 className="text-xl font-semibold mb-2">Black Pain and Disentanglements</h3>
              <p className="text-accent mb-2">Theory, Culture & Society, London, UK (2021)</p>
              <p className="text-foreground/80">Jili, Bulelani</p>
            </div>
          </div>
        </section>

        {/* Featured In */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-accent">Featured In</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {['Nature', 'The Economist', 'Financial Times', 'African Affairs', 'Politico', 'Lawfare', 'Voice of America', 'Business Insider'].map((publication) => (
              <div key={publication} className="bg-gray-800/30 p-4 border border-gray-700 text-center hover:border-accent transition-colors duration-200">
                <p className="font-medium">{publication}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
} 