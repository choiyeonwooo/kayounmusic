import AboutBanner from "../components/AboutBanner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ParallaxBanner from "../components/ParallaxBanner";
import Slider from "../components/Slider";

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
