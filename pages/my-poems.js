import React, { useState } from 'react'
import { getSession } from 'next-auth/client';
import axios from 'axios'
import Link from 'next/dist/client/link';
import { Container, Tabs, Tab } from 'react-bootstrap'
import styles from '../styles/my-peom.module.css'
import ReactHtmlParser from 'react-html-parser';
export default function Mypoems({ poems, drafts,session }) {
    const delPoem = async (id) => {
        const operation = await axios.delete(`http://localhost:8080/api/v1/my-poem/${id}`, { headers: { 'Header-Token': session?.accessToken } })
        if (operation !== 'Success') {
            alert('Something went wrong!')
        }
        else {
            window.location.reload();
        }
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
                        {poems===[]?poems.map(poem => (
                            <li key={poem.id}>
                                <div className='mt-5'>
                                    <h5>{poem.title}</h5>
                                    <p>{ReactHtmlParser(poem.poetHTML)}</p>
                                    <Link href={`/write-poem?poemid=${poem.id}`}><a className='btn btn-outline-warning mx-3'>Edit</a></Link>
                                    <button onClick={() => delPoem(poem.id)} className='btn btn-outline-warning mx-3'>Delete</button>
                                </div>
                            </li>
                        )):<h3 className='mt-5 text-center'>Poems have not exist, let's write a new one</h3>}

                    </ul>
                </Tab>
                <Tab title='Drafts' eventKey={'Drafts'}>
                    <ul>
                        {drafts === [] ? drafts.map((dft) => (<li key={dft.id}>
                            <div className='mt-5'>
                                <h5>{dft.title}</h5>
                                <p>{ReactHtmlParser(dft.poetHTML)}</p>
                                <Link href={`/write-poem?poemid=${dft.id}`}><a className='btn btn-outline-warning mx-3'>Edit</a></Link>
                                <button onClick={() => delPoem(dft.id)} className='btn btn-outline-warning mx-3'>Delete</button>
                            </div>
                        </li>)) : <h3 className='mt-5 text-center'>Drafts have not exist</h3>}

                    </ul>

                </Tab>
            </Tabs>
        </Container>
    )
}
export const getServerSideProps = async (ctx) => {
    const session = await getSession(ctx);
    const myProfile = await axios.get(`http://localhost:8080/api/v1/my-profile/`, { headers: { 'Header-Token': session?.accessToken } });
    console.log(myProfile)
    const poems = myProfile.data.poems;
    const drafts = myProfile.data?.drafts;
    return {
        props: {
            poems,
            drafts,
            session
        }
    }
}