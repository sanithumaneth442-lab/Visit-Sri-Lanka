import React from 'react';
import { Experience, ViewType } from '../types';
import { EXPERIENCES } from '../data/experiences';
import { Compass, Sparkles, Calendar, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface ExperiencesViewProps {
  onNavigate: (view: ViewType) => void;
  onOpenAI: () => void;
}

export const ExperiencesView: React.FC<ExperiencesViewProps> = ({
  onNavigate,
  onOpenAI
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#733200]/10 text-[#733200] text-xs font-semibold tracking-wider uppercase">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Bespoke Journeys</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-[#1b1c19] tracking-tight">
          Curated Island Experiences
        </h1>
        <p className="text-base sm:text-lg text-[#3f4941] leading-relaxed">
          Immerse yourself in the extraordinary — private leopard safaris, sacred UNESCO rituals, scenic highland train voyages, and beachfront Ayurvedic sanctuaries.
        </p>
      </div>

      {/* Featured Hero Experience: Highland Railway */}
      <div className="relative rounded-3xl overflow-hidden bg-[#1b1c19] text-white shadow-2xl">
        <img
          src="https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=2000&q=80"
          alt="Royal Highland Train in Tea Country"
          className="w-full h-[480px] object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1b1c19] via-[#1b1c19]/30 to-transparent" />

        <div className="absolute bottom-8 left-8 right-8 max-w-3xl space-y-4">
          <span className="bg-[#ffdbc9] text-[#733200] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Signature Experience
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-white">
            The Royal Highland Tea Train & Masterclass
          </h2>
          <p className="text-sm sm:text-base text-[#e4e2dd] line-clamp-2">
            Ride first-class observation train carriages through cloud forests, stay in converted 1920s colonial tea factory estates, and hand-pick Ceylon leaves with master teasmiths.
          </p>
          <div className="pt-2 flex flex-wrap gap-4">
            <button
              onClick={() => onNavigate('plan')}
              className="px-6 py-3 bg-[#006b3e] hover:bg-[#00502d] text-white font-semibold text-sm rounded-xl transition-all shadow"
            >
              Include in Custom Itinerary
            </button>
            <button
              onClick={onOpenAI}
              className="px-5 py-3 bg-[#ffffff]/20 backdrop-blur-md hover:bg-[#ffffff]/30 text-white font-semibold text-sm rounded-xl transition-all border border-white/30"
            >
              Ask AI Details
            </button>
          </div>
        </div>
      </div>

      {/* Experience Cards Grid */}
      <div className="space-y-16">
        {EXPERIENCES.map((exp, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={exp.id}
              className={`bg-[#ffffff] rounded-3xl overflow-hidden border border-[#e4e2dd] shadow-sm flex flex-col ${
                isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Image Col */}
              <div className="lg:w-1/2 relative min-h-[320px] bg-[#e4e2dd]">
                <img
                  src={exp.image}
                  alt={exp.alt}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-4 left-4 bg-[#00502d] text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow">
                  {exp.badge}
                </span>
              </div>

              {/* Text Col */}
              <div className="lg:w-1/2 p-8 sm:p-12 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <span className="text-xs text-[#733200] font-semibold tracking-wider uppercase block">
                    {exp.category}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#1b1c19]">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-[#3f4941] leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-bold text-[#1b1c19] uppercase tracking-wide block">
                      Experience Highlights:
                    </span>
                    <ul className="space-y-2">
                      {exp.highlights.map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-[#3f4941]">
                          <CheckCircle2 className="w-4 h-4 text-[#006b3e] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 border-t border-[#f0eee9] flex items-center justify-between">
                  <button
                    onClick={() => onNavigate('plan')}
                    className="px-6 py-3 bg-[#006b3e] hover:bg-[#00502d] text-white font-semibold text-xs sm:text-sm rounded-xl transition-all shadow"
                  >
                    {exp.actionLabel}
                  </button>
                  <button
                    onClick={onOpenAI}
                    className="text-xs font-semibold text-[#733200] hover:underline flex items-center space-x-1"
                  >
                    <span>Customize with AI</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
