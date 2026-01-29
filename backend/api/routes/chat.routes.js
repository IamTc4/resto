const express = require('express');
const router = express.Router();
const llmService = require('../../services/ai/llm.service');

// POST /api/chat/send
router.post('/send', async (req, res) => {
    try {
        const { message, customerId, context } = req.body;

        if (!message) {
            return res.status(400).json({ error: 'Message is required' });
        }

        // Call AI Service
        const response = await llmService.generateResponse(message, context);

        res.json({
            reply: response,
            timestamp: new Date()
        });
    } catch (error) {
        console.error('Chat Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
