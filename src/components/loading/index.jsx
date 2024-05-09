import React from 'react'
import styles from './style.module.scss'


export default function Loading() {
    return (
        <div className={styles.loadDiv}>
        <div className={styles.loading}>
            {/* <!-- 
            font-size to set the width and height of box (default is 100px),
            --duration to set the animation duration (default is 1s),
            --num-dot to set the number total of dot (default is 10)
            --> */}
            {/* style="font-size:200px;--duration:2s;--num-dot:10;" */}
            
            <div style="--index:0"></div>
            <div style="--index:1"></div>
            <div style="--index:2"></div>
            <div style="--index:3"></div>
            <div style="--index:4"></div>
            <div style="--index:5"></div>
            <div style="--index:6"></div>
            <div style="--index:7"></div>
            <div style="--index:8"></div>
            <div style="--index:9"></div>
            {/* <!--  index ended with (var(--num-dot) - 1)  --> */}
    </div>
    </div>
    )
}
