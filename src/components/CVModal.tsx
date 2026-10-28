import React, { useState, useEffect } from 'react';
import { X, ExternalLink, Mail, Phone, Github, Linkedin, FileText, Download } from 'lucide-react';
import { generateCVPdf } from '../utils/generateCVPdf';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleDownloadPdf = () => {
    try {
      setDownloading(true);
      generateCVPdf();
      setTimeout(() => setDownloading(false), 1500);
    } catch (err) {
      console.error('Failed to generate PDF:', err);
      setDownloading(false);
      // Fallback to window.print if jsPDF fails
      window.print();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-stone-900/60 backdrop-blur-xs overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-white rounded-lg shadow-2xl border border-stone-200 my-auto flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header / Action Toolbar */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-4 sm:px-6 py-3.5 bg-stone-50/95 backdrop-blur-xs border-b border-stone-200 rounded-t-lg">
          <div className="flex items-center gap-2 text-stone-900 font-semibold text-sm sm:text-base">
            <FileText className="w-4 h-4 text-stone-700" />
            <span>Curriculum Vitae</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadPdf}
              disabled={downloading}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 disabled:opacity-60 rounded transition-colors shadow-xs focus:outline-none cursor-pointer"
              title="Download PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{downloading ? 'Downloading...' : 'Download PDF'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-stone-500 hover:text-stone-900 hover:bg-stone-200/70 rounded transition-colors ml-1 focus:outline-none cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable CV Document Body */}
        <div className="p-6 sm:p-10 overflow-y-auto text-stone-900 text-sm leading-relaxed space-y-6">
          
          {/* Header */}
          <div className="text-center space-y-2 border-b border-stone-800 pb-5">
            <h1 className="text-2xl sm:text-3xl font-serif font-bold tracking-tight text-stone-950 uppercase">
              Syed Md Irfanul Alam Irfan
            </h1>
            
            {/* Contact Details */}
            <div className="flex flex-wrap items-center justify-center gap-x-3.5 gap-y-1 text-xs text-stone-700 pt-1">
              <a href="mailto:syedirfaanx@gmail.com" className="inline-flex items-center gap-1 hover:text-cyan-700 hover:underline">
                <Mail className="w-3 h-3 text-stone-500" />
                <span>syedirfaanx@gmail.com</span>
              </a>
              <span className="text-stone-300">·</span>
              <a href="tel:+8801336946358" className="inline-flex items-center gap-1 hover:text-cyan-700 hover:underline">
                <Phone className="w-3 h-3 text-stone-500" />
                <span>+880 1336946358</span>
              </a>
              <span className="text-stone-300">·</span>
              <a href="https://linkedin.com/in/syedirfanx" target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-1 hover:text-cyan-700 hover:underline">
                <Linkedin className="w-3 h-3 text-stone-500" />
                <span>linkedin.com/in/syedirfanx</span>
              </a>
              <span className="text-stone-300">·</span>
              <a href="https://github.com/syedirfanx" target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-1 hover:text-cyan-700 hover:underline">
                <Github className="w-3 h-3 text-stone-500" />
                <span>github.com/syedirfanx</span>
              </a>
            </div>
          </div>

          {/* RESEARCH PROFILE */}
          <section className="space-y-2">
            <h2 className="text-xs sm:text-sm font-bold tracking-wider text-stone-950 uppercase border-b border-stone-300 pb-1">
              Research Profile
            </h2>
            <p className="text-stone-800 text-xs sm:text-sm leading-relaxed text-justify">
              MSc Data Science graduate with research experience in feature selection, swarm intelligence and machine learning. My master's dissertation investigated Particle Swarm Optimization (PSO) and Dispersive Flies Optimization (DFO) for feature selection in high dimensional dataset. I have also contributed to peer-reviewed IEEE research on machine learning based rice leaf disease detection and developed projects involving predictive modelling, generative deep learning, network analytics and LLM-based applications. I am interested in doctoral research at the intersection of machine learning, optimization, data-centric AI, and intelligent systems.
            </p>
            <p className="text-xs sm:text-sm text-stone-800 pt-0.5">
              <strong className="font-semibold text-stone-950">Research Interests:</strong> Machine Learning, Deep Learning, Generative AI and LLMs, Feature Selection, Optimization, Reinforcement Learning, Data Mining.
            </p>
          </section>

          {/* EDUCATION */}
          <section className="space-y-2">
            <h2 className="text-xs sm:text-sm font-bold tracking-wider text-stone-950 uppercase border-b border-stone-300 pb-1">
              Education
            </h2>
            <div className="space-y-2 text-xs sm:text-sm">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-0.5">
                <div>
                  <strong className="font-semibold text-stone-950">MSc Data Science</strong>, University of Greenwich, London
                </div>
                <div className="text-xs text-stone-600 font-mono shrink-0">Jan 2022 – Apr 2023</div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-0.5">
                <div>
                  <strong className="font-semibold text-stone-950">BSc Computer Science and Engineering</strong>, North South University, Dhaka
                </div>
                <div className="text-xs text-stone-600 font-mono shrink-0">Jan 2015 – Apr 2020</div>
              </div>
            </div>
          </section>

          {/* RESEARCH EXPERIENCE */}
          <section className="space-y-3">
            <h2 className="text-xs sm:text-sm font-bold tracking-wider text-stone-950 uppercase border-b border-stone-300 pb-1">
              Research Experience
            </h2>

            {/* MSc Dissertation */}
            <div className="space-y-1.5 text-xs sm:text-sm">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-0.5">
                <div>
                  <strong className="font-semibold text-stone-950">MSc Dissertation</strong> — University of Greenwich
                </div>
                <div className="text-xs text-stone-600 font-mono shrink-0">May 2022 – Jan 2023</div>
              </div>
              <div className="font-serif italic text-stone-800">
                ‘Feature Selection using Swarm Intelligence and Dispersive Flies Optimization’{' '}
                <a
                  href="https://github.com/syedirfanx/swarm-intelligence"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="font-sans not-italic text-cyan-700 hover:text-cyan-900 hover:underline inline-flex items-center gap-0.5"
                >
                  (github.com/syedirfanx/swarm-intelligence <ExternalLink className="w-2.5 h-2.5 inline" />)
                </a>
              </div>
              <div className="text-stone-700 text-xs">
                <strong>Supervisor:</strong> Dr. Mohammed Majid Al-Rifaie
              </div>
              <ul className="list-disc pl-5 space-y-1 text-stone-800">
                <li>Applied Particle Swarm Optimization and Dispersive Flies Optimization on high-dimensional dataset up to 2,400 features.</li>
                <li>Reduced dimensionality by up to 86% while achieving up to a 1.98% improvement in classification accuracy.</li>
                <li>Worked on the full pipeline under supervision, including data preparation and processing, implementation of both swarm intelligence techniques and evaluation of classifier performance.</li>
              </ul>
            </div>

            {/* Undergrad Research */}
            <div className="space-y-1.5 text-xs sm:text-sm pt-2">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-0.5">
                <div>
                  <strong className="font-semibold text-stone-950">Undergraduate Research Contribution</strong> — North South University
                </div>
                <div className="text-xs text-stone-600 font-mono shrink-0">Apr 2019 – Dec 2019</div>
              </div>
              <div className="font-serif italic text-stone-800">
                ‘Rice Leaf Disease Detection using Machine Learning Techniques’
              </div>
              <div className="text-stone-700 text-xs">
                <strong>Supervisor:</strong> Dr. Sifat Momen
              </div>
              <ul className="list-disc pl-5 space-y-1 text-stone-800">
                <li>Contributed as a co-author to a machine learning study on rice leaf disease detection by implementing data preprocessing and augmentation, conducting the literature review, and contributing to the technical report.</li>
                <li>The resulting paper was published at IEEE STI 2019.</li>
              </ul>
            </div>
          </section>

          {/* PUBLICATION */}
          <section className="space-y-1.5">
            <h2 className="text-xs sm:text-sm font-bold tracking-wider text-stone-950 uppercase border-b border-stone-300 pb-1">
              Publication
            </h2>
            <div className="text-xs sm:text-sm space-y-1">
              <p className="text-stone-800 font-serif leading-relaxed">
                Ahmed, K., Shahidi, T. R., <strong className="font-bold text-stone-950">Alam, S. M. I.</strong>, and Momen, S. (2019). “Rice Leaf Disease Detection Using Machine Learning Techniques.” <em>2019 International Conference on Sustainable Technologies for Industry 4.0 (STI)</em>, IEEE, pp. 1-5.
              </p>
              <p className="text-xs text-stone-600 italic">
                Third of four authors
              </p>
            </div>
          </section>

          {/* SELECTED RESEARCH AND TECHNICAL PROJECTS */}
          <section className="space-y-2.5">
            <h2 className="text-xs sm:text-sm font-bold tracking-wider text-stone-950 uppercase border-b border-stone-300 pb-1">
              Selected Research and Technical Projects
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-stone-800">
              <li>
                <strong className="font-semibold text-stone-950">Customer Revenue Forecasting</strong> (MSc coursework, COMP 1804 Applied Machine Learning): Benchmarked classification, regression, and clustering models on 1,000 customer records; Random Forest reached 93% accuracy and R² = 0.898.{' '}
                <a href="https://github.com/syedirfanx/revenue-forecasting" target="_blank" rel="noreferrer noopener" className="text-cyan-700 hover:text-cyan-900 hover:underline">
                  (github.com/syedirfanx/revenue-forecasting)
                </a>
              </li>
              <li>
                <strong className="font-semibold text-stone-950">CelebA Face Generation using DCGAN</strong> (BSc coursework, CSE 465 Deep Learning): Implemented a custom Generator–Discriminator architecture in PyTorch and trained a DCGAN on 200,000+ CelebA images for 150 epochs to synthesize human face images.{' '}
                <a href="https://github.com/syedirfanx/face-generation" target="_blank" rel="noreferrer noopener" className="text-cyan-700 hover:text-cyan-900 hover:underline">
                  (github.com/syedirfanx/face-generation)
                </a>
              </li>
              <li>
                <strong className="font-semibold text-stone-950">AI Network Intrusion Detection</strong> (Independent): Random Forest classifier trained on the NSL-KDD dataset, with feature importance analysis to identify key traffic indicators.{' '}
                <a href="https://github.com/syedirfanx/ai-network-intrusion-detection" target="_blank" rel="noreferrer noopener" className="text-cyan-700 hover:text-cyan-900 hover:underline">
                  (github.com/syedirfanx/ai-network-intrusion-detection)
                </a>
              </li>
              <li>
                <strong className="font-semibold text-stone-950">AI Network Traffic Prediction and Resource Optimization</strong> (Independent): Applied Random Forest regression for network traffic forecasting (R² = 0.78), followed by rule-based resource allocation.{' '}
                <a href="https://github.com/syedirfanx/ai-network-traffic-optimization" target="_blank" rel="noreferrer noopener" className="text-cyan-700 hover:text-cyan-900 hover:underline">
                  (github.com/syedirfanx/ai-network-traffic-optimization)
                </a>
              </li>
            </ul>
          </section>

          {/* EXPERIENCE */}
          <section className="space-y-3">
            <h2 className="text-xs sm:text-sm font-bold tracking-wider text-stone-950 uppercase border-b border-stone-300 pb-1">
              Experience
            </h2>

            {/* Independent */}
            <div className="space-y-1 text-xs sm:text-sm">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-0.5">
                <strong className="font-semibold text-stone-950">Independent Machine Learning &amp; AI Projects</strong>
                <span className="text-xs text-stone-600 font-mono">May 2023 – Present</span>
              </div>
              <ul className="list-disc pl-5 space-y-1 text-stone-800">
                <li>Worked on applied AI/ML projects spanning generative AI, deep learning and network data analysis.</li>
                <li>
                  Developed StarPals AI, an LLM based film-casting system using Genkit for script analysis, character extraction, and actor-role compatibility scoring.{' '}
                  <span className="text-stone-600">
                    (live:{' '}
                    <a href="https://starpals-ai.vercel.app" target="_blank" rel="noreferrer noopener" className="text-cyan-700 hover:text-cyan-900 hover:underline">
                      starpals-ai.vercel.app
                    </a>
                    , github:{' '}
                    <a href="https://github.com/syedirfanx/starpals-ai" target="_blank" rel="noreferrer noopener" className="text-cyan-700 hover:text-cyan-900 hover:underline">
                      github.com/syedirfanx/starpals-ai
                    </a>
                    )
                  </span>
                </li>
                <li>
                  Designed Lifestyle OS, an AI assisted personal decision support system for organizing lifestyle, financial commitments, and long-term planning.{' '}
                  <span className="text-stone-600">
                    (live:{' '}
                    <a href="https://lifestyle-os-tan.vercel.app" target="_blank" rel="noreferrer noopener" className="text-cyan-700 hover:text-cyan-900 hover:underline">
                      lifestyle-os-tan.vercel.app
                    </a>
                    , github:{' '}
                    <a href="https://github.com/syedirfanx/lifestyle-os" target="_blank" rel="noreferrer noopener" className="text-cyan-700 hover:text-cyan-900 hover:underline">
                      github.com/syedirfanx/lifestyle-os
                    </a>
                    )
                  </span>
                </li>
                <li>Implemented a Bangla news OCR and summarization pipeline combining Tesseract OCR with LexRank extractive summarization, storing structured output to Google Drive.</li>
              </ul>
            </div>

            {/* Swift71 */}
            <div className="space-y-1 text-xs sm:text-sm pt-1">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-0.5">
                <div>
                  <strong className="font-semibold text-stone-950">Software Engineer</strong>, Swift71
                  <span className="text-stone-600 text-xs block sm:inline sm:ml-2">Dhaka, Bangladesh</span>
                </div>
                <span className="text-xs text-stone-600 font-mono shrink-0">Nov 2020 – Nov 2021</span>
              </div>
              <ul className="list-disc pl-5 space-y-1 text-stone-800">
                <li>Worked on developing e-commerce mobile app in Flutter hybrid framework.</li>
                <li>Maintained on-time delivery across cross-functional teams.</li>
              </ul>
            </div>

            {/* Codephilics */}
            <div className="space-y-1 text-xs sm:text-sm pt-1">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-0.5">
                <div>
                  <strong className="font-semibold text-stone-950">Machine Learning Engineer</strong>, Codephilics
                  <span className="text-stone-600 text-xs block sm:inline sm:ml-2">Dhaka, Bangladesh</span>
                </div>
                <span className="text-xs text-stone-600 font-mono shrink-0">Mar 2020 – Oct 2020</span>
              </div>
              <ul className="list-disc pl-5 space-y-1 text-stone-800">
                <li>Built a CNN based face mask detection system using TensorFlow/Keras and OpenCV, reaching 95% detection accuracy.</li>
                <li>Designed a Bengali National ID card OCR system using Tesseract, reaching 85% text extraction accuracy.</li>
                <li>Automated web scraping with Beautiful Soup for news aggregation project, reducing manual data collection effort.</li>
              </ul>
            </div>
          </section>

          {/* SKILLS */}
          <section className="space-y-2">
            <h2 className="text-xs sm:text-sm font-bold tracking-wider text-stone-950 uppercase border-b border-stone-300 pb-1">
              Skills
            </h2>
            <div className="space-y-1.5 text-xs sm:text-sm text-stone-800">
              <div><strong className="font-semibold text-stone-950">Programming Languages:</strong> Python</div>
              <div><strong className="font-semibold text-stone-950">Deep Learning:</strong> Convolutional Neural Networks (CNN), Generative Adversarial Networks (GAN)</div>
              <div><strong className="font-semibold text-stone-950">Natural Language Processing:</strong> Text Processing, Optical Character Recognition (OCR)</div>
              <div><strong className="font-semibold text-stone-950">Generative AI:</strong> Large Language Models (LLMs), Genkit, Prompt Engineering</div>
              <div><strong className="font-semibold text-stone-950">Machine Learning:</strong> Supervised &amp; Unsupervised Learning, Data Processing and Manipulation, Model Training, Model Optimization, Feature Engineering</div>
              <div><strong className="font-semibold text-stone-950">Libraries and Frameworks:</strong> Pandas, NumPy, Scikit-learn, TensorFlow, PyTorch</div>
              <div><strong className="font-semibold text-stone-950">Databases:</strong> MySQL, PostgreSQL, Relational Database Design</div>
              <div><strong className="font-semibold text-stone-950">Data Analysis:</strong> Tableau, Power BI, MS Excel</div>
            </div>
          </section>

          {/* LEADERSHIP / SERVICE / COLLABORATION */}
          <section className="space-y-2.5">
            <h2 className="text-xs sm:text-sm font-bold tracking-wider text-stone-950 uppercase border-b border-stone-300 pb-1">
              Leadership / Service / Collaboration
            </h2>
            <div className="space-y-2 text-xs sm:text-sm">
              <div className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-0.5">
                  <strong className="font-semibold text-stone-950">North South University Toastmasters Club (Toastmasters International)</strong>
                  <span className="text-xs text-stone-600 font-mono">2017</span>
                </div>
                <ul className="list-disc pl-5 text-stone-800">
                  <li>Developed public speaking and leadership skills as a charter member of North South University Toastmasters Club.</li>
                </ul>
              </div>

              <div className="space-y-1 pt-1">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-0.5">
                  <strong className="font-semibold text-stone-950">North South University Electrical and Computer Engineering Department</strong>
                  <span className="text-xs text-stone-600 font-mono">2017 - 2018</span>
                </div>
                <ul className="list-disc pl-5 text-stone-800">
                  <li>Coordinated departmental community event NSU ECE Iftar program through managing, planning and volunteer teams to ensure a seamless experience for students and faculty members.</li>
                </ul>
              </div>

              <div className="space-y-1 pt-1">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-0.5">
                  <strong className="font-semibold text-stone-950">North South University Problem Solvers</strong>
                  <span className="text-xs text-stone-600 font-mono">2016 - 2017</span>
                </div>
                <ul className="list-disc pl-5 text-stone-800">
                  <li>Engaged in competitive programming and algorithmic problem-solving sessions.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* REFERENCES */}
          <section className="space-y-1.5 pt-1">
            <h2 className="text-xs sm:text-sm font-bold tracking-wider text-stone-950 uppercase border-b border-stone-300 pb-1">
              References
            </h2>
            <p className="text-xs sm:text-sm text-stone-700 italic">
              Available upon request.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};
