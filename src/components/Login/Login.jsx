import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                // console.log("User logged in");
                alert("You are logged in");
                navigate('/');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // console.error("Error loggin in: ", errorCode, errorMessage);
                alert("Error: " + errorMessage);
            });
    };
    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleLogin}>
                <h2>Log in</h2>
                <div className={styles.inputGroup}>
                    <label>Email</label>
                    <input type="email" placeholder="mail@mail.com" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                </div>
                <div className={styles.inputGroup}>
                    <label>Password</label>
                    <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                <button className={styles.btn} type="submit">Login in</button>
                <p>You don't have an account yet? Register here...<Link to="/register">Register</Link></p>
            </form>
        </div>
    );
};

export default Login;