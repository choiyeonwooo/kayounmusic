import _ from "lodash";
import { useCachedFetch } from "../../api/cachedFetchHook";
import config from "../../config";
import filmMusicData from "../../data/filmmusic.json";
import ComponentLoader from "../shared/ComponentLoader";
import MediaItem from "./MediaItem";

function FilmMusic() {
  let { loading, data, error } = useCachedFetch(
    `${config.API_ENDPOINT}/filmmusics`,
    config.CACHE_TOGGLE
  );

  if (error) {
    console.log(error);
    console.log("Loading static data as fallback...");
    data = filmMusicData;
  }

  console.log(_.sortBy(data, ["order", "_id"]));

  return (
    <section className="portfolio-work" style={{ paddingBottom: 0 }}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="block">
              <div className="row">
                {loading || config.PRE_RENDERING ? (
                  <ComponentLoader />
                ) : !_.isEmpty(data) ? (
                  _.sortBy(data, ["order", "_id"]).map((d) => (
                    <div key={d.youtubeId} className="col-xl-4 col-md-6 col-sm-12 p-3">
                      <MediaItem
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

export default FilmMusic;
