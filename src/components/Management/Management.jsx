import React, { useState, useEffect } from "react";
import { db } from '../../firebase/config';
import { FormContainer } from '../FormProduct/FormContainer';
import { collection, getDocs, deleteDoc, doc, updateDoc, addDoc } from "firebase/firestore";


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
        <div>
            <h2>Products Management</h2>
            <hr/>
            <FormContainer datosForm={initForm}></FormContainer>
            <hr/>
            <h3>Porducts List</h3>
            <ul>
                {products.map((prod) => (
                    <li key={prod.id}>
                        {prod.name} - ${prod.price}
                        <button onClick={() => handleEditClick(prod)}>Edit</button>
                        <button onClick={() => handleDelete(prod.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Managememt;