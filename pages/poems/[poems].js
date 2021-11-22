import React, { useEffect, useState } from 'react'
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import Image from 'next/image'
import { IoBookmarkOutline,IoBookmark } from 'react-icons/io5'
import Head from 'next/head'
import styles from '../../styles/poems.module.css'
import axios from 'axios';
import { useRouter } from 'next/dist/client/router'
import { useSession } from 'next-auth/client';
export default function Poems({ poem }) {
    const [session, loading] = useSession();
    const [liked, setLiked] = useState(false);
    const router = useRouter();
    const [bk, setBk] = useState(false);
    const [likeCount, setLikedCount] = useState(poem.likes);
    useEffect(()=>{
        console.log(poem.likes)
        const flwProof = poem.likes.some((like)=>like.members?.some(member=>member.name===session?.user.name))
        console.log(flwProof)

    },[session])
    const addBookmark = async () => {
        if (!session) return router.push('/sign-in');
        const confug = { headers: { 'Header-Token': session.accessToken } }
        const datas = await axios.post(`http://localhost:8080/api/v1/poem/${poem.id}/addbookmark`,{name:'a'}, confug);
        if (datas.status != '200') {
            console.log(datas)
            return router.push('/');
        }
        setBk(true);
    }

    const removeBookmark = async () => {
        if (!session) return router.push('/sign-in');
        const datas = await axios.post(`http://localhost:8080/api/v1/poem/${poem.id}/removebookmark`,{name:'a'} ,{
            headers: {
                'Header-Token': session.accessToken
            }
        });
        if (datas.status != '200') {
            console.log(datas)
            return router.push('/');
        }
        setBk(false);
    }

    const likePost = async () => {
        if (!session) return router.push('/sign-in');
        const datas = await axios.put(`http://localhost:8080/api/v1/poem/${poem.id}/like`,{name:'a'} ,{
            headers: {
                'Header-Token': session.accessToken
            }
        });
        if (datas.status != '200') {
            console.log(datas)
            return router.push('/');
        }
            setLiked(true);
            setLikedCount(likeCount + 1)
    }
    const removeLikePost = () => {
        if (session) {
            setLiked(false);
            setLikedCount(likeCount !== 0 ? likeCount - 1 : likeCount)
        }
    }
    return (
        <div style={{ textAlign: poem.align, backgroundImage: `url(${poem.backgroundImg ? poem.backgroundImg : '#'})`, padding: '20px' }}>
            <Head>
                <title>"{poem.title}" - Social Network for poem</title>
            </Head>
            <h3>{poem.title}</h3>
            <p>{poem.poet}</p>
            <div className={styles.authorBox}>
                <div>
                    <Image src='/default_avatar.png' width='50px' height='50px' alt='avatar_image' />
                    <span className={styles.info}><a href={`/authors/${poem.ownId}`}>{poem.author}</a><br />
                        <small>12.02.2021</small></span>
                </div>

                <div className={styles.shares}>
                    <button className='like'>{liked ? <BsHeartFill size={'25px'} onClick={() => removeLikePost()} /> : <BsHeart size={'25px'} onClick={() => likePost()} />} <span>{likeCount}</span></button>
                    <span>{bk?<IoBookmark onClick={()=>removeBookmark()} size={'25px'}/>:<IoBookmarkOutline onClick={()=>addBookmark()} size={'25px'} />}</span>
                    <span><a href='/#'>Share</a></span>
                </div>
            </div>
        </div>
    )
}
export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const res = await axios.get('http://localhost:8080/api/v1/poems')
    const poems = res.data;

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
    const poem = res.data;
    // Pass post data to the page via props
    return { props: { poem }, revalidate: 30 }
}
