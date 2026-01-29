import { useState } from 'react';

const useCart = () => {
    const [cart, setCart] = useState([]);
    const addToCart = (item) => setCart([...cart, item]);
    return { cart, addToCart };
};

export default useCart;
