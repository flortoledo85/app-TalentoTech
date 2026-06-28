import React from "react";
import styles from "./FormProduct.module.css"

export function FormProduct({datosForm, handleChange, handleSend, handleImageChange}) {
    return(
        <form className={styles.formulario} onSubmit={handleSend}>
            <h3>Add New Product</h3>
            <div className={styles.input}>
                <label>Name: </label>
                <input type="text" placeholder="Ej: rayban 1950" name="name" value={datosForm.name} onChange={handleChange}></input>
            </div>
            <div className={styles.input}>
                <label>Details: </label>
                <input type="text" placeholder="Ej: Anteojos de Sol estilo RayBan negros (no original). Polarizado categoría 3. Medidas: ancho total 143 mm. Largo patilla: 148 mm. Alto lente: 48 mm. Ancho lente: 55 mm. DIP: 62 a 86 mm." name="details" value={datosForm.details} onChange={handleChange}></input>
            </div>
            <div className={styles.input}>
                <label>Price: </label>
                <input type="number" placeholder="Ej: 50000" name="price" value={datosForm.price} onChange={handleChange}></input>
            </div>
            <div className={styles.input}>
                <label>Stock: </label>
                <input type="number" placeholder="Ej: 20" name="stock" value={datosForm.stock} onChange={handleChange}></input>
            </div>
            <div className={styles.input}>
                <label>Category: </label>
                <select name="category" value={datosForm.category} onChange={handleChange}>
                    <option value="">Select a category</option>
                    <option value="sol">Sol</option>
                    <option value="receta">Receta</option>
                    <option value="nacional">Nacional</option>
                </select>
            </div>
            <div className={styles.input}>
                <label>Image: </label>
                <input type="file" placeholder="http://" name="file" accept="image/*" onChange={handleImageChange}></input>
            </div>
            <button type="submit">Save</button>
        </form>

    );
}