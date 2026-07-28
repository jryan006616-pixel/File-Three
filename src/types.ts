export interface CredentialingService {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  deliverables: string[];
  turnaroundDays: string;
  payerCoverage: string;
  category: 'enrollment' | 'clearinghouse' | 'licensing' | 'maintenance';
}

export interface ProviderStatusMock {
  id: string;
  name: string;
  npi: string;
  specialty: string;
  states: string[];
  caqhStatus: 'Attested' | 'Action Needed' | 'Pending Review';
  caqhDaysLeft: number;
  ediEftStatus: 'Active' | 'Pending Payer' | 'Setup Required';
  payers: {
    name: string;
    type: 'Commercial' | 'Medicare' | 'Medicaid';
    status: 'In-Network' | 'Application Submitted' | 'EDI Processing' | 'Approved - Pending Effective Date';
    effectiveDate?: string;
    portalRef: string;
  }[];
  licenses: {
    state: string;
    number: string;
    expiresInDays: number;
    status: 'Active' | 'Renewal in Progress' | 'Verified';
  }[];
}

export interface PracticeCalculatorInput {
  providerCount: number;
  practiceType: string;
  statesCount: number;
  hasMedicareMedicaid: boolean;
  needsEdiEft: boolean;
  needsMultiStateLicensing: boolean;
  monthlyRevenuePerProvider: number;
}

export interface PracticeCalculatorResult {
  currentEstimatedDelayDays: number;
  verifiMedTimelineDays: number;
  daysSaved: number;
  potentialRevenueUnlocked: number;
  ediEftActivationDays: number;
  caqhRiskScore: 'Low' | 'Moderate' | 'High';
  recommendedPackage: string;
}

export interface CaseStudy {
  id: string;
  practiceName: string;
  practiceSize: string;
  specialty: string;
  location: string;
  headline: string;
  challenge: string;
  solution: string;
  metrics: {
    label: string;
    value: string;
  }[];
  quote: string;
  authorName: string;
  authorRole: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  pricePerProvider: string;
  period: string;
  popular?: boolean;
  features: string[];
  idealFor: string;
  ctaText: string;
}

export interface ConsultationFormData {
  practiceName: string;
  contactName: string;
  email: string;
  phone: string;
  practiceType: string;
  providerCount: string;
  primaryState: string;
  servicesNeeded: string[];
  notes: string;
}
