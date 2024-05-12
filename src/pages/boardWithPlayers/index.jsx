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
import { checkWin, foundEmpty } from '../../functions/logicaGame'



export default function BoardWithPlayers({ single = true }) {
  const [winArr, setWinArr] = useState(false);
  const win = winArr?.length === 3;
  const [playerShape, setPlayerShape] = useState('x');
  const [cardArr, setCardArr] = useState([['', '', ''], ['', '', ''], ['', '', '']]);
  const playersArr = [{ name: 'hasa', wins: '13', img: 'avatar4.png', shape: 'x' }, { name: 'hotam', wins: '10', img: 'avatar4.png', shape: 'o' }];

  function handleClick(value, row, index) {
    if (win) return;
    if (value) return;
    const newArr = [...cardArr];
    newArr[row][index] = playerShape;
    setCardArr(newArr);
    const winArrAns = checkWin(cardArr, playerShape, row, index);
    if (winArrAns) setWinArr(winArrAns);
    const newShape = playerShape === 'x' ? 'o' : 'x';
    setPlayerShape(newShape);

    if (single) {
      if (winArrAns) return;
      setTimeout(()=>{
      const location = foundEmpty(cardArr);
      newArr[location.r][location.i] = newShape;
      setCardArr(newArr);
      console.log('newArr', newArr);
      const computerWinArr = checkWin(newArr, newShape , location.r , location.i);
      console.log('computerWinArr', computerWinArr);
      if (computerWinArr) setWinArr(computerWinArr);
      setPlayerShape(prev => prev === 'x' ? 'o' : 'x');
        },1000)
      
    }
  }

  return (
    <div className={styles.gamePage}>
      <div className={styles.upDiv}>
        <PlayerBoard>
          {win ? <div className={styles.winner}><Player player={playersArr[0]} /><h2>{playersArr[0].name} win!!!</h2></div>
            : <div className={styles.players}>{playersArr.map((p) => <Player key={p.shape} player={p} yourTurn={p.shape == playerShape} />)}</div>}
        </PlayerBoard>
      </div>
      <div className={styles.content}>
        <Board overflow={true}>
          <div className={styles.boardDiv}>
            {cardArr.map((row, rowNum) => {
              return row.map((value, i) => {
                let activi = win ?
                  winArr.some((obj) => (obj.r == rowNum && obj.i == i)) :
                  null
                return <Card key={`[${rowNum}][${i}]`} value={value} isActive={activi} row={rowNum} index={i} onClickFunc={handleClick} />
              })
            })
            }
          </div>
        </Board>

        {win ? <div className={styles.buttons}><Button text='play again' width='60%' /> <Button text='back to main' width='60%' /></div> : <Button text='Back' width='50%' />}
      </div>
    </div>

  )
}
