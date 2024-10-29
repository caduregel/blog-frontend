import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function PostCard({ post }) {
  console.log(post)
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>{post.title}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{post.content}</Card.Subtitle>
      <Card.Link href={"/"+post._id}>View post</Card.Link>
    </Card.Body>
  </Card>
  );
}

export default PostCard;