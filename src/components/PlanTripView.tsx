import React, { useState } from 'react';
import { ViewType, ItineraryDraft, GeneratedItineraryDay } from '../types';
import { Calendar, Users, MapPin, Sparkles, X, Check, Clock, Hotel, Compass, ArrowRight, Loader2, Send } from 'lucide-react';

interface PlanTripViewProps {
  onNavigate: (view: ViewType) => void;
}

export const PlanTripView: React.FC<PlanTripViewProps> = ({ onNavigate }) => {
  const [draft, setDraft] = useState<ItineraryDraft>({
    arrivalDate: '2025-04-10',
    departureDate: '2025-04-18',
    travelers: 'Couple',
    selectedInterests: ['Highlands & Tea Estates', 'Wildlife Safaris', 'Cultural Triangle'],
    accommodationType: 'Luxury Boutique',
    pace: 'Balanced',
    budgetLevel: 'Standard Luxury',
    specialRequests: ''
  });

  const [loadingAI, setLoadingAI] = useState(false);
  const [generatedItinerary, setGeneratedItinerary] = useState<GeneratedItineraryDay[] | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const interestOptions = [
    { id: 'Highlands & Tea Estates', label: 'Central Highlands & Tea Estates', region: 'Ella, Nuwara Eliya, Horton Plains' },
    { id: 'Southern Coast', label: 'Southern Coast & Beaches', region: 'Mirissa, Galle, Tangalle' },
    { id: 'Cultural Triangle', label: 'Cultural Triangle & Citadels', region: 'Sigiriya, Polonnaruwa, Dambulla' },
    { id: 'Wildlife Safaris', label: 'Wild Leopard & Elephant Safaris', region: 'Yala, Udawalawe, Wilpattu' },
    { id: 'Serenity & Wellness', label: 'Ayurveda & Beach Serenity', region: 'Bentota, Trincomalee, Dikwella' }
  ];

  const handleInterestToggle = (interestId: string) => {
    setDraft((prev) => {
      const exists = prev.selectedInterests.includes(interestId);
      const updated = exists
        ? prev.selectedInterests.filter((i) => i !== interestId)
        : [...prev.selectedInterests, interestId];
      return { ...prev, selectedInterests: updated };
    });
  };

  // Calculate approximate days
  const getDaysCount = () => {
    if (!draft.arrivalDate || !draft.departureDate) return 8;
    const start = new Date(draft.arrivalDate);
    const end = new Date(draft.departureDate);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 8;
  };

  const handleGenerateAIItinerary = async () => {
    setLoadingAI(true);
    setGeneratedItinerary(null);
    try {
      const res = await fetch('/api/curate-itinerary', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(draft)
      });
      const data = await res.json();
      if (data.success && Array.isArray(data.days)) {
        setGeneratedItinerary(data.days);
      } else {
        // Fallback sample if API unavailable
        setGeneratedItinerary([
          {
            dayNumber: 1,
            title: 'Arrival in Colombo & Coastal Transfer to Negombo Lagoon',
            location: 'Negombo / Colombo',
            description: 'Private chauffeur greeting at Bandaranaike International Airport followed by relaxation at an oceanfront estate.',
            morningActivity: 'Airport VIP greeting & transfer to resort',
            afternoonActivity: 'Private lagoon boat cruise through coconut groves',
            eveningActivity: 'Sunset seafood dinner beside the Indian Ocean',
            stayRecommendation: 'The Wallawwa (Boutique Manor)'
          },
          {
            dayNumber: 2,
            title: 'Journey to the Ancient Sky Citadel of Sigiriya',
            location: 'Cultural Triangle',
            description: 'Drive inland through spice gardens into Sri Lanka’s ancient UNESCO Cultural Triangle.',
            morningActivity: 'Scenic luxury drive with spice estate refreshment stop',
            afternoonActivity: 'Check-in to eco-lodge & private elephant safari at Minneriya',
            eveningActivity: 'Traditional Sri Lankan curry masterclass under lantern-lit palms',
            stayRecommendation: 'Water Garden Sigiriya'
          },
          {
            dayNumber: 3,
            title: 'Sunrise Summit Climb & Sacred Cave Temples',
            location: 'Sigiriya & Dambulla',
            description: 'Climb 5th-century Sigiriya Rock at dawn before exploring ancient golden cave shrines.',
            morningActivity: 'Dawn climb up Sigiriya Lion Rock Citadel',
            afternoonActivity: 'Guided walk through Dambulla Golden Cave Temple',
            eveningActivity: 'Ayurvedic herbal massage & courtyard dining',
            stayRecommendation: 'Water Garden Sigiriya'
          },
          {
            dayNumber: 4,
            title: 'Royal Kandyan Kingdom & Tea Country Railway',
            location: 'Kandy to Ella',
            description: 'Visit the sacred Temple of the Tooth Relic in Kandy before boarding the royal highland observation train.',
            morningActivity: 'Private blessing at Temple of the Tooth Relic',
            afternoonActivity: 'First-class scenic train journey through tea country',
            eveningActivity: 'Colonial high tea on tea estate lawns',
            stayRecommendation: 'Ceylon Tea Trails (Castlereagh Bungalow)'
          }
        ]);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingAI(false);
    }
  };

  const handleSubmitToConcierge = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Header & Close Action */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#e4e2dd] pb-6">
        <div className="space-y-2">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#733200]/10 text-[#733200] text-xs font-semibold uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Trip Builder</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-semibold text-[#1b1c19]">
            Craft Your Journey
          </h1>
          <p className="text-sm sm:text-base text-[#3f4941]">
            Design a bespoke itinerary tailored to your travel dates, preferred regions, and pacing.
          </p>
        </div>

        <button
          onClick={() => onNavigate('home')}
          className="flex items-center space-x-2 px-4 py-2 bg-[#f0eee9] hover:bg-[#eae8e3] text-[#3f4941] text-xs font-semibold rounded-xl transition-colors shrink-0 self-start md:self-auto"
        >
          <X className="w-4 h-4" />
          <span>Cancel Booking</span>
        </button>
      </div>

      {/* Main Grid: Form Left, Live Draft Sidebar Right */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Left Form (2 cols) */}
        <div className="lg:col-span-2 space-y-10">
          
          {/* STEP 1: Dates & Travelers */}
          <section className="bg-[#ffffff] p-6 sm:p-8 rounded-3xl border border-[#e4e2dd] shadow-sm space-y-6">
            <div className="flex items-center space-x-3 border-b border-[#f0eee9] pb-4">
              <div className="w-8 h-8 rounded-full bg-[#006b3e] text-white flex items-center justify-center font-bold text-sm">
                1
              </div>
              <h2 className="font-serif text-2xl font-semibold text-[#1b1c19]">
                Travel Dates & Party Size
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-[#3f4941] uppercase mb-2">
                  Arrival Date
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-[#6f7a70] absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="date"
                    value={draft.arrivalDate}
                    onChange={(e) => setDraft({ ...draft, arrivalDate: e.target.value })}
                    className="w-full text-sm text-[#1b1c19] bg-[#f0eee9] pl-10 pr-4 py-2.5 rounded-xl border border-[#e4e2dd] focus:outline-none focus:ring-2 focus:ring-[#006b3e]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#3f4941] uppercase mb-2">
                  Departure Date
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-[#6f7a70] absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="date"
                    value={draft.departureDate}
                    onChange={(e) => setDraft({ ...draft, departureDate: e.target.value })}
                    className="w-full text-sm text-[#1b1c19] bg-[#f0eee9] pl-10 pr-4 py-2.5 rounded-xl border border-[#e4e2dd] focus:outline-none focus:ring-2 focus:ring-[#006b3e]"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#3f4941] uppercase mb-2">
                Travel Party
              </label>
              <div className="grid grid-cols-3 gap-3">
                {(['Solo', 'Couple', 'Family/Group'] as const).map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setDraft({ ...draft, travelers: type })}
                    className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold border transition-all ${
                      draft.travelers === type
                        ? 'bg-[#006b3e] text-white border-[#006b3e] shadow'
                        : 'bg-[#f0eee9] text-[#3f4941] border-[#e4e2dd] hover:bg-[#eae8e3]'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* STEP 2: Preferred Regions & Interests */}
          <section className="bg-[#ffffff] p-6 sm:p-8 rounded-3xl border border-[#e4e2dd] shadow-sm space-y-6">
            <div className="flex items-center space-x-3 border-b border-[#f0eee9] pb-4">
              <div className="w-8 h-8 rounded-full bg-[#006b3e] text-white flex items-center justify-center font-bold text-sm">
                2
              </div>
              <h2 className="font-serif text-2xl font-semibold text-[#1b1c19]">
                Preferred Regions & Highlights
              </h2>
            </div>

            <p className="text-xs text-[#6f7a70]">
              Select all island regions you wish to include in your journey:
            </p>

            <div className="space-y-3">
              {interestOptions.map((opt) => {
                const isSelected = draft.selectedInterests.includes(opt.id);
                return (
                  <div
                    key={opt.id}
                    onClick={() => handleInterestToggle(opt.id)}
                    className={`cursor-pointer p-4 rounded-2xl border transition-all flex items-center justify-between ${
                      isSelected
                        ? 'bg-[#006b3e]/5 border-[#006b3e] text-[#00502d]'
                        : 'bg-[#f0eee9]/60 border-[#e4e2dd] hover:bg-[#f0eee9]'
                    }`}
                  >
                    <div>
                      <span className="font-semibold text-sm sm:text-base block">
                        {opt.label}
                      </span>
                      <span className="text-xs text-[#6f7a70]">
                        Key spots: {opt.region}
                      </span>
                    </div>

                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center border ${
                        isSelected
                          ? 'bg-[#006b3e] text-white border-[#006b3e]'
                          : 'border-[#6f7a70] bg-white'
                      }`}
                    >
                      {isSelected && <Check className="w-3.5 h-3.5" />}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* STEP 3: Accommodation Style & Pace */}
          <section className="bg-[#ffffff] p-6 sm:p-8 rounded-3xl border border-[#e4e2dd] shadow-sm space-y-6">
            <div className="flex items-center space-x-3 border-b border-[#f0eee9] pb-4">
              <div className="w-8 h-8 rounded-full bg-[#006b3e] text-white flex items-center justify-center font-bold text-sm">
                3
              </div>
              <h2 className="font-serif text-2xl font-semibold text-[#1b1c19]">
                Vibe & Special Requests
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-[#3f4941] uppercase mb-2">
                  Stay Preference
                </label>
                <select
                  value={draft.accommodationType}
                  onChange={(e) => setDraft({ ...draft, accommodationType: e.target.value as any })}
                  className="w-full text-sm text-[#1b1c19] bg-[#f0eee9] px-4 py-2.5 rounded-xl border border-[#e4e2dd] focus:outline-none focus:ring-2 focus:ring-[#006b3e]"
                >
                  <option value="Luxury Boutique">Luxury Boutique Hotels</option>
                  <option value="Eco Lodge">Wild Eco Lodges & Glamping</option>
                  <option value="Colonial Estate">Colonial Tea Estates</option>
                  <option value="Beach Villa">Private Beachfront Villa</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#3f4941] uppercase mb-2">
                  Pace of Journey
                </label>
                <select
                  value={draft.pace}
                  onChange={(e) => setDraft({ ...draft, pace: e.target.value as any })}
                  className="w-full text-sm text-[#1b1c19] bg-[#f0eee9] px-4 py-2.5 rounded-xl border border-[#e4e2dd] focus:outline-none focus:ring-2 focus:ring-[#006b3e]"
                >
                  <option value="Relaxed">Relaxed (Slower, 2-3 nights per stop)</option>
                  <option value="Balanced">Balanced (Mix of highlights & rest)</option>
                  <option value="Active Exploration">Active (Maximum coverage)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#3f4941] uppercase mb-2">
                Special Requests or Dietary Requirements
              </label>
              <textarea
                rows={3}
                value={draft.specialRequests}
                onChange={(e) => setDraft({ ...draft, specialRequests: e.target.value })}
                placeholder="e.g., Honeymoon surprise, vegetarian cuisine, accessible ground floor rooms..."
                className="w-full text-sm text-[#1b1c19] bg-[#f0eee9] p-3 rounded-xl border border-[#e4e2dd] focus:outline-none focus:ring-2 focus:ring-[#006b3e]"
              />
            </div>

            {/* AI Generator Button */}
            <div className="pt-4 border-t border-[#f0eee9]">
              <button
                type="button"
                onClick={handleGenerateAIItinerary}
                disabled={loadingAI}
                className="w-full py-4 bg-[#733200] hover:bg-[#984400] text-white font-semibold text-sm rounded-2xl transition-all shadow flex items-center justify-center space-x-2"
              >
                {loadingAI ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Ceylon AI is Curating Your Itinerary...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5 text-[#ffdbc9]" />
                    <span>Generate Bespoke Itinerary with Ceylon AI</span>
                  </>
                )}
              </button>
            </div>
          </section>

          {/* GENERATED ITINERARY DISPLAY */}
          {generatedItinerary && (
            <section className="bg-[#f0eee9] p-6 sm:p-8 rounded-3xl border border-[#e4e2dd] space-y-8 animate-in fade-in duration-300">
              <div className="flex items-center justify-between border-b border-[#e4e2dd] pb-4">
                <div>
                  <span className="text-xs font-bold text-[#006b3e] uppercase tracking-wider block">
                    Tailored Day-by-Day Route
                  </span>
                  <h3 className="font-serif text-2xl font-semibold text-[#1b1c19]">
                    Your AI Curated Sri Lanka Itinerary
                  </h3>
                </div>
                <span className="bg-[#00502d] text-white text-xs font-bold px-3 py-1 rounded-full">
                  {generatedItinerary.length} Days
                </span>
              </div>

              <div className="space-y-6">
                {generatedItinerary.map((day) => (
                  <div key={day.dayNumber} className="bg-white p-6 rounded-2xl border border-[#e4e2dd] space-y-3 shadow-sm">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center space-x-3">
                        <span className="w-8 h-8 rounded-full bg-[#ffdbc9] text-[#733200] font-bold text-xs flex items-center justify-center shrink-0">
                          Day {day.dayNumber}
                        </span>
                        <div>
                          <h4 className="font-serif text-lg font-semibold text-[#1b1c19]">
                            {day.title}
                          </h4>
                          <span className="text-xs text-[#006b3e] font-medium block">
                            📍 {day.location}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-[#3f4941] leading-relaxed">
                      {day.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-[#f0eee9] text-xs">
                      <div className="bg-[#f0eee9]/60 p-2.5 rounded-xl">
                        <span className="font-bold text-[#1b1c19] block mb-0.5">Morning</span>
                        <span className="text-[#3f4941]">{day.morningActivity}</span>
                      </div>
                      <div className="bg-[#f0eee9]/60 p-2.5 rounded-xl">
                        <span className="font-bold text-[#1b1c19] block mb-0.5">Afternoon</span>
                        <span className="text-[#3f4941]">{day.afternoonActivity}</span>
                      </div>
                      <div className="bg-[#f0eee9]/60 p-2.5 rounded-xl">
                        <span className="font-bold text-[#1b1c19] block mb-0.5">Evening</span>
                        <span className="text-[#3f4941]">{day.eveningActivity}</span>
                      </div>
                    </div>

                    {day.stayRecommendation && (
                      <div className="flex items-center space-x-2 text-xs text-[#733200] font-semibold pt-1">
                        <Hotel className="w-3.5 h-3.5" />
                        <span>Recommended Stay: {day.stayRecommendation}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

        </div>

        {/* Right Sidebar: Draft Summary + Concierge Submit */}
        <div className="space-y-8">
          
          {/* Live Draft Card */}
          <div className="bg-[#ffffff] p-6 rounded-3xl border border-[#e4e2dd] shadow-lg space-y-6 sticky top-28">
            <div className="border-b border-[#f0eee9] pb-4">
              <span className="text-xs font-semibold text-[#006b3e] uppercase tracking-wider block">
                Live Draft
              </span>
              <h3 className="font-serif text-xl font-semibold text-[#1b1c19]">
                Your Draft Itinerary
              </h3>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-[#3f4941]">
              <div className="flex justify-between py-2 border-b border-[#f0eee9]">
                <span className="text-[#6f7a70]">Duration:</span>
                <span className="font-semibold text-[#1b1c19]">{getDaysCount()} Days</span>
              </div>
              <div className="flex justify-between py-2 border-b border-[#f0eee9]">
                <span className="text-[#6f7a70]">Party:</span>
                <span className="font-semibold text-[#1b1c19]">{draft.travelers}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-[#f0eee9]">
                <span className="text-[#6f7a70]">Stay Style:</span>
                <span className="font-semibold text-[#1b1c19]">{draft.accommodationType}</span>
              </div>
              <div>
                <span className="text-[#6f7a70] block mb-1">Selected Regions:</span>
                <div className="flex flex-wrap gap-1">
                  {draft.selectedInterests.map((interest, i) => (
                    <span key={i} className="px-2 py-0.5 bg-[#f0eee9] text-[#00502d] text-[11px] font-medium rounded-md">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {submitted ? (
              <div className="bg-[#00502d] text-white p-4 rounded-2xl text-center space-y-2">
                <Check className="w-8 h-8 text-[#81d9a1] mx-auto" />
                <h4 className="font-serif text-lg font-semibold">Itinerary Received!</h4>
                <p className="text-xs text-[#bec9be]">
                  Our Senior Travel Concierge will contact you within 24 hours with exact villa availability and pricing.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitToConcierge} className="space-y-3 pt-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  className="w-full text-xs text-[#1b1c19] bg-[#f0eee9] px-3 py-2.5 rounded-xl border border-[#e4e2dd] focus:outline-none focus:ring-2 focus:ring-[#006b3e]"
                />
                <button
                  type="submit"
                  className="w-full py-3 bg-[#006b3e] hover:bg-[#00502d] text-white font-semibold text-xs sm:text-sm rounded-xl transition-all shadow flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Request Custom Quote</span>
                </button>
              </form>
            )}

            {/* Testimonial Card */}
            <div className="bg-[#f0eee9] p-4 rounded-2xl border border-[#e4e2dd] space-y-2 pt-4">
              <p className="text-xs text-[#3f4941] italic">
                "Ceylon Discovery crafted our honeymoon across Ceylon Tea Trails and Yala. The private guide was spectacular!"
              </p>
              <div className="flex items-center justify-between text-[11px] text-[#6f7a70]">
                <span className="font-semibold text-[#1b1c19]">— Sarah J. & Mark T.</span>
                <span className="text-[#733200]">★★★★★</span>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
