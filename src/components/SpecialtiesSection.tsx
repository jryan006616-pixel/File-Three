import React, { useState } from 'react';
import { User, Users, Globe, Building, CheckCircle2, ArrowRight } from 'lucide-react';

interface SpecialtiesSectionProps {
  onOpenAuditModal: () => void;
}

export const SpecialtiesSection: React.FC<SpecialtiesSectionProps> = ({ onOpenAuditModal }) => {
  const [activeTab, setActiveTab] = useState<string>('solo');

  const practiceTypes = [
    {
      id: 'solo',
      title: 'Solo & Independent Practices',
      icon: User,
      subtitle: 'For doctors launching new practices or leaving hospital systems',
      bullets: [
        'Complete NPI Type 1 & Group NPI Type 2 registration',
        'Medicare PECOS initial filing & Commercial Payer Panel setup',
        'Direct EDI/EFT clearinghouse configuration to personal business account',
        'CAQH ProView creation & 100% compliance guarantee'
      ],
      turnaround: '25 – 30 Days'
    },
    {
      id: 'group',
      title: 'Group Medical Practices',
      icon: Users,
      subtitle: 'For expanding clinics adding associate doctors & mid-levels',
      bullets: [
        'Rapid associate provider onboarding with zero billing gap',
        'Re-linking NPI numbers to practice Group Tax ID',
        'Fee schedule audits to negotiate higher commercial payer rates',
        'Proactive 120-day CAQH attestation management across all providers'
      ],
      turnaround: '28 Days Average'
    },
    {
      id: 'telehealth',
      title: 'Multi-State Telehealth Platforms',
      icon: Globe,
      subtitle: 'For digital health groups scaling providers across multiple state lines',
      bullets: [
        'Interstate Medical Licensure Compact (IMLC) & 50-State Licensing',
        'Synchronized multi-state CAQH ProView profiles',
        'Out-of-state Medicaid & Commercial payer panel enrollments',
        'Delegated credentialing support & custom API portal integration'
      ],
      turnaround: 'Expedited 30 – 45 Days'
    },
    {
      id: 'asc',
      title: 'Urgent Care & Surgery Centers (ASC)',
      icon: Building,
      subtitle: 'For outpatient centers requiring hospital privileges & facility contracts',
      bullets: [
        'Hospital medical staff privileging & facility CVO file preparation',
        'ASC facility insurance contracting & Medicare facility enrollment',
        'Complex clearinghouse ERA 835 setup for facility claims',
        'Annual CVO re-appointment & accreditation audit trails'
      ],
      turnaround: '35 – 45 Days'
    }
  ];

  const currentType = practiceTypes.find(p => p.id === activeTab) || practiceTypes[0];
  const Icon = currentType.icon;

  return (
    <section className="py-16 lg:py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#D97736]">Tailored Practice Models</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#123829]">
            Built Specifically for Your Medical Practice Architecture
          </h2>
          <p className="text-base text-[#3D4D45]">
            Whether you are a solo practitioner launching an independent clinic or a 40-provider multi-state telehealth platform, we tailor our CVO workflow to your exact specialty needs.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {practiceTypes.map((type) => {
            const TabIcon = type.icon;
            return (
              <button
                key={type.id}
                onClick={() => setActiveTab(type.id)}
                className={`px-5 py-3 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                  activeTab === type.id
                    ? 'bg-[#123829] text-white shadow-md'
                    : 'bg-white text-[#2C3B34] border border-[#E6E0D6] hover:bg-[#EFEAE1]'
                }`}
              >
                <TabIcon className="w-4 h-4 text-[#E5B869]" />
                <span>{type.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Content Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E6E0D6] shadow-sm grid lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#EFEAE1] flex items-center justify-center text-[#123829]">
                <Icon className="w-6 h-6 text-[#123829]" />
              </div>
              <div>
                <span className="text-xs font-semibold text-[#D97736] uppercase tracking-wider">Solution Brief</span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#123829]">{currentType.title}</h3>
              </div>
            </div>

            <p className="text-base text-[#3D4D45] font-medium">
              {currentType.subtitle}
            </p>

            <div className="grid sm:grid-cols-2 gap-3 pt-2">
              {currentType.bullets.map((b, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#2C3B34]">
                  <CheckCircle2 className="w-4 h-4 text-[#2E5340] shrink-0 mt-0.5" />
                  <span>{b}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-4 border-t border-[#F0ECE1]">
              <button
                onClick={onOpenAuditModal}
                className="bg-[#123829] hover:bg-[#1C4E3A] text-white px-6 py-3 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Book {currentType.title} Audit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <span className="text-xs text-[#5C6B64]">Target Onboarding: <strong className="text-[#123829]">{currentType.turnaround}</strong></span>
            </div>
          </div>

          <div className="lg:col-span-4 bg-[#123829] text-white p-6 rounded-2xl space-y-4 border border-[#254F3B]">
            <span className="text-xs font-semibold text-[#E5B869] uppercase tracking-wider">Key Department Guarantee</span>
            <p className="text-xl font-serif font-bold text-white">
              Zero Claim Holds & 100% HIPAA BAA Compliance
            </p>
            <p className="text-xs text-[#B2C7BC] leading-relaxed">
              We sign a formal Business Associate Agreement (BAA) with your practice and provide primary source verification audit trails for every payer application.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
