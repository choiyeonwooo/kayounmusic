import _ from "lodash";
import concertMusicData from "../../data/concertmusic.json";
import MediaItem from "./MediaItem";

function ConcertMusic() {
  const data = concertMusicData;

  return (
    <section className="portfolio-work" style={{ paddingBottom: 0 }}>
      <div className="container">
        <div className="row">
          <h2>Concert Music</h2>
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

export default ConcertMusic;
