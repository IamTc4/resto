require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const chatRoutes = require('./api/routes/chat.routes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/chat', chatRoutes);

// Health Check
app.get('/', (req, res) => {
    res.send('RestaurantBot AI Backend is running');
});

// Database Connection (Mocked for now if no URI)
if (process.env.MONGO_URI) {
    mongoose.connect(process.env.MONGO_URI)
        .then(() => console.log('MongoDB Connected'))
        .catch(err => console.error(err));
} else {
    console.log('MONGO_URI not found, running in offline mode');
}

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
