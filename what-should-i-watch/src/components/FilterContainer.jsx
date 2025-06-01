import "../styles/filterContainer.css";
import { useState } from "react";
import data from "../assets/data/mergedDummyData.json";
import Filter from "./Filter.jsx";
import DateRangeFilter from "./DateRangeFilter.jsx";

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
      <p>
        Search Parameters:{" "}
        {selectedGenre.map((obj) => {
          return `${obj.label}, `;
        })}
      </p>
      <button
        onClick={console.log(
          selectedGenre.map((obj) => {
            return obj.label;
          })
        )}
      >
        Get me my movies!
      </button>
    </div>
  );
}

export default FilterContainer;
