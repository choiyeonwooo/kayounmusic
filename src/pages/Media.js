import MediaContainer from "../components/media/MediaContainer";
import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";
import TopBanner from "../components/shared/TopBanner";

function Media() {
  return (
    <>
      <Header />
      <TopBanner
        title="Media"
        subtitle="Music for various media ranging from original short films to video games"
      />
      <MediaContainer />
      <Footer />
    </>
  );
}

export default Media;
