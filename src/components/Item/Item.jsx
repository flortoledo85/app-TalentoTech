import { useState } from "react";
import styles from "./Item.module.css"


export function Item({ id, imagen, nombre, precio, stock }) {
    const [counter, setCounter] = useState(0);
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
    const CompraClick = () => { alert(`¡Agregaste ${counter} unidades de ${nombre} al carrito!`); };
    return (
        <div className={styles.producto}>
            <img src={imagen} alt={nombre} className={styles.img}></img>
            <h3 className={styles.name}>{nombre}</h3>
            <p className={styles.precio}>Precio: ${precio}</p>
            <p>Stock disponible: {stock}</p>
            <div className={styles.counter}>
                <button onClick={decrement}>-</button>
                    <p>{counter}</p>
                <button onClick={increment}>+</button>
            </div>
            <button onClick={CompraClick}>Agregar al Carrito</button>
        </div>
    );
}