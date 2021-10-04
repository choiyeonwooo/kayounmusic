function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="footer-manu">
              <ul>
                <li>
                  <a href="#about">About Us</a>
                </li>
                <li>
                  <a href="#contact">Contact us</a>
                </li>
                <li>
                  <a href="#support">Support</a>
                </li>
              </ul>
            </div>
            <p className="copyright">
              Copyright 2021 &copy; Developed by{" "}
              <a href="https://brianmin.com" target="_blank" rel="noreferrer">
                Brian Min
              </a>
              . All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
