import React from 'react'
import { BsHeart } from 'react-icons/bs';
import Image from 'next/image'
import { IoBookmarkOutline } from 'react-icons/io5'
import Head from 'next/head'

import styles from '../../styles/poems.module.css'
export default function Poems() {
    return (
        <div style={{ textAlign: 'center' }}>
            <Head>
                <title>"Poem title" - Social Network for poem</title>

            </Head>
            <h3>Poem title</h3>
            <p>Phone phon Leave It alone Go <br />
                for a walk Leave It at home Go <br />
                overseas And dont even roam Sometimes <br />
                we all need A cell <br /> free zone"</p>
            <div className={styles.authorBox}>
                <div>
                    <Image src='/default_avatar.png' width='50px' height='50px' alt='avatar_image' />
                    <span  className={styles.info}><a href='/authors'>Authors NAme</a><br />
                        <small>12.02.2021</small></span>
                </div>

                <div  className={styles.shares}>
                    <button className='like'><BsHeart fill={"currentColor"} /> <span>0</span></button>
                    <span><a href='/#' ><IoBookmarkOutline size={'30px'} /></a></span>
                    <span><a href='/#'>Share</a></span>
                </div>
            </div>
        </div>
    )
}
