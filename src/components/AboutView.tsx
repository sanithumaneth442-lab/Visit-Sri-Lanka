import React from 'react';
import { ViewType } from '../types';
import { Compass, ShieldCheck, Heart, MapPin, Mail, Phone, Award, Users } from 'lucide-react';

interface AboutViewProps {
  onNavigate: (view: ViewType) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#006b3e]/10 text-[#006b3e] text-xs font-semibold tracking-wider uppercase">
          <Compass className="w-3.5 h-3.5" />
          <span>Our Story</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-[#1b1c19] tracking-tight">
          About CeylonDiscovery
        </h1>
        <p className="text-base sm:text-lg text-[#3f4941] leading-relaxed">
          Founded in Colombo by native travel architects, CeylonDiscovery is Sri Lanka’s premier bespoke travel designer. We connect discerning global travelers with authentic, unforgettable island moments.
        </p>
      </div>

      {/* Brand Values Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-3xl border border-[#e4e2dd] space-y-4 shadow-sm">
          <div className="w-12 h-12 rounded-2xl bg-[#006b3e]/10 text-[#006b3e] flex items-center justify-center">
            <Award className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-xl font-semibold text-[#1b1c19]">Unrivaled Quality</h3>
          <p className="text-sm text-[#3f4941] leading-relaxed">
            Every hotel, boutique bungalow, and private driver in our portfolio is personally vetted by our Colombo luxury team.
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-[#e4e2dd] space-y-4 shadow-sm">
          <div className="w-12 h-12 rounded-2xl bg-[#733200]/10 text-[#733200] flex items-center justify-center">
            <Heart className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-xl font-semibold text-[#1b1c19]">Ethical Wildlife Pledge</h3>
          <p className="text-sm text-[#3f4941] leading-relaxed">
            We strictly enforce ethical wildlife encounters — supporting wild elephant transit homes and wild park conservation.
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-[#e4e2dd] space-y-4 shadow-sm">
          <div className="w-12 h-12 rounded-2xl bg-[#1961a1]/10 text-[#1961a1] flex items-center justify-center">
            <Users className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-xl font-semibold text-[#1b1c19]">100% Local Empowerment</h3>
          <p className="text-sm text-[#3f4941] leading-relaxed">
            We partner directly with local village artisans, tea pickers, wildlife trackers, and family-owned boutique lodges.
          </p>
        </div>
      </div>

      {/* Office & Contact Box */}
      <div className="bg-[#f0eee9] p-8 sm:p-12 rounded-3xl border border-[#e4e2dd] grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <span className="text-xs font-bold text-[#733200] uppercase tracking-wider block">
            Visit Our Colombo Concierge Desk
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#1b1c19]">
            Headquarters & Support
          </h3>
          <p className="text-sm text-[#3f4941]">
            Planning a trip or need instant assistance while on the island? Our Colombo team is available 24 hours a day, 7 days a week.
          </p>
          <div className="space-y-2 text-xs sm:text-sm text-[#1b1c19] pt-2">
            <div className="flex items-center space-x-3">
              <MapPin className="w-4 h-4 text-[#006b3e]" />
              <span>World Trade Centre, Level 14, Echelon Square, Colombo 01</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-4 h-4 text-[#006b3e]" />
              <span>+94 11 234 5678</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-4 h-4 text-[#006b3e]" />
              <span>concierge@ceylondiscovery.com</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-[#e4e2dd] space-y-4 shadow-sm">
          <h4 className="font-serif text-lg font-semibold text-[#1b1c19]">Send us a direct message</h4>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full text-xs text-[#1b1c19] bg-[#f0eee9] p-3 rounded-xl border border-[#e4e2dd] focus:outline-none focus:ring-2 focus:ring-[#006b3e]"
          />
          <input
            type="email"
            placeholder="Your Email Address"
            className="w-full text-xs text-[#1b1c19] bg-[#f0eee9] p-3 rounded-xl border border-[#e4e2dd] focus:outline-none focus:ring-2 focus:ring-[#006b3e]"
          />
          <textarea
            rows={3}
            placeholder="How can our island team assist your travel plans?"
            className="w-full text-xs text-[#1b1c19] bg-[#f0eee9] p-3 rounded-xl border border-[#e4e2dd] focus:outline-none focus:ring-2 focus:ring-[#006b3e]"
          />
          <button
            onClick={() => alert('Thank you for reaching out! Our team will respond shortly.')}
            className="w-full py-3 bg-[#006b3e] text-white font-semibold text-xs rounded-xl shadow hover:bg-[#00502d] transition-colors"
          >
            Send Inquiry
          </button>
        </div>
      </div>

    </div>
  );
};
