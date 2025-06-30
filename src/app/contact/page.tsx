import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact Dr. Bulelani Jili - Chinese Surveillance Technology & AI Governance Expert',
  description: 'Contact Dr. Bulelani Jili, Georgetown University expert in Chinese surveillance technology, Africa-China relations, AI governance, and digital colonialism. Available for speaking engagements, media inquiries, and academic consultations.',
  keywords: 'contact Dr. Bulelani Jili, Chinese surveillance technology expert, AI governance consultant, Africa-China relations specialist, Georgetown University professor, digital colonialism researcher, speaking engagements, media inquiries',
  openGraph: {
    title: 'Contact Dr. Bulelani Jili - Expert in Chinese Surveillance Technology',
    description: 'Get in touch with Dr. Bulelani Jili for collaboration opportunities, speaking engagements, and consultations on Chinese surveillance technology and AI governance.',
    images: ['/assets/images/profile/contactimage.jpg'],
  },
  alternates: {
    canonical: 'https://bulelani-jili.com/contact',
  },
};

export default function Contact() {
  return <ContactClient />;
} 