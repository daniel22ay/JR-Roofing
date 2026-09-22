import React from 'react';
import { PROCESS_STEPS } from '../data/roofingData';
import { ClipboardCheck, FileText, Truck, Hammer, CheckCircle2, ArrowRight } from 'lucide-react';

interface ProcessTimelineProps {
  onOpenEstimateModal: () => void;
}

export const ProcessTimeline: React.FC<ProcessTimelineProps> = ({ onOpenEstimateModal }) => {
  const stepIcons = [
    ClipboardCheck,
    FileText,
    Truck,
    Hammer,
    CheckCircle2
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-black tracking-widest uppercase text-[#13599A] bg-blue-50 px-3 py-1 rounded-full">
            Transparent & Reliable
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#232323] font-heading mt-2">
            Our 5-Step Roofing Process
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            From your initial consultation to final permit sign-off, we keep you informed with zero guesswork and zero surprise charges.
          </p>
        </div>

        {/* Process Steps Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative">
          {PROCESS_STEPS.map((step, idx) => {
            const Icon = stepIcons[idx] || ClipboardCheck;
            return (
              <div
                key={idx}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between relative group hover:-translate-y-1"
              >
                <div>
                  {/* Step Number Badge & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-black text-slate-300 group-hover:text-[#F6B02E] font-heading transition-colors">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white text-[#13599A] flex items-center justify-center shadow-sm border border-slate-200 group-hover:bg-[#13599A] group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Highlight pill */}
                  <div className="mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#13599A] bg-blue-100/70 px-2 py-0.5 rounded-full">
                      {step.highlight}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-lg text-[#232323] mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenEstimateModal}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#F6B02E] to-[#D99516] hover:from-[#e59f14] hover:to-[#c6820c] text-slate-900 font-extrabold text-sm shadow-md hover:shadow-lg transition-all cursor-pointer"
          >
            <span>Start Step 1: Book Your Free Inspection</span>
            <ArrowRight className="w-4 h-4 text-slate-900" />
          </button>
        </div>

      </div>
    </section>
  );
};
