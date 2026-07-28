import React, { useState } from 'react';
import { MOCK_PROVIDERS } from '../data/credentialingData';
import { ProviderStatusMock } from '../types';
import { 
  ShieldCheck, AlertTriangle, CheckCircle, Clock, Zap, FileText, Globe, RefreshCw, Filter, Search
} from 'lucide-react';

export const LiveDashboardPreview: React.FC = () => {
  const [selectedProviderId, setSelectedProviderId] = useState<string>('p1');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  const selectedProvider = MOCK_PROVIDERS.find(p => p.id === selectedProviderId) || MOCK_PROVIDERS[0];

  const filteredPayers = selectedProvider.payers.filter(payer => {
    if (statusFilter === 'all') return true;
    if (statusFilter === 'in-network') return payer.status === 'In-Network';
    if (statusFilter === 'pending') return payer.status !== 'In-Network';
    return true;
  });

  return (
    <section id="portal-preview" className="py-16 lg:py-24 bg-[#EFEAE1] border-y border-[#DCD5C9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#123829] text-[#E5B869] text-xs font-semibold">
            <ShieldCheck className="w-4 h-4" />
            <span>24/7 Practice Portal Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#123829]">
            Real-Time Credentialing & Payer Portal Dashboard
          </h2>
          <p className="text-sm sm:text-base text-[#3D4D45]">
            Experience total transparency. Track every provider’s CAQH status, Medicare PECOS filings, EDI/EFT setup, and state board license renewals in real-time.
          </p>
        </div>

        {/* Dashboard Mockup Container */}
        <div className="bg-white rounded-2xl border border-[#DCD5C9] shadow-xl overflow-hidden">
          
          {/* Top Bar of Portal Mock */}
          <div className="bg-[#123829] text-white p-4 sm:px-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#254F3B]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#E5B869] text-[#123829] font-bold flex items-center justify-center text-xs">
                RMD
              </div>
              <div>
                <p className="text-sm font-bold font-serif">Rhino MDs Practice Portal v4.2</p>
                <p className="text-[10px] text-[#A3B8AD]">Connected Practice: Apex Medical Group (18 Providers)</p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs">
              <span className="flex items-center gap-1 bg-[#1C4E3A] px-3 py-1 rounded-full text-[#E5B869] font-medium">
                <RefreshCw className="w-3 h-3 animate-spin" /> Payer Sync Active
              </span>
              <span className="bg-[#2E5340] px-2.5 py-1 rounded-full text-white font-mono text-[11px]">HIPAA Secure</span>
            </div>
          </div>

          {/* Provider Selection Tabs */}
          <div className="bg-[#FAF8F5] p-3 sm:px-6 border-b border-[#E6E0D6] flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
              {MOCK_PROVIDERS.map((provider) => (
                <button
                  key={provider.id}
                  onClick={() => setSelectedProviderId(provider.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer whitespace-nowrap flex items-center gap-2 ${
                    selectedProviderId === provider.id
                      ? 'bg-[#123829] text-white shadow-sm'
                      : 'bg-white text-[#2C3B34] border border-[#E6E0D6] hover:bg-[#EFEAE1]'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-[#E5B869]"></span>
                  <span>{provider.name}</span>
                </button>
              ))}
            </div>

            <div className="text-xs text-[#5C6B64] font-medium hidden md:block">
              NPI: <span className="font-mono font-bold text-[#123829]">{selectedProvider.npi}</span> | Specialty: {selectedProvider.specialty}
            </div>
          </div>

          {/* Provider Overview Header Stats */}
          <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4 bg-[#FAF8F5] border-b border-[#E6E0D6]">
            
            {/* Stat 1: CAQH ProView Status */}
            <div className="bg-white p-4 rounded-xl border border-[#EDE8DF] space-y-1">
              <div className="flex justify-between items-center text-xs">
                <span className="text-[#5C6B64] font-semibold">CAQH ProView Attestation</span>
                <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                  selectedProvider.caqhStatus === 'Attested' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                }`}>
                  {selectedProvider.caqhStatus}
                </span>
              </div>
              <p className="text-lg font-bold font-serif text-[#123829]">
                {selectedProvider.caqhDaysLeft} Days Remaining
              </p>
              <p className="text-[11px] text-[#5C6B64]">
                Automated 120-Day re-attestation scheduled in 80 days
              </p>
            </div>

            {/* Stat 2: EDI / EFT Status */}
            <div className="bg-white p-4 rounded-xl border border-[#EDE8DF] space-y-1">
              <div className="flex justify-between items-center text-xs">
                <span className="text-[#5C6B64] font-semibold">EDI 837 / EFT 835 Status</span>
                <span className="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded text-[10px] font-bold">
                  {selectedProvider.ediEftStatus}
                </span>
              </div>
              <p className="text-lg font-bold font-serif text-[#123829] flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-[#D97736]" /> Direct Deposit Link
              </p>
              <p className="text-[11px] text-[#5C6B64]">
                Availity & Change Healthcare clearinghouse mapped
              </p>
            </div>

            {/* Stat 3: State Medical Licenses */}
            <div className="bg-white p-4 rounded-xl border border-[#EDE8DF] space-y-1">
              <div className="flex justify-between items-center text-xs">
                <span className="text-[#5C6B64] font-semibold">State Board Licenses</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded text-[10px] font-bold">
                  {selectedProvider.licenses.length} States Active
                </span>
              </div>
              <p className="text-lg font-bold font-serif text-[#123829]">
                {selectedProvider.licenses.map(l => l.state).join(', ')}
              </p>
              <p className="text-[11px] text-[#5C6B64]">
                Next Renewal: {selectedProvider.licenses[0]?.state} ({selectedProvider.licenses[0]?.expiresInDays} days)
              </p>
            </div>

          </div>

          {/* Main Table: Payer Panels */}
          <div className="p-6 space-y-4">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <h4 className="text-base font-serif font-bold text-[#123829] flex items-center gap-2">
                <span>Payer Enrollment & Portal References</span>
                <span className="text-xs font-sans font-normal text-[#5C6B64]">({selectedProvider.payers.length} Insurers)</span>
              </h4>

              <div className="flex items-center gap-2 text-xs">
                <span className="text-[#5C6B64] font-medium">Filter Status:</span>
                <button
                  onClick={() => setStatusFilter('all')}
                  className={`px-3 py-1 rounded-lg font-medium cursor-pointer ${
                    statusFilter === 'all' ? 'bg-[#123829] text-white' : 'bg-[#FAF8F5] text-[#2C3B34] border border-[#E6E0D6]'
                  }`}
                >
                  All ({selectedProvider.payers.length})
                </button>
                <button
                  onClick={() => setStatusFilter('in-network')}
                  className={`px-3 py-1 rounded-lg font-medium cursor-pointer ${
                    statusFilter === 'in-network' ? 'bg-[#123829] text-white' : 'bg-[#FAF8F5] text-[#2C3B34] border border-[#E6E0D6]'
                  }`}
                >
                  In-Network
                </button>
                <button
                  onClick={() => setStatusFilter('pending')}
                  className={`px-3 py-1 rounded-lg font-medium cursor-pointer ${
                    statusFilter === 'pending' ? 'bg-[#123829] text-white' : 'bg-[#FAF8F5] text-[#2C3B34] border border-[#E6E0D6]'
                  }`}
                >
                  Processing
                </button>
              </div>
            </div>

            <div className="overflow-x-auto border border-[#E6E0D6] rounded-xl">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#FAF8F5] text-[#123829] font-serif border-b border-[#E6E0D6]">
                  <tr>
                    <th className="p-3.5 font-bold">Payer / Insurance Company</th>
                    <th className="p-3.5 font-bold">Category</th>
                    <th className="p-3.5 font-bold">Enrollment Status</th>
                    <th className="p-3.5 font-bold">Effective Date</th>
                    <th className="p-3.5 font-bold">Payer Portal Reference</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F0ECE1] text-[#2C3B34]">
                  {filteredPayers.map((payer, idx) => (
                    <tr key={idx} className="hover:bg-[#FAF8F5] transition-colors">
                      <td className="p-3.5 font-semibold text-[#123829]">{payer.name}</td>
                      <td className="p-3.5">
                        <span className="px-2 py-0.5 rounded bg-[#EFEAE1] text-[#123829] font-medium text-[10px]">
                          {payer.type}
                        </span>
                      </td>
                      <td className="p-3.5">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-semibold text-[11px] ${
                          payer.status === 'In-Network'
                            ? 'bg-emerald-100 text-emerald-800'
                            : payer.status.includes('Approved')
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-amber-100 text-amber-800'
                        }`}>
                          {payer.status === 'In-Network' && <CheckCircle className="w-3 h-3" />}
                          {payer.status}
                        </span>
                      </td>
                      <td className="p-3.5 font-mono text-[#5C6B64]">
                        {payer.effectiveDate || 'Pending Final Effective Date'}
                      </td>
                      <td className="p-3.5 font-mono text-xs font-semibold text-[#123829]">
                        {payer.portalRef}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>

          {/* Footer of Portal Mock */}
          <div className="bg-[#FAF8F5] p-4 text-center text-xs text-[#5C6B64] border-t border-[#E6E0D6]">
            <span>Need to add a new provider or request a payer panel expansion? </span>
            <span className="font-semibold text-[#123829] underline cursor-pointer">Submit Application Request in Rhino MDs Portal</span>
          </div>

        </div>

      </div>
    </section>
  );
};
