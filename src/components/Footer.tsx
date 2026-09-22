import React from 'react';
import { Logo } from './Logo';
import { COMPANY_INFO, SERVICES } from '../data/roofingData';
import { Phone, Mail, MapPin, Clock, ShieldCheck, Award, ArrowUp, Star } from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: string, serviceId?: string) => void;
  onOpenEstimateModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenEstimateModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#092C4F] text-slate-300 pt-16 pb-12 border-t-4 border-[#F6B02E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Column 1 & 2: Brand & Identity */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="light" />
            <p className="text-sm text-slate-300 max-w-md leading-relaxed mt-3">
              <strong className="text-white font-semibold">“Protecting Your Home Starts at the Top.”</strong> JR Roofing Solutions is South Florida's dedicated roofing contractor based in Pompano Beach. We deliver superior craftsmanship across shingle, tile, metal, and commercial roofing systems built for hurricane durability.
            </p>

            {/* Google Rating Badge */}
            <div className="inline-flex items-center gap-3 bg-slate-900/60 p-3 rounded-xl border border-slate-700/60">
              <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center font-black text-slate-900 shadow">
                <span className="text-lg text-blue-600 font-bold">G</span>
              </div>
              <div>
                <div className="flex items-center gap-1 text-[#F6B02E]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                  <span className="text-white font-bold text-sm ml-1">5.0</span>
                </div>
                <div className="text-xs text-slate-400">Verified Google Customer Reviews</div>
              </div>
            </div>

            {/* License Note */}
            <div className="flex items-start gap-2.5 text-xs text-slate-300 bg-blue-950/40 p-3 rounded-lg border border-blue-900/50">
              <ShieldCheck className="w-4 h-4 text-[#F6B02E] flex-shrink-0 mt-0.5" />
              <span>
                <strong className="text-white">Licensed & Insured:</strong> State Certified Florida Roofing Contractor. All work complies with the Florida Building Code & High-Velocity Hurricane Zone (HVHZ) requirements.
              </span>
            </div>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-white font-heading font-bold text-base mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#F6B02E]"></span>
              Our Services
            </h3>
            <ul className="space-y-2 text-sm">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => {
                      onNavigate('service-detail', s.id);
                      scrollToTop();
                    }}
                    className="hover:text-[#F6B02E] transition-colors text-left"
                  >
                    {s.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Quick Links */}
          <div>
            <h3 className="text-white font-heading font-bold text-base mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#F6B02E]"></span>
              Company
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => { onNavigate('home'); scrollToTop(); }} className="hover:text-[#F6B02E] transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => { onNavigate('about'); scrollToTop(); }} className="hover:text-[#F6B02E] transition-colors">
                  About JR Roofing
                </button>
              </li>
              <li>
                <button onClick={() => { onNavigate('process'); scrollToTop(); }} className="hover:text-[#F6B02E] transition-colors">
                  Our Roofing Process
                </button>
              </li>
              <li>
                <button onClick={() => { onNavigate('reviews'); scrollToTop(); }} className="hover:text-[#F6B02E] transition-colors">
                  Verified Reviews
                </button>
              </li>
              <li>
                <button onClick={() => { onNavigate('faq'); scrollToTop(); }} className="hover:text-[#F6B02E] transition-colors">
                  Roofing FAQs
                </button>
              </li>
              <li>
                <button onClick={() => { onNavigate('contact'); scrollToTop(); }} className="hover:text-[#F6B02E] transition-colors">
                  Contact & Location
                </button>
              </li>
              <li>
                <button onClick={onOpenEstimateModal} className="text-[#F6B02E] font-bold hover:underline">
                  Request Free Estimate →
                </button>
              </li>
            </ul>
          </div>

          {/* Column 5: Contact & Location */}
          <div>
            <h3 className="text-white font-heading font-bold text-base mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#F6B02E]"></span>
              Get in Touch
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F6B02E] flex-shrink-0 mt-1" />
                <div>
                  <div className="text-white font-medium">{COMPANY_INFO.address.street}</div>
                  <div className="text-xs text-slate-400">{COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} {COMPANY_INFO.address.zip}</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#F6B02E] flex-shrink-0 mt-1" />
                <div>
                  <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="text-white hover:text-[#F6B02E] font-semibold transition-colors block">
                    {COMPANY_INFO.phone}
                  </a>
                  <a href={`tel:${COMPANY_INFO.spanishPhoneRaw}`} className="text-xs text-slate-400 hover:text-[#F6B02E] transition-colors block">
                    Español: {COMPANY_INFO.spanishPhone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#F6B02E] flex-shrink-0 mt-1" />
                <a 
                  href={`mailto:${COMPANY_INFO.email}`} 
                  className="text-xs text-slate-300 hover:text-[#F6B02E] transition-colors break-all"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#F6B02E] flex-shrink-0 mt-1" />
                <div className="text-xs text-slate-400">
                  <div>Mon – Sat: 7:00 AM – 6:00 PM</div>
                  <div className="text-emerald-400 font-semibold mt-0.5">24/7 Storm Leak Dispatch</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Areas Tag Cloud */}
        <div className="py-6 border-b border-slate-800">
          <div className="text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">
            South Florida Service Areas:
          </div>
          <div className="flex flex-wrap gap-2 text-xs text-slate-400">
            {COMPANY_INFO.serviceAreas.map((city, idx) => (
              <span key={city} className="flex items-center">
                <span className="hover:text-white transition-colors">{city}</span>
                {idx < COMPANY_INFO.serviceAreas.length - 1 && (
                  <span className="text-slate-600 mx-2">•</span>
                )}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved. “Protecting Your Home Starts at the Top”.
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={scrollToTop} 
              className="flex items-center gap-1.5 text-slate-300 hover:text-[#F6B02E] transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
