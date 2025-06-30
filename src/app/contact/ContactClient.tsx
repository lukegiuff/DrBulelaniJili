'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ContactClient() {
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
    console.log('Form submitted:', formData);
    alert('Thank you for your message. Dr. Jili will get back to you soon.');
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/profile/contactimage.jpg"
            alt="Dr. Bulelani Jili - Contact Background"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center 25%' }}
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/65 z-10"></div>
        <div className="relative z-20 container mx-auto px-6 text-center flex items-center justify-center min-h-full">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-white">
                  Get In <span className="text-accent">Touch</span>
                </h1>
                <div className="w-24 h-1 bg-accent mx-auto"></div>
              </div>
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
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800/30 border border-gray-700 rounded focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all duration-200"
                    />
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
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800/30 border border-gray-700 rounded focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all duration-200"
                    />
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
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800/30 border border-gray-700 rounded focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all duration-200"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
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
                    className="w-full px-4 py-3 bg-gray-800/30 border border-gray-700 rounded focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all duration-200 resize-vertical"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-accent text-background font-medium rounded hover:bg-accent-dark focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 transition-all duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 