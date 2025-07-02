import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Events - Dr. Bulelani Jili',
  description: 'Explore Dr. Bulelani Jili\'s speaking engagements, events, and conference appearances worldwide.',
};

export default function Events() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/profile/eventsimage.png"
            alt="Dr. Bulelani Jili - Events Background"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
            priority
          />
        </div>
        
        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/85 z-10"></div>
        
        {/* Content */}
        <div className="relative z-20 container mx-auto px-6 text-center flex items-center justify-center min-h-full">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-white">
                  <span className="text-accent">Events</span> & Speaking
                </h1>
                <div className="w-24 h-1 bg-accent mx-auto"></div>
              </div>
              
              {/* Subtitle */}
              <div className="space-y-4">
                <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
                  International conferences, keynote addresses, and expert panels on technology, 
                  governance, and Africa-China relations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">


        {/* Upcoming Events */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-accent">Upcoming Events</h2>
          <div className="space-y-6">
            <div className="bg-gray-800/30 p-6 border border-gray-700 hover:border-accent transition-colors duration-200">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Reframing Digital Trade in Africa: Agency, Dependency, and the China Question</h3>
                <span className="text-accent font-medium">April 2025</span>
              </div>
              <p className="text-foreground/80 mb-2">European University Institute, Fiesole, Italy</p>
            </div>

            <div className="bg-gray-800/30 p-6 border border-gray-700 hover:border-accent transition-colors duration-200">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Between Dependency and Independence: African Agency Amid China&apos;s Expanding Digital Footprint</h3>
                <span className="text-accent font-medium">April 2025</span>
              </div>
              <p className="text-foreground/80 mb-2">Georgetown University, Washington, DC</p>
            </div>
          </div>
        </section>

        {/* Recent Events */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-accent">Recent Events</h2>
          <div className="space-y-6">
            <div className="bg-gray-800/30 p-6 border border-gray-700 hover:border-accent transition-colors duration-200">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Kenya&apos;s Technological Fix</h3>
                <span className="text-accent font-medium">November 2024</span>
              </div>
              <p className="text-foreground/80 mb-2">STS Circle meeting at Harvard Kennedy School, Cambridge, MA</p>
            </div>

            <div className="bg-gray-800/30 p-6 border border-gray-700 hover:border-accent transition-colors duration-200">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Tackling the Proliferation and Irresponsible use of Commercially available cyber intrusion capabilities</h3>
                <span className="text-accent font-medium">September 2024</span>
              </div>
              <p className="text-foreground/80 mb-2">The Pall Mall Process with United Kingdom and France governments, London UK</p>
            </div>

            <div className="bg-gray-800/30 p-6 border border-gray-700 hover:border-accent transition-colors duration-200">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Chinese surveillance tools as a technical fix in Africa</h3>
                <span className="text-accent font-medium">August 2024</span>
              </div>
              <p className="text-foreground/80 mb-2">Sydney Law School, Sydney, Australia</p>
            </div>

            <div className="bg-gray-800/30 p-6 border border-gray-700 hover:border-accent transition-colors duration-200">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Digital Identity as DPI: Fostering trust, inclusion & adoption</h3>
                <span className="text-accent font-medium">May 2024</span>
              </div>
              <p className="text-foreground/80 mb-2">ID4Africa, Cape Town, South Africa</p>
            </div>

            <div className="bg-gray-800/30 p-6 border border-gray-700 hover:border-accent transition-colors duration-200">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Global South, Geopolitics, and U.S, Europe, and China&apos;s Competition to Influence Global AI Regulation</h3>
                <span className="text-accent font-medium">April 2024</span>
              </div>
              <p className="text-foreground/80 mb-2">Berkman Klein Center, Harvard Law School and Georgetown Law School, Cambridge, MA</p>
              <p className="text-sm text-accent">Co-convenor</p>
            </div>
          </div>
        </section>

        {/* Video Events */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-accent">Featured Videos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Video 1 */}
            <div className="group w-full">
              <a 
                href="https://www.youtube.com/watch?time_continue=523&v=iFAIRpJZozQ" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full transition-transform duration-300 group-hover:scale-[1.02]"
              >
                <div className="bg-gray-800/40 border border-gray-700 group-hover:border-accent rounded-lg overflow-hidden transition-all duration-300 w-full">
                  {/* Video Thumbnail Container */}
                  <div className="relative w-full h-0 pb-[56.25%]"> {/* 16:9 aspect ratio */}
                    <Image
                      src="/assets/images/videos/african-demand-chinese-surveillance.png"
                      alt="African Demand for Chinese Surveillance Technology"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      style={{ objectFit: 'cover' }}
                      className="transition-transform duration-300 group-hover:scale-105"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
                    
                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                        <svg className="w-6 h-6 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors duration-300 line-clamp-2">
                      African Demand for Chinese Surveillance Technology
                    </h3>
                    <p className="text-gray-400 text-sm mb-3">The Africa-China Podcast</p>
                    <span className="text-accent text-sm font-medium">Watch Video →</span>
                  </div>
                </div>
              </a>
            </div>

            {/* Video 2 */}
            <div className="group w-full">
              <a 
                href="https://www.youtube.com/watch?time_continue=59&v=ODVCINHfrHY" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full transition-transform duration-300 group-hover:scale-[1.02]"
              >
                <div className="bg-gray-800/40 border border-gray-700 group-hover:border-accent rounded-lg overflow-hidden transition-all duration-300 w-full">
                  {/* Video Thumbnail Container */}
                  <div className="relative w-full h-0 pb-[56.25%]"> {/* 16:9 aspect ratio */}
                    <Image
                      src="/assets/images/videos/the-china-global-south.png"
                      alt="The China-Global South Conference Panel"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      style={{ objectFit: 'cover' }}
                      className="transition-transform duration-300 group-hover:scale-105"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
                    
                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                        <svg className="w-6 h-6 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors duration-300 line-clamp-2">
                      The China-Global South Conference Panel
                    </h3>
                    <p className="text-gray-400 text-sm mb-3">Atlantic Council</p>
                    <span className="text-accent text-sm font-medium">Watch Video →</span>
                  </div>
                </div>
              </a>
            </div>

            {/* Video 3 */}
            <div className="group w-full">
              <a 
                href="https://www.youtube.com/watch?v=EHgqVJWBxtA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full transition-transform duration-300 group-hover:scale-[1.02]"
              >
                <div className="bg-gray-800/40 border border-gray-700 group-hover:border-accent rounded-lg overflow-hidden transition-all duration-300 w-full">
                  {/* Video Thumbnail Container */}
                  <div className="relative w-full h-0 pb-[56.25%]"> {/* 16:9 aspect ratio */}
                    <Image
                      src="/assets/images/videos/global-south-geopolitics-us-europe.png"
                      alt="Global South, Geopolitics, and US, Europe, &amp; China&apos;s Competition"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      style={{ objectFit: 'cover' }}
                      className="transition-transform duration-300 group-hover:scale-105"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
                    
                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                        <svg className="w-6 h-6 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors duration-300 line-clamp-2">
                      Global South, Geopolitics, and US, Europe, & China&apos;s Competition
                    </h3>
                    <p className="text-gray-400 text-sm mb-3">Berkman Klein Center</p>
                    <span className="text-accent text-sm font-medium">Watch Video →</span>
                  </div>
                </div>
              </a>
            </div>

            {/* Video 4 */}
            <div className="group w-full">
              <a 
                href="https://www.youtube.com/watch?v=etG6SKey2eA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full transition-transform duration-300 group-hover:scale-[1.02]"
              >
                <div className="bg-gray-800/40 border border-gray-700 group-hover:border-accent rounded-lg overflow-hidden transition-all duration-300 w-full">
                  {/* Video Thumbnail Container */}
                  <div className="relative w-full h-0 pb-[56.25%]"> {/* 16:9 aspect ratio */}
                    <Image
                      src="/assets/images/videos/africas-demand-for-and-adoption.png"
                      alt="Africa&apos;s Demand for and Adoption of Chinese Surveillance Technologies"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      style={{ objectFit: 'cover' }}
                      className="transition-transform duration-300 group-hover:scale-105"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
                    
                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                        <svg className="w-6 h-6 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors duration-300 line-clamp-2">
                      Africa&apos;s Demand for and Adoption of Chinese Surveillance Technologies
                    </h3>
                    <p className="text-gray-400 text-sm mb-3">Lawfare</p>
                    <span className="text-accent text-sm font-medium">Watch Video →</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* International Conferences */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-accent">International Conference Locations</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'South Africa', 'South Korea', 'India', 'Switzerland', 
              'Australia', 'United Kingdom', 'Italy', 'China',
              'Kenya', 'Costa Rica', 'Germany', 'United States'
            ].map((location) => (
              <div key={location} className="bg-gray-800/30 p-4 border border-gray-700 text-center hover:border-accent transition-colors duration-200">
                <p className="font-medium">{location}</p>
              </div>
            ))}
          </div>
        </section>
        </div>
      </div>
    </>
  );
} 