import React from 'react'
import styles from '../styles/container.module.css'
import github from '../media/GitHub-Mark-64px.png'
import api_logo from '../media/rick_and_morty.png'

function Footer() {
  return (
    <footer className={styles.footer_container}>
    <div className={styles.media} >
        <div className={styles.git} >
            <picture> <img src={github} alt='github logo' /> </picture>
            <h2>Done by <a href='https://github.com/sofiadominguezgomez'>Sofía Domínguez Gómez</a> </h2>
        </div>
        <div className={styles.api} >
            <picture> <img src={api_logo} alt='rick and morty logo'/> </picture>
            <h3>Consumed <a href='https://rickandmortyapi.com/'> The Rick and Morty API</a> </h3>
        </div>
    </div>
        
        <div className={styles.disclaimer}>
            <p>
            Rick and Morty is created by Justin Roiland and Dan Harmon for Adult Swim. The data and images are used without claim of ownership and belong to their respective owners.
            </p>
        </div>
        
        
    </footer>
  )
}

export default Footer