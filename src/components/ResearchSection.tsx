import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { PROFILE_DATA } from '../data/profileData';

export const ResearchSection: React.FC = () => {
  const undergrad = PROFILE_DATA.undergradResearch;

  return (
    <section id="research" className="py-8 md:py-10 border-b border-stone-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-10">
        
        {/* RESEARCH EXPERIENCE */}
        <div className="space-y-6">
          <h2 className="text-xl sm:text-2xl font-editorial font-medium tracking-tight text-stone-950">
            Research Experience
          </h2>

          {/* MSc Dissertation */}
          <div className="border-t border-stone-200 pt-5 space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <span className="font-semibold text-stone-900 text-base">
                MSc Dissertation – University of Greenwich
              </span>
              <span className="text-xs sm:text-sm text-stone-600">
                2023
              </span>
            </div>

            <div className="text-base font-editorial font-medium text-stone-950 flex flex-wrap items-baseline gap-1.5">
              <span>‘Feature Selection using Swarm Intelligence and Dispersive Flies Optimization’</span>
              <a
                href="https://github.com/syedirfanx/swarm-intelligence"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1 text-xs sm:text-sm font-normal text-stone-600 hover:text-stone-900 hover:underline"
              >
                (<Github className="w-3 h-3 inline" /> github.com/syedirfanx/swarm-intelligence <ExternalLink className="w-2.5 h-2.5 inline text-stone-400" />)
              </a>
            </div>

            <div className="text-xs sm:text-sm text-stone-600">
              <strong className="text-stone-800 font-medium">Supervisor:</strong> Dr. Mohammed Majid Al-Rifaie
            </div>

            <ul className="space-y-1.5 text-sm text-stone-700 pt-1 list-disc pl-5 leading-relaxed">
              <li>
                Applied Particle Swarm Optimization and Dispersive Flies Optimization on high-dimensional dataset up to 2,400 features.
              </li>
              <li>
                Reduced dimensionality by up to 86% while achieving up to a 1.98% improvement in classification accuracy.
              </li>
              <li>
                Worked on the full pipeline under supervision, including data preparation and processing, implementation of both swarm intelligence techniques and evaluation of classifier performance.
              </li>
            </ul>
          </div>

          {/* Undergraduate Research Contribution */}
          <div className="border-t border-stone-200 pt-5 space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <span className="font-semibold text-stone-900 text-base">
                Undergraduate Research Contribution – North South University
              </span>
              <span className="text-xs sm:text-sm text-stone-600">
                2019
              </span>
            </div>

            <div className="text-base font-editorial font-medium text-stone-950">
              ‘Rice Leaf Disease Detection using Machine Learning Techniques’
            </div>

            <div className="text-xs sm:text-sm text-stone-600">
              <strong className="text-stone-800 font-medium">Supervisor:</strong> Dr. Sifat Momen
            </div>

            <ul className="space-y-1.5 text-sm text-stone-700 pt-1 list-disc pl-5 leading-relaxed">
              <li>
                Contributed as a co-author to a machine learning study on rice leaf disease detection by implementing data preprocessing and augmentation, conducting the literature review, and contributing to the technical report.
              </li>
              <li>
                The resulting paper was published at IEEE STI 2019.
              </li>
            </ul>
          </div>
        </div>

        {/* PUBLICATION */}
        <div className="border-t-2 border-stone-800 pt-6 space-y-3">
          <h2 className="text-lg sm:text-xl font-editorial font-medium tracking-tight text-stone-950">
            Publication
          </h2>

          <div className="space-y-2">
            <p className="text-sm sm:text-[15px] text-stone-800 font-serif leading-relaxed">
              Ahmed, K., Shahidi, T. R., <strong className="font-bold text-stone-950">Alam, S. M. I.</strong>, and Momen, S. (2019). “Rice Leaf Disease Detection Using Machine Learning Techniques.” <em>2019 International Conference on Sustainable Technologies for Industry 4.0 (STI)</em>, IEEE, pp. 1-5.
            </p>

            <div className="flex items-center gap-3 text-xs sm:text-sm text-stone-600 pt-0.5">
              <a
                href={undergrad.scholarUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1 font-medium text-stone-900 hover:underline"
              >
                <span>Google Scholar</span>
                <ExternalLink className="w-3 h-3 text-stone-400" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
