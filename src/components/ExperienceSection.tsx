import React from 'react';
import { PROFILE_DATA } from '../data/profileData';

export const ExperienceSection: React.FC = () => {
  return (
    <section className="py-8 md:py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
        
        <div>
          <h2 className="text-xl sm:text-2xl font-editorial font-medium tracking-tight text-stone-950">
            Experience
          </h2>
        </div>

        <div className="space-y-5 max-w-3xl">
          {PROFILE_DATA.experience.map((exp) => (
            <div key={exp.role} className="border-l-2 border-stone-300 pl-4 py-1 space-y-1 text-sm">
              <div className="flex flex-wrap items-baseline justify-between gap-1">
                <h3 className="font-editorial font-semibold text-stone-950 text-base sm:text-lg">
                  {exp.role}
                  {exp.organization && (
                    <span className="font-sans font-normal text-stone-700 text-sm">
                      {" — "}{exp.organization}
                    </span>
                  )}
                </h3>
                <span className="text-xs text-stone-500">{exp.period}</span>
              </div>
              <p className="text-sm text-stone-700 leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
