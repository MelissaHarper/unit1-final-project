import MovieCard from "./MovieCard";
import "../styles/recommendations.css";

const Recommendations = () => {
  return (
    <div className="recommend-grid">
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
    </div>
  );
};

export default Recommendations;
