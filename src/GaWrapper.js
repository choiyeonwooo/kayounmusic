import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Helmet } from "react-helmet";
import "react-image-lightbox/style.css";
import "./assets/styles/Index.scss";

const GaWrapper = ({ children }) => (
  <React.Fragment>
    <Helmet>
      {/* Global site tag (gtag.js) - Google Analytics */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-MEGP0GXRNZ"></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-MEGP0GXRNZ');
        `}
      </script>
    </Helmet>
    {children}
  </React.Fragment>
);

export default GaWrapper;
