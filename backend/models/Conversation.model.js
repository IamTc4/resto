const mongoose = require('mongoose');

const ConversationSchema = new mongoose.Schema({
    customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
    platform: { type: String, enum: ['WEB', 'APP', 'WHATSAPP'], default: 'WEB' },
    messages: [{
        sender: { type: String, enum: ['USER', 'BOT', 'AGENT'], required: true },
        text: { type: String, required: true },
        timestamp: { type: Date, default: Date.now },
        metadata: { type: Object } // Store intent, sentiment, etc.
    }],
    status: { type: String, enum: ['ACTIVE', 'CLOSED', 'HANDOFF_REQUIRED'], default: 'ACTIVE' }
}, { timestamps: true });

module.exports = mongoose.model('Conversation', ConversationSchema);
