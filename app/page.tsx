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
              Software Engineering & AI/ML Developer
            </p>

            {/* Bio Description */}
            <p className="text-gray-700 text-sm leading-relaxed mb-8">
              B.Tech Electronics and Communication (Honors) student at Koneru Lakshmaiah University with hands-on experience in Java, Spring Boot, PostgreSQL, Python, and PyTorch. Focused on production software engineering, NLP, and practical machine learning systems.
            </p>

            {/* EXPERIENCE Section */}
            <section className="mb-10">
              <h2 className="text-lg text-blue-600 mb-6">EXPERIENCE</h2>

              {/* Experience 0 */}
              <div className="mb-8">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-base text-gray-900">Software Engineering (Founder&apos;s) Intern</h3>
                    <p className="text-sm text-gray-600">Avantaro Technologies</p>
                  </div>
                  <span className="text-gray-600 text-sm whitespace-nowrap">Feb 2026 – Present</span>
                </div>
                <p className="text-sm text-gray-600 mb-2">Hyderabad, India</p>
                <ul className="text-gray-700 text-sm space-y-1 ml-4">
                  <li>● Redesigned a legacy Java/Spring Boot compliance engine into a 12-policy, database-driven architecture, expanding coverage to 250+ policy-specific keywords and 50+ exception rules through modular matcher configuration for context-aware violation detection</li>
                  <li>● Migrated the PostgreSQL data layer from 4 to 9 tables through 5 versioned Flyway migrations, introducing structured policies, matchers, exceptions and violations while maintaining 100% test pass rate and zero breaking changes across the existing scanning pipeline</li>
                  <li>● Eliminated a potential N+1 query bottleneck in exception-rule loading, reducing database access to 3 queries for 250+ keywords through bulk retrieval and in-memory grouping, with &lt;1 ms exception-filtering overhead per match</li>
                  <li>● Built an automated Java regression-testing framework spanning 108+ tests and 150+ golden-dataset listings, including 13 targeted false-positive/false-negative tests to systematically validate detection behavior and prevent regressions</li>
                </ul>
              </div>

              {/* Experience 0b */}
              <div className="mb-8">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-base text-gray-900">Session Leader (Student-Teacher)</h3>
                    <p className="text-sm text-gray-600">Stanford University – Code in Place</p>
                  </div>
                  <span className="text-gray-600 text-sm whitespace-nowrap">Apr – Jun 2026</span>
                </div>
                <p className="text-sm text-gray-600 mb-2">Remote</p>
                <ul className="text-gray-700 text-sm space-y-1 ml-4">
                  <li>● Collaborated with an international team while mentoring 15 students through live Python problem-solving sessions</li>
                  <li>● Recognized as a top-performing student and promoted to mentor, demonstrating technical communication and teamwork</li>
                </ul>
              </div>

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

            {/* EDUCATION Section */}
            <section className="mb-10">
              <h2 className="text-lg text-blue-600 mb-6">EDUCATION</h2>

              <div className="mb-8">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-base text-gray-900">Koneru Lakshmaiah University</h3>
                    <p className="text-sm text-gray-600">B.Tech in Electronics and Communication (Honors)</p>
                  </div>
                  <span className="text-gray-600 text-sm whitespace-nowrap">Expected July 2027</span>
                </div>
                <p className="text-sm text-gray-600 mb-2">Hyderabad, India | CGPA: 8.6</p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Concepts: Data Structures & Algorithms, Object Oriented Programming, Database Management Systems, Computer Network, AI/ML
                </p>
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
                  Designed and implemented a GPT-2 style transformer architecture in PyTorch for natural language generation using multi-head self-attention and positional encoding. Built an end-to-end NLP training pipeline using Hugging Face datasets including tokenization, batching, optimizer scheduling and loss monitoring.
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
                  Developed a machine learning pipeline for protein structure prediction using Python, reducing research costs by approximately 70% compared with traditional computational workflows. Optimized feature extraction and inference pipelines to reduce structural analysis time from weeks to hours for biological structure analysis workflows.
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
              <h2 className="text-lg text-blue-600 mb-6">HACKATHONS / WORKSHOPS</h2>

              {/* Hackathon / Workshop 0 */}
              <div className="mb-8">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-base text-gray-900">Taras Systems and Solutions Workshop – Top 1%</h3>
                    <p className="text-sm text-gray-600">Workshop / Applied AI</p>
                  </div>
                  <span className="text-gray-600 text-sm whitespace-nowrap">Jan - Feb 2026</span>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Built a real-time hand gesture-controlled virtual mouse system enabling touchless cursor control and interaction.
                </p>
              </div>

              {/* Hackathon / Workshop 0b */}
              <div className="mb-8">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-base text-gray-900">Hack with AI – Semi-Finalist</h3>
                    <p className="text-sm text-gray-600">Hackathon Project</p>
                  </div>
                  <span className="text-gray-600 text-sm whitespace-nowrap">2026</span>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Built a GST reconciliation engine using Neo4j knowledge graphs and Python to automate invoice matching and financial reconciliation workflows.
                </p>
              </div>

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

              {/* Achievement 6 */}
              <div className="mb-6">
                <h3 className="text-base text-gray-900 font-medium">700+ Core DSA Problems</h3>
                <p className="text-sm text-gray-600 mb-2">Solved across LeetCode and CodeChef with a 1490+ rating</p>
              </div>

              {/* Achievement 7 */}
              <div className="mb-6">
                <h3 className="text-base text-gray-900 font-medium">President of Council Club</h3>
                <p className="text-sm text-gray-600 mb-2">Member of ACM & Vice Chair, DISEC (MUN) with experience supporting 400+ delegates over 3 years</p>
              </div>

              {/* Achievement 8 */}
              <div className="mb-6">
                <h3 className="text-base text-gray-900 font-medium">Certifications</h3>
                <ul className="text-gray-700 text-sm space-y-1 ml-4">
                  <li>● Microsoft Azure AI Fundamentals (AI-900)</li>
                  <li>● Cisco Certified Network Associate (CCNA)</li>
                </ul>
              </div>
            </section>

            {/* People Also Ask Section */}
            <section className="mt-12">
              <h3 className="text-lg text-gray-900 mb-6">People also ask:</h3>
              <div className="space-y-3">
                <PeopleAlsoAskItem 
                  question="What skills does Divya have?"
                  answer="Java, Python, C, Spring Boot, Spring Security, Hibernate, JPA, REST APIs, SQL, PostgreSQL, Git, Docker, Flyway, Railway, Linux, CI/CD, PyTorch, Hugging Face, NumPy, and Pandas"
                  link="/skills"
                  linkText="View More Skills"
                />
                <PeopleAlsoAskItem 
                  question="What does Divya build?"
                  answer="Production backend systems, NLP models, machine learning pipelines, and automation tools using Java, Spring Boot, Python, and PyTorch"
                  link="/"
                  linkText="View More"
                />
                <PeopleAlsoAskItem 
                  question="What experience does Divya have?"
                  answer="Software Engineering (Founder&apos;s) Intern at Avantaro Technologies and Session Leader at Stanford University Code in Place, with project work in NLP and machine learning"
                  link="/"
                  linkText="View More"
                />
                <PeopleAlsoAskItem 
                  question="What are Divya's achievements?"
                  answer="700+ DSA problems solved across LeetCode and CodeChef, President of Council Club, Member of ACM, Vice Chair DISEC, and certifications in Azure AI Fundamentals and CCNA"
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
                B.Tech Electronics and Communication (Honors) student at Koneru Lakshmaiah University, graduating July 2027 with a CGPA of 8.6. Focused on backend engineering, NLP, and practical machine learning systems.
              </p>

              {/* Contact Links */}
              <div className="space-y-3 border-t border-gray-200 pt-4">
                <a href="mailto:vadapallidivyasrii@gmail.com" className="flex items-center gap-3 text-blue-600 hover:underline text-sm">
                  <span>vadapallidivyasrii@gmail.com</span>
                </a>
                <a href="tel:+918978363616" className="flex items-center gap-3 text-gray-700 hover:text-blue-600 text-sm">
                  <span>+91 8978363616</span>
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
