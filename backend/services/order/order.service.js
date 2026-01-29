const Order = require('../../models/Order.model');

exports.placeOrder = async (orderData) => {
    const order = new Order(orderData);
    return await order.save();
};
