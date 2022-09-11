import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getLocationById } from '../services/api'
import Loading from './Loading'
import styles from '../styles/location.module.css'

const LocationDetail = () => {
    const [loading, setLoading] = useState(true)
    const [location, setLocation] = useState({})
    const [residents, setResidents] = useState({})
    const {id} = useParams()

    useEffect( () => {
        const fetchLocationById = async(id) => {
            try{
            setLoading(true)
                const data = await getLocationById(id)
                setLocation(data)
                setResidents(data.residents)
            setLoading(false)
            } catch (err) {console.log(err)}
        };
        fetchLocationById(id)
    }, [id] )


  return (
    <>
        {
            loading ?
                <Loading />
            :
            <div className={styles.locationDetail}>
                <h1> {location.name} </h1>
                <p>Type: <span> {location.type} </span> </p>
                <p>Dimension: <span> {location.dimension} </span> </p>
                <p>Residentes: </p>
            </div>
        }
    </>
  )
}

export default LocationDetail