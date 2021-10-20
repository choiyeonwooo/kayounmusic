import { Popup } from "@sekmet/react-magnific-popup";
import React from "react";

function PortfolioItem({ title, description, youtubeId }) {
  return (
    <div className="col-md-4 p-3">
      <div className="portfolio-item">
        <img src={`https://i3.ytimg.com/vi/${youtubeId}/hqdefault.jpg`} alt={title} />
        <Popup
          className="popup-youtube"
          href={`https://www.youtube.com/watch?v=${youtubeId}`}
          savefrom_lm_index="0"
          savefrom_lm="1"
          config={{
            disableOn: 700,
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false,
          }}
        >
          <div className="portfolio-hover">
            <div className="portfolio-content">
              <div className="portfolio-popup">
                <i className="icon ion-play"></i>
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          </div>
        </Popup>
      </div>
    </div>
  );
}

export default PortfolioItem;
