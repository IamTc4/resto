import React from 'react';

const MenuSearch = ({ onSearch }) => {
    return <input type="text" placeholder="Search menu..." onChange={e => onSearch(e.target.value)} />;
};

export default MenuSearch;
