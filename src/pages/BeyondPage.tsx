import React from 'react';
import { BeyondAcademics } from '../components/BeyondAcademics';

export const BeyondPage: React.FC = () => {
  return (
    <div className="py-2 space-y-4">
      {/* Outside the Academic Page */}
      <BeyondAcademics />
    </div>
  );
};
