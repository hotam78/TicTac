import React from 'react'
import styles from './style.module.scss'
import X from '../../components/x'
import O from '../../components/o'


export default function Welcome() {
  return (
    <div className={styles.welcome}>
      <div className={styles.leftTop}><X/></div>
      <div className={styles.rightTop}><O/></div>
      <img src="LogoSmall.png" alt="logo" />
      <div className={styles.leftBottom}><O/></div>
      <div className={styles.rightBottom}><X/></div>
    </div>

  )
}
