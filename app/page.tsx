'use client';

import { useState } from 'react';
import Link from 'next/link';

type PeopleAlsoAskItemProps = {
  question: string;
  answer: string;
  link: string;
  linkText: string;
};

function PeopleAlsoAskItem({ question, answer, link, linkText }: PeopleAlsoAskItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-300 rounded hover:bg-gray-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4"
      >
        <p className="text-gray-800 text-sm font-medium text-left">{question}</p>
        <span className="text-gray-600 text-lg flex-shrink-0">
          {isOpen ? '▼' : '▶'}
        </span>
      </button>
      {isOpen && (
        <div className="border-t border-gray-300 px-4 py-3 bg-gray-50">
          <p className="text-gray-700 text-sm mb-3">{answer}</p>
          <Link href={link} className="text-blue-600 hover:underline text-sm font-medium">
            {linkText}
          </Link>
        </div>
      )}
    </div>
  );
}

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('Divya Sri Vadapalli');

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
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
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
            <Link href="/" className="text-blue-600 border-b-2 border-blue-600 pb-2 font-medium">
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
            {/* Main Title */}
            <h1 className="text-2xl text-blue-600 mb-3">
              Divya Sri Vadapalli
            </h1>

            {/* Main Subtitle */}
            <p className="text-gray-600 text-sm mb-6">
              AI/ML Oriented Developer
            </p>

            {/* Bio Description */}
            <p className="text-gray-700 text-sm leading-relaxed mb-8">
              AI/ML-focused Electronics and Communication undergraduate with hands-on experience building real-world systems across computer vision, NLP, and predictive modeling. Strong in developing end-to-end solutions—from training transformer models to deploying intelligent, data-driven applications with measurable performance impact.
            </p>

            {/* EXPERIENCE Section */}
            <section className="mb-10">
              <h2 className="text-lg text-blue-600 mb-6">EXPERIENCE</h2>

              {/* Experience 1 */}
              <div className="mb-8">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-base text-gray-900">Space Technology Summer Intern</h3>
                    <p className="text-sm text-gray-600">India Space Lab</p>
                  </div>
                  <span className="text-gray-600 text-sm whitespace-nowrap">April – May 2026</span>
                </div>
                <p className="text-sm text-gray-600 mb-2">Hyderabad, India</p>
                <ul className="text-gray-700 text-sm space-y-1 ml-4">
                  <li>● Built mini satellite system prototypes (CanSat/CubeSat) capable of collecting and transmitting real-time sensor data for telemetry-based applications</li>
                  <li>● Implemented the system using onboard sensors, telemetry modules, and simulation-driven testing workflows to ensure reliable data transmission</li>
                  <li>● Generated and analyzed real-time data outputs, validating system performance and consistency in multiple testing scenarios</li>
                </ul>
              </div>

              {/* Experience 2 */}
              <div className="mb-8">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-base text-gray-900">AI/ML Intern</h3>
                    <p className="text-sm text-gray-600">Taras Systems and Solutions</p>
                  </div>
                  <span className="text-gray-600 text-sm whitespace-nowrap">Feb 2026</span>
                </div>
                <p className="text-sm text-gray-600 mb-2">Hyderabad, India</p>
                <ul className="text-gray-700 text-sm space-y-1 ml-4">
                  <li>● Built a real-time hand gesture-controlled virtual mouse system enabling touchless cursor control, interaction, and zoom operations</li>
                  <li>● Implemented using OpenCV, MediaPipe, and Autopy for hand tracking, gesture recognition, and cursor control</li>
                  <li>● Achieved 93% gesture detection accuracy, delivering smooth and responsive real-time interaction</li>
                </ul>
              </div>
            </section>

            {/* RESEARCH Section */}
            <section className="mb-10">
              <h2 className="text-lg text-blue-600 mb-6">RESEARCH</h2>

              {/* Research 1 */}
              <div className="mb-8">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-base text-gray-900">5G Network Slice Modeling for Real-Time Railway Systems</h3>
                    <p className="text-sm text-gray-600">Research Project</p>
                  </div>
                  <span className="text-gray-600 text-sm whitespace-nowrap">Aug 2025 - Present</span>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Designed an analytical Markov-chain-based model to evaluate hard and soft real-time traffic in 5G networks. Achieved over 95% accuracy in predictions. Technologies used: Python, MySQL, Linux, Analytical Modeling
                </p>
              </div>

              {/* Research 2 */}
              <div className="mb-8">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-base text-gray-900">Gaining Access and Performing Attacks through Kali Linux</h3>
                    <p className="text-sm text-gray-600">Cybersecurity Research</p>
                  </div>
                  <span className="text-gray-600 text-sm whitespace-nowrap">Aug 2025 - Present</span>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Explored the NIST Cybersecurity Framework (CVE-2020-0790) on Windows 10 using custom Python scripts. Executed man-in-the-middle attacks using Bettercap. Technologies used: Kali Linux, Python, Network Security, Penetration Testing
                </p>
              </div>
            </section>

            {/* PROJECTS Section */}
            <section className="mb-10">
              <h2 className="text-lg text-blue-600 mb-6">PROJECTS</h2>

              {/* Project 1 - NanoGPT */}
              <div className="mb-8">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-base text-gray-900">NanoGPT Story Model</h3>
                    <p className="text-sm text-gray-600">AI/ML - NLP</p>
                  </div>
                  <span className="text-gray-600 text-sm whitespace-nowrap">Aug 2025 – Feb 2026</span>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Built and trained a GPT-2 style language model that generates coherent short stories from text prompts using a transformer architecture. Implemented transformer architecture for NLP tasks, training pipeline using PyTorch and Hugging Face datasets, generating coherent, context-aware stories from custom prompts.
                </p>
              </div>

              {/* Project 2 - Multi-Level Attention GAT */}
              <div className="mb-8">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-base text-gray-900">Multi-Level Attention GAT for Stock & Sector Recommendations</h3>
                    <p className="text-sm text-gray-600">AI/ML - Deep Learning</p>
                  </div>
                  <span className="text-gray-600 text-sm whitespace-nowrap">Mar 2024 – July 2024</span>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Built a deep learning model using Graph Attention Networks to rank NIFTY50 stocks and sectors, integrating multilevel attention to capture cross-sector relationships. Achieved notable performance gains: improved mean F1 by 20.84% and mean accuracy by 54.40%, demonstrating strong predictive power for equity selection.
                </p>
              </div>

              {/* Project 3 - MLOps Weather Predictor */}
              <div className="mb-8">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-base text-gray-900">MLOps Weather Predictor</h3>
                    <p className="text-sm text-gray-600">AI/ML - MLOps</p>
                  </div>
                  <span className="text-gray-600 text-sm whitespace-nowrap">Nov 2024 – Feb 2025</span>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Built a small-scale LLM from scratch with custom tokenization, dataset preparation, and pre-training on TinyStories dataset. Conducted controlled ablation experiments across context length, embedding size, and attention heads, documenting architectural trade-offs and their impact on loss curves and generalisation.
                </p>
              </div>

              {/* Project 4 - Protein Sequences */}
              <div className="mb-8">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-base text-gray-900">3D Structure Prediction from Protein Sequences</h3>
                    <p className="text-sm text-gray-600">AI/ML Research</p>
                  </div>
                  <span className="text-gray-600 text-sm whitespace-nowrap">Jun 2024 - Nov 2024</span>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Built a protein aggregation prediction pipeline from amino acid sequences using AI/ML with identified aggregation-prone regions linked to protein misfolding. Technologies used: Python, Random Forest, SVM, Kaggle & PDB datasets, Data Analysis
                </p>
              </div>

              {/* View All Projects Link */}
              <div>
                <Link href="/projects" className="text-blue-600 hover:underline text-sm font-medium">
                  View all projects →
                </Link>
              </div>
            </section>

            {/* HACKATHONS Section */}
            <section className="mb-10">
              <h2 className="text-lg text-blue-600 mb-6">HACKATHONS</h2>

              {/* Hackathon 1 */}
              <div className="mb-8">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-base text-gray-900">RamPage 2.0 (Hackathon Finalist)</h3>
                    <p className="text-sm text-gray-600">ERP Web Application</p>
                  </div>
                  <span className="text-gray-600 text-sm whitespace-nowrap">2024</span>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Led and designed an ERP-based website for university check-in and outs system. Technologies used: Flask, Web Development
                </p>
              </div>

              {/* Hackathon 2 */}
              <div className="mb-8">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-base text-gray-900">Amazon ML Challenge (Semi-Finalist)</h3>
                    <p className="text-sm text-gray-600">Machine Learning Competition</p>
                  </div>
                  <span className="text-gray-600 text-sm whitespace-nowrap">2024</span>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Designed product price predictor ML model with comprehensive tuning. Technologies used: Python, Machine Learning, Data Analysis
                </p>
              </div>

              {/* Hackathon 3 */}
              <div className="mb-8">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-base text-gray-900">Microsoft Hack with Hyderabad</h3>
                    <p className="text-sm text-gray-600">Hackathon Project</p>
                  </div>
                  <span className="text-gray-600 text-sm whitespace-nowrap">2024</span>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Built a real-time stock predictor analysis application. Technologies used: Python, Flask, React.js, Data Analysis
                </p>
              </div>
            </section>

            {/* ACHIEVEMENTS Section */}
            <section className="mb-10">
              <h2 className="text-lg text-blue-600 mb-6">ACHIEVEMENTS</h2>

              {/* Achievement 1 */}
              <div className="mb-6">
                <h3 className="text-base text-gray-900 font-medium">Stanford University Code in Place</h3>
                <p className="text-sm text-gray-600 mb-2">Completed CS106A Programming Course &apos;24</p>
              </div>

              {/* Achievement 2 */}
              <div className="mb-6">
                <h3 className="text-base text-gray-900 font-medium">McKinsey Forward Program &apos;25</h3>
                <p className="text-sm text-gray-600 mb-2">4-week program in Programming and Logic Building</p>
              </div>

              {/* Achievement 3 */}
              <div className="mb-6">
                <h3 className="text-base text-gray-900 font-medium">National University of Singapore (NUS) Internship &apos;25</h3>
                <p className="text-sm text-gray-600 mb-2">Selected for Research AI Intern position</p>
              </div>

              {/* Achievement 4 */}
              <div className="mb-6">
                <h3 className="text-base text-gray-900 font-medium">Leadership & Community</h3>
                <ul className="text-gray-700 text-sm space-y-1 ml-4">
                  <li>● Co-Head of Council Club and Member of IEEE community</li>
                  <li>● Hosted workshops and events over 2 years</li>
                  <li>● Vice Chair, DISEC (MUN) - presided over 200+ delegates</li>
                </ul>
              </div>

              {/* Achievement 5 */}
              <div className="mb-6">
                <h3 className="text-base text-gray-900 font-medium">Extracurricular</h3>
                <ul className="text-gray-700 text-sm space-y-1 ml-4">
                  <li>● Classical Kuchipudi Dancer (14+ years)</li>
                  <li>● Tennis Player</li>
                </ul>
              </div>
            </section>

            {/* People Also Ask Section */}
            <section className="mt-12">
              <h3 className="text-lg text-gray-900 mb-6">People also ask:</h3>
              <div className="space-y-3">
                <PeopleAlsoAskItem 
                  question="What skills does Divya have?"
                  answer="Python, JavaScript, Java, C, SQL, PyTorch, TensorFlow, Flask, FastAPI, LangChain, Pandas, NumPy, Scikit-learn, OpenCV, MediaPipe, Git, GitHub, Docker, Neo4j"
                  link="/skills"
                  linkText="View More Skills"
                />
                <PeopleAlsoAskItem 
                  question="What services does Divya provide?"
                  answer="AI/ML model development, NLP solutions, computer vision systems, data analytics, predictive modeling, full-stack application development, research and prototype development"
                  link="/"
                  linkText="View More"
                />
                <PeopleAlsoAskItem 
                  question="Is Divya frontend or backend developer?"
                  answer="Divya specializes in full-stack development with strong expertise in both frontend (React.js, JavaScript) and backend (Python, Flask, FastAPI) technologies, with a primary focus on AI/ML integration and data-driven application development."
                  link="/"
                  linkText="View More"
                />
                <PeopleAlsoAskItem 
                  question="How much experience does Divya have?"
                  answer="Divya is an undergraduate student with hands-on experience from multiple internships, hackathons, and research projects in AI/ML, web development, and systems engineering. She has practical experience in building end-to-end systems and participating in competitive challenges."
                  link="/"
                  linkText="View More"
                />
              </div>

              {/* Related Search Section */}
              <div className="mt-16">
                <h3 className="text-lg text-gray-900 mb-6">Related Search:</h3>
                <div className="grid grid-cols-2 gap-4">
                  <Link href="/skills" className="bg-gray-100 rounded-full px-4 py-3 hover:bg-gray-200 text-sm text-gray-700 flex items-center gap-2">
                    <span>Divya&apos;s Skills</span>
                  </Link>
                  <Link href="/projects" className="bg-gray-100 rounded-full px-4 py-3 hover:bg-gray-200 text-sm text-gray-700 flex items-center gap-2">
                    <span>Divya&apos;s Projects</span>
                  </Link>
                  <Link href="/contact" className="bg-gray-100 rounded-full px-4 py-3 hover:bg-gray-200 text-sm text-gray-700 flex items-center gap-2">
                    <span>Contact Divya</span>
                  </Link>
                  <Link href="/" className="bg-gray-100 rounded-full px-4 py-3 hover:bg-gray-200 text-sm text-gray-700 flex items-center gap-2">
                    <span>Divya&apos;s Location</span>
                  </Link>
                </div>
              </div>
            </section>
          </div>

          {/* Right Sidebar - Profile Card */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-300 rounded-lg p-6 sticky top-24">
              {/* Profile Image */}
              <div className="rounded-lg mb-4 overflow-hidden bg-gray-100 flex items-center justify-center h-72">
                <img 
                  src="/profile.jpg" 
                  alt="Divya Sri Vadapalli" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bio Text */}
              <p className="text-sm text-gray-700 text-center mb-6 leading-relaxed">
                Electronics and Communication undergraduate at Koneru Lakshmaiah University (graduating July 2027). Passionate about AI/ML with hands-on experience building intelligent systems. Focused on developing real-world applications across NLP, computer vision, and predictive modeling.
              </p>

              {/* Contact Links */}
              <div className="space-y-3 border-t border-gray-200 pt-4">
                <a href="mailto:vadapallidivyasrii@gmail.com" className="flex items-center gap-3 text-blue-600 hover:underline text-sm">
                  <span>vadapallidivyasrii@gmail.com</span>
                </a>
                <a href="tel:+918978363616" className="flex items-center gap-3 text-gray-700 hover:text-blue-600 text-sm">
                  <span>+91 8*****3616</span>
                </a>
                <a href="https://www.linkedin.com/in/divya-sri-v-3b5201299/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-blue-600 hover:underline text-sm">
                  <span>LinkedIn Profile</span>
                </a>
                <a href="https://github.com/Divyavadapalli" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-800 hover:text-blue-600 text-sm">
                  <span>Github Profile</span>
                </a>
                <Link href="/projects" className="flex items-center gap-3 text-blue-600 hover:underline text-sm">

                  <span>Portfolio Projects</span>
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
