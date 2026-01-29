exports.getCustomer = (req, res) => {
    res.json({ msg: `Customer ${req.params.id} Profile (Mock)` });
};

exports.updateCustomer = (req, res) => {
    res.json({ msg: `Customer ${req.params.id} Updated (Mock)` });
};
