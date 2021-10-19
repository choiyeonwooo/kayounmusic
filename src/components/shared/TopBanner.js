import { Col, Container, Row } from "react-bootstrap";

function TopBanner({ title, subtitle }) {
  return (
    <section className="page-title">
      <Container>
        <Row>
          <Col md={12}>
            <div className="block">
              <h1>{title}</h1>
              <p>{subtitle}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default TopBanner;
