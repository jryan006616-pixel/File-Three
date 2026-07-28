import React, { useState } from 'react';
import { Sparkles, ArrowRight, CheckCircle2, ShieldCheck, Clock, FileSearch, Zap } from 'lucide-react';

interface VerifiMedDifferenceSectionProps {
  onOpenAuditModal: () => void;
}

export const VerifiMedDifferenceSection: React.FC<VerifiMedDifferenceSectionProps> = ({ onOpenAuditModal }) => {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const auditSteps = [
    {
      step: 1,
      title: 'Submit Practice File',
      desc: 'Upload NPI & License documents in 5 mins'
    },
    {
      step: 2,
      title: 'Deep CVO & RVU Audit',
      desc: '100% rule-check against 500+ payer guidelines'
    },
    {
      step: 3,
      title: 'Actionable Rate Report',
      desc: 'Clear roadmap to 28-day billing activation'
    }
  ];

  return (
    <section id="difference" className="py-20 lg:py-28 bg-[#123829] text-white select-none border-t border-[#254F3B] relative overflow-hidden">
      
      {/* Subtle Background Radial Accent */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#1F543F] rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#28614A] rounded-full blur-3xl opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Parsley Style Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1C4E3A] border border-[#2B6049] text-[#E5B869] text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-4 h-4 text-[#E5B869]" />
            <span>The CVO Benchmark</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#FAF8F5] leading-tight">
            Experience the Rhino MDs Difference
          </h2>

          <p className="text-base sm:text-lg text-[#B2C7BC] font-sans leading-relaxed">
            Choose between full end-to-end credentialing department management or a focused, one-time provider file & fee schedule audit.
          </p>
        </div>

        {/* 2-Card Side-by-Side Grid (Exact Parsley Health Layout) */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Card 1: Full CVO Ongoing Program (Left Card) */}
          <div className="lg:col-span-5 bg-[#FAF8F5] text-[#123829] rounded-3xl p-8 sm:p-10 border border-[#EDE8DF] shadow-xl flex flex-col justify-between space-y-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-[#D97736] group relative overflow-hidden">
            
            {/* Top Eyebrow & Title */}
            <div className="space-y-4">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#D97736] block">
                ONGOING PRACTICE MANAGEMENT
              </span>

              <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#123829] group-hover:text-[#2E5340] transition-colors">
                Complete Care CVO
              </h3>

              <p className="text-sm text-[#3D4D45] leading-relaxed font-sans pt-1">
                Our flagship credentialing program gives your practice a dedicated CVO team that guides you through a personalized enrollment plan to prepare, attest, and maintain 100% of your provider files, CAQH profiles, and commercial payer contracts.
              </p>

              {/* Key Highlights */}
              <div className="space-y-3 pt-4 border-t border-[#E6E0D6]">
                <div className="flex items-center gap-2.5 text-xs font-semibold text-[#123829] group-hover:translate-x-1 transition-transform duration-300">
                  <CheckCircle2 className="w-4 h-4 text-[#2E5340] shrink-0" />
                  <span>28-Day Target Time-to-Bill SLA Guarantee</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-semibold text-[#123829] group-hover:translate-x-1 transition-transform duration-300 delay-75">
                  <CheckCircle2 className="w-4 h-4 text-[#2E5340] shrink-0" />
                  <span>120-Day Automated CAQH ProView Re-attestation</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-semibold text-[#123829] group-hover:translate-x-1 transition-transform duration-300 delay-150">
                  <CheckCircle2 className="w-4 h-4 text-[#2E5340] shrink-0" />
                  <span>EDI 837 Claims & EFT Direct Deposit Setup</span>
                </div>
              </div>
            </div>

            {/* Bottom Pricing & CTA */}
            <div className="space-y-5 pt-6 border-t border-[#E6E0D6]">
              <div className="space-y-1">
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl sm:text-3xl font-serif font-bold text-[#123829]">Starting at $249</span>
                  <span className="text-xs text-[#5C6B64] font-medium">/ provider / month</span>
                </div>
                <p className="text-xs font-semibold text-[#D97736]">
                  Commercial insurance panels & Medicare PECOS included
                </p>
                <p className="text-[11px] text-[#829E90]">
                  12-month practice service commitment
                </p>
              </div>

              <button
                onClick={onOpenAuditModal}
                className="w-full bg-[#D97736] hover:bg-[#C2652A] text-white py-4 px-6 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer group-hover:scale-[1.02]"
              >
                <span>Enroll Practice Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

          {/* Card 2: One-Time File & Fee Schedule Audit (Right Card) */}
          <div className="lg:col-span-7 bg-[#FAF8F5] text-[#123829] rounded-3xl p-8 sm:p-10 border border-[#EDE8DF] shadow-xl flex flex-col justify-between space-y-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-[#123829] group relative overflow-hidden">
            
            <div className="space-y-6">
              {/* Top Eyebrow & Title */}
              <div className="space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#2E5340] block">
                  PRACTICE AUDIT & FEE SCHEDULE
                </span>

                <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#123829] group-hover:text-[#2E5340] transition-colors">
                  Clinical File & Contract Review
                </h3>
              </div>

              {/* Timeline Graphic Steps (Parsley Style Step Line) */}
              <div className="py-4 space-y-4">
                <div className="relative flex items-center justify-between">
                  {/* Connecting Line */}
                  <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-[#DCD5C9] -translate-y-1/2 z-0" />
                  <div className="absolute top-1/2 left-4 h-0.5 bg-[#123829] -translate-y-1/2 z-0 transition-all duration-500 w-full group-hover:bg-[#D97736]" />

                  {/* 3 Step Nodes */}
                  {auditSteps.map((s, idx) => {
                    const isHovered = hoveredStep === idx;
                    return (
                      <div
                        key={s.step}
                        onMouseEnter={() => setHoveredStep(idx)}
                        onMouseLeave={() => setHoveredStep(null)}
                        className="relative z-10 flex flex-col items-center cursor-pointer group/step"
                      >
                        <div
                          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                            isHovered
                              ? 'bg-[#D97736] border-[#D97736] scale-125 text-white shadow-md'
                              : 'bg-[#FAF8F5] border-[#123829] text-[#123829] group-hover/step:border-[#D97736]'
                          }`}
                        >
                          <div className={`w-2 h-2 rounded-full ${isHovered ? 'bg-white' : 'bg-[#123829]'}`} />
                        </div>

                        <span className="text-[11px] font-bold text-[#123829] mt-3 text-center max-w-[100px] leading-tight">
                          {s.title}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className="text-center text-xs text-[#5C6B64] font-medium pt-2">
                  Hover over any step to inspect our 100% CVO rule verification process
                </div>
              </div>

              {/* Description & Explanatory Box */}
              <div className="grid sm:grid-cols-12 gap-6 items-center bg-[#EFEAE1]/70 p-5 rounded-2xl border border-[#DCD5C9] group-hover:bg-[#EFEAE1] transition-colors">
                <div className="sm:col-span-7 space-y-2">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl sm:text-3xl font-serif font-bold text-[#123829]">$499</span>
                    <span className="text-xs text-[#5C6B64] font-medium">/ practice audit</span>
                  </div>
                  <p className="text-xs font-semibold text-[#123829]">
                    100% Credited back if you upgrade to Complete CVO Care
                  </p>
                  <p className="text-[11px] text-[#5C6B64]">
                    Comprehensive benchmark against regional Medicare RVU rates
                  </p>
                </div>

                <div className="sm:col-span-5 text-xs text-[#3D4D45] space-y-1.5 border-t sm:border-t-0 sm:border-l border-[#DCD5C9] pt-3 sm:pt-0 sm:pl-4">
                  <p className="font-semibold text-[#123829]">What you receive:</p>
                  <p className="leading-relaxed">
                    Meet virtually with a senior CVO director who will review your practice credentialing files in context of your revenue goals. Get clear answers and an actionable 28-day enrollment path.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Button */}
            <div className="pt-4">
              <button
                onClick={onOpenAuditModal}
                className="w-full bg-[#123829] hover:bg-[#1B4D39] text-white py-4 px-6 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer group-hover:scale-[1.01]"
              >
                <span>Book Practice Audit</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
