exports.createOrder = (req, res) => {
    res.json({ msg: 'Order Created (Mock)' });
};

exports.getOrder = (req, res) => {
    res.json({ msg: `Order ${req.params.id} Details (Mock)` });
};

exports.updateStatus = (req, res) => {
    res.json({ msg: `Order ${req.params.id} Status Updated (Mock)` });
};
