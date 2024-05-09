import React from 'react'
import styles from './style.module.scss'
import Back from '../../components/back'
import Title from '../../components/title'
import Board from '../../components/board'
import Button from '../../components/button'


export default function JoinGame() {
  return (
    <div className={styles.main}>

      <Back />
      <div className={styles.page}>
        <Title text={'join to a game'} fontSize={'1.4rem'} />
        <Board ><input type='text' placeholder='enter code game' className={styles.input} /></Board>
      </div>

      <div className={styles.buttons}>
        <Button text={'join'} width={'40%'} />
        <div className={styles.line}>
          <div className={styles.or}>
            <Title text={'or'} />
          </div>
        </div>
        <Button text={'create a game'} width={'90%'} />
      </div>
    </div>

  )
}
