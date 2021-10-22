import config from "../config";

function ComingSoon() {
  return (
    <>
      <section className="coming-soon text-center overly">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="block">
                <h1>Ka Youn Yoo</h1>
                <p>Website coming soon. Please Stay in Touch</p>
                <div className="social-media-icons mt-20">
                  <ul>
                    <li>
                      <a href={`mailto:${config.EMAIL}`} target="_blank" rel="noreferrer">
                        <i className="ion-email"></i>
                      </a>
                    </li>
                    <li>
                      <a href={config.FACEBOOK_URL} target="_blank" rel="noreferrer">
                        <i className="ion-social-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href={config.INSTAGRAM_URL} target="_blank" rel="noreferrer">
                        <i className="ion-social-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href={config.SOUNDCLOUD_URL} target="_blank" rel="noreferrer">
                        <i className="fa fa-soundcloud"></i>
                      </a>
                    </li>
                    <li>
                      <a href={config.YOUTUBE_URL} target="_blank" rel="noreferrer">
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
    </>
  );
}

export default ComingSoon;
