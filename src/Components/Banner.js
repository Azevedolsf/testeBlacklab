import React from 'react'
import styles from './Banner.module.css'
import Button from './Button'

const Banner = () => {
    return (
        <section className={styles.banner}>
            <div className={styles.callToAction}>
                <h1 style={{fontWeight: 'bold'}}>Quem Somos</h1>
                <p className={styles.text}>
                    Somos uma produtora web, especialista no
                    desenvolvimento de sites e projetos personalizados
                    que demandam front end, UX e UI design
                </p>
                <Button />
            </div>
        </section>
    )
}

export default Banner
