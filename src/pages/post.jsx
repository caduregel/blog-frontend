import '../App.css'
import '../globals.css'
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';

const link = 'https://blog-api-production-530e.up.railway.app/api'

function Post() {
    const [post, setPost] = useState(null)
    const [loading, setLoading] = useState(true)
    const [fetchError, setFetchError] = useState(null)

    const { postId } = useParams();

    useEffect(() => {
        fetch(link + '/posts/' + postId, {})
            .then(
                (response) => {
                    if (response.status >= 400) {
                        throw new Error("server error");
                    }
                    return response.json();
                }
            ).then((response) => {
                setPost(response)
            }).catch((error) => setFetchError(error))
            .finally(() => setLoading(false));
    }, [])
    
    console.log(postId)
    if (loading) return <p>Loading...</p>;
    if (fetchError) return <p>A network error was encountered</p>;
    if (!loading) {
        return (
            <>
                {post.title}
            </>
        )
    }
}

export default Post
