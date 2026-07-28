import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStats } from './components/TrustStats';
import { ServicesMatrix } from './components/ServicesMatrix';
import { CredentialingCalculator } from './components/CredentialingCalculator';
import { LiveDashboardPreview } from './components/LiveDashboardPreview';
import { ComparisonSection } from './components/ComparisonSection';
import { PayerLogosShowcase } from './components/PayerLogosShowcase';
import { WorkflowSection } from './components/WorkflowSection';
import { SpecialtiesSection } from './components/SpecialtiesSection';
import { AiCredentialingAdvisor } from './components/AiCredentialingAdvisor';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { PricingSection } from './components/PricingSection';
import { VerifiMedDifferenceSection } from './components/VerifiMedDifferenceSection';
import { FaqSection } from './components/FaqSection';
import { AuditBookingModal } from './components/AuditBookingModal';
import { Footer } from './components/Footer';

export default function App() {
  const [auditModalOpen, setAuditModalOpen] = useState(false);
  const [auditModalData, setAuditModalData] = useState<any>(null);

  const handleOpenAuditModal = (data?: any) => {
    if (data) {
      setAuditModalData(data);
    }
    setAuditModalOpen(true);
  };

  const handleCloseAuditModal = () => {
    setAuditModalOpen(false);
    setAuditModalData(null);
  };

  const handleNavigateSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const offset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#123829] font-sans antialiased selection:bg-[#E5B869] selection:text-[#123829]">
      
      {/* Navigation Header */}
      <Navbar 
        onOpenAuditModal={() => handleOpenAuditModal()} 
        onNavigateSection={handleNavigateSection} 
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero 
          onOpenAuditModal={() => handleOpenAuditModal()} 
          onNavigateSection={handleNavigateSection} 
        />

        {/* Key Trust Metrics Ribbon */}
        <TrustStats />

        {/* Services & Department Scope Deep-Dive */}
        <ServicesMatrix 
          onOpenAuditModal={() => handleOpenAuditModal()} 
        />

        {/* Interactive Practice ROI & Time-to-Bill Estimator */}
        <CredentialingCalculator 
          onOpenAuditModalWithData={(data) => handleOpenAuditModal(data)} 
        />

        {/* Live Provider Portal Showcase */}
        <LiveDashboardPreview />

        {/* The VerifiMed CVO Advantage Comparison */}
        <ComparisonSection 
          onOpenAuditModal={() => handleOpenAuditModal()} 
        />

        {/* Payer & Insurer Network Auto-Sliding Ticker & Interactive Panel Metrics */}
        <PayerLogosShowcase />

        {/* 28-Day Step-by-Step Onboarding Roadmap */}
        <WorkflowSection 
          onOpenAuditModal={() => handleOpenAuditModal()} 
        />

        {/* Solutions for Practice Models */}
        <SpecialtiesSection 
          onOpenAuditModal={() => handleOpenAuditModal()} 
        />

        {/* Gemini 3.6 Flash Server-Side AI Practice Advisor */}
        <AiCredentialingAdvisor />

        {/* Verified Client Case Studies & Metrics */}
        <CaseStudiesSection 
          onOpenAuditModal={() => handleOpenAuditModal()} 
        />

        {/* Experience the VerifiMed Difference (Parsley Health Inspired Side-by-Side Cards) */}
        <VerifiMedDifferenceSection 
          onOpenAuditModal={() => handleOpenAuditModal()} 
        />

        {/* Transparent Pricing Plans */}
        <PricingSection 
          onOpenAuditModal={() => handleOpenAuditModal()} 
        />

        {/* Frequently Asked Questions */}
        <FaqSection 
          onOpenAuditModal={() => handleOpenAuditModal()} 
        />
      </main>

      {/* Footer */}
      <Footer 
        onNavigateSection={handleNavigateSection} 
        onOpenAuditModal={() => handleOpenAuditModal()} 
      />

      {/* Audit & Onboarding Booking Modal */}
      <AuditBookingModal 
        isOpen={auditModalOpen} 
        onClose={handleCloseAuditModal} 
        initialData={auditModalData} 
      />

    </div>
  );
}
