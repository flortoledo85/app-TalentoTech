import { useState, useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";
import styles from "./ItemListContainer.module.css"

export function ItemListCotainer({ Mensaje }) {
    const [productos, setProducto] = useState([]);
    const [error, setError] = useState(null);
    const [cargado, setCargado] = useState(true);

    useEffect(() => {
        fetch('/data/productos.json')
        .then(res => {
            if (!res.ok) {
                throw new Error('No se pudo cargar la información de los productos')
            }
            return res.json();
        })
        .then(data => {
            setProducto(data);
        })
        .catch(error => {
            setError(error.message);
        })
        .finally(() => {
            setCargado(false);
        })
    }, []);
    // const productos = [
    //     {id: '1234', nombre: 'Pink Love', precio: 120000, stock: 15, imagen: '/pictures/pink_love.jpg'},
    //     {id: '1244', nombre: 'Ray Ban', precio: 450000, stock: 10, imagen: '/pictures/rayban_p.jpg'},
    //     {id: '1254', nombre: 'Armonic', precio: 190000, stock: 18, imagen: '/pictures/cristal.jpg'},
    // ];
    return (
        <div>
            <h2 className={styles.subtitulo}> {Mensaje} </h2>
            <div className={styles.container}>
                <ItemList productos = {productos}/>
            </div>
        </div>
    );
}