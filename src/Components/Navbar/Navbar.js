import {
  Navbar,
  Container,
  NavDropdown,
  Nav,
  FormControl,
  Form,
  Button,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Navig() {
  return (
    <Navbar bg="light" expand="lg" className="nav">
      <Container fluid>
        <Navbar.Brand href="#">Squid game</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">VIP</Nav.Link>
            <Nav.Link href="#action2">Player</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Try NOW</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">contribute</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Go KILL
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="KILL OR BE KILLED"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Y/N</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navig;
