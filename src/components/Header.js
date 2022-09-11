import React from 'react'
import { NavLink} from 'react-router-dom'
import styles from '../styles/container.module.css'

const Header = () => {

  return (
    <nav className={styles.header}>
         <NavLink to="/" className={styles.home} >Home</NavLink> 
    </nav>
  )
}

export default Header