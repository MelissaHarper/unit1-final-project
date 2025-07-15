import MovieCard from "./MovieCard";
import "../styles/recommendations.css";

const Recommendations = ({ movieList }) => {
  return (
    <div className="recommend-grid">
      <MovieCard movieList={movieList} />
      <MovieCard movieList={movieList} />
      <MovieCard movieList={movieList} />
      <MovieCard movieList={movieList} />
      <MovieCard movieList={movieList} />
    </div>
  );
};

export default Recommendations;
