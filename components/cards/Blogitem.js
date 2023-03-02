import React from 'react'
import styles from '../../styles/basicpage/Blogs.module.css'
export default function Blogitem() {
  return (

        <div className={styles.box}>
            <div className={styles.image}>
                <img src="maxresdefault.jpg" alt=""/>
            </div>
            <div className={styles.content}>
                <a href="#" className={styles.title}>What is a todo list and how can it help in business and daily life?</a>
                <span>by admin / 21st may, 2021</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, dicta.</p>
            </div>
        </div>
      
  )
}
