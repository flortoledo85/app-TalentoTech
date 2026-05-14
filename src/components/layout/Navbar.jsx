import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { ShoppingCart } from "lucide-react";


export function Navbar() {
    return (
        <nav className={styles.nav}>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/upload">Upload Product</Link>
            <Link to="/measurements">Measurements</Link>
            <Link to="/carrito"><ShoppingCart/></Link>
        </nav>
    );
}
