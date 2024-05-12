import React from 'react'
import styles from './style.module.scss'
import O from '../o'
import X from '../x'



export default function Card({ value, row, index, onClickFunc, isActive}) {
  return (
    <div value={value} className={`${styles.card} ${isActive == null ? '' : isActive == true ? styles.active : styles.noActive}`} onClick={() => onClickFunc(value, row, index)} >
        {/* {console.log('card val:', value)} */}
      {value == 'x' ? <X gray={isActive == false} /> : value == 'o' ? <O gray={isActive == false} /> : ''}
    </div>

  )
}
