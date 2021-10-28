import { Link } from "react-router-dom";
import logoImage from "../assets/images/logo.png";

function NotFound() {
  return (
    <>
      <section className="page-404">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Link to="/">
                <img src={logoImage} alt="site logo" />
              </Link>
              <h1>404</h1>
              <h2>Page Not Found</h2>
              <Link to="/" className="btn btn-main">
                <i className="tf-ion-android-arrow-back"></i> Go Home
              </Link>
              <p className="copyright-text">
                Copyright {new Date().getFullYear()} &copy; Developed by{" "}
                <a href="https://brianmin.com" target="_blank" rel="noreferrer">
                  Brian Min
                </a>
                . All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default NotFound;
