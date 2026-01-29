class CustomerService {
    async getCustomer(id) {
        // Logic to fetch from DB
        return { id, name: 'John Doe' };
    }
}

module.exports = new CustomerService();
