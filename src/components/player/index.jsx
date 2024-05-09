import React from 'react'
import styles from './style.module.scss'
import X from '../x'
import O from '../o'

export default function Player({ player }) {

    // TODO- להוסיף תכלת ושאר אפקטים לשחקן שעכשיו תורו
    const { name, wins, shape, img } = player;
    return (
        <div className={styles.borderPlayer}>
            <img src={img} className={styles.imgPlayer} />

            <div className={styles.score}>wins: {wins}</div>
            <div className={styles.shape}>
                {shape == 'x' ? <X /> : <O />}
            </div>
            <h6>{name}</h6>

        </div>
    )
}
