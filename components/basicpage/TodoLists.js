import React from 'react'
import styles from '../../styles/basicpage/About.module.css'
export default function TodoLists() {
  return (
    <section id="todoLists" className={styles.about}>

<h1 className={`${styles.heading} heading`}>My To Do List</h1>

<div className={styles.row}>

  <div className={styles.content}>
    <h3>We build Logo Design that build your business</h3>
    <p>The Best Plateform to manage Our To Do list</p>
    <a href="#"><button className={styles.btn}>Start Now</button></a>
  </div>

  <div className="image">
    <img src="aboutus.gif" alt="dddddddddd" width={510}/>
  </div>

</div>


</section>
  )
}
