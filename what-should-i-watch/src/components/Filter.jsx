// const Filter = () => {
//   return (
//     //<div className="filter" key={id}>
//     <div>
//       <p>
//         {" "}
//         Filter Structure Goes Here
//         <br />
//         Child of FilterContainer?
//       </p>
//     </div>
//   );
// };

import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { genreOptions } from "../shared/utils";

const Filter = () => {
  // const genres = genreData.map((obj) => {
  //   return (obj.value = obj.name), (obj.label = obj.name);
  // });
  // const { name } = genres;
  const animatedComponents = makeAnimated();

  return (
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      isMulti
      name="genres"
      options={genreOptions}
      className="basic-multi-select"
      classNamePrefix="select"
    />
  );
};

export default Filter;
