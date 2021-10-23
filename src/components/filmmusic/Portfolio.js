import _ from "lodash";
import filmMusicData from "../../data/filmmusic.json";
import PortfolioItem from "./PortfolioItem";

function Portfolio() {
  return (
    <section className="portfolio-work">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="block">
              <div className="row">
                {!_.isEmpty(filmMusicData) ? (
                  filmMusicData.map((data) => (
                    <div key={data.youtubeId} className="col-xl-4 col-md-6 col-sm-12 p-3">
                      <PortfolioItem
                        key={data.youtubeId}
                        title={data.title}
                        description={data.description}
                        youtubeId={data.youtubeId}
                        img={_.has(data, "img") ? data.img : null}
                        comingSoon={_.has(data, "comingSoon") ? data.comingSoon : false}
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
