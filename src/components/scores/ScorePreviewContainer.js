import moment from "moment";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import scoreImg from "../../assets/images/score.jpg";

const ScorePreviewContainer = React.memo(
  ({ score }) =>
    score && (
      <>
        <section className="page-wrapper">
          <Container>
            <Row>
              <Col>
                <div className="post post-single">
                  <h2 className="post-title">{score.title}</h2>
                  <div className="post-meta">
                    <ul>
                      <li>
                        <i className="ion-calendar"></i> {moment(score.date).format("MMM YYYY")}
                      </li>
                      <li>
                        <i className="ion-pricetags"></i> {score.category}
                      </li>
                    </ul>
                  </div>
                  <div className="post-thumb">
                    <Image fluid src={scoreImg} alt="" rounded />
                  </div>
                  <div className="post-content post-excerpt">
                    <p>{score.description}</p>
                    <blockquote className="quote-post">
                      <p>
                        Lid est laborum dolo rumes fugats untras. Etharums ser quidem rerum facilis
                        dolores nemis omnis fugats vitaes nemo minima rerums unsers sadips amets..
                        Sed ut perspiciatis unde omnis iste natus error
                      </p>
                    </blockquote>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </>
    )
);

export default ScorePreviewContainer;
