import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Dummy from "../assets/images/logo.png";
import "react-lazy-load-image-component/src/effects/black-and-white.css";
// import { options } from "../shared/call-structure";
import { getRandomElement, searchByGenre } from "../shared/utils";
// import { getByGenre } from "../shared/call-functions";
import "../styles/movieCard.css";

const MovieCard = ({ selectedGenre }) => {
  const genres = selectedGenre.map((obj) => {
    return obj.value;
  });

  // const payload = options;
  const movieOptions = searchByGenre(genres);
  console.log(`This is Bullshit ${movieOptions}`);
  // let movie = getRandomElement(movieOptions);
  let movie = movieOptions[0];
  console.log(`This is the ${movie}`);
  let type = "movie";

  return (
    <div className="movie-card">
      <Link
        to={`/selection/${type}/detail/${movie.id}`} // To later integrate TV
      >
        <LazyLoadImage
          className="poster"
          src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}
          alt={movie.title || movie.original_title || movie.original_name}
          placeholderSrc={<div className="poster" />}
          onError={(event) => {
            event.currentTarget.onerror = null;
            event.currentTarget.src = Dummy;
          }}
          effect="black-and-white"
          width="100%"
        />
      </Link>
      <div className="info">
        <Link
          to={`/selection/movie/detail/${movie.id}}`} // To later integrate TV
          className="title"
        >
          {movie.title || movie.name}
        </Link>
        <p className="description"> {movie.overview}</p>{" "}
        {/* // Movie description */}
        <ul className="extra-info">
          <li>
            {movie.release_date?.split("-")[0] ||
              movie.first_air_date?.split("-")[0]}
          </li>

          <li>
            {" "}
            {Number(movie.imdb_rating) > 0 && (
              <>
                {/* <IconStarFilled color="rgb(234, 179, 8)" /> */}
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
