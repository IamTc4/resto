// Mock implementation of LLM Service
// In production, this would use OpenAI or Anthropic SDKs

class LLMService {
    constructor() {
        this.apiKey = process.env.OPENAI_API_KEY;
    }

    async generateResponse(userMessage, context) {
        // TODO: Integrate actual OpenAI API call here
        console.log(`[AI] Processing message: ${userMessage}`);

        // Simple mock logic for MVP
        if (userMessage.toLowerCase().includes('hello')) {
            return "Hello! Welcome to our restaurant. How can I help you today?";
        }

        if (userMessage.toLowerCase().includes('menu')) {
            return "Our menu includes Butter Chicken, Paneer Tikka, and more. Would you like to see the full list?";
        }

        return "I'm a simulated AI backend. I received your message: " + userMessage;
    }
}

module.exports = new LLMService();
