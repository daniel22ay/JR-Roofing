import React from 'react';
import { PROCESS_STEPS, COMPANY_INFO } from '../data/roofingData';
import { ProcessTimeline } from '../components/ProcessTimeline';
import { 
  ShieldCheck, 
  FileCheck2, 
  Trash2, 
  ClipboardList, 
  Phone, 
  ArrowRight,
  HardHat,
  Award
} from 'lucide-react';

interface ProcessPageProps {
  onOpenEstimateModal: () => void;
}

export const ProcessPage: React.FC<ProcessPageProps> = ({ onOpenEstimateModal }) => {
  return (
    <div className="bg-white">
      {/* Banner */}
      <section className="bg-gradient-to-b from-[#0D477D] to-[#13599A] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 text-xs font-black tracking-widest uppercase text-[#F6B02E] bg-white/10 px-3 py-1 rounded-full border border-white/15">
            Transparent & Honest
          </div>
          <h1 className="text-3xl sm:text-5xl font-black font-heading tracking-tight">
            Our Proven Roofing Process
          </h1>
          <p className="text-sm sm:text-base text-blue-100 max-w-2xl mx-auto leading-relaxed">
            From the initial on-site roof inspection to municipal permit sign-off and final cleanup, see how Junior and our team ensure total peace of mind.
          </p>
        </div>
      </section>

      {/* Main 5 Steps Timeline Component */}
      <ProcessTimeline onOpenEstimateModal={onOpenEstimateModal} />

      {/* Deep Dive into Our Standards */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-[#232323] font-heading">
              Behind the Scenes: Our Quality Standards
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Here is what happens during each phase to ensure your South Florida roof lasts for decades.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center gap-3 text-[#13599A]">
                <div className="p-3 bg-blue-50 rounded-xl">
                  <FileCheck2 className="w-6 h-6 text-[#13599A]" />
                </div>
                <h3 className="font-heading font-bold text-lg text-slate-900">
                  Municipal Permitting & Engineering
                </h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                South Florida municipal building departments have some of the strictest wind code criteria in the world. We prepare all permit drawings, product approval notices (NOAs), engineering submittals, and schedule in-progress inspections without any hassle to you.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center gap-3 text-[#13599A]">
                <div className="p-3 bg-blue-50 rounded-xl">
                  <Trash2 className="w-6 h-6 text-[#F6B02E]" />
                </div>
                <h3 className="font-heading font-bold text-lg text-slate-900">
                  Daily Property Protection & Magnetic Sweeps
                </h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Tear-offs can be messy if not properly managed. We protect your pool, patio, flower beds, and AC condensing units with heavy tarps and plywood shields. At the end of every work day, we run high-powered rolling magnetic sweeps to collect stray nails and fasteners.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center gap-3 text-[#13599A]">
                <div className="p-3 bg-blue-50 rounded-xl">
                  <HardHat className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="font-heading font-bold text-lg text-slate-900">
                  Certified Skilled Labor & Owner Oversight
                </h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                We do not outsource your project to anonymous subcontractors. Junior and our experienced in-house technicians oversee daily operations, verifying fastener patterns, underlayment lap overlaps, and valley flashing alignments.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center gap-3 text-[#13599A]">
                <div className="p-3 bg-blue-50 rounded-xl">
                  <Award className="w-6 h-6 text-[#13599A]" />
                </div>
                <h3 className="font-heading font-bold text-lg text-slate-900">
                  Final Sign-Off & Official Warranty Packet
                </h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Once the city inspector completes the final inspection and signs off on your building permit, we conduct a final walk-through with you and deliver your complete manufacturer warranty documentation and JR Roofing Solutions workmanship guarantee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Start Step 1 CTA */}
      <section className="py-14 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-4">
          <h3 className="text-2xl sm:text-3xl font-black font-heading text-slate-900">
            Ready to Begin Step 1 with a Free Inspection?
          </h3>
          <p className="text-sm text-slate-600 max-w-xl mx-auto">
            Book your free, no-obligation roof consultation today. Junior and our team are ready to help.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <button
              onClick={onOpenEstimateModal}
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#F6B02E] to-[#D99516] text-slate-900 font-extrabold text-sm shadow cursor-pointer hover:brightness-105 transition-all"
            >
              Request Free Estimate
            </button>
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="px-6 py-3.5 rounded-xl bg-[#13599A] text-white font-bold text-sm shadow hover:bg-[#0D477D] transition-colors flex items-center gap-2"
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
