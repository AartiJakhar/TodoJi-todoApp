import React from 'react'
import styles from '../../styles/basicpage/Team.module.css'
export default function Teamcard() {
    const onclick = (Element)=>{
        console.log(Element)
    }
  return (
    <>
    <div className={styles.card}>
      <div className={styles.image}>
        <img src="aartijakhar.jpeg" alt=""/>
      </div>
      <div className={styles.info}>
        <h3>Aarti Jakhar</h3>
        <span>MERN Stack Developer</span>
        <div className={styles.icons}>
          <a href="#" className="fab fa-facebook-f"></a>
          <a href="#" className="fab fa-twitter"></a>
          <a href="#" className="fab fa-instagram"></a>
        </div>
      </div>
    </div> 
    <div className={styles.card}>
      <div className={styles.image}>
        <img src="kavitajakhar.png" alt=""   />
      </div>
      <div className={styles.info}>
        <h3>Aarti Jakhar</h3>
        <span>MERN Stack Developer</span>
        <div className={styles.icons}>
          <a href="#" className="fab fa-facebook-f"></a>
          <a href="#" className="fab fa-twitter"></a>
          <a href="#" className="fab fa-instagram"></a>
        </div>
      </div>
    </div> 
 </>
  )
}
