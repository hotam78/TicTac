import React, { useState } from 'react'
import styles from './style.module.scss'
import Icon from '../../components/icon'
import Title from '../../components/title'
import Board from '../../components/board'
import Button from '../../components/button'
import socket from '../../socket'


export default function JoinGame() {
  const [code, setCode] = useState();

  socket.on('room-status', (data)=>console.log(data));

  function handleJoin(e){
    e.preventDefault();
    socket.emit('room-connect',code);
  }


  return (
    <div className={styles.main}>

      <Icon/>
      <div className={styles.page}>
        <Title text={'join to a game'} fontSize={'1.4rem'} />
        <Board ><input onInput={(e=> {setCode(e.target.value)})} type='text' placeholder='enter code game' className={styles.input} /></Board>
      </div>

      <div className={styles.buttons}>
        <Button text={'join'} width={'40%'} onClickFunc={handleJoin}/>
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
