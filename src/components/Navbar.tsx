import React, { useState, useEffect } from 'react';
import { ShieldCheck, Phone, Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import { RhinoLogo } from './RhinoLogo';

interface NavbarProps {
  onOpenAuditModal: () => void;
  onNavigateSection: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAuditModal, onNavigateSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigateSection(id);
  };

  return (
    <>
      {/* Top Banner */}
      <div className="bg-[#123829] text-[#E8E1D5] py-2 px-4 text-xs sm:text-sm font-medium text-center flex items-center justify-center gap-2 border-b border-[#254F3B]">
        <span className="inline-flex items-center gap-1 bg-[#D97736] text-white px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3 h-3" /> 2026 Payer Update
        </span>
        <span>Average Time-to-Bill reduced to 28 Days for Medicare PECOS & Commercial Payers</span>
        <button 
          onClick={() => handleNavClick('calculator')}
          className="hidden md:inline-flex items-center gap-1 underline hover:text-white font-semibold ml-2 transition-colors cursor-pointer"
        >
          Check Practice ROI <ArrowRight className="w-3 h-3" />
        </button>
      </div>

      {/* Main Navigation */}
      <header className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-sm border-b border-[#E6E0D6] py-3' 
          : 'bg-[#FAF8F5] py-5 border-b border-[#EDE8DF]'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo */}
          <div 
            onClick={() => handleNavClick('hero')} 
            className="cursor-pointer group"
          >
            <RhinoLogo variant="dark" size="md" />
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#2C3B34]">
            <button onClick={() => handleNavClick('services')} className="hover:text-[#123829] transition-colors cursor-pointer">
              Services & EDI/EFT
            </button>
            <button onClick={() => handleNavClick('calculator')} className="hover:text-[#123829] transition-colors cursor-pointer">
              Time-to-Bill Estimator
            </button>
            <button onClick={() => handleNavClick('portal-preview')} className="hover:text-[#123829] transition-colors cursor-pointer">
              Live Provider Portal
            </button>
            <button onClick={() => handleNavClick('comparison')} className="hover:text-[#123829] transition-colors cursor-pointer">
              Why Rhino MDs
            </button>
            <button onClick={() => handleNavClick('ai-advisor')} className="hover:text-[#123829] transition-colors flex items-center gap-1.5 cursor-pointer text-[#D97736] font-semibold">
              <Sparkles className="w-4 h-4" /> AI Payer Advisor
            </button>
            <button onClick={() => handleNavClick('pricing')} className="hover:text-[#123829] transition-colors cursor-pointer">
              Pricing
            </button>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-4">
            <a 
              href="tel:18005550199" 
              className="flex items-center gap-2 text-xs font-medium text-[#2C3B34] hover:text-[#123829] px-3 py-2 rounded-lg hover:bg-[#EFEAE1] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#2E5340]" />
              <span>(800) 555-0199</span>
            </a>

            <button
              onClick={onOpenAuditModal}
              className="bg-[#123829] hover:bg-[#1C4E3A] text-[#FAF8F5] px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-sm hover:shadow-md flex items-center gap-2 cursor-pointer active:scale-98"
            >
              <span>Book Practice Audit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={onOpenAuditModal}
              className="sm:hidden bg-[#123829] text-white px-3 py-1.5 rounded-full text-xs font-medium"
            >
              Book Audit
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#123829] hover:bg-[#EFEAE1] rounded-lg transition-colors cursor-pointer"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FAF8F5] border-b border-[#E6E0D6] px-4 pt-4 pb-6 space-y-3">
            <button
              onClick={() => handleNavClick('services')}
              className="block w-full text-left py-2 text-base font-medium text-[#123829] hover:bg-[#EFEAE1] px-3 rounded-lg"
            >
              Services & EDI/EFT Setup
            </button>
            <button
              onClick={() => handleNavClick('calculator')}
              className="block w-full text-left py-2 text-base font-medium text-[#123829] hover:bg-[#EFEAE1] px-3 rounded-lg"
            >
              Time-to-Bill & ROI Estimator
            </button>
            <button
              onClick={() => handleNavClick('portal-preview')}
              className="block w-full text-left py-2 text-base font-medium text-[#123829] hover:bg-[#EFEAE1] px-3 rounded-lg"
            >
              Live Provider Portal Showcase
            </button>
            <button
              onClick={() => handleNavClick('comparison')}
              className="block w-full text-left py-2 text-base font-medium text-[#123829] hover:bg-[#EFEAE1] px-3 rounded-lg"
            >
              Why Rhino MDs Advantage
            </button>
            <button
              onClick={() => handleNavClick('ai-advisor')}
              className="block w-full text-left py-2 text-base font-semibold text-[#D97736] hover:bg-[#EFEAE1] px-3 rounded-lg flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" /> AI Payer Requirement Advisor
            </button>
            <button
              onClick={() => handleNavClick('pricing')}
              className="block w-full text-left py-2 text-base font-medium text-[#123829] hover:bg-[#EFEAE1] px-3 rounded-lg"
            >
              Pricing & Plans
            </button>
            <button
              onClick={() => handleNavClick('faqs')}
              className="block w-full text-left py-2 text-base font-medium text-[#123829] hover:bg-[#EFEAE1] px-3 rounded-lg"
            >
              Frequently Asked Questions
            </button>

            <div className="pt-4 border-t border-[#E6E0D6] space-y-3">
              <a 
                href="tel:18005550199" 
                className="flex items-center justify-center gap-2 text-sm font-medium text-[#123829] py-2 bg-[#EFEAE1] rounded-lg"
              >
                <Phone className="w-4 h-4 text-[#2E5340]" />
                <span>Call (800) 555-0199</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAuditModal();
                }}
                className="w-full bg-[#123829] text-white py-3 rounded-xl text-center font-medium shadow-sm"
              >
                Schedule Practice Consultation
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
