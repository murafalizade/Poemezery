import axios from 'axios';
import PoemCard from '../components/poemCard';

export default function Home({ poems, tags, authors }) {
  return (
    <div >
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 col-12'>
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
                <p><b>Famous poet</b></p>
                {authors.map((author)=>(<li key={author.id}><a href={`/authors/${author.id}`}>{author.penName}</a></li>))}
              </ul>
            </div>
            <div>
              <p><b>Top tag of weeks</b></p>
              <div className='tags'>
                {tags.map((tag) => (
                  <a key={tag.id} href={`/query?q=${tag.id}`}><span>{tag.name}</span></a>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export const getServerSideProps = async () => {
  const poemsData = await axios.get('http://localhost:8080/api/v1/poems');
  const tagsData = await axios.get('http://localhost:8080/api/v1/tags');
  const authorsData = await axios.get('http://localhost:8080/api/v1/authors')
  return {
    props: {
      poems: poemsData.data,
      tags: tagsData.data,
      authors:authorsData.data
    }
  }
}