'use client';

import type { Metadata } from 'next';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    howDidYouHear: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message. Dr. Jili will get back to you soon.');
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Get In <span className="text-accent">Touch</span>
          </h1>
          <div className="w-24 h-1 bg-accent"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-accent">Contact Information</h2>
              <div className="space-y-6">
                <div className="bg-gray-800/30 p-6 border border-gray-700">
                  <h3 className="text-xl font-semibold mb-2 text-accent">Professional Affiliation</h3>
                  <p className="text-foreground/80 mb-2">Assistant Professor</p>
                  <p className="text-foreground/80 mb-2">Georgetown University</p>
                  <p className="text-foreground/80">Edmund A. Walsh School of Foreign Service</p>
                </div>

                <div className="bg-gray-800/30 p-6 border border-gray-700">
                  <h3 className="text-xl font-semibold mb-2 text-accent">Additional Appointments</h3>
                  <p className="text-foreground/80 mb-2">Visiting Fellow, Yale Law School</p>
                  <p className="text-foreground/80">Fellow, New America</p>
                </div>

                <div className="bg-gray-800/30 p-6 border border-gray-700">
                  <h3 className="text-xl font-semibold mb-2 text-accent">Location</h3>
                  <p className="text-foreground/80">Washington, DC</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-accent">Stay Connected</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://linkedin.com/in/bulelani-jili" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-accent text-background hover:bg-accent-dark transition-colors duration-200"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Research Interests */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-accent">Research Areas</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
                  <div key={area} className="bg-gray-800/30 p-3 border border-gray-700 text-sm">
                    {area}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-accent">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800/30 border border-gray-700 focus:border-accent focus:outline-none transition-colors duration-200"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800/30 border border-gray-700 focus:border-accent focus:outline-none transition-colors duration-200"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800/30 border border-gray-700 focus:border-accent focus:outline-none transition-colors duration-200"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800/30 border border-gray-700 focus:border-accent focus:outline-none transition-colors duration-200"
                />
              </div>

              <div>
                <label htmlFor="howDidYouHear" className="block text-sm font-medium mb-2">
                  How did you hear about me?
                </label>
                <select
                  id="howDidYouHear"
                  name="howDidYouHear"
                  value={formData.howDidYouHear}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800/30 border border-gray-700 focus:border-accent focus:outline-none transition-colors duration-200"
                >
                  <option value="">Select an option</option>
                  <option value="academic-publication">Academic Publication</option>
                  <option value="conference">Conference/Event</option>
                  <option value="media">Media Coverage</option>
                  <option value="social-media">Social Media</option>
                  <option value="colleague">Colleague Referral</option>
                  <option value="university">University Website</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  How can I help you? *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Please describe your inquiry, collaboration proposal, media request, or any questions you may have..."
                  className="w-full px-4 py-3 bg-gray-800/30 border border-gray-700 focus:border-accent focus:outline-none transition-colors duration-200 resize-vertical"
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-accent text-background font-medium hover:bg-accent-dark transition-colors duration-200"
              >
                Send Message
              </button>
            </form>

            <div className="mt-8 p-4 bg-gray-800/30 border border-gray-700">
              <p className="text-sm text-foreground/60">
                <strong>Response Time:</strong> I typically respond to inquiries within 2-3 business days. 
                For urgent matters, please indicate this in your message.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 