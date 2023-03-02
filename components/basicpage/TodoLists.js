import React from 'react'
import styles from '../../styles/basicpage/AddNotes.module.css'
import AddTodo from '../cards/AddTodo'
export default function TodoLists() {
  return (
    <section id="todoLists" className={styles.about}>

<h1 className={`${styles.heading} heading`}>My To Do List</h1>

<div className={styles.row}>

  <div className={styles.content}>
    <h3>We build Logo Design that build your business</h3>
   
        <AddTodo/>
  </div>

  <div className="image">
    <img src="aboutus.gif" alt="dddddddddd" width={510}/>
  </div>

</div>


</section>
  )
}
