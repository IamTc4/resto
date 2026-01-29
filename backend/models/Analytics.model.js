const mongoose = require('mongoose');

const AnalyticsSchema = new mongoose.Schema({
    eventType: String, // 'PAGE_VIEW', 'ORDER_PLACED'
    metadata: Object,
    timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Analytics', AnalyticsSchema);
