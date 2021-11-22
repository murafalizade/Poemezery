import React, { useEffect, useState } from 'react'
import styles from '../styles/PoemCardd.module.css'
import { IoBookmarkOutline,IoBookmark } from 'react-icons/io5'
import TextTruncate from 'react-text-truncate'
import { useRouter } from 'next/dist/client/router'
import axios from 'axios'
import { useSession } from 'next-auth/client'
export default function PoemCard({ poem, session }) {
    const router = useRouter();
    const [data] = useSession();
    console.log(data)
    const [auth, setAuth] = useState(false);
    useEffect(() => {
        const getUserInfo = async () => {
            if (session) {
                const auth = session.bookMarks.some((poet) => poet.id === poem.id)
                setAuth(auth);
            }

        }
        getUserInfo();

    }, [session])
    const addBookmark = async () => {
        if (!session) return router.push('/sign-in');
        const confug = { headers: { 'Header-Token': data.accessToken } }
        const datas = await axios.post(`http://localhost:8080/api/v1/poem/${poem.id}/addbookmark`,{name:'a'}, confug);
        if (datas.status != '200') {
            console.log(datas)
            return router.push('/');
        }
        setAuth(true);
    }
    const removeBookmark = async () => {
        if (!session) return router.push('/sign-in');
        const datas = await axios.post(`http://localhost:8080/api/v1/poem/${poem.id}/removebookmark`,{name:'a'} ,{
            headers: {
                'Header-Token': data.accessToken
            }
        });
        if (datas.status != '200') {
            console.log(data)
            return router.push('/');
        }
        setAuth(false);
    }
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
                    {

                        auth ? <button onClick={() => removeBookmark()} className='like'><IoBookmark /></button>
                            : <button onClick={() => addBookmark()} className='like'><IoBookmarkOutline /></button>
                    }
                    <span>{poem.views} views</span>
                </div>
            </div>
        </div>

    )
}
