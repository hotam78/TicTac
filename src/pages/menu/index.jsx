import React from 'react'
import styles from './style.module.scss'
import Button from '../../components/button'
import Title from '../../components/title'
import Icon from '../../components/icon'
import { useNavigate } from 'react-router'


export default function Menu() {
  const nav = useNavigate();
  return (
    <div className={styles.menu}>
        <div className={styles.center}>
          <img src="/LogoSmall.png" alt="logo" />
          <Button text={'play solo'}/>
          <Button text={'play with a friend'} />
        </div>
        <div className={styles.icon} ><Icon icon={'setting'} onClickFunc={() => nav('/setting')}/></div>
    </div>
  )
}
