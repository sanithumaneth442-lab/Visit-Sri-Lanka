import React from 'react';
import { ViewTab } from '../types';

interface AboutViewProps {
  onSelectTab: (tab: ViewTab) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onSelectTab }) => {
  return (
    <div className="min-h-screen pt-28 pb-24 px-6 md:px-12 max-w-7xl mx-auto font-body-md animate-fadeIn space-y-16">
      <div className="max-w-3xl">
        <span className="text-xs font-bold text-[#00502d] uppercase tracking-wider block mb-2">Our Story & Promise</span>
        <h1 className="font-display-lg-mobile md:font-display-lg text-4xl md:text-6xl text-[#1b1c19] mb-4 font-garamond font-bold">
          Serenity in Every Step
        </h1>
        <p className="font-body-md text-base md:text-lg text-[#3f4941] leading-relaxed">
          CeylonDiscovery was founded with a singular vision: to connect discerning global travelers with authentic, responsible, and breathtaking journeys across Sri Lanka.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="font-headline-md text-3xl font-garamond font-bold text-[#00502d]">
            Curating Unforgettable Ceylon Journeys
          </h2>
          <p className="font-body-md text-sm md:text-base text-[#3f4941] leading-relaxed">
            We believe travel should be deeply personal, immersive, and enriching. From private chauffeured vehicles through tea mountains to eco-luxury leopard glamping in Yala, our hand-picked experiences reflect true island warmth.
          </p>
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#bec9be]">
            <div>
              <span className="font-headline-md text-3xl font-bold text-[#00502d] font-garamond">12+</span>
              <span className="text-xs text-[#3f4941] block">Years of Luxury Craft</span>
            </div>
            <div>
              <span className="font-headline-md text-3xl font-bold text-[#00502d] font-garamond">100%</span>
              <span className="text-xs text-[#3f4941] block">Customized Itineraries</span>
            </div>
          </div>
        </div>

        <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#bec9be] h-96">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIR_O_SB1kC_gxtTPgfnbRMHBu3twXXmzJYlkMl-EwVcj5d6znW5v5fYsdCAmCKkZ5xcjUjYJg4ANrc26rhsa9anR8NGiIcMrwvHuiuYS-31_MSYfPlSoS0zHQnR1qLCUDKE7wpXvoNJhXq9o2hJ4UdrrBSfILnA_J28xfZ6TwTkocgUbldePz6GkGA5m4JVSRyikJKcIrZGyEAfHrh7mfSeaQeUk8ntZHqVZgt3TCoBQ_1KlgmgVkoQ"
            alt="Sigiriya Fortress panorama"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="bg-[#f5f3ee] p-8 md:p-12 rounded-3xl border border-[#bec9be] text-center space-y-6">
        <h2 className="font-headline-md text-3xl font-garamond font-bold text-[#1b1c19]">
          Ready to Begin Your Island Escape?
        </h2>
        <p className="text-sm md:text-base text-[#3f4941] max-w-xl mx-auto">
          Start planning with our travel architects today or explore our curated list of destinations.
        </p>
        <button
          onClick={() => onSelectTab('craft-journey')}
          className="bg-[#00502d] text-white px-8 py-3.5 rounded-full font-label-md text-sm font-semibold hover:bg-[#006b3e] transition-colors shadow-md inline-flex items-center gap-2"
        >
          <span>Start Your Custom Itinerary</span>
          <span className="material-symbols-outlined text-base">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};
