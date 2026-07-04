import React, { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { db } from '../../firebase/config';
import { Link } from "react-router-dom";
import { ItemList } from '../ItemList/ItemList';
import styles from "./ProductosNacionales.module.css"
import { Container, Row, Col } from "react-bootstrap";

const ProductosNacionales = ({Message}) => {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const filteredProducts = products.filter(prod => prod.name.toLowerCase().includes(searchTerm.toLowerCase()));

    useEffect(() => {
        const productDB = collection(db, "products")

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
            <Container>
                <Row className="mb-4">
                    <Col>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Search for products" 
                            onChange={(e) => setSearchTerm(e.target.value)}>
                        </input>
                    </Col>
                </Row>
            </Container>
            <h1>National Products</h1>
            <ItemList productos={filteredProducts}/>
        </div>
    );
};


export default ProductosNacionales