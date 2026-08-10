import React, { useState } from 'react';
import { BookingState, SampleItinerary, ViewTab } from '../types';
import { SAMPLE_ITINERARIES } from '../data/experiencesData';

interface CraftJourneyViewProps {
  onSelectTab: (tab: ViewTab) => void;
  preselectedExperience?: string;
}

export const CraftJourneyView: React.FC<CraftJourneyViewProps> = ({
  onSelectTab,
  preselectedExperience,
}) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  const [booking, setBooking] = useState<BookingState>({
    arrivalDate: '2024-11-10',
    departureDate: '2024-11-17',
    travelerType: 'Couple',
    travelerCount: 2,
    selectedExperiences: preselectedExperience ? [preselectedExperience] : ['Wildlife Safaris', 'Highland Tea Trails', 'Beach & Relaxation'],
    accommodationType: 'Boutique Luxury',
    pace: 'Balanced',
    selectedDestinations: ['Ella Tea Trails', 'Yala National Park', 'Mirissa Beaches'],
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    specialRequests: ''
  });

  const [isGeneratingAi, setIsGeneratingAi] = useState(false);
  const [aiItineraryText, setAiItineraryText] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const availableExperiences = [
    { id: 'Wildlife Safaris', label: 'Wildlife Safaris', icon: 'pets' },
    { id: 'Cultural Heritage', label: 'Cultural Heritage', icon: 'account_balance' },
    { id: 'Beach & Relaxation', label: 'Beach & Relaxation', icon: 'pool' },
    { id: 'Highland Tea Trails', label: 'Highland Tea Trails', icon: 'hiking' },
    { id: 'Adventure & Trekking', label: 'Adventure & Trekking', icon: 'landscape' },
    { id: 'Culinary Delights', label: 'Culinary Delights', icon: 'restaurant' },
  ];

  const toggleExperience = (expId: string) => {
    setBooking(prev => {
      const exists = prev.selectedExperiences.includes(expId);
      const updated = exists
        ? prev.selectedExperiences.filter(x => x !== expId)
        : [...prev.selectedExperiences, expId];
      return { ...prev, selectedExperiences: updated };
    });
  };

  const handleApplySampleItinerary = (itinerary: SampleItinerary) => {
    setBooking(prev => ({
      ...prev,
      selectedExperiences: itinerary.tags,
      specialRequests: `Interested in package: ${itinerary.title} (${itinerary.durationDays} Days)`
    }));
  };

  const calculateDays = () => {
    if (!booking.arrivalDate || !booking.departureDate) return 7;
    const start = new Date(booking.arrivalDate);
    const end = new Date(booking.departureDate);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 7;
  };

  const daysCount = calculateDays();
  const estimatedPrice = daysCount * booking.travelerCount * 180;

  const handleGenerateAiItinerary = async () => {
    setIsGeneratingAi(true);
    setAiItineraryText(null);

    // Call server AI endpoint or intelligent layout generator
    try {
      const response = await fetch('/api/generate-itinerary', {
        method: 'POST',
        headers: { 'Content-[#1b1c19]Type': 'application/json' },
        body: JSON.stringify({
          days: daysCount,
          travelerType: booking.travelerType,
          travelers: booking.travelerCount,
          experiences: booking.selectedExperiences,
          accommodation: booking.accommodationType,
          pace: booking.pace
        })
      });

      if (response.ok) {
        const data = await response.json();
        setAiItineraryText(data.itinerary || generateFallbackItinerary());
      } else {
        setAiItineraryText(generateFallbackItinerary());
      }
    } catch {
      setAiItineraryText(generateFallbackItinerary());
    } finally {
      setIsGeneratingAi(false);
    }
  };

  const generateFallbackItinerary = () => {
    return `✨ Custom ${daysCount}-Day ${booking.travelerType} Itinerary for Sri Lanka:\n\n` +
      `• Day 1-2: Cultural Heart - Arrival in Colombo, transfer to Sigiriya Rock Fortress & Kandy Tooth Relic.\n` +
      `• Day 3-4: Misty Tea Trails - Scenic Ceylon Railway ride to Ella, Little Adam's Peak & Nine Arch Bridge.\n` +
      `• Day 5: Wilderness Safari - Private 4x4 Jeep Safari in Yala National Park spotting leopards.\n` +
      `• Day 6-${daysCount}: Coastal Sunset - Golden beach relaxation in Mirissa & Galle Fort ramparts walk.`;
  };

  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen pt-28 pb-24 px-6 md:px-12 max-w-3xl mx-auto text-center font-body-md animate-fadeIn space-y-6">
        <div className="w-20 h-20 rounded-full bg-[#00502d]/10 text-[#00502d] flex items-center justify-center mx-auto mb-4">
          <span className="material-symbols-outlined text-4xl">check_circle</span>
        </div>
        <h1 className="font-display-lg-mobile md:font-headline-md text-3xl md:text-5xl font-garamond font-bold text-[#1b1c19]">
          Your Journey Has Been Crafted!
        </h1>
        <p className="font-body-md text-base text-[#3f4941] leading-relaxed max-w-xl mx-auto">
          Thank you, <span className="font-semibold text-[#1b1c19]">{booking.contactName || 'Valued Traveler'}</span>. Our senior travel architects have received your draft preferences and will email your personalized daily luxury itinerary within 24 hours.
        </p>

        <div className="bg-white p-6 rounded-2xl border border-[#bec9be] text-left space-y-3 shadow-sm max-w-lg mx-auto">
          <h3 className="font-headline-sm text-lg font-bold text-[#00502d]">Booking Request Summary</h3>
          <div className="text-xs space-y-1.5 text-[#3f4941]">
            <p><strong>Duration:</strong> {daysCount} Days ({booking.arrivalDate} to {booking.departureDate})</p>
            <p><strong>Party:</strong> {booking.travelerCount} {booking.travelerType} Travelers</p>
            <p><strong>Style:</strong> {booking.accommodationType} ({booking.pace} Pace)</p>
            <p><strong>Selected Focus:</strong> {booking.selectedExperiences.join(', ')}</p>
            <p><strong>Estimated Range:</strong> ${estimatedPrice} - ${Math.round(estimatedPrice * 1.25)} USD</p>
          </div>
        </div>

        <div className="pt-4 flex justify-center gap-4">
          <button
            onClick={() => onSelectTab('home')}
            className="bg-[#00502d] text-white px-8 py-3 rounded-full font-label-md text-sm font-semibold hover:bg-[#006b3e] transition-colors"
          >
            Return to Homepage
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 pb-24 px-6 md:px-12 max-w-7xl mx-auto font-body-md animate-fadeIn">
      {/* Top Main Heading */}
      <div className="max-w-3xl mb-8">
        <h1 className="font-display-lg-mobile md:font-display-lg text-4xl md:text-5xl text-[#1b1c19] font-garamond font-bold mb-3">
          Craft Your Journey
        </h1>
        <p className="font-body-md text-base text-[#3f4941] leading-relaxed">
          Tell us a little about your dream escape, and our travel architects will design your custom Sri Lankan itinerary.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Interactive Form Stepper (7 Columns) */}
        <div className="lg:col-span-7 bg-white p-6 md:p-8 rounded-3xl border border-[#bec9be] shadow-sm space-y-8">
          {/* Step Progress Indicator (1 to 4) */}
          <div className="flex items-center justify-between border-b border-[#f0eee9] pb-6">
            {[
              { num: 1, label: 'Dates & Travelers' },
              { num: 2, label: 'Experiences' },
              { num: 3, label: 'Stay & Pace' },
              { num: 4, label: 'Details & AI' }
            ].map((s) => (
              <div 
                key={s.num} 
                onClick={() => setStep(s.num as any)}
                className={`flex items-center gap-2 cursor-pointer transition-colors ${
                  step === s.num ? 'text-[#00502d]' : 'text-[#6f7a70]'
                }`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${
                  step === s.num ? 'bg-[#00502d] text-white' : 'bg-[#f5f3ee] text-[#3f4941]'
                }`}>
                  {s.num}
                </div>
                <span className="font-label-md text-xs font-semibold hidden sm:inline">{s.label}</span>
              </div>
            ))}
          </div>

          {/* STEP 1: Dates & Travelers */}
          {step === 1 && (
            <div className="space-y-6 animate-fadeIn">
              <h3 className="font-headline-sm text-2xl font-garamond font-bold text-[#1b1c19]">
                Step 1: When are you traveling?
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-[#3f4941] uppercase tracking-wider block mb-1">
                    Arrival Date
                  </label>
                  <input
                    type="date"
                    value={booking.arrivalDate}
                    onChange={e => setBooking({ ...booking, arrivalDate: e.target.value })}
                    className="w-full p-3 bg-[#f5f3ee] border border-[#bec9be] rounded-xl text-sm outline-none focus:border-[#00502d]"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-[#3f4941] uppercase tracking-wider block mb-1">
                    Departure Date
                  </label>
                  <input
                    type="date"
                    value={booking.departureDate}
                    onChange={e => setBooking({ ...booking, departureDate: e.target.value })}
                    className="w-full p-3 bg-[#f5f3ee] border border-[#bec9be] rounded-xl text-sm outline-none focus:border-[#00502d]"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-[#3f4941] uppercase tracking-wider block mb-2">
                  Who is traveling with you?
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {(['Solo', 'Couple', 'Family/Group'] as const).map(type => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setBooking({ ...booking, travelerType: type })}
                      className={`p-3 rounded-xl border font-label-md text-xs font-semibold transition-all ${
                        booking.travelerType === type
                          ? 'border-[#00502d] bg-[#00502d]/10 text-[#00502d]'
                          : 'border-[#bec9be] bg-[#f5f3ee] text-[#3f4941]'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-[#3f4941] uppercase tracking-wider block mb-1">
                  Number of Travelers ({booking.travelerCount})
                </label>
                <div className="flex items-center gap-4">
                  <button
                    type="button"
                    onClick={() => setBooking(p => ({ ...p, travelerCount: Math.max(1, p.travelerCount - 1) }))}
                    className="w-10 h-10 rounded-full border border-[#bec9be] bg-[#f5f3ee] flex items-center justify-center font-bold text-lg text-[#1b1c19] hover:bg-[#eae8e3]"
                  >
                    -
                  </button>
                  <span className="font-headline-sm text-2xl font-bold text-[#00502d]">{booking.travelerCount}</span>
                  <button
                    type="button"
                    onClick={() => setBooking(p => ({ ...p, travelerCount: p.travelerCount + 1 }))}
                    className="w-10 h-10 rounded-full border border-[#bec9be] bg-[#f5f3ee] flex items-center justify-center font-bold text-lg text-[#1b1c19] hover:bg-[#eae8e3]"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="bg-[#00502d] text-white px-6 py-2.5 rounded-full font-label-md text-sm font-semibold hover:bg-[#006b3e] transition-colors flex items-center gap-2"
                >
                  <span>Next: Experiences</span>
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Experiences */}
          {step === 2 && (
            <div className="space-y-6 animate-fadeIn">
              <h3 className="font-headline-sm text-2xl font-garamond font-bold text-[#1b1c19]">
                Step 2: What experiences inspire you?
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {availableExperiences.map(exp => {
                  const selected = booking.selectedExperiences.includes(exp.id);
                  return (
                    <div
                      key={exp.id}
                      onClick={() => toggleExperience(exp.id)}
                      className={`p-4 rounded-xl border cursor-pointer transition-all flex flex-col items-center text-center space-y-2 ${
                        selected
                          ? 'border-[#00502d] bg-[#00502d]/10 text-[#00502d] shadow-sm'
                          : 'border-[#bec9be] bg-[#f5f3ee] text-[#3f4941] hover:bg-[#eae8e3]'
                      }`}
                    >
                      <span className="material-symbols-outlined text-2xl">{exp.icon}</span>
                      <span className="font-label-md text-xs font-semibold">{exp.label}</span>
                    </div>
                  );
                })}
              </div>

              <div className="pt-4 flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-5 py-2.5 rounded-full border border-[#bec9be] text-[#3f4941] font-label-md text-sm hover:bg-[#f5f3ee]"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="bg-[#00502d] text-white px-6 py-2.5 rounded-full font-label-md text-sm font-semibold hover:bg-[#006b3e] transition-colors flex items-center gap-2"
                >
                  <span>Next: Stay & Pace</span>
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Accommodation & Pace */}
          {step === 3 && (
            <div className="space-y-6 animate-fadeIn">
              <h3 className="font-headline-sm text-2xl font-garamond font-bold text-[#1b1c19]">
                Step 3: Preferred Accommodations & Travel Pace
              </h3>

              <div>
                <label className="text-xs font-semibold text-[#3f4941] uppercase tracking-wider block mb-2">
                  Accommodation Style
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {(['Boutique Luxury', 'Eco Lodges', 'Heritage Hotels'] as const).map(style => (
                    <button
                      key={style}
                      type="button"
                      onClick={() => setBooking({ ...booking, accommodationType: style })}
                      className={`p-3 rounded-xl border text-left font-label-md text-xs font-semibold transition-all ${
                        booking.accommodationType === style
                          ? 'border-[#00502d] bg-[#00502d]/10 text-[#00502d]'
                          : 'border-[#bec9be] bg-[#f5f3ee] text-[#3f4941]'
                      }`}
                    >
                      {style}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-[#3f4941] uppercase tracking-wider block mb-2">
                  Preferred Daily Pace
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {(['Relaxed', 'Balanced', 'Active Explorer'] as const).map(p => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => setBooking({ ...booking, pace: p })}
                      className={`p-3 rounded-xl border font-label-md text-xs font-semibold transition-all ${
                        booking.pace === p
                          ? 'border-[#00502d] bg-[#00502d]/10 text-[#00502d]'
                          : 'border-[#bec9be] bg-[#f5f3ee] text-[#3f4941]'
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-5 py-2.5 rounded-full border border-[#bec9be] text-[#3f4941] font-label-md text-sm hover:bg-[#f5f3ee]"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={() => setStep(4)}
                  className="bg-[#00502d] text-white px-6 py-2.5 rounded-full font-label-md text-sm font-semibold hover:bg-[#006b3e] transition-colors flex items-center gap-2"
                >
                  <span>Next: Details & AI</span>
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: Details & AI Itinerary Generation */}
          {step === 4 && (
            <form onSubmit={handleSubmitBooking} className="space-y-6 animate-fadeIn">
              <h3 className="font-headline-sm text-2xl font-garamond font-bold text-[#1b1c19]">
                Step 4: Contact Details & Instant AI Customizer
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="text-xs font-semibold text-[#3f4941] uppercase tracking-wider block mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={booking.contactName}
                    onChange={e => setBooking({ ...booking, contactName: e.target.value })}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full p-3 bg-[#f5f3ee] border border-[#bec9be] rounded-xl text-sm outline-none focus:border-[#00502d]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-[#3f4941] uppercase tracking-wider block mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={booking.contactEmail}
                      onChange={e => setBooking({ ...booking, contactEmail: e.target.value })}
                      placeholder="sarah@example.com"
                      className="w-full p-3 bg-[#f5f3ee] border border-[#bec9be] rounded-xl text-sm outline-none focus:border-[#00502d]"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-[#3f4941] uppercase tracking-wider block mb-1">
                      Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      value={booking.contactPhone}
                      onChange={e => setBooking({ ...booking, contactPhone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="w-full p-3 bg-[#f5f3ee] border border-[#bec9be] rounded-xl text-sm outline-none focus:border-[#00502d]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#3f4941] uppercase tracking-wider block mb-1">
                    Special Requests & Preferences
                  </label>
                  <textarea
                    rows={3}
                    value={booking.specialRequests}
                    onChange={e => setBooking({ ...booking, specialRequests: e.target.value })}
                    placeholder="E.g., Honeymoon trip, dietary requirements, preferred private driver..."
                    className="w-full p-3 bg-[#f5f3ee] border border-[#bec9be] rounded-xl text-sm outline-none focus:border-[#00502d]"
                  ></textarea>
                </div>
              </div>

              {/* AI Itinerary Customizer Section */}
              <div className="bg-[#f5f3ee] p-5 rounded-2xl border border-[#bec9be] space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#00502d]">auto_awesome</span>
                    <span className="font-headline-sm text-base font-bold text-[#00502d]">
                      Ceylon AI Itinerary Architect
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={handleGenerateAiItinerary}
                    disabled={isGeneratingAi}
                    className="bg-[#00502d] text-white px-4 py-2 rounded-full font-label-md text-xs font-semibold hover:bg-[#006b3e] transition-colors disabled:opacity-50"
                  >
                    {isGeneratingAi ? 'Generating...' : 'Preview AI Route'}
                  </button>
                </div>

                {aiItineraryText && (
                  <div className="bg-white p-4 rounded-xl border border-[#bec9be] text-xs text-[#1b1c19] whitespace-pre-line font-mono max-h-48 overflow-y-auto">
                    {aiItineraryText}
                  </div>
                )}
              </div>

              <div className="pt-4 flex justify-between items-center">
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="px-5 py-2.5 rounded-full border border-[#bec9be] text-[#3f4941] font-label-md text-sm hover:bg-[#f5f3ee]"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="bg-[#733200] text-white px-8 py-3.5 rounded-full font-label-md text-sm font-semibold hover:bg-[#984400] transition-colors shadow-md flex items-center gap-2"
                >
                  <span>Submit Custom Booking</span>
                  <span className="material-symbols-outlined text-base">send</span>
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Right Sidebar (5 Columns - Matching screenshot 3) */}
        <div className="lg:col-span-5 space-y-8">
          {/* Your Draft Itinerary Widget */}
          <div className="bg-white p-6 rounded-3xl border border-[#bec9be] shadow-sm space-y-6">
            <div className="border-b border-[#f0eee9] pb-4 flex justify-between items-center">
              <div>
                <span className="text-[10px] text-[#00502d] font-bold uppercase tracking-wider block">
                  Interactive Plan Summary
                </span>
                <h3 className="font-headline-sm text-xl font-bold font-garamond text-[#1b1c19]">
                  Your Draft Itinerary
                </h3>
              </div>
              <span className="px-3 py-1 bg-[#00502d]/10 text-[#00502d] text-xs font-bold rounded-full">
                {daysCount} Days
              </span>
            </div>

            <div className="space-y-4 text-xs">
              <div className="flex justify-between py-2 border-b border-[#f0eee9]">
                <span className="text-[#3f4941]">Travel Dates:</span>
                <span className="font-semibold text-[#1b1c19]">{booking.arrivalDate} to {booking.departureDate}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-[#f0eee9]">
                <span className="text-[#3f4941]">Travelers:</span>
                <span className="font-semibold text-[#1b1c19]">{booking.travelerCount} ({booking.travelerType})</span>
              </div>
              <div className="flex justify-between py-2 border-b border-[#f0eee9]">
                <span className="text-[#3f4941]">Style & Pace:</span>
                <span className="font-semibold text-[#1b1c19]">{booking.accommodationType} • {booking.pace}</span>
              </div>
              <div>
                <span className="text-[#3f4941] block mb-2">Experiences Included:</span>
                <div className="flex flex-wrap gap-1.5">
                  {booking.selectedExperiences.map(e => (
                    <span key={e} className="px-2.5 py-1 bg-[#f5f3ee] text-[#00502d] font-semibold text-[11px] rounded-full border border-[#bec9be]">
                      {e}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-[#f5f3ee] rounded-2xl border border-[#e4e2dd] mt-4">
                <span className="text-[10px] text-[#6f7a70] uppercase font-bold block">Estimated Package Price</span>
                <p className="font-headline-sm text-2xl text-[#00502d] font-bold mt-0.5">
                  ${estimatedPrice} - ${Math.round(estimatedPrice * 1.2)} USD
                </p>
                <p className="text-[11px] text-[#3f4941] mt-1">Includes luxury hotels, private chauffeured vehicle, safari jeeps & entrance permits.</p>
              </div>
            </div>
          </div>

          {/* Sample Itineraries Drawer Trigger / Inspiration Cards */}
          <div className="bg-white p-6 rounded-3xl border border-[#bec9be] shadow-sm space-y-4">
            <h4 className="font-headline-sm text-lg font-bold font-garamond text-[#1b1c19]">
              Popular Pre-Packaged Circuits
            </h4>
            <div className="space-y-3">
              {SAMPLE_ITINERARIES.map(item => (
                <div
                  key={item.id}
                  onClick={() => handleApplySampleItinerary(item)}
                  className="p-3.5 rounded-2xl bg-[#f5f3ee] border border-[#e4e2dd] hover:border-[#00502d] cursor-pointer transition-all space-y-1 group"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-headline-sm text-sm font-bold text-[#1b1c19] group-hover:text-[#00502d]">
                      {item.title}
                    </span>
                    <span className="text-[11px] font-bold text-[#00502d]">{item.durationDays} Days</span>
                  </div>
                  <p className="text-[11px] text-[#3f4941] line-clamp-1">{item.description}</p>
                  <div className="flex justify-between items-center pt-1">
                    <span className="text-[10px] text-[#6f7a70] font-semibold">{item.priceEstimate}</span>
                    <span className="text-[11px] text-[#00502d] font-bold flex items-center gap-0.5 group-hover:underline">
                      Use Template
                      <span className="material-symbols-outlined text-xs">add_circle</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Trust Testimonial Card (exact to screenshot 3!) */}
          <div className="bg-[#ffffff] p-6 rounded-3xl border border-[#bec9be] shadow-sm space-y-4">
            <div className="flex items-center gap-1 text-[#f59e0b]">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="material-symbols-outlined text-lg fill">star</span>
              ))}
            </div>

            <p className="font-body-md text-xs md:text-sm text-[#3f4941] italic leading-relaxed">
              "CeylonDiscovery organized the perfect honeymoon. Every hotel was exquisite, and our private guide made us feel like family."
            </p>

            <div className="flex items-center gap-3 pt-2 border-t border-[#f0eee9]">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYo_CqFeQ5gw7l0Yhd8VILhHZRZgCCTLa2-su82DGk8EeT2SbXq-j37vdRzfJKO3B42V1JzBU2zjS1GVWtf-WXh86y7VHVbKd_hiVaqIzyagQHH3hDn8sqNoJLLu5wM8Ho72zJTE-guX_WprmfR6DTGMfzxhWH7rO72uaADwNkesX_UmZ0lw4VpPVO1cXVE5_4OXpQA3SHzDtqsCZLuNF3aQgcPEM1oqnOFB3nf2bWviOw-jM9NH3BWw"
                alt="Sarah J. avatar"
                className="w-10 h-10 rounded-full object-cover border border-[#bec9be]"
              />
              <div>
                <h5 className="font-headline-sm text-sm font-bold text-[#1b1c19]">Sarah J.</h5>
                <span className="text-[10px] text-[#6f7a70]">Traveled October 2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
