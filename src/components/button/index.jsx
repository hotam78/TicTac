import React from 'react'
import styles from './style.module.scss'


export default function Button({ text, onClickFunc, width = '100%' }) {
  return (
    <div className={styles.button} style={{ width }} onClick={onClickFunc}>{text}</div>
  )
}
