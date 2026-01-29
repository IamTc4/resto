class CartService {
    async getCart(userId) {
        // Mock DB fetch
        return { userId, items: [], total: 0 };
    }

    async addToCart(userId, itemId, qty) {
        return { userId, items: [{ itemId, qty }], total: 100 };
    }
}

module.exports = new CartService();
