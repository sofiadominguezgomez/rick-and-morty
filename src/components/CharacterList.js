import React from 'react'
import styles from '../styles/container.module.css'
import Character from '../components/Character'
import Loading from './Loading'
import { useState, useEffect } from "react";
import { getCharacters } from '../services/api'
import Navbar  from '../components/Navbar';


function CharacterList() {
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] =useState(0)
    const [characters, setCharacters] = useState([])
  
  
    useEffect( () => {
      const fetchCharacters = async() => {
      try {
        setLoading(true)
          const data = await getCharacters(page)
          const pages = data.info.pages
          const results = data.results
          setCharacters(results)
          setTotalPages(pages)
        setLoading(false)
  
      } catch (err) {console.log(err)}
    };
        fetchCharacters();
    }, [page])

    
  
    return (
    <main>
        <Navbar page={page} setPage={setPage} totalPages={totalPages} />
        <div className={styles.listContainer} >
        { loading ?
            <Loading />
        :
            characters.map( (c) => {
                return <Character character={c} key={c.id} />
            } ) 
        }

        </div>
    </main>
    
    

  )
}

export default CharacterList