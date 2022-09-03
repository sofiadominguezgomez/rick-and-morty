import React from 'react'
//import { useState } from "react";
import styles from '../styles/container.module.css'

const Searchbar = () => {


  return (
    <div className={styles.searchbar_container}>
        <div className={styles.searchbar}>
            <input placeholder='Search character' />
        </div>
        <button className={styles.btn} >Search</button>
    </div>
  )
}

export default Searchbar