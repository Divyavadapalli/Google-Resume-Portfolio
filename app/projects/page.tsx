'use client';

import Link from 'next/link';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'NanoGPT Story Model',
      timeline: 'Aug 2025 – Feb 2026',
      category: 'AI/ML - NLP',
      description: 'Built and trained a GPT-2 style language model that generates coherent short stories from text prompts using a transformer architecture.',
      highlights: [
        'Implemented transformer architecture for NLP tasks, training pipeline using PyTorch and Hugging Face datasets',
        'Generated coherent, context-aware stories from custom prompts, demonstrating end-to-end NLP system performance',
        'Fine-tuned model parameters for optimal story generation quality'
      ],
      technologies: ['PyTorch', 'Transformers', 'Hugging Face', 'Python'],
      image: 'https://images.unsplash.com/photo-1634815131414-9a0b3f842e1d?w=600&h=300&fit=crop'
    },
    {
      id: 2,
      title: 'Multi-Level Attention GAT for Stock & Sector Recommendations',
      timeline: 'Mar 2024 – July 2024',
      category: 'AI/ML - Deep Learning',
      description: 'Built a deep learning model using Graph Attention Networks to rank NIFTY50 stocks and sectors, integrating multilevel attention to capture cross-sector relationships and market dynamics.',
      highlights: [
        'Curated and structured time-series, fundamentals and sector-interaction data to improve signal quality',
        'Achieved notable performance gains: improved mean F1 by 20.84% and mean accuracy by 54.40%',
        'Demonstrated strong predictive power for equity selection with robust validation'
      ],
      technologies: ['PyTorch', 'Graph Attention Networks', 'TensorFlow', 'Python', 'Finance'],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=300&fit=crop'
    },
    {
      id: 3,
      title: 'MLOps Weather Predictor',
      timeline: 'Nov 2024 – Feb 2025',
      category: 'AI/ML - MLOps',
      description: 'Recreated a GPT-2-style model on the TinyStories dataset to explore transformer internals and LLM training practices.',
      highlights: [
        'Built a small-scale LLM from scratch with custom tokenization, dataset preparation, and pre-training',
        'Conducted controlled ablation experiments across context length, embedding size, and attention heads',
        'Documented architectural trade-offs and their impact on loss curves and generalisation'
      ],
      technologies: ['PyTorch', 'Transformers', 'MLOps', 'Python', 'Experiment Tracking'],
      image: 'https://images.unsplash.com/photo-1559721033-54dcd48e61c6?w=600&h=300&fit=crop'
    },
    {
      id: 4,
      title: '3D Structure Prediction from Protein Sequences',
      timeline: 'Jun 2024 - Nov 2024',
      category: 'AI/ML Research',
      description: 'Built a protein aggregation prediction pipeline from amino acid sequences using AI/ML with identified aggregation-prone regions linked to protein misfolding.',
      highlights: [
        'Developed predictive pipeline for identifying aggregation-prone regions in protein sequences',
        'Linked predicted regions to protein misfolding mechanisms using ML classification',
        'Utilized Kaggle and PDB datasets for comprehensive training and validation'
      ],
      technologies: ['Python', 'Random Forest', 'SVM', 'Kaggle', 'PDB Datasets', 'Data Analysis'],
      image: 'https://images.unsplash.com/photo-1576863259235-26dcff1dd4d7?w=600&h=300&fit=crop'
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
                  placeholder="Search projects..."
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
            <Link href="/projects" className="text-blue-600 border-b-2 border-blue-600 pb-2 font-medium">
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
              Divya&apos;s Projects
            </h1>

            {/* Page Subtitle */}
            <p className="text-gray-600 text-sm mb-8">
              AI/ML and Full-Stack Projects
            </p>

            {/* Projects Grid */}
            <div className="space-y-8">
              {projects.map((project) => (
                <div key={project.id} className="border border-gray-300 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                  {/* Project Image */}
                  <div className="bg-gray-100 h-48 overflow-hidden flex items-center justify-center">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h2 className="text-lg text-gray-900 font-medium">{project.title}</h2>
                        <p className="text-sm text-gray-600">{project.category}</p>
                      </div>
                      <span className="text-sm text-gray-600 whitespace-nowrap">{project.timeline}</span>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <div className="mb-4">
                      <ul className="text-sm text-gray-700 space-y-2">
                        {project.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex gap-2">
                            <span className="text-gray-600">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Sidebar - Empty */}
          <div className="lg:col-span-1">
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
