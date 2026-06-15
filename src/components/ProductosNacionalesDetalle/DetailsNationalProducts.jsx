import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../firebase/config';
import styles from './DetailsNationalProducts.module.css';


const DetailsNationalProducts = () => {

    const [prod, setItem] = useState(null);
    const { id } = useParams();
    useEffect(() => {
        if (id) {
            const docRef = doc(db, "productos-nacionales", id);
            
            getDoc(docRef)
                .then((resp) => {
                if (resp.exists()) 
                    { setItem({ ...resp.data(), id: resp.id });
                } else 
                    {
                        console.log("No se encontró el producto");
                }   
            })
            .catch(error => console.log(error));
        }
    }, [id]);
    
    return (
            <div className={styles.container}>
                {prod ? ( 
                    <>
                    <img src={product.image} alt={product.name} className={styles.image}></img>
                    <div className={styles.info}>
                        <h2 className={styles.name}>{product.name}</h2>
                        <h3 className={styles.price}>${product.price}</h3>
                        <p className={styles.description}>{product.description}</p>
                        <p className={styles.price}>Stock: {product.stock}</p>
                        {/* <div className={styles.counter}>
                            <button onClick={decrement}>-</button>
                            <p>{counter}</p>
                            <button onClick={increment}>+</button>
                        </div>
                        <button onClick={handleAddToCart} className={styles.addToCart}>Add {counter} to Cart</button>
                    </div> */} </div>
                    </>
                    ): (
                        <p>Cargando producto...</p>
                    )
                };
            </div>
        );
    };
    
export default DetailsNationalProducts;