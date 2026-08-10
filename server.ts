import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route: AI Itinerary Generator
  app.post('/api/generate-itinerary', async (req, res) => {
    try {
      const { days, travelerType, travelers, experiences, accommodation, pace } = req.body;
      const apiKey = process.env.GEMINI_API_KEY;

      if (!apiKey) {
        return res.json({
          itinerary: `Day-by-Day Luxury ${days}-Day Itinerary for ${travelers} ${travelerType} Travelers:\n` +
                     `• Day 1-2: Cultural Triangle - Sigiriya Rock Fortress & Kandy Sacred Temple.\n` +
                     `• Day 3-4: Tea Country - Scenic Train through Ella & Nuwara Eliya Highlands.\n` +
                     `• Day 5: Wildlife Safari - Private Jeep Safari in Yala National Park.\n` +
                     `• Day 6-${days}: Beach Sanctuaries - Galle Fort & Golden Mirissa Coastline.`
        });
      }

      const ai = new GoogleGenAI({ apiKey });
      const prompt = `You are a luxury Sri Lanka travel architect for CeylonDiscovery. Create a concise, elegant day-by-day itinerary outline for a ${days}-day trip for ${travelers} ${travelerType} travelers.\n` +
        `Preferences: Style: ${accommodation}, Pace: ${pace}, Selected Interests: ${experiences?.join(', ') || 'Wildlife, Tea Country, Culture, Beaches'}.\n` +
        `Provide 4-5 bulleted highlights with evocative descriptions suitable for a luxury travel voucher.`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt
      });

      const itineraryText = response.text || 'Custom itinerary successfully generated.';
      return res.json({ itinerary: itineraryText });
    } catch (err: any) {
      console.error('Gemini API Error:', err);
      return res.json({
        itinerary: `Custom ${req.body.days || 7}-Day Sri Lanka Route:\n` +
                   `• Day 1-2: Sigiriya Rock & Dambulla Cave Temples.\n` +
                   `• Day 3-4: Ella Nine Arch Bridge & High Tea in Nuwara Eliya.\n` +
                   `• Day 5: Yala Leopard Safari.\n` +
                   `• Day 6-7: Galle Fort Ramparts & Mirissa Sunset Beach.`
      });
    }
  });

  // Serve with Vite middleware in dev or static files in production
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
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
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
