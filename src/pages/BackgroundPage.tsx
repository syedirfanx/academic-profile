import React from 'react';
import { AcademicBackground } from '../components/AcademicBackground';
import { TechnicalBackground } from '../components/TechnicalBackground';
import { ExperienceSection } from '../components/ExperienceSection';

export const BackgroundPage: React.FC = () => {
  return (
    <div className="py-2 space-y-4">
      {/* Academic Background */}
      <AcademicBackground />

      {/* Technical Proficiencies */}
      <TechnicalBackground />

      {/* Professional Experience */}
      <ExperienceSection />
    </div>
  );
};
