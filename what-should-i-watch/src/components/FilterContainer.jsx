import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Filter from "./Filter.jsx";
import MovieCard from "./MovieCard.jsx";
import "../styles/filterContainer.css";

function FilterContainer() {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const navigate = useNavigate();
  let genres = [];

  const handleButtonClick = () => {
    selectedGenre !== null
      ? ((genres = selectedGenre.map((obj) => {
          return obj.value;
        })),
        (<MovieCard selectedGenre={genres} />),
        navigate(`/recommendations`))
      : navigate(`/recommendations`);
  };

  return (
    <div className="filter-container">
      {/* {value ? (
        <DateRangeFilter value={value} handleChange={handleChange} />
      ) : null} */}
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
    </div>
  );
}

export default FilterContainer;
