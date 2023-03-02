import React from 'react'
import Blogitem from '../cards/Blogitem'
import styles from '../../styles/basicpage/Blogs.module.css'

export default function Blog() {
  return (
    <section className={styles.blogs} id="blogs">
<h1 className={`${styles.heading} heading`}>our blogs</h1>

    <div className={styles.boxContainer}> 
    <Blogitem/>
    <Blogitem/>
    <Blogitem/>
    </div>
    </section>
  )
}
