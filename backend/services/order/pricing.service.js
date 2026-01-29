class PricingService {
    calculateTotal(items) {
        return items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    }

    applyDiscount(total, code) {
        if (code === 'WELCOME') return total * 0.9;
        return total;
    }
}

module.exports = new PricingService();
