const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const post = async (endpoint, data) => {
    try {
        const response = await fetch(`${API_URL}${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        return await response.json();
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
};

export const get = async (endpoint) => {
    try {
        const response = await fetch(`${API_URL}${endpoint}`);
        return await response.json();
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
};
