'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div>
      {/* Header */}
      <header className="flex justify-between items-center p-4 mb-8">
        <div className="flex items-center gap-8">
          <Link href="/">
            <div className="flex items-center gap-1">
              <span className="text-2xl font-bold">
                <span className="text-blue-600">G</span>
                <span className="text-red-600">o</span>
                <span className="text-yellow-600">o</span>
                <span className="text-blue-600">g</span>
                <span className="text-green-600">l</span>
                <span className="text-red-600">e</span>
              </span>
              <span className="text-sm text-gray-600 ml-2">Portfolio</span>
            </div>
          </Link>
        </div>
        <nav className="flex gap-6">
          <Link href="/" className="text-sm text-gray-700 hover:underline">About</Link>
          <Link href="/skills" className="text-sm text-gray-700 hover:underline">Skills</Link>
          <Link href="/projects" className="text-sm text-gray-700 hover:underline">Projects</Link>
          <Link href="/contact" className="text-sm text-gray-700 hover:underline">Contact</Link>
          <Link href="/map" className="text-sm text-gray-700 hover:underline">Map</Link>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto px-4">
        <h1 className="text-2xl mb-4">Get in Touch</h1>
        <p className="text-base text-gray-600 mb-12">
          Feel free to reach out for collaborations or just a friendly hello!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-lg mb-6">Send me a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Divyavadapalli@gmail.com"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
                  rows={5}
                  placeholder="Your message..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-lg mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="border border-gray-300 rounded p-4">
                <h3 className="text-gray-800 mb-2">Email</h3>
                <a href="mailto:vadapallidivyasrii@gmail.com" className="text-blue-600 hover:underline">
                  vadapallidivyasrii@gmail.com
                </a>
              </div>
              <div className="border border-gray-300 rounded p-4">
                <h3 className="text-gray-800 mb-2">Phone</h3>
                <a href="tel:+918978363616" className="text-blue-600 hover:underline">
                  +91 8978363616
                </a>
              </div>
              <div className="border border-gray-300 rounded p-4">
                <h3 className="text-gray-800 mb-2">Social Links</h3>
                <div className="space-y-2">
                  <a href="https://www.linkedin.com/in/divya-sri-v-3b5201299/" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:underline">
                    LinkedIn Profile
                  </a>
                  <a href="https://github.com/Divyavadapalli" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:underline">
                    GitHub Profile
                  </a>
                </div>
              </div>
              <div className="border border-gray-300 rounded p-4">
                <h3 className="font-semibold text-gray-800 mb-2">📍 Location</h3>
                <p className="text-gray-700">Hyderabad, India</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 pt-8 border-t border-gray-200 text-center text-gray-600 pb-8">
        <p>© 2026 Divya Sri Vadapalli. All rights reserved.</p>
      </footer>
    </div>
  );
}
