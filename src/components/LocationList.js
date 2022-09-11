import React, { useEffect, useState } from 'react'
import { getLocations } from '../services/api';
import Navbar from './Navbar';
import styles from '../styles/location.module.css'
import Loading from './Loading';
import Location from './Location';

const LocationList = () => {
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] =useState(0)
  const [locations, setLocations] = useState([])

  useEffect( () => {
    const fetchLocations = async() => {
      try {
        setLoading(true)
          const data = await getLocations(page)
          const pages = data.info.pages
          const results = data.results
          setLocations(results)
          setTotalPages(pages)
        setLoading(false)

      } catch (err) {
        console.log(err)
      }
    };
    fetchLocations()
  }, [page] )

  return (
    <main >
      <Navbar page={page} setPage={setPage} totalPages={totalPages} />
      <div className={styles.listContainer} >
        {loading ?
          <Loading />
        :
        locations.map( (l) => {
          return <Location location={l} key={l.id} />
        } )
          }
      </div>
    </main>
  )
}

export default LocationList