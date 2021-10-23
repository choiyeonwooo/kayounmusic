import _ from "lodash";
import React from "react";
import { Redirect, useParams } from "react-router-dom";
import ScorePreviewContainer from "../components/scores/ScorePreviewContainer";
import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";
import Loader from "../components/shared/Loader";
import TopBanner from "../components/shared/TopBanner";
import scoresData from "../data/scores.json";

function ScorePreview() {
  const { id } = useParams();
  const [score, setScore] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const foundScore = _.find(scoresData, (data) => parseInt(data.id) === parseInt(id));
    setScore(foundScore);
    setLoading(false);
  }, [id]);

  return loading ? (
    <Loader />
  ) : !_.isEmpty(score) ? (
    <>
      <Header />
      <TopBanner
        title="Scores"
        subtitle="Original sheet music and scores for a variety of genres"
      />
      <ScorePreviewContainer score={score} />
      <Footer />
    </>
  ) : (
    <Redirect to="/404" />
  );
}

export default ScorePreview;
