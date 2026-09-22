import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { TrustBadges } from '../components/TrustBadges';
import { ServicesGrid } from '../components/ServicesGrid';
import { ComparisonTable } from '../components/ComparisonTable';
import { ProcessTimeline } from '../components/ProcessTimeline';
import { ReviewsSection } from '../components/ReviewsSection';
import { FaqAccordion } from '../components/FaqAccordion';
import { ServiceAreaMap } from '../components/ServiceAreaMap';
import { COMPANY_INFO, tileHeroImg } from '../data/roofingData';
import { Phone, ArrowRight, ShieldCheck, Award, CheckCircle2, UserCheck } from 'lucide-react';

interface HomePageProps {
  onNavigate: (tab: string, serviceId?: string) => void;
  onOpenEstimateModal: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenEstimateModal }) => {
  return (
    <div>
      {/* 1. Hero Section (Above the fold conversion) */}
      <HeroSection 
        onOpenEstimateModal={onOpenEstimateModal} 
        onNavigate={onNavigate} 
      />

      {/* 2. Trust Badges */}
      <TrustBadges />

      {/* 3. About Us Teaser / South Florida Roots */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                <img
                  src={tileHeroImg}
                  alt="JR Roofing Solutions South Florida Craftsmanship"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="text-xs font-bold text-[#F6B02E] uppercase tracking-wider mb-1">
                    South Florida Born & Bred
                  </div>
                  <div className="text-lg font-black font-heading">
                    Over 2,500 Roofs Installed Across Broward, Palm Beach & Miami-Dade
                  </div>
                </div>
              </div>

              {/* Floating Trust Badge */}
              <div className="absolute -bottom-5 -right-5 bg-white p-4 rounded-xl shadow-xl border border-slate-200 hidden sm:flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-[#13599A] text-white flex items-center justify-center font-black">
                  <UserCheck className="w-6 h-6 text-[#F6B02E]" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm">Direct Owner Oversight</div>
                  <div className="text-xs text-slate-500">Junior & dedicated crews on site</div>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-1.5 text-xs font-black tracking-widest uppercase text-[#13599A] bg-blue-50 px-3 py-1 rounded-full">
                South Florida Roofing Contractors
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#232323] font-heading leading-tight">
                Built on Honesty, Skilled Workmanship & South Florida Dedication
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                At <strong>JR Roofing Solutions</strong>, we believe every home and commercial property in South Florida deserves unmatched roof protection. With relentless sunshine, salt-laden coastal air, and tropical storm seasons, a roof is your building's primary line of defense.
              </p>

              <p className="text-slate-600 text-sm leading-relaxed">
                Led by Junior, our experienced technicians treat your home with the utmost respect. We never cut corners on underlayment, wind fastening, or flashing details. From the moment we provide your clear, itemized proposal to final permit sign-off and site cleanup, you experience true professionalism.
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-sm text-slate-800 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-[#F6B02E] flex-shrink-0" />
                  <span>Licensed & Insured in Florida</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-800 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-[#F6B02E] flex-shrink-0" />
                  <span>Transparent Itemized Estimates</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-800 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-[#F6B02E] flex-shrink-0" />
                  <span>High-Wind HVHZ Code Compliant</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-800 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-[#F6B02E] flex-shrink-0" />
                  <span>Spotless Daily Cleanup Guarantee</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate('about')}
                  className="px-6 py-3 rounded-xl bg-[#13599A] hover:bg-[#0D477D] text-white font-bold text-sm shadow transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <span>Read Our Full Story</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm border border-slate-200 transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#13599A]" />
                  <span>Call {COMPANY_INFO.phone}</span>
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 4. Complete Services Showcase */}
      <ServicesGrid 
        onNavigate={onNavigate} 
        onOpenEstimateModal={onOpenEstimateModal} 
      />

      {/* 5. Roof Materials Comparison Matrix */}
      <ComparisonTable 
        onOpenEstimateModal={onOpenEstimateModal} 
      />

      {/* 6. 5-Step Process */}
      <ProcessTimeline 
        onOpenEstimateModal={onOpenEstimateModal} 
      />

      {/* 7. Client Reviews (Verified Google Reviews) */}
      <ReviewsSection 
        onOpenEstimateModal={onOpenEstimateModal} 
      />

      {/* 8. Frequently Asked Questions Accordion */}
      <FaqAccordion 
        onOpenEstimateModal={onOpenEstimateModal} 
      />

      {/* 9. South Florida Service Area & Office Card */}
      <ServiceAreaMap 
        onOpenEstimateModal={onOpenEstimateModal} 
      />

      {/* 10. Final Call to Action Conversion Banner */}
      <section className="py-14 bg-gradient-to-r from-[#13599A] via-[#0D477D] to-[#092C4F] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 bg-[#F6B02E] text-slate-900 text-xs font-black uppercase px-3 py-1 rounded-full shadow">
            <span>Free On-Site Inspection</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading leading-tight">
            Protect Your Home Starts at the Top.
          </h2>

          <p className="text-sm sm:text-base text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Don't wait for minor leaks to turn into costly interior structural water damage. Contact Junior and the team at JR Roofing Solutions for an honest, free assessment today.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenEstimateModal}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#F6B02E] to-[#D99516] hover:from-[#e59f14] hover:to-[#c6820c] text-slate-900 font-black text-base shadow-xl transition-all cursor-pointer"
            >
              Request Free Estimate Now
            </button>

            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-base border border-white/30 flex items-center justify-center gap-2 transition-colors shadow"
            >
              <Phone className="w-5 h-5 text-[#F6B02E]" />
              <span>Call: {COMPANY_INFO.phone}</span>
            </a>
          </div>

          <div className="pt-2 text-xs text-slate-300">
            Pompano Beach • Fort Lauderdale • Boca Raton • Coral Springs • Delray Beach • All South Florida
          </div>
        </div>
      </section>
    </div>
  );
};
