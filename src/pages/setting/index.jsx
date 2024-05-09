import React, { useState } from 'react'
import styles from './style.module.scss'
import Board from '../../components/board'
import Title from '../../components/title'
import Icon from '../../components/icon'

export default function Setting() {

  // TODO- לאחד מסגרות כי יש אווטראים שהגיעו עם
  const avatars = [['avatar5.png','boy avatar'],['avatar1.png','girl avatar'],['avatar4.png','girl avatar']]

  return (
    <div className={styles.setting}>
      <img src="LogoSmall.png" alt="logo"/>
      <Board title='your name'><input/></Board>
      <div className={styles.chooseAvatar}>
        <Title text='choose avatar' fontSize='0.9rem'/>
        <div className={styles.imgs}>
          {avatars.map((a => <div className={styles.avatar}><img src={a[0]} alt={a[1]}/></div>))}
        </div>
      </div>
      <div className={styles.buttons}>
          <Icon icon={'back'}/>
          <Icon icon={'vi'}/>
      </div>
    </div>

  )
}
