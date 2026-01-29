import React from 'react';
import CartItem from './CartItem';

const CartSidebar = ({ items }) => {
    return (
        <div className="cart-sidebar">
            <h2>Your Cart</h2>
            {items.map(item => <CartItem key={item.id} item={item} />)}
            <button>Checkout</button>
        </div>
    );
};

export default CartSidebar;
