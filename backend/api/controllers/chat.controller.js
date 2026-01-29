const llmService = require('../../services/ai/llm.service');

exports.handleMessage = async (req, res) => {
    try {
        const { message, customerId, context } = req.body;

        if (!message) {
            return res.status(400).json({ error: 'Message is required' });
        }

        // Logic to classify intent, get recommendations, etc. could go here

        const response = await llmService.generateResponse(message, context);

        res.json({
            reply: response,
            timestamp: new Date()
        });
    } catch (error) {
        console.error('Chat Controller Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
