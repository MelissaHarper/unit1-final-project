import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { genreOptions } from "../shared/utils";

const Filter = () => {
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
