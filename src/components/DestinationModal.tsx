import React from 'react';
import { Destination, ViewType } from '../types';
import { X, Calendar, MapPin, CheckCircle2, DollarSign, Sparkles, ArrowRight } from 'lucide-react';

interface DestinationModalProps {
  destination: Destination | null;
  onClose: () => void;
  onNavigate: (view: ViewType) => void;
}

export const DestinationModal: React.FC<DestinationModalProps> = ({
  destination,
  onClose,
  onNavigate
}) => {
  if (!destination) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-[#ffffff] rounded-3xl overflow-hidden shadow-2xl border border-[#e4e2dd] my-8">
        
        {/* Header Image */}
        <div className="relative h-72 sm:h-80 bg-[#1b1c19]">
          <img
            src={destination.image}
            alt={destination.alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1b1c19] via-transparent to-transparent opacity-80" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#1b1c19]/60 hover:bg-[#1b1c19] text-white flex items-center justify-center backdrop-blur-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Badges */}
          <div className="absolute top-4 left-4 flex items-center space-x-2">
            <span className="bg-[#00502d] text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
              {destination.category}
            </span>
            <span className="bg-[#f0eee9] text-[#1b1c19] text-xs font-medium px-3 py-1 rounded-full shadow">
              {destination.region}
            </span>
          </div>

          {/* Bottom Title on Image */}
          <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
            <span className="text-xs text-[#81d9a1] font-semibold tracking-wider uppercase block">
              {destination.subtitle}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-white">
              {destination.title}
            </h2>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#f0eee9] text-xs sm:text-sm text-[#3f4941]">
            <div className="flex items-center space-x-2 text-[#733200] font-semibold">
              <Calendar className="w-4 h-4" />
              <span>Best Visit Months: {destination.bestTimeToVisit}</span>
            </div>
            {destination.startingPrice && (
              <div className="flex items-center space-x-1 text-[#006b3e] font-bold">
                <DollarSign className="w-4 h-4" />
                <span>Luxury Stays From ${destination.startingPrice} / night</span>
              </div>
            )}
          </div>

          <div className="space-y-3">
            <h3 className="font-serif text-xl font-semibold text-[#1b1c19]">
              About {destination.title}
            </h3>
            <p className="text-sm text-[#3f4941] leading-relaxed">
              {destination.longDescription || destination.description}
            </p>
          </div>

          {/* Highlights */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-bold text-[#1b1c19] uppercase tracking-wider">
              Destination Highlights
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {destination.highlights.map((hl, i) => (
                <div key={i} className="flex items-center space-x-2 text-xs text-[#3f4941] bg-[#f0eee9]/60 p-2.5 rounded-xl">
                  <CheckCircle2 className="w-4 h-4 text-[#006b3e] shrink-0" />
                  <span>{hl}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="pt-6 border-t border-[#f0eee9] flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={onClose}
              className="text-xs font-semibold text-[#6f7a70] hover:text-[#1b1c19]"
            >
              Close Window
            </button>
            <button
              onClick={() => {
                onClose();
                onNavigate('plan');
              }}
              className="w-full sm:w-auto px-6 py-3 bg-[#006b3e] hover:bg-[#00502d] text-white font-semibold text-xs sm:text-sm rounded-xl transition-all shadow flex items-center justify-center space-x-2"
            >
              <span>Add to Custom Itinerary</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
