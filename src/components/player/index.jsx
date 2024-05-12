import React from 'react'
import styles from './style.module.scss'
import X from '../x'
import O from '../o'

export default function Player({ player, yourTurn = 'false' }) {

    const { name, wins, shape, img } = player;
    return (

        <div className={`${styles.borderPlayer}`} 
        style={{border: yourTurn ?'3px solid #8EEBFF' : '' ,transform: yourTurn? 'scale(1.2)' : ''}} >

            <img src={img} className={styles.imgPlayer} />

            <div className={styles.score}>wins: {wins}</div>
            <div className={styles.shape}>
                {shape == 'x' ? <X /> : <O />}
            </div>
            <h6>{name}</h6>

        </div>
    )
}
