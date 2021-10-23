import _ from "lodash";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import FlipMove from "react-flip-move";
import scoresData from "../../data/scores.json";
import CategoryFilter from "../shared/CategoryFilter";
import ScorePost from "./ScorePost";

function ScoresContainer() {
  const [filter, setFilter] = React.useState("All");

  const filteredWorks = () =>
    filter === "All" ? scoresData : _.filter(scoresData, ["category", filter]);

  return (
    <>
      <Container>
        <CategoryFilter filter={filter} setFilter={setFilter} />
        <Row>
          <FlipMove typeName={null}>
            {!_.isEmpty(scoresData) ? (
              filteredWorks().map((data) => (
                <Col key={data.title} xl={3} lg={4} md={6} sm={12}>
                  <ScorePost
                    id={data.id}
                    title={data.title}
                    category={data.category}
                    date={data.date}
                  />
                </Col>
              ))
            ) : (
              <></>
            )}
          </FlipMove>
        </Row>
      </Container>
    </>
  );
}

export default ScoresContainer;
