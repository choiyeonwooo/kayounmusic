import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";

function PageComingSoon() {
  return (
    <>
      <Header />
      <section className="coming-soon page-coming-soon text-center overly">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="block">
                <h1>Page Under Development</h1>
                <p>Page coming soon. Please visit again later</p>
                <div className="social-media-icons mt-20">
                  <ul>
                    <li>
                      <a href="mailto://kbshana3338@gmail.com" target="_blank" rel="noreferrer">
                        <i className="ion-email"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.facebook.com/people/Ka-Youn-Yoo/100004411846598/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="ion-social-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/kayoun_yukaris"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="ion-social-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/channel/UCj3OZleY0PqZUU6hoPcv9bA"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="ion-social-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default PageComingSoon;
