import React, { useState } from 'react'
import styles from './style.module.scss'
import Board from '../../components/board'
import Title from '../../components/title'
import Icon from '../../components/icon'
import { useNavigate } from 'react-router'

export default function Setting() {
  const nav = useNavigate();

  // TODO- לאחד מסגרות כי יש אווטראים שהגיעו עם
  const avatars = [['avatar5.png','boy avatar'],['avatar1.png','girl avatar'],['avatar4.png','girl avatar']]

  const [userName, setUserName] = ('');
  console.log(userName);

  // TODO- in one func
  const handleVi = () => {
    localStorage.user = JSON.parse({name: 'hodaya'});
    nav('/menu');
  }

  return (
    <div className={styles.setting}>
      <img src="LogoSmall.png" alt="logo"/>
      <Board title='your name'><input onChange={(e)=> setUserName(e.target.value)}/></Board>
      <h2>{userName}</h2>
      <div className={styles.chooseAvatar}>
        <Title text='choose avatar' fontSize='0.9rem'/>
        <div className={styles.imgs}>
          {avatars.map((a => <div className={styles.avatar}><img src={a[0]} alt={a[1]} /></div>))}
        </div>
      </div>
      <div className={styles.buttons}>
          <Icon icon={'back'} onClickFunc={handleVi}/>
          <Icon icon={'vi'} onClickFunc={()=> nav('/menu')}/>
      </div>
    </div>

  )
}
