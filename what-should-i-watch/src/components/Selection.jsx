import React from "react";
import posterFW from "../assets/images/stand-in-movie-poster.png";
import "../styles/Selection.css";
import dummyData from "../assets/data/dummyData.json";

const Selection = () => {
  const data = dummyData.map((obj) => {
    return { ...obj };
  });

  const { title, release_data, overview, original_title, genre_ids } = data;

  return (
    <div className="selection-wrapper">
      <img className="poster-fw" src={posterFW} alt="Generic movie poster" />
      <section className="selection-info">
        <h2>{title}</h2>
      </section>
    </div>
  );
};

export default Selection;
