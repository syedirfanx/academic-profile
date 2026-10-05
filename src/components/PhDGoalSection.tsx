import React from 'react';
import { PROFILE_DATA } from '../data/profileData';

export const PhDGoalSection: React.FC = () => {
  return (
    <section id="research-interests" className="py-6 sm:py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
        
        <div>
          <h2 className="text-xl sm:text-2xl font-editorial font-medium tracking-tight text-stone-950">
            Research Interests
          </h2>
        </div>

        <div className="space-y-6 text-sm text-stone-700 leading-relaxed max-w-4xl">
          <p className="text-sm sm:text-[15px]">
            My research interests span <strong className="font-semibold text-stone-950">machine learning, deep learning, representation learning, large language models, multimodal AI, and optimization</strong>, with a focus on learning from complex and high-dimensional data.
          </p>

          {/* Research Themes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 pt-1">
            {PROFILE_DATA.researchThemes.map((theme) => (
              <div 
                key={theme.title}
                className="border-t-2 border-stone-800 pt-2.5 space-y-1.5"
              >
                <h3 className="text-base font-editorial font-semibold text-stone-900">
                  {theme.title}
                </h3>

                <div className="text-sm text-stone-700 font-normal leading-relaxed">
                  {theme.topics.join(' · ')}
                </div>
              </div>
            ))}
          </div>

          <p className="text-sm sm:text-[15px]">
            I am particularly interested in developing <strong className="font-semibold text-stone-950">robust, transferable, and efficient learning systems</strong> and exploring how representations, foundation models, and multimodal information can be effectively combined.
          </p>
        </div>

      </div>
    </section>
  );
};
