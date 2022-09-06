import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap/";
import { Nav } from "react-bootstrap/";
import Login from "./Login";
import "./NavbarComp.css";

function NavbarComp() {
  return (
    <Navbar bg="light">
      <div className="navbar-container">
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
    </div>
      </Navbar>
  );
}

export default NavbarComp;
