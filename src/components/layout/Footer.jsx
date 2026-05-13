import styles from './Footer.module.css';
import React from 'react';
import { UserCard } from '../cards/UserCard';


function Footer(){
    const team = [
        { name: "Ana García", profile: "Desing and UX", image: "/pictures/ana.jpg" },
        { name: "Matías López", profile: "Frontend Development", image: "/pictures/matias.jpg" },
        { name: "Laura Martínez", profile: "Costumer Service", image: "/pictures/laura.jpg" },
    ];
    return(
        <footer className={styles.footer}>
            <div className= {styles.contact}>
                <h3>Optic Choices</h3>
                <p>La Plata, Buenos Aires</p>
                <p>contacto@opticchoices.com</p>
            </div>
            <div className={styles.team}>
                <h4>Our Team</h4>
                <div className={styles.cards}>
                    {team.map((profesional, index) => (
                        <UserCard
                            key={index}
                            image={profesional.image}
                            name={profesional.name}
                            profile={profesional.profile}
                            />
                        ))}
                </div>
            </div>
                <p className={styles.copy}>&copy; 2026 - Optic Choices</p>
        </footer>
    );
}

export default Footer