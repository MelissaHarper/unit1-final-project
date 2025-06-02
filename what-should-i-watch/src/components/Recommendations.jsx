import MovieCard from "./MovieCard";
import "../styles/recommendations.css";

const Recommendations = ({ isOpen, onClose, selectedGenre }) => {
  if (!isOpen) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-background">
        <div className="recommend-grid">
          <MovieCard selectedGenre={selectedGenre} />
          <MovieCard selectedGenre={selectedGenre} />
          <MovieCard selectedGenre={selectedGenre} />
          <MovieCard selectedGenre={selectedGenre} />
          <MovieCard selectedGenre={selectedGenre} />
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
