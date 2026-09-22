import React, { useState } from 'react';
import { COMPANY_INFO, SERVICES } from '../data/roofingData';
import { Phone, Mail, MapPin, Clock, ShieldCheck, Send, CheckCircle2, Sparkles } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'tile-roofing',
    propertyType: 'Residential',
    address: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#0D477D] to-[#13599A] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 text-xs font-black tracking-widest uppercase text-[#F6B02E] bg-white/10 px-3 py-1 rounded-full border border-white/15">
            Get In Touch
          </div>
          <h1 className="text-3xl sm:text-5xl font-black font-heading tracking-tight">
            Contact JR Roofing Solutions
          </h1>
          <p className="text-sm sm:text-base text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Schedule your free on-site roof inspection with Junior and our South Florida crew. Serving Broward, Palm Beach, and Miami-Dade.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Contact Information & HQ Column */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-black tracking-widest uppercase text-[#13599A] bg-blue-50 px-3 py-1 rounded-full">
                  Direct Contact
                </span>
                <h2 className="text-3xl font-extrabold text-[#232323] font-heading mt-2">
                  We're Here to Help
                </h2>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  Call us directly or send a message. Our team responds quickly to schedule free inspections and provide transparent quotes.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {/* Phone Card */}
                <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50 flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#13599A] text-white flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#F6B02E]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Phone Lines</div>
                    <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="text-base font-bold text-[#13599A] hover:underline block mt-0.5">
                      {COMPANY_INFO.phone} (Primary)
                    </a>
                    <a href={`tel:${COMPANY_INFO.spanishPhoneRaw}`} className="text-xs font-semibold text-slate-700 hover:underline block mt-0.5">
                      Línea en Español: {COMPANY_INFO.spanishPhone}
                    </a>
                  </div>
                </div>

                {/* Email Card */}
                <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50 flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#13599A] text-white flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#F6B02E]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Email Us</div>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-sm font-semibold text-slate-800 hover:text-[#13599A] transition-colors break-all block mt-0.5">
                      {COMPANY_INFO.email}
                    </a>
                    <div className="text-xs text-slate-500 mt-0.5">Fast response for bids and estimates</div>
                  </div>
                </div>

                {/* Location Card */}
                <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50 flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#13599A] text-white flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#F6B02E]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Office & Yard</div>
                    <div className="text-sm font-semibold text-slate-900 mt-0.5">
                      {COMPANY_INFO.address.street}
                    </div>
                    <div className="text-xs text-slate-500">
                      {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} {COMPANY_INFO.address.zip} ({COMPANY_INFO.address.county})
                    </div>
                  </div>
                </div>

                {/* Hours Card */}
                <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50 flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#13599A] text-white flex-shrink-0">
                    <Clock className="w-5 h-5 text-[#F6B02E]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Working Hours</div>
                    <div className="text-sm font-semibold text-slate-900 mt-0.5">
                      Monday – Saturday: 7:00 AM – 6:00 PM
                    </div>
                    <div className="text-xs text-emerald-700 font-bold mt-0.5">
                      24/7 Emergency Storm Leak Service
                    </div>
                  </div>
                </div>
              </div>

              {/* License Badge */}
              <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 flex items-center gap-3 text-xs text-slate-700">
                <ShieldCheck className="w-5 h-5 text-[#F6B02E] flex-shrink-0" />
                <span>
                  <strong>Certified Florida Roofing Contractor:</strong> Fully licensed and insured for both residential and commercial projects.
                </span>
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xl">
                {submitted ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-black text-slate-800 font-heading">
                      Request Received!
                    </h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                      Thank you for contacting JR Roofing Solutions. Junior or an estimator will contact you promptly at <strong className="text-slate-900">{formData.phone}</strong> to confirm your free inspection appointment.
                    </p>
                    <div className="pt-4">
                      <a
                        href={`tel:${COMPANY_INFO.phoneRaw}`}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#13599A] text-white text-sm font-bold shadow hover:bg-[#0D477D] transition-colors"
                      >
                        <Phone className="w-4 h-4 text-[#F6B02E]" />
                        <span>Need Immediate Assistance? Call {COMPANY_INFO.phone}</span>
                      </a>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
                      <div>
                        <h3 className="text-xl font-bold font-heading text-slate-900">
                          Request a Free Roof Estimate
                        </h3>
                        <p className="text-xs text-slate-500 mt-1">
                          No obligation • Itemized proposal • Expert evaluation
                        </p>
                      </div>
                      <div className="hidden sm:block text-right">
                        <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                          100% Free
                        </span>
                      </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="Full name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#13599A]"
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
                            className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#13599A]"
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
                            className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#13599A]"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                            Roofing Service *
                          </label>
                          <select
                            value={formData.service}
                            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                            className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#13599A]"
                          >
                            {SERVICES.map((s) => (
                              <option key={s.id} value={s.id}>
                                {s.name}
                              </option>
                            ))}
                            <option value="emergency-repair">Emergency Leak / Storm Damage</option>
                            <option value="inspection">21-Point Roof Inspection</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                            Property Address & City *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="Street address, City, Zip"
                            value={formData.address}
                            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                            className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#13599A]"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                            Property Type
                          </label>
                          <select
                            value={formData.propertyType}
                            onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                            className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#13599A]"
                          >
                            <option value="Residential">Residential Home</option>
                            <option value="Townhome / Villa">Townhome / Villa</option>
                            <option value="Commercial">Commercial Facility</option>
                            <option value="Condominium / HOA">Condominium / HOA</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Project Details or Roof Symptoms
                        </label>
                        <textarea
                          rows={4}
                          placeholder="Describe leak locations, roof age, storm damage, or specific material preferences..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#13599A]"
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#F6B02E] to-[#D99516] hover:from-[#e59f14] hover:to-[#c6820c] text-slate-900 font-extrabold text-base shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                      >
                        {loading ? (
                          <span>Submitting Request...</span>
                        ) : (
                          <>
                            <Send className="w-4 h-4 text-slate-900" />
                            <span>Submit Free Estimate Request</span>
                          </>
                        )}
                      </button>
                    </form>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
