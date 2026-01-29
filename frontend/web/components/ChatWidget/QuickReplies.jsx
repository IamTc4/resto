import React from 'react';

const QuickReplies = ({ onSelect }) => {
    const options = ["View Menu", "Track Order", "Talk to Human"];
    return (
        <div className="quick-replies">
            {options.map(opt => (
                <button key={opt} onClick={() => onSelect(opt)}>{opt}</button>
            ))}
        </div>
    );
};

export default QuickReplies;
