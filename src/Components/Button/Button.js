import React from 'react'
import styles from './Button.module.css'

const Button = ({cor, fundo}) => {
    return (
        <button style={{color:cor, background: fundo}} className={styles.button} type="">
            começar
        </button>
    )
}

export default Button
