import React, { useState, useMemo } from 'react';
import { Calculator, ArrowRight, ShieldCheck, Zap, DollarSign, Clock, Download, CheckCircle, Sparkles } from 'lucide-react';

interface CredentialingCalculatorProps {
  onOpenAuditModalWithData?: (data: any) => void;
}

export const CredentialingCalculator: React.FC<CredentialingCalculatorProps> = ({ onOpenAuditModalWithData }) => {
  const [providerCount, setProviderCount] = useState<number>(3);
  const [practiceType, setPracticeType] = useState<string>('primary');
  const [monthlyRevenuePerProvider, setMonthlyRevenuePerProvider] = useState<number>(45000);
  const [stateScope, setStateScope] = useState<string>('single');
  const [needEdiEft, setNeedEdiEft] = useState<boolean>(true);
  const [needCaqh, setNeedCaqh] = useState<boolean>(true);
  const [needMedicareMedicaid, setNeedMedicareMedicaid] = useState<boolean>(true);
  const [reportGenerated, setReportGenerated] = useState<boolean>(false);

  const calculations = useMemo(() => {
    // Base standard DIY delay is 110-130 days
    let standardDays = 120;
    if (stateScope === 'regional') standardDays = 135;
    if (stateScope === 'national') standardDays = 150;

    // VerifiMed expedited turnaround
    let verifiMedDays = 28;
    if (practiceType === 'surgery') verifiMedDays = 35;
    if (stateScope === 'national') verifiMedDays = 42;

    const daysSaved = Math.max(30, standardDays - verifiMedDays);
    const totalMonthlyPracticeRevenue = providerCount * monthlyRevenuePerProvider;
    const dailyPracticeRevenue = totalMonthlyPracticeRevenue / 30;
    const revenueLossAvoided = Math.round(dailyPracticeRevenue * daysSaved);

    const ediEftActivationDays = needEdiEft ? 8 : 0;

    let recommendedPlan = 'Solo & Small Practice';
    if (providerCount >= 4 && providerCount <= 15) recommendedPlan = 'Growth Medical Group';
    if (providerCount > 15 || stateScope === 'national') recommendedPlan = 'Enterprise & Telehealth Network';

    return {
      standardDays,
      verifiMedDays,
      daysSaved,
      totalMonthlyPracticeRevenue,
      revenueLossAvoided,
      ediEftActivationDays,
      recommendedPlan
    };
  }, [providerCount, practiceType, monthlyRevenuePerProvider, stateScope, needEdiEft]);

  const handleBookAudit = () => {
    if (onOpenAuditModalWithData) {
      onOpenAuditModalWithData({
        providerCount: providerCount.toString(),
        practiceType,
        monthlyRevenue: monthlyRevenuePerProvider,
        stateScope,
        estimatedRevenueUnlocked: calculations.revenueLossAvoided
      });
    }
  };

  return (
    <section id="calculator" className="py-16 lg:py-24 bg-[#FAF8F5] border-t border-[#EDE8DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF0ED] border border-[#C5D8CD] text-[#123829] text-xs font-semibold">
            <Calculator className="w-4 h-4 text-[#D97736]" />
            <span>Practice ROI & Time-to-Bill Interactive Calculator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#123829]">
            Calculate Your Practice Revenue Loss Avoided & Enrollment Timeline
          </h2>
          <p className="text-base sm:text-lg text-[#3D4D45]">
            Every day your providers sit un-credentialed or stuck in CAQH holding patterns cost your medical practice thousands in uncollectible claims. Estimate your time savings below.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Panel: Inputs (7 Cols) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-[#E6E0D6] shadow-sm space-y-6">
            
            <h3 className="text-xl font-serif font-semibold text-[#123829] border-b border-[#F0ECE1] pb-3 flex items-center justify-between">
              <span>Practice Parameters</span>
              <span className="text-xs font-sans font-normal text-[#5C6B64]">Step 1 of 2</span>
            </h3>

            {/* Input 1: Provider Count Slider & Buttons */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-sm font-semibold text-[#123829]">
                  Number of Providers (Physicians & Mid-Levels):
                </label>
                <span className="text-lg font-bold font-serif text-[#123829] bg-[#EFEAE1] px-3 py-1 rounded-lg">
                  {providerCount} {providerCount === 1 ? 'Provider' : 'Providers'}
                </span>
              </div>
              
              <input
                type="range"
                min="1"
                max="50"
                value={providerCount}
                onChange={(e) => setProviderCount(parseInt(e.target.value) || 1)}
                className="w-full accent-[#123829] cursor-pointer"
              />

              <div className="flex flex-wrap gap-2 text-xs">
                {[1, 3, 5, 10, 20, 35].map((cnt) => (
                  <button
                    key={cnt}
                    onClick={() => setProviderCount(cnt)}
                    className={`px-3 py-1 rounded-md border transition-all cursor-pointer ${
                      providerCount === cnt 
                        ? 'bg-[#123829] text-white border-[#123829]' 
                        : 'bg-[#FAF8F5] text-[#3D4D45] border-[#E6E0D6] hover:bg-[#EFEAE1]'
                    }`}
                  >
                    {cnt} {cnt === 1 ? 'Solo' : 'Providers'}
                  </button>
                ))}
              </div>
            </div>

            {/* Input 2: Practice Specialty */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-[#123829]">Practice Specialty / Operating Model:</label>
              <select
                value={practiceType}
                onChange={(e) => setPracticeType(e.target.value)}
                className="w-full p-3 bg-[#FAF8F5] border border-[#E6E0D6] rounded-xl text-sm font-medium text-[#123829] focus:outline-none focus:ring-2 focus:ring-[#123829]"
              >
                <option value="primary">Primary Care & Family Medicine</option>
                <option value="psychiatry">Behavioral Health & Psychiatry</option>
                <option value="telehealth">Multi-State Telehealth Group</option>
                <option value="surgery">Ambulatory Surgery & Orthopedics</option>
                <option value="urgent">Urgent Care & Outpatient Clinic</option>
                <option value="allied">Physical Therapy & Allied Health</option>
              </select>
            </div>

            {/* Input 3: Estimated Monthly Billings per Provider */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-sm font-semibold text-[#123829]">
                  Est. Monthly Revenue per Provider ($):
                </label>
                <span className="text-sm font-bold text-[#123829]">
                  ${monthlyRevenuePerProvider.toLocaleString()} / mo
                </span>
              </div>
              <input
                type="range"
                min="15000"
                max="120000"
                step="5000"
                value={monthlyRevenuePerProvider}
                onChange={(e) => setMonthlyRevenuePerProvider(parseInt(e.target.value))}
                className="w-full accent-[#123829] cursor-pointer"
              />
              <p className="text-xs text-[#5C6B64]">Total Practice Monthly Revenue Potential: ${(providerCount * monthlyRevenuePerProvider).toLocaleString()}</p>
            </div>

            {/* Input 4: State Coverage */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-[#123829]">Geographic Scope:</label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setStateScope('single')}
                  className={`p-2.5 rounded-xl text-xs font-medium border text-center cursor-pointer transition-all ${
                    stateScope === 'single' ? 'bg-[#123829] text-white border-[#123829]' : 'bg-[#FAF8F5] text-[#2C3B34] border-[#E6E0D6]'
                  }`}
                >
                  Single State
                </button>
                <button
                  type="button"
                  onClick={() => setStateScope('regional')}
                  className={`p-2.5 rounded-xl text-xs font-medium border text-center cursor-pointer transition-all ${
                    stateScope === 'regional' ? 'bg-[#123829] text-white border-[#123829]' : 'bg-[#FAF8F5] text-[#2C3B34] border-[#E6E0D6]'
                  }`}
                >
                  2 – 5 Regional States
                </button>
                <button
                  type="button"
                  onClick={() => setStateScope('national')}
                  className={`p-2.5 rounded-xl text-xs font-medium border text-center cursor-pointer transition-all ${
                    stateScope === 'national' ? 'bg-[#123829] text-white border-[#123829]' : 'bg-[#FAF8F5] text-[#2C3B34] border-[#E6E0D6]'
                  }`}
                >
                  6+ Multi-State
                </button>
              </div>
            </div>

            {/* Input 5: Service Toggles */}
            <div className="space-y-2 pt-2 border-t border-[#F0ECE1]">
              <label className="text-xs font-semibold uppercase tracking-wider text-[#5C6B64]">Required Department Services:</label>
              <div className="grid sm:grid-cols-2 gap-2 text-xs">
                <label className="flex items-center gap-2 p-2.5 rounded-lg border border-[#EDE8DF] bg-[#FAF8F5] cursor-pointer">
                  <input
                    type="checkbox"
                    checked={needMedicareMedicaid}
                    onChange={(e) => setNeedMedicareMedicaid(e.target.checked)}
                    className="accent-[#123829]"
                  />
                  <span>Medicare PECOS & Medicaid</span>
                </label>

                <label className="flex items-center gap-2 p-2.5 rounded-lg border border-[#EDE8DF] bg-[#FAF8F5] cursor-pointer">
                  <input
                    type="checkbox"
                    checked={needEdiEft}
                    onChange={(e) => setNeedEdiEft(e.target.checked)}
                    className="accent-[#123829]"
                  />
                  <span>EDI 837/835 & EFT Direct Deposit</span>
                </label>

                <label className="flex items-center gap-2 p-2.5 rounded-lg border border-[#EDE8DF] bg-[#FAF8F5] cursor-pointer">
                  <input
                    type="checkbox"
                    checked={needCaqh}
                    onChange={(e) => setNeedCaqh(e.target.checked)}
                    className="accent-[#123829]"
                  />
                  <span>CAQH ProView 120-Day Attestations</span>
                </label>
              </div>
            </div>

          </div>

          {/* Right Panel: Calculated Results (5 Cols) */}
          <div className="lg:col-span-5 bg-[#123829] text-white p-6 sm:p-8 rounded-2xl border border-[#254F3B] shadow-lg space-y-6 flex flex-col justify-between">
            
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-[#254F3B] pb-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#E5B869]" />
                  <h3 className="text-xl font-serif font-semibold text-white">Estimated Impact Report</h3>
                </div>
                <span className="text-xs bg-[#2E5340] text-[#E5B869] px-2.5 py-1 rounded-full font-semibold">Live Analysis</span>
              </div>

              {/* Big Metric: Revenue Loss Avoided */}
              <div className="bg-[#1C4E3A] p-5 rounded-xl border border-[#2B6049] space-y-1">
                <p className="text-xs text-[#B2C7BC] font-medium uppercase tracking-wider">Projected Revenue Unlocked</p>
                <p className="text-3xl sm:text-4xl font-serif font-bold text-[#E5B869]">
                  ${calculations.revenueLossAvoided.toLocaleString()}
                </p>
                <p className="text-xs text-[#A3B8AD]">
                  Based on saving {calculations.daysSaved} days of unbilled claims delay for {providerCount} providers.
                </p>
              </div>

              {/* Timeline Comparison */}
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center py-2 border-b border-[#254F3B]">
                  <span className="text-[#B2C7BC]">Standard Industry / DIY Delay:</span>
                  <span className="font-semibold text-red-300 line-through">{calculations.standardDays} Days</span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-[#254F3B]">
                  <span className="text-[#B2C7BC]">VerifiMed Turnaround:</span>
                  <span className="font-bold text-emerald-300 text-base">{calculations.verifiMedDays} Days Average</span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-[#254F3B]">
                  <span className="text-[#B2C7BC]">Time-to-Bill Days Saved:</span>
                  <span className="font-bold text-[#E5B869]">{calculations.daysSaved} Days Faster</span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-[#254F3B]">
                  <span className="text-[#B2C7BC]">EDI / EFT Deposit Activation:</span>
                  <span className="font-semibold text-white">{calculations.ediEftActivationDays} Days Post In-Network</span>
                </div>

                <div className="flex justify-between items-center py-2">
                  <span className="text-[#B2C7BC]">Recommended Plan Tier:</span>
                  <span className="font-semibold text-[#E5B869]">{calculations.recommendedPlan}</span>
                </div>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-4 border-t border-[#254F3B]">
              <button
                onClick={handleBookAudit}
                className="w-full bg-[#D97736] hover:bg-[#C2652A] text-white py-3.5 rounded-xl font-semibold transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Schedule Practice Consultation with Audit</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[11px] text-[#829E90] text-center">
                100% HIPAA Compliant • No obligation • Free 15-minute practice file audit
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
