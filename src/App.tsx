import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';
import { EstimateModal } from './components/EstimateModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { ProcessPage } from './pages/ProcessPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { FaqPage } from './pages/FaqPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string>('shingle-roofing');
  const [isEstimateModalOpen, setIsEstimateModalOpen] = useState<boolean>(false);

  // Sync hash routing if present
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash.startsWith('service/')) {
        const id = hash.replace('service/', '');
        setSelectedServiceId(id);
        setCurrentTab('service-detail');
      } else if (['home', 'about', 'services', 'process', 'reviews', 'faq', 'contact'].includes(hash)) {
        setCurrentTab(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (tab: string, serviceId?: string) => {
    if (serviceId) {
      setSelectedServiceId(serviceId);
      window.location.hash = `service/${serviceId}`;
      setCurrentTab('service-detail');
    } else {
      window.location.hash = tab === 'home' ? '' : tab;
      setCurrentTab(tab);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenEstimateModal = () => {
    setIsEstimateModalOpen(true);
  };

  const handleCloseEstimateModal = () => {
    setIsEstimateModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#232323] antialiased">
      {/* Top Header */}
      <Header
        currentTab={currentTab}
        onNavigate={handleNavigate}
        onOpenEstimateModal={handleOpenEstimateModal}
      />

      {/* Main Content Area */}
      <main className="flex-1 pb-16 md:pb-0">
        {currentTab === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenEstimateModal={handleOpenEstimateModal}
          />
        )}

        {currentTab === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenEstimateModal={handleOpenEstimateModal}
          />
        )}

        {currentTab === 'services' && (
          <ServicesPage
            onNavigate={handleNavigate}
            onOpenEstimateModal={handleOpenEstimateModal}
          />
        )}

        {currentTab === 'service-detail' && (
          <ServiceDetailPage
            serviceId={selectedServiceId}
            onNavigate={handleNavigate}
            onOpenEstimateModal={handleOpenEstimateModal}
          />
        )}

        {currentTab === 'process' && (
          <ProcessPage
            onOpenEstimateModal={handleOpenEstimateModal}
          />
        )}

        {currentTab === 'reviews' && (
          <ReviewsPage
            onOpenEstimateModal={handleOpenEstimateModal}
          />
        )}

        {currentTab === 'faq' && (
          <FaqPage
            onOpenEstimateModal={handleOpenEstimateModal}
          />
        )}

        {currentTab === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenEstimateModal={handleOpenEstimateModal}
      />

      {/* Persistent Mobile Sticky Bar */}
      <MobileBottomBar
        onOpenEstimateModal={handleOpenEstimateModal}
      />

      {/* Interactive Free Estimate Modal */}
      <EstimateModal
        isOpen={isEstimateModalOpen}
        onClose={handleCloseEstimateModal}
        defaultService={selectedServiceId}
      />
    </div>
  );
}
