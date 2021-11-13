import React from 'react'
import styles from '../styles/PoemCardd.module.css'
import { IoBookmarkOutline } from 'react-icons/io5'

import TextTruncate from 'react-text-truncate'
export default function PoemCard({ poem }) {
    return (
        <div className={styles.card}>
            <div className={styles.cardBody}>
                <h3><a href={`/poems/${poem.id}`}>{poem.title}</a></h3>
                <TextTruncate
                    line={5}
                    element='p'
                    textTruncateChild={<a href={`/poems/${poem.id}`}>Read More</a>}
                    text={poem.poet} />
            </div>
            <div className={styles.cardFooter}>
                <span><a href={`/authors/${poem.ownId}`}>{poem.author}</a></span>
                <div>
                    <button className='like'><IoBookmarkOutline /></button>
                    <span>{poem.views} views</span>
                </div>
            </div>
        </div>

    )
}
