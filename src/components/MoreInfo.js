import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getCharacterById } from '../services/api'
import styles from '../styles/container.module.css'
import Loading from './Loading'

const MoreInfo = () => {
  const [loading, setLoading] = useState(true)
  const [character, setCharacter] = useState({})
  const [location, setLocation] = useState({})
  const [origin, setOrigin] = useState({})
  const [episode, setEpisode] = useState({})
  const {id} = useParams()

  useEffect( () => {
    const fetchCharacterById = async(id) => {
      try {
        setLoading(true)
        const data = await getCharacterById(id)
        setCharacter(data)
        setLocation(data.location)
        setOrigin(data.origin)
        setEpisode(data.episode)
        setLoading(false)
      } catch(err) {console.log(err)}
    }
    fetchCharacterById(id)
  }, [id]
  )

  return (
    <>
    {
      loading ?
       <Loading />
      :
      
      <div className={styles.characterDetail} >
        <div className={styles.moreInfoTitle}>
          <h2> {character.name} </h2>
        </div>
      
        <div className={styles.moreInfoContainer} >
          <div className={styles.characterContainer}>
                <picture>
                    <img src={character.image} alt={character.name} />
                </picture>
          </div>

          <div className={styles.detail}>
            <p> Status: <span>{character.status} </span>  </p>
            <p> Species: <span>{character.species}</span> </p>
            <p> Type: <span>{character.type !== "" ? character.type : "unknown"  } </span> </p>
            <p> Gender: <span>{character.gender} </span> </p>
            <p> Origin: <span> {origin.name} </span> </p>
            <button className={styles.btn}> Ir a origen </button>
            <p> Location: <span>{location.name}</span> </p>
            <button className={styles.btn}> Ir a Location </button>
            <p> Episodes: <span> {episode.length} </span> </p>
            <button className={styles.btn}> Ir a Episodes </button>
          </div>
          
        </div>
        <button className={styles.btn}> Add to favorites</button>
      </div>

    }
    </>
  )
}

export default MoreInfo