import "../styles/filterContainer.css";
import { useState } from "react";
import data from "../assets/data/mergedDummyData.json";
import Filter from "./Filter.jsx";
import DateRangeFilter from "./DateRangeFilter.jsx";

function FilterContainer() {
  // const [value, setValue] = useState([0, 100]);

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  // // <DateRangeFilter value={value} handleChange={handleChange} />;

  // // State variable for selectedMovie
  // const [selectedMovie, setSelectedMovie] = useState(
  //   data.map((obj) => {
  //     return { ...obj };
  //   })
  // );

  return (
    <div className="filter-container">
      {/* {value ? (
        <DateRangeFilter value={value} handleChange={handleChange} />
      ) : null} */}
      <Filter />
    </div>
  );
}

export default FilterContainer;
