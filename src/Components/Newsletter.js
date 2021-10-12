import React from 'react';
import styles from './Newsletter.module.css';
import icon from '../Assets/letter-icon.png'
import Button from './Button';

const Newsletter = () => {
    return (
        <section className={styles.newsletter}>
            <div className={styles.chamada}>
               <img className={styles.icone} src={icon} alt="icone" />
                <span className={styles.text}>Assine sua newsletter e receba todas as novidades em seu email</span>
            </div>
            <div>
                <form className={styles.form}>
                    <input type="text" />
                    <Button />
                </form>
            </div>
        </section>
    )
}

export default Newsletter
