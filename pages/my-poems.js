import React, { useState } from 'react'
import { getSession } from 'next-auth/client';
import axios from 'axios'
import { Container, Tabs, Tab } from 'react-bootstrap'
import styles from '../styles/my-peom.module.css'
import ReactHtmlParser from 'react-html-parser';
export default function Mypoems({poems,session}) {
    const delPoem = async (id) =>{
         operation = await axios.delete(`http://localhost:8080/api/v1/my-poem/${id}`,{headers:{'Header-Token':session?.accessToken}})
         console.log(operation.data)
    }
    return (
        <Container>
            <div className={styles.head}>
                <h3>My Poems</h3>
                <a href='/write-poem' className='btn btn-outline-success btn-xl'>Write Poem</a>
            </div>
            <Tabs defaultActiveKey="Public">
                <Tab title='Publics' eventKey={'Public'}>
                        <ul>
                            {poems?.map(poem=>(
                                <li>
                                <div className='mt-5'>
                                    <h5>{poem.title}</h5>
                                    <p>{ReactHtmlParser(poem.poetHTML)}</p>
                                    <button className='btn btn-outline-warning mx-3'>Edit</button>
                                    <button onClick={()=>delPoem(poem.id)} className='btn btn-outline-warning mx-3'>Delete</button>
                                </div>
                            </li>
                            ))}
                            
                        </ul>
                </Tab>
                <Tab title='Drafts' eventKey={'Drafts'}>
                        <ul>
                            <li>
                                <div className='mt-5'>
                                    <h5>Title peom</h5>
                                    <p>Descriptiojiohign</p>
                                    <button className='btn btn-outline-warning mx-3'>Edit</button>
                                    <button className='btn btn-outline-warning mx-3'>Delete</button>
                                </div>
                            </li>
                        </ul>

                </Tab>
            </Tabs>
        </Container>
    )
}
export const getServerSideProps = async (ctx) => {
    const session = await getSession(ctx);
    const myProfile = await axios.get(`http://localhost:8080/api/v1/my-profile/`,{headers:{'Header-Token':session?.accessToken}});
    console.log(myProfile)
    const poems = myProfile.data.poems;
    return {
        props: {
            poems,
            session
        }
    }
}