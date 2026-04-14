'use client';

import Link from 'next/link';

export default function Map() {
  return (
    <div>
      {/* Header with Search Bar */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="w-full px-8 py-4">
          {/* Top Row: Logo, Search, Theme */}
          <div className="flex items-center justify-between mb-6 gap-4">
            {/* Google Logo */}
            <div className="flex items-center flex-shrink-0">
              <span className="text-2xl font-bold">
                <span className="text-blue-600">G</span>
                <span className="text-red-600">o</span>
                <span className="text-yellow-600">o</span>
                <span className="text-blue-600">g</span>
                <span className="text-green-600">l</span>
                <span className="text-red-600">e</span>
              </span>
            </div>
            
            {/* Center Search Bar */}
            <div className="flex-1 max-w-md">
              <div className="flex items-center gap-2 border border-gray-300 rounded-full px-5 py-3 bg-white shadow-sm hover:shadow-md">
                <input
                  type="text"
                  placeholder="Search location..."
                  className="flex-1 outline-none bg-transparent text-gray-700 text-sm"
                />
              </div>
            </div>
            
            {/* Right: Theme & Profile */}
            <div className="flex items-center gap-6 flex-shrink-0">
              <button className="text-gray-400 hover:text-gray-600">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0z" />
                </svg>
              </button>
              <div className="w-9 h-9 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                D
              </div>
            </div>
          </div>

          {/* Navigation Tabs - Below Search */}
          <nav className="flex gap-8 text-base border-t border-gray-200 pt-4 mt-4">
            <Link href="/" className="text-gray-700 hover:text-gray-900 pb-2 font-medium">
              About
            </Link>
            <Link href="/skills" className="text-gray-700 hover:text-gray-900 pb-2 font-medium">
              Skills
            </Link>
            <Link href="/projects" className="text-gray-700 hover:text-gray-900 pb-2 font-medium">
              Projects
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-gray-900 pb-2 font-medium">
              Contact
            </Link>
            <Link href="/map" className="text-blue-600 border-b-2 border-blue-600 pb-2 font-medium">
              Map
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 px-8 pl-32">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-3">
            {/* Page Title */}
            <h1 className="text-2xl text-blue-600 mb-3">
              Where I'm From
            </h1>

            {/* Page Subtitle */}
            <p className="text-gray-600 text-sm mb-8">
              Hyderabad, India - Based in the heart of India's tech hub
            </p>

            {/* Interactive World Map SVG */}
            <div className="mb-8 bg-gray-50 border border-gray-300 rounded-lg p-8">
              <svg viewBox="0 0 960 600" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
                {/* World Map Background */}
                <rect width="960" height="600" fill="#e8f4f8"/>
                
                {/* Simplified world map - major continents */}
                {/* North America */}
                <path d="M 100 150 L 200 100 L 250 150 L 220 250 L 100 200 Z" fill="#d0e8f2" stroke="#999" strokeWidth="1"/>
                
                {/* South America */}
                <path d="M 180 300 L 220 280 L 240 450 L 180 480 Z" fill="#d0e8f2" stroke="#999" strokeWidth="1"/>
                
                {/* Europe */}
                <path d="M 350 120 L 450 100 L 480 180 L 400 200 L 350 180 Z" fill="#d0e8f2" stroke="#999" strokeWidth="1"/>
                
                {/* Africa */}
                <path d="M 400 200 L 500 180 L 550 450 L 450 480 L 380 300 Z" fill="#d0e8f2" stroke="#999" strokeWidth="1"/>
                
                {/* Asia */}
                <path d="M 480 120 L 700 100 L 750 250 L 600 300 L 500 200 Z" fill="#d0e8f2" stroke="#999" strokeWidth="1"/>
                
                {/* India - Highlighted */}
                <g> 
                  {/* India polygon */}
                  <path d="M 560 240 L 575 235 L 585 245 L 590 270 L 580 280 L 570 275 Z" fill="#fbbf24" stroke="#d97706" strokeWidth="2"/>
                  
                  {/* Hyderabad pin point - creative marker */}
                  <circle cx="573" cy="260" r="8" fill="#dc2626" opacity="0.9"/>
                  <circle cx="573" cy="260" r="12" fill="#dc2626" opacity="0.4"/>
                  <circle cx="573" cy="260" r="16" fill="#dc2626" opacity="0.2"/>
                  
                  {/* Animated pulse */}
                  <circle cx="573" cy="260" r="5" fill="#fff"/>
                  
                  {/* Label */}
                  <text x="573" y="235" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#dc2626" className="font-sans">
                    Hyderabad
                  </text>
                  <text x="573" y="300" textAnchor="middle" fontSize="12" fill="#666" className="font-sans">
                    India&apos;s Tech Hub
                  </text>
                </g>
                
                {/* Australia */}
                <path d="M 720 350 L 780 340 L 800 420 L 740 440 Z" fill="#d0e8f2" stroke="#999" strokeWidth="1"/>
                
                {/* Labels for continents */}
                <text x="150" y="200" fontSize="12" fill="#999" textAnchor="middle">North America</text>
                <text x="200" y="380" fontSize="12" fill="#999" textAnchor="middle">South America</text>
                <text x="400" y="260" fontSize="12" fill="#999" textAnchor="middle">Africa</text>
                <text x="600" y="180" fontSize="12" fill="#999" textAnchor="middle">Europe</text>
                <text x="750" y="180" fontSize="12" fill="#999" textAnchor="middle">Asia</text>
              </svg>
            </div>

            {/* Information Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Location Card */}
              <div className="border border-gray-300 rounded-lg p-6 hover:shadow-md transition">
                <h2 className="text-lg text-gray-900 font-medium mb-3">Location Details</h2>
                <div className="space-y-3 text-sm text-gray-700">
                  <div>
                    <p className="text-gray-600 mb-1">City</p>
                    <p className="font-medium">Hyderabad</p>
                  </div>
                  <div>
                    <p className="text-gray-600 mb-1">State</p>
                    <p className="font-medium">Telangana</p>
                  </div>
                  <div>
                    <p className="text-gray-600 mb-1">Country</p>
                    <p className="font-medium">India</p>
                  </div>
                  <div>
                    <p className="text-gray-600 mb-1">Coordinates</p>
                    <p className="font-medium">17.3850° N, 78.4867° E</p>
                  </div>
                </div>
              </div>

              {/* About Hyderabad Card */}
              <div className="border border-gray-300 rounded-lg p-6 hover:shadow-md transition">
                <h2 className="text-lg text-gray-900 font-medium mb-3">About Hyderabad</h2>
                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                  Hyderabad is one of India's fastest-growing cities and a major IT hub, hosting numerous tech companies and research institutions.
                </p>
                <div className="space-y-2 text-sm">
                  <p><span className="font-medium">Population:</span> 6.8+ Million</p>
                  <p><span className="font-medium">Known for:</span> IT Industry, STEM Education</p>
                  <p><span className="font-medium">Time Zone:</span> IST (UTC+5:30)</p>
                </div>
              </div>
            </div>

            {/* University & Institution Info */}
            <div className="mt-8 border border-gray-300 rounded-lg p-6">
              <h2 className="text-lg text-gray-900 font-medium mb-4">Education & Work</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="text-2xl">🎓</div>
                  <div>
                    <p className="font-medium text-gray-900">Koneru Lakshmaiah University</p>
                    <p className="text-sm text-gray-600">Electronics and Communication Engineering</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-2xl">💼</div>
                  <div>
                    <p className="font-medium text-gray-900">Taras Systems and Solutions</p>
                    <p className="text-sm text-gray-600">AI/ML Intern - Hyderabad, India</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-2xl">🔬</div>
                  <div>
                    <p className="font-medium text-gray-900">National University of Singapore</p>
                    <p className="text-sm text-gray-600">Research AI Intern (2025)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Quick Links */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-300 rounded-lg p-6 sticky top-24">
              <h3 className="text-lg text-gray-900 font-medium mb-6">Quick Links</h3>
              
              <div className="space-y-3">
                <a 
                  href="https://www.google.com/maps/place/Hyderabad,+Telangana/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-blue-600 text-white py-2 rounded hover:bg-blue-700 text-sm font-medium"
                >
                  View on Google Maps
                </a>
                
                <a 
                  href="https://en.wikipedia.org/wiki/Hyderabad" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gray-100 text-gray-700 py-2 rounded hover:bg-gray-200 text-sm font-medium"
                >
                  Learn More
                </a>

                <Link 
                  href="/contact"
                  className="block w-full text-center bg-green-600 text-white py-2 rounded hover:bg-green-700 text-sm font-medium"
                >
                  Get in Touch
                </Link>
              </div>

              {/* Info Box */}
              <div className="mt-6 bg-blue-50 border border-blue-200 rounded p-4">
                <p className="text-xs text-blue-900 text-center">
                  📍 Based in Hyderabad, India. Open to opportunities worldwide!
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 mt-12 py-6 text-center text-sm text-gray-600">
        <p>© 2026 Divya Sri Vadapalli. All rights reserved.</p>
      </footer>
    </div>
  );
}
