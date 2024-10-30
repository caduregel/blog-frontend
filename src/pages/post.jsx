import '../App.css'
import '../globals.css'
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { Badge, Button } from 'react-bootstrap';
import CoolSpinner from '../components/spinner';
import NewComment from '../components/newCommenent';

const link = 'https://blog-api-production-530e.up.railway.app/api'

function Post() {
    const [post, setPost] = useState(null)
    const [loading, setLoading] = useState(true)
    const [fetchError, setFetchError] = useState(null)
    const [showNewComment, setShowNewComment] = useState(false);
    const handleClose = () => setShowNewComment(false);
    const handleShow = () => setShowNewComment(true);

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
    if (loading) return <CoolSpinner />;
    if (fetchError) return <p>A network error was encountered</p>;
    if (!loading) {
        return (
            <>
                <div>
                    <h1> {post.title}</h1>
                    <div className='tags'>
                        {post.tags.map((tag, index) => {
                            return (
                                <div className='tag'   key={index}>
                                    <Badge bg="primary">{tag}</Badge>
                                </div>
                            )
                        })}
                    </div>
                    <p>{post.content}</p>
                    <a href="/">Go back</a>
                    <h2 className='top-bottom-margin-12'>{post.comments.length} Comments</h2>
                    <div className="d-grid gap-2 top-bottom-margin-16">
                        <Button variant="light" size="lg" onClick={handleShow}>
                            Add comment   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-left" viewBox="0 0 16 16">
                                <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                            </svg>
                        </Button>
                    </div>
                    {post.comments.map((comment, index) => {
                        return (
                            <div key={index} className='comment top-bottom-margin-12'>
                                <p>From: <strong>{comment.user}</strong> </p>
                                <p><em>{comment.message}</em></p>
                            </div>
                        )
                    })}
                    <NewComment show={showNewComment} handleClose={handleClose} postId={post._id}/>
                </div>
            </>
        )
    }
}

export default Post
