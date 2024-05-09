import React from 'react'
import styles from './style.module.scss'


export default function PlayerBoard({ children }) {
    return (
        <div className={styles.border}>
            <div className={styles.yellowDiv}>
                {children}
            </div>
        </div>
    )
}
