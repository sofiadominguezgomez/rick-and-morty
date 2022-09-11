import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/location.module.css'

const Episode = ({episode}) => {
  return (
    <div className={styles.locationContainer}>
    <h1> {episode.name} </h1>
    <p>Air Date: <span> {episode.air_date} </span> </p>
    <p>Episode: <span> {episode.episode} </span> </p>
    <Link className={styles.home} to={`/episode/${episode.id}`}> More information </Link>
  </div>
  )
}

export default Episode