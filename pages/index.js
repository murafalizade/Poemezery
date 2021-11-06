import { useState } from 'react'
import PoemCard from '../components/poemCard';

export default function Home() {
  const [poems, setPoems] = useState([1, 2, 3, 34, 54]);
  const [feels] = useState([{ id: 1, color: 'red' }, { id: 2, color: 'green' }, { id: 3, color: 'blue' }, { id: 5, color: 'black' }, { id: 6, color: 'yellow' },
  { id: 8, color: 'light' }])
  return (
    <div >
      <div className='container'>
        <div className='row'>
          <div className='col-md-8'>
            <div className='row'>
              {!poems ? <div><p>No have any poems</p></div> : poems.map((poem, index) => (
                <div className='col-md-6 col-12' key={index}>
                  <PoemCard poem={poem} />
                </div>
              ))}
            </div>

          </div>
          <div className='col-md-4'>
            <div>
              <ul className='list-group'>
                <p>Famous poet</p>
                <li>Albert</li>
                <li>Albert</li>
                <li>Albert</li>
              </ul>
            </div>
            <div>
              <p>How you feel</p>
              <div className='boxs'>
                {feels.map(feel => (<div key={feel.id} style={`${feel.color}` === 'light' ? { color: 'black', backgroundColor: `${feel.color}` } : { color: 'white', backgroundColor: `${feel.color}` }} className='box'>{feel.color}</div>))}
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

