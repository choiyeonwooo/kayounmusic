import React from "react";
import CategoryFilter from "../shared/CategoryFilter";
import Arrangement from "./Arrangement";
import ConcertMusic from "./ConcertMusic";
import FilmMusic from "./FilmMusic";

function MediaContainer() {
  const [filter, setFilter] = React.useState("All");
  return (
    <>
      <CategoryFilter
        categories={["All", "Film Music", "Concert Music", "Arrangement"]}
        filter={filter}
        setFilter={setFilter}
      />
      {(filter === "All" || filter === "Film Music") && <FilmMusic />}
      {(filter === "All" || filter === "Concert Music") && <ConcertMusic />}
      {(filter === "All" || filter === "Arrangement") && <Arrangement />}
    </>
  );
}

export default MediaContainer;
