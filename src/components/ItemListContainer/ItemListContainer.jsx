import { useState, useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../firebase/config';
import styles from "./ItemListContainer.module.css";
import { useSearch } from "../../context/SearchContext";
import { LoadingSpinner } from "../Spinner/Spinner";
import Pagination from "../Pagination/Pagination";


export function ItemListContainer({ Mensaje }) {
    const [productos, setProducto] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const { search } = useSearch();
    const [currentPages, setCurrentPage] = useState(1);
    const productsForPage = 5

    const filteredProducts = productos.filter(prod => 
        prod.name.toLowerCase().includes(search.toLowerCase())
    );

    const productsPagination = filteredProducts.slice(
        (currentPages - 1) * productsForPage,
        currentPages * productsForPage
    );

    const totalPages = Math.ceil(filteredProducts.length / productsForPage);

    const loadingPage = (page) => setCurrentPage(page);

    useEffect(() => {
        const productsDB = collection(db, "products");
        getDocs(productsDB)
            .then((resp) => {
                setProducto(
                    resp.docs.map((doc) => ({
                        ...doc.data(),
                        id: doc.id,
                        image: doc.data().urlImage || doc.data().image
                    }))
                );
            })
            // fetch('/data/productos.json')
            // .then(res => {
            //     if (!res.ok) {
            //         throw new Error('No se pudo cargar la información de los productos')
            //     }
            //     return res.json();
            // })
            // .then(data => {
            //     setProducto(data);
            // })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }, []);
    if (loading) {
        return <LoadingSpinner />
        // return <p className={styles.subtitulo}>Loading products, please wait...</p>;
    }
    if (error) {
        return <p className={styles.subitulo}>Error: {error}</p>;
    }
    return (
        <div>
            <h2 className={styles.subtitulo}> {Mensaje} </h2>
            <div className={styles.container}>
                <ItemList productos={productsPagination} />
                <Pagination
                    currentPages={currentPages}
                    totalOfPages={totalPages}
                    loadingPage={loadingPage}
                    loading={loading}
                />
            </div>
        </div>
    );
}