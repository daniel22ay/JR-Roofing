import React, { useState } from 'react';
import { REVIEWS, COMPANY_INFO } from '../data/roofingData';
import { ReviewsSection } from '../components/ReviewsSection';
import { Star, CheckCircle, ShieldCheck, Quote, Phone, ArrowRight, MessageSquarePlus } from 'lucide-react';

interface ReviewsPageProps {
  onOpenEstimateModal: () => void;
}

export const ReviewsPage: React.FC<ReviewsPageProps> = ({ onOpenEstimateModal }) => {
  const [filterType, setFilterType] = useState<string>('all');

  const filteredReviews = filterType === 'all'
    ? REVIEWS
    : REVIEWS.filter(r => r.projectType.toLowerCase().includes(filterType.toLowerCase()));

  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#0D477D] to-[#13599A] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 text-xs font-black tracking-widest uppercase text-[#F6B02E] bg-white/10 px-3 py-1 rounded-full border border-white/15">
            5-Star Google Reviews
          </div>
          <h1 className="text-3xl sm:text-5xl font-black font-heading tracking-tight">
            Trusted by South Florida Homeowners
          </h1>
          <p className="text-sm sm:text-base text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Read verified customer reviews praising Junior and our crew for honest pricing, prompt service, clean job sites, and superior roofing craftsmanship.
          </p>
        </div>
      </section>

      {/* Main Reviews Display */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Trust Metrics Bar */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center">
              <div className="text-3xl font-black text-[#13599A] font-heading">5.0 ★</div>
              <div className="text-xs text-slate-500 font-semibold mt-1">Google Review Score</div>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center">
              <div className="text-3xl font-black text-[#13599A] font-heading">2,500+</div>
              <div className="text-xs text-slate-500 font-semibold mt-1">Roofs Installed in South FL</div>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center">
              <div className="text-3xl font-black text-[#13599A] font-heading">1,200+</div>
              <div className="text-xs text-slate-500 font-semibold mt-1">Satisfied Clients</div>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center">
              <div className="text-3xl font-black text-emerald-600 font-heading">100%</div>
              <div className="text-xs text-slate-500 font-semibold mt-1">Licensed & Insured (CCC)</div>
            </div>
          </div>

          {/* Project Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {[
              { id: 'all', label: 'All Reviews' },
              { id: 'Tile', label: 'Tile Roofs' },
              { id: 'Metal', label: 'Metal Roofs' },
              { id: 'Shingle', label: 'Shingle Roofs' },
              { id: 'Storm', label: 'Storm Restoration' }
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setFilterType(f.id)}
                className={`px-4 py-2 text-xs font-bold rounded-full transition-all cursor-pointer ${
                  filterType === f.id
                    ? 'bg-[#13599A] text-white shadow-sm'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredReviews.map((rev) => (
              <div
                key={rev.id}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative group"
              >
                <Quote className="absolute top-5 right-5 w-8 h-8 text-blue-100 pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-[#F6B02E]">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>

                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      <CheckCircle className="w-3 h-3 text-emerald-600" />
                      Verified Google Review
                    </span>
                  </div>

                  <p className="text-slate-700 text-sm italic leading-relaxed mb-6">
                    “{rev.content}”
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-[#232323] text-sm font-heading">{rev.author}</div>
                    <div className="text-xs text-slate-500">{rev.location}</div>
                  </div>

                  <div className="text-right">
                    <span className="text-[11px] font-medium text-[#13599A] bg-blue-100/60 px-2 py-0.5 rounded">
                      {rev.projectType}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Free Quote Banner */}
          <div className="mt-14 p-8 rounded-2xl bg-[#092C4F] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold font-heading">
                Ready for the same 5-star experience?
              </h3>
              <p className="text-sm text-slate-300 mt-1 max-w-lg">
                Junior and our team provide free, honest, on-site inspections for homeowners across South Florida.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={onOpenEstimateModal}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#F6B02E] to-[#D99516] text-slate-900 font-extrabold text-sm shadow cursor-pointer hover:brightness-105 transition-all"
              >
                Get Free Estimate
              </button>
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/30 flex items-center gap-2 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#F6B02E]" />
                <span>Call {COMPANY_INFO.phone}</span>
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
