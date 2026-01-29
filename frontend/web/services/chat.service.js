// Frontend Chat Service
import apiService from './api.service';

const chatService = {
    async sendMessage(text) {
        return apiService.sendMessage(text);
    },

    async getHistory() {
        // Implement history fetch
        return [];
    }
};

export default chatService;
