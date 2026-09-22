import React from 'react';
import { COMPANY_INFO } from '../data/roofingData';
import { MapPin, Phone, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface ServiceAreaMapProps {
  onOpenEstimateModal: () => void;
}

export const ServiceAreaMap: React.FC<ServiceAreaMapProps> = ({ onOpenEstimateModal }) => {
  return (
    <section className="py-16 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#092C4F] via-[#0D477D] to-[#13599A] opacity-90"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Local Expertise and Coverage Details */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 text-xs font-black tracking-widest uppercase text-[#F6B02E] bg-white/10 px-3 py-1 rounded-full border border-white/15">
              <MapPin className="w-3.5 h-3.5" />
              South Florida Service Coverage
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white leading-tight">
              Proudly Serving Broward, Palm Beach & Miami-Dade Counties
            </h2>

            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              Based in <strong>Pompano Beach, FL</strong>, JR Roofing Solutions understands the exact microclimate demands, salt-spray exposure, and hurricane wind codes unique to South Florida. We dispatch local crews daily across the region.
            </p>

            {/* Counties Breakdown */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/15">
                <div className="font-bold text-[#F6B02E] text-base font-heading mb-1">
                  Broward County
                </div>
                <div className="text-xs text-slate-300 space-y-0.5">
                  <div>• Pompano Beach (HQ)</div>
                  <div>• Fort Lauderdale</div>
                  <div>• Coral Springs & Parkland</div>
                  <div>• Hollywood & Miramar</div>
                  <div>• Deerfield Beach</div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/15">
                <div className="font-bold text-[#F6B02E] text-base font-heading mb-1">
                  Palm Beach County
                </div>
                <div className="text-xs text-slate-300 space-y-0.5">
                  <div>• Boca Raton</div>
                  <div>• Delray Beach</div>
                  <div>• Boynton Beach</div>
                  <div>• West Palm Beach</div>
                  <div>• Wellington & Lake Worth</div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/15">
                <div className="font-bold text-[#F6B02E] text-base font-heading mb-1">
                  Miami-Dade County
                </div>
                <div className="text-xs text-slate-300 space-y-0.5">
                  <div>• Aventura & Sunny Isles</div>
                  <div>• North Miami</div>
                  <div>• Miami Beach</div>
                  <div>• Hialeah & Doral</div>
                  <div>• Kendall & South Miami</div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={onOpenEstimateModal}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#F6B02E] to-[#D99516] hover:from-[#e59f14] hover:to-[#c6820c] text-slate-900 font-extrabold text-sm shadow cursor-pointer transition-all text-center"
              >
                Check Availability & Get Quote
              </button>

              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="px-5 py-3 rounded-xl bg-white/15 hover:bg-white/20 text-white font-bold text-sm border border-white/25 flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#F6B02E]" />
                <span>Call Dispatch: {COMPANY_INFO.phone}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Headquarters Office Card */}
          <div className="lg:col-span-5">
            <div className="bg-white text-slate-900 rounded-2xl p-6 sm:p-8 shadow-2xl border border-slate-100 space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <div className="text-xs font-bold text-[#13599A] uppercase tracking-wider">
                    Main Headquarters
                  </div>
                  <h3 className="text-xl font-black font-heading text-slate-900">
                    JR Roofing Solutions
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-blue-50 text-[#13599A] flex items-center justify-center font-bold">
                  FL
                </div>
              </div>

              <div className="space-y-3 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#13599A] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-900">{COMPANY_INFO.address.street}</div>
                    <div className="text-xs text-slate-500">{COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} {COMPANY_INFO.address.zip} ({COMPANY_INFO.address.county})</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#13599A] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-slate-900">English Line: {COMPANY_INFO.phone}</div>
                    <div className="text-xs text-slate-600">Línea en Español: {COMPANY_INFO.spanishPhone}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-900">Certified Roofing Contractor</div>
                    <div className="text-xs text-slate-500">State of Florida Licensed & Insured (CCC)</div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs text-slate-600 space-y-1">
                <div className="font-bold text-slate-800">Hours of Operation:</div>
                <div>Monday – Saturday: 7:00 AM – 6:00 PM</div>
                <div className="text-emerald-700 font-semibold pt-1 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  24/7 Rapid Emergency Response for Storm Damage
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
