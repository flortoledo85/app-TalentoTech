import './Footer.css';
import React from 'react';
import { UserCard } from '../cards/UserCard';


function Footer(){
    const team = [
        { name: "Ana García", profile: "Desing and UX", image: "/pictures/ana.jpg" },
        { name: "Matías López", profile: "Frontend Development", image: "/pictures/matias.jpg" },
        { name: "Laura Martínez", profile: "Costumer Service", image: "/pictures/laura.jpg" },
    ];
    return(
        <footer className="footer">
                <p>&copy; 2026 - Optic Choices</p>
        </footer>
    );
}

export default Footer