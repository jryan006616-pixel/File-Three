import React, { useState } from 'react';
import { CREDENTIALING_SERVICES } from '../data/credentialingData';
import { CredentialingService } from '../types';
import { 
  FileCheck2, Zap, ShieldCheck, Globe2, Fingerprint, Building2, TrendingUp, History,
  CheckCircle2, ArrowRight, X, Clock, Shield
} from 'lucide-react';

interface ServicesMatrixProps {
  onOpenAuditModal: () => void;
}

export const ServicesMatrix: React.FC<ServicesMatrixProps> = ({ onOpenAuditModal }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedService, setSelectedService] = useState<CredentialingService | null>(null);

  const filteredServices = CREDENTIALING_SERVICES.filter(service => {
    if (activeCategory === 'all') return true;
    return service.category === activeCategory;
  });

  const getIcon = (name: string) => {
    switch (name) {
      case 'FileCheck2': return <FileCheck2 className="w-6 h-6 text-[#123829]" />;
      case 'Zap': return <Zap className="w-6 h-6 text-[#D97736]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-[#123829]" />;
      case 'Globe2': return <Globe2 className="w-6 h-6 text-[#123829]" />;
      case 'Fingerprint': return <Fingerprint className="w-6 h-6 text-[#123829]" />;
      case 'Building2': return <Building2 className="w-6 h-6 text-[#123829]" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-[#D97736]" />;
      case 'ClockCheck': return <History className="w-6 h-6 text-[#123829]" />;
      default: return <FileCheck2 className="w-6 h-6 text-[#123829]" />;
    }
  };

  return (
    <section id="services" className="py-16 lg:py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#E6E0D6] pb-8">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#D97736]">Department Scope</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#123829]">
              Full-Spectrum Medical Practice Credentialing & Payer Operations
            </h2>
            <p className="text-base text-[#3D4D45]">
              Everything required to get your practice in-network, compliant, electronically connected, and paid without administrative drag.
            </p>
          </div>

          <button
            onClick={onOpenAuditModal}
            className="self-start md:self-end bg-[#123829] hover:bg-[#1C4E3A] text-white px-6 py-3 rounded-full text-sm font-medium transition-all shadow-sm flex items-center gap-2 cursor-pointer"
          >
            <span>Request Custom Service Audit</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 text-sm">
          {[
            { id: 'all', label: 'All Credentialing Services' },
            { id: 'enrollment', label: 'Payer Enrollment & NPI' },
            { id: 'clearinghouse', label: 'EDI & EFT Activation' },
            { id: 'licensing', label: 'Multi-State Licensing & Privileges' },
            { id: 'maintenance', label: 'CAQH & Rate Audits' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-4 py-2.5 rounded-full font-medium transition-all cursor-pointer ${
                activeCategory === tab.id
                  ? 'bg-[#123829] text-white shadow-sm'
                  : 'bg-white text-[#2C3B34] border border-[#E6E0D6] hover:bg-[#EFEAE1]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid of Services */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white p-6 rounded-2xl border border-[#E6E0D6] hover:border-[#123829]/40 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#EFEAE1] flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="text-[11px] font-semibold bg-[#EBF0ED] text-[#123829] px-2.5 py-1 rounded-full border border-[#C5D8CD]">
                    {service.turnaroundDays}
                  </span>
                </div>

                <h3 className="text-xl font-serif font-bold text-[#123829] group-hover:text-[#2E5340] transition-colors">
                  {service.title}
                </h3>

                <p className="text-sm text-[#3D4D45] leading-relaxed">
                  {service.shortDesc}
                </p>

                <ul className="space-y-2 pt-2 border-t border-[#F0ECE1]">
                  {service.deliverables.slice(0, 3).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-[#2C3B34]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2E5340] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-[#F0ECE1] flex items-center justify-between mt-6">
                <span className="text-xs text-[#5C6B64] font-medium">{service.payerCoverage}</span>
                <button
                  onClick={() => setSelectedService(service)}
                  className="text-xs font-semibold text-[#123829] group-hover:text-[#D97736] flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Spotlight Banner with Image */}
        <div className="bg-[#123829] text-white rounded-3xl p-8 sm:p-10 border border-[#254F3B] grid lg:grid-cols-12 gap-8 items-center mt-12">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#E5B869] flex items-center gap-1.5">
              <Zap className="w-4 h-4" /> EDI & EFT Clearinghouse Specialization
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold">
              Why EDI 837 / 835 Claims & EFT Direct Deposit Matter
            </h3>
            <p className="text-sm text-[#B2C7BC] leading-relaxed">
              Many billing agencies submit credentialing applications but leave practice owners stranded when claims bounce due to missing EDI clearinghouse mappings or paper check delays. VerifiMed configures full direct electronic claims (837), remittance (835), and EFT bank linkage directly with Availity, Change Healthcare, and major payers.
            </p>
            <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-[#E5B869]">
              <span>✓ Availity Clearinghouse Partner</span>
              <span>✓ Change Healthcare Integration</span>
              <span>✓ Waystar & Optum Compatibility</span>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <img
              src="/src/assets/images/credentialing_workspace_1785178250960.jpg"
              alt="Medical practice administration workspace with provider licensing files"
              className="w-full h-56 rounded-2xl object-cover border border-[#254F3B] shadow-md"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto border border-[#E6E0D6] shadow-2xl relative">
            
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 p-2 text-[#5C6B64] hover:text-[#123829] rounded-lg bg-[#FAF8F5] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#EFEAE1] flex items-center justify-center">
                {getIcon(selectedService.iconName)}
              </div>
              <div>
                <span className="text-xs font-semibold text-[#D97736] uppercase tracking-wider">Service Deep-Dive</span>
                <h3 className="text-2xl font-serif font-bold text-[#123829]">{selectedService.title}</h3>
              </div>
            </div>

            <p className="text-sm text-[#3D4D45] leading-relaxed bg-[#FAF8F5] p-4 rounded-xl border border-[#EDE8DF]">
              {selectedService.fullDesc}
            </p>

            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-[#123829]">Key Department Deliverables:</h4>
              <ul className="space-y-2">
                {selectedService.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-[#2C3B34]">
                    <CheckCircle2 className="w-4 h-4 text-[#2E5340] shrink-0 mt-0.5" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 bg-[#EFEAE1] p-4 rounded-xl text-xs text-[#123829]">
              <div>
                <span className="text-[#5C6B64] block font-medium">Turnaround Target:</span>
                <span className="font-bold text-sm text-[#123829]">{selectedService.turnaroundDays}</span>
              </div>
              <div>
                <span className="text-[#5C6B64] block font-medium">Payer Panel Coverage:</span>
                <span className="font-bold text-sm text-[#123829]">{selectedService.payerCoverage}</span>
              </div>
            </div>

            <div className="pt-4 flex items-center justify-end gap-3 border-t border-[#E6E0D6]">
              <button
                onClick={() => setSelectedService(null)}
                className="px-4 py-2 text-xs font-semibold text-[#5C6B64] hover:text-[#123829]"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setSelectedService(null);
                  onOpenAuditModal();
                }}
                className="bg-[#123829] hover:bg-[#1C4E3A] text-white px-5 py-2.5 rounded-full text-xs font-semibold transition-all"
              >
                Add to Practice Audit
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
