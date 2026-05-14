import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./ProductDetails.module.css"

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

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
        return <h2>Loading product details...</h2>;
    }

    if (!product.id) {
        return <h2>Product not founded...</h2>;
    }

    return (
        <div className={styles.container}>
            <img src={product.image} alt={product.name} className={styles.image}></img>
            <div className={styles.info}>
                <h2 className={styles.name}>{product.name}</h2>
                <h3 className={styles.price}>${product.price}</h3>
                <p className={styles.description}>{product.description}</p>
            </div>
        </div>
    );
};

export default ProductDetail;