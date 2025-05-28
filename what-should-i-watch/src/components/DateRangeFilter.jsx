import { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { filterByDate } from "../shared/utils";

const marks = [
  {
    value: 0,
    label: "1900's",
  },
  {
    value: 7.7,
    label: "1910's",
  },
  {
    value: 15.4,
    label: "1920's",
  },
  {
    value: 23.1,
    label: "1930's",
  },
  {
    value: 30.8,
    label: "1940's",
  },
  {
    value: 38.5,
    label: "1950's",
  },
  {
    value: 46.2,
    label: "1960's",
  },
  {
    value: 53.9,
    label: "1970's",
  },
  {
    value: 61.6,
    label: "1980's",
  },
  {
    value: 69.3,
    label: "1990's",
  },
  {
    value: 77,
    label: "2000's",
  },
  {
    value: 84.7,
    label: "2010's",
  },
  {
    value: 91.4,
    label: "2020's",
  },
];
function valuetext(value) {
  return `${value}'s`;
}

export default function DateRangeFilter() {
  const [value, setValue] = useState([0, 100]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: 500 }}>
      <Slider
        aria-label="Always visible"
        value={value}
        defaultValue={100}
        onChange={handleChange}
        getAriaValueText={valuetext}
        step={7.7}
        marks={marks}
        valueLabelDisplay="off"
      />
    </Box>
  );
}

// import { memo, useState, useEffect } from "react";
// // import { render } from "react-dom";
// // import { DateRangePicker } from "react-date-range";
// // import DatePicker from "react-datepicker";

// //destructive props
// const RangeSlider = ({ classes, label, onChange, value, ...sliderProps }) => {
//   //set initial value to 0 this will change inside useEffect in first render also| or you can directly set useState(value)
//   const [sliderVal, setSliderVal] = useState(0);

//   // keep mouse state to determine whether i should call parent onChange or not.
//   // so basically after dragging the slider and then release the mouse then we will call the parent onChange, otherwise parent function will get call each and every change
//   const [mouseState, setMouseState] = useState(null);

//   useEffect(() => {
//     setSliderVal(value); // set new value when value gets changed, even when first render
//   }, [value]);

//   const changeCallback = (e) => {
//     setSliderVal(e.target.value); // update local state of the value when changing
//   };

//   useEffect(() => {
//     if (mouseState === "up") {
//       onChange(sliderVal); // when mouse is up then call the parent onChange
//     }
//   }, [mouseState]);

//   return (
//     <div className="range-slider">
//       <p>{label}</p>
//       <h3>value: {sliderVal}</h3>
//       <input
//         type="range"
//         value={sliderVal}
//         {...sliderProps}
//         className={`slider ${classes}`}
//         id="myRange"
//         onChange={changeCallback}
//         onMouseDown={() => setMouseState("down")} // When mouse down set the mouseState to 'down'
//         onMouseUp={() => setMouseState("up")} // When mouse down set the mouseState to 'up' | now we can call the parent onChnage
//       />
//     </div>
//   );
// };

// export default memo(RangeSlider);

// // const DateRangeFilter = () => {
// //   const [startDate, setStartDate] = useState(new Date());
// //   const [endDate, setEndDate] = useState(null);
// //   const onChange = (dates) => {
// //     const [start, end] = dates;
// //     setStartDate(start);
// //     setEndDate(end);
// //   };
// //   return (
// //     <DatePicker
// //       selected={startDate}
// //       onChange={onChange}
// //       startDate={startDate}
// //       endDate={endDate}
// //       selectsRange
// //       inline
// //     />
// //   );
// // };
// // export default DateRangeFilter;

// // import getYear from "date-fns/getYear";
// // // import range from "lodash/range";
// // import "react-datepicker/dist/react-datepicker.css";

// // const DateRangeFilter = () => {
// //   const [startDate, setStartDate] = useState();

// //   const range = (start, end) => {
// //     return new Array(end - start).fill().map((d, i) => i + start);
// //   };
// //   const years = range(1900, getYear(new Date()));
// //   return (
// //     <DatePicker
// //       renderCustomHeader={({ date, changeYear }) => (
// //         <div
// //           style={{
// //             margin: 10,
// //             display: "flex",
// //             justifyContent: "center",
// //           }}
// //         >
// //           <select
// //             value={getYear(date)}
// //             onChange={({ target: { value } }) => changeYear(value)}
// //           >
// //             {years.map((option) => (
// //               <option key={option} value={option}>
// //                 {option}
// //               </option>
// //             ))}
// //           </select>
// //         </div>
// //       )}
// //       selected={startDate}
// //       onChange={(date) => setStartDate(date)}
// //     />
// //   );
// // };

// // export default DateRangeFilter;

// // // import { useState } from "react";
// // // // import axios from "axios";
// // // import DatePicker from "react-datepicker";
// // // import getYear from "date-fns/getYear";
// // // import getMonth from "date-fns/getYear";
// // // import "react-datepicker/dist/react-datepicker.css";

// // // function DateRangeFilter() {
// // //   const [startDate, setStartDate] = useState(new Date());
// // //   const [endDate, setEndDate] = useState(new Date());
// // //   const [movies, setMovies] = useState([
// // //     data.map((obj) => {
// // //       return { obj };
// // //     }),
// // //   ]);
// // //   const [allMovies, setAllMovies] = useState([
// // //     data.map((obj) => {
// // //       return { obj };
// // //     }),
// // //   ]);

// // //   //   useEffect(()=>{
// // //   //     axios.get("https://63bb90b3cf99234bfa5e3b48.mockapi.io/Movies")
// // //   //     .then((response)=>{
// // //   //       setMovies(response.data);
// // //   //       setAllMovies(response.data);
// // //   //     })

// // //   //   },[])

// // //   const handleSelect = (date) => {
// // //     let filtered = allMovies.filter((movie) => {
// // //       let releaseDate = new Date(movie["release_date"]);
// // //       return (
// // //         releaseDate >= date.selection.startDate &&
// // //         releaseDate <= date.selection.endDate
// // //       );
// // //     });
// // //     setStartDate(date.selection.startDate);
// // //     setEndDate(date.selection.endDate);
// // //     setMovies(filtered);
// // //   };

// // //   const selectionRange = {
// // //     startDate: startDate,
// // //     endDate: endDate,
// // //     key: "selection",
// // //   };
// // //   return (
// // //     <div className="App">
// // //       <header className="App-header">
// // //         <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
// // //         <table>
// // //           <thead>
// // //             <tr>
// // //               <th>ID</th>
// // //               <th>Product</th>
// // //               <th>Date</th>
// // //             </tr>
// // //           </thead>
// // //           <tbody>
// // //             {movies.map((product) => {
// // //               let date = new Date(product["createdAt"]);
// // //               return (
// // //                 <tr>
// // //                   <td>{product["id"]}</td>
// // //                   <td>{product["name"]}</td>
// // //                   <td>{date.toLocaleDateString()}</td>
// // //                 </tr>
// // //               );
// // //             })}
// // //           </tbody>
// // //         </table>
// // //       </header>
// // //     </div>
// // //   );
// // // }

// // // export default DateRangeFilter;
