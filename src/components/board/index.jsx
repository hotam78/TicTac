import React from 'react'
import styles from './style.module.scss'


export default function Board({ title, height }) {
  return (
    <div className={styles.board} style={{ height }}>
      <div className={styles.title}>{title}</div>
    </div>
  )
}
