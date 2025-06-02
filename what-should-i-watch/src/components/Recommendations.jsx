import MovieCard from "./MovieCard";
import "../styles/recommendations.css";

const Recommendations = ({ selectedGenre }) => {
  return (
    <div className="recommend-grid">
      <MovieCard selectedGenre={selectedGenre} />
      <MovieCard selectedGenre={selectedGenre} />
      <MovieCard selectedGenre={selectedGenre} />
      <MovieCard selectedGenre={selectedGenre} />
      <MovieCard selectedGenre={selectedGenre} />
    </div>
  );
};

export default Recommendations;
