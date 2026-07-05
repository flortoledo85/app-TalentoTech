import React, { useState } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { ShoppingCart, User, LogIn } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { useSearch } from "../../context/SearchContext";
import { useNavigate } from "react-router-dom";

function Header() {
    const { getCartQuantity } = useCart();
    const totalItems = getCartQuantity();
    const { user, logout } = useAuth();
    const { search, setSearch } = useSearch();
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleSearch = (e) => {
        setSearch(e.target.value);
        navigate('/products');
    }

    return (
        <header className={styles.header}>
            <div className={styles.topBar}>
                <h1 className={styles.logo}>Optic Choices</h1>
                <div className={styles.userActions}>
                    <Link to={user ? "/" : "/login"} className={styles.userIcon}>
                        {user ? <User /> : <LogIn/>}
                    </Link>
                    <Link to="/cart" aria-label="Shopping cart"><ShoppingCart /> {totalItems > 0 && <span>{totalItems}</span>} </Link>
                    <button className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
                        onClick={() => setMenuOpen(!menuOpen)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
            <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
                <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
                <Link to="/products" onClick={() => setMenuOpen(false)}>Products</Link>
                <Link to="/measurements" onClick={() => setMenuOpen(false)}>Measurements</Link>
                <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
                {user && (
                    <>
                        {user.rol === 'admin' && (
                            <Link to="/management" onClick={() => setMenuOpen(false)}>Management</Link>
                        )}
                    </>
                )}
                <input
                    type="text"
                    className={styles.searchInput}
                    placeholder="Search products..."
                    onChange={handleSearch}>
                </input>
                {user && (
                    <>
                        <span>Hi, {user.email}</span> 
                        <button className={styles.closeBtn} onClick={logout}>Close session</button>
                    </>
                )}
            </nav>
        </header>
    );
}

export default Header