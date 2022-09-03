import {React, useState} from 'react'
import styles from '../styles/container.module.css'

function Header({page, setPage, totalPages}) {
    const [fix, setFix] = useState(false)

    const isScrolling = () => window.scrollY ? setFix(true) : setFix(false)
    window.addEventListener("scroll", isScrolling)




  return (

    <div className={ fix ? `${styles.header_container} ${styles.fixed}` : styles.header_container}>
        <button className={styles.btn} onClick={ () => setPage(1)} disabled={ page === 1 ? true : false } > First </button>
        <button className={styles.btn} onClick={() => (page > 1) ? setPage(page-1) : null} disabled={ page === 1 ? true : false } > Previous </button>
        <button className={styles.btn} onClick={() => setPage(page+1)} disabled={ page === totalPages ? true : false } > Next </button>
        <button className={styles.btn} onClick={() => setPage(42)} disabled={ page === totalPages ? true : false } > Last </button>
    </div>
  )

}

export default Header
