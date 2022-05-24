import { getSession } from 'next-auth/client'
import React, { useState,useEffect } from 'react'
import Editor from '../components/editor'
import PrePublish from '../components/prepublish'
import axios from 'axios'
export default function WritePoem({profile,poem}) {
    console.log(poem)
    const [open, setOpen] = useState(false)
    return (
        <div>
            <button onClick={()=>setOpen(true)} style={{ position: 'relative', left: '70%' }} className='btn btn-outline-success rounded '>{poem?'Update':'Publish'}</button>
            {open ? <PrePublish value={poem} profileInfo = {profile}/> : null}
            <div>
                <Editor updateValue={poem.poet}/>
            </div>
        </div>
    )
}



export const getServerSideProps = async (ctx) =>{
    const session = await  getSession(ctx);
    let poem;
    if(ctx.query.poemid){
        poem = await axios.get(`http://localhost:8080/api/v1/my-poems/${ctx.query.poemid}`,{headers:{'Header-Token':session?.accessToken}});
    }
    const myProfile = await axios.get(`http://localhost:8080/api/v1/my-profile/`,{headers:{'Header-Token':session?.accessToken}});
    return {
        props:{
            profile:myProfile.data,
            poem:ctx.query.poemid?poem.data:""
        }
    }
}
