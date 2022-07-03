import React from "react";
import CategoryFilter from "../shared/CategoryFilter";
import CJSection from "./CJSection";

function CJContainer() {
  const [filter, setFilter] = React.useState("All");
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h2>CJ 장학금 포트폴리오</h2>
      </div>
      <CategoryFilter
        categories={[
          "All",
          "Film Music",
          "Video Game Music",
          "Concert Music",
          "Independent Short Film Music",
          "Arrangements",
        ]}
        filter={filter}
        setFilter={setFilter}
        style={{ marginTop: 0 }}
      />
      {(filter === "All" || filter === "Film Music") && (
        <CJSection
          id={1}
          title="Film Music"
          youtube={{ title: `Ticket Scene from "Polar Express"`, youtubeId: "jcZGtEFA6tY" }}
          score={{
            id: "6179e73657b6560e621237d5",
            title: "Polar Express Ticket Scene Score",
            category: "Orchestral",
            date: "2020-09-01",
            youtubeId: "jcZGtEFA6tY",
            img: "/thumbnails/PolarExpress.png",
          }}
        />
      )}
      {(filter === "All" || filter === "Video Game Music") && (
        <CJSection
          id={2}
          title="Video Game Music"
          youtube={{ title: `Game Cue for "Dante's Inferno"`, youtubeId: "jids_cSE05s" }}
          score={{
            id: "6179e73657b6560e621237d4",
            title: "Game Cue for Dante's Inferno Score",
            category: "Orchestral",
            date: "2021-09-01",
            img: "/thumbnails/DantesInferno.png",
          }}
        />
      )}
      {(filter === "All" || filter === "Concert Music") && (
        <CJSection
          id={3}
          title="Concert Music"
          youtube={{ title: `"Aydan's Love Letter"`, youtubeId: "rKVBFgCVyzQ" }}
          score={{
            id: "62c1ef257b61fc8367a885ee",
            title: "Aydan's Love Letter Score",
            category: "Orchestral",
            date: "2022-06-26",
            img: "/thumbnails/AydansLoveLetter.png",
          }}
        />
      )}
      {(filter === "All" || filter === "Independent Short Film Music") && (
        <CJSection
          id={4}
          title="Independent Short Film Music"
          youtube={{ title: `Original Score for "Marked"`, youtubeId: "GP--xjSSur4" }}
          score={{
            id: "6179e73657b6560e621237d8",
            title: "Marked (2021) Score",
            category: "Chamber",
            date: "2021-10-01",
            img: "/thumbnails/Marked.png",
          }}
        />
      )}
      {(filter === "All" || filter === "Arrangements") && (
        <CJSection
          id={5}
          title="Arrangements"
          youtube={{
            title: `고향의 봄, 기러기떼 날으네, 심장에 남는 사람`,
            youtubeId: "GTQTVcsJ2YM",
            playlistIDs: "GTQTVcsJ2YM,22L8PmLoZI0,TKMmrZ4r6ZA,6XiI7YYO_DI,7TfZE8o5Hig",
          }}
          score={{
            id: "62c1ee827b61fc8367a885eb",
            title: "고향의 봄 Score",
            category: "Arrangement",
            date: "2021-12-01",
            img: "/thumbnails/고향의봄.png",
          }}
          // score={{
          //   id: "62c1eed17b61fc8367a885ed",
          //   title: "기러기떼 날으네 Score",
          //   category: "Arrangement",
          //   date: "2021-12-01",
          //   img: "/thumbnails/기러기떼날으네.png",
          // }}
          // score={{
          //   id: "62c1eea37b61fc8367a885ec",
          //   title: "심장에 남는 사람 Score",
          //   category: "Arrangement",
          //   date: "2021-12-01",
          //   img: "/thumbnails/심장에남는사람.png",
          // }}
        />
      )}
    </>
  );
}

export default CJContainer;
