import MovieCard from "./MovieCard";
import "../styles/recommendations.css";
import AddToWatchList from "./AddToWatchList";

const Recommendations = ({ movieList }) => {
  return (
    <div className="recommend-grid">
      <MovieCard movieList={movieList} />
      <MovieCard movieList={movieList} />
      <MovieCard movieList={movieList} />
      <MovieCard movieList={movieList} />
      <MovieCard movieList={movieList} toWatchList={AddToWatchList} />
    </div>
  );
};

export default Recommendations;
