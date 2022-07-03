import { Container, Nav, Navbar } from "react-bootstrap";

function Header() {
  return (
    <header className="navigation">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Navbar collapseOnSelect expand="md" className="navbar navbar-expand-lg">
              <Container fluid>
                <div className="navbar-header">
                  <Navbar.Brand className="brand" href="/">
                    <span className="brandHighlight">Kayoun</span>{" "}
                    <span className="brandText">Yoo</span>
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
                      <Nav.Link href="/media">Media</Nav.Link>
                    </li>
                    <li>
                      <Nav.Link href="/works">Works</Nav.Link>
                    </li>
                    <li>
                      <Nav.Link href="/scores">Scores</Nav.Link>
                    </li>
                    <li>
                      <Nav.Link href="/cj">CJ 장학금 포트폴리오</Nav.Link>
                    </li>
                    <li>
                      <Nav.Link href="/contact">Contact</Nav.Link>
                    </li>
                    <li>
                      <Nav.Link
                        href="/resume/Ka_Youn_Yoo_Resume.pdf"
                        target="_blank"
                        className="btn btn-small navbar-highlight-button"
                      >
                        <i className="ion-android-open" /> View Résumé
                      </Nav.Link>
                    </li>
                  </ul>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
