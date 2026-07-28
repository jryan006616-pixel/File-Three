import React from 'react';
import { COMPARISON_DATA } from '../data/credentialingData';
import { ShieldCheck, Check, X, Sparkles, ArrowRight } from 'lucide-react';

interface ComparisonSectionProps {
  onOpenAuditModal: () => void;
}

export const ComparisonSection: React.FC<ComparisonSectionProps> = ({ onOpenAuditModal }) => {
  return (
    <section id="comparison" className="py-16 lg:py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#D97736]">Why Medical Practices Switch</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#123829]">
            The Rhino MDs Dedicated CVO Advantage
          </h2>
          <p className="text-base text-[#3D4D45]">
            See how our tech-enabled CVO engine compares to slow DIY in-house efforts or traditional billing call centers.
          </p>
        </div>

        {/* Comparison Table Container */}
        <div className="overflow-x-auto border border-[#E6E0D6] rounded-2xl bg-white shadow-sm">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="bg-[#FAF8F5] text-[#123829] font-serif border-b border-[#E6E0D6]">
                <th className="p-4 sm:p-5 font-bold w-1/3">Credentialing Feature / Metric</th>
                <th className="p-4 sm:p-5 font-bold text-center text-[#5C6B64] bg-[#FAF8F5]">In-House / DIY Staff</th>
                <th className="p-4 sm:p-5 font-bold text-center text-[#5C6B64] bg-[#FAF8F5]">General Billing Agency</th>
                <th className="p-4 sm:p-5 font-bold text-center text-[#123829] bg-[#EFEAE1] border-x border-[#DCD5C9] text-base">
                  <div className="flex items-center justify-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-[#D97736]" />
                    <span>Rhino MDs CVO</span>
                  </div>
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-[#F0ECE1] text-[#2C3B34]">
              {COMPARISON_DATA.map((row, idx) => (
                <tr key={idx} className="hover:bg-[#FAF8F5] transition-colors">
                  <td className="p-4 sm:p-5 font-semibold text-[#123829] border-r border-[#F0ECE1]">
                    {row.feature}
                  </td>

                  <td className="p-4 sm:p-5 text-center text-[#5C6B64] text-xs sm:text-sm">
                    <div className="flex items-center justify-center gap-1 text-red-700">
                      <X className="w-4 h-4 shrink-0" />
                      <span>{row.diy}</span>
                    </div>
                  </td>

                  <td className="p-4 sm:p-5 text-center text-[#5C6B64] text-xs sm:text-sm">
                    <span>{row.generalBilling}</span>
                  </td>

                  <td className="p-4 sm:p-5 text-center font-bold text-[#123829] bg-[#FAF8F5]/80 border-x border-[#EDE8DF] text-xs sm:text-sm">
                    <div className="flex items-center justify-center gap-1.5 text-[#123829]">
                      <Check className="w-4 h-4 text-[#2E5340] shrink-0 font-bold" />
                      <span className="text-[#123829]">{row.verifiMed}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom CTA Banner */}
        <div className="text-center pt-4">
          <button
            onClick={onOpenAuditModal}
            className="bg-[#123829] hover:bg-[#1C4E3A] text-white px-8 py-4 rounded-full text-base font-semibold transition-all shadow-md inline-flex items-center gap-2 cursor-pointer"
          >
            <span>Upgrade Your Credentialing Engine Today</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};
