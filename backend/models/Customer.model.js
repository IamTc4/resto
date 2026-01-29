const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
    name: { type: String, trim: true },
    email: { type: String, lowercase: true, trim: true },
    phone: { type: String, required: true, unique: true },
    loyaltyTier: {
        type: String,
        enum: ['FIRST_TIME', 'REPEAT', 'LOYAL', 'VIP'],
        default: 'FIRST_TIME'
    },
    totalOrders: { type: Number, default: 0 },
    lastOrderDate: { type: Date },
    preferences: {
        isVegetarian: { type: Boolean, default: false },
        spiceLevel: { type: String, enum: ['LOW', 'MEDIUM', 'HIGH'], default: 'MEDIUM' },
        favoriteItems: [{ type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem' }]
    }
}, { timestamps: true });

module.exports = mongoose.model('Customer', CustomerSchema);
