import React from 'react'
import { BsHeart } from 'react-icons/bs';
import Image from 'next/image'
import styles from '../../styles/poems.module.css'
export default function Poems() {
    return (
        <div style={{textAlign:'center'}}>
            <h3>Poem title</h3>
            <p>Phone phon Leave It alone Go <br/> 
            for a walk Leave It at home Go <br /> 
            overseas And dont even roam Sometimes <br /> 
            we all need A cell <br/> free zone"</p>
            <div className={styles.authorBox}>
            <Image  src='/default_avatar.png' width='40px' height='40px' alt='avatar_image' />
                <span><a href='/authors'>Authors NAme</a></span>
                <div>
                    <button ><BsHeart fill={"currentColor"}/> <span>0</span></button>
                    <span>0 views</span>
                    <span><a href='/share'>Share</a></span>
                </div>
            </div>
        </div>
    )
}
