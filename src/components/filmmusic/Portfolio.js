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
                    <PortfolioItem
                      key={data.youtubeId}
                      title={data.title}
                      description={data.description}
                      youtubeId={data.youtubeId}
                    />
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
