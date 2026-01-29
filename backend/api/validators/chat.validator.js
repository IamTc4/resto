exports.validateMessage = (req, res, next) => {
    if (!req.body.message || req.body.message.trim().length === 0) {
        return res.status(400).json({ error: 'Message cannot be empty' });
    }
    next();
};
