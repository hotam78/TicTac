import React, { useState } from 'react'
import styles from './style.module.scss'
import Title from '../../components/title'
import Board from '../../components/board'
import Back from '../../components/icon'
import X from '../../components/x'
import Card from '../../components/card'
import Button from '../../components/button'
import PlayerBoard from '../../components/playerBoard'
import Player from '../../components/player'


export default function BoardWithPlayers() {
  const [win, setWin] = useState(true);
  const cardArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const playersArr = [{ name: 'hasa', wins: '13', img: 'girlAvater.png', shape: 'x' }, { name: 'hotam', wins: '10', img: 'girlAvater.png', shape: 'y' }]


  return (
    <div className={styles.gamePage}>
      <div className={styles.upDiv}>
        <PlayerBoard> {win ? <div className={styles.winner}><Player player={playersArr[0]} /><h2>{playersArr[0].name} win!!!</h2></div> : <div className={styles.players}>{playersArr.map((p) => <Player player={p} />)}</div>}</PlayerBoard>
      </div>
      <div className={styles.content}>
        <Board>
          <div className={styles.boardDiv}>{cardArr.map((c) => <Card />)}</div>
        </Board>

        {win ? <div className={styles.buttons}><Button text='play again' width='60%' /> <Button text='back to main' width='60%' /></div> : <Button text='Back' width='50%' />}
      </div>
    </div>

  )
}
