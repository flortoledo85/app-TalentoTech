import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../../context/CartContext";


export function Navbar() {
    const { getCartQuantity } = useCart();
    const totalItems = getCartQuantity();

    return (
        <nav className={styles.nav}>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            {/* <Link to="/nationalproducts">National Products</Link> */}
            {/* <Link to="/upload">Upload Product</Link> */}
            <Link to="/measurements">Measurements</Link>
            <Link to="/cart"><ShoppingCart/> {totalItems > 0 && <span>{totalItems}</span>} </Link>
        </nav>
    );
}
