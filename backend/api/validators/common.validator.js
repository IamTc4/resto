exports.validateEmail = (email) => {
    return String(email).toLowerCase().match(/^\S+@\S+\.\S+$/);
};

exports.validatePhone = (phone) => {
    return String(phone).match(/^\d{10}$/);
};
