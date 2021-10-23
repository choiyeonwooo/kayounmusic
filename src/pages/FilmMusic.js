import Portfolio from "../components/filmmusic/Portfolio";
import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";
import TopBanner from "../components/shared/TopBanner";

function FilmMusic() {
  return (
    <>
      <Header />
      <TopBanner
        title="Film Music"
        subtitle="Music for various films ranging from original short films to video game cues"
      />
      <Portfolio />
      <Footer />
    </>
  );
}

export default FilmMusic;
