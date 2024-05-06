import React from 'react'
import styles from './style.module.scss'


export default function Board({ title }) {
  return (
    <div className={styles.board}>
      <div className={styles.title}>{title}</div>
    </div>
  )
}
