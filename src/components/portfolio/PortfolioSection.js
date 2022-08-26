import MediaItem from "../media/MediaItem";
import ScorePost from "../scores/ScorePost";

function PortfolioSection({ id, title, youtube, score }) {
  return (
    <section className="portfolio-work" style={{ paddingBottom: 0, paddingTop: 5 }}>
      <div className="container">
        <div className="row">
          <h2>
            {id}. {title}
          </h2>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-12 p-3">
            <MediaItem
              title={youtube.title}
              youtubeId={youtube.youtubeId}
              playlistIDs={youtube.playlistIDs}
            />
          </div>
          {score && (
            <div className="col-md-6 col-sm-12 p-3">
              <ScorePost
                id={score.id}
                title={score.title}
                category={score.category}
                date={score.date}
                img={score.img}
                rescore={score.rescore}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;
