import React from 'react';
import { ROOF_COMPARISON } from '../data/roofingData';
import { Check, ShieldCheck, HelpCircle } from 'lucide-react';

interface ComparisonTableProps {
  onOpenEstimateModal: () => void;
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({ onOpenEstimateModal }) => {
  return (
    <section className="py-16 bg-slate-50 border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-black tracking-widest uppercase text-[#13599A] bg-blue-100/70 px-3 py-1 rounded-full">
            Compare Roofing Materials
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#232323] font-heading mt-2">
            Which Roof is Best for Your South Florida Home?
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Compare hurricane resistance, expected lifespan, initial investment, and energy efficiency across our most requested roofing systems.
          </p>
        </div>

        {/* Table Container */}
        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#13599A] text-white">
                <th className="py-4 px-6 text-sm font-bold font-heading">Roofing System</th>
                <th className="py-4 px-6 text-sm font-bold font-heading">Wind Rating</th>
                <th className="py-4 px-6 text-sm font-bold font-heading">Lifespan</th>
                <th className="py-4 px-6 text-sm font-bold font-heading">Energy Efficiency</th>
                <th className="py-4 px-6 text-sm font-bold font-heading">Cost Tier</th>
                <th className="py-4 px-6 text-sm font-bold font-heading">Maintenance</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {ROOF_COMPARISON.map((row, idx) => (
                <tr 
                  key={idx} 
                  className={idx % 2 === 0 ? 'bg-white hover:bg-blue-50/40' : 'bg-slate-50/70 hover:bg-blue-50/40'}
                >
                  <td className="py-4 px-6 font-bold text-slate-900">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#F6B02E]"></span>
                      <span>{row.type}</span>
                    </div>
                    <div className="text-xs text-slate-500 font-normal mt-0.5">{row.floridaSuitability}</div>
                  </td>
                  <td className="py-4 px-6 text-slate-700 font-semibold">
                    <span className="inline-flex items-center gap-1 text-slate-800">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      {row.windRating}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-slate-700 font-medium">{row.lifespan}</td>
                  <td className="py-4 px-6 text-slate-700 font-medium">{row.energyEfficiency}</td>
                  <td className="py-4 px-6">
                    <span className="font-bold text-[#13599A] bg-blue-50 px-2 py-1 rounded text-xs">
                      {row.costTier}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-slate-600">{row.maintenance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer Note & Help */}
        <div className="mt-8 p-4 rounded-xl bg-blue-50/80 border border-blue-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <HelpCircle className="w-6 h-6 text-[#13599A] flex-shrink-0" />
            <div className="text-xs sm:text-sm text-slate-700">
              <strong>Need help deciding?</strong> Junior and our technical team provide personalized recommendations based on your home's structural framing and HOA guidelines.
            </div>
          </div>
          <button
            onClick={onOpenEstimateModal}
            className="px-5 py-2 rounded-lg bg-[#13599A] hover:bg-[#0D477D] text-white font-bold text-xs shadow transition-colors flex-shrink-0 cursor-pointer"
          >
            Ask Our Specialist
          </button>
        </div>

      </div>
    </section>
  );
};
