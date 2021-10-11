import React from 'react'
import styles from './Header.module.css'
import Menu from './Menu'
import logo from '../Assets/logo.png'
const Header = () => {
    return (
        <header className={styles.header}>
            <img className={styles.logo} alt="Logo" src={logo}></img>
            <Menu />
        </header>
    )
}

export default Header
