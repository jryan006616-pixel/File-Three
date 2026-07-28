import React from 'react';
import { PRICING_PLANS } from '../data/credentialingData';
import { Check, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

interface PricingSectionProps {
  onOpenAuditModal: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenAuditModal }) => {
  return (
    <section id="pricing" className="py-16 lg:py-24 bg-[#FAF8F5] border-t border-[#EDE8DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#D97736]">Predictable Practice Investment</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#123829]">
            Simple, Transparent Credentialing Plans
          </h2>
          <p className="text-base text-[#3D4D45]">
            No hidden setup fees, no percentage of revenue take, and no long-term restrictive contracts.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-3xl p-8 flex flex-col justify-between space-y-8 relative transition-all ${
                plan.popular
                  ? 'bg-[#123829] text-white shadow-xl border-2 border-[#E5B869] lg:-translate-y-2'
                  : 'bg-white text-[#2C3B34] border border-[#E6E0D6] shadow-sm hover:shadow-md'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#D97736] text-white text-[11px] font-bold uppercase tracking-wider px-4 py-1 rounded-full shadow-md flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> Most Popular Medical Group Tier
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <span className={`text-xs font-semibold uppercase tracking-wider ${
                    plan.popular ? 'text-[#E5B869]' : 'text-[#D97736]'
                  }`}>
                    {plan.idealFor}
                  </span>
                  <h3 className={`text-2xl font-serif font-bold ${
                    plan.popular ? 'text-white' : 'text-[#123829]'
                  }`}>
                    {plan.name}
                  </h3>
                  <p className={`text-xs mt-2 leading-relaxed ${
                    plan.popular ? 'text-[#B2C7BC]' : 'text-[#5C6B64]'
                  }`}>
                    {plan.tagline}
                  </p>
                </div>

                <div className="pt-2 border-t border-current/10">
                  <span className={`text-4xl font-serif font-bold ${
                    plan.popular ? 'text-white' : 'text-[#123829]'
                  }`}>
                    {plan.pricePerProvider}
                  </span>
                  <span className={`text-xs ml-2 ${
                    plan.popular ? 'text-[#A3B8AD]' : 'text-[#5C6B64]'
                  }`}>
                    {plan.period}
                  </span>
                </div>

                <ul className="space-y-3 pt-4 text-xs font-medium">
                  {plan.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <Check className={`w-4 h-4 shrink-0 mt-0.5 ${
                        plan.popular ? 'text-[#E5B869]' : 'text-[#2E5340]'
                      }`} />
                      <span className={plan.popular ? 'text-[#E8E1D5]' : 'text-[#3D4D45]'}>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-current/10 space-y-2">
                <button
                  onClick={onOpenAuditModal}
                  className={`w-full py-3.5 rounded-full text-xs font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    plan.popular
                      ? 'bg-[#D97736] hover:bg-[#C2652A] text-white shadow-md'
                      : 'bg-[#123829] hover:bg-[#1C4E3A] text-white'
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className={`text-[10px] text-center ${
                  plan.popular ? 'text-[#A3B8AD]' : 'text-[#829E90]'
                }`}>
                  100% Guaranteed Onboarding SLA Included
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* Enterprise Notice */}
        <div className="bg-[#EFEAE1] p-6 rounded-2xl border border-[#DCD5C9] text-center max-w-2xl mx-auto space-y-2 text-xs text-[#2C3B34]">
          <p className="font-bold text-[#123829] text-sm font-serif">Have over 20 providers or need a custom MSO contract?</p>
          <p>We offer volume discounts, dedicated CVO teams, and custom EHR clearinghouse API integrations.</p>
        </div>

      </div>
    </section>
  );
};
