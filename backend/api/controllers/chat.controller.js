const llmService = require('../../services/ai/llm.service');
const logger = require('../../utils/logger');

exports.sendMessage = async (req, res) => {
    try {
        const { message, customerId } = req.body;

        // Use the LLM Service
        const aiResponse = await llmService.generateResponse(message, { customerId });

        // Logic to save conversation to DB would go here

        res.json({ reply: aiResponse.content, sentiment: 'neutral' });
    } catch (error) {
        logger.error(error);
        res.status(500).json({ error: error.message });
    }
};

exports.getHistory = async (req, res) => {
    try {
        const { customerId } = req.params;
        // Mock history
        res.json({ history: [] });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
