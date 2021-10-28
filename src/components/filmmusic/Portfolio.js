import _ from "lodash";
import { useCachedFetch } from "../../api/cachedFetchHook";
import config from "../../config";
import filmMusicData from "../../data/filmmusic.json";
import ComponentLoader from "../shared/ComponentLoader";
import PortfolioItem from "./PortfolioItem";

function Portfolio() {
  let { loading, data, error } = useCachedFetch(
    `${config.API_ENDPOINT}/filmmusics`,
    config.CACHE_TOGGLE
  );

  if (error) {
    console.log(error);
    console.log("Loading static data as fallback...");
    data = filmMusicData;
  }

  return (
    <section className="portfolio-work">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="block">
              <div className="row">
                {loading ? (
                  <ComponentLoader />
                ) : !_.isEmpty(data) ? (
                  data.map((d) => (
                    <div key={d.youtubeId} className="col-xl-4 col-md-6 col-sm-12 p-3">
                      <PortfolioItem
                        key={d.youtubeId}
                        title={d.title}
                        youtubeId={d.youtubeId}
                        img={d.img}
                        comingSoon={d.comingSoon}
                      />
                    </div>
                  ))
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
