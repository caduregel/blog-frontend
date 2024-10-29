import { useEffect, useState } from 'react';
import PostCard from '../components/allPosts/postCard';

const link = 'https://blog-api-production-530e.up.railway.app/api'

function Posts() {
  const [posts, setPosts] = useState(null)
  const [loading, setLoading] = useState(true)
  const [fetchError, setFetchError] = useState(null)

  useEffect(() => {
    fetch(link + '/posts', {})
      .then(
        (response) => {
          if (response.status >= 400) {
            throw new Error("server error");
          }
          return response.json();
        }
      ).then((response) => {
        setPosts(response)
      }).catch((error) => setFetchError(error))
      .finally(() => setLoading(false));
  }, [])
  if (loading) return <p>Loading...</p>;
  if (fetchError) return <p>A network error was encountered</p>;
  if (!loading) {
    return (
      <>
        <h1>All posts:</h1>
        <div className='flex-row-container'>

          {posts.map((post, index) => {
            return <PostCard key={index} post={post} />
          })}
        </div>
      </>
    )
  }
}

export default Posts
