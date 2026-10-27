import React from 'react';
import { ResearchSection } from '../components/ResearchSection';
import { SelectedProjects } from '../components/SelectedProjects';

export const ResearchPage: React.FC = () => {
  return (
    <div className="py-2 space-y-4">
      {/* Research Experience & Publication */}
      <ResearchSection />

      {/* Selected Projects */}
      <SelectedProjects />
    </div>
  );
};
