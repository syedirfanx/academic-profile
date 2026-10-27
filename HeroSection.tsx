import React, { useState } from 'react';
import { 
  ArrowDown, 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  Globe, 
  ExternalLink,
  BookOpen,
  Check
} from 'lucide-react';
import portraitImg from '../assets/images/portrait_researcher_1791181472784.jpg';
import { PROFILE_DATA } from '../data/profileData';

export const HeroSection: React.FC = () => {
  const [imageError, setImageError] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE_DATA.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section className="pt-12 pb-14 md:py-20 border-b border-stone-200">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          
          {/* Main Info Column */}
          <div className="md:col-span-8 space-y-6">
            
            {/* Identity */}
            <div className="space-y-2">
              <div className="text-sm font-medium text-stone-600">
                {PROFILE_DATA.name}
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-editorial font-medium tracking-tight text-stone-950 leading-[1.15]">
                {PROFILE_DATA.tagline}
              </h1>
            </div>

            {/* Concise Mission / Bio */}
            <p className="text-base sm:text-lg text-stone-700 leading-relaxed max-w-2xl font-normal">
              {PROFILE_DATA.heroDescription}
            </p>

            {/* Academic Line */}
            <div className="text-sm text-stone-600 border-l-2 border-stone-400 pl-3 py-1 space-y-1">
              <div>
                <strong className="text-stone-900 font-medium">MSc in Data Science</strong> (Merit) — University of Greenwich, London (2022–2023)
              </div>
              <div>
                <strong className="text-stone-900 font-medium">BSc in Computer Science and Engineering</strong> — North South University, Dhaka (2015–2020)
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#research"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-white bg-stone-900 hover:bg-stone-800 rounded transition-colors"
              >
                <span>Research</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-stone-800 bg-white hover:bg-stone-100 border border-stone-300 rounded transition-colors"
              >
                <span>Projects</span>
              </a>

              <a
                href={PROFILE_DATA.github}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-stone-800 bg-white hover:bg-stone-100 border border-stone-300 rounded transition-colors"
              >
                <Github className="w-3.5 h-3.5 text-stone-700" />
                <span>GitHub</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-stone-800 bg-white hover:bg-stone-100 border border-stone-300 rounded transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-stone-700" />
                <span>Contact</span>
              </a>
            </div>

            {/* Unboxed Metadata Line */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-stone-600 pt-2 border-t border-stone-200">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-stone-400" />
                {PROFILE_DATA.location}
              </span>

              <span aria-hidden="true" className="text-stone-300">·</span>

              <button 
                onClick={handleCopyEmail}
                className="hover:text-stone-950 transition-colors inline-flex items-center gap-1 cursor-pointer font-mono"
                title="Click to copy email"
              >
                <span>{PROFILE_DATA.email}</span>
                {copiedEmail ? (
                  <span className="text-emerald-700 font-sans font-medium flex items-center gap-0.5">
                    <Check className="w-3 h-3" /> Copied
                  </span>
                ) : (
                  <span className="text-stone-400 text-[11px] font-sans">(copy)</span>
                )}
              </button>

              <span aria-hidden="true" className="text-stone-300">·</span>

              <a 
                href={PROFILE_DATA.linkedin} 
                target="_blank" 
                rel="noreferrer noopener"
                className="hover:text-stone-950 transition-colors inline-flex items-center gap-1"
              >
                <span>LinkedIn</span>
                <ExternalLink className="w-2.5 h-2.5 text-stone-400" />
              </a>

              <span aria-hidden="true" className="text-stone-300">·</span>

              <a 
                href={PROFILE_DATA.personalDomain} 
                target="_blank" 
                rel="noreferrer noopener"
                className="hover:text-stone-950 transition-colors inline-flex items-center gap-1"
              >
                <span>syedirfan.co.uk</span>
                <ExternalLink className="w-2.5 h-2.5 text-stone-400" />
              </a>
            </div>

          </div>

          {/* Academic Portrait */}
          <div className="md:col-span-4 flex justify-center md:justify-end">
            <div className="w-48 sm:w-56 md:w-full max-w-[240px]">
              <div className="aspect-square rounded border border-stone-300 overflow-hidden bg-stone-100">
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
          </div>

        </div>
      </div>
    </section>
  );
};
