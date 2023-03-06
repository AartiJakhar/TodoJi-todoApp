import Link from 'next/link'
import React, { use, useContext } from 'react'
import mainContext from '../context/MainContext'
import styles from '../styles/Home.module.css'
export default function Header() {
  const {user} =useContext(mainContext)
  return (
    <section id="home" className={styles.home}>

    <h1 className={styles.banner}> The Best Plateform to manage Our To Do list </h1>
    <h3 className={styles.slogan}>you have a vision. we have a Way to get you there</h3>
    {user===null && <Link href="/userProfile/signin"><button> get started</button></Link>}
  
    
    
    <div className={`${styles.wave} ${styles.wave1}`}></div>
    <div className={`${styles.wave} ${styles.wave2}`}></div>
    <div className={`${styles.wave} ${styles.wave3}`}></div>
    
    <div className={`fas ${styles.faCog} fa-cog ${styles.nut1}`}></div>
    <div className={`fas ${styles.faCog} fa-cog ${styles.nut2}`}></div>
    
    
    </section>
  )
}
