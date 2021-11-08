import React from 'react'
import styles from '../styles/PoemCardd.module.css'
import { IoBookmarkOutline } from 'react-icons/io5'

import TextTruncate from 'react-text-truncate'
export default function PoemCard({ poem }) {
    return (
        <div className={styles.card}>
            <div className={styles.cardBody}>
                <h3><a href='/poems/id'>Poem Title</a></h3>
                <TextTruncate
                    line={5}
                    element='p'
                    textTruncateChild={<a href="/poems/:id">Read More</a>}
                    text={`Phone phon Leave It alone Go \n for a walk Leave It at home Go  overseas And dont even roam Sometimes \n we all need A cell \n free zone`} />
            </div>
            <div className={styles.cardFooter}>
                <span><a href='/authors/1'>Authors NAme</a></span>
                <div>
                    <button className='like'><IoBookmarkOutline/></button>
                    <span>0 views</span>
                </div>

            </div>

        </div>

    )
}
