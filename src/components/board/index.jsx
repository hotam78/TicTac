import React from 'react'
import styles from './style.module.scss'


export default function Board({ title, overflow, children }) {
  return (
    // TODO- האם האוברפלואו עוזר או מזיק? יעני הגדילה של הלוח לפי התוכן
    <div className={styles.board} style={{overflow: overflow? 'hidden' : ''}}>
      <div className={styles.title}>{title}</div>
      {children}
    </div>
  )
}
