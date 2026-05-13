import React from "react";
import styles from "./UserCard.module.css";

export function UserCard({ name, profile, image }){
    return(
        <div className={styles.card}>
            <img scr={image} alt={name} className={styles.image}/>
            <h3>{name}</h3>
            <p className={styles.description}>{profile}</p>
        </div>
    );
}