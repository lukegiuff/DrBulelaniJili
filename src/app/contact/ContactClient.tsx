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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setSubmitMessage('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || 'YOUR_ACCESS_KEY_HERE',
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          subject: 'New Contact Form Submission from Dr. Bulelani Jili Website',
          from_name: 'Dr. Bulelani Jili Website',
          to: 'bulelanijili@g.harvard.edu'
        })
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setSubmitMessage('Thank you for your message! Dr. Jili will get back to you soon.');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          howDidYouHear: '',
          message: ''
        });
      } else {
        throw new Error(result.message || 'Failed to send message');
      }
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage(error instanceof Error ? error.message : 'Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] sm:min-h-[60vh] flex items-center justify-center pt-20">
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
        <div className="relative z-20 container mx-auto px-4 sm:px-6 text-center flex items-center justify-center min-h-full">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight text-white">
                  Get In <span className="text-accent">Touch</span>
                </h1>
                <div className="w-16 sm:w-24 h-1 bg-accent mx-auto"></div>
              </div>
              <div className="space-y-4">
                <p className="text-base sm:text-xl lg:text-2xl text-white/90 leading-relaxed">
                  Connect for collaboration opportunities, media inquiries, speaking engagements, 
                  or academic consultations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Info */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-accent">Contact Information</h2>
                <div className="space-y-4 sm:space-y-6">
                  <div className="bg-gray-800/30 p-4 sm:p-6 border border-gray-700">
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 text-accent">Professional Affiliation</h3>
                    <p className="text-sm sm:text-base text-foreground/80 mb-2">Assistant Professor</p>
                    <p className="text-sm sm:text-base text-foreground/80 mb-2">Georgetown University</p>
                    <p className="text-sm sm:text-base text-foreground/80">Edmund A. Walsh School of Foreign Service</p>
                  </div>
                  <div className="bg-gray-800/30 p-4 sm:p-6 border border-gray-700">
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 text-accent">Additional Appointments</h3>
                    <p className="text-sm sm:text-base text-foreground/80 mb-2">Visiting Fellow, Yale Law School</p>
                    <p className="text-sm sm:text-base text-foreground/80">Fellow, New America</p>
                  </div>
                  <div className="bg-gray-800/30 p-4 sm:p-6 border border-gray-700">
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 text-accent">Location</h3>
                    <p className="text-sm sm:text-base text-foreground/80">Washington, DC</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-accent">Contact Me</h2>
              
              {/* Status Messages */}
              {submitStatus && (
                <div className={`mb-6 p-4 rounded-lg ${
                  submitStatus === 'success' 
                    ? 'bg-green-900/30 border border-green-600 text-green-400' 
                    : 'bg-red-900/30 border border-red-600 text-red-400'
                }`}>
                  {submitMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6" noValidate>
                <fieldset className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
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
                      disabled={isSubmitting}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800/30 border border-gray-700 rounded focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all duration-200 text-sm sm:text-base disabled:opacity-50"
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
                      disabled={isSubmitting}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800/30 border border-gray-700 rounded focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all duration-200 text-sm sm:text-base disabled:opacity-50"
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
                    disabled={isSubmitting}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800/30 border border-gray-700 rounded focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all duration-200 text-sm sm:text-base disabled:opacity-50"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2 text-foreground">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800/30 border border-gray-700 rounded focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all duration-200 text-sm sm:text-base disabled:opacity-50"
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
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    placeholder="Please describe your inquiry, collaboration proposal, media request, or any questions you may have..."
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800/30 border border-gray-700 rounded focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all duration-200 resize-vertical text-sm sm:text-base disabled:opacity-50"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-accent text-background font-medium rounded hover:bg-accent-dark focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 transition-all duration-200 text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 