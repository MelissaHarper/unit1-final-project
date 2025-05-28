import React from "react";
// import posterFW from "../assets/images/stand-in-movie-poster.png";
import data from "../assets/data/mergedDummyData.json";
import "../styles/Selection.css";

const Selection = ({ selectedMovie }) => {
  let {
    title,
    backdrop_path,
    release_date,
    overview,
    original_title,
    genres,
    altTitle,
  } = data[1];

  let imgURL = `https://image.tmdb.org/t/p/original/${backdrop_path}`;

  return (
    <div className="selection-wrapper">
      <img className="poster-fw" src={imgURL} alt={`${title} movie poster`} />
      <section className="selection-info">
        <h2>{title}</h2>
        {altTitle && <h3>Original Title: {original_title}</h3>}
        <p className="release-date">Release date: {release_date}</p>
        <p className="overview">Overview {overview}</p>
        <p className="genres">Genres: {genres.sort().join(", ")}</p>
      </section>
    </div>
  );
};

export default Selection;
