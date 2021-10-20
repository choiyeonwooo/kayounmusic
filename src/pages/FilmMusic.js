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
        subtitle="Original compositions for various films ranging from short films to video game cutscenes"
      />
      <Portfolio />
      <Footer />
    </>
  );
}

export default FilmMusic;
