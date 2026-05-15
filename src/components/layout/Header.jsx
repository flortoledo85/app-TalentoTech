import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { ShoppingCart } from "lucide-react";

function Header(){
    const { getCartQuantity } = useCart();
    const totalItems = getCartQuantity();
    
    return(
        <header className={styles.header}><h1>Optic Choices</h1>
        <nav>
            <ul>
                <li>
                    <Link to="/cart"><ShoppingCart/> {totalItems > 0 && <span>{totalItems}</span>} </Link>
                </li>
            </ul>
        </nav>
        </header>
    );
}

export default Header