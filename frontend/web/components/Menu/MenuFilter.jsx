import React from 'react';

const MenuFilter = ({ onFilter }) => {
    return (
        <div className="menu-filter">
            <button onClick={() => onFilter('veg')}>Veg</button>
            <button onClick={() => onFilter('non-veg')}>Non-Veg</button>
        </div>
    );
};

export default MenuFilter;
