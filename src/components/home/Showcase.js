import _ from "lodash";
import { Col, Container, Row } from "react-bootstrap";
import showcaseData from "../../data/showcase.json";
import PortfolioItem from "../filmmusic/PortfolioItem";

function Showcase() {
  return (
    <section className="section">
      <Container>
        <div className="d-flex justify-content-center align-items-center">
          <h3 className="section-title mb-4">Showcase</h3>
        </div>
        <Row>
          {!_.isEmpty(showcaseData) ? (
            showcaseData.map((data) => (
              <Col md={4} sm={12}>
                <PortfolioItem
                  key={data.youtubeId}
                  title={data.title}
                  description={data.description}
                  youtubeId={data.youtubeId}
                />
              </Col>
            ))
          ) : (
            <></>
          )}
        </Row>
      </Container>
    </section>
  );
}

export default Showcase;
