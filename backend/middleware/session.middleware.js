module.exports = (req, res, next) => {
    // Mock Session Logic
    if (!req.headers['x-session-id']) {
        req.headers['x-session-id'] = 'sess_' + Date.now();
    }
    next();
};
