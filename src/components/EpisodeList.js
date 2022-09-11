import React, { useEffect, useState } from 'react'
import { getEpisodes } from '../services/api';
import Navbar from './Navbar';
import styles from '../styles/location.module.css'
import Loading from './Loading';
import Episode from './Episode';

const EpisodeList = () => {
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] =useState(0)
    const [episodes, setEpisodes] = useState([])

    useEffect( () => {
        const fetchEpisodes = async() => {
          try {
            setLoading(true)
              const data = await getEpisodes(page)
              const pages = data.info.pages
              const results = data.results
              setEpisodes(results)
              setTotalPages(pages)
            setLoading(false)
    
          } catch (err) {
            console.log(err)
          }
        };
        fetchEpisodes()
      }, [page] )

  return (
    <main >
    <Navbar page={page} setPage={setPage} totalPages={totalPages} />
    <div className={styles.listContainer} >
      {loading ?
        <Loading />
      :
      episodes.map( (e) => {
        return <Episode episode={e} key={e.id} />
      } )
        }
    </div>
  </main>
  )
}

export default EpisodeList