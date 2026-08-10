import { useState, useEffect } from 'react';
import { ViewTab, Destination } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { DestinationModal } from './components/DestinationModal';
import { HomeView } from './views/HomeView';
import { DestinationsView } from './views/DestinationsView';
import { ExperiencesView } from './views/ExperiencesView';
import { CultureView } from './views/CultureView';
import { AboutView } from './views/AboutView';
import { CraftJourneyView } from './views/CraftJourneyView';

export function App() {
  const [currentTab, setCurrentTab] = useState<ViewTab>('home');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedDestinationModal, setSelectedDestinationModal] = useState<Destination | null>(null);
  const [preselectedExperience, setPreselectedExperience] = useState<string | undefined>(undefined);
  const [destinationFilter] = useState<string | undefined>(undefined);

  // Scroll to top when tab changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentTab]);

  const handleSelectTab = (tab: ViewTab) => {
    setCurrentTab(tab);
  };

  const handlePlanTrip = (tagOrDest?: string) => {
    setPreselectedExperience(tagOrDest);
    setCurrentTab('craft-journey');
  };

  const handleExploreTours = (query?: string) => {
    if (query) {
      setIsSearchOpen(true);
    } else {
      setCurrentTab('destinations');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fbf9f4] text-[#1b1c19] selection:bg-[#00502d] selection:text-white">
      {/* Top Header Navigation Bar */}
      <Header
        currentTab={currentTab}
        onSelectTab={handleSelectTab}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentTab === 'home' && (
          <HomeView
            onSelectTab={handleSelectTab}
            onSelectDestination={(dest) => setSelectedDestinationModal(dest)}
            onExploreTours={handleExploreTours}
          />
        )}

        {currentTab === 'destinations' && (
          <DestinationsView
            onSelectDestination={(dest) => setSelectedDestinationModal(dest)}
            onPlanTrip={handlePlanTrip}
            initialFilter={destinationFilter}
          />
        )}

        {currentTab === 'experiences' && (
          <ExperiencesView
            onPlanTrip={handlePlanTrip}
            onSelectTab={handleSelectTab}
          />
        )}

        {currentTab === 'culture' && (
          <CultureView
            onPlanTrip={handlePlanTrip}
            onSelectTab={handleSelectTab}
          />
        )}

        {currentTab === 'about' && (
          <AboutView
            onSelectTab={handleSelectTab}
          />
        )}

        {currentTab === 'craft-journey' && (
          <CraftJourneyView
            onSelectTab={handleSelectTab}
            preselectedExperience={preselectedExperience}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onSelectTab={handleSelectTab}
        compact={currentTab === 'craft-journey'}
      />

      {/* Global Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectDestination={(dest) => {
          setSelectedDestinationModal(dest);
        }}
      />

      {/* Destination Detail Modal */}
      <DestinationModal
        destination={selectedDestinationModal}
        onClose={() => setSelectedDestinationModal(null)}
        onPlanTrip={(destName) => handlePlanTrip(destName)}
      />
    </div>
  );
}

export default App;
