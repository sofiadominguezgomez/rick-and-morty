import React, { useState } from 'react'
//import { useState } from "react";
import styles from '../styles/container.module.css'

const Searchbar = () => {
  const [query, setQuery] = useState("")

  return (
    <div className={styles.searchbar_container}>
        <div className={styles.searchbar}>
            <input 
              placeholder='Search character' 
              onChange={e => setQuery(e.target.value)}
              value={query}
            />
        </div>
        <button className={styles.btn} >Search</button>
    </div>
  )
}

export default Searchbar