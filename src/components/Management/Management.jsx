import React, { useState, useEffect } from "react";
import { db } from '../../firebase/config';
import { FormContainer } from '../FormProduct/FormContainer';
import { collection, getDocs, deleteDoc, doc     } from "firebase/firestore";
import styles from "./Management.module.css";


const Managememt = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const productsRef = collection( db, "productos-nacionales");
            const resp = await getDocs(productsRef);

            setProducts(
                resp.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            );
        };

        fetchProducts();
    }, []);

    const [productToEdit, setProductToEdit] = useState(null);

    const handleEditClick = (product) => {
        setProductToEdit(product);
    };

    const handleDelete = async (id) => {
        const confirm = window.confirm("Are you sure you want to delete this item?");
        if (confirm) {
            const docRef = doc(db, "productos-nacionales", id);
            await deleteDoc(docRef);
            setProducts(products.filter(prod => prod.id !== id));
            alert("Product has been deleted");
        }
    };

    return (
        <div className={styles.container}>
            <h2>Products Management</h2>
            <hr className={styles.divider}/>
            <div className={styles.content}>
                <div className={styles.formSection}>
                    <FormContainer 
                        productToEdit={productToEdit}
                        setProductToEdit={setProductToEdit}
                    />
                </div>
                <div className={styles.listSection}>
                    <h3>Porducts List</h3>
                    <ul className={styles.list}>
                        {products.length === 0 && (
                            <p className={styles.empty}>No products found</p>
                        )}
                        {products.map((prod) => (
                            <li key={prod.id} className={styles.listItem}>
                                <img src={prod.urlImage} alt={prod.name} className={styles.cardImage}></img>
                                <div className={styles.productInfo}>
                                    <span className={styles.productInfo}>
                                        {prod.name} - <span>${prod.price}</span>
                                    </span>
                                </div>
                                <div className={styles.actions}>
                                    <button className={styles.btnEdit} onClick={() => handleEditClick(prod)}>Edit</button>
                                    <button className={styles.btnDelete} onClick={() => handleDelete(prod.id)}>Delete</button>
                                </div>    
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Managememt;