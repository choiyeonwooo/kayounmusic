import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logoImage from "../assets/images/logo.png";

function Header() {
  return (
    <header class="navigation">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <nav className="navbar navbar-expand-lg">
              <Container fluid>
                <div className="navbar-header">
                  <Navbar.Brand href="#home">
                    <img src={logoImage} alt="Logo" />
                  </Navbar.Brand>
                </div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <ul class="nav navbar-nav ms-auto">
                    <li>
                      <Nav.Link href="#home">Home</Nav.Link>
                    </li>
                    <li>
                      <NavDropdown title="Portfolio">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                      </NavDropdown>
                    </li>
                    <li>
                      <Nav.Link href="#link">Service</Nav.Link>
                    </li>
                    <li>
                      <NavDropdown title="Blog">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                      </NavDropdown>
                    </li>
                    <li>
                      <NavDropdown title="Pages">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                      </NavDropdown>
                    </li>
                    <li>
                      <Nav.Link href="#link">Contact</Nav.Link>
                    </li>
                  </ul>
                </Navbar.Collapse>
              </Container>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
