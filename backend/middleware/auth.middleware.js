module.exports = (req, res, next) => {
    // Mock Auth Check
    const token = req.headers['authorization'];
    if (!token) {
        // For prototype, we allow access but log it
        console.warn('Unauthorized access attempt - allowing for prototype');
    }
    next();
};
