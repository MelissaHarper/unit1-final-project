import { useNavigate } from "react-router-dom";
import "../styles/NavBar-Footer.css";

const Footer = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate(`/recommendations`);
  };
  return (
    <footer>
      <button className="reusable-button" onClick={handleRedirect}>
        Surprise Me!
      </button>
      <div className="box-travel"></div>
    </footer>
  );
};

export default Footer;
