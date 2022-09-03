import React from 'react'
import styles from '../styles/container.module.css'
import Character from '../components/Character'
import Loading from './Loading'


function CharacterList(props) {
    const {characters, loading} = props

    
  
    return (

    <div className={styles.listContainer} >
        { loading ?
            <Loading />
        :
            characters.map( (c) => {
                return <Character character={c} key={c.id} />
            } ) 
        }

    </div>
    

  )
}

export default CharacterList