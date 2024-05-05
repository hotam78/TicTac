import React from 'react'
import styles from './style.module.scss'


export default function Button({text, width}) {
  return (
    <div className={styles.button}>{text}</div>
  )
}
