import React from 'react'
import { NavLink, useNavigate, useMatch} from 'react-router-dom'
import styles from '../styles/container.module.css'

const Header = () => {
  const navigate = useNavigate();
  const isHome = useMatch("/")
  const buttonBack = () =>{
    navigate(-1)
}
  return (
    <nav className={styles.header}>
        {!isHome && <button onClick={buttonBack} className={styles.btn} >BACK</button>}
         <NavLink to="/" className={styles.home} >Characters</NavLink>
         <NavLink to="/location" className={styles.home} >Locations</NavLink>  
         <NavLink to="/episode" className={styles.home} >Episodes</NavLink>
         <NavLink to="/favorites" className={styles.home} >Favorites</NavLink>
    </nav>
  )
}

export default Header