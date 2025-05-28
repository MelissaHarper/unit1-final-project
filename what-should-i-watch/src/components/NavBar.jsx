import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import "../styles/NavBar.css";

function NavBar() {
  return (
    <div className="navbar">
      <div className="leftSide"></div>
      <img className="nav-logo" src={Logo} />
      <div className="rightSide"></div>
      <Link to="/">Home</Link>
      <Link to="/feedback">Feedback</Link>
      <Link to="/about">About</Link>
      <Link to="/selection">Random</Link>
    </div>
  );
}

export default NavBar;
