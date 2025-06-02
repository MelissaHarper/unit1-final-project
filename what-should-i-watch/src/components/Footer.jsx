import { useNavigate } from "react-router-dom";
// import { getRandomElement } from "../shared/utils";
// import data from "../assets/data/mergedDummyData.json";
import "../styles/NavBar-Footer.css";

const Footer = () => {
  const navigate = useNavigate();
  // let movie = getRandomElement(data);

  const handleRedirect = () => {
    navigate(`/recommendations`);
  };
  return (
    <footer>
      <button className="random-all" onClick={handleRedirect}>
        Surprise Me!
      </button>
    </footer>
  );
};

export default Footer;
