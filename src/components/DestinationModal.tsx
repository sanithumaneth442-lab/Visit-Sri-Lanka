import React from 'react';
import { Destination } from '../types';

interface DestinationModalProps {
  destination: Destination | null;
  onClose: () => void;
  onPlanTrip: (destinationName?: string) => void;
}

export const DestinationModal: React.FC<DestinationModalProps> = ({
  destination,
  onClose,
  onPlanTrip,
}) => {
  if (!destination) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/70 backdrop-blur-md animate-fadeIn">
      <div 
        className="bg-[#fbf9f4] w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-[#bec9be]"
        onClick={e => e.stopPropagation()}
      >
        {/* Modal Header with Full Height Photo */}
        <div className="relative h-72 md:h-96 w-full shrink-0">
          <img
            src={destination.imageUrl}
            alt={destination.altText}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/80 transition-colors z-20"
            aria-label="Close detail modal"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>

          <div className="absolute bottom-6 left-6 right-6 text-white z-10">
            <div className="flex items-center gap-3 mb-2">
              <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full font-label-md text-xs text-white uppercase tracking-wider font-semibold">
                {destination.category}
              </span>
              <span className="text-sm text-white/80 font-medium">{destination.region}</span>
            </div>
            <h2 className="font-headline-md text-3xl md:text-5xl font-bold mb-1">
              {destination.name}
            </h2>
            <p className="text-white/90 text-sm md:text-base max-w-2xl font-light">
              {destination.description}
            </p>
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-6 flex-1 bg-[#fbf9f4]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-[#bec9be] pb-6">
            <div className="bg-[#f5f3ee] p-4 rounded-xl border border-[#e4e2dd]">
              <span className="text-xs text-[#6f7a70] uppercase font-semibold block mb-1">Estimated Cost</span>
              <p className="font-headline-sm text-xl text-[#00502d] font-bold">
                ${destination.pricePerNight} <span className="text-xs text-[#3f4941] font-normal">/ night</span>
              </p>
            </div>
            <div className="bg-[#f5f3ee] p-4 rounded-xl border border-[#e4e2dd]">
              <span className="text-xs text-[#6f7a70] uppercase font-semibold block mb-1">Best Time to Visit</span>
              <p className="font-headline-sm text-lg text-[#1b1c19] font-semibold">
                {destination.bestTimeToVisit}
              </p>
            </div>
            <div className="bg-[#f5f3ee] p-4 rounded-xl border border-[#e4e2dd]">
              <span className="text-xs text-[#6f7a70] uppercase font-semibold block mb-1">Suggested Stay</span>
              <p className="font-headline-sm text-lg text-[#1b1c19] font-semibold">
                {destination.suggestedDuration}
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-headline-sm text-2xl text-[#00502d] font-bold mb-3">About {destination.name}</h3>
            <p className="font-body-md text-base text-[#3f4941] leading-relaxed">
              {destination.longDescription}
            </p>
          </div>

          <div>
            <h3 className="font-headline-sm text-xl text-[#00502d] font-bold mb-3">Experience Highlights</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {destination.highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-[#e4e2dd]">
                  <span className="material-symbols-outlined text-[#00502d]">check_circle</span>
                  <span className="text-sm font-medium text-[#1b1c19]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Action Bar */}
        <div className="p-6 bg-white border-t border-[#bec9be] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-xs text-[#3f4941] block">Ready to visit {destination.name}?</span>
            <span className="font-headline-sm text-lg text-[#00502d] font-bold">Custom luxury itineraries curated by local experts</span>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-full border border-[#bec9be] text-[#3f4941] font-label-md text-sm hover:bg-[#f5f3ee] transition-colors w-1/2 sm:w-auto"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onPlanTrip(destination.name);
              }}
              className="bg-[#00502d] text-white px-6 py-2.5 rounded-full font-label-md text-sm font-semibold hover:bg-[#006b3e] transition-colors shadow-sm flex items-center justify-center gap-2 w-1/2 sm:w-auto"
            >
              <span>Include in Trip</span>
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
