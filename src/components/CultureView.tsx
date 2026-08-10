import React from 'react';
import { ViewType } from '../types';
import { Sparkles, Calendar, ArrowRight, HeartHandshake } from 'lucide-react';

interface CultureViewProps {
  onNavigate: (view: ViewType) => void;
}

export const CultureView: React.FC<CultureViewProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#733200]/10 text-[#733200] text-xs font-semibold tracking-wider uppercase">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Living Heritage</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-[#1b1c19] tracking-tight">
          Sri Lankan Culture & Traditions
        </h1>
        <p className="text-base sm:text-lg text-[#3f4941] leading-relaxed">
          Step inside a rich tapestry of 2,500 years of royal heritage, vibrant Buddhist pageantry, world-famous Ceylon tea artistry, and ancient Ayurvedic wisdom.
        </p>
      </div>

      {/* Grid of Cultural Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Pillar 1 */}
        <div className="bg-[#ffffff] rounded-3xl overflow-hidden border border-[#e4e2dd] p-8 space-y-4 shadow-sm">
          <div className="h-52 rounded-2xl overflow-hidden bg-[#e4e2dd] mb-4">
            <img
              src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80"
              alt="Kandy Esala Perahera Temple Pageantry"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-xs text-[#733200] font-bold uppercase tracking-wider block">
            Annual Pageantry
          </span>
          <h3 className="font-serif text-2xl font-semibold text-[#1b1c19]">
            The Kandy Esala Perahera Festival
          </h3>
          <p className="text-sm text-[#3f4941] leading-relaxed">
            One of Asia’s oldest and grandest religious processions. Held annually in August, featuring dozens of majestic caparisoned elephants, fire dancers, Kandyan drummers, and whip crackers honoring the Sacred Tooth Relic.
          </p>
        </div>

        {/* Pillar 2 */}
        <div className="bg-[#ffffff] rounded-3xl overflow-hidden border border-[#e4e2dd] p-8 space-y-4 shadow-sm">
          <div className="h-52 rounded-2xl overflow-hidden bg-[#e4e2dd] mb-4">
            <img
              src="https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&w=1200&q=80"
              alt="Ceylon Tea Plantation Leaf Picking"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-xs text-[#006b3e] font-bold uppercase tracking-wider block">
            Highland Craftsmanship
          </span>
          <h3 className="font-serif text-2xl font-semibold text-[#1b1c19]">
            The Heritage of Ceylon Tea
          </h3>
          <p className="text-sm text-[#3f4941] leading-relaxed">
            Introduced by James Taylor in 1867, Ceylon tea is world-famous for its distinct single-origin notes. Hand-picked with precision across the misty heights of Nuwara Eliya, Hatton, and Dimbula.
          </p>
        </div>

        {/* Pillar 3 */}
        <div className="bg-[#ffffff] rounded-3xl overflow-hidden border border-[#e4e2dd] p-8 space-y-4 shadow-sm">
          <div className="h-52 rounded-2xl overflow-hidden bg-[#e4e2dd] mb-4">
            <img
              src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80"
              alt="Ayurveda Healing Oils & Tropical Herbs"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-xs text-[#1961a1] font-bold uppercase tracking-wider block">
            Holistic Healing
          </span>
          <h3 className="font-serif text-2xl font-semibold text-[#1b1c19]">
            Traditional Ayurvedic Medicine
          </h3>
          <p className="text-sm text-[#3f4941] leading-relaxed">
            Practiced for over 3,000 years, Sri Lankan Ayurveda balances mind, body, and spirit using native herbal remedies, warm oil elixirs, and mindfulness retreats along serene coastlines.
          </p>
        </div>

        {/* Pillar 4 */}
        <div className="bg-[#ffffff] rounded-3xl overflow-hidden border border-[#e4e2dd] p-8 space-y-4 shadow-sm">
          <div className="h-52 rounded-2xl overflow-hidden bg-[#e4e2dd] mb-4">
            <img
              src="https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1200&q=80"
              alt="Tropical Modernist Architecture in Galle"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-xs text-[#733200] font-bold uppercase tracking-wider block">
            Architectural Mastery
          </span>
          <h3 className="font-serif text-2xl font-semibold text-[#1b1c19]">
            Geoffrey Bawa & Tropical Modernism
          </h3>
          <p className="text-sm text-[#3f4941] leading-relaxed">
            Sri Lanka is the birthplace of Tropical Modernist architecture pioneered by world-renowned architect Geoffrey Bawa, seamlessly blending indoor sanctuaries with surrounding nature and water.
          </p>
        </div>

      </div>

      {/* Cultural Tour CTA */}
      <div className="bg-[#00502d] rounded-3xl p-8 sm:p-12 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-2 max-w-xl">
          <h3 className="font-serif text-2xl sm:text-3xl font-semibold">
            Experience authentic Sri Lankan hospitality
          </h3>
          <p className="text-sm text-[#bec9be]">
            Include private temple blessings, spice farm visits, or tea masterclasses in your custom trip.
          </p>
        </div>
        <button
          onClick={() => onNavigate('plan')}
          className="px-6 py-3 bg-[#ffdbc9] hover:bg-[#ffb68d] text-[#733200] font-semibold text-sm rounded-xl shadow shrink-0"
        >
          Book Cultural Tour
        </button>
      </div>

    </div>
  );
};
