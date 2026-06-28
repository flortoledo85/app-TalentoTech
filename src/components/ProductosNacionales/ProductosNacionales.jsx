import React, { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { db } from '../../firebase/config';
import { Link } from "react-router-dom";
import { ItemList } from '../ItemList/ItemList';
import styles from "./ProductosNacionales.module.css"

const ProductosNacionales = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const productDB = collection(db, "productos-nacionales")

        getDocs(productDB).then((resp) => {
            setProducts(
                resp.docs.map((doc) => {
                    return{...doc.data(), id: doc.id, 
                        image: doc.data().urlImage || doc.data().image }
                })
            );
        })
    }, []);

    return (
        <div>
            <h1>National Products</h1>
            <ItemList productos={products}>
            {/* <div className={styles.list}>
                {products.map(prod => (
                    <div key={prod.id} className={styles.card}>
                        <Link to={`/producto/${prod.id}`}>
                            <img src={prod.urlImage} alt={prod.name} className={styles.img}/>
                            <h3 className={styles.name}>{prod.name}</h3>
                        </Link>
                        <p>Description: {prod.details}</p>
                        <p className={styles.price}>Price: ${prod.price}</p>
                        <p>Stock: {prod.stock}</p>
                        <hr />
                    </div> */}
                {/* ))} */}
            </ItemList>
        </div>
    );
};


export default ProductosNacionales