import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { ShoppingCart } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

function Header(){
    const { getCartQuantity } = useCart();
    const totalItems = getCartQuantity();
    const { user, logout } = useAuth();
    
    return(
        <header className={styles.header}><h1>Optic Choices</h1>
        <nav>
            <ul>
                {user ? (
                    <>
                        {user.rol === 'admin' && (
                            <li><Link to="/management">Management</Link></li>)}
                            <span>Hi, {user.email}</span>
                            <button onClick={logout}>Close session</button>
                    </>
                ) : (
                    <li><Link to="/login">Login</Link></li>)}
                <li>
                    <Link to="/cart"><ShoppingCart/> {totalItems > 0 && <span>{totalItems}</span>} </Link>
                </li>
            </ul>
        </nav>
        </header>
    );
}

export default Header