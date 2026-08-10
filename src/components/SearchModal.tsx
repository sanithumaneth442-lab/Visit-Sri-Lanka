import React, { useState } from 'react';
import { DESTINATIONS } from '../data/destinationsData';
import { Destination } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectDestination: (dest: Destination) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onSelectDestination }) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filtered = query.trim() === ''
    ? DESTINATIONS.slice(0, 4)
    : DESTINATIONS.filter(d => 
        d.name.toLowerCase().includes(query.toLowerCase()) ||
        d.category.toLowerCase().includes(query.toLowerCase()) ||
        d.region.toLowerCase().includes(query.toLowerCase()) ||
        d.description.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-[#fbf9f4] w-full max-w-2xl rounded-2xl shadow-2xl border border-[#bec9be] overflow-hidden flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-6 py-4 border-b border-[#bec9be] bg-white">
          <span className="material-symbols-outlined text-[#00502d] text-2xl mr-3">search</span>
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search destinations (e.g. Kandy, Ella, Yala, Beaches)..."
            className="w-full bg-transparent border-none outline-none text-lg text-[#1b1c19] placeholder-[#3f4941]/60 focus:ring-0"
            autoFocus
          />
          <button 
            onClick={onClose}
            className="p-1 rounded-full text-[#3f4941] hover:text-[#1b1c19] hover:bg-[#f5f3ee] transition-colors ml-2"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        {/* Results List */}
        <div className="p-6 max-h-[60vh] overflow-y-auto space-y-4">
          <div className="flex justify-between items-center text-xs font-semibold text-[#3f4941] uppercase tracking-wider mb-2">
            <span>{query ? 'Matching Destinations' : 'Popular Destinations'}</span>
            <span>{filtered.length} results</span>
          </div>

          {filtered.length === 0 ? (
            <div className="py-12 text-center text-[#3f4941]">
              <span className="material-symbols-outlined text-4xl text-[#6f7a70] mb-2">location_off</span>
              <p className="font-body-md text-base font-medium">No destinations found matching "{query}"</p>
              <p className="text-xs text-[#6f7a70] mt-1">Try searching for "Highlands", "Heritage", "Beach", or "Safari"</p>
            </div>
          ) : (
            filtered.map(dest => (
              <div
                key={dest.id}
                onClick={() => {
                  onSelectDestination(dest);
                  onClose();
                }}
                className="group flex items-center gap-4 p-3 rounded-xl bg-white hover:bg-[#f5f3ee] border border-[#f0eee9] hover:border-[#bec9be] cursor-pointer transition-all shadow-sm"
              >
                <img
                  src={dest.imageUrl}
                  alt={dest.name}
                  referrerPolicy="no-referrer"
                  className="w-16 h-16 rounded-lg object-cover group-hover:scale-105 transition-transform"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 bg-[#00502d]/10 text-[#00502d] text-xs font-semibold rounded-full">
                      {dest.category}
                    </span>
                    <span className="text-xs text-[#6f7a70]">{dest.region}</span>
                  </div>
                  <h4 className="font-headline-sm text-lg text-[#1b1c19] truncate group-hover:text-[#00502d] transition-colors">
                    {dest.name}
                  </h4>
                  <p className="text-xs text-[#3f4941] line-clamp-1">{dest.description}</p>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-xs font-bold text-[#00502d] block">From ${dest.pricePerNight}</span>
                  <span className="text-[10px] text-[#6f7a70]">/night</span>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="p-4 bg-[#f5f3ee] border-t border-[#bec9be] text-center text-xs text-[#3f4941] flex justify-between items-center">
          <span>Press ESC to exit</span>
          <span className="font-semibold text-[#00502d]">CeylonDiscovery Search</span>
        </div>
      </div>
    </div>
  );
};
