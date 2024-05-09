import React from 'react'
import styles from './style.module.scss'
import Icon from '../../components/icon'
import Board from '../../components/board'
import Title from '../../components/title'
import Loading from '../../components/loading'


export default function Waiting() {
  const code = 752693;
  return (
    <div className={styles.waiting}>
      <Icon/>
      <div className={styles.newCodeDiv}>
        <Board title={'your code'}><h2>{code}</h2></Board>
        {/* <h1 style={{color:'#FBB500'}}>loading...</h1> */}
        <div className={styles.loading}></div>
        {/* <div className={styles.loadingDiv}><Loading/></div> */}
        
        <Title text={'waiting for oppenent'} fontSize={'1.1rem'}/>
      </div>
    </div>

  )
}
