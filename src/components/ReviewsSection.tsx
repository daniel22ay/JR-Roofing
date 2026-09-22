import React, { useState } from 'react';
import { REVIEWS } from '../data/roofingData';
import { Star, CheckCircle, Quote, Sparkles, MessageSquare, ArrowRight } from 'lucide-react';

interface ReviewsSectionProps {
  onOpenEstimateModal: () => void;
  showAll?: boolean;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ onOpenEstimateModal, showAll = false }) => {
  const [filterRating, setFilterRating] = useState<number | null>(null);

  const displayedReviews = filterRating 
    ? REVIEWS.filter(r => r.rating === filterRating)
    : showAll 
      ? REVIEWS 
      : REVIEWS.slice(0, 3);

  return (
    <section className="py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Google Score Badge */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-black tracking-widest uppercase text-[#13599A] bg-blue-50 px-3 py-1 rounded-full mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#F6B02E]" />
              Verified Client Feedback
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#232323] font-heading">
              What Clients Are Saying
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-xl">
              Real reviews from real homeowners and property managers across Broward, Palm Beach, and Miami-Dade counties who trust Junior and JR Roofing Solutions.
            </p>
          </div>

          {/* Google 5.0 Trust Score Card */}
          <div className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200 flex items-center gap-4 shadow-sm">
            <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-200 flex items-center justify-center font-black text-2xl text-blue-600">
              G
            </div>
            <div>
              <div className="flex items-center gap-1 text-[#F6B02E]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <div className="text-xs text-slate-600 mt-1">
                <strong className="text-slate-900 font-bold">5.0 Star Rating</strong> • Verified on Google Reviews
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-slate-50/80 rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative group"
            >
              <Quote className="absolute top-5 right-5 w-8 h-8 text-blue-100 group-hover:text-blue-200 transition-colors pointer-events-none" />

              <div>
                {/* Star Rating and Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#F6B02E]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    <CheckCircle className="w-3 h-3 text-emerald-600" />
                    Google Verified
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-slate-700 text-sm italic leading-relaxed mb-6 font-normal">
                  “{rev.content}”
                </p>
              </div>

              {/* Author & Project metadata */}
              <div className="pt-4 border-t border-slate-200/70 flex items-center justify-between">
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

        {/* Bottom CTA & Trust Statement */}
        <div className="mt-12 text-center bg-blue-50/70 p-6 rounded-2xl border border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-bold text-[#13599A] font-heading text-base">
              Ready to experience five-star roofing service?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600">
              Join over 1,200 satisfied homeowners in South Florida who chose JR Roofing Solutions.
            </p>
          </div>

          <button
            onClick={onOpenEstimateModal}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#F6B02E] to-[#D99516] hover:from-[#e59f14] hover:to-[#c6820c] text-slate-900 font-extrabold text-sm shadow hover:shadow-md transition-all flex items-center gap-2 cursor-pointer flex-shrink-0"
          >
            <span>Get Your Free Quote</span>
            <ArrowRight className="w-4 h-4 text-slate-900" />
          </button>
        </div>

      </div>
    </section>
  );
};
