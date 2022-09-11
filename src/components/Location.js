import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/location.module.css'

const Location = ({location}) => {
  return (
    <div className={styles.locationContainer}>
      <h1> {location.name} </h1>
      <p>Type: <span> {location.type} </span> </p>
      <p>Dimension: <span> {location.dimension} </span> </p>
      <Link className={styles.home} to={`/location/${location.id}`}> More information </Link>
    </div>
  )
}

export default Location