import React from 'react';

const MenuItem = ({ item }) => {
    return (
        <div className="menu-item">
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <button>Add</button>
        </div>
    );
};

export default MenuItem;
