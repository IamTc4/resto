class OrderService {
    async createOrder(data) {
        // Logic to save order
        return { id: 'ORD-123', status: 'PENDING' };
    }
}

module.exports = new OrderService();
