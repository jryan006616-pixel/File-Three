import React, { useState } from 'react';
import { X, ShieldCheck, CheckCircle2, Calendar, Clock, Send, Sparkles } from 'lucide-react';
import { ConsultationFormData } from '../types';

interface AuditBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: any;
}

export const AuditBookingModal: React.FC<AuditBookingModalProps> = ({ isOpen, onClose, initialData }) => {
  const [formData, setFormData] = useState<ConsultationFormData>({
    practiceName: '',
    contactName: '',
    email: '',
    phone: '',
    practiceType: initialData?.practiceType || 'Primary Care',
    providerCount: initialData?.providerCount || '3',
    primaryState: 'Texas',
    servicesNeeded: ['Payer Enrollment', 'EDI & EFT Setup'],
    notes: initialData?.estimatedRevenueUnlocked 
      ? `Calculated potential revenue loss avoided: $${initialData.estimatedRevenueUnlocked.toLocaleString()}`
      : ''
  });

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<string>('2026-07-29');
  const [selectedTime, setSelectedTime] = useState<string>('10:00 AM CST');

  if (!isOpen) return null;

  const toggleService = (service: string) => {
    if (formData.servicesNeeded.includes(service)) {
      setFormData({
        ...formData,
        servicesNeeded: formData.servicesNeeded.filter(s => s !== service)
      });
    } else {
      setFormData({
        ...formData,
        servicesNeeded: [...formData.servicesNeeded, service]
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 max-h-[92vh] overflow-y-auto border border-[#E6E0D6] shadow-2xl relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#5C6B64] hover:text-[#123829] rounded-lg bg-[#FAF8F5] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="space-y-2 border-b border-[#F0ECE1] pb-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBF0ED] text-[#123829] text-xs font-semibold">
                <ShieldCheck className="w-4 h-4 text-[#D97736]" />
                <span>Compliant Practice Assessment</span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#123829]">
                Schedule Your Free 15-Min Credentialing Audit
              </h3>
              <p className="text-xs text-[#5C6B64]">
                A Senior CVO Specialist will review your provider files, CAQH profiles, and EDI/EFT setup to map out a 28-day onboarding plan.
              </p>
            </div>

            {/* Practice Details */}
            <div className="grid sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="text-[#123829] font-semibold block mb-1">Practice Name *</label>
                <input
                  type="text"
                  required
                  value={formData.practiceName}
                  onChange={(e) => setFormData({ ...formData, practiceName: e.target.value })}
                  placeholder="e.g. Apex Health Partners"
                  className="w-full p-3 bg-[#FAF8F5] border border-[#E6E0D6] rounded-xl text-sm font-medium text-[#123829] focus:outline-none focus:ring-2 focus:ring-[#123829]"
                />
              </div>

              <div>
                <label className="text-[#123829] font-semibold block mb-1">Contact Name & Title *</label>
                <input
                  type="text"
                  required
                  value={formData.contactName}
                  onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                  placeholder="e.g. Dr. Sarah Jenkins, Director"
                  className="w-full p-3 bg-[#FAF8F5] border border-[#E6E0D6] rounded-xl text-sm font-medium text-[#123829] focus:outline-none focus:ring-2 focus:ring-[#123829]"
                />
              </div>

              <div>
                <label className="text-[#123829] font-semibold block mb-1">Email Address *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="s.jenkins@apexhealth.com"
                  className="w-full p-3 bg-[#FAF8F5] border border-[#E6E0D6] rounded-xl text-sm font-medium text-[#123829] focus:outline-none focus:ring-2 focus:ring-[#123829]"
                />
              </div>

              <div>
                <label className="text-[#123829] font-semibold block mb-1">Phone Number *</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="(512) 555-0199"
                  className="w-full p-3 bg-[#FAF8F5] border border-[#E6E0D6] rounded-xl text-sm font-medium text-[#123829] focus:outline-none focus:ring-2 focus:ring-[#123829]"
                />
              </div>

              <div>
                <label className="text-[#123829] font-semibold block mb-1">Number of Providers</label>
                <select
                  value={formData.providerCount}
                  onChange={(e) => setFormData({ ...formData, providerCount: e.target.value })}
                  className="w-full p-3 bg-[#FAF8F5] border border-[#E6E0D6] rounded-xl text-sm font-medium text-[#123829] focus:outline-none focus:ring-2 focus:ring-[#123829]"
                >
                  <option value="1">Solo (1 Provider)</option>
                  <option value="2-3">2 – 3 Providers</option>
                  <option value="4-10">4 – 10 Providers</option>
                  <option value="11-25">11 – 25 Providers</option>
                  <option value="26+">26+ Enterprise Network</option>
                </select>
              </div>

              <div>
                <label className="text-[#123829] font-semibold block mb-1">Primary Operating State</label>
                <input
                  type="text"
                  value={formData.primaryState}
                  onChange={(e) => setFormData({ ...formData, primaryState: e.target.value })}
                  placeholder="e.g. Texas, Florida, NY"
                  className="w-full p-3 bg-[#FAF8F5] border border-[#E6E0D6] rounded-xl text-sm font-medium text-[#123829] focus:outline-none focus:ring-2 focus:ring-[#123829]"
                />
              </div>
            </div>

            {/* Checkboxes: Services Needed */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-[#123829] uppercase tracking-wider block">
                Select Department Focus Areas:
              </label>
              <div className="grid sm:grid-cols-2 gap-2 text-xs">
                {[
                  'Payer Enrollment',
                  'EDI 837/835 & EFT Setup',
                  'CAQH ProView Maintenance',
                  'Multi-State Licensing & IMLC',
                  'Hospital Privileging',
                  'Fee Schedule Negotiations'
                ].map((s) => (
                  <label
                    key={s}
                    onClick={() => toggleService(s)}
                    className={`flex items-center gap-2 p-2.5 rounded-xl border cursor-pointer transition-all ${
                      formData.servicesNeeded.includes(s)
                        ? 'bg-[#EBF0ED] border-[#123829] text-[#123829] font-semibold'
                        : 'bg-[#FAF8F5] border-[#EDE8DF] text-[#3D4D45]'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={formData.servicesNeeded.includes(s)}
                      readOnly
                      className="accent-[#123829]"
                    />
                    <span>{s}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Appointment Date & Time Picker */}
            <div className="grid sm:grid-cols-2 gap-4 bg-[#FAF8F5] p-4 rounded-2xl border border-[#EDE8DF] text-xs">
              <div>
                <label className="text-[#123829] font-semibold block mb-1 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#D97736]" /> Preferred Audit Date:
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full p-2 bg-white border border-[#E6E0D6] rounded-xl text-xs font-medium text-[#123829]"
                />
              </div>

              <div>
                <label className="text-[#123829] font-semibold block mb-1 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#D97736]" /> Preferred Time Slot:
                </label>
                <select
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="w-full p-2 bg-white border border-[#E6E0D6] rounded-xl text-xs font-medium text-[#123829]"
                >
                  <option value="09:00 AM CST">09:00 AM CST</option>
                  <option value="10:00 AM CST">10:00 AM CST</option>
                  <option value="01:30 PM CST">01:30 PM CST</option>
                  <option value="03:00 PM CST">03:00 PM CST</option>
                </select>
              </div>
            </div>

            {/* Notes */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-[#123829] block">Practice Notes / Payer Focus:</label>
              <textarea
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                rows={2}
                placeholder="Mention specific payers (e.g. Medicare PECOS, BCBS TX) or urgent deadlines..."
                className="w-full p-3 bg-[#FAF8F5] border border-[#E6E0D6] rounded-xl text-xs text-[#123829] focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#123829] hover:bg-[#1C4E3A] text-white py-4 rounded-full font-semibold transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer text-sm"
            >
              <span>Confirm Practice Audit Booking</span>
              <Send className="w-4 h-4 text-[#E5B869]" />
            </button>

          </form>
        ) : (
          <div className="py-8 text-center space-y-6 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#D97736]">Consultation Confirmed</span>
              <h3 className="text-3xl font-serif font-bold text-[#123829]">
                Practice Audit Scheduled!
              </h3>
              <p className="text-sm text-[#3D4D45] max-w-md mx-auto">
                Thank you, <strong className="text-[#123829]">{formData.contactName}</strong>. A calendar invitation and pre-audit intake checklist have been sent to <strong className="text-[#123829]">{formData.email}</strong>.
              </p>
            </div>

            <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-[#EDE8DF] text-left text-xs max-w-md mx-auto space-y-2 text-[#2C3B34]">
              <div className="flex justify-between border-b border-[#E6E0D6] pb-2">
                <span className="text-[#5C6B64]">Practice:</span>
                <span className="font-bold text-[#123829]">{formData.practiceName}</span>
              </div>
              <div className="flex justify-between border-b border-[#E6E0D6] pb-2">
                <span className="text-[#5C6B64]">Scheduled Time:</span>
                <span className="font-bold text-[#123829]">{selectedDate} at {selectedTime}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#5C6B64]">Assigned Specialist:</span>
                <span className="font-bold text-[#123829]">Senior CVO Director</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="bg-[#123829] text-white px-8 py-3 rounded-full text-xs font-semibold hover:bg-[#1C4E3A] transition-colors"
            >
              Back to Rhino MDs Portal
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
