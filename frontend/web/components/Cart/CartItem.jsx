import React from 'react';

const CartItem = ({ item }) => {
    return (
        <div className="cart-item">
            <span>{item.name}</span>
            <span>x{item.qty}</span>
        </div>
    );
};

export default CartItem;
