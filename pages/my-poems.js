import React, { useState } from 'react'

export default function Mypoems() {
    const [selected, setSSelected] = useState(false)
    return (
        <div>
            <h3>My Poems</h3>
            <button className='btn btn-outline-success btn-xl'>Write Poem</button>
            <ul>
                <li onClick={() => { setSSelected(true) }}>Drafts</li>
                <li onClick={() => { setSSelected(false) }}>Publictions</li>
            </ul>
            <ul>
                {selected ? (<div>
                    <ul>
                        <li>
                            <div>
                                <h5>Title peom</h5>
                                <p>Description</p>
                                <button>Edit</button>
                                <button>Delete</button>
                            </div>
                        </li>
                    </ul>
                </div>
                ) : (<div>
                    <ul>
                        <li>
                            <div>
                                <h5>Title peom</h5>
                                <p>Descriptiojiohign</p>
                                <button>Edit</button>
                                <button>Delete</button>
                            </div>
                        </li>
                    </ul>
                </div>

                )}
            </ul>
        </div>
    )
}
