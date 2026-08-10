import React from 'react';
import { EXPERIENCES } from '../data/experiencesData';
import { ViewTab } from '../types';

interface ExperiencesViewProps {
  onPlanTrip: (experienceTag?: string) => void;
  onSelectTab: (tab: ViewTab) => void;
}

export const ExperiencesView: React.FC<ExperiencesViewProps> = ({ onPlanTrip }) => {
  const wildlifeExp = EXPERIENCES[0];
  const heritageExp = EXPERIENCES[1];
  const coastalExp = EXPERIENCES[2];

  return (
    <div className="min-h-screen pt-28 pb-24 px-6 md:px-12 max-w-7xl mx-auto font-body-md animate-fadeIn space-y-20">
      {/* Page Title & Hero */}
      <div className="space-y-6">
        <div className="max-w-3xl">
          <h1 className="font-display-lg-mobile md:font-display-lg text-4xl md:text-6xl text-[#1b1c19] mb-4 font-garamond font-bold">
            Curated Island Experiences
          </h1>
          <p className="font-body-md text-base md:text-lg text-[#3f4941] leading-relaxed">
            Immerse yourself in the extraordinary. From wild safari encounters to sacred ancient stupas and tranquil coastal sanctuaries, experience Sri Lanka tailored to your desires.
          </p>
        </div>

        {/* Highland Mist Train Hero Banner */}
        <div className="relative h-80 md:h-[480px] rounded-3xl overflow-hidden shadow-xl border border-[#bec9be]">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB325c9gbbEziCxqlsVqvPf5QIs-5QteACzw9gQSCduG-3t_A5RwNuPKHINloAzWFn5TEl_dnAF_JZJRcZEoLNq37nThljCiuHBDYB1fuFCfJ6lNjCYg8MzfYQ-XbCCzW4L30bZ8Y5zCF6NL1YgC7Xb4cujji7lmg4gL3BIHl4nd_mULl5WvxjDzOud4mMW7bRp_bWuhdIe-CZNZ6QeN8cK5t_46yYshHLL3ReQ62H1JN3FNwUa3FZo6w"
            alt="Scenic blue train travelling through misty highlands of Sri Lanka"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
          <div className="absolute bottom-8 left-8 right-8 text-white max-w-2xl">
            <span className="px-3.5 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-semibold uppercase tracking-wider text-white inline-block mb-2">
              Highland Tea Trails
            </span>
            <h2 className="font-headline-md text-3xl md:text-5xl font-garamond font-bold mb-2">
              The Legendary Ceylon Scenic Rail
            </h2>
            <p className="text-white/90 text-sm md:text-base font-light">
              Traverse mist-shrouded mountain passes, cascading tea hills, and century-old stone viaducts aboard one of the world's most iconic train journeys.
            </p>
          </div>
        </div>
      </div>

      {/* Section 1: Wildlife Safaris (Asymmetric Layout matching screenshot 4) */}
      <section className="space-y-8 pt-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#bec9be] pb-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-[#00502d] uppercase tracking-wider block mb-2">
              {wildlifeExp.tag}
            </span>
            <h2 className="font-headline-md text-3xl md:text-4xl text-[#1b1c19] font-garamond font-bold">
              {wildlifeExp.title}
            </h2>
            <p className="font-body-md text-sm md:text-base text-[#3f4941] mt-2">
              {wildlifeExp.description}
            </p>
          </div>
          <button
            onClick={() => onPlanTrip('Wildlife Safaris')}
            className="bg-[#00502d] text-white px-6 py-3 rounded-full font-label-md text-sm font-semibold hover:bg-[#006b3e] transition-colors shadow-sm self-start md:self-auto flex items-center gap-2 shrink-0 cursor-pointer"
          >
            <span>{wildlifeExp.ctaText}</span>
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {wildlifeExp.items.map((item, idx) => (
            <div key={idx} className="group bg-white rounded-2xl overflow-hidden border border-[#bec9be] shadow-md hover:shadow-xl transition-all">
              <div className="relative h-72 overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.altText}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-2">
                <h3 className="font-headline-sm text-2xl text-[#1b1c19] font-garamond font-bold">
                  {item.title}
                </h3>
                <p className="font-body-md text-sm text-[#3f4941] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: Cultural Heritage Tours */}
      <section className="space-y-8 pt-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#bec9be] pb-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-[#00502d] uppercase tracking-wider block mb-2">
              {heritageExp.tag}
            </span>
            <h2 className="font-headline-md text-3xl md:text-4xl text-[#1b1c19] font-garamond font-bold">
              {heritageExp.title}
            </h2>
            <p className="font-body-md text-sm md:text-base text-[#3f4941] mt-2">
              {heritageExp.description}
            </p>
          </div>
          <button
            onClick={() => onPlanTrip('Cultural Heritage')}
            className="bg-[#00502d] text-white px-6 py-3 rounded-full font-label-md text-sm font-semibold hover:bg-[#006b3e] transition-colors shadow-sm self-start md:self-auto flex items-center gap-2 shrink-0 cursor-pointer"
          >
            <span>{heritageExp.ctaText}</span>
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {heritageExp.items.map((item, idx) => (
            <div key={idx} className="group bg-white rounded-2xl overflow-hidden border border-[#bec9be] shadow-md hover:shadow-xl transition-all">
              <div className="relative h-72 overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.altText}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-2">
                <h3 className="font-headline-sm text-2xl text-[#1b1c19] font-garamond font-bold">
                  {item.title}
                </h3>
                <p className="font-body-md text-sm text-[#3f4941] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Coastal Escapes with Floating Booking Widget (matching screenshot 4) */}
      <section className="space-y-8 pt-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#bec9be] pb-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-[#00502d] uppercase tracking-wider block mb-2">
              {coastalExp.tag}
            </span>
            <h2 className="font-headline-md text-3xl md:text-4xl text-[#1b1c19] font-garamond font-bold">
              {coastalExp.title}
            </h2>
            <p className="font-body-md text-sm md:text-base text-[#3f4941] mt-2">
              {coastalExp.description}
            </p>
          </div>
          <button
            onClick={() => onPlanTrip('Coastal Escapes')}
            className="bg-[#00502d] text-white px-6 py-3 rounded-full font-label-md text-sm font-semibold hover:bg-[#006b3e] transition-colors shadow-sm self-start md:self-auto flex items-center gap-2 shrink-0 cursor-pointer"
          >
            <span>{coastalExp.ctaText}</span>
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </button>
        </div>

        <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#bec9be]">
          <img
            src={coastalExp.items[0].imageUrl}
            alt={coastalExp.items[0].altText}
            referrerPolicy="no-referrer"
            className="w-full h-[450px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>

          {/* Text Left */}
          <div className="absolute inset-y-0 left-8 md:left-12 flex flex-col justify-center max-w-lg text-white space-y-4">
            <h3 className="font-headline-md text-3xl md:text-4xl font-garamond font-bold">
              Unawatuna & Bentota Havens
            </h3>
            <p className="text-white/90 text-sm md:text-base font-light leading-relaxed">
              Powdery golden sand, luxury beachfront villas, and turquoise ocean water curated for your ultimate relaxation.
            </p>
            <ul className="space-y-2 text-xs md:text-sm text-white/80">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#81d9a1] text-base">check</span>
                <span>Private villa bookings with ocean views</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#81d9a1] text-base">check</span>
                <span>Whale watching excursions & coral snorkeling</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#81d9a1] text-base">check</span>
                <span>Ayurvedic beachside spa therapies</span>
              </li>
            </ul>
          </div>

          {/* Floating Booking Card (Right Side matching screenshot 4) */}
          <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-md p-6 rounded-2xl border border-[#bec9be] shadow-2xl w-80 space-y-4 text-[#1b1c19]">
            <div className="border-b border-[#f0eee9] pb-3">
              <span className="text-[10px] text-[#00502d] font-bold uppercase tracking-wider block">Stay in Bentota</span>
              <h4 className="font-headline-sm text-lg font-bold font-garamond">Luxury Beachfront Villa</h4>
              <p className="text-xs text-[#3f4941]">From $220 / night • Breakfast Included</p>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <label className="text-[#3f4941] font-medium block mb-1">Check-in / Check-out</label>
                <div className="p-2.5 bg-[#f5f3ee] rounded-lg border border-[#bec9be] font-mono text-[11px] text-[#1b1c19]">
                  Select preferred dates
                </div>
              </div>
              <div>
                <label className="text-[#3f4941] font-medium block mb-1">Guests</label>
                <select className="w-full p-2.5 bg-[#f5f3ee] rounded-lg border border-[#bec9be] text-xs outline-none">
                  <option>2 Adults, 1 Room</option>
                  <option>Family (4 Adults, 2 Rooms)</option>
                  <option>Solo Traveler</option>
                </select>
              </div>
            </div>

            <button
              onClick={() => onPlanTrip('Bentota Beach Villa')}
              className="w-full bg-[#00502d] text-white py-2.5 rounded-xl font-label-md text-xs font-semibold hover:bg-[#006b3e] transition-colors shadow-sm"
            >
              Check Availability & Book
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
