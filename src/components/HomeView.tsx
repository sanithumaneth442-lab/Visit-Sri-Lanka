import React, { useState } from 'react';
import { ViewType, Destination } from '../types';
import { DESTINATIONS } from '../data/destinations';
import { Search, Compass, Calendar, ArrowRight, ShieldCheck, MapPin, Sparkles, Star, Award } from 'lucide-react';

interface HomeViewProps {
  onNavigate: (view: ViewType) => void;
  onSelectDestination: (destination: Destination) => void;
  onOpenAI: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onSelectDestination,
  onOpenAI
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const featuredDestinations = DESTINATIONS.slice(0, 3); // Kandy, Mirissa, Nuwara Eliya or top 3

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNavigate('destinations');
  };

  return (
    <div className="space-y-20 pb-20">
      
      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#1b1c19]">
        {/* Background Image with Dark Vignette Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1588598056916-258410d73f41?auto=format&fit=crop&w=2000&q=80"
            alt="Sigiriya Rock Citadel Sri Lanka"
            className="w-full h-full object-cover object-center scale-105 filter brightness-[0.7] contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1b1c19] via-[#1b1c19]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1b1c19]/60 via-transparent to-[#1b1c19]/60" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center text-white space-y-8 pt-12 pb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#00502d]/80 backdrop-blur-md border border-[#81d9a1]/30 text-[#81d9a1] text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Sri Lanka Travel Experience</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-medium tracking-tight text-[#ffffff] drop-shadow-md leading-[1.1]">
            Discover the Pearl of the <br className="hidden sm:inline" />
            <span className="italic font-normal text-[#9df5bc]">Indian Ocean</span>
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-xl text-[#e4e2dd] font-sans font-normal leading-relaxed drop-shadow-sm">
            Bespoke luxury journeys across ancient UNESCO citadels, emerald tea mountain estates, and pristine palm-fringed coastal sanctuaries.
          </p>

          {/* Search Box */}
          <form 
            onSubmit={handleSearchSubmit}
            className="max-w-3xl mx-auto bg-[#ffffff] p-2.5 sm:p-3 rounded-2xl shadow-2xl border border-[#e4e2dd] flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-left"
          >
            <div className="flex-1 flex items-center space-x-3 px-3 py-2 w-full">
              <MapPin className="w-5 h-5 text-[#006b3e] shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Where do you want to go? (e.g. Ella, Yala, Galle)"
                className="w-full text-sm sm:text-base text-[#1b1c19] placeholder-[#6f7a70] focus:outline-none bg-transparent"
              />
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                type="button"
                onClick={onOpenAI}
                className="flex items-center justify-center space-x-1.5 px-4 py-3 bg-[#ffdbc9] hover:bg-[#ffb68d] text-[#733200] font-semibold text-xs sm:text-sm rounded-xl transition-colors shrink-0"
                title="Ask AI Travel Assistant"
              >
                <Sparkles className="w-4 h-4 text-[#984400]" />
                <span className="hidden md:inline">AI Guide</span>
              </button>

              <button
                type="submit"
                className="flex-1 sm:flex-none flex items-center justify-center space-x-2 px-6 py-3 bg-[#006b3e] hover:bg-[#00502d] text-[#ffffff] font-semibold text-sm rounded-xl shadow transition-all duration-200"
              >
                <Search className="w-4 h-4" />
                <span>Explore Tours</span>
              </button>
            </div>
          </form>

          {/* Key Stat Badges */}
          <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto text-left">
            <div className="bg-[#1b1c19]/60 backdrop-blur-md p-3 rounded-xl border border-[#3f4941]/40">
              <span className="block font-serif text-xl sm:text-2xl font-bold text-[#81d9a1]">8+</span>
              <span className="text-xs text-[#bec9be]">UNESCO World Heritage Sites</span>
            </div>
            <div className="bg-[#1b1c19]/60 backdrop-blur-md p-3 rounded-xl border border-[#3f4941]/40">
              <span className="block font-serif text-xl sm:text-2xl font-bold text-[#81d9a1]">1,300 km</span>
              <span className="text-xs text-[#bec9be]">Tropical Ocean Coastline</span>
            </div>
            <div className="bg-[#1b1c19]/60 backdrop-blur-md p-3 rounded-xl border border-[#3f4941]/40">
              <span className="block font-serif text-xl sm:text-2xl font-bold text-[#81d9a1]">100%</span>
              <span className="text-xs text-[#bec9be]">Tailor-made Itineraries</span>
            </div>
            <div className="bg-[#1b1c19]/60 backdrop-blur-md p-3 rounded-xl border border-[#3f4941]/40">
              <span className="block font-serif text-xl sm:text-2xl font-bold text-[#81d9a1]">24/7</span>
              <span className="text-xs text-[#bec9be]">Island Concierge Support</span>
            </div>
          </div>

        </div>
      </section>

      {/* CURATED DESTINATIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#e4e2dd] pb-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#006b3e] block mb-1">
              Top Destinations
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#1b1c19]">
              Curated Island Destinations
            </h2>
          </div>
          <button
            onClick={() => onNavigate('destinations')}
            className="inline-flex items-center space-x-2 text-sm font-semibold text-[#006b3e] hover:text-[#00502d] group"
          >
            <span>View All Destinations</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* 3 Featured Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredDestinations.map((dest) => (
            <div
              key={dest.id}
              className="group bg-[#ffffff] rounded-2xl overflow-hidden border border-[#e4e2dd] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative h-64 overflow-hidden bg-[#e4e2dd]">
                <img
                  src={dest.image}
                  alt={dest.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-[#00502d]/90 backdrop-blur-md text-[#ffffff] text-xs font-semibold px-3 py-1 rounded-full">
                  {dest.category}
                </div>
                {dest.startingPrice && (
                  <div className="absolute bottom-4 right-4 bg-[#1b1c19]/80 backdrop-blur-md text-[#ffffff] text-xs font-medium px-3 py-1 rounded-lg">
                    From ${dest.startingPrice} <span className="text-[#bec9be] font-normal">/ night</span>
                  </div>
                )}
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-xs text-[#6f7a70] font-medium block mb-1">
                    {dest.region}
                  </span>
                  <h3 className="font-serif text-2xl font-semibold text-[#1b1c19] group-hover:text-[#006b3e] transition-colors">
                    {dest.title}
                  </h3>
                  <p className="text-sm text-[#3f4941] mt-2 line-clamp-2">
                    {dest.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#f0eee9] flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-xs text-[#733200] font-medium">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Best: {dest.bestTimeToVisit}</span>
                  </div>
                  <button
                    onClick={() => onSelectDestination(dest)}
                    className="px-4 py-2 text-xs font-semibold text-[#006b3e] bg-[#f0eee9] hover:bg-[#006b3e] hover:text-[#ffffff] rounded-lg transition-colors"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CEYLON DISCOVERY DIFFERENCE */}
      <section className="bg-[#f0eee9] py-16 border-y border-[#e4e2dd]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#733200]">
              The Ceylon Difference
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#1b1c19]">
              Unrivaled Luxury & Local Mastery
            </h2>
            <p className="text-sm sm:text-base text-[#3f4941]">
              Every journey is individually designed by Sri Lankan travel artisans who live and breathe the island.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#ffffff] p-8 rounded-2xl border border-[#e4e2dd] space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#006b3e]/10 text-[#006b3e] flex items-center justify-center">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#1b1c19]">
                Resident Naturalists & Guides
              </h3>
              <p className="text-sm text-[#3f4941] leading-relaxed">
                Explore alongside veteran wildlife trackers, senior historians, and tea masters with decades of insider knowledge.
              </p>
            </div>

            <div className="bg-[#ffffff] p-8 rounded-2xl border border-[#e4e2dd] space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#733200]/10 text-[#733200] flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#1b1c19]">
                24/7 Personal Chauffeur & Concierge
              </h3>
              <p className="text-sm text-[#3f4941] leading-relaxed">
                Travel comfortably in private luxury vehicles with dedicated multi-lingual chauffeur-guides available anytime.
              </p>
            </div>

            <div className="bg-[#ffffff] p-8 rounded-2xl border border-[#e4e2dd] space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#1961a1]/10 text-[#1961a1] flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#1b1c19]">
                AI-Powered Bespoke Planning
              </h3>
              <p className="text-sm text-[#3f4941] leading-relaxed">
                Combine human local expertise with Ceylon AI to generate custom day-by-day itineraries tailored to your dates and preferences.
              </p>
            </div>
          </div>

          {/* CTA Banner inside home */}
          <div className="bg-[#00502d] rounded-3xl p-8 sm:p-12 text-[#ffffff] flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
            <div className="space-y-3 max-w-xl">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#81d9a1]">
                Tailor-Made Journey
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold">
                Ready to design your dream Sri Lankan escape?
              </h3>
              <p className="text-sm text-[#bec9be]">
                Specify your travel dates, party size, and preferred vibe — our AI Curation Engine and local concierges will handle the rest.
              </p>
            </div>
            <button
              onClick={() => onNavigate('plan')}
              className="px-8 py-4 bg-[#ffdbc9] hover:bg-[#ffb68d] text-[#733200] font-semibold rounded-2xl shadow transition-all duration-200 shrink-0 flex items-center space-x-2"
            >
              <Calendar className="w-5 h-5 text-[#733200]" />
              <span>Craft Your Custom Itinerary</span>
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};
