import React from 'react';
import { SERVICES, ServiceItem } from '../data/roofingData';
import { ArrowRight, CheckCircle2, ShieldAlert, Sparkles, Wind, Clock } from 'lucide-react';

interface ServicesGridProps {
  onNavigate: (tab: string, serviceId?: string) => void;
  onOpenEstimateModal: () => void;
  featuredOnly?: boolean;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ 
  onNavigate, 
  onOpenEstimateModal, 
  featuredOnly = false 
}) => {
  const displayedServices = featuredOnly ? SERVICES.slice(0, 4) : SERVICES;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-black tracking-widest uppercase text-[#13599A] bg-blue-50 px-3 py-1 rounded-full mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#F6B02E]" />
              Comprehensive Roofing Solutions
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#232323] font-heading">
              Our Professional Roofing Services
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Every roof in South Florida requires specialized care to handle tropical moisture, high winds, and blistering sun. We engineer each system to meet stringent Florida Building Codes.
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex gap-3">
            <button
              onClick={onOpenEstimateModal}
              className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#F6B02E] to-[#D99516] text-slate-900 font-extrabold text-sm shadow hover:shadow-md transition-all cursor-pointer"
            >
              Get Free Estimate
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group hover:-translate-y-1"
            >
              {/* Image Container with Badge */}
              <div className="relative h-52 overflow-hidden bg-slate-100">
                <img
                  src={service.heroImage}
                  alt={`JR Roofing Solutions - ${service.name}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                
                {/* Wind Rating Tag */}
                <div className="absolute top-3 left-3 bg-[#0D477D]/90 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-md flex items-center gap-1 shadow">
                  <Wind className="w-3 h-3 text-[#F6B02E]" />
                  <span>{service.windRating}</span>
                </div>

                {/* Lifespan Tag */}
                <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md text-slate-800 text-[11px] font-bold px-2.5 py-1 rounded-md flex items-center gap-1 shadow">
                  <Clock className="w-3 h-3 text-[#13599A]" />
                  <span>{service.lifespan}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold font-heading text-[#232323] group-hover:text-[#13599A] transition-colors mb-2">
                  {service.name}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-1">
                  {service.shortDescription}
                </p>

                {/* Top 3 Benefits Checklist */}
                <div className="space-y-1.5 mb-6 pt-3 border-t border-slate-100">
                  {service.benefits.slice(0, 3).map((benefit, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#F6B02E] flex-shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex items-center justify-between gap-3">
                  <button
                    onClick={() => {
                      onNavigate('service-detail', service.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-xs font-bold text-[#13599A] hover:text-[#0D477D] flex items-center gap-1 group/btn transition-colors"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={onOpenEstimateModal}
                    className="px-3.5 py-1.5 rounded-lg bg-blue-50 hover:bg-[#F6B02E] text-[#13599A] hover:text-slate-900 font-bold text-xs transition-colors cursor-pointer"
                  >
                    Get Quote
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
