import React from 'react'
import styles from './style.module.scss'
import O from '../o'
import X from '../x'



export default function Card({ value }) {
  console.log(value);
  return (
    <div className={styles.card}>
      {value == 'x' ? <X /> : value == 'o' ? <O /> : ''}
    </div>

  )
}
