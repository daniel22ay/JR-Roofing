import React, { useState } from 'react';
import { FAQS, COMPANY_INFO } from '../data/roofingData';
import { FaqAccordion } from '../components/FaqAccordion';
import { HelpCircle, Phone, Search, Sparkles } from 'lucide-react';

interface FaqPageProps {
  onOpenEstimateModal: () => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onOpenEstimateModal }) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#0D477D] to-[#13599A] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 text-xs font-black tracking-widest uppercase text-[#F6B02E] bg-white/10 px-3 py-1 rounded-full border border-white/15">
            Knowledge & Guidance
          </div>
          <h1 className="text-3xl sm:text-5xl font-black font-heading tracking-tight">
            Frequently Asked Roofing Questions
          </h1>
          <p className="text-sm sm:text-base text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about roof replacements, Florida building codes, permits, warranties, and emergency storm repairs.
          </p>
        </div>
      </section>

      {/* Accordion Component */}
      <FaqAccordion onOpenEstimateModal={onOpenEstimateModal} />

      {/* Call to Action Section */}
      <section className="py-12 bg-white text-center border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-4 space-y-4">
          <h3 className="text-2xl font-bold font-heading text-slate-900">
            Didn't find your answer here?
          </h3>
          <p className="text-sm text-slate-600">
            Call Junior directly or book a free on-site roof inspection anywhere in South Florida.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <button
              onClick={onOpenEstimateModal}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#F6B02E] to-[#D99516] text-slate-900 font-extrabold text-sm shadow cursor-pointer hover:brightness-105 transition-all"
            >
              Get Free Estimate
            </button>
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="px-6 py-3 rounded-xl bg-[#13599A] text-white font-bold text-sm shadow hover:bg-[#0D477D] transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#F6B02E]" />
              <span>Call: {COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
