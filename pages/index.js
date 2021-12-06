import axios from 'axios';
import PoemCard from '../components/poemCard';
import Link from 'next/link'
export default function Home({ poems, tags, authors }) {
  const famousAuthors = authors.sort((a, b) => a.followers?.length - b.followers?.length < 0 ? 1 : -1).slice(0, 4).map((x) => {
    return {
      id: x.id,
      penName: x.penName
    }
  });
  const famousTags = tags.sort((a,b)=>a.count-b.count<0?1:-1).slice(0,5);
  const allPoems = poems.reverse();
  console.log(famousTags)
  return (
    <div >
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 col-12'>
            <div className='row'>
              {!allPoems ? <div><p>No have any poems</p></div> : poems.map((poem, index) => (
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
                {famousAuthors.map((author, index) => (<li key={index}><Link href={`/authors/${author.id}`}>{author.penName}</Link></li>))}
              </ul>
            </div>
            <div>
              <p><b>Top tag of weeks</b></p>
              <div className='tags'>
                {famousTags.map((tag) => (
                  <Link key={tag._id} passHref={true} href={`/poems/poem?tag=${tag.name}`}><span>{tag.name}</span></Link>
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
  const authorsData = await axios.get('http://localhost:8080/api/v1/authors');

  return {
    props: {
      poems: poemsData.data,
      tags: tagsData.data,
      authors: authorsData.data
    }
  }
}