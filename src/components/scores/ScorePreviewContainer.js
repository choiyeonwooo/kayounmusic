import _ from "lodash";
import moment from "moment";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import config from "../../config";
import scoresData from "../../data/scores.json";
import ComponentLoader from "../shared/ComponentLoader";
import SoundCloudEmbed from "../works/SoundCloudEmbed";

function ScorePreviewContainer({ id }) {
  // let { loading, data, error } = useCachedFetch(
  //   `${config.API_ENDPOINT}/scores?id=${id}`,
  //   config.CACHE_TOGGLE
  // );

  let loading = false,
    data = _.find(scoresData, (data) => data.id === id);

  // if (error) {
  //   console.log(error);
  //   console.log("Loading static data as fallback...");
  //   data = _.find(scoresData, (data) => data.id === id);
  // }

  const hasPreview = !_.isEmpty(data.previewFile);
  const hasFullScore = !_.isEmpty(data.fullFile);

  const hasImg = !_.isEmpty(data.img);
  const fileUrl = `/scores/${hasPreview ? data.previewFile : hasFullScore ? data.fullFile : ""}`;

  return (
    <>
      <section className="page-wrapper">
        <Container>
          {loading || config.PRE_RENDERING ? (
            <ComponentLoader />
          ) : !_.isEmpty(data) ? (
            <Row>
              <Col>
                <div className="post post-single">
                  <h2 className="post-title">{data.title}</h2>
                  <div className="post-meta mb-4">
                    <ul>
                      <li>
                        <i className="ion-calendar"></i> {moment(data.date).format("MMM YYYY")}
                      </li>
                      <li>
                        <i className="ion-pricetags"></i> {data.category}
                      </li>
                      {data.rescore && (
                        <li>
                          <i className="fa fa-pencil"></i> Rescore
                        </li>
                      )}
                    </ul>
                  </div>
                  {!_.isEmpty(data.description) && (
                    <div className="post-content post-excerpt">
                      <p>{data.description}</p>
                    </div>
                  )}
                  <Row>
                    {!_.isEmpty(data.youtubeId) && (
                      <Col lg={6}>
                        <iframe
                          className="responsive-youtube"
                          title={data.title}
                          src={`https://www.youtube.com/embed/${data.youtubeId}`}
                          frameBorder="0"
                          allowFullScreen
                        ></iframe>
                      </Col>
                    )}
                    {!_.isEmpty(data.soundCloudUrl) && (
                      <Col lg={6}>
                        <SoundCloudEmbed
                          title={data.title}
                          url={data.soundCloudUrl}
                          height="200"
                          visual={false}
                        />
                      </Col>
                    )}
                  </Row>
                  {hasImg && (
                    <div className="mt-5">
                      <img className="img-fluid" src={data.img} alt={data.title} />
                    </div>
                  )}
                  <div className="post-buttons mt-4">
                    <a href={fileUrl} target="_blank" className="btn btn-success" rel="noreferrer">
                      <i className="fa fa-download" />{" "}
                      {hasPreview
                        ? "Download Preview (PDF)"
                        : hasFullScore
                        ? "Download Score (PDF)"
                        : ""}
                    </a>
                    {hasPreview && (
                      <Link to="/contact" className="btn btn-main">
                        Contact for full score
                      </Link>
                    )}
                  </div>
                </div>
              </Col>
            </Row>
          ) : (
            <Redirect to="/404" />
          )}
        </Container>
      </section>
    </>
  );
}

export default ScorePreviewContainer;
