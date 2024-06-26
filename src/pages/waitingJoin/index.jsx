import React from 'react'
import styles from './style.module.scss'
import Icon from '../../components/icon'
import Board from '../../components/board'
import Title from '../../components/title'
import Loading from '../../components/loading'


export default function WaitingJoin() {
  const code = 752693;
  return (
    <div className={styles.waitingJoin}>
      <Icon/>
      <div className={styles.waiting}>
        <div className={styles.loading}></div>
        <Title text={'waiting...'} fontSize={'1.1rem'}/>
        <Title text={'join to the game'} fontSize={'1.1rem'}/>

      </div>
    </div>

  )
}
