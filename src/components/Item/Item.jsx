import React, { useState, useEffect } from "react";
import styles from "./Item.module.css";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";


export function Item({ id, image, name, price, stock }) {

    const product = { id, image, name, price, stock };

    const { addToCart, getUpdatedQuantity } = useCart();

    const updatedQuantity = getUpdatedQuantity(product.id);

    const [counter, setCounter] = useState(updatedQuantity);

    // const [quantity, setQuantity] = useState(0);

    const handleAddToCart = () => {
        if (counter > 0) {
            addToCart(product, counter - updatedQuantity);
        };
    };

    const [favourite, setFavourite] = useState(false);
    
    const toggleFavourite = () => {setFavourite(!favourite)};
    
    const increment = () => {
        if (counter < stock) {
            setCounter(counter + 1);
        };
    };
    
    const decrement = () => {
        if (counter >= 1) {
            setCounter(counter - 1);
        };
    };
    // const CompraClick = () => { };
    return (
        <div className={styles.producto}>
            <Link to={`/products/${id}`}>
                <img src={image} alt={name} className={styles.img}></img>
                <h3 className={styles.name}>{name}</h3>
                <p className={styles.price}>Price: ${price}</p>
            </Link>
            <span onClick={toggleFavourite} className={styles.star} style={{'--color-star': favourite ? '#FFD700' :' #ccc'}}>{favourite ? '★' : '☆'}</span>
            {/* El codigo abajo es como utilizar las propiedades de svg para lograr el mismo efecto sin css comentar
            linea 30 y descomentar 33 para ver efecto*/}
            {/* <span onClick={toggleFavourite}>{favourite ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="gold" stroke="gold" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star-icon lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star-icon lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>} </span> */}
            <p className={styles.stock}>Stock: {stock}</p>
            <div className={styles.counter}>
                <button onClick={decrement}>-</button>
                <p>{counter}</p>
                <button onClick={increment}>+</button>
            </div>
            <button onClick={handleAddToCart} className={styles.addToCart}>Add {counter} to Cart</button>
        </div>
    );
}


// {favourite ? '': ''}

{/*  */ }