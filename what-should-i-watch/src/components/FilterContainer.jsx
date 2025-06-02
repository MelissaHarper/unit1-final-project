import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Filter from "./Filter.jsx";
import MovieCard from "./MovieCard.jsx";
import Recommendations from "./Recommendations.jsx";
import { genreOptions } from "../shared/utils";
import "../styles/filterContainer.css";

function FilterContainer() {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [open, setOpen] = useState(false);

  const allGenres = genreOptions.map((obj) => {
    return obj;
  });

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  // const navigate = useNavigate();
  // let genres = [];

  // const handleButtonClick = () => {
  //   selectedGenre !== null
  //     ? ((genres = selectedGenre.map((obj) => {
  //         return obj.value;
  //       })),
  //       (<MovieCard selectedGenre={genres} />),
  //       navigate(`/recommendations`))
  //     : navigate(`/recommendations`);
  // };

  return (
    <div className="filter-container">
      <p> Click the dropdown menu to select genres, or don't.</p>
      <p>
        {" "}
        When you're ready, click the button to get 5 random recommendations.
      </p>
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
      <button className="filter-button" onClick={handleOpen}>
        Get me my movies!
      </button>
      <Recommendations
        isOpen={open}
        onclose={handleClose}
        selectedGenre={selectedGenre !== null ? selectedGenre : allGenres}
      ></Recommendations>
    </div>
  );
}

export default FilterContainer;
