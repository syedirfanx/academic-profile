import React from 'react';
import { Menu, X } from 'lucide-react';

export type PageId = 'home' | 'research' | 'background' | 'beyond';

interface HeaderProps {
  activePage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Header: React.FC<HeaderProps> = ({ activePage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Overview' },
    { id: 'research', label: 'Research' },
    { id: 'background', label: 'Background' },
    { id: 'beyond', label: 'Beyond Academics' },
  ];

  const handleNav = (id: PageId) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FCFBF8]/95 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Wordmark brand */}
        <button 
          onClick={() => handleNav('home')}
          className="text-2xl sm:text-[26px] font-editorial font-bold tracking-tight text-stone-950 hover:text-stone-700 transition-colors whitespace-nowrap text-left"
        >
          Syed Irfan
        </button>

        {/* Desktop Page Navigation Tabs */}
        <nav className="hidden lg:flex items-center gap-6 text-[15px] text-stone-600">
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`transition-colors whitespace-nowrap pb-1 border-b-2 ${
                  isActive
                    ? 'text-stone-950 font-semibold border-stone-900'
                    : 'text-stone-600 hover:text-stone-950 border-transparent hover:border-stone-300'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Mobile toggle */}
        <div className="flex lg:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-stone-700 hover:text-stone-900 rounded"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-stone-200 bg-[#FCFBF8] px-6 py-4 space-y-2">
          <div className="flex flex-col gap-1 text-sm text-stone-700">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`text-left py-2 px-2 rounded ${
                  activePage === item.id ? 'bg-stone-100 font-semibold text-stone-950' : 'hover:bg-stone-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
