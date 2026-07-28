import React from 'react';
import { Shield, Clock, TrendingUp, Globe2 } from 'lucide-react';

export const TrustStats: React.FC = () => {
  return (
    <section className="bg-[#123829] text-[#FAF8F5] py-12 border-y border-[#254F3B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#E5B869]">Trusted by Over 450 Medical Practices & Health Networks Nationally</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-[#254F3B]/80">
          
          <div className="pt-4 sm:pt-0 sm:px-4 space-y-1">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#1C4E3A] text-[#E5B869] mb-2">
              <Shield className="w-5 h-5" />
            </div>
            <p className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">99.8%</p>
            <p className="text-sm font-medium text-[#B2C7BC]">First-Pass Payer Approval</p>
            <p className="text-xs text-[#829E90]">Zero administrative packet rejections</p>
          </div>

          <div className="pt-4 sm:pt-0 sm:px-4 space-y-1">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#1C4E3A] text-[#E5B869] mb-2">
              <Clock className="w-5 h-5" />
            </div>
            <p className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">28 Days</p>
            <p className="text-sm font-medium text-[#B2C7BC]">Avg. Time-to-Bill</p>
            <p className="text-xs text-[#829E90]">Cut delays from 120 days to under a month</p>
          </div>

          <div className="pt-4 sm:pt-0 sm:px-4 space-y-1">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#1C4E3A] text-[#E5B869] mb-2">
              <TrendingUp className="w-5 h-5" />
            </div>
            <p className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">$140M+</p>
            <p className="text-sm font-medium text-[#B2C7BC]">Stuck Claims Unlocked</p>
            <p className="text-xs text-[#829E90]">Recovered from frozen payer holds</p>
          </div>

          <div className="pt-4 sm:pt-0 sm:px-4 space-y-1">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#1C4E3A] text-[#E5B869] mb-2">
              <Globe2 className="w-5 h-5" />
            </div>
            <p className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">50 States</p>
            <p className="text-sm font-medium text-[#B2C7BC]">Licensing & Payer Coverage</p>
            <p className="text-xs text-[#829E90]">Medicare, Medicaid & Commercial Panels</p>
          </div>

        </div>

      </div>
    </section>
  );
};
