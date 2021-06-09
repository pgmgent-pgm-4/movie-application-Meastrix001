import React from 'react'
import styles from './Loading.module.scss';
const Loading = ({ type }) => {
    return (
        <div className={styles.div}>
            <div className={styles.dwrapper}>
                <div  className={styles.wrapper}>
                    <div className={styles.loader}>
                        <svg className={styles.loader_ani} viewBox="25 25 50 50" >
                        <circle className={styles.loader_effect} cx="50" cy="50" r="20" fill="none" stroke="#70c542" stroke-width="2" />
                        </svg>
                        <h2 className={styles.h2}>Loading {type}</h2>
                    </div>
                </div>    
            </div>
        </div>
    )
}

export default Loading