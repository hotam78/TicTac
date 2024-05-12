import React, { useState } from 'react'
import styles from './style.module.scss'
import Title from '../../components/title'
import Board from '../../components/board'
import Icon from '../../components/icon'
import X from '../../components/x'
import Card from '../../components/card'
import Button from '../../components/button'


export default function ChoosePlayer() {
  const arr = ['x', 'o']

  const [isChoose, setIsChoose] = useState(null)

  const chooseShape = (v) => {
    setIsChoose(v)
  }

  return (
    <>
      <div className={styles.main}>
        <Icon />
        <div className={styles.choose}>
          <Title text={'CHOOSE PLAYER'} fontSize={'40px'} />
          <Board height={'7rem'} >  <div className={styles.cards}>
            {arr.map((v) => <Card value={v} onClickFunc={chooseShape} isActive={isChoose ? v == isChoose : null} />)}
          </div></Board>

          {isChoose ? <div className={styles.button}> <Button text={"let's play"} width={'50%'} /> </div> : ""}
        </div>
      </div>
    </>

  )
}
