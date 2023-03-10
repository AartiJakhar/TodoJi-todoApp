import React from 'react'
import styles from '../styles/Footer.module.css'
import { FaLinkedin,FaGithub,FaUserCircle } from 'react-icons/fa';
import Link from 'next/link';
export default function Footer() {
  return (
    <>
    <div className={styles.container}>
            <div className={styles.sharebox}>
                  <Link href="https://linkedin.com/in/aarti-jakhar-819439250"   target="_blank"><FaLinkedin style={{verticalAlign:"baseline"}}/></Link>
                  <Link href={"https://github.com/AartiJakhar"} target="_blank"><FaGithub style={{verticalAlign:"baseline"}}/></Link>
                  <Link href={"https://portfolio-website-aarti-jakhar.vercel.app"} target="_blank"><FaUserCircle style={{verticalAlign:"baseline"}}/></Link>
            </div>
            <div className={styles.footerEnd}>
            © 2023 Copyright: TODOJI
            </div>
    </div>
    </>
  )
}