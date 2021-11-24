import React, { useState, useEffect } from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import styles from '../styles/prepublish.module.css'
import TagInput from './tagInput'
import { useSelector } from 'react-redux'
import axios from 'axios';
import {useSession} from 'next-auth/client'
import { useRouter } from 'next/dist/client/router'
import ReactHtmlParser from 'react-html-parser';
export default function PrePublish({ profileInfo }) {
    console.log(profileInfo)
    const [align, setAlign] = useState('center')
    const [imageUrl, setImageUrl] = useState('')
    const [preview, setPreview] = useState('')
    const [checkeds, setChekceds] = useState(false)
    const [title, setTitle] = useState('')
    const [language, setLanguage] = useState('')
    const [category, setCategory] = useState('')
    const [session] = useSession();
    const router = useRouter();
    const [author, setAuthor] = useState(profileInfo.penName);
    useEffect(() => {
        if (imageUrl) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setPreview(reader.result)
            }
            reader.readAsDataURL(imageUrl)
        }
    }, [imageUrl])
    const  poet = useSelector(state=>state.poem);
    const tags  = useSelector(state=>state.tags);
    useEffect(()=>{console.log(tags)},[tags])
    const sumbitHandeler = () => {
        axios.post(`http://localhost:8080/api/v1/create-poem`, {
            poet:poet.poet,
            poetHTML:poet.poetHTML,
            title,
            imgUrl:preview,
            align,
            author,
            category: category,
            language: language,
            tags
        }, { headers: { 'Header-Token': session?.accessToken } }).
        then(res=>{console.log(res.data);router.push('/my-poems')})
        .catch(err=>{console.log(err);router.push('/write-poem')})
    }


    return (
        <div>
            <div className={styles.overlay}></div>
            <div className={styles.modal}>
                <div className='container'>
                    <Row>
                        <Col md={6}>
                            <div style={{ textAlign: align, backgroundImage: `url(${preview})`, backgroundSize: 'cover' }} className={styles.preview}>
                                <p>{ReactHtmlParser(poet.poetHTML)}</p>
                            </div>
                            <select onChange={(e) => setAlign(e.target.value)} value='center'>
                                <option value='right'>Right</option>
                                <option value='center'>Center</option>
                                <option value='left'>Left</option>
                            </select>
                            <fieldset>
                                <label className={styles.customFile}>
                                    Add Music or Audio
                                    <input className={styles.fileInput} type='file' />
                                </label>
                                <label className={styles.customFile}>
                                    Add Image
                                    <input className={styles.fileInput} type='file' onChange={(e) => setImageUrl(e.target.files[0])} />
                                </label>
                            </fieldset>
                        </Col>

                        <Col md={6}>
                            <Form className={styles.infoForm}>
                                <h4>Information Poem</h4>
                                <fieldset style={{ marginLeft: '35px' }}>

                                    <input value={title} onChange={(e)=>setTitle(e.target.value)}  placeholder='Title of Peom' />
                                    <select value={language} onChange={(e)=>setLanguage(e.target.value)}>
                                        <option value='azerbaijan'>Azerbaijan</option>
                                        <option value='Turkey'>Turkey</option>
                                        <option value='English'>English</option>
                                        <option value='Espanish'>Espanish</option>
                                        <option value='Russian'>Russian</option>
                                    </select>
                                    <TagInput />
                                    <select value={category} onChange={(e)=>setCategory(e.target.value)} >
                                        <option value=''>Choose category</option>
                                        <option value='love'>love</option>
                                        <option value='happy'>happy</option>
                                        <option value='Sad'>Sad</option>
                                        <option value='Deppresive'>Deppresive</option>
                                        <option value='Neutral'>Neutral</option>
                                    </select>
                                    <input value={author} onChange={(e) => setAuthor(e.target.value)} placeholder='Author of the peom' disabled={!checkeds} />
                                    <label>
                                        <input type='checkbox' onChange={(e) => setChekceds(e.target.checked)} checked={checkeds} />
                                        I am not author of the poem
                                    </label>
                                </fieldset>
                            </Form>
                        </Col>
                    </Row>
                    <div className={styles.endOfModal}>
                        <a href='/write-poem'>Cancel</a>
                        <button onClick={()=>sumbitHandeler()} className='btn btn-outline-success rounded '>Publish</button>
                    </div>
                </div>
            </div>
        </div>

    )
}
