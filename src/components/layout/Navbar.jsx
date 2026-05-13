import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { ShoppingCart } from "lucide-react";


export function Navbar() {
    return (
        <nav className={styles.nav}>
            <Link to="/">Inicio</Link>
            <Link to="/productos">Productos</Link>
            <Link to="/alta">Alta Producto</Link>
            <Link to="/carrito"><ShoppingCart/></Link>
        </nav>
    );
}
