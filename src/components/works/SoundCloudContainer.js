import _ from "lodash";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import FlipMove from "react-flip-move";
import worksData from "../../data/works.json";
import CategoryFilter from "../shared/CategoryFilter";
import SoundCloudEmbed from "./SoundCloudEmbed";

function SoundCloudContainer() {
  const [filter, setFilter] = React.useState("All");

  const filteredWorks = () =>
    filter === "All" ? worksData : _.filter(worksData, ["category", filter]);

  return (
    <>
      <Container>
        <CategoryFilter filter={filter} setFilter={setFilter} />
        <Row>
          <FlipMove typeName={null}>
            {!_.isEmpty(worksData) ? (
              filteredWorks().map((data) => (
                <Col key={data.title} xl={3} lg={4} md={6} sm={12}>
                  <SoundCloudEmbed title={data.title} url={data.url} />
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

export default SoundCloudContainer;
