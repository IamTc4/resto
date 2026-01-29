// Frontend API Service
// Handles communication with the Backend

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

class ApiService {

    async sendMessage(message, context = {}) {
        try {
            const response = await fetch(`${API_BASE_URL}/chat/send`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    message,
                    context
                    // TODO: Add customerId if logged in
                })
            });

            if (!response.ok) {
                throw new Error(`API Error: ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            console.error('ApiService Error:', error);
            throw error;
        }
    }

    // Placeholder for other methods
    // async getMenu() { ... }
    // async placeOrder(orderData) { ... }
}

export default new ApiService();
