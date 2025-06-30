'use client';

import { useState } from 'react';
import Image from 'next/image';

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
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/profile/contactimage.jpg"
            alt="Dr. Bulelani Jili - Contact Background"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center 25%' }}
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
                  Get In <span className="text-accent">Touch</span>
                </h1>
                <div className="w-24 h-1 bg-accent mx-auto"></div>
              </div>
              
              {/* Subtitle */}
              <div className="space-y-4">
                <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
                  Connect for collaboration opportunities, media inquiries, speaking engagements, 
                  or academic consultations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">

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


          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-accent">Contact Me</h2>
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <legend className="sr-only">Personal Information</legend>
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium mb-2 text-foreground">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    aria-required="true"
                    aria-describedby="firstName-error"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800/30 border border-gray-700 rounded focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all duration-200"
                  />
                  <div id="firstName-error" className="sr-only" aria-live="polite"></div>
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium mb-2 text-foreground">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    aria-required="true"
                    aria-describedby="lastName-error"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800/30 border border-gray-700 rounded focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all duration-200"
                  />
                  <div id="lastName-error" className="sr-only" aria-live="polite"></div>
                </div>
              </fieldset>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  aria-required="true"
                  aria-describedby="email-error email-help"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800/30 border border-gray-700 rounded focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all duration-200"
                />
                <div id="email-help" className="text-sm text-foreground/60 mt-1">We'll never share your email address</div>
                <div id="email-error" className="sr-only" aria-live="polite"></div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2 text-foreground">
                  Phone Number <span className="text-foreground/60">(Optional)</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  aria-describedby="phone-help"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800/30 border border-gray-700 rounded focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all duration-200"
                />
                <div id="phone-help" className="text-sm text-foreground/60 mt-1">Include country code if outside US</div>
              </div>

              <div>
                <label htmlFor="howDidYouHear" className="block text-sm font-medium mb-2 text-foreground">
                  How did you hear about me? <span className="text-foreground/60">(Optional)</span>
                </label>
                <select
                  id="howDidYouHear"
                  name="howDidYouHear"
                  value={formData.howDidYouHear}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800/30 border border-gray-700 rounded focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all duration-200"
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
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                  How can I help you? *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  aria-required="true"
                  aria-describedby="message-error message-help"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Please describe your inquiry, collaboration proposal, media request, or any questions you may have..."
                  className="w-full px-4 py-3 bg-gray-800/30 border border-gray-700 rounded focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all duration-200 resize-vertical"
                />
                <div id="message-help" className="text-sm text-foreground/60 mt-1">Please provide as much detail as possible</div>
                <div id="message-error" className="sr-only" aria-live="polite"></div>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-accent text-background font-medium rounded hover:bg-accent-dark focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-describedby="submit-help"
              >
                Send Message
              </button>
              <div id="submit-help" className="text-sm text-foreground/60 text-center">
                I typically respond within 2-3 business days
              </div>
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
    </>
  );
} 