import React from 'react';
import { SERVICES, ServiceItem, COMPANY_INFO } from '../data/roofingData';
import { 
  ShieldCheck, 
  Wind, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  Sparkles, 
  ArrowLeft,
  Wrench,
  Layers,
  ChevronRight
} from 'lucide-react';

interface ServiceDetailPageProps {
  serviceId: string;
  onNavigate: (tab: string, serviceId?: string) => void;
  onOpenEstimateModal: () => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ 
  serviceId, 
  onNavigate, 
  onOpenEstimateModal 
}) => {
  const service = SERVICES.find(s => s.id === serviceId) || SERVICES[0];
  const relatedServices = SERVICES.filter(s => s.id !== service.id).slice(0, 3);

  return (
    <div className="bg-white">
      {/* Top Breadcrumb & Navigation */}
      <div className="bg-slate-50 border-b border-slate-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs">
          <div className="flex items-center gap-1.5 text-slate-500">
            <button 
              onClick={() => onNavigate('home')} 
              className="hover:text-[#13599A] font-medium"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <button 
              onClick={() => onNavigate('services')} 
              className="hover:text-[#13599A] font-medium"
            >
              Services
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#13599A] font-bold">{service.name}</span>
          </div>

          <button
            onClick={() => onNavigate('services')}
            className="inline-flex items-center gap-1 text-[#13599A] font-bold hover:underline"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Services</span>
          </button>
        </div>
      </div>

      {/* Hero Banner for this specific service */}
      <section className="bg-gradient-to-r from-[#0D477D] via-[#13599A] to-[#092C4F] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 text-xs font-black tracking-widest uppercase text-[#F6B02E] bg-white/10 px-3 py-1 rounded-full border border-white/15">
                <Sparkles className="w-3.5 h-3.5" />
                South Florida Specialized Roofing
              </div>

              <h1 className="text-3xl sm:text-5xl font-black font-heading tracking-tight">
                {service.name}
              </h1>

              <p className="text-base sm:text-lg text-blue-100 leading-relaxed max-w-xl">
                {service.shortDescription}
              </p>

              <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold">
                <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/20">
                  <Wind className="w-4 h-4 text-[#F6B02E]" />
                  <span>Wind Rating: {service.windRating}</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/20">
                  <Clock className="w-4 h-4 text-[#F6B02E]" />
                  <span>Lifespan: {service.lifespan}</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/20">
                  <ShieldCheck className="w-4 h-4 text-[#F6B02E]" />
                  <span>FL Building Code HVHZ Compliant</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={onOpenEstimateModal}
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#F6B02E] to-[#D99516] hover:from-[#e59f14] hover:to-[#c6820c] text-slate-900 font-extrabold text-sm shadow cursor-pointer transition-all text-center"
                >
                  Get Free {service.name} Quote
                </button>

                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-sm border border-white/30 flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#F6B02E]" />
                  <span>Call: {COMPANY_INFO.phone}</span>
                </a>
              </div>
            </div>

            {/* Service Hero Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                <img
                  src={service.heroImage}
                  alt={`JR Roofing Solutions - ${service.name} South Florida`}
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* In-Depth Overview & Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Main Content */}
            <div className="lg:col-span-8 space-y-10">
              
              {/* Detailed Description */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#232323] font-heading mb-4">
                  Expert {service.name} in South Florida
                </h2>
                <p className="text-slate-700 text-base leading-relaxed mb-4">
                  {service.fullDescription}
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  South Florida's weather presents unique challenges for every structure. With high heat, relentless ultraviolet rays, seasonal tropical downpours, and hurricane-force winds, our installation team ensures every facet of your {service.name.toLowerCase()} project is executed strictly to the latest Florida Building Code standards.
                </p>
              </div>

              {/* Key Benefits */}
              <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200">
                <h3 className="text-xl font-bold font-heading text-[#13599A] mb-4 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#F6B02E]" />
                  Key Benefits & Performance Advantages
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.benefits.map((b, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#F6B02E] flex-shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Specifications & Features */}
              <div>
                <h3 className="text-xl font-bold font-heading text-[#232323] mb-4 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-[#13599A]" />
                  System Specifications & Quality Components
                </h3>
                <div className="space-y-3">
                  {service.features.map((feat, i) => (
                    <div key={i} className="p-4 rounded-xl border border-slate-200 bg-white hover:border-blue-200 transition-colors flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-full bg-blue-50 text-[#13599A] flex items-center justify-center font-bold text-xs">
                          {i + 1}
                        </div>
                        <span className="font-semibold text-slate-800 text-sm">{feat}</span>
                      </div>
                      <span className="text-xs text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded">
                        Included
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Climate Suitability Callout */}
              <div className="p-6 rounded-2xl bg-blue-50/80 border border-blue-200">
                <h4 className="font-bold text-[#13599A] font-heading text-base mb-1">
                  Best Suited For:
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {service.bestFor}
                </p>
                <div className="mt-3 flex items-center gap-2 text-xs text-slate-600">
                  <span className="font-bold text-slate-800">Maintenance Recommendation:</span>
                  <span>{service.maintenanceLevel}</span>
                </div>
              </div>

            </div>

            {/* Right Sidebar: Quick Contact & Related Services */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Quick Estimate Card */}
              <div className="bg-[#092C4F] text-white p-6 rounded-2xl shadow-xl space-y-4">
                <div className="text-xs font-bold uppercase tracking-wider text-[#F6B02E]">
                  Free On-Site Estimate
                </div>
                <h3 className="text-xl font-black font-heading">
                  Ready to Start Your {service.name} Project?
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Contact Junior and our estimating crew in Pompano Beach. We inspect your roof, check decking conditions, and provide an itemized quote.
                </p>

                <button
                  onClick={onOpenEstimateModal}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#F6B02E] to-[#D99516] text-slate-900 font-extrabold text-sm shadow cursor-pointer hover:brightness-105 transition-all"
                >
                  Request Free Estimate
                </button>

                <div className="pt-2 text-center border-t border-slate-700">
                  <div className="text-xs text-slate-400 mb-1">Or call our dispatch line directly:</div>
                  <a
                    href={`tel:${COMPANY_INFO.phoneRaw}`}
                    className="inline-flex items-center gap-1.5 text-[#F6B02E] font-bold text-base hover:underline"
                  >
                    <Phone className="w-4 h-4" />
                    <span>{COMPANY_INFO.phone}</span>
                  </a>
                </div>
              </div>

              {/* Related Services Internal Links */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                <h4 className="font-heading font-bold text-base text-[#232323] mb-4">
                  Other Roofing Services
                </h4>
                <div className="space-y-2">
                  {relatedServices.map((rel) => (
                    <button
                      key={rel.id}
                      onClick={() => {
                        onNavigate('service-detail', rel.id);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="w-full text-left p-3 rounded-xl bg-white hover:bg-blue-50 border border-slate-200 hover:border-blue-200 transition-all flex items-center justify-between group cursor-pointer"
                    >
                      <div>
                        <div className="font-semibold text-slate-900 text-xs group-hover:text-[#13599A]">
                          {rel.name}
                        </div>
                        <div className="text-[11px] text-slate-500">{rel.windRating}</div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#13599A] group-hover:translate-x-1 transition-all" />
                    </button>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
