import React from 'react'
import styles from './style.module.scss'

export default function Player() {
    return (
        <div className={styles.borderPlayer}>
            <img src={'403021_avatar_girl_user_young_child_icon 1.png'} className={styles.imgPlayer} />
            <div className={styles.score}>wins: 13</div>
        </div>
    )
}
