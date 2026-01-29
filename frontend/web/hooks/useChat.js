import { useState, useCallback } from 'react';
import apiService from '../services/api.service';

const useChat = () => {
    const [messages, setMessages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendMessage = useCallback(async (text) => {
        setIsLoading(true);
        setError(null);

        // Add user message immediately
        const userMsg = { sender: 'user', text, timestamp: new Date() };
        setMessages(prev => [...prev, userMsg]);

        try {
            const response = await apiService.sendMessage(text);
            const botMsg = { sender: 'bot', text: response.reply, timestamp: new Date() };
            setMessages(prev => [...prev, botMsg]);
        } catch (err) {
            setError(err.message);
            // Optionally add an error message to chat
        } finally {
            setIsLoading(false);
        }
    }, []);

    return { messages, isLoading, error, sendMessage };
};

export default useChat;
