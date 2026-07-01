import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import styles from "./Register.module.css";

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const auth = getAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            navigate('/');
        } catch (error) {
            if (error.code === 'auth/email-already-in-use'){
                const wantToLog = window.confirm(
                    'This email is already registered. Do you want to login now?'
                );

                if (wantToLog) {
                    navigate('/login');
                } else {
                    navigate('/');
                }
            } else {
                setError('Something went wrong. Check your data and try again...');
            }
        }
    };
    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h2>Create a new account</h2>
                <div className={styles.inputGroup}>
                    <label>Email</label>
                    <input type="email" placeholder="mail@mail.com" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                </div>
                <div className={styles.inputGroup}>
                    <label>Password</label>
                    <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                {error && <p className={styles.errormessage}>{error}</p>}
                <button className={styles.btn} type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;