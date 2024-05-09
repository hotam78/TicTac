import React from 'react'
import styles from './style.module.scss'
import O from '../o'
import X from '../x'



export default function Card({ value, index, onClickFunc, isActive }) {
  return (
    <div value={value} className={`${styles.card} ${isActive == null ? '' : isActive ? styles.active : styles.noActive}`} onClick={() => onClickFunc(value, index)}>
      {value == 'x' ? <X gray={isActive == false} /> : value == 'o' ? <O gray={isActive == false} /> : ''}
    </div>

  )
}
