import moment from "moment";
import React from "react";
import { Image } from "react-bootstrap";
import scoreImg from "../../assets/images/score.jpg";

const ScorePost = React.memo(({ id, title, description, category, date }) => (
  <>
    <div className="post">
      <div className="post-thumb">
        <a href={`/scores/${id}`}>
          <Image fluid src={scoreImg} alt="" rounded />
        </a>
      </div>
      <a href={`/scores/${id}`}>
        <h3 className="post-title">{title}</h3>
      </a>
      <div className="post-meta">
        <ul>
          <li>
            <i className="ion-calendar"></i> {moment(date).format("MMM YYYY")}
          </li>
          <li>
            <i className="ion-pricetags"></i> {category}
          </li>
        </ul>
      </div>
      <div className="post-content">
        <p>{description}</p>
        <a href="blog-single.html" className="btn btn-main">
          Preview
        </a>
      </div>
    </div>
  </>
));

export default ScorePost;
