import React, { useState } from 'react';
import { FAQS } from '../data/credentialingData';
import { Plus, Minus, HelpCircle, PhoneCall, ArrowRight } from 'lucide-react';

interface FaqSectionProps {
  onOpenAuditModal: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenAuditModal }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faqs" className="py-20 lg:py-28 bg-[#FAF8F5] border-t border-[#EDE8DF] select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 2-Column Sticky Layout (Parsley Health Inspired) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column - Freeze / Sticky Heading */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 self-start space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFEAE1] border border-[#DCD5C9] text-[#123829] text-xs font-bold uppercase tracking-wider">
              <HelpCircle className="w-4 h-4 text-[#D97736]" />
              <span>Practice Operations Knowledgebase</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#123829] tracking-tight leading-[1.1]">
              Frequently Asked Questions
            </h2>

            <p className="text-base sm:text-lg text-[#3D4D45] font-sans leading-relaxed">
              Everything medical directors, practice administrators, and billing managers need to know about provider credentialing, CAQH attestations, PECOS enrollment, and EDI/EFT setup.
            </p>

            <div className="pt-2 space-y-4 border-t border-[#E6E0D6]">
              <p className="text-xs text-[#5C6B64] font-medium">
                Have a state-specific licensing question or urgent payer issue?
              </p>
              
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
                <button
                  onClick={onOpenAuditModal}
                  className="bg-[#123829] hover:bg-[#1B4D39] text-white px-6 py-3.5 rounded-full text-xs font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <span>Request Practice File Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="tel:18005550199"
                  className="bg-white hover:bg-[#EFEAE1] text-[#123829] px-6 py-3.5 rounded-full text-xs font-bold transition-all border border-[#DCD5C9] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4 text-[#D97736]" />
                  <span>Call CVO Hotline: (800) 555-0199</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Accordion Questions List */}
          <div className="lg:col-span-7 divide-y divide-[#123829]/15 border-t border-b border-[#123829]/15">
            {FAQS.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div key={idx} className="py-6 sm:py-8 transition-all duration-300 hover:bg-[#F2EDDF]/60 px-4 -mx-4 rounded-2xl group/faq">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left font-sans font-semibold text-lg sm:text-xl lg:text-2xl text-[#123829] hover:text-[#D97736] flex items-start justify-between gap-6 cursor-pointer transition-colors leading-snug"
                  >
                    <span className="pt-0.5 group-hover/faq:translate-x-1 transition-transform duration-300">{faq.q}</span>
                    <span className="p-1.5 rounded-full bg-[#EFEAE1] group-hover/faq:bg-[#D97736] group-hover/faq:text-white transition-all duration-300 shrink-0 mt-0.5 shadow-sm">
                      {isOpen ? (
                        <Minus className="w-5 h-5 text-[#123829] group-hover/faq:text-white transition-colors" />
                      ) : (
                        <Plus className="w-5 h-5 text-[#123829] group-hover/faq:text-white transition-colors" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="mt-4 pr-6 sm:pr-10 text-sm sm:text-base text-[#3D4D45] leading-relaxed font-sans space-y-2 animate-fade-in">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
