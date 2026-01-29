const mongoose = require('mongoose');

const MenuItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: String,
    price: { type: Number, required: true },
    category: String,
    isVegetarian: Boolean,
    isSpicy: Boolean,
    image: String
});

module.exports = mongoose.model('MenuItem', MenuItemSchema);
