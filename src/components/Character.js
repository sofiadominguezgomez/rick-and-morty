
import React from 'react'
import { Link } from 'react-router-dom';
import styles from '../styles/container.module.css'


function Character({character}) {

  return (
    <div className={styles.characterContainer}>
        <h2> {character.name} </h2>
        <picture>
            <img src={character.image} alt={character.name} />
        </picture>
        <Link className={styles.home} to={`character/${character.id}`}> More information </Link>
               
    </div>
  )
}

export default Character