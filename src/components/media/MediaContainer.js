import _ from "lodash";
import React from "react";
import config from "../../config";
import mediaData from "../../data/media.json";
import CategoryFilter from "../shared/CategoryFilter";
import ComponentLoader from "../shared/ComponentLoader";
import MediaItem from "./MediaItem";

function MediaContainer() {
  const [filter, setFilter] = React.useState("All");
  // let { loading, data, error } = useCachedFetch(
  //   `${config.API_ENDPOINT}/filmmusics`,
  //   config.CACHE_TOGGLE
  // );

  let loading = false,
    data = mediaData;

  // if (!error) {
  //   console.log(error);
  //   console.log("Loading static data as fallback...");
  //   data = mediaData;
  // }

  const filteredMedia =
    filter === "All"
      ? _.sortBy(data, (obj) => obj.order).reverse()
      : _.sortBy(_.filter(data, ["category", filter]), (obj) => obj.order).reverse();

  return (
    <>
      <CategoryFilter
        categories={["All", "Film Music", "Concert Music", "Arrangement"]}
        filter={filter}
        setFilter={setFilter}
      />
      <section className="portfolio-work" style={{ paddingBottom: 0 }}>
        <div className="container">
          <div className="row">
            {loading || config.PRE_RENDERING ? (
              <ComponentLoader />
            ) : !_.isEmpty(filteredMedia) ? (
              filteredMedia.map((d) => (
                <div key={d.youtubeId} className="col-xl-4 col-md-6 col-sm-12 p-3">
                  <MediaItem
                    title={d.title}
                    youtubeId={d.youtubeId}
                    img={d.img}
                    comingSoon={d.comingSoon}
                    playlistIDs={d.playlistId}
                  />
                </div>
              ))
            ) : (
              <></>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default MediaContainer;
