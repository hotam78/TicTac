import React from 'react'
import styles from './style.module.scss'


export default function Title({text, fontSize}) {
  return (
    <div className={styles.title}>
        <h1 style={{fontSize}}>{text}</h1>
    </div>
  )
}
