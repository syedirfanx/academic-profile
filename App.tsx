/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header, PageId } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ResearchPage } from './pages/ResearchPage';
import { BackgroundPage } from './pages/BackgroundPage';
import { BeyondPage } from './pages/BeyondPage';

export default function App() {
  const [activePage, setActivePage] = useState<PageId>('home');

  // Strip any existing hash from the URL on load
  useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  }, []);

  const navigateTo = (page: PageId) => {
    setActivePage(page);
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FCFBF8] text-stone-900 flex flex-col font-sans selection:bg-stone-900 selection:text-white">
      {/* Persistent Clean Header */}
      <Header
        activePage={activePage}
        onNavigate={navigateTo}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {activePage === 'home' && (
          <HomePage
            onNavigate={navigateTo}
          />
        )}

        {activePage === 'research' && (
          <ResearchPage />
        )}

        {activePage === 'background' && (
          <BackgroundPage />
        )}

        {activePage === 'beyond' && (
          <BeyondPage />
        )}
      </main>

      {/* Persistent Clean Footer */}
      <Footer
        onNavigate={navigateTo}
      />
    </div>
  );
}
