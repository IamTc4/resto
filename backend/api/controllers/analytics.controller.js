exports.getDailyStats = (req, res) => {
    res.json({
        revenue: 15000,
        orders: 45,
        avgOrderValue: 333
    });
};

exports.getPopularItems = (req, res) => {
    res.json([
        { name: 'Butter Chicken', count: 12 },
        { name: 'Paneer Tikka', count: 10 }
    ]);
};
