import React, { useState } from 'react'
import Editor from '../components/editor'
import PrePublish from '../components/prepublish'


export default function WritePoem() {
    const [open, setOpen] = useState(false)
    return (
        <div>
            <button onClick={()=>setOpen(true)} style={{ position: 'relative', left: '70%' }} className='btn btn-outline-success rounded '>Publish</button>
            {open ? <PrePublish /> : null}
            <div>
                <Editor />
            </div>
        </div>
    )
}
