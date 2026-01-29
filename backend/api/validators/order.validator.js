exports.validateOrder = (req, res, next) => {
    if (!req.body.items || req.body.items.length === 0) {
        return res.status(400).json({ error: 'Order must contain items' });
    }
    next();
};
