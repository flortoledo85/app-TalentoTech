import React from "react";
import styles from "./FormProduct.module.css"

export function FormProduct({datosForm, handleChange, handleSend, handleImageChange}) {
    return(
        <form className={styles.formulario} onSubmit={handleSend}>
            <h3>Add New Product</h3>
            <div className={styles.input}>
                <label>Name: </label>
                <input type="text" placeholder="Ej: rayban 1950" name="nombre" value={datosForm.nombre} onChange={handleChange}></input>
            </div>
            <div className={styles.input}>
                <label>Price: </label>
                <input type="number" placeholder="Ej: 50000" name="price" value={datosForm.precio} onChange={handleChange}></input>
            </div>
            <div className={styles.input}>
                <label>Stock: </label>
                <input type="number" placeholder="Ej: 20" name="stock" value={datosForm.stock} onChange={handleChange}></input>
            </div>
            <div className={styles.input}>
                <label>Image: </label>
                <input type="file" placeholder="http://" name="file" accept="image/*" onChange={handleImageChange}></input>
            </div>
            <button type="submit">Save</button>
        </form>

    );
}