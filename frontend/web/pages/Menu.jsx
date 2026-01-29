import React, { useState } from 'react';
import MenuGrid from '../components/Menu/MenuGrid';

const Menu = () => {
  const [cart, setCart] = useState([]);
  // Mock data
  const items = [
    { id: 1, name: 'Butter Chicken', description: 'Creamy tomato curry', price: 350, image: 'https://placehold.co/300x200' },
    { id: 2, name: 'Paneer Tikka', description: 'Spicy grilled cottage cheese', price: 280, image: 'https://placehold.co/300x200' }
  ];

  const addToCart = (item) => {
    setCart([...cart, item]);
    alert(`${item.name} added to cart!`);
  };

  return (
    <div className="container">
      <h2>Our Menu</h2>
      <MenuGrid items={items} addToCart={addToCart} />
    </div>
  );
};

export default Menu;
