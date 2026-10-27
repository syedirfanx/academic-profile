import React from 'react';
import { PROFILE_DATA } from '../data/profileData';

export const TechnicalBackground: React.FC = () => {
  const tech = PROFILE_DATA.technicalBackground;

  const sections = [
    { label: "Programming", items: tech.programming.join(', ') },
    { label: "Machine Learning", items: tech.machineLearning.join(', ') },
    { label: "Deep Learning", items: tech.deepLearning.join(', ') },
    { label: "NLP / Generative AI", items: tech.nlpGenAI.join(', ') },
    { label: "Data & Tools", items: tech.dataAndTools.join(', ') },
  ];

  return (
    <section id="background" className="py-8 md:py-10 border-b border-stone-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
        
        <div>
          <h2 className="text-xl sm:text-2xl font-editorial font-medium tracking-tight text-stone-950">
            Technical Background
          </h2>
        </div>

        <div className="space-y-3 max-w-3xl text-sm">
          {sections.map(s => (
            <div key={s.label} className="grid grid-cols-1 sm:grid-cols-4 py-2 border-b border-stone-100 gap-1">
              <span className="font-semibold text-stone-900">{s.label}</span>
              <span className="sm:col-span-3 text-stone-700 leading-relaxed">{s.items}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
