import React from 'react'
import styles from './style.module.scss'


export default function Button({text, width = '100%'}) {
  return (
    <div className={styles.button} style={{width}}>{text}</div>
  )
}
