import React from 'react';

export const AcademicBackground: React.FC = () => {
  return (
    <section className="py-8 md:py-10 border-b border-stone-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
        
        <div>
          <h2 className="text-xl sm:text-2xl font-editorial font-medium tracking-tight text-stone-950">
            Academic Background
          </h2>
        </div>

        <div className="space-y-5 max-w-3xl">
          <div className="border-l-2 border-stone-800 pl-4 py-1 space-y-1 text-sm">
            <div className="flex flex-wrap items-baseline justify-between gap-1">
              <h3 className="font-editorial font-semibold text-stone-950 text-base sm:text-lg">
                MSc in Data Science
              </h3>
              <span className="text-xs text-stone-500">Jan 2022 – Apr 2023</span>
            </div>
            <div className="text-stone-700">
              University of Greenwich, London
            </div>
            <p className="text-xs sm:text-sm text-stone-600 pt-0.5 leading-relaxed">
              <strong className="text-stone-900">Dissertation:</strong> "Feature Selection using Swarm Intelligence and Dispersive Flies Optimization" (Supervisor: Dr. Mohammed Majid Al-Rifaie).
            </p>
          </div>

          <div className="border-l-2 border-stone-400 pl-4 py-1 space-y-1 text-sm">
            <div className="flex flex-wrap items-baseline justify-between gap-1">
              <h3 className="font-editorial font-semibold text-stone-950 text-base sm:text-lg">
                BSc in Computer Science and Engineering
              </h3>
              <span className="text-xs text-stone-500">Jan 2015 – Apr 2020</span>
            </div>
            <div className="text-stone-700">
              North South University, Dhaka
            </div>
            <p className="text-xs sm:text-sm text-stone-600 pt-0.5 leading-relaxed">
              <strong className="text-stone-900">Undergraduate Research Publication:</strong> "Rice Leaf Disease Detection using Machine Learning Techniques" (Supervisor: Dr. Sifat Momen).
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
