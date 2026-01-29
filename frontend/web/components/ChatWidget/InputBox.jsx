import React from 'react';

const InputBox = ({ value, onChange, onSend }) => {
    return (
        <div className="chat-input-area">
            <input
                type="text"
                value={value}
                onChange={onChange}
                onKeyPress={(e) => e.key === 'Enter' && onSend()}
                placeholder="Type a message..."
            />
            <button onClick={onSend}>Send</button>
        </div>
    );
};

export default InputBox;
