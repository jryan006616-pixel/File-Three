import React, { useState } from 'react';
import { ShieldCheck, CheckCircle2, Clock, Zap, ArrowRight, RefreshCw, FileText, Building2 } from 'lucide-react';

export const PayerLogosShowcase: React.FC = () => {
  const [selectedPayerId, setSelectedPayerId] = useState<string>('bcbs');

  const payers = [
    {
      id: 'bcbs',
      name: 'BlueCross BlueShield',
      type: 'Commercial & Medicare Advantage',
      avgDays: '25 – 30 Days',
      caqh: 'Required & Synced',
      ediEft: 'Availity 837/835 Direct',
      bgColor: 'bg-[#00529B]/5 text-[#00529B] border-[#00529B]/20',
      badgeColor: 'bg-[#00529B] text-white',
      logo: (
        <div className="flex items-center gap-2">
          <svg className="w-6 h-6 text-[#00529B] fill-current" viewBox="0 0 24 24">
            <path d="M12 2L4 5v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V5l-8-3zm0 4a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm2.5 10.5h-5v-1.5h1.75v-3.5H10v-1.5h2.5v5h1.75v1.5z" />
          </svg>
          <span className="font-serif font-bold text-lg text-[#123829] tracking-tight whitespace-nowrap">
            BlueCross BlueShield
          </span>
        </div>
      )
    },
    {
      id: 'uhc',
      name: 'UnitedHealthcare',
      type: 'Commercial & Medicaid Panels',
      avgDays: '21 – 28 Days',
      caqh: 'Required & Synced',
      ediEft: 'Optum Direct 837/835',
      bgColor: 'bg-[#002677]/5 text-[#002677] border-[#002677]/20',
      badgeColor: 'bg-[#002677] text-white',
      logo: (
        <div className="flex items-center gap-2">
          <svg className="w-6 h-6 text-[#002677]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M6 4v10a4 4 0 008 0V4" />
            <path d="M18 4v10a8 8 0 01-16 0V4" />
          </svg>
          <span className="font-sans font-black text-lg text-[#123829] tracking-tight whitespace-nowrap">
            UnitedHealthcare
          </span>
        </div>
      )
    },
    {
      id: 'aetna',
      name: 'Aetna Healthcare',
      type: 'CVS Health Commercial & Senior',
      avgDays: '20 – 25 Days',
      caqh: 'Required & Synced',
      ediEft: 'Change Healthcare / PaySpan',
      bgColor: 'bg-[#D22630]/5 text-[#D22630] border-[#D22630]/20',
      badgeColor: 'bg-[#D22630] text-white',
      logo: (
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-[#D22630] fill-current" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          <span className="font-sans font-bold text-xl text-[#123829] tracking-tight whitespace-nowrap">
            aetna
          </span>
        </div>
      )
    },
    {
      id: 'cigna',
      name: 'Cigna Healthcare',
      type: 'National & Global Networks',
      avgDays: '28 – 32 Days',
      caqh: 'Required & Synced',
      ediEft: 'Direct 837P / 837I Electronic',
      bgColor: 'bg-[#007AC3]/5 text-[#007AC3] border-[#007AC3]/20',
      badgeColor: 'bg-[#007AC3] text-white',
      logo: (
        <div className="flex items-center gap-2">
          <svg className="w-6 h-6 text-[#D97736]" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="6" r="2.5" />
            <circle cx="6" cy="12" r="2" />
            <circle cx="18" cy="12" r="2" />
            <circle cx="8" cy="18" r="2" />
            <circle cx="16" cy="18" r="2" />
            <path d="M12 9v11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <div className="flex flex-col -space-y-1">
            <span className="font-sans font-black text-xl text-[#123829] tracking-tight whitespace-nowrap">cigna</span>
            <span className="font-sans font-medium text-[8px] uppercase tracking-widest text-[#3D4D45]">healthcare</span>
          </div>
        </div>
      )
    },
    {
      id: 'anthem',
      name: 'Anthem Elevance',
      type: 'Commercial & Exchange Panels',
      avgDays: '24 – 28 Days',
      caqh: 'Required & Synced',
      ediEft: 'Availity Gateway ERA',
      bgColor: 'bg-[#005596]/5 text-[#005596] border-[#005596]/20',
      badgeColor: 'bg-[#005596] text-white',
      logo: (
        <div className="flex items-center">
          <span className="font-serif font-bold text-2xl text-[#123829] tracking-tight whitespace-nowrap">
            Anthem.
          </span>
        </div>
      )
    },
    {
      id: 'medicare',
      name: 'Medicare PECOS (CMS)',
      type: 'Federal Government Program',
      avgDays: '18 – 24 Days',
      caqh: 'PECOS Direct System',
      ediEft: 'MAC Electronic 837P / 835',
      bgColor: 'bg-[#123829]/5 text-[#123829] border-[#123829]/20',
      badgeColor: 'bg-[#123829] text-white',
      logo: (
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-[#123829] text-[#E5B869] text-[10px] font-bold font-mono flex items-center justify-center border border-[#254F3B]">
            CMS
          </div>
          <span className="font-serif font-bold text-lg text-[#123829] whitespace-nowrap">Medicare PECOS</span>
        </div>
      )
    },
    {
      id: 'humana',
      name: 'Humana',
      type: 'Senior & Commercial Network',
      avgDays: '21 – 26 Days',
      caqh: 'Required & Synced',
      ediEft: 'Humana Vantage Clearinghouse',
      bgColor: 'bg-[#78BE20]/5 text-[#4D8010] border-[#78BE20]/30',
      badgeColor: 'bg-[#4D8010] text-white',
      logo: (
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-[#4D8010] rounded-sm flex items-center justify-center text-white text-xs font-bold">H</div>
          <span className="font-sans font-black text-xl text-[#123829] whitespace-nowrap">Humana</span>
        </div>
      )
    },
    {
      id: 'floridablue',
      name: 'Florida Blue',
      type: 'Regional BCBS Association',
      avgDays: '24 – 28 Days',
      caqh: 'Required & Synced',
      ediEft: 'Availity Florida Portal',
      bgColor: 'bg-[#0072CE]/5 text-[#0072CE] border-[#0072CE]/20',
      badgeColor: 'bg-[#0072CE] text-white',
      logo: (
        <div className="flex items-center">
          <span className="font-serif italic font-extrabold text-xl text-[#123829] whitespace-nowrap">
            Florida Blue
          </span>
        </div>
      )
    },
    {
      id: 'horizon',
      name: 'Horizon Blue Cross',
      type: 'NJ & Mid-Atlantic Commercial',
      avgDays: '25 – 30 Days',
      caqh: 'Required & Synced',
      ediEft: 'NaviNet / Availity',
      bgColor: 'bg-[#002F6C]/5 text-[#002F6C] border-[#002F6C]/20',
      badgeColor: 'bg-[#002F6C] text-white',
      logo: (
        <div className="flex items-center gap-1.5">
          <div className="bg-[#123829] text-white px-2 py-0.5 transform -skew-x-12 rounded text-xs font-bold">
            Horizon
          </div>
          <span className="font-serif font-bold text-lg text-[#123829] whitespace-nowrap">Horizon.</span>
        </div>
      )
    },
    {
      id: 'kaiser',
      name: 'Kaiser Permanente',
      type: 'Integrated HMO & Managed Care',
      avgDays: '30 – 35 Days',
      caqh: 'Kaiser Portal Sync',
      ediEft: 'KP Electronic Direct',
      bgColor: 'bg-[#0069B4]/5 text-[#0069B4] border-[#0069B4]/20',
      badgeColor: 'bg-[#0069B4] text-white',
      logo: (
        <div className="flex items-center gap-2">
          <svg className="w-6 h-6 text-[#0069B4]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
          </svg>
          <span className="font-serif font-bold text-lg text-[#123829] whitespace-nowrap">KAISER PERMANENTE</span>
        </div>
      )
    }
  ];

  // Continuous loop duplicate rows
  const marqueeRow1 = [...payers, ...payers];
  const marqueeRow2 = [...payers.slice().reverse(), ...payers.slice().reverse()];

  const activePayer = payers.find(p => p.id === selectedPayerId) || payers[0];

  return (
    <section id="payer-network" className="py-20 lg:py-28 bg-[#FAF8F5] border-t border-[#EDE8DF] select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Editorial Header - Parsley Health Style */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EFEAE1] border border-[#DCD5C9] text-[#123829] text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-[#D97736]" />
            <span>Payer Enrollment & Contracting Scope</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#123829] leading-tight">
            Credentialed & In-Network With 500+ National & Regional Payers
          </h2>

          <p className="text-base sm:text-lg text-[#3D4D45] leading-relaxed">
            Our dedicated CVO team submits pristine application packages, maintains 120-day CAQH attestations, and activates direct Electronic Claims (EDI 837) and Direct Deposit (EFT 835) across every major insurance panel.
          </p>
        </div>

        {/* Parsley Health Style Auto-Sliding Dual Marquee */}
        <div className="bg-[#EFEAE1]/70 rounded-3xl p-6 sm:p-10 border border-[#DCD5C9] relative overflow-hidden space-y-6">
          
          <div className="flex items-center justify-between text-xs text-[#5C6B64] font-medium px-2">
            <span className="flex items-center gap-1.5 text-[#123829] font-bold">
              <RefreshCw className="w-3.5 h-3.5 animate-spin text-[#D97736]" /> Live Payer Enrollment Ticker
            </span>
            <span className="hidden sm:inline">Click any insurance panel to view onboarding metrics</span>
          </div>

          {/* Gradient Fades for Edges */}
          <div className="absolute top-0 bottom-0 left-0 w-20 bg-gradient-to-r from-[#EFEAE1] to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-20 bg-gradient-to-l from-[#EFEAE1] to-transparent z-10 pointer-events-none" />

          {/* Marquee Track 1 (Left to Right) */}
          <div className="relative overflow-hidden w-full">
            <div className="animate-marquee flex items-center gap-6 sm:gap-8">
              {marqueeRow1.map((p, idx) => (
                <div
                  key={`m1-${idx}`}
                  onClick={() => setSelectedPayerId(p.id)}
                  className={`bg-white px-6 py-4 rounded-2xl border transition-all cursor-pointer shrink-0 shadow-sm flex items-center justify-center min-w-[220px] sm:min-w-[260px] h-20 ${
                    selectedPayerId === p.id
                      ? 'border-[#123829] ring-2 ring-[#123829]/30 shadow-md scale-105'
                      : 'border-[#E6E0D6] hover:border-[#123829] hover:bg-[#FAF8F5]'
                  }`}
                >
                  {p.logo}
                </div>
              ))}
            </div>
          </div>

          {/* Marquee Track 2 (Right to Left) */}
          <div className="relative overflow-hidden w-full">
            <div className="animate-marquee-reverse flex items-center gap-6 sm:gap-8">
              {marqueeRow2.map((p, idx) => (
                <div
                  key={`m2-${idx}`}
                  onClick={() => setSelectedPayerId(p.id)}
                  className={`bg-white px-6 py-4 rounded-2xl border transition-all cursor-pointer shrink-0 shadow-sm flex items-center justify-center min-w-[220px] sm:min-w-[260px] h-20 ${
                    selectedPayerId === p.id
                      ? 'border-[#123829] ring-2 ring-[#123829]/30 shadow-md scale-105'
                      : 'border-[#E6E0D6] hover:border-[#123829] hover:bg-[#FAF8F5]'
                  }`}
                >
                  {p.logo}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Selected Payer Operational Detail Panel */}
        {activePayer && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E6E0D6] shadow-sm max-w-4xl mx-auto space-y-6 animate-fade-in">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#F0ECE1] pb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-[#FAF8F5] rounded-2xl border border-[#E6E0D6]">
                  {activePayer.logo}
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-[#123829]">{activePayer.name}</h3>
                  <p className="text-xs text-[#5C6B64] font-medium">{activePayer.type}</p>
                </div>
              </div>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold self-start sm:self-auto">
                <CheckCircle2 className="w-3.5 h-3.5" /> Direct Contract & Panel Active
              </span>
            </div>

            {/* Metrics Breakdown */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="bg-[#FAF8F5] p-4 rounded-2xl border border-[#EDE8DF] space-y-1">
                <span className="text-[#5C6B64] block text-[10px] uppercase font-bold tracking-wider">Avg Credentialing SLA</span>
                <span className="font-serif font-bold text-base text-[#123829] flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#D97736]" /> {activePayer.avgDays}
                </span>
                <p className="text-[10px] text-[#5C6B64]">From intake submission to live billing ID</p>
              </div>

              <div className="bg-[#FAF8F5] p-4 rounded-2xl border border-[#EDE8DF] space-y-1">
                <span className="text-[#5C6B64] block text-[10px] uppercase font-bold tracking-wider">CAQH ProView Integration</span>
                <span className="font-serif font-bold text-base text-[#123829] flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#2E5340]" /> {activePayer.caqh}
                </span>
                <p className="text-[10px] text-[#5C6B64]">Automated 120-day re-attestation cycle</p>
              </div>

              <div className="bg-[#FAF8F5] p-4 rounded-2xl border border-[#EDE8DF] space-y-1">
                <span className="text-[#5C6B64] block text-[10px] uppercase font-bold tracking-wider">EDI 837 & EFT Deposit</span>
                <span className="font-serif font-bold text-base text-[#123829] flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-[#D97736]" /> {activePayer.ediEft}
                </span>
                <p className="text-[10px] text-[#5C6B64]">Clearinghouse ERA 835 direct to bank</p>
              </div>
            </div>

            {/* Bottom CTA Banner */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#123829] text-white p-5 rounded-2xl border border-[#254F3B]">
              <div className="space-y-0.5 text-center sm:text-left">
                <p className="font-bold font-serif text-sm">Need to expand your practice panel with {activePayer.name}?</p>
                <p className="text-xs text-[#A3B8AD]">We prepare and execute your complete provider enrollment packet in 28 days.</p>
              </div>
              <button
                onClick={() => {
                  const section = document.getElementById('portal-preview');
                  section?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-[#D97736] hover:bg-[#C2652A] text-white px-6 py-3 rounded-full text-xs font-semibold transition-all shrink-0 flex items-center gap-2 cursor-pointer shadow-md"
              >
                <span>Preview {activePayer.name} Portal Status</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
