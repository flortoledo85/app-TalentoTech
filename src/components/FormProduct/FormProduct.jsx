import React from "react";
import styles from "./FormProduct.module.css"



export function FormProduct() {
    return(
        <form style={styles.FormProduct}>
            <h3>Agregar Nuevo Producto</h3>
            <div>
                <label>Nombre del Producto: </label>
                <input type="text" placeholder="Ej: rayban 1950"></input>
            </div>
            <div>
                <label>Precio: </label>
                <input type="number" placeholder="Ej: 50000"></input>
            </div>
            <div>
                <label>Stock: </label>
                <input type="number" placeholder="Ej: 20"></input>
            </div>
            <div>
                <label>Image: </label>
                <input type="file" placeholder="http://"></input>
            </div>
            <button type="submit">Guardar Producto</button>
        </form>

    );
}