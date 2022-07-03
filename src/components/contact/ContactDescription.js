import config from "../../config";

function ContactDescription() {
  return (
    <section className="contact-form">
      <div className="container">
        <div className="contact-box row">
          <div className="col-sm-12">
            <div className="block">
              <h2>Ka Youn Yoo</h2>
              <ul className="address-block">
                <li>
                  <i className="ion-ios-location-outline"></i>Soho, London, United Kingdom
                </li>
                <li>
                  <i className="ion-ios-email-outline"></i>Email:{" "}
                  <a href={`mailto:${config.EMAIL}`}>{config.EMAIL}</a>
                </li>
              </ul>
              <ul className="social-icons">
                <li>
                  <a href={config.INSTAGRAM_URL} target="_blank" rel="noreferrer">
                    <i className="ion-social-instagram-outline"></i>
                  </a>
                </li>
                <li>
                  <a href={config.FACEBOOK_URL} target="_blank" rel="noreferrer">
                    <i className="ion-social-facebook-outline"></i>
                  </a>
                </li>
                <li>
                  <a href={config.SOUNDCLOUD_URL} target="_blank" rel="noreferrer">
                    <i className="fa fa-soundcloud"></i>
                  </a>
                </li>
                <li>
                  <a href={config.YOUTUBE_URL} target="_blank" rel="noreferrer">
                    <i className="ion-social-youtube-outline"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactDescription;
