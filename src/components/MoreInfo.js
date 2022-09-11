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

  const getLinkId = (url) => {
    url.split("/")
    let idx = url.split('/')
    let ids = [];
    ids.push(idx.pop())
    return ids
  }


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
						<div className={styles.detailed} >
            <p> Status: <span>{character.status} </span>  </p>
            <p> Species: <span>{character.species}</span> </p>
            <p> Type: <span>{character.type !== "" ? character.type : "unknown"  } </span> </p>
            <p> Gender: <span>{character.gender} </span> </p>
            <p> Origin: <span> {origin.name} </span> </p>
            <Link className={ `${styles.home} car` } to={`/location/${getLinkId(origin.url)}`}> See origin Location </Link>
            <p> Location: <span>{location.name}</span> </p>
            <Link className={styles.home} to={`/location/${getLinkId(location.url)}`}> See Location </Link>
            </div>
						<p> Episodes: <span> {episode.length} </span> </p>
						<div className={styles.episodeContainer}>
							{
              episode.map( (e) =>{
                        return <Link key={e} className={styles.episodebtn} to={`/episode/${getLinkId(e)}`}> e </Link>
                    } )
            	}
						</div>
            
          </div>
          
        </div>
        <button className={styles.btn}> Add to favorites</button>
      </div>

    }
    </>
  )
}

export default MoreInfo