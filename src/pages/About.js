import BiographySection from "../components/about/BiographySection";
import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";
import TopBanner from "../components/shared/TopBanner";

function About() {
  return (
    <>
      <Header />
      <TopBanner title="About" subtitle="Find out about Ka Youn's background." />
      <BiographySection />
      <Footer />
    </>
  );
}

export default About;
