import Hero from './components/Hero';
import { getHeroContent, getHighlights } from '@/lib/content';

export default function Home() {
  const heroContent = getHeroContent();
  const highlights = getHighlights();
  
  return <Hero heroContent={heroContent} highlights={highlights} />;
}
