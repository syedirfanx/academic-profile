import React from 'react';
import { PageId } from './Header';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (id: PageId) => {
    onNavigate(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-10 text-xs text-stone-500 border-t border-stone-200 mt-12">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="font-semibold text-stone-900">Syed Irfan</span> · Dhaka, Bangladesh
        </div>

        <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-stone-600">
          <button
            onClick={() => handleNav('research')}
            className="hover:text-stone-950 transition-colors"
          >
            Research
          </button>
          <button
            onClick={() => handleNav('background')}
            className="hover:text-stone-950 transition-colors"
          >
            Background
          </button>
          <button
            onClick={() => handleNav('beyond')}
            className="hover:text-stone-950 transition-colors"
          >
            Beyond
          </button>
        </div>
      </div>
    </footer>
  );
};
