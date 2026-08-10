import React, { useState } from 'react';
import { ViewType } from '../types';
import { Compass, Search, Sparkles, Menu, X, Calendar } from 'lucide-react';

interface NavbarProps {
  activeView: ViewType;
  onNavigate: (view: ViewType) => void;
  onOpenSearch: () => void;
  onOpenAI: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeView,
  onNavigate,
  onOpenSearch,
  onOpenAI
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: ViewType; label: string }[] = [
    { id: 'destinations', label: 'Destinations' },
    { id: 'experiences', label: 'Experiences' },
    { id: 'culture', label: 'Culture' },
    { id: 'about', label: 'About' }
  ];

  const handleLinkClick = (view: ViewType) => {
    onNavigate(view);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#fbf9f4]/90 backdrop-blur-md border-b border-[#e4e2dd] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <button 
            onClick={() => handleLinkClick('home')}
            className="flex items-center space-x-3 text-left focus:outline-none group"
          >
            <div className="w-10 h-10 rounded-full bg-[#00502d] text-[#ffffff] flex items-center justify-center shadow-sm group-hover:bg-[#006b3e] transition-colors">
              <Compass className="w-5 h-5 transition-transform group-hover:rotate-45 duration-300" />
            </div>
            <div>
              <span className="font-serif text-2xl font-semibold tracking-tight text-[#00502d] block leading-none">
                CeylonDiscovery
              </span>
              <span className="text-[10px] tracking-widest uppercase text-[#6f7a70] font-sans font-medium block mt-1">
                Visit Sri Lanka
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = activeView === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`relative text-sm font-medium tracking-wide transition-colors py-2 ${
                    isActive
                      ? 'text-[#00502d] font-semibold'
                      : 'text-[#3f4941] hover:text-[#00502d]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00502d] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Header Controls */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Search Button */}
            <button
              onClick={onOpenSearch}
              className="flex items-center space-x-2 px-3 py-2 text-xs font-medium text-[#3f4941] bg-[#f0eee9] hover:bg-[#eae8e3] rounded-full transition-colors border border-[#e4e2dd]"
              title="Search destinations or experiences"
            >
              <Search className="w-3.5 h-3.5 text-[#6f7a70]" />
              <span>Search island...</span>
            </button>

            {/* AI Travel Concierge Trigger */}
            <button
              onClick={onOpenAI}
              className="flex items-center space-x-1.5 px-3 py-2 text-xs font-semibold text-[#733200] bg-[#ffdbc9]/60 hover:bg-[#ffdbc9] border border-[#ffb68d]/50 rounded-full transition-colors"
              title="Ask Ceylon AI Concierge"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#984400] animate-pulse" />
              <span>Ask AI Concierge</span>
            </button>

            {/* Plan Your Trip CTA */}
            <button
              onClick={() => handleLinkClick('plan')}
              className={`flex items-center space-x-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-sm ${
                activeView === 'plan'
                  ? 'bg-[#733200] text-[#ffffff] ring-2 ring-[#733200]/30'
                  : 'bg-[#006b3e] text-[#ffffff] hover:bg-[#00502d] hover:shadow'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>Plan Your Trip</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={onOpenAI}
              className="p-2 text-[#733200] bg-[#ffdbc9]/60 rounded-full"
            >
              <Sparkles className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#3f4941] hover:text-[#00502d] rounded-lg focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#fbf9f4] border-b border-[#e4e2dd] px-4 pt-2 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-2 pt-2">
            <button
              onClick={() => handleLinkClick('home')}
              className={`text-left px-4 py-2.5 rounded-lg text-sm font-medium ${
                activeView === 'home' ? 'bg-[#f0eee9] text-[#00502d] font-semibold' : 'text-[#3f4941]'
              }`}
            >
              Home
            </button>
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`text-left px-4 py-2.5 rounded-lg text-sm font-medium ${
                  activeView === link.id ? 'bg-[#f0eee9] text-[#00502d] font-semibold' : 'text-[#3f4941]'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-[#e4e2dd] flex flex-col space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSearch();
              }}
              className="flex items-center justify-center space-x-2 w-full py-2.5 bg-[#f0eee9] rounded-xl text-sm font-medium text-[#3f4941]"
            >
              <Search className="w-4 h-4 text-[#6f7a70]" />
              <span>Search Destinations</span>
            </button>
            <button
              onClick={() => handleLinkClick('plan')}
              className="flex items-center justify-center space-x-2 w-full py-3 bg-[#006b3e] text-white font-semibold rounded-xl text-sm shadow-sm"
            >
              <Calendar className="w-4 h-4" />
              <span>Plan Your Trip</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
