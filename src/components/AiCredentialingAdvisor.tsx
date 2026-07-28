import React, { useState } from 'react';
import { Sparkles, Send, Bot, User, CheckCircle2, Loader2, AlertCircle, RefreshCw } from 'lucide-react';

export const AiCredentialingAdvisor: React.FC = () => {
  const [question, setQuestion] = useState<string>('');
  const [practiceType, setPracticeType] = useState<string>('Primary Care');
  const [state, setState] = useState<string>('Texas');
  const [payer, setPayer] = useState<string>('Medicare & BCBS');
  const [loading, setLoading] = useState<boolean>(false);
  const [answer, setAnswer] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const sampleQuestions = [
    "What documents are needed for Medicare PECOS enrollment for a new group practice?",
    "How long does BCBS credentialing take for a telehealth physician?",
    "What is the difference between EDI 837 and EDI 835 clearinghouse setup?",
    "How do I qualify for the Interstate Medical Licensure Compact (IMLC)?",
    "What happens if a provider misses their 120-day CAQH attestation deadline?"
  ];

  const handleAskAdvisor = async (customQ?: string) => {
    const queryToAsk = customQ || question;
    if (!queryToAsk.trim()) return;

    setLoading(true);
    setError(null);
    setAnswer(null);

    try {
      const res = await fetch('/api/gemini/credentialing-advisor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: queryToAsk,
          practiceType,
          state,
          payer
        })
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      setAnswer(data.answer);
    } catch (err: any) {
      console.error('Advisor error:', err);
      setError(err?.message || 'Failed to consult AI Credentialing Engine.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-advisor" className="py-16 lg:py-24 bg-[#123829] text-white border-y border-[#254F3B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1C4E3A] text-[#E5B869] text-xs font-semibold border border-[#2B6049]">
            <Sparkles className="w-4 h-4" />
            <span>Server-Side Gemini 3.6 Flash Engine</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white">
            AI Practice Credentialing & Payer Requirement Advisor
          </h2>
          <p className="text-base text-[#B2C7BC]">
            Ask any technical question regarding state medical board licensing rules, CAQH attestation deadlines, PECOS group linkage, EDI 837/835 setups, or commercial payer requirements.
          </p>
        </div>

        {/* Advisor Interface Box */}
        <div className="bg-[#1C4E3A] rounded-3xl p-6 sm:p-10 border border-[#2B6049] shadow-xl space-y-8 max-w-4xl mx-auto">
          
          {/* Practice Parameters Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-[#123829] p-4 rounded-2xl border border-[#254F3B] text-xs">
            <div>
              <label className="text-[#A3B8AD] block font-medium mb-1">Practice Specialty:</label>
              <input
                type="text"
                value={practiceType}
                onChange={(e) => setPracticeType(e.target.value)}
                className="w-full bg-[#1C4E3A] border border-[#2B6049] rounded-lg px-3 py-1.5 text-white font-semibold focus:outline-none"
                placeholder="e.g. Cardiology"
              />
            </div>
            <div>
              <label className="text-[#A3B8AD] block font-medium mb-1">Operating State:</label>
              <input
                type="text"
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="w-full bg-[#1C4E3A] border border-[#2B6049] rounded-lg px-3 py-1.5 text-white font-semibold focus:outline-none"
                placeholder="e.g. Texas"
              />
            </div>
            <div>
              <label className="text-[#A3B8AD] block font-medium mb-1">Target Payer Focus:</label>
              <input
                type="text"
                value={payer}
                onChange={(e) => setPayer(e.target.value)}
                className="w-full bg-[#1C4E3A] border border-[#2B6049] rounded-lg px-3 py-1.5 text-white font-semibold focus:outline-none"
                placeholder="e.g. Medicare & BCBS"
              />
            </div>
          </div>

          {/* Sample Questions Prompts */}
          <div className="space-y-2">
            <span className="text-xs text-[#A3B8AD] font-semibold uppercase tracking-wider block">Frequent Practice Questions:</span>
            <div className="flex flex-wrap gap-2">
              {sampleQuestions.map((sq, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setQuestion(sq);
                    handleAskAdvisor(sq);
                  }}
                  className="text-xs bg-[#123829] hover:bg-[#2E5340] text-[#E5B869] border border-[#254F3B] px-3 py-1.5 rounded-full transition-colors text-left cursor-pointer"
                >
                  "{sq}"
                </button>
              ))}
            </div>
          </div>

          {/* Input Box */}
          <div className="space-y-3">
            <div className="relative">
              <textarea
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Ask a question about provider credentialing, CAQH attestations, EDI/EFT setup, or state medical board requirements..."
                rows={3}
                className="w-full bg-[#123829] border border-[#2B6049] rounded-2xl p-4 text-sm text-white placeholder-[#829E90] focus:outline-none focus:ring-2 focus:ring-[#E5B869]"
              />
              <button
                onClick={() => handleAskAdvisor()}
                disabled={loading || !question.trim()}
                className="absolute bottom-4 right-4 bg-[#D97736] hover:bg-[#C2652A] text-white px-5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 disabled:opacity-50 cursor-pointer shadow-md"
              >
                {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                <span>Consult Advisor</span>
              </button>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="p-4 bg-red-900/50 border border-red-700 rounded-xl text-xs text-red-200 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
              <span>{error}</span>
            </div>
          )}

          {/* Answer Output */}
          {answer && (
            <div className="bg-[#123829] p-6 rounded-2xl border border-[#254F3B] space-y-4 animate-fade-in">
              <div className="flex items-center justify-between border-b border-[#254F3B] pb-3">
                <div className="flex items-center gap-2">
                  <Bot className="w-5 h-5 text-[#E5B869]" />
                  <span className="text-sm font-serif font-bold text-white">Senior CVO Credentialing Advisor Guidance</span>
                </div>
                <span className="text-[10px] bg-[#1C4E3A] text-[#A3B8AD] px-2.5 py-0.5 rounded-full font-mono">
                  Verified Response
                </span>
              </div>

              <div className="text-sm text-[#E8E1D5] leading-relaxed whitespace-pre-wrap font-sans space-y-2">
                {answer}
              </div>

              <div className="pt-3 border-t border-[#254F3B] text-[11px] text-[#A3B8AD] flex items-center justify-between">
                <span>Want Rhino MDs to execute this enrollment packet for you?</span>
                <button
                  onClick={() => {
                    const section = document.getElementById('calculator');
                    section?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-[#E5B869] font-semibold underline cursor-pointer hover:text-white"
                >
                  Estimate Time-to-Bill
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
