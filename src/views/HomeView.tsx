import React, { useState } from 'react';
import { DESTINATIONS } from '../data/destinationsData';
import { Destination, ViewTab } from '../types';

interface HomeViewProps {
  onSelectTab: (tab: ViewTab) => void;
  onSelectDestination: (dest: Destination) => void;
  onExploreTours: (query?: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onSelectTab,
  onSelectDestination,
  onExploreTours,
}) => {
  const [heroSearchInput, setHeroSearchInput] = useState('');

  // Top 3 featured for home page matching screenshot 1 (Kandy, Mirissa, Nuwara Eliya)
  const homeDestinations = [
    DESTINATIONS.find(d => d.id === 'kandy') || DESTINATIONS[5],
    DESTINATIONS.find(d => d.id === 'mirissa-beaches') || DESTINATIONS[3],
    DESTINATIONS.find(d => d.id === 'nuwara-eliya') || DESTINATIONS[6],
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onExploreTours(heroSearchInput);
  };

  return (
    <div className="min-h-screen flex flex-col font-body-md animate-fadeIn">
      {/* Hero Section */}
      <section className="relative h-[870px] w-full mt-20 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIR_O_SB1kC_gxtTPgfnbRMHBu3twXXmzJYlkMl-EwVcj5d6znW5v5fYsdCAmCKkZ5xcjUjYJg4ANrc26rhsa9anR8NGiIcMrwvHuiuYS-31_MSYfPlSoS0zHQnR1qLCUDKE7wpXvoNJhXq9o2hJ4UdrrBSfILnA_J28xfZ6TwTkocgUbldePz6GkGA5m4JVSRyikJKcIrZGyEAfHrh7mfSeaQeUk8ntZHqVZgt3TCoBQ_1KlgmgVkoQ"
            alt="Sigiriya Rock Fortress in Sri Lanka at sunrise"
            referrerPolicy="no-referrer"
            className="object-cover w-full h-full scale-105 transform origin-center transition-transform duration-[20s] hover:scale-100"
          />
          <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center flex flex-col items-center justify-center space-y-8">
          <h1 className="font-display-lg-mobile md:font-display-lg text-4xl md:text-6xl text-white text-shadow-md max-w-4xl font-garamond leading-tight">
            Discover the Pearl of the Indian Ocean
          </h1>
          <p className="font-body-lg text-lg text-white/90 max-w-2xl text-shadow-sm font-light">
            Immerse yourself in pristine beaches, ancient wonders, and the lush serenity of Sri Lanka. Your extraordinary tropical modern adventure begins here.
          </p>

          <form 
            onSubmit={handleSearchSubmit}
            className="w-full max-w-2xl mt-8 bg-white/90 backdrop-blur-xl rounded-full p-2 flex items-center shadow-[0_40px_40px_-10px_rgba(0,80,45,0.08)]"
          >
            <div className="flex-1 flex items-center px-6">
              <span className="material-symbols-outlined text-[#00502d] mr-3 text-2xl">location_on</span>
              <input
                type="text"
                value={heroSearchInput}
                onChange={e => setHeroSearchInput(e.target.value)}
                placeholder="Where do you want to go?"
                className="w-full bg-transparent border-none outline-none focus:ring-0 text-base md:text-lg text-[#1b1c19] placeholder-[#3f4941]/60 font-body-md"
              />
            </div>
            <button
              type="submit"
              className="bg-[#733200] text-white font-label-md text-sm md:text-base font-semibold px-6 md:px-8 py-3.5 md:py-4 rounded-full hover:bg-[#984400] transition-colors shadow-sm shrink-0 cursor-pointer"
            >
              Explore Tours
            </button>
          </form>
        </div>
      </section>

      {/* Featured Destinations Grid */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="font-headline-md text-3xl md:text-4xl text-[#1b1c19] mb-4 font-garamond font-bold">
            Curated Destinations
          </h2>
          <p className="font-body-md text-base text-[#3f4941] max-w-2xl mx-auto">
            Experience the diverse landscapes of Sri Lanka, from mist-shrouded tea plantations to palm-fringed coastal havens.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {homeDestinations.map((dest) => (
            <div
              key={dest.id}
              className="group bg-[#fbf9f4] rounded-xl overflow-hidden shadow-[0_40px_40px_-10px_rgba(0,80,45,0.05)] border border-[#e4e2dd] hover:-translate-y-2 transition-transform duration-500 flex flex-col cursor-pointer"
              onClick={() => onSelectDestination(dest)}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={dest.imageUrl}
                  alt={dest.altText}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <h3 className="absolute bottom-6 left-6 font-headline-sm text-2xl text-white font-garamond font-semibold">
                  {dest.name}
                </h3>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <p className="font-body-md text-sm text-[#3f4941] mb-8 flex-1 leading-relaxed">
                  {dest.description}
                </p>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectDestination(dest);
                  }}
                  className="self-start text-[#00502d] font-label-md text-sm font-semibold flex items-center group/btn"
                >
                  <span>Learn More</span>
                  <span className="material-symbols-outlined ml-2 group-hover/btn:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => onSelectTab('destinations')}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white border border-[#bec9be] text-[#00502d] font-label-md text-sm font-semibold rounded-full hover:bg-[#00502d] hover:text-white transition-all shadow-sm"
          >
            <span>View All Breathtaking Destinations</span>
            <span className="material-symbols-outlined">explore</span>
          </button>
        </div>
      </section>

      {/* Why Choose Us / Ceylon Discovery Difference */}
      <section className="bg-[#f5f3ee] py-24 border-y border-[#e4e2dd]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-headline-md text-3xl md:text-4xl text-[#1b1c19] mb-16 font-garamond font-bold">
            The Ceylon Discovery Difference
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-[#00502d]/10 flex items-center justify-center mb-6 text-[#00502d]">
                <span className="material-symbols-outlined text-4xl">explore</span>
              </div>
              <h3 className="font-headline-sm text-2xl text-[#1b1c19] mb-4 font-garamond font-semibold">
                Local Experts
              </h3>
              <p className="font-body-md text-sm text-[#3f4941] max-w-sm leading-relaxed">
                Our guides are passionate locals who unveil the hidden gems and untold stories of the island you won't find in guidebooks.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-[#1961a1]/10 flex items-center justify-center mb-6 text-[#1961a1]">
                <span className="material-symbols-outlined text-4xl">support_agent</span>
              </div>
              <h3 className="font-headline-sm text-2xl text-[#1b1c19] mb-4 font-garamond font-semibold">
                24/7 Support
              </h3>
              <p className="font-body-md text-sm text-[#3f4941] max-w-sm leading-relaxed">
                Travel with complete peace of mind. Our dedicated team is available around the clock to ensure your journey is flawless.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-[#733200]/10 flex items-center justify-center mb-6 text-[#733200]">
                <span className="material-symbols-outlined text-4xl">edit_calendar</span>
              </div>
              <h3 className="font-headline-sm text-2xl text-[#1b1c19] mb-4 font-garamond font-semibold">
                Custom Itineraries
              </h3>
              <p className="font-body-md text-sm text-[#3f4941] max-w-sm leading-relaxed">
                Tailor-made experiences designed perfectly around your pace, preferences, and sense of adventure.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
