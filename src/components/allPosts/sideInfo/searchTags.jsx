import Form from 'react-bootstrap/Form';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';

function SearchBox() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload
    // Navigate to the posts page with search parameter
    navigate(`/posts?search=${encodeURIComponent(searchTerm)}`);
};

    return (
        <Form className="d-flex" onSubmit={handleSubmit}>
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange={(e) => setSearchTerm(e.target.value)} // Update search term
        />
        <Button variant="outline-success" type='submit'>Search</Button>
        </Form>
        
    );
  }
  export default SearchBox;