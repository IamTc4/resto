const mongoose = require('mongoose');

const AutomationSchema = new mongoose.Schema({
    type: String, // 'ABANDONED_CART_REMINDER'
    target: String,
    status: String,
    timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Automation', AutomationSchema);
