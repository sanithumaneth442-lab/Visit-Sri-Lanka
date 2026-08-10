import React, { useState } from 'react';
import { ViewTab } from '../types';

interface HeaderProps {
  currentTab: ViewTab;
  onSelectTab: (tab: ViewTab) => void;
  onOpenSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentTab, onSelectTab, onOpenSearch }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isTransactional = currentTab === 'craft-journey';

  if (isTransactional) {
    return (
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-surface-variant shadow-sm h-20 transition-all">
        <div className="flex justify-between items-center w-full px-6 md:px-12 max-w-7xl mx-auto h-full">
          <button 
            onClick={() => onSelectTab('home')} 
            className="font-headline-md text-3xl font-bold text-[#00502d] tracking-tight hover:opacity-90 transition-opacity text-left"
          >
            CeylonDiscovery
          </button>
          
          <button
            onClick={() => onSelectTab('home')}
            className="text-[#3f4941] hover:text-[#00502d] transition-colors flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-black/5"
            aria-label="Cancel Booking"
          >
            <span className="material-symbols-outlined text-xl">close</span>
            <span className="font-label-md text-sm font-semibold hidden md:inline">Cancel Booking</span>
          </button>
        </div>
      </header>
    );
  }

  return (
    <header className="fixed top-0 w-full z-50 bg-white/75 backdrop-blur-xl shadow-[0_40px_40px_-10px_rgba(0,80,45,0.08)] transition-all">
      <nav className="flex justify-between items-center w-full px-6 md:px-12 max-w-7xl mx-auto h-20">
        {/* Brand */}
        <button 
          onClick={() => onSelectTab('home')} 
          className="font-headline-md text-2xl md:text-3xl font-bold text-[#00502d] tracking-tight hover:opacity-90 transition-opacity text-left"
        >
          CeylonDiscovery
        </button>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-8 items-center">
          <button
            onClick={() => onSelectTab('destinations')}
            className={`font-label-md text-sm font-semibold transition-colors pb-1 ${
              currentTab === 'destinations'
                ? 'text-[#00502d] border-b-2 border-[#00502d]'
                : 'text-[#3f4941] hover:text-[#00502d]'
            }`}
          >
            Destinations
          </button>
          <button
            onClick={() => onSelectTab('experiences')}
            className={`font-label-md text-sm font-semibold transition-colors pb-1 ${
              currentTab === 'experiences'
                ? 'text-[#00502d] border-b-2 border-[#00502d]'
                : 'text-[#3f4941] hover:text-[#00502d]'
            }`}
          >
            Experiences
          </button>
          <button
            onClick={() => onSelectTab('culture')}
            className={`font-label-md text-sm font-semibold transition-colors pb-1 ${
              currentTab === 'culture'
                ? 'text-[#00502d] border-b-2 border-[#00502d]'
                : 'text-[#3f4941] hover:text-[#00502d]'
            }`}
          >
            Culture
          </button>
          <button
            onClick={() => onSelectTab('about')}
            className={`font-label-md text-sm font-semibold transition-colors pb-1 ${
              currentTab === 'about'
                ? 'text-[#00502d] border-b-2 border-[#00502d]'
                : 'text-[#3f4941] hover:text-[#00502d]'
            }`}
          >
            About
          </button>
        </div>

        {/* Trailing Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenSearch}
            className="hidden lg:flex items-center bg-[#f5f3ee] rounded-full px-4 py-2 text-sm text-[#3f4941] hover:bg-[#eae8e3] transition-colors cursor-pointer group"
          >
            <span className="material-symbols-outlined text-[#3f4941] mr-2 text-lg group-hover:scale-110 transition-transform">search</span>
            <span>Search destinations...</span>
          </button>

          <button
            onClick={onOpenSearch}
            className="lg:hidden p-2 text-[#00502d] hover:bg-[#f5f3ee] rounded-full transition-colors"
            aria-label="Search"
          >
            <span className="material-symbols-outlined text-2xl">search</span>
          </button>

          <button
            onClick={() => onSelectTab('craft-journey')}
            className="bg-[#00502d] text-white font-label-md text-sm font-semibold px-5 md:px-6 py-2.5 md:py-3 rounded-full hover:opacity-90 hover:scale-105 transform transition-all shadow-sm flex items-center gap-1.5"
          >
            <span>Plan Your Trip</span>
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#3f4941] p-1.5 rounded-lg hover:bg-[#f5f3ee]"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#fbf9f4] border-b border-[#bec9be] px-6 py-6 space-y-4 animate-fadeIn shadow-lg">
          <button
            onClick={() => { onSelectTab('destinations'); setMobileMenuOpen(false); }}
            className="block w-full text-left font-label-md text-base py-2 text-[#1b1c19] hover:text-[#00502d]"
          >
            Destinations
          </button>
          <button
            onClick={() => { onSelectTab('experiences'); setMobileMenuOpen(false); }}
            className="block w-full text-left font-label-md text-base py-2 text-[#1b1c19] hover:text-[#00502d]"
          >
            Experiences
          </button>
          <button
            onClick={() => { onSelectTab('culture'); setMobileMenuOpen(false); }}
            className="block w-full text-left font-label-md text-base py-2 text-[#1b1c19] hover:text-[#00502d]"
          >
            Culture
          </button>
          <button
            onClick={() => { onSelectTab('about'); setMobileMenuOpen(false); }}
            className="block w-full text-left font-label-md text-base py-2 text-[#1b1c19] hover:text-[#00502d]"
          >
            About
          </button>
        </div>
      )}
    </header>
  );
};
