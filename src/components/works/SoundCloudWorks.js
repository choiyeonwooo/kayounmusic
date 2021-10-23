import _ from "lodash";
import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import FlipMove from "react-flip-move";
import worksData from "../../data/works.json";
import SoundCloudEmbed from "./SoundCloudEmbed";

function SoundCloudWorks() {
  const [filter, setFilter] = React.useState("All");

  const filteredWorks = () =>
    filter === "All" ? worksData : _.filter(worksData, ["category", filter]);

  return (
    <>
      <Container>
        <div className="sound-cloud-works-filter-wrapper">
          <Button
            variant={`${filter === "All" ? "secondary" : "outline-secondary"}`}
            onClick={() => setFilter("All")}
          >
            All
          </Button>
          <Button
            variant={`${filter === "Orchestral" ? "secondary" : "outline-secondary"}`}
            onClick={() => setFilter("Orchestral")}
          >
            Orchestral
          </Button>
          <Button
            variant={`${filter === "World" ? "secondary" : "outline-secondary"}`}
            onClick={() => setFilter("World")}
          >
            World
          </Button>
          <Button
            variant={`${filter === "Chamber" ? "secondary" : "outline-secondary"}`}
            onClick={() => setFilter("Chamber")}
          >
            Chamber
          </Button>
          <Button
            variant={`${filter === "Solo" ? "secondary" : "outline-secondary"}`}
            onClick={() => setFilter("Solo")}
          >
            Solo
          </Button>
        </div>
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

export default SoundCloudWorks;
