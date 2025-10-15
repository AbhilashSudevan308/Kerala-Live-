
import { GoogleGenAI } from "@google/genai";
import type { GroundingSource } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

const PROMPT = `
Generate a live update summary for the state of Kerala, India, formatted in Markdown.
The output MUST follow this structure exactly:

## Top Stories
- **[Headline 1]:** [Brief summary of the story.]
- **[Headline 2]:** [Brief summary of the story.]
- **[Headline 3]:** [Brief summary of the story.]

## Weather
- **[Thiruvananthapuram]:** [Temperature in °C], [Weather condition, e.g., Partly Cloudy]
- **[Kochi]:** [Temperature in °C], [Weather condition, e.g., Light Rain]
- **[Kozhikode]:** [Temperature in °C], [Weather condition, e.g., Sunny]

## General Update
[A concise paragraph about current major events, traffic alerts, or other notable happenings in Kerala.]
`;


export const fetchKeralaUpdates = async (): Promise<{ text: string; groundingChunks: GroundingSource[] | undefined }> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: PROMPT,
      config: {
        tools: [{ googleSearch: {} }],
      },
    });

    const text = response.text;
    const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks as GroundingSource[] | undefined;
    
    return { text, groundingChunks };
  } catch (error) {
    console.error("Error fetching data from Gemini API:", error);
    throw new Error("Failed to retrieve live updates.");
  }
};
