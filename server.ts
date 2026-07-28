import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  app.use(express.json());

  // Helper for Gemini AI instance
  function getGeminiClient() {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) return null;
    return new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }

  // API Endpoint: AI Practice Credentialing & Payer Requirement Advisor
  app.post('/api/gemini/credentialing-advisor', async (req, res) => {
    try {
      const { question, practiceType, state, payer } = req.body;

      if (!question || typeof question !== 'string') {
        res.status(400).json({ error: 'Question string is required' });
        return;
      }

      const ai = getGeminiClient();
      if (!ai) {
        // Fallback response if GEMINI_API_KEY is not supplied in environment
        res.json({
          answer: `For practice type "${practiceType || 'General Practice'}" in ${state || 'your state'}, payer credentialing (including ${payer || 'major commercial/Medicare payers'}) typically requires:
1. CAQH ProView attestation updated within the last 120 days.
2. Active Type 1 (Individual NPI) and Type 2 (Group NPI) NPPES setup with proper taxonomy codes.
3. State medical board license and DEA registration.
4. Comprehensive Claims (EDI 837) and Direct Deposit (EFT 835) enrollment with the payer's clearinghouse.
5. Turnaround time ranges from 30 to 90 days depending on Medicare PECOS vs commercial panels.`,
          source: 'System Credentialing Knowledgebase'
        });
        return;
      }

      const systemInstruction = `You are Rhino MDs' Senior Medical Practice Credentialing & Payer Enrollment Specialist.
You have expert knowledge in:
- Provider Credentialing & Re-Credentialing (Medicare PECOS, Medicaid in all 50 states, Commercial Payers like BCBS, Aetna, Cigna, Humana, UHC)
- CAQH ProView profiles, 120-day attestations, and document compliance (DEA, Malpractice, CDS, Medical Board Licenses, Board Certifications)
- EDI (837/835/270/276) Clearinghouse setup & EFT Direct Deposit activation
- Multi-State Medical Licensing, Interstate Medical Licensure Compact (IMLC), NLC Nursing Compact
- NPI Type 1 & Type 2 registration, Taxonomy mapping, NPPES updates
- Hospital Privileging, ASC Credentialing, Delegated Credentialing, Fee Schedule Audits.

Provide authoritative, concise, actionable advice for medical practice managers and physicians. Use bullet points and clear formatting. Keep tone professional, reassuring, and precise.`;

      const prompt = `Medical Practice Query:
- Question: ${question}
- Practice Specialty/Type: ${practiceType || 'Unspecified'}
- State: ${state || 'Multi-State'}
- Target Payer/Focus: ${payer || 'General Payer Enrollment'}

Please provide a detailed, accurate response addressing requirements, typical timeline, key potential pitfalls to avoid, and exact steps needed.`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.6-flash',
        contents: prompt,
        config: {
          systemInstruction,
          temperature: 0.2,
        },
      });

      const text = response.text || 'No response generated.';
      res.json({ answer: text, source: 'Rhino MDs AI Credentialing Engine' });
    } catch (error: any) {
      console.error('Error in credentialing advisor route:', error);
      res.status(500).json({ error: 'Failed to process credentialing query', details: error?.message || 'Server error' });
    }
  });

  // Health check endpoint
  app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', service: 'Rhino MDs Credentialing API' });
  });

  // Vite development middleware or static production serving
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`VerifiMed Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
});
