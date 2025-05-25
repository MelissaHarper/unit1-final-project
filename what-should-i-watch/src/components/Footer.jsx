import { useNavigate } from "react-router-dom";
import { useState } from "react";
import data from "../assets/data/mergedDummyData.json";

const Footer = ({ selectedMovie, setSelectedMovie }) => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/selection");
  };
  //Button takes you to the same place, but returns a different result depending on which one is pushed. Getters and Setters?
  return (
    <footer>
      {/* <button className="random-movie" onClick={handleRedirect}>
        Get Random Movie
      </button>
      <button className="random-tv-show" onClick={handleRedirect}>
        Get Random TV Show
      </button> */}
      <button className="random-all" onClick={handleRedirect}>
        Surprise Me!
      </button>
    </footer>
  );
};

export default Footer;
