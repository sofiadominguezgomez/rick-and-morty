import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getEpisodeById } from '../services/api'
import Loading from './Loading'
import styles from '../styles/location.module.css'

const EpisodeDetail = () => {
    const [loading, setLoading] = useState(true)
    const [episode, setEpisode] = useState({})
    const [residents, setResidents] = useState({})
    const {id} = useParams()

    

    useEffect( () => {
        const fetchEpisodeById = async(id) => {
            try{
            setLoading(true)
                const data = await getEpisodeById(id)
                setEpisode(data)
                setResidents(data.characters)
            setLoading(false)
            } catch (err) {console.log(err)}
        };
        
        fetchEpisodeById(id)
        
    }, [id] )

  return (
    <>
        {
            loading ?
                <Loading />
            :
            <div className={styles.locationDetail}>
                <h1> {episode.name} </h1>
                <p>Air Date: <span> {episode.air_date} </span> </p>
                <p>Episode: <span> {episode.episode} </span> </p>
                <p>Characters: </p>
                <div className={styles.residents}>
                    {
                    residents.map( (r) =>{
                        let idx = r.split('/')
                        let ids = [];
                        ids.push(idx.pop()) 
                        return <Link className={styles.home} to={`/character/${ids}`} key={r} > Character </Link>
                    } )
                }
                </div>
                
            </div>
        }
    </>
  )
}

export default EpisodeDetail