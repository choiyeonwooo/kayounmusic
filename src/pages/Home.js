import AboutBanner from "../components/AboutBanner";
import Slider from "../components/home/Slider";
import ParallaxBanner from "../components/ParallaxBanner";
import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";

function Home() {
  return (
    <>
      <Header />
      <Slider />
      <AboutBanner />
      <ParallaxBanner />
      <Footer />
    </>
  );
}

export default Home;
