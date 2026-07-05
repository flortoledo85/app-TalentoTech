import React from "react";
import { UserCard } from "../cards/UserCard";
import styles from "./Contact.module.css";
import { FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";


const team = [
    { name: "Ana García", profile: "Optician", image: "/pictures/ana.jpg" },
    { name: "Matías López", profile: "Optician-Optometrist", image: "/pictures/matias.jpg" },
    { name: "Laura Martínez", profile: "Costumer Service", image: "/pictures/laura.jpg" },
];


const socials = [
    { icon: <FaInstagram />, label: "Instagram", url: "https://instagram.com" },
    { icon: <FaTwitter />, label: "Twitter", url: "https://twitter.com" },
    { icon: <FaWhatsapp />, label: "WhatsApp", url: "https://wa.me/5491100000000" },
];

export function Contact() {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Contact Us</h2>

            <div className={styles.info}>
                <p>📍 La Plata, Buenos Aires</p>
                <p>✉️ contacto@opticchoices.com</p>
                <p>📞 +54 9 11 0000-0000</p>
            </div>

            <div className={styles.socials}>
                {socials.map((s, i) => (
                    <a key={i} href={s.url} target="_blank" rel="noreferrer" className={styles.socialLink}>
                        {s.icon}
                        <span>{s.label}</span>
                    </a>
                ))}
            </div>
            <h3 className={styles.teamTitle}>Our Team</h3>
            <div className={styles.team}>
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
        </div>
    );
}