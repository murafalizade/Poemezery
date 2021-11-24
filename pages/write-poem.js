import { getSession } from 'next-auth/client'
import React, { useState } from 'react'
import Editor from '../components/editor'
import PrePublish from '../components/prepublish'
import axios from 'axios'
export default function WritePoem({profile}) {
    const [open, setOpen] = useState(false)
    return (
        <div>
            <button onClick={()=>setOpen(true)} style={{ position: 'relative', left: '70%' }} className='btn btn-outline-success rounded '>Publish</button>
            {open ? <PrePublish profileInfo = {profile}/> : null}
            <div>
                <Editor />
            </div>
        </div>
    )
}
export const getServerSideProps = async (ctx) =>{
    const session = await  getSession(ctx);
    const myProfile = await axios.get(`http://localhost:8080/api/v1/my-profile/`,{headers:{'Header-Token':session?.accessToken}});
    return {
        props:{
            profile:myProfile.data
        }
    }



}