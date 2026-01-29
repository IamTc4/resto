import React, { useState, useEffect, useRef } from 'react';
import apiService from '../../services/api.service';
import './ChatWidget.css'; // Assuming styles exist

const ChatWindow = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const toggleChat = () => setIsOpen(!isOpen);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMsg = { sender: 'user', text: input };
        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setIsLoading(true);

        try {
            const response = await apiService.sendMessage(input);
            const botMsg = { sender: 'bot', text: response.reply };
            setMessages(prev => [...prev, botMsg]);
        } catch (error) {
            console.error("Chat Error", error);
            setMessages(prev => [...prev, { sender: 'bot', text: "Sorry, I'm having trouble connecting." }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="chat-widget-container">
            {/* FAB */}
            <button className="chat-fab" onClick={toggleChat}>
                {isOpen ? 'Close' : 'Chat'}
            </button>

            {/* Window */}
            {isOpen && (
                <div className="chat-window">
                    <div className="chat-header">
                        <h3>RestaurantBot AI</h3>
                    </div>

                    <div className="chat-messages">
                        {messages.length === 0 && (
                            <div className="chat-welcome">
                                <p>Hi! I'm here to help you order delicious food. 🍔</p>
                            </div>
                        )}
                        {messages.map((msg, idx) => (
                            <div key={idx} className={`chat-bubble ${msg.sender}`}>
                                {msg.text}
                            </div>
                        ))}
                        {isLoading && <div className="chat-bubble bot">Typing...</div>}
                        <div ref={messagesEndRef} />
                    </div>

                    <div className="chat-input-area">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                            placeholder="Type a message..."
                        />
                        <button onClick={handleSend}>Send</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChatWindow;
