import React from 'react'
import { BsHeart } from 'react-icons/bs';
import Image from 'next/image'
import { IoBookmarkOutline } from 'react-icons/io5'
import Head from 'next/head'

import styles from '../../styles/poems.module.css'
import axios from 'axios';
export default function Poems({poem}) {
    return (
        <div style={{ textAlign: poem.align,backgroundImage:`url(${poem.backgroundImg?poem.backgroundImg:'#'})`,padding:'20px' }}>
            <Head>
                <title>"{poem.title}" - Social Network for poem</title>
            </Head>
            <h3>{poem.title}</h3>
            <p>{poem.poet}</p>
            <div className={styles.authorBox}>
                <div>
                    <Image src='/default_avatar.png' width='50px' height='50px' alt='avatar_image' />
                    <span  className={styles.info}><a href={`/authors/${poem.ownId}`}>{poem.author}</a><br />
                        <small>12.02.2021</small></span>
                </div>

                <div  className={styles.shares}>
                    <button className='like'><BsHeart fill={"currentColor"} /> <span>{poem.likes}</span></button>
                    <span><a href='/#' ><IoBookmarkOutline size={'30px'} /></a></span>
                    <span><a href='/#'>Share</a></span>
                </div>
            </div>
        </div>
    )
}
export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const res = await axios.get('http://localhost:8080/api/v1/poems')
    const poems =  res.data;
  
    // Get the paths we want to pre-render based on posts
    const paths = poems.map((poem) => ({
      params: { poems: poem.id.toString() },
    }))
  
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
  }
  
  // This also gets called at build time
  export async function getStaticProps({ params }) {
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    const res = await axios.get(`http://localhost:8080/api/v1/poems/${params.poems}`)
    const poem =  res.data;
  
    // Pass post data to the page via props
    return { props: { poem } }
  }
  