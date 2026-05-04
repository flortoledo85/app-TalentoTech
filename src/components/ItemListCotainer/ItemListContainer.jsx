import { ItemList } from "../ItemList/ItemList";
import styles from "./ItemListContainer.module.css"

export function ItemListCotainer({ Mensaje }) {
    const productos = [
        {id: '1234', nombre: 'Pink Love', precio: 120000, stock: 15},
        {id: '1244', nombre: 'Ray Ban', precio: 450000, stock: 10},
        {id: '1254', nombre: 'Armonic', precio: 190000, stock: 18},
    ];
    return (
        <div>
            <h2 className={styles.subtitulo}> {Mensaje} </h2>
            <div className={styles.productos}>
                <ItemList productos = {productos}/>
            </div>
        </div>
    );
}