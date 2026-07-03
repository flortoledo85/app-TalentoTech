import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../firebase/config';
import styles from './DetailsNationalProducts.module.css';
import { Helmet } from 'react-helmet';


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
                {prod && (
                    <Helmet>
                        <title>OpticChoices | {prod.name}</title>
                        <meta name="description" content={`Details and price from products ${prod.name}`}></meta>
                    </Helmet>
                )}
                {prod ? ( 
                    <>
                    <img src={prod.image} alt={prod.name} className={styles.image}></img>
                    <div className={styles.info}>
                        <h2 className={styles.name}>{prod.name}</h2>
                        <h3 className={styles.price}>${prod.price}</h3>
                        <p className={styles.description}>{prod.description}</p>
                        <p className={styles.price}>Stock: {prod.stock}</p>
                        {/* <div className={styles.counter}>
                            <button onClick={decrement}>-</button>
                            <p>{counter}</p>
                            <button onClick={increment}>+</button>
                        </div>
                        <button onClick={handleAddToCart} className={styles.addToCart}>Add {counter} to Cart</button>
                    </div> */} </div>
                    </>
                    ): (
                        <p>Loading product...</p>
                    )
                };
            </div>
        );
    }
    
export default DetailsNationalProducts;