import React, { useState, useEffect } from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import styles from '../styles/prepublish.module.css'
import TagInput from './tagInput'
export default function PrePublish({profileInfo}) {
    const [align, setAlign] = useState('center')
    const [imageUrl, setImageUrl] = useState('')
    const [preview, setPreview] = useState('')
    const [checkeds,setChekceds] = useState(false)
    useEffect(() => {
        if (imageUrl) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setPreview(reader.result)
            }
            reader.readAsDataURL(imageUrl)
        }
    }, [imageUrl])
    return (
        <div>
            <div className={styles.overlay}></div>
        <div className={styles.modal}>
            <div className='container'>
                <Row>
                    <Col md={6}>
                        <div style={{ textAlign: align, backgroundImage: `url(${preview})`, backgroundSize: 'cover' }} className={styles.preview}>
                            <p> sadsad<br />
                                asddasdasd<br />
                                asdadasddassd<br /></p>
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
                            <fieldset style={{marginLeft:'35px'}}>

                            <input placeholder='Title of Peom' />
                            <select>
                                <option value='azerbaijan'>Azerbaijan</option>
                                <option value='Turkey'>Turkey</option>
                                <option value='English'>English</option>
                                <option value='Espanish'>Espanish</option>
                                <option value='Russian'>Russian</option>
                            </select>
                            <TagInput />
                            <select >
                                <option value='£'>Choose category</option>
                                <option value='love'>love</option>
                                <option value='happy'>happy</option>
                                <option value='Sad'>Sad</option>
                                <option value='Deppresive'>Deppresive</option>
                                <option value='Neutral'>Neutral</option>
                            </select>
                            <input value={profileInfo.penName}  placeholder='Author of the peom' disabled={!checkeds} />
                            <label>
                                <input type='checkbox' onChange={(e)=>setChekceds(e.target.checked)} checked={checkeds}/>
                                I am not author of the poem
                            </label>
                            </fieldset>
                        </Form>
                    </Col>
                </Row>
                <div className={styles.endOfModal}>
                    <a href='/write-poem'>Cancel</a>
                    <button className='btn btn-outline-success rounded '>Publish</button>
                </div>
            </div>
        </div>
        </div>

    )
}
