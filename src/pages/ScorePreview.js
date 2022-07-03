import React from "react";
import { useParams } from "react-router-dom";
import ScorePreviewContainer from "../components/scores/ScorePreviewContainer";
import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";
import TopBanner from "../components/shared/TopBanner";

function ScorePreview() {
  const { id } = useParams();

  return (
    <>
      <Header />
      <TopBanner
        title="Scores"
        subtitle="Original sheet music and scores for a variety of genres"
      />
      <ScorePreviewContainer id={id} />
      <Footer />
    </>
  );
}

export default ScorePreview;
