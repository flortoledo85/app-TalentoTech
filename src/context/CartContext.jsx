import React, { useState, useContext, createContext } from "react";


export const CartContext = createContext();

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart most be use inside a CartProvider');
    }
    return context;
};

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product, quantity) => {
        const itemInCart = cart.find(item => item.id === product.id);
        if (itemInCart) {
            const updatedCart = cart.map(item =>
                item.id === product.id
                ? { ...item, quantity: item.quantity + quantity }
                : item
            );
            setCart(updatedCart);
        } else {
            setCart(prevCart => [...prevCart, { ...product, quantity }]);
        }
    };

    const incrementItem = (productId) => {
        setCart(cart.map(item =>
            item.id === productId && item.quantity < item.stock 
            ? { ...item, quantity: item.quantity +1}
            : item
        ));
    };

    const decrementItem = (productId) => {
        setCart(cart.map(item =>
            item.id === productId && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1}
            : item
        ));
    };

    const getUpdatedQuantity = (productId) => {
        const item = cart.find(item => item.id === productId);
        return item ? item.quantity : 0;
    };

    const removeItem = (productId) => {
        const updatedCart = cart.filter(item => item.id !== productId);
        setCart(updatedCart);
    };

    const isInCart = (productId) => {
        return cart.some(item => item.id === productId);
    };

    const clearCart = () => {
        setCart([]);
    };

    const getCartQuantity = () => {
        return cart.reduce((acc, item) => acc + item.quantity, 0);
    };

    const getCartTotal = () => {
        return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, incrementItem, decrementItem, getUpdatedQuantity, removeItem, isInCart, clearCart, getCartQuantity, getCartTotal }}>
            { children }
        </CartContext.Provider>
    );
};