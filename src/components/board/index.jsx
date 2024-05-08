import React from 'react'
import styles from './style.module.scss'


export default function Board({ title, children }) {
  return (
    <div className={styles.board} >
      <div className={styles.title}>{title}</div>
      {children}
    </div>
  )
}
