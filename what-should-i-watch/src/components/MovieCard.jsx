import { Link } from "react-router-dom";
import Dummy from "../assets/images/logo.png";
import "react-lazy-load-image-component/src/effects/black-and-white.css";
import data from "../assets/data/mergedDummyData.json";
import { getRandomElement } from "../shared/utils";
import "../styles/movieCard.css";

const MovieCard = () => {
  let movie = getRandomElement(data);
  return (
    <div className="movie-card">
      <Link
        to={`/selection/movie/detail/${movie.id}`}
        className="poster-container"
      >
        <img
          className="poster"
          src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}
          alt={movie.title || movie.original_title || movie.original_name}
          onError={(event) => {
            event.currentTarget.onerror = null;
            event.currentTarget.src = Dummy;
          }}
          width="100%"
        />
      </Link>
      <div className="info">
        <Link to={`/selection/movie/detail/${movie.id}`} className="title">
          {movie.title || movie.name}
        </Link>
        <Link
          to={`/selection/movie/detail/${movie.id}`}
          className="description"
        >
          {movie.overview}
        </Link>
        <ul className="extra-info">
          <li>
            {movie.release_date?.split("-")[0] ||
              movie.first_air_date?.split("-")[0]}
          </li>

          <li>
            {" "}
            {Number(movie.imdb_rating) > 0 && (
              <>
                <>{String(movie.imdb_rating).substring(0, 3)}</>
              </>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MovieCard;
