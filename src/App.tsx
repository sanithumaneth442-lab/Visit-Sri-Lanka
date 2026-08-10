import React, { useState, useEffect } from 'react';
import { ViewType, Destination } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeView } from './components/HomeView';
import { DestinationsView } from './components/DestinationsView';
import { ExperiencesView } from './components/ExperiencesView';
import { PlanTripView } from './components/PlanTripView';
import { CultureView } from './components/CultureView';
import { AboutView } from './components/AboutView';
import { DestinationModal } from './components/DestinationModal';
import { AIAssistantModal } from './components/AIAssistantModal';
import { Search, X, MapPin } from 'lucide-react';
import { DESTINATIONS } from './data/destinations';

export default function App() {
  const [activeView, setActiveView] = useState<ViewType>('home');
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isAIOpen, setIsAIOpen] = useState(false);

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeView]);

  const handleNavigate = (view: ViewType) => {
    setActiveView(view);
  };

  const handleSelectDestination = (dest: Destination) => {
    setSelectedDestination(dest);
  };

  const searchResults = DESTINATIONS.filter((d) =>
    d.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    d.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
    d.region.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#fbf9f4] text-[#1b1c19] font-sans antialiased selection:bg-[#006b3e] selection:text-white">
      
      {/* Navigation Bar */}
      <Navbar
        activeView={activeView}
        onNavigate={handleNavigate}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenAI={() => setIsAIOpen(true)}
      />

      {/* Main View Router */}
      <main className="flex-1">
        {activeView === 'home' && (
          <HomeView
            onNavigate={handleNavigate}
            onSelectDestination={handleSelectDestination}
            onOpenAI={() => setIsAIOpen(true)}
          />
        )}

        {activeView === 'destinations' && (
          <DestinationsView
            onSelectDestination={handleSelectDestination}
            onNavigate={handleNavigate}
          />
        )}

        {activeView === 'experiences' && (
          <ExperiencesView
            onNavigate={handleNavigate}
            onOpenAI={() => setIsAIOpen(true)}
          />
        )}

        {activeView === 'plan' && (
          <PlanTripView
            onNavigate={handleNavigate}
          />
        )}

        {activeView === 'culture' && (
          <CultureView
            onNavigate={handleNavigate}
          />
        )}

        {activeView === 'about' && (
          <AboutView
            onNavigate={handleNavigate}
          />
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Destination Detail Modal */}
      <DestinationModal
        destination={selectedDestination}
        onClose={() => setSelectedDestination(null)}
        onNavigate={handleNavigate}
      />

      {/* AI Assistant Concierge Modal */}
      <AIAssistantModal
        isOpen={isAIOpen}
        onClose={() => setIsAIOpen(false)}
      />

      {/* Global Search Overlay Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-start justify-center pt-20 p-4 animate-in fade-in duration-200">
          <div className="bg-[#ffffff] w-full max-w-2xl rounded-3xl p-6 shadow-2xl border border-[#e4e2dd] space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#f0eee9]">
              <div className="flex items-center space-x-3 flex-1">
                <Search className="w-5 h-5 text-[#006b3e]" />
                <input
                  type="text"
                  autoFocus
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search destinations, tea estates, safaris, beaches..."
                  className="w-full text-sm sm:text-base text-[#1b1c19] placeholder-[#6f7a70] focus:outline-none bg-transparent"
                />
              </div>
              <button
                onClick={() => setIsSearchOpen(false)}
                className="p-1 rounded-full text-[#6f7a70] hover:text-[#1b1c19]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Results List */}
            <div className="max-h-[350px] overflow-y-auto space-y-2 pt-2">
              {searchResults.length > 0 ? (
                searchResults.map((dest) => (
                  <div
                    key={dest.id}
                    onClick={() => {
                      setIsSearchOpen(false);
                      setSelectedDestination(dest);
                    }}
                    className="cursor-pointer p-3 rounded-xl hover:bg-[#f0eee9] flex items-center justify-between transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <img
                        src={dest.image}
                        alt={dest.alt}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div>
                        <h4 className="font-serif font-semibold text-sm text-[#1b1c19]">
                          {dest.title}
                        </h4>
                        <span className="text-xs text-[#6f7a70] flex items-center space-x-1">
                          <MapPin className="w-3 h-3 text-[#006b3e]" />
                          <span>{dest.region} • {dest.category}</span>
                        </span>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-[#006b3e] bg-[#f0eee9] px-2.5 py-1 rounded-md">
                      View
                    </span>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-xs text-[#6f7a70]">
                  No matching destinations found for "{searchQuery}".
                </div>
              )}
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
