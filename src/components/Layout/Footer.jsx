import styles from './Footer.module.css';
import React from 'react';

function Footer(){
    return(
        <footer className={styles.footer}>
            <div className= {styles.contact}>
                <h3>Optic Choices</h3>
                <p>La Plata, Buenos Aires</p>
                <p>contacto@opticchoices.com</p>
            </div>
            <p className={styles.copy}>&copy; 2026 - Optic Choices</p>
        </footer>
    );
}

export default Footer