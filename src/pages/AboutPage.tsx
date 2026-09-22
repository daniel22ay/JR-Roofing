import React from 'react';
import { COMPANY_INFO, tileHeroImg, shingleHeroImg } from '../data/roofingData';
import { ShieldCheck, Award, Users, CheckCircle2, Phone, ArrowRight, MapPin, HeartHandshake } from 'lucide-react';

interface AboutPageProps {
  onOpenEstimateModal: () => void;
  onNavigate: (tab: string, serviceId?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenEstimateModal, onNavigate }) => {
  return (
    <div className="bg-white">
      {/* Page Header Banner */}
      <section className="bg-gradient-to-b from-[#0D477D] to-[#13599A] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 text-xs font-black tracking-widest uppercase text-[#F6B02E] bg-white/10 px-3 py-1 rounded-full border border-white/15">
            About JR Roofing Solutions
          </div>
          <h1 className="text-3xl sm:text-5xl font-black font-heading tracking-tight">
            South Florida Roots. Uncompromising Craftsmanship.
          </h1>
          <p className="text-sm sm:text-base text-blue-100 max-w-2xl mx-auto leading-relaxed">
            “Protecting Your Home Starts at the Top.” Dedicated to safeguarding residential and commercial properties throughout Broward, Palm Beach, and Miami-Dade.
          </p>
        </div>
      </section>

      {/* Main Story & Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Story Text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#13599A] bg-blue-50 px-3 py-1 rounded-full">
                <MapPin className="w-3.5 h-3.5 text-[#F6B02E]" />
                Based in Pompano Beach, FL
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#232323] font-heading">
                A Reputation Built on Honesty, Precision & Dedication
              </h2>

              <p className="text-slate-700 text-base leading-relaxed">
                JR Roofing Solutions was founded with a singular purpose: to deliver dependable, honest, and high-performance roofing solutions tailored to the rigorous climate conditions of South Florida.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                From intense subtropical UV radiation and high humidity to severe summer thunderstorms and tropical hurricane winds, roofs in Florida face conditions unlike anywhere else in the nation. We know that your roof is not merely building materials—it is the shield that protects your family, your business, and your greatest investment.
              </p>

              <p className="text-slate-600 text-sm leading-relaxed">
                Led by Junior, our hands-on leadership style ensures that every project receives meticulous attention to detail. We do not believe in high-pressure sales tactics or vague quotes. When you work with JR Roofing Solutions, you receive straight answers, realistic timelines, and a transparent, itemized proposal.
              </p>

              {/* Stats Highlight Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-200">
                {COMPANY_INFO.stats.map((s, idx) => (
                  <div key={idx} className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-center">
                    <div className="text-2xl font-black text-[#13599A] font-heading">{s.value}</div>
                    <div className="text-xs text-slate-500 font-medium mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Images Column */}
            <div className="lg:col-span-5 space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                <img
                  src={tileHeroImg}
                  alt="JR Roofing Solutions Tile Roof in Florida"
                  className="w-full h-72 object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                <img
                  src={shingleHeroImg}
                  alt="JR Roofing Solutions Shingle Roof Installation"
                  className="w-full h-56 object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Principles Section */}
      <section className="py-16 bg-slate-50 border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-[#232323] font-heading">
              Our Core Commitments
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Every shingle nailed, tile set, and seam welded reflects our commitment to South Florida quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#13599A] flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6 text-[#13599A]" />
              </div>
              <h3 className="font-heading font-bold text-lg text-slate-900 mb-2">
                100% Code & Safety Compliance
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We strictly adhere to Florida Building Code High-Velocity Hurricane Zone (HVHZ) requirements, obtaining all municipal permits and scheduling required in-progress and final inspections.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#13599A] flex items-center justify-center mb-4">
                <HeartHandshake className="w-6 h-6 text-[#F6B02E]" />
              </div>
              <h3 className="font-heading font-bold text-lg text-slate-900 mb-2">
                Honesty & Fair Pricing
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                As reflected in our Google reviews, we deliver honest assessments. If your roof only needs a repair, we tell you truthfully. You get clear pricing with zero unexpected add-ons.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#13599A] flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="font-heading font-bold text-lg text-slate-900 mb-2">
                Respectful Property Care
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We protect your landscaping, driveways, and AC units during tear-offs and conduct thorough magnetic nail sweeps daily to keep your premises pristine and secure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Contact CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-[#13599A] bg-blue-50 px-3 py-1 rounded-full">
            Ready to Work Together?
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#232323] font-heading">
            Speak Directly with Junior and Our Roofing Specialists
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl mx-auto">
            Schedule an on-site consultation anywhere in Pompano Beach, Fort Lauderdale, Boca Raton, or surrounding South Florida communities.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={onOpenEstimateModal}
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#F6B02E] to-[#D99516] hover:from-[#e59f14] hover:to-[#c6820c] text-slate-900 font-extrabold text-sm shadow cursor-pointer transition-all"
            >
              Request Free Estimate
            </button>

            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="px-6 py-3.5 rounded-xl bg-[#13599A] hover:bg-[#0D477D] text-white font-bold text-sm shadow flex items-center justify-center gap-2 transition-colors"
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
