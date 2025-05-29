// import { options } from "./call-structure.js";

/*** Call Functions ***/
// export const searchByGenre = fetch(
//   "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=16&with_runtime.gte=2147483647",
//   options
// )
//   .then((res) => res.json())
//   .catch((err) => console.error(err));

export function getRandomNumber() {
  let randomNumber = Math.floor(Math.random() * 100);
  return randomNumber;
}

/*** Utility Functions ***/
export function getRandomElement(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

export const filterByDate = (arr, dateRange) => {
  let startDate = dateRange[0];
  let endDate = dateRange[1];
  let moviesByDate = arr.filter(
    (movie) =>
      movie.release_date.slice(0, 3) >= startDate &&
      movie.release_date.slice(0, 3) <= endDate + 9
  );
  return moviesByDate;
};

export const genreOptions = [
  {
    value: 28,
    label: "Action",
  },
  {
    value: 12,
    label: "Adventure",
  },
  {
    value: 16,
    label: "Animation",
  },
  {
    value: 35,
    label: "Comedy",
  },
  {
    value: 80,
    label: "Crime",
  },
  {
    value: 99,
    label: "Documentary",
  },
  {
    value: 18,
    label: "Drama",
  },
  {
    value: 10751,
    label: "Family",
  },
  {
    value: 14,
    label: "Fantasy",
  },
  {
    value: 36,
    label: "History",
  },
  {
    value: 27,
    label: "Horror",
  },
  {
    value: 0,
    label: "LGBTQ",
  },
  {
    value: 10402,
    label: "Music",
  },
  {
    value: 9648,
    label: "Mystery",
  },
  {
    value: 10749,
    label: "Romance",
  },
  {
    value: 878,
    label: "Science Fiction",
  },
  {
    value: 10770,
    label: "TV Movie",
  },
  {
    value: 53,
    label: "Thriller",
  },
  {
    value: 10752,
    label: "War",
  },
  {
    value: 37,
    label: "Western",
  },
];
