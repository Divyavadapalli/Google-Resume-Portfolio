'use client';

import Link from 'next/link';

export default function Skills() {
  const skillCategories = [
    {
      category: 'Languages',
      skills: ['Python', 'Java', 'C', 'PL-SQL', 'JavaScript']
    },
    {
      category: 'Frameworks & Libraries',
      skills: ['PyTorch', 'TensorFlow', 'Flask', 'FastAPI', 'Pandas', 'NumPy', 'Scikit-learn', 'React.js']
    },
    {
      category: 'AI/ML & Data',
      skills: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'Graph Neural Networks', 'Time Series Analysis']
    },
    {
      category: 'Tools & Platforms',
      skills: ['Git', 'GitHub', 'Docker', 'Linux', 'MySQL', 'Neo4j', 'VS Code']
    },
    {
      category: 'Specialized Skills',
      skills: ['LLM Fine-tuning', 'Transformer Architecture', 'MLOps', 'Data Analysis', 'Predictive Modeling', 'REST APIs']
    }
  ];

  const platforms = [
    {
      name: 'LeetCode',
      username: 'diivvvyaaaa',
      url: 'https://leetcode.com/u/diivvvyaaaa',
      color: 'bg-yellow-50 border-yellow-300',
      textColor: 'text-yellow-600'
    },
    {
      name: 'Codeforces',
      username: 'divyavadapalli',
      url: 'https://codeforces.com/profile/divyavadapalli',
      color: 'bg-blue-50 border-blue-300',
      textColor: 'text-blue-600'
    },
    {
      name: 'CodeChef',
      username: 'divyavadapalli',
      url: 'https://www.codechef.com/users/divyavadapalli',
      color: 'bg-orange-50 border-orange-300',
      textColor: 'text-orange-600'
    }
  ];

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
                  placeholder="Search skills..."
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
            <Link href="/skills" className="text-blue-600 border-b-2 border-blue-600 pb-2 font-medium">
              Skills
            </Link>
            <Link href="/projects" className="text-gray-700 hover:text-gray-900 pb-2 font-medium">
              Projects
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-gray-900 pb-2 font-medium">
              Contact
            </Link>
            <Link href="/map" className="text-gray-700 hover:text-gray-900 pb-2 font-medium">
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
              Skills & Expertise
            </h1>

            {/* Page Subtitle */}
            <p className="text-gray-600 text-sm mb-8">
              Technical Skills and Proficiency
            </p>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {skillCategories.map((category) => (
                <div key={category.category} className="border border-gray-300 rounded-lg p-6 hover:shadow-md transition">
                  <h2 className="text-lg text-gray-900 font-medium mb-4">{category.category}</h2>
                  <ul className="space-y-2">
                    {category.skills.map((skill) => (
                      <li key={skill} className="flex items-center text-sm text-gray-700">
                        <span className="text-blue-600 mr-3">•</span>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Proficiency Section */}
            <section className="mb-12">
              <h2 className="text-lg text-blue-600 mb-6">Proficiency Levels</h2>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-base text-gray-900">Python & Machine Learning</span>
                    <span className="text-sm text-gray-600">Advanced</span>
                  </div>
                  <div className="w-full bg-gray-300 rounded h-2">
                    <div className="bg-blue-600 h-2 rounded" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-base text-gray-900">Java & C Programming</span>
                    <span className="text-sm text-gray-600">Advanced</span>
                  </div>
                  <div className="w-full bg-gray-300 rounded h-2">
                    <div className="bg-blue-600 h-2 rounded" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-base text-gray-900">Deep Learning (PyTorch, TensorFlow)</span>
                    <span className="text-sm text-gray-600">Advanced</span>
                  </div>
                  <div className="w-full bg-gray-300 rounded h-2">
                    <div className="bg-blue-600 h-2 rounded" style={{width: '88%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-base text-gray-900">Web Development (React, Flask)</span>
                    <span className="text-sm text-gray-600">Intermediate</span>
                  </div>
                  <div className="w-full bg-gray-300 rounded h-2">
                    <div className="bg-blue-600 h-2 rounded" style={{width: '75%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-base text-gray-900">Data Analytics & Visualization</span>
                    <span className="text-sm text-gray-600">Intermediate</span>
                  </div>
                  <div className="w-full bg-gray-300 rounded h-2">
                    <div className="bg-blue-600 h-2 rounded" style={{width: '80%'}}></div>
                  </div>
                </div>
              </div>
            </section>

            {/* Competitive Programming Section */}
            <section>
              <h2 className="text-lg text-blue-600 mb-6">Competitive Programming</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {platforms.map((platform) => (
                  <a
                    key={platform.name}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`border-2 ${platform.color} rounded-lg p-6 hover:shadow-md transition cursor-pointer`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className={`text-lg font-medium ${platform.textColor} mb-2`}>
                          {platform.name}
                        </h3>
                        <p className="text-sm text-gray-600">@{platform.username}</p>
                      </div>
                      <div className="text-2xl">→</div>
                    </div>
                    <p className="text-xs text-gray-600 mt-4">Click to view profile</p>
                  </a>
                ))}
              </div>
            </section>
          </div>

          {/* Right Sidebar - Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-300 rounded-lg p-6 sticky top-24">
              <h3 className="text-lg text-gray-900 font-medium mb-6">Skills Summary</h3>
              
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-gray-600 mb-2">Total Skills</p>
                  <p className="text-3xl text-blue-600 font-bold">
                    {skillCategories.reduce((sum, cat) => sum + cat.skills.length, 0)}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-600 mb-3">Categories</p>
                  <div className="space-y-2">
                    {skillCategories.map((category, idx) => (
                      <div key={idx} className="text-sm text-gray-700 flex items-center">
                        <span className="text-blue-600 mr-2">✓</span>
                        {category.category}
                      </div>
                    ))}
                  </div>
                </div>

                <Link href="/" className="block w-full text-center bg-blue-600 text-white py-2 rounded hover:bg-blue-700 text-sm font-medium">
                  Back to Profile
                </Link>
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
