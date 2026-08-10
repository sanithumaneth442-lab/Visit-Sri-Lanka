import React, { useState } from 'react';
import { Destination, CategoryType, ViewType } from '../types';
import { DESTINATIONS } from '../data/destinations';
import { Search, Filter, Calendar, MapPin, Sparkles, ArrowRight, Star } from 'lucide-react';

interface DestinationsViewProps {
  onSelectDestination: (destination: Destination) => void;
  onNavigate: (view: ViewType) => void;
}

export const DestinationsView: React.FC<DestinationsViewProps> = ({
  onSelectDestination,
  onNavigate
}) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: CategoryType[] = ['All', 'Coast', 'Highlands', 'Heritage', 'Wildlife'];

  const filteredDestinations = DESTINATIONS.filter((dest) => {
    const matchesCategory = selectedCategory === 'All' || dest.category === selectedCategory;
    const matchesSearch =
      dest.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.region.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* Header Section */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#006b3e]/10 text-[#006b3e] text-xs font-semibold tracking-wider uppercase">
          <MapPin className="w-3.5 h-3.5" />
          <span>Island Map & Locations</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-[#1b1c19] tracking-tight">
          Breathtaking Destinations
        </h1>
        <p className="text-base sm:text-lg text-[#3f4941] leading-relaxed">
          Discover the jewel of the Indian Ocean — from pristine palm beaches and ancient UNESCO citadels to misty tea slopes and wild savanna parks.
        </p>
      </div>

      {/* Controls Bar: Category Filters + Search */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-[#f0eee9] p-3 rounded-2xl border border-[#e4e2dd]">
        
        {/* Category Chips */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-[#006b3e] text-[#ffffff] shadow'
                    : 'bg-[#ffffff] text-[#3f4941] hover:bg-[#eae8e3]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Search Field */}
        <div className="relative min-w-[240px]">
          <Search className="w-4 h-4 text-[#6f7a70] absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search regions, activities..."
            className="w-full text-xs sm:text-sm text-[#1b1c19] placeholder-[#6f7a70] bg-[#ffffff] pl-9 pr-4 py-2 rounded-xl border border-[#e4e2dd] focus:outline-none focus:ring-2 focus:ring-[#006b3e]/30"
          />
        </div>

      </div>

      {/* Bento Grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredDestinations.map((dest, idx) => {
          // Make featured items span bigger in bento grid
          const isFeatured = idx === 0 || idx === 4;

          return (
            <div
              key={dest.id}
              onClick={() => onSelectDestination(dest)}
              className={`group cursor-pointer bg-[#ffffff] rounded-2xl overflow-hidden border border-[#e4e2dd] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col ${
                isFeatured ? 'lg:col-span-2' : ''
              }`}
            >
              <div className="relative h-64 sm:h-72 overflow-hidden bg-[#e4e2dd]">
                <img
                  src={dest.image}
                  alt={dest.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1b1c19]/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                {/* Top Tags */}
                <div className="absolute top-4 left-4 flex items-center space-x-2">
                  <span className="bg-[#00502d] text-[#ffffff] text-xs font-semibold px-3 py-1 rounded-full shadow">
                    {dest.category}
                  </span>
                  {dest.tag && (
                    <span className="bg-[#ffdbc9] text-[#733200] text-xs font-semibold px-3 py-1 rounded-full shadow">
                      {dest.tag}
                    </span>
                  )}
                </div>

                {/* Price Badge */}
                {dest.pricePerNight && (
                  <div className="absolute top-4 right-4 bg-[#ffffff]/90 backdrop-blur-md text-[#1b1c19] text-xs font-bold px-3 py-1.5 rounded-xl shadow">
                    ${dest.pricePerNight} <span className="font-normal text-[#6f7a70]">/ night</span>
                  </div>
                )}

                {/* Bottom Overlay Title on image */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs text-[#81d9a1] font-medium tracking-wide uppercase block">
                    {dest.region}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-white drop-shadow">
                    {dest.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-sm text-[#3f4941] leading-relaxed">
                  {dest.description}
                </p>

                {/* Key Highlights */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {dest.highlights.slice(0, 3).map((hl, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 bg-[#f0eee9] text-[#3f4941] text-[11px] font-medium rounded-md"
                    >
                      • {hl}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-[#f0eee9] flex items-center justify-between text-xs text-[#6f7a70]">
                  <div className="flex items-center space-x-1 text-[#733200] font-medium">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Best: {dest.bestTimeToVisit}</span>
                  </div>
                  <span className="font-semibold text-[#006b3e] group-hover:translate-x-1 transition-transform inline-flex items-center space-x-1">
                    <span>Explore details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredDestinations.length === 0 && (
        <div className="text-center py-16 bg-[#ffffff] rounded-2xl border border-[#e4e2dd] p-8 space-y-4">
          <p className="text-base text-[#6f7a70]">No destinations match your criteria.</p>
          <button
            onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
            className="px-4 py-2 bg-[#006b3e] text-white text-xs font-semibold rounded-xl"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Custom Itinerary Invitation Banner */}
      <div className="bg-[#f0eee9] border border-[#e4e2dd] rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <h3 className="font-serif text-2xl font-semibold text-[#1b1c19]">
            Want to combine multiple destinations into one route?
          </h3>
          <p className="text-sm text-[#3f4941]">
            Our AI Travel Architect designs optimized travel routes linking tea mountains, wildlife parks, and beaches without backtrack driving.
          </p>
        </div>
        <button
          onClick={() => onNavigate('plan')}
          className="px-6 py-3 bg-[#006b3e] hover:bg-[#00502d] text-white font-semibold text-sm rounded-xl transition-all shadow shrink-0"
        >
          Create Multi-Destination Itinerary
        </button>
      </div>

    </div>
  );
};
