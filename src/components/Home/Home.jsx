import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

const images = [
    { url: "https://i.ibb.co/prhFZhyB/Init-1.jpg", title: "Comfort & Style", subtitle: "For your best vision" },
    { url: "https://i.ibb.co/zWnv5FTD/Init-2.jpg", title: "Optic Choices", subtitle: "Find your perfect frame" },
    { url: "https://i.ibb.co/kV1Myjgr/init-3.jpg", title: "Premium Eyewear", subtitle: "Quality you can see" },
    { url: "https://i.ibb.co/TMxgWGbH/init-4.jpg", title: "See The World", subtitle: "In a different light" },
    { url: "https://i.ibb.co/1YwHF6pt/init-5.jpg", title: "Your Style", subtitle: "Your vision" },
    { url: "https://i.ibb.co/s9dMShth/Init-6.jpg", title: "Elegance", subtitle: "Meets clarity" },
];

export function Home() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent(prev => (prev + 1) % images.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    const goTo = (index) => setCurrent(index);
    const prev = () => setCurrent(prev => (prev - 1 + images.length) % images.length);
    const next = () => setCurrent(prev => (prev + 1) % images.lenght);

    return (
        <div className={styles.hero}>
            <div className={styles.slide} style={{ background: `url(${images[current].url})` }}>
                <div className={styles.overlay}>
                    <h1 className={styles.title}>{images[current].title}</h1>
                    <p className={styles.subtitle}>{images[current].subtitle}</p>
                    <Link to='/products' className={styles.btn}>See products</Link>
                </div>
                <button className={styles.arrowLeft} onClick={prev}>&#8249</button>
                <button className={styles.arrowRight} onClick={next}>&#8250</button>
            </div>
            <div className={styles.dots}>
                {images.map((_, i) => (
                    <span key={i} className={`${styles.dot} ${i === current ? styles.activeDot : ''}`} onClick={() => goTo(i)}></span>
                ))}
            </div>
        </div>
    );
}