import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../firebase/config';
import styles from "./ProductDetails.module.css";
import { useCart } from "../../context/CartContext";
import { LoadingSpinner } from "../Spinner/Spinner";


const ProductDetail = () => {

    const { addToCart, getUpdatedQuantity } = useCart();

    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const updatedQuantity = getUpdatedQuantity(id);
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
        setCounter(getUpdatedQuantity(id));
    }, [id]);

    useEffect(() => {
        const docRef = doc(db, "products", id);
        getDoc(docRef)
            .then((resp) => {
                if (resp.exists()) {
                    setProduct({ ...resp.data(), id: resp.id });
                } else {
                    setProduct(undefined);
                }
            })
            // fetch('/data/productos.json')
            // .then(answer => answer.json())
            // .then(data => {
            //     const foundedProduct = data.find(p => p.id === parseInt(id));
            //     setProduct(foundedProduct);
            // })
            .catch(error => console.log("Error loading product details: ", error));
    }, [id]);

    if (product === null) {
        return <LoadingSpinner/>        // <h2 className={styles.name}>Loading product details...</h2>;
    }

    if (product === undefined) {
        return <h2 className={styles.name}>Product not founded...</h2>;
    }

    return (
        <div className={styles.container}>
            <img src={product.urlImage || product.image} alt={product.name} className={styles.image}></img>
            <div className={styles.info}>
                <h2 className={styles.name}>{product.name}</h2>
                <h3 className={styles.price}>${product.price}</h3>
                <p className={styles.description}>{product.details}</p>
                <p className={styles.price}>Category: {product.category}</p>
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