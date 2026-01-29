class SegmentationService {
    classifyCustomer(customerData) {
        if (customerData.totalOrders > 10) return 'LOYAL';
        if (customerData.totalOrders > 1) return 'REPEAT';
        return 'FIRST_TIME';
    }
}

module.exports = new SegmentationService();
