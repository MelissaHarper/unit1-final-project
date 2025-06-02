import { useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Filter from "./Filter.jsx";
import MovieCard from "./MovieCard.jsx";
import Recommendations from "./Recommendations.jsx";
import { genreOptions } from "../shared/utils";
import "../styles/filterContainer.css";

function FilterContainer() {
  const [selectedGenre, setSelectedGenre] = useState(genreOptions);
  const UserContext = createContext();
  // console.log(typeof selectedGenre);
  const navigate = useNavigate();
  // let genres = [];

  const handleButtonClick = () => {
    // selectedGenre !== null
    //   ? ((genres = selectedGenre.map((obj) => {
    //       return obj.value;
    //     })),
    //     (<MovieCard selectedGenre={genres} />),
    //     navigate(`/recommendations`)):
    navigate(`/recommendations`);
  };

  return (
    <div className="filter-container">
      <p>
        {" "}
        Click the dropdown menu to filter your recommendations by genre, or
        don't.
      </p>
      <p> Then, click the button to get 5 random recommendations.</p>
      <Filter
        selectedGenre={selectedGenre}
        setSelectedGenre={setSelectedGenre}
      />

      {selectedGenre && (
        <div className="confirmInput">
          <h2>Search Parameters:</h2>
          <p>
            {selectedGenre.map((obj) => {
              return `${obj.label} `;
            })}
          </p>
        </div>
      )}
      <button className="filter-button" onClick={handleButtonClick}>
        Get me my movies!
      </button>

      <UserContext.Provider value={selectedGenre}>
        <section className="hidden">
          <Recommendations selectedGenre={selectedGenre}></Recommendations>
          {/* <MovieCard
            selectedGenre={selectedGenre}
            key={selectedGenre}
          ></MovieCard> */}
        </section>
      </UserContext.Provider>
    </div>
  );
}

export default FilterContainer;
