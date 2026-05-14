import React from "react";
import styles from "./Measurements.module.css";

export function Measurements() {
    return (
        <div className={styles.container}>
            <h2>Measurements</h2>
            <img src={"/pictures/medidas.jpg"} alt="Diagrama medidas anteojo"></img>
        </div>
    );
}