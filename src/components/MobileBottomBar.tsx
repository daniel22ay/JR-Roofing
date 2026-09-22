import React from 'react';
import { Phone, CalendarCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/roofingData';

interface MobileBottomBarProps {
  onOpenEstimateModal: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onOpenEstimateModal }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 shadow-2xl md:hidden">
      <div className="grid grid-cols-2 gap-2">
        <a
          href={`tel:${COMPANY_INFO.phoneRaw}`}
          className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-[#13599A] text-white font-bold text-xs shadow hover:bg-[#0D477D] transition-colors"
        >
          <Phone className="w-4 h-4 text-[#F6B02E]" />
          <span>Call Now</span>
        </a>

        <button
          onClick={onOpenEstimateModal}
          className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-gradient-to-r from-[#F6B02E] to-[#D99516] text-slate-900 font-extrabold text-xs shadow hover:brightness-105 transition-all"
        >
          <CalendarCheck className="w-4 h-4 text-slate-900" />
          <span>Get Free Quote</span>
        </button>
      </div>
    </div>
  );
};
