import _ from "lodash";
import arrangementData from "../../data/arrangements.json";
import MediaItem from "./MediaItem";

function Arrangement() {
  const data = arrangementData;

  return (
    <section className="portfolio-work">
      <div className="container">
        <div className="row">
          <h2>Arrangement</h2>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="block">
              <div className="row">
                {!_.isEmpty(data) ? (
                  data.map((d) => (
                    <div key={d.youtubeId} className="col-xl-4 col-md-6 col-sm-12 p-3">
                      <MediaItem key={d.youtubeId} title={d.title} youtubeId={d.youtubeId} />
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

export default Arrangement;
