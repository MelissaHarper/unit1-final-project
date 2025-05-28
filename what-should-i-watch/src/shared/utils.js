export const getRandomElement = (arr) => {
  let randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};

export const selectRandom = (num) => {
  // Code should select random movie objects from a filtered array of objects. the num parameter is the number of items it should return. Filter container sets the number at 5. Random sets the number at 1.

  return "stuff";
};

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
