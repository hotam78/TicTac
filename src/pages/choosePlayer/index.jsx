import React from 'react'
import styles from './style.module.scss'
import Title from '../../components/title'
import Board from '../../components/board'
import Back from '../../components/back'
import X from '../../components/x'
import Card from '../../components/card'


export default function ChoosePlayer() {
  const arr = ['x', 'o']
  return (
    <>
      <div className={styles.main}>
        <Back />
        <div className={styles.choose}>
          <Title text={'CHOOSE PLAYER'} fontSize={'40px'} />
          <div className={styles.board}>
            <Board height={'7rem'} />
            <div className={styles.card}>
              {arr.map((v) => {
                return <Card value={v} />
              })}
            </div>
          </div>
        </div>
      </div>
    </>

  )
}
