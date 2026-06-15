import React, { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { db } from '../../firebase/config';
import { Link } from "react-router-dom";
import styles from "./ProductosNacionales.module.css"

const ProductosNacionales = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const productDB = collection(db, "productos-nacionales")

        getDocs(productDB).then((resp) => {
            setProducts(
                resp.docs.map((doc) => {
                    return{...doc.data(), id: doc.id}
                })
            );
        })
    }, []);

    return (
        <div className={styles.producto}>
            <h1>National Products</h1>
            <div className="list-prodcts">
                {products.map(prod => (
                    <div key={prod.id}>
                        <Link to={'/producto/${prod.id}'}>
                            <img src={prod.image} alt={prod.name} className={styles.img}/>
                            <h3 className={styles.name}>{prod.name}</h3>
                        </Link>
                        <p>Description: {prod.description}</p>
                        <p className={styles.price}>Price: ${prod.price}</p>
                        <p>Stock: {prod.stock}</p>
                        <hr />
                    </div>
                ))}
            </div>
        </div>
    );
};


export default ProductosNacionales