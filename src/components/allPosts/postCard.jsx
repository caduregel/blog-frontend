import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function PostCard({ post }) {
  console.log(post)
  const content = truncateString(post.content, 40)
  return (
    <div className='card-container'>

    <Card style={{ width: '16rem', }} bg='light'>
    <Card.Body>
      <Card.Title>{post.title}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{content}</Card.Subtitle>
      <Card.Link href={"/posts/"+post._id}>View post</Card.Link>
    </Card.Body>
  </Card>
    </div>
  );
}

function truncateString(str, num) {
  if (str.length <= num) {
    return str
  }
  return str.slice(0, num) + '...'
}


export default PostCard;