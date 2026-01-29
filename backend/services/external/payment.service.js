exports.initiatePayment = (amount) => {
    return { transactionId: 'TXN_' + Date.now(), status: 'INITIATED' };
};

exports.verifyPayment = (txnId) => {
    return true; // Mock success
};
