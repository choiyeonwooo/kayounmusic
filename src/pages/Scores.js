import ScoresContainer from "../components/scores/ScoresContainer";
import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";
import TopBanner from "../components/shared/TopBanner";

function Scores() {
  return (
    <>
      <Header />
      <TopBanner
        title="Scores"
        subtitle="Original sheet music and scores for a variety of genres"
      />
      <ScoresContainer />
      <Footer />
    </>
  );
}

export default Scores;
