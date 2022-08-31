import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap/";
import Login from "./Login";


function Navbar() {
  return (
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
  );
}

export default Navbar;
