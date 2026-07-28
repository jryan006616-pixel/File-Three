import React from 'react';
import { ArrowRight, ShieldCheck, Zap, CheckCircle2, Clock, DollarSign, Building2 } from 'lucide-react';
import heroTeamImg from '../assets/images/hero_medical_team_1785178232769.jpg';

interface HeroProps {
  onOpenAuditModal: () => void;
  onNavigateSection: (id: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAuditModal, onNavigateSection }) => {
  return (
    <section id="hero" className="bg-[#FAF8F5] pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Parsley-Style Editorial Typography & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF0ED] border border-[#C5D8CD] text-[#123829] text-xs font-semibold tracking-wide">
              <ShieldCheck className="w-4 h-4 text-[#D97736]" />
              <span>Dedicated CVO & Medical Billing Credentialing Engine</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#123829] leading-[1.12] tracking-tight">
              Modern Payer Enrollment & Credentialing for <span className="italic font-normal text-[#2E5340] border-b-2 border-[#D97736]/40 pb-1">Medical Practices</span>
            </h1>

            <p className="text-lg sm:text-xl text-[#3D4D45] leading-relaxed max-w-2xl font-sans">
              Eliminate credentialing backlogs, CAQH delays, EDI/EFT friction, and multi-state licensing hurdles. We get your physicians and mid-levels enrolled with Medicare, Medicaid, and commercial payers in <strong className="font-semibold text-[#123829]">28 days average</strong> — so you bill faster and collect every dollar owed.
            </p>

            {/* Quick Feature Checklist */}
            <div className="grid sm:grid-cols-2 gap-3 pt-2 text-sm text-[#2C3B34] font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2E5340] shrink-0" />
                <span>Medicare PECOS & 50-State Medicaid</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2E5340] shrink-0" />
                <span>Direct EDI 837 Claims & EFT 835 Setup</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2E5340] shrink-0" />
                <span>Proactive CAQH 120-Day Attestations</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2E5340] shrink-0" />
                <span>Multi-State Licensing & IMLC Compact</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenAuditModal}
                className="bg-[#123829] hover:bg-[#1C4E3A] text-[#FAF8F5] px-8 py-4 rounded-full text-base font-medium transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-3 cursor-pointer group"
              >
                <span>Schedule Practice Audit</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onNavigateSection('calculator')}
                className="bg-[#EFEAE1] hover:bg-[#E5DFD4] text-[#123829] px-7 py-4 rounded-full text-base font-medium transition-colors border border-[#DCD5C9] flex items-center justify-center gap-2 cursor-pointer"
              >
                <Zap className="w-4 h-4 text-[#D97736]" />
                <span>Calculate Time-to-Bill & ROI</span>
              </button>
            </div>

            {/* Micro Trust Indicators */}
            <div className="pt-6 border-t border-[#E6E0D6] flex flex-wrap items-center gap-6 text-xs text-[#5C6B64]">
              <div className="flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-[#2E5340]" />
                <span>1,200+ Payer Panels</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#2E5340]" />
                <span>68% Faster Onboarding</span>
              </div>
              <div className="flex items-center gap-1.5">
                <DollarSign className="w-4 h-4 text-[#2E5340]" />
                <span>$140M+ Reimbursements Unlocked</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Image with Floating Status Cards */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Backdrop Glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#D97736]/20 to-[#2E5340]/20 rounded-3xl blur-xl opacity-70"></div>

              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden border border-[#E6E0D6] shadow-xl bg-white">
                <img
                  src={heroTeamImg}
                  alt="Medical practice billing manager and physician discussing provider credentialing and enrollment metrics"
                  className="w-full h-[420px] sm:h-[480px] object-cover"
                  referrerPolicy="no-referrer"
                />
                
                {/* Image Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#123829]/60 via-transparent to-transparent"></div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#E5B869] mb-1">Rhino MDs CVO Portal</p>
                  <p className="text-base font-serif font-medium leading-snug">
                    "We went from a 4-month Medicare PECOS wait to full billing readiness in 26 days."
                  </p>
                </div>
              </div>

              {/* Floating Card 1: Live Approval Stat */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white p-4 rounded-xl shadow-lg border border-[#EDE8DF] max-w-[200px] animate-fade-in hidden sm:block">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-3 h-3 rounded-full bg-[#2E5340] animate-pulse"></div>
                  <span className="text-xs font-semibold text-[#123829]">Live Approval</span>
                </div>
                <p className="text-2xl font-bold text-[#123829] font-serif">99.8%</p>
                <p className="text-[11px] text-[#5C6B64] font-medium">First-Pass Payer Rate</p>
              </div>

              {/* Floating Card 2: EDI / EFT Direct Link Active */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-[#123829] text-white p-4 rounded-xl shadow-xl border border-[#254F3B] max-w-[220px]">
                <div className="flex items-center gap-2 mb-1 text-[#E5B869]">
                  <Zap className="w-4 h-4" />
                  <span className="text-xs font-semibold uppercase tracking-wider">EDI 837 / 835</span>
                </div>
                <p className="text-sm font-semibold text-white">EFT Bank Deposit Active</p>
                <p className="text-[11px] text-[#A3B8AD] mt-0.5">Availity & Change Healthcare Clearinghouse Verified</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
