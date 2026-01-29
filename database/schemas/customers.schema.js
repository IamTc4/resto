const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
    name: { type: String, trim: true },
    phone: { type: String, required: true, unique: true },
    email: { type: String, trim: true },
    loyaltyTier: { type: String, enum: ['FIRST_TIME', 'REPEAT', 'LOYAL', 'VIP'], default: 'FIRST_TIME' },
    totalOrders: { type: Number, default: 0 },
    preferences: {
        isVegetarian: Boolean,
        spicyPreference: String
    }
}, { timestamps: true });

module.exports = mongoose.model('Customer', CustomerSchema);
