import React from "react";
import { useCart } from "../context/CartContext";
import styles from "./Cart.module.css";
import { Link } from "react-router-dom";
import { Trash2 } from "lucide-react";


const Cart = () => {

    const { cart, removeItem, isInCart, clearCart, getCartTotal } = useCart();

    if (cart.length === 0) {
        return (
            <div className={styles.emptyCart}>
                <h1>Cart is empty...</h1>
                <p>Add products to the cart</p>
                <Link to="/products" className={styles.backbtn}>See Products</Link>
            </div>
        );
    }

    return (
        <div className={styles.cartContainer}>
            <h1 className={styles.title}>Cart</h1>
            {cart.map(item => (
                <div key={item.id} className={styles.itemCard}>
                    <img src={item.image} alt={item.name} className={styles.itemImage} />
                    <div className={styles.itemInfo}>
                        <h4>{item.name}</h4>
                        <p>Quantity: {item.quantity}</p>
                        <p>Unit Price: ${item.price}</p>
                    </div>
                    <p className={styles.subtotal}>Subtotal: ${item.price * item.quantity}</p>
                    <Link to="/cart" onClick={()=>removeItem(item.id)}><Trash2 size={24} /></Link>
                </div>
            ))}
            <hr className={styles.divider} />
            <div className={styles.footer}>
                <h3 className={styles.total}>Total: ${getCartTotal()}</h3>
                <Link to="/" onClick={()=>alert("Thanks for buying with us...")} className={styles.buynowbtn}>Buy now</Link>
                <button onClick={clearCart} className={styles.clearButton}>Empty Cart</button>
            </div>
        </div>
    );
};

export default Cart;