import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logoImage from "../../assets/images/logo.png";

function Header() {
  return (
    <header className="navigation">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <nav className="navbar navbar-expand-lg">
              <Container fluid>
                <div className="navbar-header">
                  <Navbar.Brand href="/">
                    <img src={logoImage} alt="Logo" />
                  </Navbar.Brand>
                </div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <ul className="nav navbar-nav ms-auto">
                    <li>
                      <Nav.Link href="/">Home</Nav.Link>
                    </li>
                    <li>
                      <Nav.Link href="/about">About</Nav.Link>
                    </li>
                    <li>
                      <Nav.Link href="/film-music">Film Music</Nav.Link>
                    </li>
                    <li>
                      <Nav.Link href="/works">Works</Nav.Link>
                    </li>
                    <li>
                      <NavDropdown title="Scores">
                        <NavDropdown.Item href="/scores#original">
                          Original Compositions
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/scores#arrangements">
                          Arrangements
                        </NavDropdown.Item>
                      </NavDropdown>
                    </li>
                    <li>
                      <Nav.Link href="/contact">Contact</Nav.Link>
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
