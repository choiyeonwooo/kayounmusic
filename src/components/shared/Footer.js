import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="footer-manu">
              <ul>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/works">Works</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <p className="copyright">
              Copyright {new Date().getFullYear()} &copy; Developed by{" "}
              <a href="https://brianmin.com" target="_blank" rel="noreferrer">
                Brian Min
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
