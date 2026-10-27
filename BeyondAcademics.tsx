import React from 'react';
import { PROFILE_DATA } from '../data/profileData';

export const BeyondAcademics: React.FC = () => {
  return (
    <section id="outside-academics" className="py-8 md:py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-7">
        
        <div>
          <h2 className="text-xl sm:text-2xl font-editorial font-medium tracking-tight text-stone-950">
            Outside the Academic Page
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROFILE_DATA.outsideAcademics.map((item) => (
            <div key={item.title} className="border-t-2 border-stone-800 pt-2.5 space-y-1.5">
              <div className="flex items-center justify-between text-xs text-stone-500">
                <span className="font-semibold text-stone-900">{item.role}</span>
                <span>{item.year}</span>
              </div>
              <h3 className="font-editorial font-semibold text-stone-950 text-base">
                {item.title}
              </h3>
              <p className="text-sm text-stone-700 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
