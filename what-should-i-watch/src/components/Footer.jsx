import { useNavigate } from "react-router-dom";
import { getRandomNumber } from "../shared/utils";
import "../styles/NavBar-Footer.css";

const Footer = () => {
  const navigate = useNavigate();
  const movieID = getRandomNumber();

  const handleRedirect = () => {
    navigate(`/selection/movie/detail/${movieID}}`);
  };
  //Button takes you to the same place, but returns a different result depending on which one is pushed. Getters and Setters?
  return (
    <footer>
      <button className="random-all" onClick={handleRedirect}>
        Surprise Me!
      </button>
    </footer>
  );
};

export default Footer;
