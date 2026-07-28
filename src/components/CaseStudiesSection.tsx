import React from 'react';
import { CASE_STUDIES } from '../data/credentialingData';
import { Star, CheckCircle, Quote, ArrowRight, TrendingUp } from 'lucide-react';
import physicianApprovedImg from '../assets/images/physician_approved_1785178264249.jpg';

interface CaseStudiesSectionProps {
  onOpenAuditModal: () => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ onOpenAuditModal }) => {
  return (
    <section className="py-16 lg:py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#D97736]">Proven Practice Metrics</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#123829]">
            Real Medical Practice Outcomes & Success Stories
          </h2>
          <p className="text-base text-[#3D4D45]">
            How medical directors, group practice owners, and telehealth platforms eliminated claim delays with Rhino MDs CVO.
          </p>
        </div>

        {/* Case Study Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {CASE_STUDIES.map((study) => (
            <div
              key={study.id}
              className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E6E0D6] shadow-sm flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-[#5C6B64] border-b border-[#F0ECE1] pb-3">
                  <span className="font-semibold text-[#123829]">{study.practiceName}</span>
                  <span>{study.location}</span>
                </div>

                <div className="flex items-center gap-1 text-[#D97736]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <h3 className="text-xl font-serif font-bold text-[#123829] leading-snug">
                  "{study.headline}"
                </h3>

                <p className="text-xs text-[#3D4D45] leading-relaxed">
                  <strong className="text-[#123829]">The Challenge:</strong> {study.challenge}
                </p>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-2 bg-[#FAF8F5] p-3 rounded-xl border border-[#EDE8DF] text-xs">
                  {study.metrics.map((m, idx) => (
                    <div key={idx} className="space-y-0.5">
                      <span className="text-[10px] text-[#5C6B64] block">{m.label}</span>
                      <span className="font-serif font-bold text-sm text-[#123829]">{m.value}</span>
                    </div>
                  ))}
                </div>

                <blockquote className="text-xs italic text-[#3D4D45] bg-[#EFEAE1]/60 p-3 rounded-xl border-l-2 border-[#D97736]">
                  "{study.quote}"
                </blockquote>
              </div>

              <div className="pt-4 border-t border-[#F0ECE1] flex items-center justify-between text-xs">
                <div>
                  <p className="font-bold text-[#123829]">{study.authorName}</p>
                  <p className="text-[#5C6B64] text-[10px]">{study.authorRole}</p>
                </div>
                <span className="text-[10px] bg-[#EBF0ED] text-[#123829] font-semibold px-2 py-1 rounded-full border border-[#C5D8CD]">
                  Verified Client
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Physician Banner */}
        <div className="bg-[#123829] text-white rounded-3xl p-8 sm:p-10 border border-[#254F3B] grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-4">
            <img
              src={physicianApprovedImg}
              alt="Physician medical director enjoying fast credentialing approval with Rhino MDs"
              className="w-full h-64 rounded-2xl object-cover border border-[#254F3B] shadow-md"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#E5B869] flex items-center gap-1">
              <TrendingUp className="w-4 h-4" /> Medical Director Endorsement
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold">
              "We Recovered $450,000 in Unpaid Medicare Claims in Under 30 Days"
            </h3>
            <p className="text-sm text-[#B2C7BC] leading-relaxed">
              When our practice onboarded 4 new specialists, traditional credentialing delays threatened our entire quarterly budget. Rhino MDs audited our CAQH files, resolved PECOS group taxonomy mismatch errors, and activated direct electronic funds deposit before our first billing cycle.
            </p>
            <div className="pt-2 flex items-center justify-between flex-wrap gap-4">
              <div>
                <p className="text-sm font-bold text-white">Dr. Robert Harrison, MD</p>
                <p className="text-xs text-[#A3B8AD]">Managing Partner, Apex Health Partners</p>
              </div>
              <button
                onClick={onOpenAuditModal}
                className="bg-[#D97736] hover:bg-[#C2652A] text-white px-6 py-2.5 rounded-full text-xs font-semibold transition-all shadow-sm flex items-center gap-2 cursor-pointer"
              >
                <span>Request Practice Audit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
