import React, { useState } from 'react';
import { X, ShieldCheck, Phone, CheckCircle2, Send, Calendar, Sparkles } from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../data/roofingData';

interface EstimateModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const EstimateModal: React.FC<EstimateModalProps> = ({ isOpen, onClose, defaultService = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: defaultService || 'tile-roofing',
    propertyType: 'Residential (Single Family)',
    address: '',
    timeline: 'Immediate / Urgent',
    details: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#13599A] text-white p-5 sm:p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 bg-[#F6B02E]/20 text-[#F6B02E] text-xs font-black tracking-wide uppercase px-2.5 py-1 rounded-full mb-2 border border-[#F6B02E]/30">
            <Sparkles className="w-3.5 h-3.5" />
            100% Free • No Obligation Quote
          </div>

          <h2 className="text-xl sm:text-2xl font-black font-heading text-white">
            Schedule Your Free Roof Estimate
          </h2>
          <p className="text-xs sm:text-sm text-blue-100 mt-1">
            JR Roofing Solutions • Pompano Beach & South Florida
          </p>
        </div>

        {/* Content body */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-black text-slate-800 font-heading">
                Thank You, {formData.name || 'Valued Customer'}!
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Your request has been received by Junior and the JR Roofing Solutions team. We will call you at <strong className="text-slate-900">{formData.phone}</strong> promptly to confirm your on-site inspection time.
              </p>

              <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 text-xs text-slate-700 max-w-md mx-auto text-left space-y-2 mt-4">
                <div className="font-bold text-[#13599A] text-sm flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#F6B02E]" />
                  What to expect next:
                </div>
                <ul className="space-y-1 list-disc list-inside text-slate-600">
                  <li>Direct consultation with our South Florida roofing technician</li>
                  <li>In-person structural & waterproofing inspection</li>
                  <li>Clear, itemized proposal with zero hidden fees</li>
                </ul>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#13599A] text-white text-sm font-bold shadow hover:bg-[#0D477D] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#F6B02E]" />
                  <span>Call Us Now: {COMPANY_INFO.phone}</span>
                </a>
                <button
                  onClick={handleReset}
                  className="px-5 py-2.5 rounded-lg bg-slate-100 text-slate-700 text-sm font-semibold hover:bg-slate-200 transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Michael Smith"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#13599A] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(954) 555-0123"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#13599A] focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#13599A] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Service Required *
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#13599A] focus:border-transparent"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.name}
                      </option>
                    ))}
                    <option value="emergency-repair">Emergency Leak / Storm Damage</option>
                    <option value="roof-inspection">21-Point Roof Inspection</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Property Address / City *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Pompano Beach, FL 33064"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#13599A] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Property Type
                  </label>
                  <select
                    value={formData.propertyType}
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#13599A] focus:border-transparent"
                  >
                    <option value="Residential (Single Family)">Single Family Residential</option>
                    <option value="Townhome / Villa">Townhome / Villa</option>
                    <option value="Commercial / Industrial">Commercial / Industrial</option>
                    <option value="Condominium / HOA">Condominium / HOA Community</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Project Details / Roof Age or Symptoms
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about leaks, missing shingles/tiles, roof age, or hurricane damage..."
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#13599A] focus:border-transparent"
                ></textarea>
              </div>

              {/* Trust Callout */}
              <div className="flex items-center gap-2 text-[11px] text-slate-500 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                <ShieldCheck className="w-4 h-4 text-[#F6B02E] flex-shrink-0" />
                <span>
                  Your information is strictly protected. Licensed Florida Roofing Contractor. We never sell your data.
                </span>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#F6B02E] to-[#D99516] hover:from-[#e59f14] hover:to-[#c6820c] text-slate-900 font-extrabold text-base shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {submitting ? (
                  <span>Processing Estimate Request...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-slate-900" />
                    <span>Submit Free Quote Request</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
