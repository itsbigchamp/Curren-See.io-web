import { Link } from "react-router-dom";
import { Navbar, NavItem } from "react-bootstrap/";
import { Nav } from "react-bootstrap/";
import Login from "./Login";
import SignUp from "./SignUp";
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
          <div>
            <Nav.Item>
              <Login />
            </Nav.Item>
          </div>
          <div>{' '}</div>
          <div>
            <Nav.Item>
              <SignUp />
            </Nav.Item>
          </div>
        </Nav>
      </div>
    </Navbar>
  );
}

export default NavbarComp;
