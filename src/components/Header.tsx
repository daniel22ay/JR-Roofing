import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { COMPANY_INFO, SERVICES } from '../data/roofingData';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Menu, 
  X, 
  ChevronDown, 
  ShieldCheck, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

interface HeaderProps {
  currentTab: string;
  onNavigate: (tab: string, serviceId?: string) => void;
  onOpenEstimateModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentTab, onNavigate, onOpenEstimateModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (tab: string, serviceId?: string) => {
    onNavigate(tab, serviceId);
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white transition-all duration-300">
      {/* Top Announcement & Emergency Bar */}
      <div className="bg-[#0D477D] text-white text-xs py-2 px-4 border-b border-blue-900/50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          {/* Service Area & Status */}
          <div className="flex items-center gap-4 text-slate-200">
            <span className="flex items-center gap-1.5 font-medium">
              <MapPin className="w-3.5 h-3.5 text-[#F6B02E]" />
              Pompano Beach & South Florida (Broward, Palm Beach, Miami-Dade)
            </span>
            <span className="hidden lg:inline text-slate-400">|</span>
            <span className="hidden lg:flex items-center gap-1.5 text-slate-200">
              <ShieldCheck className="w-3.5 h-3.5 text-[#F6B02E]" />
              Florida Licensed & Insured
            </span>
          </div>

          {/* Bilingual Phones & Fast Contact */}
          <div className="flex items-center gap-4 text-xs font-semibold">
            <a 
              href={`tel:${COMPANY_INFO.phoneRaw}`} 
              className="flex items-center gap-1.5 text-white hover:text-[#F6B02E] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#F6B02E]" />
              <span>Call: <strong className="text-[#F6B02E]">{COMPANY_INFO.phone}</strong></span>
            </a>
            <span className="text-slate-500">|</span>
            <a 
              href={`tel:${COMPANY_INFO.spanishPhoneRaw}`} 
              className="hidden sm:flex items-center gap-1.5 text-slate-200 hover:text-[#F6B02E] transition-colors"
              title="Línea en Español"
            >
              <span className="bg-[#13599A] text-[10px] uppercase font-bold px-1.5 py-0.5 rounded text-amber-300">Español</span>
              <span>{COMPANY_INFO.spanishPhone}</span>
            </a>
            <span className="hidden md:inline text-slate-500">|</span>
            <span className="hidden md:flex items-center gap-1 text-emerald-300">
              <Clock className="w-3.5 h-3.5" />
              <span>Mon-Sat 7am-6pm</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className={`transition-all duration-200 border-b border-slate-100 ${isScrolled ? 'shadow-md py-2.5' : 'py-3.5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <div 
            onClick={() => handleNavClick('home')} 
            className="cursor-pointer focus:outline-none"
          >
            <Logo />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            <button
              onClick={() => handleNavClick('home')}
              className={`px-3 py-2 text-sm font-semibold rounded-md transition-colors ${
                currentTab === 'home'
                  ? 'text-[#13599A] bg-blue-50 font-bold'
                  : 'text-slate-700 hover:text-[#13599A] hover:bg-slate-50'
              }`}
            >
              Home
            </button>

            <button
              onClick={() => handleNavClick('about')}
              className={`px-3 py-2 text-sm font-semibold rounded-md transition-colors ${
                currentTab === 'about'
                  ? 'text-[#13599A] bg-blue-50 font-bold'
                  : 'text-slate-700 hover:text-[#13599A] hover:bg-slate-50'
              }`}
            >
              About Us
            </button>

            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesDropdownOpen(true)}
              onMouseLeave={() => setIsServicesDropdownOpen(false)}
            >
              <button
                onClick={() => handleNavClick('services')}
                className={`px-3 py-2 text-sm font-semibold rounded-md flex items-center gap-1 transition-colors ${
                  currentTab === 'services' || currentTab === 'service-detail'
                    ? 'text-[#13599A] bg-blue-50 font-bold'
                    : 'text-slate-700 hover:text-[#13599A] hover:bg-slate-50'
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {isServicesDropdownOpen && (
                <div className="absolute top-full left-0 w-72 bg-white rounded-xl shadow-xl border border-slate-100 py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="px-4 py-2 border-b border-slate-100 mb-1">
                    <button
                      onClick={() => handleNavClick('services')}
                      className="text-xs font-bold uppercase tracking-wider text-[#13599A] hover:underline flex items-center justify-between w-full"
                    >
                      <span>Explore All Services</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  {SERVICES.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => handleNavClick('service-detail', s.id)}
                      className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-blue-50/70 hover:text-[#13599A] flex items-center justify-between group transition-colors"
                    >
                      <div>
                        <div className="font-semibold">{s.name}</div>
                        <div className="text-[11px] text-slate-500 line-clamp-1">{s.shortDescription}</div>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-[#13599A] transition-colors flex-shrink-0 ml-2" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavClick('process')}
              className={`px-3 py-2 text-sm font-semibold rounded-md transition-colors ${
                currentTab === 'process'
                  ? 'text-[#13599A] bg-blue-50 font-bold'
                  : 'text-slate-700 hover:text-[#13599A] hover:bg-slate-50'
              }`}
            >
              Our Process
            </button>

            <button
              onClick={() => handleNavClick('reviews')}
              className={`px-3 py-2 text-sm font-semibold rounded-md transition-colors ${
                currentTab === 'reviews'
                  ? 'text-[#13599A] bg-blue-50 font-bold'
                  : 'text-slate-700 hover:text-[#13599A] hover:bg-slate-50'
              }`}
            >
              Reviews
            </button>

            <button
              onClick={() => handleNavClick('faq')}
              className={`px-3 py-2 text-sm font-semibold rounded-md transition-colors ${
                currentTab === 'faq'
                  ? 'text-[#13599A] bg-blue-50 font-bold'
                  : 'text-slate-700 hover:text-[#13599A] hover:bg-slate-50'
              }`}
            >
              FAQ
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className={`px-3 py-2 text-sm font-semibold rounded-md transition-colors ${
                currentTab === 'contact'
                  ? 'text-[#13599A] bg-blue-50 font-bold'
                  : 'text-slate-700 hover:text-[#13599A] hover:bg-slate-50'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="flex items-center gap-2 px-3.5 py-2 text-sm font-bold text-[#13599A] hover:bg-blue-50 rounded-lg transition-colors border border-blue-200"
            >
              <Phone className="w-4 h-4 text-[#F6B02E]" />
              <span className="hidden md:inline">{COMPANY_INFO.phone}</span>
              <span className="md:hidden">Call</span>
            </a>

            <button
              onClick={onOpenEstimateModal}
              className="relative group overflow-hidden bg-gradient-to-r from-[#F6B02E] to-[#D99516] hover:from-[#e59f14] hover:to-[#c6820c] text-slate-900 font-extrabold px-4 xl:px-5 py-2.5 rounded-lg shadow-sm hover:shadow-md transition-all flex items-center gap-2 text-sm cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-slate-900" />
              <span>Get Free Quote</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenEstimateModal}
              className="bg-[#F6B02E] text-slate-900 text-xs font-bold px-3 py-1.5 rounded-md sm:hidden"
            >
              Quote
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="space-y-1">
            <button
              onClick={() => handleNavClick('home')}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-base font-semibold ${
                currentTab === 'home' ? 'bg-blue-50 text-[#13599A]' : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              Home
            </button>

            <button
              onClick={() => handleNavClick('about')}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-base font-semibold ${
                currentTab === 'about' ? 'bg-blue-50 text-[#13599A]' : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              About Us
            </button>

            {/* Mobile Services Accordion */}
            <div className="py-1">
              <button
                onClick={() => handleNavClick('services')}
                className="w-full text-left px-3 py-2.5 rounded-lg text-base font-semibold text-slate-700 hover:bg-slate-50 flex items-center justify-between"
              >
                <span>Services</span>
                <span className="text-xs text-[#13599A] font-bold">View All →</span>
              </button>
              <div className="pl-4 pr-2 space-y-1 mt-1 border-l-2 border-blue-100 ml-3">
                {SERVICES.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => handleNavClick('service-detail', s.id)}
                    className="w-full text-left py-2 px-2 text-sm text-slate-600 hover:text-[#13599A] font-medium block"
                  >
                    • {s.name}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => handleNavClick('process')}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-base font-semibold ${
                currentTab === 'process' ? 'bg-blue-50 text-[#13599A]' : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              Our Process
            </button>

            <button
              onClick={() => handleNavClick('reviews')}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-base font-semibold ${
                currentTab === 'reviews' ? 'bg-blue-50 text-[#13599A]' : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              Customer Reviews (5.0 ★)
            </button>

            <button
              onClick={() => handleNavClick('faq')}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-base font-semibold ${
                currentTab === 'faq' ? 'bg-blue-50 text-[#13599A]' : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              FAQ
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-base font-semibold ${
                currentTab === 'contact' ? 'bg-blue-50 text-[#13599A]' : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              Contact Us
            </button>
          </div>

          {/* Quick Call Box in Mobile Drawer */}
          <div className="mt-5 pt-4 border-t border-slate-200 space-y-2">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#13599A] text-white font-bold text-sm shadow-sm"
            >
              <Phone className="w-4 h-4 text-[#F6B02E]" />
              <span>Call Primary: {COMPANY_INFO.phone}</span>
            </a>
            <a
              href={`tel:${COMPANY_INFO.spanishPhoneRaw}`}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-100 text-slate-800 font-semibold text-xs border border-slate-200"
            >
              <span className="font-bold text-[#13599A]">Español:</span>
              <span>{COMPANY_INFO.spanishPhone}</span>
            </a>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenEstimateModal();
              }}
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#F6B02E] to-[#D99516] text-slate-900 font-extrabold text-sm shadow-sm text-center"
            >
              Request Free Estimate
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
