import { useEffect, useState } from 'react';
import PostCard from '../components/allPosts/postCard';
import CoolSpinner from '../components/spinner';
import { useSearchParams } from 'react-router-dom';

const link = 'https://blog-api-production-530e.up.railway.app/api'

function Posts() {
  const [posts, setPosts] = useState(null)
  const [loading, setLoading] = useState(true)
  const [fetchError, setFetchError] = useState(null)
  const [filteredPosts, setFilteredPosts] = useState(null)
  const [searchParams] = useSearchParams(); 
  const searchTerm = searchParams.get("search") || "";
  const tag = searchParams.get("tag") || "";

  // get all posts
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

  // filter posts
  useEffect(() => {
    if(!loading){
      const filtered = posts.filter((post) => {
        const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesTag = tag ? post.tags.includes(tag) : true; // Match tag if provided
        return matchesSearch && matchesTag;
      });
      setFilteredPosts(filtered);
    }
  }, [searchTerm, tag, posts]);

  if (loading) return <CoolSpinner />;
  if (fetchError) return <p>A network error was encountered</p>;
  if (!loading) {
    if(filteredPosts) {
      return (
        <>
        <div>
          <h1>Posts:</h1>
          <div className='flex-row-container'>
            {filteredPosts.map((post, index) => {
              return <PostCard key={index} post={post} />
            })}
          </div>
        </div>
      </>
      )
    }
    return (
      <>
        <div>
          <h1>Posts:</h1>
          <div className='flex-row-container'>
            {posts.map((post, index) => {
              return <PostCard key={index} post={post} />
            })}
          </div>
        </div>
      </>
    )
  }
}

export default Posts
