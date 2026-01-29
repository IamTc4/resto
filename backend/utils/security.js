const crypto = require('crypto');

exports.hashPassword = (password) => {
    return crypto.createHash('sha256').update(password).digest('hex');
};

exports.sanitizeInput = (input) => {
    return input.replace(/<[^>]*>?/gm, ''); // Simple XSS protection
};
