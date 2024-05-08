import React from 'react'
import styles from './style.module.scss'
import Button from '../../components/button'
import Title from '../../components/title'


export default function Menu() {
  return (
    <div className={styles.menu}>
        <img src="/LogoSmall.png" alt="logo" />
        <Button text={'play solo'}/>
        <Button text={'play with a friend'} />
    </div>

  )
}
