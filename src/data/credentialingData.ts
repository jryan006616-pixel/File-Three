import { CredentialingService, ProviderStatusMock, CaseStudy, PricingPlan } from '../types';

export const CREDENTIALING_SERVICES: CredentialingService[] = [
  {
    id: 'payer-enrollment',
    title: 'Payer Enrollment & Contracting',
    shortDesc: 'Full-service enrollment with Medicare PECOS, Medicaid, and commercial insurers like BCBS, Aetna, Cigna, and UHC.',
    fullDesc: 'We handle the complete end-to-end enrollment lifecycle for individual providers and medical groups across Medicare, Medicaid in all 50 states, and top national/regional commercial insurance panels. We prepare 100% clean application packages, bypass administrative rejections, and track payer portals daily.',
    iconName: 'FileCheck2',
    deliverables: [
      'Medicare PECOS Initial, Group Linkage & Revalidation',
      'Medicaid 50-State Provider Registration',
      'Commercial Insurer Panel Applications (BCBS, Aetna, Cigna, UHC, Humana)',
      'Delegated Credentialing File Management',
      'Payer Portal Login & Application Status Monitoring'
    ],
    turnaroundDays: '25-40 Days (vs Industry Avg 90-120 Days)',
    payerCoverage: '1,200+ National & Regional Payers',
    category: 'enrollment'
  },
  {
    id: 'edi-eft-activation',
    title: 'EDI & EFT Clearinghouse Setup',
    shortDesc: 'Direct Electronic Claims (837), Remittance (835), Eligibility (270/271), and Direct Deposit EFT linkage.',
    fullDesc: 'Eliminate billing delays and lost paper checks. We configure clearinghouse connections (Availity, Change Healthcare, Waystar, Optum) and establish Electronic Data Interchange (EDI 837 claims / 835 ERA) and Electronic Funds Transfer (EFT) directly to your practice bank account.',
    iconName: 'Zap',
    deliverables: [
      'Electronic Claims Submission (EDI 837) Activation',
      'Electronic Remittance Advice (ERA 835) Configuration',
      'Electronic Funds Transfer (EFT) Direct Deposit Setup',
      'Real-Time Eligibility & Benefits (EDI 270/271) Linkage',
      'Clearinghouse Account Integration & Payer Mapping'
    ],
    turnaroundDays: '7-14 Days Post-In-Network Approval',
    payerCoverage: 'All Clearinghouses & Banking Partners',
    category: 'clearinghouse'
  },
  {
    id: 'caqh-maintenance',
    title: 'CAQH ProView Optimization & Maintenance',
    shortDesc: 'Continuous profile creation, document expiration tracking, and mandatory 120-day attestation management.',
    fullDesc: 'A single expired license or missed CAQH attestation can trigger immediate payer termination and unpaid claims. Rhino MDs builds pristine CAQH ProView profiles, uploads verified credentials, and executes re-attestations on schedule with 100% compliance guarantee.',
    iconName: 'ShieldCheck',
    deliverables: [
      'New Provider CAQH Profile Creation & Complete Audit',
      'Mandatory 120-Day Re-Attestation Management',
      'License, DEA, Malpractice & Board Certificate Expiration Tracking',
      'CAQH Data Matching across State Medical Boards & Payers',
      'Quarterly CAQH Compliance Health Reports'
    ],
    turnaroundDays: 'Immediate 24-Hour Profile Audit',
    payerCoverage: 'CAQH ProView Network',
    category: 'maintenance'
  },
  {
    id: 'multi-state-licensing',
    title: 'Multi-State Licensing & IMLC Compact',
    shortDesc: 'Expedited state medical board licenses, IMLC compact applications, and Nursing Compact (NLC) management.',
    fullDesc: 'Scaling a telehealth group or expanding across state lines? We streamline full initial physician and mid-level medical licensing across all 50 states, manage Interstate Medical Licensure Compact (IMLC) expedites, and maintain active state board renewals.',
    iconName: 'Globe2',
    deliverables: [
      '50-State Initial Medical Board License Applications',
      'Interstate Medical Licensure Compact (IMLC) Processing',
      'Controlled Substance Registration (CDS / State DEA)',
      'Primary Source Verification & Fingerprint Card Coordination',
      'Annual Medical Board Renewal & CME Audit Management'
    ],
    turnaroundDays: '30-60 Days (State Dependent)',
    payerCoverage: 'All 50 US States & US Territories',
    category: 'licensing'
  },
  {
    id: 'npi-taxonomy',
    title: 'NPI 1 & NPI 2 NPPES Management',
    shortDesc: 'Individual (Type 1) and Organizational Group (Type 2) NPI registration, taxonomy mapping, and updates.',
    fullDesc: 'Proper NPI structure is the foundation of clean claims billing. We register and structure individual practitioner NPI Type 1 numbers, set up group practice NPI Type 2 profiles with proper primary and secondary NUCC taxonomy codes, and update NPPES registries.',
    iconName: 'Fingerprint',
    deliverables: [
      'NPI Type 1 (Individual Practitioner) Registration',
      'NPI Type 2 (Group Practice / Clinic Organization) Registration',
      'NUCC Specialty Taxonomy Code Mapping & Alignment',
      'NPPES Address, Practice Location & Subpart Updates',
      'NPI-to-Payer Linking & Billing Validation'
    ],
    turnaroundDays: '24-48 Hours',
    payerCoverage: 'NPPES / CMS Global Registry',
    category: 'enrollment'
  },
  {
    id: 'hospital-privileging',
    title: 'Hospital & Facility Privileging',
    shortDesc: 'Medical staff privileges, Ambulatory Surgery Center (ASC) privileging, and clinical CVO file preparation.',
    fullDesc: 'Getting clinical privileges at local hospitals, surgery centers, or outpatient facilities requires tedious primary source verification. We manage medical staff application packets, peer recommendations, hospital committee reviews, and reappointment schedules.',
    iconName: 'Building2',
    deliverables: [
      'Hospital Medical Staff Privileging Applications',
      'Ambulatory Surgery Center (ASC) Credentialing Files',
      'Primary Source Verifications (Education, Residency, Malpractice)',
      'Reappointment & Privilege Renewal Tracking',
      'CVO Compliance Audit Trail Generation'
    ],
    turnaroundDays: '30-45 Days',
    payerCoverage: 'Hospitals & ASC Networks Nationally',
    category: 'licensing'
  },
  {
    id: 'fee-schedule-audits',
    title: 'Fee Schedule & Rate Negotiations',
    shortDesc: 'Commercial payer fee schedule analysis, rate benchmarks, and contract re-negotiation for higher reimbursement.',
    fullDesc: 'Are your commercial payer contracted rates below market average? We audit your current fee schedules against regional Medicare benchmarks and top commercial percentiles, prepare rate increase proposals, and negotiate higher allowed amounts on key CPT codes.',
    iconName: 'TrendingUp',
    deliverables: [
      'Commercial Payer Fee Schedule Audit & Comparison',
      'Regional CPT Code Reimbursement Benchmark Analysis',
      'Formal Payer Contract Rate Increase Application',
      'Out-of-Network to In-Network Revenue Modeling',
      'Annual Payer Rate Review & Contract Maintenance'
    ],
    turnaroundDays: '45-90 Days',
    payerCoverage: 'Major Commercial Insurers',
    category: 'maintenance'
  },
  {
    id: 're-credentialing-automation',
    title: 'Re-Credentialing & Revalidation Tracking',
    shortDesc: 'Automated 2-3 year payer revalidation monitoring, DEA renewals, and malpractice certificate updates.',
    fullDesc: 'Payers require routine re-credentialing every 24 to 36 months, while Medicare PECOS mandates 5-year revalidations. Our automated monitoring engine flags upcoming deadlines 180 days in advance and completes revalidation packets before claims are frozen.',
    iconName: 'ClockCheck',
    deliverables: [
      'Medicare PECOS 5-Year Revalidation Filing',
      'Commercial Payer 2-3 Year Re-Credentialing Packets',
      'DEA & State License Renewal Expiration Radar',
      'Malpractice Certificate & COI Annual Payer Updates',
      'Compliance Dashboard & Executive Monthly Reports'
    ],
    turnaroundDays: 'Proactive 180-Day Advance Management',
    payerCoverage: 'All Active Payer Panels',
    category: 'maintenance'
  }
];

export const MOCK_PROVIDERS: ProviderStatusMock[] = [
  {
    id: 'p1',
    name: 'Dr. Sarah Jenkins, MD',
    npi: '1841294820',
    specialty: 'Internal Medicine / Cardiology',
    states: ['TX', 'FL', 'CA'],
    caqhStatus: 'Attested',
    caqhDaysLeft: 94,
    ediEftStatus: 'Active',
    payers: [
      { name: 'Medicare PECOS', type: 'Medicare', status: 'In-Network', effectiveDate: '2024-01-15', portalRef: 'MCR-882103' },
      { name: 'BlueCross BlueShield', type: 'Commercial', status: 'In-Network', effectiveDate: '2024-02-01', portalRef: 'BCBS-TX-9912' },
      { name: 'Aetna Healthcare', type: 'Commercial', status: 'Approved - Pending Effective Date', effectiveDate: '2026-08-15', portalRef: 'AET-40192' },
      { name: 'UnitedHealthcare', type: 'Commercial', status: 'EDI Processing', portalRef: 'UHC-77123' },
      { name: 'Cigna Health', type: 'Commercial', status: 'In-Network', effectiveDate: '2024-03-10', portalRef: 'CG-51023' }
    ],
    licenses: [
      { state: 'Texas', number: 'TX-MD-90412', expiresInDays: 280, status: 'Active' },
      { state: 'Florida', number: 'FL-MD-88120', expiresInDays: 190, status: 'Active' },
      { state: 'California', number: 'CA-MD-30129', expiresInDays: 410, status: 'Verified' }
    ]
  },
  {
    id: 'p2',
    name: 'Dr. Marcus Vance, MD, FAPA',
    npi: '1902834192',
    specialty: 'Psychiatry / Telehealth',
    states: ['NY', 'NJ', 'PA', 'CT', 'MA', 'FL'],
    caqhStatus: 'Action Needed',
    caqhDaysLeft: 12,
    ediEftStatus: 'Pending Payer',
    payers: [
      { name: 'Medicare PECOS', type: 'Medicare', status: 'In-Network', effectiveDate: '2023-11-10', portalRef: 'MCR-771092' },
      { name: 'NYS Medicaid', type: 'Medicaid', status: 'In-Network', effectiveDate: '2023-12-01', portalRef: 'NYMED-8812' },
      { name: 'Optum Behavioral', type: 'Commercial', status: 'In-Network', effectiveDate: '2024-01-20', portalRef: 'OPT-55102' },
      { name: 'Humana', type: 'Commercial', status: 'Application Submitted', portalRef: 'HUM-33910' }
    ],
    licenses: [
      { state: 'New York', number: 'NY-201942', expiresInDays: 140, status: 'Active' },
      { state: 'New Jersey', number: 'NJ-881023', expiresInDays: 45, status: 'Renewal in Progress' },
      { state: 'Pennsylvania', number: 'PA-991024', expiresInDays: 320, status: 'Active' }
    ]
  },
  {
    id: 'p3',
    name: 'Elena Rostova, FNP-BC',
    npi: '1283910293',
    specialty: 'Family Nurse Practitioner',
    states: ['GA', 'NC', 'SC'],
    caqhStatus: 'Attested',
    caqhDaysLeft: 110,
    ediEftStatus: 'Active',
    payers: [
      { name: 'Georgia Medicaid', type: 'Medicaid', status: 'In-Network', effectiveDate: '2024-04-01', portalRef: 'GAMED-1102' },
      { name: 'BCBS Georgia', type: 'Commercial', status: 'In-Network', effectiveDate: '2024-05-15', portalRef: 'BCBSGA-401' },
      { name: 'Cigna Health', type: 'Commercial', status: 'Application Submitted', portalRef: 'CG-90212' }
    ],
    licenses: [
      { state: 'Georgia', number: 'GA-NP-49102', expiresInDays: 210, status: 'Active' },
      { state: 'North Carolina', number: 'NC-NP-88192', expiresInDays: 340, status: 'Active' }
    ]
  }
];

export const COMPARISON_DATA = [
  {
    feature: 'Average Payer Enrollment Time',
    diy: '90 – 150 Days',
    generalBilling: '60 – 90 Days',
    verifiMed: '25 – 40 Days'
  },
  {
    feature: 'First-Pass Application Approval Rate',
    diy: '62% (High Rejection Rate)',
    generalBilling: '81%',
    verifiMed: '99.8% Guaranteed'
  },
  {
    feature: 'EDI & EFT Direct Deposit Setup',
    diy: 'Manual (Often forgotten)',
    generalBilling: 'Basic Claims Only',
    verifiMed: 'Full EDI 837/835 & EFT Bank Linkage'
  },
  {
    feature: 'CAQH 120-Day Attestation & Tracking',
    diy: 'Manual Reminders',
    generalBilling: 'Ad-hoc Maintenance',
    verifiMed: 'Automated 120-Day Proactive Attestation'
  },
  {
    feature: 'Multi-State Medical Licensing & IMLC',
    diy: 'Not Provided',
    generalBilling: 'Extra Fee / Outsourced',
    verifiMed: 'Full 50-State & IMLC Compact Management'
  },
  {
    feature: 'Real-Time Provider Payer Portal Access',
    diy: 'Spreadsheets & Emails',
    generalBilling: 'Monthly PDF Reports',
    verifiMed: '24/7 Live Provider Portal Dashboard'
  },
  {
    feature: 'Dedicated CVO Account Manager',
    diy: 'None (Staff Time Wasted)',
    generalBilling: 'Shared Call Center',
    verifiMed: 'Dedicated Named Senior CVO Specialist'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'cs1',
    practiceName: 'Apex Health Partners',
    practiceSize: '18 Physicians & 8 Nurse Practitioners',
    specialty: 'Multi-Specialty Primary Care & Cardiology',
    location: 'Austin & San Antonio, TX',
    headline: 'Eliminated $640k in Stuck Payer Claims & Onboarded 6 New Physicians in 28 Days',
    challenge: 'Apex Health faced a massive 4-month credentialing backlog when expanding to two new locations. Six newly hired physicians could not see commercial patients, leading to over $600,000 in unbilled care and frustrated medical directors.',
    solution: 'Rhino MDs deployed a dedicated CVO team, audited their CAQH profiles within 24 hours, resubmitted flawed BCBS and Aetna packets, and activated direct EDI 837/835 and EFT banking links.',
    metrics: [
      { label: 'Time-to-Bill Reduction', value: '72%' },
      { label: 'Stuck Claims Unlocked', value: '$640,000' },
      { label: 'First-Pass Approval Rate', value: '100%' },
      { label: 'Average Onboarding Time', value: '28 Days' }
    ],
    quote: 'Rhino MDs transformed our entire practice onboarding. Where our previous billing agency took 4 months per doctor, Rhino MDs had our cardiology team fully in-network and receiving direct deposit EFT payments in under 30 days.',
    authorName: 'Dr. Robert Harrison, MD',
    authorRole: 'Managing Partner & Medical Director'
  },
  {
    id: 'cs2',
    practiceName: 'MindWave Telepsychiatry Group',
    practiceSize: '35 Telehealth Providers across 14 States',
    specialty: 'Behavioral Health & Telepsychiatry',
    location: 'National Telehealth Platform',
    headline: 'Accelerated 14-State Medical Licensing and Optum/Cigna Credentialing for 35 Doctors',
    challenge: 'Scaling a multi-state telepsychiatry network created an administrative nightmare with state medical boards, IMLC compact filings, state DEA/CDS registrations, and local Medicaid panels.',
    solution: 'Rhino MDs executed automated multi-state licensing applications, synchronized CAQH ProView data across all 14 state boards, and completed group NPI Type 2 payer enrollments with 0 administrative rejections.',
    metrics: [
      { label: 'States Licensed & Enrolled', value: '14 States' },
      { label: 'Time Saved per Provider', value: '85 Hours' },
      { label: 'Payer Panel Approvals', value: '140+ Panels' },
      { label: 'Revenue Growth YoY', value: '+142%' }
    ],
    quote: 'Without Rhino MDs, our multi-state expansion would have stalled for a year. Their team knows every nuance of Medicare PECOS, IMLC compacts, and state-specific Medicaid requirements.',
    authorName: 'Amanda Lin, MHA',
    authorRole: 'Chief Operating Officer, MindWave'
  },
  {
    id: 'cs3',
    practiceName: 'Summit Surgical & Ambulatory Center',
    practiceSize: '12 Orthopedic & General Surgeons',
    specialty: 'Ambulatory Surgery & Outpatient Orthopedics',
    location: 'Denver, CO',
    headline: 'Renegotiated Commercial Payer Fee Schedules +18% and Secured ASC Hospital Privileges',
    challenge: 'Summit Surgical was getting paid 2021 commercial rates and suffered from delayed ERA 835 electronic payments, leading to severe cash flow bottlenecks.',
    solution: 'Rhino MDs audited their fee schedules, conducted regional CPT benchmark comparisons, re-negotiated contracts with top 3 commercial insurers, and activated automated EDI/EFT setup.',
    metrics: [
      { label: 'Reimbursement Rate Lift', value: '+18.4%' },
      { label: 'ERA / EFT Setup Speed', value: '9 Days' },
      { label: 'Annual Revenue Gain', value: '+$310,000' }
    ],
    quote: 'The fee schedule renegotiation alone paid for Rhino MDs’ service 10 times over. Their team is sharp, responsive, and insanely thorough.',
    authorName: 'Dr. Marcus Vance',
    authorRole: 'Surgical Director'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'solo',
    name: 'Solo & Small Practice',
    tagline: 'Ideal for solo practitioners, new practice setups, and independent clinics (1-3 providers).',
    pricePerProvider: '$249',
    period: 'per provider / month',
    popular: false,
    features: [
      'Full Payer Enrollment (Medicare, Medicaid & Commercial)',
      'EDI 837 Claims & EFT Direct Deposit Setup',
      'CAQH ProView Creation & 120-Day Attestations',
      'NPI Type 1 & Type 2 NPPES Registration',
      'License, DEA & Malpractice Expiration Alerts',
      'Dedicated Credentialing Specialist',
      '24/7 Live Provider Portal Dashboard'
    ],
    idealFor: '1 – 3 Providers',
    ctaText: 'Start Solo Onboarding'
  },
  {
    id: 'growth',
    name: 'Growth Medical Group',
    tagline: 'Our most popular plan for expanding medical groups, urgent cares, and specialty clinics.',
    pricePerProvider: '$199',
    period: 'per provider / month',
    popular: true,
    features: [
      'Everything in Solo Plan, PLUS:',
      'Multi-State Licensing & IMLC Compact Management',
      'Hospital & Facility Privileging File Management',
      'Annual Payer Fee Schedule Audit & Rate Analysis',
      'Expedited 25-Day Payer Submission Guarantee',
      'Prior-Payer Contract Backlog Cleanup',
      'Dedicated Senior CVO Account Manager',
      'Quarterly Executive Revenue Cycle Reviews'
    ],
    idealFor: '4 – 15 Providers',
    ctaText: 'Schedule Practice Consultation'
  },
  {
    id: 'enterprise',
    name: 'Enterprise & Telehealth Network',
    tagline: 'Custom high-volume credentialing engine for large healthcare systems, MSOs, and telehealth groups.',
    pricePerProvider: 'Custom',
    period: 'volume discounted rate',
    popular: false,
    features: [
      'Everything in Growth Plan, PLUS:',
      '50-State Multi-State Mass Licensing Engine',
      'Delegated Credentialing & CVO File Auditing',
      'Direct EHR / PM System Clearinghouse API Integration',
      'Custom SLA & Guaranteed Turnaround Timelines',
      'Custom Payer Fee Schedule Re-Negotiation Service',
      'Dedicated CVO Team & Executive Account Director',
      'Custom Security, BAA & HIPAA Compliance Audit'
    ],
    idealFor: '16+ Providers / Telehealth Networks',
    ctaText: 'Contact Enterprise Team'
  }
];

export const FAQS = [
  {
    q: 'How long does payer credentialing and enrollment typically take with Rhino MDs?',
    a: 'While industry standard DIY or traditional billing agency turnaround times drag on for 90 to 120 days, Rhino MDs averages 25 to 40 days for commercial payers and 30 to 45 days for Medicare PECOS. Our secret lies in pre-auditing 100% of provider files against payer-specific rules before initial submission, eliminating rejections.'
  },
  {
    q: 'What is EDI and EFT setup, and why is it critical for my medical practice billing?',
    a: 'Getting "In-Network" approval is only half the battle. Without Electronic Data Interchange (EDI 837 for claims and EDI 835 for ERA electronic remittance) and Electronic Funds Transfer (EFT direct deposit), payers will send paper checks and paper Explanation of Benefits (EOBs) to old addresses, causing severe revenue delays. We set up direct electronic clearinghouse links so reimbursement goes straight to your bank account.'
  },
  {
    q: 'How does Rhino MDs handle CAQH 120-day attestations?',
    a: 'If a provider fails to attest their CAQH profile every 120 days, major insurers like Aetna, Cigna, and BCBS instantly place provider profiles on hold and reject incoming claims. Rhino MDs actively maintains your CAQH ProView profiles, uploads updated licenses, DEAs, and COIs, and executes attestations automatically so your practice stays 100% compliant.'
  },
  {
    q: 'Can Rhino MDs help with multi-state licensing and the Interstate Medical Licensure Compact (IMLC)?',
    a: 'Yes! We specialize in multi-state medical licensing for expanding physical groups and telehealth networks. We manage state medical board applications, fingerprint coordination, Interstate Medical Licensure Compact (IMLC) expedites, Nurse Licensure Compact (NLC), and state controlled substance registrations (CDS).'
  },
  {
    q: 'What happens if a provider has a gap in malpractice coverage or past board sanctions?',
    a: 'Our Senior CVO specialists review all historical disclosures before filing. We craft compliant explanatory letters, gather primary source documentation, and work directly with payer credentialing committees to navigate disclosure questions smoothly without unnecessary delays.'
  },
  {
    q: 'How do I track the progress of my practice credentialing applications?',
    a: 'You get 24/7 access to our web-based Rhino MDs Provider Portal Dashboard. You can see real-time application statuses across all payers (Medicare, BCBS, Aetna, Cigna, UHC), CAQH attestation countdowns, license expiration dates, EDI/EFT status, and payer reference numbers in one clean interface.'
  },
  {
    q: 'What information and documents are required to start the provider enrollment process?',
    a: 'To initiate enrollment, our CVO onboarding team collects your NPI Type 1/2 details, active state medical licenses, DEA certificate, malpractice insurance face sheet (COI), medical school diploma, board certifications, work history (CV), and practice location banking details for EFT setup.'
  },
  {
    q: 'Do you renegotiate payer fee schedules for existing in-network contracts?',
    a: 'Yes! Our contracting team performs comprehensive fee schedule benchmarks against regional Medicare RVU standards. We prepare formal rate increase requests with clinical quality data to negotiate higher reimbursement rates with commercial payers like BCBS, Aetna, and Cigna.'
  }
];
