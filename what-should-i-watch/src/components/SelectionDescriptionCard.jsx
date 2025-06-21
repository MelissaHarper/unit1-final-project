// Images
import Dummy from "../assets/images/logo.png";
import "../styles/Selection.css";

const DetailDescription = ({ movie }) => {
  // Variables
  const releaseDate = movie
    ? movie.release_date
      ? movie.release_date.split("-")[0]
      : movie.first_air_date
      ? movie.first_air_date.split("-")[0]
      : ""
    : "";

  // Error image
  const onErrorImage = (e) => (e.target.src = Dummy);

  return (
    <>
      {/* Banner */}
      {movie.backdrop_path && (
        <div className="relative">
          <img
            src={`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${movie.backdrop_path}`}
            alt={movie.name}
            className="backdrop"
          />
          <div className="backdrop-gradient" />
        </div>
      )}

      <div
        className={`relative container ${
          movie.backdrop_path ? "md:-mt-52 -mt-28" : "mt-32"
        } z-10`}
      >
        <div className="detail-container">
          {/* Poster */}
          <div className="poster-container">
            <img
              src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}
              alt={movie.title || movie.name}
              className="poster"
              onError={onErrorImage}
            />
            <img
              src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}
              alt={movie.title || movie.name}
              className="poster-blur"
              onError={onErrorImage}
            />
          </div>

          {/* Title, release year, language, genres, description */}
          <div className="selection-info">
            {/* Title */}
            <h1 className="title">
              {movie.original_name || movie.original_title}
            </h1>

            {/* Release year & language */}
            {movie.spoken_languages.length > 0 && (
              <p className="year-language">
                {releaseDate} &#9679; {movie.spoken_languages[0].english_name}
              </p>
            )}

            {/* Genres */}
            <div className="genre-container">
              {movie.genres.map((genre) => (
                <div key={genre.id} className="genre">
                  {genre.name}
                </div>
              ))}
            </div>

            {/* Description */}
            <p className="description">{movie.overview}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailDescription;
