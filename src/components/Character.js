
import React, { useState } from 'react'
import styles from '../styles/container.module.css'

function Character({character}) {
    const [more, setMore] = useState(false);

  return (
    <div className={styles.characterContainer}>
        <h2> {character.name} </h2>
        <picture>
            <img src={character.image} alt={character.name} />
        </picture>
        <button className={styles.btn} onClick={() => setMore(!more)} > {more ? "Less information" : "More information" } </button>
        {
            more ?
                <div className={styles.moreInfoContainer} >
                    <p> Status: <span>{character.status} </span>  </p>
                    <p> Species: <span>{character.species}</span> </p>
                    <p> Type: <span>{character.type !== "" ? character.type : "unknown"  } </span> </p>
                    <p> Gender: <span>{character.gender} </span> </p> 
                </div>
            : null
        }
    </div>
  )
}

export default Character