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
  const [win, setWin] = useState(false);
  const [playerShape, setPlayerShape] = useState('x')
  const [cardArr, setCardArr] =useState(['','','','','','','','','']);
  const playersArr = [{ name: 'hasa', wins: '13', img: 'avatar4.png', shape: 'x' }, { name: 'hotam', wins: '10', img: 'avatar4.png', shape: 'o' }];

  function handleClick (value, index) {
    if(value) return;
    // נראלי פשוט ההדפסה של סטייטים עובדת רק אחרי שנגמר הפונקציה
    // console.log('cardArr', cardArr);
    // console.log('value:', value, ',  index:', index);
    const newArr = [...cardArr];
    newArr[index]=playerShape;
    setCardArr(newArr);
    const newShape = playerShape === 'x'? 'o': 'x';
    setPlayerShape(newShape);
  }


  return (
    <div className={styles.gamePage}>
      <div className={styles.upDiv}>
        <PlayerBoard> 
          {win ? <div className={styles.winner}><Player player={playersArr[0]}/><h2>{playersArr[0].name} win!!!</h2></div>
         : <div className={styles.players}>{playersArr.map((p) => <Player player={p} yourTurn={p.shape == playerShape}/>)}</div>}
        </PlayerBoard>
      </div>
      <div className={styles.content}>
        <Board overflow={true}>
          <div className={styles.boardDiv}>{cardArr.map((c, i) => <Card onClickFunc={handleClick} value={c} index={i}/>)}</div>
        </Board>

        {win ? <div className={styles.buttons}><Button text='play again' width='60%' /> <Button text='back to main' width='60%' /></div> : <Button text='Back' width='50%' />}
      </div>
    </div>

  )
}
