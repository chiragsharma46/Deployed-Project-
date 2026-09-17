import express from "express";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
const PORT = 3000;

if (!process.env.GEMINI_API_KEY) {
  console.error("GEMINI_API_KEY is missing in .env");
  process.exit(1);
}

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.static(__dirname));

const portfolioContext = `
You are Chirag's Assistant, the AI assistant for Chirag Sharma's portfolio website.

Answer questions about Chirag accurately and professionally.

Chirag's information:
- Name: Chirag Sharma
- Degree: B.Tech Computer Science & Engineering
- University: Galgotias University
- Expected Graduation: 2027
- CGPA: 8.65 / 10
- Location: Bulandshahr, Uttar Pradesh

Skills:
- Java
- Python
- JavaScript
- React
- SQL
- Git
- GitHub
- Artificial Intelligence
- Machine Learning

Career focus:
- Software Development
- Artificial Intelligence
- Machine Learning

Contact:
- Email: chiragsharma6678@gmail.com
- LinkedIn: https://www.linkedin.com/in/chirag-sharma-3108a2297
- GitHub: https://github.com/chiragsharma46
- Instagram: https://www.instagram.com/cs_tech_creator__
- YouTube: https://www.youtube.com/@cs_tech_creator1010

Rules:
1. Be honest.
2. Never invent projects, experience, companies, achievements, certifications, salaries, or expertise.
3. Do not claim Chirag is an AI/ML expert.
4. Keep answers concise and professional.
5. Answer portfolio-related questions from the information above.
`;

async function generateGeminiResponse(contents) {
  const maxAttempts = 3;

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      return await ai.models.generateContent({
        model: "gemini-3.1-flash-lite",
        contents,
        config: {
          thinkingConfig: {
            thinkingLevel: "minimal",
          },
        },
      });
    } catch (error) {
      if (error?.status !== 503 || attempt === maxAttempts) {
        throw error;
      }

      await new Promise((resolve) => setTimeout(resolve, 1000 * attempt));
    }
  }
}

app.post("/api/chat", async (req, res) => {
  console.log("/api/chat request received");
  try {
    const { messages } = req.body;

    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({
        error: "No messages were provided.",
      });
    }

    const conversation = messages
      .filter(
        (message) =>
          message &&
          (message.role === "user" || message.role === "assistant") &&
          typeof message.content === "string",
      )
      .slice(-10);

    const prompt = conversation
      .map((message) => {
        const role = message.role === "user" ? "Visitor" : "Chirag's Assistant";

        return `${role}: ${message.content}`;
      })
      .join("\n\n");
    console.log("Sending request to Gemini...");
    const result = await generateGeminiResponse(
      `${portfolioContext}

Conversation:
${prompt}

Chirag's Assistant:`,
    );

    console.log("Gemini response received");

    const reply = result.text || "I couldn't generate a response.";

    res.json({
      reply,
    });
  } catch (error) {
    console.error("========== GEMINI ERROR ==========");
    console.error(error);
    console.error("==================================");

    res.status(500).json({
      error: error?.message || "Gemini API request failed.",
    });
  }
});

app.listen(PORT, () => {
  console.log(` Portfolio running at http://localhost:${PORT}`);
});
