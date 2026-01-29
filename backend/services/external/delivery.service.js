exports.createDelivery = (orderId) => {
    return { trackingId: 'TRK_' + orderId, eta: '30 mins' };
};
