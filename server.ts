import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini Client
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    },
  },
});

// AI Itinerary Curation Endpoint
app.post('/api/curate-itinerary', async (req, res) => {
  try {
    const {
      arrivalDate,
      departureDate,
      travelers,
      selectedInterests,
      accommodationType,
      pace,
      budgetLevel,
      specialRequests,
    } = req.body;

    const prompt = `You are CeylonDiscovery's Chief Luxury Travel Architect for Sri Lanka.
Draft a highly personalized, exquisite multi-day itinerary for a traveler with the following specifications:
- Dates: ${arrivalDate || 'Flexible'} to ${departureDate || 'Flexible'}
- Travelers: ${travelers || 'Couple'}
- Key Interests: ${(selectedInterests || []).join(', ') || 'Culture, Wildlife, Highlands'}
- Preferred Vibe: ${accommodationType || 'Luxury Boutique'}
- Travel Pace: ${pace || 'Balanced'}
- Budget Style: ${budgetLevel || 'Standard Luxury'}
- Special Notes: ${specialRequests || 'None'}

Please return a valid JSON array of days. Output ONLY JSON with NO markdown formatting, no code ticks, no explanation text outside the JSON.
Schema:
[
  {
    "dayNumber": 1,
    "title": "Short poetic title for the day",
    "location": "City/Region name in Sri Lanka",
    "description": "2-3 sentence overview of the day's narrative",
    "morningActivity": "Detailed morning highlight or private tour",
    "afternoonActivity": "Afternoon experience or scenic drive",
    "eveningActivity": "Evening dining or sunset experience",
    "stayRecommendation": "Recommended luxury hotel or villa"
  }
]
Provide 4 to 6 detailed days maximum.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.6-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
      },
    });

    const rawText = response.text || '[]';
    const days = JSON.parse(rawText);
    res.json({ success: true, days });
  } catch (error: any) {
    console.error('Error generating itinerary:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to generate itinerary. Please try again.',
    });
  }
});

// AI Assistant Travel Q&A Endpoint
app.post('/api/ask-assistant', async (req, res) => {
  try {
    const { question } = req.body;

    const prompt = `You are "Ceylon AI", an expert concierge for luxury travel in Sri Lanka.
Answer the following traveler's query with warmth, precise local knowledge, and elegant recommendations.
Keep response concise, engaging, and well-structured with bullet points where appropriate.

Traveler Query: "${question}"`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.6-flash',
      contents: prompt,
    });

    res.json({ success: true, answer: response.text });
  } catch (error: any) {
    console.error('Error in Ceylon AI assistant:', error);
    res.status(500).json({
      success: false,
      error: 'Ceylon AI is temporarily unavailable.',
    });
  }
});

async function startServer() {
  // Vite middleware setup
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`CeylonDiscovery server running on http://localhost:${PORT}`);
  });
}

startServer();
