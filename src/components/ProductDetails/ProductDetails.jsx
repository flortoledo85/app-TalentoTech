import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./ProductDetails.module.css";
import { useCart } from "../../context/CartContext";


const ProductDetail = () => {

    const { addToCart, getUpdatedQuantity } = useCart();

    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const updatedQuantity = getUpdatedQuantity(parseInt(id));
    const [counter, setCounter] = useState(updatedQuantity);

    const increment = () => {
        if (counter < product.stock) {
            setCounter(counter + 1);
        };
    };
    
    const decrement = () => {
        if (counter >= 1) {
            setCounter(counter - 1);
        };
    };

    const handleAddToCart = () => {
    if (counter > 0) {
        addToCart(product, counter - updatedQuantity);
       };
    };

    useEffect(() => {
        fetch('/data/productos.json')
        .then(answer => answer.json())
        .then(data => {
            const foundedProduct = data.find(p => p.id === parseInt(id));
            setProduct(foundedProduct);
        })
        .catch(error => console.log("Error trying to upload the product: ", error));
    }, [id]);

    if (!product) {
        return <h2 className={styles.name}>Loading product details...</h2>;
    }

    if (!product.id) {
        return <h2 className={styles.name}>Product not founded...</h2>;
    }

    return (
        <div className={styles.container}>
            <img src={product.image} alt={product.name} className={styles.image}></img>
            <div className={styles.info}>
                <h2 className={styles.name}>{product.name}</h2>
                <h3 className={styles.price}>${product.price}</h3>
                <p className={styles.description}>{product.description}</p>
                <p className={styles.price}>Stock: {product.stock}</p>
                <div className={styles.counter}>
                    <button onClick={decrement}>-</button>
                    <p>{counter}</p>
                    <button onClick={increment}>+</button>
                </div>
                <button onClick={handleAddToCart} className={styles.addToCart}>Add {counter} to Cart</button>
            </div>
        </div>
    );
};

export default ProductDetail;