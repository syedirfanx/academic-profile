import React, { useState } from 'react';
import { BookOpen, Github, Linkedin, Mail } from 'lucide-react';
import portraitImg from '../assets/images/portrait_researcher_1791181472784.jpg';
import { PROFILE_DATA } from '../data/profileData';
import { PageId } from '../components/Header';
import { PhDGoalSection } from '../components/PhDGoalSection';
import { GoogleScholarIcon } from '../components/icons/GoogleScholarIcon';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

export const HomePage: React.FC<HomePageProps> = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="py-10 md:py-14 space-y-12">
      
      {/* Hero Overview */}
      <div className="max-w-5xl mx-auto px-6" style={{ width: '1499px', height: '468.625px' }}>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Portrait & Personal Details */}
          <div className="md:col-span-4 space-y-4 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="w-48 sm:w-56 md:w-full max-w-[240px]">
              <div className="aspect-square rounded border border-stone-300 overflow-hidden bg-stone-100 shadow-xs">
                {!imageError ? (
                  <img
                    src={portraitImg}
                    alt="Syed Irfan"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center text-stone-600">
                    <BookOpen className="w-8 h-8 text-stone-400 mb-1" />
                    <span className="font-editorial text-sm font-medium">Syed Irfan</span>
                  </div>
                )}
              </div>
            </div>

            <div className="w-full">
              <h1 className="text-xl sm:text-2xl font-editorial font-medium tracking-tight text-stone-950">
                {PROFILE_DATA.name}
              </h1>
            </div>

            {/* Academic Credentials */}
            <div className="text-xs sm:text-sm text-stone-700 border-l-2 border-stone-400 pl-3 py-1 space-y-1 text-left leading-relaxed w-full">
              <div>
                <strong className="text-stone-900 font-medium">MSc in Data Science</strong>
                <div className="text-stone-600 text-xs">University of Greenwich, London (2022–2023)</div>
              </div>
              <div>
                <strong className="text-stone-900 font-medium">BSc in Computer Science &amp; Eng.</strong>
                <div className="text-stone-600 text-xs">North South University, Dhaka (2015–2020)</div>
              </div>
            </div>

            {/* Links & Contact */}
            <div className="flex flex-wrap items-center gap-x-3.5 gap-y-2 pt-2 text-xs sm:text-sm text-stone-700 w-full text-left">
              <a
                href={PROFILE_DATA.github}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 font-medium text-stone-900 hover:text-stone-600 hover:underline transition-colors"
              >
                <Github className="w-4 h-4 text-stone-700 shrink-0" />
                <span>GitHub</span>
              </a>

              <span className="text-stone-300 select-none">·</span>

              <a
                href={PROFILE_DATA.googleScholar}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 font-medium text-stone-900 hover:text-stone-600 hover:underline transition-colors"
              >
                <GoogleScholarIcon className="w-4 h-4 text-stone-700 shrink-0" />
                <span>Google Scholar</span>
              </a>

              <span className="text-stone-300 select-none">·</span>

              <a
                href={PROFILE_DATA.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 font-medium text-stone-900 hover:text-stone-600 hover:underline transition-colors"
              >
                <Linkedin className="w-4 h-4 text-stone-700 shrink-0" />
                <span>LinkedIn</span>
              </a>

              <span className="text-stone-300 select-none">·</span>

              <a
                href={`mailto:${PROFILE_DATA.email}`}
                className="inline-flex items-center gap-1.5 font-medium text-stone-900 hover:text-stone-600 hover:underline transition-colors"
              >
                <Mail className="w-4 h-4 text-stone-700 shrink-0" />
                <span>Email</span>
              </a>
            </div>

          </div>

          {/* Right Column: Narrative Biography */}
          <div className="md:col-span-8 space-y-4 text-sm sm:text-[15px] text-stone-700 leading-relaxed font-normal pt-1">
            <h2 className="text-xl sm:text-2xl font-editorial font-medium tracking-tight text-stone-950 pb-1">
              Overview
            </h2>

            <p>
              I am a <strong className="font-semibold text-stone-950">Data Science and Machine Learning researcher</strong> with an <strong className="font-semibold text-stone-950">MSc in Data Science from the University of Greenwich, London</strong>. My research experience includes <strong className="font-semibold text-stone-950">machine learning, high-dimensional data, feature selection, and optimization</strong>, with my MSc dissertation focusing on Particle Swarm Optimization and Dispersive Flies Optimization. I also contributed to an <strong className="font-semibold text-stone-950">IEEE-published undergraduate research project on rice leaf disease detection</strong>.
            </p>

            <p>
              My academic and independent work spans <strong className="font-semibold text-stone-950">machine learning, deep learning, NLP, and generative AI</strong>, including a PyTorch-based <strong className="font-semibold text-stone-950">DCGAN for face generation</strong>, network traffic prediction, intrusion detection, Bangla OCR and summarization, and LLM-based applications. These experiences have shaped my interests in <strong className="font-semibold text-stone-950">representation learning, transfer learning, large language models, multimodal learning, and optimization</strong>.
            </p>

            <p style={{ width: '644.344px' }}>
              I am interested in pursuing doctoral research on developing intelligent systems that can learn effectively from <strong className="font-semibold text-stone-950">complex, high-dimensional, and multimodal data</strong>, with growing interests in <strong className="font-semibold text-stone-950">deep learning, representation learning, foundation models, and multimodal AI</strong>.
            </p>
          </div>

        </div>
      </div>

      {/* Embedded Research Interests Section */}
      <PhDGoalSection />

    </div>
  );
};
