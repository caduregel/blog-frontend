import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" sticky='top'>
      <Container fluid>
        <Navbar.Brand href="/"><img
          alt=""
          src="https://avatars.githubusercontent.com/u/53048335?s=400&u=7e3aee0f255c4b7a7454c52c59ae9108ec75dd96&v=4"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}/ Liam / blog</Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/posts">All Articles</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar;