import React from 'react';
import { FileSearch, ShieldCheck, Send, Zap, CheckCircle2, ArrowRight } from 'lucide-react';

interface WorkflowSectionProps {
  onOpenAuditModal: () => void;
}

export const WorkflowSection: React.FC<WorkflowSectionProps> = ({ onOpenAuditModal }) => {
  const steps = [
    {
      num: '01',
      title: 'Practice Intake & Primary Source Audit',
      time: 'Days 1 – 2',
      desc: 'We collect provider credentials (licenses, DEA, diplomas, malpractice COI) and conduct a 36-point pre-audit to eliminate typo errors that cause 90% of payer rejections.',
      icon: FileSearch
    },
    {
      num: '02',
      title: 'CAQH ProView & NPI Alignment',
      time: 'Days 3 – 5',
      desc: 'We construct or audit CAQH ProView profiles, verify NUCC specialty taxonomy codes, register or update Group NPI Type 2 profiles, and execute initial attestations.',
      icon: ShieldCheck
    },
    {
      num: '03',
      title: 'Payer Submission & Daily Portal Tracking',
      time: 'Days 6 – 25',
      desc: 'Pristine application packages are submitted to Medicare PECOS, state Medicaid, and commercial panels. Our CVO specialists log into payer portals daily to push approvals.',
      icon: Send
    },
    {
      num: '04',
      title: 'EDI / EFT Direct Deposit Activation',
      time: 'Days 26 – 28',
      desc: 'We establish clearinghouse links (Availity, Change Healthcare) for Electronic Claims (837), ERA (835), and connect Electronic Funds Transfer directly to your practice bank.',
      icon: Zap
    },
    {
      num: '05',
      title: 'Live In-Network Status & Ongoing Maintenance',
      time: 'Ongoing 120-Day Cycle',
      desc: 'Providers begin seeing patients and billing immediately. We manage mandatory 120-day CAQH re-attestations, license renewals, and 3-year re-credentialing automatically.',
      icon: CheckCircle2
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#FAF8F5] border-t border-[#EDE8DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#D97736]">The 28-Day Onboarding Roadmap</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#123829]">
            How We Get Your Medical Practice In-Network & Billing
          </h2>
          <p className="text-base text-[#3D4D45]">
            A predictable, transparent 5-phase process designed for zero administrative friction.
          </p>
        </div>

        {/* Horizontal / Grid Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-[#E6E0D6] shadow-sm flex flex-col justify-between space-y-4 relative group hover:border-[#123829] transition-all"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-serif font-bold text-[#E5B869]">{step.num}</span>
                    <span className="text-[11px] font-semibold bg-[#EFEAE1] text-[#123829] px-2.5 py-1 rounded-full">
                      {step.time}
                    </span>
                  </div>

                  <div className="w-10 h-10 rounded-xl bg-[#123829] text-white flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#E5B869]" />
                  </div>

                  <h3 className="text-lg font-serif font-bold text-[#123829] leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-xs text-[#3D4D45] leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#F0ECE1] text-[10px] font-semibold uppercase tracking-wider text-[#2E5340]">
                  Phase {idx + 1} Verified
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center pt-4">
          <button
            onClick={onOpenAuditModal}
            className="bg-[#123829] hover:bg-[#1C4E3A] text-white px-8 py-4 rounded-full text-sm font-semibold shadow-sm inline-flex items-center gap-2 cursor-pointer"
          >
            <span>Start Phase 1 Practice Audit</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
