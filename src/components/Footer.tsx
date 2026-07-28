import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, Lock, CheckCircle2, Instagram, Facebook, Linkedin, Youtube, Mail, Check } from 'lucide-react';
import { RhinoLogo } from './RhinoLogo';

interface FooterProps {
  onNavigateSection: (id: string) => void;
  onOpenAuditModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateSection, onOpenAuditModal }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  // Top Editorial Cards (Matching Parsley's social/blog preview grid above footer)
  const insights = [
    {
      type: 'quote',
      quote: "“Our time-to-bill dropped from 90 days to 28 days after switching our CAQH & EDI enrollment to Rhino MDs.”",
      author: "Dr. Sarah Vance, MD",
      bg: "bg-[#7A3B2E] text-white", // Terracotta warm card
      tag: "PRACTICE SPOTLIGHT"
    },
    {
      type: 'metric',
      number: "85%",
      label: "of initial medical claim holds stem from missing EDI 837 / ERA 835 clearinghouse connections.",
      bg: "bg-[#7CAAD0] text-[#0F2D3C]", // Sky blue card
      tag: "BILLING INSIGHT"
    },
    {
      type: 'article',
      title: "Medicare PECOS 2026 Taxonomy Update: What medical directors need to know.",
      bg: "bg-[#1B4D39] text-[#FAF8F5]", // Dark green card with subtle border
      tag: "REGULATORY BULLETIN"
    },
    {
      type: 'article',
      title: "5 multi-state licensing expansion strategies for digital health & telehealth platforms.",
      bg: "bg-[#4D6A5A] text-white", // Sage olive card
      tag: "IMLC COMPACT GUIDE"
    },
    {
      type: 'article',
      title: "Commercial Fee Schedules: How to benchmark your practice RVUs against Medicare.",
      bg: "bg-[#C49A6C] text-[#123829]", // Warm gold/sand card
      tag: "CONTRACTING STRATEGY"
    }
  ];

  return (
    <footer className="bg-[#123829] text-[#FAF8F5] select-none font-sans border-t border-[#254F3B]">
      
      {/* 1. Top Social / Insights Card Reel (Exact Parsley Health Style) */}
      <div className="bg-[#0D2D20] py-12 px-4 sm:px-6 lg:px-8 border-b border-[#1D4A37]">
        <div className="max-w-7xl mx-auto space-y-6">
          
          <div className="flex items-center justify-between text-xs font-semibold text-[#A3B8AD]">
            <span className="font-mono text-sm tracking-tight text-white flex items-center gap-1.5">
              @rhinomds
            </span>
            <a
              href="https://rhinomds.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer"
            >
              <span>Visit Official Website (rhinomds.com)</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#E5B869]" />
            </a>
          </div>

          {/* Horizontal Grid of Editorial Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {insights.map((card, idx) => (
              <div
                key={idx}
                className={`${card.bg} p-6 rounded-2xl flex flex-col justify-between h-56 transition-transform hover:-translate-y-1 cursor-pointer shadow-md border border-white/10 relative overflow-hidden group`}
              >
                <span className="text-[9px] font-bold tracking-widest uppercase opacity-80">
                  {card.tag}
                </span>

                {card.type === 'quote' && (
                  <div className="space-y-2">
                    <p className="font-serif italic text-sm leading-snug">{card.quote}</p>
                    <p className="text-[11px] font-bold opacity-90">{card.author}</p>
                  </div>
                )}

                {card.type === 'metric' && (
                  <div className="space-y-1">
                    <span className="font-serif text-4xl sm:text-5xl font-extrabold block tracking-tight">
                      {card.number}
                    </span>
                    <p className="text-xs font-medium leading-tight">{card.label}</p>
                  </div>
                )}

                {card.type === 'article' && (
                  <div className="space-y-2">
                    <h4 className="font-serif font-bold text-base leading-snug group-hover:underline">
                      {card.title}
                    </h4>
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider opacity-80 pt-1">
                      Read Report <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* 2. Main Footer Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 space-y-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Left Column: Logo, Newsletter Signup, Socials, HIPAA Badge */}
          <div className="lg:col-span-5 space-y-8 pr-0 lg:pr-8">
            
            {/* Logo */}
            <div className="space-y-3">
              <RhinoLogo variant="dark" size="md" asCard={true} />
              <p className="text-xs text-[#A3B8AD] max-w-sm leading-relaxed pt-1">
                Revenue Cycle Management & Physician Credentialing CVO handling end-to-end payer enrollment, CAQH attestations, PECOS Medicare, and EDI/EFT setups for medical practices nationwide.
              </p>
            </div>

            {/* Newsletter Form - Parsley Style */}
            <div className="space-y-2.5 max-w-md">
              <label htmlFor="footer-newsletter" className="block text-xs font-semibold text-[#DCD5C9]">
                Sign up for CVO & payer regulatory updates
              </label>

              {subscribed ? (
                <div className="bg-[#1C4E3A] border border-[#2B6049] text-white p-3.5 rounded-full text-xs font-semibold flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Subscribed! You will receive monthly Medicare & CAQH bulletins.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex items-center gap-2">
                  <input
                    id="footer-newsletter"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your work email"
                    required
                    className="w-full bg-white text-[#123829] placeholder-[#829E90] text-xs px-4 py-3 rounded-full outline-none border border-transparent focus:border-[#E5B869] transition-all font-sans"
                  />
                  <button
                    type="submit"
                    className="bg-[#3D7A60] hover:bg-[#2E624C] text-white px-6 py-3 rounded-full text-xs font-bold transition-colors shrink-0 cursor-pointer"
                  >
                    Sign Up
                  </button>
                </form>
              )}
            </div>

            {/* Social Links & HIPAA Compliant Badge */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-semibold text-[#829E90] block">
                Connect with Rhino MDs
              </span>

              <div className="flex items-center justify-between gap-4 max-w-md">
                <div className="flex items-center gap-3">
                  <a href="#" className="w-8 h-8 rounded-full bg-[#1C4E3A] hover:bg-[#2B6049] flex items-center justify-center text-white transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-[#1C4E3A] hover:bg-[#2B6049] flex items-center justify-center text-white transition-colors">
                    <TwitterIcon className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-[#1C4E3A] hover:bg-[#2B6049] flex items-center justify-center text-white transition-colors">
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-[#1C4E3A] hover:bg-[#2B6049] flex items-center justify-center text-white transition-colors">
                    <Youtube className="w-4 h-4" />
                  </a>
                </div>

                {/* HIPAA Badge SVG */}
                <div className="flex items-center gap-2 border border-[#2B6049] bg-[#0D2D20] px-3 py-1.5 rounded-xl">
                  {/* Caduceus / Medical Shield SVG */}
                  <svg className="w-6 h-6 text-[#E5B869]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L4 5v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V5l-8-3zm0 4a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm2.5 10.5h-5v-1.5h1.75v-3.5H10v-1.5h2.5v5h1.75v1.5z" />
                  </svg>
                  <div className="flex flex-col text-[9px] font-bold leading-tight">
                    <span className="text-white tracking-wider">HIPAA</span>
                    <span className="text-[#A3B8AD]">COMPLIANT</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Columns: Navigation & Action Buttons */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 text-xs">
            
            {/* Nav Column 1 */}
            <div className="space-y-3">
              <h4 className="font-serif font-bold text-white text-sm text-[#E5B869]">Payer Enrollment</h4>
              <ul className="space-y-2.5 text-[#B2C7BC]">
                <li><a href="#services" onClick={() => onNavigateSection('services')} className="hover:text-white transition-colors">Medicare PECOS Initial</a></li>
                <li><a href="#services" onClick={() => onNavigateSection('services')} className="hover:text-white transition-colors">Medicaid 50-State Panels</a></li>
                <li><a href="#services" onClick={() => onNavigateSection('services')} className="hover:text-white transition-colors">CAQH ProView Sync</a></li>
                <li><a href="#services" onClick={() => onNavigateSection('services')} className="hover:text-white transition-colors">Commercial Panel Contracting</a></li>
                <li><a href="#services" onClick={() => onNavigateSection('services')} className="hover:text-white transition-colors">Fee Schedule Negotiation</a></li>
                <li><a href="#services" onClick={() => onNavigateSection('services')} className="hover:text-white transition-colors">Re-credentialing Trackers</a></li>
              </ul>
            </div>

            {/* Nav Column 2 */}
            <div className="space-y-3">
              <h4 className="font-serif font-bold text-white text-sm text-[#E5B869]">CVO Operations</h4>
              <ul className="space-y-2.5 text-[#B2C7BC]">
                <li><a href="#calculator" onClick={() => onNavigateSection('calculator')} className="hover:text-white transition-colors">Primary Source Verification</a></li>
                <li><a href="#services" onClick={() => onNavigateSection('services')} className="hover:text-white transition-colors">EDI 837 Claims Setup</a></li>
                <li><a href="#services" onClick={() => onNavigateSection('services')} className="hover:text-white transition-colors">EFT 835 Direct Deposit</a></li>
                <li><a href="#workflow" onClick={() => onNavigateSection('workflow')} className="hover:text-white transition-colors">Multi-State Licensing (IMLC)</a></li>
                <li><a href="#services" onClick={() => onNavigateSection('services')} className="hover:text-white transition-colors">Hospital Staff Privileging</a></li>
                <li><a href="#portal-preview" onClick={() => onNavigateSection('portal-preview')} className="hover:text-white transition-colors">Provider Portal Live Demo</a></li>
              </ul>
            </div>

            {/* Nav Column 3 & CTAs */}
            <div className="space-y-5 col-span-2 sm:col-span-1">
              <div className="space-y-3">
                <h4 className="font-serif font-bold text-white text-sm text-[#E5B869]">Resources</h4>
                <ul className="space-y-2.5 text-[#B2C7BC]">
                  <li><a href="#calculator" onClick={() => onNavigateSection('calculator')} className="hover:text-white transition-colors">Time-to-Bill Estimator</a></li>
                  <li><a href="#ai-advisor" onClick={() => onNavigateSection('ai-advisor')} className="hover:text-white transition-colors">AI Credentialing Advisor</a></li>
                  <li><a href="#faqs" onClick={() => onNavigateSection('faqs')} className="hover:text-white transition-colors">Practice FAQs</a></li>
                  <li><a href="#pricing" onClick={() => onNavigateSection('pricing')} className="hover:text-white transition-colors">Pricing & Plans</a></li>
                  <li><a href="#trust" onClick={() => onNavigateSection('trust')} className="hover:text-white transition-colors">Case Studies & Reviews</a></li>
                </ul>
              </div>

              {/* Action Buttons - Parsley Health Style */}
              <div className="space-y-2.5 pt-2">
                <button
                  onClick={onOpenAuditModal}
                  className="w-full bg-[#EAD2BD] hover:bg-[#DFC2A8] text-[#123829] px-5 py-3 rounded-full font-bold transition-all text-xs cursor-pointer text-center shadow-sm"
                >
                  Schedule Practice Audit
                </button>

                <a
                  href="tel:18005550199"
                  className="w-full border border-[#4A725D] hover:bg-[#1C4E3A] text-white px-5 py-3 rounded-full font-semibold transition-all text-xs cursor-pointer text-center block"
                >
                  Speak with a CVO Advisor
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Bar - Copyright & Legal */}
        <div className="pt-8 border-t border-[#1D4A37] flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#829E90] gap-4">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} Rhino MDs Healthcare Solutions (rhinomds.com). All rights reserved. Revenue Cycle Management & Physician Credentialing.
          </p>

          <div className="flex items-center gap-4 shrink-0">
            <span className="hover:text-white cursor-pointer transition-colors">HIPAA Compliance</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>

      </div>

    </footer>
  );
};

// Helper Twitter SVG
function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}
