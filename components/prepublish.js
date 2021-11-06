import React, { useState } from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import styles from '../styles/prepublish.module.css'
export default function PrePublish() {
    const [align, setAlign] = useState('center')
    const [imageUrl, setImageUrl] = useState('')
    return (
        <div className={styles.modal}>
            <div className='container'>
                <Row>
                    <Col md={6}>
                        <div style={{ textAlign: align }} className={styles.preview}>
                            sadsad<br />
                            asddasdasd<br />
                            asdadasddassd<br />
                        </div>
                        <input type='file' placeholder='Choose background image' />
                        <select onChange={(e) => setAlign(e.target.value)} value='center'>
                            <option value='right'>Right</option>
                            <option value='center'>Center</option>
                            <option value='left'>Left</option>
                        </select>
                        <input type='file' value={imageUrl} onChange={(e)=>setImageUrl(e.target.files[0])} placeholder='Choose background image' />
                    </Col>

                    <Col md={6}>
                        <Form>
                            <input placeholder='Title of Peom' />
                            <select>
                                <option value='azerbaijan'>Azerbaijan</option>
                                <option value='Turkey'>Turkey</option>
                                <option value='English'>English</option>
                                <option value='Espanish'>Espanish</option>
                                <option value='Russian'>Russian</option>
                            </select>
                            <label>
                                <input type='checkbox' />
                                I am not author of the poem
                            </label>
                            <input value='Murad Aliyev' placeholder='Author of the peom' disabled />
                            <input />
                        </Form>
                    </Col>
                </Row>
                <a href='/write-poem'>Cancel</a>
                <button>Publish</button>
            </div>
        </div>
    )
}
