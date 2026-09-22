import React from 'react';
import { SERVICES } from '../data/roofingData';
import { ServicesGrid } from '../components/ServicesGrid';
import { ComparisonTable } from '../components/ComparisonTable';
import { ShieldCheck, Phone, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/roofingData';

interface ServicesPageProps {
  onNavigate: (tab: string, serviceId?: string) => void;
  onOpenEstimateModal: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, onOpenEstimateModal }) => {
  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#0D477D] to-[#13599A] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 text-xs font-black tracking-widest uppercase text-[#F6B02E] bg-white/10 px-3 py-1 rounded-full border border-white/15">
            <Sparkles className="w-3.5 h-3.5" />
            South Florida Roofing Services
          </div>
          <h1 className="text-3xl sm:text-5xl font-black font-heading tracking-tight">
            Engineered Roofing Systems for South Florida
          </h1>
          <p className="text-sm sm:text-base text-blue-100 max-w-2xl mx-auto leading-relaxed">
            From residential architectural shingles and Mediterranean clay tiles to commercial TPO membranes and hurricane-grade standing seam metal.
          </p>
        </div>
      </section>

      {/* Services Grid (all 6 services) */}
      <ServicesGrid 
        onNavigate={onNavigate} 
        onOpenEstimateModal={onOpenEstimateModal} 
        featuredOnly={false} 
      />

      {/* Comparison Matrix */}
      <ComparisonTable onOpenEstimateModal={onOpenEstimateModal} />

      {/* Quick Call Out Banner */}
      <section className="py-12 bg-blue-50 border-t border-blue-100">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <h3 className="text-2xl font-bold font-heading text-[#13599A]">
            Not Sure Which Roofing Material Meets Your Needs?
          </h3>
          <p className="text-sm text-slate-600 max-w-xl mx-auto">
            Our certified inspectors review your existing decking, roof pitch, HOA bylaws, and budget to help you choose the best system.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <button
              onClick={onOpenEstimateModal}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#F6B02E] to-[#D99516] text-slate-900 font-extrabold text-sm shadow cursor-pointer hover:brightness-105 transition-all"
            >
              Get Free Consultation
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
