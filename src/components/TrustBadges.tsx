import React from 'react';
import { ShieldCheck, Award, Wrench, Clock, FileCheck, DollarSign } from 'lucide-react';

export const TrustBadges: React.FC = () => {
  const trustPoints = [
    {
      icon: ShieldCheck,
      title: "Licensed & Insured",
      desc: "State certified Florida roofing contractor with full liability & workers' comp."
    },
    {
      icon: Award,
      title: "Quality Materials & Warranties",
      desc: "Top-tier products from GAF, Owens Corning, CertainTeed, and premium tile/metal mills."
    },
    {
      icon: Wrench,
      title: "Local South Florida Experts",
      desc: "Decades of deep roots in Pompano Beach, engineered for subtropical heat & hurricane winds."
    },
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      desc: "Free on-site inspections and honest itemized quotes with zero surprise charges."
    },
    {
      icon: FileCheck,
      title: "Permits & Code Handled",
      desc: "We manage all city/county permit filings and pass building inspections cleanly."
    },
    {
      icon: Clock,
      title: "24/7 Storm Leak Response",
      desc: "Immediate emergency tarping and rapid repair dispatch when severe storms hit."
    }
  ];

  return (
    <section className="py-12 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-black tracking-widest uppercase text-[#13599A] bg-blue-100/70 px-3 py-1 rounded-full">
            Why Choose JR Roofing Solutions
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#232323] font-heading mt-2">
            The Trust Signals That Set Us Apart
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Homeowners and property managers trust Junior and our dedicated crew to protect what matters most.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustPoints.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#13599A] flex items-center justify-center flex-shrink-0 border border-blue-100">
                  <Icon className="w-6 h-6 text-[#13599A]" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-[#232323] font-heading mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
