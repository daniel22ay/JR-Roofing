import React from 'react';
import { Phone, ArrowRight, ShieldCheck, Star, Award, CheckCircle2, MapPin } from 'lucide-react';
import { COMPANY_INFO, tileHeroImg } from '../data/roofingData';

interface HeroSectionProps {
  onOpenEstimateModal: () => void;
  onNavigate: (tab: string, serviceId?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenEstimateModal, onNavigate }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0D477D] via-[#13599A] to-[#092C4F] text-white">
      {/* Background Graphic Accents */}
      <div className="absolute inset-0 opacity-15 pointer-events-none mix-blend-overlay bg-[radial-gradient(#F6B02E_1px,transparent_1px)] [background-size:24px_24px]"></div>
      
      {/* Subtle Glowing Radial Gradient */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#F6B02E]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-14 sm:pt-12 sm:pb-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Core Value Proposition & Immediate CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Local Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold text-white shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F6B02E] animate-pulse"></span>
              <span className="text-[#F6B02E] font-bold">South Florida's Trusted Roofer</span>
              <span className="text-white/40">•</span>
              <span className="text-slate-200">Pompano Beach & Broward County</span>
            </div>

            {/* Slogan & Heading */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-heading tracking-tight leading-[1.1] text-white">
                Protecting Your Home <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F6B02E] via-amber-300 to-[#F6B02E]">
                  Starts at the Top.
                </span>
              </h1>
              
              <p className="text-base sm:text-lg text-slate-200 max-w-xl font-normal leading-relaxed">
                JR Roofing Solutions delivers certified, hurricane-grade roofing across South Florida. From Spanish tile and standing seam metal to architectural shingles and commercial flat roofs, Junior and our team deliver honesty, precision, and guaranteed results.
              </p>
            </div>

            {/* Immediate Primary and Secondary CTAs (Visible without scrolling) */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={onOpenEstimateModal}
                className="px-7 py-4 rounded-xl bg-gradient-to-r from-[#F6B02E] to-[#D99516] hover:from-[#e59f14] hover:to-[#c6820c] text-slate-900 font-black text-base shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2.5 cursor-pointer transform hover:-translate-y-0.5"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-5 h-5 text-slate-900" />
              </button>

              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="px-6 py-4 rounded-xl bg-white/10 hover:bg-white/15 backdrop-blur-md text-white font-bold text-base border border-white/30 transition-all flex items-center justify-center gap-2.5 shadow hover:border-white/50"
              >
                <Phone className="w-5 h-5 text-[#F6B02E]" />
                <span>Call Today: {COMPANY_INFO.phone}</span>
              </a>
            </div>

            {/* Trust Highlights Checklist */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs sm:text-sm text-slate-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#F6B02E] flex-shrink-0" />
                <span>FL Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#F6B02E] flex-shrink-0" />
                <span>100% Free Estimates</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#F6B02E] flex-shrink-0" />
                <span>Hurricane Wind Rated</span>
              </div>
            </div>

            {/* Google Rating Social Proof Snippet */}
            <div className="pt-2 flex items-center gap-3">
              <div className="flex -space-x-1.5">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-7 h-7 rounded-full bg-slate-200 border border-white flex items-center justify-center text-[10px] font-black text-[#13599A]">
                    ★
                  </div>
                ))}
              </div>
              <div className="text-xs text-slate-300">
                <span className="font-bold text-white">5.0 Star Rated on Google</span> by verified South Florida homeowners
              </div>
            </div>

          </div>

          {/* Right Column: Visual Hero Showcase Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 group">
              <img
                src={tileHeroImg}
                alt="JR Roofing Solutions Tile Roof Project in South Florida"
                className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/30 to-transparent"></div>

              {/* Floating Badge in Top Corner */}
              <div className="absolute top-4 left-4 bg-[#13599A]/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/30 text-white text-xs font-bold flex items-center gap-1.5 shadow-lg">
                <ShieldCheck className="w-4 h-4 text-[#F6B02E]" />
                <span>HVHZ Code Approved</span>
              </div>

              {/* Floating Badge in Bottom Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md p-4 rounded-xl border border-white/20 text-white shadow-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs text-slate-300 font-semibold">Featured Installation</div>
                    <div className="text-sm font-bold text-white font-heading">Spanish Barrel Tile Roof Replacement</div>
                    <div className="text-xs text-[#F6B02E] flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3" />
                      <span>Pompano Beach, Florida</span>
                    </div>
                  </div>
                  <button
                    onClick={() => onNavigate('service-detail', 'tile-roofing')}
                    className="px-3 py-1.5 bg-[#F6B02E] hover:bg-[#D99516] text-slate-950 text-xs font-black rounded-lg transition-colors cursor-pointer"
                  >
                    View Specs
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Stats Grid Under Hero Card */}
            <div className="grid grid-cols-4 gap-2 mt-4 text-center">
              {COMPANY_INFO.stats.map((stat, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-md py-2.5 px-2 rounded-xl border border-white/10">
                  <div className="text-base sm:text-lg font-black text-[#F6B02E] font-heading">{stat.value}</div>
                  <div className="text-[10px] sm:text-xs text-slate-300 font-medium leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
