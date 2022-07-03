import { Popup } from "@sekmet/react-magnific-popup";
import config from "../../config";

function MediaItem({ title, youtubeId, img, comingSoon, playlistIDs }) {
  return (
    <div className="portfolio-item mb-3">
      <img
        src={
          img
            ? config.WEB_DOMAIN + "/thumbnails/" + img
            : `https://i3.ytimg.com/vi/${youtubeId}/hqdefault.jpg`
        }
        alt={title}
      />
      {comingSoon ? (
        <>
          <div className="portfolio-hover">
            <div className="portfolio-content">
              <div className="portfolio-popup">
                <i className="icon ion-play"></i>
              </div>
              <h3>{title}</h3>
              <h5>Coming Soon.</h5>
            </div>
          </div>
        </>
      ) : (
        <Popup
          className="popup-youtube"
          href={
            playlistIDs
              ? `https://www.youtube.com/v/${youtubeId}?version=3&loop=1&playlist=${playlistIDs},`
              : `https://www.youtube.com/watch?v=${youtubeId}`
          }
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
            </div>
          </div>
        </Popup>
      )}
    </div>
  );
}

export default MediaItem;
