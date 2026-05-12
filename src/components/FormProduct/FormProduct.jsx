import React from "react";
import styles from "./FormProduct.module.css"

export function FormProduct({datosForm, handleChange, handleSend, handleImageChange}) {
    return(
        <form style={styles.FormProduct} onSubmit={handleSend}>
            <h3>Agregar Nuevo Producto</h3>
            <div>
                <label>Nombre del Producto: </label>
                <input type="text" placeholder="Ej: rayban 1950" name="nombre" value={datosForm.nombre} onChange={handleChange}></input>
            </div>
            <div>
                <label>Precio: </label>
                <input type="number" placeholder="Ej: 50000" name="price" value={datosForm.precio} onChange={handleChange}></input>
            </div>
            <div>
                <label>Stock: </label>
                <input type="number" placeholder="Ej: 20" name="stock" value={datosForm.stock} onChange={handleChange}></input>
            </div>
            <div>
                <label>Image: </label>
                <input type="file" placeholder="http://" name="file" accept="image/*" onChange={handleImageChange}></input>
            </div>
            <button type="submit">Guardar</button>
        </form>

    );
}