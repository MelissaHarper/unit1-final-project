import { useNavigate } from "react-router-dom";
import "../styles/NavBar-Footer.css";
import tmdbLogo from "../assets/images/tmdb-logo.svg";

const Footer = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate(`/recommendations`);
  };
  return (
    <footer>
      <div className="tmdb-attribution">
        <img
          className="tmdb-logo"
          src={tmdbLogo}
          alt="Logo for The Movie Database"
        />
        <p className="tmdb-notice">
          This product uses the TMDB API but is not endorsed or certified by
          TMDB.
        </p>
      </div>

      <button className="reusable-button" onClick={handleRedirect}>
        Surprise Me!
      </button>
      <div className="box-travel"></div>
    </footer>
  );
};

export default Footer;
