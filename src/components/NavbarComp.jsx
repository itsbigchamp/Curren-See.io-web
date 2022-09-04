import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap/";
import { Nav } from "react-bootstrap/";
import Login from "./Login";


function NavbarComp() {
  return (
    <Navbar bg="light">
        <Nav activeKey="/Landing">
          <Nav.Item>
            <Nav.Link as={Link} to="/">
              Landing
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/Profile">
              Profile
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/Community">
              Community
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Login />
          </Nav.Item>
        </Nav>
        </Navbar>
  );
}

export default NavbarComp;
