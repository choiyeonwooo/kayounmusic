import { Link } from "react-router-dom";
import logoImage from "../assets/images/logo.png";

function NotFound() {
  return (
    <>
      <section class="page-404">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <Link to="/">
                <img src={logoImage} alt="site logo" />
              </Link>
              <h1>404</h1>
              <h2>Page Not Found</h2>
              <Link to="/" class="btn btn-main">
                <i class="tf-ion-android-arrow-back"></i> Go Home
              </Link>
              <p class="copyright-text">
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
