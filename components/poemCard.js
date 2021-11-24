import React, { useEffect, useState } from 'react'
import styles from '../styles/PoemCardd.module.css'
import { IoBookmarkOutline, IoBookmark } from 'react-icons/io5'
import TextTruncate from 'react-text-truncate'
import { useRouter } from 'next/dist/client/router'
import axios from 'axios'
import { useSession } from 'next-auth/client'
export default function PoemCard({ poem }) {
    const router = useRouter();
    const [session, loading] = useSession();
    const [auth, setAuth] = useState(false);
    useEffect(() => {
        const bookProof = poem.bookUser.some((bk)=>bk.penName =session?.user.name);
        setAuth(bookProof);        
    }, [session])
    const addBookmark = async () => {
        if (!session) return router.push('/sign-in');
        const confug = { headers: { 'Header-Token': session?.accessToken } }
        const datas = await axios.put(`http://localhost:8080/api/v1/poem/${poem.id}/addbookmark`, { name: 'a' }, confug);
        if (datas.status != '200') {
            console.log(datas)
            return router.push('/');
        }
        if(datas.data==='ADD'){   
            setAuth(true);
        }
        else{
            setAuth(false);
        }    }
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
                <span><a href={`/authors/${poem.ownId}`}>{poem.owner}</a></span>
                <div>
                    {

                        auth ? <button onClick={() => addBookmark()} className='like'><IoBookmark /></button>
                            : <button onClick={() => addBookmark()} className='like'><IoBookmarkOutline /></button>
                    }
                    <span>{poem.views} views</span>
                </div>
            </div>
        </div>

    )
}
