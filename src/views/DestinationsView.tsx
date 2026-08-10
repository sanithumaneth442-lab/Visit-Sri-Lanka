import React, { useState } from 'react';
import { DESTINATIONS } from '../data/destinationsData';
import { Destination, DestinationCategory } from '../types';

interface DestinationsViewProps {
  onSelectDestination: (dest: Destination) => void;
  onPlanTrip: (destinationName?: string) => void;
  initialFilter?: string;
}

export const DestinationsView: React.FC<DestinationsViewProps> = ({
  onSelectDestination,
  onPlanTrip,
  initialFilter,
}) => {
  const [activeCategory, setActiveCategory] = useState<DestinationCategory>(
    (initialFilter as DestinationCategory) || 'All'
  );

  const categories: DestinationCategory[] = ['All', 'Coast', 'Highlands', 'Heritage', 'Wildlife'];

  const filteredDestinations = activeCategory === 'All'
    ? DESTINATIONS
    : DESTINATIONS.filter(d => d.category === activeCategory);

  const featuredElla = DESTINATIONS.find(d => d.id === 'ella-tea-trails') || DESTINATIONS[0];

  return (
    <div className="min-h-screen pt-28 pb-24 px-6 md:px-12 max-w-7xl mx-auto font-body-md animate-fadeIn">
      {/* Page Header */}
      <div className="max-w-3xl mb-12">
        <h1 className="font-display-lg-mobile md:font-display-lg text-4xl md:text-6xl text-[#1b1c19] mb-4 font-garamond font-bold tracking-tight">
          Breathtaking Destinations
        </h1>
        <p className="font-body-md text-base md:text-lg text-[#3f4941] leading-relaxed">
          Discover the jewel of the Indian Ocean—a sanctuary of ancient heritage, mist-shrouded highlands, and sun-kissed tropical shores.
        </p>
      </div>

      {/* Filter Category Pills */}
      <div className="flex flex-wrap items-center gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2.5 rounded-full font-label-md text-sm font-semibold transition-all cursor-pointer ${
              activeCategory === cat
                ? 'bg-[#00502d] text-white shadow-sm scale-105'
                : 'bg-[#f5f3ee] text-[#3f4941] hover:bg-[#eae8e3] hover:text-[#1b1c19]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Bento Grid Layout */}
      {activeCategory === 'All' ? (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Featured Large Card (8 columns) */}
          <div 
            onClick={() => onSelectDestination(featuredElla)}
            className="md:col-span-8 group relative rounded-2xl overflow-hidden min-h-[420px] md:min-h-[500px] flex flex-col justify-end p-8 md:p-10 border border-[#bec9be] shadow-lg cursor-pointer transform hover:-translate-y-1 transition-all"
          >
            <img
              src={featuredElla.imageUrl}
              alt={featuredElla.altText}
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent"></div>

            <div className="relative z-10 space-y-3">
              <div className="flex items-center gap-3">
                <span className="px-3.5 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider rounded-full">
                  {featuredElla.category}
                </span>
                <span className="text-white/80 text-xs font-medium">Featured Highlighting</span>
              </div>

              <h2 className="font-headline-md text-3xl md:text-4xl text-white font-garamond font-bold">
                {featuredElla.name}
              </h2>

              <p className="font-body-md text-white/90 text-sm md:text-base max-w-xl line-clamp-2">
                {featuredElla.description}
              </p>

              <div className="pt-4 flex items-center justify-between border-t border-white/20">
                <span className="text-white font-headline-sm text-lg md:text-xl font-bold">
                  From ${featuredElla.pricePerNight} <span className="text-xs text-white/70 font-normal">/ night</span>
                </span>
                <span className="w-10 h-10 rounded-full bg-white text-[#00502d] flex items-center justify-center group-hover:bg-[#00502d] group-hover:text-white transition-colors shadow-md">
                  <span className="material-symbols-outlined text-xl">arrow_forward</span>
                </span>
              </div>
            </div>
          </div>

          {/* Yala Safari Card (4 columns) */}
          {(() => {
            const yala = DESTINATIONS.find(d => d.id === 'yala-national-park') || DESTINATIONS[1];
            return (
              <div
                onClick={() => onSelectDestination(yala)}
                className="md:col-span-4 group relative rounded-2xl overflow-hidden min-h-[420px] md:min-h-[500px] flex flex-col justify-end p-8 border border-[#bec9be] shadow-lg cursor-pointer transform hover:-translate-y-1 transition-all"
              >
                <img
                  src={yala.imageUrl}
                  alt={yala.altText}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent"></div>

                <div className="relative z-10 space-y-2">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider rounded-full inline-block mb-1">
                    {yala.category}
                  </span>
                  <h3 className="font-headline-sm text-2xl text-white font-garamond font-bold">
                    {yala.name}
                  </h3>
                  <p className="text-white/80 text-xs line-clamp-2">
                    {yala.description}
                  </p>
                  <div className="pt-3 flex items-center justify-between">
                    <span className="text-white text-sm font-bold">From ${yala.pricePerNight}/night</span>
                    <span className="material-symbols-outlined text-white group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </div>
                </div>
              </div>
            );
          })()}

          {/* Bottom Row - All Remaining Destinations */}
          {DESTINATIONS.filter(d => d.id !== 'ella-tea-trails' && d.id !== 'yala-national-park').map((dest) => (
            <div
              key={dest.id}
              onClick={() => onSelectDestination(dest)}
              className="md:col-span-4 group relative rounded-2xl overflow-hidden h-80 flex flex-col justify-end p-6 border border-[#bec9be] shadow-md cursor-pointer transform hover:-translate-y-1 transition-all"
            >
              <img
                src={dest.imageUrl}
                alt={dest.altText}
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>

              <div className="relative z-10 space-y-1.5">
                <span className="px-2.5 py-0.5 bg-white/20 backdrop-blur-md text-white text-[10px] font-semibold uppercase tracking-wider rounded-full inline-block">
                  {dest.category}
                </span>
                <h3 className="font-headline-sm text-xl text-white font-garamond font-bold">
                  {dest.name}
                </h3>
                <div className="flex items-center justify-between pt-2 border-t border-white/20">
                  <span className="text-white text-xs font-semibold">From ${dest.pricePerNight} / night</span>
                  <span className="material-symbols-outlined text-white text-sm group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Filtered Grid View */
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredDestinations.map((dest) => (
            <div
              key={dest.id}
              onClick={() => onSelectDestination(dest)}
              className="group bg-white rounded-2xl overflow-hidden border border-[#bec9be] shadow-md hover:shadow-xl cursor-pointer transform hover:-translate-y-1 transition-all flex flex-col"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={dest.imageUrl}
                  alt={dest.altText}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-md text-white text-xs font-semibold rounded-full uppercase">
                  {dest.category}
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-headline-sm text-2xl text-[#1b1c19] mb-2 font-garamond font-bold">
                    {dest.name}
                  </h3>
                  <p className="text-xs text-[#3f4941] line-clamp-2 mb-4">
                    {dest.description}
                  </p>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-[#f0eee9]">
                  <span className="text-sm font-bold text-[#00502d]">From ${dest.pricePerNight} / night</span>
                  <span className="text-xs text-[#00502d] font-semibold flex items-center gap-1 group-hover:underline">
                    View Details
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Bottom CTA Banner */}
      <div className="mt-20 bg-[#00502d] text-white rounded-3xl p-8 md:p-12 text-center relative overflow-hidden shadow-xl">
        <div className="relative z-10 max-w-2xl mx-auto space-y-4">
          <h2 className="font-headline-md text-3xl md:text-4xl font-garamond font-bold">
            Can't Decide Where to Go First?
          </h2>
          <p className="text-white/90 text-sm md:text-base font-light">
            Our luxury travel architects can combine multiple regions into one seamless, unforgettable island itinerary.
          </p>
          <button
            onClick={() => onPlanTrip()}
            className="inline-flex items-center gap-2 bg-[#733200] hover:bg-[#984400] text-white px-8 py-3.5 rounded-full font-label-md text-sm font-semibold transition-all shadow-md mt-2"
          >
            <span>Design Custom Multi-Stop Tour</span>
            <span className="material-symbols-outlined">auto_awesome</span>
          </button>
        </div>
      </div>
    </div>
  );
};
