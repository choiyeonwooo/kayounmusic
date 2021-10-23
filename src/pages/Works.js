import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";
import TopBanner from "../components/shared/TopBanner";
import SoundCloudContainer from "../components/works/SoundCloudContainer";

function Works() {
  return (
    <>
      <Header />
      <TopBanner title="Works" subtitle="Compositions ranging from solo to orchestral works" />
      <SoundCloudContainer />
      <Footer />
    </>
  );
}

export default Works;
