exports.sendNotification = (req, res) => {
    res.json({ msg: 'Notification Sent (Mock)' });
};

exports.getNotifications = (req, res) => {
    res.json([{ id: 1, text: 'Your order is ready!' }]);
};
