import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Presentations & Events - Dr. Bulelani Jili',
  description: 'Explore Dr. Bulelani Jili\'s speaking engagements, presentations, and conference appearances worldwide.',
};

export default function Events() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-accent">Presentations</span> & Events
          </h1>
          <div className="w-24 h-1 bg-accent"></div>
        </div>

        {/* Upcoming Events */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-accent">Upcoming Presentations</h2>
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

        {/* Recent Presentations */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-accent">Recent Presentations</h2>
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

        {/* Video Presentations */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-accent">Featured Videos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group cursor-pointer">
              <a 
                href="https://www.youtube.com/watch?time_continue=523&v=iFAIRpJZozQ" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative aspect-video border border-gray-700 group-hover:border-accent transition-all duration-300 overflow-hidden rounded-lg">
                  {/* Video Thumbnail */}
                  <Image
                    src="/assets/images/videos/African Demand Chinese Surveillance.png"
                    alt="African Demand for Chinese Surveillance Technology Video Thumbnail"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                  
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300"></div>
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-accent/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-accent transition-all duration-300 shadow-lg">
                      <svg className="w-8 h-8 text-background ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                  
                  {/* Video Duration Badge */}
                  <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    Video
                  </div>
                </div>
                
                <div className="p-4 bg-gray-800/30 border border-gray-700 border-t-0 group-hover:border-accent transition-colors duration-300 rounded-b-lg">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors duration-300">African Demand for Chinese Surveillance Technology</h3>
                  <p className="text-foreground/80 mb-2 text-sm">The Africa-China Podcast</p>
                  <span className="text-accent text-sm font-medium">Watch Video →</span>
                </div>
              </a>
            </div>

            <div className="group cursor-pointer">
              <a 
                href="https://www.youtube.com/watch?time_continue=59&v=ODVCINHfrHY" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative aspect-video border border-gray-700 group-hover:border-accent transition-all duration-300 overflow-hidden rounded-lg">
                  {/* Video Thumbnail */}
                  <Image
                    src="/assets/images/videos/The China Global South.png"
                    alt="The China-Global South Conference Panel Video Thumbnail"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                  
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300"></div>
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-accent/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-accent transition-all duration-300 shadow-lg">
                      <svg className="w-8 h-8 text-background ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                  
                  {/* Video Duration Badge */}
                  <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    Video
                  </div>
                </div>
                
                <div className="p-4 bg-gray-800/30 border border-gray-700 border-t-0 group-hover:border-accent transition-colors duration-300 rounded-b-lg">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors duration-300">The China-Global South Conference Panel</h3>
                  <p className="text-foreground/80 mb-2 text-sm">Atlantic Council</p>
                  <span className="text-accent text-sm font-medium">Watch Video →</span>
                </div>
              </a>
            </div>

            <div className="group cursor-pointer">
              <a 
                href="https://www.youtube.com/watch?v=EHgqVJWBxtA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative aspect-video border border-gray-700 group-hover:border-accent transition-all duration-300 overflow-hidden rounded-lg">
                  {/* Video Thumbnail */}
                  <Image
                    src="/assets/images/videos/Global South Geopolitcs US Europe.png"
                    alt="Global South, Geopolitics, and US, Europe, & China's Competition Video Thumbnail"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                  
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300"></div>
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-accent/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-accent transition-all duration-300 shadow-lg">
                      <svg className="w-8 h-8 text-background ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                  
                  {/* Video Duration Badge */}
                  <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    Video
                  </div>
                </div>
                
                <div className="p-4 bg-gray-800/30 border border-gray-700 border-t-0 group-hover:border-accent transition-colors duration-300 rounded-b-lg">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors duration-300">Global South, Geopolitics, and US, Europe, & China&apos;s Competition</h3>
                  <p className="text-foreground/80 mb-2 text-sm">Berkman Klein Center</p>
                  <span className="text-accent text-sm font-medium">Watch Video →</span>
                </div>
              </a>
            </div>

            <div className="group cursor-pointer">
              <a 
                href="https://www.youtube.com/watch?v=etG6SKey2eA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative aspect-video border border-gray-700 group-hover:border-accent transition-all duration-300 overflow-hidden rounded-lg">
                  {/* Video Thumbnail */}
                  <Image
                    src="/assets/images/videos/Africas Demand for and Adoption.png"
                    alt="Africa's Demand for and Adoption of Chinese Surveillance Technologies Video Thumbnail"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                  
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300"></div>
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-accent/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-accent transition-all duration-300 shadow-lg">
                      <svg className="w-8 h-8 text-background ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                  
                  {/* Video Duration Badge */}
                  <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    Video
                  </div>
                </div>
                
                <div className="p-4 bg-gray-800/30 border border-gray-700 border-t-0 group-hover:border-accent transition-colors duration-300 rounded-b-lg">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors duration-300">Africa&apos;s Demand for and Adoption of Chinese Surveillance Technologies</h3>
                  <p className="text-foreground/80 mb-2 text-sm">Lawfare</p>
                  <span className="text-accent text-sm font-medium">Watch Video →</span>
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
  );
} 