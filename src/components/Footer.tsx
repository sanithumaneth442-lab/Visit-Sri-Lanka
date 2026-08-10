import React from 'react';
import { ViewType } from '../types';
import { Compass, Mail, MapPin, Phone, Instagram, Facebook, Twitter } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: ViewType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#1b1c19] text-[#e4e2dd] pt-16 pb-12 border-t border-[#3f4941]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-[#3f4941]/30">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-full bg-[#81d9a1] text-[#00502d] flex items-center justify-center font-bold">
                <Compass className="w-5 h-5" />
              </div>
              <span className="font-serif text-2xl font-semibold text-[#ffffff] tracking-tight">
                CeylonDiscovery
              </span>
            </div>
            <p className="text-sm text-[#bec9be] leading-relaxed">
              Curated luxury travel, bespoke island itineraries, and private wildlife safaris across Sri Lanka.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <a href="#instagram" className="w-9 h-9 rounded-full bg-[#3f4941]/50 flex items-center justify-center text-[#bec9be] hover:text-white hover:bg-[#006b3e] transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#facebook" className="w-9 h-9 rounded-full bg-[#3f4941]/50 flex items-center justify-center text-[#bec9be] hover:text-white hover:bg-[#006b3e] transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#twitter" className="w-9 h-9 rounded-full bg-[#3f4941]/50 flex items-center justify-center text-[#bec9be] hover:text-white hover:bg-[#006b3e] transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-serif text-lg font-semibold text-[#ffffff]">Explore Island</h4>
            <ul className="space-y-2 text-sm text-[#bec9be]">
              <li>
                <button onClick={() => onNavigate('destinations')} className="hover:text-[#81d9a1] transition-colors">
                  Breathtaking Destinations
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('experiences')} className="hover:text-[#81d9a1] transition-colors">
                  Curated Experiences
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('culture')} className="hover:text-[#81d9a1] transition-colors">
                  Culture & Heritage
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('plan')} className="hover:text-[#81d9a1] transition-colors">
                  Craft Your Custom Itinerary
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-[#81d9a1] transition-colors">
                  The Ceylon Difference
                </button>
              </li>
            </ul>
          </div>

          {/* Top Regions */}
          <div className="space-y-3">
            <h4 className="font-serif text-lg font-semibold text-[#ffffff]">Featured Regions</h4>
            <ul className="space-y-2 text-sm text-[#bec9be]">
              <li>Ella & Tea Highlands</li>
              <li>Yala National Park</li>
              <li>Galle Fort Historic Citadel</li>
              <li>Mirissa & Southern Coast</li>
              <li>Sigiriya & Cultural Triangle</li>
            </ul>
          </div>

          {/* Concierge Info */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-[#ffffff]">Island Concierge</h4>
            <div className="space-y-2.5 text-sm text-[#bec9be]">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#81d9a1] shrink-0 mt-0.5" />
                <span>Level 14, World Trade Centre, Colombo 01, Sri Lanka</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#81d9a1] shrink-0" />
                <span>+94 (11) 234 5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#81d9a1] shrink-0" />
                <span>concierge@ceylondiscovery.com</span>
              </div>
            </div>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#bec9be] space-y-4 sm:space-y-0">
          <p>© {new Date().getFullYear()} CeylonDiscovery. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#privacy" className="hover:underline">Privacy Policy</a>
            <a href="#terms" className="hover:underline">Terms of Service</a>
            <a href="#sustainability" className="hover:underline">Sustainable Tourism Pledge</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
