import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { ShoppingCart } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

function Header() {
    const { getCartQuantity } = useCart();
    const totalItems = getCartQuantity();
    const { user, logout } = useAuth();

    return (
        <header className={styles.header}>
            <div className={styles.topBar}>
                <h1 className={styles.logo}>Optic Choices</h1>
                <div className={styles.userActions}>
                    {user ? (
                        <>
                            {user.rol === 'admin' && (
                                <Link to="/management" className={styles.managementBtn}>Management</Link>
                            )}
                            <span>Hi, {user.email}</span>
                            <button onClick={logout}>Close session</button>
                        </>
                    ) : (
                        <Link to="/login">Login</Link>
                    )}
                        <Link to="/cart"><ShoppingCart/> {totalItems > 0 && <span>{totalItems}</span>} </Link>
                </div>
            </div>
            <nav className={styles.nav}>
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/measurements">Measurements</Link>
            </nav>
        </header>
    );
}

export default Header