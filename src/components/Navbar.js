import {React} from 'react'
import styles from '../styles/container.module.css'
import Searchbar from './Searchbar'

function Navbar({page, setPage, totalPages}) {


  return (
    <>
      <div className={styles.Navbar_container}>
        <button className={styles.btn} onClick={ () => setPage(1)} disabled={ page === 1 ? true : false } > First </button>
        <button className={styles.btn} onClick={() => (page > 1) ? setPage(page-1) : null} disabled={ page === 1 ? true : false } > Previous </button>
        <span className={styles.Navbar_span}> {page} </span>
        <button className={styles.btn} onClick={() => setPage(page+1)} disabled={ page === totalPages ? true : false } > Next </button>
        <button className={styles.btn} onClick={() => setPage(42)} disabled={ page === totalPages ? true : false } > Last </button>
    </div>
    <Searchbar />
    </>
    
  )

}

export default Navbar
