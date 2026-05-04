import { useState } from "react";


export function Item({id, nombre, precio, stock }){
    const [counter, setCounter] = useState(0);
    const increment = () => {
        if (counter < stock) {
            setCounter(counter+1);
        };
    };
    const decrement = () => {
        if (counter >= 1){
            setCounter(counter -1);
        };
    };
    const CompraClick = () => {alert(`¡Agregaste ${counter} unidades de ${nombre} al carrito!`);};
    return (
        <div style={{border: '1px solid #ccc', padding: '15px', borderRadius: '8px'}}>
            <h3>{nombre}</h3>
            <p>Precio: ${precio}</p>
            <p>Stock disponible: {stock}</p>
            <div style={{display:"flex", alignItems:"center", justifyContent:"center", margin:"10px 0"}}>
                <button onClick={decrement}>-</button>
                <p style={{margin:"0 10px"}}>{counter}</p>
                <button onClick={increment}>+</button>
            </div>
            <button onClick={CompraClick}>Agregar al Carrito</button>
        </div>
    );
}