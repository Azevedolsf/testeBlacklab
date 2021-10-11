import React from 'react'
import Produto from './Produto'
import styles from './Produtos.module.css'
import pontos from '../Assets/pontos.png'


const Produtos = () => {

    const produtos = [
        {i:'fab fa-php', p:'PHP'},
        {i:'fab fa-wordpress', p:'Wordpress'},
        {i:'fab fa-js-square', p:'Javascript'},
        {i:'fab fa-react', p:'React JS'},
        {i:'fab fa-aws', p:'Plataforma de serviço AWS'},
        {i:'fab fa-sass', p:'SCSS'},
        {i:'fab fa-html5', p:'HTML5'},
        {i:'fab fa-laravel', p:'Laravel'}
    ]

    return (
        <section className={styles.produtos}>
            <div className={styles.titleContent}>
                <img src={pontos}></img>
                <h1 className={styles.title}>Tecnologias que utilizamos</h1>
            </div>
            <ul>
                {

                produtos.map((produto) => 
                    <Produto key={produto.i} {...produto} />  
                )

                }
            </ul>
        </section>
    )
}

export default Produtos
