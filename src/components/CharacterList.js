import React from 'react'
import styles from '../styles/container.module.css'
import Character from '../components/Character'
import Loading from './Loading'
import { useState, useEffect } from "react";
import { getCharacters, searchCharacter } from '../services/api'
import Navbar  from '../components/Navbar';
import NotFound from './NotFound';


function CharacterList() {
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] =useState(0)
    const [characters, setCharacters] = useState([])


    const [error, setError] = useState(null)
    const [search, setSearch] = useState("");
  
    const fetchCharacters = async() => {
      try {
        setLoading(true)
          const data = await getCharacters(page)
          const pages = data.info.pages
          const results = data.results
          setCharacters(results)
          setTotalPages(pages)
        setLoading(false)

      } catch (err) {
        setError(err.message)
        setLoading(false)
        
      }
    };
      const onSearch = async(query) => {
        if (!characters) {
          setError(null)
          return fetchCharacters()
        }
        setLoading(true);

        try {
          const data = await searchCharacter(query)
          const results = data.results
          if (!results) {

          setLoading(false)
          return;
        } else {
          setCharacters(results)
        }
        } catch(err) {
          setError(err.message)
          setLoading(false)
        }

        setLoading(false)

      
    }

    const onChange = (e) => {
      setSearch(e.target.value);
      if (e.target.value.length === 0) {
        setError(null)
      }
    };

    const onClick = async (e) => {
      onSearch(search);
      setError(null)
    };
  
    useEffect(()=> {
      fetchCharacters()
// eslint-disable-next-line
    }, [page])

    return (
    <main>
        <Navbar page={page} setPage={setPage} totalPages={totalPages} />
        <div className={styles.searchbar_container}>
        <div className={styles.searchbar}>
            <input 
              placeholder='Search character' 
              onChange={onChange}
            />
        </div>
        <button className={styles.btn} onClick={onClick} >Search</button>
    </div>
        <div className={styles.listContainer} >
        {loading && <Loading />}
        { error ?
            <NotFound />
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