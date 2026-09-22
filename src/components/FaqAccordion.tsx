import React, { useState } from 'react';
import { FAQS, FaqItem } from '../data/roofingData';
import { ChevronDown, HelpCircle, Phone, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/roofingData';

interface FaqAccordionProps {
  onOpenEstimateModal: () => void;
}

export const FaqAccordion: React.FC<FaqAccordionProps> = ({ onOpenEstimateModal }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredFaqs = activeCategory === 'all'
    ? FAQS
    : FAQS.filter(f => f.category === activeCategory);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-slate-50 border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-black tracking-widest uppercase text-[#13599A] bg-blue-100/70 px-3 py-1 rounded-full">
            Helpful Information
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#232323] font-heading mt-2">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Have questions about your roof replacement, costs, permits, or materials? Here are answers to common questions from South Florida property owners.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {[
            { id: 'all', label: 'All Questions' },
            { id: 'general', label: 'Roof Replacement Signs' },
            { id: 'services', label: 'Materials & Systems' },
            { id: 'permits', label: 'Permits & Florida Code' },
            { id: 'pricing', label: 'Pricing & Warranties' }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setOpenIndex(0);
              }}
              className={`px-4 py-2 text-xs font-bold rounded-full transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#13599A] text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 focus:outline-none hover:bg-slate-50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-bold text-base text-[#232323] pr-4">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                    isOpen ? 'bg-[#13599A] text-white rotate-180' : 'bg-slate-100 text-slate-500'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in duration-150">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions? Help Banner */}
        <div className="mt-10 p-6 rounded-2xl bg-[#0D477D] text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 border border-white/20">
              <HelpCircle className="w-6 h-6 text-[#F6B02E]" />
            </div>
            <div>
              <h3 className="font-bold text-white text-base font-heading">
                Have a specific question about your roof?
              </h3>
              <p className="text-xs text-blue-100">
                Junior and our estimators are always ready to answer your questions by phone or during a free on-site visit.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/30 text-center flex items-center justify-center gap-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#F6B02E]" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <button
              onClick={onOpenEstimateModal}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-lg bg-[#F6B02E] hover:bg-[#D99516] text-slate-900 font-extrabold text-xs shadow text-center cursor-pointer transition-colors"
            >
              Free Estimate
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
