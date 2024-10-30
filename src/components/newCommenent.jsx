import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useState } from 'react';

// link
const link = 'https://blog-api-production-530e.up.railway.app/api/comments/'
// Headers (if needed)
const headers = {
    'Content-Type': 'application/json',
};

// Helper function to determine whether a user wants to remain anonymous
const checkUserAnon = (user) => {
    if (user == '') {
        return "Anonymous"
    } else {
        return user
    }
}

function NewComment({ show, handleClose, postId }) {
    const [formUser, setFormUser] = useState('')
    const [formMessage, setFormMessage] = useState('')


    const postComment = () => {
        const newComment = {
            user: checkUserAnon(formUser),
            message: formMessage
        }
        console.log('firing?')
        axios.post(link + postId + '/new-comment', newComment, { headers })
    }

    const handleUserChange = (event) => {

        setFormUser(event.target.value);
    };
    const handleMessageChange = (event) => {
        // Updating the state 'inputValue' with the current value of the input field
        // event.target.value contains the current value of the input field
        setFormMessage(event.target.value);
    };


    return (
        <div >
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create a new comment!</Modal.Title>
                </Modal.Header>
                <div className='new-comment-form'>
                    <Form>
                        <Form.Group className="mb-3" onChange={handleUserChange}>
                            <Form.Label>User (leave empty to remain anonymous): </Form.Label>
                            <Form.Control placeholder="What would you like to be called?" />
                        </Form.Group>
                        <Form.Group className="mb-3" onChange={handleMessageChange}>
                            <Form.Label>Message</Form.Label>
                            <Form.Control placeholder="Send a message to the world! (or just this post)" />
                        </Form.Group>
                    </Form>
                </div>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancle
                    </Button>
                    <Button variant="primary" onClick={() => { handleClose(); postComment(); }}>
                        Post comment
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default NewComment;