import React from 'react';
import { ViewTab } from '../types';

interface FooterProps {
  onSelectTab: (tab: ViewTab) => void;
  compact?: boolean;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab, compact = false }) => {
  if (compact) {
    return (
      <footer className="bg-[#ffffff] border-t border-[#bec9be] w-full py-8 mt-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-6 md:px-12 max-w-7xl mx-auto text-center md:text-left">
          <div className="col-span-1 md:col-span-2">
            <button 
              onClick={() => onSelectTab('home')} 
              className="font-headline-sm text-2xl text-[#00502d] font-bold mb-1 hover:opacity-80"
            >
              CeylonDiscovery
            </button>
            <p className="font-body-md text-sm text-[#3f4941]">© 2024 Visit Sri Lanka. Serenity in every step.</p>
          </div>
          <div className="col-span-1 md:col-span-2 flex justify-center md:justify-end gap-6 items-center">
            <button onClick={() => onSelectTab('about')} className="font-label-md text-sm text-[#3f4941] hover:text-[#00502d] transition-colors">
              Privacy Policy
            </button>
            <button onClick={() => onSelectTab('about')} className="font-label-md text-sm text-[#3f4941] hover:text-[#00502d] transition-colors">
              Contact Support
            </button>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-[#ffffff] border-t border-[#bec9be] w-full pt-16 pb-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-6 md:px-12 max-w-7xl mx-auto mb-12">
        {/* Brand & Description */}
        <div className="col-span-1 md:col-span-1 space-y-3">
          <button 
            onClick={() => onSelectTab('home')}
            className="font-headline-sm text-2xl font-bold text-[#00502d] hover:opacity-80 text-left block"
          >
            CeylonDiscovery
          </button>
          <p className="font-body-md text-sm text-[#3f4941] leading-relaxed">
            Curating exceptional journeys across the teardrop isle. Discover beauty, history, and unparalleled hospitality.
          </p>
        </div>

        {/* Explore Links */}
        <div>
          <h4 className="font-label-md text-xs text-[#1b1c19] uppercase tracking-wider font-semibold mb-4">Explore</h4>
          <ul className="space-y-2.5">
            <li>
              <button onClick={() => onSelectTab('destinations')} className="font-label-md text-sm text-[#3f4941] hover:text-[#1961a1] hover:underline transition-all">
                Destinations
              </button>
            </li>
            <li>
              <button onClick={() => onSelectTab('experiences')} className="font-label-md text-sm text-[#3f4941] hover:text-[#1961a1] hover:underline transition-all">
                Experiences
              </button>
            </li>
            <li>
              <button onClick={() => onSelectTab('culture')} className="font-label-md text-sm text-[#3f4941] hover:text-[#1961a1] hover:underline transition-all">
                Culture
              </button>
            </li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h4 className="font-label-md text-xs text-[#1b1c19] uppercase tracking-wider font-semibold mb-4">Support</h4>
          <ul className="space-y-2.5">
            <li>
              <button onClick={() => onSelectTab('about')} className="font-label-md text-sm text-[#3f4941] hover:text-[#1961a1] hover:underline transition-all">
                Privacy Policy
              </button>
            </li>
            <li>
              <button onClick={() => onSelectTab('about')} className="font-label-md text-sm text-[#3f4941] hover:text-[#1961a1] hover:underline transition-all">
                Terms of Service
              </button>
            </li>
            <li>
              <button onClick={() => onSelectTab('about')} className="font-label-md text-sm text-[#3f4941] hover:text-[#1961a1] hover:underline transition-all">
                Contact Us
              </button>
            </li>
            <li>
              <button onClick={() => onSelectTab('about')} className="font-label-md text-sm text-[#3f4941] hover:text-[#1961a1] hover:underline transition-all">
                Sitemap
              </button>
            </li>
          </ul>
        </div>

        {/* Connect Links */}
        <div>
          <h4 className="font-label-md text-xs text-[#1b1c19] uppercase tracking-wider font-semibold mb-4">Connect</h4>
          <div className="flex space-x-3">
            <a href="#" className="w-10 h-10 rounded-full bg-[#f0eee9] flex items-center justify-center text-[#3f4941] hover:text-[#00502d] hover:scale-110 transition-all" aria-label="Website">
              <span className="material-symbols-outlined text-xl">public</span>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-[#f0eee9] flex items-center justify-center text-[#3f4941] hover:text-[#00502d] hover:scale-110 transition-all" aria-label="Photos">
              <span className="material-symbols-outlined text-xl">photo_camera</span>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-[#f0eee9] flex items-center justify-center text-[#3f4941] hover:text-[#00502d] hover:scale-110 transition-all" aria-label="Mail">
              <span className="material-symbols-outlined text-xl">mail</span>
            </a>
          </div>
        </div>
      </div>

      <div className="text-center font-body-md text-sm text-[#3f4941] pt-6 border-t border-[#f0eee9] px-6">
        © 2024 Visit Sri Lanka. Serenity in every step.
      </div>
    </footer>
  );
};
