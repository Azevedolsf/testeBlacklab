import React from 'react'
import styles from './Produto.module.css'
import icon from '../../Assets/php-brands.svg'
console.log(icon);
const Produto = ({i, p}) => {
    return (
        <div className={styles.produto}>
           <img className={styles.icone} src={icon}></img>
           
           <p className={styles.text}>{p}</p>
        </div>
    )
}

export default Produto
