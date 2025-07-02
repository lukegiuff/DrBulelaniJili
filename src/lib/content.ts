import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

export interface HeroContent {
  title1: string;
  title2: string;
  title3: string;
  description1: string;
  description2: string;
  primaryButton: string;
  secondaryButton: string;
  recognitionText: string;
  recognition: Array<{ item: string }>;
}

export interface AboutContent {
  title: string;
  description: string;
  keywords: string;
  heroQuote: string;
  quoteAttribution: string;
  researchAreas: Array<{ area: string }>;
  education: Array<{
    degree: string;
    institution: string;
    description?: string;
  }>;
  awards: Array<{
    year: string;
    award: string;
  }>;
  body: string;
}

export interface HighlightContent {
  title: string;
  date: string;
  description: string;
  linkText: string;
  linkUrl: string;
  order: number;
  active: boolean;
}

export interface PublicationContent {
  title: string;
  date: string;
  venue: string;
  authors: string[];
  abstract: string;
  link?: string;
  pdf?: string;
  category: string;
  tags: string[];
  featured: boolean;
  body?: string;
  slug: string;
}

export interface NewsContent {
  title: string;
  date: string;
  summary: string;
  image?: string;
  link?: string;
  category: string;
  tags: string[];
  featured: boolean;
  body: string;
  slug: string;
}

export interface EventContent {
  title: string;
  date: string;
  endDate?: string;
  location: string;
  type: string;
  description: string;
  link?: string;
  registrationLink?: string;
  featured: boolean;
  past: boolean;
  body?: string;
  slug: string;
}

export interface ContactContent {
  title: string;
  email: string;
  phone?: string;
  office: string;
  officeHours?: string;
  social: Array<{
    platform: string;
    url: string;
    handle?: string;
  }>;
  formInstructions: string;
  body?: string;
}

export interface SiteSettings {
  title: string;
  description: string;
  url: string;
  author: string;
  footer: string;
  navigation: Array<{
    label: string;
    url: string;
  }>;
}

// Generic function to load and parse markdown files
function loadMarkdownFile<T>(filePath: string): T & { body?: string } {
  try {
    const fullPath = path.join(contentDirectory, filePath);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return {
      ...data,
      body: content
    } as T & { body?: string };
  } catch (error) {
    console.warn(`Could not load content file: ${filePath}`, error);
    throw new Error(`Failed to load content: ${filePath}`);
  }
}

// Function to load all files from a directory
function loadMarkdownDirectory<T>(dirPath: string): (T & { slug: string })[] {
  try {
    const fullPath = path.join(contentDirectory, dirPath);
    
    if (!fs.existsSync(fullPath)) {
      return [];
    }

    const files = fs.readdirSync(fullPath);
    
    return files
      .filter(file => file.endsWith('.md'))
      .map(file => {
        const slug = file.replace(/\.md$/, '');
        const filePath = path.join(dirPath, file);
        const content = loadMarkdownFile<T>(filePath);
        
        return {
          ...content,
          slug
        };
      })
      .sort((a: any, b: any) => {
        // Sort by date if available, newest first
        if (a.date && b.date) {
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        }
        // Sort by order if available
        if (a.order && b.order) {
          return a.order - b.order;
        }
        return 0;
      });
  } catch (error) {
    console.warn(`Could not load directory: ${dirPath}`, error);
    return [];
  }
}

// Specific content loaders
export function getHeroContent(): HeroContent {
  return loadMarkdownFile<HeroContent>('hero.md');
}

export function getAboutContent(): AboutContent {
  return loadMarkdownFile<AboutContent>('about.md');
}

export function getContactContent(): ContactContent {
  return loadMarkdownFile<ContactContent>('contact.md');
}

export function getSiteSettings(): SiteSettings {
  return loadMarkdownFile<SiteSettings>('settings/site.md');
}

export function getHighlights(): HighlightContent[] {
  return loadMarkdownDirectory<HighlightContent>('highlights')
    .filter(highlight => highlight.active)
    .slice(0, 3); // Limit to 3 highlights
}

export function getPublications(): PublicationContent[] {
  return loadMarkdownDirectory<PublicationContent>('publications');
}

export function getFeaturedPublications(): PublicationContent[] {
  return getPublications().filter(pub => pub.featured);
}

export function getNews(): NewsContent[] {
  return loadMarkdownDirectory<NewsContent>('news');
}

export function getFeaturedNews(): NewsContent[] {
  return getNews().filter(news => news.featured);
}

export function getEvents(): EventContent[] {
  return loadMarkdownDirectory<EventContent>('events');
}

export function getUpcomingEvents(): EventContent[] {
  return getEvents()
    .filter(event => !event.past)
    .filter(event => new Date(event.date) >= new Date());
}

export function getPastEvents(): EventContent[] {
  return getEvents()
    .filter(event => event.past || new Date(event.date) < new Date());
}

// Helper function to format dates
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

// Helper function to get content by slug
export function getPublicationBySlug(slug: string): PublicationContent | null {
  const publications = getPublications();
  return publications.find(pub => pub.slug === slug) || null;
}

export function getNewsBySlug(slug: string): NewsContent | null {
  const news = getNews();
  return news.find(item => item.slug === slug) || null;
}

export function getEventBySlug(slug: string): EventContent | null {
  const events = getEvents();
  return events.find(event => event.slug === slug) || null;
} 