import React, { useState } from 'react';
import { BookOpen, Github, Linkedin, Mail, FileText } from 'lucide-react';
import portraitImg from '../assets/images/portrait_researcher_1791181472784.jpg';
import { PROFILE_DATA } from '../data/profileData';
import { PageId } from '../components/Header';
import { PhDGoalSection } from '../components/PhDGoalSection';
import { GoogleScholarIcon } from '../components/icons/GoogleScholarIcon';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenCV?: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenCV }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="py-10 md:py-14 space-y-12">
      
      {/* Hero Overview */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Portrait & Personal Details */}
          <div className="md:col-span-4 space-y-4 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="w-48 sm:w-56 md:w-full max-w-[240px]">
              <div className="aspect-square rounded-sm border border-stone-300/80 overflow-hidden bg-stone-100 shadow-md shadow-stone-800/15">
                {!imageError ? (
                  <img
                    src={portraitImg}
                    alt="Syed Irfan"
                    className="w-full h-full object-cover scale-[1.15]"
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
            <div className="text-xs sm:text-sm text-stone-900 border-l-2 border-stone-500 pl-3 py-1 space-y-1 text-left leading-relaxed w-full">
              <div>
                <strong className="text-stone-950 font-semibold">MSc in Data Science</strong>
                <div className="text-stone-800 text-xs font-normal">University of Greenwich, London</div>
              </div>
              <div>
                <strong className="text-stone-950 font-semibold">BSc in Computer Science &amp; Eng.</strong>
                <div className="text-stone-800 text-xs font-normal">North South University, Dhaka</div>
              </div>
            </div>

            {/* Links & Contact */}
            <div className="flex flex-wrap items-center gap-x-3.5 gap-y-2 pt-2 text-xs sm:text-sm text-stone-900 w-full text-left">
              <a
                href={PROFILE_DATA.github}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 font-medium text-stone-950 hover:text-stone-700 hover:underline transition-colors"
              >
                <Github className="w-4 h-4 text-stone-900 shrink-0" />
                <span>GitHub</span>
              </a>

              <span className="text-stone-400 select-none">·</span>

              <a
                href={PROFILE_DATA.googleScholar}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 font-medium text-stone-950 hover:text-stone-700 hover:underline transition-colors"
              >
                <GoogleScholarIcon className="w-4 h-4 text-stone-900 shrink-0" />
                <span>Google Scholar</span>
              </a>

              <span className="text-stone-400 select-none">·</span>

              <a
                href={PROFILE_DATA.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 font-medium text-stone-950 hover:text-stone-700 hover:underline transition-colors"
              >
                <Linkedin className="w-4 h-4 text-stone-900 shrink-0" />
                <span>LinkedIn</span>
              </a>

              <span className="text-stone-400 select-none">·</span>

              <a
                href={`mailto:${PROFILE_DATA.email}`}
                className="inline-flex items-center gap-1.5 font-medium text-stone-950 hover:text-stone-700 hover:underline transition-colors"
              >
                <Mail className="w-4 h-4 text-stone-900 shrink-0" />
                <span>Email</span>
              </a>

              {onOpenCV && (
                <>
                  <span className="text-stone-400 select-none">·</span>
                  <button
                    onClick={onOpenCV}
                    className="inline-flex items-center gap-1.5 font-semibold text-cyan-800 hover:text-cyan-950 hover:underline transition-colors cursor-pointer"
                    title="View Curriculum Vitae"
                  >
                    <FileText className="w-4 h-4 text-cyan-800 shrink-0" />
                    <span>CV</span>
                  </button>
                </>
              )}
            </div>

          </div>

          {/* Right Column: Narrative Biography */}
          <div className="md:col-span-8 space-y-4 text-[15px] sm:text-[16px] text-stone-900 leading-relaxed font-normal pt-1">
            <h2 className="text-xl sm:text-2xl font-editorial font-medium tracking-tight text-stone-950 pb-1">
              Overview
            </h2>

            <p>
              I am a Machine Learning researcher with an MSc in Data Science from the{' '}
              <a
                href="https://www.gre.ac.uk/"
                target="_blank"
                rel="noreferrer noopener"
                className="text-cyan-700 hover:text-cyan-900 hover:underline font-medium"
              >
                University of Greenwich, London
              </a>
              . My MSc dissertation focused on Swarm Intelligence and Dispersive Flies Optimization, supervised by{' '}
              <a
                href="https://www.gre.ac.uk/people/rep/faculty-of-engineering-and-science/dr-mohammad-majid-al-rifaie"
                target="_blank"
                rel="noreferrer noopener"
                className="text-cyan-700 hover:text-cyan-900 hover:underline font-medium"
              >
                Dr. Mohammad Majid al-Rifaie
              </a>
              . While pursuing my bachelor's degree at{' '}
              <a
                href="https://www.northsouth.edu/"
                target="_blank"
                rel="noreferrer noopener"
                className="text-cyan-700 hover:text-cyan-900 hover:underline font-medium"
              >
                North South University
              </a>
              , I also contributed to an IEEE-published undergraduate research project on rice leaf disease detection, supervised by{' '}
              <a
                href="https://ece.northsouth.edu/people/dr-sifat-momen/"
                target="_blank"
                rel="noreferrer noopener"
                className="text-cyan-700 hover:text-cyan-900 hover:underline font-medium"
              >
                Dr. Sifat Momen
              </a>
              .
            </p>

            <p>
              My work spans machine learning, deep learning and generative AI, including image generation using GAN, network traffic prediction, network intrusion detection and LLM based applications. These experiences have shaped my interests in representation learning, transfer learning, large language models, multimodal learning and optimization.
            </p>

            <p>
              <strong className="font-semibold text-stone-950">Current Interests:</strong> I am interested in pursuing doctoral research on developing intelligent systems that can learn effectively from complex, high-dimensional, and multimodal data, with growing interests in deep learning, representation learning, foundation models, and multimodal AI.
            </p>
          </div>

        </div>
      </div>

      {/* Embedded Research Interests Section */}
      <PhDGoalSection />

    </div>
  );
};
