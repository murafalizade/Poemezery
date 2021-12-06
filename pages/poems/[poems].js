import React, { useEffect, useState } from 'react'
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import Image from 'next/image'
import { IoBookmarkOutline, IoBookmark } from 'react-icons/io5'
import Head from 'next/head'
import styles from '../../styles/poems.module.css'
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser';
import { useRouter } from 'next/dist/client/router'
import { useSession } from 'next-auth/client';
import Link from 'next/dist/client/link';
export default function Poems({ poem }) {
    const [session] = useSession();
    const [liked, setLiked] = useState(false);
    const router = useRouter();
    const [bk, setBk] = useState(false);
    const [likeCount, setLikedCount] = useState(poem.likes?.length);
    useEffect(() => {
        console.log(session?.user.name,poem.likes)
        const flwProof = poem.likes?.some((like) => like.name === session?.user.name);
        const bookProof = poem.bookUser.some((bk) => bk.penName = session?.user.name);
        setLiked(flwProof);
        setBk(bookProof);

    }, [session])
    const addBookmark = async () => {
        if (!session) return router.push('/sign-in');
        const confug = { headers: { 'Header-Token': session.accessToken } }
        const datas = await axios.put(`http://localhost:8080/api/v1/poem/${poem.id}/addbookmark`, { name: 'a' }, confug);
        if (datas.status != '200') {
            console.log(datas)
            return router.push('/');
        }
        if (datas.data === 'ADD') {
            setBk(true);
            console.log('ADD')
        }
        else {
            setBk(false);
        }
    }



    const likePost = async () => {
        if (!session) return router.push('/sign-in');
        const datas = await axios.put(`http://localhost:8080/api/v1/poem/${poem.id}/like`, { name: 'a' }, {
            headers: {
                'Header-Token': session.accessToken
            }
        });
        if (datas.status != '200') {
            console.log(datas)
            return router.push('/');
        }
        if (datas.data === 'LIKE') {
            setLiked(true);
            setLikedCount(likeCount + 1)
        }
        else {
            setLiked(false);
            setLikedCount(likeCount !== 0 ? likeCount - 1 : likeCount)
        }
    }
    return (
        <div style={{ textAlign: poem.align, backgroundImage: `url(${poem.backgroundImg ? poem.backgroundImg : '#'})`, padding: '20px' }}>
            <Head>
                <title>&quot;{poem.title}&quot; - Social Network for poem</title>
            </Head>
            <h3>{poem.title}</h3>
            <span>{ReactHtmlParser(poem.poetHTML)}</span>
            <small><i>Author: {poem.author}</i></small>
            <div className={styles.authorBox}>
                <div>
                    <Image src='/default_avatar.png' width='50px' height='50px' alt='avatar_image' />
                    <span className={styles.info}><a href={`/authors/${poem.ownId}`}>{poem.owner}</a><br />
                        <small>12.02.2021</small></span>
                </div>

                <div className={styles.shares}>
                    <button className='like'>{liked ? <BsHeartFill size={'25px'} onClick={() => likePost()} /> : <BsHeart size={'25px'} onClick={() => likePost()} />} <span>{likeCount}</span></button>
                    <span>{bk ? <IoBookmark onClick={() => addBookmark()} size={'25px'} /> : <IoBookmarkOutline onClick={() => addBookmark()} size={'25px'} />}</span>
                    <span><Link href='/#'>Share</Link></span>
                </div>
            </div>
        </div>
    )
}
export async function getStaticPaths() {
    const res = await axios.get('http://localhost:8080/api/v1/poems')
    const poems = res.data;

    const paths = poems.map((poem) => ({
        params: { poems: poem.id.toString() },
    }))

    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const res = await axios.get(`http://localhost:8080/api/v1/poems/${params.poems}`)
    const poem = res.data;
    return { props: { poem }, revalidate: 30 }
}
