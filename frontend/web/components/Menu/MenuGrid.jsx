import React from 'react';
import MenuItem from './MenuItem';

const MenuGrid = ({ items }) => {
    return (
        <div className="menu-grid">
            {items.map(item => <MenuItem key={item.id} item={item} />)}
        </div>
    );
};

export default MenuGrid;
