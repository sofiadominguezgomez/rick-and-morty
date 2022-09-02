import React from 'react'
import styles from '../styles/container.module.css'
import Character from '../components/Character'

function CharacterList(props) {
    const {characters} = props

    
  
    return (

    

    <div className={styles.listContainer} >
        {
            characters.map( (c) => {
                return <Character character={c} key={c.id} />
            } )
        }

    </div>
    

  )
}

export default CharacterList