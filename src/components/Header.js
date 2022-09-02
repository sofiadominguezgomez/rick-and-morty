import React from 'react'
import styles from '../styles/container.module.css'

function Header() {
  return (

    <div className={styles.header_container}>
        <button className={styles.btn} > First </button>
        <button className={styles.btn} > Previous </button>
        <button className={styles.btn} > Next </button>
        <button className={styles.btn} > Last </button>
    </div>
  )

}

export default Header
