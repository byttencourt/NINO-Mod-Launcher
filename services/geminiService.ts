import { GoogleGenAI } from "@google/genai";

// Initialize the Gemini API client
// Ideally, in a real production environment, we would proxy this through a backend 
// to avoid exposing the key, but for this demo, we use the env variable directly as instructed.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateResponse = async (userMessage: string): Promise<string> => {
  try {
    const modelId = "gemini-2.5-flash"; // Fast model for chat interactions
    
    // System instruction to give the bot context about the Nino Platform
    const systemInstruction = `
      You are the AI Technical Assistant for the Nino Platform website.
      
      About Nino Platform:
      It is an Enterprise Desktop Platform for Digital Content Distribution (DaaS), License Management, and Integrated Fintech.
      
      Key Features:
      - Client-Side: Built with Electron & React (TypeScript). Uses secure IPC.
      - Cloud: Powered by Supabase (PostgreSQL, Auth) and Deno Edge Functions.
      - Fintech: Integrated Mercado Pago API for instant PIX payments (Real-time polling).
      - Security: Defense in Depth, Runtime Integrity Checks, HWID Binding (Hardware ID), Secure Asset Delivery.
      
      Your goal is to answer visitor questions about the platform's architecture, security, or features concisely and professionally.
      Adopt a helpful, technical, and sales-oriented tone.
    `;

    const response = await ai.models.generateContent({
      model: modelId,
      contents: userMessage,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      }
    });

    return response.text || "I apologize, I couldn't generate a response at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Failed to connect to the AI assistant.");
  }
};