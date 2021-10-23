import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";
import TopBanner from "../components/shared/TopBanner";
import SoundCloudWorks from "../components/works/SoundCloudWorks";

function Works() {
  return (
    <>
      <Header />
      <TopBanner title="Works" subtitle="Compositions ranging from solo to orchestral works" />
      <SoundCloudWorks />
      <Footer />
    </>
  );
}

export default Works;
