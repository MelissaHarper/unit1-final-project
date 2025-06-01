import "../styles/filterContainer.css";
import { useState } from "react";
import Filter from "./Filter.jsx";

function FilterContainer() {
  const [selectedGenre, setSelectedGenre] = useState(null);
  // let genres = selectedGenre.map((obj) => {
  //   return obj.value;
  // });

  return (
    <div className="filter-container">
      {/* {value ? (
        <DateRangeFilter value={value} handleChange={handleChange} />
      ) : null} */}
      <Filter
        selectedGenre={selectedGenre}
        setSelectedGenre={setSelectedGenre}
      />

      <button onClick={console.log(selectedGenre)}>Get me my movies!</button>
      {selectedGenre && (
        <p>
          Search Parameters:{" "}
          {selectedGenre.map((obj) => {
            return obj.label;
          })}
        </p>
      )}
    </div>
  );
}

export default FilterContainer;
